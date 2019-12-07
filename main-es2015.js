(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header *ngIf=\"userName\" [greetingUserName]=\"userName | uppercase\"></app-header>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"userName\"></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/main/main.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/main/main.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n  <div class=\"search-wrapper\">\n    <label for=\"search-book\"></label>\n    <input id=\"search-book\" type=\"text\" #searchBox (input)=\"search(searchBox.value)\">\n  </div>\n  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n  <div class=\"loader\" *ngIf=\"!loading && !searchBox.value\">Start Typing To Search For a Book</div>\n  <div class=\"actions-btns-wrapper\" *ngIf=\"searchBox.value\">\n    <button type=\"button\" (click)=\"prev()\">< Prev</button>\n    <button type=\"button\" (click)=\"next()\">Next ></button>\n  </div>\n  <div class=\"books-wrapper\">\n    <app-book *ngFor=\"let book of gBooks$ | async\" [book]=\"book\">\n    </app-book>\n  </div>\n</div>\n\n<!--for the pipe approach-->\n<!---------------------------------------------------------------------------------------------------->\n<!--<div class=\"main-wrapper\">-->\n<!--  <div class=\"search-wrapper\">-->\n<!--    <label for=\"search-book\"></label>-->\n<!--    <input id=\"search-book\" type=\"text\" [(ngModel)]=\"filterValue\">-->\n<!--  </div>-->\n\n<!--  <div class=\"books-wrapper\">-->\n<!--    <app-book *ngFor=\"let book of books | search: filterValue\" [book]=\"book\"></app-book>-->\n<!--  </div>-->\n<!--</div>-->\n<!--<app-popup [isDialogOpen]=\"isDialogOpen\"></app-popup>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/welcome-page/welcome-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/welcome-page/welcome-page.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n  <div class=\"dialog\"></div>\n  <h1>WELCOME TO G-BOOKS</h1>\n  <div class=\"dialog-box\">\n    <label for=\"user-name\">User Name</label>\n    <input id=\"user-name\" type=\"text\" [formControl]=\"userName\" autocomplete=\"off\" (keyup.enter)=\"goToBooks()\">\n    <button (click)=\"goToBooks()\">TAKE ME TO BOOKS</button>\n    <span *ngIf=\"!isEnteredValidUserName\">PLEASE ENTER VALID USER NAME !!!</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/wish-list/wish-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/wish-list/wish-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"books-wrapper\">\n  <p *ngIf=\"!wishList.length\">You Don't Have Wished Books Yet.</p>\n  <app-book *ngFor=\"let book of wishList\" [book]=\"book\"></app-book>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/book/book.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/book/book.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"book-card\">\n  <div class=\"title\">{{book.title}}</div>\n  <img *ngIf=\"bookImgSrc\" class=\"book-img\" [src]=\"book.imageLinks.thumbnail\">\n  <div>{{book.authors}}</div>\n  <button type=\"button\" (click)=\"openDialog()\">show details</button>\n</div>\n\n\n<app-popup\n  *ngIf=\"isDialogOpen\"\n  [title]=\"book.title\"\n  [categories]=\"book.categories\"\n  [authors]=\"book.authors\"\n  [publisher]=\"book.publisher\"\n  [publishedDate]=\"book.publishedDate\"\n  [isInWishList]=\"checkIfBookInWishList\"\n  (closeDialog)=\"isDialogOpen = false\"\n  (addBook)=\"onAddBook()\"\n  (removeBook)=\"onRemoveBook()\">\n</app-popup>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"centered-content\">\n    <a href=\"https://www.linkedin.com/in/amit-barletz-2a0701112/\" target=\"_blank\"><img src=\"../../../assets/images/linkedIn.png\" alt=\"LinkedIn-profile\" class=\"linkedin\"></a>\n    <a href=\"https://github.com/abrl91\" target=\"_blank\"><img src=\"../../../assets/images/github.png\" class=\"github\"></a>\n    <div>\n      <img class=\"me\" src=\"../../../assets/images/me.png\"><span>Amit Barletz - Front End Web Developer</span>\n    </div>\n\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"header-wrapper\">\n  <ul>\n    <img src=\"../../../assets/images/icon-books.png\">\n    <div>G-Books</div>\n    <li class=\"greeting\">Welcome {{greetingUserName}}</li>\n    <li>\n      <a\n        href=\"javascript:void(0)\" routerLink=\"main\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact:true}\"\n        queryParamsHandling=\"merge\">\n        Search\n      </a>\n    </li>\n    <li>\n      <a\n        href=\"javascript:void(0)\"\n        routerLink=\"wishList\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact:true}\"\n        queryParamsHandling=\"merge\">\n        Wish List\n      </a>\n    </li>\n  </ul>\n\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/popup/popup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/popup/popup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog\" (click)=\"clickOutside()\"></div>\n<div class=\"popup\">\n  <div><span>Book Name:</span>{{title}}</div>\n  <div><span>author:</span>{{authors}}</div>\n  <div><span>category:</span>{{categories}}</div>\n  <div><span>publisher:</span>{{publisher}}</div>\n  <div><span>publishedDate:</span>{{publishedDate}}</div>\n  <div class=\"btns-wrapper\">\n    <button *ngIf=\"!isInWishList\" type=\"button\" (click)=\"addToWishList()\">Add To Wish List</button>\n    <button *ngIf=\"isInWishList\" type=\"button\" (click)=\"removeFromWishList()\">Remove From Wish List</button>\n    <button type=\"button\" class=\"close\" (click)=\"clickOutside()\">cancel</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/welcome-page/welcome-page.component */ "./src/app/features/welcome-page/welcome-page.component.ts");
/* harmony import */ var _features_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/main/main.component */ "./src/app/features/main/main.component.ts");
/* harmony import */ var _features_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/wish-list/wish-list.component */ "./src/app/features/wish-list/wish-list.component.ts");






