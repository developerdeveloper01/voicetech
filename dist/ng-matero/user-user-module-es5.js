(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "7O9o":
    /*!****************************************************!*\
      !*** ./src/app/routes/user/user-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: UserRoutingModule */

    /***/
    function O9o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
        return UserRoutingModule;
      });
      /* harmony import */


      var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-detail/user-detail.component */
      "CMg7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users/users.component */
      "XuCH");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['AddUser', 'ViewUser', 'EditUser', 'DeleteUser']
          }
        }
      }, {
        path: 'user-detail/:id',
        component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_0__["UserDetailComponent"],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }];

      var UserRoutingModule = function UserRoutingModule() {
        _classCallCheck(this, UserRoutingModule);
      };

      UserRoutingModule.??fac = function UserRoutingModule_Factory(t) {
        return new (t || UserRoutingModule)();
      };

      UserRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: UserRoutingModule
      });
      UserRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](UserRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "CMg7":
    /*!******************************************************************!*\
      !*** ./src/app/routes/user/user-detail/user-detail.component.ts ***!
      \******************************************************************/

    /*! exports provided: UserDetailComponent */

    /***/
    function CMg7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
        return UserDetailComponent;
      });
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../user-overview/user-overview.component */
      "Fx7O");

      var UserDetailComponent = /*#__PURE__*/function () {
        function UserDetailComponent(userService, route) {
          _classCallCheck(this, UserDetailComponent);

          this.userService = userService;
          this.route = route;
        }

        _createClass(UserDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.params['id'];
            console.log(this.id);
            this.getuserdetail(this.id);
          }
        }, {
          key: "getuserdetail",
          value: function getuserdetail(id) {
            var _this = this;

            this.userService.userdetail(id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this.userdetail = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return UserDetailComponent;
      }();

      UserDetailComponent.??fac = function UserDetailComponent_Factory(t) {
        return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      UserDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: UserDetailComponent,
        selectors: [["app-user-detail"]],
        decls: 18,
        vars: 7,
        consts: [["title", "User Profile", "hideBreadcrumb", "", 1, "p-t-32", "p-b-48", "m-b--24", "bg-gray-900"], ["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "fxFlex.gt-sm", "33.33", "fxFlex.gt-md", "25", 1, "matero-col"], [1, "text-center"], ["alt", "", "width", "200", 1, "m-b-8", "r-full", 3, "src"], [1, "m-t-0", "m-b-8", "f-w-400"], [1, "m-t-0", "m-b-8"], [1, "m-t-0", "text-grey-500"], ["mat-raised-button", "", "color", "primary", "routerLink", "/chat"], ["mat-raised-button", "", "color", "accent", 1, "m-l-8"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "fxFlex.gt-sm", "66.67", "fxFlex.gt-md", "75", 1, "matero-col"]],
        template: function UserDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Call Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "app-user-overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx.userdetail == null ? null : ctx.userdetail.userimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"]("", ctx.userdetail == null ? null : ctx.userdetail.firstname, " ", ctx.userdetail == null ? null : ctx.userdetail.lastname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"]("", ctx.userdetail == null ? null : ctx.userdetail.email, " | ", ctx.userdetail == null ? null : ctx.userdetail.mobile, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"]("", ctx.userdetail == null ? null : ctx.userdetail.organization_name, " | ", ctx.userdetail == null ? null : ctx.userdetail.companyName, "");
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_7__["UserOverviewComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ExZ1":
    /*!********************************************!*\
      !*** ./src/app/routes/user/user.module.ts ***!
      \********************************************/

    /*! exports provided: UserModule */

    /***/
    function ExZ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var ngx_audio_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-audio-player */
      "cDwd");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-routing.module */
      "7O9o");
      /* harmony import */


      var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users/users.component */
      "XuCH");
      /* harmony import */


      var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-detail/user-detail.component */
      "CMg7");
      /* harmony import */


      var _user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-overview/user-overview.component */
      "Fx7O");
      /* harmony import */


      var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-settings/user-settings.component */
      "cbNm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"], _user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_5__["UserOverviewComponent"], _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__["UserSettingsComponent"]];
      var COMPONENTS_DYNAMIC = [_users_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUserFormComponent"]];

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule.??fac = function UserModule_Factory(t) {
        return new (t || UserModule)();
      };

      UserModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({
        type: UserModule
      });
      UserModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_0__["NgxAudioPlayerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](UserModule, {
          declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"], _user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_5__["UserOverviewComponent"], _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_6__["UserSettingsComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_3__["AddUserFormComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_0__["NgxAudioPlayerModule"]]
        });
      })();
      /***/

    },

    /***/
    "Fx7O":
    /*!**********************************************************************!*\
      !*** ./src/app/routes/user/user-overview/user-overview.component.ts ***!
      \**********************************************************************/

    /*! exports provided: UserOverviewComponent */

    /***/
    function Fx7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserOverviewComponent", function () {
        return UserOverviewComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../user.service */
      "xdv0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var ngx_audio_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-audio-player */
      "cDwd");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function UserOverviewComponent_mat_error_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function UserOverviewComponent_mat_error_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function UserOverviewComponent_mat_error_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function UserOverviewComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function UserOverviewComponent_mat_error_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function UserOverviewComponent_mat_option_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", option_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", option_r8, " ");
        }
      }

      var UserOverviewComponent = /*#__PURE__*/function () {
        function UserOverviewComponent(fb, userService, route, snackBar, cdr) {
          _classCallCheck(this, UserOverviewComponent);

          this.fb = fb;
          this.userService = userService;
          this.route = route;
          this.snackBar = snackBar;
          this.cdr = cdr;
          this.panelOpenState = false;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.options = [];
          this.msaapDisplayTitle = true;
          this.msaapDisplayPlayList = true;
          this.msaapPageSizeOptions = [100, 200, 500];
          this.msaapDisplayVolumeControls = true;
          this.msaapDisplayRepeatControls = true;
          this.msaapDisplayArtist = true;
          this.msaapDisplayDuration = true;
          this.msaapDisablePositionSlider = true; // Material Style Advance Audio Player Playlist

          this.msaapPlaylist1 = [{
            title: 'Welcome to Tel Internet',
            link: 'http://103.8.43.14/onyx/assets/voicefiles/voicetechnetmax.wav',
            artist: 'Voicetech admin',
            duration: 12
          }, {
            title: 'Audio test',
            link: 'https://www.computerhope.com/jargon/m/example.mp3',
            artist: 'Voicetech admin',
            duration: 4
          }, {
            title: 'Dailed Number Does not Exist',
            link: 'http://103.8.43.14/onyx/assets/voicefiles/143.wav',
            artist: 'Voicetech admin',
            duration: 4
          }, {
            title: 'CDN Music',
            link: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
            artist: 'Voicetech admin',
            duration: 200
          }];
          this.msaapPlaylist = [];
          this.garray = [];
        }

        _createClass(UserOverviewComponent, [{
          key: "setStep",
          value: function setStep(index) {
            this.step = index;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }, {
          key: "prevStep",
          value: function prevStep() {
            this.step--;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
              return _this2._filter(value);
            }));
            this.getusercalldetails();
            this.id = this.route.snapshot.params['id'];
            console.log(this.id);
            this.getallnumbers();
            this.getuserdetail(this.id);
            this.edituserform = this.fb.group({
              firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              //password: ['', [Validators.required]],
              organization_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.allotnumber = this.fb.group({
              alloted_did: [''],
              lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              //password: ['', [Validators.required]],
              organization_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.getallrecordings();
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "getuserdetail",
          value: function getuserdetail(id) {
            var _this3 = this;

            this.userService.userdetail(id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this3.userdetail = response.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getusercalldetails",
          value: function getusercalldetails() {
            var _this4 = this;

            this.userService.getalldetailsofuser('2581').subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this4.callreports = response;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('firstname').hasError('required') ? 'validations.required' : form.get('lastname').hasError('required') ? 'validations.required' : form.get('email').hasError('required') ? 'validations.required' : '';
          }
        }, {
          key: "openedituser",
          value: function openedituser() {
            this.edituserform.setValue({
              firstname: this.userdetail.firstname ? this.userdetail.firstname : 'null',
              lastname: this.userdetail.lastname ? this.userdetail.lastname : 'null',
              email: this.userdetail.email ? this.userdetail.email : 'null',
              mobile: this.userdetail.mobile ? this.userdetail.mobile : 'null',
              // password: this.userdetail.password ? this.userdetail.password : 'null',
              organization_name: this.userdetail.organization_name ? this.userdetail.organization_name : 'null'
            });
            this.allotnumber.setValue({
              alloted_did: this.userdetail.alloted_did ? this.userdetail.alloted_did.did_no : 'null'
            });
            console.log(this.allotnumber.value);
          }
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this5 = this;

            console.log(this.edituserform.value);

            if (this.edituserform.valid) {
              console.log(this.edituserform.value);
              this.userService.edituser(this.id, this.edituserform.value).subscribe(function (response) {
                console.log(response);

                _this5.snackBar.open('User Edited Successfully!', '', {
                  duration: 2000
                });

                _this5.edituserform.reset();
              }, function (error) {
                console.log(error);
              });
            } else {
              this.getErrorMessage(this.edituserform);
            }
          }
        }, {
          key: "cancelformaccordian",
          value: function cancelformaccordian() {
            this.panelOpenState = false;
            console.log(this.panelOpenState); //this.edituserform.reset()
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.edituserform.get(field).valid && this.edituserform.get(field).touched;
          }
        }, {
          key: "onEnded",
          value: function onEnded(e) {
            console.log(e);
          }
        }, {
          key: "getallnumbers",
          value: function getallnumbers() {
            var _this6 = this;

            this.userService.getalldstnumbers().subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              var object = response.data;
              var newarray = [];

              for (var did_no in object) {
                if (Object.prototype.hasOwnProperty.call(object, did_no)) {
                  var element = object[did_no];
                  newarray.push(element.did_no);
                }
              }

              _this6.options = newarray;

              _this6.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "submitnumberform",
          value: function submitnumberform() {
            console.log(this.allotnumber.value);
          }
        }, {
          key: "getallrecordings",
          value: function getallrecordings() {
            var _this7 = this;

            this.userService.getrecordings().subscribe(function (response) {
              var date = '2021-12-08';
              console.log(response === null || response === void 0 ? void 0 : response.message);

              for (var i = 0; i < 2665; i++) {
                //console.log(response?.message["2021-12-08"][i]);
                _this7.garray.push(response === null || response === void 0 ? void 0 : response.message['2021-12-08'][i]);
              } // console.log(this.garray)


              var createobj = {};

              for (var _i = 0; _i < _this7.garray.length; _i++) {
                createobj.title = 'Recording';
                createobj.link = _this7.garray[_i];
                createobj.artist = 'Unknown';
                var element = _this7.garray[_i];

                _this7.msaapPlaylist.push(createobj);
              }

              console.log(_this7.msaapPlaylist);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return UserOverviewComponent;
      }();

      UserOverviewComponent.??fac = function UserOverviewComponent_Factory(t) {
        return new (t || UserOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]));
      };

      UserOverviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: UserOverviewComponent,
        selectors: [["app-user-overview"]],
        decls: 267,
        vars: 40,
        consts: [[1, "m--16"], ["label", "Basic"], [1, "m-16"], ["width", "120px"], ["href", "mailto:userdetail?.email"], ["href", "tel:+91userdetail?.mobile"], [1, "row"], [1, "col-lg-3", "text-center"], [1, "mat-elevation-z1"], [3, "expanded", "opened"], [1, "f-w-500"], [2, "padding", "20px", "border-radius", "4px"], [2, "font-size", "20px"], [1, "form-field-full", 3, "formGroup", "ngSubmit"], [1, "demo-full-width", "col-md-6"], ["type", "text", "matInput", "", "placeholder", "John", "formControlName", "firstname", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Deo", "formControlName", "lastname", "required", ""], [1, "col-lg-12", "w-full"], [1, "w-full"], ["type", "email", "matInput", "", "placeholder", "example@gmail.com", "formControlName", "email", "required", ""], [1, "demo-full-width"], ["type", "number", "matInput", "", "placeholder", "9999999999", "formControlName", "mobile", "required", ""], ["type", "text", "matInput", "", "placeholder", "Voicetech", "formControlName", "organization_name", "required", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["color", "accent", "type", "button", "mat-button", "", 1, "m-l-8", 3, "click"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", "formControlName", "alloted_did", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""], ["label", "Call logs"], ["muted", "muted", 3, "playlist", "displayTitle", "autoPlay", "displayPlaylist", "pageSizeOptions", "displayVolumeControls", "displayRepeatControls", "disablePositionSlider", "displayArtist", "displayDuration", "expanded", "trackEnded"], ["label", "Report"], [1, "col-md-4", "bg-grey-100", "text-center", "align-middle"], [1, "mat-h2"], [1, "mat-display-4"], [1, "col-md-4"], [1, "col-md-12"], ["label", "Bill"], ["width", "80px"], [3, "value"]],
        template: function UserOverviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-tab-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Basic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Mobile:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](31, "Organization:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](34, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38, "Total Calls:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](43, "Outgoing Calls:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](48, "Received Calls:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](53, "Falled Calls:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](56, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "mat-accordion", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](58, "mat-expansion-panel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("opened", function UserOverviewComponent_Template_mat_expansion_panel_opened_58_listener() {
              ctx.setStep(0);
              return ctx.openedituser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](60, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62, "Basic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](63, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "fieldset", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](65, "legend", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](66, "Edit Basic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function UserOverviewComponent_Template_form_ngSubmit_67_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](69, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](71, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](72, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](73, UserOverviewComponent_mat_error_73_Template, 3, 3, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](76, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](77, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](78, UserOverviewComponent_mat_error_78_Template, 3, 3, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](80, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](82, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](83, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](84, UserOverviewComponent_mat_error_84_Template, 3, 3, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](85, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](87, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](88, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](89, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](90, UserOverviewComponent_mat_error_90_Template, 3, 3, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](92, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](93, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](94, "Organization Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](95, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](96, UserOverviewComponent_mat_error_96_Template, 3, 3, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](97, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](98, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](99, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserOverviewComponent_Template_button_click_99_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](100, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](101, "mat-expansion-panel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("opened", function UserOverviewComponent_Template_mat_expansion_panel_opened_101_listener() {
              return ctx.setStep(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](102, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](103, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](104, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](105, "Numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](106, "fieldset", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](107, "legend", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](108, "Edit Numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](109, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function UserOverviewComponent_Template_form_ngSubmit_109_listener() {
              return ctx.submitnumberform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](110, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](111, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](112, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](113, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](114, "mat-autocomplete", null, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](116, UserOverviewComponent_mat_option_116_Template, 2, 2, "mat-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](117, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](118, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserOverviewComponent_Template_button_click_118_listener() {
              return ctx.prevStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](119, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](120, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserOverviewComponent_Template_button_click_120_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](121, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](122, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserOverviewComponent_Template_button_click_122_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](123, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](124, "mat-expansion-panel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("opened", function UserOverviewComponent_Template_mat_expansion_panel_opened_124_listener() {
              return ctx.setStep(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](125, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](126, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](127, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](128, "Other Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](129, "fieldset", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](130, "legend", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](131, "Edit Numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](132, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](133, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("focus", function UserOverviewComponent_Template_input_focus_133_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r9);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](135);

              return _r7.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](134, "mat-datepicker", null, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](136, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](137, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserOverviewComponent_Template_button_click_137_listener() {
              return ctx.prevStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](138, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](139, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserOverviewComponent_Template_button_click_139_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](140, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](141, "mat-tab", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](142, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](143, "ngx-audio-player", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("trackEnded", function UserOverviewComponent_Template_ngx_audio_player_trackEnded_143_listener($event) {
              return ctx.onEnded($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](144, "mat-tab", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](145, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](146, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](147, "Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](148, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](149, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](150, "Outgoing Calls Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](151, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](152, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](153, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](154, "Outgoing Calls");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](155, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](156);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](157, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](158, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](159, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](160, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](161, "Calls Connected");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](162, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](163);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](164, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](165, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](166, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](167, "Calls Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](168, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](169, "70");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](170, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](171, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](172, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](173, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](174, "Calls Missed");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](175, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](176);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](177, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](178, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](179, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](180, "Calls Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](181, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](182, "70");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](183, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](184, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](185, "Incoming Calls Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](186, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](187, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](188, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](189, "Incoming Calls");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](190, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](191);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](192, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](193, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](194, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](195, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](196, "Calls Connected");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](197, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](198, "11");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](199, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](200, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](201, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](202, "Calls Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](203, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](204, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](205, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](206, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](207, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](208, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](209, "Calls Missed");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](210, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](211, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](212, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](213, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](214, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](215, "Calls Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](216, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](217, "70");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](218, "mat-tab", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](219, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](220, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](221, "Payment Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](222, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](223, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](224, "Calling");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](225, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](226, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](227, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](228, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](229, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](230, "Incoming Calls:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](231, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](232, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](233, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](234, "420sec");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](235, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](236, "Rs 10.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](238, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](239, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](240, "Outgoing Calls:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](241, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](242, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](243, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](244, "420sec");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](245, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](246, "Rs 10.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](248, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](249, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](250, "IVR Service:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](251, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](252, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](253, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](254, "420sec");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](255, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](256, "Rs 10.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](257, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](258, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](259, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](260, "SIP Service:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](261, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](262, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](263, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](264, "420sec");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](265, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](266, "Rs 10.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](115);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](135);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate2"]("", ctx.userdetail == null ? null : ctx.userdetail.firstname, " ", ctx.userdetail == null ? null : ctx.userdetail.lastname, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", ctx.userdetail == null ? null : ctx.userdetail.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", ctx.userdetail == null ? null : ctx.userdetail.mobile, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.userdetail == null ? null : ctx.userdetail.organization_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.total);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.outgoing);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.incoming);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.missedcall);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("expanded", ctx.step === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.edituserform);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.edituserform.get("firstname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.edituserform.get("lastname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.edituserform.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.edituserform.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.edituserform.get("organization_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.edituserform.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("expanded", ctx.step === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.allotnumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matAutocomplete", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](117, 38, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("expanded", ctx.step === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matDatepicker", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("playlist", ctx.msaapPlaylist)("displayTitle", ctx.msaapDisplayTitle)("autoPlay", false)("displayPlaylist", ctx.msaapDisplayPlayList)("pageSizeOptions", ctx.msaapPageSizeOptions)("displayVolumeControls", ctx.msaapDisplayVolumeControls)("displayRepeatControls", ctx.msaapDisplayRepeatControls)("disablePositionSlider", ctx.msaapDisablePositionSlider)("displayArtist", ctx.msaapDisplayArtist)("displayDuration", ctx.msaapDisplayDuration)("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.outgoing);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"]((ctx.callreports == null ? null : ctx.callreports.outgoing) - (ctx.callreports == null ? null : ctx.callreports.missedcall));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.missedcall);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx.callreports == null ? null : ctx.callreports.incoming);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelActionRow"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_15__["AudioPlayerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "XuCH":
    /*!******************************************************!*\
      !*** ./src/app/routes/user/users/users.component.ts ***!
      \******************************************************/

    /*! exports provided: UsersComponent, AddUserFormComponent */

    /***/
    function XuCH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserFormComponent", function () {
        return AddUserFormComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/user.service */
      "xdv0");
      /* harmony import */


      var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-matero/extensions/dialog */
      "r0g6");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-matero/extensions/data-grid */
      "hGDI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function UsersComponent_ng_template_4_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function UsersComponent_ng_template_4_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);

            return ctx_r3.openAddDstNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Add User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }
      }

      function UsersComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](0, UsersComponent_ng_template_4_button_0_Template, 4, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("ngModelChange", function UsersComponent_ng_template_4_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

            return ctx_r5.filterSearch = $event;
          })("ngModelChange", function UsersComponent_ng_template_4_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

            return ctx_r7.searchData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngxPermissionsOnly", "AddUser");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngModel", ctx_r1.filterSearch);
        }
      }

      var _c0 = function _c0() {
        return [50, 100, 200, 500];
      };

      function AddUserFormComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddUserFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddUserFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddUserFormComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddUserFormComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      function AddUserFormComponent_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 1, "validations.required"), " ");
        }
      }

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(dialog, dialogx, userService, cdr, router, rolesSrv, permissonsSrv) {
          _classCallCheck(this, UsersComponent);

          this.dialog = dialog;
          this.dialogx = dialogx;
          this.userService = userService;
          this.cdr = cdr;
          this.router = router;
          this.rolesSrv = rolesSrv;
          this.permissonsSrv = permissonsSrv;
          this.columns = [];
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
          this.falseValue = 'false';
          this.trueValue = 'true'; //Permissions

          this.seteditpermission = true;
          this.setviewpermission = true;
          this.setdeletepermission = true;
        }

        _createClass(UsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.getallusers(); //console.log(this.rolesSrv.getRoles());
            // console.log(this.permissonsSrv.getPermissions().EditUser);

            if (this.permissonsSrv.getPermissions().hasOwnProperty('ViewUser')) {
              console.log(this.permissonsSrv.getPermissions().hasOwnProperty('ViewUser'));
              this.setviewpermission = false;
            }

            if (this.permissonsSrv.getPermissions().hasOwnProperty('EditUser')) {
              console.log(this.permissonsSrv.getPermissions().hasOwnProperty('EditUser'));
              this.seteditpermission = false;
            }

            if (this.permissonsSrv.getPermissions().hasOwnProperty('DeleteUser')) {
              console.log(this.permissonsSrv.getPermissions().hasOwnProperty('DeleteUser'));
              this.setdeletepermission = false;
            }

            this.columns = [{
              header: 'Avatar',
              field: 'userimg',
              type: 'image'
            }, {
              header: 'Name',
              sortable: true,
              field: 'firstname',
              formatter: function formatter(data) {
                return "<button routerLink=\"/".concat(data._id, "\"> ").concat(data.firstname, " ").concat(data.lastname, "</button>");
              },
              width: '150px'
            }, {
              header: 'Mobile',
              sortable: true,
              field: 'mobile'
            }, {
              header: 'Email',
              sortable: true,
              field: 'email'
            }, {
              header: 'Organization',
              sortable: true,
              field: 'organization_name'
            }, {
              header: 'DID Number',
              sortable: true,
              field: 'alloted_did'
            }, {
              header: 'Created Date',
              sortable: true,
              field: 'createdAt'
            }, {
              header: 'Approved',
              field: 'varifystatus',
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
                  return _this8.router.navigate(['user/user-detail', record._id]);
                },
                disabled: this.setviewpermission
              }, {
                type: 'icon',
                color: 'accent',
                icon: 'edit',
                tooltip: 'edit',
                click: function click(record) {
                  return _this8.edit(record);
                },
                disabled: this.seteditpermission
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
                  return _this8["delete"](record);
                },
                disabled: this.setdeletepermission
              }]
            }];
          } // rowClicked(data){
          //   //console.log(data.rowData._id);
          //   this.router.navigate(['/user/user-detail', data.rowData._id])
          // }

        }, {
          key: "changeSort",
          value: function changeSort(e) {
            console.log(e);
          }
        }, {
          key: "changeSelect",
          value: function changeSelect(e) {
            console.log(e);
          }
        }, {
          key: "getallusers",
          value: function getallusers() {
            var _this9 = this;

            this.userService.allusers().subscribe(function (response) {
              console.log('%cusers.component.ts line:54 response', 'color: #26bfa5;', response);
              _this9.list = response.data;
              _this9.total = response.data.length;
              _this9.isLoading = false;

              _this9.cdr.detectChanges();
            }, function (error) {
              console.log('%cerror users.component.ts line:62 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "edit",
          value: function edit(data) {
            var _this10 = this;

            var adddailogRef = this.dialog.open(AddUserFormComponent, {
              width: '500px',
              data: {
                record: data
              }
            });
            adddailogRef.afterClosed().subscribe(function () {
              console.log('The edit dailog closed');

              _this10.getallusers();
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this11 = this;

            this.userService.deleteuser(data._id).subscribe(function (response) {
              console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
              _this11.isLoading = false;

              _this11.getallusers();

              _this11.cdr.detectChanges();

              _this11.dialogx.alert("You have deleted ".concat(data.firstname, " ").concat(data.lastname, "!"));
            }, function (error) {
              console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
            });
          }
        }, {
          key: "openAddDstNumber",
          value: function openAddDstNumber() {
            var _this12 = this;

            var adddailogRef = this.dialog.open(AddUserFormComponent, {
              width: '500px'
            });
            adddailogRef.afterClosed().subscribe(function () {
              _this12.getallusers();

              _this12.getallusers();

              _this12.getallusers();
            });
          }
        }, {
          key: "searchData",
          value: function searchData(searchValue) {
            if (searchValue) {
              this.filteredData = this.list.filter(function (item) {
                return item.firstname.toLowerCase().includes(searchValue.toLowerCase()) || item.lastname.toLowerCase().includes(searchValue.toLowerCase()) || item.email.toLowerCase().includes(searchValue.toLowerCase()) || item.organization_name.toLowerCase().includes(searchValue.toLowerCase());
              });
            } else {
              this.filteredData = null;
              this.getallusers();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoading = true;
          }
        }, {
          key: "pagechange",
          value: function pagechange(e) {
            console.log(e);
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.??fac = function UsersComponent_Factory(t) {
        return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_4__["MtxDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]));
      };

      UsersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({
        type: UsersComponent,
        selectors: [["app-users"]],
        decls: 6,
        vars: 19,
        consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "mat-elevation-z8", "r-4", 3, "data", "columns", "loading", "columnResizable", "hideRowSelectionCheckbox", "rowHover", "rowStriped", "showToolbar", "toolbarTitle", "toolbarTemplate", "columnHideable", "columnMovable", "expandable", "pageOnFront", "showPaginator", "pageSizeOptions", "pageIndex", "pageSize", "page", "sortChange", "selectionChange"], ["toolbarTpl", ""], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngxPermissionsOnly"], ["placeholder", "Start typing", "type", "text", "autocomplete", "off", 1, "form-control", 2, "padding", "5px", "margin", "0px 2px", "border", "1px solid #d7d7d7", "line-height", "24px", "border-radius", "4px", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", 3, "click"]],
        template: function UsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "mtx-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("page", function UsersComponent_Template_mtx_grid_page_3_listener($event) {
              return ctx.pagechange($event);
            })("sortChange", function UsersComponent_Template_mtx_grid_sortChange_3_listener($event) {
              return ctx.changeSort($event);
            })("selectionChange", function UsersComponent_Template_mtx_grid_selectionChange_3_listener($event) {
              return ctx.changeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, UsersComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????reference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx.filteredData || ctx.list)("columns", ctx.columns)("loading", ctx.isLoading)("columnResizable", ctx.columnResizable)("hideRowSelectionCheckbox", ctx.hideRowSelectionCheckbox)("rowHover", ctx.rowHover)("rowStriped", ctx.rowStriped)("showToolbar", ctx.showToolbar)("toolbarTitle", "Users")("toolbarTemplate", _r0)("columnHideable", ctx.columnHideable)("columnMovable", ctx.columnMovable)("expandable", ctx.expandable)("pageOnFront", ctx.showPaginator)("showPaginator", ctx.showPaginator)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](18, _c0))("pageIndex", 0)("pageSize", 50);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });

      var AddUserFormComponent = /*#__PURE__*/function () {
        function AddUserFormComponent(fb, userService, snackBar, dialogRef, data) {
          _classCallCheck(this, AddUserFormComponent);

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;

          this.fb = fb;
          this.userService = userService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.editmode = false;
          this.falseValue = 'false';
          this.trueValue = 'true';
          this.adduserform = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            organization_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            varifystatus: [false]
          });

          if (data) {
            console.log(data);
            this.editmode = true;
            this.id = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b._id;
            this.adduserform.setValue({
              firstname: ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.firstname) ? (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.firstname : 'null',
              lastname: ((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.record) === null || _h === void 0 ? void 0 : _h.lastname) ? (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.record) === null || _k === void 0 ? void 0 : _k.lastname : 'null',
              email: ((_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.record) === null || _m === void 0 ? void 0 : _m.email) ? (_p = (_o = this.data) === null || _o === void 0 ? void 0 : _o.record) === null || _p === void 0 ? void 0 : _p.email : 'null',
              mobile: ((_r = (_q = this.data) === null || _q === void 0 ? void 0 : _q.record) === null || _r === void 0 ? void 0 : _r.mobile) ? (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.record) === null || _t === void 0 ? void 0 : _t.mobile : 'null',
              password: ((_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.record) === null || _v === void 0 ? void 0 : _v.password) ? (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.record) === null || _x === void 0 ? void 0 : _x.password : 'null',
              organization_name: ((_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.record) === null || _z === void 0 ? void 0 : _z.organization_name) ? (_1 = (_0 = this.data) === null || _0 === void 0 ? void 0 : _0.record) === null || _1 === void 0 ? void 0 : _1.organization_name : 'null',
              varifystatus: ((_3 = (_2 = this.data) === null || _2 === void 0 ? void 0 : _2.record) === null || _3 === void 0 ? void 0 : _3.varifystatus) ? (_5 = (_4 = this.data) === null || _4 === void 0 ? void 0 : _4.record) === null || _5 === void 0 ? void 0 : _5.varifystatus : false
            });
          }
        }

        _createClass(AddUserFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('firstname').hasError('required') ? 'validations.required' : form.get('lastname').hasError('required') ? 'validations.required' : form.get('email').hasError('required') ? 'validations.required' : '';
          }
        }, {
          key: "checkboxChange",
          value: function checkboxChange(checkbox, checked) {
            checkbox.value = checked ? this.trueValue : this.falseValue;
            console.log(checkbox.value);
          }
        }, {
          key: "isFieldValid",
          value: function isFieldValid(field) {
            return !this.adduserform.get(field).valid && this.adduserform.get(field).touched;
          }
        }, {
          key: "submituserform",
          value: function submituserform() {
            var _this13 = this;

            if (this.editmode) {
              console.log(this.adduserform.value);
              this.userService.edituser(this.id, this.adduserform.value).subscribe(function (response) {
                console.log(response);

                _this13.snackBar.open('User Edited Successfully!', '', {
                  duration: 2000
                });

                _this13.adduserform.reset();
              }, function (error) {
                console.log(error);
              });
            } else {
              if (this.adduserform.valid) {
                console.log(this.adduserform.value);
                this.userService.usersignup(this.adduserform.value).subscribe(function (response) {
                  console.log(response);

                  _this13.snackBar.open('User Added Successfully!', '', {
                    duration: 2000
                  });

                  _this13.adduserform.reset();
                }, function (error) {
                  console.log(error);
                });
              } else {
                this.getErrorMessage(this.adduserform);
              }
            }
          }
        }]);

        return AddUserFormComponent;
      }();

      AddUserFormComponent.??fac = function AddUserFormComponent_Factory(t) {
        return new (t || AddUserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]));
      };

      AddUserFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({
        type: AddUserFormComponent,
        selectors: [["add-user-form"]],
        decls: 47,
        vars: 10,
        consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], [1, "demo-full-width"], ["type", "text", "matInput", "", "placeholder", "John", "formControlName", "firstname", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Deo", "formControlName", "lastname", "required", ""], ["type", "email", "matInput", "", "placeholder", "example@gmail.com", "formControlName", "email", "required", ""], ["type", "number", "matInput", "", "placeholder", "9999999999", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["type", "password", "matInput", "", "formControlName", "password", "required", ""], ["type", "text", "matInput", "", "placeholder", "Voicetech", "formControlName", "organization_name", "required", ""], ["formControlName", "varifystatus", 1, "st-chk", 3, "value", "change"], ["mat-raised-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function AddUserFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("ngSubmit", function AddUserFormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submituserform();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, AddUserFormComponent_mat_error_10_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, AddUserFormComponent_mat_error_16_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](21, AddUserFormComponent_mat_error_21_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](24, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](27, "smartphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](28, AddUserFormComponent_mat_error_28_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](32, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](33, AddUserFormComponent_mat_error_33_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](36, "Organization Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](37, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](38, AddUserFormComponent_mat_error_38_Template, 3, 3, "mat-error", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](40, "mat-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function AddUserFormComponent_Template_mat_checkbox_change_40_listener($event) {
              return ctx.checkboxChange($event.source, $event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](41, "Approve ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](42, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](43, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](44, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](45, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](46, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx.editmode ? "Edit User" : "Add User");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", ctx.adduserform);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.adduserform.get("firstname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.adduserform.get("lastname").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.adduserform.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.adduserform.get("mobile").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.adduserform.get("password").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.adduserform.get("organization_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx.falseValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", ctx.adduserform.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
        styles: [".demo-full-width[_ngcontent-%COMP%] {\n        width: 100%;\n      }"]
      });
      /***/
    },

    /***/
    "cbNm":
    /*!**********************************************************************!*\
      !*** ./src/app/routes/user/user-settings/user-settings.component.ts ***!
      \**********************************************************************/

    /*! exports provided: UserSettingsComponent */

    /***/
    function cbNm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function () {
        return UserSettingsComponent;
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

      function UserSettingsComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter username ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_16_Template(rf, ctx) {
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

      function UserSettingsComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please select gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter city");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter tele");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter website");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function UserSettingsComponent_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter website");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var UserSettingsComponent = /*#__PURE__*/function () {
        function UserSettingsComponent(fb) {
          _classCallCheck(this, UserSettingsComponent);

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

        _createClass(UserSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }]);

        return UserSettingsComponent;
      }();

      UserSettingsComponent.??fac = function UserSettingsComponent_Factory(t) {
        return new (t || UserSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      UserSettingsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: UserSettingsComponent,
        selectors: [["app-user-settings"]],
        decls: 79,
        vars: 13,
        consts: [[1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-md", "100"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "email", "required", ""], ["formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "city", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "address", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "company", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "tele", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "website", "required", ""], ["matInput", "", "placeholder", "Choose a date", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker2", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "primary", 1, "m-t-8"]],
        template: function UserSettingsComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, UserSettingsComponent_mat_error_10_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, UserSettingsComponent_mat_error_16_Template, 2, 1, "mat-error", 4);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, UserSettingsComponent_mat_error_28_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, UserSettingsComponent_mat_error_34_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, UserSettingsComponent_mat_error_40_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, UserSettingsComponent_mat_error_46_Template, 2, 0, "mat-error", 4);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](54, UserSettingsComponent_mat_error_54_Template, 2, 0, "mat-error", 4);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, UserSettingsComponent_mat_error_62_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](68, UserSettingsComponent_mat_error_68_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "mat-datepicker-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "mat-datepicker", null, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](75, UserSettingsComponent_mat_error_75_Template, 2, 0, "mat-error", 4);

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map