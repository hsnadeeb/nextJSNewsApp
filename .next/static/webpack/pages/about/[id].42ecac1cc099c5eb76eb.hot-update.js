webpackHotUpdate_N_E("pages/about/[id]",{

/***/ "./pages/about/[id].js":
/*!*****************************!*\
  !*** ./pages/about/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./pages/about/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\nextJSNewsApp\\pages\\about\\[id].js",
    _s = $RefreshSig$();

// pages/aboutus/[id].js


 // Import the hardcoded developer details
// const details = [
//   { id: 1, name: 'Yash', role: 'Senior Developer' },
//   { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
//   { id: 3, name: 'Suresh', role: 'Frontend Developer' },
// ];

function AboutDeveloper() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      developer = _useState[0],
      setDeveloper = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Check if router.query is not empty and id is a number
    if (router.query && router.query.id) {
      var developerId = parseInt(router.query.id);
      var foundDeveloper = _data__WEBPACK_IMPORTED_MODULE_3__["details"].find(function (dev) {
        return dev.id === developerId;
      });
      setDeveloper(foundDeveloper);
    }
  }, [router.query]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: developer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: developer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: developer.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(AboutDeveloper, "JJLKe9wX5L5VP6R/HkDyQ5HBmIE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = AboutDeveloper;
/* harmony default export */ __webpack_exports__["default"] = (AboutDeveloper);

var _c;

$RefreshReg$(_c, "AboutDeveloper");

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

/***/ }),

/***/ "./pages/about/data.js":
/*!*****************************!*\
  !*** ./pages/about/data.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvLmpzIl0sIm5hbWVzIjpbIkFib3V0RGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwiZGV2ZWxvcGVyIiwic2V0RGV2ZWxvcGVyIiwidXNlRWZmZWN0IiwiZGV2ZWxvcGVySWQiLCJwYXJzZUludCIsImZvdW5kRGV2ZWxvcGVyIiwiZGV0YWlscyIsImZpbmQiLCJkZXYiLCJuYW1lIiwicm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtDQUNrQztBQUdsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUR3QixNQUVoQkMsRUFGZ0IsR0FFVEYsTUFBTSxDQUFDRyxLQUZFLENBRWhCRCxFQUZnQjs7QUFBQSxrQkFHVUUsc0RBQVEsQ0FBQyxJQUFELENBSGxCO0FBQUEsTUFHakJDLFNBSGlCO0FBQUEsTUFHTkMsWUFITTs7QUFLeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSVAsTUFBTSxDQUFDRyxLQUFQLElBQWdCSCxNQUFNLENBQUNHLEtBQVAsQ0FBYUQsRUFBakMsRUFBcUM7QUFDbkMsVUFBTU0sV0FBVyxHQUFHQyxRQUFRLENBQUNULE1BQU0sQ0FBQ0csS0FBUCxDQUFhRCxFQUFkLENBQTVCO0FBQ0EsVUFBTVEsY0FBYyxHQUFHQyw2Q0FBTyxDQUFDQyxJQUFSLENBQWEsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ1gsRUFBSixLQUFXTSxXQUFmO0FBQUEsT0FBaEIsQ0FBdkI7QUFDQUYsa0JBQVksQ0FBQ0ksY0FBRCxDQUFaO0FBQ0Q7QUFDRixHQVBRLEVBT04sQ0FBQ1YsTUFBTSxDQUFDRyxLQUFSLENBUE0sQ0FBVDtBQVNBLHNCQUNFO0FBQUEsY0FDR0UsU0FBUyxnQkFDUjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtBLFNBQVMsQ0FBQ1M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJVCxTQUFTLENBQUNVO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBRFEsZ0JBTVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0ExQlFoQixjO1VBQ1FFLHFEOzs7S0FEUkYsYztBQTRCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQvW2lkXS40MmVjYWMxY2MwOTljNWViNzZlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXR1cy9baWRdLmpzXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRldGFpbHMgfSBmcm9tICcuL2RhdGEnOyAvLyBJbXBvcnQgdGhlIGhhcmRjb2RlZCBkZXZlbG9wZXIgZGV0YWlsc1xyXG5cclxuXHJcbi8vIGNvbnN0IGRldGFpbHMgPSBbXHJcbi8vICAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuLy8gICB7IGlkOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3BlcicgfSxcclxuLy8gICB7IGlkOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3BlcicgfSxcclxuLy8gXTtcclxuZnVuY3Rpb24gQWJvdXREZXZlbG9wZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtkZXZlbG9wZXIsIHNldERldmVsb3Blcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENoZWNrIGlmIHJvdXRlci5xdWVyeSBpcyBub3QgZW1wdHkgYW5kIGlkIGlzIGEgbnVtYmVyXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5ICYmIHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBjb25zdCBkZXZlbG9wZXJJZCA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIGNvbnN0IGZvdW5kRGV2ZWxvcGVyID0gZGV0YWlscy5maW5kKGRldiA9PiBkZXYuaWQgPT09IGRldmVsb3BlcklkKTtcclxuICAgICAgc2V0RGV2ZWxvcGVyKGZvdW5kRGV2ZWxvcGVyKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGV2ZWxvcGVyID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDE+e2RldmVsb3Blci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8cD57ZGV2ZWxvcGVyLnJvbGV9PC9wPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPkRldmVsb3BlciBkb2Vzbid0IGV4aXN0PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXREZXZlbG9wZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=