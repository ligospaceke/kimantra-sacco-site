# Kimantra SACCO website (Co-op Trust design)
Vanilla HTML/CSS/ES modules. No build step, no dependencies.

## Run
`python3 -m http.server 8080` then open http://localhost:8080 (file:// won't work: browsers block ES modules). Deploy by uploading the folder to GitHub Pages, Netlify or Cloudflare Pages.

## Structure
- `css/variables.css` design tokens (light + dark via device setting) · `global.css` reset/type/layout · `components.css` UI
- `js/router.js` hash router, each view is lazy-loaded · `js/views/*` pages · `js/components/*` navbar, footer, map, photo
- `js/store.js` the ONLY data layer: reads `data/*.json`, sends requests (WhatsApp now, `site.api` later)
- `data/*.json` all editable content. Replace every `[ BRACKETED ]` value before launch
- `sw.js` offline cache for poor-network corridors. **Bump `V` in sw.js on every deploy**
- `assets/images/` drop real photos with these names to replace placeholders: hero.jpg, volvo.jpg, fuso.jpg, tyres.jpg (use ~1600px wide, under 200 KB, WebP/JPG)

## Launch checklist
1. Fill `data/site.json` (wa, phone, reg, hours, founded, members). Booking opens WhatsApp only once `wa` is real.
2. Fill routes hours, fleet registrations/tonnage, hub prices, credit limit, joining requirements.
3. Put PDF forms in `assets/forms/` and set their `url` in `data/hub.json`.

## Scaling notes (1M+ visitors)
Fully static: the CDN serves everything, so traffic costs nothing extra. Data files and views are cached by the service worker. Booking goes to WhatsApp, so there is no server to overload. To add a backend later, set `site.api` to an endpoint that accepts the booking JSON. Known limits: hash routes are not indexed per page by Google (move to real URLs later if SEO matters), and the demo admin panel was removed because browser-only admin is insecure.

## Background image
The page background is `assets/images/bg.svg` (Kilimanjaro-and-road illustration). To use a real photo, add e.g. `bg.jpg` (about 1920px wide, under 250 KB) and change `--bg-image` in `css/variables.css`. A dark overlay keeps text readable.
