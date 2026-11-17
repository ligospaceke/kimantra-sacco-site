import {renderChrome} from './components/navbar.js';
const root=document.documentElement,mq=matchMedia('(prefers-color-scheme:dark)');
const pref=()=>{try{return localStorage.getItem('ks-mode')||'system'}catch{return'system'}};
function applyMode(){const m=pref();root.dataset.mode=m=='system'?(mq.matches?'dark':'light'):m}
function setMode(m){try{localStorage.setItem('ks-mode',m)}catch{}applyMode();renderChrome()}
mq.addEventListener('change',()=>pref()=='system'&&applyMode());
const switcher=()=>`<div class="sw" role="group" aria-label="Colour mode">${['light','dark','system'].map(m=>`<button data-a="md" data-v="${m}" aria-pressed="${pref()==m}">${m[0].toUpperCase()+m.slice(1)}</button>`).join('')}</div>`;
export {root,pref,applyMode,setMode,switcher};
