/* Data layer. Every view reads through here, so moving to a real API later means editing this file only. */
import {digits,isSet} from './util.js';
const cache=new Map();
export const load=name=>{
  if(!cache.has(name))cache.set(name,fetch(`data/${name}.json`).then(r=>{if(!r.ok)throw new Error(name);return r.json()}).catch(e=>{cache.delete(name);throw e}));
  return cache.get(name);
};
export const waLink=(site,text)=>{const n=digits(site.wa);return isSet(site.wa)&&n.length>=11?`https://wa.me/${n}?text=${encodeURIComponent(text)}`:null};
export const telLink=site=>isSet(site.phone)?'tel:'+site.phone.replace(/[^\d+]/g,''):null;
/* Submit a request: to site.api if configured, otherwise hand off to WhatsApp. */
export async function submit(site,payload,text){
  if(site.api){const r=await fetch(site.api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('api');return {via:'api'}}
  const url=waLink(site,text);return url?{via:'wa',url}:{via:'none'};
}
export const draft={step:0};
