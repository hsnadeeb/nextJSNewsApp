webpackHotUpdate_N_E("pages/about/[developerID]",{

/***/ "./pages/about/[developerID].js":
/*!**************************************!*\
  !*** ./pages/about/[developerID].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\nextJSNewsApp\\pages\\about\\[developerID].js",
    _s = $RefreshSig$();

// pages/aboutus/[id].js
 // Hardcoded developer details

var details = [{
  id: 1,
  name: 'Yash',
  role: 'Senior Developer'
}, {
  id: 2,
  name: 'Vaibhav',
  role: 'Backend Developer'
}, {
  id: 3,
  name: 'Suresh',
  role: 'Frontend Developer'
}];

function AboutDeveloper() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  console.log('router.query:', router.query); // Check if id is available and a number

  var developerId = parseInt(id);
  var developer = details.find(function (dev) {
    return dev.id === developerId;
  });
  console.log('developer:', developer);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: developer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: developer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: developer.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(AboutDeveloper, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS5qcyJdLCJuYW1lcyI6WyJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsIkFib3V0RGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGV2ZWxvcGVySWQiLCJwYXJzZUludCIsImRldmVsb3BlciIsImZpbmQiLCJkZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE1BQWY7QUFBdUJDLE1BQUksRUFBRTtBQUE3QixDQURjLEVBRWQ7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFNBQWY7QUFBMEJDLE1BQUksRUFBRTtBQUFoQyxDQUZjLEVBR2Q7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE1BQUksRUFBRTtBQUEvQixDQUhjLENBQWhCOztBQU1BLFNBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUR3QixNQUVoQkwsRUFGZ0IsR0FFVEksTUFBTSxDQUFDRSxLQUZFLENBRWhCTixFQUZnQjtBQUd4Qk8sU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkosTUFBTSxDQUFDRSxLQUFwQyxFQUh3QixDQUt4Qjs7QUFDQSxNQUFNRyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1YsRUFBRCxDQUE1QjtBQUNBLE1BQU1XLFNBQVMsR0FBR1osT0FBTyxDQUFDYSxJQUFSLENBQWEsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ2IsRUFBSixLQUFXUyxXQUFmO0FBQUEsR0FBaEIsQ0FBbEI7QUFDQUYsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkcsU0FBMUI7QUFFQSxzQkFDRTtBQUFBLGNBQ0dBLFNBQVMsZ0JBQ1I7QUFBQSw4QkFDRTtBQUFBLGtCQUFLQSxTQUFTLENBQUNWO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSVUsU0FBUyxDQUFDVDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQURRLGdCQU1SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBdEJRQyxjO1VBQ1FFLHFEOzs7S0FEUkYsYztBQXdCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS5kOGRjOTE2Y2ZiMDIzYzY0OWYxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXR1cy9baWRdLmpzXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBIYXJkY29kZWQgZGV2ZWxvcGVyIGRldGFpbHNcclxuY29uc3QgZGV0YWlscyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJyB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJyB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gQWJvdXREZXZlbG9wZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnNvbGUubG9nKCdyb3V0ZXIucXVlcnk6Jywgcm91dGVyLnF1ZXJ5KTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgaWQgaXMgYXZhaWxhYmxlIGFuZCBhIG51bWJlclxyXG4gIGNvbnN0IGRldmVsb3BlcklkID0gcGFyc2VJbnQoaWQpO1xyXG4gIGNvbnN0IGRldmVsb3BlciA9IGRldGFpbHMuZmluZChkZXYgPT4gZGV2LmlkID09PSBkZXZlbG9wZXJJZCk7XHJcbiAgY29uc29sZS5sb2coJ2RldmVsb3BlcjonLCBkZXZlbG9wZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RldmVsb3BlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgxPntkZXZlbG9wZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgPHA+e2RldmVsb3Blci5yb2xlfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5EZXZlbG9wZXIgZG9lc24ndCBleGlzdDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0RGV2ZWxvcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9