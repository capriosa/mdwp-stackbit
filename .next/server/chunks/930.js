"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 3930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DU": () => (/* binding */ WishlistDispatchContext),
  "TN": () => (/* binding */ WishlistProvider),
  "oU": () => (/* binding */ WishlistStateContext)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/hooks/useLocalStorage.tsx

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = external_react_.useState(() => {
    try {
      const item =  false && 0;
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/context/wishlist.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const WishlistStateContext = /*#__PURE__*/(0,external_react_.createContext)(null);
const WishlistDispatchContext = /*#__PURE__*/(0,external_react_.createContext)(null);
const initialState = {
  items: []
};

const reducer = (state, {
  type,
  payload
}) => {
  switch (type) {
    case ADD_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [...state.items, payload]
      });

    case REMOVE_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(i => i.id !== payload)
      });

    default:
      throw new Error(`Invalid action: ${type}`);
  }
};

const WishlistProvider = ({
  children
}) => {
  const [savedWishlist, saveWishlist] = useLocalStorage("items-wishlist", JSON.stringify(initialState));
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, JSON.parse(savedWishlist));
  (0,external_react_.useEffect)(() => {
    saveWishlist(JSON.stringify(state));
  }, [state, saveWishlist]);

  const addItem = item => {
    if (!item.id) return;
    const existing = state.items.find(i => i.id === item.id);
    if (existing) return dispatch({
      type: REMOVE_PRODUCT,
      payload: item.id
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: item
    });
  };

  const removeItem = id => {
    if (!id) return;
    dispatch({
      type: REMOVE_PRODUCT,
      payload: id
    });
  };

  const isSaved = id => state.items.some(i => i.id === id);

  const hasItems = state.items.length > 0;
  return /*#__PURE__*/jsx_runtime_.jsx(WishlistDispatchContext.Provider, {
    value: {
      addItem,
      removeItem
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(WishlistStateContext.Provider, {
      value: _objectSpread(_objectSpread({}, state), {}, {
        isSaved,
        hasItems
      }),
      children: children
    })
  });
};

/***/ })

};
;