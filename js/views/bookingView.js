import {esc} from '../util.js';
import {load,submit,draft} from '../store.js';
const PH=/^(\+?254|0)[17]\d{8}$/;
export async function render(){return '<div class="w sec" style="max-width:600px"><p class="lb">Freight request</p><h1>Book a truck.</h1><div id="bk"></div></div>'}
export async function mount(app,site){
  const R=await load('routes'),bk=app.querySelector('#bk'),today=new Date().toISOString().slice(0,10);
  const opt=(a,v)=>a.map(x=>`<option ${x===v?'selected':''}>${esc(x)}</option>`).join('');
  const F=[()=>`<label for="from">Origin</label><input id="from" name="from" value="${esc(draft.from||'Kimana')}" maxlength="60"><label for="to">Destination</label><select id="to" name="to">${opt(R.map(r=>r.to),draft.to)}</select>`,
    ()=>`<label for="pr">Produce</label><select id="pr" name="produce">${opt(site.produce,draft.produce)}</select><label for="tn">Tonnes</label><input id="tn" name="tonnes" type="number" min="1" max="60" inputmode="numeric" value="${esc(draft.tonnes||'')}"><label for="dt">Date</label><input id="dt" name="date" type="date" min="${today}" value="${esc(draft.date||'')}">`,
    ()=>`<label for="nm">Name</label><input id="nm" name="name" autocomplete="name" maxlength="80" value="${esc(draft.name||'')}"><label for="ph">Phone</label><input id="ph" name="phone" type="tel" autocomplete="tel" placeholder="07XX XXX XXX" value="${esc(draft.phone||'')}"><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">`];
  const check=d=>draft.step===0?(!d.from.trim()?'Enter where the cargo starts.':''):draft.step===1?(!(+d.tonnes>=1&&+d.tonnes<=60)?'Tonnes must be between 1 and 60.':!d.date||d.date<today?'Pick today or a later date.':''):(d.name.trim().length<2?'Enter your name.':!PH.test(d.phone.replace(/[\s-]/g,''))?'Enter a Kenyan phone number, e.g. 0712 345 678.':'');
  function paint(){bk.innerHTML=`<div class="stp" aria-hidden="true">${['Route','Cargo','Contact'].map((n,i)=>`<span class="${i<=draft.step?'on':''}">${i+1} ${n}</span>`).join('')}</div><form novalidate>${F[draft.step]()}<p class="err" role="alert"></p><div class="act" style="margin-top:20px">${draft.step?'<button type="button" class="btn ol" data-back>Back</button>':''}<button class="btn">${draft.step<2?'Next':'Send request'}</button></div></form>`;bk.querySelector('input,select').focus()}
  bk.addEventListener('click',e=>{if(e.target.closest('[data-back]')){draft.step--;paint()}});
  bk.addEventListener('submit',async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target)),er=bk.querySelector('.err'),msg=check(d);
    if(msg){er.textContent=msg;return}Object.assign(draft,d);
    if(draft.step<2){draft.step++;return paint()}
    if(d.website)return done({via:'none'},true);
    const b={from:draft.from,to:draft.to,produce:draft.produce,tonnes:draft.tonnes,date:draft.date,name:draft.name,phone:draft.phone};
    const btn=e.target.querySelector('.btn:last-child');btn.disabled=true;
    try{done(await submit(site,b,`Truck request: ${b.produce}, ${b.tonnes}t, ${b.from} to ${b.to} on ${b.date}. Name: ${b.name}, phone ${b.phone}.`))}catch{btn.disabled=false;er.textContent='Could not send. Please try again or call us.'}});
  function done(r,quiet){for(const k of Object.keys(draft))delete draft[k];draft.step=0;
    bk.innerHTML=r.via==='wa'?`<div class="cd"><h3>Almost done</h3><p class="mu" style="margin:8px 0 20px">Tap below to send your request to dispatch on WhatsApp.</p><a class="btn" href="${r.url}">Send on WhatsApp</a></div>`:`<div class="cd"><h3>${quiet||r.via==='api'?'Request received':'Saved, but WhatsApp isn’t set up yet'}</h3><p class="mu" style="margin-top:8px">${r.via==='api'||quiet?'Dispatch will call you shortly.':'Please call us to confirm your booking.'}</p><a class="btn ol" href="#/contact" style="margin-top:20px">Contact us</a></div>`}
  paint();
}
