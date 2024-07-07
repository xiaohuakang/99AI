
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{d as $,r as T,a4 as j,cl as Q,cm as Z,p as x,cn as F,a7 as G,a as M,Z as R,cb as J,co as c,cp as V,cq as X,F as U,$ as W,cr as B,cs as Y,S as ee,ct as h,cu as O,cv as te,cw as ae,cx as A,cy as I,av as z,aw as le,g as C,z as L,w as N,b as ne,c as re,s as ue,i as _,e as se,Q as oe,A as ie,h as de,t as ce,j as ve}from"./index-B-LUCRde.js";import{s as pe}from"./use-resolve-button-type-BVUBWyWZ.js";let fe=$({props:{onFocus:{type:Function,required:!0}},setup(e){let v=T(!0);return()=>v.value?j(Z,{as:"button",type:"button",features:Q.Focusable,onFocus(d){d.preventDefault();let p,f=50;function u(){var l;if(f--<=0){p&&cancelAnimationFrame(p);return}if((l=e.onFocus)!=null&&l.call(e)){v.value=!1,cancelAnimationFrame(p);return}p=requestAnimationFrame(u)}p=requestAnimationFrame(u)}}):null}});var me=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(me||{}),be=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(be||{});let H=Symbol("TabsContext");function q(e){let v=W(H,null);if(v===null){let d=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,q),d}return v}let K=Symbol("TabsSSRContext"),xe=$({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:v,attrs:d,emit:p}){var f;let u=T((f=e.selectedIndex)!=null?f:e.defaultIndex),l=T([]),n=T([]),y=x(()=>e.selectedIndex!==null),S=x(()=>y.value?e.selectedIndex:u.value);function g(a){var r;let o=F(s.tabs.value,c),t=F(s.panels.value,c),i=o.filter(m=>{var b;return!((b=c(m))!=null&&b.hasAttribute("disabled"))});if(a<0||a>o.length-1){let m=B(u.value===null?0:Math.sign(a-u.value),{[-1]:()=>1,0:()=>B(Math.sign(a),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),b=B(m,{0:()=>o.indexOf(i[0]),1:()=>o.indexOf(i[i.length-1])});b!==-1&&(u.value=b),s.tabs.value=o,s.panels.value=t}else{let m=o.slice(0,a),b=[...o.slice(a),...m].find(D=>i.includes(D));if(!b)return;let w=(r=o.indexOf(b))!=null?r:s.selectedIndex.value;w===-1&&(w=s.selectedIndex.value),u.value=w,s.tabs.value=o,s.panels.value=t}}let s={selectedIndex:x(()=>{var a,r;return(r=(a=u.value)!=null?a:e.defaultIndex)!=null?r:null}),orientation:x(()=>e.vertical?"vertical":"horizontal"),activation:x(()=>e.manual?"manual":"auto"),tabs:l,panels:n,setSelectedIndex(a){S.value!==a&&p("change",a),y.value||g(a)},registerTab(a){var r;if(l.value.includes(a))return;let o=l.value[u.value];if(l.value.push(a),l.value=F(l.value,c),!y.value){let t=(r=l.value.indexOf(o))!=null?r:u.value;t!==-1&&(u.value=t)}},unregisterTab(a){let r=l.value.indexOf(a);r!==-1&&l.value.splice(r,1)},registerPanel(a){n.value.includes(a)||(n.value.push(a),n.value=F(n.value,c))},unregisterPanel(a){let r=n.value.indexOf(a);r!==-1&&n.value.splice(r,1)}};G(H,s);let k=T({tabs:[],panels:[]}),E=T(!1);M(()=>{E.value=!0}),G(K,x(()=>E.value?null:k.value));let P=x(()=>e.selectedIndex);return M(()=>{R([P],()=>{var a;return g((a=e.selectedIndex)!=null?a:e.defaultIndex)},{immediate:!0})}),J(()=>{if(!y.value||S.value==null||s.tabs.value.length<=0)return;let a=F(s.tabs.value,c);a.some((r,o)=>c(s.tabs.value[o])!==c(r))&&s.setSelectedIndex(a.findIndex(r=>c(r)===c(s.tabs.value[S.value])))}),()=>{let a={selectedIndex:u.value};return j(U,[l.value.length<=0&&j(fe,{onFocus:()=>{for(let r of l.value){let o=c(r);if((o==null?void 0:o.tabIndex)===0)return o.focus(),!0}return!1}}),V({theirProps:{...d,...X(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:a,slots:v,attrs:d,name:"TabGroup"})])}}}),ge=$({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:v,slots:d}){let p=q("TabList");return()=>{let f={selectedIndex:p.selectedIndex.value},u={role:"tablist","aria-orientation":p.orientation.value};return V({ourProps:u,theirProps:e,slot:f,attrs:v,slots:d,name:"TabList"})}}}),he=$({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:v,slots:d,expose:p}){var f;let u=(f=e.id)!=null?f:`headlessui-tabs-tab-${Y()}`,l=q("Tab"),n=T(null);p({el:n,$el:n}),M(()=>l.registerTab(n)),ee(()=>l.unregisterTab(n));let y=W(K),S=x(()=>{if(y.value){let t=y.value.tabs.indexOf(u);return t===-1?y.value.tabs.push(u)-1:t}return-1}),g=x(()=>{let t=l.tabs.value.indexOf(n);return t===-1?S.value:t}),s=x(()=>g.value===l.selectedIndex.value);function k(t){var i;let m=t();if(m===O.Success&&l.activation.value==="auto"){let b=(i=ae(n))==null?void 0:i.activeElement,w=l.tabs.value.findIndex(D=>c(D)===b);w!==-1&&l.setSelectedIndex(w)}return m}function E(t){let i=l.tabs.value.map(m=>c(m)).filter(Boolean);if(t.key===h.Space||t.key===h.Enter){t.preventDefault(),t.stopPropagation(),l.setSelectedIndex(g.value);return}switch(t.key){case h.Home:case h.PageUp:return t.preventDefault(),t.stopPropagation(),k(()=>A(i,I.First));case h.End:case h.PageDown:return t.preventDefault(),t.stopPropagation(),k(()=>A(i,I.Last))}if(k(()=>B(l.orientation.value,{vertical(){return t.key===h.ArrowUp?A(i,I.Previous|I.WrapAround):t.key===h.ArrowDown?A(i,I.Next|I.WrapAround):O.Error},horizontal(){return t.key===h.ArrowLeft?A(i,I.Previous|I.WrapAround):t.key===h.ArrowRight?A(i,I.Next|I.WrapAround):O.Error}}))===O.Success)return t.preventDefault()}let P=T(!1);function a(){var t;P.value||(P.value=!0,!e.disabled&&((t=c(n))==null||t.focus({preventScroll:!0}),l.setSelectedIndex(g.value),te(()=>{P.value=!1})))}function r(t){t.preventDefault()}let o=pe(x(()=>({as:e.as,type:v.type})),n);return()=>{var t,i;let m={selected:s.value,disabled:(t=e.disabled)!=null?t:!1},{...b}=e,w={ref:n,onKeydown:E,onMousedown:r,onClick:a,id:u,role:"tab",type:o.value,"aria-controls":(i=c(l.panels.value[g.value]))==null?void 0:i.id,"aria-selected":s.value,tabIndex:s.value?0:-1,disabled:e.disabled?!0:void 0};return V({ourProps:w,theirProps:b,slot:m,attrs:v,slots:d,name:"Tab"})}}});const ke=$({__name:"HTabList",props:z({options:{}},{modelValue:{},modelModifiers:{}}),emits:z(["change"],["update:modelValue"]),setup(e,{emit:v}){const d=e,p=v,f=le(e,"modelValue"),u=x({get(){return d.options.findIndex(n=>n.value===f.value)},set(n){f.value=d.options[n].value}});R(f,n=>{n&&p("change",n)});function l(n){f.value=d.options[n].value}return(n,y)=>{const S=ve;return C(),L(_(xe),{"selected-index":_(u),onChange:l},{default:N(()=>[ne(_(ge),{class:"inline-flex select-none items-center justify-center rounded-md bg-stone-1 p-1 ring-1 ring-stone-2 dark-bg-stone-9 dark-ring-stone-8"},{default:N(()=>[(C(!0),re(U,null,ue(n.options,(g,s)=>(C(),L(_(he),{key:s,as:"template"},{default:N(({selected:k})=>[se("button",{class:oe(["w-full inline-flex items-center justify-center gap-1 break-keep border-size-0 rounded-md bg-inherit px-2 py-1.5 text-sm text-dark ring-stone-2 ring-inset dark-text-white focus-outline-none focus-ring-2 dark-ring-stone-8",{"cursor-default bg-white dark-bg-dark-9":k,"cursor-pointer opacity-50 hover-opacity-100":!k}])},[g.icon?(C(),L(S,{key:0,name:g.icon,class:"flex-shrink-0"},null,8,["name"])):ie("",!0),de(" "+ce(g.label),1)],2)]),_:2},1024))),128))]),_:1})]),_:1},8,["selected-index"])}}});export{ke as _};
