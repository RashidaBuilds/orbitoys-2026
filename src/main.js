import './style.css';

/**
 * ORBITOYS — Game Data (Fictional Framing Narrative + Verified NASA Machine Facts)
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

// Historical NASA Machines on the ORBITOYS Shelf (Figma #79:1700 & #85:701)
const SHELF_MACHINES = [
  {
    id: 'apollo-lm',
    order: '01',
    name: 'Apollo Lunar Module',
    shortName: 'Lunar Module',
    shortMission: 'Apollo 11, 12, 14, 15, 16 & 17',
    caption: 'MOON  /  APOLLO 11, 12, 14, 15, 16 & 17  /  1969–1972',
    summary:
      'The two-stage lunar lander that ferried Apollo astronauts between lunar orbit and the surface of the Moon.',
    briefing:
      'Built specifically to fly in the vacuum of space, the Apollo Lunar Module landed twelve astronauts across six lunar missions between 1969 and 1972. Its descent stage remained on the Moon as a launch pad when the ascent stage returned the crew to orbit.',
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 19.56, top: 37.26, width: 14.08, height: 43.87 },
  },
  {
    id: 'lrv',
    order: '02',
    name: 'Lunar Roving Vehicle',
    shortName: 'Lunar Rover',
    shortMission: 'Apollo 15, 16 & 17',
    caption: 'MOON  /  APOLLO 15, 16 & 17  /  1971–1972',
    summary:
      'An electric Moon buggy that helped astronauts travel farther and collect more lunar samples.',
    briefing:
      'The Lunar Roving Vehicle folded into the Lunar Module for the trip to the Moon. Astronauts drove it on Apollo 15, 16 and 17, carrying tools, cameras and rock samples across the lunar surface.',
    isFirstDiscovery: true,
    isPlayable: true,
    hitbox: { left: 34.18, top: 35.34, width: 15.57, height: 45.91 },
  },
  {
    id: 'alsep',
    order: '03',
    name: 'ALSEP',
    shortName: 'ALSEP',
    shortMission: 'Apollo 12, 14, 15, 16 & 17',
    caption: 'MOON  /  APOLLO 12, 14, 15, 16 & 17  /  1969–1977',
    summary:
      'The Apollo Lunar Surface Experiments Package — scientific stations left on the Moon to monitor the lunar environment.',
    briefing:
      'Deployed by astronauts on Apollo 12, 14, 15, 16 and 17, ALSEP instruments transmitted data on moonquakes, the solar wind, lunar heat flow and magnetic fields back to Earth until the stations were commanded off in September 1977.',
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 50.83, top: 37.26, width: 14.21, height: 44.23 },
  },
  {
    id: 'sojourner',
    order: '04',
    name: 'Sojourner Rover',
    shortName: 'Sojourner',
    shortMission: 'Mars Pathfinder, 1997',
    caption: 'MARS  /  MARS PATHFINDER  /  1997',
    summary:
      "NASA's first wheeled Mars rover, a six-wheeled pioneer that analyzed Martian rocks and soil during the 1997 Pathfinder mission.",
    briefing:
      'Landing on Mars on July 4, 1997 aboard Mars Pathfinder, the microwave-oven-sized Sojourner rover proved that mobile robotic exploration on Mars was possible, returning chemical analyses of Martian rocks and hundreds of surface photographs.',
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 65.93, top: 37.26, width: 14.62, height: 44.23 },
  },
  {
    id: 'mer',
    order: '05',
    name: 'Spirit & Opportunity',
    shortName: 'Spirit & Opp.',
    shortMission: 'Mars Exploration Rovers, 2004',
    caption: 'MARS  /  MARS EXPLORATION ROVERS  /  2004',
    summary:
      'Twin robotic geologists that landed on opposite sides of Mars in 2004 to search for evidence of past water activity.',
    briefing:
      'Planned for 90-day missions after landing in January 2004, Spirit and Opportunity operated for years on Mars. Using panoramic cameras, rock abrasion tools and spectrometers, they uncovered geological evidence that liquid water once existed on the Martian surface.',
    isFirstDiscovery: false,
    isPlayable: false,
    hitbox: { left: 81.29, top: 37.26, width: 15.64, height: 44.23 },
  },
];

// Lunar Roving Vehicle Interactive Hotspots (Figma #94:681)
const ROVER_HOTSPOTS = [
  {
    id: '01',
    number: '01',
    label: 'Wire-mesh wheels',
    tag: 'DISCOVERY 01  /  LUNAR MOBILITY SYSTEM',
    heading: 'Wire-mesh wheels',
    description:
      'Air-filled rubber tires would fail in the vacuum and extreme temperatures of the Moon. Instead, each Lunar Roving Vehicle wheel was woven from zinc-coated steel wire mesh on a spun-aluminum rim, fitted with titanium chevron treads to keep the rover from sinking into soft lunar dust.',
    leftPercent: 30.26,
    topPercent: 75.8,
  },
  {
    id: '02',
    number: '02',
    label: 'High-gain antenna',
    tag: 'DISCOVERY 02  /  EARTH COMMUNICATIONS',
    heading: 'High-gain antenna',
    description:
      'Mounted on the front of the rover like a ribbed umbrella, the parabolic high-gain antenna beamed live color television video and telemetry directly to Earth. Whenever astronauts parked at a geology stop, they aimed the dish toward Earth so Mission Control could follow their exploration.',
    leftPercent: 30.77,
    topPercent: 53.42,
  },
  {
    id: '03',
    number: '03',
    label: 'Tools & samples',
    tag: 'DISCOVERY 03  /  SCIENCE & GEOLOGY PAYLOAD',
    heading: 'Tools & samples',
    description:
      'Behind the twin folding seats, the rover carried geologic hammers, scoops, core tubes, sample bags and scientific gear. By hauling heavy equipment and collected Moon rocks across kilometers of rugged lunar terrain, it let Apollo 15, 16 and 17 crews explore far beyond their lander.',
    leftPercent: 80.77,
    topPercent: 68.08,
  },
];

// User-provided soundtrack path in public/assets/audio/
const THEME_AUDIO_SRC = '/assets/audio/orbitoys-theme.mp3';

/**
 * Application State
 */
