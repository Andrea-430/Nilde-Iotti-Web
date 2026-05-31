// Dati per la Timeline della Costituente
const timelineData = [
    {
        date: "2 Giugno 1946",
        title: "Referendum e Suffragio Universale",
        description: "Gli italiani scelgono la Repubblica rispetto alla Monarchia. Per la prima volta a livello nazionale votano anche le donne: vengono elette 21 Madri Costituenti (tra cui Nilde Iotti) su 556 deputati."
    },
    {
        date: "25 Giugno 1946",
        title: "Prima Seduta della Costituente",
        description: "L'Assemblea si riunisce per la prima volta e inizia i lavori per gettare le fondamenta della nuova democrazia. Sarà successivamente nominata la 'Commissione dei 75'."
    },
    {
        date: "Inizio 1947",
        title: "La Commissione dei 75",
        description: "Nilde Iotti lavora attivamente nella Prima Sottocommissione, battendosi per i diritti della famiglia e il principio di parità economica tra uomo e donna nel lavoro."
    },
    {
        date: "22 Dicembre 1947",
        title: "Approvazione della Carta",
        description: "L'Assemblea Costituente approva a scrutinio segreto il testo finale della Costituzione della Repubblica Italiana con una larghissima maggioranza (453 favorevoli su 515 votanti)."
    },
    {
        date: "1 Gennaio 1948",
        title: "Promulgazione ed Entrata in Vigore",
        description: "La Costituzione entra ufficialmente in vigore, segnando la nascita formale dell'ordinamento giuridico e democratico dell'Italia contemporanea."
    }
];

// Dati per l'Archivio delle Citazioni di Nilde Iotti
const quotesData = [
    {
        text: "“La legge da sola non basta. Occorre che cambino i costumi, la mentalità, l'organizzazione stessa della società.”",
        context: "Discorso sull'emancipazione femminile"
    },
    {
        text: "“Io stessa - non ve lo nascondo - ho vissuto l'esperienza dell'Assemblea Costituente come un momento di straordinaria maturazione politica e umana.”",
        context: "Ricordi sui lavori della Carta Fondamentale"
    },
    {
        text: "“La democrazia non è un fatto compiuto, ma un processo di continua liberazione e inclusione sociale.”",
        context: "Discorso di insediamento come Presidente della Camera (1979)"
    }
];

// --- INIZIALIZZAZIONE LOGICA ---

document.addEventListener("DOMContentLoaded", () => {
    initTimeline();
    initQuotes();
});

// Gestione Timeline
function initTimeline() {
    const navContainer = document.getElementById("timeline-nav");
    const displayContainer = document.getElementById("timeline-display");

    // Genera pulsanti di navigazione timeline
    timelineData.forEach((item, index) => {
        const btn = document.createElement("button");
        btn.classList.add("timeline-btn");
        if (index === 0) btn.classList.add("active");
        btn.innerText = item.date;
        btn.addEventListener("click", () => updateTimeline(index, btn));
        navContainer.appendChild(btn);
    });

    // Mostra il primo elemento di default
    renderTimelineContent(0);
}

function updateTimeline(index, clickedBtn) {
    // Rimuove la classe attiva da tutti i pulsanti
    document.querySelectorAll(".timeline-btn").forEach(btn => btn.classList.remove("active"));
    // Aggiunge al pulsante cliccato
    clickedBtn.classList.add("active");
    // Aggiorna il testo
    renderTimelineContent(index);
}

function renderTimelineContent(index) {
    const displayContainer = document.getElementById("timeline-display");
    const data = timelineData[index];
    
    // Reset dell'animazione CSS forzando il reflow
    displayContainer.style.animation = 'none';
    displayContainer.offsetHeight; 
    displayContainer.style.animation = null;

    displayContainer.innerHTML = `
        <h3>${data.title}</h3>
        <p style="color: var(--accent-color); font-weight: bold; margin-top: 0.3rem;">${data.date}</p>
        <p style="margin-top: 0.8rem;">${data.description}</p>
    `;
}

// Gestione Archivio Citazioni (Slider)
function initQuotes() {
    const quoteText = document.getElementById("quote-text");
    const quoteContext = document.getElementById("quote-context");
    const nextBtn = document.getElementById("next-quote");
    let currentQuoteIndex = 0;

    nextBtn.addEventListener("click", () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotesData.length;
        quoteText.innerText = quotesData[currentQuoteIndex].text;
        quoteContext.innerText = `— ${quotesData[currentQuoteIndex].context}`;
    });
}