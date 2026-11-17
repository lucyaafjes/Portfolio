# Werken met Claude in deze map

Dit is de portfolio-website van **Lucy Aafjes**, architectonisch ontwerper en
illustrator uit Rotterdam (live op lucyaafjes.nl). Claude werkt hier als
**hoofd-agent**: het leest de opdracht, maakt een plan en geeft deelwerk aan de
sub-agents in `.claude/agents/`.

## Wie, wat, hoe

- **Vakgebied:** architectuur, illustratie en onderzoek ("Visie: onderzoek").
- **Kernzin:** "Elk ontwerp begint bij het narratief van de gebruiker, hoe
  kunnen we onze omgeving vormgeven met oog voor detail, materiaal en kleur."
- **Taal:** Nederlands, tenzij anders gevraagd. Engels alleen op verzoek.

## Tone of voice

- Rustig, precies en persoonlijk, in de ik-vorm. Geen marketingtaal,
  geen superlatieven ("uniek", "innovatief", "baanbrekend").
- Concreet over plek, gebruik, materiaal en proces. Liever één goed
  gekozen detail dan een opsomming.
- Korte alinea's. Geen emoji op de website; op social hooguit spaarzaam.
- Nooit feiten verzinnen (jaartallen, opdrachtgevers, m², prijzen). Ontbreekt
  iets, zet dan `[INVULLEN: …]` en vraag het na.

## Huisstijl (uit `style.css`)

Een cleane architectenstudio-esthetiek: **de projecten moeten shinen, de
vormgeving doet een stap terug.**

- Kleuren: zwart `#000000` en wit `#FFFFFF`, grijs `#6B6B6B` voor
  bijschriften, lijnen `#E4E4E4`. Kleur komt alleen uit de projectbeelden.
- Letter: één eenvoudige schreefloze, **Helvetica Neue** (Arial als
  terugval). Gewichten 400 en 500, geen cursief als accent.
- Opbouw: 12-koloms raster, veel witruimte, dunne zwarte lijnen boven
  secties, beelden rechthoekig zonder rand, schaduw of afgeronde hoeken.
- **Geen "AI-slop"**: geen verlopen, pasteltinten, glow, schaduwen,
  afgeronde kaarten, decoratieve schreefletters, emoji, iconen als
  versiering of hippe animaties. Dit geldt ook voor posts, presentaties
  en moodboards.

## Waar staat wat

| Wat | Waar |
|---|---|
| Projecten (tekst, foto's, categorie) | `projects.js` — het enige bestand voor projecten |
| Overige teksten (home, over mij, contact) | `index.html` |
| Kleuren en lettertypes | `style.css` (blok `:root`) |
| Omslagfoto's / projectfoto's | `images/` en `images/projecten/` |
| Bronmateriaal per project | `~/Desktop/Portfolio-projecten/<categorie>/<project>/` |
| Werkbestanden van agents (concepten, research, posts) | `_werkmap/` (gaat níet mee naar de live site) |

Pas `script.js` en `projecten/project.html` niet aan, tenzij daar
uitdrukkelijk om gevraagd wordt.

## Werkwijze van de hoofd-agent

1. Lees de opdracht, stel bij twijfel één of twee vragen, maak dan een kort plan.
2. Geef deeltaken aan de sub-agents (meerdere tegelijk als ze los van elkaar kunnen):
   - `research` — referenties, trends, doelgroep, regelgeving
   - `copy` — projectteksten, captions, over-mij, nieuwsbrief, SEO
   - `visual` — beeldselectie, uitsneden, moodboards, formaten per kanaal
   - `web` — wijzigingen in `projects.js`, `index.html`, `style.css`
   - `social` — Instagram/LinkedIn-posts en een planning
3. Laat het resultaat altijd door `review` checken.
4. Laat Lucy het eindresultaat zien en wacht op haar akkoord. **Nooit zelf
   publiceren, posten, mailen of iets inplannen zonder expliciete "ja".**
