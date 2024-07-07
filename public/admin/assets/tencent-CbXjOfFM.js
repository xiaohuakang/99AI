
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{d as K,m as R,r as U,p as A,a as D,n as s,g as N,c as O,b as e,w as l,h as p,i,e as f,E as V,j,_ as q,k as x}from"./index-B-LUCRde.js";import{a as C}from"./config-BBuBLjtx.js";const E=f("div",{class:"flex items-center gap-4"},"腾讯云COS参数设置",-1),$=f("div",{class:"text-sm/6"},[f("div",null,[p(" 需前往腾讯云申请对象存储服务，更多配置及申请详见"),f("a",{href:"https://console.cloud.tencent.com/cos",target:"_blank"},"腾讯云COS"),p(" 。 ")])],-1),H=K({__name:"tencent",setup(M){const o=R({tencentCosStatus:"",cosSecretId:"",cosSecretKey:"",cosBucket:"",cosRegion:"",tencentCosAcceleratedDomain:""}),_=U();async function g(){const a=await C.queryConfig({keys:["cosSecretKey","cosBucket","cosRegion","cosSecretId","tencentCosStatus","tencentCosAcceleratedDomain"]});Object.assign(o,a.data)}function y(){var a;(a=_.value)==null||a.validate(async t=>{if(t){try{await C.setConfig({settings:b(o)}),V.success("变更配置信息成功")}catch{}g()}else V.error("请填写完整信息")})}function b(a){return Object.keys(a).map(t=>({configKey:t,configVal:a[t]}))}const m=A(()=>[{required:Number(o.tencentCosStatus)===1,message:"开启配置后请填写此项",trigger:"change"}]);return D(()=>{g()}),(a,t)=>{const S=j,w=q,k=I,v=s("el-switch"),c=s("el-form-item"),r=s("el-col"),u=s("el-row"),d=s("el-input"),h=s("el-form"),B=s("el-card");return N(),O("div",null,[e(k,null,{title:l(()=>[E]),content:l(()=>[$]),default:l(()=>[e(w,{outline:"",onClick:y},{default:l(()=>[e(S,{name:"i-ri:file-text-line"}),p(" 保存设置 ")]),_:1})]),_:1}),e(B,{style:{margin:"20px"}},{default:l(()=>[e(h,{ref_key:"formRef",ref:_,model:o,"label-width":"120px"},{default:l(()=>[e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"启用状态",prop:"tencentCosStatus"},{default:l(()=>[e(v,{modelValue:o.tencentCosStatus,"onUpdate:modelValue":t[0]||(t[0]=n=>o.tencentCosStatus=n),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"SecretId",prop:"cosSecretId",rules:i(m)},{default:l(()=>[e(d,{modelValue:o.cosSecretId,"onUpdate:modelValue":t[1]||(t[1]=n=>o.cosSecretId=n),placeholder:"请填写SecretId",type:"password","show-password":"",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"SecretKey",prop:"cosSecretKey",rules:i(m)},{default:l(()=>[e(d,{modelValue:o.cosSecretKey,"onUpdate:modelValue":t[2]||(t[2]=n=>o.cosSecretKey=n),placeholder:"请填写SecretKey",type:"password","show-password":"",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"存储桶名称",prop:"cosBucket",rules:i(m)},{default:l(()=>[e(d,{modelValue:o.cosBucket,"onUpdate:modelValue":t[3]||(t[3]=n=>o.cosBucket=n),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"所属地域",prop:"cosRegion",rules:i(m)},{default:l(()=>[e(d,{modelValue:o.cosRegion,"onUpdate:modelValue":t[4]||(t[4]=n=>o.cosRegion=n),placeholder:"请填写所属地域(ap-guangzhou)",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"全球加速域名",prop:"tencentCosAcceleratedDomain"},{default:l(()=>[e(d,{modelValue:o.tencentCosAcceleratedDomain,"onUpdate:modelValue":t[5]||(t[5]=n=>o.tencentCosAcceleratedDomain=n),placeholder:"如您是国外服务器可开启全球加速域名得到更快响应速度、同理也会更高计费！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof x=="function"&&x(H);export{H as default};
