(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>A});var i=t(354),o=t.n(i),r=t(314),a=t.n(r)()(o());a.push([n.id,':root {\n    --c-white: #ffffff;\n    --c-beige: #f5f5dc;\n    --c-black: #000000;\n    --c-gray: #eaeef0;\n    --c-dark-gray: #e5e7eb;\n    --c-light-gray: #f5f5f5;\n    --c-primary: #25294a;\n    --c-primary-light: #323764;\n    --c-accent: #4e7cff;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nhtml {\n    font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;\n}\n\nhtml {\n    font-size: 62.5%;\n    background: lightgray;\n    overflow-y: scroll;\n    /* Prevents page from jumping when there\'s enough content to scroll */\n}\n\nbody {\n    font-size: 1.6rem;\n    font-weight: 300;\n    line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n    line-height: 1.1;\n}\n\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font-family: inherit;\n    font-size: inherit;\n}\n\nbutton {\n    color: inherit;\n    cursor: pointer;\n    border: none;\n    background: transparent;\n}\n\nul,\nli {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: var(--c-black);\n}\n\n.btn {\n    border-radius: 24px;\n    padding: 8px 16px;\n    background: var(--c-accent);\n    color: var(--c-white);\n    transition: all 0.3s ease;\n}\n\n.btn:hover {\n    color: var(--c-accent);\n    opacity: 0.75;\n}\n\n.link:hover {\n    opacity: 0.75;\n    transition: all 0.3s ease;\n}\n\n.disabled {\n    display: none !important;\n}\n\n#page {\n    background: var(--c-beige);\n    color: var(--c-primary);\n    min-height: 100vh;\n    width: 100%;\n    display: grid;\n    place-items: center;\n    grid-auto-rows: max-content;\n    gap: 20px;\n    margin: 0 auto;\n}\n\n.header {\n    width: 100%;\n}\n\n.header-container {\n    max-width: 1280px;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    margin: 0 auto;\n    padding: 10px 20px;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.logo .title {\n    font-size: 2.5rem;\n    font-weight: 400;\n}\n\n.header-menu nav {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.header-menu button.active {\n    position: relative;\n}\n\nbutton.active::after {\n    content: "";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    width: 40px;\n    height: 2px;\n    background-color: var(--c-primary);\n}\n\n#content {\n    padding: 20px;\n    width: 100%;\n    max-width: 1280px;\n    border-radius: 5px;\n}\n\n.hero-container .hero-row {\n    display: grid;\n    grid-template-columns: 40% 1fr;\n    gap: 40px;\n    /* max-height: 75vh; */\n}\n\n.hero-description {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n}\n\n.hero-description .hero-pretitle {\n    font-size: 1.8rem;\n    font-weight: 400;\n}\n\n.hero-description .hero-title {\n    font-size: 3.2rem;\n    font-weight: 700;\n}\n\n.hero-description .hero-text {\n    font-size: 1.8rem;\n    font-weight: 300;\n}\n\n.hero-description .hero-call-to-action {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.hero-description .hero-call-to-action a {\n    padding: 10px 20px;\n    border-radius: 24px;\n    font-size: 1.4rem;\n    font-weight: 700;\n}\n\n.hero-description .hero-call-to-action .hero-more-link {\n    background: var(--c-accent);\n    color: var(--c-white);\n}\n\n.hero-description .hero-call-to-action .hero-order-link {\n    border: 1px solid var(--c-primary);\n    background: var(--c-light-gray);\n    color: var(--c-primary);\n}\n\n.hero-image-container {\n    display: grid;\n    place-items: center;\n}\n\n.hero-image-container .hero-image {\n    width: 100%;\n    max-width: 400px;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* General Section Styles */\n\n.section {\n    padding: 20px;\n    background: var(--c-white);\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n}\n\n.section-title {\n    font-size: 2.5rem;\n    font-weight: 700;\n    color: var(--c-primary);\n    margin-bottom: 20px;\n}\n\n/* Menu Section Styles */\n\n.menu-section {\n    max-width: 45ch;\n}\n\n.menu-list {\n    list-style: none;\n    padding: 0;\n}\n\n.menu-item {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 0;\n    border-bottom: 1px solid var(--c-gray);\n}\n\n.item-name {\n    font-size: 1.6rem;\n    color: var(--c-primary-light);\n}\n\n.item-price {\n    font-size: 1.6rem;\n    color: var(--c-primary);\n}\n\n/* About Section Styles */\n\n.about-text {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1.8rem;\n    font-weight: 300;\n    color: var(--c-primary-light);\n    text-align: justify;\n}\n\n/* Media Queries */\n\n@media (max-width: 768px) {\n    .hero-container .hero-row {\n        grid-template-columns: 1fr;\n    }\n\n    #page {\n        padding: 10px;\n    }\n\n    #content {\n        padding: 10px;\n    }\n\n    .header-container {\n        flex-direction: column;\n        gap: 20px;\n    }\n\n    .header-menu nav {\n        flex-direction: row;\n        gap: 10px;\n    }\n}',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[':root {\n    --c-white: #ffffff;\n    --c-beige: #f5f5dc;\n    --c-black: #000000;\n    --c-gray: #eaeef0;\n    --c-dark-gray: #e5e7eb;\n    --c-light-gray: #f5f5f5;\n    --c-primary: #25294a;\n    --c-primary-light: #323764;\n    --c-accent: #4e7cff;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nhtml {\n    font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;\n}\n\nhtml {\n    font-size: 62.5%;\n    background: lightgray;\n    overflow-y: scroll;\n    /* Prevents page from jumping when there\'s enough content to scroll */\n}\n\nbody {\n    font-size: 1.6rem;\n    font-weight: 300;\n    line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n    line-height: 1.1;\n}\n\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font-family: inherit;\n    font-size: inherit;\n}\n\nbutton {\n    color: inherit;\n    cursor: pointer;\n    border: none;\n    background: transparent;\n}\n\nul,\nli {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: var(--c-black);\n}\n\n.btn {\n    border-radius: 24px;\n    padding: 8px 16px;\n    background: var(--c-accent);\n    color: var(--c-white);\n    transition: all 0.3s ease;\n}\n\n.btn:hover {\n    color: var(--c-accent);\n    opacity: 0.75;\n}\n\n.link:hover {\n    opacity: 0.75;\n    transition: all 0.3s ease;\n}\n\n.disabled {\n    display: none !important;\n}\n\n#page {\n    background: var(--c-beige);\n    color: var(--c-primary);\n    min-height: 100vh;\n    width: 100%;\n    display: grid;\n    place-items: center;\n    grid-auto-rows: max-content;\n    gap: 20px;\n    margin: 0 auto;\n}\n\n.header {\n    width: 100%;\n}\n\n.header-container {\n    max-width: 1280px;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    margin: 0 auto;\n    padding: 10px 20px;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.logo .title {\n    font-size: 2.5rem;\n    font-weight: 400;\n}\n\n.header-menu nav {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.header-menu button.active {\n    position: relative;\n}\n\nbutton.active::after {\n    content: "";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    width: 40px;\n    height: 2px;\n    background-color: var(--c-primary);\n}\n\n#content {\n    padding: 20px;\n    width: 100%;\n    max-width: 1280px;\n    border-radius: 5px;\n}\n\n.hero-container .hero-row {\n    display: grid;\n    grid-template-columns: 40% 1fr;\n    gap: 40px;\n    /* max-height: 75vh; */\n}\n\n.hero-description {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n}\n\n.hero-description .hero-pretitle {\n    font-size: 1.8rem;\n    font-weight: 400;\n}\n\n.hero-description .hero-title {\n    font-size: 3.2rem;\n    font-weight: 700;\n}\n\n.hero-description .hero-text {\n    font-size: 1.8rem;\n    font-weight: 300;\n}\n\n.hero-description .hero-call-to-action {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.hero-description .hero-call-to-action a {\n    padding: 10px 20px;\n    border-radius: 24px;\n    font-size: 1.4rem;\n    font-weight: 700;\n}\n\n.hero-description .hero-call-to-action .hero-more-link {\n    background: var(--c-accent);\n    color: var(--c-white);\n}\n\n.hero-description .hero-call-to-action .hero-order-link {\n    border: 1px solid var(--c-primary);\n    background: var(--c-light-gray);\n    color: var(--c-primary);\n}\n\n.hero-image-container {\n    display: grid;\n    place-items: center;\n}\n\n.hero-image-container .hero-image {\n    width: 100%;\n    max-width: 400px;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* General Section Styles */\n\n.section {\n    padding: 20px;\n    background: var(--c-white);\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n}\n\n.section-title {\n    font-size: 2.5rem;\n    font-weight: 700;\n    color: var(--c-primary);\n    margin-bottom: 20px;\n}\n\n/* Menu Section Styles */\n\n.menu-section {\n    max-width: 45ch;\n}\n\n.menu-list {\n    list-style: none;\n    padding: 0;\n}\n\n.menu-item {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 0;\n    border-bottom: 1px solid var(--c-gray);\n}\n\n.item-name {\n    font-size: 1.6rem;\n    color: var(--c-primary-light);\n}\n\n.item-price {\n    font-size: 1.6rem;\n    color: var(--c-primary);\n}\n\n/* About Section Styles */\n\n.about-text {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 1.8rem;\n    font-weight: 300;\n    color: var(--c-primary-light);\n    text-align: justify;\n}\n\n/* Media Queries */\n\n@media (max-width: 768px) {\n    .hero-container .hero-row {\n        grid-template-columns: 1fr;\n    }\n\n    #page {\n        padding: 10px;\n    }\n\n    #content {\n        padding: 10px;\n    }\n\n    .header-container {\n        flex-direction: column;\n        gap: 20px;\n    }\n\n    .header-menu nav {\n        flex-direction: row;\n        gap: 10px;\n    }\n}'],sourceRoot:""}]);const A=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],A=0;A<n.length;A++){var c=n[A],s=i.base?c[0]+i.base:c[0],d=r[s]||0,l="".concat(s," ").concat(d);r[s]=d+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,i);i.byIndex=A,e.splice(A,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var A=t(r[a]);e[A].references--}for(var c=i(n,o),s=0;s<r.length;s++){var d=t(r[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var i=t(72),o=t.n(i),r=t(825),a=t.n(r),A=t(659),c=t.n(A),s=t(56),d=t.n(s),l=t(540),p=t.n(l),m=t(113),h=t.n(m),u=t(208),B={};B.styleTagTransform=h(),B.setAttributes=d(),B.insert=c().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=p(),o()(u.A,B),u.A&&u.A.locals&&u.A.locals;const g=t.p+"fc99c806d2c803869f70.jpeg",C=function(n){const e=document.createElement("main");e.classList.add("home");const t=document.createElement("section");t.classList.add("home-section");const i=document.createElement("div");i.classList.add("hero-container");const o=document.createElement("div");o.classList.add("hero-row");const r=document.createElement("div");r.classList.add("hero-description");const a=document.createElement("h2");a.classList.add("hero-pretitle"),a.textContent="Welcome to";const A=document.createElement("h1");A.classList.add("hero-title"),A.textContent="Gourmet Haven";const c=document.createElement("p");c.classList.add("hero-text"),c.textContent="We are a family-owned restaurant that has been serving delicious food since 1990.";const s=document.createElement("div");s.classList.add("hero-call-to-action");const d=document.createElement("a");d.classList.add("link"),d.classList.add("hero-more-link"),d.textContent="Learn More",d.href="#";const l=document.createElement("a");l.classList.add("link"),l.classList.add("hero-order-link"),l.textContent="Order Now",l.href="#",s.appendChild(d),s.appendChild(l),r.appendChild(a),r.appendChild(A),r.appendChild(c),r.appendChild(s);const p=document.createElement("div");p.classList.add("hero-image-container");const m=document.createElement("img");return m.classList.add("hero-image"),m.src=g,m.alt="An image of the restaurant",p.appendChild(m),o.appendChild(r),o.appendChild(p),i.appendChild(o),t.appendChild(i),e.appendChild(t),n.appendChild(e),n},f=t.p+"be955201a1693285acba.svg",I={init:function(){this.render(),C(this.content),this.bindEventListeners()},bindEventListeners:function(){this.navButtons.forEach((n=>n.addEventListener("click",(n=>this.handleClick(n)))))},handleClick:function(n){content.textContent="",this.navButtons.forEach((n=>n.classList.remove("active"))),n.target.classList.add("active"),"home-btn"===n.target.id?C(this.content):"menu-btn"===n.target.id?function(n){const e=document.createElement("main");e.classList.add("menu");const t=document.createElement("section");t.classList.add("menu-section","section");const i=document.createElement("h1");i.classList.add("menu-title","section-title"),i.textContent="Our Menu";const o=document.createElement("ul");o.classList.add("menu-list"),[{name:"Spaghetti Carbonara",price:"$12"},{name:"Margherita Pizza",price:"$10"},{name:"Caesar Salad",price:"$8"},{name:"Grilled Salmon",price:"$15"},{name:"Beef Tacos",price:"$9"},{name:"Chicken Alfredo",price:"$13"},{name:"Veggie Burger",price:"$11"},{name:"Lobster Bisque",price:"$14"},{name:"Chocolate Cake",price:"$6"},{name:"Apple Pie",price:"$5"}].forEach((n=>{const e=document.createElement("li");e.classList.add("menu-item");const t=document.createElement("span");t.classList.add("item-name"),t.textContent=n.name;const i=document.createElement("span");i.classList.add("item-price"),i.textContent=n.price,e.appendChild(t),e.appendChild(i),o.appendChild(e)})),t.appendChild(i),t.appendChild(o),e.appendChild(t),n.appendChild(e)}(this.content):"about-btn"===n.target.id&&function(n){const e=document.createElement("main");e.classList.add("about");const t=document.createElement("section");t.classList.add("about-section","section");const i=document.createElement("h1");i.classList.add("about-title","section-title"),i.textContent="About Us";const o=document.createElement("div");o.classList.add("about-text"),["Gourmet Haven is a family-owned restaurant that has been serving delicious food since 1990. We pride ourselves on our friendly atmosphere and high-quality ingredients. Our chefs are passionate about creating dishes that delight the senses and bring people together.","Our restaurant features a cozy dining area, perfect for family gatherings, romantic dinners, and casual outings with friends. We also offer a private dining room for special occasions and events.","We believe in using locally sourced ingredients to support our community and provide the freshest flavors in every dish. Our menu is carefully crafted to offer a variety of options to suit all tastes, including vegetarian and gluten-free choices.","Thank you for choosing Gourmet Haven. We look forward to serving you and making your dining experience unforgettable."].forEach((n=>{const e=document.createElement("p");e.textContent=n,o.appendChild(e)})),t.appendChild(i),t.appendChild(o),e.appendChild(t),n.appendChild(e)}(this.content)},render:function(){this.content=document.querySelector("#content"),this.navButtons=document.querySelectorAll(".header-menu button"),this.logo=document.querySelector(".logo img"),this.logo.src=f}};document.addEventListener("DOMContentLoaded",(()=>I.init()))})();
//# sourceMappingURL=index.bundle.js.map