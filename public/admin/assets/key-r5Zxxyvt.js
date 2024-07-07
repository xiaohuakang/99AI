
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as Me}from"./index.vue_vue_type_script_setup_true_lang-DgN2PCOq.js";import{_ as Ne}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{I as G,d as Se,r as k,m as E,p as H,a as Ae,n as m,q as Ce,g as n,c as M,b as l,w as t,h as s,F as D,s as L,i as u,y as oe,z as c,t as y,e as f,J as I,A as V,B as De,C as Le,D as qe,E as z,G as Fe,H as de,j as Oe,_ as Re,k as ne}from"./index-B-LUCRde.js";import{u as Pe}from"./utcformatTime-Bq4gDWNx.js";import{c as re,M as Be,d as Ie,e as ze,f as $e,g as je}from"./index-J5zVJPyL.js";const X={queryModels:C=>G.get("models/query",{params:C}),setModels:C=>G.post("models/setModel",C),delModels:C=>G.post("models/delModel",C)},Ye=f("div",{class:"flex items-center gap-4"},"模型配置说明",-1),Ke=f("div",{class:"text-sm/6"},[f("div",null,"模型分为（基础对话｜创意模型｜特殊模型三类）。"),f("div",null," 基础对话：用户可以在用户端选择的模型，用于对话、问答、聊天等功能，仅支持 OpenAI Chat 格式，其他模型需自行使用分发程序适配。 "),f("div",null," 创意模型：用户端不展示，包含【Midjourney 绘图】【Dalle 绘图】【SDXL 绘图】【Suno音乐】，用于插件调用。 "),f("div",null,[s(" 其中，其中 Midjourney 对接 Midjourney-Proxy-Plus 格式，SDXL、LumaVideo 及 SunoMusic 适配 "),f("a",{href:"https://api.openai.com",target:"_blank"},"LightAi API"),s(" 格式。 ")]),f("div",null,"特殊模型：用户端不展示，包含【TTS朗读】【GPTs】。")],-1),Je={class:"w-full overflow-y-scroll whitespace-nowrap"},Ge=f("div",{style:{width:"250px"}}," 关闭将在用户端隐藏此模型、但不会影响后台的调用 ",-1),Ee=["src"],He={class:"input-with-text"},Xe=f("div",{style:{width:"250px"}},"模型排序，越小越靠前。",-1),Qe={class:"input-with-text"},We=f("span",{class:"unit-text"},"次/小时",-1),Ze=f("div",{style:{width:"250px"}}," 选择是否开启文件上传及其格式，逆向格式【直接附带链接，仅支持逆向渠道】，4o格式【OpenAI Chat 的识图格式，仅支持图片】，文件分析【内置方式的文件分析，支持全模型分析带文字的文件】（仅开发版支持） ",-1),el=f("div",{style:{width:"250px"}}," 基于 token 计费，每次扣除的积分 = 单次扣除金额 *（token 消耗 / token 计费比例）结果向上取整【例如开启 token 计费，单次扣除金额为 3 积分，token 计费比例为 1000，用户调用消耗 1500 token，那么扣除的积分为 3 *（1500 / 1000）向上取整 6 积分】 ",-1),ll={class:"mr-5 flex justify-end"},tl=Se({__name:"key",setup(C){k();const Q=k(),W=k(0),N=k(!1),q=k(!1),se=k(!1);k(!1);const g=E({keyType:"",model:"",status:null,page:1,size:10}),$=k(),S=k(0),o=E({keyType:1,modelName:"",key:"",modelAvatar:"",status:!0,model:"",isTokenBased:!1,tokenFeeRatio:1e3,modelOrder:1,maxModelTokens:8e3,proxyUrl:"",timeout:300,deduct:1,deductType:1,maxRounds:12,isFileUpload:0,modelLimits:50,modelDescription:""}),Z=k(`/api/upload/file?dir=${encodeURIComponent("system/models")}`),ue=E({keyType:[{required:!0,message:"请选择调用模型类型",trigger:"blur"}],modelName:[{required:!0,message:"请填写您的模型名称",trigger:"blur"}],key:[{required:!1,message:"请填写您的调用模型key",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],isFileUpload:[{required:!1,message:"请选择当前模型是否开启文件上传及支持种类",trigger:"change"}],isTokenBased:[{required:!0,message:"请选择当前key是否基于token计费",trigger:"change"}],tokenFeeRatio:[{required:!1,message:"token计费比例",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],modelOrder:[{required:!0,message:"请填写当前模型排序",trigger:"blur"}],maxModelTokens:[{required:!0,message:"请填写模型最大token数",trigger:"blur"}],proxyUrl:[{required:!1,message:"请填写指定代理地址",trigger:"blur"}],modelAvatar:[{required:!1,message:"请填写AI模型使用的头像, 不填写使用系统默认",trigger:"blur"}],timeout:[{required:!0,message:"请填写超时时间 默认 60 单位（秒）",trigger:"blur"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}],modelLimits:[{required:!0,message:"请填写模型调用频率限制",trigger:"blur"}],modelDescription:[{required:!1,message:"请填写模型描述",trigger:"blur"}]});function ie(d){S.value=0,d==null||d.resetFields()}const pe=H(()=>je[o.keyType]),me=H(()=>S.value?"修改模型":"新增模型"),ce=H(()=>S.value?"确认更新":"确认新增"),ee=k([]);async function A(){try{q.value=!0;const d=await X.queryModels(g);q.value=!1;const{rows:a,count:i}=d.data;W.value=i,ee.value=a}catch{q.value=!1}}async function fe(d){const{id:a}=d;await X.delModels({id:a}),z({type:"success",message:"操作完成！"}),A()}function ye(d){S.value=d.id;const{keyType:a,modelName:i,key:_,status:w,model:x,modelOrder:h,maxModelTokens:r,proxyUrl:b,timeout:F,deductType:O,deduct:T,maxRounds:p,modelAvatar:j,isTokenBased:Y,tokenFeeRatio:K,isFileUpload:J,modelLimits:R,modelDescription:U}=d;Fe(()=>{Object.assign(o,{keyType:a,modelName:i,key:_,status:w,model:x,modelOrder:h,maxModelTokens:r,proxyUrl:b,timeout:F,deductType:O,deduct:T,maxRounds:p,modelAvatar:j,isTokenBased:Y,tokenFeeRatio:K,isFileUpload:J,modelLimits:R,modelDescription:U})}),N.value=!0}function ge(d){d==null||d.resetFields(),A()}async function _e(){if(o.modelAvatar){const d=await be(o.modelAvatar);ke(d,le)}}function ke(d,a){const i=new FormData;i.append("file",d),de.post(Z.value,i,{headers:{"Content-Type":"multipart/form-data"}}).then(_=>{a(_.data)}).catch(_=>{console.error("上传失败",_)})}async function be(d){const a=await de.get(d,{responseType:"blob"});let i="downloaded_file";const _=a.headers["content-disposition"];if(_){const w=/filename="([^"]+)"/.exec(_);w!=null&&w[1]&&(i=w[1])}else i=ve(d);return new File([a.data],i,{type:a.data.type})}function ve(d){const i=new URL(d).pathname;return i.substring(i.lastIndexOf("/")+1)}async function we(d){d==null||d.validate(async a=>{if(a){const i=JSON.parse(JSON.stringify(o));if(delete i.id,S.value&&(i.id=S.value),Number(o.keyType)===1){const w=JSON.parse(JSON.stringify(o.key)).split(`
`);i.key=w}await X.setModels(i),z({type:"success",message:"操作成功！"}),S.value=0,N.value=!1,A()}})}const le=(d,a)=>{console.log("response: ",d.data),o.modelAvatar=d.data},Te=d=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(d.type)){if(d.size/1024>300)return z.error("当前限制文件最大不超过 300KB!"),!1}else return z.error("当前系统仅支持 PNG、JPEG、GIF 和 WebP 格式的图片!"),!1};return Ae(()=>{A()}),(d,a)=>{const i=Oe,_=Re,w=Ne,x=m("el-option"),h=m("el-select"),r=m("el-form-item"),b=m("el-button"),F=m("el-form"),O=Me,T=m("el-tag"),p=m("el-table-column"),j=m("el-popconfirm"),Y=m("el-table"),K=m("el-pagination"),J=m("el-row"),R=m("el-switch"),U=m("el-icon"),P=m("el-tooltip"),v=m("el-input"),Ve=m("el-upload"),te=m("el-input-number"),B=m("el-radio"),xe=m("el-radio-group"),he=m("el-dialog"),ae=Ce("loading");return n(),M("div",null,[l(w,null,{title:t(()=>[Ye]),content:t(()=>[Ke]),default:t(()=>[l(_,{outline:"",type:"success",onClick:a[0]||(a[0]=e=>N.value=!0)},{default:t(()=>[l(i,{name:"i-ri:file-text-line"}),s(" 添加模型 ")]),_:1})]),_:1}),l(O,null,{default:t(()=>[l(F,{ref_key:"formRef",ref:Q,inline:!0,model:g},{default:t(()=>[l(r,{label:"模型类型",prop:"model"},{default:t(()=>[l(h,{modelValue:g.keyType,"onUpdate:modelValue":a[1]||(a[1]=e=>g.keyType=e),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:"",style:{width:"160px"}},{default:t(()=>[(n(!0),M(D,null,L(u(re),e=>(n(),c(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"使用模型",prop:"model"},{default:t(()=>[l(h,{modelValue:g.model,"onUpdate:modelValue":a[2]||(a[2]=e=>g.model=e),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:"",style:{width:"160px"}},{default:t(()=>[(n(!0),M(D,null,L(u(Be),e=>(n(),c(x,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"启用状态",prop:"status"},{default:t(()=>[l(h,{modelValue:g.status,"onUpdate:modelValue":a[3]||(a[3]=e=>g.status=e),placeholder:"请选择key启用状态",clearable:"",style:{width:"160px"}},{default:t(()=>[(n(!0),M(D,null,L(u(Ie),e=>(n(),c(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,null,{default:t(()=>[l(b,{type:"primary",onClick:A},{default:t(()=>[s(" 查询 ")]),_:1}),l(b,{onClick:a[4]||(a[4]=e=>ge(u(Q)))},{default:t(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(O,{style:{width:"100%"}},{default:t(()=>[oe((n(),c(Y,{border:"",data:u(ee),style:{width:"100%"},size:"large"},{default:t(()=>[l(p,{prop:"keyType",label:"模型类型",width:"120"},{default:t(e=>[l(T,{type:"success"},{default:t(()=>[s(y(u(ze)[e.row.keyType]),1)]),_:2},1024)]),_:1}),l(p,{prop:"modelOrder",label:"模型排序",width:"90",align:"center"}),l(p,{prop:"modelLimits",label:"频率限制",width:"90",align:"center"}),l(p,{prop:"modelName",label:"模型名称",width:"180"}),l(p,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:t(e=>[l(T,{type:e.row.status?"success":"danger"},{default:t(()=>[s(y(e.row.status?"使用中":"已暂停"),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"key",label:"模型KEY",width:"460"},{default:t(e=>[f("div",Je,y(e.row.key),1)]),_:1}),l(p,{prop:"model",align:"center",label:"绑定模型",width:"180"},{default:t(e=>[l(T,{type:e.row.model.includes("gpt-4")?"success":"info"},{default:t(()=>[s(y(e.row.model),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"isTokenBased",align:"center",label:"Token计费",width:"120"},{default:t(e=>[l(T,{type:e.row.isTokenBased?"success":"danger"},{default:t(()=>[s(y(e.row.isTokenBased?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"deductType",align:"center",label:"扣费类型",width:"90"},{default:t(e=>[l(T,{type:e.row.deductType===1?"success":e.row.deductType===2?"warning":"info"},{default:t(()=>[s(y(e.row.deductType===1?"普通积分":e.row.deductType===2?"高级积分":"绘画积分"),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"deduct",align:"center",label:"单次扣除",width:"90"},{default:t(e=>[l(T,{type:e.row.deductType===1?"success":"warning"},{default:t(()=>[s(y(`${e.row.deduct} 积分`),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),l(p,{prop:"useToken",align:"center",label:"已使用Token",width:"120"}),l(p,{prop:"keyStatus",align:"center",label:"key状态",width:"110"},{default:t(e=>[l(T,{type:e.row.keyStatus===1?"success":"danger"},{default:t(()=>[s(y(e.row.keyStatus===1?"正常工作":e.row.keyStatus===-1?"已被封禁":"余额耗尽 "),1)]),_:2},1032,["type"])]),_:1}),l(p,{prop:"maxModelTokens",align:"center",label:"模型最大上下文",width:"140"},{default:t(e=>[l(b,{type:"info",text:""},{default:t(()=>[s(y(e.row.maxModelTokens||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"proxyUrl",align:"center",label:"绑定的代理地址",width:"140"},{default:t(e=>[l(b,{type:"info",text:""},{default:t(()=>[s(y(e.row.proxyUrl||"-"),1)]),_:2},1024)]),_:1}),l(p,{prop:"proxyUrl",align:"center",label:"变更提示信息",width:"180"},{default:t(e=>[s(y(e.row.remark||"-"),1)]),_:1}),l(p,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:t(e=>[s(y(u(Pe)(e.row.createdAt,"YYYY-MM-DD")),1)]),_:1}),l(p,{fixed:"right",label:"操作",width:"200"},{default:t(e=>[l(b,{link:"",type:"primary",size:"small",onClick:Ue=>ye(e.row)},{default:t(()=>[s(" 变更 ")]),_:2},1032,["onClick"]),l(j,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:Ue=>fe(e.row)},{reference:t(()=>[l(b,{link:"",type:"danger",size:"small"},{default:t(()=>[s(" 删除秘钥 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[ae,u(q)]]),l(J,{class:"mt-5 flex justify-end"},{default:t(()=>[l(K,{"current-page":g.page,"onUpdate:currentPage":a[5]||(a[5]=e=>g.page=e),"page-size":g.size,"onUpdate:pageSize":a[6]||(a[6]=e=>g.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:u(W),onSizeChange:A,onCurrentChange:A},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),l(he,{modelValue:u(N),"onUpdate:modelValue":a[27]||(a[27]=e=>qe(N)?N.value=e:null),"close-on-click-modal":!1,title:me.value,width:"770",class:"max-h-[90vh] overflow-y-auto rounded-md p-4",onClose:a[28]||(a[28]=e=>ie(u($)))},{footer:t(()=>[f("span",ll,[l(b,{onClick:a[25]||(a[25]=e=>N.value=!1)},{default:t(()=>[s("取消")]),_:1}),l(b,{type:"primary",onClick:a[26]||(a[26]=e=>we(u($)))},{default:t(()=>[s(y(ce.value),1)]),_:1})])]),default:t(()=>[oe((n(),c(F,{ref_key:"formPackageRef",ref:$,"label-position":"right","label-width":"120px",model:o,rules:ue},{default:t(()=>[l(r,{label:"模型类型选择",prop:"keyType"},{default:t(()=>[l(h,{modelValue:o.keyType,"onUpdate:modelValue":a[7]||(a[7]=e=>o.keyType=e),placeholder:"请选择模型类型",style:{width:"100%"}},{default:t(()=>[(n(!0),M(D,null,L(u(re),e=>(n(),c(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),[1].includes(Number(o.keyType))?(n(),c(r,{key:0,label:"用户端显示",prop:"status"},{default:t(()=>[l(R,{modelValue:o.status,"onUpdate:modelValue":a[8]||(a[8]=e=>o.status=e)},null,8,["modelValue"]),l(P,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ge]),default:t(()=>[l(U,{class:"ml-3 cursor-pointer"},{default:t(()=>[l(u(I))]),_:1})]),_:1})]),_:1})):V("",!0),l(r,{label:"模型显示名称",prop:"modelName"},{default:t(()=>[l(v,{modelValue:o.modelName,"onUpdate:modelValue":a[9]||(a[9]=e=>o.modelName=e),placeholder:"请填写模型显示名称（用户端看到的）"},null,8,["modelValue"])]),_:1}),[1].includes(Number(o.keyType))?(n(),c(r,{key:1,label:"模型简介",prop:"key"},{default:t(()=>[l(v,{modelValue:o.modelDescription,"onUpdate:modelValue":a[10]||(a[10]=e=>o.modelDescription=e),type:"text",placeholder:"请填写模型简介"},null,8,["modelValue"])]),_:1})):V("",!0),[1].includes(Number(o.keyType))?(n(),c(r,{key:2,label:"模型图标",prop:"modelAvatar"},{default:t(()=>[l(v,{modelValue:o.modelAvatar,"onUpdate:modelValue":a[11]||(a[11]=e=>o.modelAvatar=e),placeholder:"请填写或上传网站模型图标",clearable:""},{append:t(()=>[l(Ve,{class:"avatar-uploader",action:u(Z),"show-file-list":!1,"on-success":le,"before-upload":Te,style:{display:"flex","align-items":"center","justify-content":"center"}},{default:t(()=>[o.modelAvatar?(n(),M("img",{key:0,src:o.modelAvatar,style:{"max-width":"1.5rem","max-height":"1.5rem",margin:"5px 0","object-fit":"contain"}},null,8,Ee)):(n(),c(U,{key:1,style:{width:"1rem"}},{default:t(()=>[l(u(De))]),_:1}))]),_:1},8,["action"]),o.modelAvatar?(n(),c(U,{key:0,onClick:_e,style:{"margin-left":"35px",width:"1rem"}},{default:t(()=>[l(u(Le))]),_:1})):V("",!0)]),_:1},8,["modelValue"])]),_:1})):V("",!0),l(r,{label:"模型排序",prop:"modelLimits"},{default:t(()=>[f("div",He,[l(te,{modelValue:o.modelOrder,"onUpdate:modelValue":a[12]||(a[12]=e=>o.modelOrder=e),max:999,min:0,step:10,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"]),l(P,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Xe]),default:t(()=>[l(U,{class:"ml-3 cursor-pointer"},{default:t(()=>[l(u(I))]),_:1})]),_:1})])]),_:1}),l(r,{label:"模型调用频率",prop:"modelLimits"},{default:t(()=>[f("div",Qe,[l(te,{modelValue:o.modelLimits,"onUpdate:modelValue":a[13]||(a[13]=e=>o.modelLimits=e),max:999,min:0,step:5,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"]),We])]),_:1}),l(r,{label:"指定代理地址",prop:"proxyUrl"},{default:t(()=>[l(v,{modelValue:o.proxyUrl,"onUpdate:modelValue":a[14]||(a[14]=e=>o.proxyUrl=e),modelModifiers:{number:!0},placeholder:"如需使用代理请填写、不填写默认使用全局配置！"},null,8,["modelValue"])]),_:1}),l(r,{label:"模型密钥",prop:"key"},{default:t(()=>[l(v,{modelValue:o.key,"onUpdate:modelValue":a[15]||(a[15]=e=>o.key=e),type:"text",placeholder:"请填写模型Key"},null,8,["modelValue"])]),_:1}),l(r,{label:"账号关联模型",prop:"model"},{default:t(()=>[l(h,{modelValue:o.model,"onUpdate:modelValue":a[16]||(a[16]=e=>o.model=e),filterable:"",clearable:"",placeholder:"请选用或填写绑定的模型","allow-create":""},{default:t(()=>[(n(!0),M(D,null,L(pe.value,e=>(n(),c(x,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"模型扣费类型",prop:"deductType"},{default:t(()=>[l(h,{modelValue:o.deductType,"onUpdate:modelValue":a[17]||(a[17]=e=>o.deductType=e),filterable:"","allow-create":"",clearable:"",placeholder:"请选用模型扣费类型"},{default:t(()=>[(n(!0),M(D,null,L(u($e),e=>(n(),c(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"单次扣除金额",prop:"deduct"},{default:t(()=>[l(v,{modelValue:o.deduct,"onUpdate:modelValue":a[18]||(a[18]=e=>o.deduct=e),modelModifiers:{number:!0},placeholder:"请填写单次调用此key的扣费金额！"},null,8,["modelValue"])]),_:1}),[1].includes(Number(o.keyType))?(n(),c(r,{key:3,label:"上下文限制",prop:"maxRounds"},{default:t(()=>[l(v,{modelValue:o.maxRounds,"onUpdate:modelValue":a[19]||(a[19]=e=>o.maxRounds=e),modelModifiers:{number:!0},placeholder:"请填写允许用户选择的最高上下文条数！"},null,8,["modelValue"])]),_:1})):V("",!0),[1].includes(Number(o.keyType))?(n(),c(r,{key:4,label:"模型最大Token",prop:"maxModelTokens"},{default:t(()=>[l(v,{modelValue:o.maxModelTokens,"onUpdate:modelValue":a[20]||(a[20]=e=>o.maxModelTokens=e),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])]),_:1})):V("",!0),l(r,{label:"调用超时时间",prop:"timeout"},{default:t(()=>[l(v,{modelValue:o.timeout,"onUpdate:modelValue":a[21]||(a[21]=e=>o.timeout=e),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（秒）！"},null,8,["modelValue"])]),_:1}),[1].includes(Number(o.keyType))?(n(),c(r,{key:5,label:"文件上传",prop:"isFileUpload"},{default:t(()=>[l(xe,{modelValue:o.isFileUpload,"onUpdate:modelValue":a[22]||(a[22]=e=>o.isFileUpload=e)},{default:t(()=>[l(B,{label:0},{default:t(()=>[s(" 不使用 ")]),_:1}),l(B,{label:1},{default:t(()=>[s(" 逆向格式 ")]),_:1}),l(B,{label:2},{default:t(()=>[s(" 4o格式 ")]),_:1}),l(B,{label:3,disabled:""},{default:t(()=>[s(" 文件分析 ")]),_:1})]),_:1},8,["modelValue"]),l(P,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ze]),default:t(()=>[l(U,{class:"ml-3 cursor-pointer"},{default:t(()=>[l(u(I))]),_:1})]),_:1})]),_:1})):V("",!0),[1,3].includes(Number(o.keyType))?(n(),c(r,{key:6,label:"设为token计费",prop:"isTokenBased"},{default:t(()=>[l(R,{modelValue:o.isTokenBased,"onUpdate:modelValue":a[23]||(a[23]=e=>o.isTokenBased=e)},null,8,["modelValue"]),l(P,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[el]),default:t(()=>[l(U,{class:"ml-3 cursor-pointer"},{default:t(()=>[l(u(I))]),_:1})]),_:1})]),_:1})):V("",!0),[1,3].includes(Number(o.keyType))?(n(),c(r,{key:7,label:"token计费比例",prop:"tokenFeeRatio"},{default:t(()=>[l(v,{modelValue:o.tokenFeeRatio,"onUpdate:modelValue":a[24]||(a[24]=e=>o.tokenFeeRatio=e),modelModifiers:{number:!0},placeholder:"请填写token计费比例",style:{width:"80%"}},null,8,["modelValue"])]),_:1})):V("",!0)]),_:1},8,["model","rules"])),[[ae,u(se)]])]),_:1},8,["modelValue","title"])])}}});typeof ne=="function"&&ne(tl);export{tl as default};
