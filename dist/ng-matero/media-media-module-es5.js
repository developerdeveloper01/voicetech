(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"], {
    /***/
    "Hb1z":
    /*!******************************************************!*\
      !*** ./src/app/routes/media/media-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: MediaRoutingModule */

    /***/
    function Hb1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaRoutingModule", function () {
        return MediaRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gallery/gallery.component */
      "UOR/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["MediaGalleryComponent"]
      }];

      var MediaRoutingModule = function MediaRoutingModule() {
        _classCallCheck(this, MediaRoutingModule);
      };

      MediaRoutingModule.ɵfac = function MediaRoutingModule_Factory(t) {
        return new (t || MediaRoutingModule)();
      };

      MediaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MediaRoutingModule
      });
      MediaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "UOR/":
    /*!***********************************************************!*\
      !*** ./src/app/routes/media/gallery/gallery.component.ts ***!
      \***********************************************************/

    /*! exports provided: MediaGalleryComponent */

    /***/
    function UOR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaGalleryComponent", function () {
        return MediaGalleryComponent;
      });
      /* harmony import */


      var photoviewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! photoviewer */
      "tB2r");
      /* harmony import */


      var photoviewer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoviewer__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
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

      function MediaGalleryComponent_mat_grid_tile_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-grid-tile-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MediaGalleryComponent_mat_grid_tile_7_Template_img_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.preview(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gallery Image: ", i_r2 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "Gallery Image ", i_r2 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var MediaGalleryComponent = /*#__PURE__*/function () {
        function MediaGalleryComponent() {
          _classCallCheck(this, MediaGalleryComponent);

          this.dir = 'assets/images/pixabay/';
          this.images = [];

          for (var i = 1; i <= 20; i++) {
            this.images.push({
              title: i,
              src: this.dir + i + '.jpg'
            });
          }
        } // Preview images


        _createClass(MediaGalleryComponent, [{
          key: "preview",
          value: function preview(index) {
            var options = {
              index: index
            };
            var viewer = new photoviewer__WEBPACK_IMPORTED_MODULE_0___default.a(this.images, options);
          }
        }]);

        return MediaGalleryComponent;
      }();

      MediaGalleryComponent.ɵfac = function MediaGalleryComponent_Factory(t) {
        return new (t || MediaGalleryComponent)();
      };

      MediaGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MediaGalleryComponent,
        selectors: [["app-media-gallery"]],
        decls: 8,
        vars: 1,
        consts: [["title", "Media", 1, "bg-pink-A100"], ["href", "https://github.com/nzbin/photoviewer", "target", "_blank"], ["cols", "4", "rowHeight", "1:1"], [4, "ngFor", "ngForOf"], ["matLine", ""], [1, "w-full", "h-full", "object-cover", "cursor-pointer", 3, "src", "alt", "click"]],
        template: function MediaGalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " The media pictures are powered by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PhotoViewer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ", you can click the picture to enlarge it.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-grid-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MediaGalleryComponent_mat_grid_tile_7_Template, 5, 3, "mat-grid-tile", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTileHeaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "iSw/":
    /*!**********************************************!*\
      !*** ./src/app/routes/media/media.module.ts ***!
      \**********************************************/

    /*! exports provided: MediaModule */

    /***/
    function iSw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaModule", function () {
        return MediaModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _media_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./media-routing.module */
      "Hb1z");
      /* harmony import */


      var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gallery/gallery.component */
      "UOR/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["MediaGalleryComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var MediaModule = function MediaModule() {
        _classCallCheck(this, MediaModule);
      };

      MediaModule.ɵfac = function MediaModule_Factory(t) {
        return new (t || MediaModule)();
      };

      MediaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MediaModule
      });
      MediaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _media_routing_module__WEBPACK_IMPORTED_MODULE_1__["MediaRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MediaModule, {
          declarations: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["MediaGalleryComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _media_routing_module__WEBPACK_IMPORTED_MODULE_1__["MediaRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=media-media-module-es5.js.map