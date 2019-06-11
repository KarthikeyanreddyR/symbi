(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/parent-dashboard/parent-dashboard.component */ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.ts");
/* harmony import */ var _components_dashboard_caregiver_dashboard_caregiver_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/caregiver-dashboard/caregiver-dashboard.component */ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.ts");
/* harmony import */ var _components_job_job_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/job/job.component */ "./src/app/components/job/job.component.ts");
/* harmony import */ var _components_search_caregiver_search_caregiver_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search-caregiver/search-caregiver.component */ "./src/app/components/search-caregiver/search-caregiver.component.ts");
/* harmony import */ var _components_schedule_caregiver_schedule_caregiver_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/schedule-caregiver/schedule-caregiver.component */ "./src/app/components/schedule-caregiver/schedule-caregiver.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
















var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'landing', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["LandingPageComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'review', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"] },
    { path: 'profile', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'dashboard/parent', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_dashboard_parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ParentDashboardComponent"] },
    { path: 'dashboard/caregiver', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_dashboard_caregiver_dashboard_caregiver_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["CaregiverDashboardComponent"] },
    { path: 'jobs', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_job_job_component__WEBPACK_IMPORTED_MODULE_10__["JobComponent"] },
    { path: 'caregivers', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_search_caregiver_search_caregiver_component__WEBPACK_IMPORTED_MODULE_11__["SearchCaregiverComponent"] },
    { path: 'caregivers/schedule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], component: _components_schedule_caregiver_schedule_caregiver_component__WEBPACK_IMPORTED_MODULE_12__["ScheduleCaregiverComponent"] },
    { path: 'unauthorized', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], data: { type: 'Unauthorized' } },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], data: { type: 'PageNotFound' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <app-navbar></app-navbar>\r\n</header>\r\n<main role=\"main\" class=\"flex-shrink-0\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<!-- <footer class=\"footer mt-auto py-3 bg-dark fixed-bottom text-white\">\r\n    <div class=\"container-fluid\">\r\n        <span><i class=\"fa fa-copyright\"></i> 2019 Symbii, Group F, CPSC 5240 19SQ, Seattle University</span>\r\n    </div>\r\n</footer> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_dashboard_parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/parent-dashboard/parent-dashboard.component */ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.ts");
/* harmony import */ var _components_dashboard_caregiver_dashboard_caregiver_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dashboard/caregiver-dashboard/caregiver-dashboard.component */ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_job_job_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/job/job.component */ "./src/app/components/job/job.component.ts");
/* harmony import */ var _components_job_post_open_job_post_open_job_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/job/post-open-job/post-open-job.component */ "./src/app/components/job/post-open-job/post-open-job.component.ts");
/* harmony import */ var _components_review_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/review/post-review/post-review.component */ "./src/app/components/review/post-review/post-review.component.ts");
/* harmony import */ var _components_search_caregiver_search_caregiver_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search-caregiver/search-caregiver.component */ "./src/app/components/search-caregiver/search-caregiver.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_common_utils_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/common-utils.service */ "./src/app/services/common-utils.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _shared_directives_app_password_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/directives/app-password.directive */ "./src/app/shared/directives/app-password.directive.ts");
/* harmony import */ var _components_schedule_caregiver_schedule_caregiver_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/schedule-caregiver/schedule-caregiver.component */ "./src/app/components/schedule-caregiver/schedule-caregiver.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");

// core modules











// components















// services





