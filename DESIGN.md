# ORBITOYS — Design Specifications

Derived from the Figma design file (`node-id=98-1717`, Section `"Screens"`).

---

## 1. Colour Palette & Effects

### Core Tokens
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `ORBITOYS/Buttons/Plum` | `#292238` | Primary dark background, primary button label ink, dark text on cream cards |
| `ORBITOYS/Buttons/Surface` | `#342C45` | Elevated dark card background (Collectible artwork & Rover laboratory panels) |
| `ORBITOYS/Buttons/Cream` | `#F3E8D5` | Dialogue bubble fill, light story/detail cards, light text on dark backgrounds |
| `ORBITOYS/Shelf/Golden Amber` | `#E9B45B` | Primary CTA fill, selection outlines, badges (`FIRST DISCOVERY`), hotspot pills |
| `ORBITOYS/Buttons/Orange` | `#C75B3D` | Speaker name pill fill (`Shopkeeper`, `Girl`), section overline captions |
| `ORBITOYS/Buttons/Disabled fill` | `#756A68` | Disabled button fill |
| `ORBITOYS/Buttons/Disabled ink` | `#E3DAD0` | Disabled button label text |
| **Title Start Button Fill** | `#FFD05C` | Title screen `"Start"` CTA background (`4px` stroke `#FFF3A0`) |

### Shadows & Glows
- **Dialogue Bubble Shadow**: `0px 6px 18px 0px rgba(41, 34, 56, 0.34)`
- **Button Default Glow**: `0px 2px 12px 0px rgba(255, 208, 92, 0.18)`
- **Next Dialogue Button Glow**: `0px 0px 15px 2px rgba(233, 180, 91, 0.5)`
- **Shelf Hover Halo**: `0px 0px 18px 3px rgba(233, 180, 91, 0.4)` (`2px` stroke `#E9B45B`, opacity `0.65`)
- **Shelf Selected Halo**: `0px 0px 26px 6px rgba(233, 180, 91, 0.65)` (`3px` stroke `#E9B45B`)
- **Title Start Button Glow**: `0px 0px 10px 3px rgba(255, 230, 107, 0.95), 0px 0px 28px 7px rgba(255, 211, 79, 0.7), 0px 0px 48px 10px rgba(255, 182, 56, 0.4), 0px 5px 12px 0px rgba(41, 34, 56, 0.25)`
- **Enter the Store Button Glow**: `0px 0px 14px 2px rgba(233, 180, 91, 0.46), 0px 0px 30px 3px rgba(233, 180, 91, 0.22), 0px 4px 10px 0px rgba(41, 34, 56, 0.32)`

---

## 2. Typography

| Style / Role | Font Family | Weight | Size | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Display** (`ORBITOYS/Buttons/Display`) | `Fredoka` | `600` (SemiBold) | `56px` | `78px` |
| **Heading** (`ORBITOYS/Buttons/Heading`) | `Fredoka` | `600` (SemiBold) | `30px` | `42px` |
| **Start CTA Label** | `Fredoka` | `500` (Medium) | `28px` | `28px` |
| **Enter Store CTA & Notice** | `Fredoka` | `600` (SemiBold) | `26px` | `28px` |
| **Label Large** (`ORBITOYS/Buttons/Label large`) | `Fredoka` | `600` (SemiBold) | `24px` | `34px` |
| **Speaker Badge** | `Fredoka` | `600` (SemiBold) | `22px` | `28px` |
| **Label Medium** (`ORBITOYS/Buttons/Label medium`) | `Fredoka` | `600` (SemiBold) | `20px` | `28px` |
| **Label Small** (`ORBITOYS/Buttons/Label small`) | `Fredoka` | `600` (SemiBold) | `16px` | `22px` |
| **Title Tagline** (*"Not your ordinary toys."*) | `Caveat` | `700` (Bold) | `38px` | Auto |
| **Dialogue Body** | `Inter` | `500` (Medium) | `24px` | `32px` |
| **Body** (`ORBITOYS/Buttons/Body`) | `Inter` | `400` (Regular) | `16px` | `22px` |
| **Caption** (`ORBITOYS/Buttons/Caption`) | `Inter` | `500` (Medium) | `12px` | `17px` |

