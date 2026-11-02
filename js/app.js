import {navigate} from './router.js';
addEventListener('hashchange',navigate);
/* Optional images: if a real photo is missing, keep the placeholder. */
addEventListener('error',e=>{if(e.target.tagName==='IMG'&&e.target.hasAttribute('data-opt'))e.target.remove()},true);
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
navigate();
