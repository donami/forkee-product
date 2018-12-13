(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about~contact~home~not-found~pricing~privacy"],{

/***/ "./src/components/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _UI_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Footer/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Footer\\Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterColumns, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Features")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/enterprise",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Enterprise")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/integrations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Integrations")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/press",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Press")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "+46 27 83 12 12")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "hello@forkee.com"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterBottom, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "All rights reserved - Forkee 2019"))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "b708qw-0"
})(["background-color:", ";color:#fff;padding:", ";li{line-height:2em;span,a{color:#fff;opacity:0.5;}}a{color:#fff;&:hover{opacity:1;}}"], function (props) {
  return props.theme.colors.darkGray;
}, function (props) {
  return props.theme.padding;
});
var FooterColumns = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__FooterColumns",
  componentId: "b708qw-1"
})(["display:flex;flex-direction:row;justify-content:space-between;h4{margin-bottom:", "px;}ul{list-style:none;}"], function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_2__["stripUnit"])(props.theme.margin) / 2;
});
var FooterBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__FooterBottom",
  componentId: "b708qw-2"
})(["text-align:center;margin-top:", ";opacity:0.5;display:flex;justify-content:center;align-items:center;img{max-width:120px;}"], function (props) {
  return props.theme.margin;
});

/***/ }),

/***/ "./src/components/Footer/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Footer/logo.png?0d2da9c8";

/***/ }),

/***/ "./src/components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Navigation/Navigation.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/UI/Button.js");
/* harmony import */ var _UI_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Icon/Icon.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Header/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Header\\Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      if (window.scrollY > 20 && !_this.state.active) {
        _this.setState({
          active: true
        });
      } else if (window.scrollY < 20 && _this.state.active) {
        _this.setState({
          active: false
        });
      }
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
        active: active,
        menuOpen: this.props.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainer, {
        menuOpen: this.props.menuOpen,
        active: active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
        menuOpen: this.props.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Forkee",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownToggler, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "bars",
        onClick: function onClick() {
          _this2.props.setMenuOpen(!_this2.props.menuOpen);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
        menuOpen: this.props.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
        menuOpen: this.props.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignInButton, {
        primary: true,
        as: "a",
        href: "http://app.forkee.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Start free trial")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Header, "propTypes", {
  setMenuOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  menuOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
});

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "f43oip-0"
})(["box-shadow:0 0 40px transparent;display:flex;flex-direction:column;position:sticky;top:0;transition:0.2s;transition-property:background-color,color;z-index:190;", ";"], function (props) {
  return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["box-shadow:0 3px 3px -3px rgba(0,0,0,0.1);background-color:#fff;"]);
});
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "f43oip-1"
})(["display:flex;flex-direction:row;flex:1 1;padding:0 30px;min-height:100px;", ";"], function (props) {
  return props.menuOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["@media only screen and (max-width:960px){flex-direction:column;height:100vh;}"]);
});
var Left = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Left",
  componentId: "f43oip-2"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;@media only screen and (max-width:960px){width:100%;justify-content:space-between;margin-top:", ";}img{max-height:60px;}"], function (props) {
  return props.menuOpen ? '17px' : 0;
});
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Middle",
  componentId: "f43oip-3"
})(["display:flex;flex-direction:row;flex:1 1;justify-content:center;align-items:center;@media only screen and (max-width:960px){display:", ";> div{flex-direction:", ";}}"], function (props) {
  return props.menuOpen ? 'flex' : 'none';
}, function (props) {
  return props.menuOpen ? 'column' : 'row';
});
var Right = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Right",
  componentId: "f43oip-4"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;@media only screen and (max-width:960px){display:", ";border-top:1px solid #ececec;padding:", " 0;}"], function (props) {
  return props.menuOpen ? 'flex' : 'none';
}, function (props) {
  return props.theme.padding;
});
var DropdownToggler = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__DropdownToggler",
  componentId: "f43oip-5"
})(["display:none;i,svg{font-size:2em;cursor:pointer;&:hover{color:", ";}}@media only screen and (max-width:960px){display:block;}"], function (props) {
  return props.theme.colors.primary;
});
var SignInButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "Header__SignInButton",
  componentId: "f43oip-6"
})(["margin-right:20px;background-color:transparent;color:#555;font-weight:bold;font-size:1em;&:hover{background-color:transparent;color:", ";}"], function (props) {
  return props.theme.colors.primary;
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo.png?55b9f94f";

/***/ }),

