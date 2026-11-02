import {esc,$} from '../util.js';
import {telLink,waLink} from '../store.js';
import {LINKS} from './navbar.js';
const MEMBERS=[['/hub','Member hub'],['/services','Loans & savings'],['/booking','Book a truck'],['/contact','Join the SACCO']];
const col=(t,L)=>`<nav aria-label="${t}"><p class="lb">${t}</p><ul class="fl">${L.map(([p,n])=>`<li><a href="#${p}">${esc(n)}</a></li>`).join('')}</ul></nav>`;
export function renderFooter(s){const tel=telLink(s),wa=waLink(s,'Hello Kimantra SACCO');
  $('#ft').innerHTML=`<div class="w ft"><div class="ft-brand"><a class="br" href="#/">Kimantra <span>SACCO</span></a><p>Savings, credit and heavy-haul transport, owned by the members of Kimana, Kajiado County.</p><div class="act"><a class="btn hi" href="#/booking">Book a truck</a>${wa?`<a class="btn ol" href="${wa}">WhatsApp</a>`:''}</div></div>${col('Explore',LINKS)}${col('Members',MEMBERS)}<div class="ft-contact"><p class="lb">Visit &amp; contact</p><address><span>${esc(s.address)}</span>${tel?`<a href="${tel}">${esc(s.phone)}</a>`:`<span>${esc(s.phone)}</span>`}<span>${esc(s.hours)}</span></address></div></div>
<div class="ft-base"><div class="w"><span>© ${new Date().getFullYear()} Kimantra SACCO · ${esc(s.reg)}</span><button class="ft-top" data-top>Back to top ↑</button></div></div>`}
document.addEventListener('click',e=>{if(e.target.closest('[data-top]'))scrollTo({top:0,behavior:'smooth'})});
