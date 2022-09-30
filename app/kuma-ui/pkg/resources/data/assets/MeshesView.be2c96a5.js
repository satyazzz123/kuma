import{_ as M,P as B,a7 as A,m as V,z as H,A as z,K as E,n as T,s as F,$ as K,a1 as N,h as s,e as f,w as h,r as b,o as a,b as w,i as o,t as m,p as C,F as I,k as L,f as k,u as P,x as O}from"./index.f2463021.js";import{g as R}from"./tableDataUtils.233f95a0.js";import{F as Y}from"./FrameSkeleton.2e66f46d.js";import{D as W}from"./DataOverview.e6547ee7.js";import{T as j}from"./TabsWidget.817a2fd6.js";import{Y as q}from"./YamlView.dbf4ab2f.js";import{L as G}from"./LabelList.c9504cac.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.79e60fc9.js";import"./ErrorBlock.6b7b6a0a.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.92dd8129.js";import"./index.58caa11d.js";import"./CodeBlock.f31221ad.js";const U={name:"MeshesView",components:{FrameSkeleton:Y,DataOverview:W,TabsWidget:j,YamlView:q,LabelList:G},data(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Meshes present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#resources",title:"Resources"}],entity:{},rawEntity:{},pageSize:B,next:null,itemsPerCol:3,meshInsight:A()}},computed:{...V({policies:t=>t.policies}),counts(){const t=this.policies.map(i=>{var p;return{title:i.pluralDisplayName,value:((p=this.meshInsight.policies[i.name])==null?void 0:p.total)||0}});return[{title:"Data plane proxies",value:this.meshInsight.dataplanes.total},...t]},countCols(){return Math.ceil(this.counts.length/this.itemsPerCol)}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.hasError=!1,this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,this.tableDataIsEmpty=!1,this.loadData()}},beforeMount(){this.init()},methods:{init(){this.loadData()},onCreateClick(){H.logger.info(z.CREATE_MESH_CLICKED)},tableAction(t){const i=t;this.getEntity(i)},async loadData(t="0"){this.isLoading=!0,this.isEmpty=!1;const i=this.$route.params.mesh;let p;i!=="all"&&(p=this.$route.params.mesh);try{const{data:y,next:e}=await R({getSingleEntity:E.getMesh.bind(E),getAllEntities:E.getAllMeshes.bind(E),size:this.pageSize,offset:t,query:p});this.next=e,y.length?(this.tableData.data=[...y],this.tableDataIsEmpty=!1,this.isEmpty=!1,this.getEntity({name:y[0].name})):(this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0,this.entityIsEmpty=!0)}catch(y){this.hasError=!0,this.isEmpty=!0,console.error(y)}finally{this.isLoading=!1}},getEntity(t){if(this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,t&&t!==null)return E.getMesh({name:t.name}).then(i=>{if(i){E.getMeshInsights({name:t.name}).then(n=>{this.meshInsight=n});const p=T(i,["type","name"]),y=()=>{const n=Object.entries(T(i,["mtls","logging","metrics","tracing"])),g=[];return n.forEach(v=>{const _=v[0],l=v[1]||null;if(l&&l.enabledBackend){const d=l.enabledBackend,u=l.backends.find(D=>D.name===d);u&&g.push({label:_,value:{type:u.type,name:u.name}})}else if(l&&l.defaultBackend){const d=l.defaultBackend,u=l.backends.find(D=>D.name===d);u&&g.push({label:_,value:{type:u.type,name:u.name}})}else if(l&&l.backends){const d=l.backends[0];d&&g.push({label:_,value:{type:d.type,name:d.name}})}else g.push({label:_,value:null})}),g},e=()=>{const{routing:n}=i;return n&&n.localityAwareLoadBalancing};this.entity={basicData:p,extendedData:y(),localityEnabled:e()},this.rawEntity=F(i)}else this.entity={},this.entityIsEmpty=!0}).catch(i=>{this.entityHasError=!0,console.error(i)}).finally(()=>{setTimeout(()=>{this.entityIsLoading=!1},"500")});setTimeout(()=>{this.entityIsEmpty=!0,this.entityIsLoading=!1},"500")},formatValue(t){return t?t.toLocaleString("en").toString():0},readableDate(t){return K(t)},rawDate(t){return N(t)}}},x=t=>(P("data-v-0fe9e439"),t=t(),O(),t),Z={class:"all-meshes"},J=x(()=>o("span",{class:"custom-control-icon"}," + ",-1)),Q=k(" Create Mesh "),X={key:0},$={key:0},ee={key:1},te={key:2},ae={key:3},se={key:4},ie={key:0},ne={key:0,class:"label-cols"},oe=k(" Disabled "),le=x(()=>o("h4",null,"Locality Aware Loadbalancing",-1)),re={key:0},ce=k(" Enabled "),he=k(" Disabled "),me={class:"config-wrapper"};function de(t,i,p,y,e,n){const g=b("KButton"),v=b("DataOverview"),_=b("KBadge"),l=b("LabelList"),d=b("YamlView"),u=b("TabsWidget"),D=b("FrameSkeleton");return a(),s("div",Z,[f(D,null,{default:h(()=>[f(v,{"page-size":e.pageSize,"has-error":e.hasError,"is-loading":e.isLoading,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.tableDataIsEmpty,next:e.next,onTableAction:n.tableAction,onLoadData:i[0]||(i[0]=r=>n.loadData(r))},{additionalControls:h(()=>[f(g,{class:"add-mesh-button",appearance:"primary",to:{path:"/wizard/mesh"},onClick:n.onCreateClick},{default:h(()=>[J,Q]),_:1},8,["onClick"])]),_:1},8,["page-size","has-error","is-loading","empty-state","table-data","table-data-is-empty","next","onTableAction"]),e.isEmpty===!1?(a(),w(u,{key:0,"has-error":e.hasError,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:h(()=>[e.entity.basicData?(a(),s("div",X,[o("h3",null," Mesh: "+m(e.entity.basicData.name),1)])):C("",!0)]),overview:h(()=>[f(l,{"has-error":e.entityHasError,"is-loading":e.entityIsLoading,"is-empty":e.entityIsEmpty},{default:h(()=>[o("div",null,[o("ul",null,[(a(!0),s(I,null,L(e.entity.basicData,(r,c)=>(a(),s("li",{key:c},[c==="creationTime"?(a(),s("h4",$," Created ")):c==="modificationTime"?(a(),s("h4",ee," Last Modified ")):(a(),s("h4",te,m(c),1)),c==="creationTime"||c==="modificationTime"?(a(),s("p",ae,[k(m(n.readableDate(r))+" ",1),o("em",null,"("+m(n.rawDate(r))+")",1)])):(a(),s("p",se,m(r),1))]))),128))])]),e.entity.extendedData&&e.entity.extendedData.length?(a(),s("div",ie,[o("ul",null,[(a(!0),s(I,null,L(e.entity.extendedData,(r,c)=>(a(),s("li",{key:c},[o("h4",null,m(r.label),1),r.value?(a(),s("p",ne,[o("span",null,m(r.value.type),1),o("span",null,m(r.value.name),1)])):(a(),w(_,{key:1,appearance:"danger"},{default:h(()=>[oe]),_:1}))]))),128)),o("li",null,[le,e.entity.localityEnabled?(a(),s("p",re,[f(_,{appearance:"success"},{default:h(()=>[ce]),_:1})])):(a(),w(_,{key:1,appearance:"danger"},{default:h(()=>[he]),_:1}))])])])):C("",!0)]),_:1},8,["has-error","is-loading","is-empty"]),o("div",me,[f(d,{"has-error":e.entityHasError,"is-loading":e.entityIsLoading,"is-empty":e.entityIsEmpty,content:e.rawEntity},null,8,["has-error","is-loading","is-empty","content"])])]),resources:h(()=>[f(l,{"has-error":e.entityHasError,"is-loading":e.entityIsLoading,"is-empty":e.entityIsEmpty},{default:h(()=>[(a(!0),s(I,null,L(n.countCols,r=>(a(),s("div",{key:r},[o("ul",null,[(a(!0),s(I,null,L(n.counts.slice((r-1)*e.itemsPerCol,r*e.itemsPerCol),(c,S)=>(a(),s("li",{key:S},[o("h4",null,m(c.title),1),o("p",null,m(n.formatValue(c.value)),1)]))),128))])]))),128))]),_:1},8,["has-error","is-loading","is-empty"])]),_:1},8,["has-error","is-loading","tabs"])):C("",!0)]),_:1})])}const Le=M(U,[["render",de],["__scopeId","data-v-0fe9e439"]]);export{Le as default};