/***/ "./src/components/Icon/Icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Icon\\Icon.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, ["icon"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], _extends({
    icon: icon
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

Icon.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Header/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Footer/Footer.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/global.css.js");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/theme/theme.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/history.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Layout\\Layout.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var cancel = _history__WEBPACK_IMPORTED_MODULE_7__["default"].listen(function () {
      setMenuOpen(false);
    });
    return function () {
      cancel();
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _theme_theme__WEBPACK_IMPORTED_MODULE_6__["theme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_css__WEBPACK_IMPORTED_MODULE_5__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setMenuOpen: setMenuOpen,
    menuOpen: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__Wrapper",
  componentId: "sc-451zsj-0"
})(["display:flex;flex-direction:column;min-height:100vh;"]);
var MainContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__MainContent",
  componentId: "sc-451zsj-1"
})(["flex:1;"]);
/* harmony default export */ __webpack_exports__["default"] = (Layout); // export default withStyles(normalizeCss, s)(Layout);

/***/ }),

/***/ "./src/components/Link/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/history.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Link\\Link.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      _history__WEBPACK_IMPORTED_MODULE_2__["default"].push(_this.props.to);
    });

    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["to", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
        href: to
      }, props, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), children);
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Link, "propTypes", {
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(Link, "defaultProps", {
  onClick: null
});

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Link/Link.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Navigation\\Navigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigation).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Pricing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Contact"));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Navigation__Wrapper",
  componentId: "sc-1txg1td-0"
})(["display:flex;flex-direction:row;width:100%;justify-content:center;> *{display:block;padding:30px;}a{color:", ";font-weight:600;&:hover{color:", ";}}"], function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.primary;
});

/***/ }),

/***/ "./src/components/UI/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\UI\\Button.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var Button = function Button(_ref) {
  var color = _ref.color,
      fluid = _ref.fluid,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["color", "fluid", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, _extends({
    color: color,
    fluid: fluid
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Button.defaultProps = {
  children: undefined,
  color: undefined,
  fluid: false,
  primary: false,
  white: false,
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Button__Wrapper",
  componentId: "sc-1gpm6wj-0"
})(["color:#fff;border:none;padding:10px 15px;border-radius:3px;font-family:0.9em;font-family:'Poppins',Arial,Helvetica,sans-serif;transition:all 300ms ease-in-out;cursor:pointer;", " ", " @-webkit-keyframes button-spin{from{transform:rotate(0);}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes button-spin{from{-webkit-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}", " ", ";"], function (_ref2) {
  var fluid = _ref2.fluid;
  return fluid && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:100%;"]);
}, function (props) {
  if (props.color === 'blue' || props.primary) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";&:hover{background-color:", ";}"], function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return Object(polished__WEBPACK_IMPORTED_MODULE_3__["shade"])(0.2, props.theme.colors.primary);
    });
  }

  if (props.secondary) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";&:hover{background-color:", ";}"], function (props) {
      return props.theme.colors.secondary;
    }, function (props) {
      return Object(polished__WEBPACK_IMPORTED_MODULE_3__["shade"])(0.2, props.theme.colors.secondary);
    });
  }

  if (props.color === 'green') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#55efc4;&:hover{background-color:#00b894;}"]);
  }

  if (props.color === 'purple') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#a29bfe;&:hover{background-color:#6c5ce7;}"]);
  }

  if (props.color === 'gray') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#dfe6e9;&:hover{background-color:#b2bec3;}"]);
  }

  if (props.color === 'red') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#fab1a0;&:hover{background-color:#e17055;}"]);
  }

  if (props.color === 'yellow') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#ffeaa7;&:hover{background-color:#fdcb6e;}"]);
  }

  if (props.color === 'pink') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#fd79a8;&:hover{background-color:#e84393;}"]);
  }

  if (props.white) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:#fff;color:", ";&:hover{background-color:", ";}"], props.theme.colors.text, props.theme.colors.gray);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";&:hover{background-color:", ";}"], function (props) {
    return props.theme.colors.gray;
  }, function (props) {
    return Object(polished__WEBPACK_IMPORTED_MODULE_3__["shade"])(0.2, props.theme.colors.gray);
  });
}, function (props) {
  if (props.disabled) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["cursor:default;opacity:0.45 !important;pointer-events:none;box-shadow:none;"]);
  }

  return null;
}, function (props) {
  if (props.loading) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["position:relative;cursor:default;text-shadow:none !important;color:transparent !important;opacity:1;pointer-events:auto;-webkit-transition:all 0s linear,opacity 0.1s ease;transition:all 0s linear,opacity 0.1s ease;&:before{position:absolute;content:'';top:43%;left:47%;margin:-0.5em 0 0 -0.5em;width:1em;height:1em;border-radius:500rem;border:0.2em solid rgba(0,0,0,0.15);}&:after{position:absolute;content:'';top:43%;left:47%;margin:-0.5em 0 0 -0.5em;width:1em;height:1em;-webkit-animation:button-spin 0.6s linear;animation:button-spin 0.6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#fff transparent transparent;border-style:solid;border-width:0.2em;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent;}"]);
  }

  return null;
});

