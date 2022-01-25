"use strict";
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 8342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupLink)
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
/* harmony import */ var _stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2515);
/* harmony import */ var _stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6492);
/* harmony import */ var _stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(930);
/* harmony import */ var _stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9787);
/* harmony import */ var _stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7154);
/* harmony import */ var _stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);















const iconMap = {
  arrowLeft: (_stackbit_components_dist_svgs_arrow_left__WEBPACK_IMPORTED_MODULE_3___default()),
  arrowRight: (_stackbit_components_dist_svgs_arrow_right__WEBPACK_IMPORTED_MODULE_4___default()),
  cart: (_stackbit_components_dist_svgs_cart__WEBPACK_IMPORTED_MODULE_5___default()),
  facebook: (_stackbit_components_dist_svgs_facebook__WEBPACK_IMPORTED_MODULE_6___default()),
  github: (_stackbit_components_dist_svgs_github__WEBPACK_IMPORTED_MODULE_7___default()),
  instagram: (_stackbit_components_dist_svgs_instagram__WEBPACK_IMPORTED_MODULE_8___default()),
  linkedin: (_stackbit_components_dist_svgs_linkedin__WEBPACK_IMPORTED_MODULE_9___default()),
  twitter: (_stackbit_components_dist_svgs_twitter__WEBPACK_IMPORTED_MODULE_10___default())
};
function PopupLink(props) {
  const {
    0: popup,
    1: setPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    type,
    label,
    altText,
    url,
    showIcon
  } = props;
  const icon = props.icon || 'arrowLeft';
  const iconPosition = props.iconPosition || 'right';
  const IconComponent = iconMap[icon];
  const annotationPrefix = props['data-sb-field-path'] || '';
  const annotations = [`${annotationPrefix}`, `${annotationPrefix}.url#@href`, `${annotationPrefix}.altText#@aria-label`, `${annotationPrefix}.elementId#@id`, `${annotationPrefix}.label#span[1]`, `${annotationPrefix}.icon#svg[1]`];
  const defaultStyle = type === 'Link' ? 'link' : 'secondary';
  const style = props.style || defaultStyle;
  const cssClasses = props.className || null;
  const cssId = props.elementId || null;
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("section", {
    className: "flex justify-center items-center h-60",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
      className: "bg-pink-500 h-12 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
      type: "button",
      onClick: () => setShowModal(true),
      children: props.label
    }), showModal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
        onClick: () => setShowModal(false),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: "relative w-auto my-6 mx-auto max-w-sm",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h3", {
                className: "text-3xl font-semibold",
                children: props.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
                className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                onClick: () => setShowModal(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                  children: "\xD7"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
              className: "relative p-6 flex-auto",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
                className: "my-4 text-blueGray-500 text-lg leading-relaxed",
                children: props.body
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
              className: "flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
                className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "button",
                onClick: () => setShowModal(false),
                children: props.close
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "opacity-25 fixed inset-0 z-40 bg-black"
      })]
    }) : null]
  });
}

/***/ })

};
;