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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), currentAccount = ref4[0], setCurrentAccount = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), correctNetwork = ref5[0], setCorrectNetwork = ref5[1];\n    // Checks if wallet is connected\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            console.log('Got the ethereum obejct: ', ethereum);\n                        } else {\n                            console.log('No Wallet found. Connect Wallet');\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log('Found authorized Account: ', accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log('No authorized account found');\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Calls Metamask to connect wallet on clicking Connect Wallet button\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId, accounts;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log('Metamask not detected');\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: 'eth_chainId'\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log('Connectdsded to chain:' + chainId);\n                        console.log('here');\n                        rinkebyChainId = '0x61';\n                        if (!(chainId !== rinkebyChainId)) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        console.log('here');\n                        ethereum.request({\n                            method: 'wallet_addEthereumChain',\n                            params: [\n                                {\n                                    chainId: '0x61',\n                                    rpcUrls: [\n                                        'https://data-seed-prebsc-1-s1.binance.org:8545'\n                                    ],\n                                    chainName: 'Binance Test Network',\n                                    nativeCurrency: {\n                                        name: 'BNB',\n                                        symbol: 'BNB',\n                                        decimals: 18\n                                    },\n                                    blockExplorerUrls: [\n                                        'https://testnet.bscscan.io'\n                                    ]\n                                }, \n                            ]\n                        });\n                        return _ctx.abrupt(\"return\");\n                    case 15:\n                        _ctx.next = 17;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 17:\n                        accounts = _ctx.sent;\n                        console.log('Found account', accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 25;\n                        break;\n                    case 22:\n                        _ctx.prev = 22;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error connecting to metamask', _ctx.t0);\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    22\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Checks if wallet is connected to the correct network\n    var checkCorrectNetwork = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        _ctx.next = 3;\n                        return ethereum.request({\n                            method: 'eth_chainId'\n                        });\n                    case 3:\n                        chainId = _ctx.sent;\n                        console.log('Connected to chain:' + chainId);\n                        rinkebyChainId = '0x4';\n                        if (chainId !== rinkebyChainId) {\n                            connectWallet();\n                        } else {\n                            setCorrectNetwork(true);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkCorrectNetwork() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getStats();\n        checkIfWalletIsConnected();\n        checkCorrectNetwork();\n    }, []);\n    // Creates transaction to mint NFT on clicking Mint Character button\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ABBContract);\n                        _ctx.next = 9;\n                        return ABBContract.allowance('0x35608552c5B285E0f059f0a34F686c90C90F9315', _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 9:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        ABBContract.approve(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, '5000000000000000000');\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 15:\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error minting character', _ctx.t0);\n                        setTxError(_ctx.t0.message);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    17\n                ]\n            ]);\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Gets the minted NFT data\n    var getMintedNFT = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(tokenId) {\n            var ethereum, provider, signer, nftContract, tokenUri, data, meta;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, NFT.abi, signer);\n                        _ctx.next = 8;\n                        return nftContract.tokenURI(tokenId);\n                    case 8:\n                        tokenUri = _ctx.sent;\n                        _ctx.next = 11;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                    case 11:\n                        data = _ctx.sent;\n                        meta = data.data;\n                        setMiningStatus(1);\n                        setMintedNFT(meta.image);\n                        _ctx.next = 18;\n                        break;\n                    case 17:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 18:\n                        _ctx.next = 24;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        setTxError(_ctx.t0.message);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return function getMintedNFT(tokenId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-[#f3f6f4] pt-32 text-[#6a50aa]\",\n        children: [\n            \"Hey \",\n            currentAccount\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 172,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"DIm4qb94eeZQlPcH5s6OTeFXx3U=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQUJCQ29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgQUJCIGZyb20gJy4uL3V0aWxzL0FCQi5qc29uJ1xuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcblxuY29uc3QgbWludCA9ICgpID0+IHtcbiAgY29uc3QgW21pbnRlZE5GVCwgc2V0TWludGVkTkZUXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFttaW5pbmdTdGF0dXMsIHNldE1pbmluZ1N0YXR1c10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3R4RXJyb3IsIHNldFR4RXJyb3JdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvcnJlY3ROZXR3b3JrLCBzZXRDb3JyZWN0TmV0d29ya10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBDaGVja3MgaWYgd2FsbGV0IGlzIGNvbm5lY3RlZFxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZygnR290IHRoZSBldGhlcmV1bSBvYmVqY3Q6ICcsIGV0aGVyZXVtKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gV2FsbGV0IGZvdW5kLiBDb25uZWN0IFdhbGxldCcpXG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KVxuXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIGF1dGhvcml6ZWQgQWNjb3VudDogJywgYWNjb3VudHNbMF0pXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZCcpXG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbHMgTWV0YW1hc2sgdG8gY29ubmVjdCB3YWxsZXQgb24gY2xpY2tpbmcgQ29ubmVjdCBXYWxsZXQgYnV0dG9uXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhbWFzayBub3QgZGV0ZWN0ZWQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBjaGFpbklkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KVxuICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rkc2RlZCB0byBjaGFpbjonICsgY2hhaW5JZClcblxuICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxuICAgICAgY29uc3Qgcmlua2VieUNoYWluSWQgPSAnMHg2MSdcblxuICAgICAgaWYgKGNoYWluSWQgIT09IHJpbmtlYnlDaGFpbklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgICAgICAgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGFpbklkOiAnMHg2MScsXG4gICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9kYXRhLXNlZWQtcHJlYnNjLTEtczEuYmluYW5jZS5vcmc6ODU0NSddLFxuICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdCaW5hbmNlIFRlc3QgTmV0d29yaycsXG4gICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0JOQicsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiAnQk5CJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJsb2NrRXhwbG9yZXJVcmxzOiBbJ2h0dHBzOi8vdGVzdG5ldC5ic2NzY2FuLmlvJ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KVxuXG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYWNjb3VudCcsIGFjY291bnRzWzBdKVxuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIG1ldGFtYXNrJywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2tzIGlmIHdhbGxldCBpcyBjb25uZWN0ZWQgdG8gdGhlIGNvcnJlY3QgbmV0d29ya1xuICBjb25zdCBjaGVja0NvcnJlY3ROZXR3b3JrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuICAgIGxldCBjaGFpbklkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KVxuICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gY2hhaW46JyArIGNoYWluSWQpXG5cbiAgICBjb25zdCByaW5rZWJ5Q2hhaW5JZCA9ICcweDQnXG5cbiAgICBpZiAoY2hhaW5JZCAhPT0gcmlua2VieUNoYWluSWQpIHtcbiAgICAgIGNvbm5lY3RXYWxsZXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDb3JyZWN0TmV0d29yayh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0U3RhdHMoKVxuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpXG4gICAgY2hlY2tDb3JyZWN0TmV0d29yaygpXG4gIH0sIFtdKVxuXG4gIC8vIENyZWF0ZXMgdHJhbnNhY3Rpb24gdG8gbWludCBORlQgb24gY2xpY2tpbmcgTWludCBDaGFyYWN0ZXIgYnV0dG9uXG4gIGNvbnN0IGdldFN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcblxuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICBjb25zdCBBQkJDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoQUJCQ29udHJhY3RBZGRyZXNzLCBBQkIsIHNpZ25lcilcbiAgICAgICAgY29uc29sZS5sb2coQUJCQ29udHJhY3QpXG4gICAgICAgIGxldCBhbGxvd2FuY2UgPSBhd2FpdCBBQkJDb250cmFjdC5hbGxvd2FuY2UoXG4gICAgICAgICAgJzB4MzU2MDg1NTJjNUIyODVFMGYwNTlmMGEzNEY2ODZjOTBDOTBGOTMxNScsXG4gICAgICAgICAgQUJCQ29udHJhY3RBZGRyZXNzXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5sb2coJ01pbmluZy4uLi4nLCBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYWxsb3dhbmNlKSlcblxuICAgICAgICBBQkJDb250cmFjdC5hcHByb3ZlKEFCQkNvbnRyYWN0QWRkcmVzcywgJzUwMDAwMDAwMDAwMDAwMDAwMDAnKVxuICAgICAgICAvLyBzZXRNaW5pbmdTdGF0dXMoMClcblxuICAgICAgICAvLyBsZXQgdHggPSBhd2FpdCBuZnRUeC53YWl0KClcbiAgICAgICAgLy8gc2V0TG9hZGluZ1N0YXRlKDEpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNaW5lZCEnLCB0eClcbiAgICAgICAgLy8gbGV0IGV2ZW50ID0gdHguZXZlbnRzWzBdXG4gICAgICAgIC8vIGxldCB2YWx1ZSA9IGV2ZW50LmFyZ3NbMl1cbiAgICAgICAgLy8gbGV0IHRva2VuSWQgPSB2YWx1ZS50b051bWJlcigpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgIC8vICAgYE1pbmVkLCBzZWUgdHJhbnNhY3Rpb246IGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vdHgvJHtuZnRUeC5oYXNofWBcbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGdldE1pbnRlZE5GVCh0b2tlbklkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFdGhlcmV1bSBvYmplY3QgZG9lc24ndCBleGlzdCFcIilcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIG1pbnRpbmcgY2hhcmFjdGVyJywgZXJyb3IpXG4gICAgICBzZXRUeEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0cyB0aGUgbWludGVkIE5GVCBkYXRhXG4gIGNvbnN0IGdldE1pbnRlZE5GVCA9IGFzeW5jICh0b2tlbklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBBQkJDb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgTkZULmFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKVxuXG4gICAgICAgIGxldCB0b2tlblVyaSA9IGF3YWl0IG5mdENvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKVxuICAgICAgICBsZXQgbWV0YSA9IGRhdGEuZGF0YVxuXG4gICAgICAgIHNldE1pbmluZ1N0YXR1cygxKVxuICAgICAgICBzZXRNaW50ZWRORlQobWV0YS5pbWFnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgc2V0VHhFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctWyNmM2Y2ZjRdIHB0LTMyIHRleHQtWyM2YTUwYWFdXCI+XG4gICAgICBIZXkge2N1cnJlbnRBY2NvdW50fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbnRcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFCQkNvbnRyYWN0QWRkcmVzcyIsImV0aGVycyIsImF4aW9zIiwiQUJCIiwibWludCIsIm1pbnRlZE5GVCIsInNldE1pbnRlZE5GVCIsIm1pbmluZ1N0YXR1cyIsInNldE1pbmluZ1N0YXR1cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInR4RXJyb3IiLCJzZXRUeEVycm9yIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNvcnJlY3ROZXR3b3JrIiwic2V0Q29ycmVjdE5ldHdvcmsiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25uZWN0V2FsbGV0IiwiY2hhaW5JZCIsInJpbmtlYnlDaGFpbklkIiwicGFyYW1zIiwicnBjVXJscyIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwiYmxvY2tFeHBsb3JlclVybHMiLCJjaGVja0NvcnJlY3ROZXR3b3JrIiwiZ2V0U3RhdHMiLCJwcm92aWRlciIsInNpZ25lciIsIkFCQkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiYXBwcm92ZSIsIm1lc3NhZ2UiLCJnZXRNaW50ZWRORlQiLCJ0b2tlbklkIiwibmZ0Q29udHJhY3QiLCJ0b2tlblVyaSIsImRhdGEiLCJtZXRhIiwiTkZUIiwiYWJpIiwidG9rZW5VUkkiLCJnZXQiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});