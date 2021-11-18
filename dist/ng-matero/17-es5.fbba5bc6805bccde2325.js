!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{k3Tg:function(t,n,r){"use strict";r.r(n),r.d(n,"ServiceModule",function(){return N});var c,i,o,s,u,d,l=r("M0ag"),p=r("tyNb"),g=r("fXoL"),b=r("tk/3"),h=((c=function(){function t(a){e(this,t),this.http=a}return a(t,[{key:"getData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.http.get("https://api.github.com/search/repositories",{params:e})}}]),t}()).\u0275fac=function(e){return new(e||c)(g.ec(b.c))},c.\u0275prov=g.Qb({token:c,factory:c.\u0275fac}),c),f=r("tgey"),m=r("3Pt+"),v=r("kmnG"),y=r("qFsG"),Z=r("d3UM"),q=r("FKr1"),k=r("bTqV"),U=r("hGDI"),M=function(){return[5,10,20]},O=((i=function(){function t(a,n){e(this,t),this.remoteSrv=a,this.cdr=n,this.columns=[{header:"Name",field:"name",formatter:function(e){return'<a href="'.concat(e.html_url,'" target="_blank">').concat(e.name,"</a>")}},{header:"Owner",field:"owner.login"},{header:"Owner Avatar",field:"owner.avatar_url",type:"image"},{header:"Description",field:"description",width:"300px"},{header:"Stars",field:"stargazers_count",type:"number"},{header:"Forks",field:"forks_count",type:"number"},{header:"Score",field:"score",type:"number"},{header:"Issues",field:"open_issues",type:"number"},{header:"Language",field:"language"},{header:"License",field:"license.name"},{header:"Home Page",field:"homepage",type:"link"},{header:"Is forked",field:"fork",type:"boolean"},{header:"Archived",field:"archived",type:"tag",tag:{true:{text:"Yes",color:"red-100"},false:{text:"No",color:"green-100"}}},{header:"Created Date",field:"created_at"},{header:"Updated Date",field:"updated_at"}],this.list=[],this.total=0,this.isLoading=!0,this.query={q:"user:nzbin",sort:"stars",order:"desc",page:0,per_page:10}}return a(t,[{key:"params",get:function(){var e=Object.assign({},this.query);return e.page+=1,e}},{key:"ngOnInit",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.isLoading=!0,this.remoteSrv.getData(this.params).subscribe(function(t){e.list=t.items,e.total=t.total_count,e.isLoading=!1,e.cdr.detectChanges()},function(){e.isLoading=!1,e.cdr.detectChanges()},function(){e.isLoading=!1,e.cdr.detectChanges()})}},{key:"getNextPage",value:function(e){this.query.page=e.pageIndex,this.query.per_page=e.pageSize,this.getData()}},{key:"search",value:function(){this.query.page=0,this.getData()}}]),t}()).\u0275fac=function(e){return new(e||i)(g.Ub(h),g.Ub(g.h))},i.\u0275cmp=g.Ob({type:i,selectors:[["app-contact-operator"]],features:[g.Gb([h])],decls:25,vars:12,consts:[[1,"bg-blue-600"],[1,"m-r-8"],["matInput","","name","q","placeholder","Query String",3,"ngModel","ngModelChange"],["name","sort","placeholder","Sort",3,"ngModel","ngModelChange"],["value","stars"],["value","forks"],["value","updated"],["name","order","placeholder","Order",3,"ngModel","ngModelChange"],["value","desc"],["value","asc"],["mat-raised-button","","color","primary",1,"m-r-8",3,"click"],[3,"data","columns","length","loading","pageOnFront","pageIndex","pageSize","pageSizeOptions","page"]],template:function(e,t){1&e&&(g.Vb(0,"page-header",0),g.ac(1,"form"),g.ac(2,"mat-form-field",1),g.ac(3,"input",2),g.ic("ngModelChange",function(e){return t.query.q=e}),g.Zb(),g.Zb(),g.ac(4,"mat-form-field",1),g.ac(5,"mat-select",3),g.ic("ngModelChange",function(e){return t.query.sort=e}),g.ac(6,"mat-option"),g.Uc(7,"-- None --"),g.Zb(),g.ac(8,"mat-option",4),g.Uc(9,"stars"),g.Zb(),g.ac(10,"mat-option",5),g.Uc(11,"forks"),g.Zb(),g.ac(12,"mat-option",6),g.Uc(13,"updated"),g.Zb(),g.Zb(),g.Zb(),g.ac(14,"mat-form-field",1),g.ac(15,"mat-select",7),g.ic("ngModelChange",function(e){return t.query.order=e}),g.ac(16,"mat-option"),g.Uc(17,"-- None --"),g.Zb(),g.ac(18,"mat-option",8),g.Uc(19,"desc"),g.Zb(),g.ac(20,"mat-option",9),g.Uc(21,"asc"),g.Zb(),g.Zb(),g.Zb(),g.ac(22,"button",10),g.ic("click",function(){return t.search()}),g.Uc(23,"Search"),g.Zb(),g.Zb(),g.ac(24,"mtx-grid",11),g.ic("page",function(e){return t.getNextPage(e)}),g.Zb()),2&e&&(g.Hb(3),g.vc("ngModel",t.query.q),g.Hb(2),g.vc("ngModel",t.query.sort),g.Hb(10),g.vc("ngModel",t.query.order),g.Hb(9),g.vc("data",t.list)("columns",t.columns)("length",t.total)("loading",t.isLoading)("pageOnFront",!1)("pageIndex",t.query.page)("pageSize",t.query.per_page)("pageSizeOptions",g.yc(11,M)))},directives:[f.a,m.z,m.s,m.t,v.c,y.b,m.d,m.r,m.u,Z.a,q.o,k.b,U.a],styles:["[_nghost-%COMP%]     .mtx-grid{height:480px}"],changeDetection:0}),i),S=function(){var t=function(){function t(a){e(this,t),this.http=a}return a(t,[{key:"getData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.http.get("https://api.github.com/search/repositories",{params:e})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(g.ec(b.c))},t.\u0275prov=g.Qb({token:t,factory:t.\u0275fac}),t}(),C=function(){return[5,10,20]},w=((o=function(){function t(a,n){e(this,t),this.remoteSrv=a,this.cdr=n,this.columns=[{header:"INDEX",field:"index",formatter:function(e){return'<a href="'.concat(e.html_url,'" target="_blank">').concat(e.name,"</a>")}},{header:"NAME",field:"name"},{header:"FROM",field:"from"},{header:"IP",field:"ip"},{header:"TO",field:"to",type:"number"},{header:"CREATED TIME",field:"created time",type:"number"},{header:"STATUS",field:"status"},{header:"TALK TIME",field:"talk time",type:"number"}],this.list=[],this.total=0,this.isLoading=!0,this.query={q:"user:nzbin",sort:"stars",order:"desc",page:0,per_page:10}}return a(t,[{key:"params",get:function(){var e=Object.assign({},this.query);return e.page+=1,e}},{key:"ngOnInit",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.isLoading=!0,this.remoteSrv.getData(this.params).subscribe(function(t){e.list=t.items,e.total=t.total_count,e.isLoading=!1,e.cdr.detectChanges()},function(){e.isLoading=!1,e.cdr.detectChanges()},function(){e.isLoading=!1,e.cdr.detectChanges()})}},{key:"getNextPage",value:function(e){this.query.page=e.pageIndex,this.query.per_page=e.pageSize,this.getData()}},{key:"search",value:function(){this.query.page=0,this.getData()}}]),t}()).\u0275fac=function(e){return new(e||o)(g.Ub(S),g.Ub(g.h))},o.\u0275cmp=g.Ob({type:o,selectors:[["app-live-calls"]],features:[g.Gb([S])],decls:25,vars:12,consts:[[1,"bg-blue-600"],[1,"m-r-8"],["matInput","","name","q","placeholder","Query String",3,"ngModel","ngModelChange"],["name","sort","placeholder","Sort",3,"ngModel","ngModelChange"],["value","stars"],["value","forks"],["value","updated"],["name","order","placeholder","Order",3,"ngModel","ngModelChange"],["value","desc"],["value","asc"],["mat-raised-button","","color","primary",1,"m-r-8",3,"click"],[3,"data","columns","length","loading","pageOnFront","pageIndex","pageSize","pageSizeOptions","page"]],template:function(e,t){1&e&&(g.Vb(0,"page-header",0),g.ac(1,"form"),g.ac(2,"mat-form-field",1),g.ac(3,"input",2),g.ic("ngModelChange",function(e){return t.query.q=e}),g.Zb(),g.Zb(),g.ac(4,"mat-form-field",1),g.ac(5,"mat-select",3),g.ic("ngModelChange",function(e){return t.query.sort=e}),g.ac(6,"mat-option"),g.Uc(7,"-- None --"),g.Zb(),g.ac(8,"mat-option",4),g.Uc(9,"stars"),g.Zb(),g.ac(10,"mat-option",5),g.Uc(11,"forks"),g.Zb(),g.ac(12,"mat-option",6),g.Uc(13,"updated"),g.Zb(),g.Zb(),g.Zb(),g.ac(14,"mat-form-field",1),g.ac(15,"mat-select",7),g.ic("ngModelChange",function(e){return t.query.order=e}),g.ac(16,"mat-option"),g.Uc(17,"-- None --"),g.Zb(),g.ac(18,"mat-option",8),g.Uc(19,"desc"),g.Zb(),g.ac(20,"mat-option",9),g.Uc(21,"asc"),g.Zb(),g.Zb(),g.Zb(),g.ac(22,"button",10),g.ic("click",function(){return t.search()}),g.Uc(23,"Search"),g.Zb(),g.Zb(),g.ac(24,"mtx-grid",11),g.ic("page",function(e){return t.getNextPage(e)}),g.Zb()),2&e&&(g.Hb(3),g.vc("ngModel",t.query.q),g.Hb(2),g.vc("ngModel",t.query.sort),g.Hb(10),g.vc("ngModel",t.query.order),g.Hb(9),g.vc("data",t.list)("columns",t.columns)("length",t.total)("loading",t.isLoading)("pageOnFront",!1)("pageIndex",t.query.page)("pageSize",t.query.per_page)("pageSizeOptions",g.yc(11,C)))},directives:[f.a,m.z,m.s,m.t,v.c,y.b,m.d,m.r,m.u,Z.a,q.o,k.b,U.a],styles:["[_nghost-%COMP%]     .mtx-grid{height:480px}.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);font-size:14px!important}"],changeDetection:0}),o),L=r("Wp6s"),x=r("wZkO"),D=r("dDqv"),_=r("+niU"),I=[{path:"contact-operator",component:O},{path:"live-call",component:w},{path:"monitoring",component:(s=function(){function t(){e(this,t)}return a(t,[{key:"ngOnInit",value:function(){}}]),t}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=g.Ob({type:s,selectors:[["app-monitoring"]],decls:59,vars:0,consts:[[1,"bg-blue-600"],[1,"m--16"],["label","Aero"],[1,"m-16"],[1,"row"],[1,"col-lg-12","align-center"],[1,"col-lg-8"],[1,"col-lg-4"],["label","OLA"],["label","OLATFN"],["label","Schoolivr"]],template:function(e,t){1&e&&(g.Vb(0,"page-header",0),g.ac(1,"mat-card"),g.ac(2,"mat-tab-group",1),g.ac(3,"mat-tab",2),g.ac(4,"div",3),g.ac(5,"div",4),g.ac(6,"div",5),g.ac(7,"h3"),g.Uc(8,"Live Report"),g.Zb(),g.Zb(),g.ac(9,"div",6),g.ac(10,"p"),g.Uc(11,"Agents"),g.Zb(),g.Vb(12,"app-agent-table"),g.Zb(),g.ac(13,"div",7),g.ac(14,"p"),g.Uc(15,"Queue"),g.Zb(),g.Vb(16,"app-queue-table"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(17,"mat-tab",8),g.ac(18,"div",3),g.ac(19,"div",4),g.ac(20,"div",5),g.ac(21,"h3"),g.Uc(22,"Live Report"),g.Zb(),g.Zb(),g.ac(23,"div",6),g.ac(24,"p"),g.Uc(25,"Agents"),g.Zb(),g.Vb(26,"app-agent-table"),g.Zb(),g.ac(27,"div",7),g.ac(28,"p"),g.Uc(29,"Queue"),g.Zb(),g.Vb(30,"app-queue-table"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(31,"mat-tab",9),g.ac(32,"div",3),g.ac(33,"div",4),g.ac(34,"div",5),g.ac(35,"h3"),g.Uc(36,"Live Report"),g.Zb(),g.Zb(),g.ac(37,"div",6),g.ac(38,"p"),g.Uc(39,"Agents"),g.Zb(),g.Vb(40,"app-agent-table"),g.Zb(),g.ac(41,"div",7),g.ac(42,"p"),g.Uc(43,"Queue"),g.Zb(),g.Vb(44,"app-queue-table"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(45,"mat-tab",10),g.ac(46,"div",3),g.ac(47,"div",4),g.ac(48,"div",5),g.ac(49,"h3"),g.Uc(50,"Live Report"),g.Zb(),g.Zb(),g.ac(51,"div",6),g.ac(52,"p"),g.Uc(53,"Agents"),g.Zb(),g.Vb(54,"app-agent-table"),g.Zb(),g.ac(55,"div",7),g.ac(56,"p"),g.Uc(57,"Queue"),g.Zb(),g.Vb(58,"app-queue-table"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.Zb())},directives:[f.a,L.a,x.b,x.a,D.a,_.a],styles:[""]}),s)}],z=((d=function t(){e(this,t)}).\u0275fac=function(e){return new(e||d)},d.\u0275mod=g.Sb({type:d}),d.\u0275inj=g.Rb({imports:[[p.j.forChild(I)],p.j]}),d),N=((u=function t(){e(this,t)}).\u0275fac=function(e){return new(e||u)},u.\u0275mod=g.Sb({type:u}),u.\u0275inj=g.Rb({imports:[[l.c,z]]}),u)}}])}();