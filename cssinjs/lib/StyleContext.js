"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleProvider = exports.CSS_IN_JS_INSTANCE_ID = exports.CSS_IN_JS_INSTANCE = exports.ATTR_TOKEN = exports.ATTR_MARK = exports.ATTR_DEV_CACHE_PATH = void 0;
exports.createCache = createCache;
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _Cache = _interopRequireDefault(require("./Cache"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ATTR_TOKEN = 'data-token-hash';
exports.ATTR_TOKEN = ATTR_TOKEN;
var ATTR_MARK = 'data-css-hash';
exports.ATTR_MARK = ATTR_MARK;
var ATTR_DEV_CACHE_PATH = 'data-dev-cache-path';
// Mark css-in-js instance in style element
exports.ATTR_DEV_CACHE_PATH = ATTR_DEV_CACHE_PATH;
var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
exports.CSS_IN_JS_INSTANCE = CSS_IN_JS_INSTANCE;
var CSS_IN_JS_INSTANCE_ID = Math.random().toString(12).slice(2);
exports.CSS_IN_JS_INSTANCE_ID = CSS_IN_JS_INSTANCE_ID;
function createCache() {
  if (typeof document !== 'undefined') {
    var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]"));
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function (style) {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || CSS_IN_JS_INSTANCE_ID;
      document.head.insertBefore(style, firstChild);
    });
    // Deduplicate of moved styles
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function (style) {
      var hash = style.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
          var _style$parentNode;
          (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new _Cache.default();
}
var StyleContext = /*#__PURE__*/React.createContext({
  hashPriority: 'low',
  cache: createCache(),
  defaultCache: true
});
var StyleProvider = function StyleProvider(props) {
  var autoClear = props.autoClear,
    mock = props.mock,
    cache = props.cache,
    hashPriority = props.hashPriority,
    container = props.container,
    children = props.children;
  var _React$useContext = React.useContext(StyleContext),
    parentCache = _React$useContext.cache,
    parentAutoClear = _React$useContext.autoClear,
    parentMock = _React$useContext.mock,
    parentDefaultCache = _React$useContext.defaultCache,
    parentHashPriority = _React$useContext.hashPriority,
    parentContainer = _React$useContext.container;
  var context = React.useMemo(function () {
    return {
      autoClear: autoClear !== null && autoClear !== void 0 ? autoClear : parentAutoClear,
      mock: mock !== null && mock !== void 0 ? mock : parentMock,
      cache: cache || parentCache || createCache(),
      defaultCache: !cache && parentDefaultCache,
      hashPriority: hashPriority !== null && hashPriority !== void 0 ? hashPriority : parentHashPriority,
      container: container || parentContainer
    };
  }, [autoClear, parentAutoClear, parentMock, parentCache, mock, cache, parentDefaultCache, hashPriority, parentHashPriority, container, parentContainer]);
  return /*#__PURE__*/React.createElement(StyleContext.Provider, {
    value: context
  }, children);
};
exports.StyleProvider = StyleProvider;
var _default = StyleContext;
exports.default = _default;