import {$,$$} from './util.js';import {renderChrome,cur} from './components/navbar.js';
import homeV from './views/homeView.js';import fleetV from './views/fleetView.js';import servicesV from './views/servicesView.js';import bookingV from './views/bookingView.js';import aboutV from './views/aboutView.js';import contactV from './views/contactView.js';
const V={'/':homeV,'/fleet':()=>fleetV()+bookingV(),'/booking':()=>fleetV()+bookingV(),'/services':servicesV,'/hub':servicesV,'/about':homeV,'/contact':contactV};
const go=()=>{renderChrome();const f=V[cur()]||V['/'];$('#app').innerHTML=f();scrollTo(0,0);fx()};
const rerender=()=>{$('#app').innerHTML=(V[cur()]||V['/'])()};
export {go,rerender};
function fx(){if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
const h=$('#app h1');if(h&&!h.children.length)h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="wd"><span style="--i:${i}">${w.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</span></span>`).join(' ');
}
