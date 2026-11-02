import {$} from './util.js';import {renderChrome} from './components/navbar.js';
/* ---------- theme ---------- */
const FONTS={'haul-line':'Manrope:wght@300;400;600','co-op-trust':'Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500','corridor-control':'DM+Sans:wght@300;400;500'};
const LAY={'haul-line':'top','co-op-trust':'centered','corridor-control':'sidebar'},NAMES={'haul-line':'Haul Line','co-op-trust':'Co-op Trust','corridor-control':'Corridor Control'};
const root=document.documentElement;let mq=matchMedia('(prefers-color-scheme:dark)');
const pref=()=>{try{return localStorage.getItem('ks-mode')||'system'}catch{return'system'}};
function applyMode(){const m=pref();root.dataset.mode=m=='system'?(mq.matches?'dark':'light'):m}
function setMode(m){try{localStorage.setItem('ks-mode',m)}catch{}applyMode();renderChrome()}
mq.addEventListener('change',()=>pref()=='system'&&applyMode());
const switcher=()=>`<div class="sw" role="group" aria-label="Theme">${Object.keys(LAY).map(t=>`<button data-a="th" data-v="${t}" aria-pressed="${root.dataset.theme==t}">${NAMES[t]}</button>`).join('')}</div><div class="sw" role="group" aria-label="Mode">${['light','dark','system'].map(m=>`<button data-a="md" data-v="${m}" aria-pressed="${pref()==m}">${m[0].toUpperCase()+m.slice(1)}</button>`).join('')}</div>`;

function setTheme(t){const l=$('#theme'),n=l.cloneNode();n.href='css/themes/'+t+'.css';n.onload=()=>{l.remove();root.dataset.theme=t;root.dataset.layout=LAY[t];renderChrome()};l.after(n);try{localStorage.setItem('ks-theme',t)}catch{}$('#fnt').href='https://fonts.googleapis.com/css2?family='+FONTS[t]+'&display=swap'}
export {FONTS,LAY,NAMES,root,pref,applyMode,setTheme,setMode,switcher};
