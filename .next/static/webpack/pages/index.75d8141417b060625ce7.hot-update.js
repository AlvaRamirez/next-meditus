webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Actividades/index.js":
/*!*****************************************!*\
  !*** ./components/Actividades/index.js ***!
  \*****************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Actividades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");


var _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\components\\Actividades\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Actividades() {
  return __jsx("div", {
    id: "actividades",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 18
    }
  }, __jsx("h1", {
    className: "seccion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Actividades"), __jsx("div", {
    id: "contnoo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    id: "izq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Aprende",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "hvr-float",
    id: "imgder",
    src: "./assets/Grupo 104.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  })))), __jsx("div", {
    id: "der",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Experimenta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, __jsx("img", {
    className: "hvr-float",
    id: "imgiz",
    src: "./assets/Grupo 103.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  })))))));
} // Protection page

_c = Actividades;
function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res, session;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, res = _ref.res;
            _context.next = 3;
            return _lib_auth0__WEBPACK_IMPORTED_MODULE_4__["default"].getSession(req);

          case 3:
            session = _context.sent;

            if (!(!session || !session.user)) {
              _context.next = 8;
              break;
            }

            res.writeHead(302, {
              Location: "/api/login"
            });
            res.end();
            return _context.abrupt("return", {});

          case 8:
            return _context.abrupt("return", {
              props: {
                user: session.user
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Actividades");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3RpdmlkYWRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBY3RpdmlkYWRlcyIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsImF1dGgwIiwiZ2V0U2Vzc2lvbiIsInNlc3Npb24iLCJ1c2VyIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVVBLFdBQVYsR0FBeUI7QUFJcEMsU0FHZ0I7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Q7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURDLEVBR0c7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxNQUFFLEVBQUMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFVLFFBQUksRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixNQUFFLEVBQUMsUUFBOUI7QUFBdUMsT0FBRyxFQUFDLHdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosQ0FGSixDQURKLENBREEsRUFRSTtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTRCLE1BQUUsRUFBQyxPQUEvQjtBQUF1QyxPQUFHLEVBQUMsd0JBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSixDQUZSLENBREEsQ0FSSixDQUhILENBREcsQ0FIaEI7QUFpQ0gsQyxDQUVEOztLQXZDeUJBLFc7QUF3Q2xCLFNBQWVDLGtCQUF0QjtBQUFBO0FBQUE7Ozt5TUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0NDLGVBQXBDLFFBQW9DQSxHQUFwQyxFQUF5Q0MsR0FBekMsUUFBeUNBLEdBQXpDO0FBQUE7QUFBQSxtQkFDbUJDLGtEQUFLLENBQUNDLFVBQU4sQ0FBaUJILEdBQWpCLENBRG5COztBQUFBO0FBQ0dJLG1CQURIOztBQUFBLGtCQUVDLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNDLElBRnRCO0FBQUE7QUFBQTtBQUFBOztBQUdESixlQUFHLENBQUNLLFNBQUosQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCQyxzQkFBUSxFQUFFO0FBRE8sYUFBbkI7QUFHQU4sZUFBRyxDQUFDTyxHQUFKO0FBTkMsNkNBT00sRUFQTjs7QUFBQTtBQUFBLDZDQVNJO0FBQUVDLG1CQUFLLEVBQUU7QUFBRUosb0JBQUksRUFBRUQsT0FBTyxDQUFDQztBQUFoQjtBQUFULGFBVEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NWQ4MTQxNDE3YjA2MDYyNWNlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIE5leHRMaW5rIH0gZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vbGliL2F1dGgwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIEFjdGl2aWRhZGVzKCkgIHtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWN0aXZpZGFkZXNcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWNjaW9uXCI+QWN0aXZpZGFkZXM8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udG5vb1wiPiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXpxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL0FwcmVuZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID48aW1nIGNsYXNzTmFtZT1cImh2ci1mbG9hdFwiIGlkPVwiaW1nZGVyXCIgc3JjPVwiLi9hc3NldHMvR3J1cG8gMTA0LnBuZ1wiPjwvaW1nPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvRXhwZXJpbWVudGFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID48aW1nIGNsYXNzTmFtZT1cImh2ci1mbG9hdFwiICBpZD1cImltZ2l6XCIgc3JjPVwiLi9hc3NldHMvR3J1cG8gMTAzLnBuZ1wiPjwvaW1nPjwvYT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgIClcclxuIFxyXG5cclxufVxyXG5cclxuLy8gUHJvdGVjdGlvbiBwYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEpO1xyXG4gICAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgICAgcmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICBMb2NhdGlvbjogXCIvYXBpL2xvZ2luXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciB9IH07XHJcbiAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==