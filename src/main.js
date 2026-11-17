import './style.css';

/**
 * ORBITOYS — Game Data (Fictional Framing Narrative + Verified NASA Machine Facts & Sources)
 */

// Fictional store dialogue sequence (Scene 4 — 11 lines from Figma #48:441)
const DIALOGUE_LINES = [
  {
    line: 1,
    speaker: 'Shopkeeper',
    shot: 'shopkeeper',
    position: 'right',
    pointer: '/assets/speech-pointer-shopkeeper.svg',
    text: "Well, well! Look what we have here. It's been a while!",
  },
  {
    line: 2,
    speaker: 'Girl',
    shot: 'girl',
    position: 'left',
    pointer: '/assets/speech-pointer-girl.svg',
    text: "I know! I haven't been around in ages.",
  },
  {
    line: 3,
    speaker: 'Shopkeeper',
    shot: 'shopkeeper',
    position: 'right',
    pointer: '/assets/speech-pointer-shopkeeper.svg',
    text: 'I remember when you used to come in here looking for anything with a rocket, a planet or a spaceship on it.',
  },
  {
    line: 4,
    speaker: 'Girl',
    shot: 'girl',
    position: 'left',
    pointer: '/assets/speech-pointer-girl.svg',
    text: "I was obsessed, wasn't I?",
  },
  {
    line: 5,
    speaker: 'Shopkeeper',
    shot: 'shopkeeper',
    position: 'right',
    pointer: '/assets/speech-pointer-shopkeeper.svg',
    text: 'You certainly were! So, tell me, are you still keeping up with space?',
  },
  {
    line: 6,
    speaker: 'Girl',
    shot: 'girl',
    position: 'left',
    pointer: '/assets/speech-pointer-girl.svg',
    text: "A little, I guess. I still find it interesting. I just don't think about it as much as I used to.",
  },
  {
    line: 7,
    speaker: 'Shopkeeper',
    shot: 'shopkeeper',
    position: 'right',
    pointer: '/assets/speech-pointer-shopkeeper.svg',
    text: "Ah, I see. Well, perhaps you've just been looking in the wrong places.",
  },
  {
    line: 8,
    speaker: 'Girl',
    shot: 'girl',
    position: 'left',
    pointer: '/assets/speech-pointer-girl.svg',
    text: 'What do you mean?',
  },
  {
    line: 9,
    speaker: 'Shopkeeper',
    shot: 'shopkeeper',
    position: 'right',
    pointer: '/assets/speech-pointer-shopkeeper.svg',
    text: "There's something new I'd like you to see. I think it might just bring back that curiosity of yours.",
  },
  {
    line: 10,
    speaker: 'Girl',
    shot: 'girl',
    position: 'left',
    pointer: '/assets/speech-pointer-girl.svg',
    text: "Now you've got my attention. What is it?",
  },
  {
    line: 11,
    speaker: 'Shopkeeper',
    shot: 'shelf',
    position: 'left',
    pointer: '/assets/speech-pointer-shopkeeper.svg',
    text: 'Take a look over there. Welcome to ORBITOYS!',
  },
];

/**
 * Complete Structured Data for All 5 NASA Collectibles
 */
const SHELF_MACHINES = [
  {
    id: 'apollo-lm',
    order: '01',
    name: 'Apollo Lunar Module',
    shortName: 'Lunar Module',
    location: 'Moon',
    programme: 'Apollo lunar landing missions',
    period: '1969–1972 (crewed lunar operations)',
    caption: 'MOON  /  APOLLO LUNAR LANDING MISSIONS  /  1969–1972',
    summary:
      "Transported astronauts between lunar orbit and the Moon's surface, then returned the crew to the orbiting Command and Service Module.",
    purpose:
      "Transport astronauts between lunar orbit and the Moon's surface, then return the crew to the orbiting Command and Service Module.",
    introDescription:
      'The Apollo Lunar Module was the spacecraft that carried astronauts down to the Moon and brought them back to lunar orbit. It had two main stages, each with a different job. One helped the crew land, while the other carried them back towards their orbiting spacecraft.',
    whyItMattered: [
      'Designed specifically to fly solely in the vacuum of space without aerodynamic streamlining.',
      'Divided into a Descent Stage for controlled lunar landing and an Ascent Stage that launched the crew back to lunar orbit.',
      'Enabled twelve Apollo astronauts across six missions (Apollo 11, 12, 14, 15, 16 and 17) to walk and work on the Moon between 1969 and 1972.',
    ],
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 19.56, top: 37.26, width: 14.08, height: 43.87 },
    artwork: {
      type: 'shelf-crop',
      viewBox: '324 334 240 426',
    },
    readMore: [
      {
        label: "Read more about Apollo's Lunar Module",
        url: 'https://www.nasa.gov/history/apollos-lunar-module-bridged-technological-leap-to-the-moon/',
      },
      {
        label: 'Explore the Apollo Lunar Module technical reference (PDF)',
        url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/LM04_Lunar_Module_ppLV1-17.pdf',
      },
      {
        label: 'Read Apollo Expeditions to the Moon (SP-350)',
        url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-350/ch-4-3.html',
      },
    ],
    components: [
      {
        id: 'lm-01',
        number: '01',
        name: 'Ascent Stage',
        tag: 'COMPONENT 01  /  CREW CABIN & ASCENT',
        description:
          'The upper section containing the crew cabin, flight controls and ascent propulsion system. Its engine lifted the astronauts from the lunar surface and returned them to lunar orbit.',
        expanded:
          'When surface exploration ended, the Ascent Stage fired its engine using the lower Descent Stage as a launch platform to rendezvous with the orbiting Command and Service Module.',
        hotspot: { leftPercent: 50, topPercent: 52 },
        readMore: {
          label: "Read more about Apollo's Lunar Module",
          url: 'https://www.nasa.gov/history/apollos-lunar-module-bridged-technological-leap-to-the-moon/',
        },
      },
      {
        id: 'lm-02',
        number: '02',
        name: 'Descent Stage',
        tag: 'COMPONENT 02  /  LANDING & SURFACE BASE',
        description:
          'The lower section containing the landing engine, propellant tanks and equipment. It slowed the spacecraft for landing and remained on the Moon after the ascent stage departed.',
        expanded:
          'Wrapped in thermal insulation blankets, the octagonal Descent Stage also housed scientific equipment bays and served as the permanent base left at each Apollo landing site.',
        hotspot: { leftPercent: 52, topPercent: 63 },
        readMore: {
          label: 'Explore the Apollo Lunar Module technical reference (PDF)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/LM04_Lunar_Module_ppLV1-17.pdf',
        },
      },
      {
        id: 'lm-03',
        number: '03',
        name: 'Landing Legs and Footpads',
        tag: 'COMPONENT 03  /  TOUCHDOWN STABILITY',
        description:
          'Four supporting legs helped the spacecraft land and remain stable on the lunar surface. Their structures included crushable honeycomb material to absorb landing impact.',
        expanded:
          'Folded inward during launch inside the Saturn V rocket adapter, the four legs deployed in space and featured wide circular footpads to keep the lander from sinking into lunar dust.',
        hotspot: { leftPercent: 22, topPercent: 68 },
        readMore: {
          label: 'Explore the Apollo Lunar Module technical reference (PDF)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/LM04_Lunar_Module_ppLV1-17.pdf',
        },
      },
      {
        id: 'lm-04',
        number: '04',
        name: 'Crew Access Ladder',
        tag: 'COMPONENT 04  /  SURFACE EGRESS & INGRESS',
        description:
          "A ladder attached to a landing leg allowed astronauts to climb between the lunar surface and the spacecraft's cabin.",
        expanded:
          'Mounted on the forward landing leg strut below the forward hatch and porch, the nine-rung ladder guided astronauts in pressurized spacesuits down to the Moon and back.',
        hotspot: { leftPercent: 50, topPercent: 69 },
        readMore: {
          label: 'Read Apollo Expeditions to the Moon (SP-350)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-350/ch-4-3.html',
        },
      },
      {
        id: 'lm-05',
        number: '05',
        name: 'Propulsion Systems',
        tag: 'COMPONENT 05  /  DESCENT & ASCENT ENGINES',
        description:
          'The descent propulsion system controlled the landing. The ascent propulsion system lifted the crew back into lunar orbit.',
        expanded:
          'The descent engine was throttleable so commanders could hover and select a safe touchdown spot, while the ascent engine was designed for high reliability to ensure the crew returned to orbit.',
        hotspot: null,
        readMore: {
          label: 'Read Apollo Expeditions to the Moon (SP-350)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-350/ch-4-3.html',
        },
      },
    ],
  },
  {
    id: 'lrv',
    order: '02',
    name: 'Lunar Roving Vehicle',
    shortName: 'Lunar Rover',
    location: 'Moon',
    programme: 'Apollo 15, Apollo 16 and Apollo 17',
    period: '1971–1972',
    caption: 'MOON  /  APOLLO 15, 16 & 17  /  1971–1972',
    summary:
      'An electric Moon buggy that extended astronauts’ lunar exploration range and transported geological equipment and samples.',
    purpose:
      "Extend the astronauts' lunar exploration range and transport geological equipment and samples.",
    introDescription:
      'The Lunar Roving Vehicle, often called the Moon buggy, was an electric vehicle built to help Apollo astronauts explore farther across the Moon. It carried astronauts, scientific tools and lunar samples across terrain they could not easily cover on foot.',
    whyItMattered: [
      'Apollo 15 was the first lunar mission to use the Lunar Roving Vehicle, with its first lunar drive on July 31, 1971.',
      'Travelled approximately 28 kilometres (27.8 km) on Apollo 15 across 3 hours and 2 minutes of recorded driving time.',
      'Reached a maximum range of approximately 5 kilometres from the Lunar Module and helped Apollo 15 return approximately 77.31 kilograms of lunar samples.',
    ],
    isFirstDiscovery: true,
    isPlayable: true,
    hitbox: { left: 34.18, top: 35.34, width: 15.57, height: 45.91 },
    artwork: {
      type: 'image',
      src: '/assets/lunar-roving-vehicle-465abb.png',
    },
    readMore: [
      {
        label: "Explore NASA Goddard's Lunar Roving Vehicle records",
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html',
      },
      {
        label: 'Read the NASA Apollo 15 Mission Summary',
        url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15a_Summary.htm',
      },
      {
        label: 'View the NASA Apollo 15 Press Kit (PDF)',
        url: 'https://science.nasa.gov/wp-content/uploads/2023/09/Apollo_15-1.pdf',
      },
    ],
    components: [
      {
        id: 'lrv-01',
        number: '01',
        name: 'Wire-Mesh Wheels',
        tag: 'COMPONENT 01  /  LUNAR TRACTION SYSTEM',
        description:
          "The rover's wheels were constructed from woven wire mesh with titanium chevron treads. This design provided traction across the rough lunar surface.",
        expanded:
          'Woven from zinc-coated steel wire on spun-aluminum hubs, the flexible mesh wheels absorbed bumps without air-filled rubber tires that would fail in the lunar vacuum and extreme temperatures.',
        hotspot: { leftPercent: 28, topPercent: 74 },
        readMore: {
          label: "Explore NASA Goddard's Lunar Roving Vehicle records",
          url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html',
        },
      },
      {
        id: 'lrv-02',
        number: '02',
        name: 'Electric Drive Motors',
        tag: 'COMPONENT 02  /  FOUR-WHEEL ELECTRIC DRIVE',
        description:
          'Each of the four wheels had its own electric drive motor, allowing the rover to move across the Moon without a conventional combustion engine.',
        expanded:
          'Powered by two 36-volt silver-zinc batteries, the quarter-horsepower electric motors in each wheel hub worked with front and rear steering motors for agile maneuvering on dusty slopes.',
        hotspot: { leftPercent: 64, topPercent: 75 },
        readMore: {
          label: 'View the NASA Apollo 15 Press Kit (PDF)',
          url: 'https://science.nasa.gov/wp-content/uploads/2023/09/Apollo_15-1.pdf',
        },
      },
      {
        id: 'lrv-03',
        number: '03',
        name: 'High-Gain Antenna',
        tag: 'COMPONENT 03  /  EARTH COMMUNICATIONS',
        description:
          'The large dish antenna supported communications and television transmission to Earth.',
        expanded:
          'Shaped like a ribbed umbrella on the front mast, the dish was aimed directly at Earth whenever astronauts parked at a geology stop so Mission Control could watch live color television video.',
        hotspot: { leftPercent: 31, topPercent: 53 },
        readMore: {
          label: "Explore NASA Goddard's Lunar Roving Vehicle records",
          url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html',
        },
      },
      {
        id: 'lrv-04',
        number: '04',
        name: 'Hand Controller',
        tag: 'COMPONENT 04  /  STEERING & BRAKING STICK',
        description:
          "A T-shaped control stick between the seats operated the rover's driving, steering and braking functions.",
        expanded:
          'Because bulky pressurized spacesuit gloves made a traditional steering wheel impractical, astronauts tilted the T-handle forward to drive, left or right to steer, and backward to brake.',
        hotspot: { leftPercent: 51, topPercent: 64 },
        readMore: {
          label: 'View the NASA Apollo 15 Press Kit (PDF)',
          url: 'https://science.nasa.gov/wp-content/uploads/2023/09/Apollo_15-1.pdf',
        },
      },
      {
        id: 'lrv-05',
        number: '05',
        name: 'Tools and Sample Storage',
        tag: 'COMPONENT 05  /  SCIENCE & GEOLOGY PAYLOAD',
        description:
          'The rover carried geological equipment and containers for collecting and transporting lunar samples.',
        expanded:
          'Mounted behind the seats, the payload rack held rock scoops, hammers, core tubes, sample bags and scientific gear, enabling Apollo 15 astronauts to return approximately 77.31 kilograms of lunar samples.',
        hotspot: { leftPercent: 80, topPercent: 67 },
        readMore: {
          label: 'Read the NASA Apollo 15 Mission Summary',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_15a_Summary.htm',
        },
      },
    ],
  },
  {
    id: 'alsep',
    order: '03',
    name: 'ALSEP',
    shortName: 'ALSEP',
    location: 'Moon',
    programme: 'Apollo 12 through Apollo 17 (varying experiment configurations)',
    period: '1969–1972 deployments (Apollo 15 station operated until 1977)',
    caption: 'MOON  /  APOLLO 12–17 SURFACE EXPERIMENTS  /  1969–1977',
    summary:
      'Apollo Lunar Surface Experiments Package — scientific stations left on the Moon to continue collecting measurements after astronauts departed.',
    purpose:
      'Continue collecting scientific measurements from the Moon after astronauts had departed.',
    introDescription:
      "ALSEP was a collection of scientific instruments left on the Moon by Apollo astronauts. Unlike equipment that returned with the crew, these experiments stayed behind and continued gathering information about the Moon's interior, magnetic field, environment and geological activity.",
    whyItMattered: [
      'Different Apollo missions deployed different combinations of instruments tailored to each landing site.',
      'The Apollo 15 ALSEP configuration included the Passive Seismic Experiment, Lunar Surface Magnetometer, Solar Wind Spectrometer, Suprathermal Ion Detector, Cold Cathode Gauge, Laser Ranging Retroreflector, Heat Flow Experiment and lunar dust detector.',
      'Continued transmitting long-term lunar geophysical and environmental data to Earth until the ALSEP stations were switched off in 1977.',
    ],
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 50.83, top: 37.26, width: 14.21, height: 44.23 },
    artwork: {
      type: 'shelf-crop',
      viewBox: '848 334 240 426',
    },
    readMore: [
      {
        label: 'Explore NASA PDS Apollo 15 ALSEP instrument host records',
        url: 'https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3',
      },
      {
        label: 'Read NASA Lunar Surface Experiments summary (SP-4029)',
        url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_18-33_Lunar_Surface_Experiments.htm',
      },
      {
        label: 'View the NASA ALSEP Programme Historical Reference (PDF)',
        url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/APSR-JSC-09423-OCR.pdf',
      },
    ],
    components: [
      {
        id: 'alsep-01',
        number: '01',
        name: 'Central Station',
        tag: 'COMPONENT 01  /  COMMAND & DATA HUB',
        description:
          "The central station acted as the experiment package's control and communications hub. It managed power distribution and transmitted scientific data to Earth.",
        expanded:
          'Astronauts leveled and aligned the Central Station on the lunar surface, connecting ribbon cables from surrounding experiments so data could be relayed to Earth day and night.',
        hotspot: { leftPercent: 56, topPercent: 67 },
        readMore: {
          label: 'Explore NASA PDS Apollo 15 ALSEP instrument host records',
          url: 'https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3',
        },
      },
      {
        id: 'alsep-02',
        number: '02',
        name: 'SNAP-27 Generator',
        tag: 'COMPONENT 02  /  THERMOELECTRIC POWER',
        description:
          'A radioisotope thermoelectric generator that converted heat from radioactive decay into electrical power for the Apollo 15 ALSEP installation.',
        expanded:
          'Because the lunar night lasts about 14 Earth days, solar panels alone could not keep the station running continuously; the SNAP-27 generator provided steady electrical power for years.',
        hotspot: { leftPercent: 72, topPercent: 61 },
        readMore: {
          label: 'View the NASA ALSEP Programme Historical Reference (PDF)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/APSR-JSC-09423-OCR.pdf',
        },
      },
      {
        id: 'alsep-03',
        number: '03',
        name: 'Communication Antenna and Cables',
        tag: 'COMPONENT 03  /  TELEMETRY LINK',
        description:
          'The cables connected experiments to the central station, while the antenna supported the transmission of scientific data to Earth.',
        expanded:
          'Aimed precisely toward Earth, the telemetry antenna transmitted continuous measurements from the deployed instruments back to ground receiving stations until 1977.',
        hotspot: { leftPercent: 33, topPercent: 58 },
        readMore: {
          label: 'Read NASA Lunar Surface Experiments summary (SP-4029)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_18-33_Lunar_Surface_Experiments.htm',
        },
      },
      {
        id: 'alsep-04',
        number: '04',
        name: 'Passive Seismic Experiment',
        tag: 'COMPONENT 04  /  LUNAR INTERIOR SEISMOLOGY',
        description:
          "This instrument detected seismic vibrations from moonquakes, impacts and other movements, helping scientists investigate the Moon's interior.",
        expanded:
          'Part of the documented Apollo 15 ALSEP configuration, it recorded meteoroid impacts and deep moonquakes to reveal the structure of the lunar crust and mantle.',
        hotspot: null,
        readMore: {
          label: 'Read NASA Lunar Surface Experiments summary (SP-4029)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_18-33_Lunar_Surface_Experiments.htm',
        },
      },
      {
        id: 'alsep-05',
        number: '05',
        name: 'Heat Flow Experiment',
        tag: 'COMPONENT 05  /  SUBSURFACE TEMPERATURE PROBES',
        description:
          'Probes inserted into the lunar ground measured temperature and the movement of heat beneath the lunar surface.',
        expanded:
          'Astronauts drilled boreholes into the lunar regolith to emplace the sensors, measuring the rate at which internal heat escaped from the Moon.',
        hotspot: null,
        readMore: {
          label: 'Explore NASA PDS Apollo 15 ALSEP instrument host records',
          url: 'https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3',
        },
      },
      {
        id: 'alsep-06',
        number: '06',
        name: 'Lunar Surface Magnetometer',
        tag: 'COMPONENT 06  /  MAGNETIC FIELD STUDY',
        description:
          "Measured the magnetic field at the lunar surface, helping scientists investigate the Moon's magnetic properties.",
        expanded:
          'Variations in the magnetic field as the Moon passed through the solar wind also provided clues about the electrical conductivity and temperature of the lunar interior.',
        hotspot: null,
        readMore: {
          label: 'Read NASA Lunar Surface Experiments summary (SP-4029)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_18-33_Lunar_Surface_Experiments.htm',
        },
      },
      {
        id: 'alsep-07',
        number: '07',
        name: 'Suprathermal Ion Detector Experiment',
        tag: 'COMPONENT 07  /  CHARGED PARTICLE DETECTOR',
        description:
          'Studied low-energy charged particles near the Moon and their interaction with the lunar environment.',
        expanded:
          'Deployed on Apollo 15 alongside the Solar Wind Spectrometer and Cold Cathode Gauge, it measured ions near the lunar surface across the Moon’s orbit.',
        hotspot: null,
        readMore: {
          label: 'View the NASA ALSEP Programme Historical Reference (PDF)',
          url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/APSR-JSC-09423-OCR.pdf',
        },
      },
    ],
  },
  {
    id: 'sojourner',
    order: '04',
    name: 'Sojourner Rover',
    shortName: 'Sojourner',
    location: 'Mars',
    programme: 'Mars Pathfinder',
    period: '1997 (landed July 4, 1997; operated 83 days)',
    caption: 'MARS  /  MARS PATHFINDER  /  1997',
    summary:
      'Small six-wheeled robotic rover that explored Martian terrain and investigated the composition of rocks and soil during the 1997 Pathfinder mission.',
    purpose:
      'Explore Martian terrain and investigate the composition of rocks and soil.',
    introDescription:
      'Sojourner was the small robotic rover that explored Mars during the Pathfinder mission in 1997. It travelled around nearby rocks and soil, taking pictures and making scientific measurements. It helped demonstrate how mobile robots could explore another planet.',
    whyItMattered: [
      'Landed on Mars on July 4, 1997 and rolled down the ramps of the Mars Pathfinder lander, which served as its communications relay to Earth.',
      'Operated for 83 days on the Martian surface — more than eleven times its original planned seven-day mission.',
      'Proved the six-wheel rocker-bogie mobility design and mobile rock chemistry analysis for future generations of Mars rovers.',
    ],
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 65.93, top: 37.26, width: 14.62, height: 44.23 },
    artwork: {
      type: 'shelf-crop',
      viewBox: '1102 334 244 426',
    },
    readMore: [
      {
        label: 'Read about the Mars Pathfinder and Sojourner mission (NASA/JPL)',
        url: 'https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/',
      },
      {
        label: 'Explore Sojourner technical information at JPL Robotics',
        url: 'https://www-robotics.jpl.nasa.gov/what-we-do/flight-projects/pathfinder/',
      },
    ],
    components: [
      {
        id: 'soj-01',
        number: '01',
        name: 'Six-Wheel Rocker-Bogie Suspension',
        tag: 'COMPONENT 01  /  MARTIAN TERRAIN MOBILITY',
        description:
          "The suspension system distributed the rover's weight across its six wheels and helped it travel over uneven Martian terrain.",
        expanded:
          'Without springs, the hinged rocker-bogie linkage allowed Sojourner to climb over rocks larger than its wheel diameter while keeping all six wheels in contact with the Martian ground.',
        hotspot: { leftPercent: 48, topPercent: 68 },
        readMore: {
          label: 'Explore Sojourner technical information at JPL Robotics',
          url: 'https://www-robotics.jpl.nasa.gov/what-we-do/flight-projects/pathfinder/',
        },
      },
      {
        id: 'soj-02',
        number: '02',
        name: 'APXS Instrument',
        tag: 'COMPONENT 02  /  ROCK & SOIL SPECTROMETER',
        description:
          'The Alpha Proton X-ray Spectrometer analysed the chemical composition of rocks and soil to help scientists understand the materials on Mars.',
        expanded:
          'Placed directly against Martian rocks and soil on a deployment mechanism, the APXS measured elemental composition and sent its findings to the Pathfinder lander for relay to Earth.',
        hotspot: { leftPercent: 25, topPercent: 66 },
        readMore: {
          label: 'Read about the Mars Pathfinder and Sojourner mission (NASA/JPL)',
          url: 'https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/',
        },
      },
      {
        id: 'soj-03',
        number: '03',
        name: 'Imaging Cameras',
        tag: 'COMPONENT 03  /  ROVER NAVIGATION & SCIENCE CAMERAS',
        description:
          'Sojourner carried cameras that helped observe nearby rocks, inspect the terrain and document its exploration.',
        expanded:
          'Equipped with front stereo monochrome cameras (paired with laser stripe projectors for hazard detection) and a rear color camera, Sojourner imaged rocks up close while the separate Pathfinder lander camera photographed the wider landing site.',
        hotspot: { leftPercent: 52, topPercent: 56 },
        readMore: {
          label: 'Explore Sojourner technical information at JPL Robotics',
          url: 'https://www-robotics.jpl.nasa.gov/what-we-do/flight-projects/pathfinder/',
        },
      },
      {
        id: 'soj-04',
        number: '04',
        name: 'Solar Array and Batteries',
        tag: 'COMPONENT 04  /  SURFACE POWER SYSTEM',
        description:
          'Solar panels supplied electrical power. The rover also used batteries to support its operations, especially during the early part of the mission.',
        expanded:
          'The flat solar panel across the top deck generated up to 16 watts of power under the Martian sun, backed by lithium-thionyl chloride non-rechargeable batteries for low-light operations.',
        hotspot: { leftPercent: 54, topPercent: 62 },
        readMore: {
          label: 'Read about the Mars Pathfinder and Sojourner mission (NASA/JPL)',
          url: 'https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/',
        },
      },
    ],
  },
  {
    id: 'mer',
    order: '05',
    name: 'Spirit & Opportunity',
    shortName: 'Spirit & Opp.',
    location: 'Mars',
    programme: 'Mars Exploration Rover programme',
    period: 'Landed in 2004; Spirit ended in 2010 and Opportunity in 2019',
    caption: 'MARS  /  MARS EXPLORATION ROVERS  /  2004–2019',
    summary:
      'Twin robotic geologists sent to opposite sides of Mars to investigate Martian geology and search for evidence of past water.',
    purpose:
      'Investigate Martian geology and search for evidence of past water.',
    introDescription:
      'Spirit and Opportunity were twin robotic geologists sent to opposite sides of Mars. They explored rocks, soil and craters, helping scientists uncover evidence that liquid water had once affected parts of the planet.',
    whyItMattered: [
      'Spirit landed in Gusev Crater in January 2004 and operated until 2010; Opportunity landed at Meridiani Planum in January 2004 and operated until February 2019.',
      'Found geological and mineralogical evidence that liquid water had once soaked rocks and shaped the ancient Martian environment.',
      'Demonstrated multi-year surface mobility and close-up robotic field geology across kilometers of Martian craters and plains.',
    ],
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 81.29, top: 37.26, width: 15.64, height: 44.23 },
    artwork: {
      type: 'shelf-crop',
      viewBox: '1358 334 261 426',
    },
    readMore: [
      {
        label: 'Explore the NASA Spirit rover mission',
        url: 'https://science.nasa.gov/mission/mer-spirit/',
      },
      {
        label: 'Explore the NASA Opportunity rover mission',
        url: 'https://science.nasa.gov/mission/mer-opportunity/',
      },
      {
        label: "Explore Spirit and Opportunity's scientific instruments",
        url: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/',
      },
    ],
    components: [
      {
        id: 'mer-01',
        number: '01',
        name: 'Pancam',
        tag: 'COMPONENT 01  /  PANORAMIC CAMERA MAST',
        description:
          'The Panoramic Camera system used two cameras to capture detailed, multi-wavelength, three-dimensional panoramic images of the Martian landscape.',
        expanded:
          'Mounted near human eye level on the rover mast, Pancam used color filters to help scientists identify interesting rocks and plan safe driving routes.',
        hotspot: { leftPercent: 34, topPercent: 56 },
        readMore: {
          label: "Explore Spirit and Opportunity's scientific instruments",
          url: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/',
        },
      },
      {
        id: 'mer-02',
        number: '02',
        name: 'Robotic Arm / Instrument Deployment Device',
        tag: 'COMPONENT 02  /  ROBOTIC GEOLOGY ARM',
        description:
          'The robotic arm positioned scientific instruments against rocks and soil so the rover could study them closely.',
        expanded:
          'Extending from the front of the rover like a human arm with shoulder, elbow and wrist joints, it placed a turret of four tools directly onto Martian targets.',
        hotspot: { leftPercent: 24, topPercent: 66 },
        readMore: {
          label: "Explore Spirit and Opportunity's scientific instruments",
          url: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/',
        },
      },
      {
        id: 'mer-03',
        number: '03',
        name: 'Rock Abrasion Tool (RAT)',
        tag: 'COMPONENT 03  /  ROCK GRINDING TOOL',
        description:
          'A rotating grinding tool that removed dust and weathered surface material from rocks, exposing fresher material for scientific analysis.',
        expanded:
          'Acting like a robotic geologist’s rock hammer, the RAT ground shallow 45-millimeter circles into Martian rocks so spectrometers and the microscopic imager could inspect the unweathered interior.',
        hotspot: null,
        readMore: {
          label: "Explore Spirit and Opportunity's scientific instruments",
          url: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/',
        },
      },
      {
        id: 'mer-04',
        number: '04',
        name: 'Scientific Instruments',
        tag: 'COMPONENT 04  /  SPECTROMETERS & IMAGER SUITE',
        description:
          'The rovers carried instruments including APXS, Mössbauer spectrometers, a microscopic imager and other tools to analyse rock and soil composition.',
        expanded:
          'Together with the Miniature Thermal Emission Spectrometer (Mini-TES), these instruments identified iron-bearing minerals such as hematite and jarosite that form in the presence of water.',
        hotspot: { leftPercent: 68, topPercent: 60 },
        readMore: {
          label: "Explore Spirit and Opportunity's scientific instruments",
          url: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/',
        },
      },
      {
        id: 'mer-05',
        number: '05',
        name: 'Six-Wheel Mobility System',
        tag: 'COMPONENT 05  /  ROCKER-BOGIE DRIVE SYSTEM',
        description:
          'The six-wheel drive and suspension system allowed the rovers to travel across the Martian surface and navigate uneven terrain.',
        expanded:
          'Each aluminum wheel had cleats for traction in Martian sand and rocky slopes, enabling Opportunity to travel more than 45 kilometres across Mars.',
        hotspot: { leftPercent: 40, topPercent: 69 },
        readMore: {
          label: 'Explore the NASA Opportunity rover mission',
          url: 'https://science.nasa.gov/mission/mer-opportunity/',
        },
      },
    ],
  },
];

