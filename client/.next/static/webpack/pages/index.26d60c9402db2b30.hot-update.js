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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useEagerConnect */ \"./hooks/useEagerConnect.tsx\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var currentAccount = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    console.log(currentAccount);\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount));\n                        _ctx.next = 8;\n                        return ABBContract.allowance('0x35608552c5B285E0f059f0a34F686c90C90F9315', _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 8:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // } catch (error) {\n        //   console.log('Error minting character', error)\n        //   setTxError(error.message)\n        // }\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(currentAccount);\n        if (currentAccount) getStats();\n    }, [\n        currentAccount\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-[#f3f6f4] pt-32 text-[#6a50aa]\",\n        children: [\n            \"Hey \",\n            currentAccount\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"hS558dz0Cs1BsS0FBEd9yLGdmM4=\", false, function() {\n    return [\n        _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNsQjtBQUV1QjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkMsR0FBSyxDQUFDTSxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQTZCTixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q08sU0FBUyxHQUFrQlAsR0FBYyxLQUE5QlEsWUFBWSxHQUFJUixHQUFjO0lBQ2hELEdBQUssQ0FBbUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlDUyxZQUFZLEdBQXFCVCxJQUFjLEtBQWpDVSxlQUFlLEdBQUlWLElBQWM7SUFDdEQsR0FBSyxDQUFtQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBM0NXLFlBQVksR0FBcUJYLElBQVcsS0FBOUJZLGVBQWUsR0FBSVosSUFBVztJQUNuRCxHQUFLLENBQXlCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ2EsT0FBTyxHQUFnQmIsSUFBYyxLQUE1QmMsVUFBVSxHQUFJZCxJQUFjO0lBRTVDLEdBQUssQ0FBQ2UsY0FBYyxHQUFHWCxrRUFBZTtJQUN0Q1ksT0FBTyxDQUFDQyxHQUFHLENBQUNGLGNBQWM7SUFFMUIsR0FBSyxDQUFDRyxRQUFROzZMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUVwQkMsUUFBUSxFQUdSQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsV0FBVyxFQUViQyxTQUFTOzs7O3dCQVBQSixRQUFRLEdBQUtLLE1BQU0sQ0FBbkJMLFFBQVE7NkJBRVpBLFFBQVE7Ozs7d0JBQ0pDLFFBQVEsR0FBRyxHQUFHLENBQUNqQixpRUFBNkIsQ0FBQ2dCLFFBQVE7d0JBQ3JERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUzt3QkFDM0JMLFdBQVcsR0FBRyxHQUFHLENBQUNuQixtREFBZSxDQUFDRCwwREFBa0IsRUFBRUcsNENBQUcsRUFBRWdCLE1BQU07d0JBQ3ZFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsMkRBQXVCLENBQUNZLGNBQWM7OytCQUM1Qk8sV0FBVyxDQUFDQyxTQUFTLENBQ3pDLENBQTRDLDZDQUM1Q3JCLDBEQUFrQjs7d0JBRmhCcUIsU0FBUzt3QkFJYlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFZCw0REFBd0IsQ0FBQ29CLFNBQVM7Ozs7d0JBaUJ2RCxDQUFDOzRCQUNOUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQzt3QkFDOUMsQ0FBQzs7Ozs7O1FBQ0QsRUFBb0I7UUFDcEIsRUFBa0Q7UUFDbEQsRUFBOEI7UUFDOUIsRUFBSTtRQUNOLENBQUM7d0JBckNLQyxRQUFROzs7O0lBc0NkakIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZmUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGNBQWM7UUFDMUIsRUFBRSxFQUFFQSxjQUFjLEVBQUVHLFFBQVE7SUFDOUIsQ0FBQyxFQUFFLENBQUNIO1FBQUFBLGNBQWM7SUFBQSxDQUFDO0lBRW5CLE1BQU0sNkVBQ0hpQixDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEyRTs7WUFBQyxDQUNyRjtZQUFDbEIsY0FBYzs7Ozs7OztBQUd6QixDQUFDO0dBekRLVCxJQUFJOztRQU1lRiw4REFBZTs7O0FBcUR4QywrREFBZUUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBQkJDb250cmFjdEFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgdXNlRWFnZXJDb25uZWN0IGZyb20gJy4uL2hvb2tzL3VzZUVhZ2VyQ29ubmVjdCdcbmltcG9ydCBBQkIgZnJvbSAnLi4vdXRpbHMvQUJCLmpzb24nXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuXG5jb25zdCBtaW50ID0gKCkgPT4ge1xuICBjb25zdCBbbWludGVkTkZULCBzZXRNaW50ZWRORlRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW21pbmluZ1N0YXR1cywgc2V0TWluaW5nU3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdHhFcnJvciwgc2V0VHhFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gdXNlRWFnZXJDb25uZWN0KClcbiAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXG5cbiAgY29uc3QgZ2V0U3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gdHJ5IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcblxuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3QgQUJCQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KEFCQkNvbnRyYWN0QWRkcmVzcywgQUJCLCBzaWduZXIpXG4gICAgICBjb25zb2xlLmxvZyhldGhlcnMudXRpbHMuZ2V0QWRkcmVzcyhjdXJyZW50QWNjb3VudCkpXG4gICAgICBsZXQgYWxsb3dhbmNlID0gYXdhaXQgQUJCQ29udHJhY3QuYWxsb3dhbmNlKFxuICAgICAgICAnMHgzNTYwODU1MmM1QjI4NUUwZjA1OWYwYTM0RjY4NmM5MEM5MEY5MzE1JyxcbiAgICAgICAgQUJCQ29udHJhY3RBZGRyZXNzXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZygnTWluaW5nLi4uLicsIGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihhbGxvd2FuY2UpKVxuXG4gICAgICAvLyBBQkJDb250cmFjdC5hcHByb3ZlKEFCQkNvbnRyYWN0QWRkcmVzcywgJzUwMDAwMDAwMDAwMDAwMDAwMDAnKVxuICAgICAgLy8gc2V0TWluaW5nU3RhdHVzKDApXG5cbiAgICAgIC8vIGxldCB0eCA9IGF3YWl0IG5mdFR4LndhaXQoKVxuICAgICAgLy8gc2V0TG9hZGluZ1N0YXRlKDEpXG4gICAgICAvLyBjb25zb2xlLmxvZygnTWluZWQhJywgdHgpXG4gICAgICAvLyBsZXQgZXZlbnQgPSB0eC5ldmVudHNbMF1cbiAgICAgIC8vIGxldCB2YWx1ZSA9IGV2ZW50LmFyZ3NbMl1cbiAgICAgIC8vIGxldCB0b2tlbklkID0gdmFsdWUudG9OdW1iZXIoKVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgIC8vICAgYE1pbmVkLCBzZWUgdHJhbnNhY3Rpb246IGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vdHgvJHtuZnRUeC5oYXNofWBcbiAgICAgIC8vIClcblxuICAgICAgLy8gZ2V0TWludGVkTkZUKHRva2VuSWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpXG4gICAgfVxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnRXJyb3IgbWludGluZyBjaGFyYWN0ZXInLCBlcnJvcilcbiAgICAvLyAgIHNldFR4RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAvLyB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QWNjb3VudClcbiAgICBpZiAoY3VycmVudEFjY291bnQpIGdldFN0YXRzKClcbiAgfSwgW2N1cnJlbnRBY2NvdW50XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLVsjZjNmNmY0XSBwdC0zMiB0ZXh0LVsjNmE1MGFhXVwiPlxuICAgICAgSGV5IHtjdXJyZW50QWNjb3VudH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtaW50XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBQkJDb250cmFjdEFkZHJlc3MiLCJldGhlcnMiLCJ1c2VFYWdlckNvbm5lY3QiLCJBQkIiLCJtaW50IiwibWludGVkTkZUIiwic2V0TWludGVkTkZUIiwibWluaW5nU3RhdHVzIiwic2V0TWluaW5nU3RhdHVzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwidHhFcnJvciIsInNldFR4RXJyb3IiLCJjdXJyZW50QWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0cyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJzaWduZXIiLCJBQkJDb250cmFjdCIsImFsbG93YW5jZSIsIndpbmRvdyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwidXRpbHMiLCJnZXRBZGRyZXNzIiwiZm9ybWF0RXRoZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});