import{d as h,R as n,M as y,h as s,e as d,E as g,N as r,w as l,b as v,p,o as a,i as o,F as i,k as B,t,f as c,B as E,Q as w,S as k,u as x,x as S,_ as b}from"./index.f2463021.js";const I=e=>(x("data-v-7a254205"),e=e(),S(),e),N={class:"error-block"},C={class:"card-icon mb-3"},V=c(" An error has occurred while trying to load this data. "),K=I(()=>o("summary",null,"Details",-1)),A={key:0,class:"badge-list"},D=h({__name:"ErrorBlock",props:{error:{type:[Error,n],required:!1,default:null}},setup(e){const u=e,_=y(()=>u.error instanceof n?u.error.causes:[]);return(F,q)=>(a(),s("div",N,[d(r(w),{"cta-is-hidden":""},g({title:l(()=>[o("div",C,[d(r(E),{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),o("p",null,[e.error instanceof r(n)?(a(),s(i,{key:0},[c(t(e.error.message),1)],64)):(a(),s(i,{key:1},[V],64))])]),_:2},[r(_).length>0?{name:"message",fn:l(()=>[o("details",null,[K,o("ul",null,[(a(!0),s(i,null,B(r(_),(m,f)=>(a(),s("li",{key:f},[o("b",null,[o("code",null,t(m.field),1)]),c(": "+t(m.message),1)]))),128))])])]),key:"0"}:void 0]),1024),e.error instanceof r(n)?(a(),s("div",A,[e.error.code?(a(),v(r(k),{key:0,appearance:"warning"},{default:l(()=>[c(t(e.error.code),1)]),_:1})):p("",!0),d(r(k),{appearance:"warning"},{default:l(()=>[c(t(e.error.statusCode),1)]),_:1})])):p("",!0)]))}});const L=b(D,[["__scopeId","data-v-7a254205"]]);export{L as E};