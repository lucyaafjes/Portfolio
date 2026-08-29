# Portfolio website

## Bestanden

| Bestand / map | Waarvoor |
|---|---|
| `index.html` | De hele site (Home, Projecten, Over mij, Contact) — één bestand, wisselt van "pagina" als je op een menu-link klikt |
| `projects.js` | **De lijst van projecttegels** — titel, categorie, omslagfoto, link naar de eigen pagina |
| `projecten/` | **Eén los HTML-bestand per project** — hier zet je de foto's en uitgebreide tekst van elk project |
| `style.css` | Kleuren, lettertype, opmaak |
| `script.js` | Zorgt dat projecten automatisch verschijnen, dat de "pagina's" wisselen en dat het mobiele menu werkt (hoef je niet aan te passen) |
| `images/` | Omslagfoto's voor het projectoverzicht |
| `images/projecten/` | Foto's die je in de losse projectpagina's gebruikt |

Elk project heeft twee plekken: een tegel op de Projecten-pagina (uit
`projects.js`) én een eigen pagina met alle foto's en tekst (in de map
`projecten`). Die twee zijn aan elkaar gekoppeld via het veld `page`.

## 1. Eerst lokaal bekijken

Dubbelklik op `index.html` — deze opent in je browser. Klik op een
project om de eigen pagina te zien.

## 2. Werken vanuit je map "Portfolio-projecten"

Op je bureaublad staat de map **Portfolio-projecten**, met daarin
submapjes per categorie (Architectuur, Illustratie, Visie: onderzoek)
en daarbinnen weer een mapje per project. Dit is de makkelijkste manier
om nieuw materiaal aan te leveren:

- Zet foto's van een project in het bijbehorende mapje.
- Zet tekstfragmenten erbij (bv. als los tekstbestand, of stuur ze door
  in het gesprek met Claude).
- Laat Claude weten wanneer een mapje compleet is, dan wordt het
  verwerkt in de bijbehorende projectpagina en het overzicht.

Je kunt dit ook zelf handmatig doen — zie hieronder.

## 3. Zelf een nieuw project toevoegen

**Stap 1 — maak de projectpagina.**
Ga naar de map `projecten`, maak een kopie van bijvoorbeeld
`fortmond.html` en hernoem die naar de naam van je project (bv.
`mijn-project.html`). Open het nieuwe bestand in een teksteditor
(Kladblok, TextEdit, of gratis [VS Code](https://code.visualstudio.com))
en pas aan:

- Titel, categorie en teksten (`project-page-category`, `<h1>`,
  `project-page-intro`, de alinea's in `project-page-body`).
- De foto's: zet je eigen foto's in `images/projecten` en voeg voor
  elke foto een regel toe zoals:
  ```html
  <img src="../images/projecten/mijn-foto.jpg" alt="Omschrijving van de foto">
  ```
  Je kunt zoveel foto's toevoegen als je wilt door deze regel te
  herhalen. Voeg `class="wide"` toe om een foto extra breed te tonen.

**Stap 2 — voeg de tegel toe aan het overzicht.**
Open `projects.js` en kopieer een bestaand blokje tussen `{ }`:

```js
{
  title: "Mijn nieuwe project",
  category: "Architectuur",
  image: "images/mijn-omslagfoto.jpg",
  page: "projecten/mijn-project.html"
},
```

De `category` bepaalt bij welke filterknop het project verschijnt op
de Projecten-pagina — gebruik dezelfde naam als je mapje in
"Portfolio-projecten" (Architectuur, Illustratie, of Visie: onderzoek),
of verzin een nieuwe categorie als je die nog niet hebt.

Zet je omslagfoto (de foto die op de tegel in het overzicht staat) in
de map `images`. Sla beide bestanden op en ververs `index.html` — het
nieuwe project verschijnt automatisch, inclusief filterknop, en is
klikbaar naar de eigen pagina.

## 4. Teksten en foto's aanpassen

- **Naam, tagline, over-mij tekst, contactgegevens, social media links** →
  pas je aan in `index.html`.
- **Tekst en foto's van een specifiek project** → open het bijbehorende
  bestand in de map `projecten` (bv. `projecten/fortmond.html`).
- **Profielfoto** → vervang `images/profile-lucy.jpg` door je eigen
  foto (zelfde bestandsnaam, of pas de naam aan in `index.html`).
- **Kleuren en lettertype** → helemaal bovenin `style.css` staat een
  blok `:root { ... }` met kleuren zoals `--accent-crimson` (rood) en
  `--accent-violet` (paars) en het lettertype bij `--font-editorial` /
  `--font-ui`. Verander de kleurcodes om de hele site een andere kleur
  te geven.

Je hoeft nooit `script.js` aan te passen, tenzij je functionaliteit wilt
toevoegen.
