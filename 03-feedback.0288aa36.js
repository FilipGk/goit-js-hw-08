function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=b();if(y(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&o?m(e):(o=r=void 0,u)}function T(){var e=b(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(w,t),s?m(e):u}(l);if(d)return f=setTimeout(w,t),m(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=h(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:O(b())},T}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const w=document.querySelector(".feedback-form"),O=w.elements.email,T=w.elements.message;w.addEventListener("input",e(t)((()=>{const e={email:O.value,message:T.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(O.value=S.email,T.value=S.message),w.addEventListener("submit",(e=>{e.preventDefault();const t={email:O.value,message:T.value};console.log(t),localStorage.removeItem("feedback-form-state"),O.value="",T.value=""}));
//# sourceMappingURL=03-feedback.0288aa36.js.map
