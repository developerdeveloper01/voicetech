(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-plan-module"], {
    /***/
    "AzJj":
    /*!**********************************************************************!*\
      !*** ./src/app/routes/plan/postpaid-plan/postpaid-plan.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PostpaidPlanComponent */

    /***/
    function AzJj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostpaidPlanComponent", function () {
        return PostpaidPlanComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./validity-plan/validity-plan.component */
      "t7ID");
      /* harmony import */


      var _pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pricetomin-plan/pricetomin-plan.component */
      "x6Fs");
      /* harmony import */


      var _minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./minute-plan/minute-plan.component */
      "FbvI");

      var PostpaidPlanComponent = /*#__PURE__*/function () {
        function PostpaidPlanComponent() {
          _classCallCheck(this, PostpaidPlanComponent);
        }

        _createClass(PostpaidPlanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostpaidPlanComponent;
      }();

      PostpaidPlanComponent.ɵfac = function PostpaidPlanComponent_Factory(t) {
        return new (t || PostpaidPlanComponent)();
      };

      PostpaidPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PostpaidPlanComponent,
        selectors: [["app-postpaid-plan"]],
        decls: 12,
        vars: 0,
        consts: [[1, "m--16"], ["label", "Validity Plan"], [1, "m-16"], ["label", "Price to Minute Plan"], ["label", "Minute Plan"]],
        template: function PostpaidPlanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-validity-plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-pricetomin-plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-minute-plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["ValidityPlanComponent"], _pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["PricetominPlanComponent"], _minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["MinutePlanComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cGFpZC1wbGFuLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "FbvI":
    /*!********************************************************************************!*\
      !*** ./src/app/routes/plan/postpaid-plan/minute-plan/minute-plan.component.ts ***!
      \********************************************************************************/

    /*! exports provided: MinutePlanComponent, AddMinutePlanFormComponent, EditMinutePlanFormComponent */

    /***/
    function FbvI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MinutePlanComponent", function () {
        return MinutePlanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMinutePlanFormComponent", function () {
        return AddMinutePlanFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMinutePlanFormComponent", function () {
        return EditMinutePlanFormComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function MinutePlanComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, " ");
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var MinutePlanComponent = /*#__PURE__*/function () {
        function MinutePlanComponent(dialog, dialogx, userService, cdr) {
          var _this = this;

          _classCallCheck(this, MinutePlanComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [{
            header: 'Validity Plan',
            sortable: true,
            field: 'validityplan'
          }, {
            header: 'Price',
            sortable: true,
            field: 'price'
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
            minWidth: 120,
            width: '120px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
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
          this.columnMenuButtonType = 'raised';
        }

        _createClass(MinutePlanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallnumbers();
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

            var editdailogRef = this.dialog.open(EditMinutePlanFormComponent, {
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
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this5 = this;

            var adddailogRef = this.dialog.open(AddMinutePlanFormComponent, {
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
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this6 = this;

            this.userService.getalldstnumbers().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this6.list = response.data;
              _this6.total = response.data.length;
              _this6.isLoading = false;

              _this6.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('component destroyed');
          }
        }]);

        return MinutePlanComponent;
      }();

      MinutePlanComponent.ɵfac = function MinutePlanComponent_Factory(t) {
        return new (t || MinutePlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      MinutePlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MinutePlanComponent,
        selectors: [["app-minute-plan"]],
        viewQuery: function MinutePlanComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 11,
        vars: 21,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "data-grid-options"], ["mat-raised-button", "", "color", "primary", 2, "border-radius", "30px", "padding", "5px", "margin", "5px", "float", "right", "margin-bottom", "10px", 3, "click"], ["color", "white", 2, "margin-left", "8px"], [2, "margin-right", "8px", "padding", "5px"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""]],
        template: function MinutePlanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinutePlanComponent_Template_button_click_3_listener() {
              return ctx.openAddDstNumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Price to Minute Plan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mtx-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function MinutePlanComponent_Template_mtx_grid_sortChange_8_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function MinutePlanComponent_Template_mtx_grid_selectionChange_8_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MinutePlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Minute Plan")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaW51dGUtcGxhbi5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });

      var AddMinutePlanFormComponent = /*#__PURE__*/function () {
        function AddMinutePlanFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddMinutePlanFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(AddMinutePlanFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this7 = this;

            if (this.adddstnumber.valid) {
              this.userService.adddstnumber(this.adddstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this7.snackBar.open('DST Number Added Successfully!', '', {
                  duration: 2000
                });

                _this7.adddstnumber.reset(); //this.adddstnumber.markAsUntouched();

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
            var _this8 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this8.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
          }
        }]);

        return AddMinutePlanFormComponent;
      }();

      AddMinutePlanFormComponent.ɵfac = function AddMinutePlanFormComponent_Factory(t) {
        return new (t || AddMinutePlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddMinutePlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddMinutePlanFormComponent,
        selectors: [["add-minute-form"]],
        decls: 46,
        vars: 1,
        consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddMinutePlanFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Minute Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Validity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "30 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Minute Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adddstnumber.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        styles: [_c1]
      });

      var EditMinutePlanFormComponent = /*#__PURE__*/function () {
        function EditMinutePlanFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditMinutePlanFormComponent);

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
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(EditMinutePlanFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            this.getallips();
            this.editdstnumber.setValue({
              ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
              dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
              inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
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
            var _this10 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this10.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this10.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }]);

        return EditMinutePlanFormComponent;
      }();

      EditMinutePlanFormComponent.ɵfac = function EditMinutePlanFormComponent_Factory(t) {
        return new (t || EditMinutePlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditMinutePlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditMinutePlanFormComponent,
        selectors: [["edit-minute-form"]],
        decls: 0,
        vars: 0,
        template: function EditMinutePlanFormComponent_Template(rf, ctx) {},
        styles: [_c1]
      });
      /***/
    },

    /***/
    "jCtq":
    /*!********************************************!*\
      !*** ./src/app/routes/plan/plan.module.ts ***!
      \********************************************/

    /*! exports provided: PlanModule */

    /***/
    function jCtq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlanModule", function () {
        return PlanModule;
      });
      /* harmony import */


      var _plan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./plan-routing.module */
      "ypkg");
      /* harmony import */


      var _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prepaid-plan/prepaid-plan.component */
      "tWdt");
      /* harmony import */


      var _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./postpaid-plan/postpaid-plan.component */
      "AzJj");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./postpaid-plan/validity-plan/validity-plan.component */
      "t7ID");
      /* harmony import */


      var _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./postpaid-plan/pricetomin-plan/pricetomin-plan.component */
      "x6Fs");
      /* harmony import */


      var _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./postpaid-plan/minute-plan/minute-plan.component */
      "FbvI");
      /* harmony import */


      var _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./postpaid/postpaid.component */
      "wOWP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["PrepaidPlanComponent"], _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__["PostpaidPlanComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["PostpaidComponent"], _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["ValidityPlanComponent"], _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["PricetominPlanComponent"], _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["MinutePlanComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidFormComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidplanOneFormComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["EditPostpaidplanOneFormComponent"]];
      var COMPONENTS_DYNAMIC = [_postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["AddValidityPlanFormComponent"], _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["EditValidityPlanFormComponent"], _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidplanOneFormComponent"], _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["AddPtominPlanFormComponent"], _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["EditPtominPlanFormComponent"], _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddMinutePlanFormComponent"], _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["EditMinutePlanFormComponent"], _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidFormComponent"]];

      var PlanModule = function PlanModule() {
        _classCallCheck(this, PlanModule);
      };

      PlanModule.ɵfac = function PlanModule_Factory(t) {
        return new (t || PlanModule)();
      };

      PlanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: PlanModule
      });
      PlanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _plan_routing_module__WEBPACK_IMPORTED_MODULE_0__["PlanRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PlanModule, {
          declarations: [_prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["PrepaidPlanComponent"], _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__["PostpaidPlanComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["PostpaidComponent"], _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["ValidityPlanComponent"], _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["PricetominPlanComponent"], _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["MinutePlanComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidFormComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidplanOneFormComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["EditPostpaidplanOneFormComponent"], _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["AddValidityPlanFormComponent"], _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["EditValidityPlanFormComponent"], _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidplanOneFormComponent"], _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["AddPtominPlanFormComponent"], _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["EditPtominPlanFormComponent"], _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddMinutePlanFormComponent"], _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["EditMinutePlanFormComponent"], _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidFormComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["PostpaidComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _plan_routing_module__WEBPACK_IMPORTED_MODULE_0__["PlanRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "t7ID":
    /*!************************************************************************************!*\
      !*** ./src/app/routes/plan/postpaid-plan/validity-plan/validity-plan.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ValidityPlanComponent, AddValidityPlanFormComponent, EditValidityPlanFormComponent */

    /***/
    function t7ID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidityPlanComponent", function () {
        return ValidityPlanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddValidityPlanFormComponent", function () {
        return AddValidityPlanFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditValidityPlanFormComponent", function () {
        return EditValidityPlanFormComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ValidityPlanComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, " ");
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var ValidityPlanComponent = /*#__PURE__*/function () {
        function ValidityPlanComponent(dialog, dialogx, userService, cdr) {
          var _this11 = this;

          _classCallCheck(this, ValidityPlanComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [{
            header: 'Validity Plan',
            sortable: true,
            field: 'validityplan'
          }, {
            header: 'Price',
            sortable: true,
            field: 'price'
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
            minWidth: 120,
            width: '120px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'edit',
              click: function click(record) {
                return _this11.openEditDstNumber(record);
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
                return _this11["delete"](record);
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
          this.columnMenuButtonType = 'raised';
        }

        _createClass(ValidityPlanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallnumbers();
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this12 = this;

            var dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
              width: '900px',
              data: {
                record: value
              }
            });

            var onOk = function onOk() {
              _this12.dialogx.alert('Closed');
            };

            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "openEditDstNumber",
          value: function openEditDstNumber(value) {
            var _this13 = this;

            var editdailogRef = this.dialog.open(EditValidityPlanFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this13.getallnumbers();
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this14 = this;

            this.userService.deletenumber(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this14.isLoading = false;

              _this14.getallnumbers();

              _this14.cdr.detectChanges();

              _this14.dialogx.alert("You have deleted ".concat(value.dstnumber, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this15 = this;

            var adddailogRef = this.dialog.open(AddValidityPlanFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this15.getallnumbers();
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
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this16 = this;

            this.userService.getalldstnumbers().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this16.list = response.data;
              _this16.total = response.data.length;
              _this16.isLoading = false;

              _this16.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('component destroyed');
          }
        }]);

        return ValidityPlanComponent;
      }();

      ValidityPlanComponent.ɵfac = function ValidityPlanComponent_Factory(t) {
        return new (t || ValidityPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ValidityPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ValidityPlanComponent,
        selectors: [["app-validity-plan"]],
        viewQuery: function ValidityPlanComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 11,
        vars: 21,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "data-grid-options"], ["mat-raised-button", "", "color", "primary", 2, "border-radius", "30px", "padding", "5px", "margin", "5px", "float", "right", "margin-bottom", "10px", 3, "click"], ["color", "white", 2, "margin-left", "8px"], [2, "margin-right", "8px", "padding", "5px"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""]],
        template: function ValidityPlanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidityPlanComponent_Template_button_click_3_listener() {
              return ctx.openAddDstNumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Validity Plan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mtx-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function ValidityPlanComponent_Template_mtx_grid_sortChange_8_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function ValidityPlanComponent_Template_mtx_grid_selectionChange_8_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ValidityPlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Validity Plan")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"]],
        styles: [".data-grid-options[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%], .data-grid-options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-checkbox, [dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-group {\n  margin-right: auto;\n  margin-left: 8px;\n}\n.data-grid-options[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-button {\n  margin-right: auto;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhbGlkaXR5LXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0VBRUUsaUJBQUE7QUFBTjtBQUVNOztFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURSIiwiZmlsZSI6InZhbGlkaXR5LXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1ncmlkLW9wdGlvbnMge1xyXG4gICAgLm1hdC1jaGVja2JveCxcclxuICAgIC5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBcclxuICAgICAgW2Rpcj0ncnRsJ10gOmhvc3QgOjpuZy1kZWVwICYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIFxyXG4gICAgICBbZGlyPSdydGwnXSA6aG9zdCA6Om5nLWRlZXAgJiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"],
        changeDetection: 0
      });

      var AddValidityPlanFormComponent = /*#__PURE__*/function () {
        function AddValidityPlanFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddValidityPlanFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(AddValidityPlanFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this17 = this;

            if (this.adddstnumber.valid) {
              this.userService.adddstnumber(this.adddstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this17.snackBar.open('DST Number Added Successfully!', '', {
                  duration: 2000
                });

                _this17.adddstnumber.reset(); //this.adddstnumber.markAsUntouched();

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
            var _this18 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this18.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
          }
        }]);

        return AddValidityPlanFormComponent;
      }();

      AddValidityPlanFormComponent.ɵfac = function AddValidityPlanFormComponent_Factory(t) {
        return new (t || AddValidityPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddValidityPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddValidityPlanFormComponent,
        selectors: [["add-validity-form"]],
        decls: 46,
        vars: 1,
        consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddValidityPlanFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Validity Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Titles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Validity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "30 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Minute Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adddstnumber.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        styles: [_c1]
      });

      var EditValidityPlanFormComponent = /*#__PURE__*/function () {
        function EditValidityPlanFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditValidityPlanFormComponent);

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
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(EditValidityPlanFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            this.getallips();
            this.editdstnumber.setValue({
              ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
              dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
              inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this19 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this19.allips = response.data;
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
            return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this20 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this20.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this20.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }]);

        return EditValidityPlanFormComponent;
      }();

      EditValidityPlanFormComponent.ɵfac = function EditValidityPlanFormComponent_Factory(t) {
        return new (t || EditValidityPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditValidityPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditValidityPlanFormComponent,
        selectors: [["edit-validity-form"]],
        decls: 0,
        vars: 0,
        template: function EditValidityPlanFormComponent_Template(rf, ctx) {},
        styles: [_c1]
      });
      /***/
    },

    /***/
    "tWdt":
    /*!********************************************************************!*\
      !*** ./src/app/routes/plan/prepaid-plan/prepaid-plan.component.ts ***!
      \********************************************************************/

    /*! exports provided: PrepaidPlanComponent, AddPrepaidplanOneFormComponent, EditPrepaidplanOneFormComponent, AddPrepaidFormComponent */

    /***/
    function tWdt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrepaidPlanComponent", function () {
        return PrepaidPlanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPrepaidplanOneFormComponent", function () {
        return AddPrepaidplanOneFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPrepaidplanOneFormComponent", function () {
        return EditPrepaidplanOneFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPrepaidFormComponent", function () {
        return AddPrepaidFormComponent;
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


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
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

      function PrepaidPlanComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrepaidPlanComponent_ng_template_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openAddPlan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Plan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrepaidPlanComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.filterSearch = $event;
          })("ngModelChange", function PrepaidPlanComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.searchData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filterSearch);
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      function AddPrepaidFormComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddPrepaidFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.addprepaidplan), " ");
        }
      }

      var PrepaidPlanComponent = /*#__PURE__*/function () {
        function PrepaidPlanComponent(dialog, dialogx, userService, cdr) {
          var _this21 = this;

          _classCallCheck(this, PrepaidPlanComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [{
            header: 'Plan Title',
            sortable: true,
            field: 'plantitle'
          }, {
            header: 'Price (Rs)',
            sortable: true,
            field: 'planprice'
          }, {
            header: 'Validity (Days)',
            sortable: true,
            field: 'validityday'
          }, {
            header: 'Balance (Minutes)',
            sortable: true,
            field: 'minute_balance'
          }, {
            header: 'Description',
            sortable: true,
            field: 'desc'
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
                return _this21.view(record);
              }
            }, {
              type: 'icon',
              color: 'accent',
              icon: 'edit',
              tooltip: 'edit',
              click: function click(record) {
                return _this21.edit(record);
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
                return _this21["delete"](record);
              }
            }]
          }]; //table

          this.list = [];
          this.total = 0;
          this.multiSelectable = false;
          this.rowSelectable = false;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = true;
          this.rowStriped = true;
          this.showPaginator = true;
          this.expandable = true;
          this.columnResizable = false;
          this.columnMenuButtonType = 'raised';
        }

        _createClass(PrepaidPlanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallnumbers();
          }
        }, {
          key: "view",
          value: function view(value) {
            console.log(value);
          }
        }, {
          key: "edit",
          value: function edit(data) {
            var _this22 = this;

            console.log(data);
            var adddailogRef = this.dialog.open(AddPrepaidplanOneFormComponent, {
              width: '500px',
              data: {
                record: data
              }
            });
            adddailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this22.getallnumbers();
            });
          }
        }, {
          key: "openEditDstNumber",
          value: function openEditDstNumber(value) {
            var _this23 = this;

            var editdailogRef = this.dialog.open(EditPrepaidplanOneFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this23.getallnumbers();
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this24 = this;

            this.userService.deleteplan(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this24.isLoading = false;

              _this24.getallnumbers();

              _this24.cdr.detectChanges();

              _this24.dialogx.alert("You have deleted ".concat(value.plantitle, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddPlan",
          value: function openAddPlan() {
            var _this25 = this;

            var adddailogRef = this.dialog.open(AddPrepaidplanOneFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this25.cdr.detectChanges();

              _this25.getallnumbers();
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
          key: "searchData",
          value: function searchData(searchValue) {
            if (searchValue) {
              this.filteredData = this.list.filter(function (item) {
                return item.plantitle.toLowerCase().includes(searchValue.toLowerCase()) || item.desc.toLowerCase().includes(searchValue.toLowerCase());
              });
            } else {
              this.filteredData = null;
              this.getallnumbers();
              this.getallnumbers();
            }
          }
        }, {
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this26 = this;

            this.userService.getallplans().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this26.list = response.data;
              _this26.total = response.data.length;
              _this26.isLoading = false;

              _this26.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('component destroyed');
          }
        }]);

        return PrepaidPlanComponent;
      }();

      PrepaidPlanComponent.ɵfac = function PrepaidPlanComponent_Factory(t) {
        return new (t || PrepaidPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PrepaidPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrepaidPlanComponent,
        selectors: [["app-prepaid-plan"]],
        viewQuery: function PrepaidPlanComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 7,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "m-16"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"]],
        template: function PrepaidPlanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mtx-grid", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function PrepaidPlanComponent_Template_mtx_grid_sortChange_4_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function PrepaidPlanComponent_Template_mtx_grid_selectionChange_4_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrepaidPlanComponent_ng_template_5_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.filteredData || ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Validity Plan")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVwYWlkLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });

      var AddPrepaidplanOneFormComponent = /*#__PURE__*/function () {
        function AddPrepaidplanOneFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AddPrepaidplanOneFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.editmode = false;
          this.addplan = this.fb.group({
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            planprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            validityday: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            minute_balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addplan.setValue({
              plantitle: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.plantitle) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.plantitle : 'null',
              planprice: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.planprice) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.planprice : 'null',
              validityday: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.validityday) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.validityday : 'null',
              minute_balance: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.minute_balance) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.minute_balance : 'null',
              desc: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.desc) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.desc : 'null'
            });
          }
        }

        _createClass(AddPrepaidplanOneFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this27 = this;

            if (this.editmode) {
              console.log(this.addplan.value);
              this.userService.editplan(this.id, this.addplan.value).subscribe(function (response) {
                console.log(response);

                _this27.snackBar.open('Plan Edited Successfully!', '', {
                  duration: 2000
                });

                _this27.addplan.reset();
              }, function (error) {
                console.log(error);
              });
            } else {
              if (this.addplan.valid) {
                this.userService.addplan(this.addplan.value).subscribe(function (response) {
                  console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                  _this27.snackBar.open('Plan Added Successfully!', '', {
                    duration: 2000
                  });

                  _this27.addplan.reset();
                }, function (error) {
                  console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
                });
              } else {
                this.getErrorMessage(this.addplan);
              }
            }
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addplan.get(field).valid && this.addplan.get(field).touched;
          }
        }]);

        return AddPrepaidplanOneFormComponent;
      }();

      AddPrepaidplanOneFormComponent.ɵfac = function AddPrepaidplanOneFormComponent_Factory(t) {
        return new (t || AddPrepaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      AddPrepaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPrepaidplanOneFormComponent,
        selectors: [["add-prepaidplan-form"]],
        decls: 40,
        vars: 3,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Plan Title", "formControlName", "plantitle", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "planprice", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Validity", "formControlName", "validityday", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "minute_balance", "required", ""], ["matInput", "", "type", "text", "placeholder", "Plan Price", "formControlName", "desc", "required", ""], ["mat-raised-button", "", "cdkFocusInitial", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function AddPrepaidplanOneFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPrepaidplanOneFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Validity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Minute Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editmode ? "Add Validity Plan" : "Add Validity Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addplan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addplan.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        styles: [_c1]
      });

      var EditPrepaidplanOneFormComponent = /*#__PURE__*/function () {
        function EditPrepaidplanOneFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditPrepaidplanOneFormComponent);

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
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(EditPrepaidplanOneFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            this.getallips();
            this.editdstnumber.setValue({
              ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
              dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
              inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
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
            return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this29 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this29.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this29.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }, {
          key: "openAddPrepaid",
          value: function openAddPrepaid() {// let adddailogRef = this.dialog.open(AddPrepaidFormComponent, { width: '500px' });
            // adddailogRef.afterClosed().subscribe(() => {
            //   this.getallplans();
            // });
          }
        }, {
          key: "getallplans",
          value: function getallplans() {
            this.userService.getallplans().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }]);

        return EditPrepaidplanOneFormComponent;
      }();

      EditPrepaidplanOneFormComponent.ɵfac = function EditPrepaidplanOneFormComponent_Factory(t) {
        return new (t || EditPrepaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditPrepaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditPrepaidplanOneFormComponent,
        selectors: [["edit-prepaidplan-form"]],
        decls: 0,
        vars: 0,
        template: function EditPrepaidplanOneFormComponent_Template(rf, ctx) {},
        styles: [_c1]
      });

      var AddPrepaidFormComponent = /*#__PURE__*/function () {
        function AddPrepaidFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddPrepaidFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addprepaidplan = this.fb.group({
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(AddPrepaidFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitprepaid",
          value: function submitprepaid() {
            var _this30 = this;

            if (this.addprepaidplan.valid) {
              this.userService.addplan(this.addprepaidplan.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this30.snackBar.open('Plan Added Successfully!', '', {
                  duration: 2000
                });

                _this30.addprepaidplan.reset(); //this.addprepaidplan.markAsUntouched();

              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.addprepaidplan);
            }
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this31 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this31.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addprepaidplan.get(field).valid && this.addprepaidplan.get(field).touched;
          }
        }]);

        return AddPrepaidFormComponent;
      }();

      AddPrepaidFormComponent.ɵfac = function AddPrepaidFormComponent_Factory(t) {
        return new (t || AddPrepaidFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddPrepaidFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPrepaidFormComponent,
        selectors: [["add-prepaid-form"]],
        decls: 25,
        vars: 5,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "Neron", "formControlName", "title", "required", ""], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "xxx.xxx.xxx.xxx", "formControlName", "ipnumber", "required", ""], ["formControlName", "activestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddPrepaidFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPrepaidFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitprepaid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddPrepaidFormComponent_mat_error_8_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddPrepaidFormComponent_mat_error_16_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddPrepaidFormComponent_Template_mat_checkbox_change_18_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addprepaidplan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addprepaidplan.get("title").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addprepaidplan.get("ipnumber").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addprepaidplan.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
        styles: [_c1]
      });
      /***/
    },

    /***/
    "wOWP":
    /*!************************************************************!*\
      !*** ./src/app/routes/plan/postpaid/postpaid.component.ts ***!
      \************************************************************/

    /*! exports provided: PostpaidComponent, AddPostpaidplanOneFormComponent, EditPostpaidplanOneFormComponent, AddPostpaidFormComponent */

    /***/
    function wOWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostpaidComponent", function () {
        return PostpaidComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPostpaidplanOneFormComponent", function () {
        return AddPostpaidplanOneFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPostpaidplanOneFormComponent", function () {
        return EditPostpaidplanOneFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPostpaidFormComponent", function () {
        return AddPostpaidFormComponent;
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


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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

      function PostpaidComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostpaidComponent_ng_template_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openAddPlan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Plan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostpaidComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.filterSearch = $event;
          })("ngModelChange", function PostpaidComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.searchData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filterSearch);
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      function EditPostpaidplanOneFormComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ip_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ip_r3._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ip_r3.ipnumber, " ");
        }
      }

      function EditPostpaidplanOneFormComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function EditPostpaidplanOneFormComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.getErrorMessage(ctx_r2.editdstnumber)), " ");
        }
      }

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      function AddPostpaidFormComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddPostpaidFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.addpospaidplan), " ");
        }
      }

      var PostpaidComponent = /*#__PURE__*/function () {
        function PostpaidComponent(dialog, dialogx, userService, cdr) {
          var _this32 = this;

          _classCallCheck(this, PostpaidComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [{
            header: 'Plan Title',
            sortable: true,
            field: 'plantitle'
          }, {
            header: 'Price (Rs)',
            sortable: true,
            field: 'planprice'
          }, {
            header: 'Validity (Days)',
            sortable: true,
            field: 'validityday'
          }, {
            header: 'Balance (Minutes)',
            sortable: true,
            field: 'minute_balance'
          }, {
            header: 'Description',
            sortable: true,
            field: 'desc'
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
                return _this32.view(record);
              }
            }, {
              type: 'icon',
              color: 'accent',
              icon: 'edit',
              tooltip: 'edit',
              click: function click(record) {
                return _this32.edit(record);
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
                return _this32["delete"](record);
              }
            }]
          }]; //table

          this.list = [];
          this.total = 0;
          this.multiSelectable = false;
          this.rowSelectable = false;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = true;
          this.rowStriped = true;
          this.showPaginator = true;
          this.expandable = true;
          this.columnResizable = false;
          this.columnMenuButtonType = 'raised';
        }

        _createClass(PostpaidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallnumbers();
          }
        }, {
          key: "view",
          value: function view(value) {
            console.log(value);
          }
        }, {
          key: "edit",
          value: function edit(data) {
            var _this33 = this;

            console.log(data);
            var adddailogRef = this.dialog.open(AddPostpaidplanOneFormComponent, {
              width: '500px',
              data: {
                record: data
              }
            });
            adddailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this33.getallnumbers();
            });
          }
        }, {
          key: "openEditDstNumber",
          value: function openEditDstNumber(value) {
            var _this34 = this;

            var editdailogRef = this.dialog.open(EditPostpaidplanOneFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this34.getallnumbers();
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this35 = this;

            this.userService.deletepospaidplan(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this35.isLoading = false;

              _this35.getallnumbers();

              _this35.cdr.detectChanges();

              _this35.dialogx.alert("You have deleted ".concat(value.plantitle, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddPlan",
          value: function openAddPlan() {
            var _this36 = this;

            var adddailogRef = this.dialog.open(AddPostpaidplanOneFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this36.cdr.detectChanges();

              _this36.getallnumbers();
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
          key: "searchData",
          value: function searchData(searchValue) {
            if (searchValue) {
              this.filteredData = this.list.filter(function (item) {
                return item.plantitle.toLowerCase().includes(searchValue.toLowerCase()) || item.desc.toLowerCase().includes(searchValue.toLowerCase());
              });
            } else {
              this.filteredData = null;
              this.getallnumbers();
              this.getallnumbers();
            }
          }
        }, {
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this37 = this;

            this.userService.getallpospaidplan().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this37.list = response.data;
              _this37.total = response.data.length;
              _this37.isLoading = false;

              _this37.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('component destroyed');
          }
        }]);

        return PostpaidComponent;
      }();

      PostpaidComponent.ɵfac = function PostpaidComponent_Factory(t) {
        return new (t || PostpaidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PostpaidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PostpaidComponent,
        selectors: [["app-postpaid"]],
        viewQuery: function PostpaidComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 7,
        vars: 21,
        consts: [[1, "bg-blue-600"], [1, "m-16"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"]],
        template: function PostpaidComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mtx-grid", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function PostpaidComponent_Template_mtx_grid_sortChange_4_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function PostpaidComponent_Template_mtx_grid_selectionChange_4_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostpaidComponent_ng_template_5_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.filteredData || ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Validity Plan")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cGFpZC5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });

      var AddPostpaidplanOneFormComponent = /*#__PURE__*/function () {
        function AddPostpaidplanOneFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AddPostpaidplanOneFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.editmode = false;
          this.addpospaidplan = this.fb.group({
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            planprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            validityday: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            minute_balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addpospaidplan.setValue({
              plantitle: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.plantitle) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.plantitle : 'null',
              planprice: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.planprice) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.planprice : 'null',
              validityday: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.validityday) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.validityday : 'null',
              minute_balance: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.minute_balance) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.minute_balance : 'null',
              desc: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.desc) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.desc : 'null'
            });
          }
        }

        _createClass(AddPostpaidplanOneFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this38 = this;

            if (this.editmode) {
              console.log(this.addpospaidplan.value);
              this.userService.editpospaidplan(this.id, this.addpospaidplan.value).subscribe(function (response) {
                console.log(response);

                _this38.snackBar.open('Plan Edited Successfully!', '', {
                  duration: 2000
                });

                _this38.addpospaidplan.reset();
              }, function (error) {
                console.log(error);
              });
            } else {
              if (this.addpospaidplan.valid) {
                this.userService.addpospaidplan(this.addpospaidplan.value).subscribe(function (response) {
                  console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                  _this38.snackBar.open('Plan Added Successfully!', '', {
                    duration: 2000
                  });

                  _this38.addpospaidplan.reset();
                }, function (error) {
                  console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
                });
              } else {
                this.getErrorMessage(this.addpospaidplan);
              }
            }
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addpospaidplan.get(field).valid && this.addpospaidplan.get(field).touched;
          }
        }]);

        return AddPostpaidplanOneFormComponent;
      }();

      AddPostpaidplanOneFormComponent.ɵfac = function AddPostpaidplanOneFormComponent_Factory(t) {
        return new (t || AddPostpaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      AddPostpaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPostpaidplanOneFormComponent,
        selectors: [["add-postpaidplan-form"]],
        decls: 40,
        vars: 3,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Plan Title", "formControlName", "plantitle", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "planprice", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Validity", "formControlName", "validityday", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "minute_balance", "required", ""], ["matInput", "", "type", "text", "placeholder", "Plan Price", "formControlName", "desc", "required", ""], ["mat-raised-button", "", "cdkFocusInitial", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function AddPostpaidplanOneFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPostpaidplanOneFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Validity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Minute Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editmode ? "Add postpaid Plan" : "Add postpaid plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addpospaidplan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addpospaidplan.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        styles: [_c1]
      });

      var EditPostpaidplanOneFormComponent = /*#__PURE__*/function () {
        function EditPostpaidplanOneFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditPostpaidplanOneFormComponent);

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
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(EditPostpaidplanOneFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            this.getallips();
            this.editdstnumber.setValue({
              ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
              dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
              inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this39 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this39.allips = response.data;
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
            return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this40 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this40.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this40.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }, {
          key: "openAddpospaid",
          value: function openAddpospaid() {// let adddailogRef = this.dialog.open(AddPrepaidFormComponent, { width: '500px' });
            // adddailogRef.afterClosed().subscribe(() => {
            //   this.getallplans();
            // });
          }
        }, {
          key: "getallpospaidplan",
          value: function getallpospaidplan() {
            this.userService.getallpospaidplan().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }]);

        return EditPostpaidplanOneFormComponent;
      }();

      EditPostpaidplanOneFormComponent.ɵfac = function EditPostpaidplanOneFormComponent_Factory(t) {
        return new (t || EditPostpaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditPostpaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditPostpaidplanOneFormComponent,
        selectors: [["edit-postpaidplan-form"]],
        decls: 26,
        vars: 6,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["formControlName", "ip", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "number", "matInput", "", "placeholder", "991515000", "formControlName", "dstnumber", "required", ""], ["formControlName", "inusestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", "cdkFocusInitial", "", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function EditPostpaidplanOneFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit DST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPostpaidplanOneFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditPostpaidplanOneFormComponent_mat_option_8_Template, 2, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditPostpaidplanOneFormComponent_mat_error_9_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditPostpaidplanOneFormComponent_mat_error_17_Template, 3, 3, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-checkbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditPostpaidplanOneFormComponent_Template_mat_checkbox_change_19_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "In Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editdstnumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allips);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editdstnumber.get("ip").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editdstnumber.get("dstnumber").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.editdstnumber.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
        styles: [_c1]
      });

      var AddPostpaidFormComponent = /*#__PURE__*/function () {
        function AddPostpaidFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddPostpaidFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addpospaidplan = this.fb.group({
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(AddPostpaidFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitpospaid",
          value: function submitpospaid() {
            var _this41 = this;

            if (this.addpospaidplan.valid) {
              this.userService.addpospaidplan(this.addpospaidplan.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this41.snackBar.open('Plan Added Successfully!', '', {
                  duration: 2000
                });

                _this41.addpospaidplan.reset(); //this.addprepaidplan.markAsUntouched();

              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.addpospaidplan);
            }
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this42 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this42.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addpospaidplan.get(field).valid && this.addpospaidplan.get(field).touched;
          }
        }]);

        return AddPostpaidFormComponent;
      }();

      AddPostpaidFormComponent.ɵfac = function AddPostpaidFormComponent_Factory(t) {
        return new (t || AddPostpaidFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddPostpaidFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPostpaidFormComponent,
        selectors: [["add-postpaid-form"]],
        decls: 25,
        vars: 5,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "Neron", "formControlName", "title", "required", ""], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "xxx.xxx.xxx.xxx", "formControlName", "ipnumber", "required", ""], ["formControlName", "activestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddPostpaidFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPostpaidFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitpospaid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddPostpaidFormComponent_mat_error_8_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddPostpaidFormComponent_mat_error_16_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddPostpaidFormComponent_Template_mat_checkbox_change_18_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addpospaidplan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addpospaidplan.get("title").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addpospaidplan.get("ipnumber").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addpospaidplan.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
        styles: [_c1]
      });
      /***/
    },

    /***/
    "x6Fs":
    /*!****************************************************************************************!*\
      !*** ./src/app/routes/plan/postpaid-plan/pricetomin-plan/pricetomin-plan.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PricetominPlanComponent, AddPtominPlanFormComponent, EditPtominPlanFormComponent */

    /***/
    function x6Fs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricetominPlanComponent", function () {
        return PricetominPlanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPtominPlanFormComponent", function () {
        return AddPtominPlanFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPtominPlanFormComponent", function () {
        return EditPtominPlanFormComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function PricetominPlanComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, " ");
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var PricetominPlanComponent = /*#__PURE__*/function () {
        function PricetominPlanComponent(dialog, dialogx, userService, cdr) {
          var _this43 = this;

          _classCallCheck(this, PricetominPlanComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.columns = [{
            header: 'Validity Plan',
            sortable: true,
            field: 'validityplan'
          }, {
            header: 'Price',
            sortable: true,
            field: 'price'
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
            minWidth: 120,
            width: '120px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: 'edit',
              click: function click(record) {
                return _this43.openEditDstNumber(record);
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
                return _this43["delete"](record);
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
          this.columnMenuButtonType = 'raised';
        }

        _createClass(PricetominPlanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallnumbers();
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this44 = this;

            var dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
              width: '900px',
              data: {
                record: value
              }
            });

            var onOk = function onOk() {
              _this44.dialogx.alert('Closed');
            };

            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "openEditDstNumber",
          value: function openEditDstNumber(value) {
            var _this45 = this;

            var editdailogRef = this.dialog.open(EditPtominPlanFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this45.getallnumbers();
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this46 = this;

            this.userService.deletenumber(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this46.isLoading = false;

              _this46.getallnumbers();

              _this46.cdr.detectChanges();

              _this46.dialogx.alert("You have deleted ".concat(value.dstnumber, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this47 = this;

            var adddailogRef = this.dialog.open(AddPtominPlanFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this47.getallnumbers();
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
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this48 = this;

            this.userService.getalldstnumbers().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this48.list = response.data;
              _this48.total = response.data.length;
              _this48.isLoading = false;

              _this48.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('component destroyed');
          }
        }]);

        return PricetominPlanComponent;
      }();

      PricetominPlanComponent.ɵfac = function PricetominPlanComponent_Factory(t) {
        return new (t || PricetominPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PricetominPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PricetominPlanComponent,
        selectors: [["app-pricetomin-plan"]],
        viewQuery: function PricetominPlanComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 11,
        vars: 21,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "data-grid-options"], ["mat-raised-button", "", "color", "primary", 2, "border-radius", "30px", "padding", "5px", "margin", "5px", "float", "right", "margin-bottom", "10px", 3, "click"], ["color", "white", 2, "margin-left", "8px"], [2, "margin-right", "8px", "padding", "5px"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""]],
        template: function PricetominPlanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricetominPlanComponent_Template_button_click_3_listener() {
              return ctx.openAddDstNumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Price to Minute Plan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mtx-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function PricetominPlanComponent_Template_mtx_grid_sortChange_8_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function PricetominPlanComponent_Template_mtx_grid_selectionChange_8_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PricetominPlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Price to Minute Plan")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZXRvbWluLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });

      var AddPtominPlanFormComponent = /*#__PURE__*/function () {
        function AddPtominPlanFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddPtominPlanFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(AddPtominPlanFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this49 = this;

            if (this.adddstnumber.valid) {
              this.userService.adddstnumber(this.adddstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this49.snackBar.open('DST Number Added Successfully!', '', {
                  duration: 2000
                });

                _this49.adddstnumber.reset(); //this.adddstnumber.markAsUntouched();

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
            var _this50 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this50.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
          }
        }]);

        return AddPtominPlanFormComponent;
      }();

      AddPtominPlanFormComponent.ɵfac = function AddPtominPlanFormComponent_Factory(t) {
        return new (t || AddPtominPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddPtominPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPtominPlanFormComponent,
        selectors: [["add-ptomin-form"]],
        decls: 46,
        vars: 1,
        consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddPtominPlanFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Price to Minute Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Validity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "30 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Minute Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adddstnumber.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        styles: [_c1]
      });

      var EditPtominPlanFormComponent = /*#__PURE__*/function () {
        function EditPtominPlanFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditPtominPlanFormComponent);

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
            dstnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            inusestatus: [false]
          });
        }

        _createClass(EditPtominPlanFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            this.getallips();
            this.editdstnumber.setValue({
              ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
              dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
              inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('dstnumber').hasError('required') ? 'validations.required' : form.get('dstnumber').hasError('min') ? 'validations.min' : form.get('dstnumber').hasError('max') ? 'validations.max' : '';
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this51 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this51.allips = response.data;
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
            return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this52 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this52.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this52.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }]);

        return EditPtominPlanFormComponent;
      }();

      EditPtominPlanFormComponent.ɵfac = function EditPtominPlanFormComponent_Factory(t) {
        return new (t || EditPtominPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditPtominPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditPtominPlanFormComponent,
        selectors: [["edit-ptomin-form"]],
        decls: 0,
        vars: 0,
        template: function EditPtominPlanFormComponent_Template(rf, ctx) {},
        styles: [_c1]
      });
      /***/
    },

    /***/
    "ypkg":
    /*!****************************************************!*\
      !*** ./src/app/routes/plan/plan-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: PlanRoutingModule */

    /***/
    function ypkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlanRoutingModule", function () {
        return PlanRoutingModule;
      });
      /* harmony import */


      var _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./postpaid/postpaid.component */
      "wOWP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./postpaid-plan/postpaid-plan.component */
      "AzJj");
      /* harmony import */


      var _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./prepaid-plan/prepaid-plan.component */
      "tWdt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'prepaid-plan',
        component: _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_3__["PrepaidPlanComponent"],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }, {
        path: 'postpaid-plan',
        component: _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__["PostpaidPlanComponent"]
      }, {
        path: 'postpaid',
        component: _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_0__["PostpaidComponent"],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }];

      var PlanRoutingModule = function PlanRoutingModule() {
        _classCallCheck(this, PlanRoutingModule);
      };

      PlanRoutingModule.ɵfac = function PlanRoutingModule_Factory(t) {
        return new (t || PlanRoutingModule)();
      };

      PlanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: PlanRoutingModule
      });
      PlanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PlanRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=plan-plan-module-es5.js.map