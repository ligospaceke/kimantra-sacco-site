import {esc} from '../util.js';
import {load} from '../store.js';
export async function render(){const S=await load('services');
return `<div class="w sec"><p class="lb">Services</p><h1>Built for the long haul.</h1>${S.map((s,i)=>`<div class="rw" style="padding:22px 0"><span class="lb" style="min-width:36px">0${i+1}</span><h3 style="flex:1;min-width:200px">${esc(s.t)}</h3><span class="mu" style="flex:2;min-width:220px">${esc(s.d)}</span></div>`).join('')}
<div class="act" style="margin-top:36px"><a class="btn" href="#/hub">Member hub</a><a class="btn ol" href="#/contact">Join the SACCO</a></div></div>`}
