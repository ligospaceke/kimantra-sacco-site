import {$,H} from '../util.js';import {S} from '../store.js';import {switcher} from '../theme.js';import {renderFooter} from './footer.js';
/* ---------- chrome ---------- */
const LINKS=[['/','Home'],['/services','Services & Hub'],['/fleet','Fleet & Book'],['/contact','Contact']];
const CTA={'/':['Book','#/fleet'],'/fleet':['Book','#/fleet'],'/services':['Join','#/contact'],'/contact':['Chat','#/contact']};
const cur=()=>location.hash.slice(1)||'/';
function renderChrome(){const s=S.getSettings(),c=({'/hub':'/services','/booking':'/fleet','/about':'/'})[cur()]||cur(),tel='tel:'+s.phone.replace(/[^\d+]/g,'');
$('#nav').innerHTML=`<header class="hd"><div class="w"><a class="br" href="#/">Kimantra <span class="ac">SACCO</span></a><nav class="nv" id="nv" aria-label="Main">${LINKS.map(([p,n])=>`<a href="#${p}" ${c==p?'aria-current="page"':''}>${n}</a>`).join('')}</nav>${switcher()}<a class="btn hi nvwa" href="${waUrl(s,'Hello Kimantra SACCO')}">Chat on WhatsApp</a><button class="mn bo" data-a="mn" aria-expanded="false" aria-controls="nv">Menu</button></div></header>
<nav class="tabs" aria-label="Quick"><a href="#/" ${c=='/'?'aria-current="page"':''}>Home</a><a href="#/services" ${c=='/services'?'aria-current="page"':''}>Services</a><a class="btn hi tabc" href="${(CTA[c]||CTA['/'])[1]}">${(CTA[c]||CTA['/'])[0]}</a><a href="#/fleet" ${c=='/fleet'?'aria-current="page"':''}>Fleet</a><a href="${tel}">Call</a></nav><a class="wa" href="${waUrl(s,'Hello Kimantra SACCO')}" aria-label="WhatsApp">WA</a>`;
renderFooter()}
const waUrl=(s,t)=>{const n=s.wa.replace(/\D/g,'');return n.length>8?`https://wa.me/${n}?text=${encodeURIComponent(t)}`:'#/contact'};
export {LINKS,cur,renderChrome,waUrl};
