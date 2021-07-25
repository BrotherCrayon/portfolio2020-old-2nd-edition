(self["webpackChunkfolio"] = self["webpackChunkfolio"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 3830:
/*!***********************************************!*\
  !*** ./src/app/animations/route-animation.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routeAnimation": function() { return /* binding */ routeAnimation; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7238);

const routeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '-100%' })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '100%' }))
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '0%' }))
            ])
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> FilterPage', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '-100%' })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '100%' }))
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ left: '0%' }))
            ])
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
    ])
]);


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; },
/* harmony export */   "routingComponents": function() { return /* binding */ routingComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/proj/diss/diss.component */ 758);
/* harmony import */ var _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/proj/listify/listify.component */ 511);
/* harmony import */ var _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/proj/serious-games/serious-games.component */ 404);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 1828);
/* harmony import */ var _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cards-view/cards-view.component */ 7770);
/* harmony import */ var _components_proj_virtual_reality_virtual_reality_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/proj/virtual-reality/virtual-reality.component */ 5993);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);













const routes = [
    // { path: '', outlet: 'home', component: CarouselComponent },
    { path: '', component: _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_6__.CardsViewComponent, data: { animation: 'HomePage' } },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, data: { animation: 'AboutPage' } },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, data: { animation: 'ContactPage' } },
    // projects - i want these nested so i can make another menu for them
    { path: 'diss', component: _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_2__.DissComponent, data: { animation: 'dissPage' } },
    { path: 'listify', component: _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_3__.ListifyComponent, data: { animation: 'listifyPage' } },
    { path: 'serious-games', component: _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_4__.SeriousGamesComponent, data: { animation: 'gamePage' } },
    { path: 'virtual-reality', component: _components_proj_virtual_reality_virtual_reality_component__WEBPACK_IMPORTED_MODULE_7__.VirtualRealityComponent, data: { animation: 'vrPage' } },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, data: { animation: 'SubPage' } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();
const routingComponents = [_components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_2__.DissComponent, _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_3__.ListifyComponent, _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_4__.SeriousGamesComponent];


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _animations_route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/route-animation */ 3830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/navigation/navigation.component */ 1460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ 4124);





class AppComponent {
    constructor() {
        this.title = 'jake fellows';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["id", "body-container"], ["outlet", "outlet"], ["id", "footer-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [
            _animations_route_animation__WEBPACK_IMPORTED_MODULE_0__.routeAnimation
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ 4124);
/* harmony import */ var _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards-view/cards-view.component */ 7770);
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carousel/carousel.component */ 9354);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 1828);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/navigation/navigation.component */ 1460);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ 1376);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/proj/diss/diss.component */ 758);
/* harmony import */ var _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/proj/listify/listify.component */ 511);
/* harmony import */ var _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/proj/serious-games/serious-games.component */ 404);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/theme.module */ 5056);



// components




// imported modules (premade stuff)



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__.LayoutModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__.MatDividerModule,
            _theme__WEBPACK_IMPORTED_MODULE_9__.ThemeModule.forRoot({
                themes: [_theme__WEBPACK_IMPORTED_MODULE_9__.lightTheme, _theme__WEBPACK_IMPORTED_MODULE_9__.darkTheme, _theme__WEBPACK_IMPORTED_MODULE_9__.greenTheme, _theme__WEBPACK_IMPORTED_MODULE_9__.redTheme, _theme__WEBPACK_IMPORTED_MODULE_9__.blueTheme],
                active: 'light'
            }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_30__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_31__.AngularFireDatabaseModule,
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__.AngularFirestoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
        _components_cards_view_cards_view_component__WEBPACK_IMPORTED_MODULE_3__.CardsViewComponent,
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent,
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _components_proj_diss_diss_component__WEBPACK_IMPORTED_MODULE_11__.DissComponent, _components_proj_listify_listify_component__WEBPACK_IMPORTED_MODULE_12__.ListifyComponent, _components_proj_serious_games_serious_games_component__WEBPACK_IMPORTED_MODULE_13__.SeriousGamesComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
        _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__.NavigationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__.LayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__.MatDividerModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__.ThemeModule, _angular_fire__WEBPACK_IMPORTED_MODULE_30__.AngularFireModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_31__.AngularFireDatabaseModule,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__.AngularFirestoreModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/theme.directive */ 4357);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 1562);




