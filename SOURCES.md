# ORBITOYS — Sources, Historical Facts & Asset Credits

This document tracks verified NASA historical facts, official reference links, archival photographs, audio assets, image credits, and asset licensing for the ORBITOYS project (NASA Space Apps Challenge 2026 — Team SHELF SPACE).

> **Rule**: Never invent citations, historical facts, or astronaut quotations, and clearly separate the fictional toy-shop framing story and simplified gameplay from historical NASA records.

---

## 1. Storytelling & Gameplay vs. Historical Fact

- **Fictional Framing Narrative**: The ORBITOYS toy shop setting, the Shopkeeper, the visiting Girl, and their 11-line conversation are fictional storytelling created for this educational experience.
- **Simplified Educational Gameplay**: The playable *Hadley–Apennine Exploration* Lunar Rover game is an illustrated, simplified educational adventure inspired by Apollo 15 (July 31 – August 2, 1971) rather than an exact geographical simulation of the historical traverse route.
- **Historical NASA Machines**: All five collectibles on the ORBITOYS shelf represent real historical NASA spacecraft, lunar surface experiment packages, and Mars rovers:
  1. **Apollo Lunar Module (LM)** — Moon, Apollo lunar landing missions (1969–1972)
  2. **Lunar Roving Vehicle (LRV)** — Moon, Apollo 15, 16, and 17 (1971–1972)
  3. **ALSEP (Apollo Lunar Surface Experiments Package)** — Moon, Apollo 12 through Apollo 17 (1969–1972 deployments; operated until 1977)
  4. **Sojourner Rover** — Mars, Mars Pathfinder mission (1997)
  5. **Spirit & Opportunity** — Mars, Mars Exploration Rover programme (landed 2004; Spirit ended 2010, Opportunity ended 2019)

---

## 2. NASA Archival Photographs (`public/assets/nasa/`)

| Asset Path on Disk | Historical Context & Usage in ORBITOYS | Official NASA Source URL | Credit |
| :--- | :--- | :--- | :--- |
| `public/assets/nasa/apollo15-on-moon.jpg` *(Image 01)* | Astronaut working at the Lunar Roving Vehicle during Apollo 15's first lunar surface excursion at Hadley–Apennine, July 31, 1971. Used in the Mission Briefing and Location 01 (Elbow Crater) historical discovery panel. | https://science.nasa.gov/resource/apollo-15-on-the-moon/ | NASA |
| `public/assets/nasa/apollo15-lrv-return-trip.webp` *(Image 02)* | Apollo 15 Lunar Roving Vehicle photograph associated with geological exploration and sample transport on the lunar surface. Used in Location 02 (Spur Crater) and the Mission Complete historical debrief. | https://www.nasa.gov/image-article/lunar-roving-vehicle-apollo-15-mission/ | NASA/MSFC |
| *Not present on disk:* `apollo15-hadley-rille-rover.jpg` (`AS15-85-11451`, *Image 03*) | Photograph of the Lunar Roving Vehicle parked at the edge of Hadley Rille during Apollo 15 EVA-1 looking north from the flank of St. George Crater. Since the image file is not in `public/assets/nasa/`, Location 03 (Hadley Rille) uses an illustrated ORBITOYS geological vignette paired with the official NASA source link and credit. | https://www.nasa.gov/image-detail/amf-as15-85-11451/ | NASA/JSC |
| *Unused in Rover gameplay:* `apollo15-crew-launch-tower.jpg`, `apollo15-mission-control.jpg` | Present in `public/assets/nasa/`, but intentionally excluded from Lunar Rover surface operation panels per project historical accuracy rules. | — | NASA |

---

## 3. Official NASA Reference Links Used in the Application

### A. Apollo Lunar Module
1. **NASA — Apollo's Lunar Module**:  
   https://www.nasa.gov/history/apollos-lunar-module-bridged-technological-leap-to-the-moon/
2. **NASA — Apollo Lunar Module Technical Reference (ALSJ)**:  
   https://www.nasa.gov/wp-content/uploads/static/history/alsj/LM04_Lunar_Module_ppLV1-17.pdf
3. **NASA — Apollo Expeditions to the Moon (SP-350, Ch. 4-3)**:  
   https://www.nasa.gov/wp-content/uploads/static/history/SP-350/ch-4-3.html

### B. Lunar Roving Vehicle
1. **NASA Goddard (NSSDCA) — Apollo Lunar Roving Vehicle**:  
   https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html
2. **NASA — Apollo 15 Mission Summary (SP-4029)**:  
   https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15a_Summary.htm
3. **NASA — Apollo 15 Press Kit**:  
   https://science.nasa.gov/wp-content/uploads/2023/09/Apollo_15-1.pdf

### C. ALSEP (Apollo Lunar Surface Experiments Package)
1. **NASA PDS — Apollo 15 ALSEP Instrument Host Information**:  
   https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3
2. **NASA — Lunar Surface Experiments (SP-4029)**:  
   https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_18-33_Lunar_Surface_Experiments.htm
3. **NASA — Apollo Programme Historical Reference (JSC-09423)**:  
   https://www.nasa.gov/wp-content/uploads/static/history/alsj/APSR-JSC-09423-OCR.pdf

### D. Sojourner Rover
1. **NASA/JPL — Mars Pathfinder and Sojourner**:  
   https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/
2. **NASA/JPL Robotics — Sojourner Technical Information**:  
   https://www-robotics.jpl.nasa.gov/what-we-do/flight-projects/pathfinder/

### E. Spirit & Opportunity (Mars Exploration Rovers)
1. **NASA — Spirit Mission**:  
   https://science.nasa.gov/mission/mer-spirit/
2. **NASA — Opportunity Mission**:  
   https://science.nasa.gov/mission/mer-opportunity/
3. **NASA — Spirit and Opportunity Science Instruments**:  
   https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/

---

## 4. Audio, Image Credits & Asset Licensing

### Background Music & Sound Effects
- **Background Soundtrack**: User-provided ORBITOYS theme located at `public/assets/audio/orbitoys-theme.mp3` (looped with gentle fade-in after user interaction).
- **Interaction Sound Effects**: Synthesized in real time via the browser's native Web Audio API.

### Game Illustrations (`public/assets/*.png`)
- **Attribution Note (from Figma Title Screen `#46:95`)**: *"Images in this game were Generated using CHATGPT"*
- Exported from the project Figma file (`Orbit Toys_ Nasa Machines_Nasa Space Apps Challenge 2026`, node `98:1717`).

### UI Icons & Vectors (`public/assets/*.svg`)
- Original custom SVG UI elements exported from the project Figma file (`icon-play.svg`, `icon-door-enter.svg`, `speech-pointer-shopkeeper.svg`, `speech-pointer-girl.svg`, `btn-next-dialogue.svg`).

### Typography
- **Fredoka**, **Inter**, and **Caveat** — Open-source web fonts (SIL Open Font License) loaded via Google Fonts.
