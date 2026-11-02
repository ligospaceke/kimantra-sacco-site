import {$,$$} from './util.js';import {renderChrome,cur} from './components/navbar.js';
import homeV from './views/homeView.js';import fleetV from './views/fleetView.js';import servicesV from './views/servicesView.js';import hubV from './views/hubView.js';import bookingV from './views/bookingView.js';import aboutV from './views/aboutView.js';import contactV from './views/contactView.js';import adminV from './views/adminView.js';
const V={'/':homeV,'/fleet':fleetV,'/services':servicesV,'/hub':hubV,'/booking':bookingV,'/about':aboutV,'/contact':contactV,'/admin':adminV};
const go=()=>{renderChrome();const f=V[cur()]||V['/'];$('#app').innerHTML=f();scrollTo(0,0);fx()};
const rerender=()=>{$('#app').innerHTML=(V[cur()]||V['/'])()};
export {go,rerender};
function fx(){if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
const h=$('#app h1');if(h)h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="wd"><span style="--i:${i}">${w.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</span></span>`).join(' ');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -6% 0px'});
$$('#app section:not(.hero),#app .g>.cd,#app .st').forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--d',(i%3)*.09+'s');io.observe(el)})}