class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 0, consts: [["theme", "", 1, "container"], [1, "card", "card-intro"], [1, "card-text"], [1, "card", "card-body"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Jake Fellows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Some filler text here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " My dog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " He's called Bane ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "This is the primary content of the panel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_theme_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ThemeDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelDescription], styles: [".container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  flex: auto;\r\n  width: 250px;\r\n  height: 300px;\r\n  border-radius: 4px;\r\n  margin: 24px 4px 24px 16px;\r\n  background-color: var(--surface);\r\n  color: var(--on-surface);\r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: 50px;\r\n  background-color: var(--background);\r\n  margin: 4px;\r\n}\r\n.card-img[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.card-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 24px;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 24px 16px 24px 16px;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: 120px;\r\n    margin: 16px 32px 0 32px;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jYXJkIHtcclxuICBmbGV4OiBhdXRvO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDI0cHggNHB4IDI0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuLmNhcmQtaW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAyNHB4IDE2cHggMjRweCAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDE2cHggMzJweCAwIDMycHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7770:
/*!***************************************************************!*\
  !*** ./src/app/components/cards-view/cards-view.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsViewComponent": function() { return /* binding */ CardsViewComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_projects_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/projects/projects.service */ 8461);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ 9354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/theme.directive */ 4357);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);









const _c0 = function (a0) { return [a0]; };
function CardsViewComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", project_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, project_r2.link));
} }
function CardsViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CardsViewComponent_div_1_div_1_Template, 10, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
class CardsViewComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.projects = [];
    }
    retrieveProjects() {
        this.projectService.getProjectList().snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(projects => {
            this.projects = projects;
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.retrieveProjects();
    }
}
CardsViewComponent.ɵfac = function CardsViewComponent_Factory(t) { return new (t || CardsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_projects_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
CardsViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CardsViewComponent, selectors: [["app-cards-view"]], decls: 2, vars: 1, consts: [["theme", "", "class", "container", 4, "ngIf"], ["theme", "", 1, "container"], ["class", "layout", 4, "ngFor", "ngForOf"], [1, "layout"], [1, "card"], ["mat-card-image", "", 1, "card-img", 3, "src"], [1, "overlay"], ["id", "test-TOREMOVE", 1, "title"], [1, "text"], ["mat-raised-button", "", 1, "view-project", 3, "routerLink"]], template: function CardsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CardsViewComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.projects.length);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _theme_theme_directive__WEBPACK_IMPORTED_MODULE_2__.ThemeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardImage, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  flex-grow: 2;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 31vw;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n  padding: 0;\r\n  background-color: var(--background);\r\n  \r\n  transition: ease .4s;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.card-img[_ngcontent-%COMP%] {\r\n  width: inherit;\r\n  height: inherit;\r\n  margin: 0 !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n  background-color: var(--secondary);\r\n  color: var(--on-secondary);\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 3;\r\n  height: inherit;\r\n  width: inherit;\r\n  overflow: hidden;\r\n  bottom: 100%;\r\n  height: 0;\r\n  \r\n  transition: ease .5s;\r\n  background-color: var(--card-overlay);\r\n  border-radius: 4px;\r\n  \r\n  \r\n}\r\n\r\n.layout[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  height: 100%;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 16px;\r\n  left: 0;\r\n  margin: 8px;\r\n  text-align: left;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 32px;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 8px 8px 4px 8px;\r\n  text-align: left;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 18px;\r\n  left: 0;\r\n  margin: 4px 8px;\r\n}\r\n\r\n.view-project[_ngcontent-%COMP%] {\r\n  color: var(--on-secondary);\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 40px;\r\n  margin: 8px 8px;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--primary);\r\n  color: var(--on-primary);\r\n}\r\n\r\n@media (max-width:996px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 47vw;\r\n    transition: none;\r\n    min-height: 100px;\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n@media (max-width:700px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 85vw;\r\n    margin: 16px 4px;\r\n    transition: none;\r\n    min-height: 100px;\r\n    overflow: hidden;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkM7OzhDQUU0QztFQUM1QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsT0FBTztFQUNQLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImNhcmRzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IDMxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCB2YXIoLS1zaGFkb3cpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4IHZhcigtLXNoYWRvdyk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4IHZhcigtLXNoYWRvdyk7ICovXHJcbiAgdHJhbnNpdGlvbjogZWFzZSAuNHM7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tb24tc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4vKiBjYXJkIG1vdXNlb3ZlciAqL1xyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICAvKiBvcGFjaXR5OiAwOyAqL1xyXG4gIHRyYW5zaXRpb246IGVhc2UgLjVzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtb3ZlcmxheSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxufVxyXG5cclxuLmxheW91dDpob3ZlciAub3ZlcmxheSB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiA4cHggOHB4IDRweCA4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tb24tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiA0cHggOHB4O1xyXG59XHJcblxyXG4udmlldy1wcm9qZWN0IHtcclxuICBjb2xvcjogdmFyKC0tb24tc2Vjb25kYXJ5KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDhweCA4cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTZweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA0N3Z3O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBtYXJnaW46IDE2cHggNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9354:
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": function() { return /* binding */ CarouselComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/theme.directive */ 4357);


class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 8, vars: 0, consts: [["theme", "", 1, "display-window"], [1, "title"], [1, "bio"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Hello. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Frontend developer intro. Themeing is placeholders for functioanlity testing. Big changes incoming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Work in Progress! - uploaded for feedback on layout only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_theme_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ThemeDirective], styles: [".display-window[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  \r\n  background-color: var(--background);\r\n  background: linear-gradient(18deg, var(--carousel) 0%, var(--primary) 100%);\r\n  color: var(--on-primary);\r\n  text-align: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  text-shadow: 0px 2px 2px var(--shadow);\r\n  font-size: 44pt;\r\n  padding-top: 110px;\r\n  color: var(--on-primary);\r\n}\r\n\r\n.bio[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  text-shadow: 0px 0px 1px var(--shadow);\r\n  font-size: 18pt;\r\n  font-weight: 300;\r\n  padding-top: 40px;\r\n  color: var(--on-primary);\r\n}\r\n\r\n#caro-icon[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n  text-shadow: 0px 0px 1px var(--shadow);\r\n  font-size: 38pt;\r\n  font-weight: 300;\r\n  padding-top: 4px;\r\n  color: var(--on-primary);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .display-window[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n  }\r\n\r\n  .bio[_ngcontent-%COMP%] {\r\n    line-height: normal;\r\n    margin: 0 4px 0 4px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsMkVBQTJFO0VBQzNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LXdpbmRvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOGRlZywgdmFyKC0tY2Fyb3VzZWwpIDAlLCB2YXIoLS1wcmltYXJ5KSAxMDAlKTtcclxuICBjb2xvcjogdmFyKC0tb24tcHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMnB4IDJweCB2YXIoLS1zaGFkb3cpO1xyXG4gIGZvbnQtc2l6ZTogNDRwdDtcclxuICBwYWRkaW5nLXRvcDogMTEwcHg7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG59XHJcblxyXG4uYmlvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCB2YXIoLS1zaGFkb3cpO1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxufVxyXG5cclxuI2Nhcm8taWNvbiB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCB2YXIoLS1zaGFkb3cpO1xyXG4gIGZvbnQtc2l6ZTogMzhwdDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZGlzcGxheS13aW5kb3cge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgfVxyXG5cclxuICAuYmlvIHtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDAgNHB4IDAgNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "card"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    margin: 24px 24px 24px 24px;\r\n    align-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: #474647;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IDI0cHggMjRweCAyNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6ICM0NzQ2NDc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4124:
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/theme.directive */ 4357);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["theme", "", 1, "footer-container"], ["id", "tempfooter"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Jake Fellows 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_theme_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ThemeDirective], styles: [".footer-container[_ngcontent-%COMP%] {\r\n  margin-top: 32px;\r\n  position: inherit;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 48px;\r\n  background-color: var(--primary);\r\n  color: var(--on-primary);\r\n  border-top: solid 1px var(--shadow);\r\n}\r\n\r\n#tempfooter[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tc2hhZG93KTtcclxufVxyXG5cclxuI3RlbXBmb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1460:
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": function() { return /* binding */ NavigationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme */ 1376);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/theme.directive */ 4357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 3935);
















const _c0 = ["menu"];
function NavigationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dissertation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Listify");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "3D Modelling");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_31_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Virtual Reality");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@buttonAnimation", undefined);
} }
function NavigationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-menu", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Dissertation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Listify");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Virtual Reality");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Serious Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-menu", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.toggleTheme("light"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.toggleTheme("dark"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.toggleTheme("green"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.toggleTheme("blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_div_36_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.toggleTheme("red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
function NavigationComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { hidden: a0 }; };
const _c2 = ["*"];
class NavigationComponent {
    constructor(breakpointObserver, themeService) {
        this.breakpointObserver = breakpointObserver;
        this.themeService = themeService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Handset)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
        // tslint:disable-next-line: no-inferrable-types
        this.navOpen = false;
    }
    openProjectsMenu() {
        this.mobileViewProjects = !this.mobileViewProjects;
    }
    toggleTheme(theme) {
        this.themeService.setTheme(theme);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_theme__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], viewQuery: function NavigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, ngContentSelectors: _c2, decls: 41, vars: 21, consts: [["theme", "", 1, "sidenav-container"], ["fixedInViewport", "false", "position", "end", 1, "sidenav", 3, "ngClass", "mode", "opened"], ["drawer", ""], [1, "spacer"], [3, "click"], [1, "theming"], ["id", "light", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "dark", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "green", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "blue", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["id", "red", "aria-label", "theme-toggle", 1, "theme-toggle", 3, "click"], ["mat-list-item", "", "routerLink", "/", 1, "sidenav-button", 3, "click"], ["mat-list-item", "", "routerLink", "/about", 1, "sidenav-button", 3, "click"], ["mat-list-item", "", "routerLink", "/contact", 1, "sidenav-button", 3, "click"], ["id", "subtitle", 1, "sidenav-button", 3, "click"], [4, "ngIf"], ["theme", ""], ["src", "../../../../assets/svg/folio-logo.svg", "routerLink", "/", 1, "logo"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/diss", 1, "sidenav-button", "project", 3, "click"], ["mat-list-item", "", "routerLink", "/", 1, "sidenav-button", "project", 3, "click"], ["mat-button", "", "routerLink", "/", 1, "menu-button"], ["mat-button", "", "routerLink", "/about", "routerLinkActive", "active", 1, "menu-button"], ["mat-button", "", "routerLink", "/contact", "routerLinkActive", "active", 1, "menu-button"], ["mat-button", "", 1, "menu-button", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/diss", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/listify", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/virtual-reality", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/serious-games", "routerLinkActive", "active"], ["src", "../../../../assets/svg/color_lens.svg"], ["yPosition", "below", 1, "theme-toggle-desktop-container"], ["themeMenu", "matMenu"], ["mat-menu-item", "", "id", "light", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "dark", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "green", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "blue", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["mat-menu-item", "", "id", "red", "aria-label", "theme-toggle", 1, "theme-toggle-desktop", 3, "click"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_mat_icon_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_14_listener() { return ctx.toggleTheme("light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_15_listener() { return ctx.toggleTheme("dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_16_listener() { return ctx.toggleTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_17_listener() { return ctx.toggleTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_18_listener() { return ctx.toggleTheme("red"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_28_listener() { return ctx.openProjectsMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Projects:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, NavigationComponent_div_31_Template, 12, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-sidenav-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, NavigationComponent_div_36_Template, 28, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, NavigationComponent_button_38_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, ctx.isHandset$)))("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 11, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 13, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobileViewProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 15, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 17, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _theme_theme_directive__WEBPACK_IMPORTED_MODULE_1__.ThemeDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background-color: var(--background);\r\n  color: var(--on-background);\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 60vw;\r\n  background: var(--background);\r\n  color: var(--on-background);\r\n}\r\n\r\n.theming[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  height: 48px;\r\n}\r\n\r\n.theme-toggle[_ngcontent-%COMP%] {\r\n  width: 24px;\r\n  height: 24px;\r\n  border: solid 1px #474647;\r\n  border-radius: 16px;\r\n}\r\n\r\n.theme-toggle[_ngcontent-%COMP%]:focus {\r\n  outline: 16px;\r\n}\r\n\r\n  .theme-toggle-desktop-container{ \r\n  max-width: 14px;\r\n  min-width: 14px;\r\n  width: 14px;\r\n  background-color: #00000069;\r\n}\r\n\r\n.theme-toggle-desktop[_ngcontent-%COMP%] {\r\n  width: 4px;\r\n  height: 4px;\r\n  border-radius: 12px;\r\n  margin: 8px auto;\r\n  padding: 24px 48px;\r\n}\r\n\r\n.theme-toggle-desktop[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n#light[_ngcontent-%COMP%] {\r\n  background-color: #EECD02;\r\n}\r\n\r\n#dark[_ngcontent-%COMP%] {\r\n  background-color: #474647;\r\n}\r\n\r\n#green[_ngcontent-%COMP%] {\r\n  background-color: #5DA60F;\r\n}\r\n\r\n#blue[_ngcontent-%COMP%] {\r\n  background-color: #2A62FE;\r\n}\r\n\r\n#red[_ngcontent-%COMP%] {\r\n  background-color: #E41401;\r\n}\r\n\r\n.sidenav-button[_ngcontent-%COMP%] {\r\n  color: var(--on-primary);\r\n  font-size: 34px;\r\n  font-weight: 300;\r\n  padding: 16px;\r\n  width: inherit !important;\r\n}\r\n\r\n.project[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: 32px;\r\n  font-size: 30px;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%] {\r\n  padding: 32px;\r\n}\r\n\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  height: 64px;\r\n  z-index: 999;\r\n  padding: 8px 16px;\r\n  display: flex;\r\n  background-color: var(--primary);\r\n  color: var(--on-primary);\r\n  box-shadow: 0px 1px 4px var(--shadow);\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%] {\r\n  font-size: 18pt;\r\n  font-weight: 300;\r\n}\r\n\r\n.menu-button[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--secondary);\r\n  color: var(--on-secondary);\r\n}\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  margin-right: 16px;\r\n  max-width: 130px;\r\n  filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, .5));\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover {\r\n  filter: drop-shadow(-1.5px 1.5px 1.5px #F45E0190);\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .sidenav-button[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUVFLGlEQUFpRDtBQUNuRDs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnRoZW1pbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi50aGVtZS10b2dnbGUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjNDc0NjQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuLnRoZW1lLXRvZ2dsZTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMTZweDtcclxufVxyXG46Om5nLWRlZXAgLnRoZW1lLXRvZ2dsZS1kZXNrdG9wLWNvbnRhaW5lcnsgXHJcbiAgbWF4LXdpZHRoOiAxNHB4O1xyXG4gIG1pbi13aWR0aDogMTRweDtcclxuICB3aWR0aDogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjk7XHJcbn1cclxuLnRoZW1lLXRvZ2dsZS1kZXNrdG9wIHtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiA4cHggYXV0bztcclxuICBwYWRkaW5nOiAyNHB4IDQ4cHg7XHJcbn1cclxuLnRoZW1lLXRvZ2dsZS1kZXNrdG9wOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbiNsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQ0QwMjtcclxufVxyXG4jZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDY0NztcclxufVxyXG4jZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1REE2MEY7XHJcbn1cclxuI2JsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTYyRkU7XHJcbn1cclxuI3JlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0MTQwMTtcclxufVxyXG5cclxuLnNpZGVuYXYtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0tb24tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1saXN0LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCB2YXIoLS1zaGFkb3cpO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1lbnUtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE4cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4vKiAtLS0gKi9cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgbWF4LXdpZHRoOiAxMzBweDtcclxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjgpKTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIC41KSk7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coLTEuNXB4IDEuNXB4IDEuNXB4ICNmNDVFMDE5MCk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygtMS41cHggMS41cHggMS41cHggI0Y0NUUwMTkwKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5zaWRlbmF2LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('buttonAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)('.sidenav-button', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
                        opacity: 0,
                        transform: 'translateX(0)'
                    }), {
                        optional: true
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)('.sidenav-button', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.stagger)('160ms', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('0.5s 0.3s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.keyframes)([
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
                                opacity: 0,
                                transform: 'translateX(-64px)',
                                offset: 0
                            }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
                                opacity: .5,
                                transform: 'translateX(16px)',
                                offset: 0.4
                            }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
                                opacity: 1,
                                transform: 'translateX(0px)',
                                offset: 1
                            })
                        ]))
                    ]), {
                        optional: true
                    })
                ])
            ]),
        ] } });


