(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-material-module"], {
    /***/
    "1Z+R":
    /*!********************************************************!*\
      !*** ./src/app/routes/material/menu/menu.component.ts ***!
      \********************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function ZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var MenuComponent = function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      };

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 50,
        vars: 3,
        consts: [[1, "demo-menu"], ["menu1", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", "aria-label", "Open Menu", 3, "matMenuTriggerFor"], ["menu2", "matMenu"], ["mat-icon-button", "", "aria-label", "Learn more about Angular", 3, "matMenuTriggerFor"], ["menu3", "matMenu"], ["href", "http://angular.io", "mat-menu-item", ""], ["href", "http://material.angular.io", "mat-menu-item", ""]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Icon Trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Help ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Menu with Icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "dialpad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Redial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "voicemail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Check voicemail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "notifications_off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Disable alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Menu with links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-menu", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Angular ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Angular Material ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: [".demo-menu[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 8px;\n}\n.demo-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tbWVudSB7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "1g5A":
    /*!************************************************************!*\
      !*** ./src/app/routes/material/ripple/ripple.component.ts ***!
      \************************************************************/

    /*! exports provided: RippleComponent */

    /***/
    function g5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleComponent", function () {
        return RippleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var RippleComponent = function RippleComponent() {
        _classCallCheck(this, RippleComponent);

        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
      };

      RippleComponent.ɵfac = function RippleComponent_Factory(t) {
        return new (t || RippleComponent)();
      };

      RippleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RippleComponent,
        selectors: [["app-ripple"]],
        decls: 14,
        vars: 10,
        consts: [[1, "example-ripple-checkbox", 3, "ngModel", "ngModelChange"], [1, "example-ripple-form-field"], ["matInput", "", "type", "number", "placeholder", "Radius", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Color", 3, "ngModel", "ngModelChange"], ["matRipple", "", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius", "matRippleColor"]],
        template: function RippleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RippleComponent_Template_mat_checkbox_ngModelChange_2_listener($event) {
              return ctx.centered = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Centered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RippleComponent_Template_mat_checkbox_ngModelChange_4_listener($event) {
              return ctx.disabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RippleComponent_Template_mat_checkbox_ngModelChange_6_listener($event) {
              return ctx.unbounded = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unbounded");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RippleComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.radius = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RippleComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Click me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.centered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.unbounded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radius);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleCentered", ctx.centered)("matRippleDisabled", ctx.disabled)("matRippleUnbounded", ctx.unbounded)("matRippleRadius", ctx.radius)("matRippleColor", ctx.color);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"]],
        styles: [".example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmlwcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBLDBDQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoicmlwcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBsaW5lLWhlaWdodDogMzAwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiogU3R5bGVzIHRvIG1ha2UgdGhlIGRlbW8gbG9vayBiZXR0ZXIuICovXHJcbi5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XHJcbiAgbWFyZ2luOiA2cHggMTJweCA2cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMCAxMnB4IDAgMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "31CT":
    /*!******************************************************************************!*\
      !*** ./src/app/routes/material/expansion-panel/expansion-panel.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ExpansionPanelComponent */

    /***/
    function CT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function () {
        return ExpansionPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ExpansionPanelComponent = function ExpansionPanelComponent() {
        _classCallCheck(this, ExpansionPanelComponent);

        this.panelOpenState = false;
      };

      ExpansionPanelComponent.ɵfac = function ExpansionPanelComponent_Factory(t) {
        return new (t || ExpansionPanelComponent)();
      };

      ExpansionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExpansionPanelComponent,
        selectors: [["app-expansion-panel"]],
        decls: 46,
        vars: 1,
        consts: [[1, "demo-expansion"], ["myPanel", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "href", "https://en.wikipedia.org/wiki/Siberian_Husky", "target", "_blank"], ["panel1", ""], [3, "disabled"], ["panel2", ""], ["panel3", ""]],
        template: function ExpansionPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Siberian Husky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Single expansion panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Dog breed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Siberian Husky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Siberian Husky is a medium size working dog breed that originated in north-eastern Siberia, Russia. The breed belongs to the Spitz genetic family. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              return _r0.expanded = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Wikipedia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dog breeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Multiple expansion panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Golden Retriever");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged. Golden Retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-expansion-panel", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Beagle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " The Beagle is a breed of small hound, similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-expansion-panel", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dachshund");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " The dachshund is a short-legged, long-bodied, hound-type dog breed. The standard size dachshund was developed to scent, chase, and flush out badgers and other burrow-dwelling animals, while the miniature ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionPanelComponent_Template_button_click_44_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              return _r3.expanded = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"]],
        styles: [".demo-expansion[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .demo-expansion[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 8px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLFdBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6ImV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWV4cGFuc2lvbiB7XHJcbiAgYnV0dG9uLFxyXG4gIGEge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "36ro":
    /*!********************************************************!*\
      !*** ./src/app/routes/material/card/card.component.ts ***!
      \********************************************************/

    /*! exports provided: CardComponent */

    /***/
    function ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent(snackBar) {
          _classCallCheck(this, CardComponent);

          this.snackBar = snackBar;
          this.showProgress = false;
        }

        _createClass(CardComponent, [{
          key: "openSnackbar",
          value: function openSnackbar(message) {
            this.snackBar.open(message, '', {
              duration: 2000
            });
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        decls: 92,
        vars: 0,
        consts: [["role", "group", 1, "demo-card"], [1, "demo-card"], ["mat-card-avatar", "", "src", "https://material.angularjs.org/material2_assets/ngconf/Porter.png", "aria-label", "Dachshund avatar"], ["mat-card-image", "", "src", "https://material.angularjs.org/material2_assets/ngconf/Koby.png", "aria-label", "Dachshund"], ["mat-card-avatar", "", "src", "https://material.angularjs.org/material2_assets/ngconf/Molly.png", "aria-label", "Shiba Inu avatar"], ["mat-card-image", "", "src", "https://material.angularjs.org/material2_assets/ngconf/Husi.png", "aria-label", "Shiba Inu"], ["align", "end"], ["mat-button", "", 3, "click"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dogs group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Showing a card with a group of content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Herding Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hound Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Non-Sporting Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sporting Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Terrier Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Toy Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Working Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Foundation Stock Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Miscellaneous Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Husky");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Showing a card with title only.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Siberian Husky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Malamute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Showing a Card with title and subtitle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Alaskan Malamute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Dog breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "German Shepherd");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Showing a card with title, subtitle, and a footer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Dog breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "German Shepherd");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. The breed's officially recognized name is German Shepherd Dog in the English language. The breed is also known as the Alsatian in Britain and Ireland. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " People also search for Rottweiler, Siberian Husky, Labrador Retriever, Doberman Pinscher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Dachshund");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Showing a card with title, subtitle, and avatar as header and a card image.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Dachshund");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Dog breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " The dachshund is a short-legged, long-bodied, hound-type dog breed. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Shiba Inu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Showing a card with header, content, image, and two action buttons: \"share\" and \"like\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Shiba Inu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Dog Breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-card-actions", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_button_click_88_listener() {
              return ctx.openSnackbar("Liked Shiba Inu");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "like");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_button_click_90_listener() {
              return ctx.openSnackbar("Shared Shiba Inu");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".demo-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.demo-card[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jYXJkIGJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmRlbW8tY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "4rbX":
    /*!************************************************************!*\
      !*** ./src/app/routes/material/button/button.component.ts ***!
      \************************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function rbX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent(snackBar) {
          _classCallCheck(this, ButtonComponent);

          this.snackBar = snackBar;
          this.counter = 0;
        }

        _createClass(ButtonComponent, [{
          key: "openSnackBar",
          value: function openSnackBar(message) {
            this.snackBar.open(message, '', {
              duration: 2000
            });
          }
        }, {
          key: "increase",
          value: function increase() {
            this.counter++;
            this.openSnackBar("Click counter is set to ".concat(this.counter));
          }
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        decls: 55,
        vars: 2,
        consts: [[1, "demo-button"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", 3, "click"], ["mat-fab", "", "aria-label", "Activate floating action style button to increase the button counter", 3, "click"], ["mat-mini-fab", "", "aria-label", "Mini floating action button to increase the button counter by 1", 3, "click"], ["mat-icon-button", "", "aria-label", "Icon button to increase the button counter by 1", 3, "click"], ["href", "http://www.google.com", "mat-button", "", "color", "primary"], ["href", "https://www.youtube.com/", "mat-raised-button", ""], ["href", "http://www.google.com", "mat-fab", "", "aria-label", "Activate floating action style google search link"], ["href", "http://www.google.com", "mat-mini-fab", "", "aria-label", "Activate mini floating action style google search link"], ["href", "http://www.google.com", "mat-icon-button", "", "aria-label", "Activate icon style google search link"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", 3, "disabled"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Button elements");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Click on the buttons to increase the button counter.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_10_listener() {
              return ctx.increase();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_12_listener() {
              return ctx.increase();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Pitch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_14_listener() {
              return ctx.increase();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "plus_one");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_17_listener() {
              return ctx.increase();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "plus_one");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_20_listener() {
              return ctx.increase();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "plus_one");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Anchor elements");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Google search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "YouTube");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Buttons in different colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_42_listener() {
              return ctx.openSnackBar("Color is primary.");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_44_listener() {
              return ctx.openSnackBar("Color is accent.");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_46_listener() {
              return ctx.openSnackBar("Color is warn.");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Disabled button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "The following \"cancel\" button is disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current number of clicks: ", ctx.counter, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
        styles: [".demo-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .demo-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 8px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLFdBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWJ1dHRvbiB7XHJcbiAgYnV0dG9uLFxyXG4gIGEge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "5eDt":
    /*!************************************************************!*\
      !*** ./src/app/routes/material/dialog/dialog.component.ts ***!
      \************************************************************/

    /*! exports provided: DialogComponent, DialogFruitComponent, DialogWelcomeComponent, DialogNeptuneComponent, DialogNeptuneIFrameComponent, DialogAddressFormComponent */

    /***/
    function eDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
        return DialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogFruitComponent", function () {
        return DialogFruitComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogWelcomeComponent", function () {
        return DialogWelcomeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogNeptuneComponent", function () {
        return DialogNeptuneComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogNeptuneIFrameComponent", function () {
        return DialogNeptuneIFrameComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogAddressFormComponent", function () {
        return DialogAddressFormComponent;
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


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function DialogComponent_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" You chose: ", ctx_r0.fruitSelectedOption, " ");
        }
      }

      var DialogComponent = /*#__PURE__*/function () {
        function DialogComponent(dialog) {
          _classCallCheck(this, DialogComponent);

          this.dialog = dialog;
          this.fruitSelectedOption = '';
        }

        _createClass(DialogComponent, [{
          key: "openFruitDialog",
          value: function openFruitDialog() {
            var _this = this;

            var dialogRef = this.dialog.open(DialogFruitComponent);
            dialogRef.afterClosed().subscribe(function (result) {
              return _this.fruitSelectedOption = result;
            });
          }
        }, {
          key: "openWelcomeDialog",
          value: function openWelcomeDialog() {
            this.dialog.open(DialogWelcomeComponent);
          }
        }, {
          key: "openNeptuneDialog",
          value: function openNeptuneDialog() {
            this.dialog.open(DialogNeptuneComponent);
          }
        }, {
          key: "openAddressDialog",
          value: function openAddressDialog() {
            this.dialog.open(DialogAddressFormComponent);
          }
        }]);

        return DialogComponent;
      }();

      DialogComponent.ɵfac = function DialogComponent_Factory(t) {
        return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]));
      };

      DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogComponent,
        selectors: [["app-dialog"]],
        decls: 31,
        vars: 1,
        consts: [["mat-button", "", 3, "click"], [4, "ngIf"]],
        template: function DialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Activate the button to see a welcome dialog with a simple message and a close button.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_7_listener() {
              return ctx.openWelcomeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Choose a fruit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Active the button to choose apple or peach in a dialog.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_14_listener() {
              return ctx.openFruitDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Fruit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DialogComponent_p_16_Template, 2, 1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Neptune");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Active the button to see a dialog showing information of Neptune. A Wikipedia page can be opened either in a new tab or in a stacked dialog. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_22_listener() {
              return ctx.openNeptuneDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Learn Neptune");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Address form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Active the button to fill out shipping address information in a dialog. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_29_listener() {
              return ctx.openAddressDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Add address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fruitSelectedOption);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
      }); // Dialog

      var DialogFruitComponent = function DialogFruitComponent() {
        _classCallCheck(this, DialogFruitComponent);
      };

      DialogFruitComponent.ɵfac = function DialogFruitComponent_Factory(t) {
        return new (t || DialogFruitComponent)();
      };

      DialogFruitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogFruitComponent,
        selectors: [["dialog-fruit"]],
        decls: 9,
        vars: 0,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "peach", "aria-label", "Peach"], ["mat-button", "", "mat-dialog-close", "apple", "aria-label", "Apple"]],
        template: function DialogFruitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fruit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Which would you like to choose?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Peach");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Apple");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        encapsulation: 2
      });

      var DialogWelcomeComponent = function DialogWelcomeComponent() {
        _classCallCheck(this, DialogWelcomeComponent);
      };

      DialogWelcomeComponent.ɵfac = function DialogWelcomeComponent_Factory(t) {
        return new (t || DialogWelcomeComponent)();
      };

      DialogWelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogWelcomeComponent,
        selectors: [["dialog-welcome"]],
        decls: 8,
        vars: 0,
        consts: [["mat-button", "", "color", "primary", "mat-dialog-close", ""]],
        template: function DialogWelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Welcome to Angular Material dialog demo page!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " The mission of the Web Accessibility Initiative (WAI) is to lead the Web to its full potential to be accessible, enabling people with disabilities to participate equally on the Web.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        encapsulation: 2
      });

      var DialogNeptuneComponent = /*#__PURE__*/function () {
        function DialogNeptuneComponent(dialog) {
          _classCallCheck(this, DialogNeptuneComponent);

          this.dialog = dialog;
        }

        _createClass(DialogNeptuneComponent, [{
          key: "showInStackedDialog",
          value: function showInStackedDialog() {
            this.dialog.open(DialogNeptuneIFrameComponent);
          }
        }]);

        return DialogNeptuneComponent;
      }();

      DialogNeptuneComponent.ɵfac = function DialogNeptuneComponent_Factory(t) {
        return new (t || DialogNeptuneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]));
      };

      DialogNeptuneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogNeptuneComponent,
        selectors: [["dialog-neptune-dialog"]],
        decls: 13,
        vars: 0,
        consts: [["mat-dialog-title", ""], ["src", "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg", "alt", "Neptune"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], ["mat-button", "", "color", "primary", "href", "https://en.wikipedia.org/wiki/Neptune", "target", "_blank"], ["mat-button", "", "color", "secondary", 3, "click"]],
        template: function DialogNeptuneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Neptune");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50\xD7109 km). It is named after the Roman god of the sea and has the astronomical symbol \u2646, a stylised version of the god Neptune's trident. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Read more on Wikipedia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogNeptuneComponent_Template_button_click_11_listener() {
              return ctx.showInStackedDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Show in dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
        encapsulation: 2
      });

      var DialogNeptuneIFrameComponent = function DialogNeptuneIFrameComponent() {
        _classCallCheck(this, DialogNeptuneIFrameComponent);
      };

      DialogNeptuneIFrameComponent.ɵfac = function DialogNeptuneIFrameComponent_Factory(t) {
        return new (t || DialogNeptuneIFrameComponent)();
      };

      DialogNeptuneIFrameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogNeptuneIFrameComponent,
        selectors: [["dialog-neptune-iframe-dialog"]],
        decls: 7,
        vars: 0,
        consts: [["mat-dialog-title", ""], ["frameborder", "0", "src", "https://en.wikipedia.org/wiki/Neptune"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]],
        template: function DialogNeptuneIFrameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Neptune");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["iframe[_ngcontent-%COMP%] {\n        width: 800px;\n      }"]
      });

      var DialogAddressFormComponent = function DialogAddressFormComponent() {
        _classCallCheck(this, DialogAddressFormComponent);
      };

      DialogAddressFormComponent.ɵfac = function DialogAddressFormComponent_Factory(t) {
        return new (t || DialogAddressFormComponent)();
      };

      DialogAddressFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogAddressFormComponent,
        selectors: [["dialog-address-form"]],
        decls: 55,
        vars: 1,
        consts: [["mat-dialog-title", ""], [1, "demo-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "demo-full-width"], ["matInput", ""], ["matInput", "", "maxlength", "5", "value", "94043"], ["postalCode", ""], ["align", "end"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", "cdkFocusInitial", ""]],
        template: function DialogAddressFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Company (disabled)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Long last name that will be truncated");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "1600 Amphitheatre Pkwy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Address 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Postal code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-hint", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 5");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: [".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }"]
      });
      /***/
    },

    /***/
    "9Xlg":
    /*!********************************************************!*\
      !*** ./src/app/routes/material/icon/icon.component.ts ***!
      \********************************************************/

    /*! exports provided: IconComponent */

    /***/
    function Xlg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconComponent", function () {
        return IconComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var IconComponent = /*#__PURE__*/function () {
        function IconComponent(snackBar) {
          _classCallCheck(this, IconComponent);

          this.snackBar = snackBar;
        }

        _createClass(IconComponent, [{
          key: "deleteIcon",
          value: function deleteIcon() {
            this.snackBar.open('Item deleted', '', {
              duration: 2000
            });
          }
        }]);

        return IconComponent;
      }();

      IconComponent.ɵfac = function IconComponent_Factory(t) {
        return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: IconComponent,
        selectors: [["app-icon"]],
        decls: 36,
        vars: 0,
        consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "Delete", 3, "click"], ["color", "accent"], ["mat-icon-button", "", "aria-label", "Home", "href", "http://www.google.com"], ["color", "warn"], [1, "cdk-visually-hidden"]],
        template: function IconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fingerprint status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Showing a status message with a purely decorative icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "fingerprint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Your fingerprint was recorded! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delete icon button ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Showing a button with interactive icon which can perform an action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IconComponent_Template_button_click_15_listener() {
              return ctx.deleteIcon();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Home link ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Showing a link with interactive icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Done status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Showing a status indicator with an indicator icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Tasks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "A4dJ":
    /*!********************************************************!*\
      !*** ./src/app/routes/material/list/list.component.ts ***!
      \********************************************************/

    /*! exports provided: ListComponent */

    /***/
    function A4dJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ListComponent_mat_list_item_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6, " ");
        }
      }

      function ListComponent_a_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/search?q=", link_r7.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r7.name, " ");
        }
      }

      function ListComponent_mat_list_item_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", message_r8.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r8.from, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r8.subject, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r8.message, " ");
        }
      }

      function ListComponent_mat_list_item_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9, " ");
        }
      }

      function ListComponent_mat_list_item_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r10.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", folder_r10.updated, " ");
        }
      }

      function ListComponent_mat_list_item_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var note_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r11.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r11.updated, " ");
        }
      }

      var ListComponent = function ListComponent() {
        _classCallCheck(this, ListComponent);

        this.items = ['Pepper', 'Salt', 'Paprika'];
        this.messages = [{
          from: 'Nancy',
          subject: 'Brunch?',
          message: 'Did you want to go on Sunday? I was thinking that might work.',
          image: 'https://angular.io/generated/images/bios/julie-ralph.jpg'
        }, {
          from: 'Mary',
          subject: 'Summer BBQ',
          message: 'Wish I could come, but I have some prior obligations.',
          image: 'https://angular.io/generated/images/bios/juleskremer.jpg'
        }, {
          from: 'Bobby',
          subject: 'Oui oui',
          message: 'Do you have Paris reservations for the 15th? I just booked!',
          image: 'https://angular.io/generated/images/bios/jelbourn.jpg'
        }];
        this.links = [{
          name: 'Inbox'
        }, {
          name: 'Outbox'
        }, {
          name: 'Spam'
        }, {
          name: 'Trash'
        }];
        this.folders = [{
          name: 'Imported',
          updated: 'Miles'
        }, {
          name: 'Important',
          updated: 'Tina'
        }, {
          name: 'Unread',
          updated: 'Jeremy'
        }];
        this.notes = [{
          name: 'Update screenshots',
          updated: 'Kara'
        }, {
          name: 'Install new application',
          updated: 'Andrew'
        }];
      };

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)();
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        decls: 44,
        vars: 6,
        consts: [[1, "demo-list"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "href", 4, "ngFor", "ngForOf"], ["role", "list", "dense", ""], ["mat-subheader", ""], ["role", "listitem"], ["mat-list-item", "", 3, "href"], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-line", ""], ["mat-line", "", 1, "demo-secondary-text"], ["mat-list-icon", ""], ["mat-list-icgon", ""]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Seasoning ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Showing a non-interactive list of seasonings.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_mat_list_item_9_Template, 2, 1, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mailbox navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Showing a navigation list with links to google search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_a_16_Template, 2, 2, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Showing a list of messages, where each message item has sender's name, sender's avatar, message subject, and content of the message. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_mat_list_item_23_Template, 8, 5, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Seasoning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Showing a non-interactive list of seasonings with dense style.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListComponent_mat_list_item_30_Template, 2, 1, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Folders and notes for mailbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Showing a list with two sections, \"folders\" and \"notes\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Folders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ListComponent_mat_list_item_39_Template, 7, 2, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ListComponent_mat_list_item_43_Template, 7, 2, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatLine"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"]],
        styles: [".demo-list[_ngcontent-%COMP%]   .mat-list[_ngcontent-%COMP%], .demo-list[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin: 20px 20px 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.demo-list[_ngcontent-%COMP%]   .demo-secondary-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUFBSjtBQUdFO0VBQ0UsMEJBQUE7QUFESiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tbGlzdCB7XHJcbiAgLm1hdC1saXN0LFxyXG4gIC5tYXQtbmF2LWxpc3Qge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICB9XHJcblxyXG4gIC5kZW1vLXNlY29uZGFyeS10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Aogt":
    /*!***********************************************!*\
      !*** ./src/app/routes/material/tab/routes.ts ***!
      \***********************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function Aogt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function () {
        return TABS_DEMO_ROUTES;
      });
      /* harmony import */


      var _tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab.component */
      "zPdk");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TABS_DEMO_ROUTES = [{
        path: '',
        redirectTo: 'sunny-tab',
        pathMatch: 'full'
      }, {
        path: 'sunny-tab',
        component: _tab_component__WEBPACK_IMPORTED_MODULE_0__["SunnyTabContentComponent"]
      }, {
        path: 'rainy-tab',
        component: _tab_component__WEBPACK_IMPORTED_MODULE_0__["RainyTabContentComponent"]
      }, {
        path: 'foggy-tab',
        component: _tab_component__WEBPACK_IMPORTED_MODULE_0__["FoggyTabContentComponent"]
      }];
      /***/
    },

    /***/
    "Ar+X":
    /*!************************************************************************!*\
      !*** ./src/app/routes/material/progress-bar/progress-bar.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProgressBarComponent */

    /***/
    function ArX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      var ProgressBarComponent = function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);

        this.surveyProgress = 30;
        this.videoPlayValue = 20;
        this.videoBufferValue = 60;
      };

      ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
        return new (t || ProgressBarComponent)();
      };

      ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressBarComponent,
        selectors: [["app-progress-bar"]],
        decls: 18,
        vars: 3,
        consts: [["mode", "determinate", "color", "primary", "aria-label", "Survey progress", 3, "value"], ["mode", "buffer", "color", "primary", "aria-label", "Video progress", 3, "value", "bufferValue"], ["mode", "indeterminate", "color", "warn", "aria-label", "Loading content"], ["mode", "query", "color", "accent", "aria-label", "Searching"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Survey progress (Determinate progress bar)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Video progress (Progress bar with buffer) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading content progress (Indeterminate progress bar)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search progress (Query progress bar)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-progress-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.surveyProgress);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.videoPlayValue)("bufferValue", ctx.videoBufferValue);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]],
        styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "CmA1":
    /*!**********************************************************!*\
      !*** ./src/app/routes/material/input/input.component.ts ***!
      \**********************************************************/

    /*! exports provided: InputComponent */

    /***/
    function CmA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return InputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "ihCf");

      function InputComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must enter your password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InputComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You must enter your email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InputComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not a valid email address.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var USD_TO_JPY = 110.29;

      var InputComponent = /*#__PURE__*/function () {
        function InputComponent() {
          _classCallCheck(this, InputComponent);

          this.showPassword = false;
          this.commentMax = 200;
        }

        _createClass(InputComponent, [{
          key: "passwordType",
          get: function get() {
            return this.showPassword ? 'text' : 'password';
          }
        }, {
          key: "passwordToggleLabel",
          get: function get() {
            return this.showPassword ? 'Hide password' : 'Reveal password';
          }
        }, {
          key: "passwordToggleIcon",
          get: function get() {
            return this.showPassword ? 'visibility_off' : 'visibility';
          }
        }, {
          key: "jpy",
          get: function get() {
            return this.usd ? this.usd * USD_TO_JPY : this.usd;
          },
          set: function set(value) {
            this.usd = value ? value / USD_TO_JPY : value;
          }
        }, {
          key: "commentCount",
          get: function get() {
            return this.comment ? this.comment.length : 0;
          }
        }]);

        return InputComponent;
      }();

      InputComponent.ɵfac = function InputComponent_Factory(t) {
        return new (t || InputComponent)();
      };

      InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputComponent,
        selectors: [["app-input"]],
        decls: 64,
        vars: 16,
        consts: [["floatLabel", "never"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["hideRequiredMarker", ""], ["matInput", "", "required", "", 3, "type", "ngModel", "ngModelChange"], ["passwordModel", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "type", "email", "required", "", "email", "", 3, "ngModel", "ngModelChange"], ["emailModel", "ngModel"], ["floatLabel", "always"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["matInput", "", "aria-label", "Comment", "cdkTextareaAutosize", "", 3, "ngModel", "maxlength", "ngModelChange"], ["commentModel", "ngModel"], ["align", "end"]],
        template: function InputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic input box (e.g. name field)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Input with hint (e.g. password field)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_Template_button_click_21_listener() {
              return ctx.showPassword = !ctx.showPassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hint: favorite color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InputComponent_mat_error_26_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Input with error message (e.g. email field)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, InputComponent_mat_error_35_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, InputComponent_mat_error_36_Template, 2, 0, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Input with prefix & suffix (e.g. currency converter)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "USD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.usd = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " = ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "JPY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_50_listener($event) {
              return ctx.jpy = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u200E\xA5\u200E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " (as of 7/31/2017) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Textarea input (e.g. comment box)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "textarea", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_textarea_ngModelChange_58_listener($event) {
              return ctx.comment = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Leave us a comment!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-hint", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType)("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.passwordToggleLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordToggleIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.hasError("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usd);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jpy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment)("maxlength", ctx.commentMax);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.commentCount, "/", ctx.commentMax, "");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatPrefix"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "F74k":
    /*!************************************************************!*\
      !*** ./src/app/routes/material/select/select.component.ts ***!
      \************************************************************/

    /*! exports provided: SelectComponent */

    /***/
    function F74k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
        return SelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function SelectComponent_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", color_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r3.label, " ");
        }
      }

      function SelectComponent_mat_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topping_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", topping_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topping_r4.label, " ");
        }
      }

      function SelectComponent_mat_optgroup_31_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var creature_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", creature_r7.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", creature_r7.label, " ");
        }
      }

      function SelectComponent_mat_optgroup_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-optgroup", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_mat_optgroup_31_mat_option_1_Template, 2, 2, "mat-option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", group_r5.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r5.pokemon);
        }
      }

      var SelectComponent = function SelectComponent() {
        _classCallCheck(this, SelectComponent);

        this.colors = [{
          value: 'red',
          label: 'Red'
        }, {
          value: 'green',
          label: 'Green'
        }, {
          value: 'blue',
          label: 'Blue'
        }, {
          value: 'cyan',
          label: 'Cyan'
        }, {
          value: 'magenta',
          label: 'Magenta'
        }, {
          value: 'yellow',
          label: 'Yellow'
        }, {
          value: 'black',
          label: 'Black'
        }];
        this.toppings = [{
          value: 'pepperoni',
          label: 'Pepperoni'
        }, {
          value: 'mushrooms',
          label: 'Mushrooms'
        }, {
          value: 'onions',
          label: 'Onions'
        }, {
          value: 'sausage',
          label: 'Sausage'
        }, {
          value: 'bacon',
          label: 'Bacon'
        }, {
          value: 'cheese',
          label: 'Cheese'
        }, {
          value: 'olives',
          label: 'Olives'
        }, {
          value: 'peppers',
          label: 'Peppers'
        }, {
          value: 'pineapple',
          label: 'Pineapple'
        }, {
          value: 'spinach',
          label: 'Spinach'
        }];
        this.pokemon = [{
          label: 'Grass',
          pokemon: [{
            value: 'bulbasaur',
            label: 'Bulbasaur'
          }, {
            value: 'oddish',
            label: 'Oddish'
          }, {
            value: 'bellsprout',
            label: 'Bellsprout'
          }]
        }, {
          label: 'Water',
          pokemon: [{
            value: 'squirtle',
            label: 'Squirtle'
          }, {
            value: 'psyduck',
            label: 'Psyduck'
          }, {
            value: 'horsea',
            label: 'Horsea'
          }]
        }, {
          label: 'Fire',
          disabled: true,
          pokemon: [{
            value: 'charmander',
            label: 'Charmander'
          }, {
            value: 'vulpix',
            label: 'Vulpix'
          }, {
            value: 'flareon',
            label: 'Flareon'
          }]
        }, {
          label: 'Psychic',
          pokemon: [{
            value: 'mew',
            label: 'Mew'
          }, {
            value: 'mewtwo',
            label: 'Mewtwo'
          }]
        }];
      };

      SelectComponent.ɵfac = function SelectComponent_Factory(t) {
        return new (t || SelectComponent)();
      };

      SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectComponent,
        selectors: [["app-select"]],
        decls: 85,
        vars: 6,
        consts: [[3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", 3, "ngModel", "ngModelChange"], [3, "label", 4, "ngFor", "ngForOf"], [1, "demo-select-a11y-spacer"], ["color", "primary"], ["value", "2000"], ["value", "2100"], ["color", "accent"], ["value", "alaska"], ["value", "alabama"], ["color", "warn"], ["value", "english"], ["value", "spanish"], ["multiple", ""], ["value", "mihiramon"], ["value", "sandiramon"], ["value", "water"], ["value", "coke"], ["value", "light"], ["value", "dark"], [3, "value"], [3, "label"]],
        template: function SelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Single selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select your favorite color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_mat_select_ngModelChange_10_listener($event) {
              return ctx.selectedColor = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SelectComponent_mat_option_11_Template, 2, 2, "mat-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Multiple selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pick toppings for your pizza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Toppings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_mat_select_ngModelChange_20_listener($event) {
              return ctx.selectedTopping = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SelectComponent_mat_option_21_Template, 2, 2, "mat-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Grouped options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pick your Pokemon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pokemon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_mat_select_ngModelChange_30_listener($event) {
              return ctx.selectedPokemon = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SelectComponent_mat_optgroup_31_Template, 2, 2, "mat-optgroup", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ZIP code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2100");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Alaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Alabama");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Spanish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Digimon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mihiramon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sandiramon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Drink");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Water");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Coke");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTopping);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toppings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedPokemon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemon);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptgroup"]],
        styles: [".demo-select-a11y-spacer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zZWxlY3QtYTExeS1zcGFjZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "GMZb":
    /*!******************************************************************!*\
      !*** ./src/app/routes/material/snack-bar/snack-bar.component.ts ***!
      \******************************************************************/

    /*! exports provided: SnackBarComponent */

    /***/
    function GMZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function () {
        return SnackBarComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SnackBarComponent = /*#__PURE__*/function () {
        function SnackBarComponent(snackBar) {
          _classCallCheck(this, SnackBarComponent);

          this.snackBar = snackBar;
        }

        _createClass(SnackBarComponent, [{
          key: "openDiscoPartySnackBar",
          value: function openDiscoPartySnackBar() {
            this.snackBar.open('Disco party!', 'Dismiss', {
              duration: 5000
            });
          }
        }, {
          key: "openNotificationSnackBar",
          value: function openNotificationSnackBar() {
            this.snackBar.open('Thank you for your support!', '', {
              duration: 2000
            });
          }
        }]);

        return SnackBarComponent;
      }();

      SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) {
        return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      SnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SnackBarComponent,
        selectors: [["app-snack-bar"]],
        decls: 16,
        vars: 0,
        consts: [["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]],
        template: function SnackBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Showing a notification by snack bar without showing actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnackBarComponent_Template_button_click_7_listener() {
              return ctx.openNotificationSnackBar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Disco party ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Showing a notification by snack bar with a dismiss button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnackBarComponent_Template_button_click_14_listener() {
              return ctx.openDiscoPartySnackBar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Disco");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFjay1iYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "IR7n":
    /*!**************************************************************************!*\
      !*** ./src/app/routes/material/button-toggle/button-toggle.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ButtonToggleComponent */

    /***/
    function IR7n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonToggleComponent", function () {
        return ButtonToggleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ButtonToggleComponent_mat_button_toggle_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pie_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pie_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pie_r1, " ");
        }
      }

      var ButtonToggleComponent = function ButtonToggleComponent() {
        _classCallCheck(this, ButtonToggleComponent);

        this.favoritePie = 'Apple';
        this.pieOptions = ['Apple', 'Cherry', 'Pecan', 'Lemon'];
      };

      ButtonToggleComponent.ɵfac = function ButtonToggleComponent_Factory(t) {
        return new (t || ButtonToggleComponent)();
      };

      ButtonToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonToggleComponent,
        selectors: [["app-button-toggle"]],
        decls: 66,
        vars: 5,
        consts: [["name", "alignment", "aria-label", "Alignments"], ["value", "left", "aria-label", "Align left"], ["value", "center", "aria-label", "Align center"], ["value", "right", "aria-label", "Align right"], ["value", "justify", "aria-label", "Align justify"], ["multiple", "", "aria-label", "Groceries"], ["name", "pies", "aria-label", "Pies", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Groceries", 3, "disabled"], ["multiple", "", "aria-label", "Groceries", 3, "vertical"], [3, "value"]],
        template: function ButtonToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Single button toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Button toggles with icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "format_align_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "format_align_center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "format_align_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "format_align_justify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Multi-selection button toggle group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-button-toggle-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Flour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Eggs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sugar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Milk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Exclusive selection button toggle group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-button-toggle-group", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonToggleComponent_Template_mat_button_toggle_group_ngModelChange_38_listener($event) {
              return ctx.favoritePie = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ButtonToggleComponent_mat_button_toggle_39_Template, 2, 2, "mat-button-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Disabled button toggle group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-button-toggle-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Flour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Eggs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sugar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Milk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Vertical button toggle group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-button-toggle-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Flour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Eggs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sugar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-button-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Milk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.favoritePie);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pieOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your favorite type of pie is: ", ctx.favoritePie, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tdG9nZ2xlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "KOH2":
    /*!************************************************************************!*\
      !*** ./src/app/routes/material/autocomplete/autocomplete.component.ts ***!
      \************************************************************************/

    /*! exports provided: AutocompleteComponent */

    /***/
    function KOH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
        return AutocompleteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function AutocompleteComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r2.name);
        }
      }

      var AutocompleteComponent = /*#__PURE__*/function () {
        function AutocompleteComponent() {
          _classCallCheck(this, AutocompleteComponent);

          this.states = [{
            code: 'AL',
            name: 'Alabama'
          }, {
            code: 'AK',
            name: 'Alaska'
          }, {
            code: 'AZ',
            name: 'Arizona'
          }, {
            code: 'AR',
            name: 'Arkansas'
          }, {
            code: 'CA',
            name: 'California'
          }, {
            code: 'CO',
            name: 'Colorado'
          }, {
            code: 'CT',
            name: 'Connecticut'
          }, {
            code: 'DE',
            name: 'Delaware'
          }, {
            code: 'FL',
            name: 'Florida'
          }, {
            code: 'GA',
            name: 'Georgia'
          }, {
            code: 'HI',
            name: 'Hawaii'
          }, {
            code: 'ID',
            name: 'Idaho'
          }, {
            code: 'IL',
            name: 'Illinois'
          }, {
            code: 'IN',
            name: 'Indiana'
          }, {
            code: 'IA',
            name: 'Iowa'
          }, {
            code: 'KS',
            name: 'Kansas'
          }, {
            code: 'KY',
            name: 'Kentucky'
          }, {
            code: 'LA',
            name: 'Louisiana'
          }, {
            code: 'ME',
            name: 'Maine'
          }, {
            code: 'MD',
            name: 'Maryland'
          }, {
            code: 'MA',
            name: 'Massachusetts'
          }, {
            code: 'MI',
            name: 'Michigan'
          }, {
            code: 'MN',
            name: 'Minnesota'
          }, {
            code: 'MS',
            name: 'Mississippi'
          }, {
            code: 'MO',
            name: 'Missouri'
          }, {
            code: 'MT',
            name: 'Montana'
          }, {
            code: 'NE',
            name: 'Nebraska'
          }, {
            code: 'NV',
            name: 'Nevada'
          }, {
            code: 'NH',
            name: 'New Hampshire'
          }, {
            code: 'NJ',
            name: 'New Jersey'
          }, {
            code: 'NM',
            name: 'New Mexico'
          }, {
            code: 'NY',
            name: 'New York'
          }, {
            code: 'NC',
            name: 'North Carolina'
          }, {
            code: 'ND',
            name: 'North Dakota'
          }, {
            code: 'OH',
            name: 'Ohio'
          }, {
            code: 'OK',
            name: 'Oklahoma'
          }, {
            code: 'OR',
            name: 'Oregon'
          }, {
            code: 'PA',
            name: 'Pennsylvania'
          }, {
            code: 'RI',
            name: 'Rhode Island'
          }, {
            code: 'SC',
            name: 'South Carolina'
          }, {
            code: 'SD',
            name: 'South Dakota'
          }, {
            code: 'TN',
            name: 'Tennessee'
          }, {
            code: 'TX',
            name: 'Texas'
          }, {
            code: 'UT',
            name: 'Utah'
          }, {
            code: 'VT',
            name: 'Vermont'
          }, {
            code: 'VA',
            name: 'Virginia'
          }, {
            code: 'WA',
            name: 'Washington'
          }, {
            code: 'WV',
            name: 'West Virginia'
          }, {
            code: 'WI',
            name: 'Wisconsin'
          }, {
            code: 'WY',
            name: 'Wyoming'
          }];
          this.filteredStates = this.states;
        }

        _createClass(AutocompleteComponent, [{
          key: "filter",
          value: function filter(value) {
            if (value) {
              return this.states.filter(function (state) {
                return state.name.toLowerCase().startsWith(value.toLowerCase());
              });
            }

            return this.states;
          }
        }]);

        return AutocompleteComponent;
      }();

      AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
        return new (t || AutocompleteComponent)();
      };

      AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AutocompleteComponent,
        selectors: [["app-autocomplete"]],
        decls: 16,
        vars: 4,
        consts: [["matInput", "", 3, "matAutocomplete", "ngModel", "ngModelChange"], ["autocomplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function AutocompleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filtering and selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select your favorite state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search for a state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.value = $event;
            })("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_10_listener() {
              return ctx.filteredStates = ctx.filter(ctx.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AutocompleteComponent_mat_option_13_Template, 3, 2, "mat-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0)("ngModel", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredStates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected value: ", ctx.value, "");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
        styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLW9wdGlvbi1pbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbltkaXI9J3J0bCddIC5leGFtcGxlLW9wdGlvbi1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "MgQ8":
    /*!**************************************************************!*\
      !*** ./src/app/routes/material/stepper/stepper.component.ts ***!
      \**************************************************************/

    /*! exports provided: StepperComponent */

    /***/
    function MgQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepperComponent", function () {
        return StepperComponent;
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


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function StepperComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fill out your name");
        }
      }

      function StepperComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fill out your address");
        }
      }

      function StepperComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Done");
        }
      }

      var StepperComponent = /*#__PURE__*/function () {
        function StepperComponent(formBuilder) {
          _classCallCheck(this, StepperComponent);

          this.formBuilder = formBuilder;
          this.isLinear = false;
        }

        _createClass(StepperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.firstFormGroup = this.formBuilder.group({
              firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
            this.secondFormGroup = this.formBuilder.group({
              secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }]);

        return StepperComponent;
      }();

      StepperComponent.ɵfac = function StepperComponent_Factory(t) {
        return new (t || StepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      StepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: StepperComponent,
        selectors: [["app-stepper"]],
        decls: 32,
        vars: 6,
        consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]],
        template: function StepperComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_2_listener() {
              return ctx.isLinear = !ctx.isLinear;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-horizontal-stepper", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StepperComponent_ng_template_8_Template, 1, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, StepperComponent_ng_template_16_Template, 1, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, StepperComponent_ng_template_25_Template, 1, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " You are now done. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_30_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "QUeq":
    /*!************************************************************!*\
      !*** ./src/app/routes/material/slider/slider.component.ts ***!
      \************************************************************/

    /*! exports provided: SliderComponent */

    /***/
    function QUeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
        return SliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SliderComponent = /*#__PURE__*/function () {
        function SliderComponent() {
          _classCallCheck(this, SliderComponent);

          this.red = 0;
          this.green = 0;
          this.blue = 0;
        }

        _createClass(SliderComponent, [{
          key: "swatchBackground",
          get: function get() {
            return "rgb(".concat(this.red, ", ").concat(this.green, ", ").concat(this.blue, ")");
          }
        }]);

        return SliderComponent;
      }();

      SliderComponent.ɵfac = function SliderComponent_Factory(t) {
        return new (t || SliderComponent)();
      };

      SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SliderComponent,
        selectors: [["app-slider"]],
        decls: 40,
        vars: 5,
        consts: [[1, "demo-color-container"], [1, "demo-color-sliders"], ["for", "r-slider", 1, "demo-color-label"], ["aria-label", "Red", "id", "r-slider", "min", "0", "max", "255", 3, "ngModel", "ngModelChange"], ["for", "g-slider", 1, "demo-color-label"], ["aria-label", "Green", "id", "g-slider", "min", "0", "max", "255", 3, "ngModel", "ngModelChange"], ["for", "b-slider", 1, "demo-color-label"], ["aria-label", "Blue", "id", "b-slider", "min", "0", "max", "255", 3, "ngModel", "ngModelChange"], [1, "demo-color-swatch"], ["min", "1", "max", "5", "tickInterval", "1", "thumbLabel", "", "aria-label", "Rating"], [1, "demo-volume-container"], ["for", "vol-slider"], ["aria-hidden", ""], [1, "cdk-visually-hidden"], ["aria-label", "Volume", "id", "vol-slider", "min", "0", "max", "100", "vertical", "", "inverted", ""]],
        template: function SliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Continuous slider (e.g. color component sliders)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Move the red, green, and blue sliders to choose a color.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slider", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_mat_slider_ngModelChange_12_listener($event) {
              return ctx.red = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-slider", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_mat_slider_ngModelChange_16_listener($event) {
              return ctx.green = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-slider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_mat_slider_ngModelChange_20_listener($event) {
              return ctx.blue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Discrete slider (e.g. rate a product)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Please rate our product on a scale of 1 (not satisfied) to 5 (extremely satisfied).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-slider", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Vertical slider (e.g. volume control)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Use the slider to adjust the volume.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "volume_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Volume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-slider", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.red);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.green);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.swatchBackground);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: [".demo-color-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.demo-color-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n}\n\n.demo-color-swatch[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-left: 60px;\n}\n\n.demo-volume-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNvbG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGVtby1jb2xvci1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZGVtby1jb2xvci1zd2F0Y2gge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuLmRlbW8tdm9sdW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "S00J":
    /*!*********************************************************!*\
      !*** ./src/app/routes/material/sidenav/dual-sidenav.ts ***!
      \*********************************************************/

    /*! exports provided: SidenavDualComponent */

    /***/
    function S00J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavDualComponent", function () {
        return SidenavDualComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SidenavDualComponent = /*#__PURE__*/function () {
        function SidenavDualComponent(snackbar) {
          _classCallCheck(this, SidenavDualComponent);

          this.snackbar = snackbar;
        }

        _createClass(SidenavDualComponent, [{
          key: "play",
          value: function play(list) {
            this.snackbar.open("Playing \"".concat(list, "\""), '', {
              duration: 1000
            });
          }
        }]);

        return SidenavDualComponent;
      }();

      SidenavDualComponent.ɵfac = function SidenavDualComponent_Factory(t) {
        return new (t || SidenavDualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      SidenavDualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SidenavDualComponent,
        selectors: [["dual-sidenav"]],
        hostAttrs: [1, "demo-sidenav-app"],
        decls: 36,
        vars: 0,
        consts: [["color", "primary", "role", "header", "aria-label", "Dual sidenav app"], ["mat-icon-button", "", "aria-label", "Navigation menu", 3, "click"], ["aria-hidden", "true"], [1, "demo-sidenav-app-name"], ["aria-hidden", "true", 1, "demo-sidenav-spacer"], ["mat-icon-button", "", "aria-label", "Playlist menu", 3, "click"], [1, "demo-sidenav-container"], ["mode", "side", "role", "navigation"], ["startSnav", ""], ["mat-list-item", "", "routerLink", ".."], ["mat-list-item", "", "routerLink", "../basic"], ["mat-list-item", "", "routerLink", "../mobile"], ["mat-list-item", "", "routerLink", "../dual"], ["role", "region"], ["mat-raised-button", "", "aria-label", "Close dual sidenav example", "color", "primary", "routerLink", "..", 1, "demo-sidenav-close"], ["mode", "side", "position", "end", "role", "region", 1, "demo-sidenav-playlist", 3, "open"], ["endSnav", ""], [1, "demo-sidenav-playlist-header"], ["mat-button", "", "aria-label", "Thumbs up playlist", 3, "click"], ["playlist1", ""], ["mat-button", "", "aria-label", "Last added playlist", 3, "click"], ["mat-button", "", "aria-label", "Free and purchased playlist", 3, "click"]],
        template: function SidenavDualComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavDualComponent_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dual Sidenav App");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavDualComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "playlist_play");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-sidenav-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-sidenav", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Basic sidenav example");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Responsive sidenav example");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Dual sidenavs example");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-sidenav-content", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Close example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-sidenav", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("open", function SidenavDualComponent_Template_mat_sidenav_open_25_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

              return _r2.focus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Playlists");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavDualComponent_Template_button_click_29_listener() {
              return ctx.play("Thumbs up");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Thumbs up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavDualComponent_Template_button_click_32_listener() {
              return ctx.play("Last added");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Last added ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavDualComponent_Template_button_click_34_listener() {
              return ctx.play("Free and purchased");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Free and purchased ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
        styles: [".demo-sidenav-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.demo-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.demo-sidenav-container-fixed[_ngcontent-%COMP%] {\n  flex: none;\n}\n\nh1.demo-sidenav-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nbutton.demo-sidenav-close[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.demo-sidenav-filler[_ngcontent-%COMP%] {\n  margin: 100px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tc2lkZW5hdi1hcHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmRlbW8tc2lkZW5hdi1jb250YWluZXItZml4ZWQge1xyXG4gIGZsZXg6IG5vbmU7XHJcbn1cclxuXHJcbmgxLmRlbW8tc2lkZW5hdi1hcHAtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuYnV0dG9uLmRlbW8tc2lkZW5hdi1jbG9zZSB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWZpbGxlciB7XHJcbiAgbWFyZ2luOiAxMDBweCAyMHB4O1xyXG59XHJcbiJdfQ== */", ".demo-sidenav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\nmat-sidenav.demo-sidenav-playlist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n}\n\n.demo-sidenav-playlist-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZHVhbC1zaWRlbmF2LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImR1YWwtc2lkZW5hdi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tc2lkZW5hdi1zcGFjZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LmRlbW8tc2lkZW5hdi1wbGF5bGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmRlbW8tc2lkZW5hdi1wbGF5bGlzdC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "S7EI":
    /*!********************************************************************!*\
      !*** ./src/app/routes/material/form-field/form-field.component.ts ***!
      \********************************************************************/

    /*! exports provided: FormFieldComponent */

    /***/
    function S7EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function () {
        return FormFieldComponent;
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


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
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


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var FormFieldComponent = /*#__PURE__*/function () {
        function FormFieldComponent(fb) {
          _classCallCheck(this, FormFieldComponent);

          this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto'
          });
        }

        _createClass(FormFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormFieldComponent;
      }();

      FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) {
        return new (t || FormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      FormFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormFieldComponent,
        selectors: [["app-form-field"]],
        decls: 82,
        vars: 6,
        consts: [[1, "example-container"], ["matInput", "", "placeholder", "Input"], ["matInput", "", "placeholder", "Textarea"], ["placeholder", "Select"], ["value", "option"], [1, "example-container", 3, "formGroup"], ["formControlName", "hideRequired"], ["formControlName", "floatLabel"], ["value", "auto"], ["value", "always"], ["value", "never"], [3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], [3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["appearance", "legacy"], ["matInput", "", "placeholder", "Placeholder"], ["matSuffix", ""], ["appearance", "standard"], ["appearance", "fill"], ["appearance", "outline"]],
        template: function FormFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Hide required marker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Float label: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-radio-group", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-radio-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Always");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-radio-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Never");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Both a label and a placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "-- None --");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Fancy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Legacy form field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "sentiment_very_satisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Standard form field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "sentiment_very_satisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Fill form field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "sentiment_very_satisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Outline form field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "sentiment_very_satisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hideRequiredMarker", ctx.options.value.hideRequired)("floatLabel", ctx.options.value.floatLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("floatLabel", ctx.options.value.floatLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hideRequiredMarker", ctx.options.value.hideRequired)("floatLabel", ctx.options.value.floatLabel);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"]],
        styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJmb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0gPiAqIHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "V1xu":
    /*!**********************************************************!*\
      !*** ./src/app/routes/material/table/table.component.ts ***!
      \**********************************************************/

    /*! exports provided: TableComponent, BasicDataSource, SortDataSource, PaginatedDataSource */

    /***/
    function V1xu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return TableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicDataSource", function () {
        return BasicDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortDataSource", function () {
        return SortDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatedDataSource", function () {
        return PaginatedDataSource;
      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");

      function TableComponent_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r25.name);
        }
      }

      function TableComponent_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r26.color);
        }
      }

      function TableComponent_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r27.age);
        }
      }

      function TableComponent_mat_header_row_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function TableComponent_mat_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      function TableComponent_mat_header_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r29.name);
        }
      }

      function TableComponent_mat_header_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r30.color);
        }
      }

      function TableComponent_mat_header_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r31.age);
        }
      }

      function TableComponent_mat_header_row_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function TableComponent_mat_row_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      function TableComponent_mat_header_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r33.name);
        }
      }

      function TableComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r34.color);
        }
      }

      function TableComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r35.age);
        }
      }

      function TableComponent_mat_header_row_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function TableComponent_mat_row_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c0 = function _c0() {
        return [1, 3, 5];
      };

      var exampleData = [{
        name: 'Austin',
        color: 'blue',
        age: 30
      }, {
        name: 'Jeremy',
        color: 'green',
        age: 33
      }, {
        name: 'Kara',
        color: 'purple',
        age: 29
      }, {
        name: 'Tina',
        color: 'yellow',
        age: 35
      }, {
        name: 'Brad',
        color: 'pink',
        age: 40
      }, {
        name: 'Jules',
        color: 'red',
        age: 21
      }];

      var TableComponent = /*#__PURE__*/function () {
        function TableComponent() {
          _classCallCheck(this, TableComponent);

          this.displayedColumns = ['name', 'color', 'age'];
        }

        _createClass(TableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.basicDataSource = new BasicDataSource();
            this.sortDataSource = new SortDataSource(this.sort);
            this.paginatedDataSource = new PaginatedDataSource(this.pager);
          }
        }]);

        return TableComponent;
      }();

      TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || TableComponent)();
      };

      TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: TableComponent,
        selectors: [["app-table"]],
        viewQuery: function TableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.pager = _t.first);
          }
        },
        decls: 55,
        vars: 14,
        consts: [["aria-readonly", "true", "aria-label", "Users favorite colors and age", 3, "dataSource"], ["cdkColumnDef", "name"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "color"], ["cdkColumnDef", "age"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"], ["aria-label", "Users favorite colors and age", "aria-readonly", "true", "matSort", "", "matSortActive", "age", "matSortDirection", "asc", 3, "dataSource"], ["mat-sort-header", "", 4, "cdkHeaderCellDef"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-sort-header", ""]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Shows name, color and age data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TableComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TableComponent_mat_cell_10_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TableComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TableComponent_mat_cell_13_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TableComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TableComponent_mat_cell_16_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TableComponent_mat_header_row_17_Template, 1, 0, "mat-header-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TableComponent_mat_row_18_Template, 1, 0, "mat-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Sortable Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Shows name, color and age data. Sorted ascending by age.");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](25, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, TableComponent_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TableComponent_mat_cell_27_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TableComponent_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TableComponent_mat_cell_30_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TableComponent_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, TableComponent_mat_cell_33_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, TableComponent_mat_header_row_34_Template, 1, 0, "mat-header-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TableComponent_mat_row_35_Template, 1, 0, "mat-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Paginated Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Shows name, color and age data. Shows only first 5 until paginated.");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](42, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, TableComponent_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, TableComponent_mat_cell_44_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](45, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, TableComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, TableComponent_mat_cell_47_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](48, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, TableComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, TableComponent_mat_cell_50_Template, 2, 1, "mat-cell", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, TableComponent_mat_header_row_51_Template, 1, 0, "mat-header-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, TableComponent_mat_row_52_Template, 1, 0, "mat-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "mat-paginator", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.basicDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.sortDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.paginatedDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", 6)("pageIndex", 0)("pageSize", 3)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkRowDef"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      var BasicDataSource = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(BasicDataSource, _angular_cdk_table__W);

        var _super = _createSuper(BasicDataSource);

        function BasicDataSource() {
          var _this2;

          _classCallCheck(this, BasicDataSource);

          _this2 = _super.call(this);
          _this2.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);

          _this2.dataChange.next(exampleData);

          return _this2;
        }

        _createClass(BasicDataSource, [{
          key: "connect",
          value: function connect() {
            return this.dataChange;
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return BasicDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"]);

      var SortDataSource = /*#__PURE__*/function (_angular_cdk_table__W2) {
        _inherits(SortDataSource, _angular_cdk_table__W2);

        var _super2 = _createSuper(SortDataSource);

        function SortDataSource(sort) {
          var _this3;

          _classCallCheck(this, SortDataSource);

          _this3 = _super2.call(this);
          _this3.sort = sort;
          _this3.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);

          _this3.dataChange.next(exampleData);

          return _this3;
        }

        _createClass(SortDataSource, [{
          key: "connect",
          value: function connect() {
            var _this4 = this;

            var displayDataChanges = [this.dataChange, this.sort.sortChange];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return _this4.getSortedData();
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }, {
          key: "getSortedData",
          value: function getSortedData() {
            var _this5 = this;

            var data = [].concat(exampleData);

            if (!this.sort.active || this.sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              return (a.age < b.age ? -1 : 1) * (_this5.sort.direction === 'asc' ? 1 : -1);
            });
          }
        }]);

        return SortDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"]);

      var PaginatedDataSource = /*#__PURE__*/function (_angular_cdk_table__W3) {
        _inherits(PaginatedDataSource, _angular_cdk_table__W3);

        var _super3 = _createSuper(PaginatedDataSource);

        function PaginatedDataSource(paginator) {
          var _this6;

          _classCallCheck(this, PaginatedDataSource);

          _this6 = _super3.call(this);
          _this6.paginator = paginator;
          _this6.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);

          _this6.dataChange.next(exampleData);

          return _this6;
        }

        _createClass(PaginatedDataSource, [{
          key: "connect",
          value: function connect() {
            var _this7 = this;

            var displayDataChanges = [this.dataChange, this.paginator.page];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              var data = [].concat(exampleData);
              var startIndex = _this7.paginator.pageIndex * _this7.paginator.pageSize;
              return data.splice(startIndex, _this7.paginator.pageSize);
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return PaginatedDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"]);
      /***/

    },

    /***/
    "W7g2":
    /*!********************************************************************!*\
      !*** ./src/app/routes/material/datepicker/datepicker.component.ts ***!
      \********************************************************************/

    /*! exports provided: DatepickerComponent */

    /***/
    function W7g2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function () {
        return DatepickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DatepickerComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose an earlier date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a later date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a later date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose an earlier date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a later date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a date after your departure. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose an earlier date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please choose a date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_mat_error_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No appointments available on this date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DatepickerComponent = function DatepickerComponent() {
        _classCallCheck(this, DatepickerComponent);

        this.maxBirthday = new Date();
        this.paymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
        this.minPaymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
        this.minTripDate = new Date();
        this.maxTripDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        this.startTripDate = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);
        this.minAppointmentDate = new Date();
        this.maxAppointmentDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

        this.weekdaysOnly = function (d) {
          return d.getDay() !== 0 && d.getDay() !== 6;
        };
      };

      DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) {
        return new (t || DatepickerComponent)();
      };

      DatepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatepickerComponent,
        selectors: [["app-datepicker"]],
        decls: 66,
        vars: 38,
        consts: [["matInput", "", "required", "", 3, "matDatepicker", "ngModel", "max", "ngModelChange"], ["birthdayModel", "ngModel"], ["matSuffix", "", 3, "for"], ["startView", "year"], ["birthdayPicker", ""], [4, "ngIf"], ["matInput", "", "required", "", "aria-label", "Payment date", 3, "matDatepicker", "ngModel", "min", "ngModelChange"], ["paymentDateModel", "ngModel"], ["paymentPicker", ""], ["matInput", "", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelChange"], ["departDateModel", "ngModel"], [3, "startAt"], ["departPicker", ""], ["matInput", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelChange"], ["returnDateModel", "ngModel"], ["returnPicker", ""], ["matInput", "", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "matDatepickerFilter", "ngModelChange"], ["appointmentDateModel", "ngModel"], ["appointmentPicker", ""]],
        template: function DatepickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a date (e.g. choose your date of birth)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date of birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.birthday = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DatepickerComponent_mat_error_13_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatepickerComponent_mat_error_14_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Choose a date with touch UI (e.g. choose a payment date on mobile)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "When would you like to schedule your payment?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.paymentDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DatepickerComponent_mat_error_26_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DatepickerComponent_mat_error_27_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Choose date with startAt, min and max (e.g. schedule a departing and returning flight)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Departure date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.departDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-datepicker", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DatepickerComponent_mat_error_39_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DatepickerComponent_mat_error_40_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DatepickerComponent_mat_error_41_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Return date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.returnDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-datepicker", 11, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DatepickerComponent_mat_error_50_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, DatepickerComponent_mat_error_51_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DatepickerComponent_mat_error_52_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Choose date with date filter (e.g. schedule a doctor's appointment)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Appointment date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.appointmentDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-datepicker", null, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, DatepickerComponent_mat_error_64_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DatepickerComponent_mat_error_65_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.birthday)("max", ctx.maxBirthday);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.hasError("matDatepickerMax"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("ngModel", ctx.paymentDate)("min", ctx.minPaymentDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.hasError("matDatepickerMin"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r9)("ngModel", ctx.departDate)("min", ctx.minTripDate)("max", ctx.maxTripDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startAt", ctx.startTripDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.hasError("matDatepickerMin"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.hasError("matDatepickerMax"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r14)("ngModel", ctx.returnDate)("min", ctx.departDate || ctx.minTripDate)("max", ctx.maxTripDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startAt", ctx.startTripDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.hasError("matDatepickerMin") && !ctx.departDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.hasError("matDatepickerMin") && ctx.departDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.hasError("matDatepickerMax"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r19)("ngModel", ctx.appointmentDate)("min", ctx.minAppointmentDate)("max", ctx.maxAppointmentDate)("matDatepickerFilter", ctx.weekdaysOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.hasError("matDatepickerMin") || _r18.hasError("matDatepickerMax") || _r18.hasError("matDatepickerFilter"));
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "WYN7":
    /*!********************************************************************************!*\
      !*** ./src/app/routes/material/progress-spinner/progress-spinner.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ProgressSpinnerComponent */

    /***/
    function WYN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function () {
        return ProgressSpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var ProgressSpinnerComponent = function ProgressSpinnerComponent() {
        _classCallCheck(this, ProgressSpinnerComponent);

        this.portionValue = 60;
      };

      ProgressSpinnerComponent.ɵfac = function ProgressSpinnerComponent_Factory(t) {
        return new (t || ProgressSpinnerComponent)();
      };

      ProgressSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressSpinnerComponent,
        selectors: [["app-progress-spinner"]],
        decls: 12,
        vars: 4,
        consts: [["color", "indeterminate", "aria-label", "Loading", 3, "strokeWidth"], ["color", "accent", "aria-label", "Loading"], ["color", "primary", "aria-label", "Portion of pizza eaten", 3, "strokeWidth", "value"], ["color", "warn", "aria-label", "Portion of pizza eaten", 3, "value"]],
        template: function ProgressSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading indicator (Indeterminate progress spinner)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Portion of pizza eaten (Determinate progress spinner) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-progress-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-progress-spinner", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strokeWidth", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strokeWidth", 1)("value", ctx.portionValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.portionValue);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]],
        styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oMiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "XXr5":
    /*!******************************************************************!*\
      !*** ./src/app/routes/material/grid-list/grid-list.component.ts ***!
      \******************************************************************/

    /*! exports provided: GridListComponent */

    /***/
    function XXr5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridListComponent", function () {
        return GridListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function GridListComponent_mat_grid_tile_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tile_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", tile_r4.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r4.cols)("rowspan", tile_r4.rows);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r4.text, " ");
        }
      }

      function GridListComponent_mat_grid_tile_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tile_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "lightblue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r5.text, " ");
        }
      }

      function GridListComponent_mat_grid_tile_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tile_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "#F1EBBA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r6.text, " ");
        }
      }

      function GridListComponent_mat_grid_tile_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dog_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dog_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", dog_r7.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://material.angularjs.org/material2_assets/ngconf/", dog_r7.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Human: ", dog_r7.human, "");
        }
      }

      var GridListComponent = function GridListComponent() {
        _classCallCheck(this, GridListComponent);

        this.dogs = [{
          name: 'Porter',
          human: 'Kara'
        }, {
          name: 'Mal',
          human: 'Jeremy'
        }, {
          name: 'Koby',
          human: 'Igor'
        }, {
          name: 'Razzle',
          human: 'Ward'
        }, {
          name: 'Molly',
          human: 'Rob'
        }, {
          name: 'Husi',
          human: 'Matias'
        }];
        this.tiles = [{
          text: 'Cappuccino',
          cols: 3,
          rows: 1,
          color: 'lightblue'
        }, {
          text: 'Mocha',
          cols: 1,
          rows: 2,
          color: 'lightgreen'
        }, {
          text: 'Latte',
          cols: 1,
          rows: 1,
          color: 'lightpink'
        }, {
          text: 'Iced coffee',
          cols: 2,
          rows: 1,
          color: '#DDBDF1'
        }];
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = '1';
        this.fitListHeight = '400px';
        this.ratio = '4:1';
      };

      GridListComponent.ɵfac = function GridListComponent_Factory(t) {
        return new (t || GridListComponent)();
      };

      GridListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GridListComponent,
        selectors: [["app-grid-list"]],
        decls: 22,
        vars: 10,
        consts: [["role", "list", 3, "cols", "rowHeight"], ["role", "listitem", 3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], ["role", "list", "cols", "2", "gutterSize", "4px", 3, "rowHeight"], ["role", "listitem", 3, "background", 4, "ngFor", "ngForOf"], ["role", "list", "cols", "2", "rowHeight", "fit", 3, "gutterSize"], ["role", "list", "cols", "3", "rowHeight", "200px"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem", 3, "colspan", "rowspan"], ["role", "listitem"], [3, "alt", "src"], ["mat-line", ""]],
        template: function GridListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Types of coffee (fix-height grid-list)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GridListComponent_mat_grid_tile_6_Template, 2, 5, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Types of coffee (ratio-height grid list)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GridListComponent_mat_grid_tile_11_Template, 2, 3, "mat-grid-tile", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Types of coffee (fit-height grid list)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GridListComponent_mat_grid_tile_16_Template, 2, 3, "mat-grid-tile", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular team dogs (Grid list with header and footer)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GridListComponent_mat_grid_tile_21_Template, 7, 4, "mat-grid-tile", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.fixedCols)("rowHeight", ctx.fixedRowHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx.ratio);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.fitListHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gutterSize", ctx.ratioGutter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dogs);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileFooterCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"]],
        styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3JpZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJncmlkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Yqpq":
    /*!****************************************************!*\
      !*** ./src/app/routes/material/material.module.ts ***!
      \****************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function Yqpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _material_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./material-routing.module */
      "iBr3");
      /* harmony import */


      var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./autocomplete/autocomplete.component */
      "KOH2");
      /* harmony import */


      var _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./badge/badge.component */
      "m64y");
      /* harmony import */


      var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bottom-sheet/bottom-sheet.component */
      "d7Z6");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./button/button.component */
      "4rbX");
      /* harmony import */


      var _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./button-toggle/button-toggle.component */
      "IR7n");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./card/card.component */
      "36ro");
      /* harmony import */


      var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./checkbox/checkbox.component */
      "suBh");
      /* harmony import */


      var _chips_chips_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./chips/chips.component */
      "nj0C");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "W7g2");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      "5eDt");
      /* harmony import */


      var _divider_divider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./divider/divider.component */
      "oq4z");
      /* harmony import */


      var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./expansion-panel/expansion-panel.component */
      "31CT");
      /* harmony import */


      var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./form-field/form-field.component */
      "S7EI");
      /* harmony import */


      var _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./grid-list/grid-list.component */
      "XXr5");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./icon/icon.component */
      "9Xlg");
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./input/input.component */
      "CmA1");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./list/list.component */
      "A4dJ");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./menu/menu.component */
      "1Z+R");
      /* harmony import */


      var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./paginator/paginator.component */
      "dZb+");
      /* harmony import */


      var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./progress-bar/progress-bar.component */
      "Ar+X");
      /* harmony import */


      var _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./progress-spinner/progress-spinner.component */
      "WYN7");
      /* harmony import */


      var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./radio-button/radio-button.component */
      "ft8p");
      /* harmony import */


      var _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./ripple/ripple.component */
      "1g5A");
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./select/select.component */
      "F74k");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      "y8bd");
      /* harmony import */


      var _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./sidenav/basic-sidenav */
      "pNin");
      /* harmony import */


      var _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./sidenav/dual-sidenav */
      "S00J");
      /* harmony import */


      var _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./sidenav/mobile-sidenav */
      "nnra");
      /* harmony import */


      var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./slide-toggle/slide-toggle.component */
      "anlL");
      /* harmony import */


      var _slider_slider_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./slider/slider.component */
      "QUeq");
      /* harmony import */


      var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./snack-bar/snack-bar.component */
      "GMZb");
      /* harmony import */


      var _sort_sort_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./sort/sort.component */
      "bm+J");
      /* harmony import */


      var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./stepper/stepper.component */
      "MgQ8");
      /* harmony import */


      var _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./tab/tab.component */
      "zPdk");
      /* harmony import */


      var _table_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./table/table.component */
      "V1xu");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "m1tn");
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      "Z7Fn");
      /* harmony import */


      var _tree_tree_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./tree/tree.component */
      "zmkC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ButtonToggleComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_9__["ChipsComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__["DatepickerComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _divider_divider_component__WEBPACK_IMPORTED_MODULE_12__["DividerComponent"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_13__["ExpansionPanelComponent"], _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_14__["FormFieldComponent"], _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_15__["GridListComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_16__["IconComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_17__["InputComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"], _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_20__["PaginatorComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_21__["ProgressBarComponent"], _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerComponent"], _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__["RadioButtonComponent"], _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_24__["RippleComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_25__["SelectComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_26__["SidenavComponent"], _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_27__["SidenavBasicComponent"], _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_28__["SidenavDualComponent"], _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_29__["SidenavMobileComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_31__["SliderComponent"], _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_30__["SlideToggleComponent"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_32__["SnackBarComponent"], _sort_sort_component__WEBPACK_IMPORTED_MODULE_33__["SortComponent"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_34__["StepperComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["TabComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["FoggyTabContentComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["RainyTabContentComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["SunnyTabContentComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_36__["TableComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["ToolbarComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__["TooltipComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_39__["TreeComponent"]];
      var COMPONENTS_DYNAMIC = [_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetOverviewComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogAddressFormComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogFruitComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogNeptuneComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogNeptuneIFrameComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogWelcomeComponent"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _material_routing_module__WEBPACK_IMPORTED_MODULE_1__["MaterialRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵsetNgModuleScope"](MaterialModule, {
          declarations: [_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["BadgeComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ButtonToggleComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_9__["ChipsComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__["DatepickerComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _divider_divider_component__WEBPACK_IMPORTED_MODULE_12__["DividerComponent"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_13__["ExpansionPanelComponent"], _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_14__["FormFieldComponent"], _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_15__["GridListComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_16__["IconComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_17__["InputComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"], _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_20__["PaginatorComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_21__["ProgressBarComponent"], _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerComponent"], _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__["RadioButtonComponent"], _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_24__["RippleComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_25__["SelectComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_26__["SidenavComponent"], _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_27__["SidenavBasicComponent"], _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_28__["SidenavDualComponent"], _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_29__["SidenavMobileComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_31__["SliderComponent"], _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_30__["SlideToggleComponent"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_32__["SnackBarComponent"], _sort_sort_component__WEBPACK_IMPORTED_MODULE_33__["SortComponent"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_34__["StepperComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["TabComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["FoggyTabContentComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["RainyTabContentComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["SunnyTabContentComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_36__["TableComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["ToolbarComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__["TooltipComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_39__["TreeComponent"], _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetOverviewComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogAddressFormComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogFruitComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogNeptuneComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogNeptuneIFrameComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogWelcomeComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _material_routing_module__WEBPACK_IMPORTED_MODULE_1__["MaterialRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "Z7Fn":
    /*!**************************************************************!*\
      !*** ./src/app/routes/material/tooltip/tooltip.component.ts ***!
      \**************************************************************/

    /*! exports provided: TooltipComponent */

    /***/
    function Z7Fn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
        return TooltipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var TooltipComponent = function TooltipComponent() {
        _classCallCheck(this, TooltipComponent);
      };

      TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
        return new (t || TooltipComponent)();
      };

      TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["app-tooltip"]],
        decls: 33,
        vars: 1,
        consts: [["mat-raised-button", "", "matTooltip", "This is an example of a tooltip"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "matTooltip", "This is a tooltip that shows on click"], ["tooltip", "matTooltip"], ["mat-raised-button", "", "matTooltip", "This tooltip appears below the trigger", "matTooltipPosition", "below"], ["mat-raised-button", "", "matTooltip", "This tooltip appears above the trigger", "matTooltipPosition", "above"], ["mat-raised-button", "", "matTooltip", "This tooltip appears to the left of the trigger", "matTooltipPosition", "left"], ["mat-raised-button", "", "matTooltip", "This tooltip appears to the right of the trigger", "matTooltipPosition", "right"], ["mat-raised-button", "", "matTooltip", "This tooltip will show up after a delay", 3, "matTooltipShowDelay"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mouse over or tab to trigger a tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mouse over or focus the button to show and hide the tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What is this?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Click to trigger a tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

              _r0.toggle();

              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Toggle the tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I have a tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Different tooltip positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Below");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Above");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delayed tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "What is this?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipShowDelay", 2000);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "anlL":
    /*!************************************************************************!*\
      !*** ./src/app/routes/material/slide-toggle/slide-toggle.component.ts ***!
      \************************************************************************/

    /*! exports provided: SlideToggleComponent */

    /***/
    function anlL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function () {
        return SlideToggleComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SlideToggleComponent = /*#__PURE__*/function () {
        function SlideToggleComponent(snackBar) {
          _classCallCheck(this, SlideToggleComponent);

          this.snackBar = snackBar;
          this.emailToggle = true;
          this.termsToggle = false;
          this.musicToggle = false;
        }

        _createClass(SlideToggleComponent, [{
          key: "onFormSubmit",
          value: function onFormSubmit() {
            this.snackBar.open('Terms and condistions accepted!', '', {
              duration: 2000
            });
          }
        }]);

        return SlideToggleComponent;
      }();

      SlideToggleComponent.ɵfac = function SlideToggleComponent_Factory(t) {
        return new (t || SlideToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      SlideToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SlideToggleComponent,
        selectors: [["app-slide-toggle"]],
        decls: 28,
        vars: 4,
        consts: [["color", "primary", 3, "ngModel", "ngModelChange"], ["color", "accent", 3, "disabled", "ngModel", "ngModelChange"], ["ngNativeValidate", "", 3, "ngSubmit"], ["form", "ngForm"], ["name", "termsToggle", "required", "", "ngModel", ""], ["mat-raised-button", "", "type", "submit"]],
        template: function SlideToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Receive email update");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Showing a toggle to manage whether receive email update.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-slide-toggle", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_Template_mat_slide_toggle_ngModelChange_7_listener($event) {
              return ctx.emailToggle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Receive email update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Music");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Showing a disabled toggle to control music on/off status.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slide-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_Template_mat_slide_toggle_ngModelChange_14_listener($event) {
              return ctx.musicToggle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Showing a required toggle to accept terms and conditions in a form.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SlideToggleComponent_Template_form_ngSubmit_21_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-slide-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " I agree to terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.emailToggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("ngModel", ctx.musicToggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Music ", ctx.musicToggle ? "on" : "off", " (disabled) ");
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "bm+J":
    /*!********************************************************!*\
      !*** ./src/app/routes/material/sort/sort.component.ts ***!
      \********************************************************/

    /*! exports provided: SortComponent */

    /***/
    function bmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortComponent", function () {
        return SortComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SortComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dessert_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r1.calories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r1.fat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r1.carbs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r1.protein);
        }
      }

      function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }

      var SortComponent = /*#__PURE__*/function () {
        function SortComponent() {
          _classCallCheck(this, SortComponent);

          this.desserts = [{
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
            carbs: 24,
            protein: 4
          }, {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9,
            carbs: 37,
            protein: 4
          }, {
            name: 'Eclair',
            calories: 262,
            fat: 16,
            carbs: 24,
            protein: 6
          }, {
            name: 'Cupcake',
            calories: 305,
            fat: 4,
            carbs: 67,
            protein: 4
          }, {
            name: 'Gingerbread',
            calories: 356,
            fat: 16,
            carbs: 49,
            protein: 4
          }];
          this.sortedData = this.desserts.slice();
        }

        _createClass(SortComponent, [{
          key: "sortData",
          value: function sortData(sort) {
            var data = this.desserts.slice();

            if (!sort.active || sort.direction === '') {
              this.sortedData = data;
              return;
            }

            this.sortedData = data.sort(function (a, b) {
              var isAsc = sort.direction === 'asc';

              switch (sort.active) {
                case 'name':
                  return compare(a.name, b.name, isAsc);

                case 'calories':
                  return compare(a.calories, b.calories, isAsc);

                case 'fat':
                  return compare(a.fat, b.fat, isAsc);

                case 'carbs':
                  return compare(a.carbs, b.carbs, isAsc);

                case 'protein':
                  return compare(a.protein, b.protein, isAsc);

                default:
                  return 0;
              }
            });
          }
        }]);

        return SortComponent;
      }();

      SortComponent.ɵfac = function SortComponent_Factory(t) {
        return new (t || SortComponent)();
      };

      SortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SortComponent,
        selectors: [["app-sort"]],
        decls: 15,
        vars: 1,
        consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]],
        template: function SortComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function SortComponent_Template_table_matSortChange_2_listener($event) {
              return ctx.sortData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dessert (100g)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Calories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fat (g)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Carbs (g)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Protein (g)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SortComponent_tr_14_Template, 11, 5, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortedData);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "d7Z6":
    /*!************************************************************************!*\
      !*** ./src/app/routes/material/bottom-sheet/bottom-sheet.component.ts ***!
      \************************************************************************/

    /*! exports provided: BottomSheetOverviewComponent, BottomSheetComponent */

    /***/
    function d7Z6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewComponent", function () {
        return BottomSheetOverviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function () {
        return BottomSheetComponent;
      });
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var BottomSheetOverviewComponent = /*#__PURE__*/function () {
        function BottomSheetOverviewComponent(bottomSheetRef) {
          _classCallCheck(this, BottomSheetOverviewComponent);

          this.bottomSheetRef = bottomSheetRef;
        }

        _createClass(BottomSheetOverviewComponent, [{
          key: "openLink",
          value: function openLink(event) {
            this.bottomSheetRef.dismiss();
            event.preventDefault();
          }
        }]);

        return BottomSheetOverviewComponent;
      }();

      BottomSheetOverviewComponent.ɵfac = function BottomSheetOverviewComponent_Factory(t) {
        return new (t || BottomSheetOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MatBottomSheetRef"]));
      };

      BottomSheetOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BottomSheetOverviewComponent,
        selectors: [["bottom-sheet-overview-example-sheet"]],
        decls: 21,
        vars: 0,
        consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]],
        template: function BottomSheetOverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetOverviewComponent_Template_a_click_1_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Google Keep");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add to a note");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetOverviewComponent_Template_a_click_6_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Google Docs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Embed in a document");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetOverviewComponent_Template_a_click_11_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Google Plus");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Share with your friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetOverviewComponent_Template_a_click_16_listener($event) {
              return ctx.openLink($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Google Hangouts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Show to your coworkers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"]],
        encapsulation: 2
      });

      var BottomSheetComponent = /*#__PURE__*/function () {
        function BottomSheetComponent(bottomSheet) {
          _classCallCheck(this, BottomSheetComponent);

          this.bottomSheet = bottomSheet;
        }

        _createClass(BottomSheetComponent, [{
          key: "openBottomSheet",
          value: function openBottomSheet() {
            this.bottomSheet.open(BottomSheetOverviewComponent);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BottomSheetComponent;
      }();

      BottomSheetComponent.ɵfac = function BottomSheetComponent_Factory(t) {
        return new (t || BottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MatBottomSheet"]));
      };

      BottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BottomSheetComponent,
        selectors: [["app-bottom-sheet"]],
        decls: 6,
        vars: 0,
        consts: [["mat-raised-button", "", 3, "click"]],
        template: function BottomSheetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You have received a file called \"cat-picture.jpeg\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomSheetComponent_Template_button_click_4_listener() {
              return ctx.openBottomSheet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Open file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b20tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "dZb+":
    /*!******************************************************************!*\
      !*** ./src/app/routes/material/paginator/paginator.component.ts ***!
      \******************************************************************/

    /*! exports provided: PaginatorComponent */

    /***/
    function dZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
        return PaginatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PaginatorComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page Change Event Properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("List length: ", ctx_r0.pageEvent.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page size: ", ctx_r0.pageEvent.pageSize, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page index: ", ctx_r0.pageEvent.pageIndex, "");
        }
      }

      var PaginatorComponent = /*#__PURE__*/function () {
        function PaginatorComponent() {
          _classCallCheck(this, PaginatorComponent);

          // MatPaginator Inputs
          this.length = 100;
          this.pageSize = 10;
          this.pageSizeOptions = [5, 10, 25, 100];
        }

        _createClass(PaginatorComponent, [{
          key: "setPageSizeOptions",
          value: function setPageSizeOptions(setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) {
              return +str;
            });
          }
        }]);

        return PaginatorComponent;
      }();

      PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) {
        return new (t || PaginatorComponent)();
      };

      PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginatorComponent,
        selectors: [["app-paginator"]],
        decls: 13,
        vars: 7,
        consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]],
        template: function PaginatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " List length: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.length = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Page size: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.pageSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Page size options: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.setPageSizeOptions($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-paginator", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PaginatorComponent_Template_mat_paginator_page_11_listener($event) {
              return ctx.pageEvent = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginatorComponent_div_12_Template, 9, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pageSizeOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageEvent);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ft8p":
    /*!************************************************************************!*\
      !*** ./src/app/routes/material/radio-button/radio-button.component.ts ***!
      \************************************************************************/

    /*! exports provided: RadioButtonComponent */

    /***/
    function ft8p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function () {
        return RadioButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RadioButtonComponent_mat_radio_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var season_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", season_r1, " ");
        }
      }

      var RadioButtonComponent = function RadioButtonComponent() {
        _classCallCheck(this, RadioButtonComponent);

        this.favoriteSeason = 'Autumn';
        this.seasonOptions = ['Winter', 'Spring', 'Summer', 'Autumn'];
      };

      RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) {
        return new (t || RadioButtonComponent)();
      };

      RadioButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RadioButtonComponent,
        selectors: [["app-radio-button"]],
        decls: 39,
        vars: 3,
        consts: [["name", "seasons", "aria-label", "Seasons", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "bread", "align", "end", "aria-label", "Breads"], ["value", "toast"], ["value", "biscuit"], ["value", "bagel"], ["name", "disable"], ["name", "disable", 3, "disabled"], ["name", "color"], ["name", "color", "color", "primary"], ["name", "color", "color", "accent"], ["name", "color", "color", "warn"], [3, "value"]],
        template: function RadioButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Radio buttons in group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadioButtonComponent_Template_mat_radio_group_ngModelChange_5_listener($event) {
              return ctx.favoriteSeason = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RadioButtonComponent_mat_radio_button_6_Template, 2, 2, "mat-radio-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Radio buttons with align-end label position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Biscuit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bagel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Disabled radio buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " This section contains three radio buttons for \"Yes\", \"No\", and \"Maybe\". The \"Maybe\" radio button is disabled. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Maybe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Radio buttons with different colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Default (accent)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.favoriteSeason);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasonOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioButton"]],
        styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InJhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWxlY3RlZC12YWx1ZSB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "iBr3":
    /*!************************************************************!*\
      !*** ./src/app/routes/material/material-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: MaterialRoutingModule */

    /***/
    function iBr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialRoutingModule", function () {
        return MaterialRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./autocomplete/autocomplete.component */
      "KOH2");
      /* harmony import */


      var _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./badge/badge.component */
      "m64y");
      /* harmony import */


      var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bottom-sheet/bottom-sheet.component */
      "d7Z6");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./button/button.component */
      "4rbX");
      /* harmony import */


      var _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./button-toggle/button-toggle.component */
      "IR7n");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./card/card.component */
      "36ro");
      /* harmony import */


      var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./checkbox/checkbox.component */
      "suBh");
      /* harmony import */


      var _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chips/chips.component */
      "nj0C");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "W7g2");
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      "5eDt");
      /* harmony import */


      var _divider_divider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./divider/divider.component */
      "oq4z");
      /* harmony import */


      var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./expansion-panel/expansion-panel.component */
      "31CT");
      /* harmony import */


      var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./form-field/form-field.component */
      "S7EI");
      /* harmony import */


      var _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./grid-list/grid-list.component */
      "XXr5");
      /* harmony import */


      var _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./icon/icon.component */
      "9Xlg");
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./input/input.component */
      "CmA1");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./list/list.component */
      "A4dJ");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./menu/menu.component */
      "1Z+R");
      /* harmony import */


      var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./paginator/paginator.component */
      "dZb+");
      /* harmony import */


      var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./progress-bar/progress-bar.component */
      "Ar+X");
      /* harmony import */


      var _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./progress-spinner/progress-spinner.component */
      "WYN7");
      /* harmony import */


      var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./radio-button/radio-button.component */
      "ft8p");
      /* harmony import */


      var _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./ripple/ripple.component */
      "1g5A");
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./select/select.component */
      "F74k");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      "y8bd");
      /* harmony import */


      var _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./sidenav/basic-sidenav */
      "pNin");
      /* harmony import */


      var _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./sidenav/dual-sidenav */
      "S00J");
      /* harmony import */


      var _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./sidenav/mobile-sidenav */
      "nnra");
      /* harmony import */


      var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./slide-toggle/slide-toggle.component */
      "anlL");
      /* harmony import */


      var _slider_slider_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./slider/slider.component */
      "QUeq");
      /* harmony import */


      var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./snack-bar/snack-bar.component */
      "GMZb");
      /* harmony import */


      var _sort_sort_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./sort/sort.component */
      "bm+J");
      /* harmony import */


      var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./stepper/stepper.component */
      "MgQ8");
      /* harmony import */


      var _tab_tab_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./tab/tab.component */
      "zPdk");
      /* harmony import */


      var _tab_routes__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./tab/routes */
      "Aogt");
      /* harmony import */


      var _table_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./table/table.component */
      "V1xu");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "m1tn");
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      "Z7Fn");
      /* harmony import */


      var _tree_tree_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./tree/tree.component */
      "zmkC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'autocomplete',
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_1__["AutocompleteComponent"]
      }, {
        path: 'checkbox',
        component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"]
      }, {
        path: 'datepicker',
        component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__["DatepickerComponent"]
      }, {
        path: 'form-field',
        component: _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_13__["FormFieldComponent"]
      }, {
        path: 'input',
        component: _input_input_component__WEBPACK_IMPORTED_MODULE_16__["InputComponent"]
      }, {
        path: 'radio',
        component: _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_22__["RadioButtonComponent"]
      }, {
        path: 'select',
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_24__["SelectComponent"]
      }, {
        path: 'slider',
        component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_30__["SliderComponent"]
      }, {
        path: 'slide-toggle',
        component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_29__["SlideToggleComponent"]
      }, // layout
      {
        path: 'card',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]
      }, {
        path: 'divider',
        component: _divider_divider_component__WEBPACK_IMPORTED_MODULE_11__["DividerComponent"]
      }, {
        path: 'expansion',
        component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_12__["ExpansionPanelComponent"]
      }, {
        path: 'grid-list',
        component: _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_14__["GridListComponent"]
      }, {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"]
      }, {
        path: 'stepper',
        component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_33__["StepperComponent"]
      }, {
        path: 'tab',
        component: _tab_tab_component__WEBPACK_IMPORTED_MODULE_34__["TabComponent"],
        children: _tab_routes__WEBPACK_IMPORTED_MODULE_35__["TABS_DEMO_ROUTES"]
      }, {
        path: 'tree',
        component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_39__["TreeComponent"]
      }, // navigation
      {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"]
      }, {
        path: 'sidenav',
        component: _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_25__["SidenavComponent"]
      }, {
        path: 'sidenav/basic',
        component: _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_26__["SidenavBasicComponent"]
      }, {
        path: 'sidenav/dual',
        component: _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_27__["SidenavDualComponent"]
      }, {
        path: 'sidenav/mobile',
        component: _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_28__["SidenavMobileComponent"]
      }, {
        path: 'toolbar',
        component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["ToolbarComponent"]
      }, // buttons-indicators
      {
        path: 'button',
        component: _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]
      }, {
        path: 'button-toggle',
        component: _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_5__["ButtonToggleComponent"]
      }, {
        path: 'badge',
        component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__["BadgeComponent"]
      }, {
        path: 'chips',
        component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__["ChipsComponent"]
      }, {
        path: 'icon',
        component: _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]
      }, {
        path: 'progress-spinner',
        component: _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_21__["ProgressSpinnerComponent"],
        data: {
          title: 'Progress Spinner'
        }
      }, {
        path: 'progress-bar',
        component: _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressBarComponent"]
      }, {
        path: 'ripple',
        component: _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_23__["RippleComponent"]
      }, // popups-modals
      {
        path: 'bottom-sheet',
        component: _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_3__["BottomSheetComponent"]
      }, {
        path: 'dialog',
        component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"]
      }, {
        path: 'snack-bar',
        component: _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_31__["SnackBarComponent"]
      }, {
        path: 'tooltip',
        component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__["TooltipComponent"]
      }, // Data table
      {
        path: 'data-table/paginator',
        component: _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_19__["PaginatorComponent"]
      }, {
        path: 'data-table/sort',
        component: _sort_sort_component__WEBPACK_IMPORTED_MODULE_32__["SortComponent"]
      }, {
        path: 'data-table/table',
        component: _table_table_component__WEBPACK_IMPORTED_MODULE_36__["TableComponent"]
      }];

      var MaterialRoutingModule = function MaterialRoutingModule() {
        _classCallCheck(this, MaterialRoutingModule);
      };

      MaterialRoutingModule.ɵfac = function MaterialRoutingModule_Factory(t) {
        return new (t || MaterialRoutingModule)();
      };

      MaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({
        type: MaterialRoutingModule
      });
      MaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵsetNgModuleScope"](MaterialRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "m1tn":
    /*!**************************************************************!*\
      !*** ./src/app/routes/material/toolbar/toolbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function m1tn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var ToolbarComponent = function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      };

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)();
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 42,
        vars: 0,
        consts: [[1, "demo-toolbar"], ["role", "heading"], [1, "demo-spacer"], ["mat-button", ""], ["aria-label", "favorite"], ["color", "primary"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Toolbar with Text (e.g. Only display app\u2019s name)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hello World!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Multiple Lines Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Toolbar with favorite icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "My App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hello World!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Toolbar colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-toolbar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "My App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hello World!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: [".demo-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .demo-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 8px;\n  text-transform: uppercase;\n}\n.demo-button[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 8px;\n}\n.demo-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n.demo-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBTUE7RUFDRSxjQUFBO0FBSEYiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWJ1dHRvbiB7XHJcbiAgYnV0dG9uLFxyXG4gIGEge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZW1vLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "m64y":
    /*!**********************************************************!*\
      !*** ./src/app/routes/material/badge/badge.component.ts ***!
      \**********************************************************/

    /*! exports provided: BadgeComponent */

    /***/
    function m64y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeComponent", function () {
        return BadgeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var BadgeComponent = /*#__PURE__*/function () {
        function BadgeComponent() {
          _classCallCheck(this, BadgeComponent);
        }

        _createClass(BadgeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BadgeComponent;
      }();

      BadgeComponent.ɵfac = function BadgeComponent_Factory(t) {
        return new (t || BadgeComponent)();
      };

      BadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BadgeComponent,
        selectors: [["app-badge"]],
        decls: 13,
        vars: 0,
        consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["matBadge", "15", "matBadgeColor", "warn"]],
        template: function BadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Text with a badge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Button with a badge on the left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Icon with a badge ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "nj0C":
    /*!**********************************************************!*\
      !*** ./src/app/routes/material/chips/chips.component.ts ***!
      \**********************************************************/

    /*! exports provided: ChipsComponent */

    /***/
    function nj0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChipsComponent", function () {
        return ChipsComponent;
      });
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ChipsComponent_mat_chip_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function ChipsComponent_mat_chip_28_Template_mat_chip_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var person_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.remove(person_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var person_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", person_r2.name, " ");
        }
      }

      var ChipsComponent = /*#__PURE__*/function () {
        function ChipsComponent(snackBar) {
          _classCallCheck(this, ChipsComponent);

          this.snackBar = snackBar;
          this.visible = true;
          this.color = '';
          this.selectable = true;
          this.removable = true;
          this.addOnBlur = true;
          this.message = '';
          this.people = [{
            name: 'Kara'
          }, {
            name: 'Jeremy'
          }, {
            name: 'Topher'
          }, {
            name: 'Elad'
          }, {
            name: 'Kristiyan'
          }, {
            name: 'Paul'
          }];
          this.availableColors = [{
            name: 'none',
            color: ''
          }, {
            name: 'Primary',
            color: 'primary'
          }, {
            name: 'Accent',
            color: 'accent'
          }, {
            name: 'Warn',
            color: 'warn'
          }];
        }

        _createClass(ChipsComponent, [{
          key: "displayMessage",
          value: function displayMessage(message) {
            this.message = message;
          }
        }, {
          key: "add",
          value: function add(event) {
            var input = event.input;
            var value = event.value; // Add our person

            if ((value || '').trim()) {
              var name = value.trim();
              this.people.push({
                name: name
              });
              this.snackBar.open("".concat(name, " added"), '', {
                duration: 2000
              });
            } // Reset the input value


            if (input) {
              input.value = '';
            }
          }
        }, {
          key: "remove",
          value: function remove(person) {
            var index = this.people.indexOf(person);

            if (index >= 0) {
              this.people.splice(index, 1);
              this.snackBar.open("".concat(person.name, " deleted"), '', {
                duration: 2000
              });
            }
          }
        }, {
          key: "toggleVisible",
          value: function toggleVisible() {
            this.visible = false;
          }
        }]);

        return ChipsComponent;
      }();

      ChipsComponent.ɵfac = function ChipsComponent_Factory(t) {
        return new (t || ChipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      ChipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ChipsComponent,
        selectors: [["app-chips"]],
        decls: 52,
        vars: 6,
        consts: [["matPrefix", ""], ["chipList", ""], [3, "color", "removed", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "New Contributor...", "aria-label", "New contributor", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["color", "primary", "selected", "true"], ["color", "accent", "selected", "true"], ["color", "warn", "selected", "true"], [1, "mat-chip-list-stacked"], [3, "selectable"], [3, "color", "removed"], ["matChipRemove", ""]],
        template: function ChipsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Carnation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Irises");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Buttercup");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Unstyled chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-basic-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Husky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-basic-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Golden Retriever ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-basic-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Border Collie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Removable chips in a form field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-chip-list", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ChipsComponent_mat_chip_28_Template, 4, 2, "mat-chip", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function ChipsComponent_Template_input_matChipInputTokenEnd_29_listener($event) {
              return ctx.add($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Colored chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "This example is good for contrast-radio checking.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-chip", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Stacked chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-chip-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-chip", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Lemon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-chip", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Lime");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-chip", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Grapefruit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.people);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputAddOnBlur", ctx.addOnBlur);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", false);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipRemove"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlwcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "nnra":
    /*!***********************************************************!*\
      !*** ./src/app/routes/material/sidenav/mobile-sidenav.ts ***!
      \***********************************************************/

    /*! exports provided: SidenavMobileComponent */

    /***/
    function nnra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavMobileComponent", function () {
        return SidenavMobileComponent;
      });
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function SidenavMobileComponent_p_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Filler content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SidenavMobileComponent_p_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Filler content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var SidenavMobileComponent = /*#__PURE__*/function () {
        function SidenavMobileComponent(changeDetectorRef, media) {
          _classCallCheck(this, SidenavMobileComponent);

          this.filler = Array(20).fill(0);

          this.mobileQueryListener = function () {
            return changeDetectorRef.detectChanges();
          };

          this.mobileQuery = media.matchMedia('(max-width: 600px)'); // tslint:disable-next-line: deprecation

          this.mobileQuery.addListener(this.mobileQueryListener);
        }

        _createClass(SidenavMobileComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // tslint:disable-next-line: deprecation
            this.mobileQuery.removeListener(this.mobileQueryListener);
          }
        }]);

        return SidenavMobileComponent;
      }();

      SidenavMobileComponent.ɵfac = function SidenavMobileComponent_Factory(t) {
        return new (t || SidenavMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]));
      };

      SidenavMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SidenavMobileComponent,
        selectors: [["mobile-sidenav"]],
        hostAttrs: [1, "demo-sidenav-app"],
        decls: 23,
        vars: 10,
        consts: [["color", "primary", "role", "header", "aria-label", "Responsive sidenav app"], ["mat-icon-button", "", "aria-label", "Navigation menu", 3, "click"], ["aria-hidden", "true"], [1, "demo-sidenav-app-name"], [1, "demo-sidenav-container"], ["role", "navigation", 3, "mode", "fixedInViewport"], ["snav", ""], ["mat-list-item", "", "routerLink", ".."], ["mat-list-item", "", "routerLink", "../basic"], ["mat-list-item", "", "routerLink", "../mobile"], ["mat-list-item", "", "routerLink", "../dual"], ["class", "demo-sidenav-filler", 4, "ngFor", "ngForOf"], ["role", "region"], ["mat-raised-button", "", "aria-label", "Close responsive sidenav example", "color", "primary", "routerLink", "..", 1, "demo-sidenav-close"], [1, "demo-sidenav-filler"]],
        template: function SidenavMobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavMobileComponent_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Responsive Sidenav App");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-sidenav-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Basic sidenav example");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Responsive sidenav example");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Dual sidenavs example");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SidenavMobileComponent_p_18_Template, 2, 0, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-sidenav-content", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Close example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SidenavMobileComponent_p_22_Template, 2, 0, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("demo-sidenav-header-fixed", ctx.mobileQuery.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("demo-sidenav-container-fixed", ctx.mobileQuery.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filler);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filler);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
        styles: [".demo-sidenav-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.demo-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.demo-sidenav-container-fixed[_ngcontent-%COMP%] {\n  flex: none;\n}\n\nh1.demo-sidenav-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nbutton.demo-sidenav-close[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.demo-sidenav-filler[_ngcontent-%COMP%] {\n  margin: 100px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tc2lkZW5hdi1hcHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmRlbW8tc2lkZW5hdi1jb250YWluZXItZml4ZWQge1xyXG4gIGZsZXg6IG5vbmU7XHJcbn1cclxuXHJcbmgxLmRlbW8tc2lkZW5hdi1hcHAtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuYnV0dG9uLmRlbW8tc2lkZW5hdi1jbG9zZSB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWZpbGxlciB7XHJcbiAgbWFyZ2luOiAxMDBweCAyMHB4O1xyXG59XHJcbiJdfQ== */", ".demo-sidenav-header-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9iaWxlLXNpZGVuYXYuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoibW9iaWxlLXNpZGVuYXYuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLXNpZGVuYXYtaGVhZGVyLWZpeGVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "oq4z":
    /*!**************************************************************!*\
      !*** ./src/app/routes/material/divider/divider.component.ts ***!
      \**************************************************************/

    /*! exports provided: DividerComponent */

    /***/
    function oq4z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerComponent", function () {
        return DividerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      var DividerComponent = /*#__PURE__*/function () {
        function DividerComponent() {
          _classCallCheck(this, DividerComponent);
        }

        _createClass(DividerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DividerComponent;
      }();

      DividerComponent.ɵfac = function DividerComponent_Factory(t) {
        return new (t || DividerComponent)();
      };

      DividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DividerComponent,
        selectors: [["app-divider"]],
        decls: 35,
        vars: 10,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], [1, "matero-col", 3, "fxFlex.gt-sm", "fxFlex"], [3, "inset"], ["fxLayout", "row"], [3, "vertical"]],
        template: function DividerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-divider", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-sm", 50)("fxFlex", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-sm", 50)("fxFlex", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-sm", 50)("fxFlex", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXZpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "pNin":
    /*!**********************************************************!*\
      !*** ./src/app/routes/material/sidenav/basic-sidenav.ts ***!
      \**********************************************************/

    /*! exports provided: SidenavBasicComponent */

    /***/
    function pNin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavBasicComponent", function () {
        return SidenavBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SidenavBasicComponent = function SidenavBasicComponent() {
        _classCallCheck(this, SidenavBasicComponent);
      };

      SidenavBasicComponent.ɵfac = function SidenavBasicComponent_Factory(t) {
        return new (t || SidenavBasicComponent)();
      };

      SidenavBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavBasicComponent,
        selectors: [["basic-sidenav"]],
        hostAttrs: [1, "demo-sidenav-app"],
        decls: 21,
        vars: 0,
        consts: [["color", "primary", "role", "header", "aria-label", "Basic sidenav app"], ["mat-icon-button", "", "aria-label", "Navigation menu", 3, "click"], ["aria-hidden", "true"], [1, "demo-sidenav-app-name"], [1, "demo-sidenav-container"], ["mode", "side", "role", "navigation"], ["snav", ""], ["mat-list-item", "", "routerLink", ".."], ["mat-list-item", "", "routerLink", "../basic"], ["mat-list-item", "", "routerLink", "../mobile"], ["mat-list-item", "", "routerLink", "../dual"], ["role", "region"], ["mat-raised-button", "", "aria-label", "Close basic sidenav example", "color", "primary", "routerLink", "..", 1, "demo-sidenav-close"]],
        template: function SidenavBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavBasicComponent_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Sidenav App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Basic sidenav example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Responsive sidenav example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dual sidenavs example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Close example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: [".demo-sidenav-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.demo-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.demo-sidenav-container-fixed[_ngcontent-%COMP%] {\n  flex: none;\n}\n\nh1.demo-sidenav-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nbutton.demo-sidenav-close[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.demo-sidenav-filler[_ngcontent-%COMP%] {\n  margin: 100px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tc2lkZW5hdi1hcHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmRlbW8tc2lkZW5hdi1jb250YWluZXItZml4ZWQge1xyXG4gIGZsZXg6IG5vbmU7XHJcbn1cclxuXHJcbmgxLmRlbW8tc2lkZW5hdi1hcHAtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuYnV0dG9uLmRlbW8tc2lkZW5hdi1jbG9zZSB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWZpbGxlciB7XHJcbiAgbWFyZ2luOiAxMDBweCAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "suBh":
    /*!****************************************************************!*\
      !*** ./src/app/routes/material/checkbox/checkbox.component.ts ***!
      \****************************************************************/

    /*! exports provided: CheckboxComponent */

    /***/
    function suBh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
        return CheckboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CheckboxComponent_div_21_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckboxComponent_div_21_div_4_Template_mat_checkbox_ngModelChange_1_listener($event) {
            var subtask_r3 = ctx.$implicit;
            return subtask_r3.completed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subtask_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", subtask_r3.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subtask_r3.name, " ");
        }
      }

      function CheckboxComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckboxComponent_div_21_Template_mat_checkbox_ngModelChange_1_listener($event) {
            var task_r1 = ctx.$implicit;
            return task_r1.completed = $event;
          })("change", function CheckboxComponent_div_21_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var task_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.setAllCompleted(task_r1.subtasks, $event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckboxComponent_div_21_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", task_r1.completed)("checked", ctx_r0.allComplete(task_r1))("indeterminate", ctx_r0.someComplete(task_r1.subtasks));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r1.subtasks);
        }
      }

      var CheckboxComponent = /*#__PURE__*/function () {
        function CheckboxComponent() {
          _classCallCheck(this, CheckboxComponent);

          this.tasks = [{
            name: 'Reminders',
            completed: false,
            subtasks: [{
              name: 'Cook Dinner',
              completed: false
            }, {
              name: 'Read the Material Design Spec',
              completed: true
            }, {
              name: 'Upgrade Application to Angular',
              completed: false
            }]
          }, {
            name: 'Groceries',
            completed: false,
            subtasks: [{
              name: 'Organic Eggs',
              completed: true
            }, {
              name: 'Protein Powder',
              completed: false
            }, {
              name: 'Almond Meal Flour',
              completed: false
            }]
          }];
        }

        _createClass(CheckboxComponent, [{
          key: "allComplete",
          value: function allComplete(task) {
            var subtasks = task.subtasks;
            return task.completed || subtasks != null && subtasks.every(function (t) {
              return t.completed;
            });
          }
        }, {
          key: "someComplete",
          value: function someComplete(tasks) {
            var numComplete = tasks.filter(function (t) {
              return t.completed;
            }).length;
            return numComplete > 0 && numComplete < tasks.length;
          }
        }, {
          key: "setAllCompleted",
          value: function setAllCompleted(tasks, completed) {
            tasks.forEach(function (t) {
              return t.completed = completed;
            });
          }
        }]);

        return CheckboxComponent;
      }();

      CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
        return new (t || CheckboxComponent)();
      };

      CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckboxComponent,
        selectors: [["app-checkbox"]],
        decls: 31,
        vars: 3,
        consts: [["aria-label", "A single checkbox with no label example"], [3, "disabled"], [3, "indeterminate"], [4, "ngFor", "ngForOf"], ["color", "primary"], ["color", "accent"], ["color", "warn"], [3, "ngModel", "checked", "indeterminate", "ngModelChange", "change"], [1, "demo-sub-list"], [3, "ngModel", "ngModelChange"]],
        template: function CheckboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Checkbox without label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Standalone checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes, I agree to the terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "No, I do not agree to the terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A partially done task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nested checklist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CheckboxComponent_div_21_Template, 5, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Colored checkboxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        styles: [".demo-sub-list[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tc3ViLWxpc3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "y8bd":
    /*!**************************************************************!*\
      !*** ./src/app/routes/material/sidenav/sidenav.component.ts ***!
      \**************************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function y8bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SidenavComponent = function SidenavComponent() {
        _classCallCheck(this, SidenavComponent);
      };

      SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || SidenavComponent)();
      };

      SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavComponent,
        selectors: [["app-sidenav"]],
        decls: 18,
        vars: 0,
        consts: [["mat-raised-button", "", "aria-label", "View basic sidenav example", "color", "primary", "routerLink", "basic"], ["mat-raised-button", "", "aria-label", "View mobile sidenav example", "color", "primary", "routerLink", "mobile"], ["mat-raised-button", "", "aria-label", "View dual sidenav example", "color", "primary", "routerLink", "dual"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic sidenav (e.g. desktop app with hamburger menu)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mobile sidenav (e.g. responsive design hamburger menu)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " View example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dual sidenavs (e.g. music app with hamburger menu and playlist sidenav)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " View example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zPdk":
    /*!******************************************************!*\
      !*** ./src/app/routes/material/tab/tab.component.ts ***!
      \******************************************************/

    /*! exports provided: TabComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */

    /***/
    function zPdk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
        return TabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SunnyTabContentComponent", function () {
        return SunnyTabContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RainyTabContentComponent", function () {
        return RainyTabContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoggyTabContentComponent", function () {
        return FoggyTabContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function TabComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tabLink_r2 = ctx.$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tabLink_r2.link)("active", _r4.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tabLink_r2.label, " ");
        }
      }

      function TabComponent_mat_tab_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var tab_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r5.label);
        }
      }

      function TabComponent_mat_tab_16_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in the United Kingdom and the United States. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A favourite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog and perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A few kennels breeding their ancestors, the St. John's water dog, were in England. At the same time, a combination of the sheep protection policy in Newfoundland and rabies quarantine in the United Kingdom, led to the gradual demise of the St. John's water dog in Canada. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " In the 1830s, the 10th Earl of Home and his nephews the 5th Duke of Buccleuch and Lord John Scott, had imported progenitors of the breed from Newfoundland to Europe for use as gundogs. Another early advocate of these Newfoundland dogs, or Labrador Retrievers as they later became known, was the 2nd Earl of Malmesbury who bred them for their expertise in waterfowling. During the 1880s, the 3rd Earl of Malmesbury, the 6th Duke of Buccleuch and the 12th Earl of Home collaborated to develop and establish the modern Labrador breed. The dogs Buccleuch Avon and Buccleuch Ned, given by Malmesbury to Buccleuch, were mated with bitches carrying blood from those originally imported by the 5th Duke and the 10th Earl of Home. The offspring are considered to be the ancestors of modern Labradors. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabComponent_mat_tab_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabComponent_mat_tab_16_ng_template_1_Template, 1, 1, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TabComponent_mat_tab_16_div_6_Template, 13, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r5.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r5.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r5.extraContent);
        }
      }

      var TabComponent = function TabComponent() {
        _classCallCheck(this, TabComponent);

        // Nav bar demo
        this.tabLinks = [{
          label: 'Sun',
          link: 'sunny-tab'
        }, {
          label: 'Rain',
          link: 'rainy-tab'
        }, {
          label: 'Fog',
          link: 'foggy-tab'
        }]; // Standard tabs demo

        this.tabs = [{
          label: 'German Shepherd',
          content: "The German Shepherd is a breed of medium to large-sized working dog that originated\n          in Germany. The breed's officially recognized name is German Shepherd Dog in the\n          English language. The breed is also known as the Alsatian in Britain and Ireland."
        }, {
          label: 'Labrador Retriever',
          extraContent: true,
          content: "The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador\n          is one of the most popular breeds of dog in the United Kingdom and the United States."
        }, {
          label: 'Rottweiler',
          disabled: true,
          content: "The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.\n          The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs,\n          because their main use was to ..."
        }, {
          label: 'Beagle',
          content: "The Beagle is a breed of small hound, similar in appearance to the much larger\n          foxhound. The beagle is a scent hound, developed primarily for hunting hare."
        }];
      };

      TabComponent.ɵfac = function TabComponent_Factory(t) {
        return new (t || TabComponent)();
      };

      TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TabComponent,
        selectors: [["app-tab"]],
        decls: 17,
        vars: 2,
        consts: [["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["dynamicHeight", ""], [3, "disabled", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"], [3, "disabled"], ["mat-tab-label", ""], [4, "ngIf"]],
        template: function TabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Weather");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Switch tabs to navigate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabComponent_a_8_Template, 3, 3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dog breeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dynamic height tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TabComponent_mat_tab_16_Template, 7, 3, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabLinks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxXQUFBO0FBQ0YiLCJmaWxlIjoidGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaW5wdXQtbGFiZWwsXHJcbi5leGFtcGxlLWFkZC10YWItYnV0dG9uLFxyXG4uZXhhbXBsZS1kZWxldGUtdGFiLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuIl19 */"]
      });

      var SunnyTabContentComponent = function SunnyTabContentComponent() {
        _classCallCheck(this, SunnyTabContentComponent);
      };

      SunnyTabContentComponent.ɵfac = function SunnyTabContentComponent_Factory(t) {
        return new (t || SunnyTabContentComponent)();
      };

      SunnyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SunnyTabContentComponent,
        selectors: [["sunny-routed-content"]],
        decls: 1,
        vars: 0,
        template: function SunnyTabContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Having a lot of light from the sun.");
          }
        },
        encapsulation: 2
      });

      var RainyTabContentComponent = function RainyTabContentComponent() {
        _classCallCheck(this, RainyTabContentComponent);
      };

      RainyTabContentComponent.ɵfac = function RainyTabContentComponent_Factory(t) {
        return new (t || RainyTabContentComponent)();
      };

      RainyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RainyTabContentComponent,
        selectors: [["rainy-routed-content"]],
        decls: 1,
        vars: 0,
        template: function RainyTabContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "A rainy period of time is one when it rains a lot");
          }
        },
        encapsulation: 2
      });

      var FoggyTabContentComponent = function FoggyTabContentComponent() {
        _classCallCheck(this, FoggyTabContentComponent);
      };

      FoggyTabContentComponent.ɵfac = function FoggyTabContentComponent_Factory(t) {
        return new (t || FoggyTabContentComponent)();
      };

      FoggyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FoggyTabContentComponent,
        selectors: [["foggy-routed-content"]],
        decls: 1,
        vars: 0,
        template: function FoggyTabContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "If the weather is foggy, there is fog");
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zmkC":
    /*!********************************************************!*\
      !*** ./src/app/routes/material/tree/tree.component.ts ***!
      \********************************************************/

    /*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, TreeComponent */

    /***/
    function zmkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function () {
        return DynamicFlatNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function () {
        return DynamicDatabase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function () {
        return DynamicDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeComponent", function () {
        return TreeComponent;
      });
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      function TreeComponent_mat_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r2.item, " ");
        }
      }

      function TreeComponent_mat_tree_node_4_mat_progress_bar_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 8);
        }
      }

      function TreeComponent_mat_tree_node_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TreeComponent_mat_tree_node_4_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "toggle " + node_r3.filename);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r3.item, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", node_r3.isLoading);
        }
      }
      /** Flat node with expandable and level information */


      var DynamicFlatNode = function DynamicFlatNode(item) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var expandable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, DynamicFlatNode);

        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
      };
      /**
       * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
       * the descendants data from the database.
       */


      var DynamicDatabase = /*#__PURE__*/function () {
        function DynamicDatabase() {
          _classCallCheck(this, DynamicDatabase);

          this.dataMap = new Map([['Fruits', ['Apple', 'Orange', 'Banana']], ['Vegetables', ['Tomato', 'Potato', 'Onion']], ['Apple', ['Fuji', 'Macintosh']], ['Onion', ['Yellow', 'White', 'Purple']]]);
          this.rootLevelNodes = ['Fruits', 'Vegetables'];
        }
        /** Initial data from database */


        _createClass(DynamicDatabase, [{
          key: "initialData",
          value: function initialData() {
            return this.rootLevelNodes.map(function (name) {
              return new DynamicFlatNode(name, 0, true);
            });
          }
        }, {
          key: "getChildren",
          value: function getChildren(node) {
            return this.dataMap.get(node);
          }
        }, {
          key: "isExpandable",
          value: function isExpandable(node) {
            return this.dataMap.has(node);
          }
        }]);

        return DynamicDatabase;
      }();

      DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) {
        return new (t || DynamicDatabase)();
      };

      DynamicDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: DynamicDatabase,
        factory: DynamicDatabase.ɵfac
      });
      /**
       * File database, it can build a tree structured Json object from string.
       * Each node in Json object represents a file or a directory. For a file, it has filename and type.
       * For a directory, it has filename and children (a list of files or directories).
       * The input will be a json object string, and the output is a list of `FileNode` with nested
       * structure.
       */

      var DynamicDataSource = /*#__PURE__*/function () {
        function DynamicDataSource(treeControl, database) {
          _classCallCheck(this, DynamicDataSource);

          this.treeControl = treeControl;
          this.database = database;
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(DynamicDataSource, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          },
          set: function set(value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
          }
        }, {
          key: "connect",
          value: function connect(collectionViewer) {
            var _this8 = this;

            // tslint:disable-next-line: deprecation
            this.treeControl.expansionModel.changed.subscribe(function (change) {
              if (change.added || change.removed) {
                _this8.handleTreeControl(change);
              }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this8.data;
            }));
          }
          /** Handle expand/collapse behaviors */

        }, {
          key: "handleTreeControl",
          value: function handleTreeControl(change) {
            var _this9 = this;

            if (change.added) {
              change.added.forEach(function (node) {
                return _this9.toggleNode(node, true);
              });
            }

            if (change.removed) {
              change.removed.slice().reverse().forEach(function (node) {
                return _this9.toggleNode(node, false);
              });
            }
          }
          /**
           * Toggle the node, remove from display list
           */

        }, {
          key: "toggleNode",
          value: function toggleNode(node, expand) {
            var _this10 = this;

            var children = this.database.getChildren(node.item);
            var index = this.data.indexOf(node);

            if (!children || index < 0) {
              // If no children, or cannot find the node, no op
              return;
            }

            node.isLoading = true;
            setTimeout(function () {
              if (expand) {
                var _this10$data;

                var nodes = children.map(function (name) {
                  return new DynamicFlatNode(name, node.level + 1, _this10.database.isExpandable(name));
                });

                (_this10$data = _this10.data).splice.apply(_this10$data, [index + 1, 0].concat(_toConsumableArray(nodes)));
              } else {
                var count = 0;

                for (var i = index + 1; i < _this10.data.length && _this10.data[i].level > node.level; i++, count++) {}

                _this10.data.splice(index + 1, count);
              } // notify the change


              _this10.dataChange.next(_this10.data);

              node.isLoading = false;
            }, 1000);
          }
        }]);

        return DynamicDataSource;
      }();

      DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) {
        return new (t || DynamicDataSource)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](DynamicDatabase));
      };

      DynamicDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: DynamicDataSource,
        factory: DynamicDataSource.ɵfac
      });
      /**
       * @title Tree with dynamic data
       */

      var TreeComponent = function TreeComponent(database) {
        _classCallCheck(this, TreeComponent);

        this.getLevel = function (node) {
          return node.level;
        };

        this.isExpandable = function (node) {
          return node.expandable;
        };

        this.hasChild = function (_, nodeData) {
          return nodeData.expandable;
        };

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
      };

      TreeComponent.ɵfac = function TreeComponent_Factory(t) {
        return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DynamicDatabase));
      };

      TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TreeComponent,
        selectors: [["app-tree"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([DynamicDatabase])],
        decls: 5,
        vars: 3,
        consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]],
        template: function TreeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TreeComponent_mat_tree_node_3_Template, 3, 1, "mat-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TreeComponent_mat_tree_node_4_Template, 6, 4, "mat-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]],
        styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoidHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRyZWUtcHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=material-material-module-es5.js.map