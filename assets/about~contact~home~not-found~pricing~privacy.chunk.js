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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _theme_theme__WEBPACK_IMPORTED_MODULE_6__["theme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_css__WEBPACK_IMPORTED_MODULE_5__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setMenuOpen: setMenuOpen,
    menuOpen: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXR+Y29udGFjdH5ob21lfm5vdC1mb3VuZH5wcmljaW5nfnByaXZhY3kuY2h1bmsuanMiLCJzb3VyY2VzIjpbIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0Zvb3Rlci9sb2dvLnBuZyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnBuZyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9MaW5rL0xpbmsuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9VSS9Db250YWluZXIuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvZ2xvYmFsLmNzcy5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvdGhlbWUvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL1VJL0NvbnRhaW5lcic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5wbmcnO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEZvb3RlckNvbHVtbnM+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQ+UHJvZHVjdDwvaDQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5GZWF0dXJlczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3ByaWNpbmdcIj5QcmljaW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZW50ZXJwcmlzZVwiPkVudGVycHJpc2U8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9pbnRlZ3JhdGlvbnNcIj5JbnRlZ3JhdGlvbnM8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PkNvbXBhbnk8L2g0PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJlc3NcIj5QcmVzczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQ+R2V0IGluIHRvdWNoPC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPis0NiAyNyA4MyAxMiAxMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmhlbGxvQGZvcmtlZS5jb208L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9vdGVyQ29sdW1ucz5cbiAgICAgICAgICA8Rm9vdGVyQm90dG9tPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4+QWxsIHJpZ2h0cyByZXNlcnZlZCAtIEZvcmtlZSAyMDE5PC9zcGFuPlxuICAgICAgICAgIDwvRm9vdGVyQm90dG9tPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5kYXJrR3JheX07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuXG4gIGxpIHtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuXG4gICAgc3BhbixcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRm9vdGVyQ29sdW1ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBzdHJpcFVuaXQocHJvcHMudGhlbWUubWFyZ2luKSAvIDJ9cHg7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgRm9vdGVyQm90dG9tID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICB9XG5gO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvRm9vdGVyL2xvZ28ucG5nPzBkMmRhOWM4XCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vVUkvQ29udGFpbmVyJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28ucG5nJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZXRNZW51T3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBtZW51T3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwICYmICF0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgMjAgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYWN0aXZlPXthY3RpdmV9IG1lbnVPcGVuPXt0aGlzLnByb3BzLm1lbnVPcGVufT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SGVhZGVyQ29udGFpbmVyIG1lbnVPcGVuPXt0aGlzLnByb3BzLm1lbnVPcGVufSBhY3RpdmU9e2FjdGl2ZX0+XG4gICAgICAgICAgICA8TGVmdCBtZW51T3Blbj17dGhpcy5wcm9wcy5tZW51T3Blbn0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJGb3JrZWVcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZXI+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNZW51T3BlbighdGhpcy5wcm9wcy5tZW51T3Blbik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGVyPlxuICAgICAgICAgICAgPC9MZWZ0PlxuICAgICAgICAgICAgPE1pZGRsZSBtZW51T3Blbj17dGhpcy5wcm9wcy5tZW51T3Blbn0+XG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8L01pZGRsZT5cbiAgICAgICAgICAgIDxSaWdodCBtZW51T3Blbj17dGhpcy5wcm9wcy5tZW51T3Blbn0+XG4gICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gcHJpbWFyeSBhcz1cImFcIiBocmVmPVwiaHR0cDovL2FwcC5mb3JrZWUuY29tXCI+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICA8L1NpZ25JbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlN0YXJ0IGZyZWUgdHJpYWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xuICB6LWluZGV4OiAxOTA7XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSAmJlxuICAgIGNzc2BcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYH07XG5gO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAxIDE7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLm1lbnVPcGVuICYmXG4gICAgY3NzYFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIGB9O1xuYDtcblxuY29uc3QgTGVmdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyAnMTdweCcgOiAwKX07XG4gIH1cblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1pZGRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXg6IDEgMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLm1lbnVPcGVuID8gJ2ZsZXgnIDogJ25vbmUnKX07XG5cbiAgICA+IGRpdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyAnY29sdW1uJyA6ICdyb3cnKX07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5tZW51T3BlbiA/ICdmbGV4JyA6ICdub25lJyl9O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFkZGluZ30gMDtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25Ub2dnbGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcblxuICBpLFxuICBzdmcge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgU2lnbkluQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxZW07XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5wbmc/NTViOWY5NGZcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gey4uLnJlc3R9IC8+O1xufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4uL2dsb2JhbC5jc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZS90aGVtZSc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPEhlYWRlciBzZXRNZW51T3Blbj17c2V0TWVudU9wZW59IG1lbnVPcGVuPXttZW51T3Blbn0gLz5cbiAgICAgICAgICA8TWFpbkNvbnRlbnQ+e2NoaWxkcmVufTwvTWFpbkNvbnRlbnQ+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhub3JtYWxpemVDc3MsIHMpKExheW91dCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2hpc3RvcnknO1xuXG5mdW5jdGlvbiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5idXR0b24gPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsaWNrOiBudWxsLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0bywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0b30gey4uLnByb3BzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL3ByaWNpbmdcIj5QcmljaW5nPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2hhZGUgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNvbG9yLCBmbHVpZCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8V3JhcHBlciBjb2xvcj17Y29sb3J9IGZsdWlkPXtmbHVpZH0gey4uLnJlc3R9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9XcmFwcGVyPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxuICBwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgd2hpdGU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjb2xvcjogdW5kZWZpbmVkLFxuICBmbHVpZDogZmFsc2UsXG4gIHByaW1hcnk6IGZhbHNlLFxuICB3aGl0ZTogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LWZhbWlseTogMC45ZW07XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7KHsgZmx1aWQgfSkgPT5cbiAgICBmbHVpZCAmJlxuICAgIGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGB9ICR7cHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gJ2JsdWUnIHx8IHByb3BzLnByaW1hcnkpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gc2hhZGUoMC4yLCBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeSl9O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuc2Vjb25kYXJ5KSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHNoYWRlKDAuMiwgcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeSl9O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWVmYzQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjg5NDtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAncHVycGxlJykge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyOWJmZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM1Y2U3O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICdncmF5Jykge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiZWMzO1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICdyZWQnKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFiMWEwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMTcwNTU7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhYTc7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkY2I2ZTtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAncGluaycpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDc5YTg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4NDM5MztcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICB9XG4gICAgaWYgKHByb3BzLndoaXRlKSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogJHtwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmF5fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gc2hhZGUoMC4yLCBwcm9wcy50aGVtZS5jb2xvcnMuZ3JheSl9O1xuICAgICAgfVxuICAgIGA7XG4gIH19XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbi1zcGluIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBidXR0b24tc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICAke3Byb3BzID0+IHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgb3BhY2l0eTogMC40NSAhaW1wb3J0YW50O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9fSAke3Byb3BzID0+IHtcbiAgICBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMHMgbGluZWFyLCBvcGFjaXR5IDAuMXMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDBzIGxpbmVhciwgb3BhY2l0eSAwLjFzIGVhc2U7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICB0b3A6IDQzJTtcbiAgICAgICAgICBsZWZ0OiA0NyU7XG4gICAgICAgICAgbWFyZ2luOiAtMC41ZW0gMCAwIC0wLjVlbTtcbiAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHJlbTtcbiAgICAgICAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHRvcDogNDMlO1xuICAgICAgICAgIGxlZnQ6IDQ3JTtcbiAgICAgICAgICBtYXJnaW46IC0wLjVlbSAwIDAgLTAuNWVtO1xuICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbi1zcGluIDAuNnMgbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uLXNwaW4gMC42cyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MDByZW07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjJlbTtcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDFweCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9fTtcbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8qIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMWVtICFpbXBvcnRhbnQ7ICovXG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8qIHdpZHRoOiA3MjNweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50OyAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIHdpZHRoOiA5MzNweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICB3aWR0aDogMTEyN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyM1NTUnLFxuICAgIHByaW1hcnk6ICcjZTI3ZjZmJyxcbiAgICBzZWNvbmRhcnk6ICdyZWQnLFxuICAgIGRhcmtHcmF5OiAnIzM1MzUzZCcsXG4gICAgZ3JheTogJyNmOGY4ZjgnLFxuICAgIGxpZ2h0R3JheTogJyNlYWVhZWEnLFxuICB9LFxuICBtYXJnaW46ICczMHB4JyxcbiAgcGFkZGluZzogJzMwcHgnLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUExREE7QUFDQTtBQTREQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBOzs7Ozs7O0FDL0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQWZBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7QUEzREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUE0REE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFJQTs7Ozs7OztBQ3pMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUFuQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUZBO0FBUUE7QUFEQTtBQUNBO0FBOEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBVEE7QUFDQTtBQVdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBMEJBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF5Q0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FDeE5BO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFRQTtBQUFBO0FBSUE7QUFBQTs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBVkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==