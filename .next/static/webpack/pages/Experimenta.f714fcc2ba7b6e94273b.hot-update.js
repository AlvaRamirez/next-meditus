webpackHotUpdate_N_E("pages/Experimenta",{

/***/ "./components/Aporte/index.js":
/*!************************************!*\
  !*** ./components/Aporte/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\components\\Aporte\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Aporte = function Aporte() {
  return __jsx("div", {
    id: "contdona",
    "mp-mode": "dftl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "donar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Si este texto te aporto valor, estamos abiertos a un peque\xF1o para poder seguir generando este tipo de contenido"), __jsx("a", {
    id: "botondona",
    href: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=449368404-a0ad8847-74f7-4c37-b974-ef685f8671a9",
    name: "MP-payButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "  Aportar  "));
};

_c = Aporte;
/* harmony default export */ __webpack_exports__["default"] = (Aporte);

var _c;

$RefreshReg$(_c, "Aporte");

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

/***/ "./pages/Experimenta.js":
/*!******************************!*\
  !*** ./pages/Experimenta.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Aporte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Aporte */ "./components/Aporte/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\pages\\Experimenta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Experimenta = function Experimenta() {
  // const [name] = useState([]);
  //     const getData = async () => {
  //             firebaseDB.ref('meditusData').once('value', (snapshot) => {
  //                 const meditusArr = [];
  //                 snapshot.forEach((childSnapshot) => {
  //                   meditusArr.push({
  //                     id: childSnapshot.key,
  //                     ...childSnapshot.val()
  //                 })
  //                 })
  //                 // escuelasArr.reverse()
  //                 console.log('getData',meditusArr);
  //                 setEscuelas(meditusArr);
  //             })
  //         };
  //         useEffect(() => {
  //         getData();
  //         }, []);
  return __jsx("div", {
    className: "fondo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "contpag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "context",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "sub2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Experiment\xE1"), __jsx("div", {
    className: "contitu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "titu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Proceso de purificaci\xF3n mental"), __jsx("h2", {
    className: "sub1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Rememorar, reflexionar, dejar ir, soltar")), __jsx("div", {
    className: "contparra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("img", {
    className: "imgpa",
    src: "./assets/experimentaprueba.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 14
    }
  }), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.")), __jsx(_components_Aporte__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 12
    }
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }));
};

_c = Experimenta;
/* harmony default export */ __webpack_exports__["default"] = (Experimenta);

var _c;

