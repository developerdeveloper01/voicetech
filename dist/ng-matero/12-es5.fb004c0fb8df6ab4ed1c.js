!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,s,i){return s&&n(e.prototype,s),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{xUSb:function(n,i,t){"use strict";t.r(i),t.d(i,"PermissionsModule",function(){return D});var o,c,r=t("PCNd"),a=t("tyNb"),u=t("XNiG"),l=t("1G5W"),m=t("fXoL"),p=t("qSrz"),d=t("tgey"),b=t("jaxi"),h=t("3Pt+"),g=t("ofXK"),f=((c=function(){function n(s,i){e(this,n),this.rolesSrv=s,this.permissionsSrv=i,this.permissionsOfRole={ADMIN:["canAdd","canDelete","canEdit","canRead"],MANAGER:["canAdd","canEdit","canRead"],GUEST:["canRead"]},this._destroy$=new u.a}return s(n,[{key:"ngOnInit",value:function(){this.currentRole=Object.keys(this.rolesSrv.getRoles())[0],this.currentPermissions=Object.keys(this.permissionsSrv.getPermissions()),this.rolesSrv.roles$.pipe(Object(l.a)(this._destroy$)).subscribe(function(e){console.log(e)}),this.permissionsSrv.permissions$.pipe(Object(l.a)(this._destroy$)).subscribe(function(e){console.log(e)})}},{key:"ngOnDestroy",value:function(){this._destroy$.next(),this._destroy$.complete()}},{key:"onPermissionChange",value:function(){this.currentPermissions=this.permissionsOfRole[this.currentRole],this.rolesSrv.flushRolesAndPermissions(),this.rolesSrv.addRoleWithPermissions(this.currentRole,this.currentPermissions)}}]),n}()).\u0275fac=function(e){return new(e||c)(m.Ub(p.e),m.Ub(p.d))},c.\u0275cmp=m.Ob({type:c,selectors:[["app-permissions-role-switching"]],decls:24,vars:7,consts:[["href","https://github.com/AlexKhymenko/ngx-permissions","target","_blank"],[3,"ngModel","ngModelChange","change"],["value","ADMIN"],["value","MANAGER"],["value","GUEST"]],template:function(e,n){1&e&&(m.Vb(0,"page-header"),m.ac(1,"p"),m.Uc(2," The permissions management is powered by "),m.ac(3,"a",0),m.ac(4,"code"),m.Uc(5,"ngx-permissions"),m.Zb(),m.Zb(),m.Uc(6,".\n"),m.Zb(),m.ac(7,"mat-button-toggle-group",1),m.ic("ngModelChange",function(e){return n.currentRole=e})("change",function(){return n.onPermissionChange()}),m.ac(8,"mat-button-toggle",2),m.Uc(9,"ADMIN"),m.Zb(),m.ac(10,"mat-button-toggle",3),m.Uc(11,"MANAGER"),m.Zb(),m.ac(12,"mat-button-toggle",4),m.Uc(13,"GUEST"),m.Zb(),m.Zb(),m.ac(14,"p"),m.Uc(15," Your current role: "),m.ac(16,"code"),m.Uc(17),m.nc(18,"json"),m.Zb(),m.Zb(),m.ac(19,"p"),m.Uc(20," Your current permissions: "),m.ac(21,"code"),m.Uc(22),m.nc(23,"json"),m.Zb(),m.Zb()),2&e&&(m.Hb(7),m.vc("ngModel",n.currentRole),m.Hb(10),m.Vc(m.oc(18,3,n.currentRole)),m.Hb(5),m.Vc(m.oc(23,5,n.currentPermissions)))},directives:[d.a,b.b,h.r,h.u,b.a],pipes:[g.i],styles:[""]}),c),v=((o=function(){function n(s,i,t){e(this,n),this.rolesSrv=s,this.permissionsSrv=i,this.router=t,this.permissionsOfRole={ADMIN:["canAdd","canDelete","canEdit","canRead"],MANAGER:["canAdd","canEdit","canRead"],GUEST:["canRead"]}}return s(n,[{key:"ngOnInit",value:function(){this.currentRole=Object.keys(this.rolesSrv.getRoles())[0],this.currentPermissions=Object.keys(this.permissionsSrv.getPermissions())}},{key:"onPermissionChange",value:function(){this.currentPermissions=this.permissionsOfRole[this.currentRole],this.rolesSrv.flushRolesAndPermissions(),this.rolesSrv.addRoleWithPermissions(this.currentRole,this.currentPermissions),this.router.navigateByUrl("/dashboard")}}]),n}()).\u0275fac=function(e){return new(e||o)(m.Ub(p.e),m.Ub(p.d),m.Ub(a.f))},o.\u0275cmp=m.Ob({type:o,selectors:[["app-permissions-route-guard"]],decls:20,vars:7,consts:[[3,"ngModel","ngModelChange","change"],["value","ADMIN"],["value","MANAGER"],["value","GUEST"]],template:function(e,n){1&e&&(m.Vb(0,"page-header"),m.ac(1,"p"),m.Uc(2," The route will be redirected to dashboard after change permission.\n"),m.Zb(),m.ac(3,"mat-button-toggle-group",0),m.ic("ngModelChange",function(e){return n.currentRole=e})("change",function(){return n.onPermissionChange()}),m.ac(4,"mat-button-toggle",1),m.Uc(5,"ADMIN"),m.Zb(),m.ac(6,"mat-button-toggle",2),m.Uc(7,"MANAGER"),m.Zb(),m.ac(8,"mat-button-toggle",3),m.Uc(9,"GUEST"),m.Zb(),m.Zb(),m.ac(10,"p"),m.Uc(11," Your current role: "),m.ac(12,"code"),m.Uc(13),m.nc(14,"json"),m.Zb(),m.Zb(),m.ac(15,"p"),m.Uc(16," Your current permissions: "),m.ac(17,"code"),m.Uc(18),m.nc(19,"json"),m.Zb(),m.Zb()),2&e&&(m.Hb(3),m.vc("ngModel",n.currentRole),m.Hb(10),m.Vc(m.oc(14,3,n.currentRole)),m.Hb(5),m.Vc(m.oc(19,5,n.currentPermissions)))},directives:[d.a,b.b,h.r,h.u,b.a],pipes:[g.i],styles:[""]}),o),P=t("6Nlu");function y(e,n){1&e&&(m.ac(0,"p",11),m.Uc(1," I should see it only admin "),m.Zb())}function U(e,n){1&e&&(m.ac(0,"p",11),m.Uc(1," Usage on both only and except I should see it only admin "),m.Zb())}function x(e,n){1&e&&(m.ac(0,"p",12),m.Uc(1,"I will see it only guest"),m.Zb())}function Z(e,n){1&e&&(m.ac(0,"p",13),m.Uc(1,"I will see it except adminnnnn"),m.Zb())}function A(e,n){1&e&&(m.ac(0,"p",14),m.Uc(1,"I should see it except admin"),m.Zb())}function S(e,n){1&e&&(m.ac(0,"div"),m.Uc(1," Testing template\n"),m.Zb())}function R(e,n){1&e&&(m.ac(0,"div"),m.Uc(1," Testing template\n"),m.Zb())}function E(e,n){1&e&&(m.ac(0,"p",15),m.Uc(1,"else block"),m.Zb())}function k(e,n){1&e&&(m.ac(0,"p",16),m.Uc(1,"then block"),m.Zb())}function O(e,n){1&e&&(m.ac(0,"button"),m.Uc(1," This should be visible to admin or superadmin "),m.Zb())}function T(e,n){1&e&&(m.ac(0,"button"),m.Uc(1,"WTF"),m.Zb())}var w,M,G,j=function(){return["admin"]},H=function(){return["guest"]},N=function(){return["adminnnnn"]},C=function(){return[]},I=[{path:"role-switching",component:f},{path:"route-guard",component:v,canActivate:[p.b],data:{permissions:{except:"GUEST",redirectTo:"/dashboard"}}},{path:"test",component:(w=function(){function n(s){e(this,n),this.permissionsSrv=s,this.comparedPermission=["guest"]}return s(n,[{key:"ngOnInit",value:function(){}},{key:"getPermissions",value:function(){return Object.keys(this.permissionsSrv.getPermissions())}},{key:"addPermission",value:function(){this.permissionsSrv.addPermission("admin",function(){return new Promise(function(e,n){setTimeout(function(){return e(!0)},2e3)})})}},{key:"removePermission",value:function(){this.permissionsSrv.removePermission("admin")}},{key:"unAuthorized",value:function(){console.log("unAuthorized")}},{key:"authorized",value:function(){console.log("authorizes")}},{key:"changeToAdmin",value:function(){this.comparedPermission=["admin"],console.log(this.comparedPermission)}},{key:"changeToAnotherPermission",value:function(){this.comparedPermission=["awesome"],console.log(this.comparedPermission)}},{key:"changeToGuest",value:function(){this.comparedPermission=["guest"],console.log(this.comparedPermission)}}]),n}(),w.\u0275fac=function(e){return new(e||w)(m.Ub(p.d))},w.\u0275cmp=m.Ob({type:w,selectors:[["app-permissions-test"]],decls:39,vars:28,consts:[["type","danger"],[3,"click"],["permissions","",3,"ngxPermissionsOnly"],[3,"ngxPermissionsOnly","ngxPermissionsExcept"],["permissions","",3,"ngxPermissionsExcept","permissionsAuthorized","permissionsUnauthorized"],["permissions","",3,"ngxPermissionsExcept"],[4,"ngxPermissionsOnly","ngxPermissionsOnlyElse","ngxPermissionsOnlyThen"],[4,"ngxPermissionsExcept","ngxPermissionsExceptElse","ngxPermissionsExceptThen"],["a",""],["b",""],[4,"ngxPermissionsOnly"],[1,"bg-green-500","text-white"],[1,"bg-purple-500","text-white"],[1,"bg-orange-500","text-white"],[1,"bg-indigo-500","text-white"],[1,"bg-gray-900","text-white"],[1,"bg-gray-300"]],template:function(e,n){if(1&e&&(m.Vb(0,"page-header"),m.ac(1,"mtx-alert",0),m.Uc(2,"The permissions check will delay 2s."),m.Zb(),m.ac(3,"p"),m.ac(4,"button",1),m.ic("click",function(){return n.addPermission()}),m.Uc(5,"Add Permission [ admin ]"),m.Zb(),m.ac(6,"button",1),m.ic("click",function(){return n.removePermission()}),m.Uc(7,"Remove Permission [ admin ]"),m.Zb(),m.Zb(),m.Sc(8,y,2,0,"ng-template",2),m.Sc(9,U,2,0,"ng-template",3),m.Sc(10,x,2,0,"ng-template",2),m.Sc(11,Z,2,0,"ng-template",4),m.ic("permissionsAuthorized",function(){return n.authorized()})("permissionsUnauthorized",function(){return n.unAuthorized()}),m.Sc(12,A,2,0,"ng-template",5),m.Sc(13,S,2,0,"div",6),m.Sc(14,R,2,0,"div",7),m.Sc(15,E,2,0,"ng-template",null,8,m.Tc),m.Sc(17,k,2,0,"ng-template",null,9,m.Tc),m.ac(19,"p"),m.Uc(20," Compared permission: "),m.ac(21,"code"),m.Uc(22),m.nc(23,"json"),m.Zb(),m.Zb(),m.ac(24,"div"),m.ac(25,"button",1),m.ic("click",function(){return n.changeToAdmin()}),m.Uc(26,"Change To Admin Permission"),m.Zb(),m.ac(27,"button",1),m.ic("click",function(){return n.changeToAnotherPermission()}),m.Uc(28,"Change To Awesome Permission"),m.Zb(),m.ac(29,"button",1),m.ic("click",function(){return n.changeToGuest()}),m.Uc(30,"Change To Guest Permission"),m.Zb(),m.Zb(),m.ac(31,"div"),m.Sc(32,O,2,0,"button",10),m.Sc(33,T,2,0,"button",10),m.Zb(),m.ac(34,"p"),m.Uc(35," Your current permissions: "),m.ac(36,"code"),m.Uc(37),m.nc(38,"json"),m.Zb(),m.Zb()),2&e){var s=m.Gc(16),i=m.Gc(18);m.Hb(8),m.vc("ngxPermissionsOnly",m.yc(20,j)),m.Hb(1),m.vc("ngxPermissionsOnly",m.yc(21,j))("ngxPermissionsExcept","hhhhh"),m.Hb(1),m.vc("ngxPermissionsOnly",m.yc(22,H)),m.Hb(1),m.vc("ngxPermissionsExcept",m.yc(23,N)),m.Hb(1),m.vc("ngxPermissionsExcept",m.yc(24,j)),m.Hb(1),m.vc("ngxPermissionsOnly",m.yc(25,j))("ngxPermissionsOnlyElse",s)("ngxPermissionsOnlyThen",i),m.Hb(1),m.vc("ngxPermissionsExcept",m.yc(26,j))("ngxPermissionsExceptElse",s)("ngxPermissionsExceptThen",i),m.Hb(8),m.Vc(m.oc(23,16,n.comparedPermission)),m.Hb(10),m.vc("ngxPermissionsOnly",n.comparedPermission),m.Hb(1),m.vc("ngxPermissionsOnly",m.yc(27,C)),m.Hb(4),m.Vc(m.oc(38,18,n.getPermissions()))}},directives:[d.a,P.a,p.a],pipes:[g.i],styles:[""]}),w),canActivate:[p.b],data:{permissions:{only:"ADMIN",redirectTo:"/dashboard"}}}],z=((G=function n(){e(this,n)}).\u0275fac=function(e){return new(e||G)},G.\u0275mod=m.Sb({type:G}),G.\u0275inj=m.Rb({imports:[[a.j.forChild(I)],a.j]}),G),D=((M=function n(){e(this,n)}).\u0275fac=function(e){return new(e||M)},M.\u0275mod=m.Sb({type:M}),M.\u0275inj=m.Rb({imports:[[r.a,z]]}),M)}}])}();