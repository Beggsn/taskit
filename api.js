const http = require('http');
const querystring = require('querystring');
const latex2svg = require('./api/latex2svg');
const rebuild = require('./api/rebuild');


// Fragt nach dem Port aus den Umgebungsvariablen oder gibt den Standardwert 3000 an
const port = process.env.PORT || 3000;
const server = http.createServer().listen(port);

// richtet einen HTTP-Server ein
server.on('request', async function (req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryStringParameters = url.search && querystring.parse(url.search.slice(1));
    // Erzeugt ein mit AWS Lambda kompatibles Request-Objekt
    const request = {
      queryStringParameters,
      path: url.pathname,
      httpMethod: req.method,
      headers: req.headers,
      body: req.body
    }
    // erzeugt eine Default Antwort
    let response = {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({error: "Die Seite wurde nicht gefunden"})
    }

    // erzeugt einen schlanken Router
    try {
      switch (url.pathname) {
        case '/latex2svg':
          response = await latex2svg.handler(request);
          break;
        case '/rebuild':
          response = await rebuild.handler(request);
          break;          
      }
    //   ordentlicher Umgang mit Exceptions
    } catch(e) {
      response.statusCode = 500;
      console.log(e);
      response.body = JSON.stringify(e);
    }

  response.headers = response.headers || {};
    // Ermöglicht einen herkunftsübergreifenden Zugang, um zu verhindern, 
    // dass Heroku von unserer Website aus blockiert wird
  response.headers['Access-Control-Allow-Origin'] = '*';
    //   gibt die Antwort an den Kunden zurück
  res.writeHead(response.statusCode, response.headers);
  res.end(response.body);
});

console.log(`Abhören des Ports ${port}`);