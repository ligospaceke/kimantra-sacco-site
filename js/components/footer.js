import {esc,$} from '../util.js';
import {telLink} from '../store.js';
import {LINKS} from './navbar.js';
export function renderFooter(s){const tel=telLink(s);
  $('#ft').innerHTML=`<div class="w sec"><div class="g g3"><div><b class="br">Kimantra <span>SACCO</span></b><p class="mu" style="margin-top:8px">${esc(s.address)}<br>${esc(s.reg)}</p></div><div><p class="lb">Pages</p><p style="margin-top:8px">${LINKS.map(([p,n])=>`<a href="#${p}">${esc(n)}</a>`).join('')}<a href="#/booking">Book a truck</a></p></div><div><p class="lb">Contact</p><p style="margin-top:8px">${tel?`<a href="${tel}">${esc(s.phone)}</a>`:esc(s.phone)}<br>${esc(s.hours)}</p></div></div></div>`}
