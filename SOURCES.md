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

### NASA Archival Photographs (`public/assets/nasa/`)

#### A. Apollo Lunar Module
1. **`public/assets/nasa/apollo-lm-on-moon.jpg`**
   - **NASA Image Title**: View of Apollo 14 Lunar Module on the Moon
   - **Mission**: Apollo 14
   - **Verified Historical Capture Date**: February 5, 1971
   - **Photographer**: Unspecified in NASA resource record
   - **NASA Credit**: NASA/JSC
   - **Original NASA Source Page**: https://science.nasa.gov/resource/view-of-apollo-14-lunar-module-on-the-moon/
   - **Verified Description**: A front view of the Apollo 14 Lunar Module, Antares, on the lunar surface during the mission's first extravehicular activity. The photograph shows a circular flare reflected by the bright Sun. The lower slope of Cone Crater is visible at the left.
2. **`public/assets/nasa/apollo-lm-ascent-return.jpg`**
   - **NASA Image Title**: Lunar Liftoff
   - **Mission**: Apollo 14
   - **Verified Historical Capture Date**: February 5, 1971
   - **Camera / Photographer**: 16mm data acquisition camera mounted inside the Lunar Module
   - **NASA Credit**: NASA
   - **Original NASA Source Page**: https://science.nasa.gov/resource/lunar-liftoff/
   - **Verified Description**: The Apollo 14 Lunar Module ascent stage lifts off from the lunar surface. The image was captured on 16mm film using a data acquisition camera mounted inside the Lunar Module.

#### B. Lunar Roving Vehicle
3. **`public/assets/nasa/apollo15-on-moon.jpg`** (also present as `lrv-apollo15-on-moon.jpg`)
   - **NASA Image Title**: Apollo 15 on the Moon
   - **Mission**: Apollo 15
   - **Verified Historical Capture Date**: July 31, 1971
   - **Photographer**: Astronaut David R. Scott, mission commander
   - **NASA Credit**: NASA
   - **Original NASA Source Page**: https://science.nasa.gov/resource/apollo-15-on-the-moon/
   - **Verified Description**: Astronaut James B. Irwin, lunar module pilot, works at the Lunar Roving Vehicle during Apollo 15's first lunar surface extravehicular activity at the Hadley-Apennine landing site. The Lunar Module Falcon's shadow is visible in the foreground, with Mount Hadley in the background.
4. **`public/assets/nasa/apollo15-lrv-return-trip.webp`**
   - **NASA Image Title**: Lunar Roving Vehicle, Apollo 15 Mission
   - **Mission**: Apollo 15
   - **Historical Period**: 1971 lunar surface mission (exact capture date unspecified in source record)
   - **Photographer**: Unspecified in NASA resource record
   - **NASA Credit**: NASA/MSFC
   - **Original NASA Source Page**: https://www.nasa.gov/image-article/lunar-roving-vehicle-apollo-15-mission/
   - **Verified Description**: Astronaut David R. Scott is seated in the Lunar Roving Vehicle for the return trip towards the Lunar Module Falcon, with rocks and soil collected near the Hadley-Apennine landing site.
5. **`public/assets/nasa/HADLEY RILLE-EXPOSED-LAVA-LAYERS.jpg`** (NASA ID: `AS15-85-11451`)
   - **NASA Image Title**: Apollo 15 Lunar Rover at the Edge of Hadley Rille (`AS15-85-11451`)
   - **Mission**: Apollo 15
   - **Verified Historical Capture Date**: July 31, 1971
   - **Photographer**: Astronaut James B. Irwin, lunar module pilot
   - **NASA Credit**: NASA/JSC
   - **Original NASA Source Page**: https://www.nasa.gov/image-detail/amf-as15-85-11451/
   - **Verified Description**: Astronaut David R. Scott performs a task at the Lunar Roving Vehicle parked on the edge of Hadley Rille during Apollo 15's first lunar surface excursion. The photograph was taken from the flank of St. George Crater, looking north along the rille.
6. **`public/assets/nasa/lrv-david-scott-driving.jpg`**
   - **NASA Gallery Title**: David Scott in the Lunar Roving Vehicle (Apollo 15)
   - **Mission**: Apollo 15
   - **Historical Period**: 1971 lunar surface mission (exact capture date and photographer unspecified in gallery summary)
   - **NASA Credit**: NASA
   - **Original NASA Source Page**: https://science.nasa.gov/moon/image-galleries/views-from-the-lunar-surface/
   - **Verified Description**: Side-profile photograph of Astronaut David R. Scott seated in the Lunar Roving Vehicle on the lunar surface during Apollo 15, showing the wire-mesh wheels, umbrella-style high-gain antenna, T-shaped hand controller, and rear equipment storage.

