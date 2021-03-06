(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-service-module"],{

/***/ "2ugU":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/service/service/contact-operator/contact-operator.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ContactOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactOperatorComponent", function() { return ContactOperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_operator_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-operator/remote-data.service */ "FMyO");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");












const _c0 = function () { return [5, 10, 20]; };
class ContactOperatorComponent {
    constructor(remoteSrv, cdr) {
        this.remoteSrv = remoteSrv;
        this.cdr = cdr;
        this.columns = [
            {
                header: 'Name',
                field: 'name',
                formatter: (data) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
            },
            { header: 'Owner', field: 'owner.login' },
            { header: 'Owner Avatar', field: 'owner.avatar_url', type: 'image' },
            { header: 'Description', field: 'description', width: '300px' },
            { header: 'Stars', field: 'stargazers_count', type: 'number' },
            { header: 'Forks', field: 'forks_count', type: 'number' },
            { header: 'Score', field: 'score', type: 'number' },
            { header: 'Issues', field: 'open_issues', type: 'number' },
            { header: 'Language', field: 'language' },
            { header: 'License', field: 'license.name' },
            { header: 'Home Page', field: 'homepage', type: 'link' },
            { header: 'Is forked', field: 'fork', type: 'boolean' },
            {
                header: 'Archived',
                field: 'archived',
                type: 'tag',
                tag: {
                    true: { text: 'Yes', color: 'red-100' },
                    false: { text: 'No', color: 'green-100' },
                },
            },
            { header: 'Created Date', field: 'created_at' },
            { header: 'Updated Date', field: 'updated_at' },
        ];
        this.list = [];
        this.total = 0;
        this.isLoading = true;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10,
        };
    }
    get params() {
        const p = Object.assign({}, this.query);
        p.page += 1;
        return p;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.isLoading = true;
        this.remoteSrv.getData(this.params).subscribe(res => {
            this.list = res.items;
            this.total = res.total_count;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    getNextPage(e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    }
    search() {
        this.query.page = 0;
        this.getData();
    }
}
ContactOperatorComponent.??fac = function ContactOperatorComponent_Factory(t) { return new (t || ContactOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_contact_operator_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ContactOperatorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactOperatorComponent, selectors: [["app-contact-operator"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_contact_operator_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])], decls: 25, vars: 12, consts: [[1, "bg-blue-600"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]], template: function ContactOperatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactOperatorComponent_Template_input_ngModelChange_3_listener($event) { return ctx.query.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactOperatorComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.query.sort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ContactOperatorComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.query.order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContactOperatorComponent_Template_button_click_22_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mtx-grid", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function ContactOperatorComponent_Template_mtx_grid_page_24_listener($event) { return ctx.getNextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]], styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3Qtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1vcGVyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubXR4LWdyaWQge1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "FMyO":
/*!********************************************************************************!*\
  !*** ./src/app/routes/service/service/contact-operator/remote-data.service.ts ***!
  \********************************************************************************/
/*! exports provided: TablesRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function() { return TablesRemoteDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TablesRemoteDataService {
    constructor(http) {
        this.http = http;
    }
    getData(params = {}) {
        return this.http.get('https://api.github.com/search/repositories', { params });
    }
}
TablesRemoteDataService.??fac = function TablesRemoteDataService_Factory(t) { return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TablesRemoteDataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: TablesRemoteDataService, factory: TablesRemoteDataService.??fac });


/***/ }),

/***/ "I2id":
/*!**************************************************************************!*\
  !*** ./src/app/routes/service/service/live-calls/remote-data.service.ts ***!
  \**************************************************************************/
/*! exports provided: TablesRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function() { return TablesRemoteDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TablesRemoteDataService {
    constructor(http) {
        this.http = http;
    }
    getData(params = {}) {
        return this.http.get('https://api.github.com/search/repositories', { params });
    }
}
TablesRemoteDataService.??fac = function TablesRemoteDataService_Factory(t) { return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TablesRemoteDataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: TablesRemoteDataService, factory: TablesRemoteDataService.??fac });


/***/ }),

/***/ "KRmh":
/*!***************************************************************************!*\
  !*** ./src/app/routes/service/service/monitoring/monitoring.component.ts ***!
  \***************************************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent-table/agent-table.component */ "dDqv");
/* harmony import */ var _queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue-table/queue-table.component */ "+niU");






