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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useEagerConnect */ \"./hooks/useEagerConnect.tsx\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var currentAccount = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount));\n                        _ctx.next = 8;\n                        return ABBContract.allowance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(currentAccount), _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 8:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // } catch (error) {\n        //   console.log('Error minting character', error)\n        //   setTxError(error.message)\n        // }\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(currentAccount);\n        if (currentAccount) getStats();\n    }, [\n        currentAccount\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"head\",\n                children: \"Stake ABB\"\n            }, void 0, false, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-sb pd rd m-auto shadow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-1 \",\n                                children: \"Available to stake\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-2 \",\n                                children: \"1000 ABB\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-1 \",\n                                children: \"Accured Rewards\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-2 \",\n                                children: \"1000 ABB\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"hS558dz0Cs1BsS0FBEd9yLGdmM4=\", false, function() {\n    return [\n        _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBQkJDb250cmFjdEFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgdXNlRWFnZXJDb25uZWN0IGZyb20gJy4uL2hvb2tzL3VzZUVhZ2VyQ29ubmVjdCdcbmltcG9ydCBBQkIgZnJvbSAnLi4vdXRpbHMvQUJCLmpzb24nXG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55XG5cbmNvbnN0IG1pbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFttaW50ZWRORlQsIHNldE1pbnRlZE5GVF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWluaW5nU3RhdHVzLCBzZXRNaW5pbmdTdGF0dXNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFt0eEVycm9yLCBzZXRUeEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgY3VycmVudEFjY291bnQgPSB1c2VFYWdlckNvbm5lY3QoKVxuXG4gIGNvbnN0IGdldFN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIHRyeSB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG5cbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIGNvbnN0IEFCQkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChBQkJDb250cmFjdEFkZHJlc3MsIEFCQiwgc2lnbmVyKVxuICAgICAgY29uc29sZS5sb2coZXRoZXJzLnV0aWxzLmdldEFkZHJlc3MoY3VycmVudEFjY291bnQpKVxuICAgICAgbGV0IGFsbG93YW5jZSA9IGF3YWl0IEFCQkNvbnRyYWN0LmFsbG93YW5jZShcbiAgICAgICAgZXRoZXJzLnV0aWxzLmdldEFkZHJlc3MoY3VycmVudEFjY291bnQpLFxuICAgICAgICBBQkJDb250cmFjdEFkZHJlc3NcbiAgICAgIClcbiAgICAgIGNvbnNvbGUubG9nKCdNaW5pbmcuLi4uJywgZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGFsbG93YW5jZSkpXG5cbiAgICAgIC8vIEFCQkNvbnRyYWN0LmFwcHJvdmUoQUJCQ29udHJhY3RBZGRyZXNzLCAnNTAwMDAwMDAwMDAwMDAwMDAwMCcpXG4gICAgICAvLyBzZXRNaW5pbmdTdGF0dXMoMClcblxuICAgICAgLy8gbGV0IHR4ID0gYXdhaXQgbmZ0VHgud2FpdCgpXG4gICAgICAvLyBzZXRMb2FkaW5nU3RhdGUoMSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdNaW5lZCEnLCB0eClcbiAgICAgIC8vIGxldCBldmVudCA9IHR4LmV2ZW50c1swXVxuICAgICAgLy8gbGV0IHZhbHVlID0gZXZlbnQuYXJnc1syXVxuICAgICAgLy8gbGV0IHRva2VuSWQgPSB2YWx1ZS50b051bWJlcigpXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICBgTWluZWQsIHNlZSB0cmFuc2FjdGlvbjogaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby90eC8ke25mdFR4Lmhhc2h9YFxuICAgICAgLy8gKVxuXG4gICAgICAvLyBnZXRNaW50ZWRORlQodG9rZW5JZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFdGhlcmV1bSBvYmplY3QgZG9lc24ndCBleGlzdCFcIilcbiAgICB9XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdFcnJvciBtaW50aW5nIGNoYXJhY3RlcicsIGVycm9yKVxuICAgIC8vICAgc2V0VHhFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIC8vIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KVxuICAgIGlmIChjdXJyZW50QWNjb3VudCkgZ2V0U3RhdHMoKVxuICB9LCBbY3VycmVudEFjY291bnRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlN0YWtlIEFCQjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNiIHBkIHJkIG0tYXV0byBzaGFkb3dcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dC0xIFwiPkF2YWlsYWJsZSB0byBzdGFrZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0LTIgXCI+MTAwMCBBQkI8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHQtMSBcIj5BY2N1cmVkIFJld2FyZHM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dC0yIFwiPjEwMDAgQUJCPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWludFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQUJCQ29udHJhY3RBZGRyZXNzIiwiZXRoZXJzIiwidXNlRWFnZXJDb25uZWN0IiwiQUJCIiwibWludCIsIm1pbnRlZE5GVCIsInNldE1pbnRlZE5GVCIsIm1pbmluZ1N0YXR1cyIsInNldE1pbmluZ1N0YXR1cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInR4RXJyb3IiLCJzZXRUeEVycm9yIiwiY3VycmVudEFjY291bnQiLCJnZXRTdGF0cyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJzaWduZXIiLCJBQkJDb250cmFjdCIsImFsbG93YW5jZSIsIndpbmRvdyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiY29uc29sZSIsImxvZyIsInV0aWxzIiwiZ2V0QWRkcmVzcyIsImZvcm1hdEV0aGVyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});