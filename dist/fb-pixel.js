!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactPixel=t():e.ReactPixel=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=!1,i=!1,a=function(){return o||console.warn("Pixel not initialized before using call ReactPixel.init with required params"),o},c=function(){for(var e,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];(e=console).info.apply(e,r(["[react-facebook-pixel]"].concat(n)))},f={autoConfig:!0,debug:!1};t.default={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;fbq||function(e,t,n,r,o,i,a){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],i=t.createElement(n),i.async=!0,i.src=r,a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(i,a))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),e?(!1===n.autoConfig&&fbq("set","autoConfig",!1,e),fbq("init",e,t),o=!0,i=n.debug):console.warn("Please insert pixel id for initializing")},pageView:function(){a()&&(fbq("track","PageView"),i&&c("called fbq('track', 'PageView');"))},track:function(e,t){a()&&(fbq("track",e,t),i&&(c("called fbq('track', '"+e+"');"),t&&c("with data",t)))},trackCustom:function(e,t){a()&&(fbq("trackCustom",e,t),i&&(c("called fbq('trackCustom', '"+e+"');"),t&&c("with data",t)))},trackSingle:function(e,t){a()&&(fbq("trackSingle",e,t),i&&(c("called fbq('trackSingle', '"+t+"');"),data&&c("on pixel",e)))},fbq:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){if(a()){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];fbq.apply(void 0,t),i&&(c("called fbq('"+t.slice(0,2).join("', '")+"')"),t[2]&&c("with data",t[2]))}})}},function(e,t,n){e.exports=n(0)}])});
//# sourceMappingURL=fb-pixel.js.map