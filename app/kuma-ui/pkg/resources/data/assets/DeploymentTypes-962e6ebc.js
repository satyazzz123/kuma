import{w as u}from"./kongponents.es-fed304fd.js";import{O as f,a as v,b as y}from"./OnboardingPage-4c1c6e47.js";import{o as b,q as h,e as V,i as z,A as w,_ as x,f as S}from"./RouteView.vue_vue_type_script_setup_true_lang-09fd82a0.js";import{_ as G}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d39e0ee5.js";import{d as M,q as D,c as C,v as N,o as r,a as p,w as e,h as o,b as s,g as a,k as d,t as O,i as T}from"./index-f4ec0be6.js";const k={class:"graph-list mb-6"},B={class:"radio-button-group"},q=M({__name:"DeploymentTypes",setup(A){const m=b(),c={standalone:h(),"multi-zone":m},_=V(),{t:i}=z(),t=D("standalone"),g=C(()=>c[t.value]);return N(function(){t.value=_.getters["config/getMulticlusterStatus"]?"multi-zone":"standalone"}),(P,n)=>(r(),p(x,null,{default:e(()=>[o(G,{title:s(i)("onboarding.routes.deployment-types.title")},null,8,["title"]),a(),o(w,null,{default:e(()=>[o(f,{"with-image":""},{header:e(()=>[o(v,null,{title:e(()=>[a(`
              Learn about deployments
            `)]),description:e(()=>[d("p",null,O(s(i)("common.product.name"))+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[d("div",k,[(r(),p(T(g.value)))]),a(),d("div",B,[o(s(u),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[a(`
              Standalone deployment
            `)]),_:1},8,["modelValue"]),a(),o(s(u),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=l=>t.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[a(`
              Multi-zone deployment
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(y,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1})]),_:1})]),_:1}))}});const E=S(q,[["__scopeId","data-v-d468ea32"]]);export{E as default};