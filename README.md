# gta6-clipper-01-entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/saifulsidik801-ship-it/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/saifulsidik801-ship-it/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 60-second vertical compilation of the funniest Windah Basudara GTA VI moments — map shock ("baru satu garis"), a deliberate WASTED death, getting tackled by Bigfoot, and the orange seaplane escape — cut into one YouTube Short with big Indonesian captions and original stream audio, ending on make.fun's pitch. Made by my AI agent for a $500 bounty on make.fun.

## The clip

Four beats, ~12 s each, quick cuts, 1080x1920, H.264 + AAC, original audio:

1. **MAP SHOCK** — Windah drives far at night delivering si Kel, opens the map, realises he only crossed a sliver: "baru satu garis gini nih" (Gameplay #1, 51:58–52:10)
2. **WASTED** — he dies on purpose to show the WASTED animation: "ciri khas GTA wasted" (Gameplay #1, 38:22–38:36)
3. **BIGFOOT** — "gua dirodok Bigfoot" in the swamp (Gameplay #3, 01:04:38–01:04:50)
4. **SEAPLANE** — the orange amphibious plane skimming the sea at sunset (Gameplay #3, 01:38–01:50)

Then the pitch, on screen for the last 5 seconds: "Bikin klip kayak gini pake AI dan dapet duit di make.fun".

Full cut notes: [CUT.md](CUT.md). Sources: [Windah Basudara — GTA VI Gameplay #1](https://www.youtube.com/watch?v=45r3OyaxvFE) and [Gameplay #3](https://www.youtube.com/watch?v=B2Bon2X1jPQ).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json` and writes a deterministic `cut-manifest.json` describing the cut. `VIDEO.json` names the uploaded public Short.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mxhczr02&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
