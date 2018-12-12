(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricing"],{

/***/ "./src/components/Accordion/Accordion.css.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContainer", function() { return AccordionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemTitle", function() { return ListItemTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemBody", function() { return ListItemBody; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");


var AccordionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Accordioncss__AccordionContainer",
  componentId: "sc-1siec8x-0"
})(["h3{margin-bottom:", ";text-align:center;}"], function (props) {
  return props.theme.margin;
});
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Accordioncss__List",
  componentId: "sc-1siec8x-1"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Accordioncss__ListItem",
  componentId: "sc-1siec8x-2"
})(["padding:", ";", ";"], function (props) {
  return props.theme.padding;
}, function (props) {
  if (props.active) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:#fff;margin-bottom:", ";"], props.theme.margin);
  }

  return null;
});
var ListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Accordioncss__ListItemTitle",
  componentId: "sc-1siec8x-3"
})(["cursor:pointer;font-weight:600;display:flex;justify-content:space-between;", ";i,svg{color:", ";}&:hover{opacity:0.7;}.text{padding-right:", ";}"], function (props) {
  return !props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["border-bottom:", " 1px solid;padding-bottom:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["shade"])(0.2, props.theme.colors.gray), props.theme.padding);
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.padding;
});
var ListItemBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Accordioncss__ListItemBody",
  componentId: "sc-1siec8x-4"
})(["display:", ";margin-top:", ";"], function (props) {
  return props.active ? 'block' : 'none';
}, function (props) {
  return props.theme.margin;
});

/***/ }),

/***/ "./src/components/Accordion/Accordion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Accordion/Accordion.css.js");
/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Accordion/AccordionItem.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Accordion\\Accordion.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Accordion = function Accordion(_ref) {
  var title = _ref.title,
      items = _ref.items;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var onItemClick = function onItemClick(id) {
    if (active.indexOf(id) > -1) {
      setActive(active.filter(function (itemId) {
        return itemId !== id;
      }));
    } else {
      setActive(_toConsumableArray(new Set(active.concat(id))));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_css__WEBPACK_IMPORTED_MODULE_2__["AccordionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_css__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccordionItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      item: item,
      active: active.indexOf(item.id) > -1,
      setActive: onItemClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  })));
};

Accordion.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }))
};
Accordion.defaultProps = {
  title: undefined,
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/Accordion/AccordionItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Icon/Icon.js");
/* harmony import */ var _Accordion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Accordion/Accordion.css.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Accordion\\AccordionItem.js";





var AccordionItem = function AccordionItem(_ref) {
  var item = _ref.item,
      active = _ref.active,
      setActive = _ref.setActive;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_css__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_css__WEBPACK_IMPORTED_MODULE_3__["ListItemTitle"], {
    active: active,
    onClick: function onClick() {
      setActive(item.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), " ", !active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_css__WEBPACK_IMPORTED_MODULE_3__["ListItemBody"], {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, item.body));
};

AccordionItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
AccordionItem.defaultProps = {
  active: false
};
/* harmony default export */ __webpack_exports__["default"] = (AccordionItem);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _UI_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/UI/Container.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Hero\\Hero.js";






var Hero = function Hero(_ref) {
  var title = _ref.title,
      children = _ref.children,
      bottom = _ref.bottom;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "hero-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "hero-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children), bottom && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, bottom))));
};

Hero.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
Hero.defaultProps = {
  bottom: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Hero__Wrapper",
  componentId: "sc-6a6rg3-0"
})(["margin-bottom:", ";"], function (props) {
  return props.theme.margin;
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Hero__Content",
  componentId: "sc-6a6rg3-1"
})(["width:70%;text-align:center;font-size:1em;margin:0 auto;h1{font-size:2.8em;font-weight:400;margin-bottom:10px;span{color:", ";}}p{font-size:1.1em;letter-spacing:0.1em;line-height:1.5em;}.hero-body{margin-bottom:30px;}.hero-bottom{input{min-width:40%;margin-right:", "px;}}"], function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["stripUnit"])(props.theme.margin) / 2;
});

/***/ }),

/***/ "./src/components/Plan/Plan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/UI/Button.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Plan\\Plan.js";





var Plan = function Plan(_ref) {
  var title = _ref.title,
      description = _ref.description,
      price = _ref.price,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Price, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Buttons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Try it for free")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "No credit card needed")));
};

