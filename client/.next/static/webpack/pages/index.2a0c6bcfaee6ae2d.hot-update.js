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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useEagerConnect */ \"./hooks/useEagerConnect.tsx\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var currentAccount = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount));\n                        _ctx.next = 8;\n                        return ABBContract.allowance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount), _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 8:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // } catch (error) {\n        //   console.log('Error minting character', error)\n        //   setTxError(error.message)\n        // }\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(currentAccount);\n        if (currentAccount) getStats();\n    }, [\n        currentAccount\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-[#f3f6f4] pt-32 font-black text-[#6a50aa]\",\n        children: [\n            \"Stake ABB \",\n            currentAccount\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"hS558dz0Cs1BsS0FBEd9yLGdmM4=\", false, function() {\n    return [\n        _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNsQjtBQUV1QjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkMsR0FBSyxDQUFDTSxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQTZCTixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q08sU0FBUyxHQUFrQlAsR0FBYyxLQUE5QlEsWUFBWSxHQUFJUixHQUFjO0lBQ2hELEdBQUssQ0FBbUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlDUyxZQUFZLEdBQXFCVCxJQUFjLEtBQWpDVSxlQUFlLEdBQUlWLElBQWM7SUFDdEQsR0FBSyxDQUFtQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBM0NXLFlBQVksR0FBcUJYLElBQVcsS0FBOUJZLGVBQWUsR0FBSVosSUFBVztJQUNuRCxHQUFLLENBQXlCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ2EsT0FBTyxHQUFnQmIsSUFBYyxLQUE1QmMsVUFBVSxHQUFJZCxJQUFjO0lBRTVDLEdBQUssQ0FBQ2UsY0FBYyxHQUFHWCxrRUFBZTtJQUV0QyxHQUFLLENBQUNZLFFBQVE7NkxBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRXBCQyxRQUFRLEVBR1JDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxXQUFXLEVBRWJDLFNBQVM7Ozs7d0JBUFBKLFFBQVEsR0FBS0ssTUFBTSxDQUFuQkwsUUFBUTs2QkFFWkEsUUFBUTs7Ozt3QkFDSkMsUUFBUSxHQUFHLEdBQUcsQ0FBQ2YsaUVBQTZCLENBQUNjLFFBQVE7d0JBQ3JERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUzt3QkFDM0JMLFdBQVcsR0FBRyxHQUFHLENBQUNqQixtREFBZSxDQUFDRCwwREFBa0IsRUFBRUcsNENBQUcsRUFBRWMsTUFBTTt3QkFDdkVRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDekIsMkRBQXVCLENBQUNZLGNBQWM7OytCQUM1QkssV0FBVyxDQUFDQyxTQUFTLENBQ3pDbEIsMkRBQXVCLENBQUNZLGNBQWMsR0FDdENiLDBEQUFrQjs7d0JBRmhCbUIsU0FBUzt3QkFJYk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFekIsNERBQXdCLENBQUNrQixTQUFTOzs7O3dCQWlCdkQsQ0FBQzs0QkFDTk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0M7d0JBQzlDLENBQUM7Ozs7OztRQUNELEVBQW9CO1FBQ3BCLEVBQWtEO1FBQ2xELEVBQThCO1FBQzlCLEVBQUk7UUFDTixDQUFDO3dCQXJDS1osUUFBUTs7OztJQXNDZGYsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZjBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixjQUFjO1FBQzFCLEVBQUUsRUFBRUEsY0FBYyxFQUFFQyxRQUFRO0lBQzlCLENBQUMsRUFBRSxDQUFDRDtRQUFBQSxjQUFjO0lBQUEsQ0FBQztJQUVuQixNQUFNLDZFQUNIaUIsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBc0Y7O1lBQUMsQ0FDMUY7WUFBQ2xCLGNBQWM7Ozs7Ozs7QUFHL0IsQ0FBQztHQXhES1QsSUFBSTs7UUFNZUYsOERBQWU7OztBQW9EeEMsK0RBQWVFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQUJCQ29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHVzZUVhZ2VyQ29ubmVjdCBmcm9tICcuLi9ob29rcy91c2VFYWdlckNvbm5lY3QnXG5pbXBvcnQgQUJCIGZyb20gJy4uL3V0aWxzL0FCQi5qc29uJ1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuXG5jb25zdCBtaW50ID0gKCkgPT4ge1xuICBjb25zdCBbbWludGVkTkZULCBzZXRNaW50ZWRORlRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW21pbmluZ1N0YXR1cywgc2V0TWluaW5nU3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdHhFcnJvciwgc2V0VHhFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gdXNlRWFnZXJDb25uZWN0KClcblxuICBjb25zdCBnZXRTdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyB0cnkge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSlcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICBjb25zdCBBQkJDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoQUJCQ29udHJhY3RBZGRyZXNzLCBBQkIsIHNpZ25lcilcbiAgICAgIGNvbnNvbGUubG9nKGV0aGVycy51dGlscy5nZXRBZGRyZXNzKGN1cnJlbnRBY2NvdW50KSlcbiAgICAgIGxldCBhbGxvd2FuY2UgPSBhd2FpdCBBQkJDb250cmFjdC5hbGxvd2FuY2UoXG4gICAgICAgIGV0aGVycy51dGlscy5nZXRBZGRyZXNzKGN1cnJlbnRBY2NvdW50KSxcbiAgICAgICAgQUJCQ29udHJhY3RBZGRyZXNzXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZygnTWluaW5nLi4uLicsIGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihhbGxvd2FuY2UpKVxuXG4gICAgICAvLyBBQkJDb250cmFjdC5hcHByb3ZlKEFCQkNvbnRyYWN0QWRkcmVzcywgJzUwMDAwMDAwMDAwMDAwMDAwMDAnKVxuICAgICAgLy8gc2V0TWluaW5nU3RhdHVzKDApXG5cbiAgICAgIC8vIGxldCB0eCA9IGF3YWl0IG5mdFR4LndhaXQoKVxuICAgICAgLy8gc2V0TG9hZGluZ1N0YXRlKDEpXG4gICAgICAvLyBjb25zb2xlLmxvZygnTWluZWQhJywgdHgpXG4gICAgICAvLyBsZXQgZXZlbnQgPSB0eC5ldmVudHNbMF1cbiAgICAgIC8vIGxldCB2YWx1ZSA9IGV2ZW50LmFyZ3NbMl1cbiAgICAgIC8vIGxldCB0b2tlbklkID0gdmFsdWUudG9OdW1iZXIoKVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgIC8vICAgYE1pbmVkLCBzZWUgdHJhbnNhY3Rpb246IGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vdHgvJHtuZnRUeC5oYXNofWBcbiAgICAgIC8vIClcblxuICAgICAgLy8gZ2V0TWludGVkTkZUKHRva2VuSWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpXG4gICAgfVxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnRXJyb3IgbWludGluZyBjaGFyYWN0ZXInLCBlcnJvcilcbiAgICAvLyAgIHNldFR4RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAvLyB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QWNjb3VudClcbiAgICBpZiAoY3VycmVudEFjY291bnQpIGdldFN0YXRzKClcbiAgfSwgW2N1cnJlbnRBY2NvdW50XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLVsjZjNmNmY0XSBwdC0zMiBmb250LWJsYWNrIHRleHQtWyM2YTUwYWFdXCI+XG4gICAgICBTdGFrZSBBQkIge2N1cnJlbnRBY2NvdW50fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbnRcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFCQkNvbnRyYWN0QWRkcmVzcyIsImV0aGVycyIsInVzZUVhZ2VyQ29ubmVjdCIsIkFCQiIsIm1pbnQiLCJtaW50ZWRORlQiLCJzZXRNaW50ZWRORlQiLCJtaW5pbmdTdGF0dXMiLCJzZXRNaW5pbmdTdGF0dXMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJ0eEVycm9yIiwic2V0VHhFcnJvciIsImN1cnJlbnRBY2NvdW50IiwiZ2V0U3RhdHMiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwic2lnbmVyIiwiQUJCQ29udHJhY3QiLCJhbGxvd2FuY2UiLCJ3aW5kb3ciLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsImdldEFkZHJlc3MiLCJmb3JtYXRFdGhlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});