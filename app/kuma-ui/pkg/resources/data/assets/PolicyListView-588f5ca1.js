import{h as E,q as L,E as $,j as x,K as I,k as N,f as B,A,i as T,n as S,o as O,_ as V}from"./RouteView.vue_vue_type_script_setup_true_lang-07b4cab0.js";import{d as w,u as K,r as U,o as s,e as f,h as i,w as o,F as z,q,I as F,b as e,g as a,t as n,k as r,l as R,a as p,Y as b,f as v,R as Y,D as j,m as G,n as X}from"./index-5cc1bd9e.js";import{P as Z}from"./PolicyTypeTag-63feeb14.js";import{n as D}from"./notEmpty-7f452b20.js";import{_ as H}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9295e5a4.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-bebc6d7a.js";const J={class:"policy-list-content"},M={class:"policy-count"},Q={class:"policy-list"},W={class:"stack"},ee={class:"description"},te={class:"description-content"},oe={class:"description-actions"},ae={class:"visually-hidden"},se={key:0},ie=w({__name:"PolicyList",props:{pageNumber:{},pageSize:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{}},emits:["change"],setup(P,{emit:d}){const t=P,{t:l}=E(),g=K();return(u,y)=>{const h=U("RouterLink");return s(),f("div",J,[i(e(R),{class:"policy-type-list","data-testid":"policy-type-list"},{body:o(()=>[(s(!0),f(z,null,q(t.policyTypes,(m,_)=>{var c,k,C;return s(),f("div",{key:_,class:F(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":m.path===t.currentPolicyType.path}])},[i(h,{class:"policy-type-link",to:{name:"policies-list-view",params:{mesh:e(g).params.mesh,policyPath:m.path}},"data-testid":`policy-type-link-${m.name}`},{default:o(()=>[a(n(m.name),1)]),_:2},1032,["to","data-testid"]),a(),r("div",M,n(((C=(k=(c=t.meshInsight)==null?void 0:c.policies)==null?void 0:k[m.name])==null?void 0:C.total)??0),1)],2)}),128))]),_:1}),a(),r("div",Q,[r("div",W,[i(e(R),null,{body:o(()=>[r("div",ee,[r("div",te,[r("h3",null,[i(Z,{"policy-type":t.currentPolicyType.name},{default:o(()=>[a(n(e(l)("policies.collection.title",{name:t.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),a(),r("p",null,n(e(l)("policies.collection.description")),1)]),a(),r("div",oe,[t.currentPolicyType.isExperimental?(s(),p(e(b),{key:0,appearance:"warning"},{default:o(()=>[a(n(e(l)("policies.collection.beta")),1)]),_:1})):v("",!0),a(),t.currentPolicyType.isInbound?(s(),p(e(b),{key:1,appearance:"neutral"},{default:o(()=>[a(n(e(l)("policies.collection.inbound")),1)]),_:1})):v("",!0),a(),t.currentPolicyType.isOutbound?(s(),p(e(b),{key:2,appearance:"neutral"},{default:o(()=>[a(n(e(l)("policies.collection.outbound")),1)]),_:1})):v("",!0),a(),i(L,{href:e(l)("policies.href.docs",{name:t.currentPolicyType.name}),"data-testid":"policy-documentation-link"},{default:o(()=>[r("span",ae,n(e(l)("common.documentation")),1)]),_:1},8,["href"])])])]),_:1}),a(),i(e(R),null,{body:o(()=>{var m,_;return[t.policyError!==void 0?(s(),p($,{key:0,error:t.policyError},null,8,["error"])):(s(),p(x,{key:1,class:"policy-collection","data-testid":"policy-collection","empty-state-message":e(l)("common.emptyState.message",{type:`${t.currentPolicyType.name} policies`}),"empty-state-cta-to":e(l)("policies.href.docs",{name:t.currentPolicyType.name}),"empty-state-cta-text":e(l)("common.documentation"),headers:[{label:"Name",key:"name"},t.currentPolicyType.isTargetRefBased?{label:"Target ref",key:"targetRef"}:void 0,{label:"Actions",key:"actions",hideLabel:!0}].filter(e(D)),"page-number":t.pageNumber,"page-size":t.pageSize,total:(m=t.policyCollection)==null?void 0:m.total,items:(_=t.policyCollection)==null?void 0:_.items,error:t.policyError,onChange:y[0]||(y[0]=c=>d("change",c))},{name:o(({rowValue:c})=>[i(h,{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:t.currentPolicyType.path,policy:c}}},{default:o(()=>[a(n(c),1)]),_:2},1032,["to"])]),targetRef:o(({row:c})=>[t.currentPolicyType.isTargetRefBased?(s(),p(e(b),{key:0,appearance:"neutral"},{default:o(()=>[a(n(c.spec.targetRef.kind),1),c.spec.targetRef.name?(s(),f("span",se,[a(":"),r("b",null,n(c.spec.targetRef.name),1)])):v("",!0)]),_:2},1024)):(s(),f(z,{key:1},[a(n(e(l)("common.detail.none")),1)],64))]),actions:o(({row:c})=>[i(e(Y),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:o(()=>[i(e(j),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:o(()=>[i(e(G),{color:e(I),icon:"more",size:e(N)},null,8,["color","size"])]),_:1})]),items:o(()=>[i(e(X),{item:{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:t.currentPolicyType.path,policy:c.name}},label:e(l)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:1},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error"]))]}),_:1})])])])}}});const ce=B(ie,[["__scopeId","data-v-4f05fbc6"]]),de=w({__name:"PolicyListView",props:{page:{},size:{}},setup(P){const d=P,{t}=E();return(l,g)=>(s(),p(V,{name:"policies-list-view"},{default:o(({route:u})=>[i(A,null,{title:o(()=>[r("h2",null,[i(H,{title:e(t)("policies.routes.items.title"),render:!0},null,8,["title"])])]),default:o(()=>[a(),i(T,{src:"/*/policy-types"},{default:o(({data:y,error:h})=>[h?(s(),p($,{key:0,error:h},null,8,["error"])):y===void 0?(s(),p(S,{key:1})):y.policies.length===0?(s(),p(O,{key:2})):(s(),p(T,{key:3,src:`/meshes/${u.params.mesh}/policy-path/${u.params.policyPath}?page=${d.page}&size=${d.size}`},{default:o(({data:m,error:_})=>[i(T,{src:`/mesh-insights/${u.params.mesh}`},{default:o(({data:c})=>[i(ce,{"page-number":d.page,"page-size":d.size,"current-policy-type":y.policies.find(k=>k.path===u.params.policyPath)??y.policies[0],"policy-types":y.policies,"mesh-insight":c,"policy-collection":m,"policy-error":_,onChange:u.update},null,8,["page-number","page-size","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","onChange"])]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:1}))}});export{de as default};