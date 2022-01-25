"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4696);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stackbit_components_dist_components_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5230);
/* harmony import */ var _stackbit_components_dist_components_registry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_components_registry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5258);
/* harmony import */ var _stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function Section(props) {
  const cssId = props.cssId || 0;
  const colors = props.colors || 'color-a';
  const sectionStyles = props.sectionStyles || '';
  const sectionBorderWidth = sectionStyles.borderWidth || 0;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    id: cssId,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('sb-component', 'sb-component-section', 'sb-component-cta-section', colors, 'flex', 'flex-col', 'justify-center', 'relative', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4__.mapStylesToClassNames)({
      borderRadius: sectionStyles.borderRadius
    }) : null, sectionStyles.borderStyle ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4__.mapStylesToClassNames)({
      borderStyle: sectionStyles.borderStyle
    }) : null),
    style: {
      borderWidth: `${sectionBorderWidth}px`
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex', 'relative', 'w-full', sectionStyles.justifyContent ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4__.mapStylesToClassNames)({
        justifyContent: sectionStyles.justifyContent
      }) : null),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex', '-mx-4', sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null, sectionStyles.alignItems ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_4__.mapStylesToClassNames)({
            alignItems: sectionStyles.alignItems
          }) : null),
          children: "Hallo"
        }), props.component]
      })
    })
  });
}

function mapMinHeightStyles(height) {
  switch (height) {
    case 'auto':
      return 'min-h-0';

    case 'screen':
      return 'min-h-screen';
  }

  return null;
}

function mapMaxWidthStyles(width) {
  switch (width) {
    case 'narrow':
      return 'max-w-screen-md';

    case 'wide':
      return 'max-w-screen-xl';

    case 'full':
      return 'max-w-full';
  }

  return null;
}

function mapFlexDirectionStyles(flexDirection) {
  switch (flexDirection) {
    case 'row':
      return ['flex-col', 'lg:flex-row', 'lg:justify-between'];

    case 'col':
      return ['flex-col'];
  }

  return null;
}

/***/ })

};
;