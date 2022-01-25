"use strict";
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 4640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
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
function Tabs(props) {
  const [openTab, setOpenTab] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: "flex flex-wrap justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "w-3/4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("ul", {
          className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row",
          role: "tablist",
          children: props.tabs.map((tab, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("li", {
            className: "-mb-px mr-2 last:mr-0 flex-auto text-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
              className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " + (openTab === index ? "text-white bg-indigo-600" : "text-black bg-white"),
              onClick: e => {
                e.preventDefault();
                setOpenTab(index);
              },
              "data-toggle": "tab",
              href: "#link1",
              role: "tablist",
              "data-sb-field-path": ".tab",
              children: tab
            })
          }, index))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: "px-4 py-5 flex-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
              className: "tab-content tab-space",
              children: props.item.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: openTab === index ? "block" : "hidden",
                id: "link1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
                  "data-sb-field-path": ".item",
                  children: item
                })
              }))
            })
          })
        })]
      })
    })
  });
}

/***/ })

};
;