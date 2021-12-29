(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-off-ivr-system-off-ivr-system-module"], {
    /***/
    "HtxX":
    /*!*********************************************************************************!*\
      !*** ./src/app/routes/products/off-ivr-system/off-ivr-system-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: OffIvrSystemRoutingModule */

    /***/
    function HtxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffIvrSystemRoutingModule", function () {
        return OffIvrSystemRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ivr_greeting_ivr_greeting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ivr-greeting/ivr-greeting.component */
      "OiVS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'ivr-greeting',
        component: _ivr_greeting_ivr_greeting_component__WEBPACK_IMPORTED_MODULE_1__["IvrGreetingComponent"]
      }];

      var OffIvrSystemRoutingModule = function OffIvrSystemRoutingModule() {
        _classCallCheck(this, OffIvrSystemRoutingModule);
      };

      OffIvrSystemRoutingModule.ɵfac = function OffIvrSystemRoutingModule_Factory(t) {
        return new (t || OffIvrSystemRoutingModule)();
      };

      OffIvrSystemRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: OffIvrSystemRoutingModule
      });
      OffIvrSystemRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OffIvrSystemRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "OiVS":
    /*!***************************************************************************************!*\
      !*** ./src/app/routes/products/off-ivr-system/ivr-greeting/ivr-greeting.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: IvrGreetingComponent */

    /***/
    function OiVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IvrGreetingComponent", function () {
        return IvrGreetingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IvrGreetingComponent = /*#__PURE__*/function () {
        function IvrGreetingComponent() {
          _classCallCheck(this, IvrGreetingComponent);
        }

        _createClass(IvrGreetingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IvrGreetingComponent;
      }();

      IvrGreetingComponent.ɵfac = function IvrGreetingComponent_Factory(t) {
        return new (t || IvrGreetingComponent)();
      };

      IvrGreetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IvrGreetingComponent,
        selectors: [["app-ivr-greeting"]],
        decls: 2,
        vars: 0,
        template: function IvrGreetingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ivr-greeting works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdnItZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "wjdx":
    /*!*************************************************************************!*\
      !*** ./src/app/routes/products/off-ivr-system/off-ivr-system.module.ts ***!
      \*************************************************************************/

    /*! exports provided: OffIvrSystemModule */

    /***/
    function wjdx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffIvrSystemModule", function () {
        return OffIvrSystemModule;
      });
      /* harmony import */


      var _off_ivr_system_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./off-ivr-system-routing.module */
      "HtxX");
      /* harmony import */


      var _ivr_greeting_ivr_greeting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ivr-greeting/ivr-greeting.component */
      "OiVS");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_ivr_greeting_ivr_greeting_component__WEBPACK_IMPORTED_MODULE_1__["IvrGreetingComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var OffIvrSystemModule = function OffIvrSystemModule() {
        _classCallCheck(this, OffIvrSystemModule);
      };

      OffIvrSystemModule.ɵfac = function OffIvrSystemModule_Factory(t) {
        return new (t || OffIvrSystemModule)();
      };

      OffIvrSystemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: OffIvrSystemModule
      });
      OffIvrSystemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _off_ivr_system_routing_module__WEBPACK_IMPORTED_MODULE_0__["OffIvrSystemRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OffIvrSystemModule, {
          declarations: [_ivr_greeting_ivr_greeting_component__WEBPACK_IMPORTED_MODULE_1__["IvrGreetingComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _off_ivr_system_routing_module__WEBPACK_IMPORTED_MODULE_0__["OffIvrSystemRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=products-off-ivr-system-off-ivr-system-module-es5.js.map