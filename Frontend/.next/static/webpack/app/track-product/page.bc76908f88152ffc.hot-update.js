"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/track-product/page",{

/***/ "(app-pages-browser)/./src/components/ProductStats.tsx":
/*!*****************************************!*\
  !*** ./src/components/ProductStats.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AreaChart_tremor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AreaChart!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=AreaChart!=!./node_modules/@tremor/react/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ProductStats(param) {\n    let {} = param;\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserDetails = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(\"http://192.168.238.223:3000\", \"/get-log-detail\"), {\n                    method: \"POST\",\n                    headers: {\n                        \"content-type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        batchId: 263967062395604\n                    })\n                });\n                const result = await response.json();\n                if (result.success) {\n                    setChartData(result);\n                } else {\n                    console.error(result.message);\n                }\n                console.log(\"result: \", result);\n            } catch (error) {\n                console.error(error.message);\n            }\n        };\n        fetchUserDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex justify-center text-white max-w-7xl mx-auto font-poppins\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full p-7\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold\",\n                    children: \"Temperature & Humidity\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AreaChart_tremor_react__WEBPACK_IMPORTED_MODULE_2__.AreaChart, {\n                    showAnimation: true,\n                    className: \"h-80\",\n                    data: chartData,\n                    index: \"time\",\n                    categories: [\n                        \"temperature\",\n                        \"humidity\",\n                        \"shock\"\n                    ],\n                    colors: [\n                        \"indigo\",\n                        \"rose\",\n                        \"green\"\n                    ],\n                    yAxisWidth: 20,\n                    showGridLines: true,\n                    onValueChange: (v)=>console.log(v)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Innohacks\\\\supplysync\\\\src\\\\components\\\\ProductStats.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductStats, \"Leo9Xk/Ki5G6SkYc3yZESo07mWw=\");\n_c = ProductStats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductStats);\nvar _c;\n$RefreshReg$(_c, \"ProductStats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTdGF0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNtRDtBQUNUO0FBSzFDLFNBQVNJLGFBQWEsS0FBUztRQUFULEVBQVMsR0FBVDs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFNLEVBQUU7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQixHQUFtQyxPQUFoQ0MsNkJBQStCLEVBQUMsb0JBQ25DO29CQUNFRyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDbkJDLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBR0YsTUFBTUMsU0FBUyxNQUFNWCxTQUFTWSxJQUFJO2dCQUVsQyxJQUFHRCxPQUFPRSxPQUFPLEVBQUU7b0JBQ2pCZixhQUFhYTtnQkFDZixPQUFPO29CQUNMRyxRQUFRQyxLQUFLLENBQUNKLE9BQU9LLE9BQU87Z0JBQzlCO2dCQUVBRixRQUFRRyxHQUFHLENBQUMsWUFBWU47WUFDMUIsRUFBRSxPQUFPSSxPQUFZO2dCQUNuQkQsUUFBUUMsS0FBSyxDQUFDQSxNQUFNQyxPQUFPO1lBQzdCO1FBQ0Y7UUFFQWpCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQW9COzs7Ozs7OEJBQ2xDLDhEQUFDeEIsb0ZBQVNBO29CQUNSMEIsZUFBZTtvQkFDZkYsV0FBVTtvQkFDVkcsTUFBTXpCO29CQUNOMEIsT0FBTTtvQkFDTkMsWUFBWTt3QkFBQzt3QkFBZTt3QkFBWTtxQkFBUTtvQkFDaERDLFFBQVE7d0JBQUM7d0JBQVU7d0JBQVE7cUJBQVE7b0JBQ25DQyxZQUFZO29CQUNaQyxlQUFlO29CQUNmQyxlQUFlLENBQUNDLElBQU1mLFFBQVFHLEdBQUcsQ0FBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0dBckRTakM7S0FBQUE7QUF1RFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFN0YXRzLnRzeD82MzcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcmVhQ2hhcnQgfSBmcm9tIFwiQHRyZW1vci9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VRUkRhdGFTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3FyRGF0YVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFN0YXRzKHt9OiBQcm9wcykge1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyRGV0YWlscyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFVVJMfS9nZXQtbG9nLWRldGFpbGAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIGJhdGNoSWQ6IDI2Mzk2NzA2MjM5NTYwNFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICBpZihyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0Q2hhcnREYXRhKHJlc3VsdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQubWVzc2FnZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OiBcIiwgcmVzdWx0KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hVc2VyRGV0YWlscygpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBtYXgtdy03eGwgbXgtYXV0byBmb250LXBvcHBpbnNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC03XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+VGVtcGVyYXR1cmUgJiBIdW1pZGl0eTwvaDE+XHJcbiAgICAgICAgPEFyZWFDaGFydFxyXG4gICAgICAgICAgc2hvd0FuaW1hdGlvbj17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtODBcIlxyXG4gICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxyXG4gICAgICAgICAgaW5kZXg9XCJ0aW1lXCJcclxuICAgICAgICAgIGNhdGVnb3JpZXM9e1tcInRlbXBlcmF0dXJlXCIsIFwiaHVtaWRpdHlcIiwgXCJzaG9ja1wiXX1cclxuICAgICAgICAgIGNvbG9ycz17W1wiaW5kaWdvXCIsIFwicm9zZVwiLCBcImdyZWVuXCJdfVxyXG4gICAgICAgICAgeUF4aXNXaWR0aD17MjB9XHJcbiAgICAgICAgICBzaG93R3JpZExpbmVzPXt0cnVlfVxyXG4gICAgICAgICAgb25WYWx1ZUNoYW5nZT17KHYpID0+IGNvbnNvbGUubG9nKHYpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFN0YXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFyZWFDaGFydCIsIlByb2R1Y3RTdGF0cyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImZldGNoVXNlckRldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBU0VVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYXRjaElkIiwicmVzdWx0IiwianNvbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzaG93QW5pbWF0aW9uIiwiZGF0YSIsImluZGV4IiwiY2F0ZWdvcmllcyIsImNvbG9ycyIsInlBeGlzV2lkdGgiLCJzaG93R3JpZExpbmVzIiwib25WYWx1ZUNoYW5nZSIsInYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductStats.tsx\n"));

/***/ })

});