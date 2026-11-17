import {art} from './art.js';
export const ph=(f,l,c='')=>`<div class="ph ${c}">${art(f)}<span>${l}</span><img src="img/${f}" alt="" width="800" height="500" loading="lazy" onerror="this.remove()"></div>`;