---

## 3. Screen Dimensions & Layouts

- **Story & Dialogue Screens (Screens 1–4)**: `1280 × 832` viewport canvas with full-bleed background illustrations.
- **Interactive Shelf, Discovery & Rover Screens**: `1440 × 1104` viewport canvas on `#292238` (Plum) background with `48px` horizontal outer margins (`1344px` content width):
  - **Navigation Header**: `1440 × 96` at top (`y: 0`).
  - **Two-Column Content Area**: Starts at `y: 128`, height `800px`, `32px` gap between columns (`borderRadius: 24px` on panels).
  - **Footer Area**: `1344 × 96` at `x: 48, y: 960` (or `1344 × 132` bottom card at `x: 48, y: 948` on the shelf screen).

---

## 4. Narrative Sequence (Title, Store & Dialogue)

1. **Title Screen (`#26:8`, `1280 × 832`)**:
   - Background: `public/assets/title-screen-bg.png`
   - Logo: `public/assets/orbitoys-logo.png` (`880 × 352` at `x: 200, y: 155`)
   - Tagline: *"Not your ordinary toys."* (`x: 489.5, y: 501`, `#F3E8D5` with text shadow)
   - Primary CTA: `"Start"` (`224 × 64` at `x: 528, y: 580`, pill `32px`, `icon-play.svg` + `"Start"`)
   - Attribution Notice: *"Images in this game were Generated using CHATGPT"* (`y: 771`)
2. **Screen 2 — Outside the Store (`#30:17`, `1280 × 832`)**:
   - Background: `public/assets/store-exterior.png`
   - Primary CTA: `"Enter the Store"` (`320 × 64` at `x: 810, y: 730`, `#E9B45B` fill, `2px` `#F3E8D5` stroke, `icon-door-enter.svg`)
3. **Screen 3 — Approaching the Entrance (`#34:43`, `1280 × 832`)**:
   - Background: `public/assets/store-entrance.png`
4. **Scene 4 — 11-Line Shopkeeper & Girl Conversation (`1280 × 832`)**:
   - **Dialogue Box**: `640 × 264` container (`x: 584, y: 536` for Shopkeeper shots; `x: 29, y: 536` for Girl shots) with `640 × 232` `#F3E8D5` bubble (`borderRadius: 28px`), `#C75B3D` speaker pill (`padding: 9px 22px`), speech tail SVG, `56 × 56` next-dialogue button (`x: 552, y: 120`, hidden on line 11), and an 11-dot progress indicator (`10px` active dot `#292238`, `6px` inactive dot `rgba(41, 34, 56, 0.28)`).
   - **11 Lines**:
     1. **Shopkeeper** (`conversation-shopkeeper.png`): *"Well, well! Look what we have here. It's been a while!"*
     2. **Girl** (`conversation-girl.png`): *"I know! I haven't been around in ages."*
     3. **Shopkeeper** (`conversation-shopkeeper.png`): *"I remember when you used to come in here looking for anything with a rocket, a planet or a spaceship on it."*
     4. **Girl** (`conversation-girl.png`): *"I was obsessed, wasn't I?"*
     5. **Shopkeeper** (`conversation-shopkeeper.png`): *"You certainly were! So, tell me, are you still keeping up with space?"*
     6. **Girl** (`conversation-girl.png`): *"A little, I guess. I still find it interesting. I just don't think about it as much as I used to."*
     7. **Shopkeeper** (`conversation-shopkeeper.png`): *"Ah, I see. Well, perhaps you've just been looking in the wrong places."*
     8. **Girl** (`conversation-girl.png`): *"What do you mean?"*
     9. **Shopkeeper** (`conversation-shopkeeper.png`): *"There's something new I'd like you to see. I think it might just bring back that curiosity of yours."*
     10. **Girl** (`conversation-girl.png`): *"Now you've got my attention. What is it?"*
     11. **Shopkeeper** (`conversation-shopkeeper-shelf.png`): *"Take a look over there. Welcome to ORBITOYS!"*

