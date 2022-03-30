(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"], {
    /***/
    "/KwS":
    /*!*************************************************************!*\
      !*** ./src/app/routes/forms/datetime/datetime.component.ts ***!
      \*************************************************************/

    /*! exports provided: FormsDatetimeComponent */

    /***/
    function KwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsDatetimeComponent", function () {
        return FormsDatetimeComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @mat-datetimepicker/core */
      "xoCY");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FormsDatetimeComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "min");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FormsDatetimeComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "max");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FormsDatetimeComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "min");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FormsDatetimeComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "max");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FormsDatetimeComponent_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "min");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FormsDatetimeComponent_mat_error_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "max");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function FormsDatetimeComponent_mat_error_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsDatetimeComponent_mat_error_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var FormsDatetimeComponent = /*#__PURE__*/function () {
        function FormsDatetimeComponent(fb, dateAdapter, translate) {
          _classCallCheck(this, FormsDatetimeComponent);

          this.dateAdapter = dateAdapter;
          this.translate = translate;
          this.type = 'moment';
          this.today = moment__WEBPACK_IMPORTED_MODULE_3__["utc"]();
          this.tomorrow = moment__WEBPACK_IMPORTED_MODULE_3__["utc"]().date(moment__WEBPACK_IMPORTED_MODULE_3__["utc"]().date() + 1);
          this.min = this.today.clone().year(2018).month(10).date(3).hour(11).minute(10);
          this.max = this.min.clone().date(4).minute(45);
          this.start = this.today.clone().year(1930).month(9).date(28);

          this.filter = function (date, type) {
            switch (type) {
              case _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__["MatDatetimepickerFilterType"].DATE:
                return date.year() % 2 === 0 && date.month() % 2 === 0 && date.date() % 2 === 0;

              case _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__["MatDatetimepickerFilterType"].HOUR:
                return date.hour() % 2 === 0;

              case _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__["MatDatetimepickerFilterType"].MINUTE:
                return date.minute() % 2 === 0;
            }
          };

          this.group = fb.group({
            dateTime: [new Date('2017-11-09T12:10:00.000Z'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dateTimeYear: [new Date('2017-11-09T12:10:00.000Z'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            time: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            timeAMPM: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            month: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            year: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mintest: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            filtertest: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            touch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        _createClass(FormsDatetimeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.translateSubscription = this.translate.onLangChange.subscribe(function (res) {
              _this.dateAdapter.setLocale(res.lang);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.translateSubscription.unsubscribe();
          }
        }]);

        return FormsDatetimeComponent;
      }();

      FormsDatetimeComponent.ɵfac = function FormsDatetimeComponent_Factory(t) {
        return new (t || FormsDatetimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
      };

      FormsDatetimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: FormsDatetimeComponent,
        selectors: [["app-forms-datetime"]],
        decls: 97,
        vars: 66,
        consts: [["href", "https://github.com/kuhnroyal/mat-datetimepicker", "target", "_blank"], [3, "formGroup"], ["matSuffix", "", 3, "for"], ["startView", "month", "type", "datetime", 3, "openOnFocus", "timeInterval"], ["datetimePicker", ""], ["autocomplete", "false", "formControlName", "dateTime", "matInput", "", "required", "", 3, "matDatetimepicker", "max", "min"], [4, "ngIf"], ["startView", "month", "type", "datetime", 3, "multiYearSelector", "openOnFocus", "timeInterval"], ["datetimeYearPicker", ""], ["autocomplete", "false", "formControlName", "dateTimeYear", "matInput", "", "required", "", 3, "matDatetimepicker", "max", "min"], ["type", "time", 3, "openOnFocus", "timeInterval"], ["timePicker", ""], ["formControlName", "time", "matInput", "", "required", "", 3, "matDatetimepicker"], ["type", "time", 3, "openOnFocus", "timeInterval", "twelvehour"], ["timeAMPMPicker", ""], ["formControlName", "timeAMPM", "matInput", "", "required", "", 3, "matDatetimepicker"], ["type", "date", 3, "openOnFocus"], ["datePicker", ""], ["formControlName", "date", "matInput", "", "required", "", 3, "matDatetimepicker"], ["mode", "portrait", "type", "month", 3, "openOnFocus"], ["monthPicker", ""], ["formControlName", "month", "matInput", "", "required", "", 3, "matDatetimepicker"], ["type", "year", 3, "openOnFocus"], ["yearPicker", ""], ["formControlName", "year", "matInput", "", "required", "", 3, "matDatetimepicker"], ["formControlName", "mintest", "matInput", "", "required", "", 3, "matDatetimepicker", "max", "min"], ["mode", "landscape", "type", "datetime", 3, "openOnFocus", "timeInterval"], ["minTestPicker", ""], ["formControlName", "filtertest", "matInput", "", "required", "", 3, "matDatepickerFilter", "matDatetimepicker"], ["filterTestPicker", ""], ["formControlName", "touch", "matInput", "", "required", "", 3, "matDatetimepicker", "min"], ["mode", "portrait", "type", "datetime", 3, "openOnFocus", "timeInterval", "touchUi"], ["touch", ""]],
        template: function FormsDatetimeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " The following examples use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "mat-datetimepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "DateTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "mat-datetimepicker", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, FormsDatetimeComponent_mat_error_18_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, FormsDatetimeComponent_mat_error_19_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, FormsDatetimeComponent_mat_error_20_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "DateTime Year selector");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "mat-datetimepicker", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FormsDatetimeComponent_mat_error_28_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, FormsDatetimeComponent_mat_error_29_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, FormsDatetimeComponent_mat_error_30_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "mat-datetimepicker", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, FormsDatetimeComponent_mat_error_38_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Time AM/PM");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "mat-datetimepicker", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, FormsDatetimeComponent_mat_error_46_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "mat-datetimepicker", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, FormsDatetimeComponent_mat_error_54_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "mat-datetimepicker", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, FormsDatetimeComponent_mat_error_62_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "mat-datetimepicker", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, FormsDatetimeComponent_mat_error_70_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Min/Max Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "mat-datetimepicker", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, FormsDatetimeComponent_mat_error_78_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, FormsDatetimeComponent_mat_error_79_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, FormsDatetimeComponent_mat_error_80_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Filter Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "mat-datetimepicker", 26, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, FormsDatetimeComponent_mat_error_88_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, FormsDatetimeComponent_mat_error_89_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "mat-placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "TouchUi");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "mat-datetimepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "mat-datetimepicker", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](52);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](77);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](87);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Date types with: ", ctx.type, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.group);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("timeInterval", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r0)("max", ctx.tomorrow)("min", ctx.today);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("dateTime").errors == null ? null : ctx.group.get("dateTime").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("dateTime").errors == null ? null : ctx.group.get("dateTime").errors.matDatepickerMin);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("dateTime").errors == null ? null : ctx.group.get("dateTime").errors.matDatepickerMax);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiYearSelector", true)("openOnFocus", true)("timeInterval", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r4)("max", ctx.tomorrow)("min", ctx.today);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("dateTimeYear").errors == null ? null : ctx.group.get("dateTimeYear").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("dateTimeYear").errors == null ? null : ctx.group.get("dateTimeYear").errors.matDatepickerMin);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("dateTimeYear").errors == null ? null : ctx.group.get("dateTimeYear").errors.matDatepickerMax);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("timeInterval", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("time").errors == null ? null : ctx.group.get("time").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("timeInterval", 5)("twelvehour", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("timeAMPM").errors == null ? null : ctx.group.get("timeAMPM").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("date").errors == null ? null : ctx.group.get("date").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("month").errors == null ? null : ctx.group.get("month").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("year").errors == null ? null : ctx.group.get("year").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r18)("max", ctx.max)("min", ctx.min);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("timeInterval", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("mintest").errors == null ? null : ctx.group.get("mintest").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("mintest").errors == null ? null : ctx.group.get("mintest").errors.matDatepickerMin);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("mintest").errors == null ? null : ctx.group.get("mintest").errors.matDatepickerMax);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepickerFilter", ctx.filter)("matDatetimepicker", _r22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("timeInterval", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("filtertest").errors == null ? null : ctx.group.get("filtertest").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.group.get("filtertest").errors == null ? null : ctx.group.get("filtertest").errors.matDatepickerFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatetimepicker", _r25)("min", ctx.min);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("openOnFocus", true)("timeInterval", 5)("touchUi", true);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPlaceholder"], _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__["MatDatetimepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__["MatDatetimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _mat_datetimepicker_core__WEBPACK_IMPORTED_MODULE_2__["MatDatetimepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0ZXRpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "2DEE":
    /*!*********************************************************!*\
      !*** ./src/app/routes/forms/select/select.component.ts ***!
      \*********************************************************/

    /*! exports provided: FormsSelectComponent */

    /***/
    function DEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSelectComponent", function () {
        return FormsSelectComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      "xVcI");
      /* harmony import */


      var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit/edit.component */
      "jYDj");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-matero/extensions/select */
      "YKwE");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");

      function FormsSelectComponent_mtx_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mtx-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var car_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", car_r2.id)("disabled", car_r2.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", car_r2.name, " ");
        }
      }

      function FormsSelectComponent_ng_template_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "create new");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        }

        if (rf & 2) {
          var search_r3 = ctx.searchTerm;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](": ", search_r3, " ");
        }
      }

      var _c0 = function _c0() {
        return [];
      };

      var FormsSelectComponent = /*#__PURE__*/function () {
        function FormsSelectComponent(dataService, dialog) {
          _classCallCheck(this, FormsSelectComponent);

          this.dataService = dataService;
          this.dialog = dialog;
          this.people = [];
          this.selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
          this.selectedPersonId2 = '5a15b13c36e7a7f00cf0d7cb';
          this.selectedSimpleItem = 'Two';
          this.simpleItems = [];
          this.disable = true;
          this.selectedCarId = 3;
          this.cars = [{
            id: 1,
            name: 'Volvo'
          }, {
            id: 2,
            name: 'Saab',
            disabled: true
          }, {
            id: 3,
            name: 'Opel'
          }, {
            id: 4,
            name: 'Audi'
          }]; // Tags

          this.companies = [];
          this.loading = false;
          this.companiesNames = ['Miškas', 'Žalias', 'Flexigen'];
          this.selectedCompany = '';
          this.selectedCompanyCustom = '';
          this.selectedCompanyCustomPromise = '';
        }

        _createClass(FormsSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.people$ = this.dataService.getPeople();
            this.dataService.getPeople().subscribe(function (items) {
              return _this2.people = items;
            });
            this.simpleItems = [true, 'Two', 3];
            this.companiesNames.forEach(function (c, i) {
              _this2.companies.push({
                id: i,
                name: c
              });
            });
          }
        }, {
          key: "toggleDisabled",
          value: function toggleDisabled() {
            var car = this.cars[1];
            car.disabled = !car.disabled;
          }
        }, {
          key: "addTag",
          value: function addTag(name) {
            return {
              name: name,
              tag: true
            };
          }
        }, {
          key: "addTagPromise",
          value: function addTagPromise(name) {
            var _this3 = this;

            return new Promise(function (resolve) {
              _this3.loading = true;
              setTimeout(function () {
                resolve({
                  id: 5,
                  name: name,
                  valid: true
                });
                _this3.loading = false;
              }, 1000);
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["FormsSelectEditComponent"], {
              autoFocus: false
            });
          }
        }]);

        return FormsSelectComponent;
      }();

      FormsSelectComponent.ɵfac = function FormsSelectComponent_Factory(t) {
        return new (t || FormsSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]));
      };

      FormsSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: FormsSelectComponent,
        selectors: [["app-forms-selects"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])],
        decls: 111,
        vars: 45,
        consts: [[1, "m-b-16"], ["href", "https://ng-matero.github.io/extensions/select", "target", "_blank"], ["href", "https://ng-matero.github.io/extensions/", "target", "_blank"], ["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", "fxFlex.gt-sm", "50", 1, "matero-col"], [1, "w-full"], ["bindLabel", "name", "bindValue", "id", "autofocus", "", 3, "items", "ngModel", "ngModelChange"], ["inset", "", 1, "m-y-16"], ["bindLabel", "name", "bindValue", "id", 3, "items", "ngModel", "ngModelChange"], [3, "items", "ngModel", "ngModelChange"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "m-b-8", 3, "click"], [3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value"], [3, "items", "addTag", "ngModel", "ngModelChange"], ["bindLabel", "name", 3, "items", "addTag", "hideSelected", "multiple", "ngModel", "ngModelChange"], ["bindLabel", "name", 3, "items", "addTag", "multiple", "loading", "ngModel", "ngModelChange"], ["ng-tag-tmp", ""], [3, "items", "addTag", "multiple", "selectOnTab", "isOpen"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value", "disabled"]],
        template: function FormsSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " The following examples use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "mtx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " component of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Material Extensions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, ", it is a Material form field wrapper of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "ng-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Data Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Most common case is showing data from backend API and with mtx-select this is extremely simple since you can bind directly to observable when using angular ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " | async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " pipe. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "select person");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mtx-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_27_listener($event) {
              return ctx.selectedPersonId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " You can also set array of objects as items input. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "select person");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mtx-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_36_listener($event) {
              return ctx.selectedPersonId2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " While array of objects is the most common items source, you may want to set simple array of strings, numbers, booleans. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "select person");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mtx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_44_listener($event) {
              return ctx.selectedSimpleItem = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " If you have simple use case, you can omit items array and bind options directly in html using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "ng-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " component. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormsSelectComponent_Template_button_click_53_listener() {
              return ctx.toggleDisabled();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Toggle option[1] disabled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Select car");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mtx-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_58_listener($event) {
              return ctx.selectedCarId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, FormsSelectComponent_mtx_option_59_Template, 2, 3, "mtx-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mtx-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Default tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Select item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mtx-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_74_listener($event) {
              return ctx.selectedCompany = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Custom tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Select item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mtx-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_84_listener($event) {
              return ctx.selectedCompanyCustom = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Server side tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Select item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mtx-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsSelectComponent_Template_mtx_select_ngModelChange_94_listener($event) {
              return ctx.selectedCompanyCustomPromise = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, FormsSelectComponent_ng_template_95_Template, 3, 1, "ng-template", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Tagging without dropdown. Press enter to add item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Select item");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "mtx-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Select in dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Test ng-select in a dialog.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormsSelectComponent_Template_button_click_109_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Open Dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 33, ctx.people$))("ngModel", ctx.selectedPersonId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected: ", ctx.selectedPersonId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.people)("ngModel", ctx.selectedPersonId2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected: ", ctx.selectedPersonId2, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.simpleItems)("ngModel", ctx.selectedSimpleItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 35, ctx.selectedSimpleItem), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedCarId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cars);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected car ID: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 37, ctx.selectedCarId), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](43, _c0))("addTag", true)("ngModel", ctx.selectedCompany);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected value: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 39, ctx.selectedCompany), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.companies)("addTag", ctx.addTag)("hideSelected", true)("multiple", true)("ngModel", ctx.selectedCompanyCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected value: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](87, 41, ctx.selectedCompanyCustom), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.companies)("addTag", ctx.addTagPromise)("multiple", true)("loading", ctx.loading)("ngModel", ctx.selectedCompanyCustomPromise);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](44, _c0))("addTag", true)("multiple", true)("selectOnTab", true)("isOpen", false);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_8__["MtxSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_8__["MtxOptionComponent"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_8__["MtxSelectTagTemplateDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵo"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "3AfC":
    /*!******************************************************!*\
      !*** ./src/app/routes/forms/forms-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: FormsRoutingModule */

    /***/
    function AfC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
        return FormsRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _elements_elements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./elements/elements.component */
      "t5E5");
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select/select.component */
      "2DEE");
      /* harmony import */


      var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dynamic/dynamic.component */
      "paWO");
      /* harmony import */


      var _datetime_datetime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./datetime/datetime.component */
      "/KwS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'elements',
        component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_1__["FormsElementsComponent"]
      }, {
        path: 'dynamic',
        component: _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["FormsDynamicComponent"]
      }, {
        path: 'select',
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_2__["FormsSelectComponent"]
      }, {
        path: 'datetime',
        component: _datetime_datetime_component__WEBPACK_IMPORTED_MODULE_4__["FormsDatetimeComponent"]
      }];

      var FormsRoutingModule = function FormsRoutingModule() {
        _classCallCheck(this, FormsRoutingModule);
      };

      FormsRoutingModule.ɵfac = function FormsRoutingModule_Factory(t) {
        return new (t || FormsRoutingModule)();
      };

      FormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: FormsRoutingModule
      });
      FormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "NW+7":
    /*!**********************************************!*\
      !*** ./src/app/routes/forms/forms.module.ts ***!
      \**********************************************/

    /*! exports provided: FormsModule */

    /***/
    function NW7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return FormsModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _forms_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forms-routing.module */
      "3AfC");
      /* harmony import */


      var _elements_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./elements/elements.component */
      "t5E5");
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select/select.component */
      "2DEE");
      /* harmony import */


      var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dynamic/dynamic.component */
      "paWO");
      /* harmony import */


      var _datetime_datetime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./datetime/datetime.component */
      "/KwS");
      /* harmony import */


      var _select_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select/edit/edit.component */
      "jYDj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_elements_elements_component__WEBPACK_IMPORTED_MODULE_2__["FormsElementsComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_3__["FormsSelectComponent"], _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_4__["FormsDynamicComponent"], _datetime_datetime_component__WEBPACK_IMPORTED_MODULE_5__["FormsDatetimeComponent"]];
      var COMPONENTS_DYNAMIC = [_select_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["FormsSelectEditComponent"]];

      var FormsModule = function FormsModule() {
        _classCallCheck(this, FormsModule);
      };

      FormsModule.ɵfac = function FormsModule_Factory(t) {
        return new (t || FormsModule)();
      };

      FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: FormsModule
      });
      FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormsModule, {
          declarations: [_elements_elements_component__WEBPACK_IMPORTED_MODULE_2__["FormsElementsComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_3__["FormsSelectComponent"], _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_4__["FormsDynamicComponent"], _datetime_datetime_component__WEBPACK_IMPORTED_MODULE_5__["FormsDatetimeComponent"], _select_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["FormsSelectEditComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormsRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "jYDj":
    /*!************************************************************!*\
      !*** ./src/app/routes/forms/select/edit/edit.component.ts ***!
      \************************************************************/

    /*! exports provided: FormsSelectEditComponent */

    /***/
    function jYDj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSelectEditComponent", function () {
        return FormsSelectEditComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-matero/extensions/select */
      "YKwE");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var FormsSelectEditComponent = /*#__PURE__*/function () {
        function FormsSelectEditComponent(dialogRef, data) {
          _classCallCheck(this, FormsSelectEditComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.defaultBindingsList = [{
            value: 1,
            label: 'Vilnius'
          }, {
            value: 2,
            label: 'Kaunas'
          }, {
            value: 3,
            label: 'Pavilnys',
            disabled: true
          }];
          this.selectedCity = null;
        }

        _createClass(FormsSelectEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormsSelectEditComponent;
      }();

      FormsSelectEditComponent.ɵfac = function FormsSelectEditComponent_Factory(t) {
        return new (t || FormsSelectEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      FormsSelectEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormsSelectEditComponent,
        selectors: [["app-forms-select-edit"]],
        decls: 15,
        vars: 5,
        consts: [[3, "items", "ngModel", "ngModelChange"], [1, "m-x-8"], [3, "items", "ngModel", "appendTo", "ngModelChange"]],
        template: function FormsSelectEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " By default dropdown panel is rendered as child element of ng-select, but you can append dropdown to any element using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "appendTo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " If you place ng-select inside container with fixed height and hidden overflow then dropdown will not be fully visible.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Without appendTo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mtx-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormsSelectEditComponent_Template_mtx_select_ngModelChange_10_listener($event) {
              return ctx.selectedCity = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "With appendTo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mtx-select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormsSelectEditComponent_Template_mtx_select_ngModelChange_14_listener($event) {
              return ctx.selectedCity = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.defaultBindingsList)("ngModel", ctx.selectedCity);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.defaultBindingsList)("ngModel", ctx.selectedCity)("appendTo", "app-admin-layout");
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_3__["MtxSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "paWO":
    /*!***********************************************************!*\
      !*** ./src/app/routes/forms/dynamic/dynamic.component.ts ***!
      \***********************************************************/

    /*! exports provided: FormsDynamicComponent */

    /***/
    function paWO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsDynamicComponent", function () {
        return FormsDynamicComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-formly/core */
      "0FS3");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var FormsDynamicComponent = /*#__PURE__*/function () {
        function FormsDynamicComponent(toastr) {
          _classCallCheck(this, FormsDynamicComponent);

          this.toastr = toastr;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
          this.model = {
            email: 'email@gmail.com'
          };
          this.fields = [{
            key: 'text',
            type: 'input',
            templateOptions: {
              label: 'Text',
              placeholder: 'Type here to see the other field become enabled...',
              required: true
            }
          }, {
            key: 'text2',
            type: 'input',
            templateOptions: {
              label: 'Hey!',
              placeholder: 'This one is disabled if there is no text in the other input'
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.text'
            }
          }, {
            key: 'email',
            type: 'input',
            templateOptions: {
              label: 'Email address',
              placeholder: 'Enter email',
              required: true
            }
          }]; // Advanced Layout

          this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
          this.model2 = {};
          this.options = {};
          this.fields2 = [{
            fieldGroupClassName: 'row',
            fieldGroup: [{
              className: 'col-sm-6',
              type: 'input',
              key: 'firstName',
              templateOptions: {
                label: 'First Name',
                required: true
              }
            }, {
              className: 'col-sm-6',
              type: 'input',
              key: 'lastName',
              templateOptions: {
                label: 'Last Name',
                required: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.firstName'
              }
            }]
          }, {
            fieldGroupClassName: 'row',
            fieldGroup: [{
              className: 'col-sm-6',
              type: 'input',
              key: 'street',
              templateOptions: {
                label: 'Street'
              }
            }, {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'cityId',
              templateOptions: {
                label: 'City',
                options: [{
                  id: 1,
                  name: 'Dewas'
                }, {
                  id: 2,
                  name: 'Ujjain'
                }, {
                  id: 3,
                  name: 'Bhopal'
                }, {
                  id: 4,
                  name: 'Indore'
                }],
                labelProp: 'name',
                valueProp: 'id',
                required: true,
                description: 'This is a custom field type.'
              },
              wrappers: ['form-field']
            }, {
              className: 'col-sm-3',
              type: 'input',
              key: 'zip',
              templateOptions: {
                type: 'number',
                label: 'Zip',
                max: 999999,
                min: 0,
                pattern: '\\d{5}'
              }
            }]
          }, {
            type: 'textarea',
            key: 'otherInput',
            templateOptions: {
              label: 'Other Input'
            }
          }, {
            type: 'checkbox',
            key: 'otherToo',
            templateOptions: {
              label: 'Other Checkbox'
            }
          }];
        }

        _createClass(FormsDynamicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            if (this.form.valid) {
              this.showToast(this.model);
            }
          }
        }, {
          key: "submit2",
          value: function submit2() {
            if (this.form2.valid) {
              this.showToast(this.model2);
            }
          }
        }, {
          key: "showToast",
          value: function showToast(obj) {
            this.toastr.success(JSON.stringify(obj));
          }
        }]);

        return FormsDynamicComponent;
      }();

      FormsDynamicComponent.ɵfac = function FormsDynamicComponent_Factory(t) {
        return new (t || FormsDynamicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
      };

      FormsDynamicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FormsDynamicComponent,
        selectors: [["app-forms-dynamic"]],
        decls: 21,
        vars: 10,
        consts: [["href", "https://github.com/ngx-formly/ngx-formly", "target", "_blank"], [3, "formGroup", "ngSubmit"], [3, "form", "fields", "model"], ["mat-raised-button", "", "color", "primary"], [3, "model", "fields", "options", "form"], ["mat-raised-button", "", "color", "primary", 3, "disabled"]],
        template: function FormsDynamicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " The dynamic forms are powered by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ngx-formly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Simple");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormsDynamicComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "formly-form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Advanced Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormsDynamicComponent_Template_form_ngSubmit_17_listener() {
              return ctx.submit2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "formly-form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fields)("model", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.model2)("fields", ctx.fields2)("options", ctx.options)("form", ctx.form2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form2.valid);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    "t5E5":
    /*!*************************************************************!*\
      !*** ./src/app/routes/forms/elements/elements.component.ts ***!
      \*************************************************************/

    /*! exports provided: FormsElementsComponent */

    /***/
    function t5E5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsElementsComponent", function () {
        return FormsElementsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      function FormsElementsComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsElementsComponent_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsElementsComponent_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsElementsComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r3.getErrorMessage(ctx_r3.reactiveForm1)), " ");
        }
      }

      function FormsElementsComponent_mat_error_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsElementsComponent_mat_error_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsElementsComponent_mat_error_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function FormsElementsComponent_mat_error_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r8.getErrorMessage(ctx_r8.reactiveForm2)), " ");
        }
      }

      var FormsElementsComponent = /*#__PURE__*/function () {
        function FormsElementsComponent(fb, dateAdapter, translate) {
          _classCallCheck(this, FormsElementsComponent);

          this.fb = fb;
          this.dateAdapter = dateAdapter;
          this.translate = translate;
          this.q = {
            username: '',
            email: '',
            gender: ''
          };
          this.reactiveForm1 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            city: [''],
            address: [''],
            company: [''],
            tele: [''],
            website: [''],
            date: ['']
          });
          this.reactiveForm2 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            city: [''],
            address: [''],
            company: [''],
            tele: [''],
            website: [''],
            date: ['']
          });
        }

        _createClass(FormsElementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.translateSubscription = this.translate.onLangChange.subscribe(function (res) {
              _this4.dateAdapter.setLocale(res.lang);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.translateSubscription.unsubscribe();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'validations.required' : form.get('email').hasError('email') ? 'validations.invalid_email' : '';
          }
        }]);

        return FormsElementsComponent;
      }();

      FormsElementsComponent.ɵfac = function FormsElementsComponent_Factory(t) {
        return new (t || FormsElementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      };

      FormsElementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: FormsElementsComponent,
        selectors: [["app-forms-elements"]],
        decls: 158,
        vars: 17,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [1, "m-r-8"], ["matInput", "", "placeholder", "Username", "name", "username", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Email", "name", "email", 3, "ngModel", "ngModelChange"], ["name", "gender", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["mat-raised-button", "", "color", "primary"], ["fxFlex", "33.33", "fxFlex.lt-sm", "100", 1, "matero-col"], [1, "form-field-full", 3, "formGroup"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "required", ""], [4, "ngIf"], ["required", "", "formControlName", "gender", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "city"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "address"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "company"], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "tele"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "website"], ["matInput", "", "placeholder", "Choose a date", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "primary", 1, "m-t-8"], ["fxFlex", "66.67", "fxFlex.lt-sm", "100", 1, "matero-col"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["picker2", ""]],
        template: function FormsElementsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "page-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Form Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsElementsComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.q.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsElementsComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.q.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormsElementsComponent_Template_mat_select_ngModelChange_14_listener($event) {
              return ctx.q.gender = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "male");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "female");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Form Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, FormsElementsComponent_mat_error_32_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "male");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "female");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, FormsElementsComponent_mat_error_43_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, FormsElementsComponent_mat_error_50_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, FormsElementsComponent_mat_error_55_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Tele");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "mat-datepicker-toggle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "mat-datepicker", null, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Form Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, FormsElementsComponent_mat_error_96_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "male");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "female");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, FormsElementsComponent_mat_error_108_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, FormsElementsComponent_mat_error_116_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](122, FormsElementsComponent_mat_error_122_Template, 3, 3, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Tele");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "mat-datepicker-toggle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "mat-datepicker", null, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](82);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](155);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.q.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.q.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.q.gender);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reactiveForm1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm1.get("username").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm1.get("gender").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm1.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm1.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reactiveForm2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm2.get("username").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm2.get("gender").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm2.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reactiveForm2.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r9);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "xVcI":
    /*!**********************************************!*\
      !*** ./src/app/routes/forms/data.service.ts ***!
      \**********************************************/

    /*! exports provided: DataService */

    /***/
    function xVcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
        }

        _createClass(DataService, [{
          key: "getGithubAccounts",
          value: function getGithubAccounts() {
            var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (term) {
              return this.http.get("https://api.github.com/search/users?q=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (rsp) {
                return rsp.items;
              }));
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }
          }
        }, {
          key: "getAlbums",
          value: function getAlbums() {
            return this.http.get('https://jsonplaceholder.typicode.com/albums');
          }
        }, {
          key: "getPhotos",
          value: function getPhotos() {
            return this.http.get('https://jsonplaceholder.typicode.com/photos');
          }
        }, {
          key: "getPeople",
          value: function getPeople() {
            var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var items = getMockPeople();

            if (term) {
              items = items.filter(function (x) {
                return x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(500));
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac
      });

      function getMockPeople() {
        return [{
          id: '5a15b13c36e7a7f00cf0d7cb',
          index: 2,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 23,
          name: 'Karyn Wright',
          gender: 'female',
          company: 'ZOLAR',
          email: 'karynwright@zolar.com',
          phone: '+1 (851) 583-2547'
        }, {
          id: '5a15b13c2340978ec3d2c0ea',
          index: 3,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 35,
          name: 'Rochelle Estes',
          disabled: true,
          gender: 'female',
          company: 'EXTRAWEAR',
          email: 'rochelleestes@extrawear.com',
          phone: '+1 (849) 408-2029'
        }, {
          id: '5a15b13c663ea0af9ad0dae8',
          index: 4,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 25,
          name: 'Mendoza Ruiz',
          gender: 'male',
          company: 'ZYTRAX',
          email: 'mendozaruiz@zytrax.com',
          phone: '+1 (904) 536-2020'
        }, {
          id: '5a15b13cc9eeb36511d65acf',
          index: 5,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 39,
          name: 'Rosales Russell',
          gender: 'male',
          company: 'ELEMANTRA',
          email: 'rosalesrussell@elemantra.com',
          phone: '+1 (868) 473-3073'
        }, {
          id: '5a15b13c728cd3f43cc0fe8a',
          index: 6,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 32,
          name: 'Marquez Nolan',
          gender: 'male',
          company: 'MIRACLIS',
          disabled: true,
          email: 'marqueznolan@miraclis.com',
          phone: '+1 (853) 571-3921'
        }, {
          id: '5a15b13ca51b0aaf8a99c05a',
          index: 7,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 28,
          name: 'Franklin James',
          gender: 'male',
          company: 'CAXT',
          email: 'franklinjames@caxt.com',
          phone: '+1 (868) 539-2984'
        }, {
          id: '5a15b13cc3b9381ffcb1d6f7',
          index: 8,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 24,
          name: 'Elsa Bradley',
          gender: 'female',
          company: 'MATRIXITY',
          email: 'elsabradley@matrixity.com',
          phone: '+1 (994) 583-3850'
        }, {
          id: '5a15b13ce58cb6ff62c65164',
          index: 9,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 40,
          name: 'Pearson Thompson',
          gender: 'male',
          company: 'EZENT',
          email: 'pearsonthompson@ezent.com',
          phone: '+1 (917) 537-2178'
        }, {
          id: '5a15b13c90b95eb68010c86e',
          index: 10,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 32,
          name: 'Ina Pugh',
          gender: 'female',
          company: 'MANTRIX',
          email: 'inapugh@mantrix.com',
          phone: '+1 (917) 450-2372'
        }, {
          id: '5a15b13c2b1746e12788711f',
          index: 11,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 25,
          name: 'Nguyen Elliott',
          gender: 'male',
          company: 'PORTALINE',
          email: 'nguyenelliott@portaline.com',
          phone: '+1 (905) 491-3377'
        }, {
          id: '5a15b13c605403381eec5019',
          index: 12,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 31,
          name: 'Mills Barnett',
          gender: 'male',
          company: 'FARMEX',
          email: 'millsbarnett@farmex.com',
          phone: '+1 (882) 462-3986'
        }, {
          id: '5a15b13c67e2e6d1a3cd6ca5',
          index: 13,
          isActive: true,
          picture: 'http://placehold.it/32x32',
          age: 36,
          name: 'Margaret Reynolds',
          gender: 'female',
          company: 'ROOFORIA',
          email: 'margaretreynolds@rooforia.com',
          phone: '+1 (935) 435-2345'
        }, {
          id: '5a15b13c947c836d177aa85c',
          index: 14,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 29,
          name: 'Yvette Navarro',
          gender: 'female',
          company: 'KINETICA',
          email: 'yvettenavarro@kinetica.com',
          phone: '+1 (807) 485-3824'
        }, {
          id: '5a15b13c5dbbe61245c1fb73',
          index: 15,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 20,
          name: 'Elisa Guzman',
          gender: 'female',
          company: 'KAGE',
          email: 'elisaguzman@kage.com',
          phone: '+1 (868) 594-2919'
        }, {
          id: '5a15b13c38fd49fefea8db80',
          index: 16,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 33,
          name: 'Jodie Bowman',
          gender: 'female',
          company: 'EMTRAC',
          email: 'jodiebowman@emtrac.com',
          phone: '+1 (891) 565-2560'
        }, {
          id: '5a15b13c9680913c470eb8fd',
          index: 17,
          isActive: false,
          picture: 'http://placehold.it/32x32',
          age: 24,
          name: 'Diann Booker',
          gender: 'female',
          company: 'LYRIA',
          email: 'diannbooker@lyria.com',
          phone: '+1 (830) 555-3209'
        }];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=forms-forms-module-es5.js.map