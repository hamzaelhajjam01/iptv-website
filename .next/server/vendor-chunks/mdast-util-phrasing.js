"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing";
exports.ids = ["vendor-chunks/mdast-util-phrasing"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-phrasing/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(rsc)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n * @typedef {import('unist-util-is').AssertPredicate<PhrasingContent>} AssertPredicatePhrasing\n */\n\n\n\n/**\n * Check if the given value is *phrasing content*.\n *\n * @param\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */\nconst phrasing = /** @type {AssertPredicatePhrasing} */ (\n  (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n    'break',\n    'delete',\n    'emphasis',\n    'footnote',\n    'footnoteReference',\n    'image',\n    'imageReference',\n    'inlineCode',\n    'link',\n    'linkReference',\n    'strong',\n    'text'\n  ])\n)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDLGFBQWEsMERBQTBEO0FBQ3ZFOztBQUVxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDRCQUE0Qix5QkFBeUI7QUFDNUQsRUFBRSxzREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJlYW12ZXJzZS1pcHR2Ly4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtcGhyYXNpbmcvbGliL2luZGV4LmpzP2I1ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBocmFzaW5nQ29udGVudH0gUGhyYXNpbmdDb250ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuQXNzZXJ0UHJlZGljYXRlPFBocmFzaW5nQ29udGVudD59IEFzc2VydFByZWRpY2F0ZVBocmFzaW5nXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyAqcGhyYXNpbmcgY29udGVudCouXG4gKlxuICogQHBhcmFtXG4gKiAgIFRoaW5nIHRvIGNoZWNrLCB0eXBpY2FsbHkgYE5vZGVgLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBgdmFsdWVgIGlzIHBocmFzaW5nIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBwaHJhc2luZyA9IC8qKiBAdHlwZSB7QXNzZXJ0UHJlZGljYXRlUGhyYXNpbmd9ICovIChcbiAgY29udmVydChbXG4gICAgJ2JyZWFrJyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZW1waGFzaXMnLFxuICAgICdmb290bm90ZScsXG4gICAgJ2Zvb3Rub3RlUmVmZXJlbmNlJyxcbiAgICAnaW1hZ2UnLFxuICAgICdpbWFnZVJlZmVyZW5jZScsXG4gICAgJ2lubGluZUNvZGUnLFxuICAgICdsaW5rJyxcbiAgICAnbGlua1JlZmVyZW5jZScsXG4gICAgJ3N0cm9uZycsXG4gICAgJ3RleHQnXG4gIF0pXG4pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ })

};
;