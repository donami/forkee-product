(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

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

/***/ "./src/components/Hub/Hub.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _UI_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/UI/Button.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Hub\\Hub.js";






var Hub = function Hub() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "We play well with others"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HubHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Forkee is an easy plug and play booking platform, that you can easily integrate on your resturant's site. Customize opening times and guest capacity easily in the built in admin platform."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Connect your tools")));
};

/* harmony default export */ __webpack_exports__["default"] = (Hub);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hub__Wrapper",
  componentId: "sc-178hxj1-0"
})(["font-size:1em;"]);
var SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hub__SubHeading",
  componentId: "sc-178hxj1-1"
})(["font-size:1.2em;margin-bottom:", "px;"], function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["stripUnit"])(props.theme.margin) / 2;
});
var HubHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hub__HubHeading",
  componentId: "sc-178hxj1-2"
})(["max-width:70%;font-size:1.8em;line-height:1.5em;letter-spacing:2px;margin-bottom:", "px;"], function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["stripUnit"])(props.theme.margin) / 2;
});
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hub__Bottom",
  componentId: "sc-178hxj1-3"
})([""]);

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

/***/ "./src/components/Try/Try.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _UI_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/UI/Input.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/UI/Button.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Try\\Try.js";






var Try = function Try() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TryNow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Try Forkee today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Experience the simple and effective way of handling your table bookings."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    white: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Try now")));
};

/* harmony default export */ __webpack_exports__["default"] = (Try);
var TryNow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Try__TryNow",
  componentId: "f1hsz9-0"
})(["text-align:center;h2{margin-bottom:", ";font-size:2.2em;font-size:400;}p{margin-bottom:", ";font-size:1.4em;}input{background:", ";border-color:", ";outline:none;color:#fff;min-width:20%;margin-right:", "px;&:hover{border-color:", ";}&:focus{border-color:#fff;}}.bottom{}"], function (props) {
  return props.theme.margin;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_2__["shade"])(0.1, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_2__["stripUnit"])(props.theme.margin) / 2;
}, function (props) {
  return props.theme.colors.gray;
});

/***/ }),

/***/ "./src/components/UI/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "Input",
  componentId: "sc-1kx6oar-0"
})(["background-color:#fff;padding:10px 15px;font-family:'Poppins',Arial,Helvetica,sans-serif;border:#eaeaea 1px solid;outline:0;margin-bottom:10px;color:#636e72;border-radius:3px;", " &:focus{border-color:#85b7d9;box-shadow:0 0 0 0 rgba(34,36,38,0.35) inset;}"], function (props) {
  return props.fluid && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:calc(100% - 30px);"]);
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Hero/Hero.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _components_Section_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Section/Section.js");
/* harmony import */ var _components_Hub_Hub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Hub/Hub.js");
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/UI/Button.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/UI/Input.js");
/* harmony import */ var _components_Try_Try__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Try/Try.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\home\\Home.js";










var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Let ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Forkee"), " handle your bookings."),
    bottom: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Sign up")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "The all you need booking platform that takes care of your resturant bookings need.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gray: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hub_Hub__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Why use Forkee?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Save time using Forkee.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Easy to setup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Getting started with Forkee is easy. Within 5 minutes after signing up you should be ready to go. No tech experience is needed.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Save Time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Save time by using Forkee by letting your guests do their booking online instead of answering phone calls or replying to emails.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "We have support ready to answer your questions and help you in case you experience any problems."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Try_Try__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__FeatureList",
  componentId: "sc-19mbsce-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:", ";@media only screen and (max-width:960px){grid-template-columns:1fr;}"], function (props) {
  return props.theme.padding;
});
var FeatureBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__FeatureBox",
  componentId: "sc-19mbsce-1"
})(["padding:", ";border:", " 1px solid;background:#fafafa;border-radius:10px;color:#777;h3{color:", ";margin-bottom:", ";font-weight:400;}"], function (props) {
  return props.theme.padding;
}, function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.margin;
});

/***/ }),

/***/ "./src/routes/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/home/Home.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\home\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





