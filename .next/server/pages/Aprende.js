module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Aprende.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\components\\Footer\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "contfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "Ul-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "Li-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }
  }, " ", __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 43
    }
  }, "T\xE9rminos y condiciones")), __jsx("li", {
    className: "Li-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 43
    }
  }, "Pol\xEDticas de privacidad"), " "), __jsx("li", {
    id: "copy",
    className: "Li-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, "Copyright \xA9 2020 M\xE9ditus S.R.L")), __jsx("ul", {
    className: "Ul-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "Li-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 14
    }
  }, " ", __jsx("a", {
    href: 'https://www.facebook.com',
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "./assets/facebook.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 94
    }
  }))), __jsx("li", {
    className: "Li-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }
  }, "   ", __jsx("a", {
    href: 'https://www.instagram.com',
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 41
    }
  }, " ", __jsx("img", {
    src: "./assets/instagram.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 96
    }
  }))), __jsx("li", {
    className: "Li-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, "  ", __jsx("a", {
    href: 'https://www.youtube.com',
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 40
    }
  }, __jsx("img", {
    src: "./assets/youtube.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 91
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
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

/***/ }),

/***/ "./pages/Aprende.js":
/*!**************************!*\
  !*** ./pages/Aprende.js ***!
  \**************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Aprende; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\pages\\Aprende.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Aprende() {
  return __jsx("div", {
    className: "fondo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "contpag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "context",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "sub2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Aprend\xE9"), __jsx("div", {
    className: "contitu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "titu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Recomendaciones de netflix"), __jsx("h2", {
    className: "sub1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Series para reflexionar, mirar mas all\xE1, formar opiniones")), __jsx("div", {
    className: "contparra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "parra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("img", {
    className: "imgpa",
    src: "./assets/aprendeimg.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 22
    }
  }), __jsx("p", {
    className: "parra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 22
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }));
} // Protection page

async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_2__["default"].getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login"
    });
    res.end();
    return {};
  }

  return {
    props: {
      user: session.user
    }
  };
}

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0FwcmVuZGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiaW5pdEF1dGgwIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiY2xpZW50U2VjcmV0IiwiZW52IiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsInNjb3BlIiwiZG9tYWluIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiU0VTU0lPTl9DT09LSUVfU0VDUkVUIiwiY29va2llTGlmZXRpbWUiLCJOdW1iZXIiLCJTRVNTSU9OX0NPT0tJRV9MSUZFVElNRSIsIkFwcmVuZGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJhdXRoMCIsImdldFNlc3Npb24iLCJ1c2VyIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUEzQixDQURILEVBRUk7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTFCLE1BRkosRUFHRztBQUFJLE1BQUUsRUFBQyxNQUFQO0FBQWMsYUFBUyxFQUFDLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBSEgsQ0FEQSxFQU1BO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEyQjtBQUFHLFFBQUksRUFBRSwwQkFBVDtBQUFxQyxVQUFNLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRDtBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJELENBQTNCLENBREQsRUFFRDtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNkI7QUFBRyxRQUFJLEVBQUUsMkJBQVQ7QUFBc0MsVUFBTSxFQUFDLFFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBdUQ7QUFBSyxPQUFHLEVBQUMsd0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF2RCxDQUE3QixDQUZDLEVBR0Q7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCO0FBQUcsUUFBSSxFQUFFLHlCQUFUO0FBQW1DLFVBQU0sRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1EO0FBQUssT0FBRyxFQUFDLHNCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkQsQ0FBNUIsQ0FIQyxDQU5BLENBREosQ0FESjtBQWlCSCxDQWxCRDs7QUFtQmVBLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUVlQyxvSUFBUyxDQUFDO0FBQ3ZCQyxVQUFRLEVBQUVDLGtDQURhO0FBRXZCQyxjQUFZLEVBQUVELE9BQU8sQ0FBQ0UsR0FBUixDQUFZQyxtQkFGSDtBQUd2QkMsT0FBSyxFQUFFSixnQkFBQSxJQUF1QyxLQUh2QjtBQUl2QkssUUFBTSxFQUFFTCxzQkFKZTtBQUt2Qk0sYUFBVyxFQUNUTixvQ0FBQSxJQUNBLEtBUHFCO0FBUXZCTyx1QkFBcUIsRUFDbkJQLHVCQUFBLElBQ0EsS0FWcUI7QUFXdkJRLFNBQU8sRUFBRTtBQUNQQyxnQkFBWSxFQUFFVCxPQUFPLENBQUNFLEdBQVIsQ0FBWVEscUJBRG5CO0FBRVBDLGtCQUFjLEVBQUVDLE1BQU0sQ0FBQ1osT0FBTyxDQUFDRSxHQUFSLENBQVlXLHVCQUFiLENBQU4sSUFBK0M7QUFGeEQ7QUFYYyxDQUFELENBQXhCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE9BQVQsR0FBa0I7QUFFN0IsU0FDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsRUFFQTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREEsRUFFQTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBRkEsQ0FGQSxFQU9BO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBREEsRUFVSztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXhCQVZMLEVBbUJLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBbkJMLEVBNkJLO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBdUIsT0FBRyxFQUFDLHlCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0JMLEVBK0JLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBL0JMLEVBd0NLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBeENMLEVBaURLO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpeEJBakRMLENBUEEsQ0FEUixDQUZBLEVBc0VVLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRFVixDQURKO0FBNkVDLEMsQ0FHRDs7QUFDRyxlQUFlQyxrQkFBZixDQUFrQztBQUFFQyxLQUFGO0FBQU9DO0FBQVAsQ0FBbEMsRUFBZ0Q7QUFDckQsUUFBTVQsT0FBTyxHQUFHLE1BQU1VLGtEQUFLLENBQUNDLFVBQU4sQ0FBaUJILEdBQWpCLENBQXRCOztBQUNBLE1BQUksQ0FBQ1IsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ1ksSUFBekIsRUFBK0I7QUFDN0JILE9BQUcsQ0FBQ0ksU0FBSixDQUFjLEdBQWQsRUFBbUI7QUFDakJDLGNBQVEsRUFBRTtBQURPLEtBQW5CO0FBR0FMLE9BQUcsQ0FBQ00sR0FBSjtBQUNBLFdBQU8sRUFBUDtBQUNEOztBQUNELFNBQU87QUFBRUMsU0FBSyxFQUFFO0FBQUVKLFVBQUksRUFBRVosT0FBTyxDQUFDWTtBQUFoQjtBQUFULEdBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ2pHRCxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9BcHJlbmRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9BcHJlbmRlLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRmb1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiVWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj4gPGE+VMOpcm1pbm9zIHkgY29uZGljaW9uZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj48YT5Qb2zDrXRpY2FzIGRlIHByaXZhY2lkYWQ8L2E+IDwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaSBpZD1cImNvcHlcIiBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj5Db3B5cmlnaHQgwqkgMjAyMCBNw6lkaXR1cyBTLlIuTDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJVbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj4gPGEgaHJlZj17J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbSd9IHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiLi9hc3NldHMvZmFjZWJvb2sucG5nXCI+PC9pbWc+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWZvb3RlclwiPiAgIDxhIGhyZWY9eydodHRwczovL3d3dy5pbnN0YWdyYW0uY29tJ30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiLi9hc3NldHMvaW5zdGFncmFtLnBuZ1wiPjwvaW1nPjwvYT48L2xpPlxyXG4gICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj4gIDxhIGhyZWY9eydodHRwczovL3d3dy55b3V0dWJlLmNvbSd9dGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIuL2Fzc2V0cy95b3V0dWJlLnBuZ1wiPjwvaW1nPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9DTElFTlRfSUQsXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgc2NvcGU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX1NDT1BFIHx8ICdvcGVuaWQgcHJvZmlsZScsXG4gIGRvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfRE9NQUlOLFxuICByZWRpcmVjdFVyaTpcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkkgfHxcbiAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYWxsYmFjaycsXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTpcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QT1NUX0xPR09VVF9SRURJUkVDVF9VUkkgfHxcbiAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXG4gIHNlc3Npb246IHtcbiAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LlNFU1NJT05fQ09PS0lFX1NFQ1JFVCxcbiAgICBjb29raWVMaWZldGltZTogTnVtYmVyKHByb2Nlc3MuZW52LlNFU1NJT05fQ09PS0lFX0xJRkVUSU1FKSB8fCA3MjAwLFxuICB9LFxufSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uL2xpYi9hdXRoMCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcmVuZGUoKXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9uZG9cIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cGFnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRcIj4gXHJcbiAgICAgICAgICAgICAgICA8aDMgIGNsYXNzTmFtZT1cInN1YjJcIj5BcHJlbmTDqTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRpdHVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXR1XCI+UmVjb21lbmRhY2lvbmVzIGRlIG5ldGZsaXg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YjFcIj5TZXJpZXMgcGFyYSByZWZsZXhpb25hciwgbWlyYXIgbWFzIGFsbMOhLCBmb3JtYXIgb3BpbmlvbmVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHBhcnJhXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdwYVwiIHNyYz1cIi4vYXNzZXRzL2FwcmVuZGVpbWcuanBnXCI+PC9pbWc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgICAgICAgICBObyBzw7NsbyBzb2JyZXZpdmnDsyA1MDAgYcOxb3MsIHNpbm8gcXVlIHRhbWJpZW4gaW5ncmVzw7MgY29tbyB0ZXh0byBkZSByZWxsZW5vIGVuIGRvY3VtZW50b3MgZWxlY3Ryw7NuaWNvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsIGN1YWwgaW5jbHV5ZSB2ZXJzaW9uZXMgZGUgTG9yZW0gSXBzdW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFycmFcIj5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vIGRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gXHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICAgICAgICAgIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKSBkZXNjb25vY2lkbyB1c8OzIHVuYSBcclxuICAgICAgICAgICAgICAgICAgICBnYWxlcsOtYSBkZSB0ZXh0b3MgeSBsb3MgbWV6Y2zDsyBkZSB0YWwgbWFuZXJhIHF1ZSBsb2dyw7MgaGFjZXIgdW4gbGlicm8gZGUgdGV4dG9zIGVzcGVjaW1lbi4gXHJcbiAgICAgICAgICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZWRhbmRvIGVzZW5jaWFsbWVudGUgaWd1YWwgYWwgb3JpZ2luYWwuIEZ1ZSBwb3B1bGFyaXphZG8gZW4gbG9zIDYwcyBjb24gbGEgY3JlYWNpw7NuIGRlIGxhcyBob2phcyBcIkxldHJhc2V0XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhcyBjdWFsZXMgY29udGVuaWFuIHBhc2FqZXMgZGUgTG9yZW0gSXBzdW0sIHkgbcOhcyByZWNpZW50ZW1lbnRlIGNvbiBzb2Z0d2FyZSBkZSBhdXRvZWRpY2nDs24sIGNvbW8gcG9yIGVqZW1wbG8gQWxkdXMgUGFnZU1ha2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUHJvdGVjdGlvbiBwYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKTtcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgcmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgTG9jYXRpb246IFwiL2FwaS9sb2dpblwiLFxyXG4gICAgfSk7XHJcbiAgICByZXMuZW5kKCk7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIHJldHVybiB7IHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciB9IH07XHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==