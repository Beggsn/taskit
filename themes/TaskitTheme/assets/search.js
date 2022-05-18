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
        // nur zur Fehlersuche
        console.log(data);
      } catch (e) {
        this.removeSearch();
      }
    },
  
    removeSearch() {
      document.querySelector("#search")?.remove();
    }
  }