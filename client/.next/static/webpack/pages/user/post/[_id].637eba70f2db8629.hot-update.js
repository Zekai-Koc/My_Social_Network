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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst EditPost = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(\"router: \", router);\n    const _id = router.query._id;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUserPost();\n    }, []);\n    const fetchUserPost = async ()=>{\n        try {\n            const { data } = await axios.get(\"/post/userpost:\".concat(_id));\n            console.log(\"axios response data: \", data);\n            setPosts(data);\n            if (data.error) {\n                toast.error(data.error);\n            } else {\n                toast.success(\"Post created.\");\n                setContent(\"\");\n                setImage({});\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"edit post with id: \",\n            _id,\n            \"...\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\post\\\\[_id].js\",\n        lineNumber: 30,\n        columnNumber: 11\n    }, undefined);\n};\n_s(EditPost, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL3Bvc3QvW19pZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ0M7QUFFekMsTUFBTUcsV0FBVzs7SUFDZCxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsbUNBQW1DO0lBQ25DLE1BQU1LLE1BQU1ELE9BQU9FLEtBQUssQ0FBQ0QsR0FBRztJQUU1QkgsZ0RBQVNBLENBQUM7UUFDUEs7SUFDSCxHQUFHLEVBQUU7SUFFTCxNQUFNQSxnQkFBZ0I7UUFDbkIsSUFBSTtZQUNELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUMsTUFBTUMsR0FBRyxDQUFDLGtCQUFzQixPQUFKTDtZQUNuRE0sUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qko7WUFDckNLLFNBQVNMO1lBQ1QsSUFBSUEsS0FBS00sS0FBSyxFQUFFO2dCQUNiQyxNQUFNRCxLQUFLLENBQUNOLEtBQUtNLEtBQUs7WUFDekIsT0FBTztnQkFDSkMsTUFBTUMsT0FBTyxDQUFDO2dCQUNkQyxXQUFXO2dCQUNYQyxTQUFTLENBQUM7WUFDYjtRQUNILEVBQUUsT0FBT0osT0FBTztZQUNiSCxRQUFRQyxHQUFHLENBQUNFO1FBQ2Y7SUFDSDtJQUVBLHFCQUFPLDhEQUFDSzs7WUFBSTtZQUFvQmQ7WUFBSTs7Ozs7OztBQUN2QztHQTNCTUY7O1FBQ1lILGtEQUFTQTs7O0tBRHJCRztBQTZCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL3Bvc3QvW19pZF0uanM/ZGM3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRWRpdFBvc3QgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAvLyBjb25zb2xlLmxvZyhcInJvdXRlcjogXCIsIHJvdXRlcik7XHJcbiAgIGNvbnN0IF9pZCA9IHJvdXRlci5xdWVyeS5faWQ7XHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaFVzZXJQb3N0KCk7XHJcbiAgIH0sIFtdKTtcclxuXHJcbiAgIGNvbnN0IGZldGNoVXNlclBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvcG9zdC91c2VycG9zdDoke19pZH1gKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJheGlvcyByZXNwb25zZSBkYXRhOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBvc3QgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoXCJcIik7XHJcbiAgICAgICAgICAgIHNldEltYWdlKHt9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHJldHVybiA8ZGl2PmVkaXQgcG9zdCB3aXRoIGlkOiB7X2lkfS4uLjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRQb3N0O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJFZGl0UG9zdCIsInJvdXRlciIsIl9pZCIsInF1ZXJ5IiwiZmV0Y2hVc2VyUG9zdCIsImRhdGEiLCJheGlvcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRQb3N0cyIsImVycm9yIiwidG9hc3QiLCJzdWNjZXNzIiwic2V0Q29udGVudCIsInNldEltYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/post/[_id].js\n"));

/***/ })

});