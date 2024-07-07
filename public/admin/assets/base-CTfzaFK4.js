
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{d as k,m as M,r as p,a as T,n,g as A,c as q,b as e,w as l,h as D,e as U,E as g,j,_ as E,k as y}from"./index-B-LUCRde.js";import{a as x}from"./config-BBuBLjtx.js";const N=U("div",{class:"flex items-center gap-4"},"分销系统基础设置",-1),$=k({__name:"base",setup(H){const t=M({salesBaseRatio:10,salesSeniorRatio:30,salesAllowDrawMoney:10,salesBaseTitle:"新秀分销商"}),b=p({salesBaseRatio:[{required:!0,trigger:"blur",message:"请填写默认佣金比例"}],salesSeniorRatio:[{required:!0,trigger:"blur",message:"请填写高级代理默认比例"}],salesBaseTitle:[{required:!0,trigger:"blur",message:"请填写默认用户推介等级名称"}]}),m=p();async function d(){const s=await x.queryConfig({keys:["salesBaseRatio","salesSeniorRatio","salesAllowDrawMoney","salesBaseTitle"]});Object.assign(t,s.data)}function w(){var s;(s=m.value)==null||s.validate(async a=>{if(a){try{await x.setConfig({settings:B(t)}),g.success("变更配置信息成功")}catch{}d()}else g.error("请填写完整信息")})}function B(s){return Object.keys(s).map(a=>({configKey:a,configVal:s[a]}))}return T(()=>{d()}),(s,a)=>{const _=j,V=E,R=C,c=n("el-input-number"),r=n("el-form-item"),i=n("el-col"),u=n("el-row"),f=n("el-input"),S=n("el-form"),v=n("el-card");return A(),q("div",null,[e(R,null,{title:l(()=>[N]),default:l(()=>[e(V,{outline:"",onClick:w},{default:l(()=>[e(_,{name:"i-ri:file-text-line"}),D(" 保存设置 ")]),_:1})]),_:1}),e(v,{style:{margin:"20px"}},{default:l(()=>[e(S,{ref_key:"formRef",ref:m,model:t,"label-width":"140px",rules:b.value},{default:l(()=>[e(u,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"默认分销佣金比例",prop:"salesBaseRatio"},{default:l(()=>[e(c,{modelValue:t.salesBaseRatio,"onUpdate:modelValue":a[0]||(a[0]=o=>t.salesBaseRatio=o),max:100,min:0,step:5,"step-strictly":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"高级分销佣金比例",prop:"salesSeniorRatio"},{default:l(()=>[e(c,{modelValue:t.salesSeniorRatio,"onUpdate:modelValue":a[1]||(a[1]=o=>t.salesSeniorRatio=o),max:100,min:0,step:5,"step-strictly":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"允许最低提现金额",prop:"salesAllowDrawMoney"},{default:l(()=>[e(f,{modelValue:t.salesAllowDrawMoney,"onUpdate:modelValue":a[2]||(a[2]=o=>t.salesAllowDrawMoney=o),type:"number","step-strictly":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"默认等级分销名称",prop:"salesBaseTitle"},{default:l(()=>[e(f,{modelValue:t.salesBaseTitle,"onUpdate:modelValue":a[3]||(a[3]=o=>t.salesBaseTitle=o),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});typeof y=="function"&&y($);export{$ as default};
