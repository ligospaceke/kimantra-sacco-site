import {toast} from './components/toast.js';
/* ---------- store (swap these functions for a real API) ---------- */
const DEF={settings:{wa:'[ +254 7XX XXX XXX ]',phone:'[ +254 7XX XXX XXX ]',reg:'[ SACCO REG. NO. ]',addr:'Kimana, Kajiado County',pin:'1234',theme:'corridor-control',mode:'system'},
fleet:[{id:1,name:'Volvo FH [ REG. ]',cls:'Volvo FH',border:true,cap:'[ TONNES ]'},{id:2,name:'Fuso / Fararas [ REG. ]',cls:'Fuso / Fararas',border:true,cap:'[ TONNES ]'},{id:3,name:'Fuso / Fararas [ REG. ]',cls:'Fuso / Fararas',border:false,cap:'[ TONNES ]'}],
routes:[...['Nairobi','Mombasa','Namanga','Arusha','Kampala'].map((to,i)=>({to,st:'Open',hrs:'[ HRS ]',permit:i>2?'Cross-border permit':'—'}))],
store:{limit:'[ CREDIT LIMIT ]',items:['Heavy-duty truck tyre','Engine oil (bulk)','Truck battery','Mechanical spares'].map((n,i)=>({id:i+1,name:n,price:'[ PRICE ]'}))},bookings:[]};
const ld=k=>{try{const v=JSON.parse(localStorage.getItem('ks-'+k));return v==null?structuredClone(DEF[k]):k=='settings'?{...DEF[k],...v}:v}catch{return structuredClone(DEF[k])}};
const sv=(k,v)=>{try{localStorage.setItem('ks-'+k,JSON.stringify(v))}catch{toast('Storage unavailable — change not saved')}};
const S={getSettings:()=>ld('settings'),saveSettings:v=>sv('settings',v),getFleet:()=>ld('fleet'),saveFleet:v=>sv('fleet',v),getRoutes:()=>ld('routes'),saveRoutes:v=>sv('routes',v),getStore:()=>ld('store'),saveStore:v=>sv('store',v),getBookings:()=>ld('bookings'),saveBookings:v=>sv('bookings',v)};

/* Data layer: defaults come from data/*.json (embedded copy is the fallback, e.g. file://), overrides live in localStorage.
   Replace the S functions with real API calls to go live (see README). */
export async function initStore(){for(const k of ['settings','fleet','routes','store']){try{const r=await fetch('data/'+k+'.json');if(r.ok)DEF[k]=await r.json()}catch{}}}
export {S,DEF,ld};
