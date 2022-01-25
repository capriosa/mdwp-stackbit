"use strict";
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ProductGrid)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/context/wishlist.tsx + 1 modules
var wishlist = __webpack_require__(3930);
;// CONCATENATED MODULE: ./src/hooks/useWishlistDispatch.ts



const useWishlistDispatch = () => {
  const context = (0,external_react_.useContext)(wishlist/* WishlistDispatchContext */.DU);
  if (!context) throw new Error("useWishlistDispatch must be used within a WishlistProvider");
  return context;
};

/* harmony default export */ const hooks_useWishlistDispatch = (useWishlistDispatch);
// EXTERNAL MODULE: ./src/hooks/useWishlistState.ts
var useWishlistState = __webpack_require__(6804);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/VariantPicker.tsx
const _excluded = ["variants"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const VariantPicker = _ref => {
  let {
    variants
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (variants.length === ( false || 1)) return null;
  return /*#__PURE__*/jsx_runtime_.jsx("select", _objectSpread(_objectSpread({}, props), {}, {
    className: "appearance-none w-full relative mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-white border border-gray-300 focus:border-gray-500 shadow-sm text-gray-500 text-sm focus:outline-none focus:text-gray-900 rounded",
    children: variants.map(({
      external_id,
      name
    }) => /*#__PURE__*/jsx_runtime_.jsx("option", {
      value: external_id,
      children: name
    }, external_id))
  }));
};

/* harmony default export */ const components_VariantPicker = (VariantPicker);
;// CONCATENATED MODULE: ./src/components/Product.tsx








const Product = product => {
  const {
    addItem
  } = hooks_useWishlistDispatch();
  const {
    isSaved
  } = (0,useWishlistState/* default */.Z)();
  const {
    id,
    name,
    variants
  } = product;
  const [firstVariant] = variants;
  const oneStyle = variants.length === 1;
  const {
    0: activeVariantExternalId,
    1: setActiveVariantExternalId
  } = (0,external_react_.useState)(firstVariant.external_id);
  const activeVariant = variants.find(v => v.external_id === activeVariantExternalId);
  const activeVariantFile = activeVariant.files.find(({
    type
  }) => type === "preview");
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: activeVariant.currency
  }).format(activeVariant.retail_price);

  const addToWishlist = () => addItem(product);

  const onWishlist = isSaved(id);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: "border border-gray-200 rounded bg-white flex flex-col relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      "aria-label": "Add to wishlist",
      className: "appearance-none absolute top-0 right-0 mt-3 mr-3 text-gray-300 focus:text-gray-500 hover:text-red-500 transition focus:outline-none",
      onClick: addToWishlist,
      children: onWishlist ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "w-6 h-6 fill-current text-red-500",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "none",
          d: "M0 0H24V24H0z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "w-6 h-6 fill-current",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "none",
          d: "M0 0H24V24H0z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center flex-1 sm:flex-shrink-0 w-full p-6",
      children: activeVariantFile && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: activeVariantFile.preview_url,
        width: 250,
        height: 250,
        alt: `${activeVariant.name} ${name}`,
        title: `${activeVariant.name} ${name}`
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-1 p-6 pt-0",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "mb-1 font-semibold text-gray-900",
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm text-gray-500",
          children: formattedPrice
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-3 flex flex-col sm:flex-row justify-center items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_VariantPicker, {
        value: activeVariantExternalId,
        onChange: ({
          target: {
            value
          }
        }) => setActiveVariantExternalId(value),
        variants: variants,
        disabled: oneStyle
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "snipcart-add-item w-full md:w-auto transition flex-shrink-0 py-2 px-4 border border-gray-300 hover:border-transparent shadow-sm text-sm font-medium bg-white text-gray-900 focus:text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:outline-none rounded",
        "data-item-id": activeVariantExternalId,
        "data-item-price": activeVariant.retail_price,
        "data-item-url": `/api/products/${activeVariantExternalId}`,
        "data-item-description": activeVariant.name,
        "data-item-image": activeVariantFile.preview_url,
        "data-item-name": name,
        children: "Add to Cart"
      })]
    })]
  });
};

/* harmony default export */ const components_Product = (Product);
;// CONCATENATED MODULE: ./src/components/ProductGrid.tsx
function ProductGrid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ProductGrid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductGrid_ownKeys(Object(source), true).forEach(function (key) { ProductGrid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductGrid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductGrid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ProductGrid = ({
  products
}) => {
  if (!products || products.length === 0) return null;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
    children: products.map(product => /*#__PURE__*/jsx_runtime_.jsx(components_Product, ProductGrid_objectSpread({}, product), product.id))
  });
};

/* harmony default export */ const components_ProductGrid = (ProductGrid);

/***/ }),

/***/ 6804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3930);



const useWishlistState = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_wishlist__WEBPACK_IMPORTED_MODULE_1__/* .WishlistStateContext */ .oU);
  if (!context) throw new Error("useWishlistState must be used within a WishlistProvider");
  return context;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWishlistState);

/***/ })

};
;