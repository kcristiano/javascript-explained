parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nZps":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={container:document.querySelector("#app"),name:"Test Site"},t=e;exports.default=t;
},{}],"vpnQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{id:1,title:"Hello JavaScript",content:"<p>Lorem to the ipsum</p>"},{id:2,title:"Hello Code Organization",content:"<p>This will show you how to organize your code.</p>"},{id:3,title:"Hello Tooling!",content:"<p>Let's learn how to use tools!</p>"}],o=e;exports.default=o;
},{}],"bNiO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r,exports.clearPost=n;var e=t(require("../../data"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=e.default.find(function(e){return t==e.id}),n='<article id="post">';n+="<h1>".concat(r.title,"</h1>"),n+="<div>".concat(r.content,"</div>"),n+="</article>",document.querySelector("#site-header").insertAdjacentHTML("afterend",n)}function n(){var e=document.querySelector("#post");e&&e.parentElement.removeChild(e)}
},{"../../data":"vpnQ"}],"GkJU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o,exports.initPosts=u,exports.clearPosts=i;var e=n(require("../../config")),t=n(require("../../data")),r=n(require("../post"));function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e='<ul id="posts">';t.default.forEach(function(t){return e+='<li><a data-id="'.concat(t.id,'" href="#">').concat(t.title,"</a></li>")}),e+="</ul>",i(),document.querySelector("#site-header").insertAdjacentHTML("afterend",e),u()}function u(){document.querySelectorAll("#posts a").forEach(function(e){return e.addEventListener("click",a)})}function a(e){e.preventDefault(),i(),(0,r.default)(this.dataset.id)}function i(){var e=document.querySelector("#posts");e&&e.parentElement.removeChild(e)}
},{"../../config":"nZps","../../data":"vpnQ","../post":"bNiO"}],"XCrS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u,exports.initHeader=i;var e=o(require("../../config")),t=require("../post"),r=a(require("../posts"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function o(e){return e&&e.__esModule?e:{default:e}}function u(){var t='\n    <header id="site-header">\n      <p><a href="#">'.concat(e.default.name,"</a></p>\n    </header>\n  ");e.default.container.insertAdjacentHTML("afterbegin",t),i()}function i(){document.querySelector("#site-header a").addEventListener("click",f)}function f(e){e.preventDefault(),(0,t.clearPost)(),(0,r.clearPosts)(),(0,r.default)()}
},{"../../config":"nZps","../post":"bNiO","../posts":"GkJU"}],"Qtd8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=t(require("../../config"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){var t='\n    <footer id="site-footer">\n      <p>'.concat(e.default.name,"</p>\n    </header>\n  ");e.default.container.insertAdjacentHTML("beforeend",t)}
},{"../../config":"nZps"}],"H99C":[function(require,module,exports) {
"use strict";var e=o(require("./components/header")),t=o(require("./components/posts")),r=o(require("./components/footer"));function o(e){return e&&e.__esModule?e:{default:e}}(0,e.default)(),(0,t.default)(),(0,r.default)();
},{"./components/header":"XCrS","./components/posts":"GkJU","./components/footer":"Qtd8"}]},{},["H99C"], null)
//# sourceMappingURL=src.097dce28.js.map