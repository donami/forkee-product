(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./src/components/Feature/Feature.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\components\\Feature\\Feature.js";





var Feature = function Feature(_ref) {
  var image = _ref.image,
      imageAlign = _ref.imageAlign,
      title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureContainer, {
    imageAlign: imageAlign,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, title), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
};

Feature.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  imageAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
Feature.defaultProps = {
  imageAlign: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Feature);
var FeatureContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Feature__FeatureContainer",
  componentId: "eaw79l-0"
})(["display:flex;flex-wrap:wrap;flex-direction:", ";@media screen and (max-width:960px){flex-direction:row-reverse;}"], function (props) {
  return props.imageAlign === 'left' ? 'row-reverse' : 'row';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Feature__Image",
  componentId: "eaw79l-1"
})(["align-self:center;padding:0 ", "px;flex:1;@media screen and (max-width:960px){flex:0 0 auto;width:100%;text-align:center;img{max-width:70% !important;margin-top:", ";}}img{border-radius:10px;box-shadow:0 10px 10px 10px #f9f9f9;padding:", ";max-width:calc(100% - ", "px);}"], function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["stripUnit"])(props.theme.padding) / 2;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return props.theme.padding;
}, function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["stripUnit"])(props.theme.padding) * 2;
});
var Body = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Feature__Body",
  componentId: "eaw79l-2"
})(["padding:0 ", "px;flex:1;display:flex;flex-direction:column;justify-content:center;@media screen and (max-width:960px){flex:0 0 auto;width:100%;}h3{color:", ";margin-bottom:", ";font-size:1.4em;}p{line-height:1.8em;margin-bottom:1.5em;}"], function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["stripUnit"])(props.theme.padding) / 2;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.margin;
});

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

/***/ "./src/routes/about/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Hero/Hero.js");
/* harmony import */ var _components_Try_Try__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Try/Try.js");
/* harmony import */ var _components_Feature_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Feature/Feature.js");
/* harmony import */ var _components_Section_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Section/Section.js");
/* harmony import */ var _forkee_bookings_JPG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/routes/about/forkee-bookings.JPG");
/* harmony import */ var _forkee_bookings_JPG__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_forkee_bookings_JPG__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _login_page_JPG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/routes/about/login-page.JPG");
/* harmony import */ var _login_page_JPG__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_login_page_JPG__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\about\\About.js";









var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Bookings done with ease.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Let Forkee to take care of your table bookings. Forkee makes table bookings simpler and easier than ever before."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gray: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feature_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Plug and Play.",
    imageAlign: "right",
    image: _forkee_bookings_JPG__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Forkee is extremely easy to use. Almost no programming knowledge is needed. It only takes 5 minutes to get started!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feature_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Administration.",
    imageAlign: "left",
    image: _login_page_JPG__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Configuring your booking implementation is really ease, using the administrator page.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feature_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Customize Appearance",
    imageAlign: "right",
    image: _forkee_bookings_JPG__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Customize the look and feel with ease, using the admin page.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feature_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Opening Times & Capacity",
    imageAlign: "left",
    image: _login_page_JPG__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Configure the days when the resturant is open for booking. Provide the opening times and set up custom dates when the resturants opening time differ."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "You can also configure the amount of guests you can have booked at one time.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Try_Try__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/routes/about/forkee-bookings.JPG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/about/forkee-bookings.JPG?28a3989e";

/***/ }),

/***/ "./src/routes/about/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/about/About.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\about\\index.js";




