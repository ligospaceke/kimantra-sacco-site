import {esc} from '../util.js';
import {load} from '../store.js';
import {ph} from '../components/photo.js';
import {board,mapSvg} from '../components/routeMap.js';
const cards=F=>F.map(f=>`<div class="cd tk">${ph(f.img||'fuso.jpg','Photo · '+esc(f.cls))}<h3>${esc(f.name)}</h3><p class="mu">${esc(f.cls)} · ${esc(f.cap)} t</p>${f.border?'<span class="chip ok">Border-ready</span>':'<span class="chip">Domestic</span>'}</div>`).join('')||'<p class="mu">No trucks match.</p>';
export async function render(){const [F,R]=await Promise.all([load('fleet'),load('routes')]);const cl=[...new Set(F.map(f=>f.cls))];
return `<div class="w sec"><p class="lb">Fleet & routes</p><h1>Trucks and corridors.</h1><div style="display:flex;gap:12px;flex-wrap:wrap;margin:20px 0"><div><label for="fc">Class</label><select id="fc"><option value="">All</option>${cl.map(c=>`<option>${esc(c)}</option>`).join('')}</select></div><div><label for="fb">Border-ready</label><select id="fb"><option value="">Any</option><option value="1">Yes</option></select></div></div><div class="g g3" id="fl">${cards(F)}</div>
<div class="g g3" style="margin-top:56px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))"><div>${board(R)}</div>${mapSvg(R)}</div></div>`}
export async function mount(app){const F=await load('fleet'),f=()=>{const c=app.querySelector('#fc').value,b=app.querySelector('#fb').value;app.querySelector('#fl').innerHTML=cards(F.filter(x=>(!c||x.cls===c)&&(!b||x.border)))};app.querySelectorAll('#fc,#fb').forEach(el=>el.addEventListener('change',f))}
