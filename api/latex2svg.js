// LaTeX in SVG umwandeln 
// importiert die MathJax Abhängigkeit
const MathjaxModule = require("mathjax");

let MathJax = null;
module.exports = {
    // Funktion zur Bearbeitung von Aufrufen an den API-Endpunkt der Cloud-Funktion.
  async handler(event, context) {
    if (
      !event.queryStringParameters ||
      // verbietet ein leeres LATEX2SVG_PASSWORT
      !process.env.LATEX2SVG_PASSWORD ||
      event.queryStringParameters.password !== process.env.LATEX2SVG_PASSWORD
    ) {
      return {
          // Verwendet HTTP 401, wenn das Kennwort falsch ist. 
          // Wenn das Kennwort korrekt ist und der Benutzer immer noch keinen Zugang hat,
          // wäre HTTP 403 der richtige Fehlercode.
        statusCode: 401,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Zugang verweigert.",
        }),
      };
    }
    // stellt sicher, dass der Parameter tex verfügbar ist
    if (!event.queryStringParameters || !event.queryStringParameters.tex) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Der erforderliche Parameter `tex` wurde nicht geliefert.",
        }),
      };
    }
    // initialisiert MathJax nur bei Bedarf. Es nimmt die Eingabe als LaTeX und gibt SVG aus.
    if (!MathJax) {
      MathJax = await MathjaxModule.init({
        loader: { load: ["input/tex", "output/svg"] },
      });
    }
    // übergibt alle Parameter aus dem Query-String an MathJax
    const svg = MathJax.tex2svg(event.queryStringParameters.tex, {
      display: event.queryStringParameters.display
    });

    // gibt den Statuscode 200 mit den Ergebnissen als JSON zurück
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: MathJax.startup.adaptor.outerHTML(svg),
      }),
    };
  },
};

// Wir können diesen Code in einer FaaS-Lösung wie AWS Lambda oder Netlify Functions bereitstellen. 
// Für PaaS-Lösungen ist ein wenig mehr Arbeit erforderlich.