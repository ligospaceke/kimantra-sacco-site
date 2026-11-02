import {esc} from '../util.js';
import {waLink,telLink} from '../store.js';
export async function render(s){const tel=telLink(s),wa=waLink(s,'Hello Kimantra SACCO');
return `<div class="w sec"><p class="lb">Contact</p><h1>Talk to dispatch.</h1><p class="mu">${esc(s.address)}<br>${esc(s.phone)}<br>${esc(s.hours)}</p><div class="act" style="margin-top:28px">${tel?`<a class="btn" href="${tel}">Call</a>`:'<span class="chip wn">Phone number coming soon</span>'}${wa?`<a class="btn ol" href="${wa}">WhatsApp</a>`:''}<a class="btn ol" href="https://maps.google.com/?q=Kimana+Kajiado" rel="noopener">Map</a></div></div>`}
