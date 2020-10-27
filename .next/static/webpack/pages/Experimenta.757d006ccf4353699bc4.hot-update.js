webpackHotUpdate_N_E("pages/Experimenta",{

/***/ "./pages/Experimenta.js":
/*!******************************!*\
  !*** ./pages/Experimenta.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");





var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\pages\\Experimenta.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Experimenta = function Experimenta() {
  _s();

  var _useState = useState([]),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 1),
      name = _useState2[0];

  var getData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              firebaseDB.ref('meditusData').once('value', function (snapshot) {
                var meditusArr = [];
                snapshot.forEach(function (childSnapshot) {
                  meditusArr.push(_objectSpread({
                    id: childSnapshot.key
                  }, childSnapshot.val()));
                }); // escuelasArr.reverse()

                console.log('getData', meditusArr);
                setEscuelas(meditusArr);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getData() {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    getData();
  }, []);
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
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }));
};

_s(Experimenta, "4Mrdg9BMSBnhEassog5Huu3Z74M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRXhwZXJpbWVudGEuanMiXSwibmFtZXMiOlsiRXhwZXJpbWVudGEiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJnZXREYXRhIiwiZmlyZWJhc2VEQiIsInJlZiIsIm9uY2UiLCJzbmFwc2hvdCIsIm1lZGl0dXNBcnIiLCJmb3JFYWNoIiwiY2hpbGRTbmFwc2hvdCIsInB1c2giLCJpZCIsImtleSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRFc2N1ZWxhcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUVYQyxRQUFRLENBQUMsRUFBRCxDQUZHO0FBQUE7QUFBQSxNQUVuQkMsSUFGbUI7O0FBR3RCLE1BQU1DLE9BQU87QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLHdCQUFVLENBQUNDLEdBQVgsQ0FBZSxhQUFmLEVBQThCQyxJQUE5QixDQUFtQyxPQUFuQyxFQUE0QyxVQUFDQyxRQUFELEVBQWM7QUFDdEQsb0JBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBRCx3QkFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUNDLGFBQUQsRUFBbUI7QUFDbENGLDRCQUFVLENBQUNHLElBQVg7QUFDRUMsc0JBQUUsRUFBRUYsYUFBYSxDQUFDRztBQURwQixxQkFFS0gsYUFBYSxDQUFDSSxHQUFkLEVBRkw7QUFJRCxpQkFMRCxFQUZzRCxDQVF0RDs7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JSLFVBQXRCO0FBQ0FTLDJCQUFXLENBQUNULFVBQUQsQ0FBWDtBQUNILGVBWEQ7O0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUEwsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUFiOztBQWNJZSxXQUFTLENBQUMsWUFBTTtBQUNoQmYsV0FBTztBQUNOLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLSixTQUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVSO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxFQUVBO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FEQSxFQUVBO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFGQSxDQUZBLEVBT0E7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFEQSxFQVVLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBVkwsRUFtQks7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFuQkwsRUE0Qks7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixPQUFHLEVBQUMsZ0NBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkwsRUE4Qks7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkE5QkwsRUF1Q0s7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkF2Q0wsRUFnREs7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFoREwsQ0FQQSxDQURSLENBRlEsRUFxRUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckVGLENBREo7QUEyRUMsQ0FqR0w7O0dBQU1ILFc7O0tBQUFBLFc7QUFtR2FBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0V4cGVyaW1lbnRhLjc1N2QwMDZjY2Y0MzUzNjk5YmM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5jb25zdCBFeHBlcmltZW50YSA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFtuYW1lXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlREIucmVmKCdtZWRpdHVzRGF0YScpLm9uY2UoJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZWRpdHVzQXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChjaGlsZFNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG1lZGl0dXNBcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNoaWxkU25hcHNob3Qua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkU25hcHNob3QudmFsKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gZXNjdWVsYXNBcnIucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0RGF0YScsbWVkaXR1c0Fycik7XHJcbiAgICAgICAgICAgICAgICBzZXRFc2N1ZWxhcyhtZWRpdHVzQXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbmRvXCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRwYWdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRcIj4gXHJcbiAgICAgICAgPGgzICBjbGFzc05hbWU9XCJzdWIyXCI+RXhwZXJpbWVudMOhPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRpdHVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dVwiPlByb2Nlc28gZGUgcHVyaWZpY2FjacOzbiBtZW50YWw8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWIxXCI+UmVtZW1vcmFyLCByZWZsZXhpb25hciwgZGVqYXIgaXIsIHNvbHRhcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRwYXJyYVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnJhXCI+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubyBkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIFxyXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uIFxyXG4gICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICBsYXMgY3VhbGVzIGNvbnRlbmlhbiBwYXNhamVzIGRlIExvcmVtIElwc3VtLCB5IG3DoXMgcmVjaWVudGVtZW50ZSBjb24gc29mdHdhcmUgZGUgYXV0b2VkaWNpw7NuLCBjb21vIHBvciBlamVtcGxvIEFsZHVzIFBhZ2VNYWtlcixcclxuICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG5cclxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnJhXCI+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubyBkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIFxyXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uIFxyXG4gICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICBsYXMgY3VhbGVzIGNvbnRlbmlhbiBwYXNhamVzIGRlIExvcmVtIElwc3VtLCB5IG3DoXMgcmVjaWVudGVtZW50ZSBjb24gc29mdHdhcmUgZGUgYXV0b2VkaWNpw7NuLCBjb21vIHBvciBlamVtcGxvIEFsZHVzIFBhZ2VNYWtlcixcclxuICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG5cclxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnJhXCI+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubyBkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIFxyXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uIFxyXG4gICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICBsYXMgY3VhbGVzIGNvbnRlbmlhbiBwYXNhamVzIGRlIExvcmVtIElwc3VtLCB5IG3DoXMgcmVjaWVudGVtZW50ZSBjb24gc29mdHdhcmUgZGUgYXV0b2VkaWNpw7NuLCBjb21vIHBvciBlamVtcGxvIEFsZHVzIFBhZ2VNYWtlcixcclxuICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG5cclxuICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1ncGFcIiBzcmM9XCIuL2Fzc2V0cy9leHBlcmltZW50YXBydWViYS5wbmdcIj48L2ltZz5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIClcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBFeHBlcmltZW50YVxyXG4iXSwic291cmNlUm9vdCI6IiJ9