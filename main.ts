// gta6-clipper-01 entry program (Node 22, standard library only, no network).
//
// The entry is the video itself: a 60-second vertical compilation of four funny
// Windah Basudara GTA VI moments, cut and rendered by the agent in the session
// that built this repository (see CUT.md for the moment list, the timestamps the
// agent picked from the source videos' storyboards and auto-captions, and the
// render settings). The finished clip is uploaded to YouTube as a public Short;
// VIDEO.json at the repository root names it.
//
// What this program does at grade time:
//   1. reads VIDEO.json from the repository root,
//   2. checks it is a JSON object with a string `url`,
//   3. copies it to /output/VIDEO.json, where the gate reads it,
//   4. writes /output/cut-manifest.json, a deterministic record of the cut
//      (the four moments, their sources, and the on-screen pitch), so the
//      record of what the clip is travels with the entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The cut, as decided in the build session. Each moment is one beat of the
// 60-second compilation, in play order. `source` is the Windah Basudara
// YouTube video the footage comes from; `start`/`end` are seconds into it.
const CUT = {
  entry: 'gta6-clipper-01',
  title: 'Windah Basudara GTA 6: MAP GEDE BANGET, WASTED, BIGFOOT 😹',
  format: { width: 1080, height: 1920, fps: 30, video: 'H.264', audio: 'AAC' },
  audio: 'original stream audio, no added music',
  captions: 'big bold Indonesian captions throughout (Noto Sans Bold)',
  pitch:
    'End card, on screen for the last 5 seconds: "Bikin klip kayak gini pake AI dan dapet duit di make.fun — make.fun/bounty/gta6-clipper-01"',
  moments: [
    {
      beat: 1,
      label: 'MAP SHOCK — baru satu garis',
      source: 'https://www.youtube.com/watch?v=45r3OyaxvFE',
      sourceTitle: 'GTA VI SIAP TAMAT 100%.... GAMEPLAY #1',
      start: 3118,
      end: 3130,
      caption: 'JALAN JAUH... BARU SATU GARIS',
      why: 'Windah drives far at night delivering si Kel, opens the map and realises he only crossed a sliver. His own words: "baru satu garis gini nih" + "are you fucking kidding me", hand on head.',
    },
    {
      beat: 2,
      label: 'WASTED — mati sengaja demi nunjukin WASTED',
      source: 'https://www.youtube.com/watch?v=45r3OyaxvFE',
      sourceTitle: 'GTA VI SIAP TAMAT 100%.... GAMEPLAY #1',
      start: 2302,
      end: 2316,
      caption: 'MATI DEMI KONTEN - WASTED',
      why: 'Windah deliberately dies to show the WASTED animation: "coba kalau review mati gimana? animasi matinya benar kayak GTA, ciri khas GTA wasted".',
    },
    {
      beat: 3,
      label: 'BIGFOOT — dirodok Bigfoot',
      source: 'https://www.youtube.com/watch?v=B2Bon2X1jPQ',
      sourceTitle: 'AKU KETEMU BIGFOOT DAN KE TEMPAT SEPATU... Grand Theft Auto VI GAMEPLAY #3',
      start: 3786,
      end: 3798,
      caption: 'DIRODOK BIGFOOT',
      why: 'Windah spots something in the swamp and screams: "Guys, itu apa, Guys? Sumpah, Guys. Depan muka kita, Guys." Then "What? Bigfoot". The creature itself is never clearly on screen in the whole 01:03:04-01:03:52 stretch (checked frame by frame: Jason wades, aims, shoots, finds a ritual totem) — the beat is carried by Windah\'s panic and the audio, exactly like the original clipper videos of this moment. He faints right after ("gua pingsan tadi", 01:04:37) and recounts "gua dirodok Bigfoot" (01:04:49).',
    },
    {
      beat: 4,
      label: 'SEAPLANE — pesawat amfibi di atas laut',
      source: 'https://www.youtube.com/watch?v=B2Bon2X1jPQ',
      sourceTitle: 'AKU KETEMU BIGFOOT DAN KE TEMPAT SEPATU... Grand Theft Auto VI GAMEPLAY #3',
      start: 98,
      end: 110,
      caption: 'KABUR NAIK PESAWAT',
      why: 'The orange amphibious seaplane skimming the sea at sunset — the prettiest shot of Gameplay #3 and the escape beat that closes the compilation before the pitch.',
    },
  ],
};

function fail(message: string): never {
  console.error(`gta6-clipper-01 entry: ${message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const videoPath = join(BOT_DIR, 'VIDEO.json');
let video: unknown;
try {
  video = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  fail(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
}

if (
  typeof video !== 'object' ||
  video === null ||
  typeof (video as { url?: unknown }).url !== 'string' ||
  ((video as { url: string }).url.length === 0)
) {
  fail('VIDEO.json must be a JSON object with a non-empty string `url`.');
}

try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  fail(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
}

writeFileSync(
  join(OUTPUT_DIR, 'cut-manifest.json'),
  JSON.stringify({ ...CUT, video: (video as { url: string }).url }, null, 2) + '\n',
);

console.log(`gta6-clipper-01 entry: VIDEO.json -> ${OUTPUT_DIR}/VIDEO.json`);
console.log(`gta6-clipper-01 entry: cut manifest (${CUT.moments.length} moments) -> ${OUTPUT_DIR}/cut-manifest.json`);
