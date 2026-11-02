import {esc} from '../util.js';
const Y={Nairobi:40,Kampala:125,Arusha:210,Namanga:295,Mombasa:380};
export const chip=s=>`<span class="chip ${s==='Open'?'ok':'wn'}">${esc(s)}</span>`;
export const board=R=>R.map(r=>`<div class="rw"><b>Kimana → ${esc(r.to)}</b><span class="mu">${esc(r.hrs)} h · ${esc(r.permit)}</span>${chip(r.st)}</div>`).join('');
export const mapSvg=R=>`<div class="mp"><svg class="map" viewBox="0 0 520 420" role="img" aria-label="Corridor map from the Kimana hub" fill="none">${R.map((r,i)=>{const y=Y[r.to]??40+i*85,d=`M70 210C250 210 250 ${y} 470 ${y}`;return`<path d="${d}" class="${r.st==='Open'?'ok':'no'}" stroke-linecap="round"/><circle cx="470" cy="${y}" r="8" fill="var(--panel)" stroke="var(--hi)" stroke-width="3"/><text x="456" y="${y+4}" text-anchor="end">${esc(r.to)}</text>`}).join('')}<circle cx="70" cy="210" r="14" fill="var(--hi)"/><text x="40" y="244">Kimana hub</text></svg></div>`;