// User-provided soundtrack path in public/assets/audio/
const THEME_AUDIO_SRC = '/assets/audio/orbitoys-theme.mp3';
const BEST_SCORE_STORAGE_KEY = 'orbitoys_lrv_best_score';

/**
 * Verified NASA Archival Photographs & Component Mapping (`public/assets/nasa/`)
 */
const NASA_ARCHIVAL_PHOTOS = {
  'apollo-lm-on-moon': {
    id: 'apollo-lm-on-moon',
    machineId: 'apollo-lm',
    filename: 'apollo-lm-on-moon.jpg',
    src: '/assets/nasa/apollo-lm-on-moon.jpg',
    title: 'View of Apollo 14 Lunar Module on the Moon',
    mission: 'Apollo 14',
    date: 'February 5, 1971',
    photographer: null,
    credit: 'NASA/JSC',
    displayCaption:
      "An Apollo 14 view of the Lunar Module Antares on the Moon's surface during the crew's first lunar excursion.",
    historicalDescription:
      "A front view of the Apollo 14 Lunar Module, Antares, on the lunar surface during the mission's first extravehicular activity. The photograph shows a circular flare reflected by the bright Sun. The lower slope of Cone Crater is visible at the left.",
    sourceUrl: 'https://science.nasa.gov/resource/view-of-apollo-14-lunar-module-on-the-moon/',
  },
  'apollo-lm-ascent-return': {
    id: 'apollo-lm-ascent-return',
    machineId: 'apollo-lm',
    filename: 'apollo-lm-ascent-return.jpg',
    src: '/assets/nasa/apollo-lm-ascent-return.jpg',
    title: 'Lunar Liftoff',
    mission: 'Apollo 14',
    date: 'February 5, 1971',
    photographer: '16mm data acquisition camera inside the Lunar Module',
    credit: 'NASA',
    displayCaption:
      'The Apollo 14 ascent stage lifts away from the lunar surface, carrying the astronauts back towards lunar orbit.',
    historicalDescription:
      'The Apollo 14 Lunar Module ascent stage lifts off from the lunar surface. The image was captured on 16mm film using a data acquisition camera mounted inside the Lunar Module.',
    sourceUrl: 'https://science.nasa.gov/resource/lunar-liftoff/',
  },
  'apollo15-on-moon': {
    id: 'apollo15-on-moon',
    machineId: 'lrv',
    filename: 'apollo15-on-moon.jpg',
    src: '/assets/nasa/apollo15-on-moon.jpg',
    title: 'Apollo 15 on the Moon',
    mission: 'Apollo 15',
    date: 'July 31, 1971',
    photographer: 'Astronaut David R. Scott, mission commander',
    credit: 'NASA',
    displayCaption:
      "James Irwin works beside the Lunar Roving Vehicle during Apollo 15's first lunar surface excursion. David Scott took this photograph.",
    historicalDescription:
      "Astronaut James B. Irwin, lunar module pilot, works at the Lunar Roving Vehicle during Apollo 15's first lunar surface extravehicular activity at the Hadley-Apennine landing site. The Lunar Module Falcon's shadow is visible in the foreground, with Mount Hadley in the background.",
    sourceUrl: 'https://science.nasa.gov/resource/apollo-15-on-the-moon/',
  },
  'lrv-apollo15-return': {
    id: 'lrv-apollo15-return',
    machineId: 'lrv',
    filename: 'apollo15-lrv-return-trip.webp',
    src: '/assets/nasa/apollo15-lrv-return-trip.webp',
    title: 'Lunar Roving Vehicle, Apollo 15 Mission',
    mission: 'Apollo 15',
    date: '1971 lunar surface mission',
    photographer: null,
    credit: 'NASA/MSFC',
    displayCaption:
      "David Scott returns towards the Lunar Module in the Rover, carrying rocks and soil collected during Apollo 15's lunar exploration.",
    historicalDescription:
      'Astronaut David R. Scott is seated in the Lunar Roving Vehicle for the return trip towards the Lunar Module Falcon, with rocks and soil collected near the Hadley-Apennine landing site.',
    sourceUrl: 'https://www.nasa.gov/image-article/lunar-roving-vehicle-apollo-15-mission/',
  },
  'apollo15-hadley-rille-rover': {
    id: 'apollo15-hadley-rille-rover',
    machineId: 'lrv',
    filename: 'HADLEY RILLE-EXPOSED-LAVA-LAYERS.jpg',
    src: '/assets/nasa/HADLEY%20RILLE-EXPOSED-LAVA-LAYERS.jpg',
    title: 'Apollo 15 Lunar Rover at Hadley Rille (AS15-85-11451)',
    mission: 'Apollo 15',
    date: 'July 31, 1971',
    photographer: 'Astronaut James B. Irwin, lunar module pilot',
    credit: 'NASA/JSC',
    displayCaption:
      "David Scott works beside the Lunar Rover at the edge of Hadley Rille during Apollo 15's first lunar surface excursion.",
    historicalDescription:
      "Astronaut David R. Scott performs a task at the Lunar Roving Vehicle parked on the edge of Hadley Rille during Apollo 15's first lunar surface excursion. The photograph was taken from the flank of St. George Crater, looking north along the rille.",
    sourceUrl: 'https://www.nasa.gov/image-detail/amf-as15-85-11451/',
  },
  'lrv-david-scott-driving': {
    id: 'lrv-david-scott-driving',
    machineId: 'lrv',
    filename: 'lrv-david-scott-driving.jpg',
    src: '/assets/nasa/lrv-david-scott-driving.jpg',
    title: 'David Scott in the Lunar Roving Vehicle (Apollo 15)',
    mission: 'Apollo 15',
    date: '1971 lunar surface mission',
    photographer: null,
    credit: 'NASA',
    displayCaption:
      'David Scott seated in the Lunar Roving Vehicle during the Apollo 15 lunar surface mission, showing the wire-mesh wheels, high-gain antenna, and hand controller.',
    historicalDescription:
      'Side-view photograph of Apollo 15 Commander David R. Scott seated in the Lunar Roving Vehicle on the lunar surface, showing the flexible wire-mesh wheels with chevron treads, umbrella-shaped high-gain antenna, T-shaped hand controller, and rear tool and sample rack.',
    sourceUrl: 'https://science.nasa.gov/moon/image-galleries/views-from-the-lunar-surface/',
  },
  'alsep-central-station-apollo14': {
    id: 'alsep-central-station-apollo14',
    machineId: 'alsep',
    filename: 'alsep-central-station-apollo14.jpg',
    src: '/assets/nasa/alsep-central-station-apollo14.jpg',
    title: 'Apollo 14 Mission Image — View of the ALSEP Station',
    mission: 'Apollo 14',
    date: 'February 5, 1971',
    photographer: null,
    credit: 'NASA/JSC',
    displayCaption:
      'The Apollo 14 crew deployed this ALSEP equipment on the Moon. Its central station connected and supported the scientific experiments.',
    historicalDescription:
      "A close-up showing two components of the Apollo Lunar Surface Experiments Package deployed during Apollo 14's first extravehicular activity. The central station appears in the centre background, the Active Seismic Experiment mortar package is in the foreground, and the Modularized Equipment Transporter is visible in the right background.",
    sourceUrl:
      'https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/',
  },
  'alsep-apollo15-instruments': {
    id: 'alsep-apollo15-instruments',
    machineId: 'alsep',
    filename: 'alsep-apollo15-instruments.jpg',
    src: '/assets/nasa/alsep-apollo15-instruments.jpg',
    title: 'Apollo 15 Lunar Rover and Instruments',
    mission: 'Apollo 15',
    date: 'July 31, 1971',
    photographer: 'Astronaut James B. Irwin, lunar module pilot',
    credit: 'NASA/JSC',
    displayCaption:
      "David Scott sits in the Lunar Rover during Apollo 15's first lunar surface excursion. Some ALSEP equipment is also visible in the scene.",
    historicalDescription:
      "Astronaut David R. Scott is seated in the Lunar Roving Vehicle during Apollo 15's first lunar surface excursion. Components of the Apollo Lunar Surface Experiments Package are also visible.",
    sourceUrl:
      'https://science.nasa.gov/resource/apollo-15-mission-image-view-of-the-apollo-lunar-surface-experiments-package-alsep/',
  },
  'sojourner-rock-garden': {
    id: 'sojourner-rock-garden',
    machineId: 'sojourner',
    filename: 'sojourner-rock-garden.jpg',
    src: '/assets/nasa/sojourner-rock-garden.jpg',
    title: 'Sojourner near the Rock Garden',
    mission: 'Mars Pathfinder',
    date: 'August 27, 1997 (Sol 42)',
    photographer: null,
    credit: 'NASA/JPL',
    displayCaption:
      'Sojourner explores the Martian Rock Garden. Its APXS instrument is visible extending from the back of the rover.',
    historicalDescription:
      'The image was taken near the end of daytime operations on Sol 42. Sojourner is positioned between the rocks Wedge and Flute Top. Other rocks, including Flat Top and the Rock Garden, are visible. The cylindrical instrument extending from the rear of the rover is its Alpha Proton X-ray Spectrometer.',
    sourceUrl: 'https://science.nasa.gov/resource/sojourner-near-the-rock-garden/',
  },
  'sojourner-apxs-at-work': {
    id: 'sojourner-apxs-at-work',
    machineId: 'sojourner',
    filename: 'sojourner-apxs-at-work.jpg',
    src: '/assets/nasa/sojourner-apxs-at-work.jpg',
    title: "Sojourner's APXS at Work",
    mission: 'Mars Pathfinder',
    date: 'July 8, 1997, Sol 4 (Image added July 9, 1997)',
    photographer: 'Imager for Mars Pathfinder',
    credit: 'NASA/JPL',
    displayCaption:
      'Sojourner uses its APXS instrument to study Martian soil. The rock Yogi is visible in the background.',
    historicalDescription:
      'Sojourner uses its Alpha Proton X-ray Spectrometer to study an area of Martian soil near several rocks. The large rock Yogi is visible in the upper right.',
    sourceUrl: 'https://science.nasa.gov/resource/sojourners-apxs-at-work/',
  },
  'spirit-robotic-arm': {
    id: 'spirit-robotic-arm',
    machineId: 'mer',
    filename: 'spirit-robotic-arm.jpg',
    src: '/assets/nasa/spirit-robotic-arm.jpg',
    title: "Spirit's Robotic Stretch on Sol 2052",
    mission: 'Mars Exploration Rovers (Spirit)',
    date: "October 11, 2009, Spirit's 2,052nd Martian day (Image added October 19, 2009)",
    photographer: "Spirit's front hazard-avoidance camera",
    credit: 'NASA/JPL-Caltech',
    displayCaption:
      "Spirit's robotic arm carries a turret of scientific tools, including its Mössbauer spectrometer and Rock Abrasion Tool.",
    historicalDescription:
      "Spirit recorded a view of its robotic arm and surroundings. The turret at the end of the arm shows the Mössbauer spectrometer pointing upwards and the Rock Abrasion Tool extending towards the right. Spirit's right-front wheel is also visible.",
    sourceUrl: 'https://science.nasa.gov/photojournal/spirits-robotic-stretch-on-sol-2052/',
  },
  'opportunity-robotic-arm': {
    id: 'opportunity-robotic-arm',
    machineId: 'mer',
    filename: 'opportunity-robotic-arm.jpg',
    src: '/assets/nasa/opportunity-robotic-arm.jpg',
    title: "Opportunity's Arm in 'Hover-Stow' Position",
    mission: 'Mars Exploration Rovers (Opportunity)',
    date: "January 18, 2006, Opportunity's 706th Martian day (Image added February 2, 2006)",
    photographer: "Opportunity's navigation camera",
    credit: 'NASA/JPL-Caltech',
    displayCaption:
      'Opportunity carries its robotic arm in a raised position while travelling across smoother Martian terrain.',
    historicalDescription:
      'The photograph shows Opportunity carrying its robotic arm in a raised hover-stow position while driving over smoother terrain. The instrument turret holds the Mössbauer spectrometer, Alpha Particle X-ray Spectrometer and Rock Abrasion Tool.',
    sourceUrl: 'https://www.jpl.nasa.gov/images/pia02156-opportunitys-arm-in-hover-stow-position/',
  },
};

const MACHINE_DEFAULT_NASA_PHOTOS = {
  'apollo-lm': {
    primaryId: 'apollo-lm-on-moon',
    secondaryId: 'apollo-lm-ascent-return',
    isGeneralContext: true,
  },
  lrv: {
    primaryId: 'apollo15-on-moon',
    secondaryId: 'apollo15-hadley-rille-rover',
    isGeneralContext: true,
  },
  alsep: {
    primaryId: 'alsep-central-station-apollo14',
    secondaryId: 'alsep-apollo15-instruments',
    isGeneralContext: true,
  },
  sojourner: {
    primaryId: 'sojourner-rock-garden',
    secondaryId: 'sojourner-apxs-at-work',
    isGeneralContext: true,
  },
  mer: {
    primaryId: 'spirit-robotic-arm',
    secondaryId: 'opportunity-robotic-arm',
    isGeneralContext: true,
  },
};

const COMPONENT_NASA_PHOTO_MAP = {
  // Apollo Lunar Module
  'lm-01': { primaryId: 'apollo-lm-ascent-return', secondaryId: null, isGeneralContext: false },
  'lm-02': { primaryId: 'apollo-lm-on-moon', secondaryId: null, isGeneralContext: false },
  'lm-03': { primaryId: 'apollo-lm-on-moon', secondaryId: null, isGeneralContext: false },
  'lm-04': { primaryId: 'apollo-lm-on-moon', secondaryId: null, isGeneralContext: true },
  'lm-05': { primaryId: 'apollo-lm-ascent-return', secondaryId: null, isGeneralContext: false },

  // Lunar Roving Vehicle
  'lrv-01': {
    primaryId: 'lrv-david-scott-driving',
    secondaryId: 'apollo15-on-moon',
    isGeneralContext: false,
  },
  'lrv-02': {
    primaryId: 'apollo15-hadley-rille-rover',
    secondaryId: 'apollo15-on-moon',
    isGeneralContext: true,
  },
  'lrv-03': {
    primaryId: 'lrv-david-scott-driving',
    secondaryId: 'apollo15-on-moon',
    isGeneralContext: false,
  },
  'lrv-04': {
    primaryId: 'lrv-david-scott-driving',
    secondaryId: null,
    isGeneralContext: false,
  },
  'lrv-05': {
    primaryId: 'lrv-apollo15-return',
    secondaryId: 'apollo15-hadley-rille-rover',
    isGeneralContext: false,
  },

  // ALSEP
  'alsep-01': {
    primaryId: 'alsep-central-station-apollo14',
    secondaryId: null,
    isGeneralContext: false,
  },
  'alsep-02': {
    primaryId: 'alsep-apollo15-instruments',
    secondaryId: 'alsep-central-station-apollo14',
    isGeneralContext: true,
  },
  'alsep-03': {
    primaryId: 'alsep-central-station-apollo14',
    secondaryId: null,
    isGeneralContext: false,
  },
  'alsep-04': {
    primaryId: 'alsep-central-station-apollo14',
    secondaryId: null,
    isGeneralContext: true,
  },
  'alsep-05': {
    primaryId: 'alsep-apollo15-instruments',
    secondaryId: null,
    isGeneralContext: true,
  },
  'alsep-06': {
    primaryId: 'alsep-apollo15-instruments',
    secondaryId: null,
    isGeneralContext: true,
  },
  'alsep-07': {
    primaryId: 'alsep-central-station-apollo14',
    secondaryId: 'alsep-apollo15-instruments',
    isGeneralContext: true,
  },

  // Sojourner Rover
  'soj-01': {
    primaryId: 'sojourner-rock-garden',
    secondaryId: null,
    isGeneralContext: false,
  },
  'soj-02': {
    primaryId: 'sojourner-apxs-at-work',
    secondaryId: 'sojourner-rock-garden',
    isGeneralContext: false,
  },
  'soj-03': {
    primaryId: 'sojourner-rock-garden',
    secondaryId: null,
    isGeneralContext: true,
  },
  'soj-04': {
    primaryId: 'sojourner-rock-garden',
    secondaryId: null,
    isGeneralContext: false,
  },

  // Spirit & Opportunity
  'mer-01': {
    primaryId: 'opportunity-robotic-arm',
    secondaryId: null,
    isGeneralContext: true,
  },
  'mer-02': {
    primaryId: 'spirit-robotic-arm',
    secondaryId: 'opportunity-robotic-arm',
    isGeneralContext: false,
  },
  'mer-03': {
    primaryId: 'spirit-robotic-arm',
    secondaryId: null,
    isGeneralContext: false,
  },
  'mer-04': {
    primaryId: 'spirit-robotic-arm',
    secondaryId: 'opportunity-robotic-arm',
    isGeneralContext: false,
  },
  'mer-05': {
    primaryId: 'opportunity-robotic-arm',
    secondaryId: 'spirit-robotic-arm',
    isGeneralContext: true,
  },
};

