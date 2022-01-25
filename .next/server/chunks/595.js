"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 8595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stackbit_components_dist_utils_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7845);
/* harmony import */ var _stackbit_components_dist_utils_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_utils_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stackbit_components_dist_svgs_arrow_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3098);
/* harmony import */ var _stackbit_components_dist_svgs_arrow_left__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_arrow_left__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stackbit_components_dist_svgs_arrow_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8608);
/* harmony import */ var _stackbit_components_dist_svgs_arrow_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_arrow_right__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stackbit_components_dist_svgs_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3458);
/* harmony import */ var _stackbit_components_dist_svgs_cart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_cart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6492);
/* harmony import */ var _stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9787);
/* harmony import */ var _stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7154);
/* harmony import */ var _stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2515);
/* harmony import */ var _stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(930);
/* harmony import */ var _stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const iconMap = {
  arrowLeft: (_stackbit_components_dist_svgs_arrow_left__WEBPACK_IMPORTED_MODULE_3___default()),
  arrowRight: (_stackbit_components_dist_svgs_arrow_right__WEBPACK_IMPORTED_MODULE_4___default()),
  cart: (_stackbit_components_dist_svgs_cart__WEBPACK_IMPORTED_MODULE_5___default()),
  facebook: (_stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_9___default()),
  github: (_stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_6___default()),
  instagram: (_stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_10___default()),
  linkedin: (_stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_7___default()),
  twitter: (_stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_8___default())
};
function Action(props) {
  const {
    type,
    label,
    altText,
    url,
    showIcon
  } = props;
  const icon = props.icon || 'arrowLeft';
  const iconPosition = props.iconPosition || 'right';
  const buttonPosition = props.buttonPosition || 'center';
  const IconComponent = iconMap[icon];
  const annotationPrefix = props['data-sb-field-path'] || '';
  const annotations = [`${annotationPrefix}`, `${annotationPrefix}.url#@href`, `${annotationPrefix}.altText#@aria-label`, `${annotationPrefix}.elementId#@id`, `${annotationPrefix}.label#span[1]`, `${annotationPrefix}.icon#svg[1]`];
  const defaultStyle = type === 'Link' ? 'link' : 'secondary';
  const style = props.style || defaultStyle;
  const cssClasses = props.className || null;
  const cssId = props.elementId || null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex', 'w-full', {
      'justify-center': buttonPosition === 'center',
      'justify-start': buttonPosition === 'left',
      'justify-end': buttonPosition === 'right'
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((_stackbit_components_dist_utils_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: url,
      "aria-label": altText,
      id: cssId,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('sb-component', 'sb-component-block', style === 'link' ? 'sb-component-link' : 'sb-component-button', cssClasses, {
        'sb-component-button-primary': style === 'primary',
        'sb-component-button-secondary': style === 'secondary'
      }),
      "data-sb-field-path": annotations.join(' ').trim(),
      children: [label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
        children: label
      }), showIcon && IconComponent && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(IconComponent, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('fill-current h-5 w-5', {
          'order-first': iconPosition === 'left',
          'mr-1.5': label && iconPosition === 'left',
          'ml-1.5': label && iconPosition === 'right'
        })
      })]
    })
  });
}

/***/ })

};
;