const state = {
  screen: 'title',
  dialogueIndex: 0,
  selectedMachineId: 'lrv',
  isBriefingOpen: false,
  activeHotspotId: null,
  discoveredHotspots: new Set(),
  entranceTimer: null,
  musicEnabled: true,
  musicStarted: false,
  sfxEnabled: true,
};

/**
 * Audio & Sound Design System (User Soundtrack + Web Audio API SFX)
 */
const audioSystem = (() => {
  let ctx = null;
  let themeAudio = null;
  let fadeInterval = null;
  let lastHoverSoundAt = 0;
  const TARGET_MUSIC_VOLUME = 0.25;

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
    return themeAudio;
  }

  function startMusicWithFade() {
    const audio = initThemeMusic();
    if (!state.musicEnabled) return;

    if (audio.paused) {
      audio.volume = 0.01;
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
            if (audio.volume < TARGET_MUSIC_VOLUME - 0.015) {
              audio.volume = Math.min(TARGET_MUSIC_VOLUME, audio.volume + 0.015);
            } else {
              audio.volume = TARGET_MUSIC_VOLUME;
              clearInterval(fadeInterval);
            }
          }, 90);
        })
        .catch(() => {});
    }
  }

  function toggleMusic() {
    state.musicEnabled = !state.musicEnabled;
    const audio = initThemeMusic();

    if (fadeInterval) {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }

    if (state.musicEnabled) {
      startMusicWithFade();
    } else {
      audio.pause();
    }
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

  return {
    initThemeMusic,
    startMusicWithFade,
    toggleMusic,
    toggleSfx,
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

  musicBtn.setAttribute('aria-pressed', state.musicEnabled ? 'true' : 'false');
  musicBtn.classList.toggle('is-muted', !state.musicEnabled);
  musicBtn.querySelector('.audio-pill__label').textContent = state.musicEnabled
    ? 'Music On'
    : 'Music Off';

  sfxBtn.setAttribute('aria-pressed', state.sfxEnabled ? 'true' : 'false');
  sfxBtn.classList.toggle('is-muted', !state.sfxEnabled);
  sfxBtn.querySelector('.audio-pill__label').textContent = state.sfxEnabled
    ? 'SFX On'
    : 'SFX Off';
}

/**
 * Star & Sparkle Cursor Trail System (Reference B: Paws & Pour adapted for ORBITOYS)
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
      const isInteractive = e.target.closest('button, [role="radio"], [role="tab"]');
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

      <!-- 5 & 6. CHOOSE A MACHINE SHELF (#79:1700) + MISSION BRIEFING MODAL (#85:805) -->
      <section class="screen screen--collection" id="screen-shelf" data-screen="shelf" aria-hidden="true" aria-label="Choose a machine to explore">
        <div class="collection-shell collection-shell--shelf">
          <header class="shelf-header">
            <div class="shelf-header__titles">
              <h1 class="heading-lg">Choose a machine to explore!</h1>
              <p class="body-md">Pick a collectible to uncover its mission.</p>
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

          <!-- Selected Machine Information Bar (#85:695) -->
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
                class="btn btn--secondary btn--compact"
                id="btn-return-to-lrv"
                hidden
              >
                Select Lunar Roving Vehicle
              </button>
              <button
                type="button"
                class="btn btn--primary"
                id="btn-explore-machine"
                data-sfx-hover="true"
              >
                <span>Explore Machine</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        </div>

        <!-- 6. MISSION BRIEFING MODAL (#85:805) -->
        <div class="briefing-backdrop" id="briefing-backdrop" hidden>
          <div
            class="briefing-card"
            id="briefing-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="briefing-title"
          >
            <p class="caption-orange" id="briefing-overline">MISSION BRIEFING</p>
            <h2 class="heading-lg text-plum" id="briefing-title">Lunar Roving Vehicle</h2>
            <p class="caption-orange briefing-card__meta" id="briefing-meta">
              MOON  /  APOLLO 15, 16 &amp; 17  /  1971–1972
            </p>
            <p class="body-md text-plum briefing-card__body" id="briefing-body"></p>
            <div class="briefing-card__actions">
              <button type="button" class="btn btn--secondary" id="btn-briefing-back" data-sfx-hover="true">
                <span class="btn-arrow-left" aria-hidden="true">←</span>
                <span>Back to shelf</span>
              </button>
              <button type="button" class="btn btn--primary" id="btn-briefing-start" data-sfx-hover="true">
                <span>Continue to Mission Discovery</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. MACHINE DISCOVERY & ROVER INTRODUCTION (#94:676) -->
      <section class="screen screen--collection" id="screen-discovery" data-screen="discovery" aria-hidden="true" aria-label="Mission discovery: Lunar Roving Vehicle">
        <div class="collection-shell">
          <header class="collection-nav">
            <div class="collection-nav__titles">
              <h1 class="heading-lg">Mission discovery</h1>
              <p class="caption-amber">ORBITOYS  /  SPACE EXPLORATION COLLECTION</p>
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
              <div class="collectible-card__image-wrap">
                <img
                  class="collectible-card__image"
                  src="/assets/lunar-roving-vehicle-465abb.png"
                  alt="ORBITOYS Lunar Roving Vehicle collectible package"
                />
              </div>
              <div class="collectible-card__meta">
                <p class="caption-amber">YOUR ORIGINAL COLLECTIBLE</p>
                <p class="body-md">The same machine. A bigger story.</p>
              </div>
            </article>

            <!-- Right Card: Mission Story (#94:679) -->
            <article class="mission-story-card">
              <div class="mission-story-card__content">
                <p class="caption-orange">MOON  /  APOLLO 15, 16 &amp; 17  /  1971–1972</p>
                <h2 class="display-title text-plum">Lunar Roving Vehicle</h2>
                <p class="heading-lg text-plum mission-story-card__lead">
                  An electric Moon buggy that helped astronauts travel farther and collect more lunar samples.
                </p>

                <div class="mission-story-card__special">
                  <p class="caption-orange">WHAT MADE IT SPECIAL?</p>
                  <p class="body-md text-plum">
                    The Lunar Roving Vehicle folded into the Lunar Module for the trip to the Moon. Astronauts drove it on Apollo 15, 16 and 17, carrying tools, cameras and rock samples across the lunar surface.
                  </p>
                </div>
              </div>

              <div class="mission-story-card__actions">
                <button type="button" class="btn btn--primary" id="btn-open-interactive-rover" data-sfx-hover="true">
                  <span>Explore Interactive Rover</span>
                  <span class="btn-arrow" aria-hidden="true">→</span>
                </button>
                <button type="button" class="btn btn--secondary" id="btn-choose-another-machine" data-sfx-hover="true">
                  <span>Choose another machine</span>
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

      <!-- 8. INTERACTIVE LUNAR ROVER (#94:681) -->
      <section class="screen screen--collection" id="screen-interactive" data-screen="interactive" aria-hidden="true" aria-label="Interactive Lunar Roving Vehicle Exploration">
        <div class="collection-shell">
          <header class="collection-nav">
            <div class="collection-nav__titles">
              <h1 class="heading-lg">Lunar Roving Vehicle</h1>
              <p class="caption-amber">INTERACTIVE DISCOVERY  /  APOLLO 15, 16 &amp; 17</p>
            </div>
            <div class="collection-nav__action">
              <button type="button" class="btn btn--primary" id="btn-back-to-intro" data-sfx-hover="true">
                <span class="btn-arrow-left" aria-hidden="true">←</span>
                <span>Back to introduction</span>
              </button>
            </div>
          </header>

          <div class="interactive-grid">
            <!-- Left Panel: Rover Laboratory (#94:683) -->
            <section class="rover-lab-card" aria-label="Rover laboratory">
              <div class="rover-lab-card__header">
                <p class="caption-amber">EXPLORE THE COLLECTIBLE</p>
                <h2 class="label-lg">Select a number. Reveal a discovery.</h2>
              </div>

              <div class="rover-lab-stage">
                <div class="rover-artwork-box" id="rover-artwork-box">
                  <img
                    class="rover-artwork-img"
                    src="/assets/lunar-roving-vehicle-465abb.png"
                    alt="Lunar Roving Vehicle collectible with numbered exploration hotspots"
                  />
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
                <h2 class="heading-lg text-plum" id="field-notes-heading">
                  How does a Moon buggy work?
                </h2>
                <p class="body-md text-plum field-notes-card__body" id="field-notes-body">
                  Choose a numbered hotspot on the collectible to discover how the rover helped astronauts explore the Moon.
                </p>
              </div>

              <div class="field-notes-card__progress">
                <div class="field-notes-card__counter-row">
                  <div>
                    <p class="caption-orange">DISCOVERIES MADE</p>
                    <div class="discoveries-counter">
                      <span class="display-title text-plum" id="discoveries-count">0</span>
                      <span class="heading-lg text-plum">/ 3</span>
                    </div>
                  </div>
                  <span class="discoveries-complete-pill" id="discoveries-complete-pill" hidden>
                    ★ All 3 parts discovered!
                  </span>
                </div>

                <div class="discoveries-list" id="discoveries-list" role="list" aria-label="Lunar Rover parts checklist"></div>
              </div>
            </section>
          </div>

          <footer class="collection-footer collection-footer--with-action">
            <div class="collection-footer__copy">
              <h2 class="heading-lg">Built for a world without roads.</h2>
              <p class="body-md">
                Discover all three parts, then return to the shelf to meet another machine.
              </p>
            </div>
            <div class="collection-footer__action">
              <button type="button" class="btn btn--primary" id="btn-interactive-back-shelf" data-sfx-hover="true">
                <span class="btn-arrow-left" aria-hidden="true">←</span>
                <span>Back to shelf</span>
              </button>
            </div>
          </footer>
        </div>
      </section>
    </main>
  `;

  initStarTrail();
  initDialogueDots();
  initShelfCollectibles();
  initRoverHotspots();
  bindEvents();
  renderDialogue();
  renderShelfSelection();
  renderRoverExploration();
  updateAudioControlsUI();
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

  const screens = document.querySelectorAll('.screen');
  screens.forEach((sec) => {
    const isMatch = sec.dataset.screen === targetScreen;
    sec.classList.toggle('is-active', isMatch);
    sec.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
  });

  // Automatic camera push-in transition on Screen 3 (Approaching the Entrance)
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

  const bgShopkeeper = document.querySelector('#bg-shopkeeper');
  const bgGirl = document.querySelector('#bg-girl');
  const bgShelf = document.querySelector('#bg-shelf');

  bgShopkeeper.classList.toggle('is-active', current.shot === 'shopkeeper');
  bgGirl.classList.toggle('is-active', current.shot === 'girl');
  bgShelf.classList.toggle('is-active', current.shot === 'shelf');

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

  const dots = document.querySelectorAll('.dialogue-dot-btn');
  dots.forEach((dotBtn, idx) => {
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
 * Screen 5 & 6: Store Shelf & Mission Briefing
 */
function initShelfCollectibles() {
  const hitboxesContainer = document.querySelector('#shelf-hitboxes');
  const mobilePicker = document.querySelector('#shelf-mobile-picker');

  hitboxesContainer.innerHTML = SHELF_MACHINES.map(
    (machine) => `
      <button
        type="button"
        class="shelf-hitbox ${machine.isFirstDiscovery ? 'shelf-hitbox--first-discovery' : 'shelf-hitbox--inactive'}"
        data-machine-id="${machine.id}"
        data-sfx-hover="true"
        role="radio"
        aria-checked="${machine.id === state.selectedMachineId ? 'true' : 'false'}"
        aria-label="${machine.name} (${machine.shortMission})${machine.isFirstDiscovery ? ' — First Discovery, Playable' : ' — Discovery Coming Soon'}"
        style="left: ${machine.hitbox.left}%; top: ${machine.hitbox.top}%; width: ${machine.hitbox.width}%; height: ${machine.hitbox.height}%;"
      >
        <span class="shelf-hitbox__pill">${machine.isFirstDiscovery ? 'Selected • Playable' : 'Selected'}</span>
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

function selectShelfMachine(machineId) {
  if (state.selectedMachineId !== machineId) {
    audioSystem.playSelectCollectible();
  }
  state.selectedMachineId = machineId;
  renderShelfSelection();
}

function renderShelfSelection() {
  const selected =
    SHELF_MACHINES.find((m) => m.id === state.selectedMachineId) || SHELF_MACHINES[1];

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
  const exploreBtn = document.querySelector('#btn-explore-machine');
  const returnToLrvBtn = document.querySelector('#btn-return-to-lrv');
  const bar = document.querySelector('#selected-machine-bar');

  bar.classList.remove('is-updating');
  void bar.offsetWidth;
  bar.classList.add('is-updating');

  if (selected.isPlayable) {
    statusPill.textContent = 'FIRST DISCOVERY • PLAYABLE';
    statusPill.className = 'machine-status-pill machine-status-pill--playable';
    exploreBtn.disabled = false;
    exploreBtn.setAttribute('aria-disabled', 'false');
    exploreBtn.innerHTML =
      '<span>Explore Machine</span><span class="btn-arrow" aria-hidden="true">→</span>';
    returnToLrvBtn.hidden = true;
  } else {
    statusPill.textContent = 'DISCOVERY COMING SOON';
    statusPill.className = 'machine-status-pill machine-status-pill--locked';
    exploreBtn.disabled = true;
    exploreBtn.setAttribute('aria-disabled', 'true');
    exploreBtn.innerHTML = '<span>Explore Machine</span>';
    returnToLrvBtn.hidden = false;
  }
}

function openMissionBriefing() {
  const selected =
    SHELF_MACHINES.find((m) => m.id === state.selectedMachineId) || SHELF_MACHINES[1];
  if (!selected.isPlayable) return;

  state.isBriefingOpen = true;
  const backdrop = document.querySelector('#briefing-backdrop');
  document.querySelector('#briefing-title').textContent = selected.name;
  document.querySelector('#briefing-meta').textContent = selected.caption;
  document.querySelector('#briefing-body').textContent = selected.briefing;

  backdrop.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add('is-open');
    document.querySelector('#btn-briefing-start').focus();
  });
}

function closeMissionBriefing() {
  state.isBriefingOpen = false;
  const backdrop = document.querySelector('#briefing-backdrop');
  backdrop.classList.remove('is-open');
  backdrop.hidden = true;
}

/**
 * Screen 8: Interactive Lunar Rover Exploration (#94:681)
 */
function initRoverHotspots() {
  const hotspotsContainer = document.querySelector('#rover-hotspots');
  const listContainer = document.querySelector('#discoveries-list');

  hotspotsContainer.innerHTML = ROVER_HOTSPOTS.map(
    (spot) => `
      <button
        type="button"
        class="hotspot-btn"
        data-hotspot-id="${spot.id}"
        data-sfx-hover="true"
        style="left: ${spot.leftPercent}%; top: ${spot.topPercent}%;"
        aria-label="Hotspot ${spot.number}: ${spot.label}"
        aria-pressed="false"
      >
        <span class="hotspot-btn__num">${spot.number}</span>
        <span class="hotspot-btn__check" aria-hidden="true">✓</span>
      </button>
    `
  ).join('');

  listContainer.innerHTML = ROVER_HOTSPOTS.map(
    (spot) => `
      <button
        type="button"
        class="discovery-item"
        data-hotspot-id="${spot.id}"
        data-sfx-hover="true"
        role="listitem"
      >
        <span class="discovery-item__num">${spot.number}</span>
        <span class="discovery-item__label">${spot.label}</span>
        <span class="discovery-item__status" aria-hidden="true">Explore →</span>
      </button>
    `
  ).join('');
}

function selectRoverHotspot(hotspotId) {
  const wasAlreadyDiscovered = state.discoveredHotspots.has(hotspotId);
  state.activeHotspotId = hotspotId;
  state.discoveredHotspots.add(hotspotId);

  const isNowComplete =
    !wasAlreadyDiscovered && state.discoveredHotspots.size === ROVER_HOTSPOTS.length;
  audioSystem.playDiscoveryChime(isNowComplete);

  renderRoverExploration(!wasAlreadyDiscovered);
}

function renderRoverExploration(isNewDiscovery = false) {
  const activeSpot = ROVER_HOTSPOTS.find((h) => h.id === state.activeHotspotId);
  const tagEl = document.querySelector('#field-notes-tag');
  const badgeEl = document.querySelector('#field-notes-badge');
  const headingEl = document.querySelector('#field-notes-heading');
  const bodyEl = document.querySelector('#field-notes-body');
  const countEl = document.querySelector('#discoveries-count');
  const completePill = document.querySelector('#discoveries-complete-pill');
  const fieldNotesCard = document.querySelector('#field-notes-card');

  if (activeSpot) {
    tagEl.textContent = activeSpot.tag;
    headingEl.textContent = activeSpot.heading;
    bodyEl.textContent = activeSpot.description;
    badgeEl.hidden = false;
    badgeEl.textContent = isNewDiscovery ? '★ New Discovery!' : '✓ Discovered';

    fieldNotesCard.classList.remove('is-pulsing');
    void fieldNotesCard.offsetWidth;
    fieldNotesCard.classList.add('is-pulsing');
  } else {
    tagEl.textContent = 'YOUR FIELD NOTES';
    headingEl.textContent = 'How does a Moon buggy work?';
    bodyEl.textContent =
      'Choose a numbered hotspot on the collectible to discover how the rover helped astronauts explore the Moon.';
    badgeEl.hidden = true;
  }

  const discoveredCount = state.discoveredHotspots.size;
  countEl.textContent = String(discoveredCount);
  completePill.hidden = discoveredCount < ROVER_HOTSPOTS.length;

  document.querySelectorAll('.hotspot-btn').forEach((btn) => {
    const id = btn.dataset.hotspotId;
    const isSelected = id === state.activeHotspotId;
    const isDiscovered = state.discoveredHotspots.has(id);
    btn.classList.toggle('is-selected', isSelected);
    btn.classList.toggle('is-discovered', isDiscovered);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  document.querySelectorAll('.discovery-item').forEach((item) => {
    const id = item.dataset.hotspotId;
    const isSelected = id === state.activeHotspotId;
    const isDiscovered = state.discoveredHotspots.has(id);
    item.classList.toggle('is-selected', isSelected);
    item.classList.toggle('is-discovered', isDiscovered);

    const statusEl = item.querySelector('.discovery-item__status');
    if (isSelected) {
      statusEl.textContent = '● Viewing';
    } else if (isDiscovered) {
      statusEl.textContent = '✓ Discovered';
    } else {
      statusEl.textContent = 'Explore →';
    }
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

  document.querySelector('#shelf-hitboxes').addEventListener('click', (e) => {
    const btn = e.target.closest('.shelf-hitbox');
    if (!btn) return;
    selectShelfMachine(btn.dataset.machineId);
  });

  document.querySelector('#shelf-mobile-picker').addEventListener('click', (e) => {
    const btn = e.target.closest('.shelf-picker-card');
    if (!btn) return;
    selectShelfMachine(btn.dataset.machineId);
  });

  document.querySelector('#btn-return-to-lrv').addEventListener('click', () => {
    selectShelfMachine('lrv');
  });

  document.querySelector('#btn-explore-machine').addEventListener('click', (e) => {
    if (e.currentTarget.disabled) return;
    audioSystem.playClick();
    openMissionBriefing();
  });

  document.querySelector('#btn-briefing-back').addEventListener('click', () => {
    audioSystem.playClick();
    closeMissionBriefing();
  });

  document.querySelector('#briefing-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'briefing-backdrop') {
      audioSystem.playClick();
      closeMissionBriefing();
    }
  });

  document.querySelector('#btn-briefing-start').addEventListener('click', () => {
    audioSystem.playClick();
    closeMissionBriefing();
    navigateToScreen('discovery');
  });

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

  document.querySelector('#rover-hotspots').addEventListener('click', (e) => {
    const btn = e.target.closest('.hotspot-btn');
    if (!btn) return;
    selectRoverHotspot(btn.dataset.hotspotId);
  });

  document.querySelector('#discoveries-list').addEventListener('click', (e) => {
    const item = e.target.closest('.discovery-item');
    if (!item) return;
    selectRoverHotspot(item.dataset.hotspotId);
  });

  document.querySelector('#btn-back-to-intro').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('discovery');
  });

  document.querySelector('#btn-interactive-back-shelf').addEventListener('click', () => {
    audioSystem.playClick();
    navigateToScreen('shelf');
  });

  window.addEventListener('keydown', (e) => {
    if (state.isBriefingOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        audioSystem.playClick();
        closeMissionBriefing();
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
        const currentIndex = SHELF_MACHINES.findIndex((m) => m.id === state.selectedMachineId);
        if (currentIndex !== -1) {
          const delta = e.key === 'ArrowRight' ? 1 : -1;
          const nextIndex =
            (currentIndex + delta + SHELF_MACHINES.length) % SHELF_MACHINES.length;
          selectShelfMachine(SHELF_MACHINES[nextIndex].id);
        }
      }
    } else if (state.screen === 'interactive') {
      if (e.key === '1' || e.key === '2' || e.key === '3') {
        selectRoverHotspot(`0${e.key}`);
      }
    }
  });
}

buildApp();
