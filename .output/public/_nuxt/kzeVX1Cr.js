import{d as h,r as d,$ as C,_ as A,g as s,t as g,v as k,z as t,A as o,a2 as F,x as i,a3 as S,B as f}from"./CwUTqyWM.js";const B=h({setup(){const e=d(""),a=d(!0),n=d(null),m=[u=>u&&Number(u)?!0:"You must enter a valid number."],l=C();return{id:e,rules:m,handleSubmit:()=>{e.value&&!a.value&&l.push(`/route/${e.value}`)},form:n,isSubmitDisabled:a,validateForm:()=>{n.value&&(a.value=!n.value.validate())},goAPI:()=>{l.push("/api/")}}}}),V=i("h1",null,"kuroco deploy test🥷💭",-1),$=i("h2",null,"動的ルーティング",-1),D=i("h2",null,"API接続テスト",-1);function N(e,a,n,m,l,b){const c=s("v-text-field"),r=s("v-btn"),u=s("v-form"),p=s("v-sheet"),_=s("v-container");return g(),k(F,null,[V,t(_,{class:"pa-6 pa-md-12"},{default:o(()=>[$,t(p,{class:"mx-auto",width:"300"},{default:o(()=>[t(u,{ref:"form",onSubmit:S(e.handleSubmit,["prevent"]),onChange:e.validateForm},{default:o(()=>[t(c,{modelValue:e.id,"onUpdate:modelValue":a[0]||(a[0]=v=>e.id=v),rules:e.rules,label:"id",Number:"",type:"number"},null,8,["modelValue","rules"]),t(r,{class:"mt-2",type:"submit",block:"",disabled:e.isSubmitDisabled},{default:o(()=>[f("Submit")]),_:1},8,["disabled"])]),_:1},8,["onSubmit","onChange"])]),_:1})]),_:1}),t(_,{class:"pa-6 pa-md-12"},{default:o(()=>[D,t(p,{class:"mx-auto",width:"300"},{default:o(()=>[t(r,{class:"mt-2",type:"submit",block:"",onClick:e.goAPI},{default:o(()=>[f("go check")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}const x=A(B,[["render",N]]);export{x as default};