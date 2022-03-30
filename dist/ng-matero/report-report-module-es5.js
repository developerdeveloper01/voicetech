(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"], {
    /***/
    "BQbq":
    /*!********************************************************!*\
      !*** ./src/app/routes/report/report-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ReportRoutingModule */

    /***/
    function BQbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function () {
        return ReportRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cdr/cdr.component */
      "hVHB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'cdr',
        component: _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["CdrComponent"]
      }];

      var ReportRoutingModule = function ReportRoutingModule() {
        _classCallCheck(this, ReportRoutingModule);
      };

      ReportRoutingModule.ɵfac = function ReportRoutingModule_Factory(t) {
        return new (t || ReportRoutingModule)();
      };

      ReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ReportRoutingModule
      });
      ReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "JMJj":
    /*!************************************************!*\
      !*** ./src/app/routes/report/report.module.ts ***!
      \************************************************/

    /*! exports provided: ReportModule */

    /***/
    function JMJj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportModule", function () {
        return ReportModule;
      });
      /* harmony import */


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-routing.module */
      "BQbq");
      /* harmony import */


      var _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cdr/cdr.component */
      "hVHB");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["CdrComponent"]];
      var COMPONENTS_DYNAMIC = [_cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["AddCdrFileFormComponent"], _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["EditCdrFileFormComponent"]];

      var ReportModule = function ReportModule() {
        _classCallCheck(this, ReportModule);
      };

      ReportModule.ɵfac = function ReportModule_Factory(t) {
        return new (t || ReportModule)();
      };

      ReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ReportModule
      });
      ReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReportRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportModule, {
          declarations: [_cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["CdrComponent"], _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["AddCdrFileFormComponent"], _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["EditCdrFileFormComponent"], _cdr_cdr_component__WEBPACK_IMPORTED_MODULE_1__["CdrComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReportRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "hVHB":
    /*!****************************************************!*\
      !*** ./src/app/routes/report/cdr/cdr.component.ts ***!
      \****************************************************/

    /*! exports provided: CdrComponent, AddCdrFileFormComponent, EditCdrFileFormComponent */

    /***/
    function hVHB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdrComponent", function () {
        return CdrComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCdrFileFormComponent", function () {
        return AddCdrFileFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCdrFileFormComponent", function () {
        return EditCdrFileFormComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");

      function CdrComponent_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, " ");
        }
      }

      function CdrComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r9.uuid, " ");
        }
      }

      function CdrComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r10.uuid, " ");
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var CdrComponent = /*#__PURE__*/function () {
        function CdrComponent(dialog, dialogx, userService, cdr, fb) {
          var _this = this;

          _classCallCheck(this, CdrComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.fb = fb;
          this.notinusestartingDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
          this.notinuseendDate = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
          this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
          this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
          this.columns = [{
            header: 'ID',
            sortable: true,
            field: 'id'
          }, {
            header: 'Caller ID',
            sortable: true,
            field: 'caller_id_name'
          }, {
            header: 'Destination Number',
            sortable: true,
            field: 'destination_number'
          }, {
            header: 'Context',
            sortable: true,
            hide: true,
            field: 'context'
          }, {
            header: 'Start Call',
            sortable: true,
            field: 'start_stamp'
          }, {
            header: 'Answer Stamp',
            sortable: true,
            hide: true,
            field: 'answer_stamp'
          }, {
            header: 'End Call',
            sortable: true,
            field: 'end_stamp'
          }, {
            header: 'Duration',
            sortable: true,
            hide: true,
            field: 'duration'
          }, {
            header: 'Bill',
            sortable: true,
            field: 'billsec'
          }, {
            header: 'Hangup Cause',
            sortable: true,
            hide: true,
            field: 'hangup_cause'
          }, {
            header: 'Call Unique ID',
            sortable: true,
            field: 'uuid',
            showExpand: true
          }, {
            header: 'Date',
            sortable: true,
            field: 'created_time'
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
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.options = ['1256', '4894', '4642', '8462', '8521'];
        }

        _createClass(CdrComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) {
              return _this2._filter(value);
            }));
            this.getallcdrreport(); //this.searchcdrreport();

            this.searchform = this.fb.group({
              startdate: [new Date(Date.now())],
              enddate: [Date.now()],
              searchinput: ['']
            });
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this3 = this;

            var dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
              width: '900px',
              data: {
                record: value
              }
            });

            var onOk = function onOk() {
              _this3.dialogx.alert('Closed');
            };

            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "openEditDstNumber",
          value: function openEditDstNumber(value) {
            var _this4 = this;

            var editdailogRef = this.dialog.open(EditCdrFileFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            editdailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this4.getallcdrreport();
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this5 = this;

            this.userService.deletenumber(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this5.isLoading = false;

              _this5.getallcdrreport();

              _this5.cdr.detectChanges();

              _this5.dialogx.alert("You have deleted ".concat(value.dstnumber, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this6 = this;

            var adddailogRef = this.dialog.open(AddCdrFileFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this6.getallcdrreport();
            });
          }
        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "getallcdrreport",
          value: function getallcdrreport() {
            var _this7 = this;

            var num = 1;
            this.userService.allcdrreport().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this7.list = response.data;
              _this7.total = response.data.length;
              _this7.isLoading = false;

              _this7.cdr.detectChanges();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "searchcdrreport",
          value: function searchcdrreport() {
            var _this8 = this;

            // var num = 2581;
            var someform = {
              oneinput: '61212581'
            };
            this.userService.searchreportbynumber(someform).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this8.list = response.data;
              _this8.total = response.data.length;
              _this8.isLoading = false;

              _this8.cdr.detectChanges();
            }, function (error) {
              console.log(error);
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
          key: "submitsearch",
          value: function submitsearch() {
            var _this9 = this;

            console.log(this.searchform.value);
            this.userService.searchreportbynumber(this.searchform.value).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this9.list = response.data;
              _this9.total = response.data.length;
              _this9.isLoading = false;

              _this9.cdr.detectChanges();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "pagechangeevent",
          value: function pagechangeevent(e) {
            console.log(e);
          }
        }, {
          key: "rowselection",
          value: function rowselection(e) {
            console.log(e);
          }
        }, {
          key: "cellselection",
          value: function cellselection(e) {
            console.log(e);
          }
        }, {
          key: "verNotificacion",
          value: function verNotificacion(e) {
            console.log(e);
          }
        }, {
          key: "expansion",
          value: function expansion(e) {
            console.log(e);
            var date = e.data.created_time.split(' ').slice(0, 1).join();
            var caller_id_number = e.data.caller_id_name;
            var destination_number = e.data.destination_number;
            var uuid = e.data.uuid;
            this.userService.getsinglerecording(date, caller_id_number, destination_number, uuid).subscribe(function (data) {
              console.log(data);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return CdrComponent;
      }();

      CdrComponent.ɵfac = function CdrComponent_Factory(t) {
        return new (t || CdrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      CdrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CdrComponent,
        selectors: [["app-cdr"]],
        viewQuery: function CdrComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 30,
        vars: 34,
        consts: [[3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "Start Date", "formControlName", "startdate", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "End Date", "formControlName", "enddate", 3, "matDatepicker", "min", "max"], ["picker2", ""], [1, "m-r-8"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", "formControlName", "searchinput", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", "color", "primary"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "summaryTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "page", "sortChange", "rowSelectionChange", "expansionChange", "cellSelectionChange", "rowClick"], ["expansionTpl", ""], ["summaryTpl", ""], [3, "value"]],
        template: function CdrComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CdrComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitsearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-autocomplete", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CdrComponent_mat_option_19_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mtx-grid", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function CdrComponent_Template_mtx_grid_page_25_listener($event) {
              return ctx.pagechangeevent($event);
            })("sortChange", function CdrComponent_Template_mtx_grid_sortChange_25_listener($event) {
              return ctx.changeSort($event);
            })("rowSelectionChange", function CdrComponent_Template_mtx_grid_rowSelectionChange_25_listener($event) {
              return ctx.rowselection($event);
            })("expansionChange", function CdrComponent_Template_mtx_grid_expansionChange_25_listener($event) {
              return ctx.expansion($event);
            })("cellSelectionChange", function CdrComponent_Template_mtx_grid_cellSelectionChange_25_listener($event) {
              return ctx.cellselection($event);
            })("rowClick", function CdrComponent_Template_mtx_grid_rowClick_25_listener($event) {
              return ctx.verNotificacion($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CdrComponent_ng_template_26_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CdrComponent_ng_template_28_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchform);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.notinuseendDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("min", ctx.searchform.value["startdate"])("max", ctx.notinuseendDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 31, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "CDR Reports")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r4)("summaryTemplate", _r6)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_16__["MtxGridComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZHIuY29tcG9uZW50LnNjc3MifQ== */"],
        changeDetection: 0
      });

      var AddCdrFileFormComponent = /*#__PURE__*/function () {
        function AddCdrFileFormComponent(fb, userService, snackBar) {
          _classCallCheck(this, AddCdrFileFormComponent);

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

        _createClass(AddCdrFileFormComponent, [{
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
            var _this10 = this;

            if (this.adddstnumber.valid) {
              this.userService.adddstnumber(this.adddstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this10.snackBar.open('DST Number Added Successfully!', '', {
                  duration: 2000
                });

                _this10.adddstnumber.reset(); //this.adddstnumber.markAsUntouched();

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
            var _this11 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this11.allips = response.data;
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

        return AddCdrFileFormComponent;
      }();

      AddCdrFileFormComponent.ɵfac = function AddCdrFileFormComponent_Factory(t) {
        return new (t || AddCdrFileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      AddCdrFileFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddCdrFileFormComponent,
        selectors: [["add-cdr-form"]],
        decls: 46,
        vars: 1,
        consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]],
        template: function AddCdrFileFormComponent_Template(rf, ctx) {
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
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        styles: [_c1]
      });

      var EditCdrFileFormComponent = /*#__PURE__*/function () {
        function EditCdrFileFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditCdrFileFormComponent);

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

        _createClass(EditCdrFileFormComponent, [{
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
            var _this12 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this12.allips = response.data;
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
            var _this13 = this;

            console.log(this.editdstnumber.value);

            if (this.editdstnumber.valid) {
              this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(function (response) {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);

                _this13.snackBar.open('IP Edited Successfully!', '', {
                  duration: 2000
                });

                _this13.editdstnumber.reset();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.editdstnumber);
            }
          }
        }]);

        return EditCdrFileFormComponent;
      }();

      EditCdrFileFormComponent.ɵfac = function EditCdrFileFormComponent_Factory(t) {
        return new (t || EditCdrFileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      EditCdrFileFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditCdrFileFormComponent,
        selectors: [["edit-cdr-form"]],
        decls: 0,
        vars: 0,
        template: function EditCdrFileFormComponent_Template(rf, ctx) {},
        styles: [_c1]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-report-module-es5.js.map