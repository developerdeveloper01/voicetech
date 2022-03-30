(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permissions-permissions-module"],{

/***/ "528D":
/*!******************************************************************!*\
  !*** ./src/app/routes/permissions/permissions-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: PermissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRoutingModule", function() { return PermissionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-switching/role-switching.component */ "h/XX");
/* harmony import */ var _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-guard/route-guard.component */ "oRiA");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ "7a1C");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'role-switching', component: _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_1__["PermissionsRoleSwitchingComponent"] },
    {
        path: 'route-guard',
        component: _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsRouteGuardComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
                redirectTo: '/dashboard',
            },
        },
    },
    {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsTestComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: 'ADMIN',
                redirectTo: '/dashboard',
            },
        },
    },
];
class PermissionsRoutingModule {
}
PermissionsRoutingModule.ɵfac = function PermissionsRoutingModule_Factory(t) { return new (t || PermissionsRoutingModule)(); };
PermissionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PermissionsRoutingModule });
PermissionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PermissionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "7a1C":
/*!***********************************************************!*\
  !*** ./src/app/routes/permissions/test/test.component.ts ***!
  \***********************************************************/
/*! exports provided: PermissionsTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsTestComponent", function() { return PermissionsTestComponent; });
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-matero/extensions/alert */ "6Nlu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PermissionsTestComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " I should see it only admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Usage on both only and except I should see it only admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "I will see it only guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "I will see it except adminnnnn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "I should see it except admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Testing template\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Testing template\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "else block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "then block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This should be visible to admin or superadmin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PermissionsTestComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "WTF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["admin"]; };
const _c1 = function () { return ["guest"]; };
const _c2 = function () { return ["adminnnnn"]; };
const _c3 = function () { return []; };
class PermissionsTestComponent {
    constructor(permissionsSrv) {
        this.permissionsSrv = permissionsSrv;
        this.comparedPermission = ['guest'];
    }
    ngOnInit() { }
    getPermissions() {
        return Object.keys(this.permissionsSrv.getPermissions());
    }
    addPermission() {
        // this.permissionsSrv.loadPermissions(['admin']);
        this.permissionsSrv.addPermission('admin', () => {
            // return false;
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(true), 2000);
            });
        });
    }
    removePermission() {
        this.permissionsSrv.removePermission('admin');
    }
    unAuthorized() {
        console.log('unAuthorized');
    }
    authorized() {
        console.log('authorizes');
    }
    changeToAdmin() {
        this.comparedPermission = ['admin'];
        console.log(this.comparedPermission);
    }
    changeToAnotherPermission() {
        this.comparedPermission = ['awesome'];
        console.log(this.comparedPermission);
    }
    changeToGuest() {
        this.comparedPermission = ['guest'];
        console.log(this.comparedPermission);
    }
}
PermissionsTestComponent.ɵfac = function PermissionsTestComponent_Factory(t) { return new (t || PermissionsTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxPermissionsService"])); };
PermissionsTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PermissionsTestComponent, selectors: [["app-permissions-test"]], decls: 39, vars: 28, consts: [["type", "danger"], [3, "click"], ["permissions", "", 3, "ngxPermissionsOnly"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["permissions", "", 3, "ngxPermissionsExcept", "permissionsAuthorized", "permissionsUnauthorized"], ["permissions", "", 3, "ngxPermissionsExcept"], [4, "ngxPermissionsOnly", "ngxPermissionsOnlyElse", "ngxPermissionsOnlyThen"], [4, "ngxPermissionsExcept", "ngxPermissionsExceptElse", "ngxPermissionsExceptThen"], ["a", ""], ["b", ""], [4, "ngxPermissionsOnly"], [1, "bg-green-500", "text-white"], [1, "bg-purple-500", "text-white"], [1, "bg-orange-500", "text-white"], [1, "bg-indigo-500", "text-white"], [1, "bg-gray-900", "text-white"], [1, "bg-gray-300"]], template: function PermissionsTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mtx-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The permissions check will delay 2s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsTestComponent_Template_button_click_4_listener() { return ctx.addPermission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Permission [ admin ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsTestComponent_Template_button_click_6_listener() { return ctx.removePermission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Remove Permission [ admin ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PermissionsTestComponent_ng_template_8_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PermissionsTestComponent_ng_template_9_Template, 2, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PermissionsTestComponent_ng_template_10_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PermissionsTestComponent_ng_template_11_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("permissionsAuthorized", function PermissionsTestComponent_Template_ng_template_permissionsAuthorized_11_listener() { return ctx.authorized(); })("permissionsUnauthorized", function PermissionsTestComponent_Template_ng_template_permissionsUnauthorized_11_listener() { return ctx.unAuthorized(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PermissionsTestComponent_ng_template_12_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PermissionsTestComponent_div_13_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PermissionsTestComponent_div_14_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PermissionsTestComponent_ng_template_15_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PermissionsTestComponent_ng_template_17_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Compared permission: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsTestComponent_Template_button_click_25_listener() { return ctx.changeToAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Change To Admin Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsTestComponent_Template_button_click_27_listener() { return ctx.changeToAnotherPermission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Change To Awesome Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionsTestComponent_Template_button_click_29_listener() { return ctx.changeToGuest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Change To Guest Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, PermissionsTestComponent_button_32_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PermissionsTestComponent_button_33_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Your current permissions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0))("ngxPermissionsExcept", "hhhhh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0))("ngxPermissionsOnlyElse", _r7)("ngxPermissionsOnlyThen", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0))("ngxPermissionsExceptElse", _r7)("ngxPermissionsExceptThen", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, ctx.comparedPermission));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", ctx.comparedPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 18, ctx.getPermissions()));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__["MtxAlertComponent"], ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxPermissionsDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "h/XX":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/permissions/role-switching/role-switching.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PermissionsRoleSwitchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRoleSwitchingComponent", function() { return PermissionsRoleSwitchingComponent; });
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









class PermissionsRoleSwitchingComponent {
    constructor(rolesSrv, permissionsSrv) {
        this.rolesSrv = rolesSrv;
        this.permissionsSrv = permissionsSrv;
        this.permissionsOfRole = {
            SUPERADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead'],
            ADMIN: ['canAdd', 'canEdit', 'canRead'],
            MANAGER: ['canEdit', 'canRead'],
            RESELLER: ['canEdit', 'canRead'],
            GUEST: ['canRead'],
        };
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
        this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
        this.rolesSrv.roles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(roles => {
            console.log(roles);
        });
        this.permissionsSrv.permissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(permissions => {
            console.log(permissions);
        });
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    onPermissionChange() {
        this.currentPermissions = this.permissionsOfRole[this.currentRole];
        this.rolesSrv.flushRolesAndPermissions();
        this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);
    }
}
PermissionsRoleSwitchingComponent.ɵfac = function PermissionsRoleSwitchingComponent_Factory(t) { return new (t || PermissionsRoleSwitchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxPermissionsService"])); };
PermissionsRoleSwitchingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PermissionsRoleSwitchingComponent, selectors: [["app-permissions-role-switching"]], decls: 28, vars: 7, consts: [["href", "https://github.com/AlexKhymenko/ngx-permissions", "target", "_blank"], [3, "ngModel", "ngModelChange", "change"], ["value", "SUPERADMIN"], ["value", "ADMIN"], ["value", "MANAGER"], ["value", "RESELLER"], ["value", "GUEST"]], template: function PermissionsRoleSwitchingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " The permissions management is powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "ngx-permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PermissionsRoleSwitchingComponent_Template_mat_button_toggle_group_ngModelChange_7_listener($event) { return ctx.currentRole = $event; })("change", function PermissionsRoleSwitchingComponent_Template_mat_button_toggle_group_change_7_listener() { return ctx.onPermissionChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "SUPERADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "MANAGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "RESELLER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "GUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Your current role: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Your current permissions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.currentRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 3, ctx.currentRole));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 5, ctx.currentPermissions));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLXN3aXRjaGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "oRiA":
/*!*************************************************************************!*\
  !*** ./src/app/routes/permissions/route-guard/route-guard.component.ts ***!
  \*************************************************************************/
/*! exports provided: PermissionsRouteGuardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRouteGuardComponent", function() { return PermissionsRouteGuardComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









class PermissionsRouteGuardComponent {
    constructor(rolesSrv, permissionsSrv, router) {
        this.rolesSrv = rolesSrv;
        this.permissionsSrv = permissionsSrv;
        this.router = router;
        this.permis = {
            SUPERADMIN: [
                'canAddStaff',
                'canDeleteStaff',
                'canEditStaff',
                'canReadStaff',
                'canAddUser',
                'canDeleteUser',
                'canEditUser',
                'canReadUser',
                'canAddNumber',
                'canDeleteNumber',
                'canEditNumber',
                'canReadNumber',
                'canAddSIP',
                'canDeleteSIP',
                'canEditSIP',
                'canReadSIP',
                'canAddEnquiry',
                'canDeleteEnquiry',
                'canEditEnquiry',
                'canReadEnquiry',
                'canAddChat',
                'canDeleteChat',
                'canEditChat',
                'canReadChat',
                'canAddPlan',
                'canDeletePlan',
                'canEditPlan',
                'canReadPlan',
                'canAddReport',
                'canDeleteReport',
                'canEditReport',
                'canReadReport',
            ],
        };
        this.permissionsOfRole = {
            SUPERADMIN: [
                'canAdd',
                'canDelete',
                'canEdit',
                'canRead',
                'canAddStaff',
                'canDeleteStaff',
                'canEditStaff',
                'canReadStaff',
                'canAddUser',
                'canDeleteUser',
                'canEditUser',
                'canReadUser',
                'canAddNumber',
                'canDeleteNumber',
                'canEditNumber',
                'canReadNumber',
                'canAddSIP',
                'canDeleteSIP',
                'canEditSIP',
                'canReadSIP',
                'canAddEnquiry',
                'canDeleteEnquiry',
                'canEditEnquiry',
                'canReadEnquiry',
                'canAddChat',
                'canDeleteChat',
                'canEditChat',
                'canReadChat',
                'canAddPlan',
                'canDeletePlan',
                'canEditPlan',
                'canReadPlan',
                'canAddReport',
                'canDeleteReport',
                'canEditReport',
                'canReadReport',
            ],
            ADMIN: ['canAdd', 'canEdit', 'canRead'],
            MANAGER: ['canAdd', 'canRead'],
            RESELLER: ['canAdd', 'canRead'],
            GUEST: ['canRead'],
        };
    }
    ngOnInit() {
        this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
        console.log(this.currentRole);
        this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
        console.log(this.currentPermissions);
    }
    onPermissionChange() {
        this.currentPermissions = this.permissionsOfRole[this.currentRole];
        console.log(this.permissionsOfRole[this.currentRole]);
        this.rolesSrv.flushRolesAndPermissions();
        this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);
        // this.router.navigateByUrl('/dashboard');
    }
}
PermissionsRouteGuardComponent.ɵfac = function PermissionsRouteGuardComponent_Factory(t) { return new (t || PermissionsRouteGuardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
PermissionsRouteGuardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PermissionsRouteGuardComponent, selectors: [["app-permissions-route-guard"]], decls: 24, vars: 7, consts: [[3, "ngModel", "ngModelChange", "change"], ["value", "SUPERADMIN"], ["value", "ADMIN"], ["value", "MANAGER"], ["value", "RESELLER"], ["value", "GUEST"]], template: function PermissionsRouteGuardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " The route will be redirected to dashboard after change permission.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionsRouteGuardComponent_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { return ctx.currentRole = $event; })("change", function PermissionsRouteGuardComponent_Template_mat_button_toggle_group_change_3_listener() { return ctx.onPermissionChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "SUPERADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "MANAGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "RESELLER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "GUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Your current role: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Your current permissions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 3, ctx.currentRole));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 5, ctx.currentPermissions));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZS1ndWFyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "xUSb":
/*!**********************************************************!*\
  !*** ./src/app/routes/permissions/permissions.module.ts ***!
  \**********************************************************/
/*! exports provided: PermissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModule", function() { return PermissionsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-routing.module */ "528D");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.component */ "7a1C");
/* harmony import */ var _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-guard/route-guard.component */ "oRiA");
/* harmony import */ var _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-switching/role-switching.component */ "h/XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






const COMPONENTS = [
    _test_test_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsTestComponent"],
    _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsRouteGuardComponent"],
    _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_4__["PermissionsRoleSwitchingComponent"],
];
const COMPONENTS_DYNAMIC = [];
class PermissionsModule {
}
PermissionsModule.ɵfac = function PermissionsModule_Factory(t) { return new (t || PermissionsModule)(); };
PermissionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PermissionsModule });
PermissionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissionsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PermissionsModule, { declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsTestComponent"],
        _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsRouteGuardComponent"],
        _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_4__["PermissionsRoleSwitchingComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissionsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=permissions-permissions-module-es2015.js.map