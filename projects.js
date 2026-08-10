/*
  ============================================================
  PROJECTEN — het overzicht op de homepage
  ============================================================

  Dit bestand bepaalt welke projecttegels op de homepage
  verschijnen. Elk project verwijst naar zijn eigen pagina in de
  map "projecten", waar je de foto's en tekst voor dat project
  toevoegt.

  Elk project is een blokje tussen { } met deze velden:

    title    -> naam van het project (zoals getoond op de tegel)
    category -> categorie, gebruikt voor de filterknoppen
    image    -> omslagfoto die op de tegel in het overzicht staat
    page     -> pad naar de eigen pagina van dit project

  LET OP bij het bewerken:
  - Elk project staat tussen { en }
  - Projecten worden gescheiden door een komma ,
  - Tekst moet tussen aanhalingstekens " " staan
  - Vergeet de komma na elk project niet (behalve het allerlaatste project)

  EEN NIEUW PROJECT TOEVOEGEN — in 4 stappen:

  1. Ga naar de map "projecten" en maak een kopie van een bestaand
     bestand, bijvoorbeeld "project-1.html". Hernoem de kopie naar
     bijvoorbeeld "project-7.html".
  2. Open dat nieuwe bestand en pas de titel, categorie en tekst aan.
     Voeg je eigen foto's toe aan de galerij (uitleg staat bovenin
     dat bestand).
  3. Zet de omslagfoto voor het overzicht in de map "images".
  4. Voeg hieronder een nieuw blokje toe, bijvoorbeeld:

    {
      title: "Mijn nieuwe project",
      category: "Fotografie",
      image: "images/mijn-omslagfoto.jpg",
      page: "projecten/project-7.html"
    },

  Zet dit blokje tussen de andere projecten hieronder, binnen de
  vierkante haken [ ]. Sla op en het project verschijnt automatisch
  op de homepage.
*/

const projects = [
  {
    title: "Project Een",
    category: "Ontwerp",
    image: "images/project-placeholder-1.svg",
    page: "projecten/project-1.html"
  },
  {
    title: "Project Twee",
    category: "Illustratie",
    image: "images/project-placeholder-2.svg",
    page: "projecten/project-2.html"
  },
  {
    title: "Project Drie",
    category: "Fotografie",
    image: "images/project-placeholder-3.svg",
    page: "projecten/project-3.html"
  },
  {
    title: "Project Vier",
    category: "Ontwerp",
    image: "images/project-placeholder-4.svg",
    page: "projecten/project-4.html"
  },
  {
    title: "Project Vijf",
    category: "Branding",
    image: "images/project-placeholder-5.svg",
    page: "projecten/project-5.html"
  },
  {
    title: "Project Zes",
    category: "Illustratie",
    image: "images/project-placeholder-6.svg",
    page: "projecten/project-6.html"
  }
];
