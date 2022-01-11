(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voice-voice-module"], {
    /***/
    "6InN":
    /*!**********************************************!*\
      !*** ./src/app/routes/voice/voice.module.ts ***!
      \**********************************************/

    /*! exports provided: VoiceModule */

    /***/
    function InN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceModule", function () {
        return VoiceModule;
      });
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-audio-player */
      "cDwd");
      /* harmony import */


      var _voice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./voice-routing.module */
      "CHcm");
      /* harmony import */


      var _voice_files_voice_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voice-files/voice-files.component */
      "WycK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_voice_files_voice_files_component__WEBPACK_IMPORTED_MODULE_3__["VoiceFilesComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var VoiceModule = function VoiceModule() {
        _classCallCheck(this, VoiceModule);
      };

      VoiceModule.ɵfac = function VoiceModule_Factory(t) {
        return new (t || VoiceModule)();
      };

      VoiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: VoiceModule
      });
      VoiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _voice_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoiceRoutingModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["NgxAudioPlayerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VoiceModule, {
          declarations: [_voice_files_voice_files_component__WEBPACK_IMPORTED_MODULE_3__["VoiceFilesComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _voice_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoiceRoutingModule"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_1__["NgxAudioPlayerModule"]]
        });
      })();
      /***/

    },

    /***/
    "CHcm":
    /*!******************************************************!*\
      !*** ./src/app/routes/voice/voice-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: VoiceRoutingModule */

    /***/
    function CHcm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceRoutingModule", function () {
        return VoiceRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _voice_files_voice_files_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./voice-files/voice-files.component */
      "WycK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'voice-files',
        component: _voice_files_voice_files_component__WEBPACK_IMPORTED_MODULE_2__["VoiceFilesComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsGuard"]],
        data: {
          permissions: {
            only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
            redirectTo: '/dashboard'
          }
        }
      }];

      var VoiceRoutingModule = function VoiceRoutingModule() {
        _classCallCheck(this, VoiceRoutingModule);
      };

      VoiceRoutingModule.ɵfac = function VoiceRoutingModule_Factory(t) {
        return new (t || VoiceRoutingModule)();
      };

      VoiceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: VoiceRoutingModule
      });
      VoiceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VoiceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "WycK":
    /*!*******************************************************************!*\
      !*** ./src/app/routes/voice/voice-files/voice-files.component.ts ***!
      \*******************************************************************/

    /*! exports provided: VoiceFilesComponent */

    /***/
    function WycK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceFilesComponent", function () {
        return VoiceFilesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var ngx_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-audio-player */
      "cDwd");

      var VoiceFilesComponent = /*#__PURE__*/function () {
        function VoiceFilesComponent() {
          _classCallCheck(this, VoiceFilesComponent);

          this.msaapDisplayTitle = true;
          this.msaapDisplayPlayList = true;
          this.msaapPageSizeOptions = [100, 200, 500];
          this.msaapDisplayVolumeControls = true;
          this.msaapDisplayRepeatControls = true;
          this.msaapDisplayArtist = true;
          this.msaapDisplayDuration = true;
          this.msaapDisablePositionSlider = false; // Material Style Advance Audio Player Playlist

          this.msaapPlaylist = [{
            title: 'Welcome to Tel Internet',
            link: 'http://103.8.43.14/onyx/assets/voicefiles/voicetechnetmax.wav',
            artist: 'Voicetech admin',
            duration: 12
          }, {
            title: 'Aero',
            link: 'http://103.8.43.14/onyx/assets/voicefiles/86.wav',
            artist: 'Voicetech admin',
            duration: 12
          }, {
            title: 'Almani2',
            link: 'http://103.8.43.14/onyx/assets/voicefiles/almani1.wav',
            artist: 'Voicetech admin',
            duration: 2
          }, {
            title: 'Almani',
            link: 'http://103.8.43.14/onyx/assets/voicefiles/almani.wav',
            artist: 'Voicetech admin',
            duration: 2
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
        }

        _createClass(VoiceFilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onEnded",
          value: function onEnded(e) {
            console.log(e);
          }
        }]);

        return VoiceFilesComponent;
      }();

      VoiceFilesComponent.ɵfac = function VoiceFilesComponent_Factory(t) {
        return new (t || VoiceFilesComponent)();
      };

      VoiceFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VoiceFilesComponent,
        selectors: [["app-voice-files"]],
        decls: 3,
        vars: 11,
        consts: [[1, "bg-blue-600"], [1, "m-16"], ["muted", "muted", 3, "playlist", "displayTitle", "autoPlay", "displayPlaylist", "pageSizeOptions", "displayVolumeControls", "displayRepeatControls", "disablePositionSlider", "displayArtist", "displayDuration", "expanded", "trackEnded"]],
        template: function VoiceFilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-audio-player", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("trackEnded", function VoiceFilesComponent_Template_ngx_audio_player_trackEnded_2_listener($event) {
              return ctx.onEnded($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlist", ctx.msaapPlaylist)("displayTitle", ctx.msaapDisplayTitle)("autoPlay", true)("displayPlaylist", ctx.msaapDisplayPlayList)("pageSizeOptions", ctx.msaapPageSizeOptions)("displayVolumeControls", ctx.msaapDisplayVolumeControls)("displayRepeatControls", ctx.msaapDisplayRepeatControls)("disablePositionSlider", ctx.msaapDisablePositionSlider)("displayArtist", ctx.msaapDisplayArtist)("displayDuration", ctx.msaapDisplayDuration)("expanded", true);
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], ngx_audio_player__WEBPACK_IMPORTED_MODULE_2__["AudioPlayerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2ljZS1maWxlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=voice-voice-module-es5.js.map