function action() {
  return {
    chunks: ['about'],
    title: 'About',
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/about/login-page.JPG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/about/login-page.JPG?e75b92a1";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9GZWF0dXJlL0ZlYXR1cmUuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9UcnkvVHJ5LmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL1VJL0lucHV0LmpzIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9yb3V0ZXMvYWJvdXQvQWJvdXQuanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL3JvdXRlcy9hYm91dC9mb3JrZWUtYm9va2luZ3MuSlBHIiwiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9yb3V0ZXMvYWJvdXQvaW5kZXguanMiLCJDOi9kZXYvZm9ya2VlLXByb2R1Y3Qvc3JjL3JvdXRlcy9hYm91dC9sb2dpbi1wYWdlLkpQRyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBGZWF0dXJlID0gKHsgaW1hZ2UsIGltYWdlQWxpZ24sIHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZlYXR1cmVDb250YWluZXIgaW1hZ2VBbGlnbj17aW1hZ2VBbGlnbn0+XG4gICAgICA8Qm9keT5cbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JvZHk+XG4gICAgICA8SW1hZ2U+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgIDwvSW1hZ2U+XG4gICAgPC9GZWF0dXJlQ29udGFpbmVyPlxuICApO1xufTtcblxuRmVhdHVyZS5wcm9wVHlwZXMgPSB7XG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuRmVhdHVyZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGltYWdlQWxpZ246ICdsZWZ0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XG5cbmNvbnN0IEZlYXR1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaW1hZ2VBbGlnbiA9PT0gJ2xlZnQnID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnfTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gIC8qID4gZGl2IHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH0gKi9cbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAwICR7cHJvcHMgPT4gc3RyaXBVbml0KHByb3BzLnRoZW1lLnBhZGRpbmcpIC8gMn1weDtcbiAgZmxleDogMTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXJnaW59O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAxMHB4ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWRkaW5nfTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gc3RyaXBVbml0KHByb3BzLnRoZW1lLnBhZGRpbmcpICogMn1weCk7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgfVxuYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAgJHtwcm9wcyA9PiBzdHJpcFVuaXQocHJvcHMudGhlbWUucGFkZGluZykgLyAyfXB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxuXG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdHJpcFVuaXQgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vVUkvQ29udGFpbmVyJztcblxuY29uc3QgSGVybyA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgYm90dG9tIH0pID0+IChcbiAgPFdyYXBwZXI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb250ZW50IGNsYXNzTmFtZT1cImhlcm8tY29udGVudFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVyby1oZWFkaW5nXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICB7Ym90dG9tICYmIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib3R0b21cIj57Ym90dG9tfTwvZGl2Pn1cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9XcmFwcGVyPlxuKTtcblxuSGVyby5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBib3R0b206IFByb3BUeXBlcy5ub2RlLFxufTtcblxuSGVyby5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvdHRvbTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufTtcbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDAgYXV0bztcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cblxuICAuaGVyby1ib2R5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmhlcm8tYm90dG9tIHtcbiAgICBpbnB1dCB7XG4gICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBzdHJpcFVuaXQocHJvcHMudGhlbWUubWFyZ2luKSAvIDJ9cHg7XG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhZGRpbmd9O1xuICAvKiBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufSAwO1xuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9ICovXG5cbiAgJHtwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLnByaW1hcnkpIHtcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGA7XG4gICAgfVxuICAgIGlmIChwcm9wcy5ncmF5KSB7XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzLnRoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzaGFkZSwgc3RyaXBVbml0IH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vVUkvSW5wdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nO1xuXG5jb25zdCBUcnkgPSAoKSA9PiAoXG4gIDxUcnlOb3c+XG4gICAgPGgyPlRyeSBGb3JrZWUgdG9kYXk8L2gyPlxuICAgIDxwPlxuICAgICAgRXhwZXJpZW5jZSB0aGUgc2ltcGxlIGFuZCBlZmZlY3RpdmUgd2F5IG9mIGhhbmRsaW5nIHlvdXIgdGFibGUgYm9va2luZ3MuXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICA8SW5wdXQgLz5cbiAgICAgIDxCdXR0b24gd2hpdGU+VHJ5IG5vdzwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L1RyeU5vdz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRyeTtcblxuY29uc3QgVHJ5Tm93ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcmdpbn07XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICBmb250LXNpemU6IDQwMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufTtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gc2hhZGUoMC4xLCBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeSl9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtaW4td2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gc3RyaXBVbml0KHByb3BzLnRoZW1lLm1hcmdpbikgLyAyfXB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyYXl9O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20ge1xuICB9XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogI2VhZWFlYSAxcHggc29saWQ7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNjM2ZTcyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmZsdWlkICYmXG4gICAgY3NzYFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIGB9ICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzg1YjdkOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgMC4zNSkgaW5zZXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lcic7XG5pbXBvcnQgSGVybyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XG5pbXBvcnQgVHJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJ5L1RyeSc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZlYXR1cmUvRmVhdHVyZSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbic7XG5pbXBvcnQgYm9va2luZ3MgZnJvbSAnLi9mb3JrZWUtYm9va2luZ3MuSlBHJztcbmltcG9ydCBsb2dpblBhZ2UgZnJvbSAnLi9sb2dpbi1wYWdlLkpQRyc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZXJvIHRpdGxlPVwiQm9va2luZ3MgZG9uZSB3aXRoIGVhc2UuXCI+XG4gICAgICBMZXQgRm9ya2VlIHRvIHRha2UgY2FyZSBvZiB5b3VyIHRhYmxlIGJvb2tpbmdzLiBGb3JrZWUgbWFrZXMgdGFibGVcbiAgICAgIGJvb2tpbmdzIHNpbXBsZXIgYW5kIGVhc2llciB0aGFuIGV2ZXIgYmVmb3JlLlxuICAgIDwvSGVybz5cblxuICAgIDxTZWN0aW9uIGdyYXk+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8RmVhdHVyZSB0aXRsZT1cIlBsdWcgYW5kIFBsYXkuXCIgaW1hZ2VBbGlnbj1cInJpZ2h0XCIgaW1hZ2U9e2Jvb2tpbmdzfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZvcmtlZSBpcyBleHRyZW1lbHkgZWFzeSB0byB1c2UuIEFsbW9zdCBubyBwcm9ncmFtbWluZyBrbm93bGVkZ2UgaXNcbiAgICAgICAgICAgIG5lZWRlZC4gSXQgb25seSB0YWtlcyA1IG1pbnV0ZXMgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZlYXR1cmU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxGZWF0dXJlIHRpdGxlPVwiQWRtaW5pc3RyYXRpb24uXCIgaW1hZ2VBbGlnbj1cImxlZnRcIiBpbWFnZT17bG9naW5QYWdlfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIENvbmZpZ3VyaW5nIHlvdXIgYm9va2luZyBpbXBsZW1lbnRhdGlvbiBpcyByZWFsbHkgZWFzZSwgdXNpbmcgdGhlXG4gICAgICAgICAgICBhZG1pbmlzdHJhdG9yIHBhZ2UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZlYXR1cmU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG5cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxGZWF0dXJlXG4gICAgICAgICAgdGl0bGU9XCJDdXN0b21pemUgQXBwZWFyYW5jZVwiXG4gICAgICAgICAgaW1hZ2VBbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICBpbWFnZT17Ym9va2luZ3N9XG4gICAgICAgID5cbiAgICAgICAgICA8cD5DdXN0b21pemUgdGhlIGxvb2sgYW5kIGZlZWwgd2l0aCBlYXNlLCB1c2luZyB0aGUgYWRtaW4gcGFnZS48L3A+XG4gICAgICAgIDwvRmVhdHVyZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbj5cblxuICAgIDxTZWN0aW9uPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZlYXR1cmVcbiAgICAgICAgICB0aXRsZT1cIk9wZW5pbmcgVGltZXMgJmFtcDsgQ2FwYWNpdHlcIlxuICAgICAgICAgIGltYWdlQWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICBpbWFnZT17bG9naW5QYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb25maWd1cmUgdGhlIGRheXMgd2hlbiB0aGUgcmVzdHVyYW50IGlzIG9wZW4gZm9yIGJvb2tpbmcuIFByb3ZpZGVcbiAgICAgICAgICAgIHRoZSBvcGVuaW5nIHRpbWVzIGFuZCBzZXQgdXAgY3VzdG9tIGRhdGVzIHdoZW4gdGhlIHJlc3R1cmFudHNcbiAgICAgICAgICAgIG9wZW5pbmcgdGltZSBkaWZmZXIuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gY29uZmlndXJlIHRoZSBhbW91bnQgb2YgZ3Vlc3RzIHlvdSBjYW4gaGF2ZSBib29rZWQgYXRcbiAgICAgICAgICAgIG9uZSB0aW1lLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9GZWF0dXJlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuXG4gICAgPFNlY3Rpb24gcHJpbWFyeT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUcnkgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvYWJvdXQvZm9ya2VlLWJvb2tpbmdzLkpQRz8yOGEzOTg5ZVwiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ2Fib3V0J10sXG4gICAgdGl0bGU6ICdBYm91dCcsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8QWJvdXQgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvYWJvdXQvbG9naW4tcGFnZS5KUEc/ZTc1YjkyYTFcIjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFVQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQWlCQTtBQUFBOzs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFDQTtBQVlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBQUE7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhFQTtBQUNBO0FBcUVBOzs7Ozs7O0FDaEZBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=