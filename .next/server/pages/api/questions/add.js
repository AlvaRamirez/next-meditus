module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/questions/add.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://meditus-f7809.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_SENDER_APPID
};

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.js */ "./lib/firebase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return _firebase_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/api/questions/add.js":
/*!************************************!*\
  !*** ./pages/api/questions/add.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib */ "./lib/index.js");


const firebaseDB = _lib__WEBPACK_IMPORTED_MODULE_1__["firebase"].database();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      name,
      company,
      question
    } = req.body; //Add auth0
    //   const session = await auth0.getSession(req);
    //   if (!session || !session.user) {
    //     res.writeHead(302, {
    //       Location: '/api/login'
    //    });
    //     res.end();
    //     return;
    //   }
    //  const { user } = session
    // const { name:username } = user
    //Agrego document en la collection de questions (usando firebase con async/await)

    const responseKey = await firebaseDB.ref('questions').push({
      // username,
      name,
      // company,
      //question,
      highlight: false
    }).getKey(); //Devuelvo el usuario recien creado

    res.status(200).json({
      "status": "added",
      "id": responseKey,
      username,
      name,
      company,
      question
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
});

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL2xpYi9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3F1ZXN0aW9ucy9hZGQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiXSwibmFtZXMiOlsiaW5pdEF1dGgwIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiY2xpZW50U2VjcmV0IiwiZW52IiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsInNjb3BlIiwiZG9tYWluIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiU0VTU0lPTl9DT09LSUVfU0VDUkVUIiwiY29va2llTGlmZXRpbWUiLCJOdW1iZXIiLCJTRVNTSU9OX0NPT0tJRV9MSUZFVElNRSIsImNvbmZpZyIsImFwaUtleSIsIkZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiRklSRUJBU0VfQVVUSF9ET01BSU4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIkZJUkVCQVNFX1NFTkRFUl9JRCIsImFwcElkIiwiRklSRUJBU0VfU0VOREVSX0FQUElEIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlREIiLCJkYXRhYmFzZSIsInJlcSIsInJlcyIsIm5hbWUiLCJjb21wYW55IiwicXVlc3Rpb24iLCJib2R5IiwicmVzcG9uc2VLZXkiLCJyZWYiLCJwdXNoIiwiaGlnaGxpZ2h0IiwiZ2V0S2V5Iiwic3RhdHVzIiwianNvbiIsInVzZXJuYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiY29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsb0lBQVMsQ0FBQztBQUN2QkMsVUFBUSxFQUFFQyxrQ0FEYTtBQUV2QkMsY0FBWSxFQUFFRCxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsbUJBRkg7QUFHdkJDLE9BQUssRUFBRUosZ0JBQUEsSUFBdUMsS0FIdkI7QUFJdkJLLFFBQU0sRUFBRUwsc0JBSmU7QUFLdkJNLGFBQVcsRUFDVE4sb0NBQUEsSUFDQSxLQVBxQjtBQVF2Qk8sdUJBQXFCLEVBQ25CUCx1QkFBQSxJQUNBLEtBVnFCO0FBV3ZCUSxTQUFPLEVBQUU7QUFDUEMsZ0JBQVksRUFBRVQsT0FBTyxDQUFDRSxHQUFSLENBQVlRLHFCQURuQjtBQUVQQyxrQkFBYyxFQUFFQyxNQUFNLENBQUNaLE9BQU8sQ0FBQ0UsR0FBUixDQUFZVyx1QkFBYixDQUFOLElBQStDO0FBRnhEO0FBWGMsQ0FBRCxDQUF4QixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUNmLE9BQU8sQ0FBQ0UsR0FBUixDQUFZYyxnQkFETjtBQUViQyxZQUFVLEVBQUNqQixPQUFPLENBQUNFLEdBQVIsQ0FBWWdCLG9CQUZWO0FBR2JDLGFBQVcsRUFBQ25CLHNDQUhDO0FBSWJvQixXQUFTLEVBQUNwQixPQUFPLENBQUNFLEdBQVIsQ0FBWW1CLG1CQUpUO0FBS2JDLGVBQWEsRUFBQ3RCLE9BQU8sQ0FBQ0UsR0FBUixDQUFZcUIsdUJBTGI7QUFNYkMsbUJBQWlCLEVBQUV4QixPQUFPLENBQUNFLEdBQVIsQ0FBWXVCLGtCQU5sQjtBQU9iQyxPQUFLLEVBQUMxQixPQUFPLENBQUNFLEdBQVIsQ0FBWXlCO0FBUEwsQ0FBZjs7QUFVQSxJQUFJLENBQUNDLCtDQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJGLGlEQUFRLENBQUNHLGFBQVQsQ0FBdUJqQixNQUF2QjtBQUNEOztBQUNjYyw4R0FBZixFOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLDZDQUFRLENBQUNLLFFBQVQsRUFBbkI7QUFFZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUk7QUFDQSxVQUFNO0FBQUVDLFVBQUY7QUFBUUMsYUFBUjtBQUFpQkM7QUFBakIsUUFBOEJKLEdBQUcsQ0FBQ0ssSUFBeEMsQ0FEQSxDQUdBO0FBQ0g7QUFDQTtBQUNFO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDRjtBQUVDO0FBQ0M7QUFFQzs7QUFDQSxVQUFNQyxXQUFXLEdBQUcsTUFBTVIsVUFBVSxDQUFDUyxHQUFYLENBQWUsV0FBZixFQUE0QkMsSUFBNUIsQ0FBaUM7QUFDeEQ7QUFDQ04sVUFGdUQ7QUFHeEQ7QUFDQztBQUNBTyxlQUFTLEVBQUU7QUFMNEMsS0FBakMsRUFNdkJDLE1BTnVCLEVBQTFCLENBakJBLENBeUJBOztBQUNBVCxPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDLGdCQUFTLE9BQVY7QUFBbUIsWUFBTU4sV0FBekI7QUFBc0NPLGNBQXRDO0FBQWdEWCxVQUFoRDtBQUFzREMsYUFBdEQ7QUFBK0RDO0FBQS9ELEtBQXJCO0FBRUgsR0E1QkQsQ0E0QkUsT0FBT1UsS0FBUCxFQUFjO0FBQ1pDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FiLE9BQUcsQ0FBQ1UsTUFBSixDQUFXRyxLQUFLLENBQUNILE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLElBQWhDLENBQXFDO0FBQ2pDSSxVQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFEcUI7QUFFakNGLFdBQUssRUFBRUEsS0FBSyxDQUFDRztBQUZvQixLQUFyQztBQUlIO0FBRUosQ0FyQ0QsRTs7Ozs7Ozs7Ozs7QUNKQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvcXVlc3Rpb25zL2FkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3F1ZXN0aW9ucy9hZGQuanNcIik7XG4iLCJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfQ0xJRU5UX0lELFxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gIHNjb3BlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9TQ09QRSB8fCAnb3BlbmlkIHByb2ZpbGUnLFxuICBkb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTixcbiAgcmVkaXJlY3RVcmk6XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIHx8XG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsbGJhY2snLFxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIHx8XG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxuICBzZXNzaW9uOiB7XG4gICAgY29va2llU2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX0NPT0tJRV9TRUNSRVQsXG4gICAgY29va2llTGlmZXRpbWU6IE51bWJlcihwcm9jZXNzLmVudi5TRVNTSU9OX0NPT0tJRV9MSUZFVElNRSkgfHwgNzIwMCxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYXBpS2V5OnByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjpwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICBkYXRhYmFzZVVSTDpwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgcHJvamVjdElkOnByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDpwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU0VOREVSX0lELFxyXG4gIGFwcElkOnByb2Nlc3MuZW52LkZJUkVCQVNFX1NFTkRFUl9BUFBJRFxyXG59O1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGZpcmViYXNlIH0gZnJvbSAnLi9maXJlYmFzZS5qcyc7XHJcbiIsImltcG9ydCBhdXRoMCBmcm9tICdsaWIvYXV0aDAnO1xuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICdsaWInO1xuY29uc3QgZmlyZWJhc2VEQiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgY29tcGFueSwgcXVlc3Rpb24gfSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIC8vQWRkIGF1dGgwXG4gICAgIC8vICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKTtcbiAgICAgLy8gICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xuICAgICAgIC8vICAgICByZXMud3JpdGVIZWFkKDMwMiwge1xuICAgICAgIC8vICAgICAgIExvY2F0aW9uOiAnL2FwaS9sb2dpbidcbiAgICAgICAgLy8gICAgfSk7XG4gICAgICAgLy8gICAgIHJlcy5lbmQoKTtcbiAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAvLyAgIH1cblxuICAgICAgLy8gIGNvbnN0IHsgdXNlciB9ID0gc2Vzc2lvblxuICAgICAgIC8vIGNvbnN0IHsgbmFtZTp1c2VybmFtZSB9ID0gdXNlclxuXG4gICAgICAgIC8vQWdyZWdvIGRvY3VtZW50IGVuIGxhIGNvbGxlY3Rpb24gZGUgcXVlc3Rpb25zICh1c2FuZG8gZmlyZWJhc2UgY29uIGFzeW5jL2F3YWl0KVxuICAgICAgICBjb25zdCByZXNwb25zZUtleSA9IGF3YWl0IGZpcmViYXNlREIucmVmKCdxdWVzdGlvbnMnKS5wdXNoKHtcbiAgICAgICAgICAgLy8gdXNlcm5hbWUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAvLyBjb21wYW55LFxuICAgICAgICAgICAgLy9xdWVzdGlvbixcbiAgICAgICAgICAgIGhpZ2hsaWdodDogZmFsc2VcbiAgICAgICAgfSkuZ2V0S2V5KClcblxuICAgICAgICAvL0RldnVlbHZvIGVsIHVzdWFyaW8gcmVjaWVuIGNyZWFkb1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XCJzdGF0dXNcIjpcImFkZGVkXCIsIFwiaWRcIjogcmVzcG9uc2VLZXksIHVzZXJuYW1lLCBuYW1lLCBjb21wYW55LCBxdWVzdGlvbiB9KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmpzb24oe1xuICAgICAgICAgICAgY29kZTogZXJyb3IuY29kZSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cblxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=