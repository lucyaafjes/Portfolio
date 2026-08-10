# Jouw portfolio website

Dit is een volledig zelfstandige website: alleen HTML, CSS en JavaScript,
zonder builder, template-dienst of maandelijkse kosten. De bestanden zijn
van jou — je kunt ze overal hosten of zelfs gewoon op je eigen computer
laten staan.

## Bestanden

| Bestand / map | Waarvoor |
|---|---|
| `index.html` | De homepage (hero, projectoverzicht, over mij, contact) |
| `projects.js` | **De lijst van projecttegels op de homepage** — titel, categorie, omslagfoto, link naar de eigen pagina |
| `projecten/` | **Eén los HTML-bestand per project** — hier zet je de foto's en uitgebreide tekst van elk project |
| `style.css` | Kleuren, lettertype, opmaak |
| `script.js` | Zorgt dat projecten automatisch op de homepage verschijnen en dat het mobiele menu werkt (hoef je niet aan te passen) |
| `images/` | Omslagfoto's voor de homepage |
| `images/projecten/` | Foto's die je in de losse projectpagina's gebruikt |

Elk project heeft dus twee plekken: een tegel op de homepage (uit
`projects.js`) én een eigen pagina met alle foto's en tekst (in de map
`projecten`). Die twee zijn aan elkaar gekoppeld via het veld `page`.

## 1. Eerst lokaal bekijken

Dubbelklik op `index.html` — deze opent in je browser. Klik op een
project om de eigen pagina te zien.

## 2. Een nieuw project toevoegen

**Stap 1 — maak de projectpagina.**
Ga naar de map `projecten`, maak een kopie van `project-1.html` en
hernoem die naar bijvoorbeeld `project-7.html`. Open het nieuwe bestand
in een teksteditor (Kladblok, TextEdit, of gratis [VS Code](https://code.visualstudio.com)).
Bovenin dat bestand staat uitgebreide uitleg, kort samengevat:

- Pas de titel, categorie en teksten aan.
- Zet je eigen foto's in `images/projecten` en voeg voor elke foto een
  regel toe zoals:
  ```html
  <img src="../images/projecten/mijn-foto.jpg" alt="Omschrijving van de foto">
  ```
  Je kunt zoveel foto's toevoegen als je wilt door deze regel te
  herhalen. Voeg `class="wide"` toe om een foto extra breed te tonen.

**Stap 2 — voeg de tegel toe aan de homepage.**
Open `projects.js` en kopieer een bestaand blokje tussen `{ }`:

```js
{
  title: "Mijn nieuwe project",
  category: "Fotografie",
  image: "images/mijn-omslagfoto.jpg",
  page: "projecten/project-7.html"
},
```

Zet je omslagfoto (de foto die op de tegel in het overzicht staat) in
de map `images`. Sla beide bestanden op en ververs `index.html` — het
nieuwe project verschijnt automatisch, inclusief filterknop, en is
klikbaar naar de eigen pagina.

## 3. Teksten en foto's aanpassen

- **Naam, tagline, over-mij tekst, contactgegevens, social media links** →
  pas je aan in `index.html`. Zoek de tekst die je wilt wijzigen (bv.
  "Jouw Naam") en typ je eigen tekst erover.
- **Tekst en foto's van een specifiek project** → open het bijbehorende
  bestand in de map `projecten` (bv. `project-3.html`).
- **Profielfoto** → vervang `images/profile-placeholder.svg` door je
  eigen foto (zelfde bestandsnaam, of pas de naam aan in `index.html`
  bij `<img src="images/...">`).
- **Kleuren en lettertype** → helemaal bovenin `style.css` staat een
  blok met `--color-accent`, `--color-bg`, etc. Verander de kleurcodes
  om de hele site een andere kleur te geven.

Je hoeft nooit `script.js` aan te passen, tenzij je functionaliteit wilt
toevoegen.

## 4. Gratis hosten — twee makkelijke opties

### Optie A: GitHub Pages (aanbevolen, volledig gratis)

1. Maak een gratis account op [github.com](https://github.com).
2. Maak een nieuwe **public repository**, bijvoorbeeld genaamd
   `portfolio`.
3. Upload alle bestanden uit deze map (via "Add file" → "Upload files"
   in de browser — geen command line nodig).
4. Ga naar **Settings → Pages** in die repository.
5. Kies bij "Branch" de optie `main` en map `/ (root)`, klik Save.
6. Na een paar minuten is je site live op
   `https://jouwgebruikersnaam.github.io/portfolio`.

Voortaan: elke keer dat je een bestand aanpast en opnieuw upload naar
GitHub, wordt de site automatisch bijgewerkt.

### Optie B: Netlify (ook gratis, drag-and-drop)

1. Ga naar [app.netlify.com/drop](https://app.netlify.com/drop).
2. Sleep de hele `portfolio`-map in het venster.
3. Klaar — je krijgt direct een live link.
4. Voor updates: sleep de map opnieuw, of koppel Netlify aan een
   GitHub-repository voor automatische updates.

Beide opties zijn gratis voor persoonlijke portfolio's, geven je een
eigen link, en je kunt er later eventueel een eigen domeinnaam aan
koppelen.

## Basisbegrippen die handig zijn om te kennen

- **HTML** = de inhoud/structuur (tekst, afbeeldingen, koppen).
- **CSS** = het uiterlijk (kleuren, lettertypes, afstanden).
- **JavaScript** = het gedrag (bv. het automatisch tonen van projecten,
  het open-/dichtklappen van het menu).

Je hoeft deze niet volledig te leren om deze site te onderhouden — voor
90% van de aanpassingen (nieuwe projecten, tekst, foto's, kleuren) kopieer
je gewoon een bestaand voorbeeld en pas je de tekst aan.
