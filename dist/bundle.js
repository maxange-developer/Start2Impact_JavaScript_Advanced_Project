(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  font-family: "Montserrat", sans-serif;\n  outline: none;\n}\n\n/* Sfondo Schermata Iniziale */\n\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n\n  background-image: url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600);\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: -1;\n  filter: blur(4px);\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.header {\n  height: 100vh;\n}\n\n/* Titolo */\n\n#title {\n  width: auto;\n  height: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  font-size: 10vw;\n  text-transform: uppercase;\n  text-shadow: 0.1vw 0.1vw 0.3vw black;\n  color: white;\n}\n\n/* Input */\n\ninput {\n  width: 33%;\n  height: auto;\n\n  border: 0.1vw solid white;\n  border-radius: 1.5vw;\n\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1vw;\n  color: white;\n  background-color: rgba(135, 206, 235, 0.315);\n\n  padding: 0.5%;\n  margin: 1%;\n  outline: none;\n}\n\ninput::placeholder {\n  color: white;\n  font-style: oblique;\n  text-transform: lowercase;\n\n  text-align: center;\n  font-size: 1vw;\n}\n\n/* Pulsante */\n\nbutton {\n  position: relative;\n  padding: 0.5% 1%;\n  margin: 1%;\n\n  border-radius: 0.7vw;\n  border: 0.2vw solid rgb(135, 206, 235);\n\n  font-size: 1vw;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.2vw;\n\n  background: rgba(135, 206, 235, 0.815);\n  color: #fff;\n  overflow: hidden;\n  box-shadow: 0 0 0 0 transparent;\n\n\n  -webkit-transition: all 0.2s ease-in;\n  -moz-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n}\n\nbutton:hover {\n  background: rgb(135, 206, 235);\n  box-shadow: 0 0 3vw 0.5vw rgba(135, 206, 235, 0.815);\n\n  -webkit-transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n\nbutton:hover::before {\n  -webkit-animation: sh02 0.5s 0s linear;\n  -moz-animation: sh02 0.5s 0s linear;\n  animation: sh02 0.5s 0s linear;\n}\n\nbutton::before {\n  content: "";\n  display: block;\n\n  width: 0;\n  height: 86%;\n  position: absolute;\n  top: 7%;\n  left: 0%;\n  opacity: 0;\n\n  background: #fff;\n  box-shadow: 0 0 5vw 3vw #fff;\n\n  -webkit-transform: skewX(-20deg);\n  -moz-transform: skewX(-20deg);\n  -ms-transform: skewX(-20deg);\n  -o-transform: skewX(-20deg);\n  transform: skewX(-20deg);\n}\n\n@keyframes sh02 {\n  from {\n    opacity: 0;\n    left: 0%;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    left: 100%;\n  }\n}\n\nbutton:active {\n  box-shadow: 0 0 0 0 transparent;\n\n  -webkit-transition: box-shadow 0.2s ease-in;\n  -moz-transition: box-shadow 0.2s ease-in;\n  transition: box-shadow 0.2s ease-in;\n}\n\n/* Schermata dopo l\'inserimento della città */\n\n\n/* Titolo Città */\n\n.city-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  letter-spacing: 0.6vw;\n  font-size: 5vw;\n  color: white;\n  text-transform: uppercase;\n\n  margin: 1%;\n}\n\n/* Box Immagine e Sommario */\n\n.box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 2% 0 2%;\n}\n\n.image img {\n  max-width: 75%;\n  width: auto;\n  height: auto;\n}\n\n.summary {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  max-width: 50%;\n  width: auto;\n  height: auto;\n\n  margin: 2%;\n}\n\n.summary h2 {\n  text-align: center;\n  font-size: 1vw;\n  font-weight: normal;\n  color: white;\n}\n\n\n/* Tabella City Score */\n\n.score {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n\n  background-color: rgba(135, 206, 235, 0.3);\n  border: 0.2vw solid rgba(255, 255, 255, 0.8);\n  border-radius: 1vw;\n\n  margin: 2%;\n  padding: 1%;\n}\n\n.text-score {\n  font-weight: bold;\n  font-size: 2vw;\n}\n\n.city-score {\n  font-size: 1vw;\n}\n\n.category {\n  display: grid;\n  width: max-content;\n  height: auto;\n\n  grid-template-columns: repeat(3, 1fr);\n\n  color: white;\n  font-size: 1vw;\n\n  margin: 1%;\n  padding: 1%;\n}\n\n.category p {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 1vw;\n}\n\n.category p:hover {\n  background-color: white;\n  color: #52c0d9;\n  border-radius: 0.5vw;\n  cursor: pointer;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(402),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.body,g=document.createElement("div");h.appendChild(g),g.setAttribute("class","background");const v=document.createElement("section");function b(n,e,t,r,o,i,a){return n=document.createElement(e),t.appendChild(n),n.setAttribute("id",`${r}`),n.textContent=`${o}`,i?n.setAttribute("class",`${i}`):a&&(n.setAttribute("placeholder",`${a}`),n.setAttribute("type","text")),n}h.appendChild(v),v.setAttribute("class","header"),b("title","h1",v,"title","LifeStyle");const y=b("input","input",v,"","","","please enter a city name"),w=b("button","button",v,"","search");let x,k=function(n){return(n=(n=n.toLowerCase()).trim()).replaceAll(" ","-")};const T=async function(){const n=await fetch(`https://api.teleport.org/api/urban_areas/slug:${x}/scores/`),e=await n.json(),t=await fetch(`https://api.teleport.org/api/urban_areas/slug:${x}/images/`),r=await t.json();if(404!=n.status){v.innerHTML=v.remove(),document.querySelector(".background").remove(),h.style.backgroundImage="url(https://img.freepik.com/premium-photo/free-plain-sky-image_906250-81.jpg?size=626&ext=jpg&ga=GA1.1.1294237815.1669366217&semt=ais)",h.style.backgroundRepeat="no-repeat",h.style.width="100%",h.style.height="100%",h.style.backgroundSize="cover";const n=b("section","section",h,"","","database"),t=b("city-header","div",n,"","","city-header"),o=b("heading","div",n,"","","heading"),i=b("box","div",o,"","","box"),a=b("image","div",i,"","","image"),s=b("summary","div",i,"","","summary"),c=b("score","div",n,"","","score"),l=b("text-score","p",c,"","","text-score"),d=b("city-score","p",c,"","","city-score"),u=b("category","p",c,"","","category");t.innerHTML=`<h2>${x}</h2>`,a.innerHTML=`<img src="${r.photos[0].image.web}" alt=${x}>`,s.innerHTML=`<h2><p>${e.summary}</p></h2>`,l.innerHTML="CITY SCORE:",d.innerHTML=e.teleport_city_score.toFixed(2),e.categories.forEach((n=>{u.insertAdjacentHTML("afterbegin",`<p>${n.name}: ${n.score_out_of_10.toFixed(1)}<p>`);let e=document.getElementsByTagName("p");for(let n of e)t(n);function t(n){"&nbsp;"!=n.innerHTML&&""!=n.innerHTML||n.parentNode.removeChild(n)}}))}},z=()=>{y.value||alert("Enter a city, please!")};y.addEventListener("keydown",(function(n){"Enter"===n.key&&(x=k(y.value),T(),z())})),w.addEventListener("click",(function(){x=k(y.value),T(),z()}))})()})();