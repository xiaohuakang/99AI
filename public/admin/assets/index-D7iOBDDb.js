
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{p as b,r as E,ay as P,az as T,Z as A,aA as W,m as B,aB as R,aC as _,aD as H,aE as z,a as I,aF as K,aG as V}from"./index-B-LUCRde.js";function S(o){var l;const e=R(o);return(l=e==null?void 0:e.$el)!=null?l:e}const k=_?window:void 0,j=_?window.document:void 0,D=_?window.navigator:void 0;function F(...o){let l,e,v,a;if(typeof o[0]=="string"||Array.isArray(o[0])?([e,v,a]=o,l=k):[l,e,v,a]=o,!l)return W;Array.isArray(e)||(e=[e]),Array.isArray(v)||(v=[v]);const s=[],u=()=>{s.forEach(d=>d()),s.length=0},r=(d,t,m,h)=>(d.addEventListener(t,m,h),()=>d.removeEventListener(t,m,h)),f=A(()=>[S(l),R(a)],([d,t])=>{if(u(),!d)return;const m=H(t)?{...t}:t;s.push(...e.flatMap(h=>v.map(y=>r(d,h,y,m))))},{immediate:!0,flush:"post"}),p=()=>{f(),u()};return z(p),p}function G(){const o=E(!1),l=V();return l&&I(()=>{o.value=!0},l),o}function M(o){const l=G();return b(()=>(l.value,!!o()))}function O(o,l={}){const{controls:e=!1,navigator:v=D}=l,a=M(()=>v&&"permissions"in v);let s;const u=typeof o=="string"?{name:o}:o,r=E(),f=()=>{s&&(r.value=s.state)},p=K(async()=>{if(a.value){if(!s)try{s=await v.permissions.query(u),F(s,"change",f),f()}catch{r.value="prompt"}return s}});return p(),e?{state:r,isSupported:a,query:p}:r}function U(o={}){const{navigator:l=D,read:e=!1,source:v,copiedDuring:a=1500,legacy:s=!1}=o,u=M(()=>l&&"clipboard"in l),r=O("clipboard-read"),f=O("clipboard-write"),p=b(()=>u.value||s),d=E(""),t=E(!1),m=P(()=>t.value=!1,a);function h(){u.value&&n(r.value)?l.clipboard.readText().then(w=>{d.value=w}):d.value=c()}p.value&&e&&F(["copy","cut"],h);async function y(w=R(v)){p.value&&w!=null&&(u.value&&n(f.value)?await l.clipboard.writeText(w):i(w),d.value=w,t.value=!0,m.start())}function i(w){const g=document.createElement("textarea");g.value=w??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function c(){var w,g,x;return(x=(g=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:g.toString())!=null?x:""}function n(w){return w==="granted"||w==="prompt"}return{isSupported:p,text:d,copied:t,copy:y}}function N(o,l,e={}){const{window:v=k,...a}=e;let s;const u=M(()=>v&&"ResizeObserver"in v),r=()=>{s&&(s.disconnect(),s=void 0)},f=b(()=>Array.isArray(o)?o.map(t=>S(t)):[S(o)]),p=A(f,t=>{if(r(),u.value&&v){s=new ResizeObserver(l);for(const m of t)m&&s.observe(m,a)}},{immediate:!0,flush:"post"}),d=()=>{r(),p()};return z(d),{isSupported:u,stop:d}}function Z(o,l={width:0,height:0},e={}){const{window:v=k,box:a="content-box"}=e,s=b(()=>{var t,m;return(m=(t=S(o))==null?void 0:t.namespaceURI)==null?void 0:m.includes("svg")}),u=E(l.width),r=E(l.height),{stop:f}=N(o,([t])=>{const m=a==="border-box"?t.borderBoxSize:a==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(v&&s.value){const h=S(o);if(h){const y=h.getBoundingClientRect();u.value=y.width,r.value=y.height}}else if(m){const h=Array.isArray(m)?m:[m];u.value=h.reduce((y,{inlineSize:i})=>y+i,0),r.value=h.reduce((y,{blockSize:i})=>y+i,0)}else u.value=t.contentRect.width,r.value=t.contentRect.height},e);T(()=>{const t=S(o);t&&(u.value="offsetWidth"in t?t.offsetWidth:l.width,r.value="offsetHeight"in t?t.offsetHeight:l.height)});const p=A(()=>S(o),t=>{u.value=t?l.width:0,r.value=t?l.height:0});function d(){f(),p()}return{width:u,height:r,stop:d}}const L=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Q(o,l={}){const{document:e=j,autoExit:v=!1}=l,a=b(()=>{var n;return(n=S(o))!=null?n:e==null?void 0:e.querySelector("html")}),s=E(!1),u=b(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(n=>e&&n in e||a.value&&n in a.value)),r=b(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(n=>e&&n in e||a.value&&n in a.value)),f=b(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(n=>e&&n in e||a.value&&n in a.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(n=>e&&n in e),d=M(()=>a.value&&e&&u.value!==void 0&&r.value!==void 0&&f.value!==void 0),t=()=>p?(e==null?void 0:e[p])===a.value:!1,m=()=>{if(f.value){if(e&&e[f.value]!=null)return e[f.value];{const n=a.value;if((n==null?void 0:n[f.value])!=null)return!!n[f.value]}}return!1};async function h(){if(!(!d.value||!s.value)){if(r.value)if((e==null?void 0:e[r.value])!=null)await e[r.value]();else{const n=a.value;(n==null?void 0:n[r.value])!=null&&await n[r.value]()}s.value=!1}}async function y(){if(!d.value||s.value)return;m()&&await h();const n=a.value;u.value&&(n==null?void 0:n[u.value])!=null&&(await n[u.value](),s.value=!0)}async function i(){await(s.value?h():y())}const c=()=>{const n=m();(!n||n&&t())&&(s.value=n)};return F(e,L,c,!1),F(()=>S(a),L,c,!1),v&&z(h),{isSupported:d,isFullscreen:s,enter:y,exit:h,toggle:i}}const $={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function X(o={}){const{reactive:l=!1,target:e=k,aliasMap:v=$,passive:a=!0,onEventFired:s=W}=o,u=B(new Set),r={toJSON(){return{}},current:u},f=l?B(r):r,p=new Set,d=new Set;function t(i,c){i in f&&(l?f[i]=c:f[i].value=c)}function m(){u.clear();for(const i of d)t(i,!1)}function h(i,c){var n,w;const g=(n=i.key)==null?void 0:n.toLowerCase(),q=[(w=i.code)==null?void 0:w.toLowerCase(),g].filter(Boolean);g&&(c?u.add(g):u.delete(g));for(const C of q)d.add(C),t(C,c);g==="meta"&&!c?(p.forEach(C=>{u.delete(C),t(C,!1)}),p.clear()):typeof i.getModifierState=="function"&&i.getModifierState("Meta")&&c&&[...u,...q].forEach(C=>p.add(C))}F(e,"keydown",i=>(h(i,!0),s(i)),{passive:a}),F(e,"keyup",i=>(h(i,!1),s(i)),{passive:a}),F("blur",m,{passive:!0}),F("focus",m,{passive:!0});const y=new Proxy(f,{get(i,c,n){if(typeof c!="string")return Reflect.get(i,c,n);if(c=c.toLowerCase(),c in v&&(c=v[c]),!(c in f))if(/[+_-]/.test(c)){const g=c.split(/[+_-]/g).map(x=>x.trim());f[c]=b(()=>g.every(x=>R(y[x])))}else f[c]=E(!1);const w=Reflect.get(i,c,n);return l?R(w):w}});return y}export{U as a,X as b,Q as c,Z as u};
