(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-service-module"], {
    /***/
    "2ugU":
    /*!***************************************************************************************!*\
      !*** ./src/app/routes/service/service/contact-operator/contact-operator.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ContactOperatorComponent */

    /***/
    function ugU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactOperatorComponent", function () {
        return ContactOperatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _contact_operator_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../contact-operator/remote-data.service */
      "FMyO");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ContactOperatorComponent = /*#__PURE__*/function () {
        function ContactOperatorComponent(remoteSrv, cdr) {
          _classCallCheck(this, ContactOperatorComponent);

          this.remoteSrv = remoteSrv;
          this.cdr = cdr;
          this.columns = [{
            header: 'Name',
            field: 'name',
            formatter: function formatter(data) {
              return "<a href=\"".concat(data.html_url, "\" target=\"_blank\">").concat(data.name, "</a>");
            }
          }, {
            header: 'Owner',
            field: 'owner.login'
          }, {
            header: 'Owner Avatar',
            field: 'owner.avatar_url',
            type: 'image'
          }, {
            header: 'Description',
            field: 'description',
            width: '300px'
          }, {
            header: 'Stars',
            field: 'stargazers_count',
            type: 'number'
          }, {
            header: 'Forks',
            field: 'forks_count',
            type: 'number'
          }, {
            header: 'Score',
            field: 'score',
            type: 'number'
          }, {
            header: 'Issues',
            field: 'open_issues',
            type: 'number'
          }, {
            header: 'Language',
            field: 'language'
          }, {
            header: 'License',
            field: 'license.name'
          }, {
            header: 'Home Page',
            field: 'homepage',
            type: 'link'
          }, {
            header: 'Is forked',
            field: 'fork',
            type: 'boolean'
          }, {
            header: 'Archived',
            field: 'archived',
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
            header: 'Created Date',
            field: 'created_at'
          }, {
            header: 'Updated Date',
            field: 'updated_at'
          }];
          this.list = [];
          this.total = 0;
          this.isLoading = true;
          this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10
          };
        }

        _createClass(ContactOperatorComponent, [{
          key: "params",
          get: function get() {
            var p = Object.assign({}, this.query);
            p.page += 1;
            return p;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this = this;

            this.isLoading = true;
            this.remoteSrv.getData(this.params).subscribe(function (res) {
              _this.list = res.items;
              _this.total = res.total_count;
              _this.isLoading = false;

              _this.cdr.detectChanges();
            }, function () {
              _this.isLoading = false;

              _this.cdr.detectChanges();
            }, function () {
              _this.isLoading = false;

              _this.cdr.detectChanges();
            });
          }
        }, {
          key: "getNextPage",
          value: function getNextPage(e) {
            this.query.page = e.pageIndex;
            this.query.per_page = e.pageSize;
            this.getData();
          }
        }, {
          key: "search",
          value: function search() {
            this.query.page = 0;
            this.getData();
          }
        }]);

        return ContactOperatorComponent;
      }();

      ContactOperatorComponent.ɵfac = function ContactOperatorComponent_Factory(t) {
        return new (t || ContactOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_operator_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ContactOperatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactOperatorComponent,
        selectors: [["app-contact-operator"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_contact_operator_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])],
        decls: 25,
        vars: 12,
        consts: [[1, "bg-blue-600"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]],
        template: function ContactOperatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactOperatorComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.query.q = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactOperatorComponent_Template_mat_select_ngModelChange_5_listener($event) {
              return ctx.query.sort = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "stars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "forks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "updated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactOperatorComponent_Template_mat_select_ngModelChange_15_listener($event) {
              return ctx.query.order = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactOperatorComponent_Template_button_click_22_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mtx-grid", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ContactOperatorComponent_Template_mtx_grid_page_24_listener($event) {
              return ctx.getNextPage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.q);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.sort);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.order);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]],
        styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3Qtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1vcGVyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubXR4LWdyaWQge1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "FMyO":
    /*!********************************************************************************!*\
      !*** ./src/app/routes/service/service/contact-operator/remote-data.service.ts ***!
      \********************************************************************************/

    /*! exports provided: TablesRemoteDataService */

    /***/
    function FMyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function () {
        return TablesRemoteDataService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TablesRemoteDataService = /*#__PURE__*/function () {
        function TablesRemoteDataService(http) {
          _classCallCheck(this, TablesRemoteDataService);

          this.http = http;
        }

        _createClass(TablesRemoteDataService, [{
          key: "getData",
          value: function getData() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get('https://api.github.com/search/repositories', {
              params: params
            });
          }
        }]);

        return TablesRemoteDataService;
      }();

      TablesRemoteDataService.ɵfac = function TablesRemoteDataService_Factory(t) {
        return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      TablesRemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TablesRemoteDataService,
        factory: TablesRemoteDataService.ɵfac
      });
      /***/
    },

    /***/
    "I2id":
    /*!**************************************************************************!*\
      !*** ./src/app/routes/service/service/live-calls/remote-data.service.ts ***!
      \**************************************************************************/

    /*! exports provided: TablesRemoteDataService */

    /***/
    function I2id(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function () {
        return TablesRemoteDataService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TablesRemoteDataService = /*#__PURE__*/function () {
        function TablesRemoteDataService(http) {
          _classCallCheck(this, TablesRemoteDataService);

          this.http = http;
        }

        _createClass(TablesRemoteDataService, [{
          key: "getData",
          value: function getData() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get('https://api.github.com/search/repositories', {
              params: params
            });
          }
        }]);

        return TablesRemoteDataService;
      }();

      TablesRemoteDataService.ɵfac = function TablesRemoteDataService_Factory(t) {
        return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      TablesRemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TablesRemoteDataService,
        factory: TablesRemoteDataService.ɵfac
      });
      /***/
    },

    /***/
    "KRmh":
    /*!***************************************************************************!*\
      !*** ./src/app/routes/service/service/monitoring/monitoring.component.ts ***!
      \***************************************************************************/

    /*! exports provided: MonitoringComponent */

    /***/
    function KRmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function () {
        return MonitoringComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/page-header/page-header.component */
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


      var _agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agent-table/agent-table.component */
      "dDqv");
      /* harmony import */


      var _queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./queue-table/queue-table.component */
      "+niU");

      var MonitoringComponent = /*#__PURE__*/function () {
        function MonitoringComponent() {
          _classCallCheck(this, MonitoringComponent);
        }

        _createClass(MonitoringComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MonitoringComponent;
      }();

      MonitoringComponent.ɵfac = function MonitoringComponent_Factory(t) {
        return new (t || MonitoringComponent)();
      };

      MonitoringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MonitoringComponent,
        selectors: [["app-monitoring"]],
        decls: 59,
        vars: 0,
        consts: [[1, "bg-blue-600"], [1, "m--16"], ["label", "Aero"], [1, "m-16"], [1, "row"], [1, "col-lg-12", "align-center"], [1, "col-lg-8"], [1, "col-lg-4"], ["label", "OLA"], ["label", "OLATFN"], ["label", "Schoolivr"]],
        template: function MonitoringComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Live Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Agents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-agent-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Queue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-queue-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Live Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Agents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-agent-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Queue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-queue-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Live Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Agents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-agent-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Queue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-queue-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-tab", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Live Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Agents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-agent-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Queue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-queue-table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_4__["AgentTableComponent"], _queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_5__["QueueTableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "cM6g":
    /*!***************************************************************************!*\
      !*** ./src/app/routes/service/service/live-calls/live-calls.component.ts ***!
      \***************************************************************************/

    /*! exports provided: LiveCallsComponent */

    /***/
    function cM6g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveCallsComponent", function () {
        return LiveCallsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _live_calls_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../live-calls/remote-data.service */
      "I2id");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var LiveCallsComponent = /*#__PURE__*/function () {
        function LiveCallsComponent(remoteSrv, cdr) {
          _classCallCheck(this, LiveCallsComponent);

          this.remoteSrv = remoteSrv;
          this.cdr = cdr;
          this.columns = [{
            header: 'INDEX',
            field: 'index',
            formatter: function formatter(data) {
              return "<a href=\"".concat(data.html_url, "\" target=\"_blank\">").concat(data.name, "</a>");
            }
          }, {
            header: 'NAME',
            field: 'name'
          }, {
            header: 'FROM',
            field: 'from'
          }, {
            header: 'IP',
            field: 'ip'
          }, {
            header: 'TO',
            field: 'to',
            type: 'number'
          }, {
            header: 'CREATED TIME',
            field: 'created time',
            type: 'number'
          }, {
            header: 'STATUS',
            field: 'status'
          }, {
            header: 'TALK TIME',
            field: 'talk time',
            type: 'number'
          }];
          this.list = [];
          this.total = 0;
          this.isLoading = true;
          this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10
          };
        }

        _createClass(LiveCallsComponent, [{
          key: "params",
          get: function get() {
            var p = Object.assign({}, this.query);
            p.page += 1;
            return p;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this2 = this;

            this.isLoading = true;
            this.remoteSrv.getData(this.params).subscribe(function (res) {
              _this2.list = res.items;
              _this2.total = res.total_count;
              _this2.isLoading = false;

              _this2.cdr.detectChanges();
            }, function () {
              _this2.isLoading = false;

              _this2.cdr.detectChanges();
            }, function () {
              _this2.isLoading = false;

              _this2.cdr.detectChanges();
            });
          }
        }, {
          key: "getNextPage",
          value: function getNextPage(e) {
            this.query.page = e.pageIndex;
            this.query.per_page = e.pageSize;
            this.getData();
          }
        }, {
          key: "search",
          value: function search() {
            this.query.page = 0;
            this.getData();
          }
        }]);

        return LiveCallsComponent;
      }();

      LiveCallsComponent.ɵfac = function LiveCallsComponent_Factory(t) {
        return new (t || LiveCallsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_live_calls_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      LiveCallsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LiveCallsComponent,
        selectors: [["app-live-calls"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_live_calls_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])],
        decls: 25,
        vars: 12,
        consts: [[1, "bg-blue-600"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]],
        template: function LiveCallsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LiveCallsComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.query.q = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LiveCallsComponent_Template_mat_select_ngModelChange_5_listener($event) {
              return ctx.query.sort = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "stars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "forks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "updated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LiveCallsComponent_Template_mat_select_ngModelChange_15_listener($event) {
              return ctx.query.order = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "asc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LiveCallsComponent_Template_button_click_22_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mtx-grid", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function LiveCallsComponent_Template_mtx_grid_page_24_listener($event) {
              return ctx.getNextPage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.q);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.sort);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.order);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]],
        styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpdmUtY2FsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoibGl2ZS1jYWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubXR4LWdyaWQge1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "k3Tg":
    /*!**********************************************************!*\
      !*** ./src/app/routes/service/service/service.module.ts ***!
      \**********************************************************/

    /*! exports provided: ServiceModule */

    /***/
    function k3Tg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
        return ServiceModule;
      });
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _service_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service-routing.module */
      "n0XL");
      /* harmony import */


      var _live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./live-calls/live-calls.component */
      "cM6g");
      /* harmony import */


      var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./monitoring/monitoring.component */
      "KRmh");
      /* harmony import */


      var _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact-operator/contact-operator.component */
      "2ugU");
      /* harmony import */


      var _monitoring_agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./monitoring/agent-table/agent-table.component */
      "dDqv");
      /* harmony import */


      var _monitoring_queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./monitoring/queue-table/queue-table.component */
      "+niU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__["LiveCallsComponent"], _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"], _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__["ContactOperatorComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var ServiceModule = function ServiceModule() {
        _classCallCheck(this, ServiceModule);
      };

      ServiceModule.ɵfac = function ServiceModule_Factory(t) {
        return new (t || ServiceModule)();
      };

      ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: ServiceModule
      });
      ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiceRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ServiceModule, {
          declarations: [_live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__["LiveCallsComponent"], _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"], _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__["ContactOperatorComponent"], _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__["ContactOperatorComponent"], _monitoring_agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_5__["AgentTableComponent"], _monitoring_queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_6__["QueueTableComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiceRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "n0XL":
    /*!******************************************************************!*\
      !*** ./src/app/routes/service/service/service-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ServiceRoutingModule */

    /***/
    function n0XL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function () {
        return ServiceRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-operator/contact-operator.component */
      "2ugU");
      /* harmony import */


      var _live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./live-calls/live-calls.component */
      "cM6g");
      /* harmony import */


      var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./monitoring/monitoring.component */
      "KRmh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'contact-operator',
        component: _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_1__["ContactOperatorComponent"]
      }, {
        path: 'live-call',
        component: _live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__["LiveCallsComponent"]
      }, {
        path: 'monitoring',
        component: _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"]
      }];

      var ServiceRoutingModule = function ServiceRoutingModule() {
        _classCallCheck(this, ServiceRoutingModule);
      };

      ServiceRoutingModule.ɵfac = function ServiceRoutingModule_Factory(t) {
        return new (t || ServiceRoutingModule)();
      };

      ServiceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ServiceRoutingModule
      });
      ServiceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ServiceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=service-service-service-module-es5.js.map