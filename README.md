<div align="center">

  <img src="./assets/img/logo.png" alt="Logo Counter.js" width="160" height="160">

  # COUNTER.js

  **Un'applicazione web interattiva e persistente per creare, gestire e monitorare più contatori personalizzati contemporaneamente.**

  [Prova la Demo Live](https://antoniosilvestre.altervista.org) · [Segnala un Bug](https://github.com/silvestreantonio/Counter/issues)

</div>

---

## Il Progetto

**COUNTER.js** è un'applicazione web sviluppata in **JavaScript Vanilla (ES6+)** e **Tailwind CSS**, progettata per offrire uno strumento rapido, intuitivo e moderno per tenere traccia di conteggi multipli (allenamenti, abitudini quotidiane, punteggi, inventario, ecc.).

Il progetto è articolato in una **landing page di benvenuto** (`index.html`) e nell'**area operativa dei contatori** (`counter.html`), dove l'intera interfaccia delle card viene generata dinamicamente tramite **manipolazione pura del DOM**, separando in modo modulare la gestione dello stato, il rendering grafico e la persistenza dei dati nel browser.

### Screenshot

| Light Mode | Dark Mode |
| :---: | :---: |
| ![Screenshot Light Mode](./assets/img/light-mode.png) | ![Screenshot Dark Mode](./assets/img/dark-mode.png) |

---

## Funzionalità

- **Landing Page Dedicata**: Schermata di benvenuto minimale (`index.html`) con accesso diretto all'area contatori (`counter.html`).
- **Creazione Multi-Istanza Dinamica**: Aggiungi infiniti contatori personalizzati assegnando a ciascuno un titolo specifico tramite pannello a scomparsa.
- **Validazione degli Input**: Controllo automatico per impedire la creazione di contatori con titoli vuoti o composti da soli spazi (`trim()`).
- **Controllo Completo del Valore**:
  - **Incremento (`+`)** e **Decremento (`−`)** con blocco dei valori negativi (il contatore non scende sotto lo `0`).
  - **Reset Rapido**: Riporta istantaneamente a `0` il singolo contatore.
  - **Eliminazione Definitiva**: Rimuove il contatore sia dal DOM che dallo storage.
- **Persistenza Dati (`localStorage`)**: Ogni modifica (creazione, aggiornamento del valore, reset o rimozione) viene sincronizzata in tempo reale con il `localStorage`, mantenendo tutti i contatori intatti anche al ricaricamento o alla chiusura del browser.
- **Dark Mode Persistente**: Cambio tema fluido tra modalità Chiara e Scura su entrambe le pagine, con salvataggio automatico della preferenza dell'utente nel `localStorage`.
- **Design Responsive**: Interfaccia adattabile a dispositivi desktop, tablet e smartphone con barra di navigazione sticky.

---

## Tecnologie Utilizzate

- **HTML5** — Struttura semantica multi-pagina (`<nav>`, `<header>`, `<main>`, `<footer>`, favicon e collegamenti modulari).
- **Tailwind CSS** — Styling utility-first, transizioni, formattazione numerica `tabular-nums` e supporto nativo al tema `dark`.
- **JavaScript (ES6+)** — Manipolazione dinamica del DOM, Event Delegation, programmazione modulare e gestione `localStorage`.

---

## Struttura del Progetto

    Counter/
    ├── assets/
    │   ├── css/
    │   │   ├── input.css           # Direttive sorgente Tailwind CSS
    │   │   └── output.css          # Foglio di stile Tailwind CSS compilato
    │   ├── img/
    │   │   ├── dark-mode.png       # Screenshot interfaccia Dark Mode
    │   │   ├── light-mode.png      # Screenshot interfaccia Light Mode
    │   │   └── logo.png            # Logo / Favicon dell'applicazione
    │   └── js/
    │       ├── counter.js          # Logica CRUD, manipolazione DOM e sincronizzazione localStorage
    │       └── darkMode.js         # Gestione e persistenza del tema Light/Dark
    ├── node_modules/               # Dipendenze locali di sviluppo (escluse via .gitignore)
    ├── .gitignore                  # Esclusione di node_modules e file temporanei
    ├── counter.html                # Pagina applicativa dei contatori
    ├── index.html                  # Landing page di benvenuto
    ├── package-lock.json           # Lockfile delle dipendenze npm
    ├── package.json                # Configurazione progetto e script Tailwind CSS
    └── README.md                   # Documentazione del progetto

---

## Utilizzo

Non è necessaria alcuna installazione: l'applicazione è già online e pronta all'uso direttamente dal browser!

**[Apri COUNTER.js](https://antoniosilvestre.altervista.org)**

*(Opzionale: per ispezionare o modificare il codice sorgente in locale, clona il repository, esegui `npm install` per installare Tailwind CSS e apri `index.html` nel browser.)*

---

## Autore

**Antonio Silvestre**

- GitHub: [@silvestreantonio](https://github.com/silvestreantonio)
- LinkedIn: [Antonio Silvestre](https://www.linkedin.com/in/silvestreantonio99)

---

<div align="center">
  Progetto realizzato durante il master in AI e Agenti AI per il Business di start2impact
</div>
