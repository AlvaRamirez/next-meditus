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
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\components\\Header\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import * as Scroll from 'react-scroll'




var Header = function Header() {
  _s();

  var _useFetchUser = Object(_lib_user__WEBPACK_IMPORTED_MODULE_3__["useFetchUser"])(),
      user = _useFetchUser.user,
      loading = _useFetchUser.loading;

  return __jsx("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    spy: true,
    smooth: true,
    offset: 0,
    duration: 1100,
    to: "meditu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "ml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "meditu",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "hvr-grow",
    id: "logo",
    src: "./assets/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }
  }), " "))), __jsx("ul", {
    className: "Ul-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Actividades")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Videos")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Nosotros")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Contacto"))), __jsx("div", {
    className: "ml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, !loading && user ? __jsx("a", {
    href: "/api/logout",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Logout") : __jsx("a", {
    href: "/api/login",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "Login")));
};

_s(Header, "JpiAqbHTXuQ4FR7jQr+upiuzJT8=", false, function () {
  return [_lib_user__WEBPACK_IMPORTED_MODULE_3__["useFetchUser"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlRmV0Y2hVc2VyIiwidXNlciIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxzQkFFT0MsOERBQVksRUFGbkI7QUFBQSxNQUVYQyxJQUZXLGlCQUVYQSxJQUZXO0FBQUEsTUFFTEMsT0FGSyxpQkFFTEEsT0FGSzs7QUFJbkIsU0FDRTtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFNLE9BQUcsRUFBRSxJQUFYO0FBQ0MsVUFBTSxFQUFFLElBRFQ7QUFFQyxVQUFNLEVBQUUsQ0FGVDtBQUdDLFlBQVEsRUFBRSxJQUhYO0FBSUMsTUFBRSxFQUFDLFFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBV0c7QUFBSyxhQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0QsTUFBQyxnREFBRDtBQUlBLE1BQUUsRUFBQyxRQUpIO0FBSWEsUUFBSSxFQUFDLEdBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixNQUFFLEVBQUMsTUFBN0I7QUFBb0MsT0FBRyxFQUFDLG1CQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosTUFORCxDQURDLENBWEgsRUF1QkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLGFBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLENBTFY7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFjRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsZUFBVyxFQUFDLFFBRGQ7QUFFRSxNQUFFLEVBQUMsUUFGTDtBQUdFLE9BQUcsRUFBRSxJQUhQO0FBSUUsVUFBTSxFQUFFLElBSlY7QUFLRSxVQUFNLEVBQUUsQ0FBQyxHQUxYO0FBTUUsWUFBUSxFQUFFLElBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBZEYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLENBQUMsRUFMWDtBQU1FLFlBQVEsRUFBRSxJQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0ExQkYsRUFzQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLEdBTFY7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBdENGLENBdkJGLEVBMkVFO0FBQUssYUFBUyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVDLENBQUNBLE9BQUQsSUFBWUQsSUFBWixHQUNHO0FBQUcsUUFBSSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxHQUtHO0FBQUcsUUFBSSxFQUFDLFlBQVI7QUFBcUIsYUFBUyxFQUFDLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixDQTNFRixDQURGO0FBMkZELENBL0ZEOztHQUFNRixNO1VBRXNCQyxzRDs7O0tBRnRCRCxNO0FBaUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUzY2Q3OGY0ZjQzZGNjMjg1OWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcbi8vaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBOZXh0TGluayB9IGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vLi4vbGliL3VzZXInXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cclxuICAgICAgPExpbmsgc3B5PXt0cnVlfVxyXG4gICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgZHVyYXRpb249ezExMDB9XHJcbiAgICAgICB0bz1cIm1lZGl0dVwiXHJcbiAgICAgICA+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICA8L0xpbms+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sXCI+XHJcbiAgICAgIDxOZXh0TGluayBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgaWQ9XCJtZWRpdHVcIiAgaHJlZj1cIi9cIj5cclxuICAgICAgICBcclxuICAgICAgIDxhID48aW1nIGNsYXNzTmFtZT1cImh2ci1ncm93XCIgaWQ9XCJsb2dvXCIgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj48L2ltZz4gPC9hPlxyXG5cclxuICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiVWwtaGVhZGVyXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cImFjdGl2aWRhZGVzXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17MH1cclxuICAgICAgICAgICAgZHVyYXRpb249ezExMDB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFjdGl2aWRhZGVzPC9MaW5rPlxyXG5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiTGktaGVhZGVyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHRvPVwidmlkZW9zXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17LTI1MH1cclxuICAgICAgICAgICAgZHVyYXRpb249ezExMDB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFZpZGVvczwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiTGktaGVhZGVyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHRvPVwibm9zb3Ryb3NcIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgb2Zmc2V0PXstODB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOb3NvdHJvczwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiTGktaGVhZGVyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHRvPVwiY29udGFjdG9cIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgb2Zmc2V0PXsyMjV9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb250YWN0bzwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWxcIj4gXHJcbiAgICAgIFxyXG4gICAgICB7IWxvYWRpbmcgJiYgdXNlciA/IChcclxuICAgICAgICAgIDxhIGhyZWY9XCIvYXBpL2xvZ291dFwiIGNsYXNzTmFtZT1cInByb2ZpbGVMaW5rXCI+XHJcbiAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YSBocmVmPVwiL2FwaS9sb2dpblwiIGNsYXNzTmFtZT1cInByb2ZpbGVMaW5rXCI+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICBcclxuICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9