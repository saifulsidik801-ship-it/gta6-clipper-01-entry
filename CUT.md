# CUT.md — how the clip was chosen and cut

## Why this clip

Windah Basudara is the most-watched GTA VI streamer in the world (392,505 peak
concurrent viewers, Nov 19 2026 — ahead of IShowSpeed's 371,840). His Gameplay #1
hit 8M views in 16 hours. The compilation stitches his four funniest GTA VI
beats into one 60-second Short: a hook in the first 2 seconds (the map shock),
then WASTED, Bigfoot, and the seaplane, with big Indonesian captions and the
original stream audio throughout. No added music. The make.fun pitch runs on
screen for the last 5 seconds.

## How the moments were found (no blind cutting)

1. Downloaded both source videos' storyboards with yt-dlp (`sb0` format) and
   extracted timestamped contact sheets — but the mhtml payloads were
   byte-corrupted (~163 flipped bytes per sprite scramble the VP8 bitstream),
   so the sprites were re-fetched directly from their `i.ytimg.com` URLs.
2. Downloaded the Indonesian auto-captions for both videos and searched them
   for the exact quotes ("baru satu garis", "are you kidding me", "ciri khas
   GTA wasted", "gua dirodok Bigfoot"). The captions gave exact timestamps.
3. Viewed the contact sheets around each timestamp to confirm the visuals
   (night pickup + map zoom-out + hand on head; red damage + black WASTED
   frame; swamp + shocked facecam; orange seaplane over the sea).
4. Downloaded only the four sections with `yt-dlp --download-sections`
   (720p60 + audio) and cut them to the timestamps below with ffmpeg.

## The four beats (play order)

| # | Moment | Source | Cut (in source) | Caption on screen |
|---|--------|--------|-----------------|-------------------|
| 1 | MAP SHOCK — baru satu garis | Gameplay #1 `45r3OyaxvFE` | 51:58–52:10 (3118–3130s) | JALAN JAUH... BARU SATU GARIS |
| 2 | WASTED — mati sengaja | Gameplay #1 `45r3OyaxvFE` | 38:22–38:36 (2302–2316s) | MATI DEMI KONTEN / WASTED |
| 3 | BIGFOOT — dirodok Bigfoot | Gameplay #3 `B2Bon2X1jPQ` | 01:03:06–01:03:18 (3786–3798s) | DIRODOK BIGFOOT |
| 4 | SEAPLANE — pesawat amfibi | Gameplay #3 `B2Bon2X1jPQ` | 01:38–01:50 (98–110s) | KABUR NAIK PESAWAT |

## Render

- Vertical 1080x1920, 60 fps, H.264 (libx264, CRF 20, preset veryfast) + AAC 128k.
- Each beat: center-crop the 1280x720 source to 9:16 (crop 405x720, then scale
  to 1080x1920). The facecam sits bottom-right in the source; the center crop
  keeps the gameplay action. Captions are drawn with ffmpeg drawtext
  (Noto Sans Bold, ~64px, white with black outline) at the top third, so they
  never cover the facecam.
- Beat 1 keeps the map fullscreen (the map IS the joke); the facecam reaction
  (hand on head) is in frame.
- End card (5 s, over the last frame of beat 4, darkened): "Bikin klip kayak
  gini pake AI dan dapet duit di make.fun — make.fun/bounty/gta6-clipper-01".
- Total: ~55 s of moments + 5 s pitch = 60 s.

## A note on the shoe store

Sidik's reference TikTok is the "toko sepatu secara harfiah" moment from
Gameplay #3. The captions and storyboards were searched for it: in #3 Windah
keeps promising the shoe store ("gua akan cari toko sepatu... akhir-akhiran")
and the "misteri sepatu" runs as a gag through the whole video ("This is it,
man. Sepatu yang kita tunggu-tunggu" at 01:29:36; "Mana? Biasa aja, Guys. Ini
ini misteri sepatu ini kan" at 01:53:38), but no literal shoe-store visit
appears in #3's captions or thumbnails — the video ends with the mystery
unresolved. So the compilation leads with the four confirmed moments above
instead of a store visit that could not be verified. If the store turn-up is
found in a later Windah video, it slots in as beat 5 in a v2.

## YouTube description (copy verbatim)

```
toko sepatu secara harfiah😹😂 eh — MAP GEDE BANGET, WASTED, BIGFOOT, PESAWAT. Windah Basudara GTA 6 paling lucu dalam 60 detik 🔥 #windahbasudara #GTA6

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-chariot-paper-tofu
```

Title options:
1. `WINDAH KAGET MAP GTA 6 GEDE BANGET 😭 BARU SATU GARIS #gta6 #gaming`
2. `Windah Basudara GTA 6: WASTED, BIGFOOT, MAP GEDE 😹 #gta6 #windahbasudara`
