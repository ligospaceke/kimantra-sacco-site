# Kimantra SACCO website
One design (Co-op Trust, light and dark). Vanilla HTML/CSS/ES6 modules, no build step.

Pages: Home, Services & Hub, Fleet & Book, Contact.

## Run / deploy
`python3 -m http.server 8080` then open http://localhost:8080. Deploy by uploading the folder to GitHub Pages or any static host. (Opening index.html by double-click does not work: browsers block ES modules on file://.)

## Edit content
Edit `data/settings.json` (WhatsApp, phone, registration no., address), `fleet.json`, `routes.json` (status, hours, permits) and `store.json` (items, prices, credit limit). Replace every bracketed placeholder such as `[ PRICE ]` before launch. Booking opens WhatsApp once a real number is set.

## Photos
Drop `hero.jpg`, `volvo.jpg`, `fuso.jpg`, `tyres.jpg` into `img/` (landscape, ~1200px, under 150 KB). Until then the illustrated scenes show.