const routes = [
    {
        path: '',
        component: _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_3__["WelcomePageComponent"]
    },
    {
        path: 'main',
        component: _features_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    },
    {
        path: 'wishList',
        component: _features_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_5__["WishListComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
    }
    get userName() {
        return this.activeRoute.snapshot.queryParams.userName;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/welcome-page/welcome-page.component */ "./src/app/features/welcome-page/welcome-page.component.ts");
/* harmony import */ var _features_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/main/main.component */ "./src/app/features/main/main.component.ts");
/* harmony import */ var _features_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/wish-list/wish-list.component */ "./src/app/features/wish-list/wish-list.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_book_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/book/book.component */ "./src/app/shared/book/book.component.ts");
/* harmony import */ var _shared_popup_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/popup/popup.component */ "./src/app/shared/popup/popup.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_7__["WelcomePageComponent"],
            _features_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
            _features_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_9__["WishListComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _shared_book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"],
            _shared_popup_popup_component__WEBPACK_IMPORTED_MODULE_12__["PopupComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/features/main/main.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/main/main.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-wrapper {\n  margin: 0 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n}\n@media (max-width: 767px) {\n  .main-wrapper {\n    min-width: 320px;\n  }\n}\n.main-wrapper .search-wrapper {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.main-wrapper .search-wrapper input {\n  margin: 60px auto 0 auto;\n  width: 700px;\n  padding: 1.5rem;\n  border-radius: 3rem;\n  outline: 0;\n  border: none;\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\n  color: #131f69;\n  text-align: center;\n  font-size: 16px;\n  background-image: url(\"/assets/images/icon-search.svg\");\n  background-repeat: no-repeat;\n  background-size: 50px;\n  background-position: bottom 11px right 17px;\n}\n@media (max-width: 767px) {\n  .main-wrapper .search-wrapper input {\n    width: 300px;\n    background-size: 48px;\n  }\n}\n.main-wrapper .loader {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.main-wrapper .actions-btns-wrapper {\n  margin-top: 40px;\n  display: flex;\n}\n.main-wrapper .actions-btns-wrapper button {\n  margin: 0 10px;\n  background-color: #000000;\n  color: #ffff;\n  border-radius: 5px;\n  padding: 4px 8px;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .main-wrapper .actions-btns-wrapper button {\n    font-size: 15px;\n  }\n}\n.main-wrapper .books-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL2ZlYXR1cmVzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JhcmxldHphbWl0L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvQW5ndWxhci9HLUJvb2tzL3NyYy9hcHAvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURDRTtFQU5GO0lBT0ksZ0JBQUE7RUNFRjtBQUNGO0FEREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEQUk7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlERWpCWTtFRmtCWixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUNFTjtBREFNO0VBaEJGO0lBaUJJLFlBQUE7SUFDQSxxQkFBQTtFQ0dOO0FBQ0Y7QURHRTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDSEo7QURJSTtFQUNFLGNBQUE7RUFBZSx5QkVoRGI7RUZpREYsWUVoREU7RUZpREYsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBTkY7SUFPSSxlQUFBO0VDQ047QUFDRjtBRElFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zY3NzL3ZhcmlhYmxlc1wiO1xuLm1haW4td3JhcHBlciB7XG4gIG1hcmdpbjogMCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgtbW9iaWxlLXdpZHRoKSB7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgfVxuICAuc2VhcmNoLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbiAgICBpbnB1dCB7XG4gICAgICBtYXJnaW46IDYwcHggYXV0byAwIGF1dG87XG4gICAgICB3aWR0aDogNzAwcHg7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6ICRtYWluLWJveC1zaGFkb3c7XG4gICAgICBjb2xvcjogIzEzMWY2OTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ljb24tc2VhcmNoLnN2Z1wiKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gMTFweCByaWdodCAxN3B4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heC1tb2JpbGUtd2lkdGgpIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG4gIC5sb2FkZXIge1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5hY3Rpb25zLWJ0bnMtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4LW1vYmlsZS13aWR0aCkge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAuYm9va3Mtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG5cblxuIiwiLm1haW4td3JhcHBlciB7XG4gIG1hcmdpbjogMCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICB9XG59XG4ubWFpbi13cmFwcGVyIC5zZWFyY2gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi13cmFwcGVyIC5zZWFyY2gtd3JhcHBlciBpbnB1dCB7XG4gIG1hcmdpbjogNjBweCBhdXRvIDAgYXV0bztcbiAgd2lkdGg6IDcwMHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgY29sb3I6ICMxMzFmNjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9pY29uLXNlYXJjaC5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIDExcHggcmlnaHQgMTdweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi13cmFwcGVyIC5zZWFyY2gtd3JhcHBlciBpbnB1dCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDhweDtcbiAgfVxufVxuLm1haW4td3JhcHBlciAubG9hZGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluLXdyYXBwZXIgLmFjdGlvbnMtYnRucy13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLXdyYXBwZXIgLmFjdGlvbnMtYnRucy13cmFwcGVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYWluLXdyYXBwZXIgLmFjdGlvbnMtYnRucy13cmFwcGVyIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG4ubWFpbi13cmFwcGVyIC5ib29rcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iLCIvLyBjb2xvcnNcbiRncmF5OiBsaWdodHNsYXRlZ3JheTtcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmY7XG4kcmVkOiBkYXJrcmVkO1xuJG1haW4tYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsMCwyNTUsLjEpO1xuJGJvb2stYm94LXNoYWRvdzogMCAwIDFyZW0gMC4xcmVtIHJnYmEoMTAsIDEwLCAyMDAsIDAuMyk7XG4kY2FyZC1ib3gtc2hhZG93OiAwIDAgMnJlbSAwLjE1cmVtIHJnYmEoMCwwLDI1NSwuMSk7XG4kYnV0dG9uLWJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4vLyBmb250c1xuXG4vLyBtb2JpbGUtd2lkdGhcbiRtYXgtbW9iaWxlLXdpZHRoOiA3NjdweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/features/main/main.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/main/main.component.ts ***!
  \*************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MainComponent = class MainComponent {
    constructor(BooksService) {
        this.BooksService = BooksService;
        this.loading = false;
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.startIndex = '0';
        this.maxResult = '20';
    }
    ngOnInit() {
        this.getBooks();
    }
    search(term) {
        this.searchTerm.next(term);
        this.searchTermValue = term;
    }
    getBooks() {
        this.gBooks$ = this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((term) => this.BooksService.getBooksFromApi(term, `${this.maxResult}`, `${this.startIndex}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.loading = false));
    }
    prev() {
        if (parseInt(this.startIndex, 10) > 0) {
            const prevPage = parseInt(this.startIndex, 10) - parseInt(this.maxResult, 10);
            this.startIndex = prevPage.toString();
            this.gBooks$ = this.BooksService.getBooksFromApi(this.searchTermValue, '20', `${this.startIndex}`);
        }
        else {
            return;
        }
    }
    next() {
        const nextPage = parseInt(this.startIndex, 10) + 20;
        this.startIndex = nextPage.toString();
        this.gBooks$ = this.BooksService.getBooksFromApi(this.searchTermValue, '20', `${this.startIndex}`);
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/features/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/features/welcome-page/welcome-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/features/welcome-page/welcome-page.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-wrapper {\n  background-image: url('books-bg.jpeg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .main-wrapper {\n    height: calc(var(--vh, 1vh) * 100);\n  }\n}\n.main-wrapper h1 {\n  background-color: #ffff;\n  opacity: 0.8;\n  padding: 5px 10px;\n  margin-top: calc(100vh / 5);\n}\n.main-wrapper .dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #ffff;\n  opacity: 0.3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-wrapper .dialog-box {\n  width: 500px;\n  height: 200px;\n  border: 2px solid #000000;\n  border-radius: 25px;\n  background-color: lightgray;\n  opacity: 0.9;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.main-wrapper .dialog-box label {\n  color: #000000;\n  font-size: 20px;\n}\n.main-wrapper .dialog-box input {\n  width: 45%;\n  height: 25px;\n  border-radius: 10px;\n  border: 1px solid #000000;\n  margin: 10px 0;\n  padding: 5px 10px;\n  font-size: 16px;\n}\n.main-wrapper .dialog-box button {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #000000;\n  color: #ffff;\n  opacity: 0.7;\n  font-size: 14px;\n  cursor: pointer;\n}\n.main-wrapper .dialog-box span {\n  color: darkred;\n  font-size: 14px;\n  position: absolute;\n  top: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL2ZlYXR1cmVzL3dlbGNvbWUtcGFnZS93ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3dlbGNvbWUtcGFnZS93ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmFybGV0emFtaXQvRGVza3RvcC9EZXZlbG9wbWVudC9Bbmd1bGFyL0ctQm9va3Mvc3JjL2FwcC9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0FGO0FERUU7RUFYRjtJQVlJLGtDQUFBO0VDQ0Y7QUFDRjtBREVFO0VBQ0UsdUJFZEk7RUZlSixZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkUxQkk7RUYyQkosWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7QURNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCRTFDUTtFRjJDUixZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7QURNSTtFQUNFLGNFbERFO0VGbURGLGVBQUE7QUNKTjtBRE1JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFbEVFO0VGbUVGLFlFbEVFO0VGbUVGLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0xOO0FEUUk7RUFDRSxjRXhFQTtFRnlFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc2Nzcy92YXJpYWJsZXNcIjtcbi5tYWluLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jvb2tzLWJnLmpwZWdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4LW1vYmlsZS13aWR0aCkge1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gIH1cblxuXG4gIGgxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLyA1KTtcbiAgfVxuXG4gIC5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxuICB9XG5cbiAgLmRpYWxvZy1ib3gge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXk7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE3MHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLm1haW4td3JhcHBlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9va3MtYmcuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1haW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgfVxufVxuLm1haW4td3JhcHBlciBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKDEwMHZoIC8gNSk7XG59XG4ubWFpbi13cmFwcGVyIC5kaWFsb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIG9wYWNpdHk6IDAuMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi13cmFwcGVyIC5kaWFsb2ctYm94IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLXdyYXBwZXIgLmRpYWxvZy1ib3ggbGFiZWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW4td3JhcHBlciAuZGlhbG9nLWJveCBpbnB1dCB7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbi13cmFwcGVyIC5kaWFsb2ctYm94IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmZjtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLXdyYXBwZXIgLmRpYWxvZy1ib3ggc3BhbiB7XG4gIGNvbG9yOiBkYXJrcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNzBweDtcbn0iLCIvLyBjb2xvcnNcbiRncmF5OiBsaWdodHNsYXRlZ3JheTtcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmY7XG4kcmVkOiBkYXJrcmVkO1xuJG1haW4tYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsMCwyNTUsLjEpO1xuJGJvb2stYm94LXNoYWRvdzogMCAwIDFyZW0gMC4xcmVtIHJnYmEoMTAsIDEwLCAyMDAsIDAuMyk7XG4kY2FyZC1ib3gtc2hhZG93OiAwIDAgMnJlbSAwLjE1cmVtIHJnYmEoMCwwLDI1NSwuMSk7XG4kYnV0dG9uLWJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4vLyBmb250c1xuXG4vLyBtb2JpbGUtd2lkdGhcbiRtYXgtbW9iaWxlLXdpZHRoOiA3NjdweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/features/welcome-page/welcome-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/welcome-page/welcome-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WelcomePageComponent = class WelcomePageComponent {
    constructor(route) {
        this.route = route;
        this.isEnteredValidUserName = true;
    }
    ngOnInit() {
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        // for mobile height
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    goToBooks() {
        this.userName.markAsDirty();
        if (this.userName.valid) {
            this.route.navigate(['main'], { queryParams: { userName: this.userName.value } });
        }
        else {
            this.isEnteredValidUserName = false;
        }
    }
};
WelcomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WelcomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/welcome-page/welcome-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome-page.component.scss */ "./src/app/features/welcome-page/welcome-page.component.scss")).default]
    })
], WelcomePageComponent);



/***/ }),

/***/ "./src/app/features/wish-list/wish-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/features/wish-list/wish-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".books-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 40px;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL2ZlYXR1cmVzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4iLCIuYm9va3Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/wish-list/wish-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/wish-list/wish-list.component.ts ***!
  \***********************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");



let WishListComponent = class WishListComponent {
    constructor(BooksService) {
        this.BooksService = BooksService;
        this.wishList = [];
    }
    ngOnInit() {
        this.wishList = this.BooksService.wishListBooks;
    }
};
WishListComponent.ctorParameters = () => [
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
WishListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wish-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wish-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/wish-list/wish-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wish-list.component.scss */ "./src/app/features/wish-list/wish-list.component.scss")).default]
    })
], WishListComponent);



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(values, term) {
        if (term === undefined || !values)
            return values;
        return values.filter((value) => {
            return value.title.includes(term) || value.title.toLowerCase().includes(term);
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.wishListBooks = [];
    }
    getBooksFromApi(q, maxResults, startIndex) {
        if (!q.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi, { params: {
                q,
                maxResults,
                startIndex,
                apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_KEY
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            return res.items.map(item => item.volumeInfo);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('countries', [])));
    }
    addBookToWishList(book) {
        return this.wishListBooks.push(book);
    }
    removeBookFromWishList(bookTitle) {
        const bookIndex = this.wishListBooks.findIndex(book => book.title === bookTitle);
        this.wishListBooks.splice(bookIndex, 1);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.log(`failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookService);



/***/ }),

/***/ "./src/app/shared/book/book.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/book/book.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book-card {\n  height: 350px;\n  width: 250px;\n  flex-grow: 1;\n  margin: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 10px;\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\n}\n.book-card:hover {\n  transform: scale(1.1);\n}\n.book-card .title {\n  text-decoration: underline;\n  text-align: center;\n}\n.book-card .book-img {\n  box-shadow: 0 0 1rem 0.1rem rgba(10, 10, 200, 0.3);\n}\n.book-card button {\n  border-radius: 6px;\n  padding: 7px 14px;\n  cursor: pointer;\n  font-size: 14px;\n  border: 1px solid #000000;\n  background-color: #ffff;\n  color: lightslategray;\n  box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.15);\n}\n.book-card button:hover {\n  background-color: lightslategray;\n  color: #ffff;\n  border: 1px solid #ffff;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL3NoYXJlZC9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmFybGV0emFtaXQvRGVza3RvcC9EZXZlbG9wbWVudC9Bbmd1bGFyL0ctQm9va3Mvc3JjL2FwcC9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYm9vay9ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQ0pnQjtBQ0dsQjtBRkdFO0VBR0UscUJBQUE7QUVESjtBRklFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBRUZKO0FGS0U7RUFDRSxrRENuQmM7QUNnQmxCO0FGTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQy9CSTtFRGdDSixxQkNuQ0c7RURvQ0gsK0NDNUJnQjtBQ3dCcEI7QUZNSTtFQUNFLGdDQUFBO0VBQ0EsWUNyQ0U7RURzQ0YsdUJBQUE7RUFDQSxnQkFBQTtBRUpOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3Njc3MvdmFyaWFibGVzXCI7XG5cbi5ib29rLWNhcmQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYm94LXNoYWRvdzogJGNhcmQtYm94LXNoYWRvdztcblxuICAmOmhvdmVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJvb2staW1nIHtcbiAgICBib3gtc2hhZG93OiAkYm9vay1ib3gtc2hhZG93O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogN3B4IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGNvbG9yOiAkZ3JheTtcbiAgICBib3gtc2hhZG93OiAkYnV0dG9uLWJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuIiwiLy8gY29sb3JzXG4kZ3JheTogbGlnaHRzbGF0ZWdyYXk7XG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmO1xuJHJlZDogZGFya3JlZDtcbiRtYWluLWJveC1zaGFkb3c6IDAgMCAycmVtIDAuMTVyZW0gcmdiYSgwLDAsMjU1LC4xKTtcbiRib29rLWJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMXJlbSByZ2JhKDEwLCAxMCwgMjAwLCAwLjMpO1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsMCwyNTUsLjEpO1xuJGJ1dHRvbi1ib3gtc2hhZG93OiAwIDAgMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuLy8gZm9udHNcblxuLy8gbW9iaWxlLXdpZHRoXG4kbWF4LW1vYmlsZS13aWR0aDogNzY3cHg7XG5cbiIsIi5ib29rLWNhcmQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbn1cbi5ib29rLWNhcmQ6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmJvb2stY2FyZCAudGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvb2stY2FyZCAuYm9vay1pbWcge1xuICBib3gtc2hhZG93OiAwIDAgMXJlbSAwLjFyZW0gcmdiYSgxMCwgMTAsIDIwMCwgMC4zKTtcbn1cbi5ib29rLWNhcmQgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA3cHggMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICBjb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmJvb2stY2FyZCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbiAgY29sb3I6ICNmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/book/book.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/book/book.component.ts ***!
  \***********************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");



let BookComponent = class BookComponent {
    constructor(BooksService) {
        this.BooksService = BooksService;
        this.btnClicked = false;
        this.openPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDialogOpen = false;
    }
    ngOnInit() {
    }
    get bookImgSrc() {
        if (this.book.imageLinks === undefined) {
            return;
        }
        else {
            return this.book.imageLinks.thumbnail;
        }
    }
    openDialog() {
        this.isDialogOpen = true;
    }
    onAddBook() {
        this.BooksService.addBookToWishList(this.book);
        this.isDialogOpen = false;
    }
    get checkIfBookInWishList() {
        return this.BooksService.wishListBooks.find(bookItem => bookItem === this.book);
    }
    onRemoveBook() {
        this.BooksService.removeBookFromWishList(this.book.title);
        this.isDialogOpen = false;
    }
};
BookComponent.ctorParameters = () => [
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "book", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "btnClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BookComponent.prototype, "openPopup", void 0);
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/book/book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.component.scss */ "./src/app/shared/book/book.component.scss")).default]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  width: 100%;\n  height: 125px;\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\n  background-color: #ffff;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\np {\n  margin: 0;\n  font-size: 12px;\n}\n\n.linkedin {\n  width: 55px;\n}\n\n.github {\n  width: 37px;\n}\n\nimg {\n  vertical-align: middle;\n  margin: 8px 0 0 0;\n  cursor: pointer;\n}\n\nimg:hover {\n  transition: 0.9s;\n  -webkit-transition: 0.9s;\n  -moz-transition: 0.9s;\n  -ms-transition: 0.9s;\n  -o-transition: 0.9s;\n  transform: rotate(360deg);\n}\n\n.centered-content {\n  text-align: center;\n}\n\n.me {\n  width: 50px;\n  vertical-align: middle;\n  margin-top: 0;\n  margin-right: 10px;\n  border: 1px solid;\n  border-radius: 25px;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JhcmxldHphbWl0L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvQW5ndWxhci9HLUJvb2tzL3NyYy9hcHAvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQ0VnQjtFRERoQix1QkNETTtFREVOLHdCQUFBO0VBQUEsZ0JBQUE7QUVBRjs7QUZHQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FFQUY7O0FGR0E7RUFDRSxXQUFBO0FFQUY7O0FGR0E7RUFDRSxXQUFBO0FFQUY7O0FGR0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRUFGOztBRkdBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUtBLHlCQUFBO0FFQUY7O0FGR0E7RUFDRSxrQkFBQTtBRUFGOztBRkdBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUVBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc2Nzcy92YXJpYWJsZXNcIjtcbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyNXB4O1xuICBib3gtc2hhZG93OiAkbWFpbi1ib3gtc2hhZG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxpbmtlZGluIHtcbiAgd2lkdGg6IDU1cHg7XG59XG5cbi5naXRodWIge1xuICB3aWR0aDogMzdweDtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiA4cHggMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC45MHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC45MHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC45MHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjkwcztcbiAgLW8tdHJhbnNpdGlvbjogMC45MHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZSB7XG4gIHdpZHRoOiA1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjdXJzb3I6IGF1dG87XG59XG4iLCIvLyBjb2xvcnNcbiRncmF5OiBsaWdodHNsYXRlZ3JheTtcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcbiRibGFjazogIzAwMDAwMDtcbiR3aGl0ZTogI2ZmZmY7XG4kcmVkOiBkYXJrcmVkO1xuJG1haW4tYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsMCwyNTUsLjEpO1xuJGJvb2stYm94LXNoYWRvdzogMCAwIDFyZW0gMC4xcmVtIHJnYmEoMTAsIDEwLCAyMDAsIDAuMyk7XG4kY2FyZC1ib3gtc2hhZG93OiAwIDAgMnJlbSAwLjE1cmVtIHJnYmEoMCwwLDI1NSwuMSk7XG4kYnV0dG9uLWJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4vLyBmb250c1xuXG4vLyBtb2JpbGUtd2lkdGhcbiRtYXgtbW9iaWxlLXdpZHRoOiA3NjdweDtcblxuIiwiZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIDAuMTVyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5saW5rZWRpbiB7XG4gIHdpZHRoOiA1NXB4O1xufVxuXG4uZ2l0aHViIHtcbiAgd2lkdGg6IDM3cHg7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogOHB4IDAgMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZzpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuOXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC45cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjlzO1xuICAtbXMtdHJhbnNpdGlvbjogMC45cztcbiAgLW8tdHJhbnNpdGlvbjogMC45cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGN1cnNvcjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-wrapper {\n  display: flex;\n  height: 90px;\n  width: 100%;\n  z-index: 99;\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\n  background-color: #ffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.header-wrapper ul {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  color: lightslategray;\n}\n@media (max-width: 767px) {\n  .header-wrapper ul {\n    padding: 0 40px;\n  }\n}\n.header-wrapper ul li {\n  list-style: none;\n  cursor: pointer;\n  padding: 0 20px;\n}\n@media (max-width: 767px) {\n  .header-wrapper ul li {\n    width: 80px;\n    padding: 0 10px;\n  }\n}\n.header-wrapper ul li.greeting {\n  cursor: auto;\n}\n.header-wrapper ul li a {\n  text-decoration: none;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  color: lightslategray;\n  font-size: 18px;\n}\n.header-wrapper ul li a.active {\n  border-bottom: 3px solid lightslategray;\n}\n.header-wrapper ul div {\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: lightslategray;\n}\n@media (max-width: 767px) {\n  .header-wrapper ul div {\n    font-size: 18px;\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JhcmxldHphbWl0L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvQW5ndWxhci9HLUJvb2tzL3NyYy9hcHAvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkNITTtFRElOLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FFQUY7QUZDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkNiRztBQ2NQO0FGQUk7RUFMRjtJQU1JLGVBQUE7RUVHSjtBQUNGO0FGRkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FFSU47QUZITTtFQUpGO0lBS0ksV0FBQTtJQUNBLGVBQUE7RUVNTjtBQUNGO0FGTE07RUFDRSxZQUFBO0FFT1I7QUZMTTtFQUNFLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQ2hDRDtFRGlDQyxlQUFBO0FFT1I7QUZMUTtFQUNFLHVDQUFBO0FFT1Y7QUZISTtFQUNFLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHFCQzNDQztBQ2dEUDtBRkhNO0VBTEY7SUFNSSxlQUFBO0lBQ0EsYUFBQTtFRU1OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3Njc3MvdmFyaWFibGVzXCI7XG4uaGVhZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgYm94LXNoYWRvdzogJG1haW4tYm94LXNoYWRvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAkZ3JheTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heC1tb2JpbGUtd2lkdGgpIHtcbiAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICB9XG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4LW1vYmlsZS13aWR0aCkge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgfVxuICAgICAgJi5ncmVldGluZyB7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZ3JheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkaXYge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjogJGdyYXk7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4LW1vYmlsZS13aWR0aCkge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIGNvbG9yc1xuJGdyYXk6IGxpZ2h0c2xhdGVncmF5O1xuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjZmZmZjtcbiRyZWQ6IGRhcmtyZWQ7XG4kbWFpbi1ib3gtc2hhZG93OiAwIDAgMnJlbSAwLjE1cmVtIHJnYmEoMCwwLDI1NSwuMSk7XG4kYm9vay1ib3gtc2hhZG93OiAwIDAgMXJlbSAwLjFyZW0gcmdiYSgxMCwgMTAsIDIwMCwgMC4zKTtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAycmVtIDAuMTVyZW0gcmdiYSgwLDAsMjU1LC4xKTtcbiRidXR0b24tYm94LXNoYWRvdzogMCAwIDFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbi8vIGZvbnRzXG5cbi8vIG1vYmlsZS13aWR0aFxuJG1heC1tb2JpbGUtd2lkdGg6IDc2N3B4O1xuXG4iLCIuaGVhZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cbi5oZWFkZXItd3JhcHBlciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oZWFkZXItd3JhcHBlciB1bCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICB9XG59XG4uaGVhZGVyLXdyYXBwZXIgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyLXdyYXBwZXIgdWwgbGkge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxufVxuLmhlYWRlci13cmFwcGVyIHVsIGxpLmdyZWV0aW5nIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmhlYWRlci13cmFwcGVyIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaGVhZGVyLXdyYXBwZXIgdWwgbGkgYS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XG59XG4uaGVhZGVyLXdyYXBwZXIgdWwgZGl2IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oZWFkZXItd3JhcHBlciB1bCBkaXYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "greetingUserName", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/popup/popup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/popup/popup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000000;\n  opacity: 0.5;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popup {\n  height: 300px;\n  width: 400px;\n  background-color: #ffff;\n  border-radius: 5px;\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: absolute;\n  top: 50%;\n  left: calc((100% - 400px)/2);\n  z-index: 9999;\n  padding: 10px;\n}\n\n@media (max-width: 767px) {\n  .popup {\n    top: 3%;\n  }\n}\n\n.popup span {\n  font-family: Arial;\n  font-weight: bold;\n  margin-right: 5px;\n}\n\n.popup .btns-wrapper {\n  display: flex;\n}\n\n.popup .btns-wrapper button {\n  background-color: lightslategray;\n  color: #ffff;\n  border: 1px solid #ffff;\n  box-shadow: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.popup .btns-wrapper button.close {\n  background-color: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL3NoYXJlZC9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iYXJsZXR6YW1pdC9EZXNrdG9wL0RldmVsb3BtZW50L0FuZ3VsYXIvRy1Cb29rcy9zcmMvYXBwL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EseUJDSk07RURLTixZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FFQUY7O0FGSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQ2ZNO0VEZ0JOLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FFREY7O0FGRUU7RUFmRjtJQWdCSSxPQUFBO0VFQ0Y7QUFDRjs7QUZDRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRUNKOztBRkVFO0VBQ0UsYUFBQTtBRUFKOztBRkVJO0VBQ0UsZ0NDNUNDO0VENkNELFlDMUNFO0VEMkNGLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUVBTjs7QUZFTTtFQUNFLHlCQ2xERjtBQ2tETiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3Njc3MvdmFyaWFibGVzXCI7XG4uZGlhbG9nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgb3BhY2l0eTogMC41O1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5wb3B1cCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSA0MDBweCkvMik7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4LW1vYmlsZS13aWR0aCkge1xuICAgIHRvcDogMyU7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAuYnRucy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBwYWRkaW5nOiA3cHggMTRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgJi5jbG9zZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuIiwiLy8gY29sb3JzXG4kZ3JheTogbGlnaHRzbGF0ZWdyYXk7XG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmO1xuJHJlZDogZGFya3JlZDtcbiRtYWluLWJveC1zaGFkb3c6IDAgMCAycmVtIDAuMTVyZW0gcmdiYSgwLDAsMjU1LC4xKTtcbiRib29rLWJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMXJlbSByZ2JhKDEwLCAxMCwgMjAwLCAwLjMpO1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsMCwyNTUsLjEpO1xuJGJ1dHRvbi1ib3gtc2hhZG93OiAwIDAgMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuLy8gZm9udHNcblxuLy8gbW9iaWxlLXdpZHRoXG4kbWF4LW1vYmlsZS13aWR0aDogNzY3cHg7XG5cbiIsIi5kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC41O1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSA0MDBweCkvMik7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBvcHVwIHtcbiAgICB0b3A6IDMlO1xuICB9XG59XG4ucG9wdXAgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnBvcHVwIC5idG5zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBvcHVwIC5idG5zLXdyYXBwZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG4gIGNvbG9yOiAjZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogN3B4IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBvcHVwIC5idG5zLXdyYXBwZXIgYnV0dG9uLmNsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/popup/popup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/popup/popup.component.ts ***!
  \*************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopupComponent = class PopupComponent {
    constructor() {
        this.isDialogOpen = false;
        this.authors = [];
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clickOutside() {
        this.closeDialog.emit();
    }
    addToWishList() {
        this.addBook.emit();
    }
    removeFromWishList() {
        this.removeBook.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "isDialogOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "publisher", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "publishedDate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "authors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupComponent.prototype, "isInWishList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PopupComponent.prototype, "closeDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PopupComponent.prototype, "addBook", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PopupComponent.prototype, "removeBook", void 0);
PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/popup/popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup.component.scss */ "./src/app/shared/popup/popup.component.scss")).default]
    })
], PopupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseApi: 'https://www.googleapis.com/books/v1/volumes',
    API_KEY: 'AIzaSyA1TlqOjtJ5Mg7b10uZTzfbROGnGb0hIBA'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/barletzamit/Desktop/Development/Angular/G-Books/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map