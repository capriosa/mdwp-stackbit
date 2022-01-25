"use strict";
(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 6743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "sourcebit-target-next"
const external_sourcebit_target_next_namespaceObject = require("sourcebit-target-next");
;// CONCATENATED MODULE: external "sourcebit-target-next/with-remote-data-updates"
const with_remote_data_updates_namespaceObject = require("sourcebit-target-next/with-remote-data-updates");
// EXTERNAL MODULE: external "@stackbit/components"
var components_ = __webpack_require__(3749);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/[[...slug]].js






function Page(props) {
  const {
    page,
    site
  } = props;
  const {
    layout
  } = page;

  if (!layout) {
    throw new Error(`page has no layout, page '${props.path}'`);
  }

  const PageLayout = (0,components_.getComponent)(layout);

  if (!PageLayout) {
    throw new Error(`no page layout matching the layout: ${layout}`);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(PageLayout, {
    page: page,
    site: site
  });
}

async function getStaticPaths() {
  let data = await external_sourcebit_target_next_namespaceObject.sourcebitDataClient.getData();
  const paths = data.pages.map(page => page.path);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const props = await external_sourcebit_target_next_namespaceObject.sourcebitDataClient.getStaticPropsForPageAtPath(params.slug);
  return {
    props
  };
}
/* harmony default export */ const _slug_ = ((0,with_remote_data_updates_namespaceObject.withRemoteDataUpdates)(Page));

/***/ }),

/***/ 3749:
/***/ ((module) => {

module.exports = require("@stackbit/components");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6743));
module.exports = __webpack_exports__;

})();