!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){class a{constructor(e,t,a,r,n,l){this.name=e,this.realName=t,this.population=a,this.area=r,this.founded=n,this.url=l}yearsExisting(e){return(new Date).getUTCFullYear()-e}}class r{removeCity(e){e.parentElement.classList.contains("display-button")&&e.parentElement.parentElement.remove()}clearValues(){document.getElementById("city-form").reset(),console.log("eee")}displayCity(e){if(!1===e.name||!1===e.realName||!1===e.population||!1===e.area||!1===e.founded||!1===e.URL)alert("Please. The database requires your full effort.");else{let t='<div class="display-city"><div class="display-name"> %name% </div> <div class="display-realName"> %realName% </div> <div class="display-population"> %population% </div> <div class="display-area"> %area% </div> <div class="display-yearFounded"> %yearFounded% </div> <div class="display-yearsExisting"> %yearsExisting% </div> <div class="display-image"> <image src="%url%"> </div><div class="display-button"> <p class="btn">X</p> </div> </div>';const a=document.querySelector(".display");let r=t.replace("%name%",e.name);r=(r=(r=(r=(r=(r=r.replace("%realName%",e.realName)).replace("%population%",e.population)).replace("%area%",e.area)).replace("%yearFounded%",e.founded)).replace("%yearsExisting%",e.yearsExisting(e.founded))).replace("%url%",e.url),a.insertAdjacentHTML("beforeend",r)}}}document.getElementById("city-form").addEventListener("submit",(function(e){const t=document.querySelector("#name"),n=document.querySelector("#realName"),l=document.querySelector("#population"),i=document.querySelector("#area"),o=document.querySelector("#founded"),u=document.querySelector("#image"),s=new a(t.value,n.value,l.value,i.value,o.value,u.value),d=new r;d.displayCity(s),d.clearValues(),e.preventDefault()})),document.querySelector(".display").addEventListener("click",(function(e){const t=new r;t.removeCity(e.target),t.clearValues(),e.preventDefault()}))}]);