(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-plan-module"],{

/***/ "AzJj":
/*!**********************************************************************!*\
  !*** ./src/app/routes/plan/postpaid-plan/postpaid-plan.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostpaidPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpaidPlanComponent", function() { return PostpaidPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validity-plan/validity-plan.component */ "t7ID");
/* harmony import */ var _pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricetomin-plan/pricetomin-plan.component */ "x6Fs");
/* harmony import */ var _minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minute-plan/minute-plan.component */ "FbvI");







class PostpaidPlanComponent {
    constructor() { }
    ngOnInit() { }
}
PostpaidPlanComponent.ɵfac = function PostpaidPlanComponent_Factory(t) { return new (t || PostpaidPlanComponent)(); };
PostpaidPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostpaidPlanComponent, selectors: [["app-postpaid-plan"]], decls: 12, vars: 0, consts: [[1, "m--16"], ["label", "Validity Plan"], [1, "m-16"], ["label", "Price to Minute Plan"], ["label", "Minute Plan"]], template: function PostpaidPlanComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["ValidityPlanComponent"], _pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["PricetominPlanComponent"], _minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["MinutePlanComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cGFpZC1wbGFuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "FbvI":
/*!********************************************************************************!*\
  !*** ./src/app/routes/plan/postpaid-plan/minute-plan/minute-plan.component.ts ***!
  \********************************************************************************/
/*! exports provided: MinutePlanComponent, AddMinutePlanFormComponent, EditMinutePlanFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinutePlanComponent", function() { return MinutePlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMinutePlanFormComponent", function() { return AddMinutePlanFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMinutePlanFormComponent", function() { return EditMinutePlanFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/user.service */ "xdv0");
/* harmony import */ var app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/routes/tables/kitchen-sink/edit/edit.component */ "wwJg");
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions */ "ld3Y");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function MinutePlanComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, " ");
} }
const _c0 = function () { return [50, 100, 200, 500]; };
const _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";
class MinutePlanComponent {
    constructor(dialog, dialogx, userService, cdr) {
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.userService = userService;
        this.cdr = cdr;
        this.columns = [
            { header: 'Validity Plan', sortable: true, field: 'validityplan' },
            { header: 'Price', sortable: true, field: 'price' },
            {
                header: 'Active Status',
                field: 'inusestatus',
                type: 'tag',
                sortable: true,
                tag: {
                    true: { text: 'Yes', color: 'green-200' },
                    false: { text: 'No', color: 'red-200' },
                },
            },
            {
                header: 'Actions',
                field: 'action',
                minWidth: 120,
                width: '120px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'edit',
                        click: record => this.openEditDstNumber(record),
                    },
                    {
                        color: 'warn',
                        icon: 'delete',
                        text: 'delete',
                        tooltip: 'delete',
                        pop: true,
                        popTitle: 'Confirm Delete',
                        popCloseText: 'Cancel',
                        popOkText: 'Delete',
                        click: record => this.delete(record),
                    },
                ],
            },
        ];
        //table
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
    ngOnInit() {
        this.getallnumbers();
    }
    edit(value) {
        const dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
            width: '900px',
            data: { record: value },
        });
        const onOk = () => {
            this.dialogx.alert('Closed');
        };
        dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
    }
    openEditDstNumber(value) {
        let editdailogRef = this.dialog.open(EditMinutePlanFormComponent, {
            width: '500px',
            data: { record: value },
        });
        editdailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    delete(value) {
        this.userService.deletenumber(value._id).subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.isLoading = false;
            this.getallnumbers();
            this.cdr.detectChanges();
            this.dialogx.alert(`You have deleted ${value.dstnumber}!`);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    openAddDstNumber() {
        let adddailogRef = this.dialog.open(AddMinutePlanFormComponent, { width: '500px' });
        adddailogRef.afterClosed().subscribe(() => {
            this.getallnumbers();
        });
    }
    changeSelect(e) {
        console.log(e);
    }
    changeSort(e) {
        console.log(e);
    }
    getallnumbers() {
        this.userService.getalldstnumbers().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.list = response.data;
            this.total = response.data.length;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    ngAfterViewInit() {
        this.isLoading = false;
    }
    ngOnDestroy() {
        console.log('component destroyed');
    }
}
MinutePlanComponent.ɵfac = function MinutePlanComponent_Factory(t) { return new (t || MinutePlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MinutePlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MinutePlanComponent, selectors: [["app-minute-plan"]], viewQuery: function MinutePlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 21, consts: [[1, "row"], [1, "col-lg-12"], [1, "data-grid-options"], ["mat-raised-button", "", "color", "primary", 2, "border-radius", "30px", "padding", "5px", "margin", "5px", "float", "right", "margin-bottom", "10px", 3, "click"], ["color", "white", 2, "margin-left", "8px"], [2, "margin-right", "8px", "padding", "5px"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""]], template: function MinutePlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinutePlanComponent_Template_button_click_3_listener() { return ctx.openAddDstNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Price to Minute Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mtx-grid", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function MinutePlanComponent_Template_mtx_grid_sortChange_8_listener($event) { return ctx.changeSort($event); })("selectionChange", function MinutePlanComponent_Template_mtx_grid_selectionChange_8_listener($event) { return ctx.changeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MinutePlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Minute Plan")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaW51dGUtcGxhbi5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
class AddMinutePlanFormComponent {
    constructor(fb, userService, snackBar) {
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        this.getallips();
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitdstnumber() {
        if (this.adddstnumber.valid) {
            this.userService.adddstnumber(this.adddstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('DST Number Added Successfully!', '', { duration: 2000 });
                this.adddstnumber.reset();
                //this.adddstnumber.markAsUntouched();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.adddstnumber);
        }
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    isFieldValid(field) {
        return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
    }
}
AddMinutePlanFormComponent.ɵfac = function AddMinutePlanFormComponent_Factory(t) { return new (t || AddMinutePlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddMinutePlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMinutePlanFormComponent, selectors: [["add-minute-form"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]], template: function AddMinutePlanFormComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adddstnumber.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [_c1] });
class EditMinutePlanFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
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
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.getallips();
        this.editdstnumber.setValue({
            ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
            dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
            inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false,
        });
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    isFieldValid(field) {
        return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
    }
    submitdstnumber() {
        console.log(this.editdstnumber.value);
        if (this.editdstnumber.valid) {
            this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
                this.editdstnumber.reset();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.editdstnumber);
        }
    }
}
EditMinutePlanFormComponent.ɵfac = function EditMinutePlanFormComponent_Factory(t) { return new (t || EditMinutePlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditMinutePlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditMinutePlanFormComponent, selectors: [["edit-minute-form"]], decls: 0, vars: 0, template: function EditMinutePlanFormComponent_Template(rf, ctx) { }, styles: [_c1] });


/***/ }),

/***/ "jCtq":
/*!********************************************!*\
  !*** ./src/app/routes/plan/plan.module.ts ***!
  \********************************************/
/*! exports provided: PlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanModule", function() { return PlanModule; });
/* harmony import */ var _plan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-routing.module */ "ypkg");
/* harmony import */ var _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prepaid-plan/prepaid-plan.component */ "tWdt");
/* harmony import */ var _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postpaid-plan/postpaid-plan.component */ "AzJj");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postpaid-plan/validity-plan/validity-plan.component */ "t7ID");
/* harmony import */ var _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postpaid-plan/pricetomin-plan/pricetomin-plan.component */ "x6Fs");
/* harmony import */ var _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postpaid-plan/minute-plan/minute-plan.component */ "FbvI");
/* harmony import */ var _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postpaid/postpaid.component */ "wOWP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