$RefreshReg$(_c, "Experimenta");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcG9ydGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0V4cGVyaW1lbnRhLmpzIl0sIm5hbWVzIjpbIkFwb3J0ZSIsIkV4cGVyaW1lbnRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsU0FFSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGVBQVEsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsTUFBRSxFQUFDLE9BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwSEFEQSxFQUVKO0FBQUcsTUFBRSxFQUFDLFdBQU47QUFBa0IsUUFBSSxFQUFDLDRHQUF2QjtBQUFvSSxRQUFJLEVBQUMsY0FBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSSxDQUZKO0FBV0gsQ0FaRDs7S0FBTUEsTTtBQWNTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHSSxTQUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVSO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxFQUVBO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FEQSxFQUVBO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFGQSxDQUZBLEVBT0E7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFEQSxFQVVLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBVkwsRUFtQks7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFuQkwsRUE0Qks7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixPQUFHLEVBQUMsZ0NBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkwsRUE4Qks7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkE5QkwsRUF1Q0s7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkF2Q0wsRUFnREs7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFoREwsQ0FQQSxFQWlFRyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRUgsQ0FEUixDQUZRLEVBd0VFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhFRixDQURKO0FBOEVDLENBcEdMOztLQUFNQSxXO0FBc0dhQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9FeHBlcmltZW50YS5mNzE0ZmNjMmJhN2I2ZTk0MjczYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXBvcnRlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGRvbmFcIiBtcC1tb2RlPVwiZGZ0bFwiPlxyXG4gICAgICAgIDxwIGlkPVwiZG9uYXJcIj5TaSBlc3RlIHRleHRvIHRlIGFwb3J0byB2YWxvciwgZXN0YW1vcyBhYmllcnRvcyBhIHVuIHBlcXVlw7FvIHBhcmEgcG9kZXIgc2VndWlyIGdlbmVyYW5kbyBlc3RlIHRpcG8gZGUgY29udGVuaWRvPC9wPlxyXG4gICAgPGEgaWQ9XCJib3RvbmRvbmFcIiBocmVmPVwiaHR0cHM6Ly93d3cubWVyY2Fkb3BhZ28uY29tLmFyL2NoZWNrb3V0L3YxL3JlZGlyZWN0P3ByZWZfaWQ9NDQ5MzY4NDA0LWEwYWQ4ODQ3LTc0ZjctNGMzNy1iOTc0LWVmNjg1Zjg2NzFhOVwiIG5hbWU9XCJNUC1wYXlCdXR0b25cIj4gIEFwb3J0YXIgIDwvYT4gXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBvcnRlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgQXBvcnRlIGZyb20gJy4uL2NvbXBvbmVudHMvQXBvcnRlJ1xyXG5jb25zdCBFeHBlcmltZW50YSA9ICgpID0+IHtcclxuXHJcbi8vIGNvbnN0IFtuYW1lXSA9IHVzZVN0YXRlKFtdKTtcclxuLy8gICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGZpcmViYXNlREIucmVmKCdtZWRpdHVzRGF0YScpLm9uY2UoJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBtZWRpdHVzQXJyID0gW107XHJcbi8vICAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChjaGlsZFNuYXBzaG90KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgIG1lZGl0dXNBcnIucHVzaCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWQ6IGNoaWxkU25hcHNob3Qua2V5LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkU25hcHNob3QudmFsKClcclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgLy8gZXNjdWVsYXNBcnIucmV2ZXJzZSgpXHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0RGF0YScsbWVkaXR1c0Fycik7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRFc2N1ZWxhcyhtZWRpdHVzQXJyKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgZ2V0RGF0YSgpO1xyXG4vLyAgICAgICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbmRvXCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRwYWdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRcIj4gXHJcbiAgICAgICAgPGgzICBjbGFzc05hbWU9XCJzdWIyXCI+RXhwZXJpbWVudMOhPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRpdHVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dVwiPlByb2Nlc28gZGUgcHVyaWZpY2FjacOzbiBtZW50YWw8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWIxXCI+UmVtZW1vcmFyLCByZWZsZXhpb25hciwgZGVqYXIgaXIsIHNvbHRhcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRwYXJyYVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnJhXCI+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubyBkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIFxyXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uIFxyXG4gICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICBsYXMgY3VhbGVzIGNvbnRlbmlhbiBwYXNhamVzIGRlIExvcmVtIElwc3VtLCB5IG3DoXMgcmVjaWVudGVtZW50ZSBjb24gc29mdHdhcmUgZGUgYXV0b2VkaWNpw7NuLCBjb21vIHBvciBlamVtcGxvIEFsZHVzIFBhZ2VNYWtlcixcclxuICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG5cclxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnJhXCI+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubyBkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIFxyXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uIFxyXG4gICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICBsYXMgY3VhbGVzIGNvbnRlbmlhbiBwYXNhamVzIGRlIExvcmVtIElwc3VtLCB5IG3DoXMgcmVjaWVudGVtZW50ZSBjb24gc29mdHdhcmUgZGUgYXV0b2VkaWNpw7NuLCBjb21vIHBvciBlamVtcGxvIEFsZHVzIFBhZ2VNYWtlcixcclxuICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG5cclxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnJhXCI+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubyBkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIFxyXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uIFxyXG4gICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICBsYXMgY3VhbGVzIGNvbnRlbmlhbiBwYXNhamVzIGRlIExvcmVtIElwc3VtLCB5IG3DoXMgcmVjaWVudGVtZW50ZSBjb24gc29mdHdhcmUgZGUgYXV0b2VkaWNpw7NuLCBjb21vIHBvciBlamVtcGxvIEFsZHVzIFBhZ2VNYWtlcixcclxuICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG5cclxuICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1ncGFcIiBzcmM9XCIuL2Fzc2V0cy9leHBlcmltZW50YXBydWViYS5wbmdcIj48L2ltZz5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPEFwb3J0ZS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIClcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBFeHBlcmltZW50YVxyXG4iXSwic291cmNlUm9vdCI6IiJ9