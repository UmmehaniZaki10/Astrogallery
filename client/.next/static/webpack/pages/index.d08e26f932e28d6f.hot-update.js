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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), currentAccount = ref4[0], setCurrentAccount = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), correctNetwork = ref5[0], setCorrectNetwork = ref5[1];\n    // Checks if wallet is connected\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            console.log('Got the ethereum obejct: ', ethereum);\n                        } else {\n                            console.log('No Wallet found. Connect Wallet');\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log('Found authorized Account: ', accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log('No authorized account found');\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Calls Metamask to connect wallet on clicking Connect Wallet button\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId, accounts;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log('Metamask not detected');\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: 'eth_chainId'\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log('Connectdsded to chain:' + chainId);\n                        console.log('here');\n                        rinkebyChainId = '0x61';\n                        if (!(chainId !== rinkebyChainId)) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        console.log('here');\n                        ethereum.request({\n                            method: 'wallet_addEthereumChain',\n                            params: [\n                                {\n                                    chainId: '0x61',\n                                    rpcUrls: [\n                                        'https://data-seed-prebsc-1-s1.binance.org:8545'\n                                    ],\n                                    chainName: 'Binance Test Network',\n                                    nativeCurrency: {\n                                        name: 'BNB',\n                                        symbol: 'BNB',\n                                        decimals: 18\n                                    },\n                                    blockExplorerUrls: [\n                                        'https://testnet.bscscan.io'\n                                    ]\n                                }, \n                            ]\n                        });\n                        return _ctx.abrupt(\"return\");\n                    case 15:\n                        _ctx.next = 17;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 17:\n                        accounts = _ctx.sent;\n                        console.log('Found account', accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 25;\n                        break;\n                    case 22:\n                        _ctx.prev = 22;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error connecting to metamask', _ctx.t0);\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    22\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Checks if wallet is connected to the correct network\n    var checkCorrectNetwork = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        _ctx.next = 3;\n                        return ethereum.request({\n                            method: 'eth_chainId'\n                        });\n                    case 3:\n                        chainId = _ctx.sent;\n                        console.log('Connected to chain:' + chainId);\n                        rinkebyChainId = '0x4';\n                        if (chainId !== rinkebyChainId) {\n                            connectWallet();\n                        } else {\n                            setCorrectNetwork(true);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkCorrectNetwork() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n        checkCorrectNetwork();\n    }, []);\n    // Creates transaction to mint NFT on clicking Mint Character button\n    var mintCharacter = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, nftContract;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            ethereum = window.ethereum;\n                            if (ethereum) {\n                                provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                                signer = provider.getSigner();\n                                nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.nftContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                            // let nftTx = await nftContract.createknft()\n                            // console.log('Mining....', nftTx.hash)\n                            // setMiningStatus(0)\n                            // let tx = await nftTx.wait()\n                            // setLoadingState(1)\n                            // console.log('Mined!', tx)\n                            // let event = tx.events[0]\n                            // let value = event.args[2]\n                            // let tokenId = value.toNumber()\n                            // console.log(\n                            //   `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`\n                            // )\n                            // getMintedNFT(tokenId)\n                            } else {\n                                console.log(\"Ethereum object doesn't exist!\");\n                            }\n                        } catch (error) {\n                            console.log('Error minting character', error);\n                            setTxError(error.message);\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function mintCharacter() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Gets the minted NFT data\n    var getMintedNFT = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(tokenId) {\n            var ethereum, provider, signer, nftContract, tokenUri, data, meta;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.nftContractAddress, NFT.abi, signer);\n                        _ctx.next = 8;\n                        return nftContract.tokenURI(tokenId);\n                    case 8:\n                        tokenUri = _ctx.sent;\n                        _ctx.next = 11;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                    case 11:\n                        data = _ctx.sent;\n                        meta = data.data;\n                        setMiningStatus(1);\n                        setMintedNFT(meta.image);\n                        _ctx.next = 18;\n                        break;\n                    case 17:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 18:\n                        _ctx.next = 24;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        setTxError(_ctx.t0.message);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return function getMintedNFT(tokenId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-[#f3f6f4] pt-32 text-[#6a50aa]\",\n        children: [\n            \"Hey \",\n            currentAccount\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 166,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"DIm4qb94eeZQlPcH5s6OTeFXx3U=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuZnRDb250cmFjdEFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBBQkIgZnJvbSAnLi4vdXRpbHMvQUJCLmpzb24nXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuXG5jb25zdCBtaW50ID0gKCkgPT4ge1xuICBjb25zdCBbbWludGVkTkZULCBzZXRNaW50ZWRORlRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW21pbmluZ1N0YXR1cywgc2V0TWluaW5nU3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdHhFcnJvciwgc2V0VHhFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29ycmVjdE5ldHdvcmssIHNldENvcnJlY3ROZXR3b3JrXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIENoZWNrcyBpZiB3YWxsZXQgaXMgY29ubmVjdGVkXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdHb3QgdGhlIGV0aGVyZXVtIG9iZWpjdDogJywgZXRoZXJldW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBXYWxsZXQgZm91bmQuIENvbm5lY3QgV2FsbGV0JylcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pXG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnRm91bmQgYXV0aG9yaXplZCBBY2NvdW50OiAnLCBhY2NvdW50c1swXSlcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kJylcbiAgICB9XG4gIH1cblxuICAvLyBDYWxscyBNZXRhbWFzayB0byBjb25uZWN0IHdhbGxldCBvbiBjbGlja2luZyBDb25uZWN0IFdhbGxldCBidXR0b25cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01ldGFtYXNrIG5vdCBkZXRlY3RlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2NoYWluSWQnIH0pXG4gICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGRzZGVkIHRvIGNoYWluOicgKyBjaGFpbklkKVxuXG4gICAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgICBjb25zdCByaW5rZWJ5Q2hhaW5JZCA9ICcweDYxJ1xuXG4gICAgICBpZiAoY2hhaW5JZCAhPT0gcmlua2VieUNoYWluSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxuICAgICAgICBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoYWluSWQ6ICcweDYxJyxcbiAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL2RhdGEtc2VlZC1wcmVic2MtMS1zMS5iaW5hbmNlLm9yZzo4NTQ1J10sXG4gICAgICAgICAgICAgIGNoYWluTmFtZTogJ0JpbmFuY2UgVGVzdCBOZXR3b3JrJyxcbiAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQk5CJyxcbiAgICAgICAgICAgICAgICBzeW1ib2w6ICdCTkInLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IFsnaHR0cHM6Ly90ZXN0bmV0LmJzY3NjYW4uaW8nXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhY2NvdW50JywgYWNjb3VudHNbMF0pXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGNvbm5lY3RpbmcgdG8gbWV0YW1hc2snLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBDaGVja3MgaWYgd2FsbGV0IGlzIGNvbm5lY3RlZCB0byB0aGUgY29ycmVjdCBuZXR3b3JrXG4gIGNvbnN0IGNoZWNrQ29ycmVjdE5ldHdvcmsgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG4gICAgbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2NoYWluSWQnIH0pXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBjaGFpbjonICsgY2hhaW5JZClcblxuICAgIGNvbnN0IHJpbmtlYnlDaGFpbklkID0gJzB4NCdcblxuICAgIGlmIChjaGFpbklkICE9PSByaW5rZWJ5Q2hhaW5JZCkge1xuICAgICAgY29ubmVjdFdhbGxldCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENvcnJlY3ROZXR3b3JrKHRydWUpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKVxuICAgIGNoZWNrQ29ycmVjdE5ldHdvcmsoKVxuICB9LCBbXSlcblxuICAvLyBDcmVhdGVzIHRyYW5zYWN0aW9uIHRvIG1pbnQgTkZUIG9uIGNsaWNraW5nIE1pbnQgQ2hhcmFjdGVyIGJ1dHRvblxuICBjb25zdCBtaW50Q2hhcmFjdGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcblxuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0Q29udHJhY3RBZGRyZXNzLCBBQkIsIHNpZ25lcilcblxuICAgICAgICAvLyBsZXQgbmZ0VHggPSBhd2FpdCBuZnRDb250cmFjdC5jcmVhdGVrbmZ0KClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01pbmluZy4uLi4nLCBuZnRUeC5oYXNoKVxuICAgICAgICAvLyBzZXRNaW5pbmdTdGF0dXMoMClcblxuICAgICAgICAvLyBsZXQgdHggPSBhd2FpdCBuZnRUeC53YWl0KClcbiAgICAgICAgLy8gc2V0TG9hZGluZ1N0YXRlKDEpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNaW5lZCEnLCB0eClcbiAgICAgICAgLy8gbGV0IGV2ZW50ID0gdHguZXZlbnRzWzBdXG4gICAgICAgIC8vIGxldCB2YWx1ZSA9IGV2ZW50LmFyZ3NbMl1cbiAgICAgICAgLy8gbGV0IHRva2VuSWQgPSB2YWx1ZS50b051bWJlcigpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgIC8vICAgYE1pbmVkLCBzZWUgdHJhbnNhY3Rpb246IGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vdHgvJHtuZnRUeC5oYXNofWBcbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGdldE1pbnRlZE5GVCh0b2tlbklkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFdGhlcmV1bSBvYmplY3QgZG9lc24ndCBleGlzdCFcIilcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIG1pbnRpbmcgY2hhcmFjdGVyJywgZXJyb3IpXG4gICAgICBzZXRUeEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0cyB0aGUgbWludGVkIE5GVCBkYXRhXG4gIGNvbnN0IGdldE1pbnRlZE5GVCA9IGFzeW5jICh0b2tlbklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICAgIGNvbnN0IG5mdENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBuZnRDb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgTkZULmFiaSxcbiAgICAgICAgICBzaWduZXJcbiAgICAgICAgKVxuXG4gICAgICAgIGxldCB0b2tlblVyaSA9IGF3YWl0IG5mdENvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKVxuICAgICAgICBsZXQgbWV0YSA9IGRhdGEuZGF0YVxuXG4gICAgICAgIHNldE1pbmluZ1N0YXR1cygxKVxuICAgICAgICBzZXRNaW50ZWRORlQobWV0YS5pbWFnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgc2V0VHhFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctWyNmM2Y2ZjRdIHB0LTMyIHRleHQtWyM2YTUwYWFdXCI+XG4gICAgICBIZXkge2N1cnJlbnRBY2NvdW50fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbnRcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5mdENvbnRyYWN0QWRkcmVzcyIsImV0aGVycyIsImF4aW9zIiwiQUJCIiwibWludCIsIm1pbnRlZE5GVCIsInNldE1pbnRlZE5GVCIsIm1pbmluZ1N0YXR1cyIsInNldE1pbmluZ1N0YXR1cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInR4RXJyb3IiLCJzZXRUeEVycm9yIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNvcnJlY3ROZXR3b3JrIiwic2V0Q29ycmVjdE5ldHdvcmsiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25uZWN0V2FsbGV0IiwiY2hhaW5JZCIsInJpbmtlYnlDaGFpbklkIiwicGFyYW1zIiwicnBjVXJscyIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwiYmxvY2tFeHBsb3JlclVybHMiLCJjaGVja0NvcnJlY3ROZXR3b3JrIiwibWludENoYXJhY3RlciIsInByb3ZpZGVyIiwic2lnbmVyIiwibmZ0Q29udHJhY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImVycm9yIiwibWVzc2FnZSIsImdldE1pbnRlZE5GVCIsInRva2VuSWQiLCJ0b2tlblVyaSIsImRhdGEiLCJtZXRhIiwiTkZUIiwiYWJpIiwidG9rZW5VUkkiLCJnZXQiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});