import {$,H} from '../util.js';import {S} from '../store.js';import {renderFooter} from './footer.js';
const LINKS=[['/','Home'],['/services','Services & Hub'],['/fleet','Fleet & Book'],['/contact','Contact']];
const CTA={'/':['Book','#/fleet'],'/fleet':['Book','#/fleet'],'/services':['Join','#/contact'],'/contact':['Chat','#/contact']};
const cur=()=>location.hash.slice(1)||'/';
const waUrl=(s,t)=>{const n=s.wa.replace(/\D/g,'');return n.length>8?`https://wa.me/${n}?text=${encodeURIComponent(t)}`:'#/contact'};
function renderChrome(){const s=S.getSettings(),c=({'/hub':'/services','/booking':'/fleet','/about':'/'})[cur()]||cur(),tel='tel:'+s.phone.replace(/[^\d+]/g,''),cta=CTA[c]||CTA['/'],cu=p=>c==p?' aria-current="page"':'';
$('#nav').innerHTML=`<div class="top"><div class="w"><span>${H(s.addr)}</span><a href="${waUrl(s,'Hello Kimantra SACCO')}">${H(s.phone)} · Chat on WhatsApp</a></div></div><header class="hd"><div class="w"><a class="br" href="#/">Kimantra <span class="ac">SACCO</span></a><button class="mn" data-a="mn" aria-expanded="false" aria-controls="nv">Menu</button><nav class="nv" id="nv" aria-label="Main">${LINKS.map(([p,n])=>`<a href="#${p}"${cu(p)}>${n}</a>`).join('')}</nav></div></header><nav class="tabs" aria-label="Quick"><a href="#/"${cu('/')}>Home</a><a href="#/services"${cu('/services')}>Services</a><a class="btn hi tabc" href="${cta[1]}">${cta[0]}</a><a href="#/fleet"${cu('/fleet')}>Fleet</a><a href="${tel}">Call</a></nav><a class="wa" href="${waUrl(s,'Hello Kimantra SACCO')}" aria-label="WhatsApp">WA</a>`;
renderFooter()}
export {LINKS,cur,renderChrome,waUrl};
