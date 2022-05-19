import Fuse from 'fuse.js'
// erstellt eine Modulvariable zur Speicherung des in allen Funktionen zu verwendenden Index
let index = null;
const MAX_SEARCH_RESULTS = 5;

export default {
    async init() {
      try {
          // verwendet fetch() zum Herunterladen der Indexdatei mit dem gesamten Inhalt der Website
        const response = await window.fetch(BASE_URL + "/index.json");
        if (!response.ok) {
          this.removeSearch();
          return;
        }
        // ruft die response-Daten von JSON als ein Objekt ab
        let data = await response.json();
        // erzeugt einen Fuse.js-Index
        index = new Fuse(data, {
          keys: [{
            // fügt Titel mit einem Gewicht von 20 hinzu
            name: 'title',
            weight: 20
          }, {
            name: 'tag',
            weight: 5
          }, {
            // wenn nicht angegeben, wird das Gewicht als 1 behandelt.
            name: 'content'
          }]
        });
        // fügt das Input-Ereignis hinzu
        document.addEventListener("input", this.showResults);
      } catch (e) {
        this.removeSearch();
      }
    },

    showResults(event) {
      const searchBox = document.querySelector("#search input");
      if (event.target !== searchBox) {
        return;
      }
      const result = document.querySelector("#search div");
      if (searchBox.value.length > 0) {
        const results = index.search(searchBox.value);

        // innerHTML ersetzt den Inhalt der Auswahlliste. 
        // Wir können stattdessen vorhandene DOM-Elemente aktualisieren, 
        // wenn die Leistung ein Aspekt ist
        result.innerHTML = results
           // begrenzt die Anzahl der Suchergebnisse auf MAX_SEARCH_RESULTS
          .slice(0, MAX_SEARCH_RESULTS)
          // Bietet ein umfangreiches Dropdown-Menü mit einem Bild und begleitendem Text
          .map(x => `<a href="${x.item.url}">
            <img src="${x.item.cover || ""}" width="40" height="40">
            <h3>${x.item.title}</h3>
            <span>${x.item.content.substr(0,40)}</span>
          </a>`)
          .join("");
      } else {
        
        result.innerHTML = '';
      }
    },
  
    removeSearch() {
      document.querySelector("#search")?.remove();
    }
  }