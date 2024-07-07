
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{d as B,m as N,r as y,a as R,n as o,g as j,c as E,b as e,w as l,h as c,i as b,J as v,e as s,E as V,j as I,_ as $,k as h}from"./index-B-LUCRde.js";import{a as w}from"./config-BBuBLjtx.js";const A=s("div",{class:"flex items-center gap-4"},"插件应用基础配置",-1),O=s("div",{class:"text-sm/6"},[s("div",null," 插件基础配置，包括插件地址、插件 Key、插件优先显示、应用菜单顶部提示语等。 "),s("div",null,[c(" 插件项目"),s("a",{href:"https://github.com/vastxie/99AIPlugin",target:"_blank"},"开源地址"),c(" ，可自行部署，欢迎共同维护。 ")])],-1),P=s("div",{style:{width:"250px"}},[s("p",null,"开启后，对话页默认优先显示插件")],-1),S=s("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义语句、修改后将生效、不设置则使用默认的！ ",-1),J=B({__name:"visible",setup(z){const n=N({pluginUrl:"",pluginKey:"",appMenuHeaderTips:null,siteRobotName:"",pluginFirst:"1"}),k=y({pluginUrl:[{required:!0,trigger:"blur",message:"请填写插件地址"}],pluginKey:[{required:!0,trigger:"blur",message:"请填写插件key"}],appMenuHeaderTips:[{required:!0,trigger:"blur",message:"填写应用市场的提示语"}]}),_=y();async function m(){const a=await w.queryConfig({keys:["appMenuHeaderTips","pluginUrl","pluginKey","pluginFirst"]});Object.assign(n,a.data)}function U(){var a;(a=_.value)==null||a.validate(async t=>{if(t){try{await w.setConfig({settings:K(n)}),V.success("变更配置信息成功")}catch{}m()}else V.error("请填写完整信息")})}function K(a){return Object.keys(a).map(t=>({configKey:t,configVal:a[t]}))}return R(()=>{m()}),(a,t)=>{const f=I,C=$,H=F,d=o("el-input"),r=o("el-form-item"),u=o("el-col"),p=o("el-row"),M=o("el-switch"),g=o("el-icon"),x=o("el-tooltip"),q=o("el-form"),T=o("el-card");return j(),E("div",null,[e(H,null,{title:l(()=>[A]),content:l(()=>[O]),default:l(()=>[e(C,{outline:"",onClick:U},{default:l(()=>[e(f,{name:"i-ri:file-text-line"}),c(" 保存设置 ")]),_:1})]),_:1}),e(T,{style:{margin:"20px"}},{default:l(()=>[e(q,{ref_key:"formRef",ref:_,rules:k.value,model:n,"label-width":"150px"},{default:l(()=>[e(p,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"插件地址",prop:"pluginUrl"},{default:l(()=>[e(d,{modelValue:n.pluginUrl,"onUpdate:modelValue":t[0]||(t[0]=i=>n.pluginUrl=i),placeholder:"插件地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"插件优先显示",prop:"pluginFirst"},{default:l(()=>[e(M,{modelValue:n.pluginFirst,"onUpdate:modelValue":t[1]||(t[1]=i=>n.pluginFirst=i),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[P]),default:l(()=>[e(g,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(b(v))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"插件 Key",prop:"pluginKey"},{default:l(()=>[e(d,{modelValue:n.pluginKey,"onUpdate:modelValue":t[2]||(t[2]=i=>n.pluginKey=i),placeholder:"插件 Key",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"应用菜单顶部提示语",prop:"maxRounds"},{default:l(()=>[e(d,{modelValue:n.appMenuHeaderTips,"onUpdate:modelValue":t[3]||(t[3]=i=>n.appMenuHeaderTips=i),placeholder:"请填写应用菜单顶部提示语",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[S]),default:l(()=>[e(g,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(b(v))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof h=="function"&&h(J);export{J as default};
