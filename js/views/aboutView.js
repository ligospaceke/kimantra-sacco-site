import {H} from '../util.js';import {S} from '../store.js';import {st} from '../state.js';import {mapSvg,board,stChip} from '../components/routeMap.js';import {waUrl} from '../components/navbar.js';import {switcher} from '../theme.js';

export default ()=>`<div class="w sec"><h1>About Kimantra SACCO</h1><p class="mu" style="max-width:560px;margin-top:16px">A transport and financial co-operative in Kimana, Kajiado County, serving heavy-haul operators. [ FOUNDING YEAR ] · [ MEMBER COUNT ] · ${H(S.getSettings().reg)}</p></div>`;
