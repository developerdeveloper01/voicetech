(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "wwJg":
    /*!*******************************************************************!*\
      !*** ./src/app/routes/tables/kitchen-sink/edit/edit.component.ts ***!
      \*******************************************************************/

    /*! exports provided: TablesKitchenSinkEditComponent */

    /***/
    function wwJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesKitchenSinkEditComponent", function () {
        return TablesKitchenSinkEditComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var TablesKitchenSinkEditComponent = /*#__PURE__*/function () {
        function TablesKitchenSinkEditComponent(dialogRef, data) {
          _classCallCheck(this, TablesKitchenSinkEditComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(TablesKitchenSinkEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.dialogRef.close();
          }
        }]);

        return TablesKitchenSinkEditComponent;
      }();

      TablesKitchenSinkEditComponent.??fac = function TablesKitchenSinkEditComponent_Factory(t) {
        return new (t || TablesKitchenSinkEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      TablesKitchenSinkEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: TablesKitchenSinkEditComponent,
        selectors: [["app-table-kitchen-sink-edit"]],
        decls: 9,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", ""]],
        template: function TablesKitchenSinkEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TablesKitchenSinkEditComponent_Template_button_click_5_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.data.json, "\n");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map