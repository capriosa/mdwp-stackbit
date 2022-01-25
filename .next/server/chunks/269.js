"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 8269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1342);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4756);
/* harmony import */ var _lib_printful_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5124);
/* harmony import */ var _lib_format_variant_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(379);
/* harmony import */ var _ProductGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7702);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["name"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const IndexPage = ({
  products
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Section__WEBPACK_IMPORTED_MODULE_2__.default, {
  component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ProductGrid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    products: products
  })
});

const getStaticProps = async () => {
  const {
    result: productIds
  } = await _lib_printful_client__WEBPACK_IMPORTED_MODULE_3__/* .printful.get */ .i.get("sync/products");
  const allProducts = await Promise.all(productIds.map(async ({
    id
  }) => await _lib_printful_client__WEBPACK_IMPORTED_MODULE_3__/* .printful.get */ .i.get(`sync/products/${id}`)));
  const products = allProducts.map(({
    result: {
      sync_product,
      sync_variants
    }
  }) => _objectSpread(_objectSpread({}, sync_product), {}, {
    variants: sync_variants.map(_ref => {
      let {
        name
      } = _ref,
          variant = _objectWithoutProperties(_ref, _excluded);

      return _objectSpread({
        name: (0,_lib_format_variant_name__WEBPACK_IMPORTED_MODULE_6__/* .formatVariantName */ .t)(name)
      }, variant);
    })
  }));
  return {
    props: {
      products: lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(products)
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ 379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ formatVariantName)
/* harmony export */ });
const formatVariantName = variantName => {
  const [, name] = variantName.split(" - ");
  return name ? name : "One style";
};

/***/ }),

/***/ 5124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ printful)
/* harmony export */ });
/* harmony import */ var printful_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2029);
/* harmony import */ var printful_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(printful_request__WEBPACK_IMPORTED_MODULE_0__);

const printful = new printful_request__WEBPACK_IMPORTED_MODULE_0__.PrintfulClient(process.env.PRINTFUL_API_KEY);

/***/ })

};
;