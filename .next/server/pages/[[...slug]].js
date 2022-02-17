"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[[...slug]]";
exports.ids = ["pages/[[...slug]]"];
exports.modules = {

/***/ "./src/pages/[[...slug]].js":
/*!**********************************!*\
  !*** ./src/pages/[[...slug]].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sourcebit-target-next */ \"sourcebit-target-next\");\n/* harmony import */ var sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sourcebit_target_next_with_remote_data_updates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sourcebit-target-next/with-remote-data-updates */ \"sourcebit-target-next/with-remote-data-updates\");\n/* harmony import */ var sourcebit_target_next_with_remote_data_updates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sourcebit_target_next_with_remote_data_updates__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stackbit_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackbit/components */ \"@stackbit/components\");\n/* harmony import */ var _stackbit_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/md/github-repos/mdwp-stack-v2-4e56f/src/pages/[[...slug]].js\";\n\n\n\n\n\n\nfunction Page(props) {\n  const {\n    page,\n    site\n  } = props;\n  const {\n    layout\n  } = page;\n\n  if (!layout) {\n    throw new Error(`page has no layout, page '${props.path}'`);\n  }\n\n  const PageLayout = (0,_stackbit_components__WEBPACK_IMPORTED_MODULE_3__.getComponent)(layout);\n\n  if (!PageLayout) {\n    throw new Error(`no page layout matching the layout: ${layout}`);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageLayout, {\n    page: page,\n    site: site\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 12\n  }, this);\n}\n\nasync function getStaticPaths() {\n  let data = await sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__.sourcebitDataClient.getData();\n  const paths = data.pages.map(page => page.path);\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const props = await sourcebit_target_next__WEBPACK_IMPORTED_MODULE_1__.sourcebitDataClient.getStaticPropsForPageAtPath(params.slug);\n  return {\n    props\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sourcebit_target_next_with_remote_data_updates__WEBPACK_IMPORTED_MODULE_2__.withRemoteDataUpdates)(Page));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW1suLi5zbHVnXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ksSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLFFBQU07QUFBRUMsSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLE1BQWlCRixLQUF2QjtBQUNBLFFBQU07QUFBRUcsSUFBQUE7QUFBRixNQUFhRixJQUFuQjs7QUFFQSxNQUFJLENBQUNFLE1BQUwsRUFBYTtBQUNULFVBQU0sSUFBSUMsS0FBSixDQUFXLDZCQUE0QkosS0FBSyxDQUFDSyxJQUFLLEdBQWxELENBQU47QUFDSDs7QUFDRCxRQUFNQyxVQUFVLEdBQUdSLGtFQUFZLENBQUNLLE1BQUQsQ0FBL0I7O0FBQ0EsTUFBSSxDQUFDRyxVQUFMLEVBQWlCO0FBQ2IsVUFBTSxJQUFJRixLQUFKLENBQVcsdUNBQXNDRCxNQUFPLEVBQXhELENBQU47QUFDSDs7QUFDRCxzQkFBTyw4REFBQyxVQUFEO0FBQVksUUFBSSxFQUFFRixJQUFsQjtBQUF3QixRQUFJLEVBQUVDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUVNLGVBQWVLLGNBQWYsR0FBZ0M7QUFDbkMsTUFBSUMsSUFBSSxHQUFHLE1BQU1aLDhFQUFBLEVBQWpCO0FBQ0EsUUFBTWMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsR0FBWCxDQUFnQlgsSUFBRCxJQUFVQSxJQUFJLENBQUNJLElBQTlCLENBQWQ7QUFDQSxTQUFPO0FBQUVLLElBQUFBLEtBQUY7QUFBU0csSUFBQUEsUUFBUSxFQUFFO0FBQW5CLEdBQVA7QUFDSDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUMsRUFBQUE7QUFBRixDQUE5QixFQUEwQztBQUM3QyxRQUFNZixLQUFLLEdBQUcsTUFBTUosa0dBQUEsQ0FBZ0RtQixNQUFNLENBQUNFLElBQXZELENBQXBCO0FBQ0EsU0FBTztBQUFFakIsSUFBQUE7QUFBRixHQUFQO0FBQ0g7QUFFRCxpRUFBZUgscUdBQXFCLENBQUNFLElBQUQsQ0FBcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydHVwLW5leHRqcy10aGVtZS8uL3NyYy9wYWdlcy9bWy4uLnNsdWddXS5qcz9iMzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzb3VyY2ViaXREYXRhQ2xpZW50IH0gZnJvbSAnc291cmNlYml0LXRhcmdldC1uZXh0JztcbmltcG9ydCB7IHdpdGhSZW1vdGVEYXRhVXBkYXRlcyB9IGZyb20gJ3NvdXJjZWJpdC10YXJnZXQtbmV4dC93aXRoLXJlbW90ZS1kYXRhLXVwZGF0ZXMnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQHN0YWNrYml0L2NvbXBvbmVudHMnO1xuXG5mdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gICAgY29uc3QgeyBwYWdlLCBzaXRlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGxheW91dCB9ID0gcGFnZTtcblxuICAgIGlmICghbGF5b3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcGFnZSBoYXMgbm8gbGF5b3V0LCBwYWdlICcke3Byb3BzLnBhdGh9J2ApO1xuICAgIH1cbiAgICBjb25zdCBQYWdlTGF5b3V0ID0gZ2V0Q29tcG9uZW50KGxheW91dCk7XG4gICAgaWYgKCFQYWdlTGF5b3V0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgbm8gcGFnZSBsYXlvdXQgbWF0Y2hpbmcgdGhlIGxheW91dDogJHtsYXlvdXR9YCk7XG4gICAgfVxuICAgIHJldHVybiA8UGFnZUxheW91dCBwYWdlPXtwYWdlfSBzaXRlPXtzaXRlfSAvPjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgc291cmNlYml0RGF0YUNsaWVudC5nZXREYXRhKCk7XG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLnBhZ2VzLm1hcCgocGFnZSkgPT4gcGFnZS5wYXRoKTtcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBzb3VyY2ViaXREYXRhQ2xpZW50LmdldFN0YXRpY1Byb3BzRm9yUGFnZUF0UGF0aChwYXJhbXMuc2x1Zyk7XG4gICAgcmV0dXJuIHsgcHJvcHMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlbW90ZURhdGFVcGRhdGVzKFBhZ2UpO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic291cmNlYml0RGF0YUNsaWVudCIsIndpdGhSZW1vdGVEYXRhVXBkYXRlcyIsImdldENvbXBvbmVudCIsIlBhZ2UiLCJwcm9wcyIsInBhZ2UiLCJzaXRlIiwibGF5b3V0IiwiRXJyb3IiLCJwYXRoIiwiUGFnZUxheW91dCIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsImdldERhdGEiLCJwYXRocyIsInBhZ2VzIiwibWFwIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImdldFN0YXRpY1Byb3BzRm9yUGFnZUF0UGF0aCIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[[...slug]].js\n");

/***/ }),

/***/ "@stackbit/components":
/*!***************************************!*\
  !*** external "@stackbit/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@stackbit/components");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "sourcebit-target-next":
/*!****************************************!*\
  !*** external "sourcebit-target-next" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("sourcebit-target-next");

/***/ }),

/***/ "sourcebit-target-next/with-remote-data-updates":
/*!*****************************************************************!*\
  !*** external "sourcebit-target-next/with-remote-data-updates" ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = require("sourcebit-target-next/with-remote-data-updates");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[[...slug]].js"));
module.exports = __webpack_exports__;

})();