// directives



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _shared_directives_app_password_directive__WEBPACK_IMPORTED_MODULE_32__["AppPasswordDirective"],
                _components_review_review_component__WEBPACK_IMPORTED_MODULE_17__["ReviewComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_19__["LandingPageComponent"],
                _components_dashboard_parent_dashboard_parent_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["ParentDashboardComponent"],
                _components_dashboard_caregiver_dashboard_caregiver_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["CaregiverDashboardComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["SidebarComponent"],
                _components_job_job_component__WEBPACK_IMPORTED_MODULE_23__["JobComponent"],
                _components_job_post_open_job_post_open_job_component__WEBPACK_IMPORTED_MODULE_24__["PostOpenJobComponent"],
                _components_review_post_review_post_review_component__WEBPACK_IMPORTED_MODULE_25__["PostReviewComponent"],
                _components_search_caregiver_search_caregiver_component__WEBPACK_IMPORTED_MODULE_26__["SearchCaregiverComponent"],
                _components_schedule_caregiver_schedule_caregiver_component__WEBPACK_IMPORTED_MODULE_33__["ScheduleCaregiverComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_34__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"].forRoot(),
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_9__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                })
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_27__["ValidateService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_28__["UserService"],
                _services_job_service__WEBPACK_IMPORTED_MODULE_29__["JobService"],
                _services_common_utils_service__WEBPACK_IMPORTED_MODULE_30__["CommonUtilsService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            exports: [_shared_directives_app_password_directive__WEBPACK_IMPORTED_MODULE_32__["AppPasswordDirective"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-main {\r\n    background-color: ghostwhite;\r\n    margin: 1px 0 0 0;\r\n  }\r\n  \r\n  #dashboard-sidebar {\r\n    /* background-color: aquamarine; */\r\n    margin: 1px 0 0 0;\r\n    padding: 1px 5px 1px 5px;\r\n  }\r\n  \r\n  #caregiver-dashboard {\r\n    /* background-color: yellow; */\r\n    margin: -25px 0 0 0 ;\r\n    padding: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .btn-primary {\r\n    margin: 10px 0 15px 0;\r\n    width: auto;\r\n  }\r\n  \r\n  .col-md-2 {\r\n    margin: 15px 0 15px 0;\r\n    padding: 10px 5px 10px 5px;\r\n  }\r\n  \r\n  .dashboard-item {\r\n    align-content: center;\r\n    background-color: azure;\r\n    border-color: black;\r\n    border-style: outset;\r\n    border-width: thin;\r\n    width: 100% auto;\r\n  }\r\n  \r\n  .data-portal {\r\n    font-size: 1vw;\r\n    font-style: normal;\r\n  }\r\n  \r\n  .input-job-id {\r\n    margin: 0 auto;\r\n    width: 75%;\r\n  }\r\n  \r\n  .item-label {\r\n    font-size: 1.5vw;\r\n    margin: 1px;\r\n    width: auto;\r\n  }\r\n  \r\n  .left-hand-list {\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .sidebar-content {\r\n    /* background-color: chartreuse; */\r\n    /* border-color: black;\r\n    border-style: solid;\r\n    border-width: 0 thin 0 0; */\r\n    font-size: 1vw;\r\n    margin: 0;\r\n    padding: 1px 2px 1px 2px;\r\n  }\r\n  \r\n  .sidebar-logo {\r\n    color: palevioletred;\r\n    font-family: 'Dancing Script', cursive;\r\n    font-size: 2vw;\r\n    margin: 5px 0 5px 0;\r\n    padding: 1px 2px 1px 2px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .text-body {\r\n    font-size: 2vw;\r\n    text-align: center;\r\n    font-style: italic;\r\n  }\r\n  \r\n  .title {\r\n    font-family: 'Dancing Script', cursive;\r\n    font-size: 3vw;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY2FyZWdpdmVyLWRhc2hib2FyZC9jYXJlZ2l2ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEM7OytCQUUyQjtJQUMzQixjQUFjO0lBQ2QsU0FBUztJQUNULHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NhcmVnaXZlci1kYXNoYm9hcmQvY2FyZWdpdmVyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rhc2hib2FyZC1tYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgICBtYXJnaW46IDFweCAwIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2Rhc2hib2FyZC1zaWRlYmFyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXHJcbiAgICBtYXJnaW46IDFweCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgI2NhcmVnaXZlci1kYXNoYm9hcmQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xyXG4gICAgbWFyZ2luOiAtMjVweCAwIDAgMCA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxNXB4IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNvbC1tZC0yIHtcclxuICAgIG1hcmdpbjogMTVweCAwIDE1cHggMDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWl0ZW0ge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICB3aWR0aDogMTAwJSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZGF0YS1wb3J0YWwge1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtam9iLWlkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0LWhhbmQtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1jb250ZW50IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7ICovXHJcbiAgICAvKiBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCB0aGluIDAgMDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMXB4IDJweCAxcHggMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1sb2dvIHtcclxuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxcHggMnB4IDFweCAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWJvZHkge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--   ***   Dual Dual Column layout for dashboard calendar   ***   -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\" id=\"caregiver-dashboard\">\r\n    <div class=\"col-md-2\" id=\"dashboard-sidebar\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"col-md-10\" id=\"dashboard-main\">\r\n      <div class=\"row\" id=\"calendar-row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"btn-group\">\r\n                <div\r\n                  class=\"btn btn-primary\"\r\n                  mwlCalendarPreviousView\r\n                  [view]=\"view\"\r\n                  [(viewDate)]=\"viewDate\"\r\n                  (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n                >\r\n                  Previous\r\n                </div>\r\n                <div\r\n                  class=\"btn btn-primary\"\r\n                  mwlCalendarToday\r\n                  [(viewDate)]=\"viewDate\"\r\n                >\r\n                  Today\r\n                </div>\r\n                <div\r\n                  class=\"btn btn-primary\"\r\n                  mwlCalendarNextView\r\n                  [view]=\"view\"\r\n                  [(viewDate)]=\"viewDate\"\r\n                  (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n                >\r\n                  Next\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"btn-group\">\r\n                <div\r\n                  class=\"btn btn-primary\"\r\n                  (click)=\"setView(CalendarView.Month)\"\r\n                  [class.active]=\"view === CalendarView.Month\"\r\n                >\r\n                  Month\r\n                </div>\r\n                <div\r\n                  class=\"btn btn-primary\"\r\n                  (click)=\"setView(CalendarView.Week)\"\r\n                  [class.active]=\"view === CalendarView.Week\"\r\n                >\r\n                  Week\r\n                </div>\r\n                <div\r\n                  class=\"btn btn-primary\"\r\n                  (click)=\"setView(CalendarView.Day)\"\r\n                  [class.active]=\"view === CalendarView.Day\"\r\n                >\r\n                  Day\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n          <div class=\"row\" id=\"calendar-row\">\r\n            <div class=\"col-md-12\" id=\"calendar-main\">\r\n              <!-- <div *ngIf=\"events$ | async; else loading; let events\"> -->\r\n                <div [ngSwitch]=\"view\">\r\n                  <mwl-calendar-month-view\r\n                    *ngSwitchCase=\"CalendarView.Month\"\r\n                    [viewDate]=\"viewDate\"\r\n                    [events]=\"events\"\r\n                    [refresh]=\"refresh\"\r\n                    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                    (dayClicked)=\"dayClicked($event.day)\"\r\n                    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n                    (columnHeaderClicked)=\"clickedColumn = $event\"\r\n                    (dayClicked)=\"clickedDate = $event.day.date\"\r\n                  >\r\n                  </mwl-calendar-month-view>\r\n                  <mwl-calendar-week-view\r\n                    *ngSwitchCase=\"CalendarView.Week\"\r\n                    [viewDate]=\"viewDate\"\r\n                    [events]=\"events\"\r\n                    [refresh]=\"refresh\"\r\n                    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n                    (dayHeaderClicked)=\"clickedDate = $event.day.date\"\r\n                    (hourSegmentClicked)=\"clickedDate = $event.date\"\r\n                  >\r\n                  </mwl-calendar-week-view>\r\n                  <mwl-calendar-day-view\r\n                    *ngSwitchCase=\"CalendarView.Day\"\r\n                    [viewDate]=\"viewDate\"\r\n                    [events]=\"events\"\r\n                    [refresh]=\"refresh\"\r\n                    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n                    (hourSegmentClicked)=\"clickedDate = $event.date\"\r\n                  >\r\n                  </mwl-calendar-day-view>\r\n                </div>\r\n              <!-- </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <br /><br /><br />\r\n            <h3>\r\n              Edit events\r\n              <button class=\"btn btn-primary pull-right\" (click)=\"addEvent()\">\r\n                Add new\r\n              </button>\r\n              <div class=\"clearfix\"></div>\r\n            </h3>\r\n            \r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Title</th>\r\n                    <th>Primary color</th>\r\n                    <th>Secondary color</th>\r\n                    <th>Starts at</th>\r\n                    <th>Ends at</th>\r\n                    <th>Submit</th>\r\n                    <th>Remove</th>\r\n                  </tr>\r\n                </thead>\r\n            \r\n                <tbody>\r\n                  <tr *ngFor=\"let event of events\">\r\n                    <td>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        [(ngModel)]=\"event.title\"\r\n                        (keyup)=\"refresh.next()\"\r\n                      />\r\n                    </td>\r\n                    <td>\r\n                      <input\r\n                        type=\"color\"\r\n                        [(ngModel)]=\"event.color.primary\"\r\n                        (change)=\"refresh.next()\"\r\n                      />\r\n                    </td>\r\n                    <td>\r\n                      <input\r\n                        type=\"color\"\r\n                        [(ngModel)]=\"event.color.secondary\"\r\n                        (change)=\"refresh.next()\"\r\n                      />\r\n                    </td>\r\n                    <td>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        type=\"text\"\r\n                        mwlFlatpickr\r\n                        [(ngModel)]=\"event.start\"\r\n                        (ngModelChange)=\"refresh.next()\"\r\n                        [altInput]=\"true\"\r\n                        [convertModelValue]=\"true\"\r\n                        [enableTime]=\"true\"\r\n                        dateFormat=\"Y-m-dTH:i\"\r\n                        altFormat=\"F j, Y H:i\"\r\n                        placeholder=\"Not set\"\r\n                      />\r\n                    </td>\r\n                    <td>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        type=\"text\"\r\n                        mwlFlatpickr\r\n                        [(ngModel)]=\"event.end\"\r\n                        (ngModelChange)=\"refresh.next()\"\r\n                        [altInput]=\"true\"\r\n                        [convertModelValue]=\"true\"\r\n                        [enableTime]=\"true\"\r\n                        dateFormat=\"Y-m-dTH:i\"\r\n                        altFormat=\"F j, Y H:i\"\r\n                        placeholder=\"Not set\"\r\n                      />\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-primary\" (click)=\"postOpenJob()\">\r\n                        Submit\r\n                      </button>\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">\r\n                        Delete\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"alert alert-info\">\r\n                Click on a day or time slot on the view.\r\n                <strong *ngIf=\"clickedDate\"\r\n                  >You clicked on this time: {{ clickedDate | date:'medium' }}</strong\r\n                >\r\n                <strong *ngIf=\"clickedColumn != null\"\r\n                  >You clicked on this column: {{ clickedColumn }}</strong\r\n                >\r\n              </div>\r\n            \r\n            <!-- <ng-template #modalContent let-close=\"close\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Event action occurred</h5>\r\n                <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div>\r\n                  Action:\r\n                  <pre>{{ modalData?.action }}</pre>\r\n                </div>\r\n                <div>\r\n                  Event:\r\n                  <pre>{{ modalData?.event | json }}</pre>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n                  OK\r\n                </button>\r\n              </div>\r\n            </ng-template> -->\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CaregiverDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaregiverDashboardComponent", function() { return CaregiverDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
function getTimezoneOffsetString(date) {
    var timezoneOffset = date.getTimezoneOffset();
    var hoursOffset = String(Math.floor(Math.abs(timezoneOffset / 60))).padStart(2, '0');
    var minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
    var direction = timezoneOffset > 0 ? '-' : '+';
    return "T00:00:00" + direction + hoursOffset + ":" + minutesOffset;
}
var CaregiverDashboardComponent = /** @class */ (function () {
    function CaregiverDashboardComponent(modal, http) {
        var _this = this;
        this.modal = modal;
        this.http = http;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    CaregiverDashboardComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    CaregiverDashboardComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    CaregiverDashboardComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CaregiverDashboardComponent.prototype.addEvent = function () {
        this.events = this.events.concat([
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ]);
    };
    CaregiverDashboardComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    CaregiverDashboardComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CaregiverDashboardComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CaregiverDashboardComponent.prototype.ngOnInit = function () {
        this.fetchEvents();
    };
    CaregiverDashboardComponent.prototype.fetchEvents = function () {
        var getStart = {
            month: date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfMonth"],
            week: date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfWeek"],
            day: date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"]
        }[this.view];
        var getEnd = {
            month: date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"],
            week: date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfWeek"],
            day: date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"]
        }[this.view];
        // viewDate: Date = new Date();
        // events = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CaregiverDashboardComponent.prototype, "modalContent", void 0);
    CaregiverDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-caregiver-dashboard',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./caregiver-dashboard.component.html */ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./caregiver-dashboard.component.css */ "./src/app/components/dashboard/caregiver-dashboard/caregiver-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CaregiverDashboardComponent);
    return CaregiverDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-main {\r\n  background-color: ghostwhite;\r\n  margin: 1px 0 0 0;\r\n}\r\n\r\n#dashboard-sidebar {\r\n  /* background-color: aquamarine; */\r\n  margin: 1px 0 0 0;\r\n  padding: 1px 5px 1px 5px;\r\n}\r\n\r\n#parent-dashboard {\r\n  /* background-color: yellow; */\r\n  margin: -25px 0 0 0 ;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.btn-primary {\r\n  margin: 10px 0 15px 0;\r\n}\r\n\r\n.col-md-2 {\r\n  margin: 15px 0 15px 0;\r\n  padding: 10px 5px 10px 5px;\r\n}\r\n\r\n.dashboard-item {\r\n  background-color: azure;\r\n  border-color: black;\r\n  border-style: outset;\r\n  border-width: thin;\r\n}\r\n\r\n.data-portal {\r\n  font-size: 1vw;\r\n  font-style: normal;\r\n}\r\n\r\n.item-label {\r\n  font-size: 1.5vw;\r\n  margin: 1px;\r\n}\r\n\r\n.left-hand-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.sidebar-content {\r\n  /* background-color: chartreuse; */\r\n  /* border-color: black;\r\n  border-style: solid;\r\n  border-width: 0 thin 0 0; */\r\n  font-size: 1vw;\r\n  margin: 0;\r\n  padding: 1px 2px 1px 2px;\r\n}\r\n\r\n.sidebar-logo {\r\n  color: palevioletred;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 2vw;\r\n  margin: 5px 0 5px 0;\r\n  padding: 1px 2px 1px 2px;\r\n  text-align: center;\r\n}\r\n\r\n.text-body {\r\n  font-size: 2vw;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n.title {\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 3vw;\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcGFyZW50LWRhc2hib2FyZC9wYXJlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDOzs2QkFFMkI7RUFDM0IsY0FBYztFQUNkLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9wYXJlbnQtZGFzaGJvYXJkL3BhcmVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXNoYm9hcmQtbWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxuICBtYXJnaW46IDFweCAwIDAgMDtcclxufVxyXG5cclxuI2Rhc2hib2FyZC1zaWRlYmFyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xyXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xyXG4gIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcclxufVxyXG5cclxuI3BhcmVudC1kYXNoYm9hcmQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cclxuICBtYXJnaW46IC0yNXB4IDAgMCAwIDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbjogMTBweCAwIDE1cHggMDtcclxufVxyXG5cclxuLmNvbC1tZC0yIHtcclxuICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XHJcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbn1cclxuXHJcbi5kYXRhLXBvcnRhbCB7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uaXRlbS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjV2dztcclxuICBtYXJnaW46IDFweDtcclxufVxyXG5cclxuLmxlZnQtaGFuZC1saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZGViYXItY29udGVudCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsgKi9cclxuICAvKiBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIHRoaW4gMCAwOyAqL1xyXG4gIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxcHggMnB4IDFweCAycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28ge1xyXG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgcGFkZGluZzogMXB4IDJweCAxcHggMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtYm9keSB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDN2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--   ***   Nested Dual Column layout for dashboard options   ***   -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\" id=\"parent-dashboard\">\r\n    <div class=\"col-md-2\" id=\"dashboard-sidebar\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"col-md-10\" id=\"dashboard-main\">\r\n      <div class=\"row\" id=\"calendar-row\">\r\n        <div class=\"col-md-12\"><mwl-calendar-month-view [viewDate]=\"viewDate\" [events]=\"events\"></mwl-calendar-month-view></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ParentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentDashboardComponent", function() { return ParentDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParentDashboardComponent = /** @class */ (function () {
    function ParentDashboardComponent() {
        this.viewDate = new Date();
        this.events = [];
    }
    ParentDashboardComponent.prototype.ngOnInit = function () { };
    ParentDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent-dashboard',
            template: __webpack_require__(/*! ./parent-dashboard.component.html */ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./parent-dashboard.component.css */ "./src/app/components/dashboard/parent-dashboard/parent-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParentDashboardComponent);
    return ParentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"type === 'Unauthorized'\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Unauthorized access</h1>\n    <p class=\"lead\"><a [routerLink]=\"['/login']\" routerLinkActive=\"\">Login</a> from here to gain access</p>\n  </div>\n</div>\n\n<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"type === 'PageNotFound'\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Page not found</h1>\n    <p class=\"lead\"><a [routerLink]=\"['/login']\" routerLinkActive=\"\">Click</a> here to navigate to home page</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.route = route;
        this.type = 'PageNotFound';
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.data.subscribe(function (res) {
            console.log(res);
            _this.type = res.type;
        });
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    font-size: 18vw;\r\n    text-align: center;\r\n    font-family: 'Dancing Script', cursive;\r\n}\r\n\r\n.text-body{\r\n    font-size: 3vw;\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxOHZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi50ZXh0LWJvZHl7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--   ***   Main Body layout   ***   -->\r\n<div class=\"container-fluid jumbotron-fluid\">\r\n  <div class=\"title\">\r\n        Symbii\r\n    </div>\r\n    <div class=\"text-body\">\r\n      Better Scheduling for Parents and Caregivers\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userservice) {
        this.userservice = userservice;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userservice.GetSignedInUser().then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/job/job.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/job/job.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  transition: box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2Ivam9iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qb2Ivam9iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjE1KSFpbXBvcnRhbnRcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/job/job.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/job/job.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\" id=\"dashboard-sidebar\">\n      <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <h2 class=\"d-inline\">Jobs</h2>\n      <div class=\"float-right\">\n        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#openjobModal\">Post open job</button>\n      </div>\n      <div class=\"clearfix\"></div>\n      <br>\n      <div class=\"alert alert-danger\" *ngIf=\"fetchError\">\n        Unknown error occurred. please try again.\n      </div>\n      <div class=\"alert alert-info\" *ngIf=\"!jobs$ || jobs$.length === 0\">\n        No jobs\n      </div>\n      <div class=\"float-right\">\n        <button class=\"btn btn-outline-light text-dark\" (click)=\"fetchData()\">Refresh</button>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"card my-3\" *ngFor=\"let job of jobs$\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-5 text-break\">\n                <h5 class=\"card-title text-break font-weight-bold\">{{job.jobName}}</h5>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <span>Job Type : </span><span class=\"font-italic badge badge-pill badge-warning\">{{getJobType(job.jobType)  | titlecase}}</span>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <span>Job Status : </span><span class=\"font-italic badge badge-pill badge-success\">{{getJobStatus(job.jobStatus)  | titlecase}}</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <span>Job Start Date : </span><span class=\"font-italic font-weight-light ml-2\">{{job.jobStartTime}}</span>\n            </div>\n            <div class=\"col-md-6\">\n                <span>Job End Date : </span><span class=\"font-italic font-weight-light ml-2\">{{job.jobEndTime}}</span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 text-break mt-3\">\n                <span>Job Notes : </span>\n                <p class=\"font-italic font-weight-light\">{{job.jobNotes ? job.jobNotes : N/A}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"openjobModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-xl modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <app-post-open-job></app-post-open-job>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/job/job.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/job/job.component.ts ***!
  \*************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/enums */ "./src/app/shared/models/enums.ts");






var JobComponent = /** @class */ (function () {
    function JobComponent(jobService, commonUtilsService) {
        var _this = this;
        this.jobService = jobService;
        this.commonUtilsService = commonUtilsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        var self = this;
        this.subscription.add(this.commonUtilsService.signedInUser$.subscribe(function (res) {
            _this.loggedInUser = res;
        }, function (err) {
            // error handling
        }));
    }
    JobComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    JobComponent.prototype.fetchData = function () {
        var _this = this;
        this.jobService.getAllJobsForUser(this.loggedInUser['_id']).then(function (res) {
            if (res.success) {
                _this.jobs$ = res.data;
            }
        }, function (err) {
            // error handling
            console.log(err);
            _this.fetchError = true;
        });
    };
    JobComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    };
    JobComponent.prototype.getJobType = function (type) {
        return src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_5__["JobType"][type];
    };
    JobComponent.prototype.getJobStatus = function (type) {
        return src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_5__["JobStatus"][type];
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/components/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/components/job/job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"]])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/components/job/post-open-job/post-open-job.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/job/post-open-job/post-open-job.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2IvcG9zdC1vcGVuLWpvYi9wb3N0LW9wZW4tam9iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pvYi9wb3N0LW9wZW4tam9iL3Bvc3Qtb3Blbi1qb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/job/post-open-job/post-open-job.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/job/post-open-job/post-open-job.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"main-col\">\n    <h3>Post open Job</h3>\n    <form (submit)=\"postOpenJob()\" [formGroup]=\"postOpenJobForm\">\n      <div class=\"form-row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label for=\"title\">Job name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"jobName\">\n            <div *ngIf=\"jobName.invalid && (jobName.dirty || jobName.touched)\" class=\"text-danger\">\n                <div *ngIf=\"jobName.errors.required\">\n                  Job name is required\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"startDate\">Start date-time</label>\n            <div class=\"input-group date\" id=\"startDate\" data-target-input=\"nearest\">\n              <div class=\"input-group-prepend\" data-target=\"#startDate\" data-toggle=\"datetimepicker\">\n                <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\n              </div>\n              <input type=\"text\" class=\"form-control datetimepicker-input\" data-target=\"#startDate\"\n                formControlName=\"jobStartTime\" />\n            </div>\n          </div>\n          <div *ngIf=\"jobStartTime.invalid && (jobStartTime.dirty || jobStartTime.touched)\" class=\"text-danger\">\n              <div *ngIf=\"jobStartTime.errors.required\">\n                Job name is required\n              </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"endDate\">End date-time</label>\n            <div class=\"input-group date\" id=\"endDate\" data-target-input=\"nearest\">\n              <div class=\"input-group-prepend\" data-target=\"#endDate\" data-toggle=\"datetimepicker\">\n                <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\n              </div>\n              <input type=\"text\" class=\"form-control datetimepicker-input\" data-target=\"#endDate\"\n                formControlName=\"jobEndTime\" />\n            </div>\n          </div>\n          <div *ngIf=\"jobEndTime.invalid && (jobEndTime.dirty || jobEndTime.touched)\" class=\"text-danger\">\n              <div *ngIf=\"jobEndTime.errors.required\">\n                Job name is required\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label for=\"notes\"> Notes(optional) </label>\n            <textarea class=\"form-control\" id=\"notes\" cols=\"30\" rows=\"5\" formControlName=\"jobNotes\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-4\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!postOpenJobForm.valid\"> Post Job </button>\n        </div>\n      </div>\n    </form>\n    <div class=\"alert alert-success mt-3\" *ngIf=\"postSuccess\">\n      Job posted successfully.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/job/post-open-job/post-open-job.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/job/post-open-job/post-open-job.component.ts ***!
  \*************************************************************************/
/*! exports provided: PostOpenJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostOpenJobComponent", function() { return PostOpenJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var PostOpenJobComponent = /** @class */ (function () {
    function PostOpenJobComponent(formBuilder, jobService, commonUtilsService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.jobService = jobService;
        this.commonUtilsService = commonUtilsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.postOpenJobForm = this.formBuilder.group({
            jobName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            jobStartTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            jobEndTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            jobNotes: ['']
        });
        this.subscription.add(this.commonUtilsService.signedInUser$.subscribe(function (res) {
            _this.loggedInUser = res;
        }, function (err) {
            // error handling
        }));
    }
    Object.defineProperty(PostOpenJobComponent.prototype, "jobName", {
        get: function () {
            return this.postOpenJobForm.get('jobName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostOpenJobComponent.prototype, "jobStartTime", {
        get: function () {
            return this.postOpenJobForm.get('jobStartTime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostOpenJobComponent.prototype, "jobEndTime", {
        get: function () {
            return this.postOpenJobForm.get('jobEndTime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostOpenJobComponent.prototype, "jobNotes", {
        get: function () {
            return this.postOpenJobForm.get('jobNotes');
        },
        enumerable: true,
        configurable: true
    });
    PostOpenJobComponent.prototype.ngOnInit = function () {
        var self = this;
        $('#startDate').datetimepicker({
            sideBySide: true,
            locale: 'en',
            format: 'MM/DD/YYYY hh:mm A Z'
        });
        $('#endDate').datetimepicker({
            sideBySide: true,
            locale: 'en',
            format: 'MM/DD/YYYY hh:mm A Z'
        });
        $('#startDate').on("change.datetimepicker", function (e) {
            if (e.date) {
                var _d = e.date.format('MM/DD/YYYY hh:mm A Z');
                self.postOpenJobForm.patchValue({
                    jobStartTime: _d
                });
            }
        });
        $('#endDate').on("change.datetimepicker", function (e) {
            if (e.date) {
                var _d = e.date.format('MM/DD/YYYY hh:mm A Z');
                self.postOpenJobForm.patchValue({
                    jobEndTime: _d
                });
            }
        });
    };
    PostOpenJobComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.postOpenJobForm.reset();
        this.postSuccess = false;
    };
    PostOpenJobComponent.prototype.postOpenJob = function () {
        var _this = this;
        this.postSuccess = false;
        var job = {
            userId: this.loggedInUser['_id'],
            createdAt: new Date().toDateString()
        };
        job = Object.assign({}, job, this.postOpenJobForm.value);
        this.jobService.postOpenJob(job).then(function (res) {
            if (res.success) {
                _this.postSuccess = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    PostOpenJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-open-job',
            template: __webpack_require__(/*! ./post-open-job.component.html */ "./src/app/components/job/post-open-job/post-open-job.component.html"),
            styles: [__webpack_require__(/*! ./post-open-job.component.css */ "./src/app/components/job/post-open-job/post-open-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_4__["CommonUtilsService"]])
    ], PostOpenJobComponent);
    return PostOpenJobComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-custom {\r\n  cursor: pointer;\r\n  transition: box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.card-custom:hover {\r\n  box-shadow: 5px 6px 10px 0px #ddd;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jdXN0b20ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkLWN1c3RvbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDZweCAxMHB4IDBweCAjZGRkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div id=\"landingPage\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-xl modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body container\">\r\n          <div>\r\n            <h3>Please choose a profile type for this session:</h3>\r\n            <!--   ***   Dual Column layout for profile options   ***   -->\r\n            <div class=\"row\" style=\"padding: 1rem 0;\">\r\n              <div class=\"col-6\">\r\n                <div class=\"left-col\">\r\n                  <div class=\"card card-custom\" (click)=\"openDashboard(0)\">\r\n                    <div class=\"card-body\">\r\n                      <h5 class=\"card-title\">Proceed as a Parent</h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"right-col\">\r\n                  <div class=\"card card-custom\" (click)=\"openDashboard(1)\">\r\n                    <div class=\"card-body\">\r\n                      <h5 class=\"card-title\">Proceed as a Caregiver</h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");





var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router, userService, commonUtilsService) {
        this.router = router;
        this.userService = userService;
        this.commonUtilsService = commonUtilsService;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.GetSignedInUser().then(function (res) {
            if (res.success) {
                _this.commonUtilsService.changeSignedInUser(res.data);
            }
            else {
                _this.commonUtilsService.changeSignedInUser(null);
            }
            _this.showLandingPage();
        }, function (err) {
            if (err.status == 404) {
                _this.router.navigate(['/unauthorized']);
            }
            _this.commonUtilsService.changeSignedInUser(null);
        });
    };
    LandingPageComponent.prototype.ngOnDestroy = function () {
        this.hideLandingPage();
    };
    LandingPageComponent.prototype.openDashboard = function (userType) {
        if (userType === 0) {
            this.router.navigate(['/dashboard/parent']);
        }
        else if (userType === 1) {
            this.router.navigate(['/dashboard/caregiver']);
        }
        else {
            // no option
        }
        this.hideLandingPage();
    };
    LandingPageComponent.prototype.showLandingPage = function () {
        $('#landingPage').modal({
            backdrop: 'static'
        });
    };
    LandingPageComponent.prototype.hideLandingPage = function () {
        $('#landingPage').modal('hide');
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_4__["CommonUtilsService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"col-md-6 offset-md-3\">\r\n    <section>\r\n      <h2>Login</h2>\r\n      <form (submit)=\"onLoginSubmit()\" [formGroup]=\"loginForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></div>\r\n              </span>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\" required>\r\n          </div>\r\n          <div class=\"text-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n            <div *ngIf=\"email.errors.email\">\r\n              Invalid email format\r\n            </div>\r\n            <div *ngIf=\"email.errors.required\">\r\n              Email is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-lock\"></i></div>\r\n              </span>\r\n              <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\"\r\n              required appPassword>\r\n          </div>\r\n          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\r\n            <div *ngIf=\"password.errors.required\">\r\n              Password is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\r\n        <a [href]=\"googleLoginUrl\" class=\"ml-3\">\r\n          <img src=\"assets/images/btn_google_signin_dark_pressed_web.png\" alt=\"Login with Google\">\r\n        </a>\r\n\r\n      </form>\r\n      <hr>\r\n      <div>\r\n        <!-- <p>\r\n          <a href=\"javascript:void(0)\">Forgot password?</a>\r\n        </p> -->\r\n        <p>\r\n          New to Symbii? <a [routerLink]=\"['/signup']\">Sign up</a>\r\n        </p>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, userservice, route, router) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.googleLoginUrl = src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_5__["CommonUtilsService"].getAbsoluteUrl() + '/auth/google';
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this.userservice.loginUser(this.loginForm.value).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                // login successful
                _this.router.navigate(['/landing']);
            }
            else {
                // invalid credentials
            }
        }, function (err) {
            alert('error occured while login!!');
        }, function () {
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".has-search .form-control {\r\n    padding-left: 2.375rem;\r\n}\r\n  \r\n.has-search .form-control-feedback {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 50px;\r\n    height: 20px;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n}\r\n  \r\n.main {\r\n    width: 50%;\r\n    margin: 50px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcclxufVxyXG4gIFxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMzc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4 fixed-top\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" [routerLinkActive]=\"['active']\">SYMBII</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n    aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarCollapse\">\r\n    <div *ngIf=\"navbarCheck; else elseBlock\">\r\n      <ul class=\"navbar-nav\">\r\n        <li>\r\n          <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search caregivers...\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-secondary\" type=\"button\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n        </li>\r\n        <!-- Profile -->\r\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"fas fa-user\"></i> <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        \r\n        <!-- Parent Dashboard -->\r\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/parent']\" [routerLinkActive]=\"['active']\">\r\n              <i class=\"fas fa-home\"></i> <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n        </li>\r\n        <!-- Caregiver Dashboard-->\r\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/caregiver']\" [routerLinkActive]=\"['active']\">\r\n              <i class=\"fas fa-umbrella\"></i> <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n        </li>\r\n\r\n\r\n        <!-- Logout -->\r\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\r\n          <a (click)=\"logOut()\" class=\"nav-link\" [routerLink]=\"['/']\"> \r\n            <i class=\"fas fa-power-off\"></i>\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <ng-template #elseBlock>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">Login <span\r\n            class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n          <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/signup']\">Sign up <span\r\n              class=\"sr-only\">(current)</span>\r\n            </a>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n    \r\n    \r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, commonUtilsService) {
        this.userService = userService;
        this.commonUtilsService = commonUtilsService;
    }
    NavbarComponent.prototype.logOut = function () {
        this.commonUtilsService.changeSignedInUser(null);
        this.userService.logoutUser();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonUtilsService.signedInUser$.subscribe(function (res) {
            if (res == null) {
                _this.navbarCheck = false;
            }
            else {
                _this.navbarCheck = true;
            }
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__["CommonUtilsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.background {\r\n    background-color: #ffffff;\r\n    padding-left: 6vw;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n[class*=\"col\"] {\r\n    float:left;\r\n    padding: 15px;\r\n    margin: 3px;\r\n}\r\n\r\n.main-col{\r\n    border-style: solid;\r\n    border-width: thin;\r\n    border-color: #929292;\r\n}\r\n\r\n.sidebar{\r\n    float: right;\r\n}\r\n\r\n.sidebar-list{\r\n    list-style-type: none;\r\n}\r\n\r\n.profile-box {\r\n    height: 35vh;\r\n    text-align: center;\r\n    background-color: grey;\r\n}\r\n\r\n.info-title{\r\n    color: rgb(0, 0, 0);\r\n    font-weight: bolder;\r\n}\r\n\r\n.profile-tab{\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(0, 0, 0);\r\n    font-weight: bolder;\r\n    border-right-style: solid;\r\n    border-right-width: 2px;\r\n    border-right-color: transparent;\r\n}\r\n\r\n.profile-tab:hover{\r\n    background-color: rgb(206, 206, 206);\r\n    border-right-style: solid;\r\n    border-right-width: 2px;\r\n    border-right-color: rgb(122, 122, 122);\r\n}\r\n\r\n.profile-tab:active{\r\n    background-color: rgb(224, 222, 222);\r\n    border-right-style: solid;\r\n    border-right-width: 2px;\r\n    border-right-color: rgb(0, 0, 0);\r\n}\r\n\r\n.profile-tab:focus{\r\n    background-color: rgb(228, 228, 228);\r\n    border-right-style: solid;\r\n    border-right-width: 2px;\r\n    border-right-color: rgb(0, 0, 0);\r\n}\r\n\r\n.profile-info{\r\n    overflow: auto;\r\n    height: -webkit-fill-available;\r\n    background-color: rgb(250, 246, 246);\r\n}\r\n\r\n.profile-row{\r\n    background-color: white;\r\n    align-self: center;\r\n    height: 80vh;\r\n    width: 90vw;\r\n    padding: 0px;\r\n}\r\n\r\nspan.title {\r\n    font-weight: initial;\r\n    font-size: -webkit-xxx-large;\r\n}\r\n\r\n.edit-button{\r\n    float: right;\r\n    border-style: none;\r\n    width: auto;\r\n    background-color: transparent;\r\n    color: black;\r\n}\r\n\r\n.edit-button:active{\r\n    color: \r\n}\r\n\r\nbutton{\r\n    background-color: grey;\r\n    border-style: none;\r\n    border-width: 0px;\r\n    border-color: transparent;\r\n    width: -webkit-fill-available;\r\n    height: 50px;\r\n    margin-bottom: 5px;\r\n    float: right;\r\n}\r\n\r\n.list-group-item{\r\n    margin-bottom:1vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUEsNERBQTREOztBQUM1RDtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixzQ0FBc0M7QUFDMUM7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNnZ3O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbltjbGFzcyo9XCJjb2xcIl0ge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuLm1haW4tY29se1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogIzkyOTI5MjtcclxufVxyXG5cclxuLnNpZGViYXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxpc3R7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJveCB7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uaW5mby10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS10YWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnByb2ZpbGUtdGFiOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMTIyLCAxMjIsIDEyMik7XHJcbn1cclxuLnByb2ZpbGUtdGFiOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMiwgMjIyKTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcbi5wcm9maWxlLXRhYjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtaW5mb3tcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjQ2LCAyNDYpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5zcGFuLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAtd2Via2l0LXh4eC1sYXJnZTtcclxufVxyXG4uZWRpdC1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5lZGl0LWJ1dHRvbjphY3RpdmV7XHJcbiAgICBjb2xvcjogXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVte1xyXG4gICAgbWFyZ2luLWJvdHRvbToxdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background container-fluid\">\r\n   <div class=\"profile-row row\">\r\n     <!-- Left Col -->\r\n     <div class=\"col main-col\">\r\n       <div class=\"profile-info container\" [ngSwitch]=\"activeTab\">\r\n         <!-- Profile Box-->\r\n         <div *ngSwitchCase=\"0\">\r\n            <div>\r\n              <span class=\"title\">Basic Info</span>\r\n              <button class=\"btn btn-primary edit-button\">\r\n                <i class=\"fas fa-edit\"></i> Edit Info \r\n              </button> \r\n            </div>\r\n            <ul class=\"list-group rounded\">\r\n              <li class=\"list-group-item\"><span class=\"info-title\">Name:</span> {{user.firstName + \" \" + user.lastName}}</li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">Gender:</span> {{user.gender}}</li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">Email:</span> {{user.email}}</li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">Phone:</span> {{user.phoneNumber}}</li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">City:</span> {{user.address.city}}</li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">State:</span> {{user.address.state}}</li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">Bio:</span> {{user.bio}}</li>\r\n            </ul>\r\n        </div>\r\n        <!-- Family Information -->\r\n        <div *ngSwitchCase=\"1\">\r\n            <div>\r\n                <span class=\"title\">Family</span>\r\n                <button class=\"btn btn-primary edit-button\">\r\n                  <i class=\"fas fa-edit\"></i> Edit Family \r\n                </button> \r\n              </div>\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item\">\r\n                <span class=\"info-title\">Children:</span> \r\n                {{user.profiles[0].family.children}}\r\n              </li>\r\n              <li class=\"list-group-item\"><span class=\"info-title\">Pets:</span> {{user.profiles[0].family.pets}}</li>\r\n              <li class=\"list-group-item\">\r\n                <span class=\"info-title\">House Rules:</span> \r\n                <p *ngFor=\"let rules of user.profiles[0].houseRules\">{{rules}}</p>\r\n              </li>\r\n            </ul>\r\n        </div>\r\n        <!-- Experience Information-->\r\n        <div *ngSwitchCase=\"2\">\r\n            <div>\r\n              <span class=\"title\">Experience</span>\r\n                <button class=\"btn btn-primary edit-button\">\r\n                  <i class=\"fas fa-edit\"></i> Edit Experience \r\n                </button> \r\n              </div>\r\n            <ul class=\"list-group\" *ngFor=\"let exp of user.profiles[1].experience\">\r\n              <li class=\"list-group-item\">\r\n                <span class=\"info-title\">{{exp.jobPlace}}</span><br>\r\n                {{exp.jobDesignation}}<br>\r\n                {{exp.jobDescription}}<br>\r\n                {{exp.startDate}}<br>\r\n                {{exp.endDate}}\r\n              </li>\r\n            </ul>\r\n        </div>\r\n        <div *ngSwitchCase=\"3\">\r\n            <div>\r\n                <span class=\"title\">Payment Information</span>\r\n                <button class=\"btn btn-primary edit-button\">\r\n                  <i class=\"fas fa-edit\"></i> Edit Payments \r\n                </button> \r\n              </div>\r\n        </div>\r\n       </div>\r\n     </div>\r\n\r\n     <!-- Right Col -->\r\n     <div class=\"col-2 main-col\" style=\"color: black\">\r\n      <ul class=\"container sidebar sidebar-list\">\r\n        <li>\r\n          <button (click)=\"activeTab = 0\" class=\"profile-tab\">\r\n            Profile\r\n          </button>\r\n        </li>\r\n        <li>\r\n          <button (click)=\"activeTab = 1\" class=\"profile-tab\">\r\n            Family\r\n          </button>\r\n        </li>\r\n        <li>\r\n          <button (click)=\"activeTab = 2\" class=\"profile-tab\">\r\n            Experience\r\n          </button>\r\n        </li>\r\n        <li>\r\n          <button (click)=\"activeTab = 3\" class=\"profile-tab\">\r\n            Payments\r\n          </button>\r\n        </li>\r\n      </ul>\r\n     </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(commonUtilsService) {
        this.commonUtilsService = commonUtilsService;
        this.activeTab = 0; //Currently active tab
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonUtilsService.signedInUser$.subscribe(function (res) {
            _this.user = res;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__["CommonUtilsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/review/post-review/post-review.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/review/post-review/post-review.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star-rating, .back-stars, .front-stars {\r\n    display: flex;\r\n  }\r\n  \r\n  .star-rating {\r\n    align-items: center;\r\n    font-size: 3em;\r\n  }\r\n  \r\n  .back-stars {\r\n    color: #bb5252;\r\n    position: relative;\r\n    text-shadow: 4px 4px 10px #843a3a;\r\n  }\r\n  \r\n  .front-stars {\r\n    color: #FF9800;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    text-shadow: 2px 2px 5px #d29b09;\r\n    top: 0;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    font: 1rem 'Fira Sans', sans-serif;\r\n  }\r\n  \r\n  .form-control { width: 30%}\r\n  \r\n  input,\r\n  label {\r\n    margin: .4rem 0;\r\n  }\r\n  \r\n  .note {\r\n    font-size: .8em;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcG9zdC1yZXZpZXcvcG9zdC1yZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsTUFBTTtFQUNSOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtDQUFrQztFQUNwQzs7RUFFQSxnQkFBZ0IsVUFBVTs7RUFDMUI7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy9wb3N0LXJldmlldy9wb3N0LXJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXItcmF0aW5nLCAuYmFjay1zdGFycywgLmZyb250LXN0YXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFyLXJhdGluZyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLXN0YXJzIHtcclxuICAgIGNvbG9yOiAjYmI1MjUyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMTBweCAjODQzYTNhO1xyXG4gIH1cclxuICBcclxuICAuZnJvbnQtc3RhcnMge1xyXG4gICAgY29sb3I6ICNGRjk4MDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4ICNkMjliMDk7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udDogMXJlbSAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbCB7IHdpZHRoOiAzMCV9XHJcbiAgaW5wdXQsXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luOiAuNHJlbSAwO1xyXG4gIH1cclxuICBcclxuICAubm90ZSB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/review/post-review/post-review.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/review/post-review/post-review.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 50rem;\">\r\n    <div class=\"card-body\">\r\n      <div class=\"card-header\">\r\n        REVIEWS\r\n      </div>\r\n    <section class=\"container-fluid\">\r\n        <form (submit)=\"onReviewSubmit()\" [formGroup]=\"reviewForm\">\r\n            <div>\r\n              <div class=\"form-group\">\r\n                <label for=\"reviewTitle\">Review Title: </label>\r\n                <div class=\"col-sm-100\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Review Title\" required>\r\n                </div>\r\n              </div>\r\n             \r\n              \r\n              <div class=\"form-group\">\r\n        \r\n                \r\n                <a *ngFor=\"let item of starList; let i=index \" (click)=\"setStar(i)\">\r\n                  <i *ngIf=\"item\" class=\"far fa-star\"></i>\r\n                  <i *ngIf=\"!item\" class=\"fas fa-star\"></i>\r\n                </a>\r\n                <br>\r\n                \r\n        \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"reviewNotes\">Comments : </label>\r\n                <div>\r\n                  <input type=\"reviewNotes\" class=\"form-control\" formControlName=\"reviewNotes\" placeholder=\"Enter Comments (optional)\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!reviewForm.valid\">Submit</button>\r\n          </form>\r\n        </section>\r\n  \r\n        </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/review/post-review/post-review.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/review/post-review/post-review.component.ts ***!
  \************************************************************************/
/*! exports provided: PostReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReviewComponent", function() { return PostReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PostReviewComponent = /** @class */ (function () {
    function PostReviewComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.reviewForm = this.formBuilder.group({
            reviewerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            revieweeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reviewDate: [''],
            starRating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reviewNotes: ['']
        });
        this.starList = [true, true, true, true, true]; // create a list which contains status of 5 stars
    }
    PostReviewComponent.prototype.setStar = function (data) {
        this.rating = data + 1;
        for (var i = 0; i <= 4; i++) {
            if (i <= data) {
                this.starList[i] = false;
            }
            else {
                this.starList[i] = true;
            }
        }
    };
    PostReviewComponent.prototype.ngOnInit = function () {
    };
    PostReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-review',
            template: __webpack_require__(/*! ./post-review.component.html */ "./src/app/components/review/post-review/post-review.component.html"),
            styles: [__webpack_require__(/*! ./post-review.component.css */ "./src/app/components/review/post-review/post-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PostReviewComponent);
    return PostReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/review/review.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/review/review.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  transition: box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjE1KSFpbXBvcnRhbnRcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/review/review.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\" id=\"dashboard-sidebar\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <h5>Your Reviews</h5>\r\n      <div class=\"card my-3\" *ngFor=\"let r of reviews$\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-break\">{{r.reviewTitle}}</h5>\r\n          <div class=\"float-left\" style=\"width: 70%\">\r\n            <i>{{r.reviewDate}}</i>\r\n          </div>\r\n          <div class=\"float-right text-right\" style=\"width: 28%;\">\r\n            <span *ngFor=\"let s of getStartRatingsArray(r.starRating)\">\r\n              <i *ngIf=\"!s\" class=\"far fa-star\"></i>\r\n              <i *ngIf=\"s\" class=\"fas fa-star\"></i>\r\n            </span>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"text-break\">{{r.reviewNotes}}</div>\r\n          <div>\r\n              <button  type=\"button\" (click)=\"deleteReview(r)\" class=\"btn btn-info\" >Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(userservice) {
        this.userservice = userservice;
        this.reviews$ = [];
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.GetAllReviewsByUser("5ce3581d5fba742e68b35972").subscribe(function (res) {
            console.log(res);
            _this.reviews$ = res.data;
        }, function (err) {
            // error handling
            console.log(err);
        }, function () { });
    };
    ReviewComponent.prototype.getStartRatingsArray = function (rating) {
        var finArr = [false, false, false, false, false];
        for (var i = 0; i < rating; i++) {
            finArr[i] = true;
        }
        return finArr;
    };
    ReviewComponent.prototype.deleteReview = function (review) {
        var _this = this;
        this.userservice.DeleteReviewForUserByReviewId("5ce3581d5fba742e68b35972").subscribe(function (res) {
            console.log(res);
            _this.reviews$ = _this.reviews$.filter(function (review) { return review !== _this.reviews$; });
        }, function (err) {
            // error handling
            console.log(err);
        }, function () { });
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-review",
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/components/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/components/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule-caregiver/schedule-caregiver.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/schedule-caregiver/schedule-caregiver.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    transition: box-shadow 0.3s ease-in-out;\r\n  }\r\n  \r\n  .card:hover {\r\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1jYXJlZ2l2ZXIvc2NoZWR1bGUtY2FyZWdpdmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1jYXJlZ2l2ZXIvc2NoZWR1bGUtY2FyZWdpdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsMCwwLC4xNSkhaW1wb3J0YW50XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/schedule-caregiver/schedule-caregiver.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/schedule-caregiver/schedule-caregiver.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\" id=\"dashboard-sidebar\">\r\n          <app-sidebar></app-sidebar>\r\n        </div>\r\n\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n            <img class=\"card-img-top\" src=\"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\"> {{caregiver.firstName}} </h5>\r\n                <div class=\"card-text\" *ngIf=\"caregiver.address\">\r\n                    <span *ngIf=\"caregiver.address.addressLine1\">{{caregiver.address.addressLine1}}</span>\r\n                    <span *ngIf=\"caregiver.address.addressLine2\">, {{caregiver.address.addressLine2}}</span> <br>\r\n                    <span *ngIf=\"caregiver.address.city\">{{caregiver.address.city}}</span>\r\n                    <span *ngIf=\"caregiver.address.state\">, {{caregiver.address.state}}</span> <br>\r\n                    <span *ngIf=\"caregiver.address.country\">{{caregiver.address.country}}</span>\r\n                </div>\r\n                <a href=\"#\" class=\"btn btn-primary\">Schedule</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card ml-3\" style=\"width: 40rem;\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\"> About {{caregiver.firstName}}</h5>\r\n                {{caregiver.bio}}\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\"> Experience </h5>\r\n                <div *ngIf=\"caregiver.experience != null; else expBlock\">\r\n                    <div *ngFor=\"let exp of caregiver.experience\">\r\n                        <i>\r\n                            {{exp.jobPlace}}<br>\r\n                            {{exp.jobDesignation}}<br>\r\n                            {{exp.jobDescription}}<br>\r\n                            {{exp.startDate}}<br>\r\n                            {{exp.endDate}}\r\n                        </i>\r\n                    </div>\r\n                </div>\r\n                <ng-template #expBlock>\r\n                    This Caregiver has not added any experience\r\n                </ng-template>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\"> Reviews </h5>\r\n                <div class=\"modal-body container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div class=\"card my-3\" *ngFor=\"let review of caregiverReviews\">\r\n                                <div class=\"card-body card-text\">\r\n                                    <div class=\"float-left text-break\" style=\"width: 70%;\">\r\n                                        <strong>{{review.reviewTitle}}</strong> <br>\r\n                                        <i>{{review.reviewDate}}</i>\r\n                                    </div>\r\n                                    <div class=\"float-right\" style=\"width: 28%;\">\r\n                                        <span *ngFor=\"let s of getStartRatingsArray(review.starRating)\">\r\n                                            <i *ngIf=\"!s\" class=\"far fa-star\"></i>\r\n                                            <i *ngIf=\"s\" class=\"fas fa-star\"></i>\r\n                                            </span>\r\n                                    </div>\r\n                                    <div class=\"clearfix\"></div>\r\n                                    <div class=\"text-break\">{{review.reviewNotes}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"!caregiverReviews || caregiverReviews.length == 0\">\r\n                                <strong>No reviews found.</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/schedule-caregiver/schedule-caregiver.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/schedule-caregiver/schedule-caregiver.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ScheduleCaregiverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleCaregiverComponent", function() { return ScheduleCaregiverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ScheduleCaregiverComponent = /** @class */ (function () {
    function ScheduleCaregiverComponent(commonUtilsService, userService, router) {
        this.commonUtilsService = commonUtilsService;
        this.userService = userService;
        this.router = router;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ScheduleCaregiverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.commonUtilsService.scheduleCaregiver$.subscribe(function (res) {
            console.log(res);
            _this.caregiver = res;
        }));
    };
    ScheduleCaregiverComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    };
    ScheduleCaregiverComponent.prototype.getStarRatings = function (id) {
        var _arr = this.getReviewsForId(id).map(function (rev) {
            return rev["starRating"];
        });
        var totalRating = _arr.reduce(function (a, b) { return a + b; }, 0);
        var avgRating = Math.ceil(totalRating / 5);
        return this.getStartRatingsArray(avgRating);
    };
    ScheduleCaregiverComponent.prototype.getStartRatingsArray = function (rating) {
        var finArr = [false, false, false, false, false];
        for (var i = 0; i < rating; i++) {
            finArr[i] = true;
        }
        return finArr;
    };
    ScheduleCaregiverComponent.prototype.getReviewsForId = function (id) {
        return this.reviews$.filter(function (rev) {
            return rev["revieweeID"] == id;
        });
    };
    ScheduleCaregiverComponent.prototype.showDetailedReviews = function (id) {
        this.caregiverReviews = this.getReviewsForId(id);
    };
    ScheduleCaregiverComponent.prototype.scheduleCaregiver = function (user) {
        this.commonUtilsService.setCaregiver(user);
        this.router.navigate(["/caregivers/schedule"]);
    };
    ScheduleCaregiverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-caregiver',
            template: __webpack_require__(/*! ./schedule-caregiver.component.html */ "./src/app/components/schedule-caregiver/schedule-caregiver.component.html"),
            styles: [__webpack_require__(/*! ./schedule-caregiver.component.css */ "./src/app/components/schedule-caregiver/schedule-caregiver.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__["CommonUtilsService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ScheduleCaregiverComponent);
    return ScheduleCaregiverComponent;
}());



/***/ }),

/***/ "./src/app/components/search-caregiver/search-caregiver.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/search-caregiver/search-caregiver.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  transition: box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtY2FyZWdpdmVyL3NlYXJjaC1jYXJlZ2l2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1jYXJlZ2l2ZXIvc2VhcmNoLWNhcmVnaXZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsMCwwLC4xNSkhaW1wb3J0YW50XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/search-caregiver/search-caregiver.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-caregiver/search-caregiver.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\" id=\"dashboard-sidebar\">\n      <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <div class=\"alert alert-danger\" *ngIf=\"fetchError\">\n        Unknown error occurred. please try again.\n      </div>\n      <div class=\"alert alert-info\" *ngIf=\"!user$ || user$.length === 0\">\n        No caregivers\n      </div>\n      <div class=\"card my-3\" *ngFor=\"let user of user$\">\n        <div class=\"card-body\">\n          <div class=\"float-left text-break\" style=\"width: 70%;\">\n            <h5 class=\"card-title\">{{user.firstName}}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{user.bio}}</h6>\n            <div class=\"card-text\" *ngIf=\"user.address\">\n              <span *ngIf=\"user.address.addressLine1\">{{user.address.addressLine1}}</span>\n              <span *ngIf=\"user.address.addressLine2\">, {{user.address.addressLine2}}</span> <br>\n              <span *ngIf=\"user.address.city\">{{user.address.city}}</span>\n              <span *ngIf=\"user.address.state\">, {{user.address.state}}</span> <br>\n              <span *ngIf=\"user.address.country\">{{user.address.country}}</span>\n            </div>\n          </div>\n          <div class=\"float-right text-right\" style=\"width: 28%;\">\n            <span *ngFor=\"let s of getStarRatings(user._id)\">\n              <i *ngIf=\"!s\" class=\"far fa-star\"></i>\n              <i *ngIf=\"s\" class=\"fas fa-star\"></i>\n            </span>\n            <br>\n            <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#detailedReview\" class=\"card-link\" (click)=\"showDetailedReviews(user._id)\"><i\n                class=\"fas fa-comment\"></i> Reviews</a>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"float-right mt-3\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"scheduleCaregiver(user)\">Schedule</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"detailedReview\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Reviews</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"card my-3\" *ngFor=\"let review of userReviews$\">\n                <div class=\"card-body card-text\">\n                  <div class=\"float-left text-break\" style=\"width: 70%;\">\n                    <strong>{{review.reviewTitle}}</strong> <br>\n                    <i>{{review.reviewDate}}</i>\n                  </div>\n                  <div class=\"float-right\" style=\"width: 28%;\">\n                      <span *ngFor=\"let s of getStartRatingsArray(review.starRating)\">\n                          <i *ngIf=\"!s\" class=\"far fa-star\"></i>\n                          <i *ngIf=\"s\" class=\"fas fa-star\"></i>\n                        </span>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"text-break\">{{review.reviewNotes}}</div>\n                </div>\n              </div>\n              <div *ngIf=\"!userReviews$ || userReviews$.length == 0\">\n                <strong>No reviews found.</strong>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search-caregiver/search-caregiver.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/search-caregiver/search-caregiver.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchCaregiverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCaregiverComponent", function() { return SearchCaregiverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils.service */ "./src/app/services/common-utils.service.ts");





var SearchCaregiverComponent = /** @class */ (function () {
    function SearchCaregiverComponent(userService, commonUtilsService, router) {
        this.userService = userService;
        this.commonUtilsService = commonUtilsService;
        this.router = router;
    }
    SearchCaregiverComponent.prototype.ngOnInit = function () {
        this.LoadData();
    };
    SearchCaregiverComponent.prototype.LoadData = function () {
        var _this = this;
        this.fetchError = false;
        this.userService.GetAllCaregiversWithReviewData().subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.user$ = res.data["users"];
                _this.reviews$ = res.data["reviews"];
            }
            else {
                _this.user$ = [];
                _this.reviews$ = [];
            }
        }, function (err) {
            _this.fetchError = true;
        });
    };
    SearchCaregiverComponent.prototype.getStarRatings = function (id) {
        var _arr = this.getReviewsForId(id).map(function (rev) {
            return rev["starRating"];
        });
        var totalRating = _arr.reduce(function (a, b) { return a + b; }, 0);
        var avgRating = Math.ceil(totalRating / 5);
        return this.getStartRatingsArray(avgRating);
    };
    SearchCaregiverComponent.prototype.getStartRatingsArray = function (rating) {
        var finArr = [false, false, false, false, false];
        for (var i = 0; i < rating; i++) {
            finArr[i] = true;
        }
        return finArr;
    };
    SearchCaregiverComponent.prototype.getReviewsForId = function (id) {
        return this.reviews$.filter(function (rev) {
            return rev["revieweeID"] == id;
        });
    };
    SearchCaregiverComponent.prototype.showDetailedReviews = function (id) {
        this.userReviews$ = this.getReviewsForId(id);
    };
    SearchCaregiverComponent.prototype.scheduleCaregiver = function (user) {
        this.commonUtilsService.setCaregiver(user);
        this.router.navigate(["/caregivers/schedule"]);
    };
    SearchCaregiverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-caregiver",
            template: __webpack_require__(/*! ./search-caregiver.component.html */ "./src/app/components/search-caregiver/search-caregiver.component.html"),
            styles: [__webpack_require__(/*! ./search-caregiver.component.css */ "./src/app/components/search-caregiver/search-caregiver.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_common_utils_service__WEBPACK_IMPORTED_MODULE_4__["CommonUtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchCaregiverComponent);
    return SearchCaregiverComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-sidebar {\r\n  margin: 1px 0 0 0;\r\n  padding: 1px 5px 1px 5px;\r\n}\r\n\r\n.left-hand-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.sidebar-content {\r\n  font-size: 1vw;\r\n  margin: 0;\r\n  padding: 1px 2px 1px 2px;\r\n}\r\n\r\n.sidebar-logo {\r\n  color: palevioletred;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size: 2.5vw;\r\n  margin: 5px 0 5px 0;\r\n  padding: 1px 2px 1px 2px;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGFzaGJvYXJkLXNpZGViYXIge1xyXG4gIG1hcmdpbjogMXB4IDAgMCAwO1xyXG4gIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcclxufVxyXG5cclxuLmxlZnQtaGFuZC1saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZGViYXItY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDFweCAycHggMXB4IDJweDtcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyB7XHJcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxuICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gIHBhZGRpbmc6IDFweCAycHggMXB4IDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"sidebar-logo\">Symbii</div>\r\n  <div class=\"sidebar-content\">\r\n    <ul class=\"left-hand-list\">\r\n      <li><a [routerLink]=\"['/profile']\"><i class=\"fas fa-user-circle\"></i> My Profile</a></li>\r\n      <li><a [routerLink]=\"['/jobs']\"><i class=\"fas fa-suitcase\"></i> Jobs</a></li>\r\n      <li><a [routerLink]=\"['/review']\"><i class=\"fas fa-comment\"></i> Reviews</a></li>\r\n      <li><a [routerLink]=\"['/caregivers']\"><i class=\"fas fa-child\"></i> Caregivers</a></li>\r\n      <li><i class=\"fab fa-paypal\"></i> Payments</li>\r\n      <li><i class=\"fas fa-cog\"></i> Account Settings</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"col-md-6 offset-md-3\">\r\n    <section>\r\n      <h2>Sign up</h2>\r\n      <form (ngSubmit)=\"onSignupSubmit()\" [formGroup]=\"signUpForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Name</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter Name\" required>\r\n          </div>\r\n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"text-danger\">\r\n            <div *ngIf=\"name.errors.required\">\r\n              Name is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></div>\r\n            </span>\r\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\" required>\r\n          </div>\r\n          <div class=\"text-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n            <div *ngIf=\"email.errors.email\">\r\n              Invalid email format\r\n            </div>\r\n            <div *ngIf=\"email.errors.required\">\r\n              Email is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><i class=\"fas fa-lock\"></i></div>\r\n            </span>\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n              placeholder=\"Enter Password\" appPassword required>\r\n          </div>\r\n          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\r\n            <div *ngIf=\"password.errors.minlength || password.errors.maxlength\">\r\n              Password must be 8-16 characters in length\r\n            </div>\r\n            <div *ngIf=\"password.errors.required\">\r\n              Password is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signUpForm.valid\">Sign up</button>\r\n      </form>\r\n      <div class=\"alert alert-success mt-2\" *ngIf=\"registerSuccess\">\r\n        Successfully created account. <a [routerLink]=\"['/login']\">Login</a> to use Symbii.\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(validateService, formBuilder, userservice) {
        this.validateService = validateService;
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.signUpForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]]
        });
        this.registerSuccess = false;
    }
    Object.defineProperty(SignupComponent.prototype, "name", {
        get: function () {
            return this.signUpForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () {
            return this.signUpForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.signUpForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignupSubmit = function () {
        var _this = this;
        console.log(this.signUpForm.value);
        var _signupInfo = this.signUpForm.value;
        this.userservice.registerUser(_signupInfo).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                // registered success
                _this.registerSuccess = true;
            }
            else {
                // fail
            }
        }, function (err) {
            // error handling
        }, function () {
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-utils.service */ "./src/app/services/common-utils.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(commonUtilsService, router) {
        this.commonUtilsService = commonUtilsService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.commonUtilsService.signedInUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (!res) {
                return _this.router.parseUrl('/unauthorized');
            }
            else {
                return true;
            }
        }));
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/common-utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/common-utils.service.ts ***!
  \**************************************************/
/*! exports provided: CommonUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtilsService", function() { return CommonUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CommonUtilsService = /** @class */ (function () {
    function CommonUtilsService() {
        /**
         * Store logged in user.
         */
        this.signedInUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.signedInUser$ = this.signedInUser.asObservable();
        /**
         * Store caregiver info between components
         */
        this.scheduleCaregiver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.scheduleCaregiver$ = this.scheduleCaregiver.asObservable();
    }
    /**
     * Fetch Url to call api's
     */
    CommonUtilsService.getAbsoluteUrl = function () {
        if (window.location.host.includes('localhost')) {
            return 'http://localhost:3000/api';
        }
        else {
            return window.location.protocol + "//" + window.location.host + "/api";
        }
    };
    CommonUtilsService.prototype.changeSignedInUser = function (user) {
        this.signedInUser.next(user);
    };
    CommonUtilsService.prototype.setCaregiver = function (caregiver) {
        this.scheduleCaregiver.next(caregiver);
    };
    CommonUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonUtilsService);
    return CommonUtilsService;
}());



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-utils.service */ "./src/app/services/common-utils.service.ts");




var JobService = /** @class */ (function () {
    function JobService(httpClient) {
        this.httpClient = httpClient;
    }
    JobService.prototype.getAllJobsForUser = function (id) {
        return this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/jobs/jobsByUser/" + id).toPromise();
    };
    JobService.prototype.postOpenJob = function (job) {
        return this.httpClient.post(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/jobs/openJob", job).toPromise();
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-utils.service */ "./src/app/services/common-utils.service.ts");




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getAllUsers = function () {
        return this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/users");
    };
    UserService.prototype.getUserById = function (_userId) {
        return this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/users/" + _userId);
    };
    UserService.prototype.updateUser = function (user) {
        return this.httpClient.put(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/users", user);
    };
    UserService.prototype.registerUser = function (register) {
        return this.httpClient.post(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/register", register);
    };
    UserService.prototype.logoutUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('userservice - logoutUser');
                        return [4 /*yield*/, this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/logout").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.loginUser = function (login) {
        return this.httpClient.post(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/login", login);
    };
    UserService.prototype.GetAllReviewsByUser = function (_userId) {
        return this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/reviewsByUser/" + _userId);
    };
    UserService.prototype.DeleteReviewForUserByReviewId = function (_userId) {
        return this.httpClient.delete(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/review/" + _userId + "/reviewId");
    };
    UserService.prototype.GetAllCaregiversWithReviewData = function () {
        return this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/caregivers");
    };
    UserService.prototype.GetSignedInUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(_common_utils_service__WEBPACK_IMPORTED_MODULE_3__["CommonUtilsService"].getAbsoluteUrl() + "/user/currentUser").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateSignup = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test((email));
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/shared/directives/app-password.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/app-password.directive.ts ***!
  \*************************************************************/
/*! exports provided: AppPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPasswordDirective", function() { return AppPasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppPasswordDirective = /** @class */ (function () {
    function AppPasswordDirective(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    AppPasswordDirective.prototype.setup = function () {
        var _this = this;
        var parent = this.el.nativeElement.parentNode;
        var span = document.createElement('span');
        span.className += 'input-group-append';
        span.innerHTML = "<div class=\"input-group-text\" style=\"background-color:#f7f7f9;cursor:pointer\"><i class=\"fas fa-eye-slash\"></i></div>";
        span.addEventListener('click', function (event) {
            _this.toggle(span);
        });
        parent.appendChild(span);
    };
    AppPasswordDirective.prototype.toggle = function (span) {
        this._shown = !this._shown;
        if (this._shown) {
            this.el.nativeElement.setAttribute('type', 'text');
            span.innerHTML = '<div class="input-group-text" style="background-color:#f7f7f9;cursor:pointer"><i class="fas fa-eye"></i></div>';
        }
        else {
            this.el.nativeElement.setAttribute('type', 'password');
            span.innerHTML = '<div class="input-group-text" style="background-color:#f7f7f9;cursor:pointer"><i class="fas fa-eye-slash"></i></div>';
        }
    };
    AppPasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPassword]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppPasswordDirective);
    return AppPasswordDirective;
}());



/***/ }),

/***/ "./src/app/shared/models/enums.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/enums.ts ***!
  \****************************************/
/*! exports provided: UserType, JobType, JobStatus, ContractStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobType", function() { return JobType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStatus", function() { return JobStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractStatus", function() { return ContractStatus; });
/**
 * Filename: enum.ts
 * Created: 4.28.2019
 * Description: A collection of the enums that will be used
 *              throughout the Symbii program.
 */
/**
 * Helps define which type of user is currently using the
 * program.
 * PARENT - A parent user
 * CAREGIVER - caregiver user
 */
var UserType;
(function (UserType) {
    UserType[UserType["UNKNOWN"] = 0] = "UNKNOWN";
    UserType[UserType["PARENT"] = 1] = "PARENT";
    UserType[UserType["CAREGIVER"] = 2] = "CAREGIVER";
})(UserType || (UserType = {}));
/**
 * Helps define the type of job that is being inserted
 * into the database.
 * OPEN_JOB - Has yet to be accepted by a caregiver
 * SCHEDULED_JOB - A job that has been taken by a caregiver
 */
var JobType;
(function (JobType) {
    JobType[JobType["UNKNOWN"] = 0] = "UNKNOWN";
    JobType[JobType["Open"] = 1] = "Open";
    JobType[JobType["Scheduled"] = 2] = "Scheduled";
})(JobType || (JobType = {}));
/**
 * Defines the status of a current job. As the parent and
 * the caregiver communicate, the status of the job changes.
 * CREATED - A newly created job
 * POSTED - Job has been posted publicly
 * ACCEPTED - Job has been accepted by a caregiver and the parent
 * has agreed
 * INPROGRESS - The job is currently in progress of completion
 * COMPLETED - The job has been completed
 * REJECTED - The parent/caregiver have rejected the job
 */
var JobStatus;
(function (JobStatus) {
    JobStatus[JobStatus["UNKNOWN"] = 0] = "UNKNOWN";
    JobStatus[JobStatus["CREATED"] = 1] = "CREATED";
    JobStatus[JobStatus["POSTED"] = 2] = "POSTED";
    JobStatus[JobStatus["ACCEPTED"] = 3] = "ACCEPTED";
    JobStatus[JobStatus["INPROGRESS"] = 4] = "INPROGRESS";
    JobStatus[JobStatus["COMPLETED"] = 5] = "COMPLETED";
    JobStatus[JobStatus["REJECTED"] = 6] = "REJECTED";
})(JobStatus || (JobStatus = {}));
/**
 * Keeps track of the status of a contract
 * CREATED - Newly made contract
 * PARENT_SIGNED - Parent has accepted and signed the contract
 * CAREGIVER_SIGNED - Caregiver has accepted and signed the contract
 * COMPLETED - Both parties have accepted the contract
 * REJECTED - One or both parties have rejected the proposed contract
 */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ContractStatus[ContractStatus["CREATED"] = 1] = "CREATED";
    ContractStatus[ContractStatus["PARENT_SIGNED"] = 2] = "PARENT_SIGNED";
    ContractStatus[ContractStatus["CAREGIVER_SIGNED"] = 3] = "CAREGIVER_SIGNED";
    ContractStatus[ContractStatus["COMPLETED"] = 4] = "COMPLETED";
    ContractStatus[ContractStatus["REJECTED"] = 5] = "REJECTED";
})(ContractStatus || (ContractStatus = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rkkr9\Desktop\MSCS_SQ19\SaaS\team_project\symbi\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map