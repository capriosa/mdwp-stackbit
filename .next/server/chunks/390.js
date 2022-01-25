"use strict";
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 2390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Eventbrite)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(4696);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Event.js





function Event(props) {
  const fetcher = async url => await external_axios_default().get(url).then(res => res.data);

  const key = 'EDMO3BWIFXRUIQSDP7IZ';
  const id = props.eventbriteId || '169603411369';
  const url = 'https://www.eventbriteapi.com/v3/events/' + id + '/?token=' + key + '&expand=venue';
  const desc_url = 'https://www.eventbriteapi.com/v3/events/' + id + '/description/?token=' + key + '&expand=venue';
  const {
    data,
    error
  } = external_swr_default()(url, fetcher);

  if (error) {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Failed to load Data"
    });
  }

  if (!data) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full",
        role: "status",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "hidden",
          children: "Loading..."
        })
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "px-2 py-32 bg-white md:px-0",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container items-center max-w-6xl px-8 mx-auto xl:px-5",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap items-center sm:-mx-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full md:w-1/2 md:px-3",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "text-2xl font-extrabold tracking-tight text-gray-900",
                children: data.name.text
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl",
                children: data.description.text
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: "text-sm text-gray-500 font-semibold",
                children: ["Veranstaltungsdatum: ", data.start.local.slice(0, 10).split('-').reverse().join('.')]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "w-full md:w-1/2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: data.logo.url
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative mt-16 flex flex-col sm:flex-row sm:space-x-4",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: data.url,
                className: "flex sb-component-button sb-component-button-primary items-center w-full px-6 py-3 mb-3 text-lg text-white rounded-md sm:mb-0 sm:w-auto",
                children: ["Anmelden", /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-5 h-5 ml-1",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }), /*#__PURE__*/jsx_runtime_.jsx("polyline", {
                    points: "12 5 19 12 12 19"
                  })]
                })]
              })
            })]
          })]
        })
      })
    });
  }
}
// EXTERNAL MODULE: ./src/components/Section.js
var Section = __webpack_require__(4756);
// EXTERNAL MODULE: external "@stackbit/components/dist/components-registry"
var components_registry_ = __webpack_require__(5230);
// EXTERNAL MODULE: external "@stackbit/components/dist/utils/map-styles-to-class-names"
var map_styles_to_class_names_ = __webpack_require__(5258);
;// CONCATENATED MODULE: ./src/components/Eventbrite.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Eventbrite(props) {
  var _props$styles;

  const cssId = props.elementId || null;
  const colors = props.colors || 'colors-a';
  const sectionStyles = ((_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.self) || {};
  const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
  return /*#__PURE__*/jsx_runtime_.jsx(Section.default, {
    cssId: cssId,
    colors: colors,
    sectionStyles: sectionStyles,
    component: /*#__PURE__*/jsx_runtime_.jsx(Event, {
      eventbriteId: props.eventbriteId
    })
  });
}

function ctaBackgroundImage(image) {
  var _image$styles;

  const imageUrl = image.url;

  if (!imageUrl) {
    return null;
  }

  const imageStyles = ((_image$styles = image.styles) === null || _image$styles === void 0 ? void 0 : _image$styles.self) || {};
  const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
  return /*#__PURE__*/_jsx("div", {
    className: "bg-cover bg-center block absolute inset-0",
    style: {
      backgroundImage: `url('${imageUrl}')`,
      opacity: imageOpacity * 0.01
    }
  });
}

function ctaBody(props) {
  if (!props.title && !props.text) {
    return null;
  }

  const styles = props.styles || {};
  return /*#__PURE__*/_jsxs("div", {
    className: "my-3 px-4 w-full lg:flex-grow",
    children: [props.title && /*#__PURE__*/_jsx("h2", {
      className: classNames(styles.title ? mapStyles(styles.title) : null),
      "data-sb-field-path": ".title",
      children: props.title
    }), props.text && /*#__PURE__*/_jsx(Markdown, {
      options: {
        forceBlock: true,
        forceWrapper: true
      },
      className: classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, {
        'mt-4': props.title
      }),
      "data-sb-field-path": ".text",
      children: props.text
    })]
  });
}

function ctaActions(props) {
  var _styles$self;

  const actions = props.actions || [];

  if (actions.length === 0) {
    return null;
  }

  const styles = props.styles || {};
  const Action = getComponent('Action');
  return /*#__PURE__*/_jsx("div", {
    className: classNames('my-3', 'px-4', 'w-full', ((_styles$self = styles.self) === null || _styles$self === void 0 ? void 0 : _styles$self.flexDirection) === 'row' ? 'lg:w-auto' : null),
    children: /*#__PURE__*/_jsx("div", {
      className: classNames('flex', 'flex-wrap', 'items-center', '-mx-2', 'lg:flex-nowrap', styles.actions ? mapStyles(styles.actions) : null),
      "data-sb-field-path": ".actions",
      children: actions.map((action, index) => /*#__PURE__*/_jsx(Action, _objectSpread(_objectSpread({}, action), {}, {
        className: "mb-3 mx-2 lg:whitespace-nowrap",
        "data-sb-field-path": `.${index}`
      }), index))
    })
  });
}

function mapMinHeightStyles(height) {
  switch (height) {
    case 'auto':
      return 'min-h-0';

    case 'screen':
      return 'min-h-screen';
  }

  return null;
}

function mapMaxWidthStyles(width) {
  switch (width) {
    case 'narrow':
      return 'max-w-screen-md';

    case 'wide':
      return 'max-w-screen-xl';

    case 'full':
      return 'max-w-full';
  }

  return null;
}

function mapFlexDirectionStyles(flexDirection) {
  switch (flexDirection) {
    case 'row':
      return ['flex-col', 'lg:flex-row', 'lg:justify-between'];

    case 'col':
      return ['flex-col'];
  }

  return null;
}

/***/ })

};
;