import{c as J,_ as G,O as X,I as ee,G as ae}from"./kongponents.es-9f2d376a.js";import{d as K,o as p,e as E,w as n,g as S,b as a,h as r,a as te,u as se,r as l,c as B,v as M,E as O,B as le,G as oe,j as C,i as o,f as w,Z as z,t as x,F as ne,q as re,p as ie,m as ue}from"./index-5b34b65e.js";import{_ as ce}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-a8cc1871.js";import{D as pe}from"./DataOverview-4a430414.js";import{_ as me}from"./LabelList.vue_vue_type_style_index_0_lang-11916613.js";import{T as de}from"./TabsWidget-452618aa.js";import{_ as ye}from"./YamlView.vue_vue_type_script_setup_true_lang-bcce2ef9.js";import{u as ve}from"./store-76151f83.js";import{u as fe,a as he}from"./index-c89ad052.js";import{Q as F}from"./QueryParameter-70743f73.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-a940747e.js";import"./ErrorBlock-88e8a32d.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-e1caaf97.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-a04c9075.js";import"./StatusBadge-df8e2e64.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-72cdad70.js";import"./toYaml-4e00099e.js";const ge=K({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(m){const i=m;return(D,q)=>(p(),E(a(G),{class:"docs-link",appearance:"outline",target:"_blank",to:i.href},{default:n(()=>[S(a(J),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),r(`

    Documentation
  `)]),_:1},8,["to"]))}}),be=m=>(ie("data-v-652a6b0e"),m=m(),ue(),m),ke={class:"kcard-stack"},Pe={class:"kcard-border"},we=be(()=>o("p",null,[o("strong",null,"Warning"),r(` This policy is experimental. If you encountered any problem please open an
                  `),o("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),Ee={class:"kcard-border"},Se={class:"entity-heading","data-testid":"policy-single-entity"},Te={"data-testid":"policy-overview-tab"},xe=K({__name:"PolicyListView",props:{selectedPolicyName:{type:String,required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(m){const i=m,D=fe(),q=he(),Q=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],W=te(),f=se(),I=ve(),h=l(!0),_=l(!1),d=l(null),y=l(!0),v=l(!1),g=l(!1),T=l(!1),b=l({}),k=l(null),$=l(null),R=l(i.offset),V=l({headers:[{label:"Name",key:"name"},{label:"Type",key:"type"}],data:[]}),u=B(()=>I.state.policyTypesByPath[i.policyPath]),H=B(()=>I.state.policyTypes.map(e=>({label:e.name,value:e.path,selected:e.path===i.policyPath}))),Z=B(()=>I.state.policyTypes.filter(e=>(I.state.sidebar.insights.mesh.policies[e.name]??0)===0).map(e=>e.name));M(()=>f.params.mesh,function(){f.name===i.policyPath&&(h.value=!0,_.value=!1,y.value=!0,v.value=!1,g.value=!1,T.value=!1,d.value=null,L(0))}),M(()=>f.query.ns,function(){h.value=!0,_.value=!1,y.value=!0,v.value=!1,g.value=!1,T.value=!1,d.value=null,L(0)}),L(i.offset);async function L(e){R.value=e,F.set("offset",e>0?e:null),h.value=!0,d.value=null;const s=f.query.ns||null,t=f.params.mesh,P=u.value.path;try{let c;if(t!==null&&s!==null)c=[await D.getSinglePolicyEntity({mesh:t,path:P,name:s})],$.value=null;else{const N={size:O,offset:e},A=await D.getAllPolicyEntitiesFromMesh({mesh:t,path:P},N);c=A.items??[],$.value=A.next}if(c.length>0){V.value.data=c.map(A=>Y(A)),T.value=!1,_.value=!1;const N=i.selectedPolicyName??c[0].name;await U({name:N,mesh:t,path:P})}else V.value.data=[],T.value=!0,_.value=!0,v.value=!0}catch(c){c instanceof Error?d.value=c:console.error(c),_.value=!0}finally{h.value=!1,y.value=!1}}function j(e){W.push({name:"policy",params:{...f.params,policyPath:e.value}})}function Y(e){if(!e.mesh)return e;const s=e,t={name:"mesh-detail-view",params:{mesh:e.mesh}};return s.meshRoute=t,s}async function U(e){g.value=!1,y.value=!0,v.value=!1;try{const s=await D.getSinglePolicyEntity({mesh:e.mesh,path:u.value.path,name:e.name});if(s){const t=["type","name","mesh"];b.value=le(s,t),F.set("policy",b.value.name),k.value=oe(s)}else b.value={},v.value=!0}catch(s){g.value=!0,console.error(s)}finally{y.value=!1}}return(e,s)=>a(u)?(p(),C("div",{key:0,class:z(["relative",a(u).path])},[o("div",ke,[o("div",Pe,[a(u).isExperimental?(p(),E(a(ee),{key:0,"border-variant":"noBorder",class:"mb-4"},{body:n(()=>[S(a(X),{appearance:"warning"},{alertMessage:n(()=>[we]),_:1})]),_:1})):w("",!0),r(),S(pe,{"selected-entity-name":b.value.name,"page-size":a(O),error:d.value,"is-loading":h.value,"empty-state":{title:"No Data",message:`There are no ${a(u).name} policies present.`},"table-data":V.value,"table-data-is-empty":T.value,next:$.value,"page-offset":R.value,onTableAction:U,onLoadData:L},{additionalControls:n(()=>[S(a(ae),{label:"Policies",items:a(H),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:j},{"item-template":n(({item:t})=>[o("span",{class:z({"policy-type-empty":a(Z).includes(t.label)})},x(t.label),3)]),_:1},8,["items"]),r(),S(ge,{href:`${a(q)("KUMA_DOCS_URL")}/policies/${a(u).path}/?${a(q)("KUMA_UTM_QUERY_PARAMS")}`,"data-testid":"policy-documentation-link"},null,8,["href"]),r(),e.$route.query.ns?(p(),E(a(G),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"policy",params:{policyPath:i.policyPath}}},{default:n(()=>[r(`
              View all
            `)]),_:1},8,["to"])):w("",!0)]),default:n(()=>[r(`
          >
          `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),r(),o("div",Ee,[_.value===!1?(p(),E(de,{key:0,"has-error":d.value!==null,error:d.value,"is-loading":h.value,tabs:Q},{tabHeader:n(()=>[o("h1",Se,x(a(u).name)+": "+x(b.value.name),1)]),overview:n(()=>[S(me,{"has-error":g.value,"is-loading":y.value,"is-empty":v.value},{default:n(()=>[o("div",Te,[o("ul",null,[(p(!0),C(ne,null,re(b.value,(t,P)=>(p(),C("li",{key:P},[o("h4",null,x(P),1),r(),o("p",null,x(t),1)]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"]),r(),k.value!==null?(p(),E(ye,{key:0,id:"code-block-policy",class:"mt-4","has-error":g.value,"is-loading":y.value,"is-empty":v.value,content:k.value,"is-searchable":""},null,8,["has-error","is-loading","is-empty","content"])):w("",!0)]),"affected-dpps":n(()=>[k.value!==null?(p(),E(ce,{key:0,mesh:k.value.mesh,"policy-name":k.value.name,"policy-type":a(u).path},null,8,["mesh","policy-name","policy-type"])):w("",!0)]),_:1},8,["has-error","error","is-loading"])):w("",!0)])])],2)):w("",!0)}});const We=_e(xe,[["__scopeId","data-v-652a6b0e"]]);export{We as default};