/***/ }),

/***/ 1828:
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 758:
/*!********************************************************!*\
  !*** ./src/app/components/proj/diss/diss.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DissComponent": function() { return /* binding */ DissComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DissComponent {
    constructor() { }
    ngOnInit() {
    }
}
DissComponent.ɵfac = function DissComponent_Factory(t) { return new (t || DissComponent)(); };
DissComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DissComponent, selectors: [["app-diss"]], decls: 33, vars: 0, consts: [[1, "container"], ["src", "assets/images/diss-3d-env.png", 1, "img-start"], [1, "layover"], [1, "layover-text"], [1, "text-body"]], template: function DissComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #eee;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n.img-start[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -5;\r\n  width: inherit;\r\n  \r\n  background: fixed;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.layover[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #00000050;\r\n  height: 450px;\r\n  text-align: center;\r\n}\r\n.layover-text[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n  font-size: 60px;\r\n  font-weight: 300;\r\n  color: #ccc;\r\n  text-shadow: 1px 1px #474647;\r\n}\r\n.text-body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: #eee;\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4REFBOEQ7QUFDaEU7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1oiLCJmaWxlIjoiZGlzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogaW1hZ2UoJ2Fzc2V0cy9pbWFnZXMvZGlzcy0zZC1lbnYucG5nJyk7ICovXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmltZy1zdGFydCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAtNTtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICAvKiBtYXgtaGVpZ2h0OiA0NTBweDsgKi9cclxuICBiYWNrZ3JvdW5kOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5sYXlvdmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUwO1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGF5b3Zlci10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogI2NjYztcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjNDc0NjQ3O1xyXG59XHJcblxyXG4udGV4dC1ib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 511:
/*!**************************************************************!*\
  !*** ./src/app/components/proj/listify/listify.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListifyComponent": function() { return /* binding */ ListifyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ListifyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListifyComponent.ɵfac = function ListifyComponent_Factory(t) { return new (t || ListifyComponent)(); };
ListifyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListifyComponent, selectors: [["app-listify"]], decls: 2, vars: 0, template: function ListifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "listify works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0aWZ5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 404:
/*!**************************************************************************!*\
  !*** ./src/app/components/proj/serious-games/serious-games.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriousGamesComponent": function() { return /* binding */ SeriousGamesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SeriousGamesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SeriousGamesComponent.ɵfac = function SeriousGamesComponent_Factory(t) { return new (t || SeriousGamesComponent)(); };
SeriousGamesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeriousGamesComponent, selectors: [["app-serious-games"]], decls: 2, vars: 0, template: function SeriousGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "serious-games works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJpb3VzLWdhbWVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5993:
/*!******************************************************************************!*\
  !*** ./src/app/components/proj/virtual-reality/virtual-reality.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualRealityComponent": function() { return /* binding */ VirtualRealityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class VirtualRealityComponent {
    constructor() { }
    ngOnInit() {
    }
}
VirtualRealityComponent.ɵfac = function VirtualRealityComponent_Factory(t) { return new (t || VirtualRealityComponent)(); };
VirtualRealityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VirtualRealityComponent, selectors: [["app-virtual-reality"]], decls: 2, vars: 0, template: function VirtualRealityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "virtual-reality works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXJ0dWFsLXJlYWxpdHkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8461:
/*!**********************************************!*\
  !*** ./src/app/projects/projects.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": function() { return /* binding */ ProjectsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 4134);


