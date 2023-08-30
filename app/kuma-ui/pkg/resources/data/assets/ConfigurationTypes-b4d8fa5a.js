import{d as y,z as V,J as h,c as i,o as p,a as d,w as e,h as o,b as r,g as a,k as m,i as x,O as l}from"./index-5cc1bd9e.js";import{O as G,a as C,b as k}from"./OnboardingPage-98d48f5d.js";import{B as M,F as B,G as O,e as P,h as T,A as w,_ as N,f as K}from"./RouteView.vue_vue_type_script_setup_true_lang-07b4cab0.js";import{_ as S}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9295e5a4.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-bebc6d7a.js";const U={class:"graph-list mb-6"},z={class:"radio-button-group"},A=y({__name:"ConfigurationTypes",setup(I){const c=M(),g=B(),_={postgres:O(),memory:g,kubernetes:c},u=P(),{t:f}=T(),t=V("kubernetes");h(function(){t.value=u.getters["config/getConfigurationType"]});const v=i(()=>u.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-create-mesh"),b=i(()=>_[t.value]);return(D,n)=>(p(),d(N,null,{default:e(()=>[o(S,{title:r(f)("onboarding.routes.configuration-types.title")},null,8,["title"]),a(),o(w,null,{default:e(()=>[o(G,{"with-image":""},{header:e(()=>[o(C,null,{title:e(()=>[a(`
              Learn about configuration storage
            `)]),_:1})]),content:e(()=>[m("div",U,[(p(),d(x(b.value)))]),a(),m("div",z,[o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),name:"deployment","selected-value":"kubernetes"},{default:e(()=>[a(`
              Kubernetes
            `)]),_:1},8,["modelValue"]),a(),o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=s=>t.value=s),name:"deployment","selected-value":"postgres"},{default:e(()=>[a(`
              Postgres
            `)]),_:1},8,["modelValue"]),a(),o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=s=>t.value=s),name:"deployment","selected-value":"memory"},{default:e(()=>[a(`
              Memory
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(k,{"next-step":v.value,"previous-step":"onboarding-deployment-types"},null,8,["next-step"])]),_:1})]),_:1})]),_:1}))}});const q=K(A,[["__scopeId","data-v-b71119a9"]]);export{q as default};