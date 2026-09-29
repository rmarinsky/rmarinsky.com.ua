# App workflow illustrations

- Workflow: general-video. Automation flow; no separate storyboard approval.
- Request: three embedded demos for a local website redesign prototype.
- Deliverables: Papuga, AppCat and Diduny; 12 seconds each, 1280 × 800, silent MP4 with posters and Ukrainian caption tracks.
- Source master: 36 seconds. Papuga 0–12, AppCat 12–24, Diduny 24–36.
- Evidence: product catalogue at `../../../docs/research/product-catalog-2026-09-28/`. Capability evidence is release source, not installed-app runtime.
- Persistent “Сценарне відтворення / Не запис застосунку”. UI is a simplified illustration, not a faithful screen recording. Timing is editorial, not a performance claim.
- Fictional content only. No live accounts, APIs, payments or messages.
- Papuga: selected text conversion using a configured shortcut. No Backspace undo or removed mistake-history UI.
- AppCat: explicit choice of an existing Chrome work profile. No automatic account detection claim.
- Diduny: Local STT example with live preview in Floating Modal, processing, insertion into a compatible field with auto-insert enabled. No send action, no claim that optional cloud cleanup is local.

## Frame plan

| Video | Start | Action | End |
| --- | --- | --- | --- |
| Papuga | `ghbdsn!` in a note | Select, then configured shortcut | `привіт!` replaces the selected text |
| AppCat | Team document link | Picker opens, user selects Work | Link opens in that profile |
| Diduny | Empty draft field | Floating panel and transcript | Result inserted, Send untouched |

## Design

Warm light desktop, white document surfaces, forest green selection and feedback. Large UI text at embedded size. One focal action per scene, finite GSAP movement only, no decorative perpetual motion, music or narration. Manual playback with native controls.

## Build

Run `npm run check`, then `npm run render -- --quality looks --fps 30 --output /private/tmp/site-demos-master.mp4` in this directory. Split at 0, 12 and 24 seconds. Export posters from 8 seconds into each clip. The master is an intermediate file, outside the prototype.
