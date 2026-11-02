import {$} from '../util.js';
export function toast(m){const t=$('#t');t.textContent=m;setTimeout(()=>t.textContent='',3500)}