/**
 * Playable Apollo 15 Lunar Rover Mission Data (Hadley–Apennine Exploration)
 */
const LRV_MISSION_LOCATIONS = [
  {
    id: 'elbow-crater',
    order: '01',
    name: 'Elbow Crater',
    subtitle: 'TRAVERSE STOP 01  /  HADLEY RILLE BEND',
    x: 250,
    y: 545,
    radius: 56,
    points: 100,
    sampleName: 'Basalt & Regolith Sample',
    fact: "Apollo 15's first Rover traverse travelled towards Elbow Crater, where the astronauts collected and documented geological samples.",
    photo: {
      src: '/assets/nasa/apollo15-on-moon.jpg',
      caption:
        "During Apollo 15's first lunar surface excursion, the crew worked with the Lunar Roving Vehicle at the Hadley-Apennine landing site.",
      credit: 'NASA',
      sourceUrl: 'https://science.nasa.gov/resource/apollo-15-on-the-moon/',
      sourceLabel: 'View NASA Apollo 15 on the Moon resource',
    },
  },
  {
    id: 'spur-crater',
    order: '02',
    name: 'Spur Crater',
    subtitle: 'TRAVERSE STOP 02  /  APENNINE FRONT',
    x: 1030,
    y: 270,
    radius: 56,
    points: 100,
    sampleName: 'Highland Anorthosite Sample',
    fact: 'During the second traverse, the crew explored the Apennine Front and visited Spur Crater to investigate the surrounding lunar geology.',
    photo: {
      src: '/assets/nasa/apollo15-lrv-return-trip.webp',
      caption:
        'The Lunar Rover helped the Apollo 15 crew transport geological equipment and collected samples across the lunar surface.',
      credit: 'NASA/MSFC',
      sourceUrl: 'https://www.nasa.gov/image-article/lunar-roving-vehicle-apollo-15-mission/',
      sourceLabel: 'Read NASA Lunar Roving Vehicle Apollo 15 article',
    },
  },
  {
    id: 'hadley-rille',
    order: '03',
    name: 'Hadley Rille',
    subtitle: 'TRAVERSE STOP 03  /  CANYON RIM STRATA',
    x: 245,
    y: 245,
    radius: 56,
    points: 100,
    sampleName: 'Rille Rim Volcanic Sample',
    fact: "During Apollo 15's third geological traverse, astronauts photographed exposed layers along the west wall of Hadley Rille.",
    photo: {
      src: '/assets/nasa/HADLEY%20RILLE-EXPOSED-LAVA-LAYERS.jpg',
      caption:
        "Hadley Rille was one of the remarkable geological features explored during Apollo 15. The Rover helped extend the crew's reach across this rugged terrain.",
      credit: 'NASA/JSC (AS15-85-11451)',
      sourceUrl: 'https://www.nasa.gov/image-detail/amf-as15-85-11451/',
      sourceLabel: 'View NASA AS15-85-11451 Hadley Rille record',
    },
  },
];

const LRV_MISSION_CLUES = [
  {
    id: 'clue-wheels',
    title: 'Wheel Discovery',
    x: 455,
    y: 515,
    radius: 36,
    points: 50,
    fact: 'The Rover used flexible wire-mesh wheels with titanium chevrons for traction. These unusual wheels helped it travel across the rough lunar surface.',
  },
  {
    id: 'clue-power-antenna',
    title: 'Power & Antenna Discovery',
    x: 840,
    y: 315,
    radius: 36,
    points: 50,
    fact: "Each of the Rover's four wheels had its own electric drive motor. Two 36-volt batteries supplied its power, and the high-gain antenna transmitted television images and communications back to Earth.",
  },
  {
    id: 'clue-tools-distance',
    title: 'Traverse & Sample Discovery',
    x: 445,
    y: 265,
    radius: 36,
    points: 50,
    fact: 'The Rover carried scientific tools and sample containers across 27.8 kilometres over approximately 3 hours and 2 minutes of driving time on Apollo 15.',
  },
];

const LRV_BOULDERS = [
  { x: 430, y: 390, r: 28 },
  { x: 830, y: 475, r: 32 },
  { x: 640, y: 245, r: 26 },
  { x: 520, y: 615, r: 25 },
  { x: 920, y: 585, r: 30 },
  { x: 1120, y: 435, r: 26 },
];

const LRV_ENCOURAGING_MESSAGES = [
  "Moon explorer! You're doing amazing!",
  'Every great discovery starts with curiosity!',
  'You made it across the Moon!',
  'A brilliant mission. Keep exploring!',
  'Keep looking up and keep discovering!',
];

function loadBestMissionScore() {
  try {
    const raw = window.localStorage?.getItem(BEST_SCORE_STORAGE_KEY);
    const parsed = Number(raw);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  } catch {
    return 0;
  }
}

function saveBestMissionScore(score) {
  const currentBest = loadBestMissionScore();
  const nextBest = Math.max(currentBest, score);
  try {
    window.localStorage?.setItem(BEST_SCORE_STORAGE_KEY, String(nextBest));
  } catch {
    // Ignore storage quota errors
  }
  return nextBest;
}

/**
 * Application State
 */
const state = {
  screen: 'title', // 'title' | 'exterior' | 'entrance' | 'dialogue' | 'shelf' | 'discovery' | 'interactive' | 'rover-game'
  dialogueIndex: 0,
  selectedMachineId: 'lrv',
  activeComponentByMachine: {
    'apollo-lm': null,
    lrv: null,
    alsep: null,
    sojourner: null,
    mer: null,
  },
  discoveredByMachine: {
    'apollo-lm': new Set(),
    lrv: new Set(),
    alsep: new Set(),
    sojourner: new Set(),
    mer: new Set(),
  },
  isZoomOpen: false,
  zoomViewMode: 'package', // 'package' | 'shelf'
  isNasaPhotoOpen: false,
  activeNasaPhotoId: null,
  isNasaPhotoZoomed: false,
  lastNasaThumbTrigger: null,
  isMissionPreviewOpen: false,
  entranceTimer: null,
  musicEnabled: true,
  musicStarted: false,
  sfxEnabled: true,
  bestRoverScore: loadBestMissionScore(),
  roverGame: {
    phase: 'briefing', // 'briefing' | 'playing' | 'paused' | 'completed'
    score: 0,
    rover: {
      x: 640,
      y: 470,
      angle: -Math.PI / 2,
      speed: 0,
      wheelPhase: 0,
    },
    base: { x: 640, y: 400, radius: 66 },
    collectedSamples: new Set(),
    collectedClues: new Set(),
    nearbyLocationId: null,
    keys: { up: false, down: false, left: false, right: false },
    pointerTarget: {
      active: false,
      isDragging: false,
      x: 640,
      y: 470,
      targetSampleId: null,
      label: '',
    },
    gamepadConnected: false,
    gamepadPrevButtons: { collect: false, pause: false, back: false },
    tracks: [],
    dustPuffs: [],
    floatingTexts: [],
    rafId: null,
    lastFrameTime: 0,
  },
};

function getSelectedMachine() {
  return SHELF_MACHINES.find((m) => m.id === state.selectedMachineId) || SHELF_MACHINES[1];
}

/**
 * Render existing Figma artwork for any machine (either LRV crop image or SVG viewBox crop of store-shelf.png)
 */
function renderMachineArtworkMarkup(machine, extraClass = '') {
  if (machine.artwork.type === 'image') {
    return `
      <img
        class="machine-artwork-media ${extraClass}"
        src="${machine.artwork.src}"
        alt="ORBITOYS ${machine.name} collectible package"
      />
    `;
  }
  return `
    <svg
      class="machine-artwork-media machine-artwork-svg ${extraClass}"
      width="100%"
      height="100%"
      viewBox="${machine.artwork.viewBox}"
      role="img"
      aria-label="ORBITOYS ${machine.name} collectible package"
      preserveAspectRatio="xMidYMid meet"
    >
      <image href="/assets/store-shelf.png" width="1671" height="941" />
    </svg>
  `;
}

/**
 * Audio & Sound Design System (User Soundtrack + Web Audio API SFX)
 */
const audioSystem = (() => {
  let ctx = null;
  let themeAudio = null;
  let fadeInterval = null;
  let lastHoverSoundAt = 0;
  const TARGET_MUSIC_VOLUME = 0.28;

  function ensureContext() {
    if (!state.sfxEnabled) return null;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function initThemeMusic() {
    if (themeAudio) return themeAudio;
    themeAudio = new Audio(THEME_AUDIO_SRC);
    themeAudio.loop = true;
    themeAudio.preload = 'auto';
    themeAudio.volume = 0;
    themeAudio.addEventListener('play', () => {
      state.musicStarted = true;
      updateAudioControlsUI();
    });
    themeAudio.addEventListener('pause', () => {
      updateAudioControlsUI();
    });
    return themeAudio;
  }

  function startMusicWithFade() {
    const audio = initThemeMusic();
    if (!state.musicEnabled) return;

    if (audio.paused) {
      audio.volume = 0.14;
      audio
        .play()
        .then(() => {
          state.musicStarted = true;
          updateAudioControlsUI();
          if (fadeInterval) clearInterval(fadeInterval);
          fadeInterval = setInterval(() => {
            if (!state.musicEnabled || audio.paused) {
              clearInterval(fadeInterval);
              return;
            }
            if (audio.volume < TARGET_MUSIC_VOLUME - 0.02) {
              audio.volume = Math.min(TARGET_MUSIC_VOLUME, audio.volume + 0.02);
            } else {
              audio.volume = TARGET_MUSIC_VOLUME;
              clearInterval(fadeInterval);
            }
          }, 75);
        })
        .catch(() => {
          updateAudioControlsUI();
        });
    }
  }

  function toggleMusic() {
    const audio = initThemeMusic();

    if (fadeInterval) {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }

    // If music is currently paused, turn it ON and play immediately
    if (audio.paused) {
      state.musicEnabled = true;
      startMusicWithFade();
      updateAudioControlsUI();
      return;
    }

    // Otherwise pause playback and mark Music Off
    state.musicEnabled = false;
    audio.pause();
    updateAudioControlsUI();
  }

  function toggleSfx() {
    state.sfxEnabled = !state.sfxEnabled;
    if (state.sfxEnabled) {
      playClick();
    }
    updateAudioControlsUI();
  }

  function playClick() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(310, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.055);

    gain.gain.setValueAtTime(0.075, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  function playHover() {
    const nowMs = performance.now();
    if (nowMs - lastHoverSoundAt < 95) return;
    lastHoverSoundAt = nowMs;

    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(680, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.025);

    gain.gain.setValueAtTime(0.022, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.03);
  }

  function playDialogueTap() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.045);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.048);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  function playTransition() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(340, now + 0.14);
    osc.frequency.exponentialRampToValueAtTime(210, now + 0.28);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.045, now + 0.09);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.29);
  }

  function playSelectCollectible() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const start = now + i * 0.055;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.06, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.14);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + 0.15);
    });
  }

  function playDiscoveryChime(isComplete = false) {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const notes = isComplete
      ? [523.25, 659.25, 783.99, 1046.5]
      : [587.33, 739.99, 880];

    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const start = now + i * 0.065;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.075, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.24);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + 0.25);
    });
  }

  function playRoverStart() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(360, now + 0.18);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.32);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.065, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  function playSampleCollect() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const start = now + i * 0.06;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.08, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + 0.23);
    });
  }

  function playMissionComplete() {
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const start = now + i * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.09, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.38);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + 0.4);
    });
  }

  function isPlaying() {
    return Boolean(themeAudio && !themeAudio.paused);
  }

  return {
    initThemeMusic,
    startMusicWithFade,
    toggleMusic,
    toggleSfx,
    isPlaying,
    playClick,
    playHover,
    playDialogueTap,
    playTransition,
    playSelectCollectible,
    playDiscoveryChime,
    playRoverStart,
    playSampleCollect,
    playMissionComplete,
  };
})();

function updateAudioControlsUI() {
  const musicBtn = document.querySelector('#btn-toggle-music');
  const sfxBtn = document.querySelector('#btn-toggle-sfx');
  if (!musicBtn || !sfxBtn) return;

  const musicPlaying = state.musicEnabled && audioSystem.isPlaying();
  musicBtn.setAttribute('aria-pressed', musicPlaying ? 'true' : 'false');
  musicBtn.classList.toggle('is-muted', !musicPlaying);
  musicBtn.querySelector('.audio-pill__label').textContent = musicPlaying
    ? 'Music On'
    : 'Music Off';

  sfxBtn.setAttribute('aria-pressed', state.sfxEnabled ? 'true' : 'false');
  sfxBtn.classList.toggle('is-muted', !state.sfxEnabled);
  sfxBtn.querySelector('.audio-pill__label').textContent = state.sfxEnabled
    ? 'SFX On'
    : 'SFX Off';
}

/**
 * Star & Sparkle Cursor Trail System
 */
