import{d as h,W as L,z as I,c as b,o as r,e as u,k as n,B as g,g as o,h as O,w as A,f as k,T as B,I as j,X as D,a as E,b as d,m as H,t as s,E as q,F as S,q as C,v as N,x as P}from"./index-5cc1bd9e.js";import{f as y,h as w}from"./RouteView.vue_vue_type_script_setup_true_lang-07b4cab0.js";const R=["aria-expanded"],U={key:0,class:"accordion-item-content","data-testid":"accordion-item-content"},V=h({__name:"AccordionItem",setup(p){const e=L("parentAccordion"),t=I(null),c=b(()=>e===void 0?!1:e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.includes(t.value):t.value===e.active.value);e!==void 0&&(t.value=e.count.value++);function i(){c.value?v():l()}function v(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.splice(e.active.value.indexOf(t.value),1):e.active.value=null)}function l(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.push(t.value):e.active.value=t.value)}function _(a){a instanceof HTMLElement&&(a.style.height=`${a.scrollHeight}px`)}function m(a){a instanceof HTMLElement&&(a.style.height="auto")}return(a,f)=>(r(),u("li",{class:j(["accordion-item",{active:c.value}])},[n("button",{class:"accordion-item-header",type:"button","aria-expanded":c.value?"true":"false","data-testid":"accordion-item-button",onClick:i},[g(a.$slots,"accordion-header",{},void 0,!0)],8,R),o(),O(B,{name:"accordion",onEnter:_,onAfterEnter:m,onBeforeLeave:_},{default:A(()=>[c.value?(r(),u("div",U,[g(a.$slots,"accordion-content",{},void 0,!0)])):k("",!0)]),_:3})],2))}});const pe=y(V,[["__scopeId","data-v-23e6bd5e"]]),M={class:"accordion-list"},z=h({__name:"AccordionList",props:{initiallyOpen:{type:[Number,Array],required:!1,default:null},multipleOpen:{type:Boolean,required:!1,default:!1}},setup(p){const e=p,t=I(0),c=I(e.initiallyOpen!==null?e.initiallyOpen:e.multipleOpen?[]:null);return D("parentAccordion",{multipleOpen:e.multipleOpen,active:c,count:t}),(i,v)=>(r(),u("ul",M,[g(i.$slots,"default",{},void 0,!0)]))}});const _e=y(z,[["__scopeId","data-v-bdbadd5e"]]),F={class:"stack"},W={key:1},X={class:"row"},G={class:"header"},J={class:"header"},K=["data-testid"],Q={class:"type"},Y=h({__name:"SubscriptionDetails",props:{subscription:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},setup(p){const e=p,{t}=w(),c=b(()=>{var v;let i;if("controlPlaneInstanceId"in e.subscription){const{lastUpdateTime:l,total:_,...m}=e.subscription.status;i=m}else i=((v=e.subscription.status)==null?void 0:v.stat)??{};return i?Object.entries(i).map(([l,_])=>{const{responsesSent:m="0",responsesAcknowledged:a="0",responsesRejected:f="0"}=_;return{type:l,responsesSent:m,responsesAcknowledged:a,responsesRejected:f}}):[]});return(i,v)=>(r(),u("div",F,[c.value.length===0?(r(),E(d(q),{key:0,appearance:"info"},{alertIcon:A(()=>[O(d(H),{icon:"portal"})]),alertMessage:A(()=>[o(s(d(t)("common.detail.subscriptions.no_stats",{id:e.subscription.id})),1)]),_:1})):(r(),u("div",W,[n("div",X,[n("div",G,s(d(t)("common.detail.subscriptions.type")),1),o(),n("div",J,s(d(t)("common.detail.subscriptions.responses_sent_acknowledged")),1)]),o(),(r(!0),u(S,null,C(c.value,(l,_)=>(r(),u("div",{key:_,class:"row","data-testid":`subscription-status-${l.type}`},[n("div",Q,s(d(t)(`http.api.property.${l.type}`)),1),o(),n("div",null,s(l.responsesSent)+"/"+s(l.responsesAcknowledged),1)],8,K))),128))]))]))}});const ve=y(Y,[["__scopeId","data-v-ae4644aa"]]),Z=""+new URL("icon-deployed-code-e3c999ba.svg",import.meta.url).href,ee=""+new URL("icon-connected-037e001a.svg",import.meta.url).href,te=""+new URL("icon-disconnected-ba3c2624.svg",import.meta.url).href,$=p=>(N("data-v-0cbdfb03"),p=p(),P(),p),se={class:"subscription-header"},ne={class:"instance-id"},oe=$(()=>n("img",{src:Z},null,-1)),ae=$(()=>n("img",{src:ee},null,-1)),ce={key:0},ie=$(()=>n("img",{src:te},null,-1)),re={class:"responses-sent-acknowledged"},le=h({__name:"SubscriptionHeader",props:{subscription:{type:Object,required:!0}},setup(p){const e=p,{t,formatIsoDate:c}=w(),i=b(()=>"globalInstanceId"in e.subscription?e.subscription.globalInstanceId:null),v=b(()=>"controlPlaneInstanceId"in e.subscription?e.subscription.controlPlaneInstanceId:null),l=b(()=>e.subscription.connectTime?c(e.subscription.connectTime):null),_=b(()=>e.subscription.disconnectTime?c(e.subscription.disconnectTime):null),m=b(()=>{var x;const{responsesSent:a=0,responsesAcknowledged:f=0,responsesRejected:T=0}=((x=e.subscription.status)==null?void 0:x.total)??{};return{responsesSent:a,responsesAcknowledged:f,responsesRejected:T}});return(a,f)=>(r(),u("header",se,[n("span",ne,[oe,o(),i.value?(r(),u(S,{key:0},[n("b",null,s(d(t)("http.api.property.globalInstanceId")),1),o(": "+s(i.value),1)],64)):v.value?(r(),u(S,{key:1},[n("b",null,s(d(t)("http.api.property.controlPlaneInstanceId")),1),o(": "+s(v.value),1)],64)):k("",!0)]),o(),n("span",null,[ae,o(),n("b",null,s(d(t)("common.detail.subscriptions.connect_time")),1),o(": "+s(l.value),1)]),o(),_.value?(r(),u("span",ce,[ie,o(),n("b",null,s(d(t)("common.detail.subscriptions.disconnect_time")),1),o(": "+s(_.value),1)])):k("",!0),o(),n("span",re,s(d(t)("common.detail.subscriptions.responses_sent_acknowledged"))+`:

      `+s(m.value.responsesSent)+"/"+s(m.value.responsesAcknowledged),1)]))}});const me=y(le,[["__scopeId","data-v-0cbdfb03"]]);export{pe as A,me as S,_e as a,ve as b};