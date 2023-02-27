var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,i=(e,t)=>{for(var l in t||(t={}))u.call(t,l)&&n(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&n(e,l,t[l]);return e};"undefined"!=typeof require&&require;import{d as r,r as o,a as d,o as p,c as f,w as c,u as v,b as h,N as m,e as y,f as b,g,h as C,i as w,j as x,k as _,l as B,m as k,R as A,n as q,v as R,p as D,q as T,s as S,t as I,x as U,y as V,z as E,F as L,A as F,B as O,C as N,D as z,E as j,G as M,H as P,I as W,J as $,K as J,L as G,M as H,O as K,P as Z,Q,S as X,T as Y,U as ee,V as te,W as le,X as ae,Y as ue,Z as se,_ as ne,$ as ie,a0 as re,a1 as oe,a2 as de,a3 as pe,a4 as fe,a5 as ce,a6 as ve,a7 as he,a8 as me,a9 as ye,aa as be,ab as ge,ac as Ce,ad as we,ae as xe,af as _e,ag as Be}from"./vendor.1595ced3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const ke={class:"ui-logo"},Ae=g("img",{src:"/img/logo.png",alt:"碧蓝航线CD计算工具"},null,-1),qe=B("碧蓝航线CD计算工具·Beta");var Re,De,Te,Se,Ie,Ue,Ve,Ee,Le,Fe,Oe,Ne,ze=r({setup(e){function t(e){return k(A,{to:e.key},{default:()=>e.label})}const l=[{label:"CD模拟",key:"/"},{label:"舰娘管理",key:"/ships"},{label:"设置",key:"/config"}],a=o(location.hash.substring(1)),u=o(!1);return(e,s)=>{const n=d("router-view");return p(),f(v(_),null,{default:c((()=>[h(v(m),null,{default:c((()=>[h(v(x),{style:{height:"100%"}},{default:c((()=>[h(v(y),{class:"header-menu",bordered:""},{default:c((()=>[h(v(b),{align:"center"},{default:c((()=>[g("div",ke,[Ae,h(v(C),null,{default:c((()=>[qe])),_:1})]),h(v(w),{value:a.value,"onUpdate:value":s[0]||(s[0]=e=>a.value=e),mode:"horizontal",collapsed:u.value,options:l,"render-label":t},null,8,["value","collapsed"])])),_:1})])),_:1}),h(v(x),null,{default:c((()=>[h(n)])),_:1})])),_:1})])),_:1})])),_:1})}}});function je(e,t){return e/6/Math.sqrt(3.14*(t+100))}function Me(e){let t=lt.state.shipTemplates[e.templateId];if(!t)return 0;let l=t.reload,a=e.lvl,u=function(e){switch(e){case"陌生":return 1;case"友好":return 1.01;case"喜欢":return 1.03;case"爱":return 1.06;case"誓约":return 1.09;case"誓约200":return 1.12}return 1}(e.intimacy),s=(l[0]+(a-1)*l[1]/1e3+(a-100)*l[2]/1e3+l[3])*u+l[4];return Math.floor(s)}function Pe(e,t){if(e.type===Le.Self)return t.id===e.args;if(e.type===Le.ByType)return Ke(e.args,t.type);if(e.type===Le.ByCamp)return Ke(e.args,t.camp);if(e.type===Le.And){for(let l of e.args)if(!Pe(l,t))return!1;return!0}if(e.type===Le.Or){for(let l of e.args)if(Pe(l,t))return!0;return!1}}function We(e,t){return e.off||e.target&&!Pe(e.target,t)?"off":e.removeTrigger||e.trigger.type!==Ie.BattleStart||e.duration?"condition":"on"}function $e(e,t){let l={ReloadAdd:0,ReloadAddRatio:0,CDAddRatio:0,FirstCDAddRatio:0};for(let a of e)"on"===We(a,t)&&(l[a.type]+=a.value);return l}function Je(e){var t;let l=0;for(let a=3;a<5;++a){let u=e[a];if(0===u)continue;let s=lt.state.equips[u];if(s)for(let e of(null==(t=s.buffs)?void 0:t.length)?s.buffs:[])if(e.type===Te.ReloadAdd&&e.trigger.type===Ie.Equip){if(!e.value)continue;l+=e.value}}return l}function Ge(e){return e===Ve.BB||e===Ve.BC||e==Ve.BBCV}function He(e,t){if(!e.id)return{};let l={ids:e.equips},a=lt.state.ships[e.id],u=lt.state.shipTemplates[a.templateId],s=Je(e.equips),n=function(e,t,l){let a={};for(let u in t)a[u]=t[u];for(let u of e){if(0===u)continue;let e=lt.state.equips[u];if(!e||!e.buffs)continue;let t=$e(e.buffs,l);for(let l in t)a[l]=(a[l]||0)+t[l]}return a}(e.equips,t,u),i=a.reload+s+(n.ReloadAdd||0),r=i*(1+(n.ReloadAddRatio||0)/100);l.reload={base:a.reload,equip:s,extra:n,real:r};let o=0;if(Ge(u.type)){if(0===e.equips[0])return l;o=lt.state.equips[e.equips[0]].cd||0}else{let t=0,l=0;for(let a=0;a<3;++a){let s=e.equips[a];0!==s&&(t+=u.equipCnt[a],l+=u.equipCnt[a]*(lt.state.equips[s].cd||100))}o=2.2*l/t}return l.rawEquipCD=o,l.dispCD=je(o,i).toFixed(2),l.realCD=je(o,r)*(1+(n.CDAddRatio||0)/100),l}function Ke(e,t){for(let l of e)if(l===t)return!0;return!1}function Ze(e,t){return t?Ge(t)?e.BB:t===Ve.CV?e.CV:t===Ve.CVL?e.CVL:0:0}(De=Re||(Re={})).BB="BB",De.CV="CV",(Se=Te||(Te={})).ReloadAdd="ReloadAdd",Se.ReloadAddRatio="ReloadAddRatio",Se.CDAddRatio="CDAddRatio",(Ue=Ie||(Ie={})).Equip="Equip",Ue.Tech="Tech",Ue.BattleStart="BattleStart",Ue.WeaponReady="WeaponReady",Ue.UseWeapon="UseWeapon",Ue.Scheduled="Scheduled",(Ee=Ve||(Ve={}))[Ee.BC=4]="BC",Ee[Ee.BB=5]="BB",Ee[Ee.CVL=6]="CVL",Ee[Ee.CV=7]="CV",Ee[Ee.BBCV=10]="BBCV",(Fe=Le||(Le={})).Self="Self",Fe.ByType="Type",Fe.ByCamp="ByCamp",Fe.And="And",Fe.Or="Or",(Ne=Oe||(Oe={}))[Ne.artillery=4]="artillery",Ne[Ne.fighter=7]="fighter",Ne[Ne.torpedo_bomber=8]="torpedo_bomber",Ne[Ne.dive_bomber=9]="dive_bomber",Ne[Ne.auxiliaryCV=101]="auxiliaryCV",Ne[Ne.auxiliaryBB=102]="auxiliaryBB";function Qe(e,t){if(!t)return!1;if(t.type===Ie.Scheduled)return e.ts>(t.args&&t.args[0]||0);if(t.type===Ie.UseWeapon){let l=t.args&&t.args[0]||1;return e.useAt.length>=l}if(t.type===Ie.WeaponReady){let l=t.args&&t.args[0]||1;return e.readyAt.length>=l}return!1}function Xe(e,t){if(!t.trigger)return!1;if(t.trigger.type===Ie.Equip)return!1;if(t.trigger.type===Ie.BattleStart)return!(t.duration&&e.ts>30*t.duration)&&!Qe(e,t.removeTrigger);if(t.trigger.type===Ie.Scheduled){let l=t.trigger.args;if(!l)return!(t.duration&&e.ts>30*t.duration);if(t.duration){let a=30*t.duration,u=30*l[0],s=30*l[1];if(e.ts<s)return!1;if((e.ts-s)%u>=a)return!1}return!Qe(e,t.removeTrigger)}if(t.trigger.type===Ie.UseWeapon){let l=e.useAt.length;if(0===l)return!1;let a=t.trigger.args||[1,1];if(l<a[1])return!1;if((l-a[1])%a[0]!=0)return!1;if(t.duration){if(e.ts-e.useAt.slice(-1)[0]>=30*t.duration)return!1}return!Qe(e,t.removeTrigger)}if(t.trigger.type===Ie.WeaponReady){let l=e.readyAt.length;if(0===l)return!1;let a=t.trigger.args||[1,1];if(l<a[1])return!1;if((l-a[1])%a[0]!=0)return!1;if(t.duration){if(e.ts-e.readyAt.slice(-1)[0]>=30*t.duration)return!1}return!Qe(e,t.removeTrigger)}return 0}function Ye(e,t){let l={ReloadAdd:0,ReloadAddRatio:0,CDAddRatio:0};for(let a of e)Xe(t,a)&&(l[a.type]+=a.value);return l}function et(e){let t=[],l=[];for(let n of e.ships){if(!n.id)continue;let t=lt.state.ships[n.id],a=lt.state.shipTemplates[t.templateId],u=Ge(a.type)?Re.BB:Re.CV,s={id:n.id,ship:n,refShip:t,templ:a,cdType:u,reload:t.reload+Je(n.equips)+Ze(e.tech,a.type),buffs:[],progress:0,readyAt:[],useAt:[],rawCD:0};if(s.cdType===Re.BB)s.rawCD=(lt.state.equips[n.equips[0]]||{}).cd||NaN;else{let e=0,t=0;for(let l=0;l<3;++l){let u=n.equips[l];0!==u&&(e+=a.equipCnt[l],t+=a.equipCnt[l]*(lt.state.equips[u].cd||NaN))}s.rawCD=2.2*t/e}if(!isNaN(s.rawCD)){for(let t of e.ships)for(let e of t.buffs||[])Pe(e.target,a)&&s.buffs.push(e);n.extraBuff.ReloadAddRatio&&s.buffs.push({id:"手动设置的装填Buff",type:Te.ReloadAddRatio,value:n.extraBuff.ReloadAddRatio,trigger:{type:Ie.BattleStart},target:{type:Le.Self,args:n.id}}),n.extraBuff.CDAddRatio&&s.buffs.push({id:"手动设置的CD Buff",type:Te.CDAddRatio,value:-n.extraBuff.CDAddRatio,trigger:{type:Ie.BattleStart},target:{type:Le.Self,args:n.id}}),n.extraBuff.FirstCDAddRatio&&s.buffs.push({id:"手动设置的首轮CD Buff",type:Te.CDAddRatio,value:-n.extraBuff.FirstCDAddRatio,trigger:{type:Ie.BattleStart},removeTrigger:{type:Ie.WeaponReady},target:{type:Le.Self,args:n.id}}),l.push(s);for(let e of n.equips){let t=lt.state.equips[e];if(t)for(let e of t.buffs||[])s.buffs.push(e)}}}const a=30*e.config.time;let u={CV:-1,BB:-1},s={};for(let n=30*lt.state.config.delay.enter;n<a;++n)for(let e of l){let l=Ye(e.buffs,{ts:n,readyAt:e.readyAt,useAt:e.useAt}),a=e.reload*(1+(l.ReloadAddRatio||0)/100),i=1/(je(e.rawCD,a)*(1+(l.CDAddRatio||0)/100))/30;e.progress+=i,e.progress>=1&&(e.progress=0,e.readyAt.push(n),(n/30).toFixed(4),e.refShip.name,u[e.cdType],s[e.id]={shipId:e.id,name:e.refShip.name,cdType:e.cdType,readyTs:n/30,useTs:0}),e.readyAt.length>e.useAt.length&&n>=u[e.cdType]&&(e.useAt.push(n),s[e.id].useTs=n/30,t.push(s[e.id]),e.cdType===Re.BB?(e.progress=0,u[e.cdType]=n+30*lt.state.config.commonCd.BB):u[e.cdType]=n+30*lt.state.config.commonCd.CV)}return t}function tt(e,t){for(let l in t)switch(typeof t[l]){case"object":"object"==typeof e[l]?tt(e[l],t[l]):e[l]=t[l];break;default:e[l]=t[l]}}const lt={state:q({shipTemplates:{},equips:{},equipOptions:[],ships:{},shipId:"",fleets:[],fleetIdx:0,config:{ignoreCommonEquips:!0,delay:{enter:1.5,CV:3.4,BB:1.2},duration:{CV:1,BB:3.2},commonCd:{CV:.6,BB:1.2},limit:{calculate:1e3,display:100}}}),chooseFleet(e){lt.state.fleetIdx=e},addShip(e){const t=lt.state.shipTemplates[e];let l={id:R(),templateId:e,name:t.name,lvl:120,mode:"auto",intimacy:"爱",reload:0};return l.reload=Me(l),lt.state.ships[l.id]=l,l},removeShip(e){delete lt.state.ships[e];for(let t of lt.state.fleets)for(let l of t.ships)l.id===e&&(l.id=null,l.equips=[0,0,0,0,0])},removeFleet(e){lt.state.fleets.splice(e,1),lt.state.fleetIdx===e&&e>0&&--lt.state.fleetIdx,0===lt.state.fleets.length&&this.addFleet()},addFleet(){let e={id:R(),name:"新舰队配置-"+(new Date).toLocaleString(),ships:[],buffs:[],config:{time:120,showTimeAsLeft:!1},tech:{BB:0,CV:0,CVL:0},targets:[]};for(let t=0;t<3;++t)e.ships.push({id:null,equips:[],extraBuff:{ReloadAddRatio:0,CDAddRatio:0}});return lt.state.fleets.push(e),lt.state.fleetIdx=lt.state.fleets.length-1,lt.state.fleets[lt.state.fleetIdx]},copyFleet(){let e=JSON.parse(JSON.stringify(lt.state.fleets[lt.state.fleetIdx]));return e.id=R(),e.name=e.name+" 复制",lt.state.fleets.push(e),lt.state.fleetIdx=lt.state.fleets.length-1,lt.state.fleets[lt.state.fleetIdx]},persist(){let e=JSON.stringify(lt.state);localStorage.setItem("STORE",e)},setup(){0===lt.state.fleets.length&&this.addFleet();try{let e=localStorage.getItem("STORE"),t=JSON.parse(e||"");tt(lt.state,t)}catch(e){this.addFleet()}(async function(){return(await D.get("/data/ships.json")).data})().then((e=>{lt.state.shipTemplates=e;for(let t of lt.state.fleets)t.targets||(t.targets=[])})),async function(){return(await D.get("/data/equips.json")).data}().then((e=>{lt.state.equips=e}))}};lt.setup(),window.addEventListener("beforeunload",lt.persist);var at=r({props:{equip:{type:Number,required:!0},cnt:{type:[Number,null],required:!1}},setup(e){const t=e,l=T((()=>lt.state.equips[t.equip]||{})),a=T((()=>{if(!l.value.name)return"－";let e=l.value.name+" T"+l.value.tech;return t.cnt&&(e="("+t.cnt+"*)"+e),e}));return(e,t)=>(p(),S("span",{class:U("equip rarity-"+v(l).rarity)},I(v(a)),3))}});const ut={4:"战列",5:"战巡",6:"轻航",7:"正航",10:"航战"},st={4:"战列炮",7:"战斗机",8:"鱼雷机",9:"轰炸机",101:"航母设备",102:"战列设备"},nt=B("计算CD"),it=["onClick"];var rt=r({props:{ship:{type:null,required:!0},baseReload:{type:Number,required:!0},techReload:{type:Number,required:!0},extraBuffStats:{type:null,required:!0}},emits:["select"],setup(e,{emit:t}){const l=e,a=V(),u=lt.state.ships[l.ship.id],s=lt.state.shipTemplates[u.templateId];function n(e){let t=s.equipSlots[e];if(s.type===Ve.BBCV&&1==e)return[];let l=[];for(let a in lt.state.equips){let u=lt.state.equips[a];if(!(lt.state.config.ignoreCommonEquips&&u.rarity<=3)&&(Ke(t,u.type)||3===e&&u.type===Oe.auxiliaryCV&&!Ge(s.type)||e>=3&&u.type===Oe.auxiliaryBB&&Ge(s.type))){let e=u.name+" T"+u.tech;t.length>1&&(e="("+st[u.type]+")"+e),l.push({value:u.id,label:e,data:u})}}return l.sort(((e,t)=>e.data.type!=t.data.type?e.data.type-t.data.type:(e.data.cd||0)-(t.data.cd||0))),l.length>0&&e>=3&&l.push({value:0,label:"无",data:{}}),l}const i=[];for(let o=0;o<5;++o)i.push(n(o));const r=[],d=o({}),f=o([]),m=T((()=>f.value.slice(0,lt.state.config.limit.display)));function y(e){return He({id:l.ship.id,equips:e,extraBuff:{}},l.extraBuffStats)}function b(e,t){r[e]=t;let l=1,a=[];for(let u=0;u<5;++u){let e=r[u].length||1;i[u].length&&a.push(e),l*=e}d.value={total:l,desc:a.join("*")},l<50&&C()}function C(){d.value.total&&d.value.total>lt.state.config.limit.calculate?a.warning("选项数量过多!(当前限制为"+lt.state.config.limit.calculate+")"):(f.value=function(){let e=function(e,t){function l(e,l){let a=[];l&&0!==l.length||(l=[t]);for(let t of e)for(let e of l){let l=t.slice();l.push(e),a.push(l)}return a}let a=[[]];for(let u of e)a=l(a,u);return a}(r,0).map(y);return e.sort(((e,t)=>e.realCD-t.realCD)),e}(),d.value.updated=!0)}for(let o=0;o<5;++o){let e=l.ship.equips[o];r[o]=e?[e]:[]}function w(e,t){return k("div",{class:"equip rarity-"+e.data.rarity},{default:()=>e.label})}return b(0,r[0]),E((()=>[l.techReload,l.baseReload]),(()=>{f.value=[]})),(e,l)=>(p(),S("div",null,[(p(),S(L,null,F([0,1,2,3,4],(e=>h(v(O),{multiple:"",cascade:"",checkable:"",filterable:"","default-expand-all":"","check-strategy":"child","default-value":r[e],"onUpdate:value":t=>b(e,t),options:i[e],"max-tag-count":"responsive",disabled:0===i[e].length,"render-label":w},null,8,["default-value","onUpdate:value","options","disabled"]))),64)),B(" 总选项数量: "+I(d.value.desc)+"="+I(d.value.total)+" ",1),h(v(N),{type:"primary",onClick:l[0]||(l[0]=e=>C())},{default:c((()=>[nt])),_:1}),g("table",null,[g("tbody",null,[(p(!0),S(L,null,F(v(m),(e=>(p(),S("tr",{onClick:l=>t("select",e.ids)},[(p(!0),S(L,null,F(e.ids,(e=>(p(),S("td",null,[h(at,{equip:e},null,8,["equip"])])))),256)),g("td",null,"面板CD "+I(e.dispCD),1),g("td",null,"实际CD "+I(e.realCD&&e.realCD.toFixed(4)),1)],8,it)))),256))])])]))}});const ot={class:"ship-card"},dt={key:0},pt=["src","alt"],ft=g("br",null,null,-1),ct={key:1,class:"ship-card-image",style:{background:"#333"}};var vt=r({props:{template:{type:Number,required:!0},name:{type:String,required:!1}},setup(e){const t=e,l=T((()=>lt.state.shipTemplates[t.template])),a=T((()=>t.name||l.value.name));return(t,u)=>(p(),S("div",ot,[e.template>0?(p(),S("div",dt,[g("img",{class:"ship-card-image",src:v(l).img,alt:v(l).name},null,8,pt),ft])):(p(),S("div",ct)),B(" "+I(v(a)),1)]))}});const ht=B("选择舰娘"),mt={key:1},yt={style:{"text-align":"center"}},bt=g("br",null,null,-1),gt=B(" 装填 "),Ct={class:"white"},wt={key:0,class:"green"},xt={key:1,class:"blue"},_t=g("br",null,null,-1),Bt=g("br",null,null,-1),kt={title:"技能Buff(将自动计算装备Buff, 无需手动添加)"},At=B("% "),qt=B("% "),Rt=B("% "),Dt=B("取消");var Tt=r({props:{ship:{type:null,required:!0},fleetBuffs:{type:Array,required:!0},tech:{type:null,required:!0}},emits:["ship-click","set-equips"],setup(e,{emit:t}){const l=e,a=T((()=>{if(l.ship.id)return lt.state.ships[l.ship.id]})),u=T((()=>Je(l.ship.equips))),s=T((()=>{var e;return Ze(l.tech,null==(e=d.value)?void 0:e.type)}));T((()=>a.value?a.value.reload+u.value+s.value:0));const n=T((()=>He(l.ship,i.value))),i=T((()=>{var e;if(a.value&&d.value){let t=$e(l.fleetBuffs,d.value);return t.ReloadAdd=(t.ReloadAdd||0)+Ze(l.tech,null==(e=d.value)?void 0:e.type),t.CDAddRatio=(t.CDAddRatio||0)-(l.ship.extraBuff.CDAddRatio||0),t.ReloadAddRatio=(t.ReloadAddRatio||0)+(l.ship.extraBuff.ReloadAddRatio||0),t}return{}})),r=T((()=>a.value?"auto"!==a.value.mode?"(手动输入)":"Lv"+a.value.lvl+" "+a.value.intimacy:"")),d=T((()=>a.value?lt.state.shipTemplates[a.value.templateId]:null));T((()=>d.value?ut[d.value.type]:"未选择"));const m=o(!1),y=T((()=>"ES-"+l.ship.id));return(l,o)=>(p(),S(L,null,[v(a)?z("",!0):(p(),f(v(b),{key:0},{default:c((()=>[h(v(N),{onClick:o[0]||(o[0]=e=>t("ship-click"))},{default:c((()=>[ht])),_:1})])),_:1})),v(a)?(p(),S("div",mt,[h(v(b),{align:"center"},{default:c((()=>[h(vt,{template:v(a).templateId,name:v(a).name,onClick:o[1]||(o[1]=e=>t("ship-click"))},null,8,["template","name"]),g("div",yt,[B(I(v(r))+" ",1),bt,g("span",null,[gt,g("span",Ct,I(v(a).reload),1),v(u)>0?(p(),S("span",wt,"+"+I(v(u)),1)):z("",!0),v(s)>0?(p(),S("span",xt,"+"+I(v(s)),1)):z("",!0)]),_t,B(" 面板CD "+I(v(n).dispCD)+" ",1),Bt]),g("div",kt,[h(v(j),{label:"装填+","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:e.ship.extraBuff.ReloadAddRatio,"onUpdate:value":o[2]||(o[2]=t=>e.ship.extraBuff.ReloadAddRatio=t),style:{width:"100px"}},null,8,["value"]),At])),_:1}),h(v(j),{label:"射速+","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:e.ship.extraBuff.CDAddRatio,"onUpdate:value":o[3]||(o[3]=t=>e.ship.extraBuff.CDAddRatio=t),style:{width:"100px"}},null,8,["value"]),qt])),_:1}),h(v(j),{label:"首轮+","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:e.ship.extraBuff.FirstCDAddRatio,"onUpdate:value":o[4]||(o[4]=t=>e.ship.extraBuff.FirstCDAddRatio=t),style:{width:"100px"}},null,8,["value"]),Rt])),_:1})]),g("div",null,"实际CD: "+I(v(n).realCD&&v(n).realCD.toFixed(4)),1),g("div",{onClick:o[5]||(o[5]=e=>m.value=!0),style:{cursor:"pointer"}},[(p(!0),S(L,null,F(e.ship.equips,((e,t)=>(p(),S("span",null,[h(at,{equip:e,cnt:v(d)&&v(d).equipCnt[t]},null,8,["equip","cnt"])])))),256))]),P(l.$slots,"default")])),_:3})])):z("",!0),v(a)&&v(d)?(p(),f(v($),{key:2,show:m.value,"onUpdate:show":o[8]||(o[8]=e=>m.value=e),"display-directive":"show","mask-closable":!1},{default:c((()=>[h(v(W),{style:{width:"90%"},title:"调整装备"},{"header-extra":c((()=>[h(v(N),{onClick:o[6]||(o[6]=e=>m.value=!1)},{default:c((()=>[Dt])),_:1})])),default:c((()=>[h(rt,{key:v(y),ship:e.ship,baseReload:v(a).reload,techReload:v(s),extraBuffStats:v(i),onSelect:o[7]||(o[7]=e=>{t("set-equips",e),m.value=!1})},null,8,["ship","baseReload","techReload","extraBuffStats"])])),_:1})])),_:1},8,["show"])):z("",!0)],64))}});J("data-v-94e68ca0");const St=B("删除");G();var It=r({props:{value:{type:null,required:!0},ships:{type:Array,required:!0}},emits:["delete"],setup(e,{emit:t}){const l=e;l.value.custom=l.value.custom||"",l.value.schedule=l.value.schedule||[20,20,20],l.value.weapon=l.value.weapon||{bindId:"",duration:8};const a=[{value:"schedule",label:"固定间隔"},{value:"custom",label:"自定义"},{value:"weapon",label:"绑定武器"}],u=T((()=>{let e=[];for(let t of l.ships){if(!t.id)continue;let l=lt.state.ships[t.id];e.push({value:l.id,label:l.name})}return e}));return(l,s)=>(p(),f(v(K),{inline:"",model:e.value,ref:(e,t)=>{t.formRef=e}},{default:c((()=>[h(v(b),null,{default:c((()=>[h(v(j),{label:"名称","label-placement":"left",path:"name"},{default:c((()=>[h(v(H),{value:e.value.name,"onUpdate:value":s[0]||(s[0]=t=>e.value.name=t)},null,8,["value"])])),_:1}),h(v(j),{"label-placement":"left",path:"name"},{default:c((()=>[h(v(O),{options:a,value:e.value.type,"onUpdate:value":s[1]||(s[1]=t=>e.value.type=t)},null,8,["value"])])),_:1}),"schedule"===e.value.type?(p(),S(L,{key:0},[h(v(j),{label:"间隔","label-placement":"left",path:"name"},{default:c((()=>[h(v(M),{"default-value":e.value.schedule[0],onUpdateValue:s[2]||(s[2]=t=>e.value.schedule[0]=t||0)},null,8,["default-value"])])),_:1}),h(v(j),{label:"持续","label-placement":"left",path:"name"},{default:c((()=>[h(v(M),{"default-value":e.value.schedule[1],onUpdateValue:s[3]||(s[3]=t=>e.value.schedule[1]=t||0)},null,8,["default-value"])])),_:1}),h(v(j),{label:"首轮CD","label-placement":"left",path:"name"},{default:c((()=>[h(v(M),{"default-value":e.value.schedule[2],onUpdateValue:s[4]||(s[4]=t=>e.value.schedule[2]=t||0)},null,8,["default-value"])])),_:1})],64)):"custom"===e.value.type?(p(),f(v(j),{key:1,label:"时间","label-placement":"left",path:"name"},{default:c((()=>[h(v(H),{value:e.value.custom,"onUpdate:value":s[5]||(s[5]=t=>e.value.custom=t),style:{width:"300px","flex-shrink":"0.5"}},null,8,["value"])])),_:1})):(p(),S(L,{key:2},[h(v(j),{label:"目标","label-placement":"left",path:"name"},{default:c((()=>[h(v(O),{"fallback-option":()=>!1,style:{"min-width":"100px"},options:v(u),value:e.value.weapon.bindId,"onUpdate:value":s[6]||(s[6]=t=>e.value.weapon.bindId=t)},null,8,["fallback-option","options","value"])])),_:1}),h(v(j),{label:"延迟","label-placement":"left",path:"name"},{default:c((()=>[h(v(M),{value:e.value.weapon.delay,"onUpdate:value":s[7]||(s[7]=t=>e.value.weapon.delay=t)},null,8,["value"])])),_:1}),h(v(j),{label:"持续","label-placement":"left",path:"name"},{default:c((()=>[h(v(M),{value:e.value.weapon.duration,"onUpdate:value":s[8]||(s[8]=t=>e.value.weapon.duration=t)},null,8,["value"])])),_:1})],64)),h(v(N),{type:"error",onClick:s[9]||(s[9]=e=>t("delete"))},{default:c((()=>[St])),_:1})])),_:1})])),_:1},8,["model"]))}});It.__scopeId="data-v-94e68ca0",J("data-v-04e25a93");const Ut={id:"chart-footer"};G();var Vt=r({props:{fleet:{type:null,required:!0},height:{type:Number,required:!0}},setup(e){const a=e,u=o(null);let s;Z([Y,ee,te,le,ae,ue,se]);var n={showTimeAsLeft:!1,maxDuration:180,selected:[0,0]};let r=T((()=>lt.state.config));function d(e,t){var l=t.value(0),a=t.coord([t.value(1),l]),u=t.coord([t.value(2),l]),s=.8*t.size([0,1])[1],n=ne({x:a[0],y:a[1]-s/2,width:u[0]-a[0],height:s},{x:e.coordSys.x,y:e.coordSys.y,width:e.coordSys.width,height:e.coordSys.height});return n&&{type:"rect",transition:["shape"],shape:n,style:{fill:"#368c6c"}}}function f(e,t=3){return parseFloat(e).toFixed(t).replace(/0+$/,"").replace(/\.$/,"")}function c(e){if(e<0)return"-"+c(-e);var t="00"+Math.floor(e/60);t=t.substr(t.length-2);var l="00"+Math.floor(e%60);l=l.substr(l.length-2);var a=e%1;return a&&(l+=a.toFixed(2).substr(1)),t+":"+l}const v={tooltip:{formatter:function(e){var t;return t=n.showTimeAsLeft?`: ${c(n.maxDuration-e.value[1])} ~ ${c(n.maxDuration-e.value[2])}`:`: ${f(e.value[1])}s~${f(e.value[2])}s`,e.marker+e.name+t}},dataZoom:[{type:"slider",filterMode:"weakFilter",showDataShadow:!1,labelFormatter:""},{type:"inside",filterMode:"weakFilter"}],xAxis:{type:"value",min:0,scale:!0,axisPointer:{show:!0,snap:!1,triggerTooltip:!1},axisLabel:{formatter:function(e){return n.showTimeAsLeft&&(e=n.maxDuration-e),c(e)}}},yAxis:{data:[]}};function h(e,t){let l=[];if("schedule"===e.type){let[t,a,u]=e.schedule;if(!t||t<=0)return l;for(let s=u;s<n.maxDuration;s+=t)l.push({name:e.name,value:[e.name,s,s+a,a]});return l}if("custom"===e.type){let t=e.custom.match(/(\d+(\.\d+)?)/g);if(!t)return l;for(let a=0;a<t.length;a+=2){let u=parseFloat(t[a]),s=parseFloat(t[a+1]);isNaN(s)||l.push({name:e.name,value:[e.name,u,s,s-u]})}return l}if("weapon"===e.type){t||(t=et(a.fleet));for(let a of t)if(a.shipId===e.weapon.bindId){let t=a.useTs+e.weapon.delay;l.push({name:e.name,value:[e.name,t,t+e.weapon.duration,e.weapon.duration]})}return l}return[]}let m;function y(){if(!s)return;n.maxDuration=a.fleet.config.time,n.showTimeAsLeft=a.fleet.config.showTimeAsLeft;let e={},u=[];m=[];for(let t of a.fleet.ships)if(t.id){let l=lt.state.ships[t.id].name;e[l]=1,m.push(l)}let o=et(a.fleet);for(let t of o){e[t.name]||(e[t.name]=1,m.push(t.name));let l=t.useTs+r.value.delay[t.cdType],a=r.value.duration[t.cdType],s={name:t.name,id:t.shipId,value:[t.name,l,l+a,a]};u.push(s)}for(let s of a.fleet.targets)e[s.name]?(e[s.name]+=1,p=i({},s),f={name:s.name+" "+e[s.name]},s=t(p,l(f))):e[s.name]=1,m.push(s.name),u.push(...h(s,o));var p,f;s.setOption({series:[{type:"custom",renderItem:d,itemStyle:{opacity:.8},encode:{x:[1,2],y:0},data:u}],xAxis:{max:n.maxDuration},yAxis:{data:m,inverse:!0}})}function b(){s.setOption({graphic:{id:"bg",type:"rect",shape:{x:0,y:0,width:0,height:0}}}),n.selected=[0,0]}function C(){s&&(b(),s.resize())}return E((()=>a.height),C),window.addEventListener("resize",C),Q((()=>{let e=document.getElementById("align-chart");e&&(s=X(e),s.setOption(v),C(),y(),s.on("click",(function(e){e.value&&(n.selected[0]!==e.value[1]||n.selected[1]!==e.value[2]?(n.selected=[e.value[1],e.value[2]],function(){let e=s.convertToPixel({xAxisIndex:0,yAxisIndex:0},[n.selected[0],m.length]),t=s.convertToPixel({xAxisIndex:0,yAxisIndex:0},[n.selected[1],-1]),l=(t[1]-e[1])/m.length;s.setOption({graphic:{id:"bg",type:"rect",shape:{x:e[0],y:e[1]+.4*l,width:t[0]-e[0],height:l*(m.length-.8)},style:{fill:"rgba(0,0,0,0.3)"}}})}()):b())})),s.on("datazoom",b))})),E(a,y),(e,t)=>(p(),S("div",Ut,[g("div",{id:"align-chart",ref:(e,t)=>{t.chartRef=e,u.value=e},class:"chart-box"},null,512)]))}});Vt.__scopeId="data-v-04e25a93";const Et={id:"fleet-container",style:{padding:"20px 20px 400px 20px"}},Lt=B("选择"),Ft=B("添加"),Ot=B("复制"),Nt=B("删除"),zt=B("上移"),jt=B("舰队科技加成: "),Mt=B("将自动计算舰娘技能:"),Pt=B(" 对轴目标列表 "),Wt=g("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[g("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("circle",{cx:"12",cy:"12",r:"9"}),g("path",{d:"M12 17v.01"}),g("path",{d:"M12 13.5a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4"})])],-1),$t=B(": "),Jt=B("添加"),Gt=B("取消"),Ht=B(" 固定间隔设置较为直观, 例如海妈旧轴为 20,10,20; 海妈新轴为 20,10,16. "),Kt=g("br",null,null,-1),Zt=g("br",null,null,-1),Qt=B(" 绑定武器设置中, 延迟是从使用武器的时间开始计算的, 如果是命中后生效的技能(例如公爵的易伤Buff)需要自行填写命中的延迟时间. "),Xt=g("br",null,null,-1),Yt=g("br",null,null,-1),el=B(" 自定义设置的格式为任意符号分隔的数字列表, 每两个数字表示一组起止时间. "),tl=g("br",null,null,-1),ll=B(" 个人简单测试的苍龙Meta轴为(不保证准确性): 0,4;14,16;25,28;37,39;43,50;60,62;69,76 "),al=g("br",null,null,-1),ul=B(" 如果需要更多数据, 建议参考碧蓝航线Wiki ("),sl=g("a",{target:"_blank",href:"https://wiki.biligame.com/blhx/%E4%BD%99%E7%83%ACboss%E6%94%BB%E7%95%A5%E8%A6%81%E7%82%B9"},"Meta",-1),nl=B(" / "),il=g("a",{target:"_blank",href:"https://wiki.biligame.com/blhx/%E5%A4%A7%E8%88%B0%E9%98%9F#.E4.BD.9C.E6.88.98"},"大舰队Boss",-1),rl=B(") 或自行录屏分析. ");var ol=r({setup(e){const t=V(),l=ie(),a=T((()=>lt.state.fleets[lt.state.fleetIdx])),u=T((()=>lt.state.fleets.map(((e,t)=>({value:t,label:e.name}))))),s=o(400);function n(){let e=Math.round(Math.min(.4*document.body.clientHeight,400)),t=document.getElementById("fleet-container");t&&(t.style.paddingBottom=e+"px");let l=document.getElementById("chart-footer");l&&(l.style.height=e+"px"),s.value=e}window.addEventListener("resize",n),Q((()=>{n(),setTimeout(n,500)}));const i=o(!1);let r=o(0);const d=o(a.value.buffs),m=o([]);T((()=>[...d.value,...m.value]));const y=T((()=>lt.state.ships));function w(e){for(let t of a.value.ships)if(t&&t.id===e.id)return!1;return!0}function x(e){let t=a.value.ships[r.value];if(e){t.id=e.id,t.buffs=(l=lt.state.shipTemplates[e.templateId].buffs||[],JSON.parse(JSON.stringify(l)));for(let l of t.buffs)l.target.type===Le.Self&&(l.target.args=e.templateId)}else t.id=null,t.buffs=[];var l;t.equips=[0,0,0,0,0],i.value=!1}const _=T((()=>{let e=[];for(let t of a.value.ships){if(!t.id)continue;let l=lt.state.ships[t.id];for(let a of t.buffs||[])e.push({from:l.name,name:a.name})}return e})),k=o(!1);return(e,n)=>(p(),S(L,null,[g("div",Et,[h(v(j),{"label-placement":"left",path:"fleet.name"},{default:c((()=>[h(v(re),{value:v(lt).state.fleetIdx,"onUpdate:value":n[0]||(n[0]=e=>v(lt).state.fleetIdx=e),options:v(u),placement:"bottom-start",trigger:"click"},{default:c((()=>[h(v(N),null,{default:c((()=>[Lt])),_:1})])),_:1},8,["value","options"]),h(v(H),{value:v(a).name,"onUpdate:value":n[1]||(n[1]=e=>v(a).name=e)},null,8,["value"]),h(v(N),{onClick:n[2]||(n[2]=e=>(lt.addFleet(),void t.success("已添加舰队 "+a.value.name)))},{default:c((()=>[Ft])),_:1}),h(v(N),{onClick:n[3]||(n[3]=e=>(lt.copyFleet(),void t.success("已复制舰队 "+a.value.name)))},{default:c((()=>[Ot])),_:1}),h(v(N),{type:"error",onClick:n[4]||(n[4]=e=>{l.warning({title:"警告",content:"确定删除当前舰队配置?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{lt.removeFleet(lt.state.fleetIdx),t.success("已删除")}})})},{default:c((()=>[Nt])),_:1})])),_:1}),(p(!0),S(L,null,F(v(a).ships,((e,t)=>(p(),f(v(ve),null,{default:c((()=>[h(v(ce),{span:24},{default:c((()=>[h(Tt,{ship:e,fleetBuffs:d.value,tech:v(a).tech,onShipClick:e=>function(e){r.value=e,i.value=!0}(t),onSetEquips:e=>function(e,t){a.value.ships[e].equips=t}(t,e)},{default:c((()=>[t>0?(p(),f(v(N),{key:0,onClick:e=>function(e){let t=a.value.ships[e];a.value.ships[e]=a.value.ships[e-1],a.value.ships[e-1]=t}(t)},{default:c((()=>[zt])),_:2},1032,["onClick"])):z("",!0)])),_:2},1032,["ship","fleetBuffs","tech","onShipClick","onSetEquips"])])),_:2},1024)])),_:2},1024)))),256)),jt,h(v(b),null,{default:c((()=>[h(v(j),{label:"轻航装填","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:v(a).tech.CVL,"onUpdate:value":n[5]||(n[5]=e=>v(a).tech.CVL=e)},null,8,["value"])])),_:1}),h(v(j),{label:"正航装填","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:v(a).tech.CV,"onUpdate:value":n[6]||(n[6]=e=>v(a).tech.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列装填","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:v(a).tech.BB,"onUpdate:value":n[7]||(n[7]=e=>v(a).tech.BB=e)},null,8,["value"])])),_:1})])),_:1}),v(_).length>0?(p(),f(v(b),{key:0,style:{"background-color":"antiquewhite"}},{default:c((()=>[h(v(C),null,{default:c((()=>[Mt])),_:1}),(p(!0),S(L,null,F(v(_),(e=>(p(),f(v(he),null,{default:c((()=>[B(I(e.name),1)])),_:2},1024)))),256))])),_:1})):z("",!0),h(v(b),null,{default:c((()=>[Pt,h(v(oe),{size:20,style:{cursor:"pointer"},onClick:n[8]||(n[8]=e=>k.value=!0)},{default:c((()=>[Wt])),_:1}),$t,h(v(j),{label:"时间","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:v(a).config.time,"onUpdate:value":n[9]||(n[9]=e=>v(a).config.time=e)},null,8,["value"])])),_:1}),h(v(j),{label:"按剩余时间展示","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(de),{value:v(a).config.showTimeAsLeft,"onUpdate:value":n[10]||(n[10]=e=>v(a).config.showTimeAsLeft=e)},null,8,["value"])])),_:1}),h(v(N),{onClick:n[11]||(n[11]=e=>{a.value.targets.push({name:"20s轴",type:"schedule",schedule:[20,10,20],custom:"",weapon:{bindId:"",delay:0,duration:8}})})},{default:c((()=>[Jt])),_:1})])),_:1}),(p(!0),S(L,null,F(v(a).targets,((e,t)=>(p(),f(v(b),null,{default:c((()=>[h(It,{ships:v(a).ships,value:e,onDelete:e=>v(a).targets.splice(t,1)},null,8,["ships","value","onDelete"])])),_:2},1024)))),256))]),h(Vt,{height:s.value,fleet:v(a)},null,8,["height","fleet"]),h(v($),{show:i.value,"onUpdate:show":n[14]||(n[14]=e=>i.value=e),"display-directive":"show"},{default:c((()=>[h(v(W),{style:{width:"90%"},title:"选择舰娘"},{"header-extra":c((()=>[h(v(N),{onClick:n[12]||(n[12]=e=>i.value=!1)},{default:c((()=>[Gt])),_:1})])),default:c((()=>[h(v(pe),{"x-gap":"2",cols:"2 400:3 600:4 800:5 1000:6 1200:12"},{default:c((()=>[h(v(fe),{bordered:!1,class:"ship-card",onClick:n[13]||(n[13]=e=>x(null))},{default:c((()=>[h(vt,{template:0,name:"取消选择"})])),_:1}),(p(!0),S(L,null,F(v(y),(e=>me((p(),f(v(fe),{bordered:!1,class:"ship-card",onClick:t=>x(e)},{default:c((()=>[h(vt,{template:e.templateId,name:e.name},null,8,["template","name"])])),_:2},1032,["onClick"])),[[ye,w(e)]]))),256))])),_:1})])),_:1})])),_:1},8,["show"]),h(v($),{show:k.value,"onUpdate:show":n[15]||(n[15]=e=>k.value=e),"display-directive":"show"},{default:c((()=>[h(v(W),{style:{width:"90%"},title:"对轴目标说明"},{default:c((()=>[Ht,Kt,Zt,Qt,Xt,Yt,el,tl,ll,al,ul,sl,nl,il,rl])),_:1})])),_:1},8,["show"])],64))}});const dl=["src","alt"],pl=B("输入"),fl=B("自动"),cl=B("  "),vl=B("陌生"),hl=B("友好"),ml=B("喜欢"),yl=B("爱"),bl=B("誓约"),gl=B("200");var Cl=r({props:{ship:{type:null,required:!0}},emits:["update:value"],setup(e,{emit:t}){const l=e,a=T((()=>lt.state.shipTemplates[l.ship.templateId])),u=o(l.ship);return E([u.value],(()=>{if("auto"===u.value.mode){let e=Me(u.value);u.value.reload=e}t("update:value",u.value)}),{immediate:!0}),(e,t)=>(p(),f(v(b),null,{default:c((()=>[g("img",{src:v(a).img,alt:v(a).name,style:{"border-radius":"10px",width:"80px",height:"80px"}},null,8,dl),h(v(b),null,{default:c((()=>[h(v(j),{path:"name","show-feedback":!1,"label-placement":"left",style:{"min-width":"120px"}},{default:c((()=>[h(v(H),{value:u.value.name,"onUpdate:value":t[0]||(t[0]=e=>u.value.name=e)},null,8,["value"])])),_:1}),h(v(j),{path:"mode","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(be),{value:u.value.mode,"onUpdate:value":t[1]||(t[1]=e=>u.value.mode=e)},{default:c((()=>[h(v(ge),{size:"small",value:"input"},{default:c((()=>[pl])),_:1}),h(v(ge),{size:"small",value:"auto"},{default:c((()=>[fl])),_:1})])),_:1},8,["value"])])),_:1}),h(v(j),{label:"装填",path:"reload","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(M),{value:u.value.reload,"onUpdate:value":t[2]||(t[2]=e=>u.value.reload=e),disabled:"auto"==u.value.mode,class:"short-num-input",style:{width:"200px"}},null,8,["value","disabled"])])),_:1})])),_:1}),"auto"===u.value.mode?(p(),f(v(b),{key:0},{default:c((()=>[h(v(j),{label:"等级",path:"lvl","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(M),{min:100,max:125,value:u.value.lvl,"onUpdate:value":t[3]||(t[3]=e=>u.value.lvl=e),disabled:"auto"!=u.value.mode,class:"short-num-input",style:{width:"200px"}},null,8,["value","disabled"]),cl,h(v(Ce),{value:u.value.lvl,"onUpdate:value":t[4]||(t[4]=e=>u.value.lvl=e),min:100,max:125,disabled:"auto"!=u.value.mode,style:{width:"200px"},tooltip:!1},null,8,["value","disabled"])])),_:1}),h(v(j),{path:"intimacy","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(be),{value:u.value.intimacy,"onUpdate:value":t[5]||(t[5]=e=>u.value.intimacy=e),disabled:"auto"!=u.value.mode},{default:c((()=>[h(v(ge),{class:"intimacy-option",size:"small",value:"陌生"},{default:c((()=>[vl])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"友好"},{default:c((()=>[hl])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"喜欢"},{default:c((()=>[ml])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"爱"},{default:c((()=>[yl])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"誓约"},{default:c((()=>[bl])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"誓约200"},{default:c((()=>[gl])),_:1})])),_:1},8,["value","disabled"])])),_:1})])),_:1})):z("",!0)])),_:1}))}});const wl={style:{padding:"20px"}},xl=B("删除"),_l=g("hr",null,null,-1),Bl=B("添加舰娘"),kl=B("取消"),Al=g("br",null,null,-1);var ql=r({setup(e){const t=o(!1),l=T((()=>lt.state.ships)),a=o("");function u(e){return!a.value||0===a.value.length||e.match.indexOf(a.value)>-1}const s=T((()=>{let e=[];for(let t in lt.state.shipTemplates){let l=i({},lt.state.shipTemplates[t]);l.key=l.id,e.push(l)}return e}));const n=o(null);return(e,i)=>(p(),S(L,null,[g("div",wl,[(p(!0),S(L,null,F(v(l),((e,t)=>(p(),f(v(ve),null,{default:c((()=>[h(v(ce),{span:21},{default:c((()=>[h(Cl,{ship:e,"onUpdate:modelValue":t=>v(l)[e.id]=t},null,8,["ship","onUpdate:modelValue"])])),_:2},1024),h(v(ce),{span:3},{default:c((()=>[h(v(N),{onClick:t=>function(e){lt.removeShip(e)}(e.id),type:"error"},{default:c((()=>[xl])),_:2},1032,["onClick"])])),_:2},1024),_l])),_:2},1024)))),256)),h(v(b),{justify:"center"},{default:c((()=>[h(v(N),{onClick:i[0]||(i[0]=e=>(t.value=!0,void setTimeout((()=>{n.value&&n.value.focus()}),2)))},{default:c((()=>[Bl])),_:1})])),_:1})]),h(v($),{show:t.value,"onUpdate:show":i[3]||(i[3]=e=>t.value=e),"display-directive":"show"},{default:c((()=>[h(v(W),{style:{width:"90%"},title:"添加舰娘"},{"header-extra":c((()=>[h(v(N),{onClick:i[1]||(i[1]=e=>t.value=!1)},{default:c((()=>[kl])),_:1})])),default:c((()=>[h(v(j),{"label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(H),{ref:(e,t)=>{t.searchRef=e,n.value=e},value:a.value,"onUpdate:value":i[2]||(i[2]=e=>a.value=e),placeholder:"搜索舰娘名称/拼音"},null,8,["value"])])),_:1}),Al,h(v(pe),{"x-gap":"2",cols:"2 400:3 600:4 800:5 1000:6 1200:12"},{default:c((()=>[(p(!0),S(L,null,F(v(s),(e=>me((p(),f(v(fe),{bordered:!1,class:"ship-card",onClick:l=>{return a=e.key,lt.addShip(a),void(t.value=!1);var a}},{default:c((()=>[h(vt,{template:e.key},null,8,["template"])])),_:2},1032,["onClick"])),[[ye,u(e)]]))),256))])),_:1}),0==v(s).length?(p(),f(v(we),{key:0})):z("",!0)])),_:1})])),_:1},8,["show"])],64))}});const Rl={style:{padding:"20px"}},Dl=g("span",null,"命中延迟时间",-1),Tl=g("span",null,"攻击持续时间",-1),Sl=g("span",null,"公共CD",-1),Il=g("span",null,"选项数量限制",-1),Ul=B("重置舰队数据"),Vl=B("重置全部数据"),El=g("div",null,[B(" 项目代码已发布在Github: "),g("a",{href:"https://github.com/AzurLaneTools/AzurLaneCDTool",target:"_blank"},"AzurLaneTools/AzurLaneCDTool"),B(". "),g("br"),B(" 使用中有相关问题, 可以"),g("a",{href:"https://github.com/AzurLaneTools/AzurLaneCDTool/issues/new",target:"_blank"},"通过Issue反馈"),B(". ")],-1);const Ll=[{path:"/",component:ol},{path:"/ships",component:ql},{path:"/config",component:r({setup(e){const t=o(lt.state.config),l=V();return(e,a)=>(p(),S("div",Rl,[h(v(j),{label:"忽略低星装备","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(de),{value:t.value.ignoreCommonEquips,"onUpdate:value":a[0]||(a[0]=e=>t.value.ignoreCommonEquips=e)},null,8,["value"])])),_:1}),h(v(j),{label:"公共进图延迟","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.delay.enter,"onUpdate:value":a[1]||(a[1]=e=>t.value.delay.enter=e)},null,8,["value"])])),_:1}),h(v(b),null,{default:c((()=>[Dl,h(v(j),{label:"航母","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.delay.CV,"onUpdate:value":a[2]||(a[2]=e=>t.value.delay.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.delay.BB,"onUpdate:value":a[3]||(a[3]=e=>t.value.delay.BB=e)},null,8,["value"])])),_:1})])),_:1}),h(v(b),null,{default:c((()=>[Tl,h(v(j),{label:"航母","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.duration.CV,"onUpdate:value":a[4]||(a[4]=e=>t.value.duration.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.duration.BB,"onUpdate:value":a[5]||(a[5]=e=>t.value.duration.BB=e)},null,8,["value"])])),_:1})])),_:1}),h(v(b),null,{default:c((()=>[Sl,h(v(j),{label:"航母","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.commonCd.CV,"onUpdate:value":a[6]||(a[6]=e=>t.value.commonCd.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{value:t.value.commonCd.BB,"onUpdate:value":a[7]||(a[7]=e=>t.value.commonCd.BB=e)},null,8,["value"])])),_:1})])),_:1}),h(v(b),null,{default:c((()=>[Il,h(v(j),{label:"最大计算数量","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{min:100,value:t.value.limit.calculate,"onUpdate:value":a[8]||(a[8]=e=>t.value.limit.calculate=e)},null,8,["value"])])),_:1}),h(v(j),{label:"最大展示数量","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(M),{min:50,value:t.value.limit.display,"onUpdate:value":a[9]||(a[9]=e=>t.value.limit.display=e)},null,8,["value"])])),_:1})])),_:1}),h(v(j),{"label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(N),{onClick:a[10]||(a[10]=e=>(lt.state.fleets=[],lt.addFleet(),void l.success("已重置")))},{default:c((()=>[Ul])),_:1})])),_:1}),h(v(j),{"label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(N),{onClick:a[11]||(a[11]=e=>(window.removeEventListener("beforeunload",lt.persist),localStorage.removeItem("STORE"),l.success("已重置"),void window.location.reload()))},{default:c((()=>[Vl])),_:1})])),_:1}),El]))}})}],Fl=xe({history:_e(),routes:Ll}),Ol=Be(ze);Ol.use(Fl),Ol.mount("#app");