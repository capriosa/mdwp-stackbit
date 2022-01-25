"use strict";
(() => {
var exports = {};
exports.id = 642;
exports.ids = [642];
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

/***/ 9021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./src/lib/printful-client.ts
var printful_client = __webpack_require__(5124);
;// CONCATENATED MODULE: ./src/lib/create-order.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const createOrder = async ({
  invoiceNumber,
  email,
  shippingAddress,
  items,
  shippingRateUserDefinedId
}) => {
  const recipient = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, shippingAddress.name && {
    name: shippingAddress.name
  }), shippingAddress.address1 && {
    address1: shippingAddress.address1
  }), shippingAddress.address2 && {
    address2: shippingAddress.address2
  }), shippingAddress.city && {
    city: shippingAddress.city
  }), shippingAddress.country && {
    country_code: shippingAddress.country
  }), shippingAddress.province && {
    state_code: shippingAddress.province
  }), shippingAddress.postalCode && {
    zip: shippingAddress.postalCode
  }), shippingAddress.phone && {
    phone: shippingAddress.phone
  }), {}, {
    email
  });

  const printfulItems = items.map(item => ({
    external_variant_id: item.id,
    quantity: item.quantity
  }));
  const {
    result
  } = await printful_client/* printful.post */.i.post("orders", {
    external_id: invoiceNumber,
    recipient,
    items: printfulItems,
    shipping: shippingRateUserDefinedId
  });
  return result;
};

/* harmony default export */ const create_order = (createOrder);
;// CONCATENATED MODULE: ./src/pages/api/snipcart/webhook.ts

async function handler(req, res) {
  const allowedEvents = ["order.completed", "customauth:customer_updated"];
  console.log(req.headers);
  const token = req.headers["x-snipcart-requesttoken"];
  console.log(token);
  const {
    eventName,
    content
  } = req.body;
  if (req.method !== "POST") return res.status(405).json({
    message: "Method not allowed"
  });
  if (!allowedEvents.includes(eventName)) return res.status(400).json({
    message: "This event is not permitted"
  }); // if (!token) return res.status(401).json({ message: "Not Authorized" });
  // try {
  //   const verifyToken = await fetch(
  //     `https://app.snipcart.com/api/requestvalidation/${token}`
  //   );
  //   if (!verifyToken.ok)
  //     return res.status(401).json({ message: "Not Authorization" });
  // } catch (err) {
  //   console.log(err);
  //   return res
  //     .status(500)
  //     .json({ message: "Unable to verify Snipcart webhook token" });
  // }

  try {
    switch (eventName) {
      case "order.completed":
        await create_order(content);
        break;

      case "customauth:customer_updated":
        return res.status(200).json({
          message: "Customer updated - no action taken"
        });

      default:
        throw new Error("No such event handler exists");
    }

    res.status(200).json({
      message: "Done"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong"
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
var __webpack_exports__ = (__webpack_exec__(9021));
module.exports = __webpack_exports__;

})();