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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ \"./node_modules/react-render-html/index.js\");\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar */ \"./node_modules/antd/lib/avatar/index.js\");\n\n\n\n\n\nconst PostList = (param)=>{\n    let { posts } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts && posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                size: 40,\n                                children: post.postedBy.name[0]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pt-2 ml-3\",\n                                style: {\n                                    marginLeft: \"1rem\"\n                                },\n                                children: post.postedBy.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pt-2 ml-10 pl-5\",\n                                style: {\n                                    marginLeft: \"1rem\"\n                                },\n                                children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt).fromNow()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 13,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(post.content)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 29,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-footer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.image && post.image.url,\n                                alt: post.postedBy.name[0]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-3\",\n                                children: \"likes/unlikes 3 likes 2 comments...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                        lineNumber: 31,\n                        columnNumber: 22\n                    }, undefined)\n                ]\n            }, post._id, true, {\n                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n                lineNumber: 12,\n                columnNumber: 19\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\components\\\\cards\\\\PostList.js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, undefined);\n};\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ2Y7QUFDRTtBQUU5QixNQUFNSSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ3hCLHFCQUNHLDhEQUFDQztrQkFDR0QsU0FDRUEsTUFBTUUsR0FBRyxDQUFDLENBQUNDO1lBQ1IscUJBQ0csOERBQUNGO2dCQUFtQkcsV0FBVTs7a0NBQzNCLDhEQUFDSDt3QkFBSUcsV0FBVTs7MENBQ1osOERBQUNOLHVEQUFNQTtnQ0FBQ08sTUFBTTswQ0FBS0YsS0FBS0csUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFBRTs7Ozs7OzBDQUN4Qyw4REFBQ0M7Z0NBQ0VKLFdBQVU7Z0NBQ1ZLLE9BQU87b0NBQUVDLFlBQVk7Z0NBQU87MENBRTNCUCxLQUFLRyxRQUFRLENBQUNDLElBQUk7Ozs7OzswQ0FFdEIsOERBQUNDO2dDQUNFSixXQUFVO2dDQUNWSyxPQUFPO29DQUFFQyxZQUFZO2dDQUFPOzBDQUUzQmIsNkNBQU1BLENBQUNNLEtBQUtRLFNBQVMsRUFBRUMsT0FBTzs7Ozs7Ozs7Ozs7O2tDQUlyQyw4REFBQ1g7d0JBQUlHLFdBQVU7a0NBQWFSLHdEQUFVQSxDQUFDTyxLQUFLVSxPQUFPOzs7Ozs7a0NBRW5ELDhEQUFDWjt3QkFBSUcsV0FBVTs7MENBQ1osOERBQUNVO2dDQUNFQyxLQUFLWixLQUFLYSxLQUFLLElBQUliLEtBQUthLEtBQUssQ0FBQ0MsR0FBRztnQ0FDakNDLEtBQUtmLEtBQUtHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7Ozs7OzswQ0FFN0IsOERBQUNOO2dDQUFJRyxXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7O2VBeEJsQkQsS0FBS2dCLEdBQUc7Ozs7O1FBOEJ4Qjs7Ozs7O0FBR1o7S0F2Q01wQjtBQXlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RMaXN0LmpzPzkyMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tIFwicmVhY3QtcmVuZGVyLWh0bWxcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7IHBvc3RzIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAge3Bvc3RzICYmXHJcbiAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5faWR9IGNsYXNzTmFtZT1cImNhcmQgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9Pntwb3N0LnBvc3RlZEJ5Lm5hbWVbMF19PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTIgbWwtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QucG9zdGVkQnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIG1sLTEwIHBsLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+e3JlbmRlckhUTUwocG9zdC5jb250ZW50KX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2UgJiYgcG9zdC5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5wb3N0ZWRCeS5uYW1lWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXMvdW5saWtlcyAzIGxpa2VzIDIgY29tbWVudHMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInJlbmRlckhUTUwiLCJtb21lbnQiLCJBdmF0YXIiLCJQb3N0TGlzdCIsInBvc3RzIiwiZGl2IiwibWFwIiwicG9zdCIsImNsYXNzTmFtZSIsInNpemUiLCJwb3N0ZWRCeSIsIm5hbWUiLCJzcGFuIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsImNvbnRlbnQiLCJpbWciLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/PostList.js\n"));

/***/ })

});