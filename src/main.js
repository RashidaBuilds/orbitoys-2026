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
      src: null, // AS15-85-11451 not present in public/assets/nasa/; uses illustrated rille strata card + official NASA link
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
    if (reducedMotionQuery.matches || activeCount >= MAX_PARTICLES) return;

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

    <!-- LUNAR ROVER MISSION BRIEFING / GAME START MODAL (Only reachable from LRV) -->
    <div class="modal-backdrop" id="mission-preview-backdrop" hidden>
      <div class="briefing-card" role="dialog" aria-modal="true" aria-labelledby="mission-preview-title">
        <p class="caption-orange">MISSION BRIEFING  /  APOLLO 15  /  HADLEY–APENNINE  /  JULY 31, 1971</p>
        <h2 class="heading-lg text-plum" id="mission-preview-title">Lunar Roving Vehicle — Playable Mission</h2>
        <p class="body-md text-plum briefing-card__body">
          The Lunar Roving Vehicle folded into the Lunar Module for the trip to the Moon. On July 31, 1971, Apollo 15 astronauts David Scott and James Irwin drove it across the Hadley–Apennine landing site, travelling approximately 28 kilometres to collect lunar rock and soil samples.
        </p>
        <div class="briefing-card__actions">
          <button type="button" class="btn btn--secondary" id="btn-mission-preview-shelf">
            <span>← Back to shelf</span>
          </button>
          <button type="button" class="btn btn--play-mission" id="btn-mission-preview-close">
            <img src="/assets/icon-play.svg" alt="" class="btn-play-mission__icon" aria-hidden="true" />
            <span>Start Lunar Rover Mission</span>
          </button>
        </div>
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

  state.screen = targetScreen;
  document.body.dataset.screen = targetScreen;
  audioSystem.playTransition();

  if (targetScreen === 'discovery') {
    renderMachineIntroduction();
  } else if (targetScreen === 'interactive') {
    renderComponentDiscovery();
  } else if (targetScreen === 'shelf') {
    renderShelfSelection();
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
    statusPill.textContent = 'FIRST DISCOVERY • PLAYABLE MISSION';
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
 * Lunar Rover Mission Preview Modal (for the Play Lunar Rover Mission button)
 */
function openMissionPreviewModal() {
  const machine = getSelectedMachine();
  if (!machine.isPlayable) return;
  state.isMissionPreviewOpen = true;
  const backdrop = document.querySelector('#mission-preview-backdrop');
  backdrop.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add('is-open');
    document.querySelector('#btn-mission-preview-close').focus();
  });
}

function closeMissionPreviewModal() {
  state.isMissionPreviewOpen = false;
  const backdrop = document.querySelector('#mission-preview-backdrop');
  backdrop.classList.remove('is-open');
  backdrop.hidden = true;
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
    openMissionPreviewModal();
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
    openMissionPreviewModal();
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

  // Mission Preview Modal controls
  document.querySelector('#btn-mission-preview-close').addEventListener('click', () => {
    audioSystem.playClick();
    closeMissionPreviewModal();
  });

  document.querySelector('#btn-mission-preview-shelf').addEventListener('click', () => {
    audioSystem.playClick();
    closeMissionPreviewModal();
    navigateToScreen('shelf');
  });

  document.querySelector('#mission-preview-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'mission-preview-backdrop') {
      audioSystem.playClick();
      closeMissionPreviewModal();
    }
  });

  // Global Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (state.isZoomOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        audioSystem.playClick();
        closeZoomModal();
      }
      return;
    }

    if (state.isMissionPreviewOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        audioSystem.playClick();
        closeMissionPreviewModal();
      }
      return;
    }

    if (state.screen === 'dialogue') {
      const activeTag = document.activeElement?.tagName;
      const isButtonFocused = activeTag === 'BUTTON';

      if ((e.key === 'Enter' || e.key === ' ') && !isButtonFocused) {
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