const COMPONENTS = [
    _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["PrepaidPlanComponent"],
    _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__["PostpaidPlanComponent"],
    _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["PostpaidComponent"],
    _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["ValidityPlanComponent"],
    _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["PricetominPlanComponent"],
    _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["MinutePlanComponent"],
    _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidFormComponent"],
    _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidplanOneFormComponent"],
    _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["EditPostpaidplanOneFormComponent"],
];
const COMPONENTS_DYNAMIC = [
    _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["AddValidityPlanFormComponent"],
    _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["EditValidityPlanFormComponent"],
    _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidplanOneFormComponent"],
    _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["AddPtominPlanFormComponent"],
    _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["EditPtominPlanFormComponent"],
    _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddMinutePlanFormComponent"],
    _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["EditMinutePlanFormComponent"],
    _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidFormComponent"],
];
class PlanModule {
}
PlanModule.ɵfac = function PlanModule_Factory(t) { return new (t || PlanModule)(); };
PlanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PlanModule });
PlanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _plan_routing_module__WEBPACK_IMPORTED_MODULE_0__["PlanRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PlanModule, { declarations: [_prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["PrepaidPlanComponent"],
        _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__["PostpaidPlanComponent"],
        _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["PostpaidComponent"],
        _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["ValidityPlanComponent"],
        _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["PricetominPlanComponent"],
        _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["MinutePlanComponent"],
        _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidFormComponent"],
        _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["AddPostpaidplanOneFormComponent"],
        _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["EditPostpaidplanOneFormComponent"], _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["AddValidityPlanFormComponent"],
        _postpaid_plan_validity_plan_validity_plan_component__WEBPACK_IMPORTED_MODULE_4__["EditValidityPlanFormComponent"],
        _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidplanOneFormComponent"],
        _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["AddPtominPlanFormComponent"],
        _postpaid_plan_pricetomin_plan_pricetomin_plan_component__WEBPACK_IMPORTED_MODULE_5__["EditPtominPlanFormComponent"],
        _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddMinutePlanFormComponent"],
        _postpaid_plan_minute_plan_minute_plan_component__WEBPACK_IMPORTED_MODULE_6__["EditMinutePlanFormComponent"],
        _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_1__["AddPrepaidFormComponent"], _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_7__["PostpaidComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _plan_routing_module__WEBPACK_IMPORTED_MODULE_0__["PlanRoutingModule"]] }); })();


/***/ }),

/***/ "t7ID":
/*!************************************************************************************!*\
  !*** ./src/app/routes/plan/postpaid-plan/validity-plan/validity-plan.component.ts ***!
  \************************************************************************************/
