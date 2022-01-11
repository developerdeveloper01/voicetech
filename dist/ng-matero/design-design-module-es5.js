(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["design-design-module"], {
    /***/
    "6Lup":
    /*!********************************************************!*\
      !*** ./src/app/routes/design/colors/colors.service.ts ***!
      \********************************************************/

    /*! exports provided: DesignColorsService */

    /***/
    function Lup(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesignColorsService", function () {
        return DesignColorsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DesignColorsService = function DesignColorsService() {
        _classCallCheck(this, DesignColorsService);
      };

      DesignColorsService.ɵfac = function DesignColorsService_Factory(t) {
        return new (t || DesignColorsService)();
      };

      DesignColorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DesignColorsService,
        factory: DesignColorsService.ɵfac
      });
      /***/
    },

    /***/
    "SkQ0":
    /*!******************************************************!*\
      !*** ./src/app/routes/design/icons/icons.service.ts ***!
      \******************************************************/

    /*! exports provided: DesignIconsService */

    /***/
    function SkQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesignIconsService", function () {
        return DesignIconsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DesignIconsService = function DesignIconsService() {
        _classCallCheck(this, DesignIconsService);
      };

      DesignIconsService.ɵfac = function DesignIconsService_Factory(t) {
        return new (t || DesignIconsService)();
      };

      DesignIconsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DesignIconsService,
        factory: DesignIconsService.ɵfac
      });
      /***/
    },

    /***/
    "VP0H":
    /*!**********************************************************!*\
      !*** ./src/app/routes/design/colors/colors.component.ts ***!
      \**********************************************************/

    /*! exports provided: DesignColorsComponent */

    /***/
    function VP0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesignColorsComponent", function () {
        return DesignColorsComponent;
      });
      /* harmony import */


      var _colors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./colors.service */
      "6Lup");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DesignColorsComponent_div_2_ng_container_2_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](color_r1.key);
        }
      }

      function DesignColorsComponent_div_2_ng_container_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignColorsComponent_div_2_ng_container_2_div_1_span_1_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var hue_r3 = ctx_r9.$implicit;
          var isFirst_r4 = ctx_r9.first;

          var color_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("bg-", color_r1.key + "-" + hue_r3.key, " text-", color_r1.value["contrast"][hue_r3.key], " p-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isFirst_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hue_r3.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hue_r3.value);
        }
      }

      function DesignColorsComponent_div_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignColorsComponent_div_2_ng_container_2_div_1_Template, 7, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var hue_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", hue_r3.key.toString() !== "contrast");
        }
      }

      function DesignColorsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DesignColorsComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, color_r1.value, ctx_r0.keyAscOrder));
        }
      }

      var DesignColorsComponent = /*#__PURE__*/function () {
        function DesignColorsComponent(colorsSrv) {
          _classCallCheck(this, DesignColorsComponent);

          this.colorsSrv = colorsSrv;
          this.colors = [];
        }

        _createClass(DesignColorsComponent, [{
          key: "valueAscOrder",
          value: function valueAscOrder(a, b) {
            return a.value.localeCompare(b.value);
          }
        }, {
          key: "keyAscOrder",
          value: function keyAscOrder(a, b) {
            return a.key - b.key;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var colors = _shared__WEBPACK_IMPORTED_MODULE_1__["MAT_COLORS"];

            for (var _i = 0, _Object$keys = Object.keys(colors); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];
              this.colors.push({
                key: key,
                value: colors[key]
              });
            }
          }
        }, {
          key: "trackByColor",
          value: function trackByColor(index, color) {
            return color.key;
          }
        }]);

        return DesignColorsComponent;
      }();

      DesignColorsComponent.ɵfac = function DesignColorsComponent_Factory(t) {
        return new (t || DesignColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_colors_service__WEBPACK_IMPORTED_MODULE_0__["DesignColorsService"]));
      };

      DesignColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DesignColorsComponent,
        selectors: [["app-design-colors"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_colors_service__WEBPACK_IMPORTED_MODULE_0__["DesignColorsService"]])],
        decls: 3,
        vars: 2,
        consts: [["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex.gt-md", "20", "fxFlex.gt-sm", "25", "fxFlex.gt-xs", "50", "fxFlex", "100", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxFlex.gt-md", "20", "fxFlex.gt-sm", "25", "fxFlex.gt-xs", "50", "fxFlex", "100"], [1, "b-1"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["class", "m-r-4 text-capitalize", 4, "ngIf"], ["fxFlex", ""], [1, "m-r-4", "text-capitalize"]],
        template: function DesignColorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DesignColorsComponent_div_2_Template, 4, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors)("ngForTrackBy", ctx.trackByColor);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gkmW":
    /*!********************************************************!*\
      !*** ./src/app/routes/design/design-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: DesignRoutingModule */

    /***/
    function gkmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesignRoutingModule", function () {
        return DesignRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _colors_colors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./colors/colors.component */
      "VP0H");
      /* harmony import */


      var _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./icons/icons.component */
      "zK6f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'colors',
        component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_1__["DesignColorsComponent"]
      }, {
        path: 'icons',
        component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["DesignIconsComponent"]
      }];

      var DesignRoutingModule = function DesignRoutingModule() {
        _classCallCheck(this, DesignRoutingModule);
      };

      DesignRoutingModule.ɵfac = function DesignRoutingModule_Factory(t) {
        return new (t || DesignRoutingModule)();
      };

      DesignRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: DesignRoutingModule
      });
      DesignRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DesignRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uEjr":
    /*!************************************************!*\
      !*** ./src/app/routes/design/design.module.ts ***!
      \************************************************/

    /*! exports provided: DesignModule */

    /***/
    function uEjr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesignModule", function () {
        return DesignModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _design_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./design-routing.module */
      "gkmW");
      /* harmony import */


      var _colors_colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./colors/colors.component */
      "VP0H");
      /* harmony import */


      var _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./icons/icons.component */
      "zK6f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_colors_colors_component__WEBPACK_IMPORTED_MODULE_2__["DesignColorsComponent"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["DesignIconsComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var DesignModule = function DesignModule() {
        _classCallCheck(this, DesignModule);
      };

      DesignModule.ɵfac = function DesignModule_Factory(t) {
        return new (t || DesignModule)();
      };

      DesignModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: DesignModule
      });
      DesignModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _design_routing_module__WEBPACK_IMPORTED_MODULE_1__["DesignRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DesignModule, {
          declarations: [_colors_colors_component__WEBPACK_IMPORTED_MODULE_2__["DesignColorsComponent"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["DesignIconsComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _design_routing_module__WEBPACK_IMPORTED_MODULE_1__["DesignRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "zK6f":
    /*!********************************************************!*\
      !*** ./src/app/routes/design/icons/icons.component.ts ***!
      \********************************************************/

    /*! exports provided: DesignIconsComponent */

    /***/
    function zK6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesignIconsComponent", function () {
        return DesignIconsComponent;
      });
      /* harmony import */


      var _icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./icons.service */
      "SkQ0");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function DesignIconsComponent_ng_container_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var icon_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](icon_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](icon_r3);
        }
      }

      function DesignIconsComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DesignIconsComponent_ng_container_1_div_6_Template, 6, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var group_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", group_r1.key, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r1.value);
        }
      }

      var DesignIconsComponent = /*#__PURE__*/function () {
        function DesignIconsComponent(iconsSrv) {
          _classCallCheck(this, DesignIconsComponent);

          this.iconsSrv = iconsSrv;
        }

        _createClass(DesignIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.icons = _shared__WEBPACK_IMPORTED_MODULE_1__["MAT_ICONS"];
          }
        }, {
          key: "trackByIcon",
          value: function trackByIcon(index, icon) {
            return icon.key;
          }
        }]);

        return DesignIconsComponent;
      }();

      DesignIconsComponent.ɵfac = function DesignIconsComponent_Factory(t) {
        return new (t || DesignIconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_icons_service__WEBPACK_IMPORTED_MODULE_0__["DesignIconsService"]));
      };

      DesignIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DesignIconsComponent,
        selectors: [["app-design-icons"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_icons_service__WEBPACK_IMPORTED_MODULE_0__["DesignIconsService"]])],
        decls: 3,
        vars: 4,
        consts: [[1, "bg-purple-500"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mat-h1", "f-w-300", "text-capitalize", "m-b-16", "text-gray-500"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex.gt-md", "11.11", "fxFlex.md", "20", "fxFlex.sm", "25", "fxFlex.xs", "33.33", 4, "ngFor", "ngForOf"], ["fxFlex.gt-md", "11.11", "fxFlex.md", "20", "fxFlex.sm", "25", "fxFlex.xs", "33.33"], [1, "text-center"], [1, "icon-36"], [1, "f-s-12"]],
        template: function DesignIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignIconsComponent_ng_container_1_Template, 7, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.icons))("ngForTrackBy", ctx.trackByIcon);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=design-design-module-es5.js.map