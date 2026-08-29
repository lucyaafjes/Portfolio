/*
  ============================================================
  PROJECTEN — het overzicht op de "Projecten"-pagina
  ============================================================

  Dit bestand bepaalt welke projecttegels verschijnen. Elk project
  verwijst naar zijn eigen pagina in de map "projecten", waar je de
  foto's en tekst voor dat project toevoegt.

  Elk project is een blokje tussen { } met deze velden:

    title    -> naam van het project (zoals getoond op de tegel)
    category -> categorie, gebruikt voor de filterknoppen. Dit komt
                overeen met de hoofdmapjes in je "Portfolio-projecten"
                map op het bureaublad (Architectuur, Illustratie,
                Visie: onderzoek).
    image    -> omslagfoto die op de tegel in het overzicht staat
    page     -> pad naar de eigen pagina van dit project

  LET OP bij het bewerken:
  - Elk project staat tussen { en }
  - Projecten worden gescheiden door een komma ,
  - Tekst moet tussen aanhalingstekens " " staan
  - Vergeet de komma na elk project niet (behalve het allerlaatste project)

  EEN NIEUW PROJECT TOEVOEGEN — in 4 stappen:

  1. Ga naar de map "projecten" en maak een kopie van een bestaand
     bestand, bijvoorbeeld "fortmond.html". Hernoem de kopie naar
     de naam van je nieuwe project, bijvoorbeeld "mijn-project.html".
  2. Open dat nieuwe bestand en pas de titel, categorie en tekst aan.
     Voeg je eigen foto's toe aan de galerij (uitleg staat bovenin
     dat bestand).
  3. Zet de omslagfoto voor het overzicht in de map "images".
  4. Voeg hieronder een nieuw blokje toe, bijvoorbeeld:

    {
      title: "Mijn nieuwe project",
      category: "Architectuur",
      image: "images/mijn-omslagfoto.jpg",
      page: "projecten/mijn-project.html"
    },

  Zet dit blokje tussen de andere projecten hieronder, binnen de
  vierkante haken [ ]. Sla op en het project verschijnt automatisch
  op de website.
*/

const projects = [
  {
    title: "Fortmond",
    category: "Architectuur",
    image: "images/cover-fortmond.jpg",
    page: "projecten/fortmond.html"
  },
  {
    title: "Het Karwei",
    category: "Architectuur",
    image: "images/cover-placeholder.jpg",
    page: "projecten/het-karwei.html"
  },
  {
    title: "JH",
    category: "Architectuur",
    image: "images/cover-placeholder.jpg",
    page: "projecten/jh.html"
  },
  {
    title: "De Poort",
    category: "Architectuur",
    image: "images/cover-placeholder.jpg",
    page: "projecten/de-poort.html"
  },
  {
    title: "Van Boom naar Bouwen",
    category: "Architectuur",
    image: "images/cover-placeholder.jpg",
    page: "projecten/van-boom-naar-bouwen.html"
  },
  {
    title: "Wijlandje - Cadix",
    category: "Architectuur",
    image: "images/cover-placeholder.jpg",
    page: "projecten/wijlandje-cadix.html"
  },
  {
    title: "PhD Vormgeving",
    category: "Illustratie",
    image: "images/cover-placeholder.jpg",
    page: "projecten/phd-vormgeving.html"
  },
  {
    title: "Keilecafé",
    category: "Visie: onderzoek",
    image: "images/cover-placeholder.jpg",
    page: "projecten/keilecafe.html"
  },
  {
    title: "Space for Sexwerk",
    category: "Visie: onderzoek",
    image: "images/cover-placeholder.jpg",
    page: "projecten/space-for-sexwerk.html"
  }
];

// De bestanden project-1.html t/m project-6.html in de map "projecten"
// zijn oude, niet meer gekoppelde pagina's — die kun je zelf verwijderen
// als je dat wilt (in Finder), of laten staan; ze worden nergens meer
// naar gelinkt.
