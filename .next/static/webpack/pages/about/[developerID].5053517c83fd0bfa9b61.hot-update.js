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
  console.log(router.query); // Find the developer details based on the id

  var developer = details.find(function (dev) {
    return dev.id === parseInt(id);
  });
  console.log(developer);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: developer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: developer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: developer.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvW2RldmVsb3BlcklEXS5qcyJdLCJuYW1lcyI6WyJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsIkFib3V0RGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGV2ZWxvcGVyIiwiZmluZCIsImRldiIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxNQUFmO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FEYyxFQUVkO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FGYyxFQUdkO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxRQUFmO0FBQXlCQyxNQUFJLEVBQUU7QUFBL0IsQ0FIYyxDQUFoQjs7QUFNQSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEd0IsTUFFaEJMLEVBRmdCLEdBRVRJLE1BQU0sQ0FBQ0UsS0FGRSxDQUVoQk4sRUFGZ0I7QUFHeEJPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNFLEtBQW5CLEVBSHdCLENBSXhCOztBQUNBLE1BQU1HLFNBQVMsR0FBR1YsT0FBTyxDQUFDVyxJQUFSLENBQWEsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ1gsRUFBSixLQUFXWSxRQUFRLENBQUNaLEVBQUQsQ0FBdkI7QUFBQSxHQUFoQixDQUFsQjtBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBWjtBQUVBLHNCQUNFO0FBQUEsY0FDR0EsU0FBUyxnQkFDUjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtBLFNBQVMsQ0FBQ1I7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJUSxTQUFTLENBQUNQO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBRFEsZ0JBTVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FwQlFDLGM7VUFDUUUscUQ7OztLQURSRixjO0FBc0JNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC9bZGV2ZWxvcGVySURdLjUwNTM1MTdjODNmZDBiZmE5YjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hYm91dHVzL1tpZF0uanNcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIEhhcmRjb2RlZCBkZXZlbG9wZXIgZGV0YWlsc1xyXG5jb25zdCBkZXRhaWxzID0gW1xyXG4gIHsgaWQ6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInIH0sXHJcbiAgeyBpZDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBBYm91dERldmVsb3BlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcclxuICAvLyBGaW5kIHRoZSBkZXZlbG9wZXIgZGV0YWlscyBiYXNlZCBvbiB0aGUgaWRcclxuICBjb25zdCBkZXZlbG9wZXIgPSBkZXRhaWxzLmZpbmQoZGV2ID0+IGRldi5pZCA9PT0gcGFyc2VJbnQoaWQpKTtcclxuICBjb25zb2xlLmxvZyhkZXZlbG9wZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RldmVsb3BlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgxPntkZXZlbG9wZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgPHA+e2RldmVsb3Blci5yb2xlfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5EZXZlbG9wZXIgZG9lc24ndCBleGlzdDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0RGV2ZWxvcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9