---

## 5. Machine Selection Shelf (`#79:1700`, `1440 × 1104`)

- **Header**: Heading *"Choose a machine to explore!"*, subtitle *"Pick a collectible to uncover its mission."*, right caption *"SPACE EXPLORATION COLLECTION"*.
- **Shelf Illustration**: `public/assets/store-shelf.png` (`1477.41 × 831.98` at `x: -19, y: 96`).
- **Collectible Hit Areas** (`borderRadius: 24px`):
  1. **Apollo Lunar Module**: `x: 270, y: 406`, `208 × 365`
  2. **Lunar Roving Vehicle**: `x: 486, y: 390`, `230 × 382` (features `"FIRST DISCOVERY"` badge `#85:803` `188 × 28` at `x: 507, y: 357` and initial amber glow)
  3. **ALSEP**: `x: 732, y: 406`, `210 × 368`
  4. **Sojourner Rover**: `x: 955, y: 406`, `216 × 368`
  5. **Spirit & Opportunity**: `x: 1182, y: 406`, `231 × 368`
- **Selected Machine Information Bar (`#85:695`, `1344 × 132` at `x: 48, y: 948`, `#F3E8D5`, `borderRadius: 20px`)**:
  - Overline: `"MOON / APOLLO 15, 16 & 17 / 1971–1972"`
  - Heading: `"Lunar Roving Vehicle"`
  - Body: *"An electric Moon buggy that helped astronauts travel farther and collect more lunar samples."*
  - CTA Button: `"Explore Machine"` (`x: 1090, y: 38`, height `56px`, pill `999px`)
- **Mission Briefing Card (`#85:805`, `680 × 420`)**:
  - Cream modal/card with `2px` Golden Amber border (`borderRadius: 24px`), `"MISSION BRIEFING"` caption, `"Lunar Roving Vehicle"` heading, mission metadata, description paragraph, and `"Back to shelf"` secondary button.

---

## 6. Lunar Rover Discovery & Interactive Exploration Screens

### A. Machine Discovery & Rover Introduction (`#94:676`, `1440 × 1104`)
- **Top Navigation (`1440 × 96`)**: Heading *"Mission discovery"*, caption *"ORBITOYS / SPACE EXPLORATION COLLECTION"*, `"Back to shelf"` button (`x: 1210, y: 20`).
- **Left Panel — Collectible Artwork (`464 × 800` at `x: 48, y: 128`, `#342C45`)**:
  - Preview image: `public/assets/lunar-roving-vehicle-465abb.png` (`391.36 × 650` at `x: 36.32, y: 40`, `borderRadius: 20px`)
  - Caption: *"YOUR ORIGINAL COLLECTIBLE"*
  - Body: *"The same machine. A bigger story."*
- **Right Panel — Mission Story (`848 × 800` at `x: 544, y: 128`, `#F3E8D5`)**:
  - Overline: `"MOON / APOLLO 15, 16 & 17 / 1971–1972"`
  - Display Title: `"Lunar Roving Vehicle"`
  - Lead Heading: *"An electric Moon buggy that helped astronauts travel farther and collect more lunar samples."*
  - Section Caption: `"WHAT MADE IT SPECIAL?"`
  - Body: *"The Lunar Roving Vehicle folded into the Lunar Module for the trip to the Moon. Astronauts drove it on Apollo 15, 16 and 17, carrying tools, cameras and rock samples across the lunar surface."*
  - Secondary CTA: `"Choose another machine"` (`x: 40, y: 720`, height `56px`)
- **Footer (`1344 × 96` at `x: 48, y: 960`)**:
  - Heading: *"Big discoveries start with a little curiosity."*
  - Body: *"Return to the shelf anytime. Your selected machine stays with you."*

