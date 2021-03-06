(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permissions-permissions-module"], {
    /***/
    "528D":
    /*!******************************************************************!*\
      !*** ./src/app/routes/permissions/permissions-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: PermissionsRoutingModule */

    /***/
    function D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsRoutingModule", function () {
        return PermissionsRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-switching/role-switching.component */
      "h/XX");
      /* harmony import */


      var _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./route-guard/route-guard.component */
      "oRiA");
      /* harmony import */


      var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test/test.component */
      "7a1C");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'role-switching',
        component: _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_1__["PermissionsRoleSwitchingComponent"]
      }, {
        path: 'route-guard',
        component: _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsRouteGuardComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }, {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsTestComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: 'ADMIN',
            redirectTo: '/dashboard'
          }
        }
      }];

      var PermissionsRoutingModule = function PermissionsRoutingModule() {
        _classCallCheck(this, PermissionsRoutingModule);
      };

      PermissionsRoutingModule.??fac = function PermissionsRoutingModule_Factory(t) {
        return new (t || PermissionsRoutingModule)();
      };

      PermissionsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: PermissionsRoutingModule
      });
      PermissionsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](PermissionsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "7a1C":
    /*!***********************************************************!*\
      !*** ./src/app/routes/permissions/test/test.component.ts ***!
      \***********************************************************/

    /*! exports provided: PermissionsTestComponent */

    /***/
    function a1C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsTestComponent", function () {
        return PermissionsTestComponent;
      });
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-matero/extensions/alert */
      "6Nlu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PermissionsTestComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " I should see it only admin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Usage on both only and except I should see it only admin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "I will see it only guest");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "I will see it except adminnnnn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "I should see it except admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Testing template\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Testing template\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "else block");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "then block");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_button_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " This should be visible to admin or superadmin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function PermissionsTestComponent_button_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "WTF");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["admin"];
      };

      var _c1 = function _c1() {
        return ["guest"];
      };

      var _c2 = function _c2() {
        return ["adminnnnn"];
      };

      var _c3 = function _c3() {
        return [];
      };

      var PermissionsTestComponent = /*#__PURE__*/function () {
        function PermissionsTestComponent(permissionsSrv) {
          _classCallCheck(this, PermissionsTestComponent);

          this.permissionsSrv = permissionsSrv;
          this.comparedPermission = ['guest'];
        }

        _createClass(PermissionsTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getPermissions",
          value: function getPermissions() {
            return Object.keys(this.permissionsSrv.getPermissions());
          }
        }, {
          key: "addPermission",
          value: function addPermission() {
            // this.permissionsSrv.loadPermissions(['admin']);
            this.permissionsSrv.addPermission('admin', function () {
              // return false;
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  return resolve(true);
                }, 2000);
              });
            });
          }
        }, {
          key: "removePermission",
          value: function removePermission() {
            this.permissionsSrv.removePermission('admin');
          }
        }, {
          key: "unAuthorized",
          value: function unAuthorized() {
            console.log('unAuthorized');
          }
        }, {
          key: "authorized",
          value: function authorized() {
            console.log('authorizes');
          }
        }, {
          key: "changeToAdmin",
          value: function changeToAdmin() {
            this.comparedPermission = ['admin'];
            console.log(this.comparedPermission);
          }
        }, {
          key: "changeToAnotherPermission",
          value: function changeToAnotherPermission() {
            this.comparedPermission = ['awesome'];
            console.log(this.comparedPermission);
          }
        }, {
          key: "changeToGuest",
          value: function changeToGuest() {
            this.comparedPermission = ['guest'];
            console.log(this.comparedPermission);
          }
        }]);

        return PermissionsTestComponent;
      }();

      PermissionsTestComponent.??fac = function PermissionsTestComponent_Factory(t) {
        return new (t || PermissionsTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxPermissionsService"]));
      };

      PermissionsTestComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: PermissionsTestComponent,
        selectors: [["app-permissions-test"]],
        decls: 39,
        vars: 28,
        consts: [["type", "danger"], [3, "click"], ["permissions", "", 3, "ngxPermissionsOnly"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["permissions", "", 3, "ngxPermissionsExcept", "permissionsAuthorized", "permissionsUnauthorized"], ["permissions", "", 3, "ngxPermissionsExcept"], [4, "ngxPermissionsOnly", "ngxPermissionsOnlyElse", "ngxPermissionsOnlyThen"], [4, "ngxPermissionsExcept", "ngxPermissionsExceptElse", "ngxPermissionsExceptThen"], ["a", ""], ["b", ""], [4, "ngxPermissionsOnly"], [1, "bg-green-500", "text-white"], [1, "bg-purple-500", "text-white"], [1, "bg-orange-500", "text-white"], [1, "bg-indigo-500", "text-white"], [1, "bg-gray-900", "text-white"], [1, "bg-gray-300"]],
        template: function PermissionsTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mtx-alert", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "The permissions check will delay 2s.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PermissionsTestComponent_Template_button_click_4_listener() {
              return ctx.addPermission();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Add Permission [ admin ]");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PermissionsTestComponent_Template_button_click_6_listener() {
              return ctx.removePermission();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Remove Permission [ admin ]");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, PermissionsTestComponent_ng_template_8_Template, 2, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, PermissionsTestComponent_ng_template_9_Template, 2, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, PermissionsTestComponent_ng_template_10_Template, 2, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, PermissionsTestComponent_ng_template_11_Template, 2, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("permissionsAuthorized", function PermissionsTestComponent_Template_ng_template_permissionsAuthorized_11_listener() {
              return ctx.authorized();
            })("permissionsUnauthorized", function PermissionsTestComponent_Template_ng_template_permissionsUnauthorized_11_listener() {
              return ctx.unAuthorized();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, PermissionsTestComponent_ng_template_12_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, PermissionsTestComponent_div_13_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, PermissionsTestComponent_div_14_Template, 2, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, PermissionsTestComponent_ng_template_15_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, PermissionsTestComponent_ng_template_17_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, " Compared permission: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](23, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PermissionsTestComponent_Template_button_click_25_listener() {
              return ctx.changeToAdmin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Change To Admin Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PermissionsTestComponent_Template_button_click_27_listener() {
              return ctx.changeToAnotherPermission();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Change To Awesome Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PermissionsTestComponent_Template_button_click_29_listener() {
              return ctx.changeToGuest();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Change To Guest Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, PermissionsTestComponent_button_32_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, PermissionsTestComponent_button_33_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Your current permissions: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](38, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](16);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](20, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](21, _c0))("ngxPermissionsExcept", "hhhhh");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](22, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](23, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](24, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](25, _c0))("ngxPermissionsOnlyElse", _r7)("ngxPermissionsOnlyThen", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](26, _c0))("ngxPermissionsExceptElse", _r7)("ngxPermissionsExceptThen", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](23, 16, ctx.comparedPermission));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsOnly", ctx.comparedPermission);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](27, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](38, 18, ctx.getPermissions()));
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__["MtxAlertComponent"], ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxPermissionsDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "h/XX":
    /*!*******************************************************************************!*\
      !*** ./src/app/routes/permissions/role-switching/role-switching.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PermissionsRoleSwitchingComponent */

    /***/
    function hXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsRoleSwitchingComponent", function () {
        return PermissionsRoleSwitchingComponent;
      });
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PermissionsRoleSwitchingComponent = /*#__PURE__*/function () {
        function PermissionsRoleSwitchingComponent(rolesSrv, permissionsSrv) {
          _classCallCheck(this, PermissionsRoleSwitchingComponent);

          this.rolesSrv = rolesSrv;
          this.permissionsSrv = permissionsSrv;
          this.permissionsOfRole = {
            SUPERADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead'],
            ADMIN: ['canAdd', 'canEdit', 'canRead'],
            MANAGER: ['canEdit', 'canRead'],
            RESELLER: ['canEdit', 'canRead'],
            GUEST: ['canRead']
          };
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(PermissionsRoleSwitchingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
            this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
            this.rolesSrv.roles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(function (roles) {
              console.log(roles);
            });
            this.permissionsSrv.permissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(function (permissions) {
              console.log(permissions);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();
          }
        }, {
          key: "onPermissionChange",
          value: function onPermissionChange() {
            this.currentPermissions = this.permissionsOfRole[this.currentRole];
            this.rolesSrv.flushRolesAndPermissions();
            this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);
          }
        }]);

        return PermissionsRoleSwitchingComponent;
      }();

      PermissionsRoleSwitchingComponent.??fac = function PermissionsRoleSwitchingComponent_Factory(t) {
        return new (t || PermissionsRoleSwitchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_0__["NgxPermissionsService"]));
      };

      PermissionsRoleSwitchingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: PermissionsRoleSwitchingComponent,
        selectors: [["app-permissions-role-switching"]],
        decls: 28,
        vars: 7,
        consts: [["href", "https://github.com/AlexKhymenko/ngx-permissions", "target", "_blank"], [3, "ngModel", "ngModelChange", "change"], ["value", "SUPERADMIN"], ["value", "ADMIN"], ["value", "MANAGER"], ["value", "RESELLER"], ["value", "GUEST"]],
        template: function PermissionsRoleSwitchingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, " The permissions management is powered by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "ngx-permissions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-button-toggle-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function PermissionsRoleSwitchingComponent_Template_mat_button_toggle_group_ngModelChange_7_listener($event) {
              return ctx.currentRole = $event;
            })("change", function PermissionsRoleSwitchingComponent_Template_mat_button_toggle_group_change_7_listener() {
              return ctx.onPermissionChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "SUPERADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "ADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "MANAGER");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-button-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "RESELLER");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "GUEST");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, " Your current role: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](22, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, " Your current permissions: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](27, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.currentRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](22, 3, ctx.currentRole));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](27, 5, ctx.currentPermissions));
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLXN3aXRjaGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "oRiA":
    /*!*************************************************************************!*\
      !*** ./src/app/routes/permissions/route-guard/route-guard.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PermissionsRouteGuardComponent */

    /***/
    function oRiA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsRouteGuardComponent", function () {
        return PermissionsRouteGuardComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PermissionsRouteGuardComponent = /*#__PURE__*/function () {
        function PermissionsRouteGuardComponent(rolesSrv, permissionsSrv, router) {
          _classCallCheck(this, PermissionsRouteGuardComponent);

          this.rolesSrv = rolesSrv;
          this.permissionsSrv = permissionsSrv;
          this.router = router;
          this.permis = {
            SUPERADMIN: ['canAddStaff', 'canDeleteStaff', 'canEditStaff', 'canReadStaff', 'canAddUser', 'canDeleteUser', 'canEditUser', 'canReadUser', 'canAddNumber', 'canDeleteNumber', 'canEditNumber', 'canReadNumber', 'canAddSIP', 'canDeleteSIP', 'canEditSIP', 'canReadSIP', 'canAddEnquiry', 'canDeleteEnquiry', 'canEditEnquiry', 'canReadEnquiry', 'canAddChat', 'canDeleteChat', 'canEditChat', 'canReadChat', 'canAddPlan', 'canDeletePlan', 'canEditPlan', 'canReadPlan', 'canAddReport', 'canDeleteReport', 'canEditReport', 'canReadReport']
          };
          this.permissionsOfRole = {
            SUPERADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead', 'canAddStaff', 'canDeleteStaff', 'canEditStaff', 'canReadStaff', 'canAddUser', 'canDeleteUser', 'canEditUser', 'canReadUser', 'canAddNumber', 'canDeleteNumber', 'canEditNumber', 'canReadNumber', 'canAddSIP', 'canDeleteSIP', 'canEditSIP', 'canReadSIP', 'canAddEnquiry', 'canDeleteEnquiry', 'canEditEnquiry', 'canReadEnquiry', 'canAddChat', 'canDeleteChat', 'canEditChat', 'canReadChat', 'canAddPlan', 'canDeletePlan', 'canEditPlan', 'canReadPlan', 'canAddReport', 'canDeleteReport', 'canEditReport', 'canReadReport'],
            ADMIN: ['canAdd', 'canEdit', 'canRead'],
            MANAGER: ['canAdd', 'canRead'],
            RESELLER: ['canAdd', 'canRead'],
            GUEST: ['canRead']
          };
        }

        _createClass(PermissionsRouteGuardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
            console.log(this.currentRole);
            this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
            console.log(this.currentPermissions);
          }
        }, {
          key: "onPermissionChange",
          value: function onPermissionChange() {
            this.currentPermissions = this.permissionsOfRole[this.currentRole];
            console.log(this.permissionsOfRole[this.currentRole]);
            this.rolesSrv.flushRolesAndPermissions();
            this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions); // this.router.navigateByUrl('/dashboard');
          }
        }]);

        return PermissionsRouteGuardComponent;
      }();

      PermissionsRouteGuardComponent.??fac = function PermissionsRouteGuardComponent_Factory(t) {
        return new (t || PermissionsRouteGuardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      PermissionsRouteGuardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: PermissionsRouteGuardComponent,
        selectors: [["app-permissions-route-guard"]],
        decls: 24,
        vars: 7,
        consts: [[3, "ngModel", "ngModelChange", "change"], ["value", "SUPERADMIN"], ["value", "ADMIN"], ["value", "MANAGER"], ["value", "RESELLER"], ["value", "GUEST"]],
        template: function PermissionsRouteGuardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " The route will be redirected to dashboard after change permission.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-button-toggle-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function PermissionsRouteGuardComponent_Template_mat_button_toggle_group_ngModelChange_3_listener($event) {
              return ctx.currentRole = $event;
            })("change", function PermissionsRouteGuardComponent_Template_mat_button_toggle_group_change_3_listener() {
              return ctx.onPermissionChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-button-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "SUPERADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "ADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "MANAGER");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "RESELLER");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "mat-button-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "GUEST");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, " Your current role: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](18, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, " Your current permissions: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](23, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.currentRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](18, 3, ctx.currentRole));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](23, 5, ctx.currentPermissions));
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZS1ndWFyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "xUSb":
    /*!**********************************************************!*\
      !*** ./src/app/routes/permissions/permissions.module.ts ***!
      \**********************************************************/

    /*! exports provided: PermissionsModule */

    /***/
    function xUSb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsModule", function () {
        return PermissionsModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./permissions-routing.module */
      "528D");
      /* harmony import */


      var _test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test/test.component */
      "7a1C");
      /* harmony import */


      var _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./route-guard/route-guard.component */
      "oRiA");
      /* harmony import */


      var _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./role-switching/role-switching.component */
      "h/XX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_test_test_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsTestComponent"], _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsRouteGuardComponent"], _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_4__["PermissionsRoleSwitchingComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var PermissionsModule = function PermissionsModule() {
        _classCallCheck(this, PermissionsModule);
      };

      PermissionsModule.??fac = function PermissionsModule_Factory(t) {
        return new (t || PermissionsModule)();
      };

      PermissionsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: PermissionsModule
      });
      PermissionsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissionsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](PermissionsModule, {
          declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsTestComponent"], _route_guard_route_guard_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsRouteGuardComponent"], _role_switching_role_switching_component__WEBPACK_IMPORTED_MODULE_4__["PermissionsRoleSwitchingComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__["PermissionsRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=permissions-permissions-module-es5.js.map