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

/***/ "./hooks/useEagerConnect.tsx":
/*!***********************************!*\
  !*** ./hooks/useEagerConnect.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar useEagerConnect = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), currentAccount = ref[0], setCurrentAccount = ref[1];\n    // Calls Metamask to connect wallet on clicking Connect Wallet button\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId, accounts;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log('Metamask not detected');\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: 'eth_chainId'\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log('Connectdsded to chain:' + chainId);\n                        console.log('here');\n                        rinkebyChainId = '0x61';\n                        if (!(chainId !== rinkebyChainId)) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        console.log('here');\n                        ethereum.request({\n                            method: 'wallet_addEthereumChain',\n                            params: [\n                                {\n                                    chainId: '0x61',\n                                    rpcUrls: [\n                                        'https://data-seed-prebsc-1-s1.binance.org:8545'\n                                    ],\n                                    chainName: 'Binance Test Network',\n                                    nativeCurrency: {\n                                        name: 'BNB',\n                                        symbol: 'BNB',\n                                        decimals: 18\n                                    },\n                                    blockExplorerUrls: [\n                                        'https://testnet.bscscan.io'\n                                    ]\n                                }, \n                            ]\n                        });\n                        return _ctx.abrupt(\"return\");\n                    case 15:\n                        _ctx.next = 17;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 17:\n                        accounts = _ctx.sent;\n                        console.log('Found account', accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 25;\n                        break;\n                    case 22:\n                        _ctx.prev = 22;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error connecting to metamask', _ctx.t0);\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    22\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Checks if wallet is connected to the correct network\n    var checkCorrectNetwork = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        _ctx.next = 3;\n                        return ethereum.request({\n                            method: 'eth_chainId'\n                        });\n                    case 3:\n                        chainId = _ctx.sent;\n                        console.log('Connected to chain:' + chainId);\n                        rinkebyChainId = '0x4';\n                        if (chainId !== rinkebyChainId) {\n                            connectWallet();\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkCorrectNetwork() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Checks if wallet is connected\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return checkCorrectNetwork();\n                    case 4:\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log('Found authorized Account: ', accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log('No authorized account found');\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 10:\n                        {\n                            console.log('No Wallet found. Connect Wallet');\n                        }\n                    case 11:\n                        return _ctx.abrupt(\"return\", null);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        checkIfWalletIsConnected();\n        if (window.ethereum) {\n            window.ethereum.on('chainChanged', function() {\n                checkIfWalletIsConnected();\n            });\n            window.ethereum.on('accountsChanged', function() {\n                checkIfWalletIsConnected();\n            });\n        }\n    }, []);\n    return currentAccount;\n};\n_s(useEagerConnect, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useEagerConnect);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixRQUFROzZCQUNaQSxRQUFROzs7OzsrQkFDSmlCLG1CQUFtQjs7OytCQUNGakIsUUFBUSxDQUFDTyxPQUFPLENBQUMsQ0FBQzs0QkFBQ0MsTUFBTSxFQUFFLENBQWM7d0JBQUMsQ0FBQzs7d0JBQTVETCxRQUFRO3dCQUNkLEVBQUUsRUFBRUEsUUFBUSxDQUFDZ0IsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDOzRCQUMxQmQsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNEIsNkJBQUVILFFBQVEsQ0FBQyxDQUFDOzRCQUNwREwsaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxDQUFDO3dCQUM5QixDQUFDLE1BQU0sQ0FBQzs0QkFDTkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkI7d0JBQzNDLENBQUM7Ozs7d0JBQ0ksQ0FBQzs0QkFDTkQsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUM7d0JBQy9DLENBQUM7O3FEQUNNLElBQUk7Ozs7OztRQUNiLENBQUM7d0JBZktZLHdCQUF3Qjs7OztJQWdCOUJ2QixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmdUIsd0JBQXdCO1FBQ3hCLEVBQUUsRUFBRWQsTUFBTSxDQUFDSixRQUFRLEVBQUUsQ0FBQztZQUNwQkksTUFBTSxDQUFDSixRQUFRLENBQUNvQixFQUFFLENBQUMsQ0FBYyxlQUFFLFFBQ3pDLEdBRCtDLENBQUM7Z0JBQ3hDRix3QkFBd0I7WUFDMUIsQ0FBQztZQUNEZCxNQUFNLENBQUNKLFFBQVEsQ0FBQ29CLEVBQUUsQ0FBQyxDQUFpQixrQkFBRSxRQUM1QyxHQURrRCxDQUFDO2dCQUMzQ0Ysd0JBQXdCO1lBQzFCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sQ0FBQ3JCLGNBQWM7QUFDdkIsQ0FBQztHQTFGS0QsZUFBZTtBQTRGckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRWFnZXJDb25uZWN0LnRzeD8wY2Y5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55XG5cbmNvbnN0IHVzZUVhZ2VyQ29ubmVjdCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJylcblxuICAvLyBDYWxscyBNZXRhbWFzayB0byBjb25uZWN0IHdhbGxldCBvbiBjbGlja2luZyBDb25uZWN0IFdhbGxldCBidXR0b25cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01ldGFtYXNrIG5vdCBkZXRlY3RlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2NoYWluSWQnIH0pXG4gICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGRzZGVkIHRvIGNoYWluOicgKyBjaGFpbklkKVxuXG4gICAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgICBjb25zdCByaW5rZWJ5Q2hhaW5JZCA9ICcweDYxJ1xuXG4gICAgICBpZiAoY2hhaW5JZCAhPT0gcmlua2VieUNoYWluSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxuICAgICAgICBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoYWluSWQ6ICcweDYxJyxcbiAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL2RhdGEtc2VlZC1wcmVic2MtMS1zMS5iaW5hbmNlLm9yZzo4NTQ1J10sXG4gICAgICAgICAgICAgIGNoYWluTmFtZTogJ0JpbmFuY2UgVGVzdCBOZXR3b3JrJyxcbiAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQk5CJyxcbiAgICAgICAgICAgICAgICBzeW1ib2w6ICdCTkInLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IFsnaHR0cHM6Ly90ZXN0bmV0LmJzY3NjYW4uaW8nXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhY2NvdW50JywgYWNjb3VudHNbMF0pXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGNvbm5lY3RpbmcgdG8gbWV0YW1hc2snLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBDaGVja3MgaWYgd2FsbGV0IGlzIGNvbm5lY3RlZCB0byB0aGUgY29ycmVjdCBuZXR3b3JrXG4gIGNvbnN0IGNoZWNrQ29ycmVjdE5ldHdvcmsgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG4gICAgbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2NoYWluSWQnIH0pXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBjaGFpbjonICsgY2hhaW5JZClcblxuICAgIGNvbnN0IHJpbmtlYnlDaGFpbklkID0gJzB4NCdcblxuICAgIGlmIChjaGFpbklkICE9PSByaW5rZWJ5Q2hhaW5JZCkge1xuICAgICAgY29ubmVjdFdhbGxldCgpXG4gICAgfVxuICB9XG4gIC8vIENoZWNrcyBpZiB3YWxsZXQgaXMgY29ubmVjdGVkXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGF3YWl0IGNoZWNrQ29ycmVjdE5ldHdvcmsoKVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KVxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRm91bmQgYXV0aG9yaXplZCBBY2NvdW50OiAnLCBhY2NvdW50c1swXSlcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kJylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIFdhbGxldCBmb3VuZC4gQ29ubmVjdCBXYWxsZXQnKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcbiAgICAgIH0pXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gY3VycmVudEFjY291bnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRWFnZXJDb25uZWN0XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VFYWdlckNvbm5lY3QiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwiY2hhaW5JZCIsInJpbmtlYnlDaGFpbklkIiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsInJwY1VybHMiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsImJsb2NrRXhwbG9yZXJVcmxzIiwiY2hlY2tDb3JyZWN0TmV0d29yayIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImxlbmd0aCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useEagerConnect.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useEagerConnect */ \"./hooks/useEagerConnect.tsx\");\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var currentAccount = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    console.log(currentAccount);\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        _ctx.next = 7;\n                        return ABBContract.allowance('0x35608552c5B285E0f059f0a34F686c90C90F9315', _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 7:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 12;\n                        break;\n                    case 11:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // } catch (error) {\n        //   console.log('Error minting character', error)\n        //   setTxError(error.message)\n        // }\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   console.log(currentAccount)\n    // }, [currentAccount])\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-[#f3f6f4] pt-32 text-[#6a50aa]\"\n    }, void 0, false, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"kLfUN43PGgE6YaX414uQNsIKumY=\", false, function() {\n    return [\n        _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNsQjtBQUV1QjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkMsR0FBSyxDQUFDSyxJQUFJLEdBQUcsUUFDYixHQURtQixDQUFDOztJQUNsQixHQUFLLENBQTZCTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q00sU0FBUyxHQUFrQk4sR0FBYyxLQUE5Qk8sWUFBWSxHQUFJUCxHQUFjO0lBQ2hELEdBQUssQ0FBbUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlDUSxZQUFZLEdBQXFCUixJQUFjLEtBQWpDUyxlQUFlLEdBQUlULElBQWM7SUFDdEQsR0FBSyxDQUFtQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBM0NVLFlBQVksR0FBcUJWLElBQVcsS0FBOUJXLGVBQWUsR0FBSVgsSUFBVztJQUNuRCxHQUFLLENBQXlCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ1ksT0FBTyxHQUFnQlosSUFBYyxLQUE1QmEsVUFBVSxHQUFJYixJQUFjO0lBRTVDLEdBQUssQ0FBQ2MsY0FBYyxHQUFHWCxrRUFBZTtJQUN0Q1ksT0FBTyxDQUFDQyxHQUFHLENBQUNGLGNBQWM7SUFFMUIsR0FBSyxDQUFDRyxRQUFROzZMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUVwQkMsUUFBUSxFQUdSQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsV0FBVyxFQUViQyxTQUFTOzs7O3dCQVBQSixRQUFRLEdBQUtLLE1BQU0sQ0FBbkJMLFFBQVE7NkJBRVpBLFFBQVE7Ozs7d0JBQ0pDLFFBQVEsR0FBRyxHQUFHLENBQUNqQixpRUFBNkIsQ0FBQ2dCLFFBQVE7d0JBQ3JERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUzt3QkFDM0JMLFdBQVcsR0FBRyxHQUFHLENBQUNuQixtREFBZSxDQUFDRCwwREFBa0IsRUFBRUcsNENBQUcsRUFBRWdCLE1BQU07OytCQUVqREMsV0FBVyxDQUFDQyxTQUFTLENBQ3pDLENBQTRDLDZDQUM1Q3JCLDBEQUFrQjs7d0JBRmhCcUIsU0FBUzt3QkFJYlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFZCw0REFBd0IsQ0FBQ29CLFNBQVM7Ozs7d0JBaUJ2RCxDQUFDOzRCQUNOUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQzt3QkFDOUMsQ0FBQzs7Ozs7O1FBQ0QsRUFBb0I7UUFDcEIsRUFBa0Q7UUFDbEQsRUFBOEI7UUFDOUIsRUFBSTtRQUNOLENBQUM7d0JBckNLQyxRQUFROzs7O0lBc0NkLEVBQW9CO0lBQ3BCLEVBQWdDO0lBQ2hDLEVBQXVCO0lBRXZCLE1BQU0sNkVBQ0hhLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTJFOzs7Ozs7QUFJOUYsQ0FBQztHQXhESzFCLElBQUk7O1FBTWVGLDhEQUFlOzs7QUFvRHhDLCtEQUFlRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFCQkNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZy5qcydcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB1c2VFYWdlckNvbm5lY3QgZnJvbSAnLi4vaG9va3MvdXNlRWFnZXJDb25uZWN0J1xuaW1wb3J0IEFCQiBmcm9tICcuLi91dGlscy9BQkIuanNvbidcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55XG5cbmNvbnN0IG1pbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFttaW50ZWRORlQsIHNldE1pbnRlZE5GVF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWluaW5nU3RhdHVzLCBzZXRNaW5pbmdTdGF0dXNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFt0eEVycm9yLCBzZXRUeEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgY3VycmVudEFjY291bnQgPSB1c2VFYWdlckNvbm5lY3QoKVxuICBjb25zb2xlLmxvZyhjdXJyZW50QWNjb3VudClcblxuICBjb25zdCBnZXRTdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyB0cnkge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSlcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICBjb25zdCBBQkJDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoQUJCQ29udHJhY3RBZGRyZXNzLCBBQkIsIHNpZ25lcilcbiAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KVxuICAgICAgbGV0IGFsbG93YW5jZSA9IGF3YWl0IEFCQkNvbnRyYWN0LmFsbG93YW5jZShcbiAgICAgICAgJzB4MzU2MDg1NTJjNUIyODVFMGYwNTlmMGEzNEY2ODZjOTBDOTBGOTMxNScsXG4gICAgICAgIEFCQkNvbnRyYWN0QWRkcmVzc1xuICAgICAgKVxuICAgICAgY29uc29sZS5sb2coJ01pbmluZy4uLi4nLCBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYWxsb3dhbmNlKSlcblxuICAgICAgLy8gQUJCQ29udHJhY3QuYXBwcm92ZShBQkJDb250cmFjdEFkZHJlc3MsICc1MDAwMDAwMDAwMDAwMDAwMDAwJylcbiAgICAgIC8vIHNldE1pbmluZ1N0YXR1cygwKVxuXG4gICAgICAvLyBsZXQgdHggPSBhd2FpdCBuZnRUeC53YWl0KClcbiAgICAgIC8vIHNldExvYWRpbmdTdGF0ZSgxKVxuICAgICAgLy8gY29uc29sZS5sb2coJ01pbmVkIScsIHR4KVxuICAgICAgLy8gbGV0IGV2ZW50ID0gdHguZXZlbnRzWzBdXG4gICAgICAvLyBsZXQgdmFsdWUgPSBldmVudC5hcmdzWzJdXG4gICAgICAvLyBsZXQgdG9rZW5JZCA9IHZhbHVlLnRvTnVtYmVyKClcblxuICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAvLyAgIGBNaW5lZCwgc2VlIHRyYW5zYWN0aW9uOiBodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL3R4LyR7bmZ0VHguaGFzaH1gXG4gICAgICAvLyApXG5cbiAgICAgIC8vIGdldE1pbnRlZE5GVCh0b2tlbklkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBkb2Vzbid0IGV4aXN0IVwiKVxuICAgIH1cbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coJ0Vycm9yIG1pbnRpbmcgY2hhcmFjdGVyJywgZXJyb3IpXG4gICAgLy8gICBzZXRUeEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgLy8gfVxuICB9XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXG4gIC8vIH0sIFtjdXJyZW50QWNjb3VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1bI2YzZjZmNF0gcHQtMzIgdGV4dC1bIzZhNTBhYV1cIj5cbiAgICAgIHsvKiBIZXkge2N1cnJlbnRBY2NvdW50fSAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtaW50XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBQkJDb250cmFjdEFkZHJlc3MiLCJldGhlcnMiLCJ1c2VFYWdlckNvbm5lY3QiLCJBQkIiLCJtaW50IiwibWludGVkTkZUIiwic2V0TWludGVkTkZUIiwibWluaW5nU3RhdHVzIiwic2V0TWluaW5nU3RhdHVzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwidHhFcnJvciIsInNldFR4RXJyb3IiLCJjdXJyZW50QWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0cyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJzaWduZXIiLCJBQkJDb250cmFjdCIsImFsbG93YW5jZSIsIndpbmRvdyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});