/*! exports provided: ValidityPlanComponent, AddValidityPlanFormComponent, EditValidityPlanFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidityPlanComponent", function() { return ValidityPlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddValidityPlanFormComponent", function() { return AddValidityPlanFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditValidityPlanFormComponent", function() { return EditValidityPlanFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/user.service */ "xdv0");
/* harmony import */ var app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/routes/tables/kitchen-sink/edit/edit.component */ "wwJg");
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions */ "ld3Y");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function ValidityPlanComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, " ");
} }
const _c0 = function () { return [50, 100, 200, 500]; };
const _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";
class ValidityPlanComponent {
    constructor(dialog, dialogx, userService, cdr) {
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.userService = userService;
        this.cdr = cdr;
        this.columns = [
            { header: 'Validity Plan', sortable: true, field: 'validityplan' },
            { header: 'Price', sortable: true, field: 'price' },
            {
                header: 'Active Status',
                field: 'inusestatus',
                type: 'tag',
                sortable: true,
                tag: {
                    true: { text: 'Yes', color: 'green-200' },
                    false: { text: 'No', color: 'red-200' },
                },
            },
            {
                header: 'Actions',
                field: 'action',
                minWidth: 120,
                width: '120px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'edit',
                        click: record => this.openEditDstNumber(record),
                    },
                    {
                        color: 'warn',
                        icon: 'delete',
                        text: 'delete',
                        tooltip: 'delete',
                        pop: true,
                        popTitle: 'Confirm Delete',
                        popCloseText: 'Cancel',
                        popOkText: 'Delete',
                        click: record => this.delete(record),
                    },
                ],
            },
        ];
        //table
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
    ngOnInit() {
        this.getallnumbers();
    }
    edit(value) {
        const dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
            width: '900px',
            data: { record: value },
        });
        const onOk = () => {
            this.dialogx.alert('Closed');
        };
        dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
    }
    openEditDstNumber(value) {
        let editdailogRef = this.dialog.open(EditValidityPlanFormComponent, {
            width: '500px',
            data: { record: value },
        });
        editdailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    delete(value) {
        this.userService.deletenumber(value._id).subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.isLoading = false;
            this.getallnumbers();
            this.cdr.detectChanges();
            this.dialogx.alert(`You have deleted ${value.dstnumber}!`);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    openAddDstNumber() {
        let adddailogRef = this.dialog.open(AddValidityPlanFormComponent, { width: '500px' });
        adddailogRef.afterClosed().subscribe(() => {
            this.getallnumbers();
        });
    }
    changeSelect(e) {
        console.log(e);
    }
    changeSort(e) {
        console.log(e);
    }
    getallnumbers() {
        this.userService.getalldstnumbers().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.list = response.data;
            this.total = response.data.length;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    ngAfterViewInit() {
        this.isLoading = false;
    }
    ngOnDestroy() {
        console.log('component destroyed');
    }
}
ValidityPlanComponent.ɵfac = function ValidityPlanComponent_Factory(t) { return new (t || ValidityPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ValidityPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidityPlanComponent, selectors: [["app-validity-plan"]], viewQuery: function ValidityPlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 21, consts: [[1, "row"], [1, "col-lg-12"], [1, "data-grid-options"], ["mat-raised-button", "", "color", "primary", 2, "border-radius", "30px", "padding", "5px", "margin", "5px", "float", "right", "margin-bottom", "10px", 3, "click"], ["color", "white", 2, "margin-left", "8px"], [2, "margin-right", "8px", "padding", "5px"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""]], template: function ValidityPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidityPlanComponent_Template_button_click_3_listener() { return ctx.openAddDstNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Validity Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mtx-grid", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function ValidityPlanComponent_Template_mtx_grid_sortChange_8_listener($event) { return ctx.changeSort($event); })("selectionChange", function ValidityPlanComponent_Template_mtx_grid_selectionChange_8_listener($event) { return ctx.changeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ValidityPlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Validity Plan")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"]], styles: [".data-grid-options[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%], .data-grid-options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-checkbox, [dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-group {\n  margin-right: auto;\n  margin-left: 8px;\n}\n.data-grid-options[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]     .data-grid-options .mat-radio-button {\n  margin-right: auto;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhbGlkaXR5LXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0VBRUUsaUJBQUE7QUFBTjtBQUVNOztFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURSIiwiZmlsZSI6InZhbGlkaXR5LXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1ncmlkLW9wdGlvbnMge1xyXG4gICAgLm1hdC1jaGVja2JveCxcclxuICAgIC5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBcclxuICAgICAgW2Rpcj0ncnRsJ10gOmhvc3QgOjpuZy1kZWVwICYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIFxyXG4gICAgICBbZGlyPSdydGwnXSA6aG9zdCA6Om5nLWRlZXAgJiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"], changeDetection: 0 });
class AddValidityPlanFormComponent {
    constructor(fb, userService, snackBar) {
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        this.getallips();
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitdstnumber() {
        if (this.adddstnumber.valid) {
            this.userService.adddstnumber(this.adddstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('DST Number Added Successfully!', '', { duration: 2000 });
                this.adddstnumber.reset();
                //this.adddstnumber.markAsUntouched();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.adddstnumber);
        }
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    isFieldValid(field) {
        return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
    }
}
AddValidityPlanFormComponent.ɵfac = function AddValidityPlanFormComponent_Factory(t) { return new (t || AddValidityPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddValidityPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddValidityPlanFormComponent, selectors: [["add-validity-form"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]], template: function AddValidityPlanFormComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adddstnumber.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [_c1] });
class EditValidityPlanFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
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
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.getallips();
        this.editdstnumber.setValue({
            ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
            dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
            inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false,
        });
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    isFieldValid(field) {
        return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
    }
    submitdstnumber() {
        console.log(this.editdstnumber.value);
        if (this.editdstnumber.valid) {
            this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
                this.editdstnumber.reset();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.editdstnumber);
        }
    }
}
EditValidityPlanFormComponent.ɵfac = function EditValidityPlanFormComponent_Factory(t) { return new (t || EditValidityPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditValidityPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditValidityPlanFormComponent, selectors: [["edit-validity-form"]], decls: 0, vars: 0, template: function EditValidityPlanFormComponent_Template(rf, ctx) { }, styles: [_c1] });


/***/ }),

/***/ "tWdt":
/*!********************************************************************!*\
  !*** ./src/app/routes/plan/prepaid-plan/prepaid-plan.component.ts ***!
  \********************************************************************/
/*! exports provided: PrepaidPlanComponent, AddPrepaidplanOneFormComponent, EditPrepaidplanOneFormComponent, AddPrepaidFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepaidPlanComponent", function() { return PrepaidPlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrepaidplanOneFormComponent", function() { return AddPrepaidplanOneFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPrepaidplanOneFormComponent", function() { return EditPrepaidplanOneFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrepaidFormComponent", function() { return AddPrepaidFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/user.service */ "xdv0");
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-matero/extensions */ "ld3Y");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function PrepaidPlanComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrepaidPlanComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openAddPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrepaidPlanComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.filterSearch = $event; })("ngModelChange", function PrepaidPlanComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.searchData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filterSearch);
} }
const _c0 = function () { return [50, 100, 200, 500]; };
const _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";
function AddPrepaidFormComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
} }
function AddPrepaidFormComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.addprepaidplan), " ");
} }
class PrepaidPlanComponent {
    constructor(dialog, dialogx, userService, cdr) {
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.userService = userService;
        this.cdr = cdr;
        this.columns = [
            { header: 'Plan type', sortable: true, field: 'plantype' },
            { header: 'Plan Title', sortable: true, field: 'plantitle' },
            { header: 'Price (Rs)', sortable: true, field: 'planprice' },
            { header: 'Validity (Days)', sortable: true, field: 'validityday' },
            { header: 'Balance (Minutes)', sortable: true, field: 'minute_balance' },
            { header: 'Description', sortable: true, field: 'desc' },
            {
                header: 'Actions',
                field: 'action',
                minWidth: 180,
                width: '180px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        color: 'primary',
                        icon: 'visibility',
                        tooltip: 'view',
                        click: record => this.view(record),
                    },
                    {
                        type: 'icon',
                        color: 'accent',
                        icon: 'edit',
                        tooltip: 'edit',
                        click: record => this.edit(record),
                    },
                    {
                        color: 'warn',
                        icon: 'delete',
                        text: 'delete',
                        tooltip: 'delete',
                        pop: true,
                        popTitle: 'Confirm Delete',
                        popCloseText: 'Cancel',
                        popOkText: 'Delete',
                        click: record => this.delete(record),
                    },
                ],
            },
        ];
        //table
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
    ngOnInit() {
        this.getallnumbers();
    }
    view(value) {
        console.log(value);
    }
    edit(data) {
        console.log(data);
        let adddailogRef = this.dialog.open(AddPrepaidplanOneFormComponent, {
            width: '500px',
            data: { record: data },
        });
        adddailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    openEditDstNumber(value) {
        let editdailogRef = this.dialog.open(EditPrepaidplanOneFormComponent, {
            width: '500px',
            data: { record: value },
        });
        editdailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    delete(value) {
        this.userService.deleteplan(value._id).subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.isLoading = false;
            this.getallnumbers();
            this.cdr.detectChanges();
            this.dialogx.alert(`You have deleted ${value.plantitle}!`);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    openAddPlan() {
        let adddailogRef = this.dialog.open(AddPrepaidplanOneFormComponent, { width: '500px' });
        adddailogRef.afterClosed().subscribe(() => {
            this.cdr.detectChanges();
            this.getallnumbers();
        });
    }
    changeSelect(e) {
        console.log(e);
    }
    changeSort(e) {
        console.log(e);
    }
    searchData(searchValue) {
        if (searchValue) {
            this.filteredData = this.list.filter((item) => {
                return (item.plantitle.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.desc.toLowerCase().includes(searchValue.toLowerCase()));
            });
        }
        else {
            this.filteredData = null;
            this.getallnumbers();
            this.getallnumbers();
        }
    }
    getallnumbers() {
        this.userService.getallplans().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.list = response.data;
            this.total = response.data.length;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    ngAfterViewInit() {
        this.isLoading = false;
    }
    ngOnDestroy() {
        console.log('component destroyed');
    }
}
PrepaidPlanComponent.ɵfac = function PrepaidPlanComponent_Factory(t) { return new (t || PrepaidPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PrepaidPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrepaidPlanComponent, selectors: [["app-prepaid-plan"]], viewQuery: function PrepaidPlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 7, vars: 21, consts: [[1, "bg-blue-600"], [1, "m-16"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"]], template: function PrepaidPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mtx-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function PrepaidPlanComponent_Template_mtx_grid_sortChange_4_listener($event) { return ctx.changeSort($event); })("selectionChange", function PrepaidPlanComponent_Template_mtx_grid_selectionChange_4_listener($event) { return ctx.changeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrepaidPlanComponent_ng_template_5_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.filteredData || ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Validity Plan")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVwYWlkLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
class AddPrepaidplanOneFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.editmode = false;
        this.addplan = this.fb.group({
            plantype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            planprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            validityday: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            minute_balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addplan.setValue({
                plantype: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.plantype) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.plantype : 'null',
                plantitle: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.plantitle) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.plantitle : 'null',
                planprice: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.planprice) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.planprice : 'null',
                validityday: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.validityday) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.validityday : 'null',
                minute_balance: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.minute_balance) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.minute_balance : 'null',
                desc: ((_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.record) === null || _z === void 0 ? void 0 : _z.desc) ? (_1 = (_0 = this.data) === null || _0 === void 0 ? void 0 : _0.record) === null || _1 === void 0 ? void 0 : _1.desc : 'null',
            });
        }
    }
    ngOnInit() { }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitdstnumber() {
        if (this.editmode) {
            console.log(this.addplan.value);
            this.userService.editplan(this.id, this.addplan.value).subscribe((response) => {
                console.log(response);
                this.snackBar.open('Plan Edited Successfully!', '', { duration: 2000 });
                this.addplan.reset();
            }, error => {
                console.log(error);
            });
        }
        else {
            if (this.addplan.valid) {
                this.userService.addplan(this.addplan.value).subscribe((response) => {
                    console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                    this.snackBar.open('Plan Added Successfully!', '', { duration: 2000 });
                    this.addplan.reset();
                }, error => {
                    console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
                });
            }
            else {
                this.getErrorMessage(this.addplan);
            }
        }
    }
    isFieldValid(field) {
        return !this.addplan.get(field).valid && this.addplan.get(field).touched;
    }
}
AddPrepaidplanOneFormComponent.ɵfac = function AddPrepaidplanOneFormComponent_Factory(t) { return new (t || AddPrepaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
AddPrepaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPrepaidplanOneFormComponent, selectors: [["add-prepaidplan-form"]], decls: 46, vars: 3, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Plan type", "formControlName", "plantype", "required", ""], ["matInput", "", "type", "text", "placeholder", "Plan Title", "formControlName", "plantitle", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "planprice", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Validity", "formControlName", "validityday", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "minute_balance", "required", ""], ["matInput", "", "type", "text", "placeholder", "Plan Price", "formControlName", "desc", "required", ""], ["mat-raised-button", "", "cdkFocusInitial", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function AddPrepaidplanOneFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPrepaidplanOneFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submitdstnumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Plan Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Validity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Minute Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editmode ? "Add Validity Plan" : "Add Validity Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addplan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addplan.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [_c1] });
class EditPrepaidplanOneFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
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
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.getallips();
        this.editdstnumber.setValue({
            ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
            dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
            inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false,
        });
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    isFieldValid(field) {
        return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
    }
    submitdstnumber() {
        console.log(this.editdstnumber.value);
        if (this.editdstnumber.valid) {
            this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
                this.editdstnumber.reset();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.editdstnumber);
        }
    }
    openAddPrepaid() {
        // let adddailogRef = this.dialog.open(AddPrepaidFormComponent, { width: '500px' });
        // adddailogRef.afterClosed().subscribe(() => {
        //   this.getallplans();
        // });
    }
    getallplans() {
        this.userService.getallplans().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
}
EditPrepaidplanOneFormComponent.ɵfac = function EditPrepaidplanOneFormComponent_Factory(t) { return new (t || EditPrepaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditPrepaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPrepaidplanOneFormComponent, selectors: [["edit-prepaidplan-form"]], decls: 0, vars: 0, template: function EditPrepaidplanOneFormComponent_Template(rf, ctx) { }, styles: [_c1] });
class AddPrepaidFormComponent {
    constructor(fb, userService, snackBar) {
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.addprepaidplan = this.fb.group({
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        this.getallips();
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitprepaid() {
        if (this.addprepaidplan.valid) {
            this.userService.addplan(this.addprepaidplan.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('Plan Added Successfully!', '', { duration: 2000 });
                this.addprepaidplan.reset();
                //this.addprepaidplan.markAsUntouched();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.addprepaidplan);
        }
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    isFieldValid(field) {
        return !this.addprepaidplan.get(field).valid && this.addprepaidplan.get(field).touched;
    }
}
AddPrepaidFormComponent.ɵfac = function AddPrepaidFormComponent_Factory(t) { return new (t || AddPrepaidFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddPrepaidFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPrepaidFormComponent, selectors: [["add-prepaid-form"]], decls: 25, vars: 5, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "Neron", "formControlName", "title", "required", ""], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "xxx.xxx.xxx.xxx", "formControlName", "ipnumber", "required", ""], ["formControlName", "activestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]], template: function AddPrepaidFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPrepaidFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submitprepaid(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddPrepaidFormComponent_Template_mat_checkbox_change_18_listener($event) { return ctx.checkboxChange($event.source, $event.checked); });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: [_c1] });


/***/ }),

/***/ "wOWP":
/*!************************************************************!*\
  !*** ./src/app/routes/plan/postpaid/postpaid.component.ts ***!
  \************************************************************/
/*! exports provided: PostpaidComponent, AddPostpaidplanOneFormComponent, EditPostpaidplanOneFormComponent, AddPostpaidFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpaidComponent", function() { return PostpaidComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostpaidplanOneFormComponent", function() { return AddPostpaidplanOneFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostpaidplanOneFormComponent", function() { return EditPostpaidplanOneFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostpaidFormComponent", function() { return AddPostpaidFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/user.service */ "xdv0");
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-matero/extensions */ "ld3Y");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
























function PostpaidComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostpaidComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openAddPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostpaidComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.filterSearch = $event; })("ngModelChange", function PostpaidComponent_ng_template_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.searchData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filterSearch);
} }
const _c0 = function () { return [50, 100, 200, 500]; };
function EditPostpaidplanOneFormComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ip_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ip_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ip_r3.ipnumber, " ");
} }
function EditPostpaidplanOneFormComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
} }
function EditPostpaidplanOneFormComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.getErrorMessage(ctx_r2.editdstnumber)), " ");
} }
const _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";
function AddPostpaidFormComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
} }
function AddPostpaidFormComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.addpospaidplan), " ");
} }
class PostpaidComponent {
    constructor(dialog, dialogx, userService, cdr) {
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.userService = userService;
        this.cdr = cdr;
        this.columns = [
            { header: 'Plan Type', sortable: true, field: 'plantype' },
            { header: 'Plan Title', sortable: true, field: 'plantitle' },
            { header: 'Price (Rs)', sortable: true, field: 'planprice' },
            { header: 'Validity (Days)', sortable: true, field: 'validityday' },
            { header: 'Balance (Minutes)', sortable: true, field: 'minute_balance' },
            { header: 'Description', sortable: true, field: 'desc' },
            {
                header: 'Actions',
                field: 'action',
                minWidth: 180,
                width: '180px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        color: 'primary',
                        icon: 'visibility',
                        tooltip: 'view',
                        click: record => this.view(record),
                    },
                    {
                        type: 'icon',
                        color: 'accent',
                        icon: 'edit',
                        tooltip: 'edit',
                        click: record => this.edit(record),
                    },
                    {
                        color: 'warn',
                        icon: 'delete',
                        text: 'delete',
                        tooltip: 'delete',
                        pop: true,
                        popTitle: 'Confirm Delete',
                        popCloseText: 'Cancel',
                        popOkText: 'Delete',
                        click: record => this.delete(record),
                    },
                ],
            },
        ];
        //table
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
    ngOnInit() {
        this.getallnumbers();
    }
    view(value) {
        console.log(value);
    }
    edit(data) {
        console.log(data);
        let adddailogRef = this.dialog.open(AddPostpaidplanOneFormComponent, {
            width: '500px',
            data: { record: data },
        });
        adddailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    openEditDstNumber(value) {
        let editdailogRef = this.dialog.open(EditPostpaidplanOneFormComponent, {
            width: '500px',
            data: { record: value },
        });
        editdailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    delete(value) {
        this.userService.deletepospaidplan(value._id).subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.isLoading = false;
            this.getallnumbers();
            this.cdr.detectChanges();
            this.dialogx.alert(`You have deleted ${value.plantitle}!`);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    openAddPlan() {
        let adddailogRef = this.dialog.open(AddPostpaidplanOneFormComponent, { width: '500px' });
        adddailogRef.afterClosed().subscribe(() => {
            this.cdr.detectChanges();
            this.getallnumbers();
        });
    }
    changeSelect(e) {
        console.log(e);
    }
    changeSort(e) {
        console.log(e);
    }
    searchData(searchValue) {
        if (searchValue) {
            this.filteredData = this.list.filter((item) => {
                return (item.plantitle.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.desc.toLowerCase().includes(searchValue.toLowerCase()));
            });
        }
        else {
            this.filteredData = null;
            this.getallnumbers();
            this.getallnumbers();
        }
    }
    getallnumbers() {
        this.userService.getallpospaidplan().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.list = response.data;
            this.total = response.data.length;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    ngAfterViewInit() {
        this.isLoading = false;
    }
    ngOnDestroy() {
        console.log('component destroyed');
    }
}
PostpaidComponent.ɵfac = function PostpaidComponent_Factory(t) { return new (t || PostpaidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_6__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PostpaidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostpaidComponent, selectors: [["app-postpaid"]], viewQuery: function PostpaidComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 7, vars: 21, consts: [[1, "bg-blue-600"], [1, "m-16"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"]], template: function PostpaidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mtx-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function PostpaidComponent_Template_mtx_grid_sortChange_4_listener($event) { return ctx.changeSort($event); })("selectionChange", function PostpaidComponent_Template_mtx_grid_selectionChange_4_listener($event) { return ctx.changeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostpaidComponent_ng_template_5_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.filteredData || ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Validity Plan")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_8__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cGFpZC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
class AddPostpaidplanOneFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.editmode = false;
        this.addpospaidplan = this.fb.group({
            plantype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            planprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            validityday: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            minute_balance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.addpospaidplan.setValue({
                plantype: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.plantype) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.plantype : 'null',
                plantitle: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.plantitle) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.plantitle : 'null',
                planprice: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.planprice) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.planprice : 'null',
                validityday: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.validityday) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.validityday : 'null',
                minute_balance: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.minute_balance) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.minute_balance : 'null',
                desc: ((_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.record) === null || _z === void 0 ? void 0 : _z.desc) ? (_1 = (_0 = this.data) === null || _0 === void 0 ? void 0 : _0.record) === null || _1 === void 0 ? void 0 : _1.desc : 'null',
            });
        }
    }
    ngOnInit() { }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitdstnumber() {
        if (this.editmode) {
            console.log(this.addpospaidplan.value);
            this.userService.editpospaidplan(this.id, this.addpospaidplan.value).subscribe((response) => {
                console.log(response);
                this.snackBar.open('Plan Edited Successfully!', '', { duration: 2000 });
                this.addpospaidplan.reset();
            }, error => {
                console.log(error);
            });
        }
        else {
            if (this.addpospaidplan.valid) {
                this.userService.addpospaidplan(this.addpospaidplan.value).subscribe((response) => {
                    console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                    this.snackBar.open('Plan Added Successfully!', '', { duration: 2000 });
                    this.addpospaidplan.reset();
                }, error => {
                    console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
                });
            }
            else {
                this.getErrorMessage(this.addpospaidplan);
            }
        }
    }
    isFieldValid(field) {
        return !this.addpospaidplan.get(field).valid && this.addpospaidplan.get(field).touched;
    }
}
AddPostpaidplanOneFormComponent.ɵfac = function AddPostpaidplanOneFormComponent_Factory(t) { return new (t || AddPostpaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
AddPostpaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostpaidplanOneFormComponent, selectors: [["add-postpaidplan-form"]], decls: 46, vars: 3, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Plan Type", "formControlName", "plantype", "required", ""], ["matInput", "", "type", "text", "placeholder", "Plan Title", "formControlName", "plantitle", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "planprice", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Validity", "formControlName", "validityday", "required", ""], ["matInput", "", "type", "number", "placeholder", "Plan Price", "formControlName", "minute_balance", "required", ""], ["matInput", "", "type", "text", "placeholder", "Plan Price", "formControlName", "desc", "required", ""], ["mat-raised-button", "", "cdkFocusInitial", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function AddPostpaidplanOneFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPostpaidplanOneFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submitdstnumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plan Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Plan Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Validity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Minute Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editmode ? "Add postpaid Plan" : "Add postpaid plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addpospaidplan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addpospaidplan.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [_c1] });
class EditPostpaidplanOneFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
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
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.getallips();
        this.editdstnumber.setValue({
            ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
            dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
            inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false,
        });
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    isFieldValid(field) {
        return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
    }
    submitdstnumber() {
        console.log(this.editdstnumber.value);
        if (this.editdstnumber.valid) {
            this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
                this.editdstnumber.reset();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.editdstnumber);
        }
    }
    openAddpospaid() {
        // let adddailogRef = this.dialog.open(AddPrepaidFormComponent, { width: '500px' });
        // adddailogRef.afterClosed().subscribe(() => {
        //   this.getallplans();
        // });
    }
    getallpospaidplan() {
        this.userService.getallpospaidplan().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
}
EditPostpaidplanOneFormComponent.ɵfac = function EditPostpaidplanOneFormComponent_Factory(t) { return new (t || EditPostpaidplanOneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditPostpaidplanOneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPostpaidplanOneFormComponent, selectors: [["edit-postpaidplan-form"]], decls: 26, vars: 6, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["formControlName", "ip", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "number", "matInput", "", "placeholder", "991515000", "formControlName", "dstnumber", "required", ""], ["formControlName", "inusestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", "cdkFocusInitial", "", "type", "submit", 3, "disabled"], [3, "value"]], template: function EditPostpaidplanOneFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit DST Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPostpaidplanOneFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submitdstnumber(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditPostpaidplanOneFormComponent_Template_mat_checkbox_change_19_listener($event) { return ctx.checkboxChange($event.source, $event.checked); });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: [_c1] });
class AddPostpaidFormComponent {
    constructor(fb, userService, snackBar) {
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.addpospaidplan = this.fb.group({
            plantitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        this.getallips();
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitpospaid() {
        if (this.addpospaidplan.valid) {
            this.userService.addpospaidplan(this.addpospaidplan.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('Plan Added Successfully!', '', { duration: 2000 });
                this.addpospaidplan.reset();
                //this.addprepaidplan.markAsUntouched();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.addpospaidplan);
        }
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    isFieldValid(field) {
        return !this.addpospaidplan.get(field).valid && this.addpospaidplan.get(field).touched;
    }
}
AddPostpaidFormComponent.ɵfac = function AddPostpaidFormComponent_Factory(t) { return new (t || AddPostpaidFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddPostpaidFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostpaidFormComponent, selectors: [["add-postpaid-form"]], decls: 25, vars: 5, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "Neron", "formControlName", "title", "required", ""], [4, "ngIf"], ["cellspacing", "0", 1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "xxx.xxx.xxx.xxx", "formControlName", "ipnumber", "required", ""], ["formControlName", "activestatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]], template: function AddPostpaidFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPostpaidFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submitpospaid(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddPostpaidFormComponent_Template_mat_checkbox_change_18_listener($event) { return ctx.checkboxChange($event.source, $event.checked); });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: [_c1] });


/***/ }),

/***/ "x6Fs":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/plan/postpaid-plan/pricetomin-plan/pricetomin-plan.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PricetominPlanComponent, AddPtominPlanFormComponent, EditPtominPlanFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricetominPlanComponent", function() { return PricetominPlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPtominPlanFormComponent", function() { return AddPtominPlanFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPtominPlanFormComponent", function() { return EditPtominPlanFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/user.service */ "xdv0");
/* harmony import */ var app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/routes/tables/kitchen-sink/edit/edit.component */ "wwJg");
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions */ "ld3Y");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function PricetominPlanComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r2.name, " ");
} }
const _c0 = function () { return [50, 100, 200, 500]; };
const _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";
class PricetominPlanComponent {
    constructor(dialog, dialogx, userService, cdr) {
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.userService = userService;
        this.cdr = cdr;
        this.columns = [
            { header: 'Validity Plan', sortable: true, field: 'validityplan' },
            { header: 'Price', sortable: true, field: 'price' },
            {
                header: 'Active Status',
                field: 'inusestatus',
                type: 'tag',
                sortable: true,
                tag: {
                    true: { text: 'Yes', color: 'green-200' },
                    false: { text: 'No', color: 'red-200' },
                },
            },
            {
                header: 'Actions',
                field: 'action',
                minWidth: 120,
                width: '120px',
                pinned: 'right',
                type: 'button',
                buttons: [
                    {
                        type: 'icon',
                        icon: 'edit',
                        tooltip: 'edit',
                        click: record => this.openEditDstNumber(record),
                    },
                    {
                        color: 'warn',
                        icon: 'delete',
                        text: 'delete',
                        tooltip: 'delete',
                        pop: true,
                        popTitle: 'Confirm Delete',
                        popCloseText: 'Cancel',
                        popOkText: 'Delete',
                        click: record => this.delete(record),
                    },
                ],
            },
        ];
        //table
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
    ngOnInit() {
        this.getallnumbers();
    }
    edit(value) {
        const dialogRef = this.dialogx.originalOpen(app_routes_tables_kitchen_sink_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["TablesKitchenSinkEditComponent"], {
            width: '900px',
            data: { record: value },
        });
        const onOk = () => {
            this.dialogx.alert('Closed');
        };
        dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
    }
    openEditDstNumber(value) {
        let editdailogRef = this.dialog.open(EditPtominPlanFormComponent, {
            width: '500px',
            data: { record: value },
        });
        editdailogRef.afterClosed().subscribe(() => {
            console.log('The edit dailog closed');
            this.getallnumbers();
        });
    }
    delete(value) {
        this.userService.deletenumber(value._id).subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.isLoading = false;
            this.getallnumbers();
            this.cdr.detectChanges();
            this.dialogx.alert(`You have deleted ${value.dstnumber}!`);
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    openAddDstNumber() {
        let adddailogRef = this.dialog.open(AddPtominPlanFormComponent, { width: '500px' });
        adddailogRef.afterClosed().subscribe(() => {
            this.getallnumbers();
        });
    }
    changeSelect(e) {
        console.log(e);
    }
    changeSort(e) {
        console.log(e);
    }
    getallnumbers() {
        this.userService.getalldstnumbers().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.list = response.data;
            this.total = response.data.length;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    ngAfterViewInit() {
        this.isLoading = false;
    }
    ngOnDestroy() {
        console.log('component destroyed');
    }
}
PricetominPlanComponent.ɵfac = function PricetominPlanComponent_Factory(t) { return new (t || PricetominPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PricetominPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricetominPlanComponent, selectors: [["app-pricetomin-plan"]], viewQuery: function PricetominPlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 11, vars: 21, consts: [[1, "row"], [1, "col-lg-12"], [1, "data-grid-options"], ["mat-raised-button", "", "color", "primary", 2, "border-radius", "30px", "padding", "5px", "margin", "5px", "float", "right", "margin-bottom", "10px", 3, "click"], ["color", "white", 2, "margin-left", "8px"], [2, "margin-right", "8px", "padding", "5px"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""]], template: function PricetominPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricetominPlanComponent_Template_button_click_3_listener() { return ctx.openAddDstNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Price to Minute Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mtx-grid", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function PricetominPlanComponent_Template_mtx_grid_sortChange_8_listener($event) { return ctx.changeSort($event); })("selectionChange", function PricetominPlanComponent_Template_mtx_grid_selectionChange_8_listener($event) { return ctx.changeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PricetominPlanComponent_ng_template_9_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Price to Minute Plan")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("pageIndex", 0)("pageSize", 50);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZXRvbWluLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
class AddPtominPlanFormComponent {
    constructor(fb, userService, snackBar) {
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.falseValue = 'false';
        this.trueValue = 'true';
        this.adddstnumber = this.fb.group({
            ip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        this.getallips();
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    submitdstnumber() {
        if (this.adddstnumber.valid) {
            this.userService.adddstnumber(this.adddstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('DST Number Added Successfully!', '', { duration: 2000 });
                this.adddstnumber.reset();
                //this.adddstnumber.markAsUntouched();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.adddstnumber);
        }
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    isFieldValid(field) {
        return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
    }
}
AddPtominPlanFormComponent.ɵfac = function AddPtominPlanFormComponent_Factory(t) { return new (t || AddPtominPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AddPtominPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPtominPlanFormComponent, selectors: [["add-ptomin-form"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "row"], [1, "col-lg-12"], [2, "width", "100%"], ["matInput", "", "placeholder", "Plan Title", "formControlName", "", "required", ""], ["matInput", "", "placeholder", "Plan Price", "formControlName", "", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "disabled"]], template: function AddPtominPlanFormComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adddstnumber.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [_c1] });
class EditPtominPlanFormComponent {
    constructor(fb, userService, snackBar, dialogRef, data) {
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
            dstnumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)],
            ],
            inusestatus: [false],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.getallips();
        this.editdstnumber.setValue({
            ip: ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.ip) ? (_e = (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.ip) === null || _e === void 0 ? void 0 : _e._id : 'null',
            dstnumber: ((_g = (_f = this.data) === null || _f === void 0 ? void 0 : _f.record) === null || _g === void 0 ? void 0 : _g.dstnumber) ? (_j = (_h = this.data) === null || _h === void 0 ? void 0 : _h.record) === null || _j === void 0 ? void 0 : _j.dstnumber : 'null',
            inusestatus: ((_l = (_k = this.data) === null || _k === void 0 ? void 0 : _k.record) === null || _l === void 0 ? void 0 : _l.inusestatus) ? true : false,
        });
    }
    getErrorMessage(form) {
        return form.get('dstnumber').hasError('required')
            ? 'validations.required'
            : form.get('dstnumber').hasError('min')
                ? 'validations.min'
                : form.get('dstnumber').hasError('max')
                    ? 'validations.max'
                    : '';
    }
    getallips() {
        this.userService.getallips().subscribe((response) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.allips = response.data;
        }, error => {
            console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
        });
    }
    checkboxChange(checkbox, checked) {
        checkbox.value = checked ? this.trueValue : this.falseValue;
    }
    isFieldValid(field) {
        return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
    }
    submitdstnumber() {
        console.log(this.editdstnumber.value);
        if (this.editdstnumber.valid) {
            this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe((response) => {
                console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
                this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
                this.editdstnumber.reset();
            }, error => {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
        }
        else {
            this.getErrorMessage(this.editdstnumber);
        }
    }
}
EditPtominPlanFormComponent.ɵfac = function EditPtominPlanFormComponent_Factory(t) { return new (t || EditPtominPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditPtominPlanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPtominPlanFormComponent, selectors: [["edit-ptomin-form"]], decls: 0, vars: 0, template: function EditPtominPlanFormComponent_Template(rf, ctx) { }, styles: [_c1] });


/***/ }),

/***/ "ypkg":
/*!****************************************************!*\
  !*** ./src/app/routes/plan/plan-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PlanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanRoutingModule", function() { return PlanRoutingModule; });
/* harmony import */ var _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postpaid/postpaid.component */ "wOWP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postpaid-plan/postpaid-plan.component */ "AzJj");
/* harmony import */ var _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prepaid-plan/prepaid-plan.component */ "tWdt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'prepaid-plan',
        component: _prepaid_plan_prepaid_plan_component__WEBPACK_IMPORTED_MODULE_3__["PrepaidPlanComponent"],
        data: {
            permissions: {
                only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
                redirectTo: '/dashboard',
            },
        },
    },
    { path: 'postpaid-plan', component: _postpaid_plan_postpaid_plan_component__WEBPACK_IMPORTED_MODULE_2__["PostpaidPlanComponent"] },
    {
        path: 'postpaid',
        component: _postpaid_postpaid_component__WEBPACK_IMPORTED_MODULE_0__["PostpaidComponent"],
        data: {
            permissions: {
                only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
                redirectTo: '/dashboard',
            },
        },
    },
];
class PlanRoutingModule {
}
PlanRoutingModule.ɵfac = function PlanRoutingModule_Factory(t) { return new (t || PlanRoutingModule)(); };
PlanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PlanRoutingModule });
PlanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PlanRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=plan-plan-module-es2015.js.map