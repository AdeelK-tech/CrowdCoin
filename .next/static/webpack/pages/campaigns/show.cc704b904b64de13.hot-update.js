"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_CampaignForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CampaignForm */ \"./components/CampaignForm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar campaignShow = function(param) {\n    var props = param.props;\n    var address = props.address, balance = props.balance, numRequests = props.numRequests, approversCount = props.approversCount, minContribution = props.minContribution, manager = props.manager;\n    var items = [\n        {\n            header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.fromWei(balance, \"ether\"),\n            meta: \"Balance of Campaign\",\n            description: \"This is the current balance of the Campaign i.e how much people have contributed to this project\"\n        },\n        {\n            header: numRequests,\n            meta: \"Number of requests\",\n            description: \"Requests made by the manager for transferring money to the respective recipient\"\n        },\n        {\n            header: approversCount,\n            meta: \"Number of contributors\",\n            description: \"Number of people who have already contributed to this Campaign\"\n        },\n        {\n            header: minContribution,\n            meta: \"Minimum Contribution\",\n            description: \"Minimum funds you have to provide to become a contributor to this campaign in Wei\"\n        },\n        {\n            header: manager,\n            meta: \"Manager\",\n            description: \"This is the address of the manager of this campaign\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Campaign Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                                width: 10,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                                    items: items\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                                width: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CampaignForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    address: address\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            primary: true,\n                            content: \"View Requests\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\muhammad adeel\\\\Desktop\\\\CrowdCoin\\\\pages\\\\campaigns\\\\show.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\ncampaignShow.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {\n        var campaignAddress, campaign, summary;\n        return C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    campaignAddress = props.query.address;\n                    console.log(campaignAddress);\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(campaignAddress);\n                    _ctx.next = 5;\n                    return campaign.methods.campaignSummary().call();\n                case 5:\n                    summary = _ctx.sent;\n                    console.log(summary);\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            address: props.query.address,\n                            balance: summary[0],\n                            numRequests: summary[1],\n                            approversCount: summary[2],\n                            minContribution: summary[3],\n                            manager: summary[4]\n                        }\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(props) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (campaignShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDbkJ0QixXQUFXLEVBQUVzQixPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUN2QnJCLGNBQWMsRUFBRXFCLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzFCcEIsZUFBZSxFQUFFb0IsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDM0JuQixPQUFPLEVBQUVtQixPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNwQjtxQkFDRjs7Ozs7O0tBQ0Y7b0JBaEJxQ3pCLEtBQUs7OztHQWdCMUMsQ0FBQztBQUNGLCtEQUFlRCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YjBkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgZ2V0Q2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBDYW1wYWlnbkZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FtcGFpZ25Gb3JtXCI7XHJcblxyXG5cclxuY29uc3QgY2FtcGFpZ25TaG93ID0gKHsgcHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGFkZHJlc3MsXHJcbiAgICBiYWxhbmNlLFxyXG4gICAgbnVtUmVxdWVzdHMsXHJcbiAgICBhcHByb3ZlcnNDb3VudCxcclxuICAgIG1pbkNvbnRyaWJ1dGlvbixcclxuICAgIG1hbmFnZXIsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxyXG4gICAgICBtZXRhOiBcIkJhbGFuY2Ugb2YgQ2FtcGFpZ25cIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJUaGlzIGlzIHRoZSBjdXJyZW50IGJhbGFuY2Ugb2YgdGhlIENhbXBhaWduIGkuZSBob3cgbXVjaCBwZW9wbGUgaGF2ZSBjb250cmlidXRlZCB0byB0aGlzIHByb2plY3RcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjogbnVtUmVxdWVzdHMsXHJcbiAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIHJlcXVlc3RzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiUmVxdWVzdHMgbWFkZSBieSB0aGUgbWFuYWdlciBmb3IgdHJhbnNmZXJyaW5nIG1vbmV5IHRvIHRoZSByZXNwZWN0aXZlIHJlY2lwaWVudFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgbWV0YTogXCJOdW1iZXIgb2YgY29udHJpYnV0b3JzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGNvbnRyaWJ1dGVkIHRvIHRoaXMgQ2FtcGFpZ25cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjogbWluQ29udHJpYnV0aW9uLFxyXG4gICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTWluaW11bSBmdW5kcyB5b3UgaGF2ZSB0byBwcm92aWRlIHRvIGJlY29tZSBhIGNvbnRyaWJ1dG9yIHRvIHRoaXMgY2FtcGFpZ24gaW4gV2VpXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgIG1ldGE6IFwiTWFuYWdlclwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBhZGRyZXNzIG9mIHRoZSBtYW5hZ2VyIG9mIHRoaXMgY2FtcGFpZ25cIixcclxuICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+Q2FtcGFpZ24gRGV0YWlsczwvaDE+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgPENhbXBhaWduRm9ybSBhZGRyZXNzPXthZGRyZXNzfT48L0NhbXBhaWduRm9ybT5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgY29udGVudD1cIlZpZXcgUmVxdWVzdHNcIj48L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5jYW1wYWlnblNob3cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FtcGFpZ25BZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcclxuICBjb25zb2xlLmxvZyhjYW1wYWlnbkFkZHJlc3MpO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gZ2V0Q2FtcGFpZ24oY2FtcGFpZ25BZGRyZXNzKTtcclxuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jYW1wYWlnblN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgIGJhbGFuY2U6IHN1bW1hcnlbMF0sXHJcbiAgICAgIG51bVJlcXVlc3RzOiBzdW1tYXJ5WzFdLFxyXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVsyXSxcclxuICAgICAgbWluQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzNdLFxyXG4gICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjYW1wYWlnblNob3c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkNhcmQiLCJHcmlkIiwiTGF5b3V0IiwiZ2V0Q2FtcGFpZ24iLCJ3ZWIzIiwiQ2FtcGFpZ25Gb3JtIiwiY2FtcGFpZ25TaG93IiwicHJvcHMiLCJhZGRyZXNzIiwiYmFsYW5jZSIsIm51bVJlcXVlc3RzIiwiYXBwcm92ZXJzQ291bnQiLCJtaW5Db250cmlidXRpb24iLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJ1dGlscyIsImZyb21XZWkiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImgxIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJHcm91cCIsInByaW1hcnkiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ25BZGRyZXNzIiwiY2FtcGFpZ24iLCJzdW1tYXJ5IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNhbXBhaWduU3VtbWFyeSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});