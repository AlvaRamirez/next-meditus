webpackHotUpdate_N_E("pages/Aprende",{

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "./node_modules/@auth0/nextjs-auth0/dist/index.browser.js");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: "g4klaZF1lXnHavWEqsOR0nJAfTlr0TrJ",
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile" || false,
  domain: "meditus.us.auth0.com",
  redirectUri: "http://localhost:3000/api/callback" || false,
  postLogoutRedirectUri: "http://localhost:3000" || false,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: Number(process.env.SESSION_COOKIE_LIFETIME) || 7200
  }
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@auth0/nextjs-auth0/dist/index.browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/@auth0/nextjs-auth0/dist/index.browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const instance_browser_1 = tslib_1.__importDefault(__webpack_require__(/*! ./instance.browser */ "./node_modules/@auth0/nextjs-auth0/dist/instance.browser.js"));
// @ts-ignore un-used settings
function initAuth0(settings) {
    return instance_browser_1.default();
}
exports.initAuth0 = initAuth0;
//# sourceMappingURL=index.browser.js.map

/***/ }),

/***/ "./node_modules/@auth0/nextjs-auth0/dist/instance.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@auth0/nextjs-auth0/dist/instance.browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createDummyBrowserInstance() {
    return {
        isBrowser: true,
        handleLogin: () => {
            throw new Error('The handleLogin method can only be used from the server side');
        },
        handleLogout: () => {
            throw new Error('The handleLogout method can only be used from the server side');
        },
        handleCallback: () => {
            throw new Error('The handleCallback method can only be used from the server side');
        },
        handleProfile: () => {
            throw new Error('The handleProfile method can only be used from the server side');
        },
        getSession: () => {
            throw new Error('The getSession method can only be used from the server side');
        },
        requireAuthentication: () => () => {
            throw new Error('The requireAuthentication method can only be used from the server side');
        },
        tokenCache: () => {
            throw new Error('The tokenCache method can only be used from the server side');
        }
    };
}
exports.default = createDummyBrowserInstance;
//# sourceMappingURL=instance.browser.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./pages/Aprende.js":
/*!**************************!*\
  !*** ./pages/Aprende.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\pages\\Aprende.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Aprende = function Aprende() {
  return __jsx("div", {
    className: "fondo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "contpag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "context",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "sub2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Aprend\xE9"), __jsx("div", {
    className: "contitu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "titu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Recomendaciones de netflix"), __jsx("h2", {
    className: "sub1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Series para reflexionar, mirar mas all\xE1, formar opiniones")), __jsx("div", {
    className: "contparra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("img", {
    className: "imgpa",
    src: "./assets/aprendeimg.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 22
    }
  }), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }));
};

_c = Aprende;
/* harmony default export */ __webpack_exports__["default"] = (Aprende);

var _c;

