import{d as l,o,a as d,w as t,h as e,i as u,b as s,g as i,k as p}from"./index-3a01b114.js";import{g as c,A as m,_}from"./RouteView.vue_vue_type_script_setup_true_lang-1eb45145.js";import{_ as f}from"./RouteTitle.vue_vue_type_script_setup_true_lang-2ca7a647.js";import{E as h}from"./EnvoyData-7f71392c.js";import{a as w}from"./dataplane-30467516.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c0549c9b.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-e854f5d8.js";const C=l({__name:"DataPlaneClustersView",props:{data:{}},setup(r){const a=r,{t:n}=c();return(v,y)=>(o(),d(_,{name:"data-plane-clusters-view","data-testid":"data-plane-clusters-view"},{default:t(()=>[e(m,null,{title:t(()=>[u("h2",null,[e(f,{title:s(n)("data-planes.routes.item.navigation.data-plane-clusters-view"),render:!0},null,8,["title"])])]),default:t(()=>[i(),e(s(p),null,{body:t(()=>[e(h,{status:s(w)(a.data.dataplane,a.data.dataplaneInsight).status,resource:"Data Plane Proxy",src:`/meshes/${a.data.mesh}/dataplanes/${a.data.name}/data-path/clusters`,"query-key":"envoy-data-clusters-data-plane"},null,8,["status","src"])]),_:1})]),_:1})]),_:1}))}});export{C as default};