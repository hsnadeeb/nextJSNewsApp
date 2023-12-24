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



var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\nextJSNewsApp\\pages\\about\\[id].js",
    _s = $RefreshSig$();

// pages/about/[id].js

 // import { details } from './data'; // Import the hardcoded developer details

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvLmpzIl0sIm5hbWVzIjpbImRldGFpbHMiLCJpZCIsIm5hbWUiLCJyb2xlIiwiQWJvdXREZXZlbG9wZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVN0YXRlIiwiZGV2ZWxvcGVyIiwic2V0RGV2ZWxvcGVyIiwidXNlRWZmZWN0IiwiZGV2ZWxvcGVySWQiLCJwYXJzZUludCIsImZvdW5kRGV2ZWxvcGVyIiwiZmluZCIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBRUE7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE1BQWY7QUFBdUJDLE1BQUksRUFBRTtBQUE3QixDQURjLEVBRWQ7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFNBQWY7QUFBMEJDLE1BQUksRUFBRTtBQUFoQyxDQUZjLEVBR2Q7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE1BQUksRUFBRTtBQUEvQixDQUhjLENBQWhCOztBQUtBLFNBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUR3QixNQUVoQkwsRUFGZ0IsR0FFVEksTUFBTSxDQUFDRSxLQUZFLENBRWhCTixFQUZnQjs7QUFBQSxrQkFHVU8sc0RBQVEsQ0FBQyxJQUFELENBSGxCO0FBQUEsTUFHakJDLFNBSGlCO0FBQUEsTUFHTkMsWUFITTs7QUFLeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSU4sTUFBTSxDQUFDRSxLQUFQLElBQWdCRixNQUFNLENBQUNFLEtBQVAsQ0FBYU4sRUFBakMsRUFBcUM7QUFDbkMsVUFBTVcsV0FBVyxHQUFHQyxRQUFRLENBQUNSLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTixFQUFkLENBQTVCO0FBQ0EsVUFBTWEsY0FBYyxHQUFHZCxPQUFPLENBQUNlLElBQVIsQ0FBYSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDZixFQUFKLEtBQVdXLFdBQWY7QUFBQSxPQUFoQixDQUF2QjtBQUNBRixrQkFBWSxDQUFDSSxjQUFELENBQVo7QUFDRDtBQUNGLEdBUFEsRUFPTixDQUFDVCxNQUFNLENBQUNFLEtBQVIsQ0FQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBQSxjQUNHRSxTQUFTLGdCQUNSO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0EsU0FBUyxDQUFDUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUlPLFNBQVMsQ0FBQ047QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQSxvQkFEUSxnQkFNUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQTFCUUMsYztVQUNRRSxxRDs7O0tBRFJGLGM7QUE0Qk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0L1tpZF0uZjE0NjJkZDRiM2QyMjgyNTViMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2Fib3V0L1tpZF0uanNcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgZGV0YWlscyB9IGZyb20gJy4vZGF0YSc7IC8vIEltcG9ydCB0aGUgaGFyZGNvZGVkIGRldmVsb3BlciBkZXRhaWxzXHJcblxyXG5cclxuY29uc3QgZGV0YWlscyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJyB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJyB9LFxyXG5dO1xyXG5mdW5jdGlvbiBBYm91dERldmVsb3BlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW2RldmVsb3Blciwgc2V0RGV2ZWxvcGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgcm91dGVyLnF1ZXJ5IGlzIG5vdCBlbXB0eSBhbmQgaWQgaXMgYSBudW1iZXJcclxuICAgIGlmIChyb3V0ZXIucXVlcnkgJiYgcm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGNvbnN0IGRldmVsb3BlcklkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgY29uc3QgZm91bmREZXZlbG9wZXIgPSBkZXRhaWxzLmZpbmQoZGV2ID0+IGRldi5pZCA9PT0gZGV2ZWxvcGVySWQpO1xyXG4gICAgICBzZXREZXZlbG9wZXIoZm91bmREZXZlbG9wZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkZXZlbG9wZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMT57ZGV2ZWxvcGVyLm5hbWV9PC9oMT5cclxuICAgICAgICAgIDxwPntkZXZlbG9wZXIucm9sZX08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+RGV2ZWxvcGVyIGRvZXNuJ3QgZXhpc3Q8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dERldmVsb3BlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==