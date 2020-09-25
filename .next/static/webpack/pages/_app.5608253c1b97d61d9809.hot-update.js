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
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "meditu",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "hvr-grow",
    id: "logo",
    src: "./assets/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }), " ")), __jsx("ul", {
    className: "Ul-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Actividades")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Videos")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Nosotros")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Contacto"))), __jsx("div", {
    className: "ml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "  ", __jsx("a", {
    "mp-mode": "dftl",
    href: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=449368404-a0ad8847-74f7-4c37-b974-ef685f8671a9",
    name: "MP-payButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, " ", __jsx("img", {
    id: "mercado",
    src: "./assets/mercadopago.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 182
    }
  }), " "), " "), !loading && user ? __jsx("a", {
    href: "/api/logout",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Logout") : __jsx("a", {
    href: "/api/login",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwibG9hZGluZyIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQVEsYUFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVUsTUFBRSxFQUFDLFFBQWI7QUFBdUIsUUFBSSxFQUFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixNQUFFLEVBQUMsTUFBN0I7QUFBb0MsT0FBRyxFQUFDLG1CQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosTUFERCxDQURGLEVBTUU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLGFBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLENBTFY7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFjRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsZUFBVyxFQUFDLFFBRGQ7QUFFRSxNQUFFLEVBQUMsUUFGTDtBQUdFLE9BQUcsRUFBRSxJQUhQO0FBSUUsVUFBTSxFQUFFLElBSlY7QUFLRSxVQUFNLEVBQUUsQ0FBQyxHQUxYO0FBTUUsWUFBUSxFQUFFLElBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBZEYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLENBQUMsRUFMWDtBQU1FLFlBQVEsRUFBRSxJQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0ExQkYsRUFzQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLEdBTFY7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBdENGLENBTkYsRUEwREU7QUFBSyxhQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXNCO0FBQUcsZUFBUSxNQUFYO0FBQWtCLFFBQUksRUFBQyw0R0FBdkI7QUFBb0ksUUFBSSxFQUFDLGNBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBeUo7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixPQUFHLEVBQUMsMEJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBekosTUFBdEIsTUExREYsRUE0REcsQ0FBQ0MsT0FBRCxJQUFZQyxJQUFaLEdBQ0c7QUFBRyxRQUFJLEVBQUMsYUFBUjtBQUFzQixhQUFTLEVBQUMsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILEdBS0c7QUFBRyxRQUFJLEVBQUMsWUFBUjtBQUFxQixhQUFTLEVBQUMsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpFTixDQURGO0FBd0VELENBekVEOztLQUFNRixNO0FBMkVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2MDgyNTNjMWI5N2Q2MWQ5ODA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcbi8vaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBOZXh0TGluayB9IGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgIDxOZXh0TGluayBpZD1cIm1lZGl0dVwiICBocmVmPVwiL1wiPlxyXG4gICAgICAgPGEgPjxpbWcgY2xhc3NOYW1lPVwiaHZyLWdyb3dcIiBpZD1cImxvZ29cIiBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPjwvaW1nPiA8L2E+XHJcblxyXG4gICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIlVsLWhlYWRlclwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgdG89XCJhY3RpdmlkYWRlc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBY3RpdmlkYWRlczwvTGluaz5cclxuXHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cInZpZGVvc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ey0yNTB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWRlb3M8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cIm5vc290cm9zXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17LTgwfVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTm9zb3Ryb3M8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cImNvbnRhY3RvXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17MjI1fVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29udGFjdG88L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sXCI+ICA8YSBtcC1tb2RlPVwiZGZ0bFwiIGhyZWY9XCJodHRwczovL3d3dy5tZXJjYWRvcGFnby5jb20uYXIvY2hlY2tvdXQvdjEvcmVkaXJlY3Q/cHJlZl9pZD00NDkzNjg0MDQtYTBhZDg4NDctNzRmNy00YzM3LWI5NzQtZWY2ODVmODY3MWE5XCIgbmFtZT1cIk1QLXBheUJ1dHRvblwiPiA8aW1nIGlkPVwibWVyY2Fkb1wiIHNyYz1cIi4vYXNzZXRzL21lcmNhZG9wYWdvLnBuZ1wiPjwvaW1nPiA8L2E+IDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgeyFsb2FkaW5nICYmIHVzZXIgPyAoXHJcbiAgICAgICAgICA8YSBocmVmPVwiL2FwaS9sb2dvdXRcIiBjbGFzc05hbWU9XCJwcm9maWxlTGlua1wiPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9hcGkvbG9naW5cIiBjbGFzc05hbWU9XCJwcm9maWxlTGlua1wiPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICl9XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=