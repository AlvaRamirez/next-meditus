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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Experimenta.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Aporte/index.js":
/*!************************************!*\
  !*** ./components/Aporte/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\components\\Aporte\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Aporte = () => {
  return __jsx("div", {
    id: "contdona",
    "mp-mode": "dftl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "donar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Si este texto te aporto valor, estamos abiertos a un peque\xF1o para poder seguir generando este tipo de contenido"), __jsx("a", {
    id: "botondona",
    href: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=449368404-a0ad8847-74f7-4c37-b974-ef685f8671a9",
    name: "MP-payButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "  Aportar  "));
};

/* harmony default export */ __webpack_exports__["default"] = (Aporte);

/***/ }),

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

/***/ "./pages/Experimenta.js":
/*!******************************!*\
  !*** ./pages/Experimenta.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Aporte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Aporte */ "./components/Aporte/index.js");
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\GitHub\\next-meditus\\next-meditus\\pages\\Experimenta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Experimenta = () => {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "contpag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "context",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "sub2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Experiment\xE1"), __jsx("div", {
    className: "contitu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "titu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Proceso de purificaci\xF3n mental"), __jsx("h2", {
    className: "sub1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Rememorar, reflexionar, dejar ir, soltar")), __jsx("div", {
    className: "contparra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "parra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("img", {
    className: "imgpa",
    src: "./assets/experimentaprueba.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 14
    }
  }), __jsx("p", {
    className: "parra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."), __jsx("p", {
    className: "parra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 14
    }
  }, "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xE1ndar de las industrias desde el a\xF1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xF3 una galer\xEDa de textos y los mezcl\xF3 de tal manera que logr\xF3 hacer un libro de textos especimen. No s\xF3lo sobrevivi\xF3 500 a\xF1os, sino que tambien ingres\xF3 como texto de relleno en documentos electr\xF3nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci\xF3n de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y m\xE1s recientemente con software de autoedici\xF3n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.")), __jsx(_components_Aporte__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 12
    }
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Experimenta);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcG9ydGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRXhwZXJpbWVudGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBcG9ydGUiLCJGb290ZXIiLCJFeHBlcmltZW50YSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBRUk7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixlQUFRLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFHLE1BQUUsRUFBQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEhBREEsRUFFSjtBQUFHLE1BQUUsRUFBQyxXQUFOO0FBQWtCLFFBQUksRUFBQyw0R0FBdkI7QUFBb0ksUUFBSSxFQUFDLGNBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkksQ0FGSjtBQVdILENBWkQ7O0FBY2VBLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUEzQixDQURILEVBRUk7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTFCLE1BRkosRUFHRztBQUFJLE1BQUUsRUFBQyxNQUFQO0FBQWMsYUFBUyxFQUFDLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBSEgsQ0FEQSxFQU1BO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEyQjtBQUFHLFFBQUksRUFBRSwwQkFBVDtBQUFxQyxVQUFNLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRDtBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJELENBQTNCLENBREQsRUFFRDtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNkI7QUFBRyxRQUFJLEVBQUUsMkJBQVQ7QUFBc0MsVUFBTSxFQUFDLFFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBdUQ7QUFBSyxPQUFHLEVBQUMsd0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF2RCxDQUE3QixDQUZDLEVBR0Q7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCO0FBQUcsUUFBSSxFQUFFLHlCQUFUO0FBQW1DLFVBQU0sRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1EO0FBQUssT0FBRyxFQUFDLHNCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkQsQ0FBNUIsQ0FIQyxDQU5BLENBREosQ0FESjtBQWlCSCxDQWxCRDs7QUFtQmVBLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdJLFNBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVI7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLEVBRUE7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURBLEVBRUE7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUZBLENBRkEsRUFPQTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXhCQURBLEVBVUs7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl4QkFWTCxFQW1CSztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXhCQW5CTCxFQTRCSztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQXVCLE9BQUcsRUFBQyxnQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCTCxFQThCSztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXhCQTlCTCxFQXVDSztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXhCQXZDTCxFQWdESztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXhCQWhETCxDQVBBLEVBaUVHLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpFSCxDQURSLENBRlEsRUF3RUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVGLENBREo7QUE4RUMsQ0FwR0w7O0FBc0dtQkEsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUN6R0osa0MiLCJmaWxlIjoicGFnZXMvRXhwZXJpbWVudGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0V4cGVyaW1lbnRhLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXBvcnRlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGRvbmFcIiBtcC1tb2RlPVwiZGZ0bFwiPlxyXG4gICAgICAgIDxwIGlkPVwiZG9uYXJcIj5TaSBlc3RlIHRleHRvIHRlIGFwb3J0byB2YWxvciwgZXN0YW1vcyBhYmllcnRvcyBhIHVuIHBlcXVlw7FvIHBhcmEgcG9kZXIgc2VndWlyIGdlbmVyYW5kbyBlc3RlIHRpcG8gZGUgY29udGVuaWRvPC9wPlxyXG4gICAgPGEgaWQ9XCJib3RvbmRvbmFcIiBocmVmPVwiaHR0cHM6Ly93d3cubWVyY2Fkb3BhZ28uY29tLmFyL2NoZWNrb3V0L3YxL3JlZGlyZWN0P3ByZWZfaWQ9NDQ5MzY4NDA0LWEwYWQ4ODQ3LTc0ZjctNGMzNy1iOTc0LWVmNjg1Zjg2NzFhOVwiIG5hbWU9XCJNUC1wYXlCdXR0b25cIj4gIEFwb3J0YXIgIDwvYT4gXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBvcnRlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRmb1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiVWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj4gPGE+VMOpcm1pbm9zIHkgY29uZGljaW9uZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj48YT5Qb2zDrXRpY2FzIGRlIHByaXZhY2lkYWQ8L2E+IDwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaSBpZD1cImNvcHlcIiBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj5Db3B5cmlnaHQgwqkgMjAyMCBNw6lkaXR1cyBTLlIuTDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJVbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj4gPGEgaHJlZj17J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbSd9IHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiLi9hc3NldHMvZmFjZWJvb2sucG5nXCI+PC9pbWc+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkxpLWZvb3RlclwiPiAgIDxhIGhyZWY9eydodHRwczovL3d3dy5pbnN0YWdyYW0uY29tJ30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiLi9hc3NldHMvaW5zdGFncmFtLnBuZ1wiPjwvaW1nPjwvYT48L2xpPlxyXG4gICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJMaS1mb290ZXJcIj4gIDxhIGhyZWY9eydodHRwczovL3d3dy55b3V0dWJlLmNvbSd9dGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIuL2Fzc2V0cy95b3V0dWJlLnBuZ1wiPjwvaW1nPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuaW1wb3J0IEFwb3J0ZSBmcm9tICcuLi9jb21wb25lbnRzL0Fwb3J0ZSdcclxuY29uc3QgRXhwZXJpbWVudGEgPSAoKSA9PiB7XHJcblxyXG4vLyBjb25zdCBbbmFtZV0gPSB1c2VTdGF0ZShbXSk7XHJcbi8vICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBmaXJlYmFzZURCLnJlZignbWVkaXR1c0RhdGEnKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbWVkaXR1c0FyciA9IFtdO1xyXG4vLyAgICAgICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoY2hpbGRTbmFwc2hvdCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICBtZWRpdHVzQXJyLnB1c2goe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlkOiBjaGlsZFNuYXBzaG90LmtleSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZFNuYXBzaG90LnZhbCgpXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgIC8vIGVzY3VlbGFzQXJyLnJldmVyc2UoKVxyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldERhdGEnLG1lZGl0dXNBcnIpO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0RXNjdWVsYXMobWVkaXR1c0Fycik7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIGdldERhdGEoKTtcclxuLy8gICAgICAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb25kb1wiPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjb250cGFnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0XCI+IFxyXG4gICAgICAgIDxoMyAgY2xhc3NOYW1lPVwic3ViMlwiPkV4cGVyaW1lbnTDoTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250aXR1XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHVcIj5Qcm9jZXNvIGRlIHB1cmlmaWNhY2nDs24gbWVudGFsPC9oMT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViMVwiPlJlbWVtb3JhciwgcmVmbGV4aW9uYXIsIGRlamFyIGlyLCBzb2x0YXI8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cGFycmFcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJyYVwiPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm8gZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBcclxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIFxyXG4gICAgICAgICAgICBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSkgZGVzY29ub2NpZG8gdXPDsyB1bmEgXHJcbiAgICAgICAgICAgIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLiBcclxuICAgICAgICAgICAgTm8gc8OzbG8gc29icmV2aXZpw7MgNTAwIGHDsW9zLCBzaW5vIHF1ZSB0YW1iaWVuIGluZ3Jlc8OzIGNvbW8gdGV4dG8gZGUgcmVsbGVubyBlbiBkb2N1bWVudG9zIGVsZWN0csOzbmljb3MsIFxyXG4gICAgICAgICAgICBxdWVkYW5kbyBlc2VuY2lhbG1lbnRlIGlndWFsIGFsIG9yaWdpbmFsLiBGdWUgcG9wdWxhcml6YWRvIGVuIGxvcyA2MHMgY29uIGxhIGNyZWFjacOzbiBkZSBsYXMgaG9qYXMgXCJMZXRyYXNldFwiLCBcclxuICAgICAgICAgICAgbGFzIGN1YWxlcyBjb250ZW5pYW4gcGFzYWplcyBkZSBMb3JlbSBJcHN1bSwgeSBtw6FzIHJlY2llbnRlbWVudGUgY29uIHNvZnR3YXJlIGRlIGF1dG9lZGljacOzbiwgY29tbyBwb3IgZWplbXBsbyBBbGR1cyBQYWdlTWFrZXIsXHJcbiAgICAgICAgICAgICBlbCBjdWFsIGluY2x1eWUgdmVyc2lvbmVzIGRlIExvcmVtIElwc3VtLjwvcD5cclxuXHJcbiAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhXCIgc3JjPVwiLi9hc3NldHMvZXhwZXJpbWVudGFwcnVlYmEucG5nXCI+PC9pbWc+XHJcblxyXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFycmFcIj5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vIGRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gXHJcbiAgICAgICAgICAgIExvcmVtIElwc3VtIGhhIHNpZG8gZWwgdGV4dG8gZGUgcmVsbGVubyBlc3TDoW5kYXIgZGUgbGFzIGluZHVzdHJpYXMgZGVzZGUgZWwgYcOxbyAxNTAwLCBcclxuICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICBnYWxlcsOtYSBkZSB0ZXh0b3MgeSBsb3MgbWV6Y2zDsyBkZSB0YWwgbWFuZXJhIHF1ZSBsb2dyw7MgaGFjZXIgdW4gbGlicm8gZGUgdGV4dG9zIGVzcGVjaW1lbi4gXHJcbiAgICAgICAgICAgIE5vIHPDs2xvIHNvYnJldml2acOzIDUwMCBhw7Fvcywgc2lubyBxdWUgdGFtYmllbiBpbmdyZXPDsyBjb21vIHRleHRvIGRlIHJlbGxlbm8gZW4gZG9jdW1lbnRvcyBlbGVjdHLDs25pY29zLCBcclxuICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgIGxhcyBjdWFsZXMgY29udGVuaWFuIHBhc2FqZXMgZGUgTG9yZW0gSXBzdW0sIHkgbcOhcyByZWNpZW50ZW1lbnRlIGNvbiBzb2Z0d2FyZSBkZSBhdXRvZWRpY2nDs24sIGNvbW8gcG9yIGVqZW1wbG8gQWxkdXMgUGFnZU1ha2VyLFxyXG4gICAgICAgICAgICAgZWwgY3VhbCBpbmNsdXllIHZlcnNpb25lcyBkZSBMb3JlbSBJcHN1bS48L3A+XHJcblxyXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFycmFcIj5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vIGRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gXHJcbiAgICAgICAgICAgIExvcmVtIElwc3VtIGhhIHNpZG8gZWwgdGV4dG8gZGUgcmVsbGVubyBlc3TDoW5kYXIgZGUgbGFzIGluZHVzdHJpYXMgZGVzZGUgZWwgYcOxbyAxNTAwLCBcclxuICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICBnYWxlcsOtYSBkZSB0ZXh0b3MgeSBsb3MgbWV6Y2zDsyBkZSB0YWwgbWFuZXJhIHF1ZSBsb2dyw7MgaGFjZXIgdW4gbGlicm8gZGUgdGV4dG9zIGVzcGVjaW1lbi4gXHJcbiAgICAgICAgICAgIE5vIHPDs2xvIHNvYnJldml2acOzIDUwMCBhw7Fvcywgc2lubyBxdWUgdGFtYmllbiBpbmdyZXPDsyBjb21vIHRleHRvIGRlIHJlbGxlbm8gZW4gZG9jdW1lbnRvcyBlbGVjdHLDs25pY29zLCBcclxuICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgIGxhcyBjdWFsZXMgY29udGVuaWFuIHBhc2FqZXMgZGUgTG9yZW0gSXBzdW0sIHkgbcOhcyByZWNpZW50ZW1lbnRlIGNvbiBzb2Z0d2FyZSBkZSBhdXRvZWRpY2nDs24sIGNvbW8gcG9yIGVqZW1wbG8gQWxkdXMgUGFnZU1ha2VyLFxyXG4gICAgICAgICAgICAgZWwgY3VhbCBpbmNsdXllIHZlcnNpb25lcyBkZSBMb3JlbSBJcHN1bS48L3A+XHJcblxyXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFycmFcIj5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vIGRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gXHJcbiAgICAgICAgICAgIExvcmVtIElwc3VtIGhhIHNpZG8gZWwgdGV4dG8gZGUgcmVsbGVubyBlc3TDoW5kYXIgZGUgbGFzIGluZHVzdHJpYXMgZGVzZGUgZWwgYcOxbyAxNTAwLCBcclxuICAgICAgICAgICAgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIFxyXG4gICAgICAgICAgICBnYWxlcsOtYSBkZSB0ZXh0b3MgeSBsb3MgbWV6Y2zDsyBkZSB0YWwgbWFuZXJhIHF1ZSBsb2dyw7MgaGFjZXIgdW4gbGlicm8gZGUgdGV4dG9zIGVzcGVjaW1lbi4gXHJcbiAgICAgICAgICAgIE5vIHPDs2xvIHNvYnJldml2acOzIDUwMCBhw7Fvcywgc2lubyBxdWUgdGFtYmllbiBpbmdyZXPDsyBjb21vIHRleHRvIGRlIHJlbGxlbm8gZW4gZG9jdW1lbnRvcyBlbGVjdHLDs25pY29zLCBcclxuICAgICAgICAgICAgcXVlZGFuZG8gZXNlbmNpYWxtZW50ZSBpZ3VhbCBhbCBvcmlnaW5hbC4gRnVlIHBvcHVsYXJpemFkbyBlbiBsb3MgNjBzIGNvbiBsYSBjcmVhY2nDs24gZGUgbGFzIGhvamFzIFwiTGV0cmFzZXRcIiwgXHJcbiAgICAgICAgICAgIGxhcyBjdWFsZXMgY29udGVuaWFuIHBhc2FqZXMgZGUgTG9yZW0gSXBzdW0sIHkgbcOhcyByZWNpZW50ZW1lbnRlIGNvbiBzb2Z0d2FyZSBkZSBhdXRvZWRpY2nDs24sIGNvbW8gcG9yIGVqZW1wbG8gQWxkdXMgUGFnZU1ha2VyLFxyXG4gICAgICAgICAgICAgZWwgY3VhbCBpbmNsdXllIHZlcnNpb25lcyBkZSBMb3JlbSBJcHN1bS48L3A+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDxBcG9ydGUvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgRXhwZXJpbWVudGFcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==