#### C. ALSEP (Apollo Lunar Surface Experiments Package)
7. **`public/assets/nasa/alsep-central-station-apollo14.jpg`**
   - **NASA Image Title**: Apollo 14 Mission Image — View of the ALSEP Station
   - **Mission**: Apollo 14
   - **Verified Historical Capture Date**: February 5, 1971
   - **Photographer**: Unspecified in NASA resource record
   - **NASA Credit**: NASA/JSC
   - **Original NASA Source Page**: https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/
   - **Verified Description**: A close-up showing two components of the Apollo Lunar Surface Experiments Package deployed during Apollo 14's first extravehicular activity. The central station appears in the centre background, the Active Seismic Experiment mortar package is in the foreground, and the Modularized Equipment Transporter is visible in the right background.
8. **`public/assets/nasa/alsep-apollo15-instruments.jpg`**
   - **NASA Image Title**: Apollo 15 Lunar Rover and Instruments
   - **Mission**: Apollo 15
   - **Verified Historical Capture Date**: July 31, 1971
   - **Photographer**: Astronaut James B. Irwin, lunar module pilot
   - **NASA Credit**: NASA/JSC
   - **Original NASA Source Page**: https://science.nasa.gov/resource/apollo-15-mission-image-view-of-the-apollo-lunar-surface-experiments-package-alsep/
   - **Verified Description**: Astronaut David R. Scott is seated in the Lunar Roving Vehicle during Apollo 15's first lunar surface excursion. Components of the Apollo Lunar Surface Experiments Package are also visible.

#### D. Sojourner Rover
9. **`public/assets/nasa/sojourner-rock-garden.jpg`**
   - **NASA Image Title**: Sojourner near the Rock Garden
   - **Mission**: Mars Pathfinder
   - **Verified Historical Capture Date**: August 27, 1997 (Sol 42)
   - **Photographer / Instrument**: Unspecified in summary record
   - **NASA Credit**: NASA/JPL
   - **Original NASA Source Page**: https://science.nasa.gov/resource/sojourner-near-the-rock-garden/
   - **Verified Description**: The image was taken near the end of daytime operations on Sol 42. Sojourner is positioned between the rocks Wedge and Flute Top. Other rocks, including Flat Top and the Rock Garden, are visible. The cylindrical instrument extending from the rear of the rover is its Alpha Proton X-ray Spectrometer.
10. **`public/assets/nasa/sojourner-apxs-at-work.jpg`**
    - **NASA Image Title**: Sojourner's APXS at Work
    - **Mission**: Mars Pathfinder
    - **Verified Historical Capture Date**: July 8, 1997, Sol 4 (Image addition date: July 9, 1997)
    - **Instrument Used to Capture Image**: Imager for Mars Pathfinder
    - **NASA Credit**: NASA/JPL
    - **Original NASA Source Page**: https://science.nasa.gov/resource/sojourners-apxs-at-work/
    - **Verified Description**: Sojourner uses its Alpha Proton X-ray Spectrometer to study an area of Martian soil near several rocks. The large rock Yogi is visible in the upper right.

#### E. Spirit & Opportunity (Mars Exploration Rovers)
11. **`public/assets/nasa/spirit-robotic-arm.jpg`**
    - **NASA Image Title**: Spirit's Robotic Stretch on Sol 2052
    - **Mission**: Mars Exploration Rovers (Spacecraft: Spirit)
    - **Verified Historical Capture Date**: October 11, 2009, Spirit's 2,052nd Martian day (Image addition date: October 19, 2009)
    - **Camera**: Spirit's front hazard-avoidance camera
    - **NASA Credit**: NASA/JPL-Caltech
    - **Original NASA Source Page**: https://science.nasa.gov/photojournal/spirits-robotic-stretch-on-sol-2052/
    - **Verified Description**: Spirit recorded a view of its robotic arm and surroundings. The turret at the end of the arm shows the Mössbauer spectrometer pointing upwards and the Rock Abrasion Tool extending towards the right. Spirit's right-front wheel is also visible.
12. **`public/assets/nasa/opportunity-robotic-arm.jpg`**
    - **NASA Image Title**: Opportunity's Arm in 'Hover-Stow' Position
    - **Mission**: Mars Exploration Rovers (Spacecraft: Opportunity)
    - **Verified Historical Capture Date**: January 18, 2006, Opportunity's 706th Martian day (Image addition date: February 2, 2006)
    - **Camera**: Opportunity's navigation camera
    - **NASA Credit**: NASA/JPL-Caltech
    - **Original NASA Source Page**: https://www.jpl.nasa.gov/images/pia02156-opportunitys-arm-in-hover-stow-position/
    - **Verified Description**: The photograph shows Opportunity carrying its robotic arm in a raised hover-stow position while driving over smoother terrain. The instrument turret holds the Mössbauer spectrometer, Alpha Particle X-ray Spectrometer and Rock Abrasion Tool.

### Typography
- **Fredoka**, **Inter**, and **Caveat** — Open-source web fonts (SIL Open Font License) loaded via Google Fonts.