class MonitoringComponent {
    constructor() { }
    ngOnInit() {
    }
}
MonitoringComponent.??fac = function MonitoringComponent_Factory(t) { return new (t || MonitoringComponent)(); };
MonitoringComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MonitoringComponent, selectors: [["app-monitoring"]], decls: 59, vars: 0, consts: [[1, "bg-blue-600"], [1, "m--16"], ["label", "Aero"], [1, "m-16"], [1, "row"], [1, "col-lg-12", "align-center"], [1, "col-lg-8"], [1, "col-lg-4"], ["label", "OLA"], ["label", "OLATFN"], ["label", "Schoolivr"]], template: function MonitoringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Live Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "app-agent-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-queue-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Live Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "app-agent-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "app-queue-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Live Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "app-agent-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "app-queue-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Live Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "app-agent-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-queue-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_4__["AgentTableComponent"], _queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_5__["QueueTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "cM6g":
/*!***************************************************************************!*\
  !*** ./src/app/routes/service/service/live-calls/live-calls.component.ts ***!
  \***************************************************************************/
/*! exports provided: LiveCallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveCallsComponent", function() { return LiveCallsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _live_calls_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live-calls/remote-data.service */ "I2id");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");












const _c0 = function () { return [5, 10, 20]; };
class LiveCallsComponent {
    constructor(remoteSrv, cdr) {
        this.remoteSrv = remoteSrv;
        this.cdr = cdr;
        this.columns = [
            {
                header: 'INDEX',
                field: 'index',
                formatter: (data) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
            },
            { header: 'NAME', field: 'name' },
            { header: 'FROM', field: 'from', },
            { header: 'IP', field: 'ip' },
            { header: 'TO', field: 'to', type: 'number' },
            { header: 'CREATED TIME', field: 'created time', type: 'number' },
            { header: 'STATUS', field: 'status', },
            { header: 'TALK TIME', field: 'talk time', type: 'number' },
        ];
        this.list = [];
        this.total = 0;
        this.isLoading = true;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10,
        };
    }
    get params() {
        const p = Object.assign({}, this.query);
        p.page += 1;
        return p;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.isLoading = true;
        this.remoteSrv.getData(this.params).subscribe(res => {
            this.list = res.items;
            this.total = res.total_count;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    getNextPage(e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    }
    search() {
        this.query.page = 0;
        this.getData();
    }
}
LiveCallsComponent.??fac = function LiveCallsComponent_Factory(t) { return new (t || LiveCallsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_live_calls_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LiveCallsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LiveCallsComponent, selectors: [["app-live-calls"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_live_calls_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])], decls: 25, vars: 12, consts: [[1, "bg-blue-600"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]], template: function LiveCallsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LiveCallsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.query.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LiveCallsComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.query.sort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LiveCallsComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.query.order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LiveCallsComponent_Template_button_click_22_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mtx-grid", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function LiveCallsComponent_Template_mtx_grid_page_24_listener($event) { return ctx.getNextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]], styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpdmUtY2FsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoibGl2ZS1jYWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubXR4LWdyaWQge1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "k3Tg":
/*!**********************************************************!*\
  !*** ./src/app/routes/service/service/service.module.ts ***!
  \**********************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-routing.module */ "n0XL");
/* harmony import */ var _live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-calls/live-calls.component */ "cM6g");
/* harmony import */ var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitoring/monitoring.component */ "KRmh");
/* harmony import */ var _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-operator/contact-operator.component */ "2ugU");
/* harmony import */ var _monitoring_agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitoring/agent-table/agent-table.component */ "dDqv");
/* harmony import */ var _monitoring_queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitoring/queue-table/queue-table.component */ "+niU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








const COMPONENTS = [_live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__["LiveCallsComponent"], _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"], _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__["ContactOperatorComponent"]];
const COMPONENTS_DYNAMIC = [];
class ServiceModule {
}
ServiceModule.??fac = function ServiceModule_Factory(t) { return new (t || ServiceModule)(); };
ServiceModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: ServiceModule });
ServiceModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _service_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiceRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](ServiceModule, { declarations: [_live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__["LiveCallsComponent"], _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"], _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__["ContactOperatorComponent"], _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_4__["ContactOperatorComponent"], _monitoring_agent_table_agent_table_component__WEBPACK_IMPORTED_MODULE_5__["AgentTableComponent"], _monitoring_queue_table_queue_table_component__WEBPACK_IMPORTED_MODULE_6__["QueueTableComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _service_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiceRoutingModule"]] }); })();


/***/ }),

/***/ "n0XL":
/*!******************************************************************!*\
  !*** ./src/app/routes/service/service/service-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function() { return ServiceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-operator/contact-operator.component */ "2ugU");
/* harmony import */ var _live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-calls/live-calls.component */ "cM6g");
/* harmony import */ var _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitoring/monitoring.component */ "KRmh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [{ path: 'contact-operator', component: _contact_operator_contact_operator_component__WEBPACK_IMPORTED_MODULE_1__["ContactOperatorComponent"] }, { path: 'live-call', component: _live_calls_live_calls_component__WEBPACK_IMPORTED_MODULE_2__["LiveCallsComponent"] }, { path: 'monitoring', component: _monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["MonitoringComponent"] }];
class ServiceRoutingModule {
}
ServiceRoutingModule.??fac = function ServiceRoutingModule_Factory(t) { return new (t || ServiceRoutingModule)(); };
ServiceRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ServiceRoutingModule });
ServiceRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ServiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=service-service-service-module-es2015.js.map