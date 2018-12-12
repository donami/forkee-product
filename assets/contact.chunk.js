(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact"],{

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

/***/ "./src/routes/contact/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/UI/Container.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/UI/Input.js");
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/UI/Button.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Hero/Hero.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\contact\\Contact.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var formSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, 'Name is too short!').required('Name is required'),
  message: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, 'Message is too short!').required('Message is required'),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email('Email is not valid').required('Email is required')
});

var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitted = _useState2[0],
      setSubmitted = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Give us a shout.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Let us know how we can help."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: formSchema,
    onSubmit: function onSubmit(values, actions) {
      setSubmitted(true);
      actions.setSubmitting(false);
    },
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          handleChange = _ref.handleChange,
          handleBlur = _ref.handleBlur,
          values = _ref.values,
          errors = _ref.errors,
          touched = _ref.touched;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
        onSubmit: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, submitted && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submitted, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Thank you for your message! We will get back to you as soon as possible."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, errors.name && touched.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, errors.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fluid: true,
        id: "name",
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.name,
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, errors.email && touched.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, errors.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fluid: true,
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.email,
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, errors.message && touched.message && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, errors.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        as: "textarea",
        fluid: true,
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.message,
        name: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "submit",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Send"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);
var ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__ContactContainer",
  componentId: "sc-1megfb0-0"
})([""]);
var ContactForm = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "Contact__ContactForm",
  componentId: "sc-1megfb0-1"
})(["margin:0 auto;margin-bottom:", ";max-width:400px;"], function (props) {
  return props.theme.margin;
});
var Field = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__Field",
  componentId: "sc-1megfb0-2"
})(["margin-bottom:", ";"], function (props) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["stripUnit"])(props.theme.margin) / 2;
});
var Feedback = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__Feedback",
  componentId: "sc-1megfb0-3"
})(["float:right;color:", ";"], function (props) {
  return props.theme.colors.primary;
});
var Submitted = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__Submitted",
  componentId: "sc-1megfb0-4"
})(["margin-bottom:", ";"], function (props) {
  return props.theme.margin;
});

/***/ }),

/***/ "./src/routes/contact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/contact/Contact.js");
var _jsxFileName = "C:\\dev\\forkee-product\\src\\routes\\contact\\index.js";



var title = 'Contact Us';

function action() {
  return {
    chunks: ['contact'],
    title: title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jaHVuay5qcyIsInNvdXJjZXMiOlsiQzovZGV2L2ZvcmtlZS1wcm9kdWN0L3NyYy9jb21wb25lbnRzL0hlcm8vSGVyby5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvY29tcG9uZW50cy9VSS9JbnB1dC5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvcm91dGVzL2NvbnRhY3QvQ29udGFjdC5qcyIsIkM6L2Rldi9mb3JrZWUtcHJvZHVjdC9zcmMvcm91dGVzL2NvbnRhY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHN0cmlwVW5pdCB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9VSS9Db250YWluZXInO1xuXG5jb25zdCBIZXJvID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBib3R0b20gfSkgPT4gKFxuICA8V3JhcHBlcj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZXJvLWhlYWRpbmdcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIHtib3R0b20gJiYgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvdHRvbVwiPntib3R0b219PC9kaXY+fVxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L1dyYXBwZXI+XG4pO1xuXG5IZXJvLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGJvdHRvbTogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5IZXJvLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm90dG9tOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXJnaW59O1xuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuXG4gIC5oZXJvLWJvZHkge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAuaGVyby1ib3R0b20ge1xuICAgIGlucHV0IHtcbiAgICAgIG1pbi13aWR0aDogNDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IHN0cmlwVW5pdChwcm9wcy50aGVtZS5tYXJnaW4pIC8gMn1weDtcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjZWFlYWVhIDFweCBzb2xpZDtcbiAgb3V0bGluZTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM2MzZlNzI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAke3Byb3BzID0+XG4gICAgcHJvcHMuZmx1aWQgJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgYH0gJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjODViN2Q5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgzNCwgMzYsIDM4LCAwLjM1KSBpbnNldDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCB7IHN0cmlwVW5pdCB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lcic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VSS9JbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvQnV0dG9uJztcbmltcG9ydCBIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVyby9IZXJvJztcblxuY29uc3QgZm9ybVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgJ05hbWUgaXMgdG9vIHNob3J0IScpXG4gICAgLnJlcXVpcmVkKCdOYW1lIGlzIHJlcXVpcmVkJyksXG4gIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgJ01lc3NhZ2UgaXMgdG9vIHNob3J0IScpXG4gICAgLnJlcXVpcmVkKCdNZXNzYWdlIGlzIHJlcXVpcmVkJyksXG4gIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAuZW1haWwoJ0VtYWlsIGlzIG5vdCB2YWxpZCcpXG4gICAgLnJlcXVpcmVkKCdFbWFpbCBpcyByZXF1aXJlZCcpLFxufSk7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFjdENvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZXJvIHRpdGxlPVwiR2l2ZSB1cyBhIHNob3V0LlwiPkxldCB1cyBrbm93IGhvdyB3ZSBjYW4gaGVscC48L0hlcm8+XG5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogJycsIGVtYWlsOiAnJywgbWVzc2FnZTogJycgfX1cbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtmb3JtU2NoZW1hfVxuICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgcmVuZGVyPXsoe1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgPENvbnRhY3RGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICB7c3VibWl0dGVkICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0dGVkPlxuICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UhIFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXNcbiAgICAgICAgICAgICAgICAgIHBvc3NpYmxlLlxuICAgICAgICAgICAgICAgIDwvU3VibWl0dGVkPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiZcbiAgICAgICAgICAgICAgICAgIHRvdWNoZWQubmFtZSAmJiA8RmVlZGJhY2s+e2Vycm9ycy5uYW1lfTwvRmVlZGJhY2s+fVxuICAgICAgICAgICAgICAgIDxoND5OYW1lPC9oND5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgICB0b3VjaGVkLmVtYWlsICYmIDxGZWVkYmFjaz57ZXJyb3JzLmVtYWlsfTwvRmVlZGJhY2s+fVxuICAgICAgICAgICAgICAgIDxoND5FbWFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm1lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICAgIHRvdWNoZWQubWVzc2FnZSAmJiA8RmVlZGJhY2s+e2Vycm9ycy5tZXNzYWdlfTwvRmVlZGJhY2s+fVxuICAgICAgICAgICAgICAgIDxoND5NZXNzYWdlPC9oND5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgcHJpbWFyeT5cbiAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWN0Rm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250YWN0Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcblxuY29uc3QgQ29udGFjdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgQ29udGFjdEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbmA7XG5cbmNvbnN0IEZpZWxkID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBzdHJpcFVuaXQocHJvcHMudGhlbWUubWFyZ2luKSAvIDJ9O1xuYDtcblxuY29uc3QgRmVlZGJhY2sgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbmA7XG5cbmNvbnN0IFN1Ym1pdHRlZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFyZ2lufTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuXG5jb25zdCB0aXRsZSA9ICdDb250YWN0IFVzJztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWydjb250YWN0J10sXG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29udGFjdCB0aXRsZT17dGl0bGV9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFpQkE7QUFBQTs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQVBBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTFEQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=