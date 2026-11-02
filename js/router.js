import {$} from './util.js';import {renderChrome,cur} from './components/navbar.js';
import homeV from './views/homeView.js';import fleetV from './views/fleetView.js';import servicesV from './views/servicesView.js';import hubV from './views/hubView.js';import bookingV from './views/bookingView.js';import aboutV from './views/aboutView.js';import contactV from './views/contactView.js';import adminV from './views/adminView.js';
const V={'/':homeV,'/fleet':fleetV,'/services':servicesV,'/hub':hubV,'/booking':bookingV,'/about':aboutV,'/contact':contactV,'/admin':adminV};
const go=()=>{renderChrome();const f=V[cur()]||V['/'];$('#app').innerHTML=f();scrollTo(0,0)};
const rerender=()=>{$('#app').innerHTML=(V[cur()]||V['/'])()};
export {go,rerender};
