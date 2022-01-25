"use strict";
(() => {
var exports = {};
exports.id = 147;
exports.ids = [147];
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

/***/ 5317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_printful_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5124);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function handler(req, res) {
  const {
    eventName,
    content
  } = req.body;
  if (eventName !== "shippingrates.fetch") return res.status(200).end();
  if (content.items.length === 0) return res.status(200).json({
    errors: [{
      key: "no_items",
      message: "No items in cart to calculate taxes."
    }]
  });
  const {
    items: cartItems,
    shippingAddress,
    shippingRateUserDefinedId
  } = content;
  if (!shippingAddress) return res.status(200).json({
    errors: [{
      key: "no_address",
      message: "No address to calculate taxes."
    }]
  });
  const {
    address1,
    address2,
    city,
    country,
    province,
    postalCode,
    phone
  } = shippingAddress;

  const recipient = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, address1 && {
    address1
  }), address2 && {
    address2
  }), city && {
    city: city
  }), country && {
    country_code: country
  }), province && {
    state_code: province
  }), postalCode && {
    zip: postalCode
  }), phone && {
    phone
  });

  const items = cartItems.map(item => ({
    external_variant_id: item.id,
    quantity: item.quantity
  }));

  try {
    const {
      result
    } = await _lib_printful_client__WEBPACK_IMPORTED_MODULE_0__/* .printful.post */ .i.post("orders/estimate-costs", {
      shipping: shippingRateUserDefinedId,
      recipient,
      items
    });
    res.status(200).json({
      taxes: [{
        name: "VAT",
        amount: result.costs.vat,
        rate: 0
      }]
    });
  } catch ({
    error
  }) {
    console.log(error);
    res.status(200).json({
      errors: [{
        key: error === null || error === void 0 ? void 0 : error.reason,
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
var __webpack_exports__ = (__webpack_exec__(5317));
module.exports = __webpack_exports__;

})();