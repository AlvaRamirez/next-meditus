webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/user */ "./lib/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\components\\Header\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import * as Scroll from 'react-scroll'




var Header = function Header() {
  return __jsx("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "meditu",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "hvr-grow",
    id: "logo",
    src: "./assets/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }), " ")), __jsx("ul", {
    className: "Ul-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "actividades",
    spy: true,
    smooth: true,
    offset: 0,
    duration: 1100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Actividades")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "videos",
    spy: true,
    smooth: true,
    offset: -250,
    duration: 1100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Videos")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "nosotros",
    spy: true,
    smooth: true,
    offset: -80,
    duration: 1100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Nosotros")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "contacto",
    spy: true,
    smooth: true,
    offset: 225,
    duration: 1100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Contacto"))), __jsx("div", {
    className: "ml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "  ", __jsx("a", {
    "mp-mode": "dftl",
    href: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=449368404-a0ad8847-74f7-4c37-b974-ef685f8671a9",
    name: "MP-payButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, " ", __jsx("img", {
    id: "mercado",
    src: "./assets/mercadopago.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 182
    }
  }), " "), " "), !loading && user ? __jsx("a", {
    href: "/api/logout",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Logout") : __jsx("a", {
    href: "/api/login",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Login"));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/user.js":
/*!*********************!*\
  !*** ./lib/user.js ***!
  \*********************/
/*! exports provided: fetchUser, useFetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchUser", function() { return useFetchUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();


function fetchUser() {
  return _fetchUser.apply(this, arguments);
}

function _fetchUser() {
  _fetchUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cookie,
        res,
        json,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookie = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';

            if (!( true && window.__user)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", window.__user);

          case 3:
            _context.next = 5;
            return fetch('/api/me', cookie ? {
              headers: {
                cookie: cookie
              }
            } : {});

          case 5:
            res = _context.sent;

            if (res.ok) {
              _context.next = 9;
              break;
            }

            delete window.__user;
            return _context.abrupt("return", null);

          case 9:
            _context.next = 11;
            return res.json();

          case 11:
            json = _context.sent;

            if (true) {
              window.__user = json;
            }

            return _context.abrupt("return", json);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchUser.apply(this, arguments);
}

function useFetchUser() {
  _s();

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      required = _ref.required;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return !( true && window.__user);
  }),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    if (false) {}

    return window.__user || null;
  }),
      user = _useState2[0],
      setUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!loading && user) {
      return;
    }

    setLoading(true);
    var isMounted = true;
    fetchUser().then(function (user) {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !user) {
          window.location.href = '/api/login';
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });
    return function () {
      isMounted = false;
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return {
    user: user,
    loading: loading
  };
}

_s(useFetchUser, "FrGmC3Sfs+IdtiKnUw7ICVE+8o0=");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJsb2FkaW5nIiwidXNlciIsImZldGNoVXNlciIsImNvb2tpZSIsIndpbmRvdyIsIl9fdXNlciIsImZldGNoIiwiaGVhZGVycyIsInJlcyIsIm9rIiwianNvbiIsInVzZUZldGNoVXNlciIsInJlcXVpcmVkIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwic2V0VXNlciIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsInRoZW4iLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQVEsYUFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVUsTUFBRSxFQUFDLFFBQWI7QUFBdUIsUUFBSSxFQUFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixNQUFFLEVBQUMsTUFBN0I7QUFBb0MsT0FBRyxFQUFDLG1CQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosTUFERCxDQURGLEVBTUU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtB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QUFDYjtBQUNBLFlBQUlMLFFBQVEsSUFBSSxDQUFDWCxJQUFqQixFQUF1QjtBQUNyQkcsZ0JBQU0sQ0FBQ2UsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsWUFBdkI7QUFDQTtBQUNEOztBQUNETCxlQUFPLENBQUNkLElBQUQsQ0FBUDtBQUNBYSxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FYRDtBQWFBLFdBQU8sWUFBTTtBQUNYRyxlQUFTLEdBQUcsS0FBWjtBQUNELEtBRkQ7QUFHRCxHQXhCTSxFQXlCUDtBQUNBLElBMUJPLENBQVQ7QUE2QkEsU0FBTztBQUFFaEIsUUFBSSxFQUFKQSxJQUFGO0FBQVFELFdBQU8sRUFBUEE7QUFBUixHQUFQO0FBQ0Q7O0dBMUNlVyxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmhCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzRiNGJlNzMwOGEwZjJiM2VlMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuLy9pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIE5leHRMaW5rIH0gZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi8uLi9saWIvdXNlcidcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgIDxOZXh0TGluayBpZD1cIm1lZGl0dVwiICBocmVmPVwiL1wiPlxyXG4gICAgICAgPGEgPjxpbWcgY2xhc3NOYW1lPVwiaHZyLWdyb3dcIiBpZD1cImxvZ29cIiBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPjwvaW1nPiA8L2E+XHJcblxyXG4gICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIlVsLWhlYWRlclwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgdG89XCJhY3RpdmlkYWRlc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBY3RpdmlkYWRlczwvTGluaz5cclxuXHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cInZpZGVvc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ey0yNTB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWRlb3M8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cIm5vc290cm9zXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17LTgwfVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTm9zb3Ryb3M8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cImNvbnRhY3RvXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17MjI1fVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29udGFjdG88L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sXCI+ICA8YSBtcC1tb2RlPVwiZGZ0bFwiIGhyZWY9XCJodHRwczovL3d3dy5tZXJjYWRvcGFnby5jb20uYXIvY2hlY2tvdXQvdjEvcmVkaXJlY3Q/cHJlZl9pZD00NDkzNjg0MDQtYTBhZDg4NDctNzRmNy00YzM3LWI5NzQtZWY2ODVmODY3MWE5XCIgbmFtZT1cIk1QLXBheUJ1dHRvblwiPiA8aW1nIGlkPVwibWVyY2Fkb1wiIHNyYz1cIi4vYXNzZXRzL21lcmNhZG9wYWdvLnBuZ1wiPjwvaW1nPiA8L2E+IDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgeyFsb2FkaW5nICYmIHVzZXIgPyAoXHJcbiAgICAgICAgICA8YSBocmVmPVwiL2FwaS9sb2dvdXRcIiBjbGFzc05hbWU9XCJwcm9maWxlTGlua1wiPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9hcGkvbG9naW5cIiBjbGFzc05hbWU9XCJwcm9maWxlTGlua1wiPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICl9XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjb29raWUgPSAnJykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fdXNlcikge1xuICAgIHJldHVybiB3aW5kb3cuX191c2VyXG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnL2FwaS9tZScsXG4gICAgY29va2llXG4gICAgICA/IHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBjb29raWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgOiB7fVxuICApXG5cbiAgaWYgKCFyZXMub2spIHtcbiAgICBkZWxldGUgd2luZG93Ll9fdXNlclxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuX191c2VyID0ganNvblxuICB9XG4gIHJldHVybiBqc29uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGZXRjaFVzZXIoeyByZXF1aXJlZCB9ID0ge30pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKVxuICApXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5fX3VzZXIgfHwgbnVsbFxuICB9KVxuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoIWxvYWRpbmcgJiYgdXNlcikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGxldCBpc01vdW50ZWQgPSB0cnVlXG5cbiAgICAgIGZldGNoVXNlcigpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgLy8gT25seSBzZXQgdGhlIHVzZXIgaWYgdGhlIGNvbXBvbmVudCBpcyBzdGlsbCBtb3VudGVkXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gYnV0IGxvZ2luIGlzIHJlcXVpcmVkXG4gICAgICAgICAgaWYgKHJlcXVpcmVkICYmICF1c2VyKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2xvZ2luJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFVzZXIodXNlcilcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtdXG4gIClcblxuICByZXR1cm4geyB1c2VyLCBsb2FkaW5nIH1cbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=