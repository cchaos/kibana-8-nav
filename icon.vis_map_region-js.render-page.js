exports.ids = ["icon.vis_map_region-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/vis_map_region.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/vis_map_region.js ***!
  \*******************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconVisMapRegion = function EuiIconVisMapRegion(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: titleId
  }, title) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.5 2.309v8.69a.499.499 0 01-.032.176L9.5 12.691V3.809l-3-1.5zm-1-.04L2 3.825v8.906l3.527-1.568a.5.5 0 01-.027-.164V2.27zm.274-1.216a.498.498 0 01.471.01l3.768 1.884 4.284-1.904A.5.5 0 0115 1.5v10a.5.5 0 01-.297.457l-4.5 2a.5.5 0 01-.427-.01l-3.789-1.894-4.283 1.904a.5.5 0 01-.703-.457v-10a.5.5 0 01.297-.457l4.476-1.99zM10.5 3.825v8.906l3.5-1.556V2.27l-3.5 1.556z"
  }));
};

var icon = EuiIconVisMapRegion;
EuiIconVisMapRegion.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisMapRegion"
};

/***/ })

};;
//# sourceMappingURL=icon.vis_map_region-js.render-page.js.map