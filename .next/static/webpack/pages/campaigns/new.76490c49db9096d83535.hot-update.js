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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcyJdLCJuYW1lcyI6WyJDYW1wYWlnbkZvcm0iLCJ1c2VTdGF0ZSIsIm1pbkNvbnRyaWJ1dGlvbiIsInNldE1pbkNvbnRyaWJ1dGlvbiIsImVycm9yIiwic2V0RXJyb3IiLCJvbklucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwicmVxdWVzdEFjY291bnRzIiwiYWNjb3VudHMiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBQyxTQUFiQSxZQUFhLEdBQUk7QUFBQTs7QUFBQSxrQkFDd0JDLHNEQUFRLENBQUMsQ0FBRCxDQURoQztBQUFBLE1BQ1pDLGVBRFk7QUFBQSxNQUNJQyxrQkFESjs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUViRyxLQUZhO0FBQUEsTUFFUEMsUUFGTzs7QUFHbkIsTUFBTUMsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3JCSixzQkFBa0IsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEIsQ0FEcUIsQ0FFckI7QUFDSCxHQUhEOztBQUlBLE1BQU1DLFlBQVk7QUFBQSwwU0FBQyxpQkFBTUgsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsZUFBQyxDQUFDSSxjQUFGO0FBRGU7QUFBQTtBQUFBLHFCQUdNQyxzREFBSSxDQUFDQyxHQUFMLENBQVNDLGVBQVQsRUFITjs7QUFBQTtBQUdUQyxzQkFIUztBQUFBO0FBQUEscUJBSVRDLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLGNBQWhCLENBQStCaEIsZUFBL0IsRUFBZ0RpQixJQUFoRCxDQUFxRDtBQUFDQyxvQkFBSSxFQUFDTCxRQUFRLENBQUMsQ0FBRDtBQUFkLGVBQXJELENBSlM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9YVixzQkFBUSxDQUFDLFlBQUlnQixPQUFMLENBQVI7O0FBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQSxvQkFBWlgsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFXQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsRUFFQSxNQUFDLHNEQUFEO0FBQU0sWUFBUSxFQUFFQSxZQUFoQjtBQUE4QixTQUFLLEVBQUUsQ0FBQyxDQUFDTixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSSxNQUFDLHVEQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUNrQixXQUFLLEVBQUM7QUFBUCxLQUFkO0FBQ0EsU0FBSyxFQUFDLEtBRE47QUFFQSxpQkFBYSxFQUFDLE9BRmQ7QUFHQSxTQUFLLEVBQUVwQixlQUhQO0FBSUEsWUFBUSxFQUFFSSxhQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBVUksTUFBQyx5REFBRDtBQUFTLFNBQUssTUFBZDtBQUFlLFVBQU0sRUFBQyxzQkFBdEI7QUFBNkMsV0FBTyxFQUFFRixLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosQ0FGQSxDQURKO0FBa0JILENBcENEOztHQUFNSixZOztLQUFBQSxZO0FBcUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvbmV3Ljc2NDkwYzQ5ZGI5MDk2ZDgzNTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQge0J1dHRvbiwgRm9ybSxJbnB1dCxNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuXHJcbmNvbnN0IENhbXBhaWduRm9ybT0oKT0+e1xyXG4gICAgY29uc3QgW21pbkNvbnRyaWJ1dGlvbixzZXRNaW5Db250cmlidXRpb25dPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3RbZXJyb3Isc2V0RXJyb3JdPXVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qgb25JbnB1dENoYW5nZT0oZSk9PntcclxuICAgICAgICBzZXRNaW5Db250cmlidXRpb24oZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWluQ29udHJpYnV0aW9uKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25Gb3JtU3VibWl0PWFzeW5jKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzPWF3YWl0IHdlYjMuZXRoLnJlcXVlc3RBY2NvdW50cygpXHJcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKG1pbkNvbnRyaWJ1dGlvbikuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5DcmVhdGUgQSBDYW1wYWlnbjwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gZXJyb3I9eyEhZXJyb3J9PlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3t3aWR0aDonNTAwcHgnfX0gXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nV2VpJyBcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWluQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9J1NvbWV0aGluZyB3ZW50IHdyb25nJyBjb250ZW50PXtlcnJvcn0+PC9NZXNzYWdlPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgPkNyZWF0ZSAhPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=