function action() {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              title: 'Bookings made easy',
              chunks: ['home'],
              component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                },
                __self: this
              }))
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jaHVuay5qcyIsInNvdXJjZXMiOlsiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0hlcm8vSGVyby5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9IdWIvSHViLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9UcnkvVHJ5LmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1VJL0lucHV0LmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9yb3V0ZXMvaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL1VJL0NvbnRhaW5lcic7XG5cbmNvbnN0IEhlcm8gPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGJvdHRvbSB9KSA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q29udGVudCBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAge2JvdHRvbSAmJiA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm90dG9tXCI+e2JvdHRvbX08L2Rpdj59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvV3JhcHBlcj5cbik7XG5cbkhlcm8ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgYm90dG9tOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkhlcm8uZGVmYXVsdFByb3BzID0ge1xuICBib3R0b206IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG5cbiAgLmhlcm8tYm9keSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5oZXJvLWJvdHRvbSB7XG4gICAgaW5wdXQge1xuICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gc3RyaXBVbml0KHByb3BzLnRoZW1lLm1hcmdpbikgLyAyfXB4O1xuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9VSS9Db250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nO1xuaW1wb3J0IHsgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBIdWIgPSAoKSA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxTdWJIZWFkaW5nPldlIHBsYXkgd2VsbCB3aXRoIG90aGVyczwvU3ViSGVhZGluZz5cbiAgICA8SHViSGVhZGluZz5cbiAgICAgIEZvcmtlZSBpcyBhbiBlYXN5IHBsdWcgYW5kIHBsYXkgYm9va2luZyBwbGF0Zm9ybSwgdGhhdCB5b3UgY2FuIGVhc2lseVxuICAgICAgaW50ZWdyYXRlIG9uIHlvdXIgcmVzdHVyYW50J3Mgc2l0ZS4gQ3VzdG9taXplIG9wZW5pbmcgdGltZXMgYW5kIGd1ZXN0XG4gICAgICBjYXBhY2l0eSBlYXNpbHkgaW4gdGhlIGJ1aWx0IGluIGFkbWluIHBsYXRmb3JtLlxuICAgIDwvSHViSGVhZGluZz5cbiAgICA8Qm90dG9tPlxuICAgICAgPEJ1dHRvbiBwcmltYXJ5PkNvbm5lY3QgeW91ciB0b29sczwvQnV0dG9uPlxuICAgIDwvQm90dG9tPlxuICA8L1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIdWI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDFlbTtcbmA7XG5cbmNvbnN0IFN1YkhlYWRpbmcgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHN0cmlwVW5pdChwcm9wcy50aGVtZS5tYXJnaW4pIC8gMn1weDtcbmA7XG5cbmNvbnN0IEh1YkhlYWRpbmcgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHN0cmlwVW5pdChwcm9wcy50aGVtZS5tYXJnaW4pIC8gMn1weDtcbmA7XG5cbmNvbnN0IEJvdHRvbSA9IHN0eWxlZC5kaXZgYDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWRkaW5nfTtcbiAgLyogbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn0gMDtcblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfSAqL1xuXG4gICR7cHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5wcmltYXJ5KSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBgO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZ3JheSkge1xuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2hhZGUsIHN0cmlwVW5pdCB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IElucHV0IGZyb20gJy4uL1VJL0lucHV0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uJztcblxuY29uc3QgVHJ5ID0gKCkgPT4gKFxuICA8VHJ5Tm93PlxuICAgIDxoMj5UcnkgRm9ya2VlIHRvZGF5PC9oMj5cbiAgICA8cD5cbiAgICAgIEV4cGVyaWVuY2UgdGhlIHNpbXBsZSBhbmQgZWZmZWN0aXZlIHdheSBvZiBoYW5kbGluZyB5b3VyIHRhYmxlIGJvb2tpbmdzLlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgPElucHV0IC8+XG4gICAgICA8QnV0dG9uIHdoaXRlPlRyeSBub3c8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9UcnlOb3c+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUcnk7XG5cbmNvbnN0IFRyeU5vdyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXJnaW59O1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgZm9udC1zaXplOiA0MDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHNoYWRlKDAuMSwgcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnkpfTtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyYXl9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWluLXdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IHN0cmlwVW5pdChwcm9wcy50aGVtZS5tYXJnaW4pIC8gMn1weDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAuYm90dG9tIHtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICNlYWVhZWEgMXB4IHNvbGlkO1xuICBvdXRsaW5lOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzYzNmU3MjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5mbHVpZCAmJlxuICAgIGNzc2BcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBgfSAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4NWI3ZDk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDM0LCAzNiwgMzgsIDAuMzUpIGluc2V0O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZXJvL0hlcm8nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbic7XG5pbXBvcnQgSHViIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSHViL0h1Yic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvQnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0lucHV0JztcbmltcG9ydCBUcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcnkvVHJ5JztcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVyb1xuICAgICAgdGl0bGU9e1xuICAgICAgICA8PlxuICAgICAgICAgIExldCA8c3Bhbj5Gb3JrZWU8L3NwYW4+IGhhbmRsZSB5b3VyIGJvb2tpbmdzLlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIGJvdHRvbT17XG4gICAgICAgIDw+XG4gICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlNpZ24gdXA8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBhbGwgeW91IG5lZWQgYm9va2luZyBwbGF0Zm9ybSB0aGF0IHRha2VzIGNhcmUgb2YgeW91ciByZXN0dXJhbnRcbiAgICAgICAgYm9va2luZ3MgbmVlZC5cbiAgICAgIDwvcD5cbiAgICA8L0hlcm8+XG5cbiAgICA8U2VjdGlvbiBncmF5PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEh1YiAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVybyB0aXRsZT1cIldoeSB1c2UgRm9ya2VlP1wiPlxuICAgICAgICAgIDxwPlNhdmUgdGltZSB1c2luZyBGb3JrZWUuPC9wPlxuICAgICAgICA8L0hlcm8+XG4gICAgICAgIDxGZWF0dXJlTGlzdD5cbiAgICAgICAgICA8RmVhdHVyZUJveD5cbiAgICAgICAgICAgIDxoMz5FYXN5IHRvIHNldHVwPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBHZXR0aW5nIHN0YXJ0ZWQgd2l0aCBGb3JrZWUgaXMgZWFzeS4gV2l0aGluIDUgbWludXRlcyBhZnRlclxuICAgICAgICAgICAgICBzaWduaW5nIHVwIHlvdSBzaG91bGQgYmUgcmVhZHkgdG8gZ28uIE5vIHRlY2ggZXhwZXJpZW5jZSBpc1xuICAgICAgICAgICAgICBuZWVkZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9GZWF0dXJlQm94PlxuICAgICAgICAgIDxGZWF0dXJlQm94PlxuICAgICAgICAgICAgPGgzPlNhdmUgVGltZTwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU2F2ZSB0aW1lIGJ5IHVzaW5nIEZvcmtlZSBieSBsZXR0aW5nIHlvdXIgZ3Vlc3RzIGRvIHRoZWlyIGJvb2tpbmdcbiAgICAgICAgICAgICAgb25saW5lIGluc3RlYWQgb2YgYW5zd2VyaW5nIHBob25lIGNhbGxzIG9yIHJlcGx5aW5nIHRvIGVtYWlscy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0ZlYXR1cmVCb3g+XG4gICAgICAgICAgPEZlYXR1cmVCb3g+XG4gICAgICAgICAgICA8aDM+U3VwcG9ydDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgV2UgaGF2ZSBzdXBwb3J0IHJlYWR5IHRvIGFuc3dlciB5b3VyIHF1ZXN0aW9ucyBhbmQgaGVscCB5b3UgaW5cbiAgICAgICAgICAgICAgY2FzZSB5b3UgZXhwZXJpZW5jZSBhbnkgcHJvYmxlbXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9GZWF0dXJlQm94PlxuICAgICAgICA8L0ZlYXR1cmVMaXN0PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24gcHJpbWFyeT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUcnkgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5jb25zdCBGZWF0dXJlTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuYDtcblxuY29uc3QgRmVhdHVyZUJveCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFkZGluZ307XG4gIGJvcmRlcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JheX0gMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzc3NztcblxuICBoMyB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQm9va2luZ3MgbWFkZSBlYXN5JyxcbiAgICBjaHVua3M6IFsnaG9tZSddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhvbWUgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQWlCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBQ0E7QUFhQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBO0FBWUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFBQTs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTdEQTtBQUNBO0FBa0VBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBWUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==