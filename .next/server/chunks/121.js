"use strict";
exports.id = 121;
exports.ids = [121];
exports.modules = {

/***/ 3121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4696);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5258);
/* harmony import */ var _stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9817);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function CodeSection(props) {
  var _props$styles;

  const cssId = props.elementId || null;
  const colors = props.colors || 'colors-a';
  const sectionStyles = ((_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.self) || {};
  const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    id: cssId,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('sb-component', 'sb-component-section', 'sb-component-text-section', colors, 'flex', 'flex-col', 'justify-center', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__.mapStylesToClassNames)({
      borderRadius: sectionStyles.borderRadius
    }) : null, sectionStyles.borderStyle ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__.mapStylesToClassNames)({
      borderStyle: sectionStyles.borderStyle
    }) : null),
    style: {
      borderWidth: `${sectionBorderWidth}px`
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex', 'w-full', sectionStyles.justifyContent ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__.mapStylesToClassNames)({
        justifyContent: sectionStyles.justifyContent
      }) : null),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null),
        children: textBody(props)
      })
    })
  });
}

function textBody(props) {
  const styles = props.styles || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [props.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.title ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__.mapStylesToClassNames)(styles.title) : null),
      "data-sb-field-path": ".title",
      children: props.title
    }), props.subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('text-xl', 'sm:text-2xl', styles.subtitle ? (0,_stackbit_components_dist_utils_map_styles_to_class_names__WEBPACK_IMPORTED_MODULE_3__.mapStylesToClassNames)(styles.subtitle) : null, {
        'mt-2': props.title
      }),
      "data-sb-field-path": ".subtitle",
      children: props.subtitle
    }), props.text && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_highlight__WEBPACK_IMPORTED_MODULE_4___default()), {
      "data-sb-field-path": ".text",
      className: "javascript mt-12 shadow-2xl rounded",
      children: props.text
    })]
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

/***/ })

};
;