function initStarTrail() {
  const layer = document.querySelector('#star-trail-layer');
  if (!layer) return;

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const STAR_COLORS = ['#E9B45B', '#FFD05C', '#F3E8D5', '#FFF3A0', '#F6C97A'];
  const MAX_PARTICLES = 24;
  let activeCount = 0;
  let lastSpawnTime = 0;
  let lastX = -100;
  let lastY = -100;

  function spawnParticle(x, y, dx = 0, dy = 0) {
    if (
      reducedMotionQuery.matches ||
      activeCount >= MAX_PARTICLES ||
      (state.screen === 'rover-game' && state.roverGame.phase === 'playing')
    ) {
      return;
    }

    activeCount += 1;
    const el = document.createElement('span');
    const variantRoll = Math.random();
    const variantClass =
      variantRoll < 0.55
        ? 'star-particle--four-point'
        : variantRoll < 0.85
          ? 'star-particle--sparkle'
          : 'star-particle--twinkle';

    const size = Math.round(9 + Math.random() * 10);
    const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    const offsetX = -dx * 0.16 + (Math.random() - 0.5) * 14;
    const offsetY = -dy * 0.16 + (Math.random() - 0.5) * 14;
    const driftX = (Math.random() - 0.5) * 22;
    const driftY = -12 - Math.random() * 18;
    const rotateStart = Math.round(Math.random() * 60 - 30);
    const rotateEnd =
      rotateStart + Math.round((Math.random() > 0.5 ? 1 : -1) * (35 + Math.random() * 45));

    el.className = `star-particle ${variantClass}`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${x + offsetX}px`;
    el.style.top = `${y + offsetY}px`;
    el.style.setProperty('--star-color', color);
    el.style.setProperty('--drift-x', `${driftX}px`);
    el.style.setProperty('--drift-y', `${driftY}px`);
    el.style.setProperty('--rot-start', `${rotateStart}deg`);
    el.style.setProperty('--rot-end', `${rotateEnd}deg`);

    layer.appendChild(el);

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      activeCount = Math.max(0, activeCount - 1);
      el.remove();
    };

    el.addEventListener('animationend', cleanup, { once: true });
    setTimeout(cleanup, 950);
  }

  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'touch' || reducedMotionQuery.matches) return;

      const now = performance.now();
      if (now - lastSpawnTime < 42) return;

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);
      if (dist < 12) return;

      lastSpawnTime = now;
      lastX = e.clientX;
      lastY = e.clientY;

      spawnParticle(e.clientX, e.clientY, dx, dy);
    },
    { passive: true }
  );

  window.addEventListener(
    'pointerdown',
    (e) => {
      if (reducedMotionQuery.matches) return;
      const isInteractive = e.target.closest('button, a, [role="radio"], [role="tab"]');
      if (e.pointerType === 'touch' && isInteractive) {
        for (let i = 0; i < 3; i += 1) {
          const angle = (Math.PI * 2 * i) / 3 + Math.random() * 0.5;
          const radius = 10 + Math.random() * 10;
          spawnParticle(
            e.clientX + Math.cos(angle) * radius,
            e.clientY + Math.sin(angle) * radius
          );
        }
      }
    },
    { passive: true }
  );
}

const app = document.querySelector('#app');

/**
 * Build the application DOM once inside a fixed 100dvh viewport shell
 */
function buildApp() {
  document.body.dataset.screen = 'title';

  app.innerHTML = `
    <!-- Decorative Star & Sparkle Cursor Trail Layer -->
    <div class="star-trail-layer" id="star-trail-layer" aria-hidden="true"></div>

    <!-- Unobtrusive Persistent Audio Controls (Music & SFX) -->
    <aside class="audio-controls" aria-label="Audio controls">
      <button
        type="button"
        class="audio-pill"
        id="btn-toggle-music"
        aria-pressed="true"
        title="Toggle background music"
      >
        <svg class="audio-pill__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M9 4.5L5.2 7.5H2.5V12.5H5.2L9 15.5V4.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="audio-wave" d="M12.5 7.2C13.6 8 14.2 8.9 14.2 10C14.2 11.1 13.6 12 12.5 12.8M15 4.8C16.8 6.1 17.8 7.9 17.8 10C17.8 12.1 16.8 13.9 15 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <span class="audio-pill__label">Music On</span>
      </button>
      <button
        type="button"
        class="audio-pill"
        id="btn-toggle-sfx"
        aria-pressed="true"
        title="Toggle interaction sound effects"
      >
        <svg class="audio-pill__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 2.5L11.8 7.6L17 9.4L11.8 11.2L10 16.3L8.2 11.2L3 9.4L8.2 7.6L10 2.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
        </svg>
        <span class="audio-pill__label">SFX On</span>
      </button>
    </aside>

    <main class="game-viewport" id="game-viewport" aria-live="polite">
      <!-- 1. TITLE SCREEN (#26:8) -->
      <section class="screen screen--story is-active" id="screen-title" data-screen="title" aria-hidden="false" aria-label="ORBITOYS Title Screen">
        <div class="story-stage">
          <img
            class="story-bg"
            src="/assets/title-screen-bg.png"
            alt="Evening sky with full moon above neighborhood rooftops"
          />
          <div class="title-content">
            <img
              class="title-logo"
              src="/assets/orbitoys-logo.png"
              alt="ORBITOYS"
            />
            <p class="title-tagline">Not your ordinary toys.</p>
            <button type="button" class="btn-start" id="btn-start" data-sfx-hover="true" aria-label="Start game">
              <img src="/assets/icon-play.svg" alt="" class="btn-start__icon" aria-hidden="true" />
              <span>Start</span>
            </button>
          </div>
          <p class="title-credit">Images in this game were Generated using CHATGPT</p>
        </div>
      </section>

      <!-- 2. OUTSIDE THE STORE (#30:17) -->
      <section class="screen screen--story" id="screen-exterior" data-screen="exterior" aria-hidden="true" aria-label="Outside the Store">
        <div class="story-stage">
          <img
            class="story-bg story-bg--exterior"
            src="/assets/store-exterior.png"
            alt="A girl with a star backpack standing outside the warm glowing toy store"
          />
          <div class="exterior-actions">
            <button type="button" class="btn-enter-store" id="btn-enter-store" data-sfx-hover="true">
              <img src="/assets/icon-door-enter.svg" alt="" class="btn-enter-store__icon" aria-hidden="true" />
              <span>Enter the Store</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 3. APPROACHING THE ENTRANCE (#34:43) -->
      <section class="screen screen--story" id="screen-entrance" data-screen="entrance" aria-hidden="true" aria-label="Approaching the Store Entrance">
        <div class="story-stage story-stage--entrance" id="entrance-stage">
          <img
            class="story-bg story-bg--entrance"
            src="/assets/store-entrance.png"
            alt="The girl opening the wooden door and stepping inside the toy store"
          />
          <div class="entrance-overlay">
            <button type="button" class="entrance-skip-btn" id="btn-entrance-continue" aria-label="Step inside the store">
              <span>Stepping inside…</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 4. SCENE 4: SHOPKEEPER & GIRL CONVERSATION (11 LINES) -->
      <section class="screen screen--story" id="screen-dialogue" data-screen="dialogue" aria-hidden="true" aria-label="Store Conversation">
        <div class="story-stage story-stage--dialogue">
          <div class="dialogue-backgrounds" aria-hidden="true">
            <img
              class="story-bg dialogue-bg dialogue-bg--shopkeeper is-active"
              id="bg-shopkeeper"
              src="/assets/conversation-shopkeeper.png"
              alt=""
            />
            <img
              class="story-bg dialogue-bg dialogue-bg--girl"
              id="bg-girl"
              src="/assets/conversation-girl.png"
              alt=""
            />
            <img
              class="story-bg dialogue-bg dialogue-bg--shelf"
              id="bg-shelf"
              src="/assets/conversation-shopkeeper-shelf.png"
              alt=""
            />
          </div>

          <button
            type="button"
            class="dialogue-skip-btn"
            id="btn-skip-dialogue"
            data-sfx-hover="true"
            aria-label="Skip conversation and go straight to the ORBITOYS shelf"
          >
            <span>Skip to ORBITOYS</span>
            <span aria-hidden="true">→</span>
          </button>

          <div class="dialogue-widget pos-right" id="dialogue-widget" role="region" aria-label="Character dialogue">
            <img
              class="dialogue-pointer pointer--shopkeeper"
              id="dialogue-pointer"
              src="/assets/speech-pointer-shopkeeper.svg"
              alt=""
              aria-hidden="true"
            />
            <div class="dialogue-speaker-pill" id="dialogue-speaker">Shopkeeper</div>
            <div class="dialogue-bubble">
              <p class="dialogue-text" id="dialogue-text"></p>
              <button
                type="button"
                class="dialogue-next-btn"
                id="btn-next-dialogue"
                data-sfx-hover="true"
                aria-label="Next dialogue line"
                title="Next dialogue (Enter or Space)"
              >
                <img src="/assets/btn-next-dialogue.svg" alt="" aria-hidden="true" />
              </button>
              <div class="dialogue-progress" id="dialogue-progress" role="tablist" aria-label="Dialogue progress"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CHOOSE A MACHINE SHELF (#79:1700) -->
      <section class="screen screen--collection" id="screen-shelf" data-screen="shelf" aria-hidden="true" aria-label="Choose a machine to explore">
        <div class="collection-shell collection-shell--shelf">
          <header class="shelf-header">
            <div class="shelf-header__titles">
              <h1 class="heading-lg">Choose a machine to explore!</h1>
              <p class="body-md">Click a collectible once to select it, then click again or press Explore to open its story.</p>
            </div>
            <p class="caption-amber shelf-header__collection">SPACE EXPLORATION COLLECTION</p>
          </header>

          <!-- Shelf visual stage scaled to fit available viewport height while preserving 1671:941 ratio -->
          <div class="shelf-stage-wrapper">
            <div class="shelf-stage" id="shelf-stage">
              <img
                class="shelf-illustration"
                src="/assets/store-shelf.png"
                alt="ORBITOYS Space Exploration Collection shelf displaying five NASA collectibles: Apollo Lunar Module, Lunar Roving Vehicle, ALSEP, Sojourner Rover, and Spirit & Opportunity"
              />
              <div class="shelf-first-discovery-badge" id="shelf-first-badge">
                FIRST DISCOVERY
              </div>
              <div class="shelf-hitboxes" id="shelf-hitboxes" role="radiogroup" aria-label="Space Exploration Collectibles"></div>
            </div>
          </div>

          <!-- Compact touch-friendly collectible selector strip for mobile/tablet -->
          <div class="shelf-mobile-picker" id="shelf-mobile-picker" aria-label="Select a collectible machine"></div>

          <!-- Selected Machine Information Bar (#85:695) with Single Dynamic Primary Button -->
          <section class="selected-machine-bar" id="selected-machine-bar" aria-live="polite">
            <div class="selected-machine-bar__info">
              <div class="selected-machine-bar__meta-row">
                <p class="caption-orange" id="shelf-selected-caption"></p>
                <span class="machine-status-pill" id="shelf-selected-status"></span>
              </div>
              <h2 class="heading-lg text-plum" id="shelf-selected-title"></h2>
              <p class="body-md text-plum" id="shelf-selected-summary"></p>
            </div>
            <div class="selected-machine-bar__action">
              <button
                type="button"
                class="btn btn--primary"
                id="btn-explore-machine"
                data-sfx-hover="true"
              >
                <span id="btn-explore-machine-label">Explore Lunar Roving Vehicle</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                class="btn btn--play-mission"
                id="btn-shelf-play-mission"
                data-sfx-hover="true"
              >
                <img src="/assets/icon-play.svg" alt="" class="btn-play-mission__icon" aria-hidden="true" />
                <span>Play Lunar Rover Mission</span>
              </button>
            </div>
          </section>
        </div>
      </section>

      <!-- 6. REUSABLE MACHINE INTRODUCTION SCREEN (#94:676) -->
      <section class="screen screen--collection" id="screen-discovery" data-screen="discovery" aria-hidden="true" aria-label="Machine Introduction">
        <div class="collection-shell">
          <header class="collection-nav">
            <div class="collection-nav__titles">
              <h1 class="heading-lg" id="intro-nav-title">Mission discovery</h1>
              <p class="caption-amber" id="intro-nav-subtitle">ORBITOYS  /  SPACE EXPLORATION COLLECTION</p>
            </div>
            <div class="collection-nav__action">
              <button type="button" class="btn btn--primary" id="btn-discovery-back-shelf" data-sfx-hover="true">
                <span class="btn-arrow-left" aria-hidden="true">←</span>
                <span>Back to shelf</span>
              </button>
            </div>
          </header>

          <div class="discovery-grid">
            <!-- Left Card: Collectible Artwork (#94:678) -->
            <article class="collectible-card">
              <div class="collectible-card__image-wrap" id="intro-artwork-wrap"></div>
              <div class="collectible-card__footer">
                <div class="collectible-card__meta">
                  <p class="caption-amber">YOUR ORIGINAL COLLECTIBLE</p>
                  <p class="body-md">The same machine. A bigger story.</p>
                </div>
                <button
                  type="button"
                  class="btn-zoom"
                  id="btn-intro-zoom"
                  data-sfx-hover="true"
                  aria-label="View larger collectible artwork"
                >
                  <span aria-hidden="true">🔍</span>
                  <span>View Larger</span>
                </button>
              </div>
            </article>

            <!-- Right Card: Individual Machine Story & NASA Read More Links (#94:679) -->
            <article class="mission-story-card" id="intro-story-card">
              <div class="mission-story-card__content">
                <p class="caption-orange" id="intro-overline"></p>
                <h2 class="display-title text-plum" id="intro-machine-name"></h2>

                <div class="intro-facts-strip" id="intro-facts-strip"></div>

                <p class="heading-lg text-plum mission-story-card__lead" id="intro-description"></p>

                <div class="mission-story-card__special">
                  <p class="caption-orange" id="intro-special-heading">PURPOSE &amp; WHY IT MATTERED</p>
                  <p class="body-md text-plum" id="intro-purpose"></p>
                  <ul class="intro-highlights-list" id="intro-highlights-list"></ul>
                </div>

                <div class="read-more-block">
                  <p class="caption-orange">OFFICIAL NASA SOURCES — READ MORE</p>
                  <div class="read-more-links" id="intro-read-more-links"></div>
                </div>
              </div>

              <div class="mission-story-card__actions">
                <button type="button" class="btn btn--primary" id="btn-open-interactive-rover" data-sfx-hover="true">
                  <span id="btn-open-interactive-label">Explore Lunar Roving Vehicle</span>
                  <span class="btn-arrow" aria-hidden="true">→</span>
                </button>
                <button type="button" class="btn btn--secondary" id="btn-choose-another-machine" data-sfx-hover="true">
                  <span>Back to shelf</span>
                </button>
              </div>
            </article>
          </div>

          <footer class="collection-footer">
            <div class="collection-footer__copy">
              <h2 class="heading-lg">Big discoveries start with a little curiosity.</h2>
              <p class="body-md">Return to the shelf anytime. Your selected machine stays with you.</p>
            </div>
          </footer>
        </div>
      </section>

      <!-- 7. REUSABLE INTERACTIVE COMPONENT DISCOVERY SCREEN (#94:681) -->
      <section class="screen screen--collection" id="screen-interactive" data-screen="interactive" aria-hidden="true" aria-label="Interactive Component Discovery">
        <div class="collection-shell">
          <header class="collection-nav">
            <div class="collection-nav__titles">
              <h1 class="heading-lg" id="interactive-nav-title">Lunar Roving Vehicle</h1>
              <p class="caption-amber" id="interactive-nav-subtitle">INTERACTIVE DISCOVERY  /  APOLLO 15, 16 &amp; 17</p>
            </div>
            <div class="collection-nav__action">
              <button type="button" class="btn btn--primary" id="btn-back-to-intro" data-sfx-hover="true">
                <span class="btn-arrow-left" aria-hidden="true">←</span>
                <span>Back to introduction</span>
              </button>
            </div>
          </header>

          <div class="interactive-grid">
            <!-- Left Panel: Machine Collectible Laboratory (#94:683) -->
            <section class="rover-lab-card" aria-label="Collectible laboratory">
              <div class="rover-lab-card__header">
                <div class="rover-lab-card__title-row">
                  <div>
                    <p class="caption-amber">EXPLORE THE COLLECTIBLE</p>
                    <h2 class="label-lg" id="interactive-lab-prompt">Select a number or component. Reveal a discovery.</h2>
                  </div>
                  <button
                    type="button"
                    class="btn-zoom"
                    id="btn-interactive-zoom"
                    data-sfx-hover="true"
                    aria-label="View larger collectible artwork"
                  >
                    <span aria-hidden="true">🔍</span>
                    <span>View Larger</span>
                  </button>
                </div>
              </div>

              <div class="rover-lab-stage">
                <div class="rover-artwork-box" id="rover-artwork-box">
                  <div class="rover-artwork-media-holder" id="interactive-artwork-holder"></div>
                  <div class="rover-hotspots" id="rover-hotspots"></div>
                </div>
              </div>
            </section>

            <!-- Right Panel: Equipment Detail / Field Notes (#94:684) -->
            <section class="field-notes-card" id="field-notes-card" aria-live="polite">
              <div class="field-notes-card__top">
                <div class="field-notes-card__tag-row">
                  <p class="caption-orange" id="field-notes-tag">YOUR FIELD NOTES</p>
                  <span class="discovery-badge" id="field-notes-badge" hidden>Discovery Unlocked</span>
                </div>
                <h2 class="heading-lg text-plum" id="field-notes-heading"></h2>
                <p class="body-md text-plum field-notes-card__body" id="field-notes-body"></p>
                <p class="body-md text-plum field-notes-card__expanded" id="field-notes-expanded" hidden></p>
                <div class="field-notes-card__source" id="field-notes-source"></div>
                <div class="field-notes-card__photos" id="field-notes-photos"></div>
              </div>

              <div class="field-notes-card__progress">
                <div class="field-notes-card__counter-row">
                  <div>
                    <p class="caption-orange">DISCOVERIES MADE</p>
                    <div class="discoveries-counter">
                      <span class="display-title text-plum" id="discoveries-count">0</span>
                      <span class="heading-lg text-plum" id="discoveries-total">/ 5</span>
                    </div>
                  </div>
                  <span class="discoveries-complete-pill" id="discoveries-complete-pill" hidden>
                    ★ All components discovered!
                  </span>
                </div>

                <div class="discoveries-list" id="discoveries-list" role="list" aria-label="Machine components checklist"></div>
              </div>
            </section>
          </div>

          <footer class="collection-footer collection-footer--with-action">
            <div class="collection-footer__copy">
              <h2 class="heading-lg" id="interactive-footer-heading">Built for a world without roads.</h2>
              <p class="body-md" id="interactive-footer-body">
                Explore each component, then return to the shelf to discover another machine.
              </p>
            </div>
            <div class="collection-footer__action">
              <!-- Play Lunar Rover Mission button shown ONLY for Lunar Roving Vehicle -->
              <button
                type="button"
                class="btn btn--play-mission"
                id="btn-play-lrv-mission"
                data-sfx-hover="true"
                hidden
              >
                <img src="/assets/icon-play.svg" alt="" class="btn-play-mission__icon" aria-hidden="true" />
                <span>Play Lunar Rover Mission</span>
              </button>
              <button type="button" class="btn btn--primary" id="btn-interactive-back-shelf" data-sfx-hover="true">
                <span class="btn-arrow-left" aria-hidden="true">←</span>
                <span>Back to shelf</span>
              </button>
            </div>
          </footer>
        </div>
      </section>

      <!-- 8. PLAYABLE APOLLO 15 LUNAR ROVER MISSION (#screen-rover-game) -->
      <section
        class="screen screen--rover-game"
        id="screen-rover-game"
        data-screen="rover-game"
        aria-hidden="true"
        aria-label="Playable Apollo 15 Lunar Rover Mission"
      >
        <div class="rover-game-shell">
          <!-- Compact Game HUD -->
          <header class="rover-hud">
            <div class="rover-hud__brand">
              <p class="caption-amber">MISSION: HADLEY–APENNINE EXPLORATION</p>
              <h1 class="rover-hud__objective" id="rover-hud-objective">
                Drive to the 3 glowing craters and collect geological samples (0/3).
              </h1>
            </div>

            <div class="rover-hud__stats">
              <div class="rover-stat-card">
                <span class="rover-stat-card__label">SCORE</span>
                <span class="rover-stat-card__value" id="rover-hud-score">0</span>
                <span class="rover-stat-card__max">/ 800</span>
              </div>
              <div class="rover-stat-card">
                <span class="rover-stat-card__label">SAMPLES</span>
                <span class="rover-stat-card__value" id="rover-hud-samples">0 / 3</span>
              </div>
              <div class="rover-stat-card">
                <span class="rover-stat-card__label">CLUES</span>
                <span class="rover-stat-card__value" id="rover-hud-clues">0 / 3</span>
              </div>
              <div class="rover-stat-card rover-stat-card--best">
                <span class="rover-stat-card__label">BEST</span>
                <span class="rover-stat-card__value" id="rover-hud-best">0</span>
              </div>
              <button
                type="button"
                class="btn-rover-pause"
                id="btn-rover-pause"
                aria-label="Pause Lunar Rover Mission"
              >
                ⏸ Pause
              </button>
            </div>
          </header>

          <!-- 2D Illustrated Lunar Adventure Canvas Stage -->
          <div class="rover-stage-container">
            <canvas
              id="rover-game-canvas"
              class="rover-game-canvas"
              width="1280"
              height="720"
              aria-label="2D Lunar Roving Vehicle exploration map showing the Lunar Module, Elbow Crater, Spur Crater, and Hadley Rille"
            ></canvas>

            <!-- Proximity Sample Collection Action Prompt -->
            <div class="rover-proximity-bar" id="rover-proximity-bar" hidden>
              <button type="button" class="btn btn--play-mission rover-collect-btn" id="btn-rover-collect">
                <span id="rover-collect-prompt-text">Collect Sample at Elbow Crater (+100 pts) [Space / E]</span>
              </button>
            </div>

            <!-- Comic-Style Historical Discovery / Radio Toast Card -->
            <aside
              class="rover-discovery-toast"
              id="rover-discovery-toast"
              role="status"
              aria-live="polite"
              hidden
            >
              <div class="rover-discovery-toast__header">
                <div>
                  <p class="caption-orange" id="rover-toast-subtitle">HISTORICAL FIELD NOTE</p>
                  <h2 class="rover-discovery-toast__title" id="rover-toast-title">Elbow Crater Sample Collected!</h2>
                </div>
                <div class="rover-discovery-toast__header-right">
                  <span class="rover-toast-points" id="rover-toast-points">+100 PTS</span>
                  <button
                    type="button"
                    class="rover-toast-close"
                    id="btn-rover-toast-close"
                    aria-label="Dismiss field note"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div class="rover-discovery-toast__body">
                <div class="rover-discovery-toast__media" id="rover-toast-media" hidden>
                  <img id="rover-toast-img" src="" alt="" />
                  <div class="rover-toast-illustrated-rille" id="rover-toast-rille-art" hidden>
                    <span>HADLEY RILLE — EXPOSED LAVA LAYERS (AS15-85-11451)</span>
                  </div>
                </div>
                <div class="rover-discovery-toast__copy">
                  <p class="rover-discovery-toast__fact" id="rover-toast-fact"></p>
                  <p class="rover-discovery-toast__caption" id="rover-toast-caption" hidden></p>
                  <div class="rover-discovery-toast__meta" id="rover-toast-meta" hidden>
                    <span class="rover-toast-credit" id="rover-toast-credit"></span>
                    <a
                      class="read-more-link"
                      id="rover-toast-link"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span id="rover-toast-link-label">View NASA Record</span>
                      <span class="read-more-link__ext" aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <!-- Bottom Driving Controls Bar (Desktop Hints + Controller + Mobile Touch D-Pad) -->
          <footer class="rover-controls-bar">
            <div class="rover-controls-bar__hints">
              <span class="rover-control-chip"><strong>Keyboard:</strong> Arrows / WASD + Space / E</span>
              <span class="rover-control-chip"><strong>Mouse / Touch:</strong> Tap or drag on map to drive &amp; tap crater to collect</span>
              <span class="rover-control-chip" id="rover-gamepad-chip"><strong>Controller:</strong> Left Stick / D-Pad + A / Cross</span>
            </div>

            <div class="rover-touch-controls" aria-label="On-screen driving controls">
              <div class="rover-dpad">
                <button type="button" class="dpad-btn" data-dir="left" aria-label="Steer Left">◀</button>
                <div class="rover-dpad__vert">
                  <button type="button" class="dpad-btn" data-dir="up" aria-label="Drive Forward">▲</button>
                  <button type="button" class="dpad-btn" data-dir="down" aria-label="Reverse">▼</button>
                </div>
                <button type="button" class="dpad-btn" data-dir="right" aria-label="Steer Right">▶</button>
              </div>
              <button
                type="button"
                class="btn btn--primary rover-touch-collect-btn"
                id="btn-rover-touch-collect"
                disabled
              >
                Collect Sample
              </button>
            </div>
          </footer>
        </div>

        <!-- OVERLAY 1: MISSION BRIEFING BEFORE GAMEPLAY -->
        <div class="rover-overlay is-open" id="rover-briefing-overlay" role="dialog" aria-modal="true" aria-labelledby="rover-briefing-title">
          <div class="rover-modal-card">
            <div class="rover-modal-card__top-row">
              <p class="caption-orange">APOLLO 15  /  HADLEY–APENNINE  /  JULY 31, 1971</p>
              <span class="machine-status-pill machine-status-pill--playable" id="rover-briefing-best-pill">
                BEST SCORE: 0 / 800 PTS
              </span>
            </div>
            <h2 class="heading-lg text-plum" id="rover-briefing-title">
              MISSION: HADLEY-APENNINE EXPLORATION
            </h2>
            <p class="body-md text-plum rover-modal-card__lead">
              You are taking the Lunar Rover across the Moon to explore its rugged terrain and collect geological samples. Navigate the lunar landscape, discover interesting locations and bring your findings safely back to the Lunar Module.
            </p>

            <div class="rover-briefing-grid">
              <figure class="rover-briefing-photo">
                <img
                  src="/assets/nasa/apollo15-on-moon.jpg"
                  alt="Astronaut working at the Lunar Roving Vehicle during Apollo 15 at Hadley-Apennine"
                />
                <figcaption>
                  “During Apollo 15's first lunar surface excursion, the crew worked with the Lunar Roving Vehicle at the Hadley-Apennine landing site.”
                  <strong>Credit: NASA</strong> •
                  <a
                    href="https://science.nasa.gov/resource/apollo-15-on-the-moon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Official Source ↗</a>
                </figcaption>
              </figure>

              <div class="rover-briefing-details">
                <div class="rover-briefing-box">
                  <p class="caption-orange">MISSION OBJECTIVE &amp; SCORING (MAX 800 PTS)</p>
                  <ul class="intro-highlights-list">
                    <li><strong>Sample Target: 3</strong> — Collect samples at <strong>01 Elbow Crater</strong>, <strong>02 Spur Crater</strong>, and <strong>03 Hadley Rille</strong> (100 pts each).</li>
                    <li><strong>Exploration Clues: 3</strong> — Drive over glowing ★ field-note beacons along the trails (50 pts each).</li>
                    <li><strong>Safe Return:</strong> Drive back to the <strong>Lunar Module</strong> (+100 pts return + 250 pts completion).</li>
                  </ul>
                </div>

                <div class="rover-briefing-box">
                  <p class="caption-orange">CONTROLS GUIDE (KEYBOARD, MOUSE, TOUCH &amp; CONTROLLER)</p>
                  <ul class="intro-highlights-list">
                    <li><strong>Keyboard:</strong> Arrow Keys or WASD to drive &amp; steer • <strong>Space</strong> or <strong>E</strong> to collect a sample • <strong>Esc</strong> to pause.</li>
                    <li><strong>Mouse &amp; Phone Touch:</strong> Click, tap, or drag anywhere on the lunar map to drive there. Tap any crater to drive to it and automatically collect its sample (or use the on-screen D-Pad).</li>
                    <li><strong>Gamepad / Controller:</strong> Left Stick, D-Pad, or Triggers to drive &amp; steer • <strong>A / Cross</strong> or <strong>X / Square</strong> to collect samples &amp; confirm • <strong>Start</strong> to pause.</li>
                  </ul>
                </div>

                <p class="rover-historical-note">
                  <strong>Historical Fact:</strong> Apollo 15 was the first mission to use the Lunar Roving Vehicle on the Moon. Its first lunar use was on July 31, 1971.
                </p>
              </div>
            </div>

            <div class="rover-modal-card__actions">
              <button type="button" class="btn btn--secondary" id="btn-rover-briefing-exit">
                <span>← Exit to Toy Shop</span>
              </button>
              <button type="button" class="btn btn--play-mission" id="btn-rover-start-mission">
                <img src="/assets/icon-play.svg" alt="" class="btn-play-mission__icon" aria-hidden="true" />
                <span>Start Mission</span>
              </button>
            </div>
          </div>
        </div>

        <!-- OVERLAY 2: PAUSE MENU -->
        <div class="rover-overlay" id="rover-pause-overlay" role="dialog" aria-modal="true" aria-labelledby="rover-pause-title" hidden>
          <div class="rover-modal-card rover-modal-card--compact">
            <p class="caption-orange">MISSION PAUSED</p>
            <h2 class="heading-lg text-plum" id="rover-pause-title">Hadley–Apennine Exploration</h2>
            <p class="body-md text-plum">
              Rover movement and mission systems are paused. Choose an action below:
            </p>
            <div class="rover-pause-actions">
              <button type="button" class="btn btn--primary" id="btn-rover-resume">
                <span>Resume Mission</span>
              </button>
              <button type="button" class="btn btn--secondary" id="btn-rover-restart">
                <span>Restart Mission</span>
              </button>
              <button type="button" class="btn btn--secondary" id="btn-rover-exit">
                <span>Exit to Toy Shop</span>
              </button>
            </div>
          </div>
        </div>

        <!-- OVERLAY 3: MISSION COMPLETE & HISTORICAL DEBRIEF -->
        <div class="rover-overlay" id="rover-complete-overlay" role="dialog" aria-modal="true" aria-labelledby="rover-complete-title" hidden>
          <div class="rover-modal-card">
            <div class="rover-modal-card__top-row">
              <p class="caption-orange">APOLLO 15 HISTORICAL DEBRIEF  /  HADLEY–APENNINE</p>
              <span class="machine-status-pill machine-status-pill--playable">
                ★ MISSION COMPLETE
              </span>
            </div>
            <h2 class="display-title text-plum" id="rover-complete-title">MISSION COMPLETE</h2>
            <p class="heading-lg text-plum" id="rover-complete-encouragement">
              Moon explorer! You're doing amazing!
            </p>

            <div class="rover-score-summary">
              <div class="rover-score-box">
                <span class="rover-score-box__label">FINAL SCORE</span>
                <span class="rover-score-box__val" id="rover-complete-score">800 / 800</span>
              </div>
              <div class="rover-score-box">
                <span class="rover-score-box__label">BEST SCORE</span>
                <span class="rover-score-box__val" id="rover-complete-best">800 / 800</span>
              </div>
              <div class="rover-score-box">
                <span class="rover-score-box__label">SAMPLES COLLECTED</span>
                <span class="rover-score-box__val" id="rover-complete-samples">3 / 3</span>
              </div>
              <div class="rover-score-box">
                <span class="rover-score-box__label">CLUES DISCOVERED</span>
                <span class="rover-score-box__val" id="rover-complete-clues">3 / 3</span>
              </div>
            </div>

            <div class="rover-briefing-grid">
              <figure class="rover-briefing-photo">
                <img
                  src="/assets/nasa/apollo15-lrv-return-trip.webp"
                  alt="Apollo 15 Lunar Roving Vehicle on the lunar surface"
                />
                <figcaption>
                  “The Lunar Rover helped the Apollo 15 crew transport geological equipment and collected samples across the lunar surface.”
                  <strong>Credit: NASA/MSFC</strong> •
                  <a
                    href="https://www.nasa.gov/image-article/lunar-roving-vehicle-apollo-15-mission/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Official Source ↗</a>
                </figcaption>
              </figure>

              <div class="rover-briefing-details">
                <div class="rover-briefing-box">
                  <p class="caption-orange">APOLLO 15 HISTORICAL SUMMARY</p>
                  <ul class="intro-highlights-list">
                    <li><strong>Mission Distance:</strong> During Apollo 15, the Rover travelled 27.8 kilometres (approximately 28 km) over approximately 3 hours and 2 minutes of driving time.</li>
                    <li><strong>Mission Science:</strong> The Apollo 15 crew returned approximately 77.31 kilograms of lunar samples. These materials helped scientists investigate the Moon's geological history.</li>
                    <li><strong>Collectible Connection:</strong> All three Apollo Lunar Roving Vehicles remain on the Moon today at the Apollo 15, 16, and 17 landing sites.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="rover-modal-card__actions">
              <button type="button" class="btn btn--secondary" id="btn-rover-complete-shop">
                <span>← Return to Toy Shop</span>
              </button>
              <button type="button" class="btn btn--play-mission" id="btn-rover-play-again">
                <img src="/assets/icon-play.svg" alt="" class="btn-play-mission__icon" aria-hidden="true" />
                <span>Play Again</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- VIEW LARGER / ZOOM LIGHTBOX MODAL -->
    <div class="modal-backdrop" id="zoom-backdrop" hidden>
      <div class="zoom-modal" role="dialog" aria-modal="true" aria-labelledby="zoom-modal-title">
        <header class="zoom-modal__header">
          <div>
            <p class="caption-amber" id="zoom-modal-subtitle">COLLECTIBLE INSPECTION</p>
            <h2 class="heading-lg" id="zoom-modal-title">Lunar Roving Vehicle</h2>
          </div>
          <div class="zoom-modal__controls">
            <button type="button" class="btn-zoom-toggle is-active" id="btn-zoom-view-package">
              Collectible Package
            </button>
            <button type="button" class="btn-zoom-toggle" id="btn-zoom-view-shelf">
              Full Shelf View
            </button>
            <button type="button" class="btn-zoom-close" id="btn-zoom-close" aria-label="Close enlarged view">
              ✕ Close
            </button>
          </div>
        </header>
        <div class="zoom-modal__stage" id="zoom-modal-stage"></div>
      </div>
    </div>

    <!-- REUSABLE IN-GAME NASA ARCHIVAL PHOTOGRAPH VIEWER MODAL -->
    <div class="modal-backdrop" id="nasa-photo-backdrop" hidden>
      <div class="nasa-viewer-modal" role="dialog" aria-modal="true" aria-labelledby="nasa-viewer-title">
        <header class="nasa-viewer-modal__header">
          <div class="nasa-viewer-modal__titles">
            <p class="caption-amber" id="nasa-viewer-context">NASA ARCHIVAL PHOTOGRAPH</p>
            <h2 class="heading-lg" id="nasa-viewer-title">Apollo 15 on the Moon</h2>
          </div>
          <div class="nasa-viewer-modal__controls">
            <button
              type="button"
              class="btn-zoom-toggle"
              id="btn-nasa-viewer-zoom"
              aria-pressed="false"
            >
              🔍 Enlarge Image
            </button>
            <a
              class="btn-zoom-toggle nasa-open-original-link"
              id="nasa-viewer-open-original"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open original full-resolution NASA photograph in a new tab"
            >
              <span>Open Original Image</span>
              <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              class="btn-zoom-close"
              id="btn-nasa-viewer-close"
              aria-label="Close NASA photograph viewer"
            >
              ✕ Close
            </button>
          </div>
        </header>

        <div class="nasa-viewer-modal__stage" id="nasa-viewer-stage">
          <img
            class="nasa-viewer-modal__img"
            id="nasa-viewer-img"
            src=""
            alt=""
          />
          <div class="nasa-viewer-modal__fallback" id="nasa-viewer-fallback" hidden>
            <p class="heading-lg">Archival image file unavailable</p>
            <p class="body-md" id="nasa-viewer-fallback-text"></p>
          </div>
        </div>

        <footer class="nasa-viewer-modal__footer">
          <div class="nasa-viewer-meta-chips">
            <span class="nasa-meta-chip">
              <strong>Mission:</strong> <span id="nasa-viewer-mission"></span>
            </span>
            <span class="nasa-meta-chip">
              <strong>Date:</strong> <span id="nasa-viewer-date"></span>
            </span>
            <span class="nasa-meta-chip">
              <strong>Credit:</strong> <span id="nasa-viewer-credit"></span>
            </span>
            <span class="nasa-meta-chip" id="nasa-viewer-photographer-chip" hidden>
              <strong>Photographer / Camera:</strong> <span id="nasa-viewer-photographer"></span>
            </span>
          </div>
          <p class="nasa-viewer-modal__caption" id="nasa-viewer-caption"></p>
          <div class="nasa-viewer-modal__bottom-row">
            <p class="nasa-viewer-modal__desc" id="nasa-viewer-description"></p>
            <a
              class="read-more-link nasa-viewer-source-link"
              id="nasa-viewer-source-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Official NASA Source</span>
              <span class="read-more-link__ext" aria-hidden="true">↗</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  `;

  initStarTrail();
  initDialogueDots();
  initShelfCollectibles();
  bindEvents();
  renderDialogue();
  renderShelfSelection();
  renderMachineIntroduction();
  renderComponentDiscovery();
  updateRoverHud();
  drawRoverWorld();
  updateAudioControlsUI();

  // Attempt to start background music immediately on load; if blocked by browser autoplay policy,
  // unlock and start automatically on the very first click, tap, or keypress anywhere in the window.
  audioSystem.startMusicWithFade();
  const unlockMusicOnFirstGesture = (e) => {
    if (e.target && e.target.closest && e.target.closest('#btn-toggle-music')) return;
    if (state.musicEnabled && !state.musicStarted) {
      audioSystem.startMusicWithFade();
    }
    if (state.musicStarted || !state.musicEnabled) {
      window.removeEventListener('pointerdown', unlockMusicOnFirstGesture, true);
      window.removeEventListener('keydown', unlockMusicOnFirstGesture, true);
    }
  };
  window.addEventListener('pointerdown', unlockMusicOnFirstGesture, true);
  window.addEventListener('keydown', unlockMusicOnFirstGesture, true);
}

/**
 * Screen Transition Manager — Outgoing & incoming scenes occupy the same 100dvh viewport
 */
function navigateToScreen(targetScreen) {
  if (state.entranceTimer) {
    clearTimeout(state.entranceTimer);
    state.entranceTimer = null;
  }

  if (targetScreen !== 'rover-game') {
    stopRoverGameLoop();
    resetRoverKeys();
  }

  state.screen = targetScreen;
  document.body.dataset.screen = targetScreen;
  audioSystem.playTransition();

  if (targetScreen === 'discovery') {
    renderMachineIntroduction();
  } else if (targetScreen === 'interactive') {
    renderComponentDiscovery();
  } else if (targetScreen === 'shelf') {
    renderShelfSelection();
  } else if (targetScreen === 'rover-game') {
    updateRoverHud();
    drawRoverWorld();
  }

  const screens = document.querySelectorAll('.screen');
  screens.forEach((sec) => {
    const isMatch = sec.dataset.screen === targetScreen;
    sec.classList.toggle('is-active', isMatch);
    sec.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
  });

  if (targetScreen === 'entrance') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReducedMotion ? 700 : 2200;
    state.entranceTimer = setTimeout(() => {
      state.dialogueIndex = 0;
      renderDialogue();
      navigateToScreen('dialogue');
    }, delay);
  }
}

/**
 * Scene 4: 11-Line Shopkeeper & Girl Conversation
 */
function initDialogueDots() {
  const progressContainer = document.querySelector('#dialogue-progress');
  progressContainer.innerHTML = DIALOGUE_LINES.map(
    (item, idx) => `
      <button
        type="button"
        class="dialogue-dot-btn"
        data-line-index="${idx}"
        role="tab"
        aria-label="Dialogue line ${item.line} of ${DIALOGUE_LINES.length}"
        aria-selected="${idx === 0 ? 'true' : 'false'}"
      >
        <span class="dialogue-dot"></span>
      </button>
    `
  ).join('');
}

function renderDialogue() {
  const current = DIALOGUE_LINES[state.dialogueIndex];
  if (!current) return;

  document.querySelector('#bg-shopkeeper').classList.toggle('is-active', current.shot === 'shopkeeper');
  document.querySelector('#bg-girl').classList.toggle('is-active', current.shot === 'girl');
  document.querySelector('#bg-shelf').classList.toggle('is-active', current.shot === 'shelf');

  const widget = document.querySelector('#dialogue-widget');
  widget.classList.toggle('pos-right', current.position === 'right');
  widget.classList.toggle('pos-left', current.position === 'left');

  widget.classList.remove('is-animating');
  void widget.offsetWidth;
  widget.classList.add('is-animating');

  const pointer = document.querySelector('#dialogue-pointer');
  pointer.src = current.pointer;
  pointer.classList.toggle('pointer--shopkeeper', current.speaker === 'Shopkeeper');
  pointer.classList.toggle('pointer--girl', current.speaker === 'Girl');

  document.querySelector('#dialogue-speaker').textContent = current.speaker;
  document.querySelector('#dialogue-text').textContent = current.text;

  const nextBtn = document.querySelector('#btn-next-dialogue');
  const isLastLine = state.dialogueIndex === DIALOGUE_LINES.length - 1;
  nextBtn.setAttribute(
    'aria-label',
    isLastLine
      ? 'Continue to the ORBITOYS collection shelf'
      : `Next dialogue line (${state.dialogueIndex + 2} of ${DIALOGUE_LINES.length})`
  );

  document.querySelectorAll('.dialogue-dot-btn').forEach((dotBtn, idx) => {
    const isActive = idx === state.dialogueIndex;
    dotBtn.classList.toggle('is-current', isActive);
    dotBtn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
}

function advanceDialogue() {
  audioSystem.playDialogueTap();
  if (state.dialogueIndex < DIALOGUE_LINES.length - 1) {
    state.dialogueIndex += 1;
    renderDialogue();
  } else {
    navigateToScreen('shelf');
  }
}

/**
 * Screen 5: Collectible Shelf — First click selects, second click opens Machine Introduction
 */
function initShelfCollectibles() {
  const hitboxesContainer = document.querySelector('#shelf-hitboxes');
  const mobilePicker = document.querySelector('#shelf-mobile-picker');

  hitboxesContainer.innerHTML = SHELF_MACHINES.map(
    (machine) => `
      <button
        type="button"
        class="shelf-hitbox ${machine.isFirstDiscovery ? 'shelf-hitbox--first-discovery' : ''}"
        data-machine-id="${machine.id}"
        data-sfx-hover="true"
        role="radio"
        aria-checked="${machine.id === state.selectedMachineId ? 'true' : 'false'}"
        aria-label="${machine.name} (${machine.programme}). Click once to select, click again to open introduction."
        style="left: ${machine.hitbox.left}%; top: ${machine.hitbox.top}%; width: ${machine.hitbox.width}%; height: ${machine.hitbox.height}%;"
      >
        <span class="shelf-hitbox__pill">Selected • Click to Explore →</span>
        <span class="sr-only">${machine.name}</span>
      </button>
    `
  ).join('');

  mobilePicker.innerHTML = SHELF_MACHINES.map(
    (machine) => `
      <button
        type="button"
        class="shelf-picker-card ${machine.isFirstDiscovery ? 'shelf-picker-card--playable' : ''}"
        data-machine-id="${machine.id}"
        data-sfx-hover="true"
        aria-pressed="${machine.id === state.selectedMachineId ? 'true' : 'false'}"
      >
        <span class="shelf-picker-card__num">${machine.order}</span>
        <span class="shelf-picker-card__name">${machine.shortName}</span>
        ${machine.isFirstDiscovery ? '<span class="shelf-picker-card__star" aria-hidden="true">★</span>' : ''}
      </button>
    `
  ).join('');
}

function handleMachinePackageClick(machineId) {
  if (state.selectedMachineId === machineId) {
    // Second click/tap on already-selected machine opens its Machine Introduction
    audioSystem.playClick();
    navigateToScreen('discovery');
  } else {
    // First click/tap selects the machine and updates the bottom card
    audioSystem.playSelectCollectible();
    state.selectedMachineId = machineId;
    renderShelfSelection();
  }
}

function selectShelfMachine(machineId) {
  if (state.selectedMachineId !== machineId) {
    audioSystem.playSelectCollectible();
    state.selectedMachineId = machineId;
    renderShelfSelection();
  }
}

function renderShelfSelection() {
  const selected = getSelectedMachine();

  document.querySelectorAll('.shelf-hitbox').forEach((btn) => {
    const isSelected = btn.dataset.machineId === selected.id;
    btn.classList.toggle('is-selected', isSelected);
    btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
  });

  document.querySelectorAll('.shelf-picker-card').forEach((btn) => {
    const isSelected = btn.dataset.machineId === selected.id;
    btn.classList.toggle('is-selected', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  document.querySelector('#shelf-selected-caption').textContent = selected.caption;
  document.querySelector('#shelf-selected-title').textContent = selected.name;
  document.querySelector('#shelf-selected-summary').textContent = selected.summary;

  const statusPill = document.querySelector('#shelf-selected-status');
  if (selected.isPlayable) {
    statusPill.textContent =
      state.bestRoverScore > 0
        ? `FIRST DISCOVERY • PLAYABLE • BEST: ${state.bestRoverScore} / 800 PTS`
        : 'FIRST DISCOVERY • PLAYABLE MISSION';
    statusPill.className = 'machine-status-pill machine-status-pill--playable';
  } else {
    statusPill.textContent = `${selected.components.length} INTERACTIVE COMPONENTS`;
    statusPill.className = 'machine-status-pill machine-status-pill--discovery';
  }

  // Dynamic Explore button that always matches the selected machine, plus Play Mission button ONLY for LRV
  const exploreLabel = document.querySelector('#btn-explore-machine-label');
  exploreLabel.textContent = `Explore ${selected.name}`;

  const shelfPlayMissionBtn = document.querySelector('#btn-shelf-play-mission');
  if (shelfPlayMissionBtn) {
    shelfPlayMissionBtn.hidden = !selected.isPlayable;
  }

  const bar = document.querySelector('#selected-machine-bar');
  bar.classList.remove('is-updating');
  void bar.offsetWidth;
  bar.classList.add('is-updating');
}

/**
 * Screen 6: Individual Machine Introduction (#screen-discovery)
 */
function renderMachineIntroduction() {
  const machine = getSelectedMachine();

  document.querySelector('#intro-nav-title').textContent = `${machine.name} — Introduction`;
  document.querySelector('#intro-nav-subtitle').textContent =
    `ORBITOYS  /  ${machine.location.toUpperCase()}  /  ${machine.period.toUpperCase()}`;

  // Collectible artwork
  const artworkWrap = document.querySelector('#intro-artwork-wrap');
  artworkWrap.innerHTML = renderMachineArtworkMarkup(machine, 'collectible-card__image');

  // Story content
  document.querySelector('#intro-overline').textContent = machine.caption;
  document.querySelector('#intro-machine-name').textContent = machine.name;

  document.querySelector('#intro-facts-strip').innerHTML = `
    <div class="intro-fact-chip">
      <span class="intro-fact-chip__label">Location</span>
      <span class="intro-fact-chip__value">${machine.location}</span>
    </div>
    <div class="intro-fact-chip">
      <span class="intro-fact-chip__label">Programme / Mission</span>
      <span class="intro-fact-chip__value">${machine.programme}</span>
    </div>
    <div class="intro-fact-chip">
      <span class="intro-fact-chip__label">Period</span>
      <span class="intro-fact-chip__value">${machine.period}</span>
    </div>
  `;

  document.querySelector('#intro-description').textContent = machine.introDescription;
  document.querySelector('#intro-purpose').innerHTML = `<strong>Purpose:</strong> ${machine.purpose}`;

  const highlightsList = document.querySelector('#intro-highlights-list');
  highlightsList.innerHTML = machine.whyItMattered
    .map((point) => `<li>${point}</li>`)
    .join('');

  // Official NASA Read More links
  const linksContainer = document.querySelector('#intro-read-more-links');
  linksContainer.innerHTML = machine.readMore
    .map(
      (link) => `
        <a
          class="read-more-link"
          href="${link.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${link.label} (opens official NASA source in a new tab)"
        >
          <span>${link.label}</span>
          <span class="read-more-link__ext" aria-hidden="true">↗</span>
        </a>
      `
    )
    .join('');

  // Primary CTA button label
  document.querySelector('#btn-open-interactive-label').textContent = `Explore ${machine.name}`;
}

/**
 * Screen 7: Interactive Component Discovery (#screen-interactive)
 */
function renderComponentDiscovery(isNewDiscovery = false) {
  const machine = getSelectedMachine();
  const discoveredSet = state.discoveredByMachine[machine.id];
  const activeComponentId = state.activeComponentByMachine[machine.id];
  const activeComponent =
    machine.components.find((c) => c.id === activeComponentId) || null;

  document.querySelector('#interactive-nav-title').textContent = machine.name;
  document.querySelector('#interactive-nav-subtitle').textContent =
    `INTERACTIVE DISCOVERY  /  ${machine.programme.toUpperCase()}`;

  // Render collectible artwork inside the laboratory stage
  const artworkHolder = document.querySelector('#interactive-artwork-holder');
  artworkHolder.innerHTML = renderMachineArtworkMarkup(machine, 'rover-artwork-img');

  // Render numbered hotspots only for components supported by the visual artwork
  const hotspotsContainer = document.querySelector('#rover-hotspots');
  const hotspotComponents = machine.components.filter((c) => c.hotspot !== null);
  const hasListOnlyComponents = hotspotComponents.length < machine.components.length;

  document.querySelector('#interactive-lab-prompt').textContent = hasListOnlyComponents
    ? 'Select a numbered marker or choose any component from the list.'
    : 'Select a number. Reveal a discovery.';

  hotspotsContainer.innerHTML = hotspotComponents
    .map((comp) => {
      const isSelected = comp.id === activeComponentId;
      const isDiscovered = discoveredSet.has(comp.id);
      return `
        <button
          type="button"
          class="hotspot-btn ${isSelected ? 'is-selected' : ''} ${isDiscovered ? 'is-discovered' : ''}"
          data-component-id="${comp.id}"
          data-sfx-hover="true"
          style="left: ${comp.hotspot.leftPercent}%; top: ${comp.hotspot.topPercent}%;"
          aria-label="Component ${comp.number}: ${comp.name}"
          aria-pressed="${isSelected ? 'true' : 'false'}"
        >
          <span class="hotspot-btn__num">${comp.number}</span>
          <span class="hotspot-btn__check" aria-hidden="true">✓</span>
        </button>
      `;
    })
    .join('');

  // Render Field Notes details panel
  const tagEl = document.querySelector('#field-notes-tag');
  const badgeEl = document.querySelector('#field-notes-badge');
  const headingEl = document.querySelector('#field-notes-heading');
  const bodyEl = document.querySelector('#field-notes-body');
  const expandedEl = document.querySelector('#field-notes-expanded');
  const sourceEl = document.querySelector('#field-notes-source');
  const fieldNotesCard = document.querySelector('#field-notes-card');

  if (activeComponent) {
    tagEl.textContent = activeComponent.tag;
    headingEl.textContent = `${activeComponent.number} — ${activeComponent.name}`;
    bodyEl.textContent = activeComponent.description;

    if (activeComponent.expanded) {
      expandedEl.hidden = false;
      expandedEl.textContent = activeComponent.expanded;
    } else {
      expandedEl.hidden = true;
    }

    if (activeComponent.readMore) {
      sourceEl.innerHTML = `
        <a
          class="read-more-link read-more-link--inline"
          href="${activeComponent.readMore.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${activeComponent.readMore.label} (opens official NASA source in a new tab)"
        >
          <span>${activeComponent.readMore.label}</span>
          <span class="read-more-link__ext" aria-hidden="true">↗</span>
        </a>
      `;
    } else {
      sourceEl.innerHTML = '';
    }

    badgeEl.hidden = false;
    badgeEl.textContent = isNewDiscovery ? '★ New Discovery!' : '✓ Discovered';

    fieldNotesCard.classList.remove('is-pulsing');
    void fieldNotesCard.offsetWidth;
    fieldNotesCard.classList.add('is-pulsing');
  } else {
    tagEl.textContent = 'YOUR FIELD NOTES';
    headingEl.textContent = `How does ${machine.name} work?`;
    bodyEl.textContent =
      'Select a numbered marker on the collectible artwork or click any component in the list below to inspect its function and NASA history.';
    expandedEl.hidden = true;
    badgeEl.hidden = true;

    const primaryLink = machine.readMore[0];
    sourceEl.innerHTML = primaryLink
      ? `
        <a
          class="read-more-link read-more-link--inline"
          href="${primaryLink.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${primaryLink.label} (opens official NASA source in a new tab)"
        >
          <span>${primaryLink.label}</span>
          <span class="read-more-link__ext" aria-hidden="true">↗</span>
        </a>
      `
      : '';
  }

  // Render relevant NASA archival photograph thumbnail(s) inside #field-notes-photos
  renderNasaPhotoThumbnails(machine, activeComponent);

  // Update discovery counter
  const totalCount = machine.components.length;
  const discoveredCount = discoveredSet.size;
  document.querySelector('#discoveries-count').textContent = String(discoveredCount);
  document.querySelector('#discoveries-total').textContent = `/ ${totalCount}`;
  document.querySelector('#discoveries-complete-pill').hidden = discoveredCount < totalCount;

  // Render clickable component list
  const listContainer = document.querySelector('#discoveries-list');
  listContainer.innerHTML = machine.components
    .map((comp) => {
      const isSelected = comp.id === activeComponentId;
      const isDiscovered = discoveredSet.has(comp.id);
      const statusText = isSelected
        ? '● Viewing'
        : isDiscovered
          ? '✓ Discovered'
          : 'Explore →';
      return `
        <button
          type="button"
          class="discovery-item ${isSelected ? 'is-selected' : ''} ${isDiscovered ? 'is-discovered' : ''}"
          data-component-id="${comp.id}"
          data-sfx-hover="true"
          role="listitem"
        >
          <span class="discovery-item__num">${comp.number}</span>
          <span class="discovery-item__label">${comp.name}</span>
          <span class="discovery-item__status" aria-hidden="true">${statusText}</span>
        </button>
      `;
    })
    .join('');

  // Footer & Play Lunar Rover Mission button (ONLY visible for Lunar Roving Vehicle)
  const playMissionBtn = document.querySelector('#btn-play-lrv-mission');
  const footerHeading = document.querySelector('#interactive-footer-heading');
  const footerBody = document.querySelector('#interactive-footer-body');

  if (machine.isPlayable) {
    playMissionBtn.hidden = false;
    footerHeading.textContent = 'Built for a world without roads.';
    footerBody.textContent =
      'Explore all five rover components or launch the playable Lunar Rover Mission.';
  } else {
    playMissionBtn.hidden = true;
    footerHeading.textContent = `Exploring ${machine.name}`;
    footerBody.textContent =
      'Inspect every component above, then return to the shelf to explore another NASA machine.';
  }
}

function selectMachineComponent(componentId) {
  const machine = getSelectedMachine();
  const discoveredSet = state.discoveredByMachine[machine.id];
  const wasAlreadyDiscovered = discoveredSet.has(componentId);

  state.activeComponentByMachine[machine.id] = componentId;
  discoveredSet.add(componentId);

  const isNowComplete =
    !wasAlreadyDiscovered && discoveredSet.size === machine.components.length;
  audioSystem.playDiscoveryChime(isNowComplete);

  renderComponentDiscovery(!wasAlreadyDiscovered);
}

/**
 * View Larger / Zoom Modal
 */
function openZoomModal(mode = 'package') {
  const machine = getSelectedMachine();
  state.isZoomOpen = true;
  state.zoomViewMode = mode;

  const backdrop = document.querySelector('#zoom-backdrop');
  document.querySelector('#zoom-modal-title').textContent = machine.name;
  document.querySelector('#zoom-modal-subtitle').textContent = machine.caption;

  renderZoomStage();

  backdrop.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add('is-open');
    document.querySelector('#btn-zoom-close').focus();
  });
}

function renderZoomStage() {
  const machine = getSelectedMachine();
  const stage = document.querySelector('#zoom-modal-stage');
  const packageBtn = document.querySelector('#btn-zoom-view-package');
  const shelfBtn = document.querySelector('#btn-zoom-view-shelf');

  packageBtn.classList.toggle('is-active', state.zoomViewMode === 'package');
  shelfBtn.classList.toggle('is-active', state.zoomViewMode === 'shelf');

  if (state.zoomViewMode === 'shelf') {
    stage.innerHTML = `
      <img
        class="zoom-modal__shelf-img"
        src="/assets/store-shelf.png"
        alt="Full ORBITOYS Space Exploration Collection shelf"
      />
    `;
  } else {
    stage.innerHTML = `
      <div class="zoom-modal__package-box">
        ${renderMachineArtworkMarkup(machine, 'zoom-modal__package-img')}
      </div>
    `;
  }
}

function closeZoomModal() {
  state.isZoomOpen = false;
  const backdrop = document.querySelector('#zoom-backdrop');
  backdrop.classList.remove('is-open');
  backdrop.hidden = true;
}

/**
 * In-Game NASA Archival Photograph Thumbnails & Reusable Viewer Modal
 */
function renderNasaPhotoThumbnails(machine, activeComponent) {
  const photosContainer = document.querySelector('#field-notes-photos');
  if (!photosContainer) return;

  const mapping = activeComponent
    ? COMPONENT_NASA_PHOTO_MAP[activeComponent.id] || MACHINE_DEFAULT_NASA_PHOTOS[machine.id]
    : MACHINE_DEFAULT_NASA_PHOTOS[machine.id];

  const primaryPhoto = mapping ? NASA_ARCHIVAL_PHOTOS[mapping.primaryId] : null;
  const secondaryPhoto =
    mapping && mapping.secondaryId ? NASA_ARCHIVAL_PHOTOS[mapping.secondaryId] : null;

  if (!primaryPhoto) {
    photosContainer.innerHTML = '';
    photosContainer.hidden = true;
    return;
  }

  photosContainer.hidden = false;
  const contextLabel = mapping.isGeneralContext
    ? 'GENERAL HISTORICAL PHOTOGRAPH'
    : 'NASA ARCHIVAL PHOTOGRAPH';

  photosContainer.innerHTML = `
    <div class="nasa-photos-strip">
      <button
        type="button"
        class="nasa-thumb-btn"
        data-nasa-photo-id="${primaryPhoto.id}"
        data-nasa-context="${contextLabel}"
        data-sfx-hover="true"
        aria-label="Open NASA archival photograph: ${primaryPhoto.title} (${primaryPhoto.mission}, ${primaryPhoto.date})"
      >
        <div class="nasa-thumb-btn__media">
          <img
            class="nasa-thumb-btn__img"
            src="${primaryPhoto.src}"
            alt="${primaryPhoto.title} — ${primaryPhoto.displayCaption}"
            loading="lazy"
          />
          <span class="nasa-thumb-btn__zoom-badge" aria-hidden="true">🔍 View Photo</span>
        </div>
        <div class="nasa-thumb-btn__info">
          <span class="nasa-thumb-btn__overline">${contextLabel} • ${primaryPhoto.mission} • ${primaryPhoto.credit}</span>
          <span class="nasa-thumb-btn__title">${primaryPhoto.title}</span>
          <span class="nasa-thumb-btn__caption">${primaryPhoto.displayCaption}</span>
        </div>
      </button>
      ${
        secondaryPhoto
          ? `
        <button
          type="button"
          class="nasa-thumb-btn nasa-thumb-btn--secondary"
          data-nasa-photo-id="${secondaryPhoto.id}"
          data-nasa-context="RELATED NASA PHOTOGRAPH"
          data-sfx-hover="true"
          aria-label="Open related NASA archival photograph: ${secondaryPhoto.title} (${secondaryPhoto.mission})"
        >
          <div class="nasa-thumb-btn__media">
            <img
              class="nasa-thumb-btn__img"
              src="${secondaryPhoto.src}"
              alt="${secondaryPhoto.title} — ${secondaryPhoto.displayCaption}"
              loading="lazy"
            />
          </div>
          <div class="nasa-thumb-btn__info">
            <span class="nasa-thumb-btn__overline">RELATED • ${secondaryPhoto.mission}</span>
            <span class="nasa-thumb-btn__title">${secondaryPhoto.title}</span>
            <span class="nasa-thumb-btn__caption">${secondaryPhoto.displayCaption}</span>
          </div>
        </button>
      `
          : ''
      }
    </div>
  `;

  // Graceful fallback if an archival thumbnail image fails to load
  photosContainer.querySelectorAll('.nasa-thumb-btn__img').forEach((imgEl) => {
    imgEl.addEventListener('error', () => {
      imgEl.classList.add('is-broken');
      const mediaBox = imgEl.parentElement;
      if (mediaBox) {
        mediaBox.classList.add('has-fallback');
      }
    });
  });
}

function openNasaPhotoModal(photoId, contextLabel = 'NASA ARCHIVAL PHOTOGRAPH', triggerEl = null) {
  const photo = NASA_ARCHIVAL_PHOTOS[photoId];
  if (!photo) return;

  state.isNasaPhotoOpen = true;
  state.activeNasaPhotoId = photoId;
  state.isNasaPhotoZoomed = false;
  state.lastNasaThumbTrigger = triggerEl || null;

  const backdrop = document.querySelector('#nasa-photo-backdrop');
  const stage = document.querySelector('#nasa-viewer-stage');
  const imgEl = document.querySelector('#nasa-viewer-img');
  const fallbackEl = document.querySelector('#nasa-viewer-fallback');
  const fallbackTextEl = document.querySelector('#nasa-viewer-fallback-text');
  const zoomBtn = document.querySelector('#btn-nasa-viewer-zoom');

  document.querySelector('#nasa-viewer-context').textContent = contextLabel;
  document.querySelector('#nasa-viewer-title').textContent = photo.title;
  document.querySelector('#nasa-viewer-mission').textContent = photo.mission;
  document.querySelector('#nasa-viewer-date').textContent = photo.date;
  document.querySelector('#nasa-viewer-credit').textContent = photo.credit;

  const photographerChip = document.querySelector('#nasa-viewer-photographer-chip');
  const photographerVal = document.querySelector('#nasa-viewer-photographer');
  if (photo.photographer) {
    photographerChip.hidden = false;
    photographerVal.textContent = photo.photographer;
  } else {
    photographerChip.hidden = true;
    photographerVal.textContent = '';
  }

  document.querySelector('#nasa-viewer-caption').textContent = `“${photo.displayCaption}”`;
  document.querySelector('#nasa-viewer-description').textContent = photo.historicalDescription;

  const openOrigLink = document.querySelector('#nasa-viewer-open-original');
  openOrigLink.href = photo.src;

  const sourceLink = document.querySelector('#nasa-viewer-source-link');
  sourceLink.href = photo.sourceUrl;

  stage.classList.remove('is-zoomed');
  zoomBtn.classList.remove('is-active');
  zoomBtn.setAttribute('aria-pressed', 'false');
  zoomBtn.textContent = '🔍 Enlarge Image';

  fallbackEl.hidden = true;
  imgEl.hidden = false;
  imgEl.src = photo.src;
  imgEl.alt = `${photo.title} (${photo.mission}, ${photo.date}) — ${photo.displayCaption}`;

  imgEl.onerror = () => {
    imgEl.hidden = true;
    fallbackEl.hidden = false;
    fallbackTextEl.textContent = `Expected local file: ${photo.src} (${photo.title})`;
  };

  backdrop.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add('is-open');
    document.querySelector('#btn-nasa-viewer-close').focus();
  });
}

function toggleNasaPhotoZoom() {
  if (!state.isNasaPhotoOpen) return;
  state.isNasaPhotoZoomed = !state.isNasaPhotoZoomed;
  const stage = document.querySelector('#nasa-viewer-stage');
  const zoomBtn = document.querySelector('#btn-nasa-viewer-zoom');
  stage.classList.toggle('is-zoomed', state.isNasaPhotoZoomed);
  zoomBtn.classList.toggle('is-active', state.isNasaPhotoZoomed);
  zoomBtn.setAttribute('aria-pressed', state.isNasaPhotoZoomed ? 'true' : 'false');
  zoomBtn.textContent = state.isNasaPhotoZoomed ? '🔍 Fit to Viewer' : '🔍 Enlarge Image';
}

function closeNasaPhotoModal() {
  state.isNasaPhotoOpen = false;
  state.isNasaPhotoZoomed = false;
  const backdrop = document.querySelector('#nasa-photo-backdrop');
  backdrop.classList.remove('is-open');
  backdrop.hidden = true;

  if (state.lastNasaThumbTrigger && typeof state.lastNasaThumbTrigger.focus === 'function') {
    state.lastNasaThumbTrigger.focus();
  }
}

/**
 * Screen 8: Playable Apollo 15 Lunar Rover Experience (Hadley–Apennine Exploration)
 */
const ROVER_STARS = [
  { x: 68, y: 28, r: 1.5, a: 0.85 },
  { x: 145, y: 52, r: 1.1, a: 0.65 },
  { x: 230, y: 22, r: 1.8, a: 0.9 },
  { x: 340, y: 44, r: 1.2, a: 0.7 },
  { x: 425, y: 19, r: 1.4, a: 0.8 },
  { x: 520, y: 38, r: 1.6, a: 0.85 },
  { x: 615, y: 24, r: 1.1, a: 0.6 },
  { x: 720, y: 46, r: 1.7, a: 0.9 },
  { x: 815, y: 20, r: 1.3, a: 0.75 },
  { x: 910, y: 36, r: 1.5, a: 0.8 },
  { x: 995, y: 18, r: 1.2, a: 0.7 },
  { x: 1165, y: 32, r: 1.6, a: 0.88 },
  { x: 1230, y: 54, r: 1.2, a: 0.72 },
];

function normalizeAngleDiff(targetAngle, currentAngle) {
  let diff = targetAngle - currentAngle;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return diff;
}

function clearRoverPointerTarget() {
  const pt = state.roverGame.pointerTarget;
  pt.active = false;
  pt.isDragging = false;
  pt.targetSampleId = null;
  pt.label = '';
}

function resetRoverKeys() {
  const keys = state.roverGame.keys;
  keys.up = false;
  keys.down = false;
  keys.left = false;
  keys.right = false;
  clearRoverPointerTarget();
  document.querySelectorAll('.dpad-btn.is-pressed').forEach((btn) => {
    btn.classList.remove('is-pressed');
  });
}

function resetRoverMissionState(targetPhase = 'briefing') {
  const g = state.roverGame;
  g.phase = targetPhase;
  g.score = 0;
  g.rover.x = 640;
  g.rover.y = 472;
  g.rover.angle = -Math.PI / 2;
  g.rover.speed = 0;
  g.rover.wheelPhase = 0;
  g.collectedSamples = new Set();
  g.collectedClues = new Set();
  g.nearbyLocationId = null;
  g.tracks = [];
  g.dustPuffs = [];
  g.floatingTexts = [];
  g.lastFrameTime = performance.now();
  resetRoverKeys();
  hideRoverDiscoveryToast();
}

function syncRoverOverlays() {
  const phase = state.roverGame.phase;
  const briefingOverlay = document.querySelector('#rover-briefing-overlay');
  const pauseOverlay = document.querySelector('#rover-pause-overlay');
  const completeOverlay = document.querySelector('#rover-complete-overlay');

  if (briefingOverlay) {
    const showBriefing = phase === 'briefing';
    briefingOverlay.hidden = !showBriefing;
    briefingOverlay.classList.toggle('is-open', showBriefing);
  }
  if (pauseOverlay) {
    const showPause = phase === 'paused';
    pauseOverlay.hidden = !showPause;
    pauseOverlay.classList.toggle('is-open', showPause);
  }
  if (completeOverlay) {
    const showComplete = phase === 'completed';
    completeOverlay.hidden = !showComplete;
    completeOverlay.classList.toggle('is-open', showComplete);
  }
}

function openLunarRoverMission() {
  state.selectedMachineId = 'lrv';
  state.bestRoverScore = loadBestMissionScore();
  resetRoverMissionState('briefing');
  syncRoverOverlays();
  updateRoverHud();
  navigateToScreen('rover-game');
  startRoverGameLoop();
  requestAnimationFrame(() => {
    drawRoverWorld();
    const startBtn = document.querySelector('#btn-rover-start-mission');
    if (startBtn) startBtn.focus();
  });
}

function startRoverMissionRun() {
  audioSystem.playRoverStart();
  resetRoverMissionState('playing');
  syncRoverOverlays();
  updateRoverHud();
  drawRoverWorld();
  startRoverGameLoop();
}

function pauseRoverMission() {
  if (state.screen !== 'rover-game' || state.roverGame.phase !== 'playing') return;
  audioSystem.playClick();
  state.roverGame.phase = 'paused';
  resetRoverKeys();
  syncRoverOverlays();
  const resumeBtn = document.querySelector('#btn-rover-resume');
  if (resumeBtn) resumeBtn.focus();
}

function resumeRoverMission() {
  if (state.screen !== 'rover-game' || state.roverGame.phase !== 'paused') return;
  audioSystem.playClick();
  state.roverGame.phase = 'playing';
  state.roverGame.lastFrameTime = performance.now();
  syncRoverOverlays();
  startRoverGameLoop();
}

function restartRoverMission() {
  audioSystem.playRoverStart();
  resetRoverMissionState('playing');
  syncRoverOverlays();
  updateRoverHud();
  drawRoverWorld();
  startRoverGameLoop();
}

function exitRoverMissionToShop() {
  audioSystem.playClick();
  stopRoverGameLoop();
  resetRoverKeys();
  hideRoverDiscoveryToast();
  state.selectedMachineId = 'lrv';
  navigateToScreen('shelf');
}

/**
 * Poll connected Gamepad / Controller (Xbox, PlayStation, Switch, or generic USB/Bluetooth)
 */
function pollRoverGamepad() {
  const g = state.roverGame;
  const getGamepadsFn = window.navigator?.getGamepads;
  if (typeof getGamepadsFn !== 'function') {
    return { active: false, stickX: 0, stickY: 0, throttle: 0, dpadUp: false, dpadDown: false, dpadLeft: false, dpadRight: false };
  }

  let pad = null;
  try {
    const pads = getGamepadsFn.call(window.navigator) || [];
    for (let i = 0; i < pads.length; i += 1) {
      if (pads[i] && pads[i].connected) {
        pad = pads[i];
        break;
      }
    }
  } catch {
    pad = null;
  }

  const chipEl = document.querySelector('#rover-gamepad-chip');
  if (!pad) {
    if (g.gamepadConnected) {
      g.gamepadConnected = false;
      if (chipEl) {
        chipEl.innerHTML = '<strong>Controller:</strong> Left Stick / D-Pad + A / Cross';
      }
    }
    return { active: false, stickX: 0, stickY: 0, throttle: 0, dpadUp: false, dpadDown: false, dpadLeft: false, dpadRight: false };
  }

  if (!g.gamepadConnected) {
    g.gamepadConnected = true;
    if (chipEl) {
      chipEl.innerHTML = '<strong>🎮 Controller Ready:</strong> Stick / D-Pad + A to Collect';
    }
  }

  const btnPressed = (idx) => Boolean(pad.buttons?.[idx]?.pressed);
  const btnValue = (idx) => Number(pad.buttons?.[idx]?.value || 0);

  // Action buttons: A / Cross (0) or X / Square (2) = Collect / Confirm
  const collectNow = btnPressed(0) || btnPressed(2);
  // Start / Options (9) = Pause / Resume
  const pauseNow = btnPressed(9);
  // B / Circle (1) = Dismiss Toast or Exit
  const backNow = btnPressed(1);

  if (collectNow && !g.gamepadPrevButtons.collect) {
    if (g.phase === 'briefing') {
      startRoverMissionRun();
    } else if (g.phase === 'playing') {
      collectNearbySample();
    } else if (g.phase === 'paused') {
      resumeRoverMission();
    } else if (g.phase === 'completed') {
      restartRoverMission();
    }
  }

  if (pauseNow && !g.gamepadPrevButtons.pause) {
    if (g.phase === 'playing') {
      pauseRoverMission();
    } else if (g.phase === 'paused') {
      resumeRoverMission();
    }
  }

  if (backNow && !g.gamepadPrevButtons.back) {
    const toast = document.querySelector('#rover-discovery-toast');
    if (toast && !toast.hidden) {
      audioSystem.playClick();
      hideRoverDiscoveryToast();
    } else if (g.phase === 'paused') {
      exitRoverMissionToShop();
    }
  }

  g.gamepadPrevButtons.collect = collectNow;
  g.gamepadPrevButtons.pause = pauseNow;
  g.gamepadPrevButtons.back = backNow;

  const deadzone = 0.18;
  const rawLX = Number(pad.axes?.[0] || 0);
  const rawLY = Number(pad.axes?.[1] || 0);
  const rawRX = Number(pad.axes?.[2] || 0);
  const rawRY = Number(pad.axes?.[3] || 0);

  const stickX = Math.abs(rawLX) > deadzone ? rawLX : Math.abs(rawRX) > deadzone ? rawRX : 0;
  const stickY = Math.abs(rawLY) > deadzone ? rawLY : Math.abs(rawRY) > deadzone ? rawRY : 0;

  const rt = btnValue(7);
  const lt = btnValue(6);
  const throttle = rt > 0.1 || lt > 0.1 ? rt - lt : 0;

  const dpadUp = btnPressed(12);
  const dpadDown = btnPressed(13);
  const dpadLeft = btnPressed(14);
  const dpadRight = btnPressed(15);

  const active =
    stickX !== 0 ||
    stickY !== 0 ||
    throttle !== 0 ||
    dpadUp ||
    dpadDown ||
    dpadLeft ||
    dpadRight;

  return { active, stickX, stickY, throttle, dpadUp, dpadDown, dpadLeft, dpadRight };
}

function startRoverGameLoop() {
  stopRoverGameLoop();
  state.roverGame.lastFrameTime = performance.now();
  const step = (now) => {
    if (state.screen !== 'rover-game') {
      state.roverGame.rafId = null;
      return;
    }
    const dt = Math.min(0.05, Math.max(0.004, (now - state.roverGame.lastFrameTime) / 1000));
    state.roverGame.lastFrameTime = now;

    const gpState = pollRoverGamepad();

    if (state.roverGame.phase === 'playing') {
      updateRoverWorld(dt, gpState);
      drawRoverWorld();
    }
    state.roverGame.rafId = requestAnimationFrame(step);
  };
  state.roverGame.rafId = requestAnimationFrame(step);
}

function stopRoverGameLoop() {
  if (state.roverGame.rafId) {
    cancelAnimationFrame(state.roverGame.rafId);
    state.roverGame.rafId = null;
  }
}

function addFloatingRoverScore(x, y, text, color = '#E9B45B') {
  state.roverGame.floatingTexts.push({
    x,
    y,
    text,
    color,
    life: 1.35,
    maxLife: 1.35,
  });
}

function showRoverDiscoveryToast({
  subtitle,
  title,
  pointsText,
  fact,
  photo = null,
}) {
  const toast = document.querySelector('#rover-discovery-toast');
  if (!toast) return;

  document.querySelector('#rover-toast-subtitle').textContent = subtitle;
  document.querySelector('#rover-toast-title').textContent = title;
  document.querySelector('#rover-toast-points').textContent = pointsText;
  document.querySelector('#rover-toast-fact').textContent = fact;

  const mediaWrap = document.querySelector('#rover-toast-media');
  const imgEl = document.querySelector('#rover-toast-img');
  const rilleArtEl = document.querySelector('#rover-toast-rille-art');
  const captionEl = document.querySelector('#rover-toast-caption');
  const metaEl = document.querySelector('#rover-toast-meta');
  const creditEl = document.querySelector('#rover-toast-credit');
  const linkEl = document.querySelector('#rover-toast-link');
  const linkLabelEl = document.querySelector('#rover-toast-link-label');

  if (photo) {
    mediaWrap.hidden = false;
    if (photo.src) {
      imgEl.hidden = false;
      imgEl.src = photo.src;
      imgEl.alt = photo.caption;
      rilleArtEl.hidden = true;
    } else {
      imgEl.hidden = true;
      rilleArtEl.hidden = false;
    }
    captionEl.hidden = false;
    captionEl.textContent = photo.caption;
    metaEl.hidden = false;
    creditEl.textContent = `Credit: ${photo.credit}`;
    linkEl.href = photo.sourceUrl;
    linkLabelEl.textContent = photo.sourceLabel || 'Official NASA Source';
  } else {
    mediaWrap.hidden = true;
    captionEl.hidden = true;
    metaEl.hidden = true;
  }

  toast.hidden = false;
  toast.classList.remove('is-animating');
  void toast.offsetWidth;
  toast.classList.add('is-animating');
}

function hideRoverDiscoveryToast() {
  const toast = document.querySelector('#rover-discovery-toast');
  if (toast) {
    toast.hidden = true;
  }
}

function updateRoverHud() {
  const g = state.roverGame;
  const samplesCount = g.collectedSamples.size;
  const cluesCount = g.collectedClues.size;

  const scoreEl = document.querySelector('#rover-hud-score');
  const samplesEl = document.querySelector('#rover-hud-samples');
  const cluesEl = document.querySelector('#rover-hud-clues');
  const bestEl = document.querySelector('#rover-hud-best');
  const objectiveEl = document.querySelector('#rover-hud-objective');
  const briefingBestPill = document.querySelector('#rover-briefing-best-pill');

  if (scoreEl) scoreEl.textContent = String(g.score);
  if (samplesEl) samplesEl.textContent = `${samplesCount} / ${LRV_MISSION_LOCATIONS.length}`;
  if (cluesEl) cluesEl.textContent = `${cluesCount} / ${LRV_MISSION_CLUES.length}`;
  if (bestEl) bestEl.textContent = String(state.bestRoverScore);
  if (briefingBestPill) {
    briefingBestPill.textContent = `BEST SCORE: ${state.bestRoverScore} / 800 PTS`;
  }

  if (objectiveEl) {
    if (samplesCount < LRV_MISSION_LOCATIONS.length) {
      const remaining = LRV_MISSION_LOCATIONS.filter((l) => !g.collectedSamples.has(l.id))
        .map((l) => `${l.order} ${l.name}`)
        .join(', ');
      objectiveEl.textContent = `Collect geological samples (${samplesCount}/3) — Remaining: ${remaining}.`;
    } else {
      objectiveEl.textContent =
        'All 3 samples collected! Drive back to the Lunar Module at the center of the map (+350 pts).';
    }
  }

  const proximityBar = document.querySelector('#rover-proximity-bar');
  const promptText = document.querySelector('#rover-collect-prompt-text');
  const touchCollectBtn = document.querySelector('#btn-rover-touch-collect');
  const nearbyLoc = LRV_MISSION_LOCATIONS.find((l) => l.id === g.nearbyLocationId) || null;

  if (nearbyLoc && g.phase === 'playing') {
    if (proximityBar) proximityBar.hidden = false;
    if (promptText) {
      promptText.textContent = `Collect Sample at ${nearbyLoc.order} ${nearbyLoc.name} (+${nearbyLoc.points} pts) [Space / E]`;
    }
    if (touchCollectBtn) {
      touchCollectBtn.disabled = false;
      touchCollectBtn.textContent = `Collect ${nearbyLoc.name} (+100)`;
    }
  } else {
    if (proximityBar) proximityBar.hidden = true;
    if (touchCollectBtn) {
      touchCollectBtn.disabled = true;
      touchCollectBtn.textContent = 'Collect Sample';
    }
  }
}

function collectNearbySample() {
  const g = state.roverGame;
  if (state.screen !== 'rover-game' || g.phase !== 'playing') return false;

  const loc = LRV_MISSION_LOCATIONS.find((l) => l.id === g.nearbyLocationId);
  if (!loc || g.collectedSamples.has(loc.id)) return false;

  g.collectedSamples.add(loc.id);
  g.score += loc.points;
  g.nearbyLocationId = null;

  audioSystem.playSampleCollect();
  addFloatingRoverScore(loc.x, loc.y - 36, `+${loc.points} PTS • ${loc.name.toUpperCase()}`, '#E9B45B');

  showRoverDiscoveryToast({
    subtitle: loc.subtitle,
    title: `${loc.order} ${loc.name} — Sample Collected!`,
    pointsText: `+${loc.points} PTS`,
    fact: loc.fact,
    photo: loc.photo,
  });

  updateRoverHud();
  drawRoverWorld();
  return true;
}

function completeRoverMission() {
  const g = state.roverGame;
  if (g.phase === 'completed') return;

  g.phase = 'completed';
  stopRoverGameLoop();
  resetRoverKeys();

  // Safe Return to Lunar Module (+100 pts) + Mission Completion (+250 pts) = +350 pts
  g.score += 350;
  state.bestRoverScore = saveBestMissionScore(g.score);

  audioSystem.playMissionComplete();
  hideRoverDiscoveryToast();
  updateRoverHud();
  drawRoverWorld();

  // Populate Mission Complete Debrief modal
  const msgIndex =
    (g.collectedClues.size + Math.floor(g.score / 100)) % LRV_ENCOURAGING_MESSAGES.length;
  document.querySelector('#rover-complete-encouragement').textContent =
    LRV_ENCOURAGING_MESSAGES[msgIndex];
  document.querySelector('#rover-complete-score').textContent = `${g.score} / 800`;
  document.querySelector('#rover-complete-best').textContent = `${state.bestRoverScore} / 800`;
  document.querySelector('#rover-complete-samples').textContent =
    `${g.collectedSamples.size} / ${LRV_MISSION_LOCATIONS.length}`;
  document.querySelector('#rover-complete-clues').textContent =
    `${g.collectedClues.size} / ${LRV_MISSION_CLUES.length}`;

  syncRoverOverlays();
  const playAgainBtn = document.querySelector('#btn-rover-play-again');
  if (playAgainBtn) playAgainBtn.focus();
}

function updateRoverWorld(dt, gpState = null) {
  const g = state.roverGame;
  const rover = g.rover;
  const keys = g.keys;
  const gp = gpState || {
    active: false,
    stickX: 0,
    stickY: 0,
    throttle: 0,
    dpadUp: false,
    dpadDown: false,
    dpadLeft: false,
    dpadRight: false,
  };

  const maxForwardSpeed = 235;
  const maxReverseSpeed = -125;
  const accel = 420;
  const friction = 310;
  const turnRate = 2.65;

  const manualUp = keys.up || gp.dpadUp;
  const manualDown = keys.down || gp.dpadDown;
  const manualLeft = keys.left || gp.dpadLeft;
  const manualRight = keys.right || gp.dpadRight;
  const hasManualInput = manualUp || manualDown || manualLeft || manualRight || gp.active;

  if (hasManualInput && g.pointerTarget.active && !g.pointerTarget.isDragging) {
    clearRoverPointerTarget();
  }

  if (gp.active && (gp.stickX !== 0 || gp.stickY !== 0) && gp.throttle === 0 && !manualUp && !manualDown) {
    // 2D Analog Stick Direct Steering & Throttle (push stick in any direction to steer & drive there)
    const stickMag = Math.min(1, Math.hypot(gp.stickX, gp.stickY));
    const targetAngle = Math.atan2(gp.stickY, gp.stickX);
    const diff = normalizeAngleDiff(targetAngle, rover.angle);
    const maxStep = turnRate * 1.75 * dt;
    if (Math.abs(diff) <= maxStep) {
      rover.angle = targetAngle;
    } else {
      rover.angle += Math.sign(diff) * maxStep;
    }
    const targetSpeed = maxForwardSpeed * stickMag * (Math.abs(diff) > 1.35 ? 0.55 : 1);
    if (rover.speed < targetSpeed) {
      rover.speed = Math.min(targetSpeed, rover.speed + accel * dt);
    } else {
      rover.speed = Math.max(targetSpeed, rover.speed - friction * dt);
    }
  } else if (g.pointerTarget.active && !hasManualInput) {
    // Mouse Movement / Click-to-Drive / Phone Touch-to-Move Autopilot
    const dx = g.pointerTarget.x - rover.x;
    const dy = g.pointerTarget.y - rover.y;
    const distToTarget = Math.hypot(dx, dy);

    if (distToTarget > 14) {
      const desiredAngle = Math.atan2(dy, dx);
      const diff = normalizeAngleDiff(desiredAngle, rover.angle);
      const maxStep = turnRate * 1.85 * dt;
      if (Math.abs(diff) <= maxStep) {
        rover.angle = desiredAngle;
      } else {
        rover.angle += Math.sign(diff) * maxStep;
      }
      const slowDownFactor = Math.min(1, distToTarget / 64);
      const turnDamping = Math.abs(diff) > 1.2 ? 0.5 : 1;
      const desiredSpeed = maxForwardSpeed * Math.max(0.38, slowDownFactor) * turnDamping;
      if (rover.speed < desiredSpeed) {
        rover.speed = Math.min(desiredSpeed, rover.speed + accel * dt);
      } else {
        rover.speed = Math.max(desiredSpeed, rover.speed - friction * dt);
      }
    } else {
      rover.speed *= 0.6;
      if (!g.pointerTarget.isDragging) {
        clearRoverPointerTarget();
      }
    }
  } else {
    // Standard Keyboard / D-Pad / Trigger Throttle
    if (manualUp || gp.throttle > 0.1) {
      const throttleScale = gp.throttle > 0.1 ? gp.throttle : 1;
      rover.speed = Math.min(maxForwardSpeed * throttleScale, rover.speed + accel * dt);
    } else if (manualDown || gp.throttle < -0.1) {
      const reverseScale = gp.throttle < -0.1 ? Math.abs(gp.throttle) : 1;
      rover.speed = Math.max(maxReverseSpeed * reverseScale, rover.speed - accel * dt);
    } else {
      if (Math.abs(rover.speed) <= friction * dt) {
        rover.speed = 0;
      } else {
        rover.speed -= Math.sign(rover.speed) * friction * dt;
      }
    }

    // Allow responsive turning while moving or pivoting on the lunar regolith
    const turnDirection = rover.speed >= -5 ? 1 : -1;
    const speedTurnFactor = Math.max(0.55, Math.min(1, Math.abs(rover.speed) / 90));
    if (manualLeft) {
      rover.angle -= turnRate * speedTurnFactor * turnDirection * dt;
    }
    if (manualRight) {
      rover.angle += turnRate * speedTurnFactor * turnDirection * dt;
    }
    if (gp.stickX !== 0 && gp.throttle !== 0) {
      rover.angle += gp.stickX * turnRate * speedTurnFactor * turnDirection * dt;
    }
  }

  const prevX = rover.x;
  const prevY = rover.y;

  rover.x += Math.cos(rover.angle) * rover.speed * dt;
  rover.y += Math.sin(rover.angle) * rover.speed * dt;

  // Keep Rover on the lunar surface below the Apennine horizon and east of the deep Hadley Rille gorge
  const minX = 162;
  const maxX = 1236;
  const minY = 178;
  const maxY = 678;

  if (rover.x < minX) {
    rover.x = minX;
    rover.speed *= 0.45;
  } else if (rover.x > maxX) {
    rover.x = maxX;
    rover.speed *= 0.45;
  }
  if (rover.y < minY) {
    rover.y = minY;
    rover.speed *= 0.45;
  } else if (rover.y > maxY) {
    rover.y = maxY;
    rover.speed *= 0.45;
  }

  // Soft collision with lunar boulders so the Rover slides smoothly around rocks
  const roverRadius = 20;
  LRV_BOULDERS.forEach((boulder) => {
    const dx = rover.x - boulder.x;
    const dy = rover.y - boulder.y;
    const dist = Math.hypot(dx, dy);
    const minDist = roverRadius + boulder.r;
    if (dist < minDist && dist > 0.001) {
      const overlap = minDist - dist;
      rover.x += (dx / dist) * overlap;
      rover.y += (dy / dist) * overlap;
      rover.speed *= 0.72;
    }
  });

  const movedDist = Math.hypot(rover.x - prevX, rover.y - prevY);
  if (movedDist > 0.4) {
    rover.wheelPhase += movedDist * 0.18;

    // Record dual tyre tracks every ~11px of travel
    const lastTrack = g.tracks[g.tracks.length - 1];
    if (!lastTrack || Math.hypot(rover.x - lastTrack.x, rover.y - lastTrack.y) >= 11) {
      g.tracks.push({
        x: rover.x,
        y: rover.y,
        angle: rover.angle,
      });
      if (g.tracks.length > 220) {
        g.tracks.shift();
      }
    }

    // Spawn subtle lunar dust puffs behind rear wheels
    if (Math.random() < 0.42) {
      const backX = rover.x - Math.cos(rover.angle) * 20;
      const backY = rover.y - Math.sin(rover.angle) * 20;
      g.dustPuffs.push({
        x: backX + (Math.random() - 0.5) * 14,
        y: backY + (Math.random() - 0.5) * 14,
        r: 4 + Math.random() * 5,
        life: 0.55,
        maxLife: 0.55,
      });
    }
  }

  // Update dust puffs
  for (let i = g.dustPuffs.length - 1; i >= 0; i -= 1) {
    const p = g.dustPuffs[i];
    p.life -= dt;
    p.r += dt * 9;
    if (p.life <= 0) {
      g.dustPuffs.splice(i, 1);
    }
  }

  // Update floating score texts
  for (let i = g.floatingTexts.length - 1; i >= 0; i -= 1) {
    const ft = g.floatingTexts[i];
    ft.life -= dt;
    ft.y -= dt * 28;
    if (ft.life <= 0) {
      g.floatingTexts.splice(i, 1);
    }
  }

  // Check proximity to uncollected Exploration Clues (+50 pts each, auto-collect on drive-over)
  LRV_MISSION_CLUES.forEach((clue) => {
    if (g.collectedClues.has(clue.id)) return;
    const dist = Math.hypot(rover.x - clue.x, rover.y - clue.y);
    if (dist <= clue.radius + 20) {
      g.collectedClues.add(clue.id);
      g.score += clue.points;
      audioSystem.playDiscoveryChime(false);
      addFloatingRoverScore(clue.x, clue.y - 26, `+${clue.points} PTS • ${clue.title.toUpperCase()}`, '#F3E8D5');
      showRoverDiscoveryToast({
        subtitle: 'EXPLORATION CLUE DISCOVERED (+50 PTS)',
        title: `★ ${clue.title}`,
        pointsText: `+${clue.points} PTS`,
        fact: clue.fact,
        photo: null,
      });
      updateRoverHud();
    }
  });

  // Check proximity to the 3 Sample Locations
  let foundNearbyId = null;
  for (const loc of LRV_MISSION_LOCATIONS) {
    if (g.collectedSamples.has(loc.id)) continue;
    const dist = Math.hypot(rover.x - loc.x, rover.y - loc.y);
    if (dist <= loc.radius + 28) {
      foundNearbyId = loc.id;
      break;
    }
  }

  if (foundNearbyId !== g.nearbyLocationId) {
    g.nearbyLocationId = foundNearbyId;
    updateRoverHud();
  }

  // If the player tapped/selected a specific sample crater on the map and the Rover has arrived, auto-collect it!
  if (
    g.nearbyLocationId &&
    g.pointerTarget.active &&
    g.pointerTarget.targetSampleId === g.nearbyLocationId
  ) {
    clearRoverPointerTarget();
    g.rover.speed *= 0.25;
    collectNearbySample();
  }

  // Check safe return to the Lunar Module once all 3 samples are collected
  if (g.collectedSamples.size === LRV_MISSION_LOCATIONS.length) {
    const distToBase = Math.hypot(rover.x - g.base.x, rover.y - g.base.y);
    if (distToBase <= g.base.radius + 18) {
      completeRoverMission();
    }
  }
}

function drawRoverWorld() {
  const canvas = document.querySelector('#rover-game-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const W = canvas.width;
  const H = canvas.height;
  const g = state.roverGame;
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() * 0.0045);

  ctx.clearRect(0, 0, W, H);

  // 1. Deep black airless lunar sky (y: 0..160)
  const skyGrad = ctx.createLinearGradient(0, 0, 0, 165);
  skyGrad.addColorStop(0, '#090710');
  skyGrad.addColorStop(1, '#1A1528');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, W, 165);

  // Subtle stars
  ROVER_STARS.forEach((star) => {
    ctx.fillStyle = `rgba(243, 232, 213, ${star.a})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Distant Earth in the black lunar sky
  ctx.save();
  const earthX = 1105;
  const earthY = 58;
  const earthR = 26;
  const earthGlow = ctx.createRadialGradient(earthX, earthY, earthR * 0.4, earthX, earthY, earthR * 1.9);
  earthGlow.addColorStop(0, 'rgba(110, 185, 255, 0.35)');
  earthGlow.addColorStop(1, 'rgba(110, 185, 255, 0)');
  ctx.fillStyle = earthGlow;
  ctx.beginPath();
  ctx.arc(earthX, earthY, earthR * 1.9, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#3B82C4';
  ctx.beginPath();
  ctx.arc(earthX, earthY, earthR, 0, Math.PI * 2);
  ctx.fill();

  // Swirls of white cloud & crescent shadow on Earth
  ctx.fillStyle = 'rgba(243, 232, 213, 0.78)';
  ctx.beginPath();
  ctx.ellipse(earthX - 6, earthY - 7, 13, 5, -0.3, 0, Math.PI * 2);
  ctx.ellipse(earthX + 5, earthY + 6, 11, 4, 0.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(9, 7, 16, 0.58)';
  ctx.beginPath();
  ctx.arc(earthX + 9, earthY + 4, earthR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 2. Apennine Mountains along the horizon (Mons Hadley & Mons Hadley Delta)
  // Far range
  ctx.fillStyle = '#3D354B';
  ctx.beginPath();
  ctx.moveTo(0, 162);
  ctx.lineTo(0, 112);
  ctx.lineTo(135, 78);
  ctx.lineTo(290, 120);
  ctx.lineTo(470, 68);
  ctx.lineTo(665, 118);
  ctx.lineTo(870, 62);
  ctx.lineTo(1045, 108);
  ctx.lineTo(1190, 82);
  ctx.lineTo(W, 116);
  ctx.lineTo(W, 162);
  ctx.closePath();
  ctx.fill();

  // Sunlit Apennine ridges (warm storybook beige-grey)
  ctx.fillStyle = '#7A6F69';
  ctx.beginPath();
  ctx.moveTo(0, 165);
  ctx.lineTo(0, 128);
  ctx.lineTo(185, 96);
  ctx.lineTo(355, 134);
  ctx.lineTo(560, 88);
  ctx.lineTo(750, 132);
  ctx.lineTo(955, 78);
  ctx.lineTo(1140, 124);
  ctx.lineTo(W, 104);
  ctx.lineTo(W, 165);
  ctx.closePath();
  ctx.fill();

  // 3. Lunar Regolith Surface (Hadley–Apennine Plain)
  const groundGrad = ctx.createLinearGradient(0, 155, 0, H);
  groundGrad.addColorStop(0, '#968B82');
  groundGrad.addColorStop(0.45, '#ADA195');
  groundGrad.addColorStop(1, '#877C73');
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, 155, W, H - 155);

  // Illustrated contour bands on the lunar plain
  ctx.fillStyle = 'rgba(243, 232, 213, 0.08)';
  ctx.beginPath();
  ctx.ellipse(690, 420, 460, 210, -0.08, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(41, 34, 56, 0.1)';
  ctx.beginPath();
  ctx.ellipse(1010, 285, 215, 110, 0.15, 0, Math.PI * 2);
  ctx.fill();

  // 4. Winding Hadley Rille Canyon along the west (left) edge
  ctx.save();
  // Outer canyon rim shadow
  ctx.fillStyle = '#5B4E49';
  ctx.beginPath();
  ctx.moveTo(0, 155);
  ctx.lineTo(155, 155);
  ctx.bezierCurveTo(182, 260, 130, 385, 155, 515);
  ctx.bezierCurveTo(170, 600, 135, 665, 148, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fill();

  // Exposed volcanic strata bands along Hadley Rille wall
  ctx.strokeStyle = '#D7B899';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(142, 160);
  ctx.bezierCurveTo(168, 260, 116, 385, 140, 515);
  ctx.bezierCurveTo(156, 600, 120, 665, 134, H);
  ctx.stroke();

  // Deep canyon floor in sharp lunar shadow
  ctx.fillStyle = '#241D30';
  ctx.beginPath();
  ctx.moveTo(0, 155);
  ctx.lineTo(112, 155);
  ctx.bezierCurveTo(138, 260, 88, 385, 112, 515);
  ctx.bezierCurveTo(126, 600, 92, 665, 104, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fill();

  // Canyon label
  ctx.save();
  ctx.translate(54, 435);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = 'rgba(243, 232, 213, 0.55)';
  ctx.font = '700 13px Inter, sans-serif';
  ctx.letterSpacing = '2px';
  ctx.textAlign = 'center';
  ctx.fillText('HADLEY RILLE CANYON', 0, 0);
  ctx.restore();
  ctx.restore();

  // 5. Dotted Traverse Guide Trails from Lunar Module to the 3 Sample Stops
  ctx.save();
  ctx.setLineDash([7, 9]);
  ctx.lineWidth = 2.2;
  ctx.strokeStyle = 'rgba(243, 232, 213, 0.34)';
  LRV_MISSION_LOCATIONS.forEach((loc) => {
    ctx.beginPath();
    ctx.moveTo(g.base.x, g.base.y);
    ctx.lineTo(loc.x, loc.y);
    ctx.stroke();
  });
  ctx.restore();

  // 6. Persistent Rover Tyre Tracks in the Lunar Regolith
  if (g.tracks.length > 1) {
    ctx.save();
    ctx.strokeStyle = 'rgba(52, 44, 69, 0.32)';
    ctx.lineWidth = 3;
    for (let i = 1; i < g.tracks.length; i += 1) {
      const p0 = g.tracks[i - 1];
      const p1 = g.tracks[i];
      if (Math.hypot(p1.x - p0.x, p1.y - p0.y) > 40) continue;
      const perpX = -Math.sin(p1.angle) * 11;
      const perpY = Math.cos(p1.angle) * 11;

      ctx.beginPath();
      ctx.moveTo(p0.x + perpX, p0.y + perpY);
      ctx.lineTo(p1.x + perpX, p1.y + perpY);
      ctx.moveTo(p0.x - perpX, p0.y - perpY);
      ctx.lineTo(p1.x - perpX, p1.y - perpY);
      ctx.stroke();
    }
    ctx.restore();
  }

  // 7. Lunar Boulders & Small Background Craters with sharp shadows
  LRV_BOULDERS.forEach((b) => {
    ctx.save();
    // Sharp lunar shadow
    ctx.fillStyle = '#292238';
    ctx.beginPath();
    ctx.ellipse(b.x + 10, b.y + 7, b.r * 1.05, b.r * 0.68, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Boulder body
    ctx.fillStyle = '#6E655F';
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();

    // Sunlit top-left facet
    ctx.fillStyle = '#C9BEB0';
    ctx.beginPath();
    ctx.arc(b.x - b.r * 0.28, b.y - b.r * 0.28, b.r * 0.55, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#292238';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  // 8. Three Geological Sample Crater Locations
  LRV_MISSION_LOCATIONS.forEach((loc) => {
    const isCollected = g.collectedSamples.has(loc.id);
    const isNearby = g.nearbyLocationId === loc.id;

    ctx.save();
    // Crater outer rim & shadow
    ctx.fillStyle = '#6A605A';
    ctx.beginPath();
    ctx.ellipse(loc.x, loc.y, loc.radius, loc.radius * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#2E263D';
    ctx.beginPath();
    ctx.ellipse(loc.x + 5, loc.y + 3, loc.radius * 0.76, loc.radius * 0.52, 0, 0, Math.PI * 2);
    ctx.fill();

    // Glowing beacon ring
    const ringRadius = loc.radius + 8 + pulse * 6;
    ctx.lineWidth = isNearby ? 4 : 2.5;
    ctx.strokeStyle = isCollected
      ? 'rgba(134, 224, 163, 0.85)'
      : isNearby
        ? '#E9B45B'
        : 'rgba(233, 180, 91, 0.78)';
    ctx.beginPath();
    ctx.arc(loc.x, loc.y, ringRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Sparkling sample crystal icon if uncollected, or checkmark if collected
    if (!isCollected) {
      ctx.fillStyle = '#E9B45B';
      ctx.strokeStyle = '#292238';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(loc.x, loc.y - 14);
      ctx.lineTo(loc.x + 12, loc.y);
      ctx.lineTo(loc.x, loc.y + 14);
      ctx.lineTo(loc.x - 12, loc.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillStyle = '#86E0A3';
      ctx.font = '700 20px Fredoka, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✓', loc.x, loc.y);
    }

    // Location badge pill above crater
    const labelText = `${loc.order} ${loc.name}${isCollected ? ' ✓' : ''}`;
    ctx.font = '700 13px Fredoka, sans-serif';
    const textWidth = ctx.measureText(labelText).width;
    const pillW = textWidth + 22;
    const pillH = 26;
    const pillX = loc.x - pillW / 2;
    const pillY = loc.y - loc.radius - 34;

    ctx.fillStyle = isCollected ? '#292238' : isNearby ? '#C75B3D' : '#342C45';
    ctx.strokeStyle = isCollected ? '#86E0A3' : '#E9B45B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 13);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#F3E8D5';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labelText, loc.x, pillY + pillH / 2 + 1);
    ctx.restore();
  });

  // 9. Three In-Game Exploration Clues (+50 pts each)
  LRV_MISSION_CLUES.forEach((clue) => {
    const isCollected = g.collectedClues.has(clue.id);
    if (isCollected) return;

    ctx.save();
    const r = 18 + pulse * 4;
    ctx.fillStyle = 'rgba(233, 180, 91, 0.22)';
    ctx.beginPath();
    ctx.arc(clue.x, clue.y, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#E9B45B';
    ctx.strokeStyle = '#292238';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(clue.x, clue.y, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#292238';
    ctx.font = '700 14px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★', clue.x, clue.y + 1);

    ctx.fillStyle = '#F3E8D5';
    ctx.font = '700 11px Inter, sans-serif';
    ctx.fillText('CLUE +50', clue.x, clue.y + 26);
    ctx.restore();
  });

  // 10. Apollo 15 Lunar Module "Falcon" Base at (640, 400)
  ctx.save();
  const bx = g.base.x;
  const by = g.base.y;
  const allSamplesCollected = g.collectedSamples.size === LRV_MISSION_LOCATIONS.length;

  // Return zone ring
  ctx.lineWidth = allSamplesCollected ? 4 : 2;
  ctx.strokeStyle = allSamplesCollected
    ? '#E9B45B'
    : 'rgba(243, 232, 213, 0.35)';
  ctx.setLineDash(allSamplesCollected ? [] : [6, 6]);
  ctx.beginPath();
  ctx.arc(bx, by, g.base.radius + (allSamplesCollected ? pulse * 8 : 0), 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Shadow beneath LM
  ctx.fillStyle = 'rgba(25, 20, 36, 0.65)';
  ctx.beginPath();
  ctx.ellipse(bx + 12, by + 10, 42, 24, 0, 0, Math.PI * 2);
  ctx.fill();

  // Four landing legs & footpads
  ctx.strokeStyle = '#D8CFC2';
  ctx.lineWidth = 3;
  const legOffsets = [
    [-34, -24],
    [34, -24],
    [-34, 24],
    [34, 24],
  ];
  legOffsets.forEach(([ox, oy]) => {
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + ox, by + oy);
    ctx.stroke();

    ctx.fillStyle = '#E9B45B';
    ctx.strokeStyle = '#292238';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(bx + ox, by + oy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Gold-foil octagonal Descent Stage
  ctx.fillStyle = '#D99B38';
  ctx.strokeStyle = '#292238';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(bx - 24, by - 20, 48, 40, 8);
  ctx.fill();
  ctx.stroke();

  // Ascent Stage crew cabin
  ctx.fillStyle = '#EBE2D5';
  ctx.beginPath();
  ctx.roundRect(bx - 17, by - 15, 34, 30, 9);
  ctx.fill();
  ctx.stroke();

  // Triangular LM windows
  ctx.fillStyle = '#292238';
  ctx.beginPath();
  ctx.polygon
    ? ctx.rect(bx - 10, by - 6, 7, 5)
    : ctx.fillRect(bx - 11, by - 7, 8, 6);
  ctx.fillRect(bx + 3, by - 7, 8, 6);

  // Base label pill
  const baseLabel = allSamplesCollected
    ? '★ RETURN TO LUNAR MODULE (+350 PTS)'
    : 'APOLLO 15 LUNAR MODULE';
  ctx.font = '700 12px Fredoka, sans-serif';
  const baseTextW = ctx.measureText(baseLabel).width + 20;
  ctx.fillStyle = allSamplesCollected ? '#C75B3D' : '#292238';
  ctx.strokeStyle = '#E9B45B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(bx - baseTextW / 2, by - 56, baseTextW, 24, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#F3E8D5';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(baseLabel, bx, by - 43);
  ctx.restore();

  // 11. Active Mouse / Phone Touch Waypoint Reticle & Path Line
  if (g.pointerTarget.active) {
    ctx.save();
    ctx.setLineDash([5, 6]);
    ctx.lineWidth = 2.2;
    ctx.strokeStyle = 'rgba(233, 180, 91, 0.72)';
    ctx.beginPath();
    ctx.moveTo(g.rover.x, g.rover.y);
    ctx.lineTo(g.pointerTarget.x, g.pointerTarget.y);
    ctx.stroke();
    ctx.setLineDash([]);

    const reticleR = 14 + pulse * 5;
    ctx.strokeStyle = '#E9B45B';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(g.pointerTarget.x, g.pointerTarget.y, reticleR, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#C75B3D';
    ctx.beginPath();
    ctx.arc(g.pointerTarget.x, g.pointerTarget.y, 4.5, 0, Math.PI * 2);
    ctx.fill();

    if (g.pointerTarget.label) {
      ctx.font = '700 11px Fredoka, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#F3E8D5';
      ctx.fillText(g.pointerTarget.label, g.pointerTarget.x, g.pointerTarget.y + reticleR + 14);
    }
    ctx.restore();
  }

  // 12. Lunar Dust Puffs behind Rover
  g.dustPuffs.forEach((p) => {
    const alpha = Math.max(0, (p.life / p.maxLife) * 0.45);
    ctx.fillStyle = `rgba(216, 204, 188, ${alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // 12. Illustrated Lunar Roving Vehicle (Player)
  ctx.save();
  ctx.translate(g.rover.x, g.rover.y);
  ctx.rotate(g.rover.angle);

  // Shadow under Rover
  ctx.fillStyle = 'rgba(25, 20, 36, 0.55)';
  ctx.beginPath();
  ctx.roundRect(-24, -15, 50, 34, 8);
  ctx.fill();

  // Four Wire-Mesh Wheels with titanium chevrons & orange fender hubs
  const wheelPositions = [
    [-16, -18],
    [16, -18],
    [-16, 18],
    [16, 18],
  ];
  wheelPositions.forEach(([wx, wy]) => {
    ctx.fillStyle = '#3B3448';
    ctx.strokeStyle = '#E9B45B';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.roundRect(wx - 7, wy - 4.5, 14, 9, 3);
    ctx.fill();
    ctx.stroke();

    // Burnt-orange fender flare matching ORBITOYS LRV artwork
    ctx.fillStyle = '#C75B3D';
    ctx.fillRect(wx - 4, wy > 0 ? wy - 5 : wy + 2, 8, 3);
  });

  // Lightweight folded aluminum chassis frame
  ctx.fillStyle = '#F3E8D5';
  ctx.strokeStyle = '#292238';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.roundRect(-21, -13, 42, 26, 6);
  ctx.fill();
  ctx.stroke();

  // Rear scientific tool & lunar sample rack
  ctx.fillStyle = '#D5C7B4';
  ctx.fillRect(-19, -9, 9, 18);
  ctx.strokeRect(-19, -9, 9, 18);

  // Side-by-side crew seats + suited astronaut helmets
  ctx.fillStyle = '#342C45';
  ctx.fillRect(-7, -10, 12, 8);
  ctx.fillRect(-7, 2, 12, 8);

  // Two white Apollo space helmets with gold visors
  [-6, 6].forEach((hy) => {
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#292238';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(-1, hy, 5.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#E9B45B';
    ctx.beginPath();
    ctx.arc(1, hy, 3.2, -Math.PI / 2, Math.PI / 2);
    ctx.fill();
  });

  // T-controller & navigation console
  ctx.fillStyle = '#C75B3D';
  ctx.fillRect(7, -4, 5, 8);

  // Front High-Gain Umbrella Antenna & Colour TV Camera
  ctx.fillStyle = '#E9B45B';
  ctx.strokeStyle = '#292238';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(15, -7, 6.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Forward direction headlight / camera beam indicator
  ctx.fillStyle = 'rgba(233, 180, 91, 0.22)';
  ctx.beginPath();
  ctx.moveTo(21, 0);
  ctx.lineTo(54, -16);
  ctx.lineTo(54, 16);
  ctx.closePath();
  ctx.fill();

  ctx.restore();

  // 13. Floating Score Texts (+100 PTS, +50 PTS)
  g.floatingTexts.forEach((ft) => {
    const alpha = Math.max(0, Math.min(1, ft.life / ft.maxLife));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = '700 16px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#292238';
    ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
    ctx.fillStyle = ft.color;
    ctx.fillText(ft.text, ft.x, ft.y);
    ctx.restore();
  });
}

/**
 * Event Listeners & Keyboard Navigation
 */
function bindEvents() {
  document.querySelector('#btn-toggle-music').addEventListener('click', () => {
    audioSystem.playClick();
    audioSystem.toggleMusic();
  });

  document.querySelector('#btn-toggle-sfx').addEventListener('click', () => {
    audioSystem.toggleSfx();
  });

  document.addEventListener(
    'pointerenter',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      const target = e.target.closest('[data-sfx-hover="true"]');
      if (target && !target.disabled) {
        audioSystem.playHover();
      }
    },
    true
  );

  // Story Screens 1–4
  document.querySelector('#btn-start').addEventListener('click', () => {
    audioSystem.playClick();
    audioSystem.startMusicWithFade();
    navigateToScreen('exterior');
  });

  document.querySelector('#btn-enter-store').addEventListener('click', () => {
    audioSystem.playClick();
    audioSystem.startMusicWithFade();
    navigateToScreen('entrance');
  });

  document.querySelector('#btn-entrance-continue').addEventListener('click', () => {
    audioSystem.playClick();
    state.dialogueIndex = 0;
    renderDialogue();
    navigateToScreen('dialogue');
  });

  document.querySelector('#btn-next-dialogue').addEventListener('click', () => {
    advanceDialogue();
  });

  document.querySelector('#btn-skip-dialogue').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('shelf');
  });

  document.querySelector('#dialogue-progress').addEventListener('click', (e) => {
    const dotBtn = e.target.closest('.dialogue-dot-btn');
    if (!dotBtn) return;
    const idx = Number(dotBtn.dataset.lineIndex);
    if (!Number.isNaN(idx)) {
      audioSystem.playDialogueTap();
      state.dialogueIndex = idx;
      renderDialogue();
    }
  });

  // Screen 5: Collectible Shelf — First click selects, second click opens Machine Introduction
  document.querySelector('#shelf-hitboxes').addEventListener('click', (e) => {
    const btn = e.target.closest('.shelf-hitbox');
    if (!btn) return;
    handleMachinePackageClick(btn.dataset.machineId);
  });

  document.querySelector('#shelf-mobile-picker').addEventListener('click', (e) => {
    const btn = e.target.closest('.shelf-picker-card');
    if (!btn) return;
    handleMachinePackageClick(btn.dataset.machineId);
  });

  document.querySelector('#btn-explore-machine').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('discovery');
  });

  document.querySelector('#btn-shelf-play-mission').addEventListener('click', () => {
    audioSystem.playClick();
    openLunarRoverMission();
  });

  // Screen 6: Machine Introduction navigation & zoom
  document.querySelector('#btn-discovery-back-shelf').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('shelf');
  });

  document.querySelector('#btn-choose-another-machine').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('shelf');
  });

  document.querySelector('#btn-open-interactive-rover').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('interactive');
  });

  document.querySelector('#btn-intro-zoom').addEventListener('click', () => {
    audioSystem.playClick();
    openZoomModal('package');
  });

  // Screen 7: Interactive Component Discovery hotspots, list, zoom & navigation
  document.querySelector('#rover-hotspots').addEventListener('click', (e) => {
    const btn = e.target.closest('.hotspot-btn');
    if (!btn) return;
    selectMachineComponent(btn.dataset.componentId);
  });

  document.querySelector('#discoveries-list').addEventListener('click', (e) => {
    const item = e.target.closest('.discovery-item');
    if (!item) return;
    selectMachineComponent(item.dataset.componentId);
  });

  document.querySelector('#btn-interactive-zoom').addEventListener('click', () => {
    audioSystem.playClick();
    openZoomModal('package');
  });

  document.querySelector('#btn-back-to-intro').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('discovery');
  });

  document.querySelector('#btn-interactive-back-shelf').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('shelf');
  });

  document.querySelector('#btn-play-lrv-mission').addEventListener('click', () => {
    audioSystem.playClick();
    openLunarRoverMission();
  });

  // Screen 8: Playable Lunar Rover Mission controls & overlays
  document.querySelector('#btn-rover-start-mission').addEventListener('click', () => {
    startRoverMissionRun();
  });

  document.querySelector('#btn-rover-briefing-exit').addEventListener('click', () => {
    exitRoverMissionToShop();
  });

  document.querySelector('#btn-rover-pause').addEventListener('click', () => {
    if (state.roverGame.phase === 'playing') {
      pauseRoverMission();
    } else if (state.roverGame.phase === 'paused') {
      resumeRoverMission();
    }
  });

  document.querySelector('#btn-rover-resume').addEventListener('click', () => {
    resumeRoverMission();
  });

  document.querySelector('#btn-rover-restart').addEventListener('click', () => {
    restartRoverMission();
  });

  document.querySelector('#btn-rover-exit').addEventListener('click', () => {
    exitRoverMissionToShop();
  });

  document.querySelector('#btn-rover-play-again').addEventListener('click', () => {
    restartRoverMission();
  });

  document.querySelector('#btn-rover-complete-shop').addEventListener('click', () => {
    exitRoverMissionToShop();
  });

  document.querySelector('#btn-rover-collect').addEventListener('click', () => {
    collectNearbySample();
  });

  document.querySelector('#btn-rover-touch-collect').addEventListener('click', () => {
    collectNearbySample();
  });

  document.querySelector('#btn-rover-toast-close').addEventListener('click', () => {
    audioSystem.playClick();
    hideRoverDiscoveryToast();
  });

  // Mouse Movement, Click-to-Drive, and Phone Touch-to-Move / Tap-to-Select & Collect on Canvas
  const roverCanvas = document.querySelector('#rover-game-canvas');
  const getCanvasPoint = (ev) => {
    const rect = roverCanvas.getBoundingClientRect?.();
    if (!rect || !rect.width || !rect.height) {
      return {
        x: Number(ev.offsetX ?? 640),
        y: Number(ev.offsetY ?? 400),
      };
    }
    return {
      x: ((ev.clientX - rect.left) / rect.width) * roverCanvas.width,
      y: ((ev.clientY - rect.top) / rect.height) * roverCanvas.height,
    };
  };

  const applyCanvasTargetAt = (pt, isInitialPress = false) => {
    const g = state.roverGame;
    if (state.screen !== 'rover-game' || g.phase !== 'playing') return;

    const clampedX = Math.max(162, Math.min(1236, pt.x));
    const clampedY = Math.max(178, Math.min(678, pt.y));

    if (isInitialPress) {
      // 1. Check if the player tapped/clicked an uncollected Sample Crater
      for (const loc of LRV_MISSION_LOCATIONS) {
        if (g.collectedSamples.has(loc.id)) continue;
        const clickDist = Math.hypot(clampedX - loc.x, clampedY - loc.y);
        if (clickDist <= loc.radius + 26) {
          // If the Rover is already within collection range of this crater, collect immediately!
          if (g.nearbyLocationId === loc.id) {
            clearRoverPointerTarget();
            collectNearbySample();
            return;
          }
          // Otherwise select this crater, drive the Rover straight to it, and auto-collect upon arrival
          audioSystem.playClick();
          g.pointerTarget.active = true;
          g.pointerTarget.isDragging = false;
          g.pointerTarget.x = loc.x;
          g.pointerTarget.y = loc.y;
          g.pointerTarget.targetSampleId = loc.id;
          g.pointerTarget.label = `Driving to ${loc.order} ${loc.name}`;
          drawRoverWorld();
          return;
        }
      }

      // 2. Check if the player tapped/clicked an uncollected Exploration Clue (★)
      for (const clue of LRV_MISSION_CLUES) {
        if (g.collectedClues.has(clue.id)) continue;
        const clickDist = Math.hypot(clampedX - clue.x, clampedY - clue.y);
        if (clickDist <= clue.radius + 24) {
          audioSystem.playClick();
          g.pointerTarget.active = true;
          g.pointerTarget.isDragging = false;
          g.pointerTarget.x = clue.x;
          g.pointerTarget.y = clue.y;
          g.pointerTarget.targetSampleId = null;
          g.pointerTarget.label = `Driving to ★ ${clue.title}`;
          drawRoverWorld();
          return;
        }
      }

      // 3. Check if the player tapped/clicked the Lunar Module base
      const baseDist = Math.hypot(clampedX - g.base.x, clampedY - g.base.y);
      if (baseDist <= g.base.radius + 20) {
        audioSystem.playClick();
        g.pointerTarget.active = true;
        g.pointerTarget.isDragging = false;
        g.pointerTarget.x = g.base.x;
        g.pointerTarget.y = g.base.y;
        g.pointerTarget.targetSampleId = null;
        g.pointerTarget.label = 'Returning to Lunar Module';
        drawRoverWorld();
        return;
      }
    }

    // 4. General Mouse / Touch-to-Move anywhere on the lunar terrain
    g.pointerTarget.active = true;
    g.pointerTarget.isDragging = true;
    g.pointerTarget.x = clampedX;
    g.pointerTarget.y = clampedY;
    g.pointerTarget.targetSampleId = null;
    g.pointerTarget.label = '';
  };

  roverCanvas.addEventListener('pointerdown', (e) => {
    if (state.screen !== 'rover-game' || state.roverGame.phase !== 'playing') return;
    if (e.cancelable) e.preventDefault();
    roverCanvas.setPointerCapture?.(e.pointerId);
    applyCanvasTargetAt(getCanvasPoint(e), true);
  });

  roverCanvas.addEventListener('pointermove', (e) => {
    if (state.screen !== 'rover-game' || state.roverGame.phase !== 'playing') return;
    // Follow cursor/finger while dragging on touch or holding mouse button
    if (state.roverGame.pointerTarget.isDragging || (e.pointerType === 'mouse' && e.buttons === 1)) {
      if (e.cancelable) e.preventDefault();
      applyCanvasTargetAt(getCanvasPoint(e), false);
    }
  });

  const endCanvasPointerDrag = () => {
    state.roverGame.pointerTarget.isDragging = false;
  };
  roverCanvas.addEventListener('pointerup', endCanvasPointerDrag);
  roverCanvas.addEventListener('pointercancel', endCanvasPointerDrag);
  roverCanvas.addEventListener('lostpointercapture', endCanvasPointerDrag);

  // Gamepad connection status listeners
  window.addEventListener('gamepadconnected', () => {
    pollRoverGamepad();
  });
  window.addEventListener('gamepaddisconnected', () => {
    pollRoverGamepad();
  });

  // On-screen D-Pad touch/pointer press-and-hold controls
  document.querySelectorAll('.dpad-btn').forEach((btn) => {
    const dir = btn.dataset.dir;
    if (!dir) return;

    const setDir = (active, ev) => {
      if (ev && ev.cancelable) ev.preventDefault();
      state.roverGame.keys[dir] = active;
      btn.classList.toggle('is-pressed', active);
    };

    btn.addEventListener('pointerdown', (e) => {
      btn.setPointerCapture?.(e.pointerId);
      setDir(true, e);
    });
    btn.addEventListener('pointerup', (e) => setDir(false, e));
    btn.addEventListener('pointercancel', (e) => setDir(false, e));
    btn.addEventListener('lostpointercapture', () => setDir(false));
    btn.addEventListener('contextmenu', (e) => e.preventDefault());
  });

  // Zoom Modal controls
  document.querySelector('#btn-zoom-view-package').addEventListener('click', () => {
    audioSystem.playClick();
    state.zoomViewMode = 'package';
    renderZoomStage();
  });

  document.querySelector('#btn-zoom-view-shelf').addEventListener('click', () => {
    audioSystem.playClick();
    state.zoomViewMode = 'shelf';
    renderZoomStage();
  });

  document.querySelector('#btn-zoom-close').addEventListener('click', () => {
    audioSystem.playClick();
    closeZoomModal();
  });

  document.querySelector('#zoom-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'zoom-backdrop') {
      audioSystem.playClick();
      closeZoomModal();
    }
  });

  // NASA Archival Photograph Thumbnail & Viewer Modal controls
  document.querySelector('#field-notes-photos').addEventListener('click', (e) => {
    const thumbBtn = e.target.closest('.nasa-thumb-btn');
    if (!thumbBtn) return;
    audioSystem.playClick();
    openNasaPhotoModal(
      thumbBtn.dataset.nasaPhotoId,
      thumbBtn.dataset.nasaContext || 'NASA ARCHIVAL PHOTOGRAPH',
      thumbBtn
    );
  });

  document.querySelector('#btn-nasa-viewer-zoom').addEventListener('click', () => {
    audioSystem.playClick();
    toggleNasaPhotoZoom();
  });

  document.querySelector('#nasa-viewer-img').addEventListener('click', () => {
    audioSystem.playClick();
    toggleNasaPhotoZoom();
  });

  document.querySelector('#btn-nasa-viewer-close').addEventListener('click', () => {
    audioSystem.playClick();
    closeNasaPhotoModal();
  });

  document.querySelector('#nasa-photo-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'nasa-photo-backdrop') {
      audioSystem.playClick();
      closeNasaPhotoModal();
    }
  });

  // Global Keyboard Navigation & Lunar Rover Driving Controls
  const ROVER_KEY_MAP = {
    ArrowUp: 'up',
    KeyW: 'up',
    w: 'up',
    W: 'up',
    ArrowDown: 'down',
    KeyS: 'down',
    s: 'down',
    S: 'down',
    ArrowLeft: 'left',
    KeyA: 'left',
    a: 'left',
    A: 'left',
    ArrowRight: 'right',
    KeyD: 'right',
    d: 'right',
    D: 'right',
  };

  window.addEventListener('keyup', (e) => {
    const dir = ROVER_KEY_MAP[e.code] || ROVER_KEY_MAP[e.key];
    if (dir) {
      state.roverGame.keys[dir] = false;
    }
  });

  window.addEventListener('blur', () => {
    resetRoverKeys();
  });

  window.addEventListener('keydown', (e) => {
    if (state.isNasaPhotoOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        audioSystem.playClick();
        closeNasaPhotoModal();
      }
      return;
    }

    if (state.isZoomOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        audioSystem.playClick();
        closeZoomModal();
      }
      return;
    }

    if (state.screen === 'rover-game') {
      const phase = state.roverGame.phase;
      if (e.key === 'Escape') {
        e.preventDefault();
        if (phase === 'playing') {
          pauseRoverMission();
        } else if (phase === 'paused') {
          resumeRoverMission();
        }
        return;
      }

      if (phase === 'playing') {
        const dir = ROVER_KEY_MAP[e.code] || ROVER_KEY_MAP[e.key];
        if (dir) {
          e.preventDefault();
          state.roverGame.keys[dir] = true;
          return;
        }

        if (e.key === ' ' || e.code === 'Space' || e.key === 'e' || e.key === 'E') {
          const activeTag = document.activeElement?.tagName;
          if (activeTag !== 'BUTTON' && activeTag !== 'A') {
            e.preventDefault();
            collectNearbySample();
            return;
          }
        }
      }
      return;
    }

    const activeEl = document.activeElement;
    const isAudioBtnFocused = activeEl && activeEl.closest && activeEl.closest('.audio-controls');

    if (state.screen === 'title') {
      if ((e.key === 'Enter' || e.key === ' ') && !isAudioBtnFocused) {
        e.preventDefault();
        audioSystem.playClick();
        audioSystem.startMusicWithFade();
        navigateToScreen('exterior');
      }
    } else if (state.screen === 'exterior') {
      if ((e.key === 'Enter' || e.key === ' ') && !isAudioBtnFocused) {
        e.preventDefault();
        audioSystem.playClick();
        audioSystem.startMusicWithFade();
        navigateToScreen('entrance');
      }
    } else if (state.screen === 'entrance') {
      if ((e.key === 'Enter' || e.key === ' ') && !isAudioBtnFocused) {
        e.preventDefault();
        audioSystem.playClick();
        state.dialogueIndex = 0;
        renderDialogue();
        navigateToScreen('dialogue');
      }
    } else if (state.screen === 'dialogue') {
      const activeTag = document.activeElement?.tagName;
      const isButtonFocused = activeTag === 'BUTTON';

      if (e.key === 'Escape') {
        e.preventDefault();
        audioSystem.playClick();
        navigateToScreen('shelf');
      } else if ((e.key === 'Enter' || e.key === ' ') && !isButtonFocused) {
        e.preventDefault();
        advanceDialogue();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        advanceDialogue();
      } else if (e.key === 'ArrowLeft' && state.dialogueIndex > 0) {
        e.preventDefault();
        audioSystem.playDialogueTap();
        state.dialogueIndex -= 1;
        renderDialogue();
      }
    } else if (state.screen === 'shelf') {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = SHELF_MACHINES.findIndex((m) => m.id === state.selectedMachineId);
        if (currentIndex !== -1) {
          const delta = e.key === 'ArrowRight' ? 1 : -1;
          const nextIndex =
            (currentIndex + delta + SHELF_MACHINES.length) % SHELF_MACHINES.length;
          selectShelfMachine(SHELF_MACHINES[nextIndex].id);
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        const activeEl = document.activeElement;
        const isAudioBtn = activeEl && activeEl.closest('.audio-controls');
        if (!isAudioBtn) {
          e.preventDefault();
          audioSystem.playClick();
          navigateToScreen('discovery');
        }
      }
    } else if (state.screen === 'interactive') {
      const machine = getSelectedMachine();
      const num = Number(e.key);
      if (num >= 1 && num <= machine.components.length) {
        selectMachineComponent(machine.components[num - 1].id);
      }
    }
  });
}

buildApp();
