(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subordinate-subordinate-module"], {
    /***/
    "Ezfh":
    /*!*************************************************************!*\
      !*** ./src/app/routes/subordinate/agent/agent.component.ts ***!
      \*************************************************************/

    /*! exports provided: AgentComponent, AgentFormComponent, EditAgentFormComponent */

    /***/
    function Ezfh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentComponent", function () {
        return AgentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentFormComponent", function () {
        return AgentFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditAgentFormComponent", function () {
        return EditAgentFormComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-matero/extensions/dialog */
      "r0g6");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function AgentComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function AgentComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r2.openAgent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Add Agent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      function AgentFormComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AgentFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AgentFormComponent_mat_error_21_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }
      }

      function AgentFormComponent_mat_error_21_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Please enter valid Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }
      }

      function AgentFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, AgentFormComponent_mat_error_21_span_1_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, AgentFormComponent_mat_error_21_span_2_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r2.addagentform.get("email").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r2.addagentform.get("email").hasError("email"));
        }
      }

      function AgentFormComponent_mat_error_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }
      }

      function AgentFormComponent_mat_error_28_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Minimum Length is 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }
      }

      function AgentFormComponent_mat_error_28_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Maximum Length is 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }
      }

      function AgentFormComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, AgentFormComponent_mat_error_28_span_1_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, AgentFormComponent_mat_error_28_span_2_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](3, AgentFormComponent_mat_error_28_span_3_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r3.addagentform.get("mobile").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r3.addagentform.get("mobile").hasError("min"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r3.addagentform.get("mobile").hasError("max"));
        }
      }

      function AgentFormComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var AgentComponent = /*#__PURE__*/function () {
        function AgentComponent(dialog, dialogx, userService, cdr) {
          _classCallCheck(this, AgentComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr; //table

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
        }

        _createClass(AgentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getallagent();
            this.columns = [{
              header: 'Avatar',
              field: 'staffimg',
              type: 'image'
            }, {
              header: 'Name',
              field: 'name',
              formatter: function formatter(data) {
                return "".concat(data.firstname, " ").concat(data.lastname, " ");
              }
            }, {
              header: 'Email',
              sortable: true,
              field: 'email'
            }, {
              header: 'Mobile',
              sortable: true,
              field: 'mobile'
            }, {
              header: 'Approved',
              field: 'approvedstatus',
              type: 'tag',
              tag: {
                "true": {
                  text: 'Yes',
                  color: 'red-100'
                },
                "false": {
                  text: 'No',
                  color: 'green-100'
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
                  return _this.edit(record);
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

            var dialogRef = this.dialog.open(EditAgentFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              console.log('The dialog was closed');

              _this2.getallagent();
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this3 = this;

            this.userService.deleteagent(data._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this3.isLoading = false;

              _this3.getallagent();

              _this3.cdr.detectChanges();

              _this3.dialogx.alert("You have deleted ".concat(data.firstname, " ").concat(data.lastname, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this4 = this;

            var adddailogRef = this.dialog.open(AgentFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this4.getallagent();

              _this4.getallagent();

              _this4.getallagent();

              console.log('Dailog Closed');
            });
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
          key: "openAgent",
          value: function openAgent() {
            var _this5 = this;

            var adddailogRef = this.dialog.open(AgentFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this5.getallagent();

              _this5.getallagent();

              _this5.getallagent();

              console.log('Dailog Closed');
            });
          }
        }, {
          key: "getallagents",
          value: function getallagents() {
            console.log('requested all agents');
          }
        }, {
          key: "getallagent",
          value: function getallagent() {
            var _this6 = this;

            this.userService.getallagent().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this6.list = response.data;
              _this6.isLoading = false;

              _this6.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }]);

        return AgentComponent;
      }();

      AgentComponent.??fac = function AgentComponent_Factory(t) {
        return new (t || AgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      AgentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: AgentComponent,
        selectors: [["app-agent"]],
        decls: 6,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"]],
        template: function AgentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("sortChange", function AgentComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function AgentComponent_Template_mtx_grid_selectionChange_3_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, AgentComponent_ng_template_4_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Agent")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_7__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VudC5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });

      var AgentFormComponent = /*#__PURE__*/function () {
        function AgentFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AgentFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.hide = true;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addagentform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999999999)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            approvedstatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addagentform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              approvedstatus: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.approvedstatus) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.approvedstatus : false
            });
          }
        }

        _createClass(AgentFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this7 = this;

            console.log(this.addagentform.value);

            if (this.addagentform.valid) {
              this.userService.addagent(this.addagentform.value).subscribe(function (response) {
                console.log(response);

                _this7.snackBar.open('Agent Edit Successfully!', '', {
                  duration: 2000
                });

                _this7.addagentform.reset();

                _this7.addagentform.markAsUntouched();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }]);

        return AgentFormComponent;
      }();

      AgentFormComponent.??fac = function AgentFormComponent_Factory(t) {
        return new (t || AgentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      AgentFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: AgentFormComponent,
        selectors: [["agent-form"]],
        decls: 45,
        vars: 13,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "John", "formControlName", "firstname", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Deo", "formControlName", "lastname", "required", ""], ["type", "email", "matInput", "", "placeholder", "example@gmail.com", "formControlName", "email", "required", ""], ["type", "text", "maxlength", "10", "matInput", "", "placeholder", "9999999999", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function AgentFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function AgentFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](10, AgentFormComponent_mat_error_10_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](16, AgentFormComponent_mat_error_16_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](21, AgentFormComponent_mat_error_21_Template, 3, 2, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](28, AgentFormComponent_mat_error_28_Template, 4, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](32, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function AgentFormComponent_Template_button_click_33_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](36, AgentFormComponent_mat_error_36_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "mat-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function AgentFormComponent_Template_mat_checkbox_change_38_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](39, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](42, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](44, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.editmode ? "Edit Agent" : "Create Agent");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.addagentform);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.addagentform.get("firstname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.addagentform.get("lastname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.addagentform.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.addagentform.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.addagentform.get("password").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.addagentform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: [_c1]
      });

      var EditAgentFormComponent = /*#__PURE__*/function () {
        function EditAgentFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditAgentFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.hide = true;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addagentform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999999999)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            approvedstatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addagentform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              approvedstatus: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.approvedstatus) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.approvedstatus : false
            });
          }
        }

        _createClass(EditAgentFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this8 = this;

            console.log(this.addagentform.value);

            if (this.addagentform.valid) {
              this.userService.addagent(this.addagentform.value).subscribe(function (response) {
                console.log(response);

                _this8.snackBar.open('Agent Edit Successfully!', '', {
                  duration: 2000
                });

                _this8.addagentform.reset();

                _this8.addagentform.markAsUntouched();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }]);

        return EditAgentFormComponent;
      }();

      EditAgentFormComponent.??fac = function EditAgentFormComponent_Factory(t) {
        return new (t || EditAgentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditAgentFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: EditAgentFormComponent,
        selectors: [["edit-agent-form"]],
        decls: 53,
        vars: 18,
        consts: [["mat-dialog-title", ""], [1, "form-field-full", 3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", ""], ["fxFlex", "100", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "Mobile", "formControlName", "mobile", "required", ""], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "required", ""], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function EditAgentFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Edit Agent");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function EditAgentFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](25, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](33, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](38, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](41, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](42, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](46, "mat-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function EditAgentFormComponent_Template_mat_checkbox_change_46_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](47, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](49, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](50, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](52, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.addagentform);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](12, 8, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](20, 10, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](28, 12, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](36, 14, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](44, 16, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.addagentform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: [_c1]
      });
      /***/
    },

    /***/
    "Kjbr":
    /*!*******************************************************************!*\
      !*** ./src/app/routes/subordinate/agentnew/agentnew.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AgentnewComponent, AddAgentFormComponent, EditFormComponent */

    /***/
    function Kjbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentnewComponent", function () {
        return AgentnewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAgentFormComponent", function () {
        return AddAgentFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFormComponent", function () {
        return EditFormComponent;
      });
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-matero/extensions/dialog */
      "r0g6");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function AgentnewComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AgentnewComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r2.openAgent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Add Agent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      function AddAgentFormComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddAgentFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddAgentFormComponent_mat_error_21_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddAgentFormComponent_mat_error_21_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Please enter valid Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddAgentFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, AddAgentFormComponent_mat_error_21_span_1_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddAgentFormComponent_mat_error_21_span_2_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.addagentform.get("email").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.addagentform.get("email").hasError("email"));
        }
      }

      function AddAgentFormComponent_mat_error_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddAgentFormComponent_mat_error_28_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Minimum Length is 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddAgentFormComponent_mat_error_28_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Maximum Length is 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddAgentFormComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, AddAgentFormComponent_mat_error_28_span_1_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddAgentFormComponent_mat_error_28_span_2_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddAgentFormComponent_mat_error_28_span_3_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.addagentform.get("mobile").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.addagentform.get("mobile").hasError("min"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.addagentform.get("mobile").hasError("max"));
        }
      }

      function AddAgentFormComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var AgentnewComponent = /*#__PURE__*/function () {
        function AgentnewComponent(dialog, dialogx, userService, cdr) {
          _classCallCheck(this, AgentnewComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr; //table

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
        }

        _createClass(AgentnewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.getallagent();
            this.columns = [{
              header: 'Avatar',
              field: 'staffimg',
              type: 'image'
            }, {
              header: 'Name',
              field: 'name',
              formatter: function formatter(data) {
                return "".concat(data.firstname, " ").concat(data.lastname, " ");
              }
            }, {
              header: 'Email',
              sortable: true,
              field: 'email'
            }, {
              header: 'Mobile',
              sortable: true,
              field: 'mobile'
            }, {
              header: 'Approved',
              field: 'approvedstatus',
              type: 'tag',
              tag: {
                "true": {
                  text: 'Yes',
                  color: 'red-100'
                },
                "false": {
                  text: 'No',
                  color: 'green-100'
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
                  return _this9.edit(record);
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
                  return _this9["delete"](record);
                }
              }]
            }];
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this10 = this;

            var dialogRef = this.dialog.open(EditFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              console.log('The dialog was closed');

              _this10.getallagent();
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this11 = this;

            this.userService.deletestaff(data._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this11.isLoading = false;

              _this11.getallagent();

              _this11.cdr.detectChanges();

              _this11.dialogx.alert("You have deleted ".concat(data.firstname, " ").concat(data.lastname, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
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
          key: "openAgent",
          value: function openAgent() {
            var _this12 = this;

            var adddailogRef = this.dialog.open(AddAgentFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this12.getallagent();

              _this12.getallagent();

              _this12.getallagent();

              console.log('Dailog Closed');
            });
          }
        }, {
          key: "getallagent",
          value: function getallagent() {
            var _this13 = this;

            this.userService.getallagent().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this13.list = response.data;
              _this13.isLoading = false;

              _this13.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }]);

        return AgentnewComponent;
      }();

      AgentnewComponent.??fac = function AgentnewComponent_Factory(t) {
        return new (t || AgentnewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_1__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      AgentnewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: AgentnewComponent,
        selectors: [["app-agentnew"]],
        decls: 6,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"]],
        template: function AgentnewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("sortChange", function AgentnewComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function AgentnewComponent_Template_mtx_grid_selectionChange_3_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AgentnewComponent_ng_template_4_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Agent")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_7__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: ["[_nghost-%COMP%]     .label {\n  padding: 5px 10px;\n  border-radius: 999px;\n  background-color: #ffb74d;\n}\n\n[_nghost-%COMP%]     .admin-dy-class {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #6fcffc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWdlbnRuZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6ImFnZW50bmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5sYWJlbCB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc0ZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hZG1pbi1keS1jbGFzcyB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZmNmZmM7XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });

      var AddAgentFormComponent = /*#__PURE__*/function () {
        function AddAgentFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AddAgentFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.hide = true;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addagentform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999999)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            approvedstatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addagentform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              approvedstatus: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.approvedstatus) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.approvedstatus : false
            });
          }
        }

        _createClass(AddAgentFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this14 = this;

            console.log(this.addagentform.value);

            if (this.addagentform.valid) {
              this.userService.addagent(this.addagentform.value).subscribe(function (response) {
                console.log(response);

                _this14.snackBar.open('Agent Edit Successfully!', '', {
                  duration: 2000
                });

                _this14.addagentform.reset();

                _this14.addagentform.markAsUntouched();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }]);

        return AddAgentFormComponent;
      }();

      AddAgentFormComponent.??fac = function AddAgentFormComponent_Factory(t) {
        return new (t || AddAgentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      AddAgentFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: AddAgentFormComponent,
        selectors: [["add-agent-form"]],
        decls: 45,
        vars: 13,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "John", "formControlName", "firstname", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Deo", "formControlName", "lastname", "required", ""], ["type", "email", "matInput", "", "placeholder", "example@gmail.com", "formControlName", "email", "required", ""], ["type", "text", "maxlength", "10", "matInput", "", "placeholder", "9999999999", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function AddAgentFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function AddAgentFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, AddAgentFormComponent_mat_error_10_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, AddAgentFormComponent_mat_error_16_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, AddAgentFormComponent_mat_error_21_Template, 3, 2, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, AddAgentFormComponent_mat_error_28_Template, 4, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](32, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddAgentFormComponent_Template_button_click_33_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](36, AddAgentFormComponent_mat_error_36_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "mat-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function AddAgentFormComponent_Template_mat_checkbox_change_38_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.editmode ? "Edit Agent" : "Create Agent");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.addagentform);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addagentform.get("firstname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addagentform.get("lastname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addagentform.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addagentform.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addagentform.get("password").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.addagentform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: [_c1]
      });

      var EditFormComponent = /*#__PURE__*/function () {
        function EditFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.hide = true;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addagentform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999999)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            approvedstatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addagentform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              approvedstatus: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.approvedstatus) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.approvedstatus : false
            });
          }
        }

        _createClass(EditFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this15 = this;

            console.log(this.addagentform.value);

            if (this.addagentform.valid) {
              this.userService.addagent(this.addagentform.value).subscribe(function (response) {
                console.log(response);

                _this15.snackBar.open('Agent Edit Successfully!', '', {
                  duration: 2000
                });

                _this15.addagentform.reset();

                _this15.addagentform.markAsUntouched();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }]);

        return EditFormComponent;
      }();

      EditFormComponent.??fac = function EditFormComponent_Factory(t) {
        return new (t || EditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: EditFormComponent,
        selectors: [["edit-form"]],
        decls: 53,
        vars: 18,
        consts: [["mat-dialog-title", ""], [1, "form-field-full", 3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", ""], ["fxFlex", "100", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "Mobile", "formControlName", "mobile", "required", ""], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "required", ""], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function EditFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Edit Subordinate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function EditFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](41, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "mat-checkbox", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function EditFormComponent_Template_mat_checkbox_change_46_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](47, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.addagentform);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](12, 8, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](20, 10, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](28, 12, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](36, 14, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](44, 16, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.addagentform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: [_c1]
      });
      /***/
    },

    /***/
    "Lt7c":
    /*!**********************************************************!*\
      !*** ./src/app/routes/subordinate/subordinate.module.ts ***!
      \**********************************************************/

    /*! exports provided: SubordinateModule */

    /***/
    function Lt7c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubordinateModule", function () {
        return SubordinateModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _subordinate_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subordinate-routing.module */
      "MWqj");
      /* harmony import */


      var _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agent/agent.component */
      "Ezfh");
      /* harmony import */


      var _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./subordinates/subordinates.component */
      "f8IR");
      /* harmony import */


      var _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agentnew/agentnew.component */
      "Kjbr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentComponent"], _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["SubordinatesComponent"], _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__["AgentnewComponent"]];
      var COMPONENTS_DYNAMIC = [_subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["AddSubordinateFormComponent"], _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["EditSubordinatesFormComponent"], _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentFormComponent"], _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["EditAgentFormComponent"], _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__["AddAgentFormComponent"], _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__["EditFormComponent"]];

      var SubordinateModule = function SubordinateModule() {
        _classCallCheck(this, SubordinateModule);
      };

      SubordinateModule.??fac = function SubordinateModule_Factory(t) {
        return new (t || SubordinateModule)();
      };

      SubordinateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: SubordinateModule
      });
      SubordinateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _subordinate_routing_module__WEBPACK_IMPORTED_MODULE_1__["SubordinateRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](SubordinateModule, {
          declarations: [_agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentComponent"], _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["SubordinatesComponent"], _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__["AgentnewComponent"], _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["AddSubordinateFormComponent"], _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["EditSubordinatesFormComponent"], _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentFormComponent"], _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["EditAgentFormComponent"], _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__["AddAgentFormComponent"], _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_4__["EditFormComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _subordinate_routing_module__WEBPACK_IMPORTED_MODULE_1__["SubordinateRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "MWqj":
    /*!******************************************************************!*\
      !*** ./src/app/routes/subordinate/subordinate-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: SubordinateRoutingModule */

    /***/
    function MWqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubordinateRoutingModule", function () {
        return SubordinateRoutingModule;
      });
      /* harmony import */


      var _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./agentnew/agentnew.component */
      "Kjbr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agent/agent.component */
      "Ezfh");
      /* harmony import */


      var _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./subordinates/subordinates.component */
      "f8IR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'subordinates',
        component: _subordinates_subordinates_component__WEBPACK_IMPORTED_MODULE_3__["SubordinatesComponent"]
      }, {
        path: 'agent',
        component: _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentComponent"]
      }, {
        path: 'agentnew',
        component: _agentnew_agentnew_component__WEBPACK_IMPORTED_MODULE_0__["AgentnewComponent"]
      }];

      var SubordinateRoutingModule = function SubordinateRoutingModule() {
        _classCallCheck(this, SubordinateRoutingModule);
      };

      SubordinateRoutingModule.??fac = function SubordinateRoutingModule_Factory(t) {
        return new (t || SubordinateRoutingModule)();
      };

      SubordinateRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: SubordinateRoutingModule
      });
      SubordinateRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](SubordinateRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "f8IR":
    /*!***************************************************************************!*\
      !*** ./src/app/routes/subordinate/subordinates/subordinates.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SubordinatesComponent, AddSubordinateFormComponent, EditSubordinatesFormComponent */

    /***/
    function f8IR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubordinatesComponent", function () {
        return SubordinatesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSubordinateFormComponent", function () {
        return AddSubordinateFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditSubordinatesFormComponent", function () {
        return EditSubordinatesFormComponent;
      });
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-matero/extensions/dialog */
      "r0g6");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function SubordinatesComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SubordinatesComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r2.openSubordinate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Add Subordinate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      function AddSubordinateFormComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddSubordinateFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddSubordinateFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddSubordinateFormComponent_mat_error_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Required Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddSubordinateFormComponent_mat_error_28_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Minimum Length is 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddSubordinateFormComponent_mat_error_28_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Maximum Length is 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function AddSubordinateFormComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, AddSubordinateFormComponent_mat_error_28_span_1_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddSubordinateFormComponent_mat_error_28_span_2_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddSubordinateFormComponent_mat_error_28_span_3_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.addstaffform.get("mobile").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.addstaffform.get("mobile").hasError("min"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.addstaffform.get("mobile").hasError("max"));
        }
      }

      function AddSubordinateFormComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddSubordinateFormComponent_mat_option_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", role_r10._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", role_r10 == null ? null : role_r10.name, " ");
        }
      }

      function AddSubordinateFormComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function EditSubordinatesFormComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", role_r2._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", role_r2 == null ? null : role_r2.name, " ");
        }
      }

      function EditSubordinatesFormComponent_mat_option_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var staff_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", staff_r3._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"](" ", staff_r3 == null ? null : staff_r3.firstname, " ", staff_r3 == null ? null : staff_r3.lastname, " ");
        }
      }

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var SubordinatesComponent = /*#__PURE__*/function () {
        function SubordinatesComponent(dialog, dialogx, userService, cdr) {
          _classCallCheck(this, SubordinatesComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr; //table

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
        }

        _createClass(SubordinatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.getallstaff();
            this.columns = [{
              header: 'Avatar',
              field: 'staffimg',
              type: 'image'
            }, {
              header: 'Name',
              field: 'name',
              formatter: function formatter(data) {
                return "".concat(data.firstname, " ").concat(data.lastname, " ");
              }
            }, {
              header: 'Email',
              sortable: true,
              field: 'email'
            }, {
              header: 'Mobile',
              sortable: true,
              field: 'mobile'
            }, {
              header: 'Role',
              field: 'role.name',
              formatter: function formatter(data) {
                var _a;

                return "<span class=\"label\">".concat((_a = data === null || data === void 0 ? void 0 : data.role) === null || _a === void 0 ? void 0 : _a.name, "</span>");
              }
            }, {
              header: 'Added By',
              field: 'added_by.firstname',
              formatter: function formatter(data) {
                var _a;

                return "<span (click)=\"viewadmin()\" class=\"admin-dy-class\">".concat((_a = data === null || data === void 0 ? void 0 : data.added_by) === null || _a === void 0 ? void 0 : _a.firstname, "</span>");
              }
            }, {
              header: 'Approved',
              field: 'approvedstatus',
              type: 'tag',
              tag: {
                "true": {
                  text: 'Yes',
                  color: 'red-100'
                },
                "false": {
                  text: 'No',
                  color: 'green-100'
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
                  return _this16.edit(record);
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
                  return _this16["delete"](record);
                }
              }]
            }];
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this17 = this;

            var dialogRef = this.dialog.open(EditSubordinatesFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              console.log('The dialog was closed');

              _this17.getallstaff();
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this18 = this;

            this.userService.deletestaff(data._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this18.isLoading = false;

              _this18.getallstaff();

              _this18.cdr.detectChanges();

              _this18.dialogx.alert("You have deleted ".concat(data.firstname, " ").concat(data.lastname, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
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
          key: "openSubordinate",
          value: function openSubordinate() {
            var _this19 = this;

            var adddailogRef = this.dialog.open(AddSubordinateFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this19.getallstaff();

              _this19.getallstaff();

              _this19.getallstaff();

              console.log('Dailog Closed');
            });
          }
        }, {
          key: "getallstaff",
          value: function getallstaff() {
            var _this20 = this;

            this.userService.viewadminstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this20.list = response.data;
              _this20.isLoading = false;

              _this20.cdr.detectChanges();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return SubordinatesComponent;
      }();

      SubordinatesComponent.??fac = function SubordinatesComponent_Factory(t) {
        return new (t || SubordinatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_1__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      SubordinatesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: SubordinatesComponent,
        selectors: [["app-subordinates"]],
        decls: 6,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"]],
        template: function SubordinatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("sortChange", function SubordinatesComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function SubordinatesComponent_Template_mtx_grid_selectionChange_3_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SubordinatesComponent_ng_template_4_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Subordinate")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_7__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        styles: ["[_nghost-%COMP%]     .label {\n  padding: 5px 10px;\n  border-radius: 999px;\n  background-color: #ffb74d;\n}\n\n[_nghost-%COMP%]     .admin-dy-class {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #6fcffc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3Vib3JkaW5hdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJzdWJvcmRpbmF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmxhYmVsIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzRkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFkbWluLWR5LWNsYXNzIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmY2ZmYztcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });

      var AddSubordinateFormComponent = /*#__PURE__*/function () {
        function AddSubordinateFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AddSubordinateFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addstaffform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999999)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            role: [{
              value: ''
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            approvedstatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addstaffform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              // password: this.data?.record?.password ? this.data?.record?.password : 'null',
              role: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.role) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.role._id : 'null',
              // added_by: this.data?.record?.added_by ? this.data?.record?.added_by?._id : 'null',
              approvedstatus: ((_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.record) === null || _z === void 0 ? void 0 : _z.approvedstatus) ? (_1 = (_0 = this.data) === null || _0 === void 0 ? void 0 : _0.record) === null || _1 === void 0 ? void 0 : _1.approvedstatus : false
            });
          }
        }

        _createClass(AddSubordinateFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallroles();
          }
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this21 = this;

            console.log(this.addstaffform.value);

            if (this.addstaffform.valid) {
              this.userService.addsubstaff(this.addstaffform.value).subscribe(function (response) {
                console.log(response);

                _this21.snackBar.open('Staff Added Successfully!', '', {
                  duration: 2000
                });

                _this21.addstaffform.reset();

                _this21.addstaffform.markAsUntouched();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "getallroles",
          value: function getallroles() {
            var _this22 = this;

            this.userService.getroleslowerthanme().subscribe(function (response) {
              console.log(response);
              _this22.allroles = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }]);

        return AddSubordinateFormComponent;
      }();

      AddSubordinateFormComponent.??fac = function AddSubordinateFormComponent_Factory(t) {
        return new (t || AddSubordinateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      AddSubordinateFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: AddSubordinateFormComponent,
        selectors: [["add-user-form"]],
        decls: 49,
        vars: 11,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "John", "formControlName", "firstname", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Deo", "formControlName", "lastname", "required", ""], ["type", "email", "matInput", "", "placeholder", "example@gmail.com", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "9999999999", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["type", "password", "matInput", "", "formControlName", "password", "required", ""], ["formControlName", "role", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function AddSubordinateFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function AddSubordinateFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, AddSubordinateFormComponent_mat_error_10_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, AddSubordinateFormComponent_mat_error_16_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, AddSubordinateFormComponent_mat_error_21_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, AddSubordinateFormComponent_mat_error_28_Template, 4, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](32, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](33, AddSubordinateFormComponent_mat_error_33_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "Select Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, AddSubordinateFormComponent_mat_option_39_Template, 2, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](40, AddSubordinateFormComponent_mat_error_40_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "mat-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function AddSubordinateFormComponent_Template_mat_checkbox_change_42_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.editmode ? "Edit Subordinate" : "Create Subordinate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.addstaffform);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addstaffform.get("firstname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addstaffform.get("lastname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addstaffform.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addstaffform.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addstaffform.get("password").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.allroles);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.addstaffform.get("role").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.addstaffform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
        styles: [_c1]
      });

      var EditSubordinatesFormComponent = /*#__PURE__*/function () {
        function EditSubordinatesFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditSubordinatesFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addstaffform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            added_by: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            approvedstatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addstaffform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              role: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.role) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.role._id : 'null',
              added_by: ((_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.record) === null || _z === void 0 ? void 0 : _z.added_by) ? (_2 = (_1 = (_0 = this.data) === null || _0 === void 0 ? void 0 : _0.record) === null || _1 === void 0 ? void 0 : _1.added_by) === null || _2 === void 0 ? void 0 : _2._id : 'null',
              approvedstatus: ((_4 = (_3 = this.data) === null || _3 === void 0 ? void 0 : _3.record) === null || _4 === void 0 ? void 0 : _4.approvedstatus) ? (_6 = (_5 = this.data) === null || _5 === void 0 ? void 0 : _5.record) === null || _6 === void 0 ? void 0 : _6.approvedstatus : false
            });
          }
        }

        _createClass(EditSubordinatesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallroles();
            this.getallstaff();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('firstname').hasError('required') ? 'validations.required' : form.get('lastname').hasError('required') ? 'validations.required' : form.get('email').hasError('required') ? 'validations.required' : '';
          }
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this23 = this;

            if (this.editmode) {
              console.log(this.addstaffform.value);
              this.userService.editstaff(this.id, this.addstaffform.value).subscribe(function (response) {
                console.log(response);

                _this23.snackBar.open('User Edited Successfully!', '', {
                  duration: 2000
                });

                _this23.addstaffform.reset();

                _this23.dialogRef.close();
              }, function (error) {
                console.log(error);
              });
            } else {
              if (this.addstaffform.valid) {
                console.log(this.addstaffform.value);
                this.userService.addstaff(this.addstaffform.value).subscribe(function (response) {
                  console.log(response);

                  _this23.snackBar.open('Staff Added Successfully!', '', {
                    duration: 2000
                  });

                  _this23.addstaffform.reset();

                  _this23.addstaffform.markAsUntouched();

                  _this23.dialogRef.close();
                }, function (error) {
                  console.log(error);
                });
              } else {
                this.getErrorMessage(this.addstaffform);
              }
            }
          }
        }, {
          key: "getallroles",
          value: function getallroles() {
            var _this24 = this;

            this.userService.getallroles().subscribe(function (response) {
              console.log(response);
              _this24.allroles = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }, {
          key: "getallstaff",
          value: function getallstaff() {
            var _this25 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this25.allstaff = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return EditSubordinatesFormComponent;
      }();

      EditSubordinatesFormComponent.??fac = function EditSubordinatesFormComponent_Factory(t) {
        return new (t || EditSubordinatesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditSubordinatesFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: EditSubordinatesFormComponent,
        selectors: [["edit-subordinates-form"]],
        decls: 57,
        vars: 17,
        consts: [["mat-dialog-title", ""], [1, "form-field-full", 3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", ""], ["fxFlex", "100", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "Mobile", "formControlName", "mobile", "required", ""], ["formControlName", "role", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "added_by", "required", ""], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function EditSubordinatesFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Edit Subordinate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function EditSubordinatesFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Select Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, EditSubordinatesFormComponent_mat_option_42_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Add By");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](48, EditSubordinatesFormComponent_mat_option_48_Template, 2, 3, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "mat-checkbox", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function EditSubordinatesFormComponent_Template_mat_checkbox_change_50_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](54, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.addstaffform);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](12, 9, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](20, 11, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](28, 13, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](36, 15, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.allroles);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.allstaff);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.addstaffform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
        styles: [_c1]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=subordinate-subordinate-module-es5.js.map