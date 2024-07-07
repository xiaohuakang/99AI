
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-DgN2PCOq.js";import{a as c}from"./config-BBuBLjtx.js";import{d as q,m as v,r as _,a as w,n as d,g as U,c as k,b as e,w as l,e as g,h as z,E as j,k as I}from"./index-B-LUCRde.js";const S={class:"flex justify-between"},G=g("b",null,"MJ参数设置",-1),R=q({__name:"index",setup(N){const a=v({mjId:"",mjApplicationId:"",mjGuildId:"",mjChannelId:"",mjSessionId:"",mjVersion:"",mjAuthorization:"",mjRateLimit:""}),b=_({mjApplicationId:[{required:!0,trigger:"blur",message:"请填写应用ID"}],mjGuildId:[{required:!0,trigger:"blur",message:"请填写工会ID"}],mjChannelId:[{required:!0,trigger:"blur",message:"请填写通道ID"}],mjSessionId:[{required:!0,trigger:"blur",message:"请填写绘画ID"}],mjVersion:[{required:!0,trigger:"blur",message:"请填写版本ID"}],mjId:[{required:!0,trigger:"blur",message:"请填写基础ID"}],mjAuthorization:[{required:!0,trigger:"blur",message:"请填写授权令牌"}]}),s=_();async function p(){const n=await c.queryConfig({keys:["mjApplicationId","mjGuildId","mjChannelId","mjId","mjSessionId","mjVersion","mjAuthorization","mjRateLimit"]});Object.assign(a,n.data)}function V(){var n;(n=s.value)==null||n.validate(async o=>{if(o){try{await c.setConfig({settings:x(a)}),j.success("变更配置信息成功")}catch{}p()}else j.error("请填写完整信息")})}function x(n){return Object.keys(n).map(o=>({configKey:o,configVal:n[o]}))}return w(()=>{p()}),(n,o)=>{const f=d("el-alert"),h=D,C=d("el-button"),r=d("el-input"),u=d("el-form-item"),m=d("el-col"),i=d("el-row"),A=d("el-form"),y=d("el-card");return U(),k("div",null,[e(h,null,{default:l(()=>[e(f,{closable:!1,"show-icon":"",title:"MJ参数说明",description:"详细配置请参考说明文档、当前暂未开放卡池、单个账号并发默认为三、如果您是更高的等级账号请在.env文件下添加 CONCURRENCY=3 此环境变量修改并发数、我们会为您默认开启队列、人数超过限制将需要进行排队！",type:"success"})]),_:1}),e(y,{style:{margin:"20px"}},{header:l(()=>[g("div",S,[G,e(C,{class:"button",text:"",onClick:V},{default:l(()=>[z(" 保存设置 ")]),_:1})])]),default:l(()=>[e(A,{ref_key:"formRef",ref:s,rules:b.value,model:a,"label-width":"130px"},{default:l(()=>[e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"id",prop:"mjId"},{default:l(()=>[e(r,{modelValue:a.mjId,"onUpdate:modelValue":o[0]||(o[0]=t=>a.mjId=t),placeholder:"请填写ID信息",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"guildId",prop:"mjGuildId"},{default:l(()=>[e(r,{modelValue:a.mjGuildId,"onUpdate:modelValue":o[1]||(o[1]=t=>a.mjGuildId=t),placeholder:"请填写工会ID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"channelId",prop:"mjChannelId"},{default:l(()=>[e(r,{modelValue:a.mjChannelId,"onUpdate:modelValue":o[2]||(o[2]=t=>a.mjChannelId=t),placeholder:"请填写通道ID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"sessionId",prop:"mjSessionId"},{default:l(()=>[e(r,{modelValue:a.mjSessionId,"onUpdate:modelValue":o[3]||(o[3]=t=>a.mjSessionId=t),placeholder:"请填写会话ID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"version",prop:"mjVersion"},{default:l(()=>[e(r,{modelValue:a.mjVersion,"onUpdate:modelValue":o[4]||(o[4]=t=>a.mjVersion=t),placeholder:"请填写版本信息",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"authorization",prop:"mjAuthorization"},{default:l(()=>[e(r,{modelValue:a.mjAuthorization,"onUpdate:modelValue":o[5]||(o[5]=t=>a.mjAuthorization=t),placeholder:"请填写授权令牌",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(m,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"applicationId",prop:"mjApplicationId"},{default:l(()=>[e(r,{modelValue:a.mjApplicationId,"onUpdate:modelValue":o[6]||(o[6]=t=>a.mjApplicationId=t),placeholder:"请填写应用程序ID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof I=="function"&&I(R);export{R as default};