class ProjectsService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/project-tiles';
        this.projectsRef = null;
        this.projectsRef = db.list(this.dbPath);
    }
    getProjectList() {
        return this.projectsRef;
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6019:
/*!*************************************!*\
  !*** ./src/app/theme/blue-theme.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blueTheme": function() { return /* binding */ blueTheme; }
/* harmony export */ });
const blueTheme = {
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


/***/ }),

/***/ 1671:
/*!*************************************!*\
  !*** ./src/app/theme/dark-theme.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkTheme": function() { return /* binding */ darkTheme; }
/* harmony export */ });
const darkTheme = {
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


/***/ }),

/***/ 8849:
/*!**************************************!*\
  !*** ./src/app/theme/green-theme.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "greenTheme": function() { return /* binding */ greenTheme; }
/* harmony export */ });
const greenTheme = {
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


/***/ }),

/***/ 1376:
/*!********************************!*\
  !*** ./src/app/theme/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": function() { return /* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule; },
/* harmony export */   "ThemeService": function() { return /* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService; },
/* harmony export */   "lightTheme": function() { return /* reexport safe */ _light_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme; },
/* harmony export */   "darkTheme": function() { return /* reexport safe */ _dark_theme__WEBPACK_IMPORTED_MODULE_3__.darkTheme; },
/* harmony export */   "greenTheme": function() { return /* reexport safe */ _green_theme__WEBPACK_IMPORTED_MODULE_4__.greenTheme; },
/* harmony export */   "redTheme": function() { return /* reexport safe */ _red_theme__WEBPACK_IMPORTED_MODULE_5__.redTheme; },
/* harmony export */   "blueTheme": function() { return /* reexport safe */ _blue_theme__WEBPACK_IMPORTED_MODULE_6__.blueTheme; }
/* harmony export */ });
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.module */ 5056);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ 880);
/* harmony import */ var _light_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./light-theme */ 5551);
/* harmony import */ var _dark_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark-theme */ 1671);
/* harmony import */ var _green_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./green-theme */ 8849);
/* harmony import */ var _red_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./red-theme */ 7832);
/* harmony import */ var _blue_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blue-theme */ 6019);









