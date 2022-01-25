"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "@stackbit/components"
var components_ = __webpack_require__(3749);
;// CONCATENATED MODULE: external "@stackbit/components/dist/components-map"
const components_map_namespaceObject = require("@stackbit/components/dist/components-map");
;// CONCATENATED MODULE: ./src/components/register-components.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




(0,components_.registerComponents)(_objectSpread(_objectSpread({}, components_map_namespaceObject.componentsMap), {}, {
  // Override any static or dynamic component,
  // or register your own dynamic component.
  AlertSection: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 272).then(__webpack_require__.bind(__webpack_require__, 9272)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(9272)],
      modules: ["../components/register-components.js -> " + './AlertSection']
    }
  }),
  TestimonialCard: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 938).then(__webpack_require__.bind(__webpack_require__, 1938)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(1938)],
      modules: ["../components/register-components.js -> " + './TestimonialCard']
    }
  }),
  PopupLink: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 342).then(__webpack_require__.bind(__webpack_require__, 8342)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(8342)],
      modules: ["../components/register-components.js -> " + './PopupLink']
    }
  }),
  ProfileCard: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 552).then(__webpack_require__.bind(__webpack_require__, 5552)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(5552)],
      modules: ["../components/register-components.js -> " + './ProfileCard']
    }
  }),
  Action: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 595).then(__webpack_require__.bind(__webpack_require__, 8595)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(8595)],
      modules: ["../components/register-components.js -> " + './Action']
    }
  }),
  Tabs: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 640).then(__webpack_require__.bind(__webpack_require__, 4640)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(4640)],
      modules: ["../components/register-components.js -> " + './Tabs']
    }
  }),
  GridCard: (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(756), __webpack_require__.e(986)]).then(__webpack_require__.bind(__webpack_require__, 1986)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(1986)],
      modules: ["../components/register-components.js -> " + './GridCard']
    }
  }),
  Accordions: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 292).then(__webpack_require__.bind(__webpack_require__, 292)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(292)],
      modules: ["../components/register-components.js -> " + './Accordions']
    }
  }),
  Eventbrite: (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(756), __webpack_require__.e(390)]).then(__webpack_require__.bind(__webpack_require__, 2390)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(2390)],
      modules: ["../components/register-components.js -> " + './Eventbrite']
    }
  }),
  Section: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 756).then(__webpack_require__.bind(__webpack_require__, 4756)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(4756)],
      modules: ["../components/register-components.js -> " + './Section']
    }
  }),
  Cart: (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(675), __webpack_require__.e(756), __webpack_require__.e(702), __webpack_require__.e(269)]).then(__webpack_require__.bind(__webpack_require__, 8269)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(8269)],
      modules: ["../components/register-components.js -> " + './Cart']
    }
  }),
  CodeSection: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 121).then(__webpack_require__.bind(__webpack_require__, 3121)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(3121)],
      modules: ["../components/register-components.js -> " + './CodeSection']
    }
  }) //ImageBlock: dynamic(() => import('./ImageBlock')),

}));
/**
 * README
 * ======
 *
 * The `registerComponents` function registers the received components with the components registry. To retrieve a
 * registered component, use the `getComponent(key)` function. The `@stackbit/components` package uses the
 * `getComponent` function to retrieve and render registered components. The component registry allows you to override
 * and customize any of the `@stackbit/components` package's internal components by registering different components
 * under the same key.
 *
 * There are two groups of components you can register - "static" and "dynamic".
 *
 * Static components will usually be small components that are frequently used on website pages. The mapping key of a
 * static component is the component name, and the value is the component itself. To override a static component, set
 * its name to your custom component:
 *
 *     import CustomAction from './CustomAction';
 *
 *     registerComponents({
 *       ...componentsMap,
 *       Action: CustomAction
 *     });
 *
 * Note: you don't need to register a new static component unless you override an existing static component from
 * @stackbit/components.
 *
 * Dynamic components are registered using dynamic imports and are loaded by the browser only when these components are
 * needed. The mapping key of a dynamic component is a model name, and the value is the component imported via Next's
 * dynamic import. You should use dynamic components for large components or components with heavy external dependencies,
 * which are used sparingly in your website's pages. To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components are mapped by model names that describe the prop types of these components. This fact allows
 * selecting a dynamic component at run-time based on the type of the content, and the type of the content will usually
 * be the name of the content's model. For example, a parent component calls the `getComponent` function, passing it the
 * type of data it needs to render, and gets back the registered component for that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 *
 * To override a dynamic component or to define a new dynamic component, import your component using Next's dynamic
 * import function and set it to the key matching the model name describing the input type of your component:
 *
 *     registerComponents({
 *       ...componentsMap,
 *       CtaSection: dynamic(() => import('./path/to/component'))
 *     });
 *
 * Note: in @stackbit/components package, model names match the names of the components. For example, the "HeroSection"
 * component renders the content described by a model named "HeroSection".
 *
 * If you need to override a content model, copy the model from node_modules/@stackbit/components/models folder to
 * .stackbit/models folder. Models defined in .stackbit/models folder take precedence over the models with the same name
 * defined in @stackbit/components.
 */
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./next-seo.config.ts
const description = "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "Your SWAG store";
const url = "https://swag.nextdropshippingstarter.com";
const seo = {
  title,
  titleTemplate: "%s | Headless Dropshipping Starter",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url
  },
  twitter: {
    handle: "@notrab",
    site: "@notrab"
  }
};

// EXTERNAL MODULE: ./src/context/wishlist.tsx + 1 modules
var wishlist = __webpack_require__(3930);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(wishlist/* WishlistProvider */.TN, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, _app_objectSpread({}, seo))]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ 3749:
/***/ ((module) => {

module.exports = require("@stackbit/components");

/***/ }),

/***/ 5230:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/components-registry");

/***/ }),

/***/ 3098:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/arrow-left");

/***/ }),

/***/ 8608:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/arrow-right");

/***/ }),

/***/ 3458:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/cart");

/***/ }),

/***/ 2515:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/facebook");

/***/ }),

/***/ 6492:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/github");

/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/instagram");

/***/ }),

/***/ 9787:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/linkedin");

/***/ }),

/***/ 7154:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/svgs/twitter");

/***/ }),

/***/ 7845:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/utils/link");

/***/ }),

/***/ 5258:
/***/ ((module) => {

module.exports = require("@stackbit/components/dist/utils/map-styles-to-class-names");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1342:
/***/ ((module) => {

module.exports = require("lodash.shuffle");

/***/ }),

/***/ 4696:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 2029:
/***/ ((module) => {

module.exports = require("printful-request");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9817:
/***/ ((module) => {

module.exports = require("react-highlight");

/***/ }),

/***/ 7206:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [649,930], () => (__webpack_exec__(4409)));
module.exports = __webpack_exports__;

})();