$RefreshReg$(_c, "Aprende");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF1dGgwL25leHRqcy1hdXRoMC9kaXN0L2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXV0aDAvbmV4dGpzLWF1dGgwL2Rpc3QvaW5zdGFuY2UuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXByZW5kZS5qcyJdLCJuYW1lcyI6WyJpbml0QXV0aDAiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJjbGllbnRTZWNyZXQiLCJlbnYiLCJBVVRIMF9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJkb21haW4iLCJyZWRpcmVjdFVyaSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsInNlc3Npb24iLCJjb29raWVTZWNyZXQiLCJTRVNTSU9OX0NPT0tJRV9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsIk51bWJlciIsIlNFU1NJT05fQ09PS0lFX0xJRkVUSU1FIiwiQXByZW5kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLG9JQUFTLENBQUM7QUFDdkJDLFVBQVEsRUFBRUMsa0NBRGE7QUFFdkJDLGNBQVksRUFBRUQsT0FBTyxDQUFDRSxHQUFSLENBQVlDLG1CQUZIO0FBR3ZCQyxPQUFLLEVBQUVKLGdCQUFBLElBQXVDLEtBSHZCO0FBSXZCSyxRQUFNLEVBQUVMLHNCQUplO0FBS3ZCTSxhQUFXLEVBQ1ROLG9DQUFBLElBQ0EsS0FQcUI7QUFRdkJPLHVCQUFxQixFQUNuQlAsdUJBQUEsSUFDQSxLQVZxQjtBQVd2QlEsU0FBTyxFQUFFO0FBQ1BDLGdCQUFZLEVBQUVULE9BQU8sQ0FBQ0UsR0FBUixDQUFZUSxxQkFEbkI7QUFFUEMsa0JBQWMsRUFBRUMsTUFBTSxDQUFD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QWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBeENMLEVBaURLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBakRMLENBUEEsQ0FEUixDQUZBLEVBc0VVLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRFVixDQURKO0FBNkVDLENBL0VMOztLQUFNQSxPO0FBaUZhQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9BcHJlbmRlLjMxNzc1Mjg5NDY3MmIyYzYxNTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfQ0xJRU5UX0lELFxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gIHNjb3BlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9TQ09QRSB8fCAnb3BlbmlkIHByb2ZpbGUnLFxuICBkb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTixcbiAgcmVkaXJlY3RVcmk6XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIHx8XG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsbGJhY2snLFxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIHx8XG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxuICBzZXNzaW9uOiB7XG4gICAgY29va2llU2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX0NPT0tJRV9TRUNSRVQsXG4gICAgY29va2llTGlmZXRpbWU6IE51bWJlcihwcm9jZXNzLmVudi5TRVNTSU9OX0NPT0tJRV9MSUZFVElNRSkgfHwgNzIwMCxcbiAgfSxcbn0pXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBpbnN0YW5jZV9icm93c2VyXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbnN0YW5jZS5icm93c2VyXCIpKTtcbi8vIEB0cy1pZ25vcmUgdW4tdXNlZCBzZXR0aW5nc1xuZnVuY3Rpb24gaW5pdEF1dGgwKHNldHRpbmdzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlX2Jyb3dzZXJfMS5kZWZhdWx0KCk7XG59XG5leHBvcnRzLmluaXRBdXRoMCA9IGluaXRBdXRoMDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmJyb3dzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBjcmVhdGVEdW1teUJyb3dzZXJJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0Jyb3dzZXI6IHRydWUsXG4gICAgICAgIGhhbmRsZUxvZ2luOiAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBoYW5kbGVMb2dpbiBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCBmcm9tIHRoZSBzZXJ2ZXIgc2lkZScpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVMb2dvdXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGhhbmRsZUxvZ291dCBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCBmcm9tIHRoZSBzZXJ2ZXIgc2lkZScpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaGFuZGxlQ2FsbGJhY2sgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgZnJvbSB0aGUgc2VydmVyIHNpZGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlUHJvZmlsZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaGFuZGxlUHJvZmlsZSBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCBmcm9tIHRoZSBzZXJ2ZXIgc2lkZScpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTZXNzaW9uOiAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBnZXRTZXNzaW9uIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIGZyb20gdGhlIHNlcnZlciBzaWRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVBdXRoZW50aWNhdGlvbjogKCkgPT4gKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcmVxdWlyZUF1dGhlbnRpY2F0aW9uIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIGZyb20gdGhlIHNlcnZlciBzaWRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuQ2FjaGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRva2VuQ2FjaGUgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgZnJvbSB0aGUgc2VydmVyIHNpZGUnKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVEdW1teUJyb3dzZXJJbnN0YW5jZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluc3RhbmNlLmJyb3dzZXIuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vbGliL2F1dGgwJ1xyXG5cclxuY29uc3QgQXByZW5kZSA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9uZG9cIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cGFnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRcIj4gXHJcbiAgICAgICAgICAgICAgICA8aDMgIGNsYXNzTmFtZT1cInN1YjJcIj5BcHJlbmTDqTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRpdHVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXR1XCI+UmVjb21lbmRhY2lvbmVzIGRlIG5ldGZsaXg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YjFcIj5TZXJpZXMgcGFyYSByZWZsZXhpb25hciwgbWlyYXIgbWFzIGFsbMOhLCBmb3JtYXIgb3BpbmlvbmVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHBhcnJhXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdwYVwiIHNyYz1cIi4vYXNzZXRzL2FwcmVuZGVpbWcuanBnXCI+PC9pbWc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFycmFcIj5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vIGRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gXHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgICAgICAgICBnYWxlcsOtYSBkZSB0ZXh0b3MgeSBsb3MgbWV6Y2zDsyBkZSB0YWwgbWFuZXJhIHF1ZSBsb2dyw7MgaGFjZXIgdW4gbGlicm8gZGUgdGV4dG9zIGVzcGVjaW1lbi4gXHJcbiAgICAgICAgICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhcyBjdWFsZXMgY29udGVuaWFuIHBhc2FqZXMgZGUgTG9yZW0gSXBzdW0sIHkgbcOhcyByZWNpZW50ZW1lbnRlIGNvbiBzb2Z0d2FyZSBkZSBhdXRvZWRpY2nDs24sIGNvbW8gcG9yIGVqZW1wbG8gQWxkdXMgUGFnZU1ha2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBBcHJlbmRlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=