/***/ }),

/***/ 5551:
/*!**************************************!*\
  !*** ./src/app/theme/light-theme.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightTheme": function() { return /* binding */ lightTheme; }
/* harmony export */ });
const lightTheme = {
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


/***/ }),

/***/ 7832:
/*!************************************!*\
  !*** ./src/app/theme/red-theme.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redTheme": function() { return /* binding */ redTheme; }
/* harmony export */ });
const redTheme = {
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


/***/ }),

/***/ 3778:
/*!**********************************!*\
  !*** ./src/app/theme/symbols.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEMES": function() { return /* binding */ THEMES; },
/* harmony export */   "ACTIVE_THEME": function() { return /* binding */ ACTIVE_THEME; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const THEMES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('THEMES');
const ACTIVE_THEME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ACTIVE_THEME');


/***/ }),

/***/ 4357:
/*!******************************************!*\
  !*** ./src/app/theme/theme.directive.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeDirective": function() { return /* binding */ ThemeDirective; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.service */ 880);




class ThemeDirective {
    constructor(_elementRef, _themeService) {
        this._elementRef = _elementRef;
        this._themeService = _themeService;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
        const active = this._themeService.getActiveTheme();
        if (active) {
            this.updateTheme(active);
        }
        this._themeService.themeChange
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroy$))
            .subscribe((theme) => this.updateTheme(theme));
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    updateTheme(theme) {
        // project properties onto the element
        for (const key in theme.properties) {
            this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
        }
        // remove old theme
        for (const name of this._themeService.theme) {
            this._elementRef.nativeElement.classList.remove(`${name}-theme`);
        }
        // alias element with theme name
        this._elementRef.nativeElement.classList.add(`${theme.name}-theme`);
    }
}
ThemeDirective.ɵfac = function ThemeDirective_Factory(t) { return new (t || ThemeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
ThemeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ThemeDirective, selectors: [["", "theme", ""]] });


