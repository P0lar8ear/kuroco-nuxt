import{E as o,r as u,F as f,G as d,H as v,I as l,e as i,J as h,K as m}from"./CWcDu1Bx.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),l()&&(i(()=>{r.dispose()}),h(()=>{s.value=!0}),m(()=>{s.value=!1})),r}export{U as u};