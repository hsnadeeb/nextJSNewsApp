webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about/data.js":
false,

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\nextJSNewsApp\\pages\\about\\index.js";
// pages/aboutus/index.js
 // import { details } from './data'; // Correct import path

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

function AboutUs() {
  var _this = this;

  console.log(details);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Developers List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: details.map(function (developer) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/aboutus/".concat(developer.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: developer.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)
        }, developer.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_c = AboutUs;
/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

var _c;

$RefreshReg$(_c, "AboutUs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiZGV0YWlscyIsImlkIiwibmFtZSIsInJvbGUiLCJBYm91dFVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImRldmVsb3BlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQUVDLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxNQUFmO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FEWSxFQUVaO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FGWSxFQUdaO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxRQUFmO0FBQXlCQyxNQUFJLEVBQUU7QUFBL0IsQ0FIWSxDQUFoQjs7QUFLQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQ2ZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFaO0FBR0Ysc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFDR0EsT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQUMsU0FBUztBQUFBLDRCQUNwQjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUkscUJBQWNBLFNBQVMsQ0FBQ1AsRUFBeEIsQ0FBVjtBQUFBLG1DQUNFO0FBQUEsd0JBQUlPLFNBQVMsQ0FBQ047QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVNNLFNBQVMsQ0FBQ1AsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztLQWxCUUcsTztBQW9CTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZDM2M2JlZmNmYWEzYmIyMjY5MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2Fib3V0dXMvaW5kZXguanNcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7IGRldGFpbHMgfSBmcm9tICcuL2RhdGEnOyAvLyBDb3JyZWN0IGltcG9ydCBwYXRoXHJcblxyXG5jb25zdCBkZXRhaWxzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJyB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInIH0sXHJcbiAgXTtcclxuZnVuY3Rpb24gQWJvdXRVcygpIHtcclxuICAgIGNvbnNvbGUubG9nKGRldGFpbHMpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5EZXZlbG9wZXJzIExpc3Q8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2RldGFpbHMubWFwKGRldmVsb3BlciA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtkZXZlbG9wZXIuaWR9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2Fib3V0dXMvJHtkZXZlbG9wZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+e2RldmVsb3Blci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0VXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=