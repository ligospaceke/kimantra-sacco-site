import {$,H} from '../util.js';import {S} from '../store.js';import {switcher} from '../theme.js';import {renderFooter} from './footer.js';
/* ---------- chrome ---------- */
const LINKS=[['/','Home'],['/fleet','Fleet'],['/services','Services'],['/hub','Hub'],['/booking','Book'],['/about','About'],['/contact','Contact']];
const cur=()=>location.hash.slice(1)||'/';
function renderChrome(){const s=S.getSettings(),c=cur(),tel='tel:'+s.phone.replace(/[^\d+]/g,'');
$('#nav').innerHTML=`<header class="hd"><div class="w"><a class="br" href="#/">Kimantra <span class="ac">SACCO</span></a><nav class="nv" id="nv" aria-label="Main">${LINKS.map(([p,n])=>`<a href="#${p}" ${c==p?'aria-current="page"':''}>${n}</a>`).join('')}</nav>${switcher()}<button class="mn bo" data-a="mn" aria-expanded="false" aria-controls="nv">Menu</button></div></header>
<nav class="tabs" aria-label="Quick">${[['/','Home'],['/fleet','Fleet'],['/booking','Book'],['/hub','Hub']].map(([p,n])=>`<a href="#${p}" ${c==p?'aria-current="page"':''}>${n}</a>`).join('')}<a href="${tel}">Call</a></nav><a class="wa" href="${waUrl(s,'Hello Kimantra SACCO')}" aria-label="WhatsApp">WA</a>`;
renderFooter()}
const waUrl=(s,t)=>{const n=s.wa.replace(/\D/g,'');return n.length>8?`https://wa.me/${n}?text=${encodeURIComponent(t)}`:'#/contact'};
export {LINKS,cur,renderChrome,waUrl};
