"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accordions)
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
function Accordions(props) {
  const [openTab, setOpenTab] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: "flex flex-wrap justify-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "lg:w-1/2 w-3/4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("ul", {
          className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col",
          role: "tablist",
          children: props.accordions.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", {
            className: "-mb-px flex-auto transition-all",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
              className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-t-sm  block leading-normal " + (openTab === index ? "text-white bg-gray-400" : "text-black bg-white"),
              onClick: e => {
                e.preventDefault();
                setOpenTab(index);
              },
              "data-toggle": "tab",
              href: "#link1",
              role: "tablist",
              "data-sb-field-path": ".tab",
              children: [openTab === index ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "inline-block mr-3 h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
                    "clip-rule": "evenodd"
                  })
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "inline-block mr-3 h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
                    "clip-rule": "evenodd"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                children: tab
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
              className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-3 shadow-lg rounded-b-sm",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: "px-4 py-1 pt-1 flex-auto",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "tab-content tab-space",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("transition-all", openTab === index ? "block" : "hidden"),
                    id: "link1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
                      className: "h-auto",
                      children: props.items[index]
                    }, index)
                  })
                })
              })
            })]
          }, index))
        })
      })
    })
  });
}

/***/ })

};
;