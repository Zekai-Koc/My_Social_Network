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

/***/ "./pages/user/dashboard.js":
/*!*********************************!*\
  !*** ./pages/user/dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n/* harmony import */ var _components_forms_PostForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms/PostForm.js */ \"./components/forms/PostForm.js\");\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router.js */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _components_cards_PostList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cards/PostList.js */ \"./components/cards/PostList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router_js__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (state && state.token) fetchUserPosts();\n    }, [\n        state && state.token\n    ]);\n    const fetchUserPosts = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/post/userposts\");\n            // console.log(\"axios response data: \", data);\n            setPosts(data);\n            if (data.error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(data.error);\n            }\n        //  else {\n        //    toast.success(\"Post created.\");\n        //    setContent(\"\");\n        //    setImage({});\n        // }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const postSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"post: \", content);\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/post/createpost\", {\n                content,\n                image\n            });\n            // console.log(\"axios response data: \", data);\n            if (data.error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(data.error);\n            } else {\n                fetchUserPosts();\n                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Post created.\");\n                setContent(\"\");\n                setImage({});\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleImage = async (e)=>{\n        const file = e.target.files[0];\n        let formData = new FormData();\n        formData.append(\"image\", file);\n        // console.log([...formData]);\n        setUploading(true);\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/post/uploadimage\", formData);\n            // console.log(\"Uploaded Image: \", data);\n            setImage({\n                url: data.url,\n                public_id: data.public_id\n            });\n            setUploading(false);\n        } catch (error) {\n            console.log(error);\n            setUploading(false);\n        }\n    };\n    const handleDelete = async (post)=>{\n        console.log(\"handle delete\");\n        try {\n            const answer = window.confirm(\"Are you sure?\");\n            console.log(post);\n            if (!answer) return;\n            const data = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"][\"delete\"](\"/deletepost/:\".concat(post._id));\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Post deleted.\");\n            fetchUserPosts();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row py-5 bg-secondary text-light bg-default-image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"News Feed\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 105,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                        lineNumber: 104,\n                        columnNumber: 16\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 103,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row py-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_PostForm_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    content: content,\n                                    setContent: setContent,\n                                    postSubmit: postSubmit,\n                                    handleImage: handleImage,\n                                    uploading: uploading,\n                                    image: image\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_PostList_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    posts: posts,\n                                    handleDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 110,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-4\",\n                            children: \"Sidebar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 125,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n            lineNumber: 102,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zek\\\\Desktop\\\\MyProjects\\\\MySocialNetwork\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 101,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Dashboard, \"rn6xaf/Rqf7b+wA0XnaTfuFcJ4M=\", false, function() {\n    return [\n        next_router_js__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLE9BQU9HLE9BQU87WUFDYkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNmO0lBQ0g7SUFFQSxxQkFDRyw4REFBQ3RCLG9FQUFTQTtrQkFDUCw0RUFBQzZDO1lBQUlDLFdBQVU7OzhCQUNaLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1osNEVBQUNDO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlWLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ1osOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWiw4REFBQzdDLHFFQUFRQTtvQ0FDTlEsU0FBU0E7b0NBQ1RDLFlBQVlBO29DQUNaZSxZQUFZQTtvQ0FDWkssYUFBYUE7b0NBQ2JqQixXQUFXQTtvQ0FDWEYsT0FBT0E7Ozs7Ozs4Q0FFViw4REFBQ3FDOzs7Ozs4Q0FDRCw4REFBQzNDLHFFQUFRQTtvQ0FBQ1UsT0FBT0E7b0NBQU93QixjQUFjQTs7Ozs7Ozs7Ozs7O3NDQUt6Qyw4REFBQ007NEJBQUlDLFdBQVU7c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDO0dBeEhNeEM7O1FBT1lKLHFEQUFTQTs7O0tBUHJCSTtBQTBITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcz8zOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlclJvdXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGVcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1Bvc3RGb3JtLmpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlci5qc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9Qb3N0TGlzdC5qc1wiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4pIGZldGNoVXNlclBvc3RzKCk7XHJcbiAgIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICAgY29uc3QgZmV0Y2hVc2VyUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvcG9zdC91c2VycG9zdHNgKTtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJheGlvcyByZXNwb25zZSBkYXRhOiBcIiwgZGF0YSk7XHJcbiAgICAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyAgZWxzZSB7XHJcbiAgICAgICAgIC8vICAgIHRvYXN0LnN1Y2Nlc3MoXCJQb3N0IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAvLyAgICBzZXRDb250ZW50KFwiXCIpO1xyXG4gICAgICAgICAvLyAgICBzZXRJbWFnZSh7fSk7XHJcbiAgICAgICAgIC8vIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBjb25zdCBwb3N0U3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBvc3Q6IFwiLCBjb250ZW50KTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgL3Bvc3QvY3JlYXRlcG9zdGAsIHtcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF4aW9zIHJlc3BvbnNlIGRhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZldGNoVXNlclBvc3RzKCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQb3N0IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgICBzZXRDb250ZW50KFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRJbWFnZSh7fSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBjb25zdCBoYW5kbGVJbWFnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhbLi4uZm9ybURhdGFdKTtcclxuICAgICAgc2V0VXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcG9zdC91cGxvYWRpbWFnZVwiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVXBsb2FkZWQgSW1hZ2U6IFwiLCBkYXRhKTtcclxuXHJcbiAgICAgICAgIHNldEltYWdlKHtcclxuICAgICAgICAgICAgdXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgcHVibGljX2lkOiBkYXRhLnB1YmxpY19pZCxcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHBvc3QpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJoYW5kbGUgZGVsZXRlXCIpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgY29uc3QgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhwb3N0KTtcclxuICAgICAgICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcclxuICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2RlbGV0ZXBvc3QvOiR7cG9zdC5faWR9YCk7XHJcbiAgICAgICAgIHRvYXN0LmVycm9yKFwiUG9zdCBkZWxldGVkLlwiKTtcclxuICAgICAgICAgZmV0Y2hVc2VyUG9zdHMoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8VXNlclJvdXRlPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01IGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IGJnLWRlZmF1bHQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPk5ld3MgRmVlZDwvaDE+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UG9zdEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudD17c2V0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgcG9zdFN1Ym1pdD17cG9zdFN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW1hZ2U9e2hhbmRsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICB1cGxvYWRpbmc9e3VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPFBvc3RMaXN0IHBvc3RzPXtwb3N0c30gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHBvc3RzLCBudWxsLCA0KX08L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+U2lkZWJhcjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlclJvdXRlPlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyUm91dGUiLCJQb3N0Rm9ybSIsInVzZVJvdXRlciIsImF4aW9zIiwidG9hc3QiLCJQb3N0TGlzdCIsIkRhc2hib2FyZCIsInN0YXRlIiwic2V0U3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImltYWdlIiwic2V0SW1hZ2UiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwicm91dGVyIiwidG9rZW4iLCJmZXRjaFVzZXJQb3N0cyIsImRhdGEiLCJnZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0U3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInN1Y2Nlc3MiLCJoYW5kbGVJbWFnZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1cmwiLCJwdWJsaWNfaWQiLCJoYW5kbGVEZWxldGUiLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n"));

/***/ })

});