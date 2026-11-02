import {esc} from '../util.js';
import {load,waLink,draft} from '../store.js';
import {ph} from '../components/photo.js';
import {board,mapSvg} from '../components/routeMap.js';
const PILLARS=[['Savings & loans','Pool savings, then borrow 3–4× with peer guarantors. No title deed.'],['Tyre & spares credit','Bulk buying power for members. Pay as you haul.'],['Permits & compliance','NTSA badges and cross-border permits, handled for you.']];
export async function render(site){
  const [R,hub]=await Promise.all([load('routes'),load('hub')]);
  const opt=a=>a.map(x=>`<option>${esc(x)}</option>`).join('');
  return `<div class="band"><div class="w hero"><div><p class="lb hi">Kimana · Kajiado County</p><h1>Heavy haulage, moved by <em>members.</em></h1><p>Volvo FH and Fuso/Fararas trucks carrying tomatoes, onions, mangoes and oranges across Kenya, Tanzania and Uganda.</p><div class="act"><a class="btn hi" href="#/booking">Book a truck</a><a class="btn gh" href="#/services">Join the SACCO</a></div></div>${ph('hero.jpg','Photo · Volvo FH on the highway')}</div></div>
<div class="w"><form class="con" id="quick"><div><label for="q1">Destination</label><select id="q1" name="to">${opt(R.map(r=>r.to))}</select></div><div><label for="q2">Produce</label><select id="q2" name="produce">${opt(site.produce)}</select></div><button class="btn">Request a truck</button></form></div>
<section class="sec"><div class="w"><h2>One co-operative.<br>Three ways it works for you.</h2><div class="g g3" style="margin-top:32px">${PILLARS.map(([a,b],i)=>`<div class="cd"><span class="num">0${i+1}</span><h3>${a}</h3><p class="mu">${b}</p></div>`).join('')}</div></div></section>
<div class="band"><section class="sec w split"><div><h2>Corridors, live.</h2><div style="margin-top:24px">${board(R)}</div></div>${mapSvg(R)}</section></div>
<section class="sec"><div class="w"><div class="blk"><div><p class="lb">Member store</p><h2 style="margin:12px 0 16px">Tyres and spares on credit.</h2><p style="margin-bottom:24px">Credit limit: ${esc(hub.limit)}</p><a class="btn" href="#/hub">Open member hub</a></div>${ph('tyres.jpg','Photo · heavy-duty tyres')}</div></div></section>
<div class="band"><div class="w cta"><h2>Need a truck today?</h2><a class="btn hi" href="${waLink(site,'Hello Kimantra SACCO')||'#/contact'}">Chat on WhatsApp</a></div></div>`}
export function mount(app){app.querySelector('#quick').addEventListener('submit',e=>{e.preventDefault();Object.assign(draft,Object.fromEntries(new FormData(e.target)),{step:1});location.hash='#/booking'})}