/***/ }),

/***/ 5056:
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": function() { return /* binding */ ThemeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.service */ 880);
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.directive */ 4357);
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbols */ 3778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class ThemeModule {
    static forRoot(options) {
        return {
            ngModule: ThemeModule,
            providers: [
                {
                    provide: _symbols__WEBPACK_IMPORTED_MODULE_2__.THEMES,
                    useValue: options.themes
                },
                {
                    provide: _symbols__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_THEME,
                    useValue: options.active
                }
            ]
        };
    }
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [_theme_directive__WEBPACK_IMPORTED_MODULE_1__.ThemeDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_theme_directive__WEBPACK_IMPORTED_MODULE_1__.ThemeDirective] }); })();


/***/ }),

/***/ 880:
/*!****************************************!*\
  !*** ./src/app/theme/theme.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": function() { return /* binding */ ThemeService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols */ 3778);



class ThemeService {
    constructor(themes, theme) {
        this.themes = themes;
        this.theme = theme;
        this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    getTheme(name) {
        const theme = this.themes.find(t => t.name === name);
        if (!theme) {
            throw new Error(`Theme not found: '${name}'`);
        }
        return theme;
    }
    getActiveTheme() {
        return this.getTheme(this.theme);
    }
    getProperty(propName) {
        return this.getActiveTheme().properties[propName];
    }
    setTheme(name) {
        this.theme = name;
        this.themeChange.emit(this.getActiveTheme());
    }
    registerTheme(theme) {
        this.themes.push(theme);
    }
    updateTheme(name, properties) {
        const theme = this.getTheme(name);
        theme.properties = Object.assign(Object.assign({}, theme.properties), properties);
        if (name === this.theme) {
            this.themeChange.emit(theme);
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_symbols__WEBPACK_IMPORTED_MODULE_0__.THEMES), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_symbols__WEBPACK_IMPORTED_MODULE_0__.ACTIVE_THEME)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map