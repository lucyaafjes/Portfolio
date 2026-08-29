# Portfolio website

## Bestanden

| Bestand / map | Waarvoor |
|---|---|
| `index.html` | De hele site (Home, Projecten, Over mij, Contact) — één bestand, wisselt van "pagina" als je op een menu-link klikt |
| `projects.js` | **Alles over je projecten staat hier**: titel, categorie, omslagfoto, tekst én foto's van elk project |
| `projecten/project.html` | Eén leeg sjabloon voor alle projectpagina's — dit hoef je nooit te openen, het vult zichzelf automatisch met de juiste inhoud uit `projects.js` |
| `style.css` | Kleuren, lettertype, opmaak |
| `script.js` | Zorgt dat projecten automatisch verschijnen en dat de pagina's/het menu werken (hoef je niet aan te passen) |
| `images/` | Omslagfoto's voor het projectoverzicht |
| `images/projecten/` | Foto's die je in de projectpagina's gebruikt |

## 1. Eerst lokaal bekijken

Dubbelklik op `index.html` — deze opent in je browser. Klik op een
project om de eigen pagina te zien.

## 2. Tekst en foto's van een project aanpassen — het enige bestand dat je nodig hebt

Open **`projects.js`** in een teksteditor (Kladblok, TextEdit, of gratis
[VS Code](https://code.visualstudio.com)). Zoek het project dat je wilt
aanpassen — elk project is een blokje tussen `{ }` met deze velden:

```js
{
  slug: "fortmond",
  title: "Fortmond",
  category: "Architectuur",
  cover: "images/cover-fortmond.jpg",
  intro: "Korte omschrijving — bv. de periode of opdrachtgever.",
  text: [
    "Eerste alinea van je projectbeschrijving.",
    "Tweede alinea, of verwijder deze regel als je er maar één wilt."
  ],
  photos: [
    { src: "images/projecten/fortmond-1.jpg", alt: "Aanzicht Fortmond", wide: true },
    { src: "images/projecten/fortmond-2.jpg", alt: "Woonkamer Fortmond", wide: false }
  ]
}
```

- **`title`, `category`, `intro`** → gewoon tekst tussen aanhalingstekens, pas aan wat je wilt.
- **`text`** → een lijstje van alinea's. Voeg een regel toe voor een nieuwe alinea (vergeet de komma niet), of verwijder er een.
- **`photos`** → een lijstje van foto's. Voeg een regel toe om een foto toe te voegen, verwijder een regel om er een weg te halen, of verander de volgorde door de regels te verslepen. Zet `wide: true` om een foto over de volle breedte te tonen, of `wide: false` voor normale grootte.
- **`cover`** → de omslagfoto die op de tegel in het overzicht staat.

Zet je foto-bestanden zelf in de map `images/projecten` (en je omslagfoto
in `images`), gebruik dezelfde bestandsnaam bij `src`/`cover`. Sla
`projects.js` op en ververs `index.html` — alles verschijnt automatisch,
zowel op de tegel als op de eigen projectpagina.

Je hoeft **nooit** een bestand in de map `projecten` te openen — die
pagina vult zichzelf.

## 3. Een heel nieuw project toevoegen

Kopieer een compleet blokje (van `{` tot en met de bijbehorende `}`) in
`projects.js`, plak het tussen twee andere projecten, en pas alle velden
aan — geef het een unieke `slug` (geen spaties, bijvoorbeeld
`mijn-project`). Zet je foto's in `images/projecten` en je omslagfoto in
`images`. Sla op — het project verschijnt automatisch, inclusief
filterknop en "vorig/volgend project"-navigatie.

## 4. Werken vanuit je map "Portfolio-projecten"

Op je bureaublad staat de map **Portfolio-projecten**, met submapjes per
categorie en daarbinnen een mapje per project. Zet daar foto's en
tekstfragmenten in en laat het weten in het gesprek met Claude — dan
wordt het voor je verwerkt in `projects.js` zoals hierboven beschreven.

## 5. Overige teksten en instellingen

- **Naam, tagline, over-mij tekst, contactgegevens, social media links** →
  pas je aan in `index.html`.
- **Profielfoto** → vervang `images/profile-lucy.jpg` door je eigen foto
  (zelfde bestandsnaam, of pas de naam aan in `index.html`).
- **Kleuren en lettertype** → helemaal bovenin `style.css` staat een
  blok `:root { ... }` met kleuren zoals `--accent-crimson` (rood) en
  `--accent-violet` (paars), en het lettertype bij `--font-editorial` /
  `--font-ui`. Verander de kleurcodes om de hele site een andere kleur
  te geven.

Je hoeft nooit `script.js` aan te passen, tenzij je functionaliteit wilt
toevoegen.

## Opruimen (optioneel)

De map `projecten` bevat nog oude, niet meer gebruikte bestanden
(`fortmond.html`, `het-karwei.html`, `project-1.html` t/m `project-6.html`,
enz.) van vóór deze aanpassing. Die mag je zelf verwijderen in Finder —
alleen `projecten/project.html` wordt nog gebruikt.
