import{D as c,o as s,j as o,l as t,t as i,z as p,I as a,A as g,B as u,C as h}from"./index.c8163df9.js";const b={name:"OnboardingHeading",props:{title:{type:String,required:!0},description:{type:String,default:""}}},m={class:"relative"},v={class:"onboarding-title"},f={key:0,class:"text-center text-lg mt-3"};function $(e,r,n,_,l,d){return s(),o("div",m,[t("h1",v,i(n.title),1),n.description?(s(),o("p",f,i(n.description),1)):p("",!0)])}const C=c(b,[["render",$],["__scopeId","data-v-8a9a6bad"]]);const y={name:"OnboardingContainer",props:{withImage:{type:Boolean,default:!1}},computed:{classes(){return["onboarding-container__content",this.withImage?"onboarding-container__content--with-image":""]}}},I=e=>(u("data-v-0bedcde9"),e=e(),h(),e),O={class:"onboarding-container"},S={class:"onboarding-container__header"},w={class:"w-full"},x=I(()=>t("div",{class:"background-image"},null,-1));function B(e,r,n,_,l,d){return s(),o("div",null,[t("div",O,[t("div",S,[a(e.$slots,"header",{},void 0,!0)]),t("div",{class:g(d.classes)},[t("div",w,[a(e.$slots,"content",{},void 0,!0)])],2),a(e.$slots,"navigation",{},void 0,!0)]),x])}const H=c(y,[["render",B],["__scopeId","data-v-0bedcde9"]]);export{C as O,H as a};