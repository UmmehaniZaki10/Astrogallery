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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useEagerConnect */ \"./hooks/useEagerConnect.tsx\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var currentAccount = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount));\n                        _ctx.next = 8;\n                        return ABBContract.allowance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount), _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 8:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // } catch (error) {\n        //   console.log('Error minting character', error)\n        //   setTxError(error.message)\n        // }\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(currentAccount);\n        if (currentAccount) getStats();\n    }, [\n        currentAccount\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"head\",\n                children: \"Stake ABB\"\n            }, void 0, false, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-sb pd rd shadow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"02\"\n                    }, void 0, false, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"hS558dz0Cs1BsS0FBEd9yLGdmM4=\", false, function() {\n    return [\n        _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNsQjtBQUV1QjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkMsR0FBSyxDQUFDTSxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQTZCTixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q08sU0FBUyxHQUFrQlAsR0FBYyxLQUE5QlEsWUFBWSxHQUFJUixHQUFjO0lBQ2hELEdBQUssQ0FBbUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlDUyxZQUFZLEdBQXFCVCxJQUFjLEtBQWpDVSxlQUFlLEdBQUlWLElBQWM7SUFDdEQsR0FBSyxDQUFtQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBM0NXLFlBQVksR0FBcUJYLElBQVcsS0FBOUJZLGVBQWUsR0FBSVosSUFBVztJQUNuRCxHQUFLLENBQXlCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ2EsT0FBTyxHQUFnQmIsSUFBYyxLQUE1QmMsVUFBVSxHQUFJZCxJQUFjO0lBRTVDLEdBQUssQ0FBQ2UsY0FBYyxHQUFHWCxrRUFBZTtJQUV0QyxHQUFLLENBQUNZLFFBQVE7NkxBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRXBCQyxRQUFRLEVBR1JDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxXQUFXLEVBRWJDLFNBQVM7Ozs7d0JBUFBKLFFBQVEsR0FBS0ssTUFBTSxDQUFuQkwsUUFBUTs2QkFFWkEsUUFBUTs7Ozt3QkFDSkMsUUFBUSxHQUFHLEdBQUcsQ0FBQ2YsaUVBQTZCLENBQUNjLFFBQVE7d0JBQ3JERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUzt3QkFDM0JMLFdBQVcsR0FBRyxHQUFHLENBQUNqQixtREFBZSxDQUFDRCwwREFBa0IsRUFBRUcsNENBQUcsRUFBRWMsTUFBTTt3QkFDdkVRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDekIsMkRBQXVCLENBQUNZLGNBQWM7OytCQUM1QkssV0FBVyxDQUFDQyxTQUFTLENBQ3pDbEIsMkRBQXVCLENBQUNZLGNBQWMsR0FDdENiLDBEQUFrQjs7d0JBRmhCbUIsU0FBUzt3QkFJYk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFekIsNERBQXdCLENBQUNrQixTQUFTOzs7O3dCQWlCdkQsQ0FBQzs0QkFDTk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0M7d0JBQzlDLENBQUM7Ozs7OztRQUNELEVBQW9CO1FBQ3BCLEVBQWtEO1FBQ2xELEVBQThCO1FBQzlCLEVBQUk7UUFDTixDQUFDO3dCQXJDS1osUUFBUTs7OztJQXNDZGYsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZjBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixjQUFjO1FBQzFCLEVBQUUsRUFBRUEsY0FBYyxFQUFFQyxRQUFRO0lBQzlCLENBQUMsRUFBRSxDQUFDRDtRQUFBQSxjQUFjO0lBQUEsQ0FBQztJQUVuQixNQUFNLDZFQUNIaUIsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs7d0ZBQ3ZCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTTswQkFBQyxDQUFTOzs7Ozs7d0ZBQzlCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7O2dHQUNsQ0QsQ0FBRztrQ0FBQyxDQUFFOzs7Ozs7Z0dBQ05BLENBQUc7a0NBQUMsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztHQTVESzFCLElBQUk7O1FBTWVGLDhEQUFlOzs7QUF3RHhDLCtEQUFlRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFCQkNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZy5qcydcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB1c2VFYWdlckNvbm5lY3QgZnJvbSAnLi4vaG9va3MvdXNlRWFnZXJDb25uZWN0J1xuaW1wb3J0IEFCQiBmcm9tICcuLi91dGlscy9BQkIuanNvbidcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcblxuY29uc3QgbWludCA9ICgpID0+IHtcbiAgY29uc3QgW21pbnRlZE5GVCwgc2V0TWludGVkTkZUXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFttaW5pbmdTdGF0dXMsIHNldE1pbmluZ1N0YXR1c10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3R4RXJyb3IsIHNldFR4RXJyb3JdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBjdXJyZW50QWNjb3VudCA9IHVzZUVhZ2VyQ29ubmVjdCgpXG5cbiAgY29uc3QgZ2V0U3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gdHJ5IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcblxuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3QgQUJCQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KEFCQkNvbnRyYWN0QWRkcmVzcywgQUJCLCBzaWduZXIpXG4gICAgICBjb25zb2xlLmxvZyhldGhlcnMudXRpbHMuZ2V0QWRkcmVzcyhjdXJyZW50QWNjb3VudCkpXG4gICAgICBsZXQgYWxsb3dhbmNlID0gYXdhaXQgQUJCQ29udHJhY3QuYWxsb3dhbmNlKFxuICAgICAgICBldGhlcnMudXRpbHMuZ2V0QWRkcmVzcyhjdXJyZW50QWNjb3VudCksXG4gICAgICAgIEFCQkNvbnRyYWN0QWRkcmVzc1xuICAgICAgKVxuICAgICAgY29uc29sZS5sb2coJ01pbmluZy4uLi4nLCBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYWxsb3dhbmNlKSlcblxuICAgICAgLy8gQUJCQ29udHJhY3QuYXBwcm92ZShBQkJDb250cmFjdEFkZHJlc3MsICc1MDAwMDAwMDAwMDAwMDAwMDAwJylcbiAgICAgIC8vIHNldE1pbmluZ1N0YXR1cygwKVxuXG4gICAgICAvLyBsZXQgdHggPSBhd2FpdCBuZnRUeC53YWl0KClcbiAgICAgIC8vIHNldExvYWRpbmdTdGF0ZSgxKVxuICAgICAgLy8gY29uc29sZS5sb2coJ01pbmVkIScsIHR4KVxuICAgICAgLy8gbGV0IGV2ZW50ID0gdHguZXZlbnRzWzBdXG4gICAgICAvLyBsZXQgdmFsdWUgPSBldmVudC5hcmdzWzJdXG4gICAgICAvLyBsZXQgdG9rZW5JZCA9IHZhbHVlLnRvTnVtYmVyKClcblxuICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAvLyAgIGBNaW5lZCwgc2VlIHRyYW5zYWN0aW9uOiBodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL3R4LyR7bmZ0VHguaGFzaH1gXG4gICAgICAvLyApXG5cbiAgICAgIC8vIGdldE1pbnRlZE5GVCh0b2tlbklkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBkb2Vzbid0IGV4aXN0IVwiKVxuICAgIH1cbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coJ0Vycm9yIG1pbnRpbmcgY2hhcmFjdGVyJywgZXJyb3IpXG4gICAgLy8gICBzZXRUeEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgLy8gfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXG4gICAgaWYgKGN1cnJlbnRBY2NvdW50KSBnZXRTdGF0cygpXG4gIH0sIFtjdXJyZW50QWNjb3VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+U3Rha2UgQUJCPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2IgcGQgcmQgc2hhZG93XCI+XG4gICAgICAgIDxkaXY+MDE8L2Rpdj5cbiAgICAgICAgPGRpdj4wMjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWludFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQUJCQ29udHJhY3RBZGRyZXNzIiwiZXRoZXJzIiwidXNlRWFnZXJDb25uZWN0IiwiQUJCIiwibWludCIsIm1pbnRlZE5GVCIsInNldE1pbnRlZE5GVCIsIm1pbmluZ1N0YXR1cyIsInNldE1pbmluZ1N0YXR1cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInR4RXJyb3IiLCJzZXRUeEVycm9yIiwiY3VycmVudEFjY291bnQiLCJnZXRTdGF0cyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJzaWduZXIiLCJBQkJDb250cmFjdCIsImFsbG93YW5jZSIsIndpbmRvdyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiY29uc29sZSIsImxvZyIsInV0aWxzIiwiZ2V0QWRkcmVzcyIsImZvcm1hdEV0aGVyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});