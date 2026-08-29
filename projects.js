/*
  ============================================================
  PROJECTEN — alle informatie voor al je projecten staat hier
  ============================================================

  Dit ene bestand bepaalt alles: de tegels op de Projecten-pagina
  ÉN de inhoud van elke losse projectpagina. Je hoeft dus geen HTML
  meer te openen om een project aan te passen of toe te voegen — dit
  bestand is genoeg.

  Elk project is een blokje tussen { } met deze velden:

    slug     -> een korte, unieke naam zonder spaties (gebruikt in de
                link naar de projectpagina, bv. "fortmond")
    title    -> naam van het project (zoals getoond op de tegel en
                bovenaan de projectpagina)
    category -> categorie, gebruikt voor de filterknoppen. Gebruik
                dezelfde naam als je mapje in "Portfolio-projecten"
                (Architectuur, Illustratie, Visie: onderzoek), of
                verzin een nieuwe categorie.
    cover    -> omslagfoto die op de tegel in het overzicht staat
    intro    -> één korte zin bovenaan de projectpagina (bv. de
                periode of opdrachtgever)
    text     -> de uitgebreide tekst, als een lijstje van alinea's.
                Voeg een regel toe voor een nieuwe alinea, of
                verwijder er een.
    photos   -> de foto's in de galerij, als een lijstje. Elke foto
                heeft:
                  src  -> pad naar de foto (in de map "images/projecten")
                  alt  -> korte omschrijving van de foto (voor
                          toegankelijkheid en zoekmachines)
                  wide -> true = foto over de volle breedte tonen,
                          false = normale grootte

  LET OP bij het bewerken:
  - Elk project staat tussen { en }
  - Projecten worden gescheiden door een komma ,
  - Tekst moet tussen aanhalingstekens " " staan
  - Vergeet de komma na elk project/alinea/foto niet (behalve de
    allerlaatste van het lijstje)

  EEN NIEUW PROJECT TOEVOEGEN:
  Kopieer een heel blokje hieronder (van { tot en met de }), plak het
  tussen twee andere projecten, en pas alle velden aan. Zet je foto's
  in de map "images/projecten" en je omslagfoto in "images". Sla op —
  het project verschijnt automatisch, inclusief filterknop en eigen
  pagina, met "vorig/volgend project"-navigatie.

  Je hoeft nooit een bestand in de map "projecten" te openen of aan te
  maken — die pagina (project.html) is een leeg "sjabloon" dat de
  inhoud hieronder automatisch inleest op basis van de "slug" in de
  link.
*/

const projects = [
  {
    slug: "fortmond",
    title: "Fortmond",
    category: "Architectuur",
    cover: "images/cover-fortmond.jpg",
    intro: "Nog tijdens mijn afstuderen kreeg ik de opdracht van mijn ouders om hun voor-altijd-huis te ontwerpen. Gelegen in de uiterwaarden van de IJssel ligt het prachtige Fortmond. Waar vroeger bedrijvig baksteen met klei uit de IJssel werd gebakken, rijst de fabrieksuitlaat nu boven een beschermd natuurgebied met enkele huizen. Een renovatie van de oude boerderij volgde, met een vervolgopdracht om de schuur ook zelf te verbouwen. Zie hiervoor het resultaat bij het project de jeugdherberg.",
photos: [
      { src: "images/projecten/fortmond-1.jpg", alt: "Aanzicht Fortmond", wide: true },
    text: [
      "Bij aankoop was de woning zo onlogisch ingedeeld, het mooiste plekje van het huis had een badkamer met klein raampje. Dat hebben we radicaal veranderd.",
      "In een omgeving die al zoveel geeft, mag er ook een ontwerp met kleur en vorm tegenover staan. Daarnaast kan je juist ook de architectuur gebruiken als omlijsting van deze natuur en vergezichten.",
    ],

    photos: [
      { src: "images/projecten/fortmond-6.jpg", alt: "Beschilderd plafond met bloemmotief boven de erker, Fortmond", wide: false },
      { src: "images/projecten/fortmond-3.jpg", alt: "Badkamer Fortmond", wide: false },
      { src: "images/projecten/fortmond-5.jpg", alt: "Blik vanaf de trap op de woonkamer met groene bank en kleurrijke gordijnen, Fortmond", wide: false },
    quote: {
      text: "Ee opdracht was vooral “er mag geen muur wit zijn”, dat is uiteindelijk toch niet helemaal gelukt. Maar er mist zeker geen kleur.",
      attribution: "Over de styling"
    },
    photos: [
      { src: "images/projecten/fortmond-4.jpg", alt: "Uitzicht Fortmond", wide: true }
    ]
  },
  {
    slug: "het-karwei",
    title: "Het Karwei",
    category: "Architectuur",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van Het Karwei volgen nog", wide: true }
    ]
  },
  {
    slug: "jh",
    title: "JH",
    category: "Architectuur",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van JH volgen nog", wide: true }
    ]
  },
  {
    slug: "de-poort",
    title: "De Poort",
    category: "Architectuur",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van De Poort volgen nog", wide: true }
    ]
  },
  {
    slug: "van-boom-naar-bouwen",
    title: "Van Boom naar Bouwen",
    category: "Architectuur",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van Van Boom naar Bouwen volgen nog", wide: true }
    ]
  },
  {
    slug: "wijlandje-cadix",
    title: "Wijlandje - Cadix",
    category: "Architectuur",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van Wijlandje - Cadix volgen nog", wide: true }
    ]
  },
  {
    slug: "phd-vormgeving",
    title: "PhD Vormgeving",
    category: "Illustratie",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van PhD Vormgeving volgen nog", wide: true }
    ]
  },
  {
    slug: "keilecafe",
    title: "Keilecafé",
    category: "Visie: onderzoek",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van Keilecafé volgen nog", wide: true }
    ]
  },
  {
    slug: "space-for-sexwerk",
    title: "Space for Sexwerk",
    category: "Visie: onderzoek",
    cover: "images/cover-placeholder.jpg",
    intro: "Korte omschrijving van dit project: wat was de vraag, wat heb je gemaakt, en voor wie.",
    text: [
      "Vertel hier uitgebreider over dit project. Wat was de opdracht, hoe ben je te werk gegaan, en welke keuzes heb je gemaakt?",
      "Voeg gerust een tweede alinea toe over het eindresultaat of wat je hebt geleerd tijdens dit project."
    ],
    photos: [
      { src: "images/cover-placeholder.jpg", alt: "Foto's van Space for Sexwerk volgen nog", wide: true }
    ]
  }
];

// De oude losse bestanden (fortmond.html, het-karwei.html, project-1.html
// t/m project-6.html, enz.) in de map "projecten" worden niet meer
// gebruikt — alles loopt nu via "projecten/project.html" + dit bestand.
// Je mag die oude bestanden zelf verwijderen in Finder als je wilt
// opruimen, maar het hoeft niet.
