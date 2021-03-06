(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-module"], {
    /***/
    "3fML":
    /*!***********************************************************!*\
      !*** ./src/app/routes/staff/staff/remote-data.service.ts ***!
      \***********************************************************/

    /*! exports provided: TablesRemoteDataService */

    /***/
    function fML(module, __webpack_exports__, __webpack_require__) {
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

      TablesRemoteDataService.??fac = function TablesRemoteDataService_Factory(t) {
        return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      TablesRemoteDataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: TablesRemoteDataService,
        factory: TablesRemoteDataService.??fac
      });
      /***/
    },

    /***/
    "D+VZ":
    /*!**************************************************************************!*\
      !*** ./src/app/routes/staff/staff-detail/settings/settings.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function DVZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SettingsComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter username ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.reactiveForm), "");
        }
      }

      function SettingsComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please select gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter city");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter tele");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter website");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function SettingsComponent_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter website");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(fb) {
          _classCallCheck(this, SettingsComponent);

          this.fb = fb;
          this.reactiveForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            tele: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            website: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.??fac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      SettingsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 79,
        vars: 13,
        consts: [[1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-md", "100"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "email", "required", ""], ["formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "city", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "address", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "company", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "tele", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "website", "required", ""], ["matInput", "", "placeholder", "Choose a date", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker2", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "primary", 1, "m-t-8"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, SettingsComponent_mat_error_10_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, SettingsComponent_mat_error_16_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "male");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "female");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, SettingsComponent_mat_error_28_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, SettingsComponent_mat_error_34_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, SettingsComponent_mat_error_40_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, SettingsComponent_mat_error_46_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](54, SettingsComponent_mat_error_54_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Tele");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, SettingsComponent_mat_error_62_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](68, SettingsComponent_mat_error_68_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "mat-datepicker-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "mat-datepicker", null, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](75, SettingsComponent_mat_error_75_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("username").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("gender").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("city").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("address").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("company").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("tele").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("website").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matDatepicker", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("for", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reactiveForm.get("date").invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "DnOt":
    /*!*********************************************************************!*\
      !*** ./src/app/routes/staff/staff-detail/staff-detail.component.ts ***!
      \*********************************************************************/

    /*! exports provided: StaffDetailComponent */

    /***/
    function DnOt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffDetailComponent", function () {
        return StaffDetailComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../core/authentication/auth.service */
      "84Y0");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var StaffDetailComponent = /*#__PURE__*/function () {
        function StaffDetailComponent(auth, userService, route) {
          _classCallCheck(this, StaffDetailComponent);

          this.auth = auth;
          this.userService = userService;
          this.route = route;
        }

        _createClass(StaffDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.auth.user().subscribe(function (user) {
              return _this.user = user;
            });
            console.log(this.route.snapshot);
            this.id = this.route.snapshot.params['id'];
            console.log(this.id);
            localStorage.setItem('id', this.id);
            this.viewonestaffdetail(this.id);
          }
        }, {
          key: "viewonestaffdetail",
          value: function viewonestaffdetail(id) {
            var _this2 = this;

            this.userService.viewonestaff(id).subscribe(function (response) {
              console.log(response);
              _this2.userDetail = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return StaffDetailComponent;
      }();

      StaffDetailComponent.??fac = function StaffDetailComponent_Factory(t) {
        return new (t || StaffDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      StaffDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: StaffDetailComponent,
        selectors: [["app-staff-detail"]],
        decls: 35,
        vars: 10,
        consts: [["title", "Staff Detail", "hideBreadcrumb", "", 1, "p-t-32", "p-b-48", "m-b--24", "bg-gray-900"], ["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "fxFlex.gt-sm", "33.33", "fxFlex.gt-md", "25", 1, "matero-col"], [1, "text-center"], ["alt", "", "width", "120", 1, "r-full", "m-y-24", 3, "src"], [1, "m-t-0", "m-b-8", "f-w-400"], [1, "m-t-0", "m-b-8"], [1, "m-t-0", "text-grey-500"], ["mat-raised-button", "", "color", "primary", 1, "m-b-8"], [1, "m-t-0", "p-8", "text-grey-500"], [1, "m-x--16", "m-b--16", "m-t-16"], ["inset", ""], ["mat-list-item", "", "routerLink", "overview"], [1, "icon-20", "m-r-8"], ["mat-list-item", "", "routerLink", "numbers"], ["mat-list-item", "", "routerLink", "settings"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "fxFlex.gt-sm", "66.67", "fxFlex.gt-md", "75", 1, "matero-col"]],
        template: function StaffDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](16, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-nav-list", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "mat-divider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, " Overview ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](23, "mat-divider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "local_phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, " Numbers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](28, "mat-divider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](34, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", (ctx.userDetail == null ? null : ctx.userDetail.staffimg) || ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.firstname, " ", ctx.userDetail == null ? null : ctx.userDetail.lastname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.mobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.role == null ? null : ctx.userDetail.role.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Member since ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](16, 7, ctx.userDetail == null ? null : ctx.userDetail.createdAt, "fullDate"), "");
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFmZi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Gan4":
    /*!**********************************************!*\
      !*** ./src/app/routes/staff/staff.module.ts ***!
      \**********************************************/

    /*! exports provided: StaffModule */

    /***/
    function Gan4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffModule", function () {
        return StaffModule;
      });
      /* harmony import */


      var _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-routing.module */
      "yLdp");
      /* harmony import */


      var _role_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role/role.component */
      "wy1b");
      /* harmony import */


      var _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./staff/staff.component */
      "vgJg");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./staff-detail/staff-detail.component */
      "DnOt");
      /* harmony import */


      var _staff_detail_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./staff-detail/overview/overview.component */
      "d5iT");
      /* harmony import */


      var _staff_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./staff-detail/settings/settings.component */
      "D+VZ");
      /* harmony import */


      var _staff_detail_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./staff-detail/numbers/numbers.component */
      "d6Vo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_role_role_component__WEBPACK_IMPORTED_MODULE_1__["RoleComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__["StaffComponent"], _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_4__["StaffDetailComponent"], _staff_detail_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"], _staff_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]];
      var COMPONENTS_DYNAMIC = [_role_role_component__WEBPACK_IMPORTED_MODULE_1__["AddRoleFormComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__["AddStaffFormComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_1__["EditRoleFormComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__["EditStaffFormComponent"]];

      var StaffModule = function StaffModule() {
        _classCallCheck(this, StaffModule);
      };

      StaffModule.??fac = function StaffModule_Factory(t) {
        return new (t || StaffModule)();
      };

      StaffModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: StaffModule
      });
      StaffModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__["StaffRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](StaffModule, {
          declarations: [_role_role_component__WEBPACK_IMPORTED_MODULE_1__["RoleComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__["StaffComponent"], _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_4__["StaffDetailComponent"], _staff_detail_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"], _staff_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_1__["AddRoleFormComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__["AddStaffFormComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_1__["EditRoleFormComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_2__["EditStaffFormComponent"], _staff_detail_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_7__["NumbersComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__["StaffRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "d5iT":
    /*!**************************************************************************!*\
      !*** ./src/app/routes/staff/staff-detail/overview/overview.component.ts ***!
      \**************************************************************************/

    /*! exports provided: OverviewComponent */

    /***/
    function d5iT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
        return OverviewComponent;
      });
      /* harmony import */


      var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../core/authentication/auth.service */
      "84Y0");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      var OverviewComponent = /*#__PURE__*/function () {
        function OverviewComponent(auth, userService, route) {
          _classCallCheck(this, OverviewComponent);

          this.auth = auth;
          this.userService = userService;
          this.route = route;
        }

        _createClass(OverviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.id = this.route.params['id'];
            this.id = localStorage.getItem('id');
            this.viewonestaffdetail(this.id);
          }
        }, {
          key: "viewonestaffdetail",
          value: function viewonestaffdetail(id) {
            var _this3 = this;

            this.userService.viewonestaff(id).subscribe(function (response) {
              console.log(response);
              _this3.userDetail = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return OverviewComponent;
      }();

      OverviewComponent.??fac = function OverviewComponent_Factory(t) {
        return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      OverviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: OverviewComponent,
        selectors: [["app-overview"]],
        decls: 82,
        vars: 15,
        consts: [["width", "180px"], ["width", "10px"], ["href", "mailto:userDetail?.email"], ["href", "tel:+91userDetail?.mobile"], [1, "r-4", "text-center", "mat-elevation-z4", "text-white", 2, "width", "max-content", 3, "ngClass"], [1, "r-4", "text-center", "mat-elevation-z4", "text-white", "bg-indigo-500", 2, "width", "max-content"]],
        template: function OverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Basic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "Added By");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Joined On");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](52, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "Approved Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "Added By");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](78, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.firstname, " ", ctx.userDetail == null ? null : ctx.userDetail.lastname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.userDetail == null ? null : ctx.userDetail.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.userDetail == null ? null : ctx.userDetail.mobile, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.added_by == null ? null : ctx.userDetail.added_by.firstname, " ", ctx.userDetail == null ? null : ctx.userDetail.added_by == null ? null : ctx.userDetail.added_by.lastname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](52, 12, ctx.userDetail == null ? null : ctx.userDetail.createdAt, "short"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", (ctx.userDetail == null ? null : ctx.userDetail.approvedstatus) ? "bg-indigo-500" : "bg-pink-500");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"]((ctx.userDetail == null ? null : ctx.userDetail.approvedstatus) ? "Active" : "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.added_by == null ? null : ctx.userDetail.added_by.firstname, " ", ctx.userDetail == null ? null : ctx.userDetail.added_by == null ? null : ctx.userDetail.added_by.lastname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.role == null ? null : ctx.userDetail.role.name);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "d6Vo":
    /*!************************************************************************!*\
      !*** ./src/app/routes/staff/staff-detail/numbers/numbers.component.ts ***!
      \************************************************************************/

    /*! exports provided: NumbersComponent */

    /***/
    function d6Vo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumbersComponent", function () {
        return NumbersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      var NumbersComponent = /*#__PURE__*/function () {
        function NumbersComponent() {
          _classCallCheck(this, NumbersComponent);

          //Table
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

        _createClass(NumbersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "changerowSelect",
          value: function changerowSelect(e) {
            console.log(e);
          }
        }, {
          key: "changecellSelect",
          value: function changecellSelect(e) {
            console.log(e);
          }
        }]);

        return NumbersComponent;
      }();

      NumbersComponent.??fac = function NumbersComponent_Factory(t) {
        return new (t || NumbersComponent)();
      };

      NumbersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NumbersComponent,
        selectors: [["app-numbers"]],
        decls: 4,
        vars: 20,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "rowSelectionChange", "cellSelectionChange"]],
        template: function NumbersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mtx-grid", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sortChange", function NumbersComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("rowSelectionChange", function NumbersComponent_Template_mtx_grid_rowSelectionChange_3_listener($event) {
              return ctx.changerowSelect($event);
            })("cellSelectionChange", function NumbersComponent_Template_mtx_grid_cellSelectionChange_3_listener($event) {
              return ctx.changecellSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "DST Number")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_2__["MtxGridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudW1iZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vgJg":
    /*!*******************************************************!*\
      !*** ./src/app/routes/staff/staff/staff.component.ts ***!
      \*******************************************************/

    /*! exports provided: StaffComponent, AddStaffFormComponent, EditStaffFormComponent */

    /***/
    function vgJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
        return StaffComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStaffFormComponent", function () {
        return AddStaffFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditStaffFormComponent", function () {
        return EditStaffFormComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _staff_staff_remote_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../staff/staff/remote-data.service */
      "3fML");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function StaffComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0);
        }

        if (rf & 2) {
          var row_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", row_r4.name, " ");
        }
      }

      function StaffComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function StaffComponent_ng_template_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r5.openAddStaff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Add Staff ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function StaffComponent_ng_template_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r7.filterSearch = $event;
          })("ngModelChange", function StaffComponent_ng_template_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r8.searchData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r3.filterSearch);
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      function AddStaffFormComponent_mat_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", role_r2._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", role_r2 == null ? null : role_r2.name, " ");
        }
      }

      function AddStaffFormComponent_mat_option_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var staff_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", staff_r3._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", staff_r3 == null ? null : staff_r3.firstname, " ", staff_r3 == null ? null : staff_r3.lastname, " ");
        }
      }

      function EditStaffFormComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", role_r2._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", role_r2 == null ? null : role_r2.name, " ");
        }
      }

      function EditStaffFormComponent_mat_option_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var staff_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", staff_r3._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", staff_r3 == null ? null : staff_r3.firstname, " ", staff_r3 == null ? null : staff_r3.lastname, " ");
        }
      }

      var _c1 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }";

      var StaffComponent = /*#__PURE__*/function () {
        function StaffComponent(remoteSrv, fb, cdr, userService, router, dialog, dialogx, snackBar, permissionsSrv) {
          _classCallCheck(this, StaffComponent);

          this.remoteSrv = remoteSrv;
          this.fb = fb;
          this.cdr = cdr;
          this.userService = userService;
          this.router = router;
          this.dialog = dialog;
          this.dialogx = dialogx;
          this.snackBar = snackBar;
          this.permissionsSrv = permissionsSrv;
          this.columns = [];
          this.list = [];
          this.total = 0;
          this.isLoading = true;
          this.multiSelectable = false;
          this.rowSelectable = false;
          this.hideRowSelectionCheckbox = false;
          this.showToolbar = true;
          this.columnHideable = true;
          this.columnMovable = true;
          this.rowHover = true;
          this.rowStriped = true;
          this.showPaginator = true;
          this.expandable = false;
          this.columnResizable = false;
          this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10
          };
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addstaffform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            approvedstatus: [false]
          });
        }

        _createClass(StaffComponent, [{
          key: "params",
          get: function get() {
            var p = Object.assign({}, this.query);
            p.page += 1;
            return p;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.getallroles();
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
                  return _this4.router.navigate(['staff/staff-detail', record._id]);
                }
              }, {
                type: 'icon',
                color: 'accent',
                icon: 'edit',
                tooltip: 'edit',
                click: function click(record) {
                  return _this4.edit(record);
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
                  return _this4["delete"](record);
                }
              }]
            }];
          }
        }, {
          key: "searchData",
          value: function searchData(searchValue) {
            if (searchValue) {
              this.filteredData = this.list.filter(function (item) {
                return item.firstname.toLowerCase().includes(searchValue.toLowerCase()) || item.lastname.toLowerCase().includes(searchValue.toLowerCase()) || item.email.toLowerCase().includes(searchValue.toLowerCase());
              });
            } else {
              this.filteredData = null;
              this.getallstaff();
            }
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this5 = this;

            var dialogRef = this.dialog.open(EditStaffFormComponent, {
              width: '500px',
              data: {
                record: value
              }
            });
            dialogRef.afterClosed().subscribe(function () {
              console.log('The dialog was closed');

              _this5.getallstaff();
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this6 = this;

            this.userService.deletestaff(data._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this6.isLoading = false;

              _this6.getallstaff();

              _this6.cdr.detectChanges();

              _this6.dialogx.alert("You have deleted ".concat(data.firstname, " ").concat(data.lastname, "!"));
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
          key: "viewadmin",
          value: function viewadmin() {
            console.log('radha ganj');
          }
        }, {
          key: "enableRowExpandable",
          value: function enableRowExpandable() {
            this.columns[0].showExpand = this.expandable;
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }, {
          key: "getallroles",
          value: function getallroles() {
            var _this7 = this;

            this.userService.getallroles().subscribe(function (response) {
              console.log(response);
              _this7.allroles = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "openAddStaff",
          value: function openAddStaff() {
            var _this8 = this;

            var adddailogRef = this.dialog.open(AddStaffFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              console.log('closed');

              _this8.getallstaff();

              _this8.getallstaff();

              _this8.getallstaff();
            });
          }
        }, {
          key: "submitstaffForm",
          value: function submitstaffForm() {
            var _this9 = this;

            console.log(this.addstaffform.value);
            this.userService.addstaff(this.addstaffform.value).subscribe(function (response) {
              console.log(response);

              _this9.snackBar.open('Staff Added Successfully!', '', {
                duration: 2000
              });

              _this9.addstaffform.reset();

              _this9.addstaffform.markAsUntouched();

              console.log(_this9.addstaffform.getError);

              _this9.getallstaff();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getallstaff",
          value: function getallstaff() {
            var _this10 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this10.list = response.data;
              _this10.isLoading = false;

              _this10.cdr.detectChanges();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = false;
          }
        }]);

        return StaffComponent;
      }();

      StaffComponent.??fac = function StaffComponent_Factory(t) {
        return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_staff_staff_remote_data_service__WEBPACK_IMPORTED_MODULE_6__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_4__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"]));
      };

      StaffComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: StaffComponent,
        selectors: [["app-staff"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([_staff_staff_remote_data_service__WEBPACK_IMPORTED_MODULE_6__["TablesRemoteDataService"]])],
        decls: 9,
        vars: 22,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"]],
        template: function StaffComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("sortChange", function StaffComponent_Template_mtx_grid_sortChange_4_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function StaffComponent_Template_mtx_grid_selectionChange_4_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, StaffComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, StaffComponent_ng_template_7_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](6);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("data", ctx.filteredData || ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Staff")("toolbarTemplate", _r2)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](21, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_10__["MtxGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 100%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px !important;\n}\n\n.st-chk[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  padding: 6px 0;\n}\n\n[_nghost-%COMP%]     .label {\n  padding: 5px 10px;\n  border-radius: 999px;\n  background-color: #ffb74d;\n}\n\n[_nghost-%COMP%]     .admin-dy-class {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #6fcffc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RhZmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUYiLCJmaWxlIjoic3RhZmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm10eC1ncmlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3QtY2hrIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubGFiZWwge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NGQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYWRtaW4tZHktY2xhc3Mge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZjZmZjO1xyXG59XHJcbiJdfQ== */"],
        changeDetection: 0
      });

      var AddStaffFormComponent = /*#__PURE__*/function () {
        function AddStaffFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AddStaffFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.addstaffform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            added_by: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
              password: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.password) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.password : 'null',
              role: ((_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.record) === null || _z === void 0 ? void 0 : _z.role) ? (_1 = (_0 = this.data) === null || _0 === void 0 ? void 0 : _0.record) === null || _1 === void 0 ? void 0 : _1.role._id : 'null',
              added_by: ((_3 = (_2 = this.data) === null || _2 === void 0 ? void 0 : _2.record) === null || _3 === void 0 ? void 0 : _3.added_by) ? (_6 = (_5 = (_4 = this.data) === null || _4 === void 0 ? void 0 : _4.record) === null || _5 === void 0 ? void 0 : _5.added_by) === null || _6 === void 0 ? void 0 : _6._id : 'null',
              approvedstatus: ((_8 = (_7 = this.data) === null || _7 === void 0 ? void 0 : _7.record) === null || _8 === void 0 ? void 0 : _8.approvedstatus) ? (_10 = (_9 = this.data) === null || _9 === void 0 ? void 0 : _9.record) === null || _10 === void 0 ? void 0 : _10.approvedstatus : false
            });
          }
        }

        _createClass(AddStaffFormComponent, [{
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
          key: "submitstaffForm",
          value: function submitstaffForm() {
            var _this11 = this;

            if (this.editmode) {
              console.log(this.addstaffform.value);
              this.userService.editstaff(this.id, this.addstaffform.value).subscribe(function (response) {
                console.log(response);

                _this11.snackBar.open('User Edited Successfully!', '', {
                  duration: 2000
                });

                _this11.addstaffform.reset();

                _this11.dialogRef.close();
              }, function (error) {
                console.log(error);
              });
            } else {
              if (this.addstaffform.valid) {
                console.log(this.addstaffform.value);
                this.userService.addstaff(this.addstaffform.value).subscribe(function (response) {
                  console.log(response);

                  _this11.snackBar.open('Staff Added Successfully!', '', {
                    duration: 2000
                  });

                  _this11.addstaffform.reset();

                  _this11.addstaffform.markAsUntouched();

                  _this11.dialogRef.close();
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
            var _this12 = this;

            this.userService.getallroles().subscribe(function (response) {
              console.log(response);
              _this12.allroles = response.data;
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
            var _this13 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this13.allstaff = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return AddStaffFormComponent;
      }();

      AddStaffFormComponent.??fac = function AddStaffFormComponent_Factory(t) {
        return new (t || AddStaffFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]));
      };

      AddStaffFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AddStaffFormComponent,
        selectors: [["add-staff-form"]],
        decls: 65,
        vars: 21,
        consts: [["mat-dialog-title", ""], [1, "form-field-full", 3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", ""], ["fxFlex", "100", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "Mobile", "formControlName", "mobile", "required", ""], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "required", ""], ["formControlName", "role", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "added_by", "required", ""], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function AddStaffFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function AddStaffFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitstaffForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Select Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](50, AddStaffFormComponent_mat_option_50_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Add By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](56, AddStaffFormComponent_mat_option_56_Template, 2, 3, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "mat-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function AddStaffFormComponent_Template_mat_checkbox_change_58_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.editmode ? "Edit Staff" : "Add Staff");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.addstaffform);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](12, 11, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](20, 13, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](28, 15, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](36, 17, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](44, 19, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.allroles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.allstaff);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.addstaffform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]],
        styles: [_c1]
      });

      var EditStaffFormComponent = /*#__PURE__*/function () {
        function EditStaffFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, EditStaffFormComponent);

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
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            added_by: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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

        _createClass(EditStaffFormComponent, [{
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
          key: "submitstaffForm",
          value: function submitstaffForm() {
            var _this14 = this;

            if (this.editmode) {
              console.log(this.addstaffform.value);
              this.userService.editstaff(this.id, this.addstaffform.value).subscribe(function (response) {
                console.log(response);

                _this14.snackBar.open('User Edited Successfully!', '', {
                  duration: 2000
                });

                _this14.addstaffform.reset();

                _this14.dialogRef.close();
              }, function (error) {
                console.log(error);
              });
            } else {
              if (this.addstaffform.valid) {
                console.log(this.addstaffform.value);
                this.userService.addstaff(this.addstaffform.value).subscribe(function (response) {
                  console.log(response);

                  _this14.snackBar.open('Staff Added Successfully!', '', {
                    duration: 2000
                  });

                  _this14.addstaffform.reset();

                  _this14.addstaffform.markAsUntouched();

                  _this14.dialogRef.close();
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
            var _this15 = this;

            this.userService.getallroles().subscribe(function (response) {
              console.log(response);
              _this15.allroles = response.data;
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
            var _this16 = this;

            this.userService.getallstaff().subscribe(function (response) {
              console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
              _this16.allstaff = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return EditStaffFormComponent;
      }();

      EditStaffFormComponent.??fac = function EditStaffFormComponent_Factory(t) {
        return new (t || EditStaffFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]));
      };

      EditStaffFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: EditStaffFormComponent,
        selectors: [["edit-staff-form"]],
        decls: 57,
        vars: 17,
        consts: [["mat-dialog-title", ""], [1, "form-field-full", 3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", ""], ["fxFlex", "100", "fxFlex.lt-sm", "100"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "Mobile", "formControlName", "mobile", "required", ""], ["formControlName", "role", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "added_by", "required", ""], ["formControlName", "approvedstatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function EditStaffFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Edit Staff");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function EditStaffFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitstaffForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Select Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, EditStaffFormComponent_mat_option_42_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Add By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, EditStaffFormComponent_mat_option_48_Template, 2, 3, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-checkbox", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function EditStaffFormComponent_Template_mat_checkbox_change_50_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.addstaffform);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](12, 9, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](20, 11, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](28, 13, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](36, 15, "validations.required"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.allroles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.allstaff);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.addstaffform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]],
        styles: [_c1]
      });
      /***/
    },

    /***/
    "wy1b":
    /*!*****************************************************!*\
      !*** ./src/app/routes/staff/role/role.component.ts ***!
      \*****************************************************/

    /*! exports provided: RoleComponent, AddRoleFormComponent, EditRoleFormComponent */

    /***/
    function wy1b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleComponent", function () {
        return RoleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRoleFormComponent", function () {
        return AddRoleFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditRoleFormComponent", function () {
        return EditRoleFormComponent;
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


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-matero/extensions */
      "ld3Y");
      /* harmony import */


      var app_routes_service_service_monitoring_agent_table_remote_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/routes/service/service/monitoring/agent-table/remote-data.service */
      "HJYq");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");

      function RoleComponent_ng_template_4_mat_chip_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var permission_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", permission_r6, " ");
        }
      }

      function RoleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function RoleComponent_ng_template_4_Template_mat_chip_list_cdkDropListDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RoleComponent_ng_template_4_mat_chip_1_Template, 2, 1, "mat-chip", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var row_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", row_r4.permissions);
        }
      }

      function RoleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RoleComponent_ng_template_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r9.openRole();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RoleComponent_ng_template_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.filterSearch = $event;
          })("ngModelChange", function RoleComponent_ng_template_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.searchData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.filterSearch);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 50, 100];
      };

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      function AddRoleFormComponent_mat_expansion_panel_11_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddRoleFormComponent_mat_expansion_panel_11_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) {
            var subtask_r3 = ctx.$implicit;
            return subtask_r3.completed = $event;
          })("change", function AddRoleFormComponent_mat_expansion_panel_11_div_7_Template_mat_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var subtask_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r5.updateAllComplete(subtask_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subtask_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", subtask_r3.completed)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", subtask_r3 == null ? null : subtask_r3.name, " ");
        }
      }

      function AddRoleFormComponent_mat_expansion_panel_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-panel-description", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddRoleFormComponent_mat_expansion_panel_11_Template_mat_checkbox_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var task_r1 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.setAllCompleted(task_r1 == null ? null : task_r1.subtasks, $event == null ? null : $event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AddRoleFormComponent_mat_expansion_panel_11_div_7_Template, 3, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r1 == null ? null : task_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", task_r1 == null ? null : task_r1.completed)("checked", ctx_r0.allComplete(task_r1))("indeterminate", ctx_r0.someComplete(task_r1 == null ? null : task_r1.subtasks));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", task_r1 == null ? null : task_r1.subtasks);
        }
      }

      function EditRoleFormComponent_mat_expansion_panel_11_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditRoleFormComponent_mat_expansion_panel_11_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) {
            var subtask_r3 = ctx.$implicit;
            return subtask_r3.completed = $event;
          })("change", function EditRoleFormComponent_mat_expansion_panel_11_div_7_Template_mat_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var subtask_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r5.updateAllComplete(subtask_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subtask_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", subtask_r3.completed)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", subtask_r3 == null ? null : subtask_r3.name, " ");
        }
      }

      function EditRoleFormComponent_mat_expansion_panel_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-panel-description", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditRoleFormComponent_mat_expansion_panel_11_Template_mat_checkbox_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var task_r1 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.setAllCompleted(task_r1 == null ? null : task_r1.subtasks, $event == null ? null : $event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, EditRoleFormComponent_mat_expansion_panel_11_div_7_Template, 3, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r1 == null ? null : task_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", task_r1 == null ? null : task_r1.completed)("checked", ctx_r0.allComplete(task_r1))("indeterminate", ctx_r0.someComplete(task_r1 == null ? null : task_r1.subtasks));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", task_r1 == null ? null : task_r1.subtasks);
        }
      }

      var _c2 = ".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      .demo-sub-list[_ngcontent-%COMP%] {\n        margin-left: 20px;\n\n        input[type='checkbox'] {\n          visibility: hidden;\n          &:checked + label {\n            transform: rotate(360deg);\n            background-color: #000;\n            &:before {\n              transform: translateX(90px);\n              background-color: #fff;\n            }\n          }\n        }\n\n        label {\n          display: flex;\n          width: 180px;\n          height: 90px;\n          border: 6px solid;\n          border-radius: 99em;\n          position: relative;\n          transition: transform 0.75s ease-in-out;\n          transform-origin: 50% 50%;\n          cursor: pointer;\n\n          &:before {\n            transition: transform 0.75s ease;\n            transition-delay: 0.5s;\n            content: '';\n            display: block;\n            position: absolute;\n            width: 54px;\n            height: 54px;\n            background-color: #000;\n            border-radius: 50%;\n            top: 12px;\n            left: 12px;\n          }\n        }\n      }";

      var RoleComponent = /*#__PURE__*/function () {
        function RoleComponent(remoteSrv, fb, dateAdapter, translate, userService, snackBar, dialog, dialogx, cdr) {
          var _this17 = this;

          _classCallCheck(this, RoleComponent);

          this.remoteSrv = remoteSrv;
          this.fb = fb;
          this.dateAdapter = dateAdapter;
          this.translate = translate;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialog = dialog;
          this.dialogx = dialogx;
          this.cdr = cdr;
          this.q = {
            username: '',
            email: '',
            gender: ''
          };
          this.toggleeditrole = true;
          this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10
          };
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.columns = [{
            header: 'Name',
            sortable: true,
            field: 'name'
          }, {
            header: 'Status',
            sortable: true,
            field: 'status'
          }, {
            header: 'Permissions',
            field: 'permissions',
            showExpand: true,
            formatter: function formatter(data) {
              return "<a\n      >click here\n    </a>";
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
                return _this17.edit(record);
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
                return _this17["delete"](record);
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
          this.rowStriped = false;
          this.showPaginator = true;
          this.expandable = true;
          this.columnResizable = false;
          this.displayedColumns = ['role', 'r_calldetails', 'w_calldetails', 'r_userdetails', 'w_userdetails', 'r_sip', 'w_sip', 'r_ivr', 'w_ivr', 'actions'];
          this.reactiveForm1 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            city: [''],
            address: [''],
            company: [''],
            tele: [''],
            website: [''],
            date: ['']
          });
          this.addroleform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            r_calldetails: [false],
            w_calldetails: [false],
            r_userdetails: [false],
            w_userdetails: [false],
            r_sip: [false],
            w_sip: [false],
            r_ivr: [false],
            w_ivr: [false]
          });
        }

        _createClass(RoleComponent, [{
          key: "params",
          get: function get() {
            var p = Object.assign({}, this.query);
            p.page += 1;
            return p;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.getData();
            this.getallroles();
            this.translateSubscription = this.translate.onLangChange.subscribe(function (res) {
              _this18.dateAdapter.setLocale(res.lang);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.translateSubscription.unsubscribe();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(addroleform) {
            return addroleform.get('name').hasError('required') ? 'validations.required' : addroleform.get('email').hasError('email') ? 'validations.invalid_email' : '';
          }
        }, {
          key: "editrole",
          value: function editrole() {
            console.log('button clicked');

            if (this.toggleeditrole == false) {
              this.toggleeditrole = true;
            } else {
              this.toggleeditrole = false;
            }
          }
        }, {
          key: "editonerole",
          value: function editonerole(id) {
            this.toggleeditrole = false;
            this.userService.viewonerole(id).subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteonerole",
          value: function deleteonerole(id) {
            //console.log(id);
            this.snackBar.open('Operation not allowed', '', {
              duration: 2000
            });
          }
        }, {
          key: "submitroleForm",
          value: function submitroleForm() {
            var _this19 = this;

            console.log(this.addroleform.value);
            this.userService.addrole(this.addroleform.value).subscribe(function (response) {
              console.log(response);

              _this19.snackBar.open('Role Added Successfully!', '', {
                duration: 2000
              });

              _this19.addroleform.reset();

              _this19.getallroles();
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
          key: "getallroles",
          value: function getallroles() {
            var _this20 = this;

            this.userService.getallroles().subscribe(function (response) {
              console.log('%crole.component.ts line:311 response', 'color: #26bfa5;', response);
              _this20.list = response.data;
              _this20.total = response.data.length;
              _this20.isLoading = false;

              _this20.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror role.component.ts line:318 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "canceledit",
          value: function canceledit() {
            console.log('Cancel Requested');
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this21 = this;

            this.isLoading = true;
            this.remoteSrv.getData(this.params).subscribe(function (res) {
              //this.list = res.items;
              _this21.total = res.total_count;
              _this21.isLoading = false;

              _this21.cdr.detectChanges();
            }, function () {
              _this21.isLoading = false;

              _this21.cdr.detectChanges();
            }, function () {
              _this21.isLoading = false;

              _this21.cdr.detectChanges();
            });
          }
        }, {
          key: "edit",
          value: function edit(value) {
            var _this22 = this;

            var adddailogRef = this.dialog.open(EditRoleFormComponent, {
              width: '1000px',
              data: {
                record: value
              }
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this22.getallroles();
            }); // const dialogRef = this.dialogx.originalOpen(TablesKitchenSinkEditComponent, {
            //   width: '90%',
            //   data: { record: value },
            // });
            // // const onOk = () => {
            // //   this.dialog.alert('Closed');
            // // };
            // // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');
            // dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
          }
        }, {
          key: "delete",
          value: function _delete(value) {
            var _this23 = this;

            console.log(value);
            this.userService.deleterole(value._id).subscribe(function (response) {
              console.log('%cips.component.ts line:304 response', 'color: #26bfa5;', response);

              _this23.snackBar.open('Role Deleted Successfully!', '', {
                duration: 2000
              }); //this.addroleform.reset();


              _this23.getallroles();
            }, function (error) {
              console.log('%cerror ips.component.ts line:311 ', 'color: red; display: block; width: 100%;', error);
            });
            this.dialogx.alert("You have deleted ".concat(value.name, "!"));
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
          key: "openRole",
          value: function openRole() {
            var _this24 = this;

            var adddailogRef = this.dialog.open(AddRoleFormComponent, {
              width: '1000px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this24.getallroles();

              _this24.getallroles();

              _this24.getallroles();
            });
          }
        }]);

        return RoleComponent;
      }();

      RoleComponent.??fac = function RoleComponent_Factory(t) {
        return new (t || RoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_routes_service_service_monitoring_agent_table_remote_data_service__WEBPACK_IMPORTED_MODULE_8__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_matero_extensions__WEBPACK_IMPORTED_MODULE_7__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      RoleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RoleComponent,
        selectors: [["app-role"]],
        viewQuery: function RoleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([app_routes_service_service_monitoring_agent_table_remote_data_service__WEBPACK_IMPORTED_MODULE_8__["TablesRemoteDataService"]])],
        decls: 8,
        vars: 22,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", 3, "data", "columns", "loading", "columnResizable", "multiSelectable", "rowSelectable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "columnHideable", "columnMovable", "expandable", "expansionTemplate", "toolbarTemplate", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "sortChange", "selectionChange"], ["expansionTpl", ""], ["toolbarTpl", ""], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", "p-8", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["fxHide.lt-sm", "", "placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"]],
        template: function RoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sortChange", function RoleComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function RoleComponent_Template_mtx_grid_selectionChange_3_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, RoleComponent_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, RoleComponent_ng_template_6_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("multiSelectable", ctx.multiSelectable)("rowSelectable", ctx.rowSelectable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Role & Permissions")("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("expansionTemplate", _r0)("toolbarTemplate", _r2)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](21, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_11__["MtxGridComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["CdkDrag"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultShowHideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [".st-chk[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  padding: 6px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3QtY2hrIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcbiJdfQ== */"],
        changeDetection: 0
      });

      var AddRoleFormComponent = /*#__PURE__*/function () {
        function AddRoleFormComponent(fb, userService, snackBar, dialogRef) {
          _classCallCheck(this, AddRoleFormComponent);

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.panelOpenState = false;
          this.tasks = [{
            name: 'Basic',
            completed: false,
            subtasks: [{
              name: 'Add',
              value: 'canAdd',
              completed: false
            }, {
              name: 'Edit',
              value: 'canEdit',
              completed: false
            }, {
              name: 'Read',
              value: 'canRead',
              completed: false
            }, {
              name: 'Delete',
              value: 'canDelete',
              completed: false
            }]
          }, {
            name: 'Manage Staff',
            completed: false,
            subtasks: [{
              name: 'View Staff',
              value: 'ViewStaff',
              completed: false
            }, {
              name: 'Add Staff',
              value: 'AddStaff',
              completed: false
            }, {
              name: 'Edit Staff',
              value: 'EditStaff',
              completed: false
            }, {
              name: 'Delete Staff',
              value: 'DeleteStaff',
              completed: false
            }]
          }, {
            name: 'Manage Agents',
            completed: false,
            subtasks: [{
              name: 'View Agents',
              value: 'ViewAgents',
              completed: false
            }, {
              name: 'Add Agents',
              value: 'AddAgents',
              completed: false
            }, {
              name: 'Edit Agents',
              value: 'EditAgents',
              completed: false
            }, {
              name: 'Delete Agents',
              value: 'DeleteAgents',
              completed: false
            }]
          }, {
            name: 'Manage Users',
            completed: false,
            subtasks: [{
              name: 'User Tab',
              value: 'ViewTabUser',
              completed: false
            }, {
              name: 'View User',
              value: 'ViewUser',
              completed: false
            }, {
              name: 'Add User',
              value: 'AddUser',
              completed: false
            }, {
              name: 'Edit User',
              value: 'EditUser',
              completed: false
            }, {
              name: 'Delete User',
              value: 'DeleteUser',
              completed: false
            }]
          }, {
            name: 'DST Numbers',
            completed: false,
            subtasks: [{
              name: 'View DST Numbers',
              value: 'ViewDST',
              completed: false
            }, {
              name: 'Add DST Numbers',
              value: 'AddDST',
              completed: false
            }, {
              name: 'Edit DST Numbers',
              value: 'EditDST',
              completed: false
            }, {
              name: 'Delete DST Numbers',
              value: 'DeleteDST',
              completed: false
            }]
          }, {
            name: 'IPs',
            completed: false,
            subtasks: [{
              name: 'View IPs',
              value: 'ViewIP',
              completed: false
            }, {
              name: 'Add IPs',
              value: 'AddIP',
              completed: false
            }, {
              name: 'Edit IPs',
              value: 'EditIP',
              completed: false
            }, {
              name: 'Delete IPs',
              value: 'DeleteIP',
              completed: false
            }]
          }, {
            name: 'Live Calls',
            completed: false,
            subtasks: [{
              name: 'View Calls',
              value: 'ViewCalls',
              completed: false
            }, {
              name: 'Terminate Calls',
              value: 'TerminateCalls',
              completed: false
            }]
          }, {
            name: 'Voice Files',
            completed: false,
            subtasks: [{
              name: 'View Voice Files',
              value: 'ViewVoice',
              completed: false
            }, {
              name: 'Add Voice Files',
              value: 'AddVoice',
              completed: false
            }]
          }, {
            name: 'Enquiry',
            completed: false,
            subtasks: [{
              name: 'View Enquiry',
              value: 'ViewEnquiry',
              completed: false
            }, {
              name: 'Followup Enquiry',
              value: 'FollowupEnquiry',
              completed: false
            }]
          }, {
            name: 'Plan',
            completed: false,
            subtasks: [{
              name: 'View Plan',
              value: 'ViewPlan',
              completed: false
            }, {
              name: 'Add Plan',
              value: 'AddPlan',
              completed: false
            }, {
              name: 'Edit Plan',
              value: 'EditPlan',
              completed: false
            }, {
              name: 'Delete Plan',
              value: 'DeletePlan',
              completed: false
            }]
          }, {
            name: 'Chat',
            completed: false,
            subtasks: [{
              name: 'View Chat',
              value: 'ViewChat',
              completed: false
            }, {
              name: 'Delete Chat',
              value: 'DeleteChat',
              completed: false
            }]
          }];
          this.addroleform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: [false],
            permissions: []
          });
        }

        _createClass(AddRoleFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "allComplete",
          value: function allComplete(task) {
            //console.log(task);
            var subtasks = task.subtasks;
            return task.completed || subtasks != null && subtasks.every(function (t) {
              return t.completed;
            });
          }
        }, {
          key: "someComplete",
          value: function someComplete(tasks) {
            //console.log(tasks);
            var numComplete = tasks.filter(function (t) {
              return t.completed;
            }).length;
            return numComplete > 0 && numComplete < tasks.length;
          }
        }, {
          key: "setAllCompleted",
          value: function setAllCompleted(tasks, completed) {
            //console.log(tasks);
            tasks.forEach(function (t) {
              return t.completed = completed;
            });
          }
        }, {
          key: "updateAllComplete",
          value: function updateAllComplete(task) {
            console.log(task);
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('name').hasError('required') ? 'validations.required' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
          }
        }, {
          key: "submitdstnumber",
          value: function submitdstnumber() {
            var _this25 = this;

            var permissionsarr = [];
            this.tasks.forEach(function (index) {
              return index.subtasks.forEach(function (element) {
                if (element.completed == true) {
                  permissionsarr.push(element.value);
                } //console.log(element);

              });
            });
            console.log(permissionsarr);
            this.addroleform.setValue({
              name: this.addroleform.value.name,
              status: this.addroleform.value.status,
              permissions: permissionsarr
            });

            if (this.addroleform.valid) {
              console.log(this.addroleform.value);
              this.userService.addrole(this.addroleform.value).subscribe(function (response) {
                console.log('%cips.component.ts line:511 response', 'color: #26bfa5;', response);

                _this25.snackBar.open('Role Added Successfully!', '', {
                  duration: 2000
                });

                _this25.addroleform.reset(); //this.addroleform.markAsUntouched();


                _this25.dialogRef.close();
              }, function (error) {
                console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.addroleform);
              console.log(this.getErrorMessage(this.addroleform));
            }
          }
        }, {
          key: "getallips",
          value: function getallips() {
            var _this26 = this;

            this.userService.getallips().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this26.allips = response.data;
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addroleform.get(field).valid && this.addroleform.get(field).touched;
          }
        }]);

        return AddRoleFormComponent;
      }();

      AddRoleFormComponent.??fac = function AddRoleFormComponent_Factory(t) {
        return new (t || AddRoleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"]));
      };

      AddRoleFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddRoleFormComponent,
        selectors: [["add-role-form"]],
        decls: 17,
        vars: 3,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["matInput", "", "placeholder", "Admin", "required", "", "formControlName", "name"], ["formControlName", "status", "value", "", "color", "primary"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "cdkFocusInitial", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [2, "flex-grow", "1"], ["color", "primary", 3, "value", "checked", "indeterminate", "change"], ["color", "primary", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"]],
        template: function AddRoleFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Roles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddRoleFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Role Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AddRoleFormComponent_mat_expansion_panel_11_Template, 8, 6, "mat-expansion-panel", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addroleform);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.addroleform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogClose"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelDescription"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [_c2, "fieldset.st-set[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 5px;\n    border-color: #2196f35e  !important;\n}\nlegend.st-leg[_ngcontent-%COMP%] {\n    font-size: 16px;\n}\n.st-mb.ng-star-inserted[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\nfieldset.st-set[_ngcontent-%COMP%] {\n    width: 295px;\n    float: left;\n    height: 180px;\n    margin: 10px;\n}"]
      });

      var EditRoleFormComponent = /*#__PURE__*/function () {
        function EditRoleFormComponent(fb, userService, snackBar, data) {
          _classCallCheck(this, EditRoleFormComponent);

          var _a;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.data = data;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.panelOpenState = false;
          this.tasks = [{
            name: 'Basic',
            completed: false,
            subtasks: [{
              name: 'Add',
              value: 'canAdd',
              completed: false
            }, {
              name: 'Edit',
              value: 'canEdit',
              completed: false
            }, {
              name: 'Read',
              value: 'canRead',
              completed: false
            }, {
              name: 'Delete',
              value: 'canDelete',
              completed: false
            }]
          }, {
            name: 'Manage Staff',
            completed: false,
            subtasks: [{
              name: 'View Staff',
              value: 'ViewStaff',
              completed: false
            }, {
              name: 'Add Staff',
              value: 'AddStaff',
              completed: false
            }, {
              name: 'Edit Staff',
              value: 'EditStaff',
              completed: false
            }, {
              name: 'Delete Staff',
              value: 'DeleteStaff',
              completed: false
            }]
          }, {
            name: 'Manage Agents',
            completed: false,
            subtasks: [{
              name: 'View Agents',
              value: 'ViewAgents',
              completed: false
            }, {
              name: 'Add Agents',
              value: 'AddAgents',
              completed: false
            }, {
              name: 'Edit Agents',
              value: 'EditAgents',
              completed: false
            }, {
              name: 'Delete Agents',
              value: 'DeleteAgents',
              completed: false
            }]
          }, {
            name: 'Manage Users',
            completed: false,
            subtasks: [{
              name: 'User Tab',
              value: 'ViewTabUser',
              completed: false
            }, {
              name: 'View User',
              value: 'ViewUser',
              completed: false
            }, {
              name: 'Add User',
              value: 'AddUser',
              completed: false
            }, {
              name: 'Edit User',
              value: 'EditUser',
              completed: false
            }, {
              name: 'Delete User',
              value: 'DeleteUser',
              completed: false
            }]
          }, {
            name: 'DST Numbers',
            completed: false,
            subtasks: [{
              name: 'View DST Numbers',
              value: 'ViewDST',
              completed: false
            }, {
              name: 'Add DST Numbers',
              value: 'AddDST',
              completed: false
            }, {
              name: 'Edit DST Numbers',
              value: 'EditDST',
              completed: false
            }, {
              name: 'Delete DST Numbers',
              value: 'DeleteDST',
              completed: false
            }]
          }, {
            name: 'IPs',
            completed: false,
            subtasks: [{
              name: 'View IPs',
              value: 'ViewIP',
              completed: false
            }, {
              name: 'Add IPs',
              value: 'AddIP',
              completed: false
            }, {
              name: 'Edit IPs',
              value: 'EditIP',
              completed: false
            }, {
              name: 'Delete IPs',
              value: 'DeleteIP',
              completed: false
            }]
          }, {
            name: 'Live Calls',
            completed: false,
            subtasks: [{
              name: 'View Calls',
              value: 'ViewCalls',
              completed: false
            }, {
              name: 'Terminate Calls',
              value: 'TerminateCalls',
              completed: false
            }]
          }, {
            name: 'Voice Files',
            completed: false,
            subtasks: [{
              name: 'View Voice Files',
              value: 'ViewVoice',
              completed: false
            }, {
              name: 'Add Voice Files',
              value: 'AddVoice',
              completed: false
            }]
          }, {
            name: 'Enquiry',
            completed: false,
            subtasks: [{
              name: 'View Enquiry',
              value: 'ViewEnquiry',
              completed: false
            }, {
              name: 'Followup Enquiry',
              value: 'FollowupEnquiry',
              completed: false
            }]
          }, {
            name: 'Plan',
            completed: false,
            subtasks: [{
              name: 'View Plan',
              value: 'ViewPlan',
              completed: false
            }, {
              name: 'Add Plan',
              value: 'AddPlan',
              completed: false
            }, {
              name: 'Edit Plan',
              value: 'EditPlan',
              completed: false
            }, {
              name: 'Delete Plan',
              value: 'DeletePlan',
              completed: false
            }]
          }, {
            name: 'Chat',
            completed: false,
            subtasks: [{
              name: 'View Chat',
              value: 'ViewChat',
              completed: false
            }, {
              name: 'Delete Chat',
              value: 'DeleteChat',
              completed: false
            }]
          }];
          this.addroleform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: [false],
            permissions: []
          });
          console.log(data);

          if (data) {
            console.log(data.record.permissions); // this.tasks.forEach(ele => ele.subtasks.forEach(subtasks=>  data.record.permissions.indexOf(subtasks.value) !== -1?console.log(subtasks.value):console.log("ni he")))

            for (var i = 0; i < this.tasks.length; i++) {
              var element = this.tasks[i];

              for (var j = 0; j < element.subtasks.length; j++) {
                var newelement = element.subtasks[j].value;

                if (data.record.permissions.indexOf(newelement) !== -1) {
                  console.log(newelement);
                  element.subtasks[j].completed = true;
                }
              }
            }

            this.addroleform.setValue({
              name: data.record.name ? data.record.name : 'null',
              status: data.record.status ? data.record.status : false,
              permissions: []
            });
            this.id = (_a = data.record) === null || _a === void 0 ? void 0 : _a._id; //console.log(this.tasks)
          }
        }

        _createClass(EditRoleFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallips();
          }
        }, {
          key: "allComplete",
          value: function allComplete(task) {
            //console.log(task);
            var subtasks = task.subtasks;
            return task.completed || subtasks != null && subtasks.every(function (t) {
              return t.completed;
            });
          }
        }, {
          key: "someComplete",
          value: function someComplete(tasks) {
            //console.log(tasks);
            var numComplete = tasks.filter(function (t) {
              return t.completed;
            }).length;
            return numComplete > 0 && numComplete < tasks.length;
          }
        }, {
          key: "setAllCompleted",
          value: function setAllCompleted(tasks, completed) {
            //console.log(tasks);
            tasks.forEach(function (t) {
              return t.completed = completed;
            });
          }
        }, {
          key: "updateAllComplete",
          value: function updateAllComplete(task) {
            console.log(task);
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('name').hasError('required') ? 'validations.required' : '';
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

            var permissionsarr = [];
            this.tasks.forEach(function (index) {
              return index.subtasks.forEach(function (element) {
                if (element.completed == true) {
                  permissionsarr.push(element.value);
                } //console.log(element);

              });
            });
            console.log(permissionsarr);
            this.addroleform.setValue({
              name: this.addroleform.value.name,
              status: this.addroleform.value.status,
              permissions: permissionsarr
            });

            if (this.addroleform.valid) {
              console.log(this.addroleform.value);
              console.log(this.id);
              this.userService.editrole(this.id, this.addroleform.value).subscribe(function (response) {
                console.log('%crole.component.ts line:816 response', 'color: #26bfa5;', response);

                _this27.snackBar.open('Role Edited Successfully!', '', {
                  duration: 2000
                });

                _this27.addroleform.reset(); //this.addroleform.markAsUntouched();

              }, function (error) {
                console.log('%cerror role.component.ts line:823 ', 'color: red; display: block; width: 100%;', error);
              });
            } else {
              this.getErrorMessage(this.addroleform);
              console.log(this.getErrorMessage(this.addroleform));
            }
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
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.addroleform.get(field).valid && this.addroleform.get(field).touched;
          }
        }]);

        return EditRoleFormComponent;
      }();

      EditRoleFormComponent.??fac = function EditRoleFormComponent_Factory(t) {
        return new (t || EditRoleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"]));
      };

      EditRoleFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditRoleFormComponent,
        selectors: [["edit-role-form"]],
        decls: 17,
        vars: 3,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "demo-full-width"], ["matInput", "", "placeholder", "Admin", "required", "", "formControlName", "name"], ["formControlName", "status", "value", "", "color", "primary"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "cdkFocusInitial", "", "mat-dialog-close", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"], [2, "flex-grow", "1"], ["color", "primary", 3, "value", "checked", "indeterminate", "change"], ["color", "primary", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"]],
        template: function EditRoleFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Roles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EditRoleFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submitdstnumber();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Role Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, EditRoleFormComponent_mat_expansion_panel_11_Template, 8, 6, "mat-expansion-panel", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addroleform);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.addroleform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogClose"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelDescription"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [_c2, "fieldset.st-set[_ngcontent-%COMP%] {\n      padding: 15px;\n      border-radius: 5px;\n      border-color: #2196f35e  !important;\n  }\n  legend.st-leg[_ngcontent-%COMP%] {\n      font-size: 16px;\n  }\n  .st-mb.ng-star-inserted[_ngcontent-%COMP%] {\n      margin-bottom: 15px;\n  }\n  fieldset.st-set[_ngcontent-%COMP%] {\n      width: 295px;\n      float: left;\n      height: 180px;\n      margin: 10px;\n  }"]
      });
      /***/
    },

    /***/
    "yLdp":
    /*!******************************************************!*\
      !*** ./src/app/routes/staff/staff-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: StaffRoutingModule */

    /***/
    function yLdp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffRoutingModule", function () {
        return StaffRoutingModule;
      });
      /* harmony import */


      var _staff_detail_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./staff-detail/numbers/numbers.component */
      "d6Vo");
      /* harmony import */


      var _staff_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./staff-detail/settings/settings.component */
      "D+VZ");
      /* harmony import */


      var _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./staff-detail/staff-detail.component */
      "DnOt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _role_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./role/role.component */
      "wy1b");
      /* harmony import */


      var _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./staff/staff.component */
      "vgJg");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _staff_detail_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./staff-detail/overview/overview.component */
      "d5iT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }, {
        path: 'staff',
        component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_5__["StaffComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['SUPERADMIN'],
            redirectTo: '/dashboard'
          }
        }
      }, {
        path: 'staff-detail/:id',
        component: _staff_detail_staff_detail_component__WEBPACK_IMPORTED_MODULE_2__["StaffDetailComponent"],
        children: [{
          path: '',
          redirectTo: 'overview',
          pathMatch: 'full'
        }, {
          path: 'overview',
          component: _staff_detail_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"]
        }, {
          path: 'numbers',
          component: _staff_detail_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_0__["NumbersComponent"]
        }, {
          path: 'settings',
          component: _staff_detail_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"]
        }]
      }];

      var StaffRoutingModule = function StaffRoutingModule() {
        _classCallCheck(this, StaffRoutingModule);
      };

      StaffRoutingModule.??fac = function StaffRoutingModule_Factory(t) {
        return new (t || StaffRoutingModule)();
      };

      StaffRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: StaffRoutingModule
      });
      StaffRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](StaffRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=staff-staff-module-es5.js.map