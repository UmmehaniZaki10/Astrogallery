"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useContract.tsx":
/*!*******************************!*\
  !*** ./hooks/useContract.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar useABBContract = function(window) {\n    var ethereum = window.ethereum;\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(ethereum);\n    var signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_0__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_1__, signer);\n};\n// export const useStakingContract = () => {\n//   const { ethereum } = window\n//   const provider = new ethers.providers.Web3Provider(ethereum)\n//   const signer = provider.getSigner()\n//   return new ethers.Contract(ABBContractAddress, ABB, signer)\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (useABBContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDb250cmFjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUQ7QUFDbEI7QUFDSTtBQUluQyxHQUFLLENBQUNHLGNBQWMsR0FBRyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO0lBQ2xDLEdBQUssQ0FBR0MsUUFBUSxHQUFLRCxNQUFNLENBQW5CQyxRQUFRO0lBQ2hCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ0wsaUVBQTZCLENBQUNJLFFBQVE7SUFDM0QsR0FBSyxDQUFDSSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksU0FBUztJQUNqQyxNQUFNLENBQUMsR0FBRyxDQUFDVCxtREFBZSxDQUFDRCwwREFBa0IsRUFBRUUsNENBQUcsRUFBRU8sTUFBTTtBQUM1RCxDQUFDO0FBQ0QsRUFBNEM7QUFDNUMsRUFBZ0M7QUFDaEMsRUFBaUU7QUFDakUsRUFBd0M7QUFDeEMsRUFBZ0U7QUFDaEUsRUFBSTtBQUNKLCtEQUFlTixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUNvbnRyYWN0LnRzeD8xY2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFCQkNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZy5qcydcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCBBQkIgZnJvbSAnLi4vdXRpbHMvQUJCLmpzb24nXG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55XG5cbmNvbnN0IHVzZUFCQkNvbnRyYWN0ID0gKHdpbmRvdykgPT4ge1xuICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gIHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KEFCQkNvbnRyYWN0QWRkcmVzcywgQUJCLCBzaWduZXIpXG59XG4vLyBleHBvcnQgY29uc3QgdXNlU3Rha2luZ0NvbnRyYWN0ID0gKCkgPT4ge1xuLy8gICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbi8vICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4vLyAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4vLyAgIHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KEFCQkNvbnRyYWN0QWRkcmVzcywgQUJCLCBzaWduZXIpXG4vLyB9XG5leHBvcnQgZGVmYXVsdCB1c2VBQkJDb250cmFjdFxuIl0sIm5hbWVzIjpbIkFCQkNvbnRyYWN0QWRkcmVzcyIsImV0aGVycyIsIkFCQiIsInVzZUFCQkNvbnRyYWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsIkNvbnRyYWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useContract.tsx\n");

/***/ })

});