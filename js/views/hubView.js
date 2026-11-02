import {esc} from '../util.js';
import {load,waLink} from '../store.js';
export async function render(){const h=await load('hub');
return `<div class="w sec"><p class="lb">Member hub</p><h1>Credit, loans and forms.</h1>
<div class="cd" style="margin:28px 0"><p class="lb">Tyre &amp; spares credit</p><div class="meter" aria-hidden="true"><div id="mt" style="width:0"></div></div><p class="mu">Limit ${esc(h.limit)} · <span id="ct">0</span> item(s) selected</p></div>
<div class="g g3">${h.items.map(i=>`<div class="cd"><h3>${esc(i.name)}</h3><p class="ac">${esc(i.price)}</p><label style="text-transform:none;letter-spacing:0;font-size:14px;color:var(--ink)"><input type="checkbox" data-item="${esc(i.name)}">Request on credit</label></div>`).join('')}</div>
<a class="btn" id="rq" href="#/contact" style="margin-top:20px">Send credit request</a>
<div class="cd" style="margin-top:48px;max-width:440px"><p class="lb">Borrowing power · illustrative only</p><label for="sv">Your savings (KES)</label><input id="sv" type="number" min="0" inputmode="numeric"><p id="cr" class="mu" style="margin-top:12px">Enter savings to see a range.</p></div>
<h2 style="margin-top:56px">How to join</h2><ol style="margin:16px 0 0 20px">${h.join.map(j=>`<li>${esc(j)}</li>`).join('')}</ol>
<h2 style="margin-top:56px">Forms</h2>${h.forms.map(f=>`<div class="rw"><span>${esc(f.name)}</span>${f.url?`<a href="${esc(f.url)}" download>Download PDF</a>`:'<span class="chip">Available at the office</span>'}</div>`).join('')}</div>`}
export function mount(app,site){
  const $=s=>app.querySelector(s),boxes=[...app.querySelectorAll('[data-item]')];
  const upd=()=>{const sel=boxes.filter(b=>b.checked).map(b=>b.dataset.item);$('#ct').textContent=sel.length;$('#mt').style.width=Math.min(100,sel.length*25)+'%';$('#rq').href=sel.length&&waLink(site,'Tyre/spares credit request: '+sel.join(', '))||'#/contact'};
  boxes.forEach(b=>b.addEventListener('change',upd));
  $('#sv').addEventListener('input',e=>{const v=+e.target.value,f=n=>(v*n).toLocaleString('en-KE');$('#cr').innerHTML=v>0?`At 3×: KES ${f(3)} · At 4×: KES ${f(4)}<br><span class="lb">Subject to guarantors and approval</span>`:'Enter savings to see a range.'});
}
