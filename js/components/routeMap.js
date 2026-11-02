import {H} from '../util.js';import {S} from '../store.js';
const stChip=s=>`<span class="chip ${s=='Open'?'o':'w'}">${H(s)}</span>`;
function mapSvg(){const R=S.getRoutes(),P={Nairobi:[70,40],Mombasa:[290,40],Namanga:[160,150],Arusha:[290,170],Kampala:[70,170]};
return`<svg class="map" viewBox="0 0 360 210" role="img" aria-label="Schematic corridor map from Kimana hub"><g>${R.map(r=>{const p=P[r.to]||[180,190];return`<line x1="180" y1="105" x2="${p[0]}" y2="${p[1]}" class="l ${r.st=='Open'?'ok':'no'}"/><circle cx="${p[0]}" cy="${p[1]}" r="5" fill="var(--sf)" stroke="var(--ink)"/><text x="${p[0]}" y="${p[1]-10}" text-anchor="middle">${H(r.to)}</text>`}).join('')}<circle cx="180" cy="105" r="8" fill="var(--ac)"/><text x="180" y="127" text-anchor="middle">Kimana hub</text></g></svg>`}
const board=()=>S.getRoutes().map(r=>`<div class="st"><b>Kimana → ${H(r.to)}</b><span class="mu">${H(r.hrs)} h · ${H(r.permit)}</span>${stChip(r.st)}</div>`).join('');
export {stChip,mapSvg,board};
