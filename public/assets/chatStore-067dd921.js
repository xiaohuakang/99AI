import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-d25a7e27.js";import{X as l,d as N,e as f,r as p,a as G,w as Z,f as E,o as O,S as r,U as o,a3 as a,a4 as u,M as i,k as X,a7 as J,F as S,a6 as j,a8 as v,W as L,ab as K,A as Y}from"./vue-10b4afc0.js";import{a as ee,e as z,N as te,t as y,O as se,P as ae,L as ne,Q as le,r as re}from"./index-d64a7cc4.js";import{I as B}from"./menu-19bde8fc.js";import{e as oe,Q as ie,H as ce}from"./naive-ui-fedd20b1.js";import{u as de}from"./useBasicLayout-a4f17bae.js";import"./index.vue_vue_type_script_setup_true_lang-f425914e.js";import"./vueuse-motion-d4cdaf7b.js";const ue=B("search",!0,function(t){return l("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[l("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),l("path",{d:"M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),l("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),fe=B("star",!1,function(t){return l("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[l("path",{d:"M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null)])}),pe={class:"relative flex justify-center bg-custom-gradient dark:bg-gray-900 min-h-screen"},ge={class:"w-full flex flex-col items-center max-w-screen-4xl p-4 lg:p-6"},he={class:"mb-2 mt-8 text-center text-3xl font-extrabold text-primary-500 dark:text-primary-600 lg:text-4xl"},me={class:"flex justify-center text-base text-small mb-4 mt-4 text-center text-gray-500 dark:text-gray-400 tracking-widest lg:text-lg"},xe={class:"flex w-full rounded-xl shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary-400 text-gray-900 placeholder:text-gray-400 border-0 bg-transparent sm:text-sm sm:leading-6 resize-none dark:focus:ring-gray-600 dark:ring-gray-600 dark:bg-gray-800"},ye={class:"relative flex flex-1 w-full"},ve={for:"search-field",class:"sr-only"},_e={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},ke=["placeholder"],we={class:"w-full"},be={class:"flex lg:justify-between overflow-x-auto scrollbar-hide my-2 pb-3 pt-4",style:{"max-width":"80%",margin:"auto"}},Ce=["onClick"],Le=["onClick"],Ae={key:0,class:"flex-shrink-0 dark:ring-gray-400 rounded-lg"},Ie=["src"],Me={class:"text-white text-sm md:text-lg"},Se={class:"flex-grow flex flex-col"},je={class:"flex items-center font-medium text-lg text-gray-600 dark:text-gray-400 my-1"},Ne={class:"line-clamp-1 overflow-hidden text-ellipsis block flex-grow whitespace-nowrap"},ze={class:"text-xs line-clamp-2 text-gray-500 dark:text-gray-400 my-3"},Be=N({__name:"index",setup(t){var M;const m=ee(),g=z(),_=((M=m.globalConfig)==null?void 0:M.siteName)||"AIWeb",k=f(()=>m.globalConfig.appMenuHeaderTips),w=oe(),x=te(),c=p(""),P=p([]),Q=f(()=>x.catId),d=p([]),b=p([]),W=f(()=>x.mineApps),A=p([]),h=p(0);G("createNewChatGroup",async e=>{});function I(e){return W.value.some(n=>n.appId===e.id)}async function $(){var n;const e=await se();d.value=(n=e==null?void 0:e.data)==null?void 0:n.rows.map(s=>(s.loading=!1,s)),b.value=d.value}const q=f(()=>c.value?d.value.filter(e=>e.name.includes(c.value)):h.value===0?d.value:d.value.filter(e=>e.catId===h.value));async function F(e){e.loading=!0;try{const n=await ae({appId:e.id});w.success(n.data),await x.queryMineApps(),e.loading=!1}catch{e.loading=!1}}async function T(e){const n=Number(e.id);ne.push({path:"/chat",query:{appId:n}})}async function H(){var s;const e=await le(),n={id:0,name:y("app.allCategories")};A.value=[n,...(s=e==null?void 0:e.data)==null?void 0:s.rows]}async function R(){const e=await re({menuPlatform:1});e.success&&(P.value=e.data)}function U(e){h.value=e}Z(Q,e=>{e?b.value=d.value.filter(n=>n.catId===e):b.value=d.value});function V(){const e=["bg-blue-300","bg-red-300","bg-green-300","bg-yellow-300","bg-purple-300","bg-pink-300"];return e[Math.floor(Math.random()*e.length)]}return E(()=>{H(),$(),R(),g.setSiderCollapsed(!0)}),O(()=>{g.setSiderCollapsed(!1)}),(e,n)=>(r(),o("div",pe,[a("div",ge,[a("div",he,u(i(_)),1),a("div",me,u(k.value||i(y)("app.exploreInfinitePossibilities")),1),a("div",xe,[a("div",ye,[a("label",ve,u(i(y)("app.searchAppNameQuickFind")),1),a("div",_e,[l(i(ue),{theme:"outline",size:"24",class:"text-gray-400"})]),X(a("input",{id:"search-field","onUpdate:modelValue":n[0]||(n[0]=s=>c.value=s),class:"z-1 w-full rounded-xl dark:bg-gray-800 py-2 pr-3 font-normal outline-0 delay-100 md:h-14 h-12 text-base pl-12 dark:text-gray-400",placeholder:i(y)("app.searchAppNameQuickFind"),type:"search",name:"search"},null,8,ke),[[J,c.value]])])]),a("div",we,[a("div",be,[(r(!0),o(S,null,j(A.value,(s,C)=>(r(),o("div",{key:C,onClick:Qe=>U(s.id),class:v([{"bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-gray-400   ":h.value===s.id,"text-gray-500":h.value!==s.id},"cursor-pointer whitespace-nowrap rounded-full px-4 py-2 m-1 lg:m-0 flex-none"])},u(s.name),11,Ce))),128))])]),l(Y,{name:"list",tag:"div",class:"w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 gap-4 py-1"},{default:L(()=>[(r(!0),o(S,null,j(q.value,s=>(r(),o("div",{key:s.id,onClick:C=>T(s),class:"custom-card cursor-pointer flex items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 m-1 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"},[s.coverImg?(r(),o("div",Ae,[a("img",{src:s.coverImg,class:"rounded-2xl w-20 h-20",alt:"app-image"},null,8,Ie)])):(r(),o("div",{key:1,class:v([V(),"flex-shrink-0  dark:ring-gray-400 rounded-2xl w-20 h-20 flex items-center justify-center"])},[a("span",Me,u(s.name.slice(0,4)),1)],2)),a("div",Se,[a("div",je,[a("span",Ne,u(s.name),1),l(i(fe),{theme:I(s)?"filled":"outline",size:"24",fill:I(s)?"#fde68a":"#e5e7eb",class:"cursor-pointer",onClick:K(C=>F(s),["stop"])},null,8,["theme","fill","onClick"])]),a("span",ze,u(s.des),1)])],8,Le))),128))]),_:1})])]))}});const Pe={class:"h-full dark:bg-gray-900 transition-all"},Ve=N({__name:"chatStore",setup(t){const m=z(),{isMobile:g}=de(),_=f(()=>m.siderCollapsed),k=f(()=>g.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]),w=f(()=>["h-full",{"pl-[260px]":!g.value&&!_.value}]);return(x,c)=>(r(),o("div",Pe,[a("div",{class:v(["h-full overflow-hidden",k.value])},[l(i(ie),{class:v(["z-40 transition",w.value]),"has-sider":""},{default:L(()=>[l(D),l(i(ce),{class:"h-full"},{default:L(()=>[l(Be,{onRunApp:c[0]||(c[0]=()=>{})})]),_:1})]),_:1},8,["class"])],2)]))}});export{Ve as default};