Plan.propTypes = {
  // id: PropTypes.number.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Plan);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Wrapper",
  componentId: "gbymap-0"
})(["display:flex;flex:1;flex-direction:column;align-items:center;text-align:center;border:", " 1px solid;@media only screen and (max-width:960px){margin-bottom:", ";min-width:100%;}@media only screen and (min-width:960px){border-right-color:transparent;&:last-of-type{border-right-color:", ";}}"], function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return props.theme.colors.lightGray;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Title",
  componentId: "gbymap-1"
})(["color:", ";font-size:1.4em;margin-bottom:10px;"], function (props) {
  return props.theme.colors.primary;
});
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Description",
  componentId: "gbymap-2"
})(["margin-bottom:10px;display:flex;align-items:center;@media only screen and (min-width:960px){min-height:80px;}"]);
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Buttons",
  componentId: "gbymap-3"
})(["margin-bottom:10px;"]);
var Price = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Price",
  componentId: "gbymap-4"
})(["font-size:3em;margin-bottom:10px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Content",
  componentId: "gbymap-5"
})(["margin-bottom:10px;display:flex;align-items:center;@media only screen and (min-width:960px){min-height:90px;}"]);
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Bottom",
  componentId: "gbymap-6"
})(["color:", ";"], function (props) {
  return props.theme.colors.primary;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Plan__Inner",
  componentId: "gbymap-7"
})(["padding:", ";"], function (props) {
  return props.theme.padding;
});

/***/ }),

/***/ "./src/components/Section/Section.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Section",
  componentId: "sc-1to23x1-0"
})(["padding:", ";", ";"], function (props) {
  return props.theme.padding;
}, function (props) {
  if (props.primary) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:", ";color:#fff;"], props.theme.colors.primary);
  }

  if (props.gray) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:", ";"], props.theme.colors.gray);
  }

  return null;
});
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/routes/pricing/Pricing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Hero/Hero.js");
/* harmony import */ var _components_Plan_Plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Plan/Plan.js");
/* harmony import */ var _components_Section_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Section/Section.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Accordion/Accordion.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\pricing\\Pricing.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var plans = [{
  id: 1,
  title: 'Free Trial',
  description: 'Just getting started? Try out the platform for free.',
  price: '$0',
  content: 'For customers who wants to try out the platform.'
}, {
  id: 2,
  title: 'Small',
  description: 'Accept up to 150 bookings a month.',
  price: '$29',
  content: 'For smaller restaurants who accepts less than 150 bookings per month'
}, {
  id: 3,
  title: 'Premium',
  description: 'In need of unlimited bookings? Choose the premium plan.',
  price: '$49',
  content: 'For larger restaurants you needs unlimited bookings for month.'
}];
var faqs = [{
  id: 1,
  title: 'Can I upgrade my plan?',
  body: "Yes, it is possible to upgrade your plan to another package if you find that you need more bookings."
}, {
  id: 2,
  title: 'Can I cancel my subscription whenever I want?',
  body: 'Yes, you may cancel the subscription whenever, and your account will remain active for the billed period.'
}];

var Pricing = function Pricing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Forkee booking platform pricing plans.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Choose a plan that fits you. No installation cost, easy setup with updates included.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plans, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, plans.map(function (plan) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Plan_Plan__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: plan.id
    }, plan, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gray: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Billing FAQs",
    items: faqs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);
var Plans = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Pricing__Plans",
  componentId: "sc-1krsfts-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:", ";"], function (props) {
  return props.theme.margin;
});

/***/ }),

/***/ "./src/routes/pricing/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/pricing/Pricing.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\pricing\\index.js";




