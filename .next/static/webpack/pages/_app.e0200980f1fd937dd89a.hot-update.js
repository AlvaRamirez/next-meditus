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
  }, __jsx("div", {
    className: "ml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "meditu",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "hvr-grow",
    id: "logo",
    src: "./assets/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }), " "))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    spy: true,
    smooth: true,
    offset: 0,
    duration: 1100,
    to: "meditu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }, "a")), __jsx("ul", {
    className: "Ul-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Actividades")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Videos")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Nosotros")), __jsx("li", {
    className: "Li-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 11
    }
  }, "Contacto"))), __jsx("div", {
    className: "ml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, !loading && user ? __jsx("a", {
    href: "/api/logout",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Logout") : __jsx("a", {
    href: "/api/login",
    className: "profileLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlRmV0Y2hVc2VyIiwidXNlciIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxzQkFFT0MsOERBQVksRUFGbkI7QUFBQSxNQUVYQyxJQUZXLGlCQUVYQSxJQUZXO0FBQUEsTUFFTEMsT0FGSyxpQkFFTEEsT0FGSzs7QUFJbkIsU0FDRTtBQUFRLGFBQVMsRUFBQyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUc7QUFBSyxhQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0QsTUFBQyxnREFBRDtBQUVBLE1BQUUsRUFBQyxRQUZIO0FBRWMsUUFBSSxFQUFDLEdBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixNQUFFLEVBQUMsTUFBN0I7QUFBb0MsT0FBRyxFQUFDLG1CQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosTUFKRCxDQURDLENBRkgsRUFZRSxNQUFDLGlEQUFEO0FBQU0sT0FBRyxFQUFFLElBQVg7QUFDQyxVQUFNLEVBQUUsSUFEVDtBQUVDLFVBQU0sRUFBRSxDQUZUO0FBR0MsWUFBUSxFQUFFLElBSFg7QUFJQyxNQUFFLEVBQUMsUUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5ILENBWkYsRUFxQkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLGFBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLENBTFY7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFjRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQ0UsZUFBVyxFQUFDLFFBRGQ7QUFFRSxNQUFFLEVBQUMsUUFGTDtBQUdFLE9BQUcsRUFBRSxJQUhQO0FBSUUsVUFBTSxFQUFFLElBSlY7QUFLRSxVQUFNLEVBQUUsQ0FBQyxHQUxYO0FBTUUsWUFBUSxFQUFFLElBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBZEYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLENBQUMsRUFMWDtBQU1FLFlBQVEsRUFBRSxJQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0ExQkYsRUFzQ0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQVcsRUFBQyxRQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxPQUFHLEVBQUUsSUFIUDtBQUlFLFVBQU0sRUFBRSxJQUpWO0FBS0UsVUFBTSxFQUFFLEdBTFY7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBdENGLENBckJGLEVBeUVFO0FBQUssYUFBUyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVDLENBQUNBLE9BQUQsSUFBWUQsSUFBWixHQUNHO0FBQUcsUUFBSSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxHQUtHO0FBQUcsUUFBSSxFQUFDLFlBQVI7QUFBcUIsYUFBUyxFQUFDLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixDQXpFRixDQURGO0FBeUZELENBN0ZEOztHQUFNRixNO1VBRXNCQyxzRDs7O0tBRnRCRCxNO0FBK0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUwMjAwOTgwZjFmZDkzN2RkODlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcbi8vaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBOZXh0TGluayB9IGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vLi4vbGliL3VzZXInXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cclxuICAgICBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWxcIj5cclxuICAgICAgPE5leHRMaW5rIFxyXG4gICAgICBcclxuICAgICAgaWQ9XCJtZWRpdHVcIiAgIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICA8YSA+PGltZyBjbGFzc05hbWU9XCJodnItZ3Jvd1wiIGlkPVwibG9nb1wiIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+PC9pbWc+IDwvYT5cclxuXHJcbiAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPExpbmsgc3B5PXt0cnVlfVxyXG4gICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgZHVyYXRpb249ezExMDB9XHJcbiAgICAgICB0bz1cIm1lZGl0dVwiXHJcbiAgICAgICA+XHJcbiAgICAgICAgIDxkaXY+YTwvZGl2PlxyXG4gICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIlVsLWhlYWRlclwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgdG89XCJhY3RpdmlkYWRlc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBY3RpdmlkYWRlczwvTGluaz5cclxuXHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cInZpZGVvc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ey0yNTB9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMTAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWRlb3M8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cIm5vc290cm9zXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17LTgwfVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTm9zb3Ryb3M8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWhlYWRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cImNvbnRhY3RvXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG9mZnNldD17MjI1fVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTEwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29udGFjdG88L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sXCI+IFxyXG4gICAgICBcclxuICAgICAgeyFsb2FkaW5nICYmIHVzZXIgPyAoXHJcbiAgICAgICAgICA8YSBocmVmPVwiL2FwaS9sb2dvdXRcIiBjbGFzc05hbWU9XCJwcm9maWxlTGlua1wiPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9hcGkvbG9naW5cIiBjbGFzc05hbWU9XCJwcm9maWxlTGlua1wiPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==