(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Gan4:function(e,t,o){"use strict";o.r(t),o.d(t,"StaffModule",function(){return X});var a=o("tyNb"),l=o("3Pt+"),i=o("xdv0"),s=o("M9IT"),r=o("HJYq"),n=o("wwJg"),c=o("fXoL"),d=o("FKr1"),u=o("sYmb"),m=o("dNgK"),h=o("0IaG"),p=o("r0g6"),b=o("tgey"),f=o("hGDI"),g=o("A5z7"),v=o("5+WD"),w=o("ofXK"),S=o("bTqV"),x=o("NFeN"),y=o("znSr"),k=o("kmnG"),C=o("qFsG"),Z=o("bSwM"),U=o("7EHt");function q(e,t){if(1&e&&(c.ac(0,"mat-chip",8),c.Uc(1),c.Zb()),2&e){const e=t.$implicit;c.Hb(1),c.Wc(" ",e," ")}}function M(e,t){if(1&e){const e=c.bc();c.ac(0,"mat-chip-list",6),c.ic("cdkDropListDropped",function(t){return c.Jc(e),c.mc().drop(t)}),c.Sc(1,q,2,1,"mat-chip",7),c.Zb()}if(2&e){const e=t.$implicit;c.Hb(1),c.vc("ngForOf",e.permissions)}}function D(e,t){if(1&e){const e=c.bc();c.ac(0,"button",9),c.ic("click",function(){return c.Jc(e),c.mc().openRole()}),c.ac(1,"mat-icon"),c.Uc(2,"add"),c.Zb(),c.Uc(3,"Add Role "),c.Zb(),c.ac(4,"input",10),c.ic("ngModelChange",function(t){return c.Jc(e),c.mc().filterSearch=t})("ngModelChange",function(t){return c.Jc(e),c.mc().searchData(t)}),c.Zb()}if(2&e){const e=c.mc();c.Hb(4),c.vc("ngModel",e.filterSearch)}}const T=function(){return[5,10,50,100]},O=function(){return{standalone:!0}};function P(e,t){if(1&e){const e=c.bc();c.ac(0,"div"),c.ac(1,"mat-checkbox",10),c.ic("ngModelChange",function(e){return t.$implicit.completed=e})("change",function(){c.Jc(e);const o=t.$implicit;return c.mc(2).updateAllComplete(o)}),c.Uc(2),c.Zb(),c.Zb()}if(2&e){const e=t.$implicit;c.Hb(1),c.vc("ngModel",e.completed)("ngModelOptions",c.yc(3,O)),c.Hb(1),c.Wc(" ",null==e?null:e.name," ")}}function H(e,t){if(1&e){const e=c.bc();c.ac(0,"mat-expansion-panel"),c.ac(1,"mat-expansion-panel-header"),c.ac(2,"mat-panel-title"),c.Uc(3),c.Zb(),c.ac(4,"mat-panel-description",8),c.ac(5,"mat-checkbox",9),c.ic("change",function(o){c.Jc(e);const a=t.$implicit;return c.mc().setAllCompleted(null==a?null:a.subtasks,null==o?null:o.checked)}),c.Uc(6),c.Zb(),c.Zb(),c.Zb(),c.Sc(7,P,3,4,"div",5),c.Zb()}if(2&e){const e=t.$implicit,o=c.mc();c.Hb(3),c.Wc(" ",null==e?null:e.name," "),c.Hb(2),c.vc("value",null==e?null:e.completed)("checked",o.allComplete(e))("indeterminate",o.someComplete(null==e?null:e.subtasks)),c.Hb(1),c.Wc(" ",e.name," "),c.Hb(1),c.vc("ngForOf",null==e?null:e.subtasks)}}let _=(()=>{class e{constructor(e,t,o,a,i,s,r,n,c){this.remoteSrv=e,this.fb=t,this.dateAdapter=o,this.translate=a,this.userService=i,this.snackBar=s,this.dialog=r,this.dialogx=n,this.cdr=c,this.q={username:"",email:"",gender:""},this.toggleeditrole=!0,this.query={q:"user:nzbin",sort:"stars",order:"desc",page:0,per_page:10},this.falseValue="false",this.trueValue="true",this.columns=[{header:"Name",sortable:!0,field:"name"},{header:"Status",sortable:!0,field:"status"},{header:"Permissions",field:"permissions",showExpand:!0,formatter:e=>"<a\n      >click here\n    </a>"},{header:"Actions",field:"action",minWidth:120,width:"120px",pinned:"right",type:"button",buttons:[{type:"icon",icon:"edit",tooltip:"edit",click:e=>this.edit(e)},{color:"warn",icon:"delete",text:"delete",tooltip:"delete",pop:!0,popTitle:"Confirm Delete",popCloseText:"Cancel",popOkText:"Delete",click:e=>this.delete(e)}]}],this.list=[],this.total=0,this.multiSelectable=!1,this.rowSelectable=!1,this.hideRowSelectionCheckbox=!1,this.showToolbar=!0,this.columnHideable=!0,this.columnMovable=!0,this.rowHover=!0,this.rowStriped=!1,this.showPaginator=!0,this.expandable=!0,this.columnResizable=!1,this.displayedColumns=["role","r_calldetails","w_calldetails","r_userdetails","w_userdetails","r_sip","w_sip","r_ivr","w_ivr","actions"],this.reactiveForm1=this.fb.group({username:["",[l.y.required]],gender:["",[l.y.required]],mobile:["",[l.y.required]],email:["",[l.y.required,l.y.email]],city:[""],address:[""],company:[""],tele:[""],website:[""],date:[""]}),this.addroleform=this.fb.group({name:["",[l.y.required]],r_calldetails:[!1],w_calldetails:[!1],r_userdetails:[!1],w_userdetails:[!1],r_sip:[!1],w_sip:[!1],r_ivr:[!1],w_ivr:[!1]})}get params(){const e=Object.assign({},this.query);return e.page+=1,e}ngOnInit(){this.getData(),this.getallroles(),this.translateSubscription=this.translate.onLangChange.subscribe(e=>{this.dateAdapter.setLocale(e.lang)})}ngAfterViewInit(){}ngOnDestroy(){this.translateSubscription.unsubscribe()}getErrorMessage(e){return e.get("name").hasError("required")?"validations.required":e.get("email").hasError("email")?"validations.invalid_email":""}editrole(){console.log("button clicked"),this.toggleeditrole=0==this.toggleeditrole}editonerole(e){this.toggleeditrole=!1,this.userService.viewonerole(e).subscribe(e=>{console.log(e)},e=>{console.log(e)})}deleteonerole(e){this.snackBar.open("Operation not allowed","",{duration:2e3})}submitroleForm(){console.log(this.addroleform.value),this.userService.addrole(this.addroleform.value).subscribe(e=>{console.log(e),this.snackBar.open("Role Added Successfully!","",{duration:2e3}),this.addroleform.reset(),this.getallroles()},e=>{console.log(e)})}checkboxChange(e,t){e.value=t?this.trueValue:this.falseValue}getallroles(){this.userService.getallroles().subscribe(e=>{console.log("%crole.component.ts line:311 response","color: #26bfa5;",e),this.list=e.data,this.total=e.data.length,this.isLoading=!1,this.cdr.detectChanges()},e=>{console.log("%cerror role.component.ts line:318 ","color: red; display: block; width: 100%;",e)})}canceledit(){console.log("Cancel Requested")}getData(){this.isLoading=!0,this.remoteSrv.getData(this.params).subscribe(e=>{this.total=e.total_count,this.isLoading=!1,this.cdr.detectChanges()},()=>{this.isLoading=!1,this.cdr.detectChanges()},()=>{this.isLoading=!1,this.cdr.detectChanges()})}edit(e){this.dialogx.originalOpen(n.a,{width:"90%",data:{record:e}}).afterClosed().subscribe(()=>console.log("The dialog was closed"))}delete(e){console.log(e),this.userService.deleterole(e._id).subscribe(e=>{console.log("%cips.component.ts line:304 response","color: #26bfa5;",e),this.snackBar.open("Role Deleted Successfully!","",{duration:2e3}),this.getallroles()},e=>{console.log("%cerror ips.component.ts line:311 ","color: red; display: block; width: 100%;",e)}),this.dialogx.alert(`You have deleted ${e.name}!`)}changeSelect(e){console.log(e)}changeSort(e){console.log(e)}openRole(){this.dialog.open(A,{width:"1000px"}).afterClosed().subscribe(()=>{this.getallroles()})}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(r.a),c.Ub(l.g),c.Ub(d.c),c.Ub(u.e),c.Ub(i.a),c.Ub(m.a),c.Ub(h.c),c.Ub(p.a),c.Ub(c.h))},e.\u0275cmp=c.Ob({type:e,selectors:[["app-role"]],viewQuery:function(e,t){if(1&e&&c.Yc(s.a,1),2&e){let e;c.Fc(e=c.jc())&&(t.paginator=e.first)}},features:[c.Gb([r.a])],decls:8,vars:22,consts:[[1,"bg-blue-600"],[1,"row"],[1,"col-lg-12"],[1,"mat-elevation-z8",3,"data","columns","loading","columnResizable","multiSelectable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","showToolbar","toolbarTitle","columnHideable","columnMovable","expandable","expansionTemplate","toolbarTemplate","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","sortChange","selectionChange"],["expansionTpl",""],["toolbarTpl",""],["cdkDropList","","cdkDropListOrientation","horizontal",1,"example-chip","p-8",3,"cdkDropListDropped"],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"example-box"],["mat-stroked-button","","color","primary",3,"click"],["fxHide.lt-sm","","placeholder","Start typing","type","text","autocomplete","off",1,"form-control",2,"padding","5px","margin","0px 2px","border","1px solid #d7d7d7","line-height","24px","border-radius","4px",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(c.Vb(0,"page-header",0),c.ac(1,"div",1),c.ac(2,"div",2),c.ac(3,"mtx-grid",3),c.ic("sortChange",function(e){return t.changeSort(e)})("selectionChange",function(e){return t.changeSelect(e)}),c.Zb(),c.Sc(4,M,2,1,"ng-template",null,4,c.Tc),c.Sc(6,D,5,1,"ng-template",null,5,c.Tc),c.Zb(),c.Zb()),2&e){const e=c.Gc(5),o=c.Gc(7);c.Hb(3),c.vc("data",t.list)("columns",t.columns)("loading",t.isLoading)("columnResizable",t.columnResizable)("multiSelectable",t.multiSelectable)("rowSelectable",t.rowSelectable)("hideRowSelectionCheckbox",t.hideRowSelectionCheckbox)("rowHover",t.rowHover)("rowStriped",t.rowStriped)("showToolbar",t.showToolbar)("toolbarTitle","Role & Permissions")("columnHideable",t.columnHideable)("columnMovable",t.columnMovable)("expandable",t.expandable)("expansionTemplate",e)("toolbarTemplate",o)("pageOnFront",t.showPaginator)("showPaginator",t.showPaginator)("pageSizeOptions",c.yc(21,T))("pageIndex",0)("pageSize",50)}},directives:[b.a,f.a,g.c,v.c,w.o,g.a,v.a,S.b,x.a,l.d,y.b,l.r,l.u],styles:[".st-chk[_ngcontent-%COMP%]{width:50%;float:left;padding:6px 0}"],changeDetection:0}),e})(),A=(()=>{class e{constructor(e,t,o){this.fb=e,this.userService=t,this.snackBar=o,this.falseValue="false",this.trueValue="true",this.panelOpenState=!1,this.tasks=[{name:"Basic",completed:!1,subtasks:[{name:"Add",value:"canAdd",completed:!1},{name:"Edit",value:"canEdit",completed:!1},{name:"Read",value:"canRead",completed:!1},{name:"Delete",value:"canDelete",completed:!1}]},{name:"Enquiry",completed:!1,subtasks:[{name:"View Enquiry",value:"ViewEnquiry",completed:!1},{name:"Followup Enquiry",value:"FollowupEnquiry",completed:!1}]},{name:"Manage Staff",completed:!1,subtasks:[{name:"View Staff",value:"ViewStaff",completed:!1},{name:"Add Staff",value:"AddStaff",completed:!1},{name:"Edit Staff",value:"EditStaff",completed:!1},{name:"Delete Staff",value:"DeleteStaff",completed:!1}]},{name:"DST Numbers",completed:!1,subtasks:[{name:"View DST Numbers",value:"ViewDST",completed:!1},{name:"Add DST Numbers",value:"AddDST",completed:!1},{name:"Edit DST Numbers",value:"EditDST",completed:!1},{name:"Delete DST Numbers",value:"DeleteDST",completed:!1}]},{name:"IPs",completed:!1,subtasks:[{name:"View IPs",value:"ViewIP",completed:!1},{name:"Add IPs",value:"AddIP",completed:!1},{name:"Edit IPs",value:"EditIP",completed:!1},{name:"Delete IPs",value:"DeleteIP",completed:!1}]},{name:"Plan",completed:!1,subtasks:[{name:"View Plan",value:"ViewPlan",completed:!1},{name:"Add Plan",value:"AddPlan",completed:!1},{name:"Edit Plan",value:"EditPlan",completed:!1},{name:"Delete Plan",value:"DeletePlan",completed:!1}]},{name:"Chat",completed:!1,subtasks:[{name:"View Chat",value:"ViewChat",completed:!1},{name:"Delete Chat",value:"DeleteChat",completed:!1}]}],this.addroleform=this.fb.group({name:["",[l.y.required]],status:[!1],permissions:[]})}ngOnInit(){this.getallips()}allComplete(e){const t=e.subtasks;return e.completed||null!=t&&t.every(e=>e.completed)}someComplete(e){const t=e.filter(e=>e.completed).length;return t>0&&t<e.length}setAllCompleted(e,t){e.forEach(e=>e.completed=t)}updateAllComplete(e){console.log(e)}getErrorMessage(e){return e.get("name").hasError("required")?"validations.required":""}checkboxChange(e,t){e.value=t?this.trueValue:this.falseValue}submitdstnumber(){let e=[];this.tasks.forEach(t=>t.subtasks.forEach(t=>{1==t.completed&&e.push(t.value)})),console.log(e),this.addroleform.setValue({name:this.addroleform.value.name,status:this.addroleform.value.status,permissions:e}),this.addroleform.valid?(console.log(this.addroleform.value),this.userService.addrole(this.addroleform.value).subscribe(e=>{console.log("%cips.component.ts line:511 response","color: #26bfa5;",e),this.snackBar.open("Role Added Successfully!","",{duration:2e3}),this.addroleform.reset()},e=>{console.log("%cerror ips.component.ts line:254 ","color: red; display: block; width: 100%;",e)})):(this.getErrorMessage(this.addroleform),console.log(this.getErrorMessage(this.addroleform)))}getallips(){this.userService.getallips().subscribe(e=>{console.log("%cips.component.ts line:248 response","color: #26bfa5;",e),this.allips=e.data},e=>{console.log("%cerror ips.component.ts line:254 ","color: red; display: block; width: 100%;",e)})}isFieldValid(e){return!this.addroleform.get(e).valid&&this.addroleform.get(e).touched}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(l.g),c.Ub(i.a),c.Ub(m.a))},e.\u0275cmp=c.Ob({type:e,selectors:[["add-role-form"]],decls:17,vars:3,consts:[["mat-dialog-title",""],[3,"formGroup","ngSubmit"],[1,"demo-full-width"],["matInput","","placeholder","Admin","required","","formControlName","name"],["formControlName","status","value","","color","primary"],[4,"ngFor","ngForOf"],["mat-raised-button","","cdkFocusInitial","","mat-dialog-close",""],["mat-raised-button","","mat-dialog-close","","color","primary","type","submit",3,"disabled"],[2,"flex-grow","1"],["color","primary",3,"value","checked","indeterminate","change"],["color","primary",3,"ngModel","ngModelOptions","ngModelChange","change"]],template:function(e,t){1&e&&(c.ac(0,"h2",0),c.Uc(1,"Add Roles"),c.Zb(),c.ac(2,"form",1),c.ic("ngSubmit",function(){return t.submitdstnumber()}),c.ac(3,"mat-dialog-content"),c.ac(4,"mat-form-field",2),c.ac(5,"mat-label"),c.Uc(6,"Role Name"),c.Zb(),c.Vb(7,"input",3),c.Zb(),c.ac(8,"mat-checkbox",4),c.Uc(9,"Status"),c.Zb(),c.ac(10,"mat-accordion"),c.Sc(11,H,8,6,"mat-expansion-panel",5),c.Zb(),c.Zb(),c.ac(12,"mat-dialog-actions"),c.ac(13,"button",6),c.Uc(14,"Cancel"),c.Zb(),c.ac(15,"button",7),c.Uc(16,"Submit"),c.Zb(),c.Zb(),c.Zb()),2&e&&(c.Hb(2),c.vc("formGroup",t.addroleform),c.Hb(9),c.vc("ngForOf",t.tasks),c.Hb(4),c.vc("disabled",t.addroleform.invalid))},directives:[h.j,l.z,l.s,l.l,h.g,k.c,k.g,C.b,l.d,l.x,l.r,l.j,Z.a,U.a,w.o,h.d,S.b,h.e,U.c,U.f,U.g,U.e,l.u],styles:[".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      .demo-sub-list[_ngcontent-%COMP%] {\n        margin-left: 20px;\n\n        input[type='checkbox'] {\n          visibility: hidden;\n          &:checked + label {\n            transform: rotate(360deg);\n            background-color: #000;\n            &:before {\n              transform: translateX(90px);\n              background-color: #fff;\n            }\n          }\n        }\n\n        label {\n          display: flex;\n          width: 180px;\n          height: 90px;\n          border: 6px solid;\n          border-radius: 99em;\n          position: relative;\n          transition: transform 0.75s ease-in-out;\n          transform-origin: 50% 50%;\n          cursor: pointer;\n\n          &:before {\n            transition: transform 0.75s ease;\n            transition-delay: 0.5s;\n            content: '';\n            display: block;\n            position: absolute;\n            width: 54px;\n            height: 54px;\n            background-color: #000;\n            border-radius: 50%;\n            top: 12px;\n            left: 12px;\n          }\n        }\n      }","fieldset.st-set[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 5px;\n    border-color: #2196f35e  !important;\n}\nlegend.st-leg[_ngcontent-%COMP%] {\n    font-size: 16px;\n}\n.st-mb.ng-star-inserted[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\nfieldset.st-set[_ngcontent-%COMP%] {\n    width: 295px;\n    float: left;\n    height: 180px;\n    margin: 10px;\n}"]}),e})();var E=o("tk/3");let V=(()=>{class e{constructor(e){this.http=e}getData(e={}){return this.http.get("https://api.github.com/search/repositories",{params:e})}}return e.\u0275fac=function(t){return new(t||e)(c.ec(E.c))},e.\u0275prov=c.Qb({token:e,factory:e.\u0275fac}),e})();var R=o("qSrz"),F=o("XiUz"),I=o("d3UM");function N(e,t){1&e&&c.Uc(0),2&e&&c.Wc(" ",t.$implicit.name," ")}function L(e,t){if(1&e){const e=c.bc();c.ac(0,"button",6),c.ic("click",function(){return c.Jc(e),c.mc().openAddStaff()}),c.ac(1,"mat-icon"),c.Uc(2,"add"),c.Zb(),c.Uc(3,"Add Staff "),c.Zb(),c.ac(4,"input",7),c.ic("ngModelChange",function(t){return c.Jc(e),c.mc().filterSearch=t})("ngModelChange",function(t){return c.Jc(e),c.mc().searchData(t)}),c.Zb()}if(2&e){const e=c.mc();c.Hb(4),c.vc("ngModel",e.filterSearch)}}const z=function(){return[50,100,200,500]};function G(e,t){if(1&e&&(c.ac(0,"mat-option",16),c.Uc(1),c.Zb()),2&e){const e=t.$implicit;c.vc("value",e._id),c.Hb(1),c.Wc(" ",null==e?null:e.name," ")}}function $(e,t){if(1&e&&(c.ac(0,"mat-option",16),c.Uc(1),c.Zb()),2&e){const e=t.$implicit;c.vc("value",e._id),c.Hb(1),c.Xc(" ",null==e?null:e.firstname," ",null==e?null:e.lastname," ")}}let B=(()=>{class e{constructor(e,t,o,a,i,s,r,n){this.remoteSrv=e,this.fb=t,this.cdr=o,this.userService=a,this.dialog=i,this.dialogx=s,this.snackBar=r,this.permissionsSrv=n,this.columns=[],this.list=[],this.total=0,this.isLoading=!0,this.multiSelectable=!1,this.rowSelectable=!1,this.hideRowSelectionCheckbox=!1,this.showToolbar=!0,this.columnHideable=!0,this.columnMovable=!0,this.rowHover=!0,this.rowStriped=!0,this.showPaginator=!0,this.expandable=!1,this.columnResizable=!1,this.query={q:"user:nzbin",sort:"stars",order:"desc",page:0,per_page:10},this.falseValue="false",this.trueValue="true",this.addstaffform=this.fb.group({firstname:["",[l.y.required]],lastname:["",[l.y.required]],email:["",[l.y.required,l.y.email]],mobile:["",[l.y.required]],password:["",[l.y.required]],role:["",[l.y.required]],approvedstatus:[!1]})}get params(){const e=Object.assign({},this.query);return e.page+=1,e}ngOnInit(){this.getallroles(),this.getallstaff(),this.columns=[{header:"Avatar",field:"staffimg",type:"image"},{header:"Name",field:"name",formatter:e=>`${e.firstname} ${e.lastname} `},{header:"Email",sortable:!0,field:"email"},{header:"Mobile",sortable:!0,field:"mobile"},{header:"Role",field:"role.name",formatter:e=>{var t;return`<span class="label">${null===(t=null==e?void 0:e.role)||void 0===t?void 0:t.name}</span>`}},{header:"Added By",field:"added_by.firstname",formatter:e=>{var t;return`<span (click)="viewadmin()" class="admin-dy-class">${null===(t=null==e?void 0:e.added_by)||void 0===t?void 0:t.firstname}</span>`}},{header:"Approved",field:"approvedstatus",type:"tag",tag:{true:{text:"Yes",color:"red-100"},false:{text:"No",color:"green-100"}}},{header:"Actions",field:"action",minWidth:120,width:"120px",pinned:"right",type:"button",buttons:[{type:"icon",icon:"edit",tooltip:"edit",click:e=>this.edit(e)},{color:"warn",icon:"delete",text:"delete",tooltip:"delete",pop:!0,popTitle:"Confirm Delete",popCloseText:"Cancel",popOkText:"Delete",click:e=>this.delete(e)}]}]}searchData(e){e?this.filteredData=this.list.filter(t=>t.firstname.toLowerCase().includes(e.toLowerCase())||t.lastname.toLowerCase().includes(e.toLowerCase())||t.email.toLowerCase().includes(e.toLowerCase())):(this.filteredData=null,this.getallstaff())}edit(e){this.dialog.open(W,{width:"500px",data:{record:e}}).afterClosed().subscribe(()=>{console.log("The dialog was closed"),this.getallstaff()})}delete(e){this.userService.deletestaff(e._id).subscribe(t=>{console.log("%cips.component.ts line:248 response","color: #26bfa5;",t),this.isLoading=!1,this.getallstaff(),this.cdr.detectChanges(),this.dialogx.alert(`You have deleted ${e.firstname} ${e.lastname}!`)},e=>{console.log("%cerror ips.component.ts line:254 ","color: red; display: block; width: 100%;",e)})}changeSelect(e){console.log(e)}changeSort(e){console.log(e)}viewadmin(){console.log("radha ganj")}enableRowExpandable(){this.columns[0].showExpand=this.expandable}checkboxChange(e,t){e.value=t?this.trueValue:this.falseValue,console.log(e.value)}getallroles(){this.userService.getallroles().subscribe(e=>{console.log(e),this.allroles=e.data},e=>{console.log(e)})}openAddStaff(){this.dialog.open(W,{width:"500px"}).afterClosed().subscribe(()=>{console.log("closed"),this.getallstaff(),this.getallstaff(),this.getallstaff()})}submitstaffForm(){console.log(this.addstaffform.value),this.userService.addstaff(this.addstaffform.value).subscribe(e=>{console.log(e),this.snackBar.open("Staff Added Successfully!","",{duration:2e3}),this.addstaffform.reset(),this.addstaffform.markAsUntouched(),console.log(this.addstaffform.getError),this.getallstaff()},e=>{console.log(e)})}getallstaff(){this.userService.getallstaff().subscribe(e=>{console.log("%cstaff.component.ts line:238 response","color: white; background-color: #007acc;",e),this.list=e.data,this.isLoading=!1,this.cdr.detectChanges()},e=>{console.log(e)})}ngAfterViewInit(){this.isLoading=!1}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(V),c.Ub(l.g),c.Ub(c.h),c.Ub(i.a),c.Ub(h.c),c.Ub(p.a),c.Ub(m.a),c.Ub(R.d))},e.\u0275cmp=c.Ob({type:e,selectors:[["app-staff"]],features:[c.Gb([V])],decls:9,vars:22,consts:[[1,"bg-blue-600"],[1,"row"],[1,"col-lg-12"],[1,"mat-elevation-z8","r-4",3,"data","columns","loading","columnResizable","multiSelectable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","showToolbar","toolbarTitle","toolbarTemplate","columnHideable","columnMovable","expandable","expansionTemplate","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","sortChange","selectionChange"],["expansionTpl",""],["toolbarTpl",""],["mat-stroked-button","","color","primary",3,"click"],["placeholder","Start typing","type","text","autocomplete","off",1,"form-control",2,"padding","5px","margin","0px 2px","border","1px solid #d7d7d7","line-height","24px","border-radius","4px",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(c.Vb(0,"page-header",0),c.ac(1,"section"),c.ac(2,"div",1),c.ac(3,"div",2),c.ac(4,"mtx-grid",3),c.ic("sortChange",function(e){return t.changeSort(e)})("selectionChange",function(e){return t.changeSelect(e)}),c.Zb(),c.Sc(5,N,1,1,"ng-template",null,4,c.Tc),c.Sc(7,L,5,1,"ng-template",null,5,c.Tc),c.Zb(),c.Zb(),c.Zb()),2&e){const e=c.Gc(6),o=c.Gc(8);c.Hb(4),c.vc("data",t.filteredData||t.list)("columns",t.columns)("loading",t.isLoading)("columnResizable",t.columnResizable)("multiSelectable",t.multiSelectable)("rowSelectable",t.rowSelectable)("hideRowSelectionCheckbox",t.hideRowSelectionCheckbox)("rowHover",t.rowHover)("rowStriped",t.rowStriped)("showToolbar",t.showToolbar)("toolbarTitle","Staff")("toolbarTemplate",o)("columnHideable",t.columnHideable)("columnMovable",t.columnMovable)("expandable",t.expandable)("expansionTemplate",e)("pageOnFront",t.showPaginator)("showPaginator",t.showPaginator)("pageSizeOptions",c.yc(21,z))("pageIndex",0)("pageSize",50)}},directives:[b.a,f.a,S.b,x.a,l.d,l.r,l.u],styles:["[_nghost-%COMP%]     .mtx-grid{height:480px}.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);font-size:14px!important}.st-chk[_ngcontent-%COMP%]{width:50%;float:left;padding:6px 0}[_nghost-%COMP%]     .label{padding:5px 10px;border-radius:999px;background-color:#ffb74d}[_nghost-%COMP%]     .admin-dy-class{padding:5px 10px;border-radius:5px;background-color:#6fcffc}"],changeDetection:0}),e})(),W=(()=>{class e{constructor(e,t,o,a,i){var s,r,n,c,d,u,m,h,p,b,f,g,v,w,S,x,y,k,C,Z,U,q,M,D,T,O,P,H,_,A,E,V,R,F,I;this.fb=e,this.userService=t,this.snackBar=o,this.dialogRef=a,this.data=i,this.editmode=!1,this.falseValue="false",this.trueValue="true",this.addstaffform=this.fb.group({firstname:["",[l.y.required]],lastname:["",[l.y.required]],email:["",[l.y.required,l.y.email]],mobile:["",[l.y.required]],password:["",[l.y.required]],role:["",[l.y.required]],added_by:["",[l.y.required]],approvedstatus:[!1]}),i&&(console.log(i),this.editmode=!0,this.id=null===(r=null===(s=this.data)||void 0===s?void 0:s.record)||void 0===r?void 0:r._id,this.addstaffform.setValue({firstname:(null===(c=null===(n=this.data)||void 0===n?void 0:n.record)||void 0===c?void 0:c.firstname)?null===(u=null===(d=this.data)||void 0===d?void 0:d.record)||void 0===u?void 0:u.firstname:"null",lastname:(null===(h=null===(m=this.data)||void 0===m?void 0:m.record)||void 0===h?void 0:h.lastname)?null===(b=null===(p=this.data)||void 0===p?void 0:p.record)||void 0===b?void 0:b.lastname:"null",email:(null===(g=null===(f=this.data)||void 0===f?void 0:f.record)||void 0===g?void 0:g.email)?null===(w=null===(v=this.data)||void 0===v?void 0:v.record)||void 0===w?void 0:w.email:"null",mobile:(null===(x=null===(S=this.data)||void 0===S?void 0:S.record)||void 0===x?void 0:x.mobile)?null===(k=null===(y=this.data)||void 0===y?void 0:y.record)||void 0===k?void 0:k.mobile:"null",password:(null===(Z=null===(C=this.data)||void 0===C?void 0:C.record)||void 0===Z?void 0:Z.password)?null===(q=null===(U=this.data)||void 0===U?void 0:U.record)||void 0===q?void 0:q.password:"null",role:(null===(D=null===(M=this.data)||void 0===M?void 0:M.record)||void 0===D?void 0:D.role)?null===(O=null===(T=this.data)||void 0===T?void 0:T.record)||void 0===O?void 0:O.role._id:"null",added_by:(null===(H=null===(P=this.data)||void 0===P?void 0:P.record)||void 0===H?void 0:H.added_by)?null===(E=null===(A=null===(_=this.data)||void 0===_?void 0:_.record)||void 0===A?void 0:A.added_by)||void 0===E?void 0:E._id:"null",approvedstatus:!!(null===(R=null===(V=this.data)||void 0===V?void 0:V.record)||void 0===R?void 0:R.approvedstatus)&&(null===(I=null===(F=this.data)||void 0===F?void 0:F.record)||void 0===I?void 0:I.approvedstatus)}))}ngOnInit(){this.getallroles(),this.getallstaff()}getErrorMessage(e){return e.get("firstname").hasError("required")||e.get("lastname").hasError("required")||e.get("email").hasError("required")?"validations.required":""}submitstaffForm(){this.editmode?(console.log(this.addstaffform.value),this.userService.editstaff(this.id,this.addstaffform.value).subscribe(e=>{console.log(e),this.snackBar.open("User Edited Successfully!","",{duration:2e3}),this.addstaffform.reset()},e=>{console.log(e)})):this.addstaffform.valid?(console.log(this.addstaffform.value),this.userService.addstaff(this.addstaffform.value).subscribe(e=>{console.log(e),this.snackBar.open("Staff Added Successfully!","",{duration:2e3}),this.addstaffform.reset(),this.addstaffform.markAsUntouched()},e=>{console.log(e)})):this.getErrorMessage(this.addstaffform)}getallroles(){this.userService.getallroles().subscribe(e=>{console.log(e),this.allroles=e.data},e=>{console.log(e)})}checkboxChange(e,t){e.value=t?this.trueValue:this.falseValue,console.log(e.value)}getallstaff(){this.userService.getallstaff().subscribe(e=>{console.log("%cstaff.component.ts line:238 response","color: white; background-color: #007acc;",e),this.allstaff=e.data},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(l.g),c.Ub(i.a),c.Ub(m.a),c.Ub(h.i),c.Ub(h.a))},e.\u0275cmp=c.Ob({type:e,selectors:[["add-staff-form"]],decls:65,vars:21,consts:[["mat-dialog-title",""],[1,"form-field-full",3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayoutGap","8px grid"],["fxFlex","50","fxFlex.lt-sm","100"],["type","text","matInput","","placeholder","First Name","formControlName","firstname","required",""],["type","text","matInput","","placeholder","Last Name","formControlName","lastname","required",""],["fxFlex","100","fxFlex.lt-sm","100"],["type","text","matInput","","placeholder","Email","formControlName","email","required",""],["type","number","matInput","","placeholder","Mobile","formControlName","mobile","required",""],["type","password","matInput","","placeholder","Password","formControlName","password","required",""],["formControlName","role","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","added_by","required",""],["formControlName","approvedstatus",1,"st-chk",3,"value","change"],["mat-raised-button","","mat-dialog-close","","cdkFocusInitial",""],["mat-raised-button","","mat-dialog-close","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(e,t){1&e&&(c.ac(0,"h2",0),c.Uc(1),c.Zb(),c.ac(2,"form",1),c.ic("ngSubmit",function(){return t.submitstaffForm()}),c.ac(3,"mat-dialog-content"),c.ac(4,"div",2),c.ac(5,"div",3),c.ac(6,"mat-form-field"),c.ac(7,"mat-label"),c.Uc(8,"First Name"),c.Zb(),c.Vb(9,"input",4),c.ac(10,"mat-error"),c.Uc(11),c.nc(12,"translate"),c.Zb(),c.Zb(),c.Zb(),c.ac(13,"div",3),c.ac(14,"mat-form-field"),c.ac(15,"mat-label"),c.Uc(16,"Last Name"),c.Zb(),c.Vb(17,"input",5),c.ac(18,"mat-error"),c.Uc(19),c.nc(20,"translate"),c.Zb(),c.Zb(),c.Zb(),c.ac(21,"div",6),c.ac(22,"mat-form-field"),c.ac(23,"mat-label"),c.Uc(24,"Email"),c.Zb(),c.Vb(25,"input",7),c.ac(26,"mat-error"),c.Uc(27),c.nc(28,"translate"),c.Zb(),c.Zb(),c.Zb(),c.ac(29,"div",6),c.ac(30,"mat-form-field"),c.ac(31,"mat-label"),c.Uc(32,"Mobile"),c.Zb(),c.Vb(33,"input",8),c.ac(34,"mat-error"),c.Uc(35),c.nc(36,"translate"),c.Zb(),c.Zb(),c.Zb(),c.ac(37,"div",6),c.ac(38,"mat-form-field"),c.ac(39,"mat-label"),c.Uc(40,"Password"),c.Zb(),c.Vb(41,"input",9),c.ac(42,"mat-error"),c.Uc(43),c.nc(44,"translate"),c.Zb(),c.Zb(),c.Zb(),c.ac(45,"div",3),c.ac(46,"mat-form-field"),c.ac(47,"mat-label"),c.Uc(48,"Select Role"),c.Zb(),c.ac(49,"mat-select",10),c.Sc(50,G,2,2,"mat-option",11),c.Zb(),c.Zb(),c.Zb(),c.ac(51,"div",3),c.ac(52,"mat-form-field"),c.ac(53,"mat-label"),c.Uc(54,"Add By"),c.Zb(),c.ac(55,"mat-select",12),c.Sc(56,$,2,3,"mat-option",11),c.Zb(),c.Zb(),c.Zb(),c.ac(57,"div",3),c.ac(58,"mat-checkbox",13),c.ic("change",function(e){return t.checkboxChange(e.source,e.checked)}),c.Uc(59,"Approve "),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.ac(60,"mat-dialog-actions"),c.ac(61,"button",14),c.Uc(62,"Cancel"),c.Zb(),c.ac(63,"button",15),c.Uc(64," Submit "),c.Zb(),c.Zb(),c.Zb()),2&e&&(c.Hb(1),c.Vc(t.editmode?"Edit Staff":"Add Staff"),c.Hb(1),c.vc("formGroup",t.addstaffform),c.Hb(9),c.Wc(" ",c.oc(12,11,"validations.required")," "),c.Hb(8),c.Wc(" ",c.oc(20,13,"validations.required")," "),c.Hb(8),c.Wc(" ",c.oc(28,15,"validations.required")," "),c.Hb(8),c.Wc(" ",c.oc(36,17,"validations.required")," "),c.Hb(8),c.Wc(" ",c.oc(44,19,"validations.required")," "),c.Hb(7),c.vc("ngForOf",t.allroles),c.Hb(6),c.vc("ngForOf",t.allstaff),c.Hb(2),c.vc("value",t.falseValue),c.Hb(5),c.vc("disabled",t.addstaffform.invalid))},directives:[h.j,l.z,l.s,l.l,h.g,F.c,F.d,F.a,k.c,k.g,C.b,l.d,l.r,l.j,l.x,k.b,l.v,I.a,w.o,Z.a,h.d,S.b,h.e,d.o],pipes:[u.d],styles:[".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }"]}),e})();const J=[{path:"role",component:_,canActivate:[R.b],data:{permissions:{only:["SUPERADMIN","ADMIN","MANAGER","RESELLER"],redirectTo:"/dashboard"}}},{path:"staff",component:B,canActivate:[R.b],data:{permissions:{only:["SUPERADMIN"],redirectTo:"/dashboard"}}}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Sb({type:e}),e.\u0275inj=c.Rb({imports:[[a.j.forChild(J)],a.j]}),e})();var Y=o("M0ag");let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Sb({type:e}),e.\u0275inj=c.Rb({imports:[[Y.d,j]]}),e})()}}]);