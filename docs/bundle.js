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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_FontAwesome_otf__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_FontAwesome_otf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fonts_FontAwesome_otf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_fontawesome_webfont_eot__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_fontawesome_webfont_eot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fonts_fontawesome_webfont_eot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fonts_fontawesome_webfont_svg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fonts_fontawesome_webfont_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fonts_fontawesome_webfont_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fonts_fontawesome_webfont_ttf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fonts_fontawesome_webfont_ttf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fonts_fontawesome_webfont_ttf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fonts_fontawesome_webfont_woff__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fonts_fontawesome_webfont_woff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fonts_fontawesome_webfont_woff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fonts_fontawesome_webfont_woff2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fonts_fontawesome_webfont_woff2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fonts_fontawesome_webfont_woff2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_pure_min_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_pure_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_pure_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_pure_responsive_min_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_pure_responsive_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_pure_responsive_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_app_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_font_awesome_min_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_figure0_png__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_figure0_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__images_figure0_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_figure1_png__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_figure1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__images_figure1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_figure2_png__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_figure2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__images_figure2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_figure3_png__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_figure3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__images_figure3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_figure4_png__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_figure4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__images_figure4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_figure5_png__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_figure5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__images_figure5_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_tshirt_red_png__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_tshirt_red_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__images_tshirt_red_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_tshirt_blue_png__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_tshirt_blue_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__images_tshirt_blue_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__images_tshirt_green_png__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__images_tshirt_green_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__images_tshirt_green_png__);





















/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/fonts/FontAwesome.otf";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/fonts/fontawesome-webfont.eot";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/fontawesome-webfont.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/fonts/fontawesome-webfont.ttf";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/fonts/fontawesome-webfont.woff";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/fonts/fontawesome-webfont.woff2";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/figure0.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/figure1.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/figure2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/figure3.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/figure4.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/figure5.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/tshirt-red.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/tshirt-blue.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./docs/images/tshirt-green.png";

/***/ })
/******/ ]);