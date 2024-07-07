
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as be}from"./index.vue_vue_type_script_setup_true_lang-DgN2PCOq.js";import{_ as ve}from"./index.vue_vue_type_script_setup_true_lang-CA9axw0k.js";import{d as Ce,r as m,m as L,p as we,a as ke,n as u,q as he,g as r,c as w,b as t,w as a,i as n,z as _,h as s,A as V,F as A,s as D,y as Ve,t as M,e as b,D as N,K as xe,E as T,_ as Ue,j as Me,k as X}from"./index-B-LUCRde.js";import{A as $}from"./package-B-9_IWpX.js";import{C as $e}from"./index-J5zVJPyL.js";import{u as Ie}from"./utcformatTime-Bq4gDWNx.js";const ze=b("div",{class:"flex items-center gap-4"},"卡密设置",-1),Ae=b("div",{class:"text-sm/6"},[b("div",null,"可生成套餐类卡密与自定义卡密，套餐类卡密的设置项更多。"),b("div",null," 过期时间表示卡密的过期时间，不是用户充值后的有效期，设置为0表示永不过期。 ")],-1),De=b("div",{style:{float:"right"}},null,-1),je={key:1},qe={class:"dialog-footer"},Se={style:{"max-height":"200px",overflow:"scroll"}},Re={class:"dialog-footer"},Le=Ce({__name:"crami",setup(Ne){const B=m(),P=m(0),k=m(!1),x=m(!1),j=m(),U=m(0),F=m([]),O=m([]),v=m(!1),C=m([]),Y=m([]),d=L({packageId:null,count:1,drawMjCount:0,model3Count:0,model4Count:0}),p=L({useId:"",status:"",page:1,size:15}),Z=L({packageId:[{required:!0,message:"请选择套餐类型",trigger:"change"}],days:[{required:!0,message:"请填写有效期天数",trigger:"blur"}],count:[{required:!0,message:"请填写想要生成的数量",trigger:"blur"}],drawMjCount:[{required:!0,message:"卡密携带绘画数量",trigger:"blur"}],model3Count:[{required:!0,message:"卡密携带基础模型对话数量",trigger:"blur"}],model4Count:[{required:!0,message:"卡密携带高级模型金额",trigger:"blur"}]}),q=m([]);async function g(){try{v.value=!0;const o=await $.queryAllCrami(p),{rows:l,count:y}=o.data;v.value=!1,P.value=y,q.value=l}catch{v.value=!1}}async function E(o){const l=await xe.queryAllUser({size:30,username:o});O.value=l.data.rows}async function ee(){const o=await $.queryAllPackage({size:100});F.value=o.data.rows}function le(){ee(),k.value=!0}async function te(o){o==null||o.validate(async l=>{l&&(await $.createCrami(d),T({type:"success",message:"生成卡密成功！"}),k.value=!1,g())})}function ae(o){o==null||o.resetFields()}function oe(o){o==null||o.resetFields(),g()}async function ne(o){await $.delCrami({id:o.id}),T({type:"success",message:"删除卡密成功！"}),g()}async function re(o){C.value=o}async function ue(){try{v.value=!0,await $.batchDelCrami({ids:C.value.map(o=>o.id)}),v.value=!1,T({type:"success",message:"删除卡密成功！"}),g()}catch{v.value=!1}}function se(){x.value=!0;const o=C.value.map(l=>`${l.code}<---->${l.packageName||"自定义套餐"}`);Y.value=o}function de(o){return o.join(`
`)}function ie(o,l){const y=de(o),S=new Blob([y],{type:"text/plain"}),I=URL.createObjectURL(S),c=document.createElement("a");c.href=I,c.download=`${l}.txt`,document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(()=>URL.revokeObjectURL(I),0)}function me(){const o=C.value.map(l=>`${l.code}<---->${l.packageName||"自定义套餐"}`);ie(o,"卡密信息")}const pe=we(()=>q.value.some(o=>o.email));return ke(()=>{g()}),(o,l)=>{const y=Ue,S=Me,I=ve,c=u("el-option"),R=u("el-select"),f=u("el-form-item"),h=u("el-button"),H=u("el-form"),K=be,i=u("el-table-column"),G=u("el-tag"),ce=u("el-popconfirm"),fe=u("el-table"),_e=u("el-pagination"),J=u("el-row"),ge=u("el-switch"),z=u("el-input"),Q=u("el-dialog"),ye=he("loading");return r(),w("div",null,[t(I,null,{title:a(()=>[ze]),content:a(()=>[Ae]),default:a(()=>[n(C).length?(r(),_(y,{key:0,outline:"",type:"danger",onClick:se},{default:a(()=>[s(" 显示选中卡密 ")]),_:1})):V("",!0),n(C).length?(r(),_(y,{key:1,outline:"",type:"danger",onClick:ue},{default:a(()=>[s(" 批量删除卡密 ")]),_:1})):V("",!0),n(C).length?(r(),_(y,{key:2,outline:"",type:"primary",onClick:me},{default:a(()=>[s(" 批量导出卡密 ")]),_:1})):V("",!0),t(y,{outline:"",type:"success",onClick:le},{default:a(()=>[t(S,{name:"ic:baseline-plus"}),s(" 批量生成卡密 ")]),_:1})]),_:1}),t(K,null,{default:a(()=>[t(H,{ref_key:"formRef",ref:B,inline:!0,model:p},{default:a(()=>[t(f,{label:"用户名称",prop:"useId"},{default:a(()=>[t(R,{modelValue:p.useId,"onUpdate:modelValue":l[0]||(l[0]=e=>p.useId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":E,style:{width:"160px"}},{default:a(()=>[(r(!0),w(A,null,D(n(O),e=>(r(),_(c,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(f,{label:"卡密状态",prop:"status"},{default:a(()=>[t(R,{modelValue:p.status,"onUpdate:modelValue":l[1]||(l[1]=e=>p.status=e),placeholder:"请选择卡密状态",clearable:"",style:{width:"160px"}},{default:a(()=>[(r(!0),w(A,null,D(n($e),e=>(r(),_(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(f,null,{default:a(()=>[t(h,{type:"primary",onClick:g},{default:a(()=>[s(" 查询 ")]),_:1}),t(h,{onClick:l[2]||(l[2]=e=>oe(n(B)))},{default:a(()=>[s(" 重置 ")]),_:1})]),_:1}),De]),_:1},8,["model"])]),_:1}),t(K,{style:{width:"100%"}},{default:a(()=>[Ve((r(),_(fe,{border:"",data:n(q),style:{width:"100%"},size:"large",onSelectionChange:re},{default:a(()=>[t(i,{type:"selection",width:"55"}),t(i,{prop:"code",label:"卡密账号",width:"180"}),t(i,{prop:"packageName",label:"套餐类型",width:"180"},{default:a(e=>[t(G,{type:e.row.packageName?"success":"danger"},{default:a(()=>[s(M(e.row.packageName||"自定义卡密"),1)]),_:2},1032,["type"])]),_:1}),t(i,{prop:"code",label:"卡密状态",width:"180"},{default:a(e=>[t(G,{type:e.row.status?"danger":"success"},{default:a(()=>[s(M(e.row.status?"已使用":"未使用"),1)]),_:2},1032,["type"])]),_:1}),t(i,{prop:"useId",label:"使用人ID",width:"90"}),n(pe)?(r(),_(i,{key:0,prop:"email",label:"使用人邮箱",width:"180"})):V("",!0),t(i,{prop:"model3Count",label:"基础模型额度"}),t(i,{prop:"model4Count",label:"高级模型额度"}),t(i,{prop:"drawMjCount",label:"绘画模型额度"}),t(i,{prop:"days",label:"有效天数"},{default:a(e=>[s(M(e.row.days>0?`${e.row.days}天`:"永久"),1)]),_:1}),t(i,{prop:"createdAt",label:"注册时间",width:"200"},{default:a(e=>[s(M(n(Ie)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),t(i,{label:"操作"},{default:a(e=>[t(ce,{title:"确认删除此卡密么?",width:"200","icon-color":"red",onConfirm:W=>ne(e.row)},{reference:a(()=>[t(h,{link:"",type:"danger",size:"small"},{default:a(()=>[s(" 删除卡密 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[ye,n(v)]]),t(J,{class:"mt-5 flex justify-end"},{default:a(()=>[t(_e,{"current-page":p.page,"onUpdate:currentPage":l[3]||(l[3]=e=>p.page=e),"page-size":p.size,"onUpdate:pageSize":l[4]||(l[4]=e=>p.size=e),class:"mr-5","page-sizes":[15,50,100,200],layout:"total, sizes, prev, pager, next, jumper",total:n(P),onSizeChange:g,onCurrentChange:g},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),t(Q,{modelValue:n(k),"onUpdate:modelValue":l[13]||(l[13]=e=>N(k)?k.value=e:null),title:"生成卡密",width:"450",onClose:l[14]||(l[14]=e=>ae(n(j)))},{footer:a(()=>[b("span",qe,[t(h,{onClick:l[11]||(l[11]=e=>k.value=!1)},{default:a(()=>[s("放弃生成")]),_:1}),t(h,{type:"primary",onClick:l[12]||(l[12]=e=>te(n(j)))},{default:a(()=>[s(" 确定生成 ")]),_:1})])]),default:a(()=>[t(H,{ref_key:"formCramiRef",ref:j,"label-position":"right","label-width":"100px",model:d,rules:Z},{default:a(()=>[t(J,null,{default:a(()=>[t(f,{label:"是否生成自定义卡密","label-width":"170px"},{default:a(()=>[t(ge,{modelValue:n(U),"onUpdate:modelValue":l[5]||(l[5]=e=>N(U)?U.value=e:null),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),n(U)?V("",!0):(r(),_(f,{key:0,label:"套餐类型",prop:"packageId"},{default:a(()=>[t(R,{modelValue:d.packageId,"onUpdate:modelValue":l[6]||(l[6]=e=>d.packageId=e),modelModifiers:{number:!0},placeholder:"请选择套餐类型",clearable:"",style:{width:"100%"}},{default:a(()=>[(r(!0),w(A,null,D(n(F),e=>(r(),_(c,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})),n(U)?(r(),w("div",je,[t(f,{label:"基础模型额度",prop:"model3Count"},{default:a(()=>[t(z,{modelValue:d.model3Count,"onUpdate:modelValue":l[7]||(l[7]=e=>d.model3Count=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带基础模型额度"},null,8,["modelValue"])]),_:1}),t(f,{label:"高级模型额度",prop:"model4Count"},{default:a(()=>[t(z,{modelValue:d.model4Count,"onUpdate:modelValue":l[8]||(l[8]=e=>d.model4Count=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带高级模型额度"},null,8,["modelValue"])]),_:1}),t(f,{label:"绘画模型额度",prop:"drawMjCount"},{default:a(()=>[t(z,{modelValue:d.drawMjCount,"onUpdate:modelValue":l[9]||(l[9]=e=>d.drawMjCount=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带绘画积分额度"},null,8,["modelValue"])]),_:1})])):V("",!0),t(f,{label:"生成数量",prop:"count"},{default:a(()=>[t(z,{modelValue:d.count,"onUpdate:modelValue":l[10]||(l[10]=e=>d.count=e),modelModifiers:{number:!0},type:"number",placeholder:"本次生成的张数"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),t(Q,{modelValue:n(x),"onUpdate:modelValue":l[16]||(l[16]=e=>N(x)?x.value=e:null),title:"卡密列表"},{footer:a(()=>[b("span",Re,[t(h,{onClick:l[15]||(l[15]=e=>x.value=!1)},{default:a(()=>[s("关闭弹窗")]),_:1})])]),default:a(()=>[b("div",Se,[(r(!0),w(A,null,D(n(Y),(e,W)=>(r(),w("div",{key:W},M(e),1))),128))])]),_:1},8,["modelValue"])])}}});typeof X=="function"&&X(Le);export{Le as default};
