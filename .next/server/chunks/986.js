"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 1986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GridCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4756);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







function GridCard(props) {
  var _props$styles;

  const cssId = props.elementId || null;
  const colors = props.colors || 'colors-a';
  const sectionStyles = ((_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.self) || {};
  const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Section__WEBPACK_IMPORTED_MODULE_2__.default, {
    cssId: cssId,
    colors: colors,
    sectionStyles: sectionStyles,
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Grid, {})
  });
}

function Grid() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        class: "flex flex-wrap -mx-1 lg:-mx-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          class: "my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            class: "overflow-hidden rounded-lg shadow-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              href: "#",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                alt: "Placeholder",
                class: "block h-auto w-full",
                src: "https://picsum.photos/600/400/?random"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
              class: "flex items-center justify-between leading-tight p-2 md:p-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                class: "text-lg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  class: "no-underline hover:underline text-black",
                  href: "#",
                  children: "Article Title"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                class: "text-grey-darker text-sm",
                children: "11/1/19"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
              class: "flex items-center justify-between leading-none p-2 md:p-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "flex items-center no-underline hover:underline text-black",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  alt: "Placeholder",
                  class: "block rounded-full",
                  src: "https://picsum.photos/32/32/?random"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  class: "ml-2 text-sm",
                  children: "Author Name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "no-underline text-grey-darker hover:text-red-dark",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  class: "hidden",
                  children: "Like"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fa fa-heart"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          class: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            class: "overflow-hidden rounded-lg shadow-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              href: "#",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                alt: "Placeholder",
                class: "block h-auto w-full",
                src: "https://picsum.photos/600/400/?random"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
              class: "flex items-center justify-between leading-tight p-2 md:p-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                class: "text-lg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  class: "no-underline hover:underline text-black",
                  href: "#",
                  children: "Article Title"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                class: "text-grey-darker text-sm",
                children: "11/1/19"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
              class: "flex items-center justify-between leading-none p-2 md:p-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "flex items-center no-underline hover:underline text-black",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  alt: "Placeholder",
                  class: "block rounded-full",
                  src: "https://picsum.photos/32/32/?random"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  class: "ml-2 text-sm",
                  children: "Author Name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "no-underline text-grey-darker hover:text-red-dark",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  class: "hidden",
                  children: "Like"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fa fa-heart"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          class: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            class: "overflow-hidden rounded-lg shadow-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              href: "#",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                alt: "Placeholder",
                class: "block h-auto w-full",
                src: "https://picsum.photos/600/400/?random"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
              class: "flex items-center justify-between leading-tight p-2 md:p-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                class: "text-lg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  class: "no-underline hover:underline text-black",
                  href: "#",
                  children: "Article Title"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                class: "text-grey-darker text-sm",
                children: "11/1/19"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
              class: "flex items-center justify-between leading-none p-2 md:p-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "flex items-center no-underline hover:underline text-black",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  alt: "Placeholder",
                  class: "block rounded-full",
                  src: "https://picsum.photos/32/32/?random"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  class: "ml-2 text-sm",
                  children: "Author Name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "no-underline text-grey-darker hover:text-red-dark",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  class: "hidden",
                  children: "Like"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fa fa-heart"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          class: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            class: "overflow-hidden rounded-lg shadow-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              href: "#",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                alt: "Placeholder",
                class: "block h-auto w-full",
                src: "https://picsum.photos/600/400/?random"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
              class: "flex items-center justify-between leading-tight p-2 md:p-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                class: "text-lg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  class: "no-underline hover:underline text-black",
                  href: "#",
                  children: "Article Title"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                class: "text-grey-darker text-sm",
                children: "11/1/19"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
              class: "flex items-center justify-between leading-none p-2 md:p-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "flex items-center no-underline hover:underline text-black",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  alt: "Placeholder",
                  class: "block rounded-full",
                  src: "https://picsum.photos/32/32/?random"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  class: "ml-2 text-sm",
                  children: "Author Name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "no-underline text-grey-darker hover:text-red-dark",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  class: "hidden",
                  children: "Like"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fa fa-heart"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          class: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            class: "overflow-hidden rounded-lg shadow-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              href: "#",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                alt: "Placeholder",
                class: "block h-auto w-full",
                src: "https://picsum.photos/600/400/?random"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
              class: "flex items-center justify-between leading-tight p-2 md:p-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                class: "text-lg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  class: "no-underline hover:underline text-black",
                  href: "#",
                  children: "Article Title"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                class: "text-grey-darker text-sm",
                children: "11/1/19"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
              class: "flex items-center justify-between leading-none p-2 md:p-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "flex items-center no-underline hover:underline text-black",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  alt: "Placeholder",
                  class: "block rounded-full",
                  src: "https://picsum.photos/32/32/?random"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  class: "ml-2 text-sm",
                  children: "Author Name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "no-underline text-grey-darker hover:text-red-dark",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  class: "hidden",
                  children: "Like"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fa fa-heart"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          class: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            class: "overflow-hidden rounded-lg shadow-lg",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              href: "#",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                alt: "Placeholder",
                class: "block h-auto w-full",
                src: "https://picsum.photos/600/400/?random"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
              class: "flex items-center bg-white justify-between leading-tight p-2 md:p-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                class: "text-lg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  class: "no-underline hover:underline text-black",
                  href: "#",
                  children: "Article Title"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                class: "text-grey-darker text-sm",
                children: "11/1/19"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
              class: "flex items-center bg-white justify-between leading-none p-2 md:p-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "flex items-center no-underline hover:underline text-black",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  alt: "Placeholder",
                  class: "block rounded-full",
                  src: "https://picsum.photos/32/32/?random"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  class: "ml-2 text-sm",
                  children: "Author Name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                class: "no-underline text-grey-darker hover:text-red-dark",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  class: "hidden",
                  children: "Like"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  class: "fa fa-heart"
                })]
              })]
            })]
          })
        })]
      })
    })
  });
}

/***/ })

};
;