var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,i=(e,t)=>{for(var l in t||(t={}))u.call(t,l)&&n(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&n(e,l,t[l]);return e};"undefined"!=typeof require&&require;import{d as o,r,a as d,o as p,c as f,w as c,u as v,b as h,N as m,e as y,f as b,g,h as C,i as w,j as _,k as x,l as B,R as k,m as q,v as A,n as R,p as T,q as S,t as D,s as I,x as U,y as V,F as L,z as O,A as F,B as N,C as E,D as z,E as j,G as P,H as W,I as M,J as $,K as J,L as K,M as Z,O as G,P as H,Q,S as X,T as Y,U as ee,V as te,W as le,X as ae,Y as ue,Z as se,_ as ne,$ as ie,a0 as oe,a1 as re,a2 as de,a3 as pe,a4 as fe,a5 as ce,a6 as ve,a7 as he,a8 as me,a9 as ye,aa as be,ab as ge,ac as Ce,ad as we,ae as _e,af as xe,ag as Be}from"./vendor.75f62b5a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const ke={class:"ui-logo"},qe=b("img",{src:"/img/logo.png",alt:"碧蓝航线CD计算工具"},null,-1),Ae=x("碧蓝航线CD计算工具·Beta");var Re,Te,Se,De,Ie,Ue,Ve,Le,Oe,Fe,Ne,Ee,ze=o({setup(e){function t(e){return B(k,{to:e.key},{default:()=>e.label})}const l=[{label:"CD模拟",key:"/"},{label:"舰娘管理",key:"/ships"},{label:"设置",key:"/config"}],a=r(location.hash.substring(1)),u=r(!1);return(e,s)=>{const n=d("router-view");return p(),f(v(_),null,{default:c((()=>[h(v(m),null,{default:c((()=>[h(v(w),{style:{height:"100%"}},{default:c((()=>[h(v(y),{class:"header-menu",bordered:""},{default:c((()=>[b("div",ke,[qe,h(v(g),null,{default:c((()=>[Ae])),_:1})]),h(v(C),{value:a.value,"onUpdate:value":s[0]||(s[0]=e=>a.value=e),mode:"horizontal",collapsed:u.value,options:l,"render-label":t},null,8,["value","collapsed"])])),_:1}),h(v(w),{"content-style":"padding: 20px 20px 20px 20px"},{default:c((()=>[h(n)])),_:1})])),_:1})])),_:1})])),_:1})}}});function je(e,t){return e/6/Math.sqrt(3.14*(t+100))}function Pe(e){let t=et.state.shipTemplates[e.templateId];if(!t)return 0;let l=t.reload,a=e.lvl,u=function(e){switch(e){case"陌生":return 1;case"友好":return 1.01;case"喜欢":return 1.03;case"爱":return 1.06;case"誓约":return 1.09;case"誓约200":return 1.12}return 1}(e.intimacy),s=(l[0]+(a-1)*l[1]/1e3+(a-100)*l[2]/1e3+l[3])*u+l[4];return Math.floor(s)}function We(e,t){if(e.type===Oe.Self)return t.id===e.args;if(e.type===Oe.ByType)return Ze(e.args,t.type);if(e.type===Oe.ByCamp)return Ze(e.args,t.camp);if(e.type===Oe.And){for(let l of e.args)if(!We(l,t))return!1;return!0}if(e.type===Oe.Or){for(let l of e.args)if(We(l,t))return!0;return!1}}function Me(e,t){return e.off||e.target&&!We(e.target,t)?"off":e.removeTrigger||e.trigger.type!==Ie.BattleStart||e.duration?"condition":"on"}function $e(e,t){let l={ReloadAdd:0,ReloadAddRatio:0,CDAddRatio:0};for(let a of e)"on"===Me(a,t)&&(l[a.type]+=a.value);return l}function Je(e){var t;let l=0;for(let a=3;a<5;++a){let u=e[a];if(0===u)continue;let s=et.state.equips[u];if(s)for(let e of(null==(t=s.buffs)?void 0:t.length)?s.buffs:[])if(e.type===Se.ReloadAdd&&e.trigger.type===Ie.Equip){if(!e.value)continue;l+=e.value}}return l}function Ke(e,t){if(!e.id)return{};let l={ids:e.equips},a=et.state.ships[e.id],u=et.state.shipTemplates[a.templateId],s=Je(e.equips),n=function(e,t,l){let a={};for(let u in t)a[u]=t[u];for(let u of e){if(0===u)continue;let e=et.state.equips[u];if(!e||!e.buffs)continue;let t=$e(e.buffs,l);for(let l in t)a[l]=(a[l]||0)+t[l]}return a}(e.equips,t,u),i=a.reload+s+(n.ReloadAdd||0),o=i*(1+(n.ReloadAddRatio||0)/100);l.reload={base:a.reload,equip:s,extra:n,real:o};let r=0;if(u.type===Ve.BB||u.type===Ve.BC){if(0===e.equips[0])return l;r=et.state.equips[e.equips[0]].cd||0}else{let t=0,l=0;for(let a=0;a<3;++a){let s=e.equips[a];0!==s&&(t+=u.equipCnt[a],l+=u.equipCnt[a]*(et.state.equips[s].cd||100))}r=2.2*l/t}return l.rawEquipCD=r,l.dispCD=je(r,i).toFixed(2),l.realCD=je(r,o)*(1+(n.CDAddRatio||0)/100),l}function Ze(e,t){for(let l of e)if(l===t)return!0;return!1}function Ge(e,t){return t===Ve.BB||t===Ve.BC?e.BB:t===Ve.CV?e.CV:t===Ve.CVL?e.CVL:0}(Te=Re||(Re={})).BB="BB",Te.CV="CV",(De=Se||(Se={})).ReloadAdd="ReloadAdd",De.ReloadAddRatio="ReloadAddRatio",De.CDAddRatio="CDAddRatio",(Ue=Ie||(Ie={})).Equip="Equip",Ue.Tech="Tech",Ue.BattleStart="BattleStart",Ue.WeaponReady="WeaponReady",Ue.UseWeapon="UseWeapon",Ue.Scheduled="Scheduled",(Le=Ve||(Ve={}))[Le.BC=4]="BC",Le[Le.BB=5]="BB",Le[Le.CVL=6]="CVL",Le[Le.CV=7]="CV",(Fe=Oe||(Oe={})).Self="Self",Fe.ByType="Type",Fe.ByCamp="ByCamp",Fe.And="And",Fe.Or="Or",(Ee=Ne||(Ne={}))[Ee.artillery=4]="artillery",Ee[Ee.fighter=7]="fighter",Ee[Ee.torpedo_bomber=8]="torpedo_bomber",Ee[Ee.dive_bomber=9]="dive_bomber",Ee[Ee.auxiliaryCV=101]="auxiliaryCV",Ee[Ee.auxiliaryBB=102]="auxiliaryBB";function He(e,t){if(!t)return!1;if(t.type===Ie.Scheduled)return e.ts>(t.args&&t.args[0]||0);if(t.type===Ie.UseWeapon){let l=t.args&&t.args[0]||1;return e.useAt.length>=l}if(t.type===Ie.WeaponReady){let l=t.args&&t.args[0]||1;return e.readyAt.length>=l}return!1}function Qe(e,t){if(!t.trigger)return!1;if(t.trigger.type===Ie.BattleStart)return!(t.duration&&e.ts>30*t.duration)&&!He(e,t.removeTrigger);if(t.trigger.type===Ie.Scheduled){let l=t.trigger.args;if(!l)return!(t.duration&&e.ts>30*t.duration);if(t.duration){let a=30*t.duration,u=30*l[0],s=30*l[1];if(e.ts<s)return!1;if((e.ts-s)%u>=a)return!1}return!He(e,t.removeTrigger)}if(t.trigger.type===Ie.UseWeapon){let l=e.useAt.length;if(0===l)return!1;let a=t.trigger.args||[1,1];if(l<a[1])return!1;if((l-a[1])%a[0]!=0)return!1;if(t.duration){if(e.ts-e.useAt.slice(-1)[0]>=30*t.duration)return!1}return!He(e,t.removeTrigger)}if(t.trigger.type===Ie.WeaponReady){let l=e.readyAt.length;if(0===l)return!1;let a=t.trigger.args||[1,1];if(l<a[1])return!1;if((l-a[1])%a[0]!=0)return!1;if(t.duration){if(e.ts-e.readyAt.slice(-1)[0]>=30*t.duration)return!1}return!He(e,t.removeTrigger)}return 0}function Xe(e,t){let l={ReloadAdd:0,ReloadAddRatio:0,CDAddRatio:0};for(let a of e)Qe(t,a)&&(l[a.type]+=a.value);return l}function Ye(e){let t=[],l=[];for(let n of e.ships){if(!n.id)continue;let t=et.state.ships[n.id],a=et.state.shipTemplates[t.templateId],u=Re.BB;a.type!==Ve.CV&&a.type!==Ve.CVL||(u=Re.CV);let s={id:n.id,ship:n,refShip:t,templ:a,cdType:u,reload:t.reload+Je(n.equips)+Ge(e.tech,a.type),buffs:[],progress:0,readyAt:[],useAt:[],rawCD:0};if(s.cdType===Re.BB)s.rawCD=(et.state.equips[n.equips[0]]||{}).cd||NaN;else{let e=0,t=0;for(let l=0;l<3;++l){let u=n.equips[l];0!==u&&(e+=a.equipCnt[l],t+=a.equipCnt[l]*(et.state.equips[u].cd||NaN))}s.rawCD=2.2*t/e}if(!isNaN(s.rawCD)){for(let t of e.ships)for(let e of t.buffs||[])We(e.target,a)&&s.buffs.push(e);n.extraBuff.ReloadAddRatio&&s.buffs.push({id:"手动设置的装填Buff",type:Se.ReloadAddRatio,value:n.extraBuff.ReloadAddRatio,trigger:{type:Ie.BattleStart},target:{type:Oe.Self,args:n.id}}),n.extraBuff.CDAddRatio&&s.buffs.push({id:"手动设置的CD Buff",type:Se.CDAddRatio,value:-n.extraBuff.CDAddRatio,trigger:{type:Ie.BattleStart},target:{type:Oe.Self,args:n.id}}),l.push(s);for(let e of n.equips){let t=et.state.equips[e];if(t)for(let e of t.buffs||[])s.buffs.push(e)}}}const a=30*e.config.time;let u={CV:-1,BB:-1},s={};for(let n=30*et.state.config.delay.enter;n<a;++n)for(let e of l){let l=Xe(e.buffs,{ts:n,readyAt:e.readyAt,useAt:e.useAt}),a=e.reload*(1+(l.ReloadAddRatio||0)/100),i=1/(je(e.rawCD,a)*(1+(l.CDAddRatio||0)/100))/30;e.progress+=i,e.progress>=1&&(e.progress=0,e.readyAt.push(n),(n/30).toFixed(4),e.refShip.name,u[e.cdType],s[e.id]={shipId:e.id,name:e.refShip.name,cdType:e.cdType,readyTs:n/30,useTs:0}),e.readyAt.length>e.useAt.length&&n>=u[e.cdType]&&(e.useAt.push(n),s[e.id].useTs=n/30,t.push(s[e.id]),e.cdType===Re.BB?(e.progress=0,u[e.cdType]=n+30*et.state.config.commonCd.BB):u[e.cdType]=n+30*et.state.config.commonCd.CV)}return t}const et={state:q({shipTemplates:{},equips:{},equipOptions:[],ships:{},shipId:"",fleets:[],fleetIdx:0,config:{ignoreCommonEquips:!0,delay:{enter:1.5,CV:3.4,BB:1.2},duration:{CV:1,BB:3.2},commonCd:{CV:.6,BB:1.2}}}),chooseFleet(e){et.state.fleetIdx=e},addShip(e){const t=et.state.shipTemplates[e];let l={id:A(),templateId:e,name:t.name,lvl:120,mode:"auto",intimacy:"爱",reload:0};return l.reload=Pe(l),et.state.ships[l.id]=l,l},removeShip(e){delete et.state.ships[e];for(let t of et.state.fleets)for(let l of t.ships)l.id===e&&(l.id=null,l.equips=[0,0,0,0,0])},removeFleet(e){et.state.fleets.splice(e,1),et.state.fleetIdx===e&&e>0&&--et.state.fleetIdx,0===et.state.fleets.length&&this.addFleet()},addFleet(){let e={id:A(),name:"新舰队配置-"+(new Date).toLocaleString(),ships:[],buffs:[],config:{time:120,showTimeAsLeft:!1},tech:{BB:0,CV:0,CVL:0},targets:[]};for(let t=0;t<3;++t)e.ships.push({id:null,equips:[],extraBuff:{ReloadAddRatio:0,CDAddRatio:0}});return et.state.fleets.push(e),et.state.fleetIdx=et.state.fleets.length-1,et.state.fleets[et.state.fleetIdx]},copyFleet(){let e=JSON.parse(JSON.stringify(et.state.fleets[et.state.fleetIdx]));return e.id=A(),e.name=e.name+" 复制",et.state.fleets.push(e),et.state.fleetIdx=et.state.fleets.length-1,et.state.fleets[et.state.fleetIdx]},persist(){let e=JSON.stringify(et.state);localStorage.setItem("STORE",e)},setup(){0===et.state.fleets.length&&this.addFleet(),async function(){return(await R.get("/data/ships.json")).data}().then((e=>{try{let t=localStorage.getItem("STORE"),l=JSON.parse(t||"");l.shipTemplates=e;for(let e in l)et.state[e]=l[e]}catch(t){this.addFleet()}et.state.shipTemplates=e;for(let l of et.state.fleets)l.targets||(l.targets=[])})),async function(){return(await R.get("/data/equips.json")).data}().then((e=>{et.state.equips=e}))}};et.setup(),window.addEventListener("beforeunload",et.persist);var tt=o({props:{equip:{type:Number,required:!0},cnt:{type:[Number,null],required:!1}},setup(e){const t=e,l=T((()=>et.state.equips[t.equip]||{})),a=T((()=>{if(!l.value.name)return"－";let e=l.value.name+" T"+l.value.tech;return t.cnt&&(e="("+t.cnt+"*)"+e),e}));return(e,t)=>(p(),S("span",{class:I("equip rarity-"+v(l).rarity)},D(v(a)),3))}});const lt={4:"战列",5:"战巡",6:"轻航",7:"正航"},at={4:"战列炮",7:"战斗机",8:"鱼雷机",9:"轰炸机",101:"航母设备",102:"战列设备"},ut=x("计算CD"),st=["onClick"];var nt=o({props:{ship:{type:null,required:!0},baseReload:{type:Number,required:!0},techReload:{type:Number,required:!0},extraBuffStats:{type:null,required:!0}},emits:["select"],setup(e,{emit:t}){const l=e,a=U(),u=et.state.ships[l.ship.id],s=et.state.shipTemplates[u.templateId];function n(e){let t=[],l=s.equipSlots[e];for(let a in et.state.equips){let u=et.state.equips[a];if(!(et.state.config.ignoreCommonEquips&&u.rarity<=3)&&(Ze(l,u.type)||3===e&&u.type===Ne.auxiliaryCV&&(s.type===Ve.CV||s.type===Ve.CVL)||e>=3&&u.type===Ne.auxiliaryBB&&(s.type===Ve.BB||s.type===Ve.BC))){let e=u.name+" T"+u.tech;l.length>1&&(e="("+at[u.type]+")"+e),t.push({value:u.id,label:e,data:u})}}return t.sort(((e,t)=>e.data.type!=t.data.type?e.data.type-t.data.type:(e.data.cd||0)-(t.data.cd||0))),t.length>0&&e>=3&&t.push({value:0,label:"无",data:{}}),t}const i=[];for(let r=0;r<5;++r)i.push(n(r));const o=[],d=r({}),f=r([]);function m(e){return Ke({id:l.ship.id,equips:e,extraBuff:{}},l.extraBuffStats)}function y(e,t){o[e]=t;let l=1,a=[];for(let u=0;u<5;++u){let e=o[u].length||1;i[u].length&&a.push(e),l*=e}d.value={total:l,desc:a.join("*")},l<50&&g()}function g(){d.value.total&&d.value.total>1e3?a.warning("选项数量过多!"):(f.value=function(){let e=function(e,t){function l(e,l){let a=[];l&&0!==l.length||(l=[t]);for(let t of e)for(let e of l){let l=t.slice();l.push(e),a.push(l)}return a}let a=[[]];for(let u of e)a=l(a,u);return a}(o,0).map(m);return e.sort(((e,t)=>e.realCD-t.realCD)),e}(),d.value.updated=!0)}for(let r=0;r<5;++r){let e=l.ship.equips[r];o[r]=e?[e]:[]}function C(e,t){return B("div",{class:"equip rarity-"+e.data.rarity},{default:()=>e.label})}return y(0,o[0]),V((()=>[l.techReload,l.baseReload]),(()=>{f.value=[]})),(e,l)=>{var a;return p(),S("div",null,[(p(),S(L,null,O([0,1,2,3,4],(e=>h(v(F),{multiple:"",cascade:"",checkable:"",filterable:"","default-expand-all":"","check-strategy":"child","default-value":o[e],"onUpdate:value":t=>y(e,t),options:i[e],"max-tag-count":"responsive",disabled:0===i[e].length,"render-label":C},null,8,["default-value","onUpdate:value","options","disabled"]))),64)),x(" 总选项数量: "+D(d.value.desc)+"="+D(d.value.total)+" ",1),h(v(N),{type:"primary",onClick:l[0]||(l[0]=e=>g())},{default:c((()=>[ut])),_:1}),b("table",null,[b("tbody",null,[(p(!0),S(L,null,O(null==(a=f.value)?void 0:a.slice(0,100),(e=>(p(),S("tr",{onClick:l=>t("select",e.ids)},[(p(!0),S(L,null,O(e.ids,(e=>(p(),S("td",null,[h(tt,{equip:e},null,8,["equip"])])))),256)),b("td",null,"面板CD "+D(e.dispCD),1),b("td",null,"实际CD "+D(e.realCD&&e.realCD.toFixed(4)),1)],8,st)))),256))])])])}}});const it={class:"ship-card"},ot={key:0},rt=["src","alt"],dt=b("br",null,null,-1),pt={key:1,class:"ship-card-image",style:{background:"#333"}};var ft=o({props:{template:{type:Number,required:!0},name:{type:String,required:!1}},setup(e){const t=e,l=T((()=>et.state.shipTemplates[t.template])),a=T((()=>t.name||l.value.name));return(t,u)=>(p(),S("div",it,[e.template>0?(p(),S("div",ot,[b("img",{class:"ship-card-image",src:v(l).img,alt:v(l).name},null,8,rt),dt])):(p(),S("div",pt)),x(" "+D(v(a)),1)]))}});const ct=x("选择舰娘"),vt={key:1},ht={style:{"text-align":"center"}},mt=b("br",null,null,-1),yt=["title"],bt=x(" 装填 "),gt={class:"white"},Ct={key:0,class:"green"},wt={key:1,class:"blue"},_t=b("br",null,null,-1),xt={title:"技能Buff(将自动计算装备Buff, 无需手动添加)"},Bt=x("% "),kt=x("% "),qt=x("取消");var At=o({props:{ship:{type:null,required:!0},fleetBuffs:{type:Array,required:!0},tech:{type:null,required:!0}},emits:["ship-click","set-equips"],setup(e,{emit:t}){const l=e,a=T((()=>{if(l.ship.id)return et.state.ships[l.ship.id]})),u=T((()=>Je(l.ship.equips))),s=T((()=>{var e;return Ge(l.tech,null==(e=d.value)?void 0:e.type)}));T((()=>a.value?a.value.reload+u.value+s.value:0));const n=T((()=>Ke(l.ship,i.value))),i=T((()=>{var e;if(a.value&&d.value){let t=$e(l.fleetBuffs,d.value);return t.ReloadAdd=(t.ReloadAdd||0)+Ge(l.tech,null==(e=d.value)?void 0:e.type),t.CDAddRatio=(t.CDAddRatio||0)-(l.ship.extraBuff.CDAddRatio||0),t.ReloadAddRatio=(t.ReloadAddRatio||0)+(l.ship.extraBuff.ReloadAddRatio||0),t}return{}})),o=T((()=>a.value?"auto"!==a.value.mode?"手动输入":"Lv"+a.value.lvl+" "+a.value.intimacy:"")),d=T((()=>a.value?et.state.shipTemplates[a.value.templateId]:null));T((()=>d.value?lt[d.value.type]:"未选择"));const m=r(!1),y=T((()=>"ES-"+l.ship.id));return(l,r)=>(p(),S(L,null,[v(a)?z("",!0):(p(),f(v(E),{key:0},{default:c((()=>[h(v(N),{onClick:r[0]||(r[0]=e=>t("ship-click"))},{default:c((()=>[ct])),_:1})])),_:1})),v(a)?(p(),S("div",vt,[h(v(E),{align:"center"},{default:c((()=>[h(ft,{template:v(a).templateId,name:v(a).name,onClick:r[1]||(r[1]=e=>t("ship-click"))},null,8,["template","name"]),b("div",ht,[x(" 面板CD "+D(v(n).dispCD)+" ",1),mt,b("span",{title:v(o)},[bt,b("span",gt,D(v(a).reload),1),v(u)>0?(p(),S("span",Ct,"+"+D(v(u)),1)):z("",!0),v(s)>0?(p(),S("span",wt,"+"+D(v(s)),1)):z("",!0)],8,yt),_t]),b("div",xt,[h(v(j),{label:"装填+","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:e.ship.extraBuff.ReloadAddRatio,"onUpdate:value":r[2]||(r[2]=t=>e.ship.extraBuff.ReloadAddRatio=t),style:{width:"100px"}},null,8,["value"]),Bt])),_:1}),h(v(j),{label:"射速+","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:e.ship.extraBuff.CDAddRatio,"onUpdate:value":r[3]||(r[3]=t=>e.ship.extraBuff.CDAddRatio=t),style:{width:"100px"}},null,8,["value"]),kt])),_:1})]),b("div",null,"实际CD: "+D(v(n).realCD&&v(n).realCD.toFixed(4)),1),b("div",{onClick:r[4]||(r[4]=e=>m.value=!0),style:{cursor:"pointer"}},[(p(!0),S(L,null,O(e.ship.equips,((e,t)=>(p(),S("span",null,[h(tt,{equip:e,cnt:v(d)&&v(d).equipCnt[t]},null,8,["equip","cnt"])])))),256))]),W(l.$slots,"default")])),_:3})])):z("",!0),v(a)&&v(d)?(p(),f(v($),{key:2,show:m.value,"onUpdate:show":r[7]||(r[7]=e=>m.value=e),"display-directive":"show","mask-closable":!1},{default:c((()=>[h(v(M),{style:{width:"90%"},title:"调整装备"},{"header-extra":c((()=>[h(v(N),{onClick:r[5]||(r[5]=e=>m.value=!1)},{default:c((()=>[qt])),_:1})])),default:c((()=>[h(nt,{key:v(y),ship:e.ship,baseReload:v(a).reload,techReload:v(s),extraBuffStats:v(i),onSelect:r[6]||(r[6]=e=>{t("set-equips",e),m.value=!1})},null,8,["ship","baseReload","techReload","extraBuffStats"])])),_:1})])),_:1},8,["show"])):z("",!0)],64))}});J("data-v-59457429");const Rt=x("删除");K();var Tt=o({props:{value:{type:null,required:!0},ships:{type:Array,required:!0}},emits:["delete"],setup(e,{emit:t}){const l=e;l.value.custom=l.value.custom||"",l.value.schedule=l.value.schedule||[20,20,20],l.value.weapon=l.value.weapon||{bindId:"",duration:8};const a=[{value:"schedule",label:"固定间隔"},{value:"custom",label:"自定义"},{value:"weapon",label:"绑定武器"}],u=T((()=>{let e=[];for(let t of l.ships){if(!t.id)continue;let l=et.state.ships[t.id];e.push({value:l.id,label:l.name})}return e}));return(l,s)=>(p(),f(v(G),{inline:"",model:e.value,ref:(e,t)=>{t.formRef=e}},{default:c((()=>[h(v(E),null,{default:c((()=>[h(v(j),{label:"名称","label-placement":"left",path:"name"},{default:c((()=>[h(v(Z),{value:e.value.name,"onUpdate:value":s[0]||(s[0]=t=>e.value.name=t)},null,8,["value"])])),_:1}),h(v(j),{label:"","label-placement":"left",path:"name"},{default:c((()=>[h(v(F),{options:a,value:e.value.type,"onUpdate:value":s[1]||(s[1]=t=>e.value.type=t)},null,8,["value"])])),_:1}),"schedule"===e.value.type?(p(),S(L,{key:0},[h(v(j),{label:"间隔","label-placement":"left",path:"name"},{default:c((()=>[h(v(P),{"default-value":e.value.schedule[0],onUpdateValue:s[2]||(s[2]=t=>e.value.schedule[0]=t||0)},null,8,["default-value"])])),_:1}),h(v(j),{label:"持续","label-placement":"left",path:"name"},{default:c((()=>[h(v(P),{"default-value":e.value.schedule[1],onUpdateValue:s[3]||(s[3]=t=>e.value.schedule[1]=t||0)},null,8,["default-value"])])),_:1}),h(v(j),{label:"首轮CD","label-placement":"left",path:"name"},{default:c((()=>[h(v(P),{"default-value":e.value.schedule[2],onUpdateValue:s[4]||(s[4]=t=>e.value.schedule[2]=t||0)},null,8,["default-value"])])),_:1})],64)):"custom"===e.value.type?(p(),f(v(j),{key:1,label:"时间","label-placement":"left",path:"name"},{default:c((()=>[h(v(Z),{value:e.value.custom,"onUpdate:value":s[5]||(s[5]=t=>e.value.custom=t),style:{width:"300px","flex-shrink":"0.5"}},null,8,["value"])])),_:1})):(p(),S(L,{key:2},[h(v(j),{label:"目标","label-placement":"left",path:"name"},{default:c((()=>[h(v(F),{"fallback-option":()=>!1,style:{"min-width":"100px"},options:v(u),value:e.value.weapon.bindId,"onUpdate:value":s[6]||(s[6]=t=>e.value.weapon.bindId=t)},null,8,["fallback-option","options","value"])])),_:1}),h(v(j),{label:"延迟","label-placement":"left",path:"name"},{default:c((()=>[h(v(P),{value:e.value.weapon.delay,"onUpdate:value":s[7]||(s[7]=t=>e.value.weapon.delay=t)},null,8,["value"])])),_:1}),h(v(j),{label:"持续","label-placement":"left",path:"name"},{default:c((()=>[h(v(P),{value:e.value.weapon.duration,"onUpdate:value":s[8]||(s[8]=t=>e.value.weapon.duration=t)},null,8,["value"])])),_:1})],64)),h(v(N),{type:"error",onClick:s[9]||(s[9]=e=>t("delete"))},{default:c((()=>[Rt])),_:1})])),_:1})])),_:1},8,["model"]))}});Tt.__scopeId="data-v-59457429",J("data-v-50f67c28");const St={class:"footer"};K();var Dt=o({props:{fleet:{type:null,required:!0}},setup(e){const a=e,u=r(null);let s;H([Y,ee,te,le,ae,ue,se]);var n={showTimeAsLeft:!1,maxDuration:180,selected:[0,0]};let o=T((()=>et.state.config));function d(e,t){var l=t.value(0),a=t.coord([t.value(1),l]),u=t.coord([t.value(2),l]),s=.8*t.size([0,1])[1],n=ne({x:a[0],y:a[1]-s/2,width:u[0]-a[0],height:s},{x:e.coordSys.x,y:e.coordSys.y,width:e.coordSys.width,height:e.coordSys.height});return n&&{type:"rect",transition:["shape"],shape:n,style:{fill:"#368c6c"}}}function f(e,t=3){return parseFloat(e).toFixed(t).replace(/0+$/,"").replace(/\.$/,"")}function c(e){var t="00"+Math.floor(e/60);t=t.substr(t.length-2);var l="00"+Math.floor(e%60);l=l.substr(l.length-2);var a=e%1;return a&&(l+=a.toFixed(2).substr(1)),t+":"+l}const v={tooltip:{formatter:function(e){var t;return t=n.showTimeAsLeft?`: ${c(n.maxDuration-e.value[1])} ~ ${c(n.maxDuration-e.value[2])}`:`: ${f(e.value[1])}s~${f(e.value[2])}s`,e.marker+e.name+t}},dataZoom:[{type:"slider",filterMode:"weakFilter",showDataShadow:!1,labelFormatter:""},{type:"inside",filterMode:"weakFilter"}],xAxis:{type:"value",min:0,scale:!0,axisPointer:{show:!0,snap:!1,triggerTooltip:!1},axisLabel:{formatter:function(e){return n.showTimeAsLeft&&(e=n.maxDuration-e),c(e)}}},yAxis:{data:[]}};function h(e,t){let l=[];if("schedule"===e.type){let[t,a,u]=e.schedule;for(let s=u;s<n.maxDuration;s+=t)l.push({name:e.name,value:[e.name,s,s+a,a]});return l}if("custom"===e.type){let t=e.custom.match(/(\d+(\.\d+)?)/g);if(!t)return l;for(let a=0;a<t.length;a+=2){let u=parseFloat(t[a]),s=parseFloat(t[a+1]);isNaN(s)||l.push({name:e.name,value:[e.name,u,s,s-u]})}return l}if("weapon"===e.type){t||(t=Ye(a.fleet));for(let a of t)if(a.shipId===e.weapon.bindId){let t=a.useTs+e.weapon.delay;l.push({name:e.name,value:[e.name,t,t+e.weapon.duration,e.weapon.duration]})}return l}return[]}let m;function y(){if(!s)return;n.maxDuration=a.fleet.config.time,n.showTimeAsLeft=a.fleet.config.showTimeAsLeft;let e={},u=[];m=[];let r=Ye(a.fleet);for(let t of r){e[t.name]||(e[t.name]=1,m.push(t.name));let l=t.useTs+o.value.delay[t.cdType],a=o.value.duration[t.cdType],s={name:t.name,id:t.shipId,value:[t.name,l,l+a,a]};u.push(s)}for(let s of a.fleet.targets)e[s.name]?(e[s.name]+=1,p=i({},s),f={name:s.name+" "+e[s.name]},s=t(p,l(f))):e[s.name]=1,m.push(s.name),u.push(...h(s,r));var p,f;s.setOption({series:[{type:"custom",renderItem:d,itemStyle:{opacity:.8},encode:{x:[1,2],y:0},data:u}],xAxis:{max:n.maxDuration},yAxis:{data:m,inverse:!0}})}function g(){s.setOption({graphic:{id:"bg",type:"rect",shape:{x:0,y:0,width:0,height:0}}}),n.selected=[0,0]}return Q((()=>{let e=document.getElementById("align-chart");e&&(s=X(e),s.setOption(v),e.addEventListener("resize",s.resize),window.addEventListener("resize",s.resize),y(),s.on("click",(function(e){e.value&&(n.selected[0]!==e.value[1]||n.selected[1]!==e.value[2]?(n.selected=[e.value[1],e.value[2]],function(){let e=s.convertToPixel({xAxisIndex:0,yAxisIndex:0},[n.selected[0],m.length]),t=s.convertToPixel({xAxisIndex:0,yAxisIndex:0},[n.selected[1],-1]),l=(t[1]-e[1])/m.length;s.setOption({graphic:{id:"bg",type:"rect",shape:{x:e[0],y:e[1]+.4*l,width:t[0]-e[0],height:l*(m.length-.8)},style:{fill:"rgba(0,0,0,0.3)"}}})}()):g())})),s.on("datazoom",g))})),V(a,y),(e,t)=>(p(),S("div",St,[b("div",{id:"align-chart",ref:(e,t)=>{t.chartRef=e,u.value=e},class:"chart-box"},null,512)]))}});Dt.__scopeId="data-v-50f67c28";const It={style:{"padding-bottom":"400px"}},Ut=x("选择"),Vt=x("添加"),Lt=x("复制"),Ot=x("删除"),Ft=x("上移"),Nt=x("舰队Buff列表： "),Et=x("将自动计算舰娘技能:"),zt=x(" 对轴目标列表: "),jt=x("添加"),Pt=x("取消"),Wt=x("取消");var Mt=o({setup(e){const t=U(),l=ie(),a=T((()=>et.state.fleets[et.state.fleetIdx])),u=T((()=>et.state.fleets.map(((e,t)=>({value:t,label:e.name}))))),s=r(!1);let n=r(0);const i=r(!1);oe((()=>{}));const o=r(a.value.buffs),d=r([]);T((()=>[...o.value,...d.value]));const m=T((()=>et.state.ships));function y(e){for(let t of a.value.ships)if(t&&t.id===e.id)return!1;return!0}function C(e){let t=a.value.ships[n.value];if(e){t.id=e.id,t.buffs=(l=et.state.shipTemplates[e.templateId].buffs||[],JSON.parse(JSON.stringify(l)));for(let l of t.buffs)l.target.type===Oe.Self&&(l.target.args=e.templateId)}else t.id=null;var l;t.equips=[0,0,0,0,0],s.value=!1}T((()=>a.value.ships[n.value]));const w=T((()=>{let e=[];for(let t of a.value.ships){if(!t.id)continue;let l=et.state.ships[t.id];for(let a of t.buffs||[])e.push({from:l.name,name:a.name})}return e}));return(e,r)=>(p(),S(L,null,[b("div",It,[h(v(j),{"label-placement":"left",path:"fleet.name"},{default:c((()=>[h(v(re),{value:v(et).state.fleetIdx,"onUpdate:value":r[0]||(r[0]=e=>v(et).state.fleetIdx=e),options:v(u),placement:"bottom-start",trigger:"click"},{default:c((()=>[h(v(N),null,{default:c((()=>[Ut])),_:1})])),_:1},8,["value","options"]),h(v(Z),{value:v(a).name,"onUpdate:value":r[1]||(r[1]=e=>v(a).name=e)},null,8,["value"]),h(v(N),{onClick:r[2]||(r[2]=e=>(et.addFleet(),void t.success("已添加舰队 "+a.value.name)))},{default:c((()=>[Vt])),_:1}),h(v(N),{onClick:r[3]||(r[3]=e=>(et.copyFleet(),void t.success("已复制舰队 "+a.value.name)))},{default:c((()=>[Lt])),_:1}),h(v(N),{type:"error",onClick:r[4]||(r[4]=e=>{l.warning({title:"警告",content:"确定删除当前舰队配置?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{et.removeFleet(et.state.fleetIdx),t.success("已删除")}})})},{default:c((()=>[Ot])),_:1})])),_:1}),(p(!0),S(L,null,O(v(a).ships,((e,t)=>(p(),f(v(ve),null,{default:c((()=>[h(v(ce),{span:24},{default:c((()=>[h(At,{ship:e,fleetBuffs:o.value,tech:v(a).tech,onShipClick:e=>function(e){n.value=e,s.value=!0}(t),onSetEquips:e=>function(e,t){a.value.ships[e].equips=t}(t,e)},{default:c((()=>[t>0?(p(),f(v(N),{key:0,onClick:e=>function(e){let t=a.value.ships[e];a.value.ships[e]=a.value.ships[e-1],a.value.ships[e-1]=t}(t)},{default:c((()=>[Ft])),_:2},1032,["onClick"])):z("",!0)])),_:2},1032,["ship","fleetBuffs","tech","onShipClick","onSetEquips"])])),_:2},1024)])),_:2},1024)))),256)),Nt,h(v(E),null,{default:c((()=>[h(v(j),{label:"轻航装填","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:v(a).tech.CVL,"onUpdate:value":r[5]||(r[5]=e=>v(a).tech.CVL=e)},null,8,["value"])])),_:1}),h(v(j),{label:"正航装填","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:v(a).tech.CV,"onUpdate:value":r[6]||(r[6]=e=>v(a).tech.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列装填","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:v(a).tech.BB,"onUpdate:value":r[7]||(r[7]=e=>v(a).tech.BB=e)},null,8,["value"])])),_:1})])),_:1}),v(w).length>0?(p(),f(v(E),{key:0,style:{"background-color":"antiquewhite"}},{default:c((()=>[h(v(g),null,{default:c((()=>[Et])),_:1}),(p(!0),S(L,null,O(v(w),(e=>(p(),f(v(he),null,{default:c((()=>[x(D(e.name),1)])),_:2},1024)))),256))])),_:1})):z("",!0),h(v(E),null,{default:c((()=>[zt,h(v(j),{label:"时间","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:v(a).config.time,"onUpdate:value":r[8]||(r[8]=e=>v(a).config.time=e)},null,8,["value"])])),_:1}),h(v(j),{label:"按剩余时间展示","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(de),{value:v(a).config.showTimeAsLeft,"onUpdate:value":r[9]||(r[9]=e=>v(a).config.showTimeAsLeft=e)},null,8,["value"])])),_:1}),h(v(N),{onClick:r[10]||(r[10]=e=>{a.value.targets.push({name:"20s轴",type:"schedule",schedule:[20,10,20],custom:"",weapon:{bindId:"",delay:0,duration:8}})})},{default:c((()=>[jt])),_:1})])),_:1}),(p(!0),S(L,null,O(v(a).targets,((e,t)=>(p(),f(v(E),null,{default:c((()=>[h(Tt,{ships:v(a).ships,value:e,onDelete:e=>v(a).targets.splice(t,1)},null,8,["ships","value","onDelete"])])),_:2},1024)))),256)),h(Dt,{fleet:v(a)},null,8,["fleet"])]),h(v($),{show:s.value,"onUpdate:show":r[13]||(r[13]=e=>s.value=e),"display-directive":"show"},{default:c((()=>[h(v(M),{style:{width:"90%"},title:"选择舰娘"},{"header-extra":c((()=>[h(v(N),{onClick:r[11]||(r[11]=e=>s.value=!1)},{default:c((()=>[Pt])),_:1})])),default:c((()=>[h(v(pe),{"x-gap":"2",cols:"2 400:3 600:4 800:5 1000:6 1200:12"},{default:c((()=>[h(v(fe),{bordered:!1,class:"ship-card",onClick:r[12]||(r[12]=e=>C(null))},{default:c((()=>[h(ft,{template:0,name:"取消选择"})])),_:1}),(p(!0),S(L,null,O(v(m),(e=>me((p(),f(v(fe),{bordered:!1,class:"ship-card",onClick:t=>C(e)},{default:c((()=>[h(ft,{template:e.templateId,name:e.name},null,8,["template","name"])])),_:2},1032,["onClick"])),[[ye,y(e)]]))),256))])),_:1})])),_:1})])),_:1},8,["show"]),h(v($),{show:i.value,"onUpdate:show":r[15]||(r[15]=e=>i.value=e)},{default:c((()=>[h(v(M),{style:{width:"90%"},title:"添加Buff"},{"header-extra":c((()=>[h(v(N),{onClick:r[14]||(r[14]=e=>i.value=!1)},{default:c((()=>[Wt])),_:1})])),_:1})])),_:1},8,["show"])],64))}});const $t=["src","alt"],Jt=x("输入"),Kt=x("自动"),Zt=x("  "),Gt=x("陌生"),Ht=x("友好"),Qt=x("喜欢"),Xt=x("爱"),Yt=x("誓约"),el=x("200");var tl=o({props:{ship:{type:null,required:!0}},emits:["update:value"],setup(e,{emit:t}){const l=e,a=T((()=>et.state.shipTemplates[l.ship.templateId])),u=r(l.ship);return V([u.value],(()=>{if("auto"===u.value.mode){let e=Pe(u.value);u.value.reload=e}t("update:value",u.value)}),{immediate:!0}),(e,t)=>(p(),f(v(E),null,{default:c((()=>[b("img",{src:v(a).img,alt:v(a).name,style:{"border-radius":"10px",width:"80px",height:"80px"}},null,8,$t),h(v(E),null,{default:c((()=>[h(v(j),{path:"name","show-feedback":!1,"label-placement":"left",style:{"min-width":"120px"}},{default:c((()=>[h(v(Z),{value:u.value.name,"onUpdate:value":t[0]||(t[0]=e=>u.value.name=e)},null,8,["value"])])),_:1}),h(v(j),{path:"mode","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(be),{value:u.value.mode,"onUpdate:value":t[1]||(t[1]=e=>u.value.mode=e)},{default:c((()=>[h(v(ge),{size:"small",value:"input"},{default:c((()=>[Jt])),_:1}),h(v(ge),{size:"small",value:"auto"},{default:c((()=>[Kt])),_:1})])),_:1},8,["value"])])),_:1}),h(v(j),{label:"装填",path:"reload","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(P),{value:u.value.reload,"onUpdate:value":t[2]||(t[2]=e=>u.value.reload=e),disabled:"auto"==u.value.mode,class:"short-num-input",style:{width:"200px"}},null,8,["value","disabled"])])),_:1})])),_:1}),"auto"===u.value.mode?(p(),f(v(E),{key:0},{default:c((()=>[h(v(j),{label:"等级",path:"lvl","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(P),{min:100,max:125,value:u.value.lvl,"onUpdate:value":t[3]||(t[3]=e=>u.value.lvl=e),disabled:"auto"!=u.value.mode,class:"short-num-input",style:{width:"200px"}},null,8,["value","disabled"]),Zt,h(v(Ce),{value:u.value.lvl,"onUpdate:value":t[4]||(t[4]=e=>u.value.lvl=e),min:100,max:125,disabled:"auto"!=u.value.mode,style:{width:"200px"},tooltip:!1},null,8,["value","disabled"])])),_:1}),h(v(j),{path:"intimacy","show-feedback":!1,"label-placement":"left"},{default:c((()=>[h(v(be),{value:u.value.intimacy,"onUpdate:value":t[5]||(t[5]=e=>u.value.intimacy=e),disabled:"auto"!=u.value.mode},{default:c((()=>[h(v(ge),{class:"intimacy-option",size:"small",value:"陌生"},{default:c((()=>[Gt])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"友好"},{default:c((()=>[Ht])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"喜欢"},{default:c((()=>[Qt])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"爱"},{default:c((()=>[Xt])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"誓约"},{default:c((()=>[Yt])),_:1}),h(v(ge),{class:"intimacy-option",size:"small",value:"誓约200"},{default:c((()=>[el])),_:1})])),_:1},8,["value","disabled"])])),_:1})])),_:1})):z("",!0)])),_:1}))}});const ll=x("删除"),al=b("hr",null,null,-1),ul=x("添加舰娘"),sl=x("取消"),nl=b("br",null,null,-1);var il=o({setup(e){const t=r(!1),l=T((()=>et.state.ships)),a=r("");function u(e){return!a.value||0===a.value.length||e.match.indexOf(a.value)>-1}const s=T((()=>{let e=[];for(let t in et.state.shipTemplates){let l=i({},et.state.shipTemplates[t]);l.key=l.id,e.push(l)}return e}));const n=r(null);return(e,i)=>(p(),S(L,null,[(p(!0),S(L,null,O(v(l),((e,t)=>(p(),f(v(ve),null,{default:c((()=>[h(v(ce),{span:21},{default:c((()=>[h(tl,{ship:e,"onUpdate:modelValue":t=>v(l)[e.id]=t},null,8,["ship","onUpdate:modelValue"])])),_:2},1024),h(v(ce),{span:3},{default:c((()=>[h(v(N),{onClick:t=>function(e){et.removeShip(e)}(e.id),type:"error"},{default:c((()=>[ll])),_:2},1032,["onClick"])])),_:2},1024),al])),_:2},1024)))),256)),h(v(E),{justify:"center"},{default:c((()=>[h(v(N),{onClick:i[0]||(i[0]=e=>(t.value=!0,void setTimeout((()=>{n.value&&n.value.focus()}),2)))},{default:c((()=>[ul])),_:1})])),_:1}),h(v($),{show:t.value,"onUpdate:show":i[3]||(i[3]=e=>t.value=e),"display-directive":"show"},{default:c((()=>[h(v(M),{style:{width:"90%"},title:"添加舰娘"},{"header-extra":c((()=>[h(v(N),{onClick:i[1]||(i[1]=e=>t.value=!1)},{default:c((()=>[sl])),_:1})])),default:c((()=>[h(v(j),{"label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(Z),{ref:(e,t)=>{t.searchRef=e,n.value=e},value:a.value,"onUpdate:value":i[2]||(i[2]=e=>a.value=e),placeholder:"搜索舰娘名称/拼音"},null,8,["value"])])),_:1}),nl,h(v(pe),{"x-gap":"2",cols:"2 400:3 600:4 800:5 1000:6 1200:12"},{default:c((()=>[(p(!0),S(L,null,O(v(s),(e=>me((p(),f(v(fe),{bordered:!1,class:"ship-card",onClick:l=>{return a=e.key,et.addShip(a),void(t.value=!1);var a}},{default:c((()=>[h(ft,{template:e.key},null,8,["template"])])),_:2},1032,["onClick"])),[[ye,u(e)]]))),256))])),_:1}),0==v(s).length?(p(),f(v(we),{key:0})):z("",!0)])),_:1})])),_:1},8,["show"])],64))}});const ol=b("span",null,"命中延迟时间",-1),rl=b("span",null,"攻击持续时间",-1),dl=b("span",null,"公共CD",-1),pl=x("重置舰队数据"),fl=x("重置全部数据");const cl=[{path:"/",component:Mt},{path:"/ships",component:il},{path:"/config",component:o({setup(e){const t=r(et.state.config),l=U();return(e,a)=>(p(),S(L,null,[h(v(j),{label:"忽略低星装备","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(de),{value:t.value.ignoreCommonEquips,"onUpdate:value":a[0]||(a[0]=e=>t.value.ignoreCommonEquips=e)},null,8,["value"])])),_:1}),h(v(j),{label:"公共进图延迟","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.delay.enter,"onUpdate:value":a[1]||(a[1]=e=>t.value.delay.enter=e)},null,8,["value"])])),_:1}),h(v(E),null,{default:c((()=>[ol,h(v(j),{label:"航母","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.delay.CV,"onUpdate:value":a[2]||(a[2]=e=>t.value.delay.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.delay.BB,"onUpdate:value":a[3]||(a[3]=e=>t.value.delay.BB=e)},null,8,["value"])])),_:1})])),_:1}),h(v(E),null,{default:c((()=>[rl,h(v(j),{label:"航母","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.duration.CV,"onUpdate:value":a[4]||(a[4]=e=>t.value.duration.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.duration.BB,"onUpdate:value":a[5]||(a[5]=e=>t.value.duration.BB=e)},null,8,["value"])])),_:1})])),_:1}),h(v(E),null,{default:c((()=>[dl,h(v(j),{label:"航母","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.commonCd.CV,"onUpdate:value":a[6]||(a[6]=e=>t.value.commonCd.CV=e)},null,8,["value"])])),_:1}),h(v(j),{label:"战列","label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(P),{value:t.value.commonCd.BB,"onUpdate:value":a[7]||(a[7]=e=>t.value.commonCd.BB=e)},null,8,["value"])])),_:1})])),_:1}),h(v(j),{"label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(N),{onClick:a[8]||(a[8]=e=>(et.state.fleets=[],et.addFleet(),void l.success("已重置")))},{default:c((()=>[pl])),_:1})])),_:1}),h(v(j),{"label-placement":"left","show-feedback":!1},{default:c((()=>[h(v(N),{onClick:a[9]||(a[9]=e=>(window.removeEventListener("beforeunload",et.persist),localStorage.removeItem("STORE"),l.success("已重置"),void window.location.reload()))},{default:c((()=>[fl])),_:1})])),_:1})],64))}})}],vl=_e({history:xe(),routes:cl}),hl=Be(ze);hl.use(vl),hl.mount("#app");
