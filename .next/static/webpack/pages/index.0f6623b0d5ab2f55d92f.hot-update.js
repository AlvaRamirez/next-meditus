webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Arriba/index.js":
false,

/***/ "./containers/Home.js":
/*!****************************!*\
  !*** ./containers/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Actividades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Actividades */ "./components/Actividades/index.js");
/* harmony import */ var _components_Videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Videos */ "./components/Videos/index.js");
/* harmony import */ var _components_Nosotros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nosotros */ "./components/Nosotros/index.js");
/* harmony import */ var _components_Contacto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contacto */ "./components/Contacto/index.js");
/* harmony import */ var _components_Inicio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Inicio */ "./components/Inicio/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\containers\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Home = function Home() {
  // function Homedata() {
  //     const getData async () => {
  //         try {
  //             firebaseDB.ref('meditus').once('value', (snapshot) => {
  //             const meditusArr = [];
  //             snapshot.forEach((childSnapshot) => {
  //                 meditusArr.push({
  //                 id: childSnapshot.key,
  //                 ...childSnapshot.val()
  //                 })
  //             })
  //             meditusArr.reverse()
  //                 res.status(200).json(meditusArr);
  //             })
  //         ​
  //             } catch (error) {
  //             console.error(error);
  //             res.status(error.status || 500).json({
  //                 code: error.code,
  //                 error: error.message
  //             });
  //         }};
  //     }
  return __jsx("div", {
    className: "fondo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 10
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Inicio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(_components_Actividades__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_components_Videos__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_components_Nosotros__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_Contacto__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })));
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./node_modules/lodash.throttle/index.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Button.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Element.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Link.js":
false,

/***/ "./node_modules/react-scroll/modules/index.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUVmO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUVLO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLG1FQUNGLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLEVBR0osTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEksRUFJSixNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSSxFQU1KLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5JLEVBT0osTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEksRUFRSixNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSSxDQURILENBRkw7QUFrQkgsQ0E5Q0Q7O0tBQU1BLEk7QUFnRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBmNjYyM2IwZDVhYjJmNTVkOTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY3RpdmlkYWRlcyBmcm9tICcuLi9jb21wb25lbnRzL0FjdGl2aWRhZGVzJ1xyXG5pbXBvcnQgVmlkZW9zIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW9zJ1xyXG5pbXBvcnQgTm9zb3Ryb3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3NvdHJvcydcclxuaW1wb3J0IENvbnRhY3RvIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdG8nXHJcbmltcG9ydCBJbmljaW8gZnJvbSAnLi4vY29tcG9uZW50cy9JbmljaW8nXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIGZ1bmN0aW9uIEhvbWVkYXRhKCkge1xyXG5cclxuICAgIC8vICAgICBjb25zdCBnZXREYXRhIGFzeW5jICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gICAgICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICAgICAgZmlyZWJhc2VEQi5yZWYoJ21lZGl0dXMnKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgbWVkaXR1c0FyciA9IFtdO1xyXG4gICAgLy8gICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoY2hpbGRTbmFwc2hvdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIG1lZGl0dXNBcnIucHVzaCh7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWQ6IGNoaWxkU25hcHNob3Qua2V5LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC4uLmNoaWxkU25hcHNob3QudmFsKClcclxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIG1lZGl0dXNBcnIucmV2ZXJzZSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obWVkaXR1c0Fycik7XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICDigItcclxuICAgIC8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgICAgICAgICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuanNvbih7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29kZTogZXJyb3IuY29kZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH19O1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbmRvXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8SW5pY2lvIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8QWN0aXZpZGFkZXMvPlxyXG4gICAgICAgIDxWaWRlb3MvPlxyXG4gICAgXHJcbiAgICAgICAgPE5vc290cm9zLz5cclxuICAgICAgICA8Q29udGFjdG8vPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=