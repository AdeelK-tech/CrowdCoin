webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");



var _jsxFileName = "C:\\Users\\muhammad adeel\\Desktop\\CrowdCoin\\pages\\campaigns\\new.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var CampaignForm = function CampaignForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      minContribution = _useState[0],
      setMinContribution = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var onInputChange = function onInputChange(e) {
    setMinContribution(e.target.value); // console.log(minContribution)
  };

  var onFormSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var accounts;
      return C_Users_muhammad_adeel_Desktop_CrowdCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.requestAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__["default"].methods.createCampaign(minContribution).send({
                from: accounts[0]
              });

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              setError(_context.t0.message);

            case 12:
              cnsole.log(minContribution);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function onFormSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Create A Campaign"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onFormSubmit,
    error: !!error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Minimum Contribution"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    style: {
      width: '500px'
    },
    label: "Wei",
    labelPosition: "right",
    value: minContribution,
    onChange: onInputChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
    error: true,
    header: "Something went wrong",
    content: error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    primary: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Create !")));
};

_s(CampaignForm, "6DZTESK63AX5PGyPcxEwgV++MSE=");

_c = CampaignForm;
/* harmony default export */ __webpack_exports__["default"] = (CampaignForm);

var _c;

$RefreshReg$(_c, "CampaignForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcyJdLCJuYW1lcyI6WyJDYW1wYWlnbkZvcm0iLCJ1c2VTdGF0ZSIsIm1pbkNvbnRyaWJ1dGlvbiIsInNldE1pbkNvbnRyaWJ1dGlvbiIsImVycm9yIiwic2V0RXJyb3IiLCJvbklucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwicmVxdWVzdEFjY291bnRzIiwiYWNjb3VudHMiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiY25zb2xlIiwibG9nIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBQyxTQUFiQSxZQUFhLEdBQUk7QUFBQTs7QUFBQSxrQkFDd0JDLHNEQUFRLENBQUMsQ0FBRCxDQURoQztBQUFBLE1BQ1pDLGVBRFk7QUFBQSxNQUNJQyxrQkFESjs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUViRyxLQUZhO0FBQUEsTUFFUEMsUUFGTzs7QUFHbkIsTUFBTUMsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3JCSixzQkFBa0IsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEIsQ0FEcUIsQ0FFckI7QUFDSCxHQUhEOztBQUlBLE1BQU1DLFlBQVk7QUFBQSwwU0FBQyxpQkFBTUgsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsZUFBQyxDQUFDSSxjQUFGO0FBRGU7QUFBQTtBQUFBLHFCQUdNQyxzREFBSSxDQUFDQyxHQUFMLENBQVNDLGVBQVQsRUFITjs7QUFBQTtBQUdUQyxzQkFIUztBQUFBO0FBQUEscUJBSVRDLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLGNBQWhCLENBQStCaEIsZUFBL0IsRUFBZ0RpQixJQUFoRCxDQUFxRDtBQUFDQyxvQkFBSSxFQUFDTCxRQUFRLENBQUMsQ0FBRDtBQUFkLGVBQXJELENBSlM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9YVixzQkFBUSxDQUFDLFlBQUlnQixPQUFMLENBQVI7O0FBUFc7QUFTZkMsb0JBQU0sQ0FBQ0MsR0FBUCxDQUFXckIsZUFBWDs7QUFUZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBLG9CQUFaUSxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVdBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxFQUVBLE1BQUMsc0RBQUQ7QUFBTSxZQUFRLEVBQUVBLFlBQWhCO0FBQThCLFNBQUssRUFBRSxDQUFDLENBQUNOLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixFQUVJLE1BQUMsdURBQUQ7QUFBTyxTQUFLLEVBQUU7QUFBQ29CLFdBQUssRUFBQztBQUFQLEtBQWQ7QUFDQSxTQUFLLEVBQUMsS0FETjtBQUVBLGlCQUFhLEVBQUMsT0FGZDtBQUdBLFNBQUssRUFBRXRCLGVBSFA7QUFJQSxZQUFRLEVBQUVJLGFBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFVSSxNQUFDLHlEQUFEO0FBQVMsU0FBSyxNQUFkO0FBQWUsVUFBTSxFQUFDLHNCQUF0QjtBQUE2QyxXQUFPLEVBQUVGLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSixDQUZBLENBREo7QUFrQkgsQ0FwQ0Q7O0dBQU1KLFk7O0tBQUFBLFk7QUFxQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9uZXcuZjEyYTAzMmFkMjg0MDBmOWY1MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCB7QnV0dG9uLCBGb3JtLElucHV0LE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5cclxuY29uc3QgQ2FtcGFpZ25Gb3JtPSgpPT57XHJcbiAgICBjb25zdCBbbWluQ29udHJpYnV0aW9uLHNldE1pbkNvbnRyaWJ1dGlvbl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdFtlcnJvcixzZXRFcnJvcl09dXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBvbklucHV0Q2hhbmdlPShlKT0+e1xyXG4gICAgICAgIHNldE1pbkNvbnRyaWJ1dGlvbihlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtaW5Db250cmlidXRpb24pXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkZvcm1TdWJtaXQ9YXN5bmMoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHM9YXdhaXQgd2ViMy5ldGgucmVxdWVzdEFjY291bnRzKClcclxuICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlQ2FtcGFpZ24obWluQ29udHJpYnV0aW9uKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNuc29sZS5sb2cobWluQ29udHJpYnV0aW9uKVxyXG4gICAgICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkNyZWF0ZSBBIENhbXBhaWduPC9oMT5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBlcnJvcj17ISFlcnJvcn0+XHJcbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17e3dpZHRoOic1MDBweCd9fSBcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdXZWknIFxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttaW5Db250cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nU29tZXRoaW5nIHdlbnQgd3JvbmcnIGNvbnRlbnQ9e2Vycm9yfT48L01lc3NhZ2U+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSA+Q3JlYXRlICE8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25Gb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==