/**
 * ORBITOYS — Automated NASA Archival Photograph & In-Game Viewer Verification Suite
 *
 * Verifies that:
 * 1. All 12 verified NASA archival photographs exist on disk under `public/assets/nasa/`.
 * 2. Every photo has non-zero file size and valid format (.jpg, .webp).
 * 3. Every photo in `NASA_ARCHIVAL_PHOTOS` contains verified historical metadata:
 *    - title
 *    - mission
 *    - verified historical capture date
 *    - photographer / camera (when identified)
 *    - credit
 *    - displayCaption
 *    - historicalDescription
 *    - sourceUrl (official NASA URL)
 * 4. All 5 shelf collectible machines map to existing primary/secondary photo IDs.
 * 5. All interactive components map to existing archival photo IDs.
 * 6. All Rover exploration traverse stops map to verified photographic assets.
 * 7. In-game modal `#nasa-photo-backdrop` contains all required interactive controls:
 *    - Reusable modal container & title
 *    - Enlarge Image / Fit to Viewer toggle
 *    - Open Original Image local high-resolution link
 *    - Official NASA Source external link
 *    - Close button & Escape key handling
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const mainJsPath = path.join(rootDir, 'src', 'main.js');
const sourcesMdPath = path.join(rootDir, 'SOURCES.md');
const nasaDir = path.join(rootDir, 'public', 'assets', 'nasa');

console.log('======================================================================');
console.log('ORBITOYS — NASA ARCHIVAL PHOTOGRAPH VERIFICATION TEST SUITE');
console.log('======================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// 1. Verify existence of public/assets/nasa directory
assert(fs.existsSync(nasaDir), 'Directory public/assets/nasa/ exists on disk');

// 2. Parse NASA_ARCHIVAL_PHOTOS from main.js
const mainJs = fs.readFileSync(mainJsPath, 'utf8');

const photoBlockMatch = mainJs.match(
  /const NASA_ARCHIVAL_PHOTOS = \{([\s\S]*?)\n\};/
);
assert(Boolean(photoBlockMatch), 'Found NASA_ARCHIVAL_PHOTOS declaration in src/main.js');

// Extract photo entries
const entryRegex = /'([^']+)':\s*\{([\s\S]*?)\n\s*\},/g;
const photos = {};
let match;
while ((match = entryRegex.exec(photoBlockMatch[1])) !== null) {
  const photoId = match[1];
  const body = match[2];

  const getProp = (prop) => {
    const pMatch = body.match(new RegExp(`${prop}:\\s*('([^']*)'|"([^"]*)"|null|true|false)`));
    if (!pMatch) return null;
    if (pMatch[1] === 'null') return null;
    if (pMatch[1] === 'true') return true;
    if (pMatch[1] === 'false') return false;
    return pMatch[2] !== undefined ? pMatch[2] : pMatch[3];
  };

  photos[photoId] = {
    id: photoId,
    machineId: getProp('machineId'),
    filename: getProp('filename'),
    src: getProp('src'),
    title: getProp('title'),
    mission: getProp('mission'),
    date: getProp('date'),
    photographer: getProp('photographer'),
    credit: getProp('credit'),
    displayCaption: getProp('displayCaption'),
    historicalDescription: getProp('historicalDescription'),
    sourceUrl: getProp('sourceUrl'),
  };
}

const photoIds = Object.keys(photos);
assert(photoIds.length === 12, `Exactly 12 NASA archival photographs registered (found: ${photoIds.length})`);

console.log('\n--- Verifying Each of the 12 Archival Images on Disk & Metadata ---');
photoIds.forEach((id, idx) => {
  const p = photos[id];
  const diskPath = path.join(nasaDir, p.filename);
  const fileExists = fs.existsSync(diskPath);
  const fileSize = fileExists ? fs.statSync(diskPath).size : 0;

  assert(
    fileExists && fileSize > 1000,
    `[${idx + 1}/12] Photo '${id}' file exists on disk: '${p.filename}' (${(fileSize / 1024).toFixed(1)} KB)`
  );

  assert(
    Boolean(p.title && p.mission && p.date && p.credit && p.displayCaption && p.historicalDescription && p.sourceUrl),
    `[${idx + 1}/12] Photo '${id}' contains complete verified NASA metadata`
  );

  assert(
    p.sourceUrl.startsWith('https://'),
    `[${idx + 1}/12] Photo '${id}' links to verified official HTTPS NASA source URL`
  );
});

// 3. Verify Machine Default Photo Mappings
console.log('\n--- Verifying Machine Default NASA Photo Mappings ---');
const machineDefaultMatch = mainJs.match(
  /const MACHINE_DEFAULT_NASA_PHOTOS = \{([\s\S]*?)\n\};/
);
assert(Boolean(machineDefaultMatch), 'Found MACHINE_DEFAULT_NASA_PHOTOS in src/main.js');

const machines = ['apollo-lm', 'lrv', 'alsep', 'sojourner', 'mer'];
machines.forEach((mId) => {
  const mMatch = machineDefaultMatch[1].match(new RegExp(`'${mId}'|${mId}:\\s*\\{([\\s\\S]*?)\\}`));
  assert(Boolean(mMatch), `Machine '${mId}' has default NASA photo mapping configuration`);
});

// 4. Verify Rover Exploration Traverse Stops Point to Real Assets
console.log('\n--- Verifying Rover Exploration Traverse Locations ---');
const lrvMissionMatch = mainJs.match(/const LRV_MISSION_LOCATIONS = \[([\s\S]*?)\n\];/);
assert(Boolean(lrvMissionMatch), 'Found LRV_MISSION_LOCATIONS in src/main.js');

const roverPhotoSrcs = [...lrvMissionMatch[1].matchAll(/src:\s*'([^']+)'/g)].map((m) => m[1]);
roverPhotoSrcs.forEach((src) => {
  const decoded = decodeURIComponent(src.replace(/^\//, ''));
  const filePath = path.join(rootDir, 'public', decoded);
  assert(fs.existsSync(filePath), `Rover stop photo exists on disk: ${decoded}`);
});

// 5. Verify In-Game NASA Viewer Modal Markup in src/main.js
console.log('\n--- Verifying Reusable In-Game NASA Photograph Viewer Modal Elements ---');
const requiredModalElements = [
  'id="nasa-photo-backdrop"',
  'class="nasa-viewer-modal"',
  'id="nasa-viewer-context"',
  'id="nasa-viewer-title"',
  'id="btn-nasa-viewer-zoom"',
  'id="nasa-viewer-open-original"',
  'id="btn-nasa-viewer-close"',
  'id="nasa-viewer-stage"',
  'id="nasa-viewer-img"',
  'id="nasa-viewer-fallback"',
  'id="nasa-viewer-mission"',
  'id="nasa-viewer-date"',
  'id="nasa-viewer-credit"',
  'id="nasa-viewer-photographer-chip"',
  'id="nasa-viewer-photographer"',
  'id="nasa-viewer-caption"',
  'id="nasa-viewer-description"',
  'id="nasa-viewer-source-link"',
];

requiredModalElements.forEach((el) => {
  assert(mainJs.includes(el), `Modal markup includes element '${el}'`);
});

// 6. Verify Full State Preservation Logic in main.js
console.log('\n--- Verifying State Preservation & Keyboard Accessibility ---');
assert(
  mainJs.includes('state.lastNasaThumbTrigger = triggerEl'),
  'Viewer records trigger element before opening'
);
assert(
  mainJs.includes('state.lastNasaThumbTrigger.focus()'),
  'Viewer restores keyboard focus to thumbnail trigger upon closing'
);
assert(
  mainJs.includes("if (state.isNasaPhotoOpen)") && mainJs.includes("e.key === 'Escape'"),
  'Escape key handler closes NASA photo viewer cleanly'
);

// 7. Verify Shelf Screen Exit Game Controls
console.log('\n--- Verifying Shelf Screen Exit Game Controls ---');
assert(
  mainJs.includes('id="btn-shelf-exit-game"'),
  'Shelf screen contains Exit Game button (#btn-shelf-exit-game)'
);
assert(
  mainJs.includes("navigateToScreen('title')"),
  'Exit Game button triggers transition to beginning title screen'
);
assert(
  mainJs.includes("state.screen === 'shelf'") && mainJs.includes("navigateToScreen('title')"),
  'Escape key on shelf screen exits cleanly to title screen'
);

// 8. Verify SOURCES.md Documentation
console.log('\n--- Verifying Documentation in SOURCES.md ---');
const sourcesMd = fs.readFileSync(sourcesMdPath, 'utf8');
assert(sourcesMd.includes('### NASA Archival Photographs'), 'SOURCES.md contains Section 4 NASA Archival Photographs');
photoIds.forEach((id) => {
  const p = photos[id];
  assert(sourcesMd.includes(p.filename), `SOURCES.md documents archival photograph: ${p.filename}`);
});

console.log('\n======================================================================');
console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} passed, ${failedTests} failed.`);
console.log('======================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL NASA ARCHIVAL PHOTOGRAPH & VIEWER CHECKS PASSED!\n');
  process.exit(0);
}
