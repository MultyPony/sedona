/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.blocks sync \\.(png|jpe?g|svg)$":
/*!****************************************************************!*\
  !*** ./src/common.blocks sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/common.blocks sync \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack:///./src/common.blocks_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/common.blocks/search-form/search-form.js":
/*!******************************************************!*\
  !*** ./src/common.blocks/search-form/search-form.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let sedona_btn = document.querySelector(\".sedona-button\");\r\nlet search_form = document.querySelector(\".search-form\");\r\n\r\nlet adultsMinBtn = document.getElementById(\"adults-min-btn\");\r\nlet adultsPlusBtn = document.getElementById(\"adults-plus-btn\");\r\n\r\nlet childrenMinBtn = document.getElementById(\"children-min-btn\");\r\nlet childrenPlusBtn = document.getElementById(\"children-plus-btn\");\r\n\r\nlet displayAdults = document.getElementById(\"adults\");\r\nlet displayChildren = document.getElementById(\"children\");\r\nlet display = '';\r\nlet curVal = '';\r\n\r\nfunction subtract(evt) {\r\n  evt.preventDefault();\r\n  if (evt.target === adultsMinBtn)\r\n    display = displayAdults;\r\n  else if (evt.target === childrenMinBtn)\r\n    display = displayChildren;\r\n  curVal = display.value;\r\n  if (curVal > 0)\r\n    display.value = --curVal;\r\n}\r\n\r\nfunction add(evt) {\r\n  evt.preventDefault();\r\n  if (evt.target === adultsPlusBtn)\r\n    display = displayAdults;\r\n  else if (evt.target === childrenPlusBtn)\r\n    display = displayChildren;\r\n  curVal = display.value;\r\n  if (curVal < 0)\r\n    curVal = -1;\r\n  display.value = ++curVal;\r\n}\r\n\r\nadultsMinBtn.addEventListener(\"click\", subtract);\r\nadultsPlusBtn.addEventListener(\"click\", add);\r\n\r\nchildrenMinBtn.addEventListener(\"click\", subtract);\r\nchildrenPlusBtn.addEventListener(\"click\", add);\r\n\r\nsedona_btn.addEventListener(\"click\", function (evt) {\r\n  evt.preventDefault();\r\n  search_form.classList.toggle(\"visually-hidden\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/common.blocks/search-form/search-form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// const SearchForm = require('./common.blocks/search-form/search-form.js');\r\n// const RangeFieldset = require('./common.blocks/range-fieldset/range-fieldset.js');\r\nconst SearchForm = __webpack_require__(/*! ./common.blocks/search-form/search-form.js */ \"./src/common.blocks/search-form/search-form.js\");\r\nlet imgContext = __webpack_require__(\"./src/common.blocks sync \\\\.(png|jpe?g|svg)$\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ })

/******/ });