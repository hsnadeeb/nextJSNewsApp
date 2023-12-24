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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\nextJSNewsApp\\pages\\about\\[developerID].js",
    _s = $RefreshSig$();

// pages/aboutus/[id].js



function AboutDeveloper() {
  _s();

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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      developer = _useState[0],
      setDeveloper = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = router.query.id;
    console.log(router.query); // Check if id is available and a number

    var developerId = parseInt(id);
    var foundDeveloper = developerId ? details.find(function (dev) {
      return dev.id === developerId;
    }) : undefined;
    console.log(foundDeveloper); // Set the developer state after the initial render

    setDeveloper(foundDeveloper);
  }, [router.query]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: developer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: developer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: developer.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS5qcyJdLCJuYW1lcyI6WyJBYm91dERldmVsb3BlciIsImRldGFpbHMiLCJpZCIsIm5hbWUiLCJyb2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkZXZlbG9wZXIiLCJzZXREZXZlbG9wZXIiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkZXZlbG9wZXJJZCIsInBhcnNlSW50IiwiZm91bmREZXZlbG9wZXIiLCJmaW5kIiwiZGV2IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFJQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBR3hCO0FBQ0YsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLE1BQWY7QUFBdUJDLFFBQUksRUFBRTtBQUE3QixHQURjLEVBRWQ7QUFBRUYsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLFNBQWY7QUFBMEJDLFFBQUksRUFBRTtBQUFoQyxHQUZjLEVBR2Q7QUFBRUYsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLFFBQWY7QUFBeUJDLFFBQUksRUFBRTtBQUEvQixHQUhjLENBQWhCO0FBT0UsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFYd0Isa0JBWVVDLHNEQUFRLENBQUMsSUFBRCxDQVpsQjtBQUFBLE1BWWpCQyxTQVppQjtBQUFBLE1BWU5DLFlBWk07O0FBY3hCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxRQUNOUixFQURNLEdBQ0NHLE1BQU0sQ0FBQ00sS0FEUixDQUNOVCxFQURNO0FBRWRVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFNLENBQUNNLEtBQW5CLEVBRmMsQ0FJZDs7QUFDQSxRQUFNRyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2IsRUFBRCxDQUE1QjtBQUNBLFFBQU1jLGNBQWMsR0FBR0YsV0FBVyxHQUFHYixPQUFPLENBQUNnQixJQUFSLENBQWEsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ2hCLEVBQUosS0FBV1ksV0FBZjtBQUFBLEtBQWhCLENBQUgsR0FBaURLLFNBQW5GO0FBQ0FQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxjQUFaLEVBUGMsQ0FTZDs7QUFDQVAsZ0JBQVksQ0FBQ08sY0FBRCxDQUFaO0FBQ0QsR0FYUSxFQVdOLENBQUNYLE1BQU0sQ0FBQ00sS0FBUixDQVhNLENBQVQ7QUFhQSxzQkFDRTtBQUFBLGNBQ0dILFNBQVMsZ0JBQ1I7QUFBQSw4QkFDRTtBQUFBLGtCQUFLQSxTQUFTLENBQUNMO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUssU0FBUyxDQUFDSjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQURRLGdCQU1SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBdkNRSixjO1VBV1FNLHFEOzs7S0FYUk4sYztBQXlDTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS5jYmRjMzUwOGVjYjQzNzJmODFhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXR1cy9baWRdLmpzXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFib3V0RGV2ZWxvcGVyKCkge1xyXG5cclxuXHJcbiAgLy8gSGFyZGNvZGVkIGRldmVsb3BlciBkZXRhaWxzXHJcbmNvbnN0IGRldGFpbHMgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuICB7IGlkOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3BlcicgfSxcclxuICB7IGlkOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3BlcicgfSxcclxuXTtcclxuXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkZXZlbG9wZXIsIHNldERldmVsb3Blcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgaWQgaXMgYXZhaWxhYmxlIGFuZCBhIG51bWJlclxyXG4gICAgY29uc3QgZGV2ZWxvcGVySWQgPSBwYXJzZUludChpZCk7XHJcbiAgICBjb25zdCBmb3VuZERldmVsb3BlciA9IGRldmVsb3BlcklkID8gZGV0YWlscy5maW5kKGRldiA9PiBkZXYuaWQgPT09IGRldmVsb3BlcklkKSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnNvbGUubG9nKGZvdW5kRGV2ZWxvcGVyKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGRldmVsb3BlciBzdGF0ZSBhZnRlciB0aGUgaW5pdGlhbCByZW5kZXJcclxuICAgIHNldERldmVsb3Blcihmb3VuZERldmVsb3Blcik7XHJcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RldmVsb3BlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgxPntkZXZlbG9wZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgPHA+e2RldmVsb3Blci5yb2xlfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5EZXZlbG9wZXIgZG9lc24ndCBleGlzdDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0RGV2ZWxvcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9