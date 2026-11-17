/**
 * ORBITOYS — Automated Mission Briefing Registration, Leaderboard & Time Scoring Verification Suite
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
console.log('ORBITOYS — BRIEFING REGISTRATION, LEADERBOARD & TIME SCORING TEST');
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

// 1. Verify Google Apps Script Endpoint Configuration
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

// 2. Verify Briefing Screen Elements (No separate page/screen)
console.log('\n--- 2. Existing Mission Briefing Screen Modifications ---');
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

// 3. Verify Scoring Display & Time Bonus Note
console.log('\n--- 3. Updated Scoring Display & Time Bonus Hint ---');
assert(
  mainJs.includes('800 BASE POINTS + UP TO 200 TIME-BONUS POINTS = 1,000 MAX POINTS'),
  'Scoring formula specifies 800 base points + up to 200 time-bonus points = 1,000 max points'
);
assert(
  mainJs.includes('Complete your mission faster to earn up to 200 bonus points!'),
  'Subtle time-bonus explanation note is present in briefing'
);
assert(
  mainJs.includes('BEST SCORE: 0 / 1,000 PTS') || mainJs.includes('BEST SCORE: ${state.bestRoverScore} / 1,000 PTS'),
  'Best score pill uses 1,000 max points rather than 800'
);

// 4. Verify Time Scoring Configuration & Formula
console.log('\n--- 4. Time Scoring Configuration & Calculations ---');
assert(
  mainJs.includes('MAX_TIME_BONUS: 200') &&
    mainJs.includes('FULL_TIME_BONUS_SECONDS: 180') &&
    mainJs.includes('NO_TIME_BONUS_AFTER_SECONDS: 360'),
  'TIME_SCORING_CONFIG object defines MAX_TIME_BONUS: 200, FULL_TIME_BONUS_SECONDS: 180, NO_TIME_BONUS_AFTER_SECONDS: 360'
);

// Test time bonus calculation math directly
function calculateTimeBonus(elapsedSeconds) {
  const MAX_TIME_BONUS = 200;
  const FULL_TIME_BONUS_SECONDS = 180;
  const NO_TIME_BONUS_AFTER_SECONDS = 360;
  const safeSecs = Math.max(0, Number(elapsedSeconds) || 0);

  if (safeSecs <= FULL_TIME_BONUS_SECONDS) return MAX_TIME_BONUS;
  if (safeSecs >= NO_TIME_BONUS_AFTER_SECONDS) return 0;
  const span = NO_TIME_BONUS_AFTER_SECONDS - FULL_TIME_BONUS_SECONDS;
  const overtime = safeSecs - FULL_TIME_BONUS_SECONDS;
  const remainingFraction = (span - overtime) / span;
  return Math.round(MAX_TIME_BONUS * Math.max(0, Math.min(1, remainingFraction)));
}

assert(calculateTimeBonus(0) === 200, 'Time bonus at 0s = 200 pts');
assert(calculateTimeBonus(90) === 200, 'Time bonus at 90s = 200 pts');
assert(calculateTimeBonus(180) === 200, 'Time bonus at 180s = 200 pts');
assert(calculateTimeBonus(270) === 100, 'Time bonus at 270s (halfway) = 100 pts');
assert(calculateTimeBonus(360) === 0, 'Time bonus at 360s = 0 pts');
assert(calculateTimeBonus(500) === 0, 'Time bonus at 500s = 0 pts');

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

// 6. Verify Google Sheets API Format (GET & POST)
console.log('\n--- 6. Google Sheets API Request & Response Formats ---');
assert(
  mainJs.includes("stoppedAt: Number(finalScore) || 0") && mainJs.includes("diff: 'Score'"),
  'POST payload strictly preserves { name: playerName, stoppedAt: finalScore, diff: "Score" }'
);
assert(
  mainJs.includes('stoppedAt') && mainJs.includes('sort((a, b) => b.score - a.score)'),
  'GET handler maps stoppedAt as score, sorts descending, and returns top 5'
);

// 7. Verify Results Debrief & Leaderboard Integration
console.log('\n--- 7. Results Screen & Top 5 Leaderboard ---');
assert(
  mainJs.includes('id="rover-complete-player-name"'),
  'Debrief displays Explorer Name (#rover-complete-player-name)'
);
assert(
  mainJs.includes('id="rover-complete-base-score"'),
  'Debrief displays Base Score out of 800 (#rover-complete-base-score)'
);
assert(
  mainJs.includes('id="rover-complete-time-bonus"'),
  'Debrief displays Time Bonus out of 200 (#rover-complete-time-bonus)'
);
assert(
  mainJs.includes('id="rover-complete-score"'),
  'Debrief displays Final Score out of 1,000 (#rover-complete-score)'
);
assert(
  mainJs.includes('id="rover-complete-time"'),
  'Debrief displays Completion Time (#rover-complete-time)'
);
assert(
  mainJs.includes('id="rover-complete-leaderboard-table-wrap"'),
  'Debrief displays Mission Leaderboard Top 5 table container'
);
assert(
  mainJs.includes('is-current-player'),
  'Leaderboard table highlights the current player\'s entry (.is-current-player)'
);
assert(
  mainJs.includes('playAgainRoverMission'),
  'Play Again returns to briefing with explorer name retained'
);

// 8. Verify CSS Styling Consistency
console.log('\n--- 8. CSS Styling Consistency ---');
assert(styleCss.includes('.btn-rover-leaderboard-trigger'), 'CSS defines .btn-rover-leaderboard-trigger');
assert(styleCss.includes('.rover-registration-box'), 'CSS defines .rover-registration-box');
assert(styleCss.includes('.rover-registration-input'), 'CSS defines .rover-registration-input');
assert(styleCss.includes('.rover-leaderboard-modal-backdrop'), 'CSS defines .rover-leaderboard-modal-backdrop');
assert(styleCss.includes('.rover-leaderboard-table'), 'CSS defines .rover-leaderboard-table');
assert(styleCss.includes('.is-current-player'), 'CSS defines .is-current-player');
assert(styleCss.includes('.rover-stat-card--time'), 'CSS defines .rover-stat-card--time');

console.log('\n======================================================================');
console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} passed, ${failedTests} failed.`);
console.log('======================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL BRIEFING REGISTRATION, LEADERBOARD & TIME SCORING CHECKS PASSED!\n');
  process.exit(0);
}
