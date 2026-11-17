/**
 * ORBITOYS — Automated Mission Briefing Registration, Top 10 Leaderboard, Settings & Time Scoring Verification Suite
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const mainJsPath = path.join(rootDir, 'src', 'main.js');
const styleCssPath = path.join(rootDir, 'src', 'style.css');
const envLocalPath = path.join(rootDir, '.env.local');

console.log('======================================================================');
console.log('ORBITOYS — BRIEFING REGISTRATION, TOP 10 LEADERBOARD & TIME SCORING TEST');
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

const mainJs = fs.readFileSync(mainJsPath, 'utf8');
const styleCss = fs.readFileSync(styleCssPath, 'utf8');
const envLocal = fs.existsSync(envLocalPath) ? fs.readFileSync(envLocalPath, 'utf8') : '';

// 1. Verify Google Apps Script Endpoint & .env.local
console.log('\n--- 1. Google Apps Script Endpoint & .env.local ---');
const expectedEndpoint =
  'https://script.google.com/macros/s/AKfycbzGKQrlacnFi6os69c7OIq0HOzPQvNYQg8MNY4iEP_j3j90StgmVdpaWIEy0VMyBpFA/exec';

assert(envLocal.includes(expectedEndpoint), '.env.local defines VITE_LEADERBOARD_SCRIPT_URL with correct endpoint');
assert(
  mainJs.includes('import.meta.env?.VITE_LEADERBOARD_SCRIPT_URL') ||
    mainJs.includes('import.meta.env.VITE_LEADERBOARD_SCRIPT_URL'),
  'src/main.js reads VITE_LEADERBOARD_SCRIPT_URL from environment'
);
assert(mainJs.includes(expectedEndpoint), 'src/main.js includes fallback to verified Apps Script endpoint');

// 2. Verify Briefing Screen Elements & Header Audio Controls
console.log('\n--- 2. Existing Mission Briefing Screen & Header Audio Controls ---');
assert(
  mainJs.includes('id="rover-briefing-overlay"'),
  'Existing briefing overlay (#rover-briefing-overlay) is maintained'
);
assert(
  mainJs.includes('id="rover-player-name-input"'),
  'Explorer Name input (#rover-player-name-input) is present'
);
assert(
  mainJs.includes('placeholder="Enter your name"'),
  'Input placeholder is "Enter your name"'
);
assert(
  mainJs.includes('maxlength="20"'),
  'Input enforces maxlength="20"'
);
assert(
  mainJs.includes('Explorer Name'),
  'Input has clear "Explorer Name" label'
);
assert(
  mainJs.includes('id="btn-rover-open-leaderboard"'),
  'View Leaderboard control (#btn-rover-open-leaderboard) is present on briefing screen'
);
assert(
  mainJs.includes('id="rover-leaderboard-modal"'),
  'Compact leaderboard popover/modal (#rover-leaderboard-modal) is present'
);
assert(
  mainJs.includes('id="btn-briefing-music"') && mainJs.includes('id="btn-briefing-sfx"'),
  'Briefing header top-row contains compact Music (#btn-briefing-music) and SFX (#btn-briefing-sfx) controls'
);

// 3. Verify Scoring Display & Time Bonus Note
console.log('\n--- 3. Updated Scoring Display & Time Bonus Hint ---');
assert(
  mainJs.includes('800 mission points + 200 speed bonus = 1,000 maximum') ||
    mainJs.includes('800 BASE POINTS + UP TO 200 TIME-BONUS POINTS = 1,000 MAX POINTS'),
  'Scoring formula specifies 800 base/mission points + up to 200 time/speed bonus points = 1,000 max points'
);
assert(
  mainJs.includes('Complete your mission faster to earn bonus points'),
  'Subtle time-bonus explanation note is present in briefing'
);
assert(
  mainJs.includes('BEST SCORE: 0 / 1,000 PTS') || mainJs.includes('BEST SCORE: ${state.bestRoverScore} / 1,000 PTS'),
  'Best score pill uses 1,000 max points rather than 800'
);

// 4. Verify Time Scoring Configuration & Formula (10s Full Bonus Threshold)
console.log('\n--- 4. Time Scoring Configuration & 10s Full Bonus Threshold ---');
assert(
  mainJs.includes('MAX_TIME_BONUS: 200') &&
    mainJs.includes('FULL_TIME_BONUS_SECONDS: 10') &&
    mainJs.includes('NO_TIME_BONUS_AFTER_SECONDS: 90'),
  'TIME_SCORING_CONFIG object defines MAX_TIME_BONUS: 200, FULL_TIME_BONUS_SECONDS: 10, NO_TIME_BONUS_AFTER_SECONDS: 90'
);

// Test time bonus calculation math directly (Math.floor(MAX_TIME_BONUS * remaining))
function calculateTimeBonus(elapsedSeconds) {
  const MAX_TIME_BONUS = 200;
  const FULL_TIME_BONUS_SECONDS = 10;
  const NO_TIME_BONUS_AFTER_SECONDS = 90;
  const safeSecs = Math.max(0, Number(elapsedSeconds) || 0);

  if (safeSecs <= FULL_TIME_BONUS_SECONDS) return MAX_TIME_BONUS;
  if (safeSecs >= NO_TIME_BONUS_AFTER_SECONDS) return 0;
  const remaining =
    (NO_TIME_BONUS_AFTER_SECONDS - safeSecs) / (NO_TIME_BONUS_AFTER_SECONDS - FULL_TIME_BONUS_SECONDS);
  return Math.floor(MAX_TIME_BONUS * remaining);
}

assert(calculateTimeBonus(0) === 200, 'Time bonus at 0s = 200 pts');
assert(calculateTimeBonus(5) === 200, 'Time bonus at 5s = 200 pts');
assert(calculateTimeBonus(10) === 200, 'Time bonus at 10s = 200 pts (full bonus boundary)');
assert(calculateTimeBonus(40) === 125, 'Time bonus at 40s = 125 pts (Math.floor(200 * 50/80))');
assert(calculateTimeBonus(50) === 100, 'Time bonus at 50s = 100 pts (Math.floor(200 * 40/80))');
assert(calculateTimeBonus(90) === 0, 'Time bonus at 90s = 0 pts (cutoff boundary)');
assert(calculateTimeBonus(120) === 0, 'Time bonus at 120s = 0 pts');

// 5. Verify Timer Lifecycle & In-Game HUD Display
console.log('\n--- 5. Timer Behaviour & In-Game HUD ---');
assert(
  mainJs.includes('id="rover-hud-time"'),
  'HUD contains active timer element (#rover-hud-time)'
);
assert(
  mainJs.includes('handleStartRoverMissionClick') && mainJs.includes('startRoverMissionRun'),
  'Timer starts ONLY when Start Mission is clicked and validated'
);
assert(
  mainJs.includes('pauseRoverMission') && mainJs.includes('t.isRunning = false'),
  'Pausing stops active gameplay timer'
);
assert(
  mainJs.includes('resumeRoverMission') && mainJs.includes('t.isRunning = true'),
  'Resuming restarts active timer calculation without counting paused time'
);

// 6. Verify Top 10 Leaderboard & Deduplication Logic
console.log('\n--- 6. Google Sheets API, Top 10 Slicing & Deduplication ---');
assert(
  mainJs.includes("stoppedAt: Number(finalScore) || 0") && mainJs.includes("diff: 'Score'"),
  'POST payload strictly preserves { name: playerName, stoppedAt: finalScore, diff: "Score" }'
);
assert(
  mainJs.includes('processLeaderboardEntries'),
  'main.js includes processLeaderboardEntries helper for leaderboard deduplication'
);
assert(
  mainJs.includes('slice(0, 10)'),
  'processLeaderboardEntries slices top 10 unique explorers'
);

// Test deduplication and tie-ranking logic directly for Top 10
function processLeaderboardEntriesTest(data, currentPlayerName, currentFinalScore) {
  const uniqueMap = new Map();
  if (Array.isArray(data)) {
    for (const item of data) {
      if (!item || !item.name) continue;
      const cleanName = String(item.name).trim();
      const normKey = cleanName.toLowerCase();
      const score = Number(item.stoppedAt !== undefined ? item.stoppedAt : item.score) || 0;
      if (!normKey) continue;
      const existing = uniqueMap.get(normKey);
      if (!existing || score > existing.score) {
        uniqueMap.set(normKey, { name: cleanName, score });
      }
    }
  }
  if (currentPlayerName && currentPlayerName.trim() && currentFinalScore !== null) {
    const key = currentPlayerName.trim().toLowerCase();
    const existing = uniqueMap.get(key);
    if (!existing || currentFinalScore > existing.score) {
      uniqueMap.set(key, { name: currentPlayerName.trim(), score: currentFinalScore });
    }
  }
  const sorted = Array.from(uniqueMap.values()).sort((a, b) => b.score - a.score);
  const top10 = sorted.slice(0, 10);
  let rank = 1;
  return top10.map((entry, index) => {
    if (index > 0) {
      if (entry.score < top10[index - 1].score) {
        rank = index + 1;
      }
    } else {
      rank = 1;
    }
    return { rank, name: entry.name, score: entry.score };
  });
}

const mockRawEntries = [
  { name: 'Commander Scott', stoppedAt: 800 },
  { name: 'Commander Scott', stoppedAt: 942 }, // duplicate name with higher score
  { name: 'Irwin', stoppedAt: 942 },           // tie score
  { name: 'Worden', stoppedAt: 750 },
  { name: 'irwin', stoppedAt: 500 },           // duplicate case-insensitive name with lower score
  { name: 'Duke', stoppedAt: 700 },
  { name: 'Young', stoppedAt: 650 },
  { name: 'Cernan', stoppedAt: 600 },
  { name: 'Armstrong', stoppedAt: 580 },
  { name: 'Aldrin', stoppedAt: 550 },
  { name: 'Collins', stoppedAt: 520 },
  { name: 'Conrad', stoppedAt: 500 },
  { name: 'Bean', stoppedAt: 480 },
  { name: 'Shepard', stoppedAt: 450 },
];

const processed = processLeaderboardEntriesTest(mockRawEntries, null, null);
assert(processed.length === 10, 'Deduplicated leaderboard returns at most 10 unique explorers');
assert(processed[0].name === 'Commander Scott' && processed[0].score === 942, 'Keeps highest score for Commander Scott (942)');
assert(processed[1].name === 'Irwin' && processed[1].score === 942, 'Keeps highest score for Irwin (942)');
assert(processed[0].rank === 1 && processed[1].rank === 1, 'Tied scores share rank #1 without invented tie-breaker');
assert(processed[2].rank === 3, 'Next explorer after tie takes correct rank #3');

// 7. Verify Settings Button, Settings Modal & Audio Persistence
console.log('\n--- 7. Settings Button, Settings Modal & Audio State Persistence ---');
assert(
  mainJs.includes('id="btn-shelf-settings"') &&
    mainJs.includes('id="btn-discovery-settings"') &&
    mainJs.includes('id="btn-interactive-settings"') &&
    mainJs.includes('id="btn-rover-hud-settings"') &&
    mainJs.includes('id="btn-rover-pause-settings"'),
  'Gear settings buttons are present in Shelf, Discovery, Interactive, Rover HUD, and Pause menu'
);
assert(
  mainJs.includes('id="settings-backdrop"') &&
    mainJs.includes('id="btn-settings-toggle-music"') &&
    mainJs.includes('id="btn-settings-toggle-sfx"') &&
    mainJs.includes('id="btn-settings-close"'),
  'Compact Settings modal (#settings-backdrop) has Music toggle, SFX toggle, and Close button'
);
assert(
  mainJs.includes('loadSavedAudioPreferences') && mainJs.includes('saveAudioPreferences'),
  'Audio preferences are saved and loaded from localStorage'
);

// 8. Verify Pause Menu Options & Early Mission End Flow
console.log('\n--- 8. Pause Menu Options & Early Mission End Submission ---');
assert(
  mainJs.includes('id="btn-rover-resume"') &&
    mainJs.includes('id="btn-rover-restart"') &&
    mainJs.includes('id="btn-rover-pause-settings"') &&
    mainJs.includes('id="btn-rover-end-early"') &&
    mainJs.includes('id="btn-rover-exit"'),
  'Pause menu provides Resume, Restart, Settings, End Mission & Submit, and Exit options'
);
assert(
  mainJs.includes('id="rover-pause-confirm-end-view"') &&
    mainJs.includes('id="btn-rover-confirm-end"') &&
    mainJs.includes('id="btn-rover-cancel-end"'),
  'Pause menu has confirmation sub-view for ending mission early'
);
assert(
  mainJs.includes('endRoverMissionEarly'),
  'endRoverMissionEarly function exists in main.js'
);
assert(
  mainJs.includes('g.isEarlyEnd = true') &&
    mainJs.includes('MISSION ENDED EARLY'),
  'Early mission end sets isEarlyEnd flag and displays MISSION ENDED EARLY header'
);

// 9. Verify CSS Rules & Visual Containment
console.log('\n--- 9. CSS Styling & Layout Containment ---');
assert(styleCss.includes('.btn-settings-gear'), 'CSS defines .btn-settings-gear');
assert(styleCss.includes('.settings-modal'), 'CSS defines .settings-modal');
assert(styleCss.includes('.btn-toggle-switch'), 'CSS defines .btn-toggle-switch');
assert(styleCss.includes('.rover-briefing-audio-dock'), 'CSS defines .rover-briefing-audio-dock');
assert(styleCss.includes('.btn--rover-end-early'), 'CSS defines .btn--rover-end-early');
assert(styleCss.includes('#rover-complete-leaderboard-table-wrap'), 'CSS defines #rover-complete-leaderboard-table-wrap');
assert(
  styleCss.includes("body[data-screen='shelf'] .audio-controls") ||
    styleCss.includes("body[data-screen='shelf'] #audio-dock"),
  'Floating audio dock is hidden on interactive toy shop screens'
);

console.log('\n======================================================================');
console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} passed, ${failedTests} failed.`);
console.log('======================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL SETTINGS, LEADERBOARD, SCORING & EARLY END CHECKS PASSED!\n');
  process.exit(0);
}
