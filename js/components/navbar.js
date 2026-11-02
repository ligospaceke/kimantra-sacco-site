import {esc,$} from '../util.js';
import {telLink,waLink} from '../store.js';
import {renderFooter} from './footer.js';
export const LINKS=[['/','Home'],['/about','About'],['/fleet','Fleet & Routes'],['/services','Services'],['/hub','Member Hub'],['/contact','Contact']];
export function renderChrome(path,site){
  const cur=p=>path===p?' aria-current="page"':'',tel=telLink(site),wa=waLink(site,'Hello Kimantra SACCO')||'#/contact';
  $('#nav').innerHTML=`<header class="hd"><div class="w"><a class="br" href="#/">Kimantra <span>SACCO</span></a><button class="mn" data-menu aria-expanded="false" aria-controls="nv">Menu</button><nav class="nv" id="nv" aria-label="Main">${LINKS.map(([p,n])=>`<a href="#${p}"${cur(p)}>${esc(n)}</a>`).join('')}</nav><a class="btn hi hcta" href="#/booking">Book a truck</a></div></header>
<nav class="tabs" aria-label="Quick actions"><a href="#/"${cur('/')}>Home</a><a href="#/fleet"${cur('/fleet')}>Fleet</a><a class="btn hi" href="#/booking">Book</a><a href="#/hub"${cur('/hub')}>Hub</a><a href="${tel||'#/contact'}">Call</a></nav><a class="wa" href="${wa}" aria-label="Chat on WhatsApp">WA</a>`;
  renderFooter(site);
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-menu]');if(b)b.setAttribute('aria-expanded',$('#nv').classList.toggle('open'))});
