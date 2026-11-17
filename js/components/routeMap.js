import {H} from '../util.js';import {S} from '../store.js';
const stChip=s=>`<span class="chip ${s=='Open'?'o':'w'}">${H(s)}</span>`;
function mapSvg(){const R=S.getRoutes(),Y={Nairobi:40,Kampala:125,Arusha:210,Namanga:295,Mombasa:380};
return`<div class="mp"><svg class="map" viewBox="0 0 520 420" role="img" aria-label="Corridor map from Kimana hub" fill="none">${R.map((r,i)=>{const y=Y[r.to]??(40+i*85),d=`M70 210C250 210 250 ${y} 470 ${y}`;return`<path d="${d}" class="${r.st=='Open'?'ok':'no'}" stroke-linecap="round"/><circle cx="470" cy="${y}" r="8" fill="var(--pn)" stroke="var(--hi)" stroke-width="3"/><text x="456" y="${y+4}" text-anchor="end">${H(r.to)}</text>${r.st=='Open'?`<circle r="4" fill="var(--hi)"><animateMotion dur="${5+i}s" repeatCount="indefinite" path="${d}"/></circle>`:''}`}).join('')}<circle cx="70" cy="210" r="14" fill="var(--hi)"/><text x="40" y="244">Kimana hub</text></svg></div>`}
const board=()=>S.getRoutes().map(r=>`<div class="st"><b>Kimana → ${H(r.to)}</b><span class="mu">${H(r.hrs)} h · ${H(r.permit)}</span>${stChip(r.st)}</div>`).join('');
export {stChip,mapSvg,board};