/***/ }),

/***/ "./src/components/UI/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Container",
  componentId: "sc-1fvaziw-0"
})(["display:block;max-width:100% !important;@media only screen and (max-width:767px){width:90%;margin:0 auto;}@media only screen and (max-width:991px) and (min-width:768px){width:90%;margin:0 auto;}@media only screen and (max-width:1199px) and (min-width:992px){width:933px;margin-left:auto !important;margin-right:auto !important;}@media only screen and (min-width:1200px){width:1127px;margin-left:auto !important;margin-right:auto !important;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/global.css.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    color: ", ";\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // eslint-disable-next-line import/prefer-default-export

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.primary;
});

/***/ }),

/***/ "./src/theme/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
// eslint-disable-next-line import/prefer-default-export
var theme = {
  colors: {
    text: '#555',
    primary: '#e27f6f',
    secondary: 'red',
    darkGray: '#35353d',
    gray: '#f8f8f8',
    lightGray: '#eaeaea'
  },
  margin: '30px',
  padding: '30px'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXR+Y29udGFjdH5ob21lfm5vdC1mb3VuZH5wcmljaW5nfnByaXZhY3kuY2h1bmsuanMiLCJzb3VyY2VzIjpbIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0Zvb3Rlci9sb2dvLnBuZyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnBuZyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9VSS9Db250YWluZXIuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvZ2xvYmFsLmNzcy5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvdGhlbWUvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL1VJL0NvbnRhaW5lcic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5wbmcnO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEZvb3RlckNvbHVtbnM+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQ+UHJvZHVjdDwvaDQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5GZWF0dXJlczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3ByaWNpbmdcIj5QcmljaW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZW50ZXJwcmlzZVwiPkVudGVycHJpc2U8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9pbnRlZ3JhdGlvbnNcIj5JbnRlZ3JhdGlvbnM8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PkNvbXBhbnk8L2g0PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJlc3NcIj5QcmVzczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQ+R2V0IGluIHRvdWNoPC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPis0NiAyNyA4MyAxMiAxMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmhlbGxvQGZvcmtlZS5jb208L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9vdGVyQ29sdW1ucz5cbiAgICAgICAgICA8Rm9vdGVyQm90dG9tPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4+QWxsIHJpZ2h0cyByZXNlcnZlZCAtIEZvcmtlZSAyMDE5PC9zcGFuPlxuICAgICAgICAgIDwvRm9vdGVyQm90dG9tPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5kYXJrR3JheX07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuXG4gIGxpIHtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuXG4gICAgc3BhbixcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRm9vdGVyQ29sdW1ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBzdHJpcFVuaXQocHJvcHMudGhlbWUubWFyZ2luKSAvIDJ9cHg7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgRm9vdGVyQm90dG9tID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICB9XG5gO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvRm9vdGVyL2xvZ28ucG5nPzBkMmRhOWM4XCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vVUkvQ29udGFpbmVyJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28ucG5nJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZXRNZW51T3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBtZW51T3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwICYmICF0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgMjAgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYWN0aXZlPXthY3RpdmV9IG1lbnVPcGVuPXt0aGlzLnByb3BzLm1lbnVPcGVufT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SGVhZGVyQ29udGFpbmVyIG1lbnVPcGVuPXt0aGlzLnByb3BzLm1lbnVPcGVufSBhY3RpdmU9e2FjdGl2ZX0+XG4gICAgICAgICAgICA8TGVmdCBtZW51T3Blbj17dGhpcy5wcm9wcy5tZW51T3Blbn0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJGb3JrZWVcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZXI+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNZW51T3BlbighdGhpcy5wcm9wcy5tZW51T3Blbik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGVyPlxuICAgICAgICAgICAgPC9MZWZ0PlxuICAgICAgICAgICAgPE1pZGRsZSBtZW51T3Blbj17dGhpcy5wcm9wcy5tZW51T3Blbn0+XG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8L01pZGRsZT5cbiAgICAgICAgICAgIDxSaWdodCBtZW51T3Blbj17dGhpcy5wcm9wcy5tZW51T3Blbn0+XG4gICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gcHJpbWFyeSBhcz1cImFcIiBocmVmPVwiaHR0cDovL2FwcC5mb3JrZWUuY29tXCI+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICA8L1NpZ25JbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlN0YXJ0IGZyZWUgdHJpYWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xuICB6LWluZGV4OiAxOTA7XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSAmJlxuICAgIGNzc2BcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYH07XG5gO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAxIDE7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLm1lbnVPcGVuICYmXG4gICAgY3NzYFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIGB9O1xuYDtcblxuY29uc3QgTGVmdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyAnMTdweCcgOiAwKX07XG4gIH1cblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1pZGRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXg6IDEgMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLm1lbnVPcGVuID8gJ2ZsZXgnIDogJ25vbmUnKX07XG5cbiAgICA+IGRpdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyAnY29sdW1uJyA6ICdyb3cnKX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5tZW51T3BlbiA/ICdmbGV4JyA6ICdub25lJyl9O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFkZGluZ30gMDtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25Ub2dnbGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcblxuICBpLFxuICBzdmcge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgU2lnbkluQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxZW07XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5wbmc/NTViOWY5NGZcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gey4uLnJlc3R9IC8+O1xufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi4vZ2xvYmFsLmNzcyc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lL3RoZW1lJztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2hpc3RvcnknO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FuY2VsID0gaGlzdG9yeS5saXN0ZW4oKCkgPT4ge1xuICAgICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxIZWFkZXIgc2V0TWVudU9wZW49e3NldE1lbnVPcGVufSBtZW51T3Blbj17bWVudU9wZW59IC8+XG4gICAgICAgICAgPE1haW5Db250ZW50PntjaGlsZHJlbn08L01haW5Db250ZW50PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IE1haW5Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobm9ybWFsaXplQ3NzLCBzKShMYXlvdXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5JztcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbGljazogbnVsbCxcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoaXN0b3J5LnB1c2godGhpcy5wcm9wcy50byk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17dG99IHsuLi5wcm9wc30gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9wcmljaW5nXCI+UHJpY2luZzwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gID4gKiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNoYWRlIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjb2xvciwgZmx1aWQsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgPFdyYXBwZXIgY29sb3I9e2NvbG9yfSBmbHVpZD17Zmx1aWR9IHsuLi5yZXN0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvV3JhcHBlcj5cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG4gIHdoaXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sb3I6IHVuZGVmaW5lZCxcbiAgZmx1aWQ6IGZhbHNlLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgd2hpdGU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1mYW1pbHk6IDAuOWVtO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAkeyh7IGZsdWlkIH0pID0+XG4gICAgZmx1aWQgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgfSAke3Byb3BzID0+IHtcbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICdibHVlJyB8fCBwcm9wcy5wcmltYXJ5KSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHNoYWRlKDAuMiwgcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkpfTtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLnNlY29uZGFyeSkge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICBzaGFkZSgwLjIsIHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnkpfTtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAnZ3JlZW4nKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVlZmM0O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGI4OTQ7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gJ3B1cnBsZScpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjliZmU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNWNlNztcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAnZ3JheScpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZTk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmVjMztcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAncmVkJykge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYjFhMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTE3MDU1O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICd5ZWxsb3cnKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYWE3O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGNiNmU7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gJ3BpbmsnKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ3OWE4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlODQzOTM7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIGlmIChwcm9wcy53aGl0ZSkge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMudGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JheX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHNoYWRlKDAuMiwgcHJvcHMudGhlbWUuY29sb3JzLmdyYXkpfTtcbiAgICAgIH1cbiAgICBgO1xuICB9fVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBidXR0b24tc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnV0dG9uLXNwaW4ge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgJHtwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNDUgIWltcG9ydGFudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfX0gJHtwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDBzIGxpbmVhciwgb3BhY2l0eSAwLjFzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwcyBsaW5lYXIsIG9wYWNpdHkgMC4xcyBlYXNlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgdG9wOiA0MyU7XG4gICAgICAgICAgbGVmdDogNDclO1xuICAgICAgICAgIG1hcmdpbjogLTAuNWVtIDAgMCAtMC41ZW07XG4gICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MDByZW07XG4gICAgICAgICAgYm9yZGVyOiAwLjJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICB0b3A6IDQzJTtcbiAgICAgICAgICBsZWZ0OiA0NyU7XG4gICAgICAgICAgbWFyZ2luOiAtMC41ZW0gMCAwIC0wLjVlbTtcbiAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b24tc3BpbiAwLjZzIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbi1zcGluIDAuNnMgbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcmVtO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMC4yZW07XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfX07XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAvKiB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbSAhaW1wb3J0YW50OyAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAvKiB3aWR0aDogNzIzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDsgKi9cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICB3aWR0aDogOTMzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgd2lkdGg6IDExMjdweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjNTU1JyxcbiAgICBwcmltYXJ5OiAnI2UyN2Y2ZicsXG4gICAgc2Vjb25kYXJ5OiAncmVkJyxcbiAgICBkYXJrR3JheTogJyMzNTM1M2QnLFxuICAgIGdyYXk6ICcjZjhmOGY4JyxcbiAgICBsaWdodEdyYXk6ICcjZWFlYWVhJyxcbiAgfSxcbiAgbWFyZ2luOiAnMzBweCcsXG4gIHBhZGRpbmc6ICczMHB4Jyxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7O0FBMURBO0FBQ0E7QUE0REE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTs7Ozs7OztBQy9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFmQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7O0FBM0RBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBNERBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBSUE7Ozs7Ozs7QUN6TEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQW5DQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7QUFRQTtBQURBO0FBQ0E7QUE4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFUQTtBQUNBO0FBV0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUEwQkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXlDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUN4TkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFpQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTtBQVFBO0FBQUE7QUFJQTtBQUFBOzs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFWQTs7OztBIiwic291cmNlUm9vdCI6IiJ9