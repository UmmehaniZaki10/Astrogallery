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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useEagerConnect */ \"./hooks/useEagerConnect.tsx\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var account = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(account));\n                        _ctx.next = 8;\n                        return ABBContract.allowance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.getAddress(account), _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 8:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // } catch (error) {\n        //   console.log('Error minting character', error)\n        //   setTxError(error.message)\n        // }\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(account);\n        if (account) getStats();\n    }, [\n        account\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"head\",\n                children: \"Stake ABB\"\n            }, void 0, false, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-sb pd cw-1 rd m-auto shadow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-1 \",\n                                children: \"Available to stake\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-2 \",\n                                children: account ? '1000 ABB' : '-'\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-1 \",\n                                children: \"Accured Rewards\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"txt-2 \",\n                                children: account ? '1000 ABB' : '-'\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"pd cw-1 rd m-auto flex-col shadow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"material-textfield flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                className: \"txt-1 \",\n                                children: \"Duration of staking\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                placeholder: \" \",\n                                className: \"txt-2 \",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        class: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                class: \"btn\",\n                                children: \"Click me\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                class: \"dropdown\",\n                                children: \"Hello World\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"material-textfield flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                className: \"txt-1 \",\n                                children: \"Stake Amount\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                placeholder: \" \",\n                                className: \"txt-2 \",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"material-textfield flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                className: \"txt-1 \",\n                                children: \"Solana address\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                placeholder: \" \",\n                                className: \"txt-2 \",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"btn\",\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    children: \"Stake ABB\"\n                                }, void 0, false, {\n                                    fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"btn\",\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    children: \"Redeem 100 ABB\"\n                                }, void 0, false, {\n                                    fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"btn\",\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"nbTAZOuN9xG1yPiRhK7s3r0hvdQ=\", false, function() {\n    return [\n        _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBYzs7Ozs7Ozs7Ozs7O21IQUl2QkYsQ0FBQzt3QkFBQ1AsU0FBUyxFQUFDLENBQUs7d0JBQUNRLElBQUksRUFBQyxDQUFHOzhHQUN4QkMsQ0FBSTtzQ0FBQyxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQyxDQUFDO0dBcEdLcEMsSUFBSTs7UUFNUUYsOERBQWU7OztBQWdHakMsK0RBQWVFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQUJCQ29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHVzZUVhZ2VyQ29ubmVjdCBmcm9tICcuLi9ob29rcy91c2VFYWdlckNvbm5lY3QnXG5pbXBvcnQgQUJCIGZyb20gJy4uL3V0aWxzL0FCQi5qc29uJ1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuXG5jb25zdCBtaW50ID0gKCkgPT4ge1xuICBjb25zdCBbbWludGVkTkZULCBzZXRNaW50ZWRORlRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW21pbmluZ1N0YXR1cywgc2V0TWluaW5nU3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdHhFcnJvciwgc2V0VHhFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGFjY291bnQgPSB1c2VFYWdlckNvbm5lY3QoKVxuXG4gIGNvbnN0IGdldFN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIHRyeSB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG5cbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIGNvbnN0IEFCQkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChBQkJDb250cmFjdEFkZHJlc3MsIEFCQiwgc2lnbmVyKVxuICAgICAgY29uc29sZS5sb2coZXRoZXJzLnV0aWxzLmdldEFkZHJlc3MoYWNjb3VudCkpXG4gICAgICBsZXQgYWxsb3dhbmNlID0gYXdhaXQgQUJCQ29udHJhY3QuYWxsb3dhbmNlKFxuICAgICAgICBldGhlcnMudXRpbHMuZ2V0QWRkcmVzcyhhY2NvdW50KSxcbiAgICAgICAgQUJCQ29udHJhY3RBZGRyZXNzXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZygnTWluaW5nLi4uLicsIGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihhbGxvd2FuY2UpKVxuXG4gICAgICAvLyBBQkJDb250cmFjdC5hcHByb3ZlKEFCQkNvbnRyYWN0QWRkcmVzcywgJzUwMDAwMDAwMDAwMDAwMDAwMDAnKVxuICAgICAgLy8gc2V0TWluaW5nU3RhdHVzKDApXG5cbiAgICAgIC8vIGxldCB0eCA9IGF3YWl0IG5mdFR4LndhaXQoKVxuICAgICAgLy8gc2V0TG9hZGluZ1N0YXRlKDEpXG4gICAgICAvLyBjb25zb2xlLmxvZygnTWluZWQhJywgdHgpXG4gICAgICAvLyBsZXQgZXZlbnQgPSB0eC5ldmVudHNbMF1cbiAgICAgIC8vIGxldCB2YWx1ZSA9IGV2ZW50LmFyZ3NbMl1cbiAgICAgIC8vIGxldCB0b2tlbklkID0gdmFsdWUudG9OdW1iZXIoKVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgIC8vICAgYE1pbmVkLCBzZWUgdHJhbnNhY3Rpb246IGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vdHgvJHtuZnRUeC5oYXNofWBcbiAgICAgIC8vIClcblxuICAgICAgLy8gZ2V0TWludGVkTkZUKHRva2VuSWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpXG4gICAgfVxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnRXJyb3IgbWludGluZyBjaGFyYWN0ZXInLCBlcnJvcilcbiAgICAvLyAgIHNldFR4RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAvLyB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50KVxuICAgIGlmIChhY2NvdW50KSBnZXRTdGF0cygpXG4gIH0sIFthY2NvdW50XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5TdGFrZSBBQkI8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zYiBwZCBjdy0xIHJkIG0tYXV0byBzaGFkb3dcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dC0xIFwiPkF2YWlsYWJsZSB0byBzdGFrZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0LTIgXCI+e2FjY291bnQgPyAnMTAwMCBBQkInIDogJy0nfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dC0xIFwiPkFjY3VyZWQgUmV3YXJkczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0LTIgXCI+e2FjY291bnQgPyAnMTAwMCBBQkInIDogJy0nfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZCBjdy0xIHJkIG0tYXV0byBmbGV4LWNvbCBzaGFkb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRlcmlhbC10ZXh0ZmllbGQgZmxleC1jb2xcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidHh0LTEgXCI+RHVyYXRpb24gb2Ygc3Rha2luZzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiIFwiIGNsYXNzTmFtZT1cInR4dC0yIFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiPlxuICAgICAgICAgICAgQ2xpY2sgbWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5IZWxsbyBXb3JsZDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRlcmlhbC10ZXh0ZmllbGQgZmxleC1jb2xcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidHh0LTEgXCI+U3Rha2UgQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIgXCIgY2xhc3NOYW1lPVwidHh0LTIgXCIgdHlwZT1cIm51bWJlclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGVyaWFsLXRleHRmaWVsZCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0eHQtMSBcIj5Tb2xhbmEgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiIFwiIGNsYXNzTmFtZT1cInR4dC0yIFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5TdGFrZSBBQkI8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5SZWRlZW0gMTAwIEFCQjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4+Q29ubmVjdCBXYWxsZXQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWludFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQUJCQ29udHJhY3RBZGRyZXNzIiwiZXRoZXJzIiwidXNlRWFnZXJDb25uZWN0IiwiQUJCIiwibWludCIsIm1pbnRlZE5GVCIsInNldE1pbnRlZE5GVCIsIm1pbmluZ1N0YXR1cyIsInNldE1pbmluZ1N0YXR1cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInR4RXJyb3IiLCJzZXRUeEVycm9yIiwiYWNjb3VudCIsImdldFN0YXRzIiwiZXRoZXJldW0iLCJwcm92aWRlciIsInNpZ25lciIsIkFCQkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwid2luZG93IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJnZXRBZGRyZXNzIiwiZm9ybWF0RXRoZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiY2xhc3MiLCJidXR0b24iLCJhIiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});