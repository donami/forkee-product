!function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={9:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({0:"vendors~about~contact~home~not-found~pricing~privacy",1:"vendors~contact",2:"not-found",3:"privacy",4:"pricing",5:"about",6:"contact",7:"home"}[e]||e)+"."+{0:"4a7e86f2",1:"580e0065",2:"8ae700dd",3:"611dca16",4:"76700a96",5:"d3701e62",6:"28b3c5f8",7:"08708d17"}[e]+".chunk.js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([356,8]),n()}({139:function(e,t,n){"use strict";n.r(t);n(156);var r=n(42),o=n.n(r),a=n(95),i=n.n(a),u=(n(151),n(137)),c=n.n(u),s=n(68),l=n(99),f=n(47),p=n(48),d=n.n(p);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w,g,P,O={insertCss:d.a.func.isRequired,fetch:d.a.func.isRequired,pathname:d.a.string.isRequired,query:d.a.object},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,b(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return o.a.Children.only(this.props.children)}}])&&y(n.prototype,r),a&&y(n,a),t}();P=O,(g="childContextTypes")in(w=j)?Object.defineProperty(w,g,{value:P,enumerable:!0,configurable:!0,writable:!0}):w[g]=P;var k=j;function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e,t){var n=t.baseUrl,r=t.cookie,o=t.schema,a=t.graphql,i={method:"POST",mode:n?"cors":"same-origin",credentials:n?"include":"same-origin",headers:x({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return u=regeneratorRuntime.mark(function t(r,u){var c,s,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r.startsWith("/graphql"),!(o&&a&&c)){t.next=7;break}return s=JSON.parse(u.body),t.next=5,a(o,s.query,{request:{}},null,s.variables);case 5:return l=t.sent,t.abrupt("return",Promise.resolve({status:l.errors?400:200,json:function(){return Promise.resolve(l)}}));case 7:return t.abrupt("return",c||r.startsWith("/api")?e("".concat(n).concat(r),x({},i,u,{headers:x({},i.headers,u&&u.headers)})):e(r,u));case 8:case"end":return t.stop()}},t,this)}),c=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=u.apply(e,t);function a(e,t){try{var a=o[e](t),u=a.value}catch(e){return void r(e)}a.done?n(u):Promise.resolve(u).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})},function(e,t){return c.apply(this,arguments)};var u,c},R=n(52);function _(e,t,n,r,o){var a=document.head.querySelector("".concat(e,"[").concat(t,'="').concat(n,'"]'));if((!a||a.getAttribute(r)!==o)&&(a&&a.parentNode.removeChild(a),"string"==typeof o)){var i=document.createElement(e);i.setAttribute(t,n),i.setAttribute(r,o),document.head.appendChild(i)}}var E,q,T=n(135);var A={path:"",children:[{path:"",load:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,613))}},{path:"/contact",load:function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,611))}},{path:"/about",load:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,614))}},{path:"/pricing",load:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,615))}},{path:"/privacy",load:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,616))}},{path:"(.*)",load:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,612))}}],action:(E=regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.next,e.next=3,n();case 3:return(r=e.sent).title="".concat(r.title||""," - Forkee.com"),r.description=r.description||"",e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}),q=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=E.apply(e,t);function a(e,t){try{var a=o[e](t),c=a.value}catch(e){return void r(e)}a.done?n(c):Promise.resolve(c).then(i,u)}function i(e){a("next",e)}function u(e){a("throw",e)}i()})},function(e){return q.apply(this,arguments)})},B=new T.a(A,{resolveRoute:function(e,t){return"function"==typeof e.route.load?e.route.load().then(function(n){return n.default(e,t)}):"function"==typeof e.route.action?e.route.action(e,t):void 0}});l.b.add(f.d,f.c,f.a,f.b,f.e);var M={insertCss:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return e._insertCss()});return function(){r.forEach(function(e){return e()})}},fetch:C(fetch,{baseUrl:window.App.apiUrl})},N=document.getElementById("app"),U=R.a.location,Y={};function I(e,t){return J.apply(this,arguments)}function J(){var e;return e=regeneratorRuntime.mark(function e(t,n){var r,a,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Y[U.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===n&&delete Y[t.key],U=t,r=!n,e.prev=4,M.pathname=t.pathname,M.query=c.a.parse(t.search),e.next=9,B.resolve(M);case 9:if(a=e.sent,U.key===t.key){e.next=12;break}return e.abrupt("return");case 12:if(!a.redirect){e.next=15;break}return R.a.replace(a.redirect),e.abrupt("return");case 15:u=r?i.a.hydrate:i.a.render,u(o.a.createElement(k,{context:M},a.component),N,function(){if(r){window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=document.getElementById("css");e&&e.parentNode.removeChild(e)}else{var n,o;document.title=a.title,n="description",o=a.description,_("meta","name",n,"content",o);var i=0,u=0,c=Y[t.key];if(c)i=c.scrollX,u=c.scrollY;else{var l=t.hash.substr(1);if(l){var f=document.getElementById(l);f&&(u=window.pageYOffset+f.getBoundingClientRect().top)}}window.scrollTo(i,u),window.ga&&window.ga("send","pageview",Object(s.createPath)(t))}}),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(4),e.next=23;break;case 23:console.error(e.t0),r||U.key!==t.key||(console.error("RSK will reload your page after error"),window.location.reload());case 25:case"end":return e.stop()}},e,this,[[4,19]])}),(J=function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(u,c)}function u(e){i("next",e)}function c(e){i("throw",e)}u()})}).apply(this,arguments)}R.a.listen(I),I(U)},356:function(e,t,n){n(355),e.exports=n(139)},52:function(e,t,n){"use strict";var r=n(136),o=n.n(r);t.a=o()()}});
//# sourceMappingURL=client.e42098c9.js.map