"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/post/[_id]",{

/***/ "./pages/user/post/[_id].js":
/*!**********************************!*\
  !*** ./pages/user/post/[_id].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst EditPost = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(\"router: \", router);\n    const _id = router.query._id;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (_id) fetchPost();\n    }, [\n        _id\n    ]);\n    const fetchPost = async ()=>{\n        try {\n            // const { data } = await axios.get(`/post/userpost:${_id}`);\n            const data = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/post/userpost/\".concat(_id));\n            console.log(\"axios response data: \", data);\n            setPost(data);\n            if (data.error) {\n                toast.error(data.error);\n            } else {\n                toast.success(\"Post fetched.\");\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"edit post with id: \",\n            _id,\n            \"...\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(post, null, 4)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\post\\\\[_id].js\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\post\\\\[_id].js\",\n        lineNumber: 32,\n        columnNumber: 7\n    }, undefined);\n};\n_s(EditPost, \"rICDI5Rue5pM24+SyHB48vp7d0k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL3Bvc3QvW19pZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNXO0FBQ3pCO0FBRTFCLE1BQU1LLFdBQVc7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTUssU0FBU1Isc0RBQVNBO0lBQ3hCLG1DQUFtQztJQUNuQyxNQUFNUyxNQUFNRCxPQUFPRSxLQUFLLENBQUNELEdBQUc7SUFFNUJQLGdEQUFTQSxDQUFDO1FBQ1AsSUFBSU8sS0FBS0U7SUFDWixHQUFHO1FBQUNGO0tBQUk7SUFFUixNQUFNRSxZQUFZO1FBQ2YsSUFBSTtZQUNELDZEQUE2RDtZQUM3RCxNQUFNQyxPQUFPLE1BQU1SLGlEQUFTLENBQUMsa0JBQXNCLE9BQUpLO1lBQy9DSyxRQUFRQyxHQUFHLENBQUMseUJBQXlCSDtZQUNyQ0wsUUFBUUs7WUFDUixJQUFJQSxLQUFLSSxLQUFLLEVBQUU7Z0JBQ2JDLE1BQU1ELEtBQUssQ0FBQ0osS0FBS0ksS0FBSztZQUN6QixPQUFPO2dCQUNKQyxNQUFNQyxPQUFPLENBQUM7WUFDakI7UUFDSCxFQUFFLE9BQU9GLE9BQU87WUFDYkYsUUFBUUMsR0FBRyxDQUFDQztRQUNmO0lBQ0g7SUFFQSxxQkFDRyw4REFBQ0c7O1lBQUk7WUFDa0JWO1lBQUk7MEJBQ3hCLDhEQUFDVzswQkFBS0MsS0FBS0MsU0FBUyxDQUFDaEIsTUFBTSxNQUFNOzs7Ozs7Ozs7Ozs7QUFHMUM7R0FoQ01EOztRQUVZTCxrREFBU0E7OztLQUZyQks7QUFrQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9wb3N0L1tfaWRdLmpzP2RjN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAvLyBjb25zb2xlLmxvZyhcInJvdXRlcjogXCIsIHJvdXRlcik7XHJcbiAgIGNvbnN0IF9pZCA9IHJvdXRlci5xdWVyeS5faWQ7XHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoX2lkKSBmZXRjaFBvc3QoKTtcclxuICAgfSwgW19pZF0pO1xyXG5cclxuICAgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL3Bvc3QvdXNlcnBvc3Q6JHtfaWR9YCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYC9wb3N0L3VzZXJwb3N0LyR7X2lkfWApO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImF4aW9zIHJlc3BvbnNlIGRhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgICAgc2V0UG9zdChkYXRhKTtcclxuICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQb3N0IGZldGNoZWQuXCIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgZWRpdCBwb3N0IHdpdGggaWQ6IHtfaWR9Li4uXHJcbiAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHBvc3QsIG51bGwsIDQpfTwvcHJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRQb3N0O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRWRpdFBvc3QiLCJwb3N0Iiwic2V0UG9zdCIsInJvdXRlciIsIl9pZCIsInF1ZXJ5IiwiZmV0Y2hQb3N0IiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRvYXN0Iiwic3VjY2VzcyIsImRpdiIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/post/[_id].js\n"));

/***/ })

});