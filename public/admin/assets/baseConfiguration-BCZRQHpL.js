
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{d as ee,m as ae,r as N,a as te,n as i,g as r,c as h,b as e,w as a,h as H,z as _,i as g,B as P,C as V,A as U,F as le,s as oe,e as F,E as k,j as ne,_ as re,H as O,t as se,k as R}from"./index-B-LUCRde.js";import{a as T}from"./config-BBuBLjtx.js";const ie=F("div",{class:"flex items-center gap-4"},"网站基础配置",-1),ce=F("div",{class:"text-sm/6"},[F("div",null," 网站基础配置支持即时更新网站的主要视觉与功能元素。配置内容包括网站名称、备案号、版权信息、LOGO与ICO、默认AI头像与用户头像，以及首页设置等。 "),F("div",null,"请认真填写各项配置，确保提供给用户的信息准确无误。")],-1),ue=["src"],de=["src"],me=["src"],fe=["src"],pe=ee({__name:"baseConfiguration",setup(_e){const B=[{label:"聊天对话",path:"/chat"},{label:"专业绘画",path:"/midjourney"},{label:"绘画广场",path:"/market"},{label:"思维导图",path:"/mind"},{label:"应用中心",path:"/chatStore"},{label:"不指定首页",path:""}],t=ae({siteName:"",vxNumber:"",robotAvatar:"",userDefautlAvatar:"",filingNumber:"",companyName:"",buyCramiAddress:"",siteUrl:"",isShowAppCatIcon:"",clientFavoIconPath:"",clientLogoPath:"",clientHomePath:"",copyrightTitle:"",copyrightUrl:"",isHideSidebar:""}),G=N({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}],copyrightUrl:[{trigger:"blur",message:"请填写底部版权文字内容"}],copyrightTitle:[{trigger:"blur",message:"请填写点击底部版本跳转的地址"}]}),I=N(),y=N(`/api/upload/file?dir=${encodeURIComponent("system/others")}`);async function L(){const l=await T.queryConfig({keys:["siteName","vxNumber","robotAvatar","userDefautlAvatar","filingNumber","companyName","isShowAppCatIcon","clientLogoPath","clientFavoIconPath","clientHomePath","copyrightUrl","copyrightTitle","siteUrl","isHideSidebar"]});Object.assign(t,l.data)}function $(){var l;(l=I.value)==null||l.validate(async o=>{if(o){try{await T.setConfig({settings:J(t)}),k.success("变更配置信息成功")}catch{}L()}else k.error("请填写完整信息")})}async function v(l){const o=await O.get(l,{responseType:"blob"});let s="downloaded_file";const m=o.headers["content-disposition"];if(m){const b=/filename="([^"]+)"/.exec(m);b!=null&&b[1]&&(s=b[1])}else s=E(l);return new File([o.data],s,{type:o.data.type})}function E(l){const s=new URL(l).pathname;return s.substring(s.lastIndexOf("/")+1)}function x(l,o){const s=new FormData;s.append("file",l),O.post(y.value,s,{headers:{"Content-Type":"multipart/form-data"}}).then(m=>{o(m.data)}).catch(m=>{console.error("上传失败",m)})}const C=(l,o)=>{console.log("response: ",l.data),t.clientLogoPath=l.data};async function q(){if(t.clientLogoPath){const l=await v(t.clientLogoPath);x(l,C)}}async function z(){if(t.clientFavoIconPath){const l=await v(t.clientFavoIconPath);x(l,D)}}async function K(){if(t.robotAvatar){const l=await v(t.robotAvatar);x(l,j)}}async function M(){if(t.userDefautlAvatar){const l=await v(t.userDefautlAvatar);x(l,S)}}const D=(l,o)=>{console.log("response: ",l.data),t.clientFavoIconPath=l.data},j=(l,o)=>{console.log("response: ",l.data),t.robotAvatar=l.data},S=(l,o)=>{console.log("response: ",l.data),t.userDefautlAvatar=l.data},w=l=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(l.type)){if(l.size/1024>300)return k.error("当前限制文件最大不超过 300KB!"),!1}else return k.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1};function J(l){return Object.keys(l).map(o=>({configKey:o,configVal:l[o]}))}return te(()=>{L()}),(l,o)=>{const s=ne,m=re,b=Z,f=i("el-input"),c=i("el-form-item"),u=i("el-col"),d=i("el-row"),p=i("el-icon"),A=i("el-upload"),W=i("el-radio"),Q=i("el-radio-group"),X=i("el-form"),Y=i("el-card");return r(),h("div",null,[e(b,null,{title:a(()=>[ie]),content:a(()=>[ce]),default:a(()=>[e(m,{outline:"",onClick:$},{default:a(()=>[e(s,{name:"i-ri:file-text-line"}),H(" 保存设置 ")]),_:1})]),_:1}),e(Y,{style:{margin:"20px"}},{default:a(()=>[e(X,{ref_key:"formRef",ref:I,rules:G.value,model:t,"label-width":"150px"},{default:a(()=>[e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"网站名称",prop:"siteName"},{default:a(()=>[e(f,{modelValue:t.siteName,"onUpdate:modelValue":o[0]||(o[0]=n=>t.siteName=n),placeholder:"网站名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"网站地址",prop:"siteUrl"},{default:a(()=>[e(f,{modelValue:t.siteUrl,"onUpdate:modelValue":o[1]||(o[1]=n=>t.siteUrl=n),placeholder:"网站地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"公司/组织名称",prop:"companyName"},{default:a(()=>[e(f,{modelValue:t.companyName,"onUpdate:modelValue":o[2]||(o[2]=n=>t.companyName=n),placeholder:"填入具体的公司或组织名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"网站备案号",prop:"filingNumber"},{default:a(()=>[e(f,{modelValue:t.filingNumber,"onUpdate:modelValue":o[3]||(o[3]=n=>t.filingNumber=n),placeholder:"填写网站备案信息的备案号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"用户端LOGO",prop:"clientLogoPath"},{default:a(()=>[e(f,{modelValue:t.clientLogoPath,"onUpdate:modelValue":o[4]||(o[4]=n=>t.clientLogoPath=n),placeholder:"请填写或上传网站 LOGO 图片 URL",clearable:""},{append:a(()=>[e(A,{class:"avatar-uploader",action:y.value,"show-file-list":!1,"on-success":C,"before-upload":w,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:a(()=>[t.clientLogoPath?(r(),h("img",{key:0,src:t.clientLogoPath,style:{"max-width":"1.5rem","max-height":"1.5rem",margin:"5px 0","object-fit":"contain"}},null,8,ue)):(r(),_(p,{key:1,style:{width:"1rem"}},{default:a(()=>[e(g(P))]),_:1}))]),_:1},8,["action"]),t.clientLogoPath?(r(),_(p,{key:0,onClick:q,style:{"margin-left":"35px",width:"1rem"}},{default:a(()=>[e(g(V))]),_:1})):U("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"网站 ico",prop:"clientFavoIconPath"},{default:a(()=>[e(f,{modelValue:t.clientFavoIconPath,"onUpdate:modelValue":o[5]||(o[5]=n=>t.clientFavoIconPath=n),placeholder:"请填写或上传网站 ico URL",clearable:""},{append:a(()=>[e(A,{class:"avatar-uploader",action:y.value,"show-file-list":!1,"on-success":D,"before-upload":w,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:a(()=>[t.clientFavoIconPath?(r(),h("img",{key:0,src:t.clientFavoIconPath,style:{"max-width":"1.5rem","max-height":"1.5rem",margin:"5px 0","object-fit":"contain"}},null,8,de)):(r(),_(p,{key:1,style:{width:"1rem"}},{default:a(()=>[e(g(P))]),_:1}))]),_:1},8,["action"]),t.clientFavoIconPath?(r(),_(p,{key:0,onClick:z,style:{"margin-left":"35px",width:"1rem"}},{default:a(()=>[e(g(V))]),_:1})):U("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"AI头像",prop:"robotAvatar"},{default:a(()=>[e(f,{modelValue:t.robotAvatar,"onUpdate:modelValue":o[6]||(o[6]=n=>t.robotAvatar=n),placeholder:"请填写或上传网站 AI 头像 URL、为空将根据模型自动显示",clearable:""},{append:a(()=>[e(A,{class:"avatar-uploader",action:y.value,"show-file-list":!1,"on-success":j,"before-upload":w,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:a(()=>[t.robotAvatar?(r(),h("img",{key:0,src:t.robotAvatar,style:{"max-width":"1.5rem","max-height":"1.5rem",margin:"5px 0","object-fit":"contain"}},null,8,me)):(r(),_(p,{key:1,style:{width:"1rem"}},{default:a(()=>[e(g(P))]),_:1}))]),_:1},8,["action"]),t.robotAvatar?(r(),_(p,{key:0,onClick:K,style:{"margin-left":"35px",width:"1rem"}},{default:a(()=>[e(g(V))]),_:1})):U("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(c,{label:"用户默认头像",prop:"userDefautlAvatar"},{default:a(()=>[e(f,{modelValue:t.userDefautlAvatar,"onUpdate:modelValue":o[7]||(o[7]=n=>t.userDefautlAvatar=n),placeholder:"请填写或上传网站新用户默认的头像 URL",clearable:""},{append:a(()=>[e(A,{class:"avatar-uploader",action:y.value,"show-file-list":!1,"on-success":S,"before-upload":w,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:a(()=>[t.userDefautlAvatar?(r(),h("img",{key:0,src:t.userDefautlAvatar,style:{"max-width":"1.5rem","max-height":"1.5rem",margin:"5px 0","object-fit":"contain"}},null,8,fe)):(r(),_(p,{key:1,style:{width:"1rem"}},{default:a(()=>[e(g(P))]),_:1}))]),_:1},8,["action"]),t.userDefautlAvatar?(r(),_(p,{key:0,onClick:M,style:{"margin-left":"35px",width:"1rem"}},{default:a(()=>[e(g(V))]),_:1})):U("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:a(()=>[e(c,{label:"设置指定首页",prop:"clientHomePath"},{default:a(()=>[e(Q,{modelValue:t.clientHomePath,"onUpdate:modelValue":o[8]||(o[8]=n=>t.clientHomePath=n)},{default:a(()=>[(r(),h(le,null,oe(B,n=>e(W,{key:n.path,size:"small",border:"",label:n.path},{default:a(()=>[H(se(n.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof R=="function"&&R(pe);export{pe as default};
