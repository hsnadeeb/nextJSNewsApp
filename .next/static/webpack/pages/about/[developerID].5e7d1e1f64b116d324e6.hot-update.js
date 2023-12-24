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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      developer = _useState[0],
      setDeveloper = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Check if router.query is not empty and id is a number
    if (router.query && router.query.id) {
      var developerId = parseInt(router.query.id);
      var foundDeveloper = details.find(function (dev) {
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
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: developer.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS5qcyJdLCJuYW1lcyI6WyJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsIkFib3V0RGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkZXZlbG9wZXIiLCJzZXREZXZlbG9wZXIiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImRldmVsb3BlcklkIiwicGFyc2VJbnQiLCJmb3VuZERldmVsb3BlciIsImZpbmQiLCJkZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUdBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxNQUFmO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FEYyxFQUVkO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FGYyxFQUdkO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxRQUFmO0FBQXlCQyxNQUFJLEVBQUU7QUFBL0IsQ0FIYyxDQUFoQjs7QUFNQSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHdCLGtCQUVVQyxzREFBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUVqQkMsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUl4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFJTCxNQUFNLENBQUNNLEtBQVAsSUFBZ0JOLE1BQU0sQ0FBQ00sS0FBUCxDQUFhVixFQUFqQyxFQUFxQztBQUNuQyxVQUFNVyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsTUFBTSxDQUFDTSxLQUFQLENBQWFWLEVBQWQsQ0FBNUI7QUFDQSxVQUFNYSxjQUFjLEdBQUdkLE9BQU8sQ0FBQ2UsSUFBUixDQUFhLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNmLEVBQUosS0FBV1csV0FBZjtBQUFBLE9BQWhCLENBQXZCO0FBQ0FILGtCQUFZLENBQUNLLGNBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUNULE1BQU0sQ0FBQ00sS0FBUixDQVBNLENBQVQ7QUFTQSxzQkFDRTtBQUFBLGNBQ0dILFNBQVMsZ0JBQ1I7QUFBQSw4QkFDRTtBQUFBLGtCQUFLQSxTQUFTLENBQUNOO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSU0sU0FBUyxDQUFDTDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQURRLGdCQU1SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBekJRQyxjO1VBQ1FFLHFEOzs7S0FEUkYsYztBQTJCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS41ZTdkMWUxZjY0YjExNmQzMjRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXR1cy9baWRdLmpzXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBIYXJkY29kZWQgZGV2ZWxvcGVyIGRldGFpbHNcclxuY29uc3QgZGV0YWlscyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJyB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJyB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gQWJvdXREZXZlbG9wZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2RldmVsb3Blciwgc2V0RGV2ZWxvcGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgcm91dGVyLnF1ZXJ5IGlzIG5vdCBlbXB0eSBhbmQgaWQgaXMgYSBudW1iZXJcclxuICAgIGlmIChyb3V0ZXIucXVlcnkgJiYgcm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGNvbnN0IGRldmVsb3BlcklkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgY29uc3QgZm91bmREZXZlbG9wZXIgPSBkZXRhaWxzLmZpbmQoZGV2ID0+IGRldi5pZCA9PT0gZGV2ZWxvcGVySWQpO1xyXG4gICAgICBzZXREZXZlbG9wZXIoZm91bmREZXZlbG9wZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkZXZlbG9wZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMT57ZGV2ZWxvcGVyLm5hbWV9PC9oMT5cclxuICAgICAgICAgIDxwPntkZXZlbG9wZXIucm9sZX08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+RGV2ZWxvcGVyIGRvZXNuJ3QgZXhpc3Q8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dERldmVsb3BlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==