# Kimantra SACCO website
Vanilla HTML/CSS/ES6 modules. No build step, no dependencies.

## Run
`python3 -m http.server 8080` in this folder, open http://localhost:8080. (Opening index.html directly works for the UI, but `data/*.json` is only fetched over http; the embedded defaults are used otherwise.) Deploy by uploading the folder to any static host.

## Real values
Edit `data/*.json` (or use `#/admin` > Settings). Bracketed placeholders such as `[ PRICE ]` and `[ +254 7XX XXX XXX ]` must be replaced before launch. Booking only opens WhatsApp once a real number is set.

## Add a theme
1. Copy `css/themes/haul-line.css` to `css/themes/<name>.css`; keep the `[data-theme="<name>"][data-mode="light|dark"]` token blocks (`--bg --sf --ink --mu --ln --ac --bt --bi --pn --pi`, fonts `--fh --fb`, radii `--rb --rc`). Check 4.5:1 contrast in both modes.
2. Register it in `js/theme.js` (`FONTS`, `LAY` = top | centered | sidebar, `NAMES`) and in the layout map in the inline script in `index.html`.

## Swap the demo store for a real API
All data goes through `S` in `js/store.js` (getFleet/saveFleet, getRoutes/saveRoutes, getStore/saveStore, getBookings/saveBookings, getSettings/saveSettings). Reimplement them with `fetch` calls (they are synchronous now, so make them `async` and `await` them in the views and `js/app.js`). Replace the demo PIN with real server-side auth; the admin here is front-end only and NOT secure.