function action() {
  return {
    chunks: ['pricing'],
    title: 'Pricing',
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZy5jaHVuay5qcyIsInNvdXJjZXMiOlsiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24uY3NzLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24uanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uL0FjY29yZGlvbkl0ZW0uanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1BsYW4vUGxhbi5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL3JvdXRlcy9wcmljaW5nL1ByaWNpbmcuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL3JvdXRlcy9wcmljaW5nL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2hhZGUgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXJnaW59O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFkZGluZ307XG4gICR7cHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMudGhlbWUubWFyZ2lufTtcbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJHtwcm9wcyA9PlxuICAgICFwcm9wcy5hY3RpdmUgJiZcbiAgICBjc3NgXG4gICAgICBib3JkZXItYm90dG9tOiAke3NoYWRlKDAuMiwgcHJvcHMudGhlbWUuY29sb3JzLmdyYXkpfSAxcHggc29saWQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcy50aGVtZS5wYWRkaW5nfTtcbiAgICBgfTtcblxuICBpLFxuICBzdmcge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW1Cb2R5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQWNjb3JkaW9uQ29udGFpbmVyLCBMaXN0IH0gZnJvbSAnLi9BY2NvcmRpb24uY3NzJztcbmltcG9ydCBBY2NvcmRpb25JdGVtIGZyb20gJy4vQWNjb3JkaW9uSXRlbSc7XG5cbmNvbnN0IEFjY29yZGlvbiA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgb25JdGVtQ2xpY2sgPSBpZCA9PiB7XG4gICAgaWYgKGFjdGl2ZS5pbmRleE9mKGlkKSA+IC0xKSB7XG4gICAgICBzZXRBY3RpdmUoYWN0aXZlLmZpbHRlcihpdGVtSWQgPT4gaXRlbUlkICE9PSBpZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBY3RpdmUoWy4uLm5ldyBTZXQoYWN0aXZlLmNvbmNhdChpZCkpXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvbkNvbnRhaW5lcj5cbiAgICAgIHt0aXRsZSAmJiA8aDM+e3RpdGxlfTwvaDM+fVxuICAgICAgPExpc3Q+XG4gICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZS5pbmRleE9mKGl0ZW0uaWQpID4gLTF9XG4gICAgICAgICAgICBzZXRBY3RpdmU9e29uSXRlbUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgIDwvQWNjb3JkaW9uQ29udGFpbmVyPlxuICApO1xufTtcblxuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBib2R5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gICksXG59O1xuXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdW5kZWZpbmVkLFxuICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbi9JY29uJztcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRpdGxlLCBMaXN0SXRlbUJvZHkgfSBmcm9tICcuL0FjY29yZGlvbi5jc3MnO1xuXG5jb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXRlbSwgYWN0aXZlLCBzZXRBY3RpdmUgfSkgPT4gKFxuICA8TGlzdEl0ZW0gYWN0aXZlPXthY3RpdmV9PlxuICAgIDxMaXN0SXRlbVRpdGxlXG4gICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGl0ZW0uaWQpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHthY3RpdmUgJiYgPEljb24gaWNvbj1cIm1pbnVzXCIgLz59IHshYWN0aXZlICYmIDxJY29uIGljb249XCJwbHVzXCIgLz59XG4gICAgICA8L3NwYW4+XG4gICAgPC9MaXN0SXRlbVRpdGxlPlxuICAgIDxMaXN0SXRlbUJvZHkgYWN0aXZlPXthY3RpdmV9PntpdGVtLmJvZHl9PC9MaXN0SXRlbUJvZHk+XG4gIDwvTGlzdEl0ZW0+XG4pO1xuXG5BY2NvcmRpb25JdGVtLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBzZXRBY3RpdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5BY2NvcmRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbkl0ZW07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL1VJL0NvbnRhaW5lcic7XG5cbmNvbnN0IEhlcm8gPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGJvdHRvbSB9KSA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q29udGVudCBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAge2JvdHRvbSAmJiA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm90dG9tXCI+e2JvdHRvbX08L2Rpdj59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvV3JhcHBlcj5cbik7XG5cbkhlcm8ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgYm90dG9tOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkhlcm8uZGVmYXVsdFByb3BzID0ge1xuICBib3R0b206IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG5cbiAgLmhlcm8tYm9keSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5oZXJvLWJvdHRvbSB7XG4gICAgaW5wdXQge1xuICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gc3RyaXBVbml0KHByb3BzLnRoZW1lLm1hcmdpbikgLyAyfXB4O1xuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbic7XG5cbmNvbnN0IFBsYW4gPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBjb250ZW50IH0pID0+IChcbiAgPFdyYXBwZXI+XG4gICAgPElubmVyPlxuICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuICAgICAgPFByaWNlPntwcmljZX08L1ByaWNlPlxuICAgICAgPENvbnRlbnQ+e2NvbnRlbnR9PC9Db250ZW50PlxuICAgICAgPEJ1dHRvbnM+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5UcnkgaXQgZm9yIGZyZWU8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9ucz5cbiAgICAgIDxCb3R0b20+Tm8gY3JlZGl0IGNhcmQgbmVlZGVkPC9Cb3R0b20+XG4gICAgPC9Jbm5lcj5cbiAgPC9XcmFwcGVyPlxuKTtcblxuUGxhbi5wcm9wVHlwZXMgPSB7XG4gIC8vIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW47XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmF5fSAxcHggc29saWQ7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmF5fTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbmA7XG5cbmNvbnN0IFByaWNlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAzZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgfVxuYDtcblxuY29uc3QgQm90dG9tID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuYDtcblxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuYDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWRkaW5nfTtcbiAgLyogbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn0gMDtcblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfSAqL1xuXG4gICR7cHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5wcmltYXJ5KSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZ3JheSkge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSGVybyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XG5pbXBvcnQgUGxhbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BsYW4vUGxhbic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvQ29udGFpbmVyJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BY2NvcmRpb24vQWNjb3JkaW9uJztcblxuY29uc3QgcGxhbnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0ZyZWUgVHJpYWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnSnVzdCBnZXR0aW5nIHN0YXJ0ZWQ/IFRyeSBvdXQgdGhlIHBsYXRmb3JtIGZvciBmcmVlLicsXG4gICAgcHJpY2U6ICckMCcsXG4gICAgY29udGVudDogJ0ZvciBjdXN0b21lcnMgd2hvIHdhbnRzIHRvIHRyeSBvdXQgdGhlIHBsYXRmb3JtLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ1NtYWxsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FjY2VwdCB1cCB0byAxNTAgYm9va2luZ3MgYSBtb250aC4nLFxuICAgIHByaWNlOiAnJDI5JyxcbiAgICBjb250ZW50OlxuICAgICAgJ0ZvciBzbWFsbGVyIHJlc3RhdXJhbnRzIHdobyBhY2NlcHRzIGxlc3MgdGhhbiAxNTAgYm9va2luZ3MgcGVyIG1vbnRoJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnUHJlbWl1bScsXG4gICAgZGVzY3JpcHRpb246ICdJbiBuZWVkIG9mIHVubGltaXRlZCBib29raW5ncz8gQ2hvb3NlIHRoZSBwcmVtaXVtIHBsYW4uJyxcbiAgICBwcmljZTogJyQ0OScsXG4gICAgY29udGVudDogJ0ZvciBsYXJnZXIgcmVzdGF1cmFudHMgeW91IG5lZWRzIHVubGltaXRlZCBib29raW5ncyBmb3IgbW9udGguJyxcbiAgfSxcbl07XG5cbmNvbnN0IGZhcXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0NhbiBJIHVwZ3JhZGUgbXkgcGxhbj8nLFxuICAgIGJvZHk6IGBZZXMsIGl0IGlzIHBvc3NpYmxlIHRvIHVwZ3JhZGUgeW91ciBwbGFuIHRvIGFub3RoZXIgcGFja2FnZSBpZiB5b3UgZmluZCB0aGF0IHlvdSBuZWVkIG1vcmUgYm9va2luZ3MuYCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQ2FuIEkgY2FuY2VsIG15IHN1YnNjcmlwdGlvbiB3aGVuZXZlciBJIHdhbnQ/JyxcbiAgICBib2R5OlxuICAgICAgJ1llcywgeW91IG1heSBjYW5jZWwgdGhlIHN1YnNjcmlwdGlvbiB3aGVuZXZlciwgYW5kIHlvdXIgYWNjb3VudCB3aWxsIHJlbWFpbiBhY3RpdmUgZm9yIHRoZSBiaWxsZWQgcGVyaW9kLicsXG4gIH0sXG5dO1xuXG5jb25zdCBQcmljaW5nID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPEhlcm8gdGl0bGU9XCJGb3JrZWUgYm9va2luZyBwbGF0Zm9ybSBwcmljaW5nIHBsYW5zLlwiPlxuICAgICAgPHA+XG4gICAgICAgIENob29zZSBhIHBsYW4gdGhhdCBmaXRzIHlvdS4gTm8gaW5zdGFsbGF0aW9uIGNvc3QsIGVhc3kgc2V0dXAgd2l0aFxuICAgICAgICB1cGRhdGVzIGluY2x1ZGVkLlxuICAgICAgPC9wPlxuICAgIDwvSGVybz5cblxuICAgIDxDb250YWluZXI+XG4gICAgICA8UGxhbnM+e3BsYW5zLm1hcChwbGFuID0+IDxQbGFuIGtleT17cGxhbi5pZH0gey4uLnBsYW59IC8+KX08L1BsYW5zPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPFNlY3Rpb24gZ3JheT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxBY2NvcmRpb24gdGl0bGU9XCJCaWxsaW5nIEZBUXNcIiBpdGVtcz17ZmFxc30gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbj5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmc7XG5cbmNvbnN0IFBsYW5zID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi9QcmljaW5nJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ3ByaWNpbmcnXSxcbiAgICB0aXRsZTogJ1ByaWNpbmcnLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFByaWNpbmcgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQVNBO0FBQUE7QUFRQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQWlCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBR0E7QUFBQTtBQVFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFDQTtBQW9CQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==