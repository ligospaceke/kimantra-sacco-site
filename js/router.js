/* Hash router with per-view code splitting (native dynamic import, no bundler). */
import {$} from './util.js';
import {load} from './store.js';
import {renderChrome} from './components/navbar.js';
const R={'/':['home','Home'],'/about':['about','About us'],'/fleet':['fleet','Fleet & routes'],'/services':['services','Services'],'/hub':['hub','Member hub'],'/booking':['booking','Book a truck'],'/contact':['contact','Contact']};
const FALLBACK={name:'Kimantra SACCO',wa:'[ ]',phone:'[ ]',reg:'',address:'Kimana, Kajiado County',hours:'',founded:'',members:'',produce:[]};
let seq=0;
export async function navigate(){
  const id=++seq,raw=location.hash.slice(1).split('?')[0]||'/',path=R[raw]?raw:'/',[file,title]=R[path],app=$('#app');
  const site=await load('site').catch(()=>FALLBACK);if(id!==seq)return;
  renderChrome(path,site);
  try{const m=await import(`./views/${file}View.js`);const html=await m.render(site);if(id!==seq)return;app.innerHTML=html;m.mount?.(app,site)}
  catch(e){console.error(e);app.innerHTML='<div class="w sec"><h1>Can’t load this page</h1><p class="mu">Check your connection and try again.</p><p style="margin-top:20px"><a class="btn" href="#/">Back home</a></p></div>'}
  document.title=(path==='/'?site.name:`${title} · ${site.name}`);scrollTo(0,0);app.focus({preventScroll:true});
}