### B. Interactive Lunar Rover (`#94:681`, `1440 × 1104`)
- **Top Navigation (`1440 × 96`)**: Heading *"Lunar Roving Vehicle"*, caption *"INTERACTIVE DISCOVERY / APOLLO 15, 16 & 17"*, `"Back to introduction"` button (`x: 1150, y: 20`).
- **Left Panel — Rover Laboratory (`776 × 800` at `x: 48, y: 128`, `#342C45`)**:
  - Caption: *"EXPLORE THE COLLECTIBLE"*
  - Prompt: *"Select a number. Reveal a discovery."*
  - Artwork: `public/assets/lunar-roving-vehicle-465abb.png` (`390 × 647.74` at `x: 193, y: 106`)
  - **Hotspot Buttons** (Small Primary pill `40px` height, `#E9B45B` fill):
    - `01` (**Wire-mesh wheels**): `x: 311, y: 597` (`48 × 40`)
    - `02` (**High-gain antenna**): `x: 313, y: 452` (`51 × 40`)
    - `03` (**Tools & samples**): `x: 508, y: 547` (`51 × 40`)
- **Right Panel — Equipment Detail (`536 × 800` at `x: 856, y: 128`, `#F3E8D5`)**:
  - Overline: `"YOUR FIELD NOTES"`
  - Heading: *"How does a Moon buggy work?"*
  - Body: *"Choose a numbered hotspot on the collectible to discover how the rover helped astronauts explore the Moon."*
  - Progress Section: `"DISCOVERIES MADE"`, Display counter `"0"` + Heading `"/ 3"`
  - Checklist:
    - `01  Wire-mesh wheels`
    - `02  High-gain antenna`
    - `03  Tools & samples`
- **Footer (`1344 × 96` at `x: 48, y: 960`)**:
  - Heading: *"Built for a world without roads."*
  - Body: *"Discover all three parts, then return to the shelf to meet another machine."*
  - CTA Button: `"Back to shelf"` (`x: 1150, y: 12`)

---

## 7. Existing Assets in `public/assets/`

| Filename | Format | Dimensions | Role |
| :--- | :--- | :--- | :--- |
| `public/assets/title-screen-bg.png` | PNG | `1671 × 941` | Title screen background (`image 3`) |
| `public/assets/orbitoys-logo.png` | PNG | `2010 × 782` | Custom ORBITOYS logo |
| `public/assets/store-exterior.png` | PNG | `1671 × 941` | Screen 2: Outside the Store (`image 4`) |
| `public/assets/store-entrance.png` | PNG | `1671 × 941` | Screen 3: Approaching the Entrance (`image 5`) |
| `public/assets/conversation-shopkeeper.png` | PNG | `1670 × 941` | Scene 4 Shot A: Shopkeeper camera (`image 6`) |
| `public/assets/conversation-girl.png` | PNG | `1670 × 942` | Scene 4 Shot B: Girl camera (`image 7`) |
| `public/assets/conversation-shopkeeper-shelf.png` | PNG | `1670 × 941` | Scene 4 Line 11: Shopkeeper gesturing to shelf (`image 11`) |
| `public/assets/store-shelf.png` | PNG | `1671 × 941` | Store shelf illustration with 5 collectibles |
| `public/assets/lunar-roving-vehicle-465abb.png` | PNG | `260 × 432` | Cropped Lunar Roving Vehicle collectible preview |
| `public/assets/storyboard-lunar-rover.png` | PNG | `1536 × 1024` | Storyboard UI reference for Lunar Rover Adventure |
| `public/assets/icon-play.svg` | SVG | `15 × 16` | Play icon on `"Start"` CTA |
| `public/assets/icon-door-enter.svg` | SVG | `25 × 25` | Door-entering icon on `"Enter the Store"` CTA |
| `public/assets/speech-pointer-shopkeeper.svg` | SVG | `40 × 34` | Speech bubble pointer tail (Shopkeeper) |
| `public/assets/speech-pointer-girl.svg` | SVG | `40 × 34` | Speech bubble pointer tail (Girl) |
| `public/assets/btn-next-dialogue.svg` | SVG | `90 × 90` | Next dialogue circular amber button |
