import{J as z,D as w,T as v,u as k,a as y}from"./kongponents.es-f12d3d78.js";import{_ as h,A as V}from"./DataSource.vue_vue_type_script_setup_true_lang-122fb823.js";import{g as x,A as E,_ as C,o as L,f as A}from"./RouteView.vue_vue_type_script_setup_true_lang-bb7b7c66.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-1ae97a7f.js";import{S as B}from"./StatusBadge-6793ebff.js";import{d as I,r as R,o as m,a as _,w as e,h as s,q as S,b as t,g as u,t as T,e as $,F as D}from"./index-79776270.js";const Z=I({__name:"ZoneEgressListView",props:{page:{type:Number,required:!0},size:{type:Number,required:!0}},setup(d){const n=d,{t:i}=x();function g(p){return p.map(l=>{const{name:r}=l,c={name:"zone-egress-detail-view",params:{zoneEgress:r}},a=L(l.zoneEgressInsight??{});return{detailViewRoute:c,name:r,status:a}})}return(p,l)=>{const r=R("RouterLink");return m(),_(C,{name:"zone-egress-list-view"},{default:e(({route:c})=>[s(E,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:t(i)("zone-egresses.routes.items.breadcrumbs")}]},{title:e(()=>[S("h2",null,[s(N,{title:t(i)("zone-egresses.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[u(),s(h,{src:`/zone-egresses?size=${n.size}&page=${n.page}`},{default:e(({data:a,error:f})=>[s(t(z),null,{body:e(()=>[s(V,{class:"zone-egress-collection","data-testid":"zone-egress-collection",headers:[{label:"Name",key:"name"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":n.page,"page-size":n.size,total:a==null?void 0:a.total,items:a?g(a.items):void 0,error:f,onChange:c.update},{name:e(({row:o,rowValue:b})=>[s(r,{to:o.detailViewRoute,"data-testid":"detail-view-link"},{default:e(()=>[u(T(b),1)]),_:2},1032,["to"])]),status:e(({rowValue:o})=>[o?(m(),_(B,{key:0,status:o},null,8,["status"])):(m(),$(D,{key:1},[u(`
                  —
                `)],64))]),actions:e(({row:o})=>[s(t(w),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[s(t(v),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[s(t(k),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:e(()=>[s(t(y),{item:{to:o.detailViewRoute,label:t(i)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","onChange"])]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});const K=A(Z,[["__scopeId","data-v-853de2d9"]]);export{K as default};