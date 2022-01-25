"use strict";
(() => {
var exports = {};
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 5124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ printful)
/* harmony export */ });
/* harmony import */ var printful_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2029);
/* harmony import */ var printful_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(printful_request__WEBPACK_IMPORTED_MODULE_0__);

const printful = new printful_request__WEBPACK_IMPORTED_MODULE_0__.PrintfulClient(process.env.PRINTFUL_API_KEY);

/***/ }),

/***/ 7317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_printful_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5124);

async function handler(req, res) {
  const {
    id
  } = req.query;

  try {
    const {
      result
    } = await _lib_printful_client__WEBPACK_IMPORTED_MODULE_0__/* .printful.get */ .i.get(`store/variants/@${id}`);
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json({
      id: id,
      price: result.retail_price,
      url: `/api/products/${id}`
    });
  } catch ({
    error
  }) {
    console.log(error);
    res.status(404).json({
      errors: [{
        key: error === null || error === void 0 ? void 0 : error.message,
        message: error === null || error === void 0 ? void 0 : error.message
      }]
    });
  }
}

/***/ }),

/***/ 2029:
/***/ ((module) => {

module.exports = require("printful-request");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7317));
module.exports = __webpack_exports__;

})();