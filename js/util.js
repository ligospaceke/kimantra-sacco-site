export const $=(s,r=document)=>r.querySelector(s);
export const $$=(s,r=document)=>[...r.querySelectorAll(s)];
export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const digits=s=>String(s||'').replace(/\D/g,'');
export const isSet=v=>!/\[.*\]/.test(String(v));
let t;export function toast(m){const el=$('#toast');el.textContent=m;clearTimeout(t);t=setTimeout(()=>el.textContent='',3500)}
