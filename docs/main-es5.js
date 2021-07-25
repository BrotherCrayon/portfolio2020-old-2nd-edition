(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule, routingComponents */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
        return routingComponents;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/about/about.component */
      "./src/app/components/about/about.component.ts");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "./src/app/components/contact/contact.component.ts");
      /* harmony import */


      var _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/proj/diss/diss.component */
      "./src/app/components/proj/diss/diss.component.ts");
      /* harmony import */


      var _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/proj/listify/listify.component */
      "./src/app/components/proj/listify/listify.component.ts");
      /* harmony import */


      var _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/proj/serious-games/serious-games.component */
      "./src/app/components/proj/serious-games/serious-games.component.ts");
      /* harmony import */


      var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/not-found/not-found.component */
      "./src/app/components/not-found/not-found.component.ts");
      /* harmony import */


      var _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/cards-view/cards-view.component */
      "./src/app/components/cards-view/cards-view.component.ts");
      /* harmony import */


      var _components_proj_virtual_reality_virtual_reality_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/proj/virtual-reality/virtual-reality.component */
      "./src/app/components/proj/virtual-reality/virtual-reality.component.ts");

      var routes = [// { path: '', outlet: 'home', component: CarouselComponent },
      {
        path: '',
        component: _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_8__["CardsViewComponent"]
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }, {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
      }, // projects - i want these nested so i can make another menu for them
      {
        path: 'diss',
        component: _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_4__["DissComponent"]
      }, {
        path: 'listify',
        component: _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_5__["ListifyComponent"]
      }, {
        path: 'serious-games',
        component: _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_6__["SeriousGamesComponent"]
      }, {
        path: 'virtual-reality',
        component: _components_proj_virtual_reality_virtual_reality_component__WEBPACK_IMPORTED_MODULE_9__["VirtualRealityComponent"]
      }, {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();

      var routingComponents = [_components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_4__["DissComponent"], _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_5__["ListifyComponent"], _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_6__["SeriousGamesComponent"]];
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/layout/navigation/navigation.component */
      "./src/app/components/layout/navigation/navigation.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/layout/footer/footer.component */
      "./src/app/components/layout/footer/footer.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'jake fellows';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [["id", "body-container"], ["id", "footer-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/layout/footer/footer.component */
      "./src/app/components/layout/footer/footer.component.ts");
      /* harmony import */


      var _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/cards-view/cards-view.component */
      "./src/app/components/cards-view/cards-view.component.ts");
      /* harmony import */


      var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/carousel/carousel.component */
      "./src/app/components/carousel/carousel.component.ts");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/about/about.component */
      "./src/app/components/about/about.component.ts");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "./src/app/components/contact/contact.component.ts");
      /* harmony import */


      var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/not-found/not-found.component */
      "./src/app/components/not-found/not-found.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/layout/navigation/navigation.component */
      "./src/app/components/layout/navigation/navigation.component.ts");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./theme */
      "./src/app/theme/index.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
      /* harmony import */


      var _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/proj/diss/diss.component */
      "./src/app/components/proj/diss/diss.component.ts");
      /* harmony import */


      var _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/proj/listify/listify.component */
      "./src/app/components/proj/listify/listify.component.ts");
      /* harmony import */


      var _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/proj/serious-games/serious-games.component */
      "./src/app/components/proj/serious-games/serious-games.component.ts");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./theme/theme.module */
      "./src/app/theme/theme.module.ts"); // components
      // imported modules (premade stuff)


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"], _theme__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"].forRoot({
          themes: [_theme__WEBPACK_IMPORTED_MODULE_24__["lightTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["darkTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["greenTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["redTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["blueTheme"]],
          active: 'light'
        }), _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_28__["AngularFirestoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_6__["CardsViewComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_29__["DissComponent"], _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_30__["ListifyComponent"], _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_31__["SeriousGamesComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"], _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_32__["ThemeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_28__["AngularFirestoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_6__["CardsViewComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"], _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"], _theme__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"].forRoot({
              themes: [_theme__WEBPACK_IMPORTED_MODULE_24__["lightTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["darkTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["greenTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["redTheme"], _theme__WEBPACK_IMPORTED_MODULE_24__["blueTheme"]],
              active: 'light'
            }), _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_28__["AngularFirestoreModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/about/about.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../theme/theme.directive */
      "./src/app/theme/theme.directive.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 23,
        vars: 0,
        consts: [["theme", "", 1, "container"], [1, "card", "card-intro"], [1, "card-text"], [1, "card", "card-body"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Jake Fellows ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Frontend Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Some filler text here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " My dog ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " He's called Bane ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "This is the primary content of the panel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__["ThemeDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: horizontal;\r\n  -moz-box-direction: normal;\r\n       flex-direction: row;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  -moz-box-flex: 1;\r\n       flex: auto;\r\n  width: 250px;\r\n  height: 300px;\r\n  border-radius: 4px;\r\n  margin: 24px 4px 24px 16px;\r\n  background-color: var(--surface);\r\n  color: var(--on-surface);\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: 50px;\r\n  background-color: var(--background);\r\n  margin: 4px;\r\n}\r\n\r\n.card-img[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 24px 16px 24px 16px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-orient: vertical;\r\n    -moz-box-direction: normal;\r\n         flex-direction: column;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: 120px;\r\n    margin: 16px 32px 0 32px;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLDBCQUFtQjtPQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBVTtPQUFWLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGlCQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFzQjtJQUF0QiwwQkFBc0I7U0FBdEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZmxleDogYXV0bztcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDRweCAyNHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbjogMjRweCAxNnB4IDI0cHggMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDMycHggMCAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/cards-view/cards-view.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/cards-view/cards-view.component.ts ***!
      \***************************************************************/

    /*! exports provided: CardsViewComponent */

    /***/
    function srcAppComponentsCardsViewCardsViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsViewComponent", function () {
        return CardsViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/projects/projects.service */
      "./src/app/projects/projects.service.ts");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../carousel/carousel.component */
      "./src/app/components/carousel/carousel.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../theme/theme.directive */
      "./src/app/theme/theme.directive.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function CardsViewComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, project_r2.link));
        }
      }

      function CardsViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsViewComponent_div_1_div_1_Template, 10, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
        }
      }

      var CardsViewComponent = /*#__PURE__*/function () {
        function CardsViewComponent(projectService) {
          _classCallCheck(this, CardsViewComponent);

          this.projectService = projectService;
          this.projects = [];
        }

        _createClass(CardsViewComponent, [{
          key: "retrieveProjects",
          value: function retrieveProjects() {
            var _this = this;

            this.projectService.getProjectList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (projects) {
              _this.projects = projects;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.retrieveProjects();
          }
        }]);

        return CardsViewComponent;
      }();

      CardsViewComponent.ɵfac = function CardsViewComponent_Factory(t) {
        return new (t || CardsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]));
      };

      CardsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardsViewComponent,
        selectors: [["app-cards-view"]],
        decls: 2,
        vars: 1,
        consts: [["theme", "", "class", "container", 4, "ngIf"], ["theme", "", 1, "container"], ["class", "layout", 4, "ngFor", "ngForOf"], [1, "layout"], [1, "card"], ["mat-card-image", "", 1, "card-img", 3, "src"], [1, "overlay"], ["id", "test-TOREMOVE", 1, "title"], [1, "text"], ["mat-raised-button", "", 1, "view-project", 3, "routerLink"]],
        template: function CardsViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsViewComponent_div_1_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length);
          }
        },
        directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _theme_theme_directive__WEBPACK_IMPORTED_MODULE_5__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-flex: 2;\r\n       flex-grow: 2;\r\n  flex-wrap: wrap;\r\n  -moz-box-pack: space-evenly;\r\n       justify-content: space-evenly;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 31vw;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n  padding: 0;\r\n  background-color: var(--background);\r\n  \r\n  transition: ease .4s;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  -webkit-transform: scale(1.02);\r\n          transform: scale(1.02);\r\n}\r\n\r\n.card-img[_ngcontent-%COMP%] {\r\n  width: inherit;\r\n  height: inherit;\r\n  margin: 0 !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n  background-color: var(--secondary);\r\n  color: var(--on-secondary);\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 3;\r\n  height: inherit;\r\n  width: inherit;\r\n  overflow: hidden;\r\n  bottom: 100%;\r\n  height: 0;\r\n  \r\n  transition: ease .5s;\r\n  background-color: var(--card-overlay);\r\n  border-radius: 4px;\r\n  \r\n  \r\n}\r\n\r\n.layout[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  height: 100%;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 16px;\r\n  left: 0;\r\n  margin: 8px;\r\n  text-align: left;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 32px;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 8px 8px 4px 8px;\r\n  text-align: left;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 18px;\r\n  left: 0;\r\n  margin: 4px 8px;\r\n}\r\n\r\n.view-project[_ngcontent-%COMP%] {\r\n  color: var(--on-secondary);\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 40px;\r\n  margin: 8px 8px;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--primary);\r\n  color: var(--on-primary);\r\n}\r\n\r\n@media (max-width:996px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 47vw;\r\n    transition: none;\r\n    min-height: 100px;\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n@media (max-width:700px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 85vw;\r\n    margin: 16px 4px;\r\n    transition: none;\r\n    min-height: 100px;\r\n    overflow: hidden;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy12aWV3L2NhcmRzLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBWTtPQUFaLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTZCO09BQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG1DQUFtQztFQUNuQzs7OENBRTRDO0VBQzVDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsT0FBTztFQUNQLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy12aWV3L2NhcmRzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IDMxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCB2YXIoLS1zaGFkb3cpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4IHZhcigtLXNoYWRvdyk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4IHZhcigtLXNoYWRvdyk7ICovXHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuNHM7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tb24tc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4vKiBjYXJkIG1vdXNlb3ZlciAqL1xyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICAvKiBvcGFjaXR5OiAwOyAqL1xyXG4gIHRyYW5zaXRpb246IGVhc2UgLjVzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtb3ZlcmxheSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxufVxyXG5cclxuLmxheW91dDpob3ZlciAub3ZlcmxheSB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiA4cHggOHB4IDRweCA4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tb24tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiA0cHggOHB4O1xyXG59XHJcblxyXG4udmlldy1wcm9qZWN0IHtcclxuICBjb2xvcjogdmFyKC0tb24tc2Vjb25kYXJ5KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDhweCA4cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTZweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA0N3Z3O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBtYXJnaW46IDE2cHggNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cards-view',
            templateUrl: './cards-view.component.html',
            styleUrls: ['./cards-view.component.css']
          }]
        }], function () {
          return [{
            type: src_app_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/carousel/carousel.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/carousel/carousel.component.ts ***!
      \***********************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function srcAppComponentsCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../theme/theme.directive */
      "./src/app/theme/theme.directive.ts");

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent() {
          _classCallCheck(this, CarouselComponent);
        }

        _createClass(CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)();
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["app-carousel"]],
        decls: 8,
        vars: 0,
        consts: [["theme", "", 1, "display-window"], [1, "title"], [1, "bio"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hello. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Frontend developer intro. Themeing is placeholders for functioanlity testing. Big changes incoming.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Work in Progress! - uploaded for feedback on layout only.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__["ThemeDirective"]],
        styles: [".display-window[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  \r\n  background-color: var(--background);\r\n  background: linear-gradient(18deg, var(--carousel) 0%, var(--primary) 100%);\r\n  color: var(--on-primary);\r\n  text-align: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  margin: auto;\r\n  text-shadow: 0px 2px 2px var(--shadow);\r\n  font-size: 44pt;\r\n  padding-top: 110px;\r\n  color: var(--on-primary);\r\n}\r\n\r\n.bio[_ngcontent-%COMP%] {\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  margin: auto;\r\n  text-shadow: 0px 0px 1px var(--shadow);\r\n  font-size: 18pt;\r\n  font-weight: 300;\r\n  padding-top: 40px;\r\n  color: var(--on-primary);\r\n}\r\n\r\n#caro-icon[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n  text-shadow: 0px 0px 1px var(--shadow);\r\n  font-size: 38pt;\r\n  font-weight: 300;\r\n  padding-top: 4px;\r\n  color: var(--on-primary);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .display-window[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n  }\r\n\r\n  .bio[_ngcontent-%COMP%] {\r\n    line-height: normal;\r\n    margin: 0 4px 0 4px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLDJFQUEyRTtFQUMzRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFzQjtFQUF0QiwwQkFBc0I7T0FBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBc0I7RUFBdEIsMEJBQXNCO09BQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS13aW5kb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMThkZWcsIHZhcigtLWNhcm91c2VsKSAwJSwgdmFyKC0tcHJpbWFyeSkgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LXNoYWRvdzogMHB4IDJweCAycHggdmFyKC0tc2hhZG93KTtcclxuICBmb250LXNpemU6IDQ0cHQ7XHJcbiAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggdmFyKC0tc2hhZG93KTtcclxuICBmb250LXNpemU6IDE4cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBjb2xvcjogdmFyKC0tb24tcHJpbWFyeSk7XHJcbn1cclxuXHJcbiNjYXJvLWljb24ge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggdmFyKC0tc2hhZG93KTtcclxuICBmb250LXNpemU6IDM4cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmRpc3BsYXktd2luZG93IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmJpbyB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwIDRweCAwIDRweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/contact/contact.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/contact/contact.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 17,
        vars: 0,
        consts: [[1, "container"], [1, "card"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Coming Soon!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-orient: vertical;\r\n    -moz-box-direction: normal;\r\n         flex-direction: column;\r\n    border-radius: 4px;\r\n    margin: 24px 24px 24px 24px;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: #474647;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0lBQ0ksaUJBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXNCO0lBQXRCLDBCQUFzQjtTQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixzQkFBbUI7U0FBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogIzQ3NDY0NztcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/footer/footer.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/layout/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppComponentsLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../theme/theme.directive */
      "./src/app/theme/theme.directive.ts");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 3,
        vars: 0,
        consts: [["theme", "", 1, "footer-container"], ["id", "tempfooter"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Jake Fellows 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__["ThemeDirective"]],
        styles: [".footer-container[_ngcontent-%COMP%] {\r\n  margin-top: 32px;\r\n  position: relative !important;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 48px;\r\n  background-color: var(--primary);\r\n  color: var(--on-primary);\r\n  border-top: solid 1px var(--shadow);\r\n}\r\n\r\n#tempfooter[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tc2hhZG93KTtcclxufVxyXG5cclxuI3RlbXBmb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/navigation/navigation.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/layout/navigation/navigation.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcAppComponentsLayoutNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var src_app_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/theme */
      "./src/app/theme/index.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../theme/theme.directive */
      "./src/app/theme/theme.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

      var _c0 = ["menu"];

      function NavigationComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dissertation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Listify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3D Modelling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Virtual Reality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@buttonAnimation", undefined);
        }
      }

      function NavigationComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dissertation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Listify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Virtual Reality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Serious Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.toggleTheme("light");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.toggleTheme("dark");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.toggleTheme("green");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.toggleTheme("blue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.toggleTheme("red");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
        }
      }

      function NavigationComponent_button_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_38_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          hidden: a0
        };
      };

      var _c2 = ["*"];

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(breakpointObserver, themeService) {
          _classCallCheck(this, NavigationComponent);

          this.breakpointObserver = breakpointObserver;
          this.themeService = themeService;
          this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.matches;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])()); // tslint:disable-next-line: no-inferrable-types

          this.navOpen = false;
        }

        _createClass(NavigationComponent, [{
          key: "openProjectsMenu",
          value: function openProjectsMenu() {
            this.mobileViewProjects = !this.mobileViewProjects;
          }
        }, {
          key: "toggleTheme",
          value: function toggleTheme(theme) {
            this.themeService.setTheme(theme);
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        viewQuery: function NavigationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
          }
        },
        ngContentSelectors: _c2,
        decls: 41,
        vars: 21,
        consts: [["theme", "", 1, "sidenav-container"], ["fixedInViewport", "false", "position", "end", 1, "sidenav", 3, "ngClass", "mode", "opened"], ["drawer", ""], [1, "spacer"], [3, "click"], [1, "theming"], ["id", "light", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "dark", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "green", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "blue", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "red", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["mat-list-item", "", "routerLink", "/", 1, "sidenav-button", 3, "click"], ["mat-list-item", "", "routerLink", "/about", 1, "sidenav-button", 3, "click"], ["mat-list-item", "", "routerLink", "/contact", 1, "sidenav-button", 3, "click"], ["id", "subtitle", 1, "sidenav-button", 3, "click"], [4, "ngIf"], ["theme", ""], ["src", "../../../../assets/svg/folio-logo.svg", "routerLink", "/", 1, "logo"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/diss", 1, "sidenav-button", "project", 3, "click"], ["mat-list-item", "", "routerLink", "/", 1, "sidenav-button", "project", 3, "click"], ["mat-button", "", "routerLink", "/", 1, "menu-button"], ["mat-button", "", "routerLink", "/about", "routerLinkActive", "active", 1, "menu-button"], ["mat-button", "", "routerLink", "/contact", "routerLinkActive", "active", 1, "menu-button"], ["mat-button", "", 1, "menu-button", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/diss", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/listify", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/virtual-reality", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/serious-games", "routerLinkActive", "active"], ["src", "../../../../assets/svg/color_lens.svg"], ["yPosition", "below", 1, "theme-toggle-desktop-container"], ["menu", "matMenu", "themeMenu", "matMenu"], ["mat-menu-item", "", "id", "light", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "dark", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "green", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "blue", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "red", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_mat_icon_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_14_listener() {
              return ctx.toggleTheme("light");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_15_listener() {
              return ctx.toggleTheme("dark");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_16_listener() {
              return ctx.toggleTheme("green");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_17_listener() {
              return ctx.toggleTheme("blue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_18_listener() {
              return ctx.toggleTheme("red");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_25_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_28_listener() {
              return ctx.openProjectsMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Projects:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavigationComponent_div_31_Template, 12, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-sidenav-content", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, NavigationComponent_div_36_Template, 29, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NavigationComponent_button_38_Template, 3, 0, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.isHandset$)))("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, ctx.isHandset$) === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx.isHandset$) ? "dialog" : "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileViewProjects);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 15, ctx.isHandset$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 17, ctx.isHandset$));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _theme_theme_directive__WEBPACK_IMPORTED_MODULE_6__["ThemeDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background-color: var(--background);\r\n  color: var(--on-background);\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 60vw;\r\n  background: var(--background);\r\n  color: var(--on-background);\r\n}\r\n\r\n.theming[_ngcontent-%COMP%] {\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: horizontal;\r\n  -moz-box-direction: normal;\r\n       flex-direction: row;\r\n  -moz-box-pack: space-evenly;\r\n       justify-content: space-evenly;\r\n  height: 48px;\r\n}\r\n\r\n.theme-toggle[_ngcontent-%COMP%] {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: solid 1px #474647;\r\n  border-radius: 16px;\r\n}\r\n\r\n.theme-toggle[_ngcontent-%COMP%]:focus {\r\n  outline: 16px;\r\n}\r\n\r\n.theme-toggle-desktop-container[_ngcontent-%COMP%] { \r\n  width: 52px;\r\n}\r\n\r\n.theme-toggle-desktop[_ngcontent-%COMP%] {\r\n  width: 48px;\r\n  height: 40px;\r\n  margin: auto;\r\n  padding: 4px;\r\n}\r\n\r\n#light[_ngcontent-%COMP%] {\r\n  background-color: #EECD02;\r\n}\r\n\r\n#dark[_ngcontent-%COMP%] {\r\n  background-color: #474647;\r\n}\r\n\r\n#green[_ngcontent-%COMP%] {\r\n  background-color: #5DA60F;\r\n}\r\n\r\n#blue[_ngcontent-%COMP%] {\r\n  background-color: #2A62FE;\r\n}\r\n\r\n#red[_ngcontent-%COMP%] {\r\n  background-color: #E41401;\r\n}\r\n\r\n.sidenav-button[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 34px;\r\n  font-weight: 300;\r\n  padding: 16px;\r\n  width: inherit !important;\r\n}\r\n\r\n.project[_ngcontent-%COMP%] {\r\n  display: -moz-box;\r\n  display: flex;\r\n  margin-left: 32px;\r\n  font-size: 30px;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%] {\r\n  padding: 32px;\r\n}\r\n\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  height: 64px;\r\n  z-index: 999;\r\n  padding: 8px 16px;\r\n  display: -moz-box;\r\n  display: flex;\r\n  background-color: var(--primary);\r\n  color: var(--on-primary);\r\n  box-shadow: 0px 1px 4px var(--shadow);\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  -moz-box-flex: 1;\r\n       flex: 1 1 auto;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%] {\r\n  font-size: 18pt;\r\n  font-weight: 300;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--secondary);\r\n  color: var(--on-secondary);\r\n}\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  margin-right: 16px;\r\n  max-width: 130px;\r\n  -webkit-filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, .8));\r\n  filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, .5));\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover {\r\n  -webkit-filter: drop-shadow(-1.5px 1.5px 1.5px #f45E0190);\r\n  filter: drop-shadow(-1.5px 1.5px 1.5px #F45E0190);\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .sidenav-button[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLDBCQUFtQjtPQUFuQixtQkFBbUI7RUFDbkIsMkJBQTZCO09BQTdCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBYTtFQUFiLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFjO09BQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJEQUEyRDtFQUMzRCxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsaURBQWlEO0FBQ25EOztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnRoZW1pbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi50aGVtZS10b2dnbGUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjNDc0NjQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuLnRoZW1lLXRvZ2dsZTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMTZweDtcclxufVxyXG4udGhlbWUtdG9nZ2xlLWRlc2t0b3AtY29udGFpbmVyIHsgXHJcbiAgd2lkdGg6IDUycHg7XHJcbn1cclxuLnRoZW1lLXRvZ2dsZS1kZXNrdG9wIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuI2xpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVDRDAyO1xyXG59XHJcbiNkYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NjQ3O1xyXG59XHJcbiNncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVEQTYwRjtcclxufVxyXG4jYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBNjJGRTtcclxufVxyXG4jcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQxNDAxO1xyXG59XHJcblxyXG4uc2lkZW5hdi1idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbSB7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IHZhcigtLXNoYWRvdyk7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ubWVudS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi8qIC0tLSAqL1xyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBtYXgtd2lkdGg6IDEzMHB4O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygtMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuOCkpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjUpKTtcclxufVxyXG5cclxuLmxvZ286aG92ZXIge1xyXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygtMS41cHggMS41cHggMS41cHggI2Y0NUUwMTkwKTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xLjVweCAxLjVweCAxLjVweCAjRjQ1RTAxOTApO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('buttonAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('.sidenav-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0,
            transform: 'translateX(0)'
          }), {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('.sidenav-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('160ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s 0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0,
            transform: 'translateX(-64px)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: .5,
            transform: 'translateX(16px)',
            offset: 0.4
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 1
          })]))]), {
            optional: true
          })])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('buttonAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('.sidenav-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 0,
              transform: 'translateX(0)'
            }), {
              optional: true
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('.sidenav-button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('160ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s 0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 0,
              transform: 'translateX(-64px)',
              offset: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: .5,
              transform: 'translateX(16px)',
              offset: 0.4
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })]))]), {
              optional: true
            })])])]
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }, {
            type: src_app_theme__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
          }];
        }, {
          menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['menu', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/not-found/not-found.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/not-found/not-found.component.ts ***!
      \*************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 2,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/proj/diss/diss.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/components/proj/diss/diss.component.ts ***!
      \********************************************************/

    /*! exports provided: DissComponent */

    /***/
    function srcAppComponentsProjDissDissComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DissComponent", function () {
        return DissComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DissComponent = /*#__PURE__*/function () {
        function DissComponent() {
          _classCallCheck(this, DissComponent);
        }

        _createClass(DissComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DissComponent;
      }();

      DissComponent.ɵfac = function DissComponent_Factory(t) {
        return new (t || DissComponent)();
      };

      DissComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DissComponent,
        selectors: [["app-diss"]],
        decls: 33,
        vars: 0,
        consts: [[1, "container"], ["src", "assets/images/diss-3d-env.png", 1, "img-start"], [1, "layover"], [1, "layover-text"], [1, "text-body"]],
        template: function DissComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dissertation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  \r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #eee;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n.img-start[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -5;\r\n  width: inherit;\r\n  \r\n  background: fixed;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.layover[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #00000050;\r\n  height: 450px;\r\n  text-align: center;\r\n}\r\n.layover-text[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n  font-size: 60px;\r\n  font-weight: 300;\r\n  color: #ccc;\r\n  text-shadow: 1px 1px #474647;\r\n}\r\n.text-body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: #eee;\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qL2Rpc3MvZGlzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFzQjtFQUF0QiwwQkFBc0I7T0FBdEIsc0JBQXNCO0VBQ3RCLDhEQUE4RDtBQUNoRTtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvai9kaXNzL2Rpc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBpbWFnZSgnYXNzZXRzL2ltYWdlcy9kaXNzLTNkLWVudi5wbmcnKTsgKi9cclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaW1nLXN0YXJ0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IC01O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIC8qIG1heC1oZWlnaHQ6IDQ1MHB4OyAqL1xyXG4gIGJhY2tncm91bmQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmxheW92ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXlvdmVyLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICM0NzQ2NDc7XHJcbn1cclxuXHJcbi50ZXh0LWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DissComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-diss',
            templateUrl: './diss.component.html',
            styleUrls: ['./diss.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/proj/listify/listify.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/proj/listify/listify.component.ts ***!
      \**************************************************************/

    /*! exports provided: ListifyComponent */

    /***/
    function srcAppComponentsProjListifyListifyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListifyComponent", function () {
        return ListifyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ListifyComponent = /*#__PURE__*/function () {
        function ListifyComponent() {
          _classCallCheck(this, ListifyComponent);
        }

        _createClass(ListifyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListifyComponent;
      }();

      ListifyComponent.ɵfac = function ListifyComponent_Factory(t) {
        return new (t || ListifyComponent)();
      };

      ListifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListifyComponent,
        selectors: [["app-listify"]],
        decls: 2,
        vars: 0,
        template: function ListifyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "listify works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvai9saXN0aWZ5L2xpc3RpZnkuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListifyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-listify',
            templateUrl: './listify.component.html',
            styleUrls: ['./listify.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/proj/serious-games/serious-games.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/proj/serious-games/serious-games.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SeriousGamesComponent */

    /***/
    function srcAppComponentsProjSeriousGamesSeriousGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriousGamesComponent", function () {
        return SeriousGamesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SeriousGamesComponent = /*#__PURE__*/function () {
        function SeriousGamesComponent() {
          _classCallCheck(this, SeriousGamesComponent);
        }

        _createClass(SeriousGamesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SeriousGamesComponent;
      }();

      SeriousGamesComponent.ɵfac = function SeriousGamesComponent_Factory(t) {
        return new (t || SeriousGamesComponent)();
      };

      SeriousGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SeriousGamesComponent,
        selectors: [["app-serious-games"]],
        decls: 2,
        vars: 0,
        template: function SeriousGamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "serious-games works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvai9zZXJpb3VzLWdhbWVzL3NlcmlvdXMtZ2FtZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeriousGamesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-serious-games',
            templateUrl: './serious-games.component.html',
            styleUrls: ['./serious-games.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/proj/virtual-reality/virtual-reality.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/proj/virtual-reality/virtual-reality.component.ts ***!
      \******************************************************************************/

    /*! exports provided: VirtualRealityComponent */

    /***/
    function srcAppComponentsProjVirtualRealityVirtualRealityComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualRealityComponent", function () {
        return VirtualRealityComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VirtualRealityComponent = /*#__PURE__*/function () {
        function VirtualRealityComponent() {
          _classCallCheck(this, VirtualRealityComponent);
        }

        _createClass(VirtualRealityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VirtualRealityComponent;
      }();

      VirtualRealityComponent.ɵfac = function VirtualRealityComponent_Factory(t) {
        return new (t || VirtualRealityComponent)();
      };

      VirtualRealityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VirtualRealityComponent,
        selectors: [["app-virtual-reality"]],
        decls: 2,
        vars: 0,
        template: function VirtualRealityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "virtual-reality works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvai92aXJ0dWFsLXJlYWxpdHkvdmlydHVhbC1yZWFsaXR5LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualRealityComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-virtual-reality',
            templateUrl: './virtual-reality.component.html',
            styleUrls: ['./virtual-reality.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/projects/projects.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/projects/projects.service.ts ***!
      \**********************************************/

    /*! exports provided: ProjectsService */

    /***/
    function srcAppProjectsProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");

      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService(db) {
          _classCallCheck(this, ProjectsService);

          this.db = db;
          this.dbPath = '/project-tiles';
          this.projectsRef = null;
          this.projectsRef = db.list(this.dbPath);
        }

        _createClass(ProjectsService, [{
          key: "getProjectList",
          value: function getProjectList() {
            return this.projectsRef;
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ɵfac = function ProjectsService_Factory(t) {
        return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
      };

      ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectsService,
        factory: ProjectsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/blue-theme.ts":
    /*!*************************************!*\
      !*** ./src/app/theme/blue-theme.ts ***!
      \*************************************/

    /*! exports provided: blueTheme */

    /***/
    function srcAppThemeBlueThemeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blueTheme", function () {
        return blueTheme;
      });

      var blueTheme = {
        name: 'blue',
        properties: {
          '--background': '#E0E8FF',
          '--on-background': '#222',
          '--primary': '#2A62FE',
          '--on-primary': '#474647',
          '--secondary': '#1B3409',
          '--on-secondary': '#eee',
          '--error': '#E74E3C',
          '--on-error': '#474647',
          '--surface': '#5DA60FCC',
          '--on-surface': '#fff',
          '--shadow': '#777',
          '--card-overlay': '#EECD02DD',
          '--carousel': '#EECD0260'
        }
      };
      /***/
    },

    /***/
    "./src/app/theme/dark-theme.ts":
    /*!*************************************!*\
      !*** ./src/app/theme/dark-theme.ts ***!
      \*************************************/

    /*! exports provided: darkTheme */

    /***/
    function srcAppThemeDarkThemeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "darkTheme", function () {
        return darkTheme;
      });

      var darkTheme = {
        name: 'dark',
        properties: {
          '--background': '#121212',
          '--on-background': '#ccc',
          '--primary': '#474647',
          '--on-primary': '#ddd',
          '--secondary': '#474A4F',
          '--on-secondary': '#eee',
          '--error': '#E74E3C',
          '--on-error': '#fff',
          '--surface': '#333',
          '--on-surface': '#eee',
          '--shadow': '#333',
          '--card-overlay': '#474647EE',
          '--carousel': '#12121280'
        }
      };
      /***/
    },

    /***/
    "./src/app/theme/green-theme.ts":
    /*!**************************************!*\
      !*** ./src/app/theme/green-theme.ts ***!
      \**************************************/

    /*! exports provided: greenTheme */

    /***/
    function srcAppThemeGreenThemeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "greenTheme", function () {
        return greenTheme;
      });

      var greenTheme = {
        name: 'green',
        properties: {
          '--background': '#EBF7E3',
          '--on-background': '#222',
          '--primary': '#66B032',
          '--on-primary': '#474647',
          '--secondary': '#1B3409',
          '--on-secondary': '#eee',
          '--error': '#E74E3C',
          '--on-error': '#474647',
          '--surface': '#5DA60FCC',
          '--on-surface': '#fff',
          '--shadow': '#777',
          '--card-overlay': '#EECD02DD',
          '--carousel': '#EECD0260'
        }
      };
      /***/
    },

    /***/
    "./src/app/theme/index.ts":
    /*!********************************!*\
      !*** ./src/app/theme/index.ts ***!
      \********************************/

    /*! exports provided: ThemeModule, ThemeService, lightTheme, darkTheme, greenTheme, redTheme, blueTheme */

    /***/
    function srcAppThemeIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./theme.module */
      "./src/app/theme/theme.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
        return _theme_module__WEBPACK_IMPORTED_MODULE_0__["ThemeModule"];
      });
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./theme.service */
      "./src/app/theme/theme.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return _theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"];
      });
      /* harmony import */


      var _light_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./light-theme */
      "./src/app/theme/light-theme.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "lightTheme", function () {
        return _light_theme__WEBPACK_IMPORTED_MODULE_2__["lightTheme"];
      });
      /* harmony import */


      var _dark_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dark-theme */
      "./src/app/theme/dark-theme.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "darkTheme", function () {
        return _dark_theme__WEBPACK_IMPORTED_MODULE_3__["darkTheme"];
      });
      /* harmony import */


      var _green_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./green-theme */
      "./src/app/theme/green-theme.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "greenTheme", function () {
        return _green_theme__WEBPACK_IMPORTED_MODULE_4__["greenTheme"];
      });
      /* harmony import */


      var _red_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./red-theme */
      "./src/app/theme/red-theme.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "redTheme", function () {
        return _red_theme__WEBPACK_IMPORTED_MODULE_5__["redTheme"];
      });
      /* harmony import */


      var _blue_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./blue-theme */
      "./src/app/theme/blue-theme.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "blueTheme", function () {
        return _blue_theme__WEBPACK_IMPORTED_MODULE_6__["blueTheme"];
      });
      /***/

    },

    /***/
    "./src/app/theme/light-theme.ts":
    /*!**************************************!*\
      !*** ./src/app/theme/light-theme.ts ***!
      \**************************************/

    /*! exports provided: lightTheme */

    /***/
    function srcAppThemeLightThemeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lightTheme", function () {
        return lightTheme;
      });

      var lightTheme = {
        name: 'light',
        properties: {
          '--background': '#eee',
          '--on-background': '#222',
          '--primary': '#EECD02',
          '--on-primary': '#333',
          '--secondary': '#F45D01',
          '--on-secondary': '#eee',
          '--error': '#E74E3C',
          '--on-error': '#474647',
          '--surface': '#fff',
          '--on-surface': '#333',
          '--shadow': '#777',
          '--card-overlay': '#EECD02EE',
          '--carousel': '#EECD0260'
        }
      };
      /***/
    },

    /***/
    "./src/app/theme/red-theme.ts":
    /*!************************************!*\
      !*** ./src/app/theme/red-theme.ts ***!
      \************************************/

    /*! exports provided: redTheme */

    /***/
    function srcAppThemeRedThemeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redTheme", function () {
        return redTheme;
      });

      var redTheme = {
        name: 'red',
        properties: {
          '--background': '#FFE3E0',
          '--on-background': '#222',
          '--primary': '#E41401',
          '--on-primary': '#474647',
          '--secondary': '#1B3409',
          '--on-secondary': '#eee',
          '--error': '#E74E3C',
          '--on-error': '#474647',
          '--surface': '#5DA60FCC',
          '--on-surface': '#fff',
          '--shadow': '#777',
          '--card-overlay': '#EECD02DD',
          '--carousel': '#EECD0260'
        }
      };
      /***/
    },

    /***/
    "./src/app/theme/symbols.ts":
    /*!**********************************!*\
      !*** ./src/app/theme/symbols.ts ***!
      \**********************************/

    /*! exports provided: THEMES, ACTIVE_THEME */

    /***/
    function srcAppThemeSymbolsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THEMES", function () {
        return THEMES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ACTIVE_THEME", function () {
        return ACTIVE_THEME;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var THEMES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('THEMES');
      var ACTIVE_THEME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ACTIVE_THEME');
      /***/
    },

    /***/
    "./src/app/theme/theme.directive.ts":
    /*!******************************************!*\
      !*** ./src/app/theme/theme.directive.ts ***!
      \******************************************/

    /*! exports provided: ThemeDirective */

    /***/
    function srcAppThemeThemeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeDirective", function () {
        return ThemeDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme.service */
      "./src/app/theme/theme.service.ts");

      var ThemeDirective = /*#__PURE__*/function () {
        function ThemeDirective(_elementRef, _themeService) {
          _classCallCheck(this, ThemeDirective);

          this._elementRef = _elementRef;
          this._themeService = _themeService;
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(ThemeDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var active = this._themeService.getActiveTheme();

            if (active) {
              this.updateTheme(active);
            }

            this._themeService.themeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(function (theme) {
              return _this2.updateTheme(theme);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();
          }
        }, {
          key: "updateTheme",
          value: function updateTheme(theme) {
            // project properties onto the element
            for (var key in theme.properties) {
              this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
            } // remove old theme


            var _iterator = _createForOfIteratorHelper(this._themeService.theme),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var name = _step.value;

                this._elementRef.nativeElement.classList.remove("".concat(name, "-theme"));
              } // alias element with theme name

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._elementRef.nativeElement.classList.add("".concat(theme.name, "-theme"));
          }
        }]);

        return ThemeDirective;
      }();

      ThemeDirective.ɵfac = function ThemeDirective_Factory(t) {
        return new (t || ThemeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]));
      };

      ThemeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ThemeDirective,
        selectors: [["", "theme", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[theme]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/theme.module.ts":
    /*!***************************************!*\
      !*** ./src/app/theme/theme.module.ts ***!
      \***************************************/

    /*! exports provided: ThemeModule */

    /***/
    function srcAppThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
        return ThemeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme.service */
      "./src/app/theme/theme.service.ts");
      /* harmony import */


      var _theme_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme.directive */
      "./src/app/theme/theme.directive.ts");
      /* harmony import */


      var _symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./symbols */
      "./src/app/theme/symbols.ts");

      var ThemeModule = /*#__PURE__*/function () {
        function ThemeModule() {
          _classCallCheck(this, ThemeModule);
        }

        _createClass(ThemeModule, null, [{
          key: "forRoot",
          value: function forRoot(options) {
            return {
              ngModule: ThemeModule,
              providers: [{
                provide: _symbols__WEBPACK_IMPORTED_MODULE_4__["THEMES"],
                useValue: options.themes
              }, {
                provide: _symbols__WEBPACK_IMPORTED_MODULE_4__["ACTIVE_THEME"],
                useValue: options.active
              }]
            };
          }
        }]);

        return ThemeModule;
      }();

      ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ThemeModule
      });
      ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ThemeModule_Factory(t) {
          return new (t || ThemeModule)();
        },
        providers: [_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
          declarations: [_theme_directive__WEBPACK_IMPORTED_MODULE_3__["ThemeDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_theme_directive__WEBPACK_IMPORTED_MODULE_3__["ThemeDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]],
            declarations: [_theme_directive__WEBPACK_IMPORTED_MODULE_3__["ThemeDirective"]],
            exports: [_theme_directive__WEBPACK_IMPORTED_MODULE_3__["ThemeDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/theme/theme.service.ts":
    /*!****************************************!*\
      !*** ./src/app/theme/theme.service.ts ***!
      \****************************************/

    /*! exports provided: ThemeService */

    /***/
    function srcAppThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./symbols */
      "./src/app/theme/symbols.ts");

      var ThemeService = /*#__PURE__*/function () {
        function ThemeService(themes, theme) {
          _classCallCheck(this, ThemeService);

          this.themes = themes;
          this.theme = theme;
          this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ThemeService, [{
          key: "getTheme",
          value: function getTheme(name) {
            var theme = this.themes.find(function (t) {
              return t.name === name;
            });

            if (!theme) {
              throw new Error("Theme not found: '".concat(name, "'"));
            }

            return theme;
          }
        }, {
          key: "getActiveTheme",
          value: function getActiveTheme() {
            return this.getTheme(this.theme);
          }
        }, {
          key: "getProperty",
          value: function getProperty(propName) {
            return this.getActiveTheme().properties[propName];
          }
        }, {
          key: "setTheme",
          value: function setTheme(name) {
            this.theme = name;
            this.themeChange.emit(this.getActiveTheme());
          }
        }, {
          key: "registerTheme",
          value: function registerTheme(theme) {
            this.themes.push(theme);
          }
        }, {
          key: "updateTheme",
          value: function updateTheme(name, properties) {
            var theme = this.getTheme(name);
            theme.properties = Object.assign(Object.assign({}, theme.properties), properties);

            if (name === this.theme) {
              this.themeChange.emit(theme);
            }
          }
        }]);

        return ThemeService;
      }();

      ThemeService.ɵfac = function ThemeService_Factory(t) {
        return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_symbols__WEBPACK_IMPORTED_MODULE_1__["THEMES"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_symbols__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_THEME"]));
      };

      ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ThemeService,
        factory: ThemeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_symbols__WEBPACK_IMPORTED_MODULE_1__["THEMES"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_symbols__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_THEME"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: 'AIzaSyADBRbWaPJO4MaO7SgnhfcbvrcNRoczBBc',
          authDomain: 'jakefellows-portfolio.firebaseapp.com',
          databaseURL: 'https://jakefellows-portfolio.firebaseio.com',
          projectId: 'jakefellows-portfolio',
          storageBucket: 'jakefellows-portfolio.appspot.com',
          messagingSenderId: '845952296565',
          appId: '1:845952296565:web:f5240c254e289ce24c3a3c',
          measurementId: 'G-EZ7TTX02QL'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Jake\OneDrive\Projects\Portfolio\portfolio2020\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map