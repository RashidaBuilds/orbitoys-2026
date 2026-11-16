# ORBITOYS — Sources, Historical Facts & Asset Credits

This document tracks verified NASA historical facts, mission references, audio assets, image credits, and asset licensing for the ORBITOYS project (NASA Space Apps Challenge 2026 — Team SHELF SPACE).

> **Rule**: Never invent citations, historical facts, or astronaut quotations, and never record a source here until it has been directly verified.

---

## 1. Storytelling vs. Historical Fact

- **Fictional Framing Narrative**: The ORBITOYS toy shop setting, the Shopkeeper, the visiting Girl, and their 11-line dialogue sequence are fictional storytelling created for this interactive experience.
- **Historical NASA Machines**: The five space exploration collectibles on the store shelf correspond to real historical NASA spacecraft, surface experiment packages, and planetary rovers:
  1. **Apollo Lunar Module (LM)** — Flown with crews to the lunar surface on Apollo 11, 12, 14, 15, 16, and 17 (1969–1972).
  2. **Lunar Roving Vehicle (LRV)** — Featured in the MVP discovery & interactive laboratory screens (*Moon / Apollo 15, 16 & 17 / 1971–1972*).
  3. **Apollo Lunar Surface Experiments Package (ALSEP)** — Deployed by astronauts on Apollo 12, 14, 15, 16, and 17 (operated 1969–1977).
  4. **Sojourner Rover** — NASA's first wheeled Mars rover, deployed by the Mars Pathfinder lander in July 1997.
  5. **Spirit & Opportunity** — Twin Mars Exploration Rovers (MER-A and MER-B) that landed on Mars in January 2004.

---

## 2. Historical Facts Used in the ORBITOYS MVP

| Machine / Subsystem | Fact Summary Used in App | Source Basis |
| :--- | :--- | :--- |
| **Lunar Roving Vehicle (Overview)** | Electric Moon buggy driven on Apollo 15, 16, and 17 (1971–1972). Folded into the Lunar Module quadrant bay for transport to the Moon and carried astronauts, tools, cameras, and lunar rock samples across the surface. | Figma design copy (`#85:695`, `#85:805`, `#94:679`) & NASA Apollo Lunar Roving Vehicle documentation |
| **LRV Hotspot 01 — Wire-Mesh Wheels** | Constructed from spun-aluminum hubs and woven zinc-coated steel wire mesh with titanium chevron treads to prevent sinking in soft lunar regolith and to operate reliably in vacuum and extreme temperatures; each wheel had its own electric drive motor. | NASA Apollo Lunar Roving Vehicle technical specifications (Boeing / GM Defense Research Laboratories design) |
| **LRV Hotspot 02 — High-Gain Antenna** | Umbrella-shaped parabolic dish antenna mounted on the front of the rover; aimed toward Earth when parked at lunar geology stops to relay live color television video and telemetry communications to Mission Control. | NASA Apollo Lunar Communications Relay Unit (LCRU) & LRV documentation |
| **LRV Hotspot 03 — Tools & Samples** | Rear payload and stowage area behind the seats used to carry geologic hand tools (hammers, scoops, core tubes, sample bags) and collected lunar rock and soil samples across Apollo 15, 16, and 17 traverses. | NASA Apollo 15, 16, and 17 surface traverse & LRV payload documentation |
| **Apollo Lunar Module** | Two-stage spacecraft (descent and ascent stages) that ferried Apollo astronauts between lunar orbit and the Moon's surface during Apollo 11, 12, 14, 15, 16, and 17 (1969–1972). | Packaging label in Figma `store-shelf.png` & NASA Apollo Lunar Module history |
| **ALSEP** | Suite of scientific instruments deployed on the lunar surface during Apollo 12, 14, 15, 16, and 17 to monitor moonquakes, solar wind, magnetic fields, and heat flow until September 1977. | Packaging label in Figma `store-shelf.png` & NASA ALSEP documentation |
| **Sojourner Rover** | Six-wheeled Mars rover deployed during the Mars Pathfinder mission in July 1997 to examine Martian rocks and soil. | Packaging label in Figma `store-shelf.png` & NASA Mars Pathfinder documentation |
| **Spirit & Opportunity** | Twin robotic geologists that landed on Mars in January 2004 to investigate Martian rocks and search for evidence of past water activity. | Packaging label in Figma `store-shelf.png` & NASA Mars Exploration Rover documentation |

---

## 3. Audio, Image Credits & Asset Licensing

### Background Music & Sound Effects
- **Background Soundtrack**: User-provided ORBITOYS theme located at `public/assets/audio/orbitoys-theme.mp3` (looped with gentle fade-in after user interaction).
- **Interaction Sound Effects**: Synthesized in real time via the browser's native Web Audio API (no external audio libraries).

### Game Illustrations (`public/assets/*.png`)
- **Attribution Note (from Figma Title Screen `#46:95`)**: *"Images in this game were Generated using CHATGPT"*
- Exported from the project Figma file (`Orbit Toys_ Nasa Machines_Nasa Space Apps Challenge 2026`, node `98:1717`).

### UI Icons & Vectors (`public/assets/*.svg`)
- Original custom SVG UI elements exported from the project Figma file (`icon-play.svg`, `icon-door-enter.svg`, `speech-pointer-shopkeeper.svg`, `speech-pointer-girl.svg`, `btn-next-dialogue.svg`).

### Typography
- **Fredoka**, **Inter**, and **Caveat** — Open-source web fonts (SIL Open Font License) loaded via Google Fonts.
