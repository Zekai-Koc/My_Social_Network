"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/cards/PostList.js":
/*!**************************************!*\
  !*** ./components/cards/PostList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ \"./node_modules/react-render-html/index.js\");\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar */ \"./node_modules/antd/lib/avatar/index.js\");\n\n\n\n\n\nconst PostList = (param)=>{\n    let { posts } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts && posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    size: 40,\n                                    className: \"mb-2\",\n                                    children: post.postedBy.name[0]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 28\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"pt-2 ml-3\",\n                                    children: post.postedBy.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 28\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"pt-2 ml-10 pl-5\",\n                                    children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt).fromNow()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 28\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 13,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(post.content)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 27,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-footer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.image && post.image.url,\n                                alt: post.postedBy.name[0]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-3\",\n                                children: \"likes/unlikes 3 likes 2 comments...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 29,\n                        columnNumber: 22\n                    }, undefined)\n                ]\n            }, post._id, true, {\n                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                lineNumber: 12,\n                columnNumber: 19\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined);\n};\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ2Y7QUFDRTtBQUU5QixNQUFNSSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ3hCLHFCQUNHLDhEQUFDQztrQkFDR0QsU0FDRUEsTUFBTUUsR0FBRyxDQUFDLENBQUNDO1lBQ1IscUJBQ0csOERBQUNGO2dCQUFtQkcsV0FBVTs7a0NBQzNCLDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FDWiw0RUFBQ0g7OzhDQUNFLDhEQUFDSCx1REFBTUE7b0NBQUNPLE1BQU07b0NBQUlELFdBQVU7OENBQ3hCRCxLQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQyxFQUFFOzs7Ozs7OENBRXpCLDhEQUFDQztvQ0FBS0osV0FBVTs4Q0FDWkQsS0FBS0csUUFBUSxDQUFDQyxJQUFJOzs7Ozs7OENBRXRCLDhEQUFDQztvQ0FBS0osV0FBVTs4Q0FDWlAsNkNBQU1BLENBQUNNLEtBQUtNLFNBQVMsRUFBRUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3hDLDhEQUFDVDt3QkFBSUcsV0FBVTtrQ0FBYVIsd0RBQVVBLENBQUNPLEtBQUtRLE9BQU87Ozs7OztrQ0FFbkQsOERBQUNWO3dCQUFJRyxXQUFVOzswQ0FDWiw4REFBQ1E7Z0NBQ0VDLEtBQUtWLEtBQUtXLEtBQUssSUFBSVgsS0FBS1csS0FBSyxDQUFDQyxHQUFHO2dDQUNqQ0MsS0FBS2IsS0FBS0csUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFBRTs7Ozs7OzBDQUU3Qiw4REFBQ047Z0NBQUlHLFdBQVU7MENBQU87Ozs7Ozs7Ozs7Ozs7ZUF0QmxCRCxLQUFLYyxHQUFHOzs7OztRQTRCeEI7Ozs7OztBQUdaO0tBckNNbEI7QUF1Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9Qb3N0TGlzdC5qcz85MjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcInJlYWN0LXJlbmRlci1odG1sXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgUG9zdExpc3QgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIHtwb3N0cyAmJlxyXG4gICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuX2lkfSBjbGFzc05hbWU9XCJjYXJkIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnBvc3RlZEJ5Lm5hbWVbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdC0yIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QucG9zdGVkQnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdC0yIG1sLTEwIHBsLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+e3JlbmRlckhUTUwocG9zdC5jb250ZW50KX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2UgJiYgcG9zdC5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5wb3N0ZWRCeS5uYW1lWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXMvdW5saWtlcyAzIGxpa2VzIDIgY29tbWVudHMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInJlbmRlckhUTUwiLCJtb21lbnQiLCJBdmF0YXIiLCJQb3N0TGlzdCIsInBvc3RzIiwiZGl2IiwibWFwIiwicG9zdCIsImNsYXNzTmFtZSIsInNpemUiLCJwb3N0ZWRCeSIsIm5hbWUiLCJzcGFuIiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsImNvbnRlbnQiLCJpbWciLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/PostList.js\n"));

/***/ })

});