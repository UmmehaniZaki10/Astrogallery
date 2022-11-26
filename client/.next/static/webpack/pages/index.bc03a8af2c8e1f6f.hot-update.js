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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ABB.json */ \"./utils/ABB.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar mint = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mintedNFT = ref[0], setMintedNFT = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), miningStatus = ref1[0], setMiningStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), loadingState = ref2[0], setLoadingState = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), txError = ref3[0], setTxError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), currentAccount = ref4[0], setCurrentAccount = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), correctNetwork = ref5[0], setCorrectNetwork = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getStats();\n        checkIfWalletIsConnected();\n        checkCorrectNetwork();\n    }, []);\n    // Creates transaction to mint NFT on clicking Mint Character button\n    var getStats = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, signer, ABBContract, allowance;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        ABBContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, _utils_ABB_json__WEBPACK_IMPORTED_MODULE_5__, signer);\n                        console.log(ABBContract);\n                        _ctx.next = 9;\n                        return ABBContract.allowance('0x35608552c5B285E0f059f0a34F686c90C90F9315', _config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress);\n                    case 9:\n                        allowance = _ctx.sent;\n                        console.log('Mining....', ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(allowance));\n                        _ctx.next = 14;\n                        break;\n                    case 13:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 14:\n                        _ctx.next = 20;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log('Error minting character', _ctx.t0);\n                        setTxError(_ctx.t0.message);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    16\n                ]\n            ]);\n        }));\n        return function getStats() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Gets the minted NFT data\n    var getMintedNFT = function() {\n        var _ref = _asyncToGenerator(_home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(tokenId) {\n            var ethereum, provider, signer, nftContract, tokenUri, data, meta;\n            return _home_lenovo_Desktop_minting_nft_dapp_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        nftContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_3__.ABBContractAddress, NFT.abi, signer);\n                        _ctx.next = 8;\n                        return nftContract.tokenURI(tokenId);\n                    case 8:\n                        tokenUri = _ctx.sent;\n                        _ctx.next = 11;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                    case 11:\n                        data = _ctx.sent;\n                        meta = data.data;\n                        setMiningStatus(1);\n                        setMintedNFT(meta.image);\n                        _ctx.next = 18;\n                        break;\n                    case 17:\n                        {\n                            console.log(\"Ethereum object doesn't exist!\");\n                        }\n                    case 18:\n                        _ctx.next = 24;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        setTxError(_ctx.t0.message);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return function getMintedNFT(tokenId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-[#f3f6f4] pt-32 text-[#6a50aa]\",\n        children: [\n            \"Hey \",\n            currentAccount\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/minting-nft-dapp/client/pages/index.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, _this));\n};\n_s(mint, \"DIm4qb94eeZQlPcH5s6OTeFXx3U=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (mint);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxDQUNyQ0QsMERBQWtCLEVBQ2xCeUMsR0FBRyxDQUFDQyxHQUFHLEVBQ1BwQixNQUFNOzsrQkFHYWUsV0FBVyxDQUFDTSxRQUFRLENBQUNQLE9BQU87O3dCQUE3Q0UsUUFBUTs7K0JBQ0twQyxnREFBUyxDQUFDb0MsUUFBUTs7d0JBQS9CQyxJQUFJO3dCQUNKQyxJQUFJLEdBQUdELElBQUksQ0FBQ0EsSUFBSTt3QkFFcEIvQixlQUFlLENBQUMsQ0FBQzt3QkFDakJGLFlBQVksQ0FBQ2tDLElBQUksQ0FBQ0ssS0FBSzs7Ozt3QkFDbEIsQ0FBQzs0QkFDTmYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0M7d0JBQzlDLENBQUM7Ozs7Ozs7d0JBRURELE9BQU8sQ0FBQ0MsR0FBRzt3QkFDWG5CLFVBQVUsU0FBT3NCLE9BQU87Ozs7Ozs7Ozs7O1FBRTVCLENBQUM7d0JBMUJLQyxZQUFZLENBQVVDLE9BQU87Ozs7SUE0Qm5DLE1BQU0sNkVBQ0hVLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTJFOztZQUFDLENBQ3JGO1lBQUNsQyxjQUFjOzs7Ozs7O0FBR3pCLENBQUM7R0F4RktULElBQUk7QUEwRlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQUJCQ29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgQUJCIGZyb20gJy4uL3V0aWxzL0FCQi5qc29uJ1xuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcblxuY29uc3QgbWludCA9ICgpID0+IHtcbiAgY29uc3QgW21pbnRlZE5GVCwgc2V0TWludGVkTkZUXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFttaW5pbmdTdGF0dXMsIHNldE1pbmluZ1N0YXR1c10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3R4RXJyb3IsIHNldFR4RXJyb3JdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvcnJlY3ROZXR3b3JrLCBzZXRDb3JyZWN0TmV0d29ya10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFN0YXRzKClcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKVxuICAgIGNoZWNrQ29ycmVjdE5ldHdvcmsoKVxuICB9LCBbXSlcblxuICAvLyBDcmVhdGVzIHRyYW5zYWN0aW9uIHRvIG1pbnQgTkZUIG9uIGNsaWNraW5nIE1pbnQgQ2hhcmFjdGVyIGJ1dHRvblxuICBjb25zdCBnZXRTdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG5cbiAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSlcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgICAgY29uc3QgQUJCQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KEFCQkNvbnRyYWN0QWRkcmVzcywgQUJCLCBzaWduZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKEFCQkNvbnRyYWN0KVxuICAgICAgICBsZXQgYWxsb3dhbmNlID0gYXdhaXQgQUJCQ29udHJhY3QuYWxsb3dhbmNlKFxuICAgICAgICAgICcweDM1NjA4NTUyYzVCMjg1RTBmMDU5ZjBhMzRGNjg2YzkwQzkwRjkzMTUnLFxuICAgICAgICAgIEFCQkNvbnRyYWN0QWRkcmVzc1xuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUubG9nKCdNaW5pbmcuLi4uJywgZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGFsbG93YW5jZSkpXG5cbiAgICAgICAgLy8gQUJCQ29udHJhY3QuYXBwcm92ZShBQkJDb250cmFjdEFkZHJlc3MsICc1MDAwMDAwMDAwMDAwMDAwMDAwJylcbiAgICAgICAgLy8gc2V0TWluaW5nU3RhdHVzKDApXG5cbiAgICAgICAgLy8gbGV0IHR4ID0gYXdhaXQgbmZ0VHgud2FpdCgpXG4gICAgICAgIC8vIHNldExvYWRpbmdTdGF0ZSgxKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWluZWQhJywgdHgpXG4gICAgICAgIC8vIGxldCBldmVudCA9IHR4LmV2ZW50c1swXVxuICAgICAgICAvLyBsZXQgdmFsdWUgPSBldmVudC5hcmdzWzJdXG4gICAgICAgIC8vIGxldCB0b2tlbklkID0gdmFsdWUudG9OdW1iZXIoKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgIGBNaW5lZCwgc2VlIHRyYW5zYWN0aW9uOiBodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL3R4LyR7bmZ0VHguaGFzaH1gXG4gICAgICAgIC8vIClcblxuICAgICAgICAvLyBnZXRNaW50ZWRORlQodG9rZW5JZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBtaW50aW5nIGNoYXJhY3RlcicsIGVycm9yKVxuICAgICAgc2V0VHhFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHMgdGhlIG1pbnRlZCBORlQgZGF0YVxuICBjb25zdCBnZXRNaW50ZWRORlQgPSBhc3luYyAodG9rZW5JZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcblxuICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICBjb25zdCBuZnRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgQUJCQ29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIE5GVC5hYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgIClcblxuICAgICAgICBsZXQgdG9rZW5VcmkgPSBhd2FpdCBuZnRDb250cmFjdC50b2tlblVSSSh0b2tlbklkKVxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSlcbiAgICAgICAgbGV0IG1ldGEgPSBkYXRhLmRhdGFcblxuICAgICAgICBzZXRNaW5pbmdTdGF0dXMoMSlcbiAgICAgICAgc2V0TWludGVkTkZUKG1ldGEuaW1hZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBkb2Vzbid0IGV4aXN0IVwiKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHNldFR4RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLVsjZjNmNmY0XSBwdC0zMiB0ZXh0LVsjNmE1MGFhXVwiPlxuICAgICAgSGV5IHtjdXJyZW50QWNjb3VudH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtaW50XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBQkJDb250cmFjdEFkZHJlc3MiLCJldGhlcnMiLCJheGlvcyIsIkFCQiIsIm1pbnQiLCJtaW50ZWRORlQiLCJzZXRNaW50ZWRORlQiLCJtaW5pbmdTdGF0dXMiLCJzZXRNaW5pbmdTdGF0dXMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJ0eEVycm9yIiwic2V0VHhFcnJvciIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjb3JyZWN0TmV0d29yayIsInNldENvcnJlY3ROZXR3b3JrIiwiZ2V0U3RhdHMiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJjaGVja0NvcnJlY3ROZXR3b3JrIiwiZXRoZXJldW0iLCJwcm92aWRlciIsInNpZ25lciIsIkFCQkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwid2luZG93IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsIm1lc3NhZ2UiLCJnZXRNaW50ZWRORlQiLCJ0b2tlbklkIiwibmZ0Q29udHJhY3QiLCJ0b2tlblVyaSIsImRhdGEiLCJtZXRhIiwiTkZUIiwiYWJpIiwidG9rZW5VUkkiLCJnZXQiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});