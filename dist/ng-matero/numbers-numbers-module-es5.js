(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["numbers-numbers-module"], {
    /***/
    "0v6H":
    /*!**********************************************************!*\
      !*** ./src/app/routes/numbers/numbers-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: NumbersRoutingModule */

    /***/
    function v6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumbersRoutingModule", function () {
        return NumbersRoutingModule;
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


      var _dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dstnumber/dstnumber.component */
      "KvZ2");
      /* harmony import */


      var _ips_ips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ips/ips.component */
      "f7ca");
      /* harmony import */


      var _number_list_number_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./number-list/number-list.component */
      "S4d5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'dstnumber',
        component: _dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_2__["DstnumberComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['AddDST'],
            redirectTo: {
              AddDST: function AddDST(rejectedPermissionName, activateRouteSnapshot, routeStateSnapshot) {
                return 'dashboard';
              }
            }
          }
        }
      }, {
        path: 'ips',
        component: _ips_ips_component__WEBPACK_IMPORTED_MODULE_3__["IpsComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['SUPERADMIN'],
            redirectTo: '/dashboard'
          }
        }
      }, {
        path: 'my-numbers',
        component: _number_list_number_list_component__WEBPACK_IMPORTED_MODULE_4__["NumberListComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }];

      var NumbersRoutingModule = function NumbersRoutingModule() {
        _classCallCheck(this, NumbersRoutingModule);
      };

      NumbersRoutingModule.??fac = function NumbersRoutingModule_Factory(t) {
        return new (t || NumbersRoutingModule)();
      };

      NumbersRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: NumbersRoutingModule
      });
      NumbersRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](NumbersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "KvZ2":
    /*!*****************************************************************!*\
      !*** ./src/app/routes/numbers/dstnumber/dstnumber.component.ts ***!
      \*****************************************************************/

    /*! exports provided: DstnumberComponent, AddDstNumberFormComponent, EditDstNumberFormComponent */

    /***/
    function KvZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DstnumberComponent", function () {
        return DstnumberComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddDstNumberFormComponent", function () {
        return AddDstNumberFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditDstNumberFormComponent", function () {
        return EditDstNumberFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/routes/tables/kitchen-sink/edit/edit.component */
      "wwJg");
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-matero/extensions/select */
      "YKwE");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["statusTpl"];

      function DstnumberComponent_ng_template_4_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Allot to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mtx-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DstnumberComponent_ng_template_4_div_4_Template_mtx_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r3.staff = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Allot to someone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Please choose someone!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("items", ctx_r2.allstaff)("ngModel", ctx_r2.staff)("required", true);
        }
      }

      function DstnumberComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DstnumberComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.openAddDstNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add DST Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DstnumberComponent_ng_template_4_div_4_Template, 9, 3, "div", 7);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.showdeletebutton);
        }
      }

      var _c1 = function _c1() {
        return [10, 20, 50, 100, 200, 500];
      };

      function AddDstNumberFormComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ip_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ip_r7._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ip_r7.ipnumber, " ");
        }
      }

      function AddDstNumberFormComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddDstNumberFormComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var staff_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", staff_r9._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", staff_r9.firstname, " ", staff_r9.lastname, " ");
        }
      }

      function AddDstNumberFormComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddDstNumberFormComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var user_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", user_r11._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", user_r11.firstname, " ", user_r11.lastname, " ");
        }
      }

      function AddDstNumberFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddDstNumberFormComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx_r6.getErrorMessage(ctx_r6.adddstnumber)), " ");
        }
      }

      function EditDstNumberFormComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ip_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ip_r5._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ip_r5.ipnumber, " ");
        }
      }

      function EditDstNumberFormComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function EditDstNumberFormComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var staff_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", staff_r7._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", staff_r7.firstname, " ", staff_r7.lastname, " ");
        }
      }

      function EditDstNumberFormComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function EditDstNumberFormComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx_r4.getErrorMessage(ctx_r4.editdstnumber)), " ");
        }
      }

      var _c2 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var DstnumberComponent = /*#__PURE__*/function () {
        function DstnumberComponent(dialog, dialogx, userService, cdr) {
          _classCallCheck(this, DstnumberComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [];
          this.list = [];
          this.total = 0;
          this.multiSelectable = true;
          this.rowSelectable = true;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = true;
          this.rowStriped = true;
          this.showPaginator = true;
          this.expandable = true;
          this.columnResizable = false;
          this.foods = [{
            id: '1',
            name: 'Apple'
          }, {
            id: '2',
            name: 'Lemon'
          }, {
            id: '3',
            name: 'Lime'
          }, {
            id: '4',
            name: 'Orange',
            disabled: true
          }, {
            id: '5',
            name: 'Strawberry'
          }];
        }

        _createClass(DstnumberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getallnumbers();
            this.getallstaff();
            this.columns = [{
              header: 'DID Number',
              sortable: true,
              field: 'alloted_did'
            }, {
              header: 'IP',
              sortable: true,
              field: 'ip.ipnumber'
            }, {
              header: 'Alloted to',
              field: 'giventolevel1.firstname'
            }, {
              header: 'Use',
              field: 'is_used',
              sortable: true
            }, {
              header: 'Service',
              field: 'service_type',
              sortable: true
            }, {
              header: 'Actions',
              field: 'action',
              minWidth: 180,
              width: '180px',
              pinned: 'right',
              type: 'button',
              buttons: [{
                type: 'icon',
                color: 'primary',
                icon: 'visibility',
                tooltip: 'view',
                click: function click(record) {
                  return _this.view(record);
                }
              }, {
                type: 'icon',
                color: 'accent',
                icon: 'edit',
                tooltip: 'edit',
                click: function click(record) {
                  return _this.openEditDstNumber(record);
                }
              }, {
                color: 'warn',
                icon: 'delete',
                text: 'delete',
                tooltip: 'delete',
                pop: true,
                popTitle: 'Confirm Delete',
                popCloseText: 'Cancel',
                popOkText: 'Delete',
                click: function click(record) {
                  return _this["delete"](record);
                }
              }]
            }];
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this2 = this;

            var dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
              width: '900px',
              data: {
                record: value
              }
            });

            var onOk = function onOk() {
              _this2.dialogx.alert('Closed');
            };

            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "openEditDstNumber",
          value: function openEditDstNumber(value) {
            var _this3 = this;

            var editdailogRef = this.dialog.open(EditDstNumberFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this3.getallnumbers();
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this4 = this;

            this.userService.deletenumber(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this4.isLoading = false;

              _this4.getallnumbers();

              _this4.cdr.detectChanges();

              _this4.dialogx.alert("You have deleted ".concat(value.dstnumber, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "view",
          value: function view(value) {
            console.log(value);
          }
        }, {
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this5 = this;

            var adddailogRef = this.dialog.open(AddDstNumberFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this5.getallnumbers();
            });
          }
        }, {
          key: "changeSelect",
          value: function changeSelect(e) {
            console.log(e);
          }
        }, {
          key: "changerowSelect",
          value: function changerowSelect(e) {
            console.table(e);
            e.map(function (a) {
              return console.log(a._id);
            });
            this.showdeletebutton = true;
          }
        }, {
          key: "changecellSelect",
          value: function changecellSelect(e) {
            console.log(e);
          }
        }, {
          key: "allotmultiple",
          value: function allotmultiple() {
            console.log('todo');
          }
        }, {
          key: "getallstaff",
          value: function getallstaff() {
            var _this6 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this6.allstaff = response.data;
              _this6.staff = _this6.allstaff[0]._id;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this7 = this;

            this.userService.getalldstnumbers().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this7.list = response.data;
              _this7.total = response.data.length;
              _this7.isLoading = false;

              _this7.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = true;
          }
        }]);

        return DstnumberComponent;
      }();

      DstnumberComponent.??fac = function DstnumberComponent_Factory(t) {
        return new (t || DstnumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      DstnumberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DstnumberComponent,
        selectors: [["app-dstnumber"]],
        viewQuery: function DstnumberComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.statusTpl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 6,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "rowSelectionChange", "cellSelectionChange"], ["style", "display: flex;"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["class", "", 4, "ngIf"], [1, ""], ["bindLabel", "firstname", "bindValue", "_id", 3, "items", "ngModel", "required", "ngModelChange"]],
        template: function DstnumberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sortChange", function DstnumberComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("rowSelectionChange", function DstnumberComponent_Template_mtx_grid_rowSelectionChange_3_listener($event) {
              return ctx.changerowSelect($event);
            })("cellSelectionChange", function DstnumberComponent_Template_mtx_grid_cellSelectionChange_3_listener($event) {
              return ctx.changecellSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DstnumberComponent_ng_template_4_Template, 5, 1, "ng-template", 4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "DST Number")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c1))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_14__["MtxSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkc3RudW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });

      var AddDstNumberFormComponent = /*#__PURE__*/function () {
        function AddDstNumberFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddDstNumberFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            assign: [''],
            assignm: [''],
            did_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999999)]],
            inusestatus: [false],
            alottedtouser: [''],
            is_used: ['f'],
            itsp_name: ['Tata'],
            voice_channel: [],
            service_type: ['open']
          });
        }

        _createClass(AddDstNumberFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
            this.getallstaff();
            this.getallusers();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('did_no').hasError('required') ? 'validations.required' : form.get('did_no').hasError('min') ? 'validations.min' : form.get('did_no').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this8 = this;

            if (this.adddstnumber.valid) {
              this.adddstnumber.controls.alottedtouser.setValue(this.adddstnumber.controls.assignm.value);
              console.log('*********************************', this.adddstnumber.value);
              this.userService.adddstnumber(this.adddstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this8.snackBar.open('DST Number Added Successfully!', '', {
                  duration: 2000
                });

                _this8.adddstnumber.reset(); //this.adddstnumber.markAsUntouched();

              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.adddstnumber);
            }
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this9 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this9.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
          }
        }, {
          key: "getallstaff",
          value: function getallstaff() {
            var _this10 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this10.allstaff = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getallusers",
          value: function getallusers() {
            var _this11 = this;

            this.userService.allusers().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this11.allusers = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return AddDstNumberFormComponent;
      }();

      AddDstNumberFormComponent.??fac = function AddDstNumberFormComponent_Factory(t) {
        return new (t || AddDstNumberFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddDstNumberFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddDstNumberFormComponent,
        selectors: [["add-dst-form"]],
        decls: 38,
        vars: 10,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["formControlName", "ip", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "assign", "required", ""], ["formControlName", "assignm", "required", ""], ["cellspacing", "0", 1, "demo-full-width"], ["type", "number", "matInput", "", "placeholder", "991515000", "formControlName", "did_no", "required", ""], ["formControlName", "is_used", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function AddDstNumberFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add DST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddDstNumberFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AddDstNumberFormComponent_mat_option_8_Template, 2, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AddDstNumberFormComponent_mat_error_9_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Allot To");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AddDstNumberFormComponent_mat_option_14_Template, 2, 3, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AddDstNumberFormComponent_mat_error_15_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Allot by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, AddDstNumberFormComponent_mat_option_20_Template, 2, 3, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AddDstNumberFormComponent_mat_error_21_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "DST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AddDstNumberFormComponent_mat_error_29_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddDstNumberFormComponent_Template_mat_checkbox_change_31_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "In Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.adddstnumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allips);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adddstnumber.get("ip").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allstaff);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adddstnumber.get("assign").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allusers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adddstnumber.get("assignm").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adddstnumber.get("did_no").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.adddstnumber.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]],
        styles: [_c2]
      });

      var EditDstNumberFormComponent = /*#__PURE__*/function () {
        function EditDstNumberFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditDstNumberFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.falseValue = 'false';
          this.trueValue = 'true';
          console.log(data);
          this.editdstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            assign: [''],
            did_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999999)]],
            inusestatus: [false]
          });
        }

        _createClass(EditDstNumberFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

            this.getallips();
            this.getallstaff();
            this.editdstnumber.setValue({
              ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
              assign: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.giventolevel1) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.giventolevel1 : 'null',
              did_no: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.did_no) ? (_o = (_m = this.data) === null || _m === void 0 ? void 0 : _m.record) === null || _o === void 0 ? void 0 : _o.did_no : 'null',
              inusestatus: ((_q = (_p = this.data) === null || _p === void 0 ? void 0 : _p.record) === null || _q === void 0 ? void 0 : _q.inusestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('did_no').hasError('required') ? 'validations.required' : form.get('did_no').hasError('min') ? 'validations.min' : form.get('did_no').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this12 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this12.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "getallstaff",
          value: function getallstaff() {
            var _this13 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this13.allstaff = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this14 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this14.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this14.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }]);

        return EditDstNumberFormComponent;
      }();

      EditDstNumberFormComponent.??fac = function EditDstNumberFormComponent_Factory(t) {
        return new (t || EditDstNumberFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditDstNumberFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditDstNumberFormComponent,
        selectors: [["edit-dst-form"]],
        decls: 32,
        vars: 8,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["formControlName", "ip", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "assign", "required", ""], ["cellspacing", "0", 1, "demo-full-width"], ["type", "number", "matInput", "", "placeholder", "991515000", "formControlName", "did_no", "required", ""], ["formControlName", "inusestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", "cdkFocusInitial", "", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function EditDstNumberFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit DST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EditDstNumberFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, EditDstNumberFormComponent_mat_option_8_Template, 2, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, EditDstNumberFormComponent_mat_error_9_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Allot To");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EditDstNumberFormComponent_mat_option_14_Template, 2, 3, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EditDstNumberFormComponent_mat_error_15_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "DST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, EditDstNumberFormComponent_mat_error_23_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-checkbox", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditDstNumberFormComponent_Template_mat_checkbox_change_25_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "In Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.editdstnumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allips);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editdstnumber.get("ip").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.allstaff);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editdstnumber.get("assign").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editdstnumber.get("did_no").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.editdstnumber.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]],
        styles: [_c2]
      });
      /***/
    },

    /***/
    "S4d5":
    /*!*********************************************************************!*\
      !*** ./src/app/routes/numbers/number-list/number-list.component.ts ***!
      \*********************************************************************/

    /*! exports provided: NumberListComponent */

    /***/
    function S4d5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberListComponent", function () {
        return NumberListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/routes/tables/kitchen-sink/edit/edit.component */
      "wwJg");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function NumberListComponent_ng_template_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NumberListComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NumberListComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.openAddDstNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add DST Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, NumberListComponent_ng_template_4_button_4_Template, 3, 0, "button", 6);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.showdeletebutton);
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var NumberListComponent = /*#__PURE__*/function () {
        function NumberListComponent(dialog, dialogx, userService, cdr) {
          _classCallCheck(this, NumberListComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [];
          this.list = [];
          this.total = 0;
          this.isLoading = true;
          this.multiSelectable = true;
          this.rowSelectable = true;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = true;
          this.rowStriped = true;
          this.showPaginator = true;
          this.expandable = true;
          this.columnResizable = false;
        }

        _createClass(NumberListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.getallnumbers();
            this.columns = [{
              header: 'DID Number',
              sortable: true,
              field: 'did_no'
            }, {
              header: 'IP',
              sortable: true,
              field: 'ip.ipnumber'
            }, {
              header: 'Alloted to',
              field: 'giventolevel1.firstname'
            }, {
              header: 'Active Status',
              field: 'inusestatus',
              type: 'tag',
              sortable: true,
              tag: {
                "true": {
                  text: 'Yes',
                  color: 'green-200'
                },
                "false": {
                  text: 'No',
                  color: 'red-200'
                }
              }
            }, {
              header: 'Actions',
              field: 'action',
              minWidth: 180,
              width: '180px',
              pinned: 'right',
              type: 'button',
              buttons: [{
                type: 'icon',
                color: 'primary',
                icon: 'visibility',
                tooltip: 'view',
                click: function click(record) {
                  return _this15.view(record);
                }
              }, {
                color: 'warn',
                icon: 'delete',
                text: 'delete',
                tooltip: 'delete',
                pop: true,
                popTitle: 'Confirm Delete',
                popCloseText: 'Cancel',
                popOkText: 'Delete',
                click: function click(record) {
                  return _this15["delete"](record);
                }
              }]
            }];
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this16 = this;

            var dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["TablesKitchenSinkEditComponent"], {
              width: '900px',
              data: {
                record: value
              }
            });

            var onOk = function onOk() {
              _this16.dialogx.alert('Closed');
            };

            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          } // openEditDstNumber(value) {
          //   let editdailogRef = this.dialog.open(EditDstNumberFormComponent, {
          //     width: '500px',
          //     data: { record: value },
          //   });
          //   editdailogRef.afterClosed().subscribe(() => {
          //     console.log('The edit dailog closed');
          //     this.getallnumbers();
          //   });
          // }

        }, {
          key: "delete",
          value: function _delete(value) {
            var _this17 = this;

            this.userService.deletenumber(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this17.isLoading = false;

              _this17.getallnumbers();

              _this17.cdr.detectChanges();

              _this17.dialogx.alert("You have deleted ".concat(value.dstnumber, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "view",
          value: function view(value) {
            console.log(value);
          } // openAddDstNumber() {
          //   let adddailogRef = this.dialog.open(AddDstNumberFormComponent, { width: '500px' });
          //   adddailogRef.afterClosed().subscribe(() => {
          //     this.getallnumbers();
          //   });
          // }

        }, {
          key: "changeSelect",
          value: function changeSelect(e) {
            console.log(e);
          }
        }, {
          key: "changerowSelect",
          value: function changerowSelect(e) {
            console.log(e);
            e.map(function (a) {
              return console.log(a._id);
            });
            this.showdeletebutton = true;
          }
        }, {
          key: "changecellSelect",
          value: function changecellSelect(e) {
            console.log(e);
          }
        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this18 = this;

            this.userService.mydstnumbers().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this18.list = response.data;
              _this18.total = response.data.length;
              _this18.isLoading = false;

              _this18.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = true;
          }
        }]);

        return NumberListComponent;
      }();

      NumberListComponent.??fac = function NumberListComponent_Factory(t) {
        return new (t || NumberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_3__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      NumberListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NumberListComponent,
        selectors: [["app-number-list"]],
        viewQuery: function NumberListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 6,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "rowSelectionChange", "cellSelectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["matTooltip", "Delete selected", "mat-icon-button", "", "color", "warn", 4, "ngIf"], ["matTooltip", "Delete selected", "mat-icon-button", "", "color", "warn"], [1, "mat-18"]],
        template: function NumberListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sortChange", function NumberListComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("rowSelectionChange", function NumberListComponent_Template_mtx_grid_rowSelectionChange_3_listener($event) {
              return ctx.changerowSelect($event);
            })("cellSelectionChange", function NumberListComponent_Template_mtx_grid_cellSelectionChange_3_listener($event) {
              return ctx.changecellSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, NumberListComponent_ng_template_4_Template, 5, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "DST Number")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_7__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudW1iZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "f7ca":
    /*!*****************************************************!*\
      !*** ./src/app/routes/numbers/ips/ips.component.ts ***!
      \*****************************************************/

    /*! exports provided: IpsComponent, AddIpFormComponent, EditIpFormComponent */

    /***/
    function f7ca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IpsComponent", function () {
        return IpsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddIpFormComponent", function () {
        return AddIpFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditIpFormComponent", function () {
        return EditIpFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var app_routes_service_service_monitoring_agent_table_remote_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/routes/service/service/monitoring/agent-table/remote-data.service */
      "HJYq");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/routes/tables/kitchen-sink/edit/edit.component */
      "wwJg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      function IpsComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var row_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", row_r6.name, " ");
        }
      }

      function IpsComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function IpsComponent_ng_template_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.openAddIp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add IP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function IpsComponent_ng_template_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r9.filterSearch = $event;
          })("ngModelChange", function IpsComponent_ng_template_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.searchData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.filterSearch);
        }
      }

      function IpsComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r11.title);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          title: a0
        };
      };

      var _c1 = function _c1() {
        return [50, 100, 200, 500];
      };

      function AddIpFormComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddIpFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.addip), " ");
        }
      }

      function EditIpFormComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function EditIpFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.editip), " ");
        }
      }

      var _c2 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var IpsComponent = /*#__PURE__*/function () {
        function IpsComponent(fb, userService, snackBar, translate, dateAdapter, dialog, cdr, dialogx) {
          var _this19 = this;

          _classCallCheck(this, IpsComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.translate = translate;
          this.dateAdapter = dateAdapter;
          this.dialog = dialog;
          this.cdr = cdr;
          this.dialogx = dialogx;
          this.toggleeditrole = true;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.columns = [{
            header: 'IP',
            sortable: true,
            field: 'ipnumber'
          }, {
            header: 'Provider',
            sortable: true,
            field: 'title'
          }, {
            header: 'Active Status',
            field: 'activestatus',
            type: 'tag',
            tag: {
              "true": {
                text: 'Yes',
                color: 'green-200'
              },
              "false": {
                text: 'No',
                color: 'red-200'
              }
            }
          }, {
            header: 'Actions',
            field: 'action',
            minWidth: 120,
            width: '120px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'edit',
              click: function click(record) {
                return _this19.openEditIp(record);
              }
            }, {
              color: 'warn',
              icon: 'delete',
              text: 'delete',
              tooltip: 'delete',
              pop: true,
              popTitle: 'Confirm Delete',
              popCloseText: 'Cancel',
              popOkText: 'Delete',
              click: function click(record) {
                return _this19["delete"](record);
              }
            }]
          }]; //table

          this.list = [];
          this.total = 0;
          this.multiSelectable = true;
          this.rowSelectable = true;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = true;
          this.rowStriped = true;
          this.showPaginator = true;
          this.expandable = true;
          this.columnResizable = false;
          this.displayedColumns = ['ipnumber', 'title', 'activestatus', 'actions'];
          this.addipform = this.fb.group({
            ipnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            activestatus: [false]
          });
          this.editipform = this.fb.group({
            ipnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            activestatus: [false]
          });
        }

        _createClass(IpsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.getallips();
            this.translateSubscription = this.translate.onLangChange.subscribe(function (res) {
              _this20.dateAdapter.setLocale(res.lang);
            });
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this21 = this;

            var dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["TablesKitchenSinkEditComponent"], {
              width: '900px',
              data: {
                record: value
              }
            });

            var onOk = function onOk() {
              _this21.dialogx.alert('Closed');
            }; // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');


            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this22 = this;

            this.userService.deleteip(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this22.isLoading = false;

              _this22.getallips();

              _this22.cdr.detectChanges();

              _this22.dialogx.alert("You have deleted ".concat(value.title, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this23 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%crole.component.ts line:311 response', 'color: #26bfa5;', response);
              _this23.list = response.data;
              _this23.total = response.data.length;
              _this23.isLoading = false;

              _this23.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror role.component.ts line:318 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(addipform) {
            return addipform.get('ipnumber').hasError('required') ? 'validations.required' : addipform.get('title').hasError('required') ? 'validations.required' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "changeSelect",
          value: function changeSelect(e) {
            console.log(e);
          }
        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "submitipForm",
          value: function submitipForm() {
            var _this24 = this;

            console.log(this.addipform.value);
            this.userService.addip(this.addipform.value).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

              _this24.snackBar.open('IP Added Successfully!', '', {
                duration: 2000
              });

              _this24.addipform.reset();

              _this24.getallips();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('component destroyed');
          }
        }, {
          key: "openAddIp",
          value: function openAddIp() {
            var _this25 = this;

            var adddailogRef = this.dialog.open(AddIpFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this25.getallips();

              _this25.cdr.detectChanges();
            });
          }
        }, {
          key: "openEditIp",
          value: function openEditIp(value) {
            var _this26 = this;

            var editdailogRef = this.dialog.open(EditIpFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this26.getallips();
            });
          }
        }]);

        return IpsComponent;
      }();

      IpsComponent.??fac = function IpsComponent_Factory(t) {
        return new (t || IpsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_3__["MtxDialog"]));
      };

      IpsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: IpsComponent,
        selectors: [["app-ips"]],
        viewQuery: function IpsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([app_routes_service_service_monitoring_agent_table_remote_data_service__WEBPACK_IMPORTED_MODULE_6__["TablesRemoteDataService"]])],
        decls: 10,
        vars: 25,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "cellTemplate", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""], ["toolbarTpl", ""], ["cityTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"], ["mat-flat-button", ""]],
        template: function IpsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sortChange", function IpsComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function IpsComponent_Template_mtx_grid_selectionChange_3_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, IpsComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, IpsComponent_ng_template_6_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, IpsComponent_ng_template_8_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "IP")("toolbarTemplate", _r2)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("cellTemplate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](22, _c0, _r4))("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](24, _c1))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_12__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpcHMuY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });

      var AddIpFormComponent = /*#__PURE__*/function () {
        function AddIpFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddIpFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addip = this.fb.group({
            ipnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            activestatus: [false]
          });
        }

        _createClass(AddIpFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('ipnumber').hasError('required') ? 'This field is required' : form.get('ipnumber').hasError('pattern') ? 'Pattern doesnt match should be XXX.XXX.XXX.XXX.' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitip",
          value: function submitip() {
            var _this27 = this;

            if (this.addip.valid) {
              this.userService.addip(this.addip.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this27.snackBar.open('IP Added Successfully!', '', {
                  duration: 2000
                });

                _this27.addip.reset(); //this.addip.markAsUntouched();

              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.addip);
            }
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addip.get(field).valid && this.addip.get(field).touched;
          }
        }]);

        return AddIpFormComponent;
      }();

      AddIpFormComponent.??fac = function AddIpFormComponent_Factory(t) {
        return new (t || AddIpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
      };

      AddIpFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddIpFormComponent,
        selectors: [["add-ip-form"]],
        decls: 25,
        vars: 5,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "Neron", "formControlName", "title", "required", ""], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "xxx.xxx.xxx.xxx", "formControlName", "ipnumber", "required", ""], ["formControlName", "activestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddIpFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddIpFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitip();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AddIpFormComponent_mat_error_8_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, AddIpFormComponent_mat_error_16_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddIpFormComponent_Template_mat_checkbox_change_18_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addip.get("title").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addip.get("ipnumber").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.addip.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [_c2]
      });

      var EditIpFormComponent = /*#__PURE__*/function () {
        function EditIpFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditIpFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.falseValue = 'false';
          this.trueValue = 'true';
          console.log(data);
          this.editip = this.fb.group({
            ipnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            activestatus: [false]
          });
        }

        _createClass(EditIpFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

            this.editip.setValue({
              ipnumber: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ipnumber) ? (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ipnumber : 'null',
              title: ((_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.title) ? (_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.title : 'null',
              activestatus: ((_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.activestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('ipnumber').hasError('required') ? 'This field is required' : form.get('ipnumber').hasError('pattern') ? 'Pattern doesnt match should be XXX.XXX.XXX.XXX.' : '';
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this28 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this28.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.editip.get(field).valid && this.editip.get(field).touched;
          }
        }, {
          key: "submiteditip",
          value: function submiteditip() {
            var _this29 = this;

            console.log(this.editip.value);

            if (this.editip.valid) {
              this.userService.editip(this.data.record._id, this.editip.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this29.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this29.editip.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editip);
            }
          }
        }]);

        return EditIpFormComponent;
      }();

      EditIpFormComponent.??fac = function EditIpFormComponent_Factory(t) {
        return new (t || EditIpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]));
      };

      EditIpFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditIpFormComponent,
        selectors: [["edit-ip-form"]],
        decls: 25,
        vars: 5,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "Neron", "formControlName", "title", "required", ""], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "xxx.xxx.xxx.xxx", "formControlName", "ipnumber", "required", ""], ["formControlName", "activestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function EditIpFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EditIpFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submiteditip();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, EditIpFormComponent_mat_error_8_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EditIpFormComponent_mat_error_16_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditIpFormComponent_Template_mat_checkbox_change_18_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.editip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editip.get("title").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editip.get("ipnumber").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.editip.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [_c2]
      });
      /***/
    },

    /***/
    "y78S":
    /*!**************************************************!*\
      !*** ./src/app/routes/numbers/numbers.module.ts ***!
      \**************************************************/

    /*! exports provided: NumbersModule */

    /***/
    function y78S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumbersModule", function () {
        return NumbersModule;
      });
      /* harmony import */


      var _numbers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./numbers-routing.module */
      "0v6H");
      /* harmony import */


      var _dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dstnumber/dstnumber.component */
      "KvZ2");
      /* harmony import */


      var _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ips/ips.component */
      "f7ca");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _number_list_number_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./number-list/number-list.component */
      "S4d5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__["DstnumberComponent"], _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__["IpsComponent"], _number_list_number_list_component__WEBPACK_IMPORTED_MODULE_4__["NumberListComponent"]];
      var COMPONENTS_DYNAMIC = [_dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__["AddDstNumberFormComponent"], _dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__["EditDstNumberFormComponent"], _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__["AddIpFormComponent"], _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__["EditIpFormComponent"]];

      var NumbersModule = function NumbersModule() {
        _classCallCheck(this, NumbersModule);
      };

      NumbersModule.??fac = function NumbersModule_Factory(t) {
        return new (t || NumbersModule)();
      };

      NumbersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: NumbersModule
      });
      NumbersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _numbers_routing_module__WEBPACK_IMPORTED_MODULE_0__["NumbersRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](NumbersModule, {
          declarations: [_dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__["DstnumberComponent"], _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__["IpsComponent"], _number_list_number_list_component__WEBPACK_IMPORTED_MODULE_4__["NumberListComponent"], _dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__["AddDstNumberFormComponent"], _dstnumber_dstnumber_component__WEBPACK_IMPORTED_MODULE_1__["EditDstNumberFormComponent"], _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__["AddIpFormComponent"], _ips_ips_component__WEBPACK_IMPORTED_MODULE_2__["EditIpFormComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _numbers_routing_module__WEBPACK_IMPORTED_MODULE_0__["NumbersRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=numbers-numbers-module-es5.js.map