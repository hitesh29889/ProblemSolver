"use strict";(self.webpackChunkGembaCI=self.webpackChunkGembaCI||[]).push([[775],{775:(ze,P,d)=>{d.r(P),d.d(P,{DEFAULT_IDENTITY_CREATE_FORM_PROPS:()=>K,DEFAULT_IDENTITY_EDIT_FORM_PROPS:()=>V,DEFAULT_IDENTITY_ENTITY_ACTIONS:()=>w,DEFAULT_IDENTITY_ENTITY_PROPS:()=>Q,DEFAULT_IDENTITY_TOOLBAR_ACTIONS:()=>J,IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS:()=>S,IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS:()=>R,IDENTITY_ENTITY_ACTION_CONTRIBUTORS:()=>A,IDENTITY_ENTITY_PROP_CONTRIBUTORS:()=>M,IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS:()=>x,IdentityExtensionsGuard:()=>O,IdentityModule:()=>Ke,RolesComponent:()=>b,UsersComponent:()=>g});var r=d(6304),e=d(2223);let z=(()=>{class i{constructor(t){this.restService=t,this.apiName="AbpIdentity",this.create=s=>this.restService.request({method:"POST",url:"/api/identity/roles",body:s},{apiName:this.apiName}),this.delete=s=>this.restService.request({method:"DELETE",url:`/api/identity/roles/${s}`},{apiName:this.apiName}),this.get=s=>this.restService.request({method:"GET",url:`/api/identity/roles/${s}`},{apiName:this.apiName}),this.getAllList=()=>this.restService.request({method:"GET",url:"/api/identity/roles/all"},{apiName:this.apiName}),this.getList=s=>this.restService.request({method:"GET",url:"/api/identity/roles",params:{filter:s.filter,sorting:s.sorting,skipCount:s.skipCount,maxResultCount:s.maxResultCount}},{apiName:this.apiName}),this.update=(s,n)=>this.restService.request({method:"PUT",url:`/api/identity/roles/${s}`,body:n},{apiName:this.apiName})}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(r.vgb))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),j=(()=>{class i{constructor(t){this.restService=t,this.apiName="AbpIdentity",this.create=s=>this.restService.request({method:"POST",url:"/api/identity/users",body:s},{apiName:this.apiName}),this.delete=s=>this.restService.request({method:"DELETE",url:`/api/identity/users/${s}`},{apiName:this.apiName}),this.findByEmail=s=>this.restService.request({method:"GET",url:`/api/identity/users/by-email/${s}`},{apiName:this.apiName}),this.findByUsername=s=>this.restService.request({method:"GET",url:`/api/identity/users/by-username/${s}`},{apiName:this.apiName}),this.get=s=>this.restService.request({method:"GET",url:`/api/identity/users/${s}`},{apiName:this.apiName}),this.getAssignableRoles=()=>this.restService.request({method:"GET",url:"/api/identity/users/assignable-roles"},{apiName:this.apiName}),this.getList=s=>this.restService.request({method:"GET",url:"/api/identity/users",params:{filter:s.filter,sorting:s.sorting,skipCount:s.skipCount,maxResultCount:s.maxResultCount}},{apiName:this.apiName}),this.getRoles=s=>this.restService.request({method:"GET",url:`/api/identity/users/${s}/roles`},{apiName:this.apiName}),this.update=(s,n)=>this.restService.request({method:"PUT",url:`/api/identity/users/${s}`,body:n},{apiName:this.apiName}),this.updateRoles=(s,n)=>this.restService.request({method:"PUT",url:`/api/identity/users/${s}/roles`,body:n},{apiName:this.apiName})}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(r.vgb))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var m=d(6104),l=d(9338),T=d(8746),v=d(8505),E=d(3900),U=d(4004),p=d(5030),y=d(4115);let $=(()=>{class i{constructor(t){this.restService=t,this.apiName="AbpPermissionManagement",this.get=(s,n)=>this.restService.request({method:"GET",url:"/api/permission-management/permissions",params:{providerName:s,providerKey:n}},{apiName:this.apiName}),this.update=(s,n,a)=>this.restService.request({method:"PUT",url:"/api/permission-management/permissions",params:{providerName:s,providerKey:n},body:a},{apiName:this.apiName})}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(r.vgb))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var H=d(7272),N=d(9646),W=d(5698),f=d(4755);const X=["selectAllInThisTabsRef"],ee=["selectAllInAllTabsRef"];function te(i,o){if(1&i&&(e.TgZ(0,"h4"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.lcZ(2,2,"AbpPermissionManagement::Permissions")," - ",t.entityDisplayName||t.data.entityDisplayName," ")}}function ie(i,o){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw().ngIf;e.xp6(1),e.hij("(",t.assignedCount,")")}}function se(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"a",24),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.onChangeGroup(n))})("select",function(){e.CHM(t);const n=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.setDisabled(n.permissions))}),e.TgZ(1,"div"),e._uU(2),e.YNc(3,ie,2,1,"span",1),e.qZA()()}if(2&i){const t=o.ngIf,s=e.oxw().$implicit,n=e.oxw(3);e.ekj("active",(null==n.selectedGroup?null:n.selectedGroup.name)===(null==s?null:s.name)),e.xp6(1),e.ekj("font-weight-bold",t.assignedCount),e.xp6(1),e.hij(" ",null==s?null:s.displayName," "),e.xp6(1),e.Q6J("ngIf",t.assignedCount>0)}}const ne=function(i){return{assignedCount:i}};function oe(i,o){if(1&i&&(e.TgZ(0,"li",22),e.YNc(1,se,4,6,"a",23),e.qZA()),2&i){const t=o.$implicit,s=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.VKq(1,ne,s.getAssignedCount(t.name)))}}function ae(i,o){if(1&i&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.AsE("",t.providerName,": ",t.providerKey,"")}}function re(i,o){if(1&i&&(e.ynx(0),e.YNc(1,ae,2,2,"span",29),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.grantedProviders)}}function le(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",25)(1,"input",26,27),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.MAs(2),h=e.oxw(3);return e.KtG(h.onClickCheckbox(a,c.value))}),e.qZA(),e.TgZ(3,"label",28),e._uU(4),e.YNc(5,re,2,1,"ng-container",1),e.qZA()()}if(2&i){const t=o.$implicit,s=e.oxw(3);e.Q6J("ngStyle",t.style),e.xp6(1),e.Q6J("checked",s.getChecked(t.name))("value",s.getChecked(t.name))("disabled",s.isGrantedByOtherProviderName(t.grantedProviders)),e.uIk("id",t.name),e.xp6(2),e.uIk("for",t.name),e.xp6(1),e.hij("",t.displayName," "),e.xp6(1),e.Q6J("ngIf",!s.hideBadges)}}function ce(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"input",8,9),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.selectAllTab=n)})("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onClickSelectAll())}),e.qZA(),e.TgZ(5,"label",10),e._uU(6),e.ALo(7,"abpLocalization"),e.qZA()(),e._UZ(8,"hr",11),e.TgZ(9,"div",12)(10,"ul",13),e.YNc(11,oe,2,3,"li",14),e.qZA()()(),e.TgZ(12,"div",15)(13,"div",16)(14,"div",7)(15,"input",17,18),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.selectThisTab=n)})("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.onClickSelectThisTab())}),e.qZA(),e.TgZ(17,"label",19),e._uU(18),e.ALo(19,"abpLocalization"),e.qZA()(),e._UZ(20,"hr",20),e.YNc(21,le,6,8,"div",21),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.selectAllTab)("disabled",t.disabledSelectAllInAllTabs),e.xp6(3),e.Oqu(e.lcZ(7,10,"AbpPermissionManagement::SelectAllInAllTabs")),e.xp6(5),e.Q6J("ngForOf",t.data.groups)("ngForTrackBy",t.trackByFn),e.xp6(4),e.Q6J("ngModel",t.selectThisTab)("disabled",t.disableSelectAllTab),e.xp6(3),e.Oqu(e.lcZ(19,12,"AbpPermissionManagement::SelectAllInThisTab")),e.xp6(3),e.Q6J("ngForOf",t.selectedGroupPermissions)("ngForTrackBy",t.trackByFn)}}function pe(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",31),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA(),e.TgZ(3,"abp-button",32),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.submit())}),e._uU(4),e.ALo(5,"abpLocalization"),e.qZA()}2&i&&(e.xp6(1),e.hij(" ",e.lcZ(2,2,"AbpIdentity::Cancel")," "),e.xp6(3),e.Oqu(e.lcZ(5,4,"AbpIdentity::Save")))}function me(i,o){1&i&&(e.ynx(0),e.YNc(1,te,3,4,"ng-template",null,2,e.W1O),e.YNc(3,ce,22,14,"ng-template",null,3,e.W1O),e.YNc(5,pe,6,6,"ng-template",null,4,e.W1O),e.BQk())}const de=function(){return{size:"lg",scrollable:!1}};let D=(()=>{class i{get visible(){return this._visible}set visible(t){t!==this._visible&&(t?this.openModal().subscribe(()=>{this._visible=!0,this.visibleChange.emit(!0),(0,H.z)(this.selectAllInAllTabsRef.changes,this.selectAllInThisTabsRef.changes).pipe((0,W.q)(1)).subscribe(()=>{this.initModal()})}):(this.setSelectedGroup(null),this._visible=!1,this.visibleChange.emit(!1)))}constructor(t,s){this.service=t,this.configState=s,this.hideBadges=!1,this._visible=!1,this.visibleChange=new e.vpe,this.data={groups:[],entityDisplayName:""},this.permissions=[],this.selectThisTab=!1,this.selectAllTab=!1,this.disableSelectAllTab=!1,this.disabledSelectAllInAllTabs=!1,this.modalBusy=!1,this.selectedGroupPermissions=[],this.trackByFn=(n,a)=>a.name}getChecked(t){return(this.permissions.find(s=>s.name===t)||{isGranted:!1}).isGranted}setSelectedGroup(t){if(this.selectedGroup=t,!this.selectedGroup)return void(this.selectedGroupPermissions=[]);const s=`margin-${"rtl"===document.body.dir?"right":"left"}.px`,n=(this.data.groups.find(a=>a.name===this.selectedGroup?.name)||{}).permissions||[];this.selectedGroupPermissions=n.map(a=>({...a,style:{[s]:k(n,a)},isGranted:(this.permissions.find(c=>c.name===a.name)||{}).isGranted}))}setDisabled(t){this.disableSelectAllTab=!!t.length&&t.every(s=>s.isGranted&&s.grantedProviders?.every(n=>n.providerName!==this.providerName))}isGrantedByOtherProviderName(t){return!!t.length&&t.findIndex(s=>s.providerName!==this.providerName)>-1}onClickCheckbox(t){t.isGranted&&this.isGrantedByOtherProviderName(t.grantedProviders)||setTimeout(()=>{this.permissions=this.permissions.map(s=>t.name===s.name?{...s,isGranted:!s.isGranted}:t.name===s.parentName&&t.isGranted?{...s,isGranted:!1}:t.parentName!==s.name||t.isGranted?s:{...s,isGranted:!0}),this.setTabCheckboxState(),this.setGrantCheckboxState()},0)}setTabCheckboxState(){const t=this.selectedGroupPermissions.filter(a=>a.grantedProviders.every(c=>c.providerName===this.providerName)),s=t.filter(a=>a.isGranted),n=document.querySelector("#select-all-in-this-tabs");s.length===t.length?(n.indeterminate=!1,this.selectThisTab=!0):0===s.length?(n.indeterminate=!1,this.selectThisTab=!1):n.indeterminate=!0}setGrantCheckboxState(){const t=this.permissions.filter(a=>a.grantedProviders.every(c=>c.providerName===this.providerName)),s=t.filter(a=>a.isGranted),n=document.querySelector("#select-all-in-all-tabs");s.length===t.length?(n.indeterminate=!1,this.selectAllTab=!0):0===s.length?(n.indeterminate=!1,this.selectAllTab=!1):n.indeterminate=!0}onClickSelectThisTab(){this.selectedGroupPermissions.forEach(t=>{if(t.isGranted&&this.isGrantedByOtherProviderName(t.grantedProviders))return;const s=this.permissions.findIndex(n=>n.name===t.name);this.permissions=[...this.permissions.slice(0,s),{...this.permissions[s],isGranted:!this.selectThisTab},...this.permissions.slice(s+1)]}),this.setGrantCheckboxState()}onClickSelectAll(){this.permissions=this.permissions.map(t=>({...t,isGranted:this.isGrantedByOtherProviderName(t.grantedProviders)||!this.selectAllTab})),this.disableSelectAllTab||(this.selectThisTab=!this.selectAllTab,this.setTabCheckboxState())}onChangeGroup(t){this.setDisabled(t.permissions),this.setSelectedGroup(t),this.setTabCheckboxState()}submit(){const t=Z(this.data.groups),s=this.permissions.filter(n=>(t.find(a=>a.name===n.name)||{}).isGranted!==n.isGranted).map(({name:n,isGranted:a})=>({name:n,isGranted:a}));s.length?(this.modalBusy=!0,this.service.update(this.providerName,this.providerKey,{permissions:s}).pipe((0,E.w)(()=>this.shouldFetchAppConfig()?this.configState.refreshAppState():(0,N.of)(null)),(0,T.x)(()=>this.modalBusy=!1)).subscribe(()=>{this.visible=!1})):this.visible=!1}openModal(){if(!this.providerKey||!this.providerName)throw new Error("Provider Key and Provider Name are required.");return this.service.get(this.providerName,this.providerKey).pipe((0,v.b)(t=>{this.data=t,this.permissions=Z(t.groups),this.setSelectedGroup(t.groups[0]),this.disabledSelectAllInAllTabs=this.permissions.every(s=>s.isGranted&&s.grantedProviders.every(n=>n.providerName!==this.providerName))}))}initModal(){setTimeout(()=>{this.setDisabled(this.selectedGroup?.permissions||[]),this.setTabCheckboxState(),this.setGrantCheckboxState()})}getAssignedCount(t){return this.permissions.reduce((s,n)=>n.groupName===t&&n.isGranted?s+1:s,0)}shouldFetchAppConfig(){const t=this.configState.getOne("currentUser");return"R"===this.providerName?t.roles.some(s=>s===this.providerKey):"U"===this.providerName&&t.id===this.providerKey}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36($),e.Y36(r.XJE))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["abp-permission-management"]],viewQuery:function(s,n){if(1&s&&(e.Gf(X,5),e.Gf(ee,5)),2&s){let a;e.iGM(a=e.CRH())&&(n.selectAllInThisTabsRef=a),e.iGM(a=e.CRH())&&(n.selectAllInAllTabsRef=a)}},inputs:{providerName:"providerName",providerKey:"providerKey",hideBadges:"hideBadges",entityDisplayName:"entityDisplayName",visible:"visible"},outputs:{visibleChange:"visibleChange"},exportAs:["abpPermissionManagement"],decls:2,vars:5,consts:[[3,"visible","busy","options","visibleChange"],[4,"ngIf"],["abpHeader",""],["abpBody",""],["abpFooter",""],[1,"row"],[1,"col-md-4","scroll-in-modal"],[1,"form-check","mb-2"],["type","checkbox","id","select-all-in-all-tabs","name","select-all-in-all-tabs",1,"form-check-input",3,"ngModel","disabled","ngModelChange","click"],["selectAllInAllTabsRef",""],["for","select-all-in-all-tabs",1,"form-check-label"],[1,"mt-2","mb-2"],[1,"overflow-auto"],[1,"nav","nav-pills","flex-column"],["class","nav-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-md-8","scroll-in-modal"],[1,"ps-1"],["type","checkbox","id","select-all-in-this-tabs","name","select-all-in-this-tabs",1,"form-check-input",3,"ngModel","disabled","ngModelChange","click"],["selectAllInThisTabsRef",""],["for","select-all-in-this-tabs",1,"form-check-label"],[1,"my-2"],["class","form-check mb-2",3,"ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],[1,"nav-item"],["class","nav-link pointer",3,"active","click","select",4,"ngIf"],[1,"nav-link","pointer",3,"click","select"],[1,"form-check","mb-2",3,"ngStyle"],["type","checkbox",1,"form-check-input",3,"checked","value","disabled","click"],["permissionCheckbox",""],[1,"form-check-label"],["class","badge bg-light text-dark",4,"ngFor","ngForOf"],[1,"badge","bg-light","text-dark"],["type","button","abpClose","",1,"btn","btn-secondary"],["iconClass","fa fa-check",3,"click"]],template:function(s,n){1&s&&(e.TgZ(0,"abp-modal",0),e.NdJ("visibleChange",function(c){return n.visible=c}),e.YNc(1,me,7,0,"ng-container",1),e.qZA()),2&s&&(e.Q6J("visible",n.visible)("busy",n.modalBusy)("options",e.DdM(4,de)),e.xp6(1),e.Q6J("ngIf",n.data.entityDisplayName||n.entityDisplayName))},dependencies:[f.sg,f.O5,f.PC,p.Wl,p.JJ,p.On,m.r0,m.zS,m.YM,r.fuE],styles:[".overflow-scroll[_ngcontent-%COMP%]{max-height:70vh;overflow-y:scroll}.scroll-in-modal[_ngcontent-%COMP%]{overflow:auto;max-height:calc(100vh - 15rem)}"]})}return i})();function k(i,o){const t=i.find(s=>s.name===o.parentName);if(t&&t.parentName){let s=20;return s+=k(i,t)}return t?20:0}function Z(i){return i.reduce((o,t)=>[...o,...t.permissions.map(s=>({...s,groupName:t.name||""}))],[])}let ue=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[r.IR2,m.e2]})}return i})();var I=d(2857),_=d(5434),C=d(672);function _e(i,o){if(1&i&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,null!=t.selected&&t.selected.id?"AbpIdentity::Edit":"AbpIdentity::NewRole"))}}function he(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"form",9),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.save())}),e._UZ(1,"abp-extensible-form",10),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("selectedRecord",t.selected)}}function be(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",11),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA(),e.TgZ(3,"abp-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.save())}),e._uU(4),e.ALo(5,"abpLocalization"),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,3,"AbpIdentity::Cancel")," "),e.xp6(2),e.Q6J("disabled",null==t.form?null:t.form.invalid),e.xp6(1),e.Oqu(e.lcZ(5,5,"AbpIdentity::Save"))}}function ge(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"abp-permission-management",13,14),e.NdJ("abpInit",function(){const a=e.CHM(t).initTemplate,c=e.MAs(1);return e.KtG(a(c))}),e.qZA()}}const fe=function(){return{value:"R"}},F=function(i){return{value:i}},G=function(i){return{value:i,twoWay:!0}},ye=function(){return{value:!0}},Te=function(i,o,t,s){return{providerName:i,providerKey:o,visible:t,hideBadges:s}},L=function(i){return{visibleChange:i}},Y=function(i,o,t){return{inputs:i,outputs:o,componentKey:t}},ve=["modalContent"];function Ne(i,o){if(1&i&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,null!=t.selected&&t.selected.id?"AbpIdentity::Edit":"AbpIdentity::NewUser"))}}function Ie(i,o){1&i&&(e.TgZ(0,"div",14),e._UZ(1,"i",15),e.qZA())}function Ce(i,o){if(1&i&&e._UZ(0,"abp-extensible-form",23),2&i){const t=e.oxw(3);e.Q6J("selectedRecord",t.selected)}}function Ae(i,o){if(1&i&&e._UZ(0,"abp-checkbox",27),2&i){const t=e.oxw(),s=t.index,n=t.$implicit,a=e.oxw(4);e.Q6J("checkboxId","roles-"+s)("formControl",n.controls[a.roles[s].name])("label",a.roles[s].name)}}const xe=function(i,o,t){return{checkboxId:i,label:o,formControl:t}},Me=function(i,o){return{inputs:i,componentKey:o}};function Se(i,o){if(1&i&&(e.TgZ(0,"div",25),e.YNc(1,Ae,1,3,"abp-checkbox",26),e.qZA()),2&i){const t=o.$implicit,s=o.index,n=e.oxw(4);e.xp6(1),e.Q6J("abpReplaceableTemplate",e.WLB(5,Me,e.kEZ(1,xe,"roles-"+s,n.roles[s].name,t.controls[n.roles[s].name]),n.inputKey))}}function Re(i,o){if(1&i&&e.YNc(0,Se,2,8,"div",24),2&i){const t=e.oxw(3);e.Q6J("ngForOf",t.roleGroups)("ngForTrackBy",t.trackByFn)}}function Oe(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"form",16),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.save())}),e.TgZ(1,"ul",17,18)(3,"li",19)(4,"a",20),e._uU(5),e.ALo(6,"abpLocalization"),e.qZA(),e.YNc(7,Ce,1,1,"ng-template",21),e.qZA(),e.TgZ(8,"li",19)(9,"a",20),e._uU(10),e.ALo(11,"abpLocalization"),e.qZA(),e.YNc(12,Re,1,2,"ng-template",21),e.qZA()(),e._UZ(13,"div",22),e.qZA()}if(2&i){const t=e.MAs(2),s=e.oxw(2);e.Q6J("formGroup",s.form),e.xp6(5),e.Oqu(e.lcZ(6,4,"AbpIdentity::UserInformations")),e.xp6(5),e.Oqu(e.lcZ(11,6,"AbpIdentity::Roles")),e.xp6(3),e.Q6J("ngbNavOutlet",t)}}function Pe(i,o){if(1&i&&(e.YNc(0,Ie,2,0,"ng-template",null,12,e.W1O),e.YNc(2,Oe,14,8,"form",13)),2&i){const t=e.MAs(1),s=e.oxw();e.xp6(2),e.Q6J("ngIf",s.form)("ngIfElse",t)}}function Ee(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",28),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA(),e.TgZ(3,"abp-button",29),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.save())}),e._uU(4),e.ALo(5,"abpLocalization"),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,3,"AbpIdentity::Cancel")," "),e.xp6(2),e.Q6J("disabled",null==t.form?null:t.form.invalid),e.xp6(1),e.Oqu(e.lcZ(5,5,"AbpIdentity::Save"))}}function Ue(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"abp-permission-management",30,31),e.NdJ("abpInit",function(){const a=e.CHM(t).initTemplate,c=e.MAs(1);return e.KtG(a(c))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("entityDisplayName",t.entityDisplayName)}}const De=function(){return{value:"U"}},ke=function(i,o,t){return{providerName:i,providerKey:o,visible:t}};let b=(()=>{class i{constructor(t,s,n,a,c){this.list=t,this.confirmationService=s,this.toasterService=n,this.injector=a,this.service=c,this.data={items:[],totalCount:0},this.visiblePermissions=!1,this.modalBusy=!1,this.permissionManagementKey="PermissionManagement.PermissionManagementComponent",this.onVisiblePermissionChange=h=>{this.visiblePermissions=h}}ngOnInit(){this.hookToQuery()}buildForm(){const t=new l.lg(this.injector,this.selected);this.form=(0,l.se)(t)}openModal(){this.buildForm(),this.isModalVisible=!0}add(){this.selected={},this.openModal()}edit(t){this.service.get(t).subscribe(s=>{this.selected=s,this.openModal()})}save(){if(!this.form.valid)return;this.modalBusy=!0;const{id:t}=this.selected||{};(t?this.service.update(t,{...this.selected,...this.form.value}):this.service.create(this.form.value)).pipe((0,T.x)(()=>this.modalBusy=!1)).subscribe(()=>{this.isModalVisible=!1,this.list.get()})}delete(t,s){this.confirmationService.warn("AbpIdentity::RoleDeletionConfirmationMessage","AbpIdentity::AreYouSure",{messageLocalizationParams:[s]}).subscribe(n=>{n===m.Tv.Status.confirm&&(this.toasterService.success("AbpUi::SuccessfullyDeleted"),this.service.delete(t).subscribe(()=>this.list.get()))})}hookToQuery(){this.list.hookToQuery(t=>this.service.getList(t)).subscribe(t=>this.data=t)}openPermissionsModal(t){this.providerKey=t,setTimeout(()=>{this.visiblePermissions=!0},0)}sort(t){const{prop:s,dir:n}=t.sorts[0];this.list.sortKey=s,this.list.sortOrder=n}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(r.XNV),e.Y36(m.YP),e.Y36(m.MJ),e.Y36(e.zs3),e.Y36(z))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["abp-roles"]],features:[e._Bn([r.XNV,{provide:l.ex,useValue:"Identity.RolesComponent"}])],decls:13,vars:27,consts:[[3,"title","toolbar"],["id","identity-roles-wrapper",1,"card"],[1,"card-body"],[3,"data","recordsTotal","list"],[3,"visible","busy","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],[3,"abpInit",4,"abpReplaceableTemplate"],["validateOnSubmit","",3,"formGroup","ngSubmit"],[3,"selectedRecord"],["type","button","abpClose","",1,"btn","btn-secondary"],["iconClass","fa fa-check",3,"disabled","click"],[3,"abpInit"],["abpPermissionManagement","abpPermissionManagement"]],template:function(s,n){1&s&&(e.TgZ(0,"abp-page",0),e.ALo(1,"abpLocalization"),e.TgZ(2,"div",1)(3,"div",2),e._UZ(4,"abp-extensible-table",3),e.qZA()(),e.TgZ(5,"abp-modal",4),e.NdJ("visibleChange",function(c){return n.isModalVisible=c}),e.YNc(6,_e,3,3,"ng-template",null,5,e.W1O),e.YNc(8,he,2,2,"ng-template",null,6,e.W1O),e.YNc(10,be,6,7,"ng-template",null,7,e.W1O),e.qZA(),e.YNc(12,ge,2,0,"abp-permission-management",8),e.qZA()),2&s&&(e.Q6J("title",e.lcZ(1,8,"AbpIdentity::Roles"))("toolbar",n.data.items),e.xp6(4),e.Q6J("data",n.data.items)("recordsTotal",n.data.totalCount)("list",n.list),e.xp6(1),e.Q6J("visible",n.isModalVisible)("busy",n.modalBusy),e.xp6(7),e.Q6J("abpReplaceableTemplate",e.kEZ(23,Y,e.l5B(16,Te,e.DdM(10,fe),e.VKq(11,F,n.providerKey),e.VKq(13,G,n.visiblePermissions),e.DdM(15,ye)),e.VKq(21,L,n.onVisiblePermissionChange),n.permissionManagementKey)))},dependencies:[p._Y,p.JL,p.sg,r.YzZ,r.Ngh,r.zLP,y.hL,m.r0,m.zS,m.YM,l.gt,l.m5,D,I.II,r.fuE],encapsulation:2})}return i})(),g=(()=>{class i{get roleGroups(){return this.form.get("roleNames")?.controls||[]}constructor(t,s,n,a,c,h){this.list=t,this.confirmationService=s,this.service=n,this.toasterService=a,this.fb=c,this.injector=h,this.data={items:[],totalCount:0},this.visiblePermissions=!1,this.modalBusy=!1,this.permissionManagementKey="PermissionManagement.PermissionManagementComponent",this.inputKey=m.hj.FormCheckboxComponent,this.trackByFn=(u,Ve)=>Object.keys(Ve)[0]||u,this.onVisiblePermissionChange=u=>{this.visiblePermissions=u}}ngOnInit(){this.hookToQuery()}buildForm(){const t=new l.lg(this.injector,this.selected);this.form=(0,l.se)(t),this.service.getAssignableRoles().subscribe(({items:s})=>{this.roles=s,this.roles&&this.form.addControl("roleNames",this.fb.array(this.roles.map(n=>this.fb.group({[n.name]:[this.selected?.id?!!this.selectedUserRoles?.find(a=>a.id===n.id):n.isDefault]}))))})}openModal(){this.buildForm(),this.isModalVisible=!0}add(){this.selected={},this.selectedUserRoles=[],this.openModal()}edit(t){this.service.get(t).pipe((0,v.b)(s=>this.selected=s),(0,E.w)(()=>this.service.getRoles(t))).subscribe(s=>{this.selectedUserRoles=s.items||[],this.openModal()})}save(){if(!this.form.valid||this.modalBusy)return;this.modalBusy=!0;const{roleNames:t=[]}=this.form.value,s=t.filter(a=>!!a[Object.keys(a)[0]]).map(a=>Object.keys(a)[0])||[],{id:n}=this.selected||{};(n?this.service.update(n,{...this.selected,...this.form.value,roleNames:s}):this.service.create({...this.form.value,roleNames:s})).pipe((0,T.x)(()=>this.modalBusy=!1)).subscribe(()=>{this.isModalVisible=!1,this.list.get()})}delete(t,s){this.confirmationService.warn("AbpIdentity::UserDeletionConfirmationMessage","AbpIdentity::AreYouSure",{messageLocalizationParams:[s]}).subscribe(n=>{n===m.Tv.Status.confirm&&this.service.delete(t).subscribe(()=>{this.toasterService.success("AbpUi::SuccessfullyDeleted"),this.list.get()})})}sort(t){const{prop:s,dir:n}=t.sorts[0];this.list.sortKey=s,this.list.sortOrder=n}hookToQuery(){this.list.hookToQuery(t=>this.service.getList(t)).subscribe(t=>this.data=t)}openPermissionsModal(t,s){this.providerKey=t,this.entityDisplayName=s,setTimeout(()=>{this.visiblePermissions=!0},0)}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(r.XNV),e.Y36(m.YP),e.Y36(j),e.Y36(m.MJ),e.Y36(p.QS),e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["abp-users"]],viewQuery:function(s,n){if(1&s&&e.Gf(ve,5),2&s){let a;e.iGM(a=e.CRH())&&(n.modalContent=a.first)}},features:[e._Bn([r.XNV,{provide:l.ex,useValue:"Identity.UsersComponent"}])],decls:17,vars:29,consts:[[3,"title","toolbar"],["id","identity-roles-wrapper",1,"card"],[1,"card-body"],["id","data-tables-table-filter",1,"data-tables-filter","mb-3"],[1,"input-group"],["type","search",1,"form-control",3,"placeholder","ngModel","ngModelChange"],[3,"data","recordsTotal","list"],[3,"visible","busy","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],[3,"entityDisplayName","abpInit",4,"abpReplaceableTemplate"],["loaderRef",""],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],[1,"text-center"],["aria-hidden","true",1,"fa","fa-pulse","fa-spinner"],[3,"formGroup","ngSubmit"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2","fade-in-top",3,"ngbNavOutlet"],[3,"selectedRecord"],["class","form-check mb-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"form-check","mb-2"],[3,"checkboxId","formControl","label",4,"abpReplaceableTemplate"],[3,"checkboxId","formControl","label"],["type","button","abpClose","",1,"btn","btn-secondary"],["iconClass","fa fa-check",3,"disabled","click"],[3,"entityDisplayName","abpInit"],["abpPermissionManagement","abpPermissionManagement"]],template:function(s,n){1&s&&(e.TgZ(0,"abp-page",0),e.ALo(1,"abpLocalization"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"input",5),e.NdJ("ngModelChange",function(c){return n.list.filter=c}),e.ALo(7,"abpLocalization"),e.qZA()()(),e._UZ(8,"abp-extensible-table",6),e.qZA()(),e.TgZ(9,"abp-modal",7),e.NdJ("visibleChange",function(c){return n.isModalVisible=c}),e.YNc(10,Ne,3,3,"ng-template",null,8,e.W1O),e.YNc(12,Pe,3,2,"ng-template",null,9,e.W1O),e.YNc(14,Ee,6,7,"ng-template",null,10,e.W1O),e.qZA(),e.YNc(16,Ue,2,1,"abp-permission-management",11),e.qZA()),2&s&&(e.Q6J("title",e.lcZ(1,10,"AbpIdentity::Users"))("toolbar",n.data.items),e.xp6(6),e.Q6J("placeholder",e.lcZ(7,12,"AbpUi::PagerSearch"))("ngModel",n.list.filter),e.xp6(2),e.Q6J("data",n.data.items)("recordsTotal",n.data.totalCount)("list",n.list),e.xp6(1),e.Q6J("visible",n.isModalVisible)("busy",n.modalBusy),e.xp6(7),e.Q6J("abpReplaceableTemplate",e.kEZ(25,Y,e.kEZ(19,ke,e.DdM(14,De),e.VKq(15,F,n.providerKey),e.VKq(17,G,n.visiblePermissions)),e.VKq(23,L,n.onVisiblePermissionChange),n.permissionManagementKey)))},dependencies:[f.sg,f.O5,p._Y,p.Fj,p.JJ,p.JL,p.On,p.oH,p.sg,r.YzZ,r.Ngh,r.zLP,_.uN,_.Pz,_.nv,_.Is,_.Vx,_.tO,_.Dy,y.hL,y.J5,m.r0,m.zS,m.YM,m.a0,l.gt,l.m5,D,I.II,r.fuE],encapsulation:2})}return i})();const Ze=l.uk.createMany([{text:"AbpIdentity::Edit",action:i=>{i.getInjected(b).edit(i.record.id||"")},permission:"AbpIdentity.Roles.Update"},{text:"AbpIdentity::Permissions",action:i=>{i.getInjected(b).openPermissionsModal(i.record.name||"")},permission:"AbpIdentity.Roles.ManagePermissions"},{text:"AbpIdentity::Delete",action:i=>{i.getInjected(b).delete(i.record.id||"",i.record.name||"")},permission:"AbpIdentity.Roles.Delete",visible:i=>!i?.record.isStatic}]),Fe=l.QC.createMany([{type:"string",name:"name",displayName:"AbpIdentity::RoleName",sortable:!0,valueResolver:i=>{const o=i.getInjected(r.oQ8),t=o.instant.bind(o),{isDefault:s,isPublic:n,name:a}=i.record;return(0,N.of)((0,r.F04)(a)+(s?`<span class="badge rounded-pill bg-success ms-1">${t("AbpIdentity::DisplayName:IsDefault")}</span>`:"")+(n?`<span class="badge rounded-pill bg-info ms-1">${t("AbpIdentity::DisplayName:IsPublic")}</span>`:""))}}]),B=l.Od.createMany([{type:"string",name:"name",displayName:"AbpIdentity::RoleName",id:"role-name",disabled:i=>i.record&&i.record.isStatic,validators:()=>[p.Validators.required]},{type:"boolean",name:"isDefault",displayName:"AbpIdentity::DisplayName:IsDefault",id:"role-is-default",defaultValue:!1},{type:"boolean",name:"isPublic",displayName:"AbpIdentity::DisplayName:IsPublic",id:"role-is-public",defaultValue:!1}]),Ge=B,Le=l.JE.createMany([{text:"AbpIdentity::NewRole",action:i=>{i.getInjected(b).add()},permission:"AbpIdentity.Roles.Create",icon:"fa fa-plus"}]),Ye=l.uk.createMany([{text:"AbpIdentity::Edit",action:i=>{i.getInjected(g).edit(i.record.id||"")},permission:"AbpIdentity.Users.Update"},{text:"AbpIdentity::Permissions",action:i=>{i.getInjected(g).openPermissionsModal(i.record.id||"",i.record.userName)},permission:"AbpIdentity.Users.ManagePermissions"},{text:"AbpIdentity::Delete",action:i=>{i.getInjected(g).delete(i.record.id||"",i.record.name||i.record.userName||"")},visible:i=>{const o=i?.record.userName,s=i?.getInjected(r.XJE)?.getOne("currentUser");return o!==s.userName},permission:"AbpIdentity.Users.Delete"}]),Be=l.QC.createMany([{type:"string",name:"userName",displayName:"AbpIdentity::UserName",sortable:!0,columnWidth:250,valueResolver:i=>{const o=i.getInjected(r.oQ8),s=`<i title="${o.instant.bind(o)("AbpIdentity::ThisUserIsNotActiveMessage")}" class="fas fa-ban text-danger me-1" aria-hidden="true"></i>`;return(0,N.of)(`\n        ${i.record.isActive?"":s}\n        <span class="${i.record.isActive?"":"text-muted"}">${(0,r.F04)(i.record.userName)}</span>`)}},{type:"string",name:"email",displayName:"AbpIdentity::EmailAddress",sortable:!0,columnWidth:250},{type:"string",name:"phoneNumber",displayName:"AbpIdentity::PhoneNumber",sortable:!0,columnWidth:250}]),q=l.Od.createMany([{type:"string",name:"userName",displayName:"AbpIdentity::UserName",id:"user-name",validators:()=>[p.Validators.required,p.Validators.maxLength(256)]},{type:"passwordinputgroup",name:"password",displayName:"AbpIdentity::Password",id:"password",autocomplete:"new-password",validators:i=>[p.Validators.required,...(0,m.dD)({get:i.getInjected})]},{type:"string",name:"name",displayName:"AbpIdentity::DisplayName:Name",id:"name",validators:()=>[p.Validators.maxLength(64)]},{type:"string",name:"surname",displayName:"AbpIdentity::DisplayName:Surname",id:"surname",validators:()=>[p.Validators.maxLength(64)]},{type:"email",name:"email",displayName:"AbpIdentity::EmailAddress",id:"email",validators:()=>[p.Validators.required,p.Validators.maxLength(256),p.Validators.email]},{type:"string",name:"phoneNumber",displayName:"AbpIdentity::PhoneNumber",id:"phone-number",validators:()=>[p.Validators.maxLength(16)]},{type:"boolean",name:"isActive",displayName:"AbpIdentity::DisplayName:IsActive",id:"active-checkbox",defaultValue:!0},{type:"boolean",name:"lockoutEnabled",displayName:"AbpIdentity::DisplayName:LockoutEnabled",id:"lockout-checkbox",defaultValue:!0}]),qe=q.map(i=>"password"===i.name?{...i,validators:o=>[...(0,m.dD)({get:o.getInjected})]}:"isActive"===i.name?{...i,visible:o=>o.getInjected(r.XJE).getDeep("currentUser.id")!==o.record.id}:i),we=l.JE.createMany([{text:"AbpIdentity::NewUser",action:i=>{i.getInjected(g).add()},permission:"AbpIdentity.Users.Create",icon:"fa fa-plus"}]),w={"Identity.RolesComponent":Ze,"Identity.UsersComponent":Ye},J={"Identity.RolesComponent":Le,"Identity.UsersComponent":we},Q={"Identity.RolesComponent":Fe,"Identity.UsersComponent":Be},K={"Identity.RolesComponent":B,"Identity.UsersComponent":q},V={"Identity.RolesComponent":Ge,"Identity.UsersComponent":qe},A=new e.OlP("IDENTITY_ENTITY_ACTION_CONTRIBUTORS"),x=new e.OlP("IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS"),M=new e.OlP("IDENTITY_ENTITY_PROP_CONTRIBUTORS"),S=new e.OlP("IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS"),R=new e.OlP("IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS");let O=(()=>{class i{constructor(){this.configState=(0,e.f3M)(r.XJE),this.extensions=(0,e.f3M)(l.X6)}canActivate(){const t={optional:!0},s=(0,e.f3M)(A,t)||{},n=(0,e.f3M)(x,t)||{},a=(0,e.f3M)(M,t)||{},c=(0,e.f3M)(S,t)||{},h=(0,e.f3M)(R,t)||{};return(0,l.ot)(this.configState,"Identity").pipe((0,U.U)(u=>({"Identity.RolesComponent":u.Role,"Identity.UsersComponent":u.User})),(0,l.V_)(this.configState,"AbpIdentity"),(0,v.b)(u=>{(0,l.Fr)(this.extensions.entityActions,w,s),(0,l.Fr)(this.extensions.toolbarActions,J,n),(0,l.Hp)(this.extensions.entityProps,Q,u.prop,a),(0,l.Hp)(this.extensions.createFormProps,K,u.createForm,c),(0,l.Hp)(this.extensions.editFormProps,V,u.editForm,h)}),(0,U.U)(()=>!0))}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac})}return i})();const Je=[{path:"",redirectTo:"roles",pathMatch:"full"},{path:"",component:r.O39,canActivate:(0,C.BJ)([r.a1M,r.nG9,O]),children:[{path:"roles",component:r.c$y,data:{requiredPolicy:"AbpIdentity.Roles",replaceableComponent:{key:"Identity.RolesComponent",defaultComponent:b}}},{path:"users",component:r.c$y,data:{requiredPolicy:"AbpIdentity.Users",replaceableComponent:{key:"Identity.UsersComponent",defaultComponent:g}}}]}];let Qe=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[C.Bz.forChild(Je),C.Bz]})}return i})(),Ke=(()=>{class i{static forChild(t={}){return{ngModule:i,providers:[{provide:A,useValue:t.entityActionContributors},{provide:x,useValue:t.toolbarActionContributors},{provide:M,useValue:t.entityPropContributors},{provide:S,useValue:t.createFormPropContributors},{provide:R,useValue:t.editFormPropContributors},O]}}static forLazy(t={}){return new r.Cgl(i.forChild(t))}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[r.IR2,Qe,_.Oz,m.e2,l.Ms,_.XC,ue,y.h2,I.BG]})}return i})()}}]);