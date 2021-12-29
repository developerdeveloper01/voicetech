(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "SDwS":
    /*!********************************************************************!*\
      !*** ./src/app/routes/tables/remote-data/remote-data.component.ts ***!
      \********************************************************************/

    /*! exports provided: TablesRemoteDataComponent */

    /***/
    function SDwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRemoteDataComponent", function () {
        return TablesRemoteDataComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./remote-data.service */
      "cJDF");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
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

      var TablesRemoteDataComponent = /*#__PURE__*/function () {
        function TablesRemoteDataComponent(remoteSrv, cdr) {
          _classCallCheck(this, TablesRemoteDataComponent);

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

        _createClass(TablesRemoteDataComponent, [{
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

        return TablesRemoteDataComponent;
      }();

      TablesRemoteDataComponent.ɵfac = function TablesRemoteDataComponent_Factory(t) {
        return new (t || TablesRemoteDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      TablesRemoteDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TablesRemoteDataComponent,
        selectors: [["app-tables-remote-data"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])],
        decls: 25,
        vars: 12,
        consts: [[1, "bg-blue-600"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]],
        template: function TablesRemoteDataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesRemoteDataComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.query.q = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesRemoteDataComponent_Template_mat_select_ngModelChange_5_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesRemoteDataComponent_Template_mat_select_ngModelChange_15_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablesRemoteDataComponent_Template_button_click_22_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mtx-grid", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TablesRemoteDataComponent_Template_mtx_grid_page_24_listener($event) {
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
        styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVtb3RlLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoicmVtb3RlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm10eC1ncmlkIHtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG59XHJcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "U8iz":
    /*!***********************************************!*\
      !*** ./src/app/routes/tables/data.service.ts ***!
      \***********************************************/

    /*! exports provided: TablesDataService */

    /***/
    function U8iz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesDataService", function () {
        return TablesDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-12345678',
        city: 'New York',
        address: '555 Lexington Avenue',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Hydrogen@gmail.com'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        gender: 'male',
        mobile: '13034676675',
        tele: '010-23456781',
        city: 'Shanghai',
        address: '88 Songshan Road',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Helium@gmail.com'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        gender: 'male',
        mobile: '15376892233',
        tele: '010-34567812',
        city: 'Los Angeles',
        address: '48400 Seminole Dr.,Cabazon',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Lithium@gmail.com'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        gender: 'male',
        mobile: '13765443298',
        tele: '010-45678123',
        city: 'Beijing',
        address: 'chaoyang',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Beryllium@gmail.com'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-56781234',
        city: 'Berlin',
        address: 'Bernauer Str.111,13355',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Boron@gmail.com'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        gender: 'male',
        mobile: '13166665432',
        tele: '010-67812345',
        city: 'Madrid',
        address: 'Madrid International Exhibition Center',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Carbon@gmail.com'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        gender: 'male',
        mobile: '15811112222',
        tele: '010-78123456',
        city: 'Sydney',
        address: 'Circular Quay, Sydney NSW 2000',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Nitrogen@gmail.com'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        gender: 'male',
        mobile: '15044558899',
        tele: '010-81234567',
        city: 'Washington',
        address: 'University of Washington',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Oxygen@gmail.com'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        gender: 'male',
        mobile: '13198666677',
        tele: '010-12345678',
        city: 'London',
        address: 'unkown',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Fluorine@gmail.com'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        gender: 'male',
        mobile: '17098765432',
        tele: '010-12345678',
        city: 'Paris',
        address: 'Rue Croix des Petits Champs',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Neon@gmail.com'
      }, {
        position: 11,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        gender: 'male',
        mobile: '13166665432',
        tele: '010-23456781',
        city: 'Madrid',
        address: 'Madrid International Exhibition Center',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Carbon@gmail.com'
      }, {
        position: 12,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        gender: 'male',
        mobile: '15811112222',
        tele: '010-34567812',
        city: 'Sydney',
        address: 'Circular Quay, Sydney NSW 2000',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Nitrogen@gmail.com'
      }, {
        position: 13,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        gender: 'male',
        mobile: '15044558899',
        tele: '010-45678123',
        city: 'Washington',
        address: 'University of Washington',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Oxygen@gmail.com'
      }, {
        position: 14,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        gender: 'male',
        mobile: '13198666677',
        tele: '010-56781234',
        city: 'London',
        address: 'unkown',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Fluorine@gmail.com'
      }, {
        position: 15,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        gender: 'male',
        mobile: '17098765432',
        tele: '010-67812345',
        city: 'Paris',
        address: 'Rue Croix des Petits Champs',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Neon@gmail.com'
      }, {
        position: 16,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-78123456',
        city: 'New York',
        address: '555 Lexington Avenue',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Hydrogen@gmail.com'
      }, {
        position: 17,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        gender: 'male',
        mobile: '13034676675',
        tele: '010-81234567',
        city: 'Shanghai',
        address: '88 Songshan Road',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Helium@gmail.com'
      }, {
        position: 18,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        gender: 'male',
        mobile: '15376892233',
        tele: '010-12345678',
        city: 'Los Angeles',
        address: '48400 Seminole Dr.,Cabazon',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Lithium@gmail.com'
      }, {
        position: 19,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        gender: 'male',
        mobile: '13765443298',
        tele: '010-12345678',
        city: 'Beijing',
        address: 'chaoyang',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Beryllium@gmail.com'
      }, {
        position: 20,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        gender: 'male',
        mobile: '13198765432',
        tele: '010-23456781',
        city: 'Berlin',
        address: 'Bernauer Str.111,13355',
        birthday: '1607926887075',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Boron@gmail.com'
      }];

      var TablesDataService = /*#__PURE__*/function () {
        function TablesDataService() {
          _classCallCheck(this, TablesDataService);
        }

        _createClass(TablesDataService, [{
          key: "getData",
          value: function getData() {
            return ELEMENT_DATA;
          }
        }]);

        return TablesDataService;
      }();

      TablesDataService.ɵfac = function TablesDataService_Factory(t) {
        return new (t || TablesDataService)();
      };

      TablesDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TablesDataService,
        factory: TablesDataService.ɵfac
      });
      /***/
    },

    /***/
    "Zr7D":
    /*!********************************************************!*\
      !*** ./src/app/routes/tables/tables-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: TableRoutingModule */

    /***/
    function Zr7D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function () {
        return TableRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kitchen-sink/kitchen-sink.component */
      "s+pK");
      /* harmony import */


      var _remote_data_remote_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./remote-data/remote-data.component */
      "SDwS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'kitchen-sink',
        component: _kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_1__["TablesKitchenSinkComponent"]
      }, {
        path: 'remote-data',
        component: _remote_data_remote_data_component__WEBPACK_IMPORTED_MODULE_2__["TablesRemoteDataComponent"]
      }];

      var TableRoutingModule = function TableRoutingModule() {
        _classCallCheck(this, TableRoutingModule);
      };

      TableRoutingModule.ɵfac = function TableRoutingModule_Factory(t) {
        return new (t || TableRoutingModule)();
      };

      TableRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: TableRoutingModule
      });
      TableRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TableRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "cJDF":
    /*!******************************************************************!*\
      !*** ./src/app/routes/tables/remote-data/remote-data.service.ts ***!
      \******************************************************************/

    /*! exports provided: TablesRemoteDataService */

    /***/
    function cJDF(module, __webpack_exports__, __webpack_require__) {
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
    "s+pK":
    /*!**********************************************************************!*\
      !*** ./src/app/routes/tables/kitchen-sink/kitchen-sink.component.ts ***!
      \**********************************************************************/

    /*! exports provided: TablesKitchenSinkComponent */

    /***/
    function sPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesKitchenSinkComponent", function () {
        return TablesKitchenSinkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-matero/extensions/dialog */
      "r0g6");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data.service */
      "U8iz");
      /* harmony import */


      var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit/edit.component */
      "wwJg");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function TablesKitchenSinkComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, "\n");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 50, 100];
      };

      var TablesKitchenSinkComponent = /*#__PURE__*/function () {
        function TablesKitchenSinkComponent(translate, dataSrv, dialog, cdr) {
          var _this2 = this;

          _classCallCheck(this, TablesKitchenSinkComponent);

          this.translate = translate;
          this.dataSrv = dataSrv;
          this.dialog = dialog;
          this.cdr = cdr;
          this.columns = [{
            header: this.translate.stream('table_kitchen_sink.position'),
            field: 'position',
            sortable: true,
            minWidth: 100
          }, {
            header: this.translate.stream('table_kitchen_sink.name'),
            field: 'name',
            sortable: true,
            disabled: true,
            minWidth: 100
          }, {
            header: this.translate.stream('table_kitchen_sink.weight'),
            field: 'weight',
            minWidth: 100
          }, {
            header: this.translate.stream('table_kitchen_sink.symbol'),
            field: 'symbol',
            minWidth: 100
          }, {
            header: this.translate.stream('table_kitchen_sink.gender'),
            field: 'gender',
            minWidth: 100
          }, {
            header: this.translate.stream('table_kitchen_sink.mobile'),
            field: 'mobile',
            hide: true,
            minWidth: 120
          }, {
            header: this.translate.stream('table_kitchen_sink.tele'),
            field: 'tele',
            minWidth: 120,
            width: '120px'
          }, {
            header: this.translate.stream('table_kitchen_sink.birthday'),
            field: 'birthday',
            minWidth: 180
          }, {
            header: this.translate.stream('table_kitchen_sink.city'),
            field: 'city',
            minWidth: 120
          }, {
            header: this.translate.stream('table_kitchen_sink.address'),
            field: 'address',
            minWidth: 180,
            width: '200px'
          }, {
            header: this.translate.stream('table_kitchen_sink.company'),
            field: 'company',
            minWidth: 120
          }, {
            header: this.translate.stream('table_kitchen_sink.website'),
            field: 'website',
            minWidth: 180
          }, {
            header: this.translate.stream('table_kitchen_sink.email'),
            field: 'email',
            minWidth: 180
          }, {
            header: this.translate.stream('table_kitchen_sink.operation'),
            field: 'operation',
            minWidth: 120,
            width: '120px',
            pinned: 'right',
            type: 'button',
            buttons: [{
              type: 'icon',
              icon: 'edit',
              tooltip: this.translate.stream('table_kitchen_sink.edit'),
              click: function click(record) {
                return _this2.edit(record);
              }
            }, {
              color: 'warn',
              icon: 'delete',
              text: this.translate.stream('table_kitchen_sink.delete'),
              tooltip: this.translate.stream('table_kitchen_sink.delete'),
              pop: true,
              popTitle: this.translate.stream('table_kitchen_sink.confirm_delete'),
              popCloseText: this.translate.stream('table_kitchen_sink.close'),
              popOkText: this.translate.stream('table_kitchen_sink.ok'),
              click: function click(record) {
                return _this2["delete"](record);
              }
            }]
          }];
          this.list = [];
          this.isLoading = true;
          this.multiSelectable = true;
          this.rowSelectable = true;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = false;
          this.rowStriped = false;
          this.showPaginator = true;
          this.expandable = false;
          this.columnResizable = false;
        }

        _createClass(TablesKitchenSinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.list = this.dataSrv.getData();
            this.isLoading = false;
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var dialogRef = this.dialog.originalOpen(_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["TablesKitchenSinkEditComponent"], {
              width: '600px',
              data: {
                record: value
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              return console.log('The dialog was closed');
            });
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            this.dialog.alert("You have deleted ".concat(value.position, "!"));
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
          key: "enableRowExpandable",
          value: function enableRowExpandable() {
            this.columns[0].showExpand = this.expandable;
          }
        }, {
          key: "updateCell",
          value: function updateCell() {
            this.list = this.list.map(function (item) {
              item.weight = Math.round(Math.random() * 1000) / 100;
              return item;
            });
          }
        }, {
          key: "updateList",
          value: function updateList() {
            this.list = this.list.splice(-1).concat(this.list);
          }
        }]);

        return TablesKitchenSinkComponent;
      }();

      TablesKitchenSinkComponent.ɵfac = function TablesKitchenSinkComponent_Factory(t) {
        return new (t || TablesKitchenSinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["TablesDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_1__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      TablesKitchenSinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TablesKitchenSinkComponent,
        selectors: [["app-table-kitchen-sink"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_2__["TablesDataService"]])],
        decls: 39,
        vars: 35,
        consts: [[1, "bg-green-600"], [1, "data-grid-options"], [3, "ngModel", "ngModelChange"], [3, "value"], [3, "ngModel", "ngModelChange", "change"], ["href", "https://ng-matero.github.io/extensions/components/data-grid", "target", "_blank"], [3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""], ["mat-stroked-button", "", 3, "click"]],
        template: function TablesKitchenSinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_2_listener($event) {
              return ctx.rowSelectable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Row Selectable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_4_listener($event) {
              return ctx.hideRowSelectionCheckbox = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hide checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_radio_group_ngModelChange_6_listener($event) {
              return ctx.multiSelectable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Single Selectable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Multiple Selectable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_11_listener($event) {
              return ctx.showToolbar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Show Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_13_listener($event) {
              return ctx.columnHideable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Column Hiding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_15_listener($event) {
              return ctx.columnMovable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Column Moving");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_17_listener($event) {
              return ctx.rowHover = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_19_listener($event) {
              return ctx.rowStriped = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_21_listener($event) {
              return ctx.expandable = $event;
            })("change", function TablesKitchenSinkComponent_Template_mat_checkbox_change_21_listener() {
              return ctx.enableRowExpandable();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Row Expandable ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_23_listener($event) {
              return ctx.showPaginator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Show Paginator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_25_listener($event) {
              return ctx.isLoading = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Loading Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TablesKitchenSinkComponent_Template_mat_checkbox_ngModelChange_27_listener($event) {
              return ctx.columnResizable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Column Resizable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " View more examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mtx-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function TablesKitchenSinkComponent_Template_mtx_grid_sortChange_32_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function TablesKitchenSinkComponent_Template_mtx_grid_selectionChange_32_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TablesKitchenSinkComponent_ng_template_33_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablesKitchenSinkComponent_Template_button_click_35_listener() {
              return ctx.updateCell();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Update Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablesKitchenSinkComponent_Template_button_click_37_listener() {
              return ctx.updateList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Update List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rowSelectable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hideRowSelectionCheckbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.multiSelectable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showToolbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.columnHideable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.columnMovable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rowHover);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rowStriped);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expandable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showPaginator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.columnResizable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Data Grid Toolbar")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0))("pageIndex", 0)("pageSize", 5);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        styles: [".data-grid-options[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%], .data-grid-options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-checkbox, [dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-group {\n  margin-right: auto;\n  margin-left: 8px;\n}\n.data-grid-options[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-button {\n  margin-right: auto;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2l0Y2hlbi1zaW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLGlCQUFBO0FBQUo7QUFFSTs7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFETiIsImZpbGUiOiJraXRjaGVuLXNpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1ncmlkLW9wdGlvbnMge1xyXG4gIC5tYXQtY2hlY2tib3gsXHJcbiAgLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSA6aG9zdCA6Om5nLWRlZXAgJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG5cclxuICAgIFtkaXI9J3J0bCddIDpob3N0IDo6bmctZGVlcCAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "tl67":
    /*!************************************************!*\
      !*** ./src/app/routes/tables/tables.module.ts ***!
      \************************************************/

    /*! exports provided: TablesModule */

    /***/
    function tl67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tables-routing.module */
      "Zr7D");
      /* harmony import */


      var _kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./kitchen-sink/kitchen-sink.component */
      "s+pK");
      /* harmony import */


      var _kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./kitchen-sink/edit/edit.component */
      "wwJg");
      /* harmony import */


      var _remote_data_remote_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./remote-data/remote-data.component */
      "SDwS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_2__["TablesKitchenSinkComponent"], _remote_data_remote_data_component__WEBPACK_IMPORTED_MODULE_4__["TablesRemoteDataComponent"]];
      var COMPONENTS_DYNAMIC = [_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["TablesKitchenSinkEditComponent"]];

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.ɵfac = function TablesModule_Factory(t) {
        return new (t || TablesModule)();
      };

      TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: TablesModule
      });
      TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__["TableRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_kitchen_sink_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_2__["TablesKitchenSinkComponent"], _remote_data_remote_data_component__WEBPACK_IMPORTED_MODULE_4__["TablesRemoteDataComponent"], _kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["TablesKitchenSinkEditComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__["TableRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map