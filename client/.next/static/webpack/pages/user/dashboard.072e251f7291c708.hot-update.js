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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ \"./node_modules/react-render-html/index.js\");\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar */ \"./node_modules/antd/lib/avatar/index.js\");\n\n\n\n\n\nconst PostList = (param)=>{\n    let { posts } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts && posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                size: 40,\n                                children: post.postedBy.name[0]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pt-2 ml-3\",\n                                children: post.postedBy.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pt-2 ml-10 pl-5\",\n                                style: {\n                                    marginLeft: \"2rem\"\n                                },\n                                children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt).fromNow()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 13,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(post.content)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 24,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-footer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.image && post.image.url,\n                                alt: post.postedBy.name[0]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-3\",\n                                children: \"likes/unlikes 3 likes 2 comments...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 26,\n                        columnNumber: 22\n                    }, undefined)\n                ]\n            }, post._id, true, {\n                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                lineNumber: 12,\n                columnNumber: 19\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined);\n};\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ2Y7QUFDRTtBQUU5QixNQUFNSSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ3hCLHFCQUNHLDhEQUFDQztrQkFDR0QsU0FDRUEsTUFBTUUsR0FBRyxDQUFDLENBQUNDO1lBQ1IscUJBQ0csOERBQUNGO2dCQUFtQkcsV0FBVTs7a0NBQzNCLDhEQUFDSDt3QkFBSUcsV0FBVTs7MENBQ1osOERBQUNOLHVEQUFNQTtnQ0FBQ08sTUFBTTswQ0FBS0YsS0FBS0csUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFBRTs7Ozs7OzBDQUN4Qyw4REFBQ0M7Z0NBQUtKLFdBQVU7MENBQWFELEtBQUtHLFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7OzBDQUMvQyw4REFBQ0M7Z0NBQ0VKLFdBQVU7Z0NBQ1ZLLE9BQU87b0NBQUVDLFlBQVk7Z0NBQU87MENBRTNCYiw2Q0FBTUEsQ0FBQ00sS0FBS1EsU0FBUyxFQUFFQyxPQUFPOzs7Ozs7Ozs7Ozs7a0NBSXJDLDhEQUFDWDt3QkFBSUcsV0FBVTtrQ0FBYVIsd0RBQVVBLENBQUNPLEtBQUtVLE9BQU87Ozs7OztrQ0FFbkQsOERBQUNaO3dCQUFJRyxXQUFVOzswQ0FDWiw4REFBQ1U7Z0NBQ0VDLEtBQUtaLEtBQUthLEtBQUssSUFBSWIsS0FBS2EsS0FBSyxDQUFDQyxHQUFHO2dDQUNqQ0MsS0FBS2YsS0FBS0csUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFBRTs7Ozs7OzBDQUU3Qiw4REFBQ047Z0NBQUlHLFdBQVU7MENBQU87Ozs7Ozs7Ozs7Ozs7ZUFuQmxCRCxLQUFLZ0IsR0FBRzs7Ozs7UUF5QnhCOzs7Ozs7QUFHWjtLQWxDTXBCO0FBb0NOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvUG9zdExpc3QuanM/OTIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gXCJyZWFjdC1yZW5kZXItaHRtbFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICB7cG9zdHMgJiZcclxuICAgICAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0Ll9pZH0gY2xhc3NOYW1lPVwiY2FyZCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0+e3Bvc3QucG9zdGVkQnkubmFtZVswXX08L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHQtMiBtbC0zXCI+e3Bvc3QucG9zdGVkQnkubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgbWwtMTAgcGwtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj57cmVuZGVySFRNTChwb3N0LmNvbnRlbnQpfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5pbWFnZSAmJiBwb3N0LmltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnBvc3RlZEJ5Lm5hbWVbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlcy91bmxpa2VzIDMgbGlrZXMgMiBjb21tZW50cy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVySFRNTCIsIm1vbWVudCIsIkF2YXRhciIsIlBvc3RMaXN0IiwicG9zdHMiLCJkaXYiLCJtYXAiLCJwb3N0IiwiY2xhc3NOYW1lIiwic2l6ZSIsInBvc3RlZEJ5IiwibmFtZSIsInNwYW4iLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJjcmVhdGVkQXQiLCJmcm9tTm93IiwiY29udGVudCIsImltZyIsInNyYyIsImltYWdlIiwidXJsIiwiYWx0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/PostList.js\n"));

/***/ })

});