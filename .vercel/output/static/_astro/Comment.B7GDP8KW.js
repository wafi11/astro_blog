import{j as p}from"./jsx-runtime.dvAB8w6V.js";import{g as In,R as He,r as L}from"./index.B3PfHquH.js";import{u as Zt}from"./classProfile.DHpVDt67.js";import{f as de}from"./format.BcQETFuH.js";function ve(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ve(Object(n),!0).forEach(function(a){P(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},St(t)}function _n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jn(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Ln(t,e,n){return e&&jn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t,e){return Rn(t)||Fn(t,e)||Ge(t,e)||$n()}function ut(t){return Mn(t)||zn(t)||Ge(t)||Dn()}function Mn(t){if(Array.isArray(t))return Dt(t)}function Rn(t){if(Array.isArray(t))return t}function zn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ge(t,e){if(t){if(typeof t=="string")return Dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(t,e)}}function Dt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Dn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pe=function(){},ee={},Ve={},Xe=null,Be={mark:pe,measure:pe};try{typeof window<"u"&&(ee=window),typeof document<"u"&&(Ve=document),typeof MutationObserver<"u"&&(Xe=MutationObserver),typeof performance<"u"&&(Be=performance)}catch{}var Yn=ee.navigator||{},be=Yn.userAgent,ge=be===void 0?"":be,Y=ee,w=Ve,he=Xe,vt=Be;Y.document;var F=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",qe=~ge.indexOf("MSIE")||~ge.indexOf("Trident/"),pt,bt,gt,ht,yt,M="___FONT_AWESOME___",$t=16,Ke="fa",Je="svg-inline--fa",B="data-fa-i2svg",Yt="data-fa-pseudo-element",Un="data-fa-pseudo-element-pending",ne="data-prefix",ae="data-icon",ye="fontawesome-i2svg",Wn="async",Hn=["HTML","HEAD","STYLE","SCRIPT"],Qe=function(){try{return!0}catch{return!1}}(),k="classic",S="sharp",re=[k,S];function mt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var ot=mt((pt={},P(pt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),P(pt,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pt)),st=mt((bt={},P(bt,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(bt,S,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bt)),lt=mt((gt={},P(gt,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(gt,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gt)),Gn=mt((ht={},P(ht,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(ht,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ht)),Vn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ze="fa-layers-text",Xn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bn=mt((yt={},P(yt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(yt,S,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),yt)),tn=[1,2,3,4,5,6,7,8,9,10],qn=tn.concat([11,12,13,14,15,16,17,18,19,20]),Kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(st[k]).map(ft.add.bind(ft));Object.keys(st[S]).map(ft.add.bind(ft));var Jn=[].concat(re,ut(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(tn.map(function(t){return"".concat(t,"x")})).concat(qn.map(function(t){return"w-".concat(t)})),rt=Y.FontAwesomeConfig||{};function Qn(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Zn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var ta=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ta.forEach(function(t){var e=te(t,2),n=e[0],a=e[1],r=Zn(Qn(n));r!=null&&(rt[a]=r)})}var en={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ke,replacementClass:Je,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var et=u(u({},en),rt);et.autoReplaceSvg||(et.observeMutations=!1);var d={};Object.keys(en).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){et[t]=n,it.forEach(function(a){return a(d)})},get:function(){return et[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){et.cssPrefix=e,it.forEach(function(n){return n(d)})},get:function(){return et.cssPrefix}});Y.FontAwesomeConfig=d;var it=[];function ea(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var $=$t,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(t){if(!(!t||!F)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=w.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return w.head.insertBefore(e,a),t}}var aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,e="";t-- >0;)e+=aa[Math.random()*62|0];return e}function nt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ie(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function nn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(nn(t[n]),'" ')},"").trim()}function Nt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function oe(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function ia(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function oa(t){var e=t.transform,n=t.width,a=n===void 0?$t:n,r=t.height,i=r===void 0?$t:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&qe?l+="translate(".concat(e.x/$-a/2,"em, ").concat(e.y/$-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):l+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),l+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function an(){var t=Ke,e=Je,n=d.cssPrefix,a=d.replacementClass,r=sa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var xe=!1;function Lt(){d.autoAddCss&&!xe&&(na(an()),xe=!0)}var la={mixout:function(){return{dom:{css:an,insertCss:Lt}}},hooks:function(){return{beforeDOMElementCreation:function(){Lt()},beforeI2svg:function(){Lt()}}}},R=Y||{};R[M]||(R[M]={});R[M].styles||(R[M].styles={});R[M].hooks||(R[M].hooks={});R[M].shims||(R[M].shims=[]);var I=R[M],rn=[],fa=function t(){w.removeEventListener("DOMContentLoaded",t),Pt=1,rn.map(function(e){return e()})},Pt=!1;F&&(Pt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Pt||w.addEventListener("DOMContentLoaded",fa));function ca(t){F&&(Pt?setTimeout(t,0):rn.push(t))}function dt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?nn(t):"<".concat(e," ").concat(ra(a),">").concat(i.map(dt).join(""),"</").concat(e,">")}function ke(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Mt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,l,c,f;for(a===void 0?(l=1,f=e[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,e[c],c,e);return f};function ua(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ut(t){var e=ua(t);return e.length===1?e[0].toString(16):null}function ma(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function we(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Wt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=we(e);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(t,we(e)):I.styles[t]=u(u({},I.styles[t]||{}),i),t==="fas"&&Wt("fa",e)}var xt,kt,wt,J=I.styles,da=I.shims,va=(xt={},P(xt,k,Object.values(lt[k])),P(xt,S,Object.values(lt[S])),xt),se=null,on={},sn={},ln={},fn={},cn={},pa=(kt={},P(kt,k,Object.keys(ot[k])),P(kt,S,Object.keys(ot[S])),kt);function ba(t){return~Jn.indexOf(t)}function ga(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ba(r)?r:null}var un=function(){var e=function(i){return Mt(J,function(o,s,l){return o[l]=Mt(s,i,{}),o},{})};on=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),sn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),cn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in J||d.autoFetchSvg,a=Mt(da,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});ln=a.names,fn=a.unicodes,se=Tt(d.styleDefault,{family:d.familyDefault})};ea(function(t){se=Tt(t.styleDefault,{family:d.familyDefault})});un();function le(t,e){return(on[t]||{})[e]}function ha(t,e){return(sn[t]||{})[e]}function X(t,e){return(cn[t]||{})[e]}function mn(t){return ln[t]||{prefix:null,iconName:null}}function ya(t){var e=fn[t],n=le("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return se}var fe=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=ot[a][t],i=st[a][t]||st[a][r],o=t in I.styles?t:null;return i||o||null}var Ae=(wt={},P(wt,k,Object.keys(lt[k])),P(wt,S,Object.keys(lt[S])),wt);function It(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},P(e,k,"".concat(d.cssPrefix,"-").concat(k)),P(e,S,"".concat(d.cssPrefix,"-").concat(S)),e),o=null,s=k;(t.includes(i[k])||t.some(function(c){return Ae[k].includes(c)}))&&(s=k),(t.includes(i[S])||t.some(function(c){return Ae[S].includes(c)}))&&(s=S);var l=t.reduce(function(c,f){var m=ga(d.cssPrefix,f);if(J[f]?(f=va[s].includes(f)?Gn[s][f]:f,o=f,c.prefix=f):pa[s].indexOf(f)>-1?(o=f,c.prefix=Tt(f,{family:s})):m?c.iconName=m:f!==d.replacementClass&&f!==i[k]&&f!==i[S]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var b=o==="fa"?mn(c.iconName):{},h=X(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||h||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},fe());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===S&&(J.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=X(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=U()||"fas"),l}var xa=function(){function t(){_n(this,t),this.definitions={}}return Ln(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Wt(s,o[s]);var l=lt[k][s];l&&Wt(l,o[s]),un()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Oe=[],Q={},tt={},ka=Object.keys(tt);function wa(t,e){var n=e.mixoutsTo;return Oe=t,Q={},Object.keys(tt).forEach(function(a){ka.indexOf(a)===-1&&delete tt[a]}),Oe.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),St(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(tt)}),n}function Ht(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,n)})}function z(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Gt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||U();if(e)return e=X(n,e)||e,ke(dn.definitions,n,e)||ke(I.styles,n,e)}var dn=new xa,Aa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},Oa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(q("beforeI2svg",e),z("pseudoElements2svg",e),z("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ca(function(){Pa({autoReplaceSvgRoot:n}),q("watch",e)})}},Sa={icon:function(e){if(e===null)return null;if(St(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:X(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Tt(e[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Vn))){var r=It(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=U();return{prefix:i,iconName:X(i,e)||e}}}},T={noAuto:Aa,config:d,dom:Oa,parse:Sa,library:dn,findIconDefinition:Gt,toHtml:dt},Pa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?w:n;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&T.dom.i2svg({node:a})};function _t(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return dt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ca(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(oe(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=Nt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ea(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function ce(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,m=t.extra,b=t.watchable,h=b===void 0?!1:b,A=a.found?a:n,C=A.width,O=A.height,v=r==="fak",y=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(D){return m.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(m.classes).join(" "),x={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(O)})},N=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/O*16*.0625,"em")}:{};h&&(x.attributes[B]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||ct())},children:[l]}),delete x.attributes.title);var E=u(u({},x),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},N),m.styles)}),H=a.found&&n.found?z("generateAbstractMask",E)||{children:[],attributes:{}}:z("generateAbstractIcon",E)||{children:[],attributes:{}},G=H.children,jt=H.attributes;return E.children=G,E.attributes=jt,s?Ea(E):Ca(E)}function Se(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[B]="");var f=u({},o.styles);oe(r)&&(f.transform=oa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var m=Nt(f);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Na(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Nt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Rt=I.styles;function Vt(t){var e=t[0],n=t[1],a=t.slice(4),r=te(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ta={found:!1,width:512,height:512};function Ia(t,e){!Qe&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Xt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=U()),new Promise(function(a,r){if(z("missingIconAbstract"),n==="fa"){var i=mn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Rt[e]&&Rt[e][t]){var o=Rt[e][t];return a(Vt(o))}Ia(t,e),a(u(u({},Ta),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var Pe=function(){},Bt=d.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:Pe,measure:Pe},at='FA "6.5.2"',_a=function(e){return Bt.mark("".concat(at," ").concat(e," begins")),function(){return vn(e)}},vn=function(e){Bt.mark("".concat(at," ").concat(e," ends")),Bt.measure("".concat(at," ").concat(e),"".concat(at," ").concat(e," begins"),"".concat(at," ").concat(e," ends"))},ue={begin:_a,end:vn},At=function(){};function Ce(t){var e=t.getAttribute?t.getAttribute(B):null;return typeof e=="string"}function ja(t){var e=t.getAttribute?t.getAttribute(ne):null,n=t.getAttribute?t.getAttribute(ae):null;return e&&n}function La(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ma(){if(d.autoReplaceSvg===!0)return Ot.replace;var t=Ot[d.autoReplaceSvg];return t||Ot.replace}function Ra(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function za(t){return w.createElement(t)}function pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Ra:za:n;if(typeof t=="string")return w.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(pn(o,{ceFn:a}))}),r}function Fa(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ot={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(pn(r),n)}),n.getAttribute(B)===null&&d.keepOriginalSource){var a=w.createComment(Fa(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ie(n).indexOf(d.replacementClass))return Ot.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return dt(s)}).join(`
`);n.setAttribute(B,""),n.innerHTML=o}};function Ee(t){t()}function bn(t,e){var n=typeof e=="function"?e:At;if(t.length===0)n();else{var a=Ee;d.mutateApproach===Wn&&(a=Y.requestAnimationFrame||Ee),a(function(){var r=Ma(),i=ue.begin("mutate");t.map(r),i(),n()})}}var me=!1;function gn(){me=!0}function qt(){me=!1}var Ct=null;function Ne(t){if(he&&d.observeMutations){var e=t.treeCallback,n=e===void 0?At:e,a=t.nodeCallback,r=a===void 0?At:a,i=t.pseudoElementsCallback,o=i===void 0?At:i,s=t.observeMutationsRoot,l=s===void 0?w:s;Ct=new he(function(c){if(!me){var f=U();nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ce(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ce(m.target)&&~Kn.indexOf(m.attributeName))if(m.attributeName==="class"&&ja(m.target)){var b=It(ie(m.target)),h=b.prefix,A=b.iconName;m.target.setAttribute(ne,h||f),A&&m.target.setAttribute(ae,A)}else La(m.target)&&r(m.target)})}}),F&&Ct.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Da(){Ct&&Ct.disconnect()}function $a(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ya(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=It(ie(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ha(r.prefix,t.innerText)||le(r.prefix,Ut(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ua(t){var e=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ct()):(e["aria-hidden"]="true",e.focusable="false")),e}function Wa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ya(t),a=n.iconName,r=n.prefix,i=n.rest,o=Ua(t),s=Ht("parseNodeAttributes",{},t),l=e.styleParser?$a(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ha=I.styles;function hn(t){var e=d.autoReplaceSvg==="nest"?Te(t,{styleParser:!1}):Te(t);return~e.extra.classes.indexOf(Ze)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}var W=new Set;re.map(function(t){W.add("fa-".concat(t))});Object.keys(ot[k]).map(W.add.bind(W));Object.keys(ot[S]).map(W.add.bind(W));W=ut(W);function Ie(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var n=w.documentElement.classList,a=function(m){return n.add("".concat(ye,"-").concat(m))},r=function(m){return n.remove("".concat(ye,"-").concat(m))},i=d.autoFetchSvg?W:re.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ha));i.includes("fa")||i.push("fa");var o=[".".concat(Ze,":not([").concat(B,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=ue.begin("onTree"),c=s.reduce(function(f,m){try{var b=hn(m);b&&f.push(b)}catch(h){Qe||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,m){Promise.all(c).then(function(b){bn(b,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(b){l(),m(b)})})}function Ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hn(t).then(function(n){n&&bn([n],e)})}function Va(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Gt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Gt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Xa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?j:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,m=n.title,b=m===void 0?null:m,h=n.titleId,A=h===void 0?null:h,C=n.classes,O=C===void 0?[]:C,v=n.attributes,y=v===void 0?{}:v,x=n.styles,N=x===void 0?{}:x;if(e){var E=e.prefix,H=e.iconName,G=e.icon;return _t(u({type:"icon"},e),function(){return q("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(b?y["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ct()):(y["aria-hidden"]="true",y.focusable="false")),ce({icons:{main:Vt(G),mask:l?Vt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:H,transform:u(u({},j),r),symbol:o,title:b,maskId:f,titleId:A,extra:{attributes:y,styles:N,classes:O}})})}},Ba={mixout:function(){return{icon:Va(Xa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ie,n.nodeCallback=Ga,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?w:a,i=n.callback,o=i===void 0?function(){}:i;return Ie(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,m=a.maskId,b=a.extra;return new Promise(function(h,A){Promise.all([Xt(r,s),f.iconName?Xt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var O=te(C,2),v=O[0],y=O[1];h([n,ce({icons:{main:v,mask:y},prefix:s,iconName:r,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Nt(s);l.length>0&&(r.style=l);var c;return oe(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},qa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ut(i)).join(" ")},children:o}]})}}}},Ka={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,m=f===void 0?{}:f;return _t({type:"counter",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:a}),Na({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ut(s))}})})}}}},Ja={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,m=f===void 0?{}:f,b=a.styles,h=b===void 0?{}:b;return _t({type:"text",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:a}),Se({content:n,transform:u(u({},j),i),title:s,extra:{attributes:m,styles:h,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ut(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(qe){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Se({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Qa=new RegExp('"',"ug"),_e=[1105920,1112319];function Za(t){var e=t.replace(Qa,""),n=ma(e,0),a=n>=_e[0]&&n<=_e[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ut(r?e[0]:e),isSecondary:a||r}}function je(t,e){var n="".concat(Un).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=nt(t.children),o=i.filter(function(G){return G.getAttribute(Yt)===e})[0],s=Y.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Xn),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?S:k,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?st[b][l[2].toLowerCase()]:Bn[b][c],A=Za(m),C=A.value,O=A.isSecondary,v=l[0].startsWith("FontAwesome"),y=le(h,C),x=y;if(v){var N=ya(C);N.iconName&&N.prefix&&(y=N.iconName,h=N.prefix)}if(y&&!O&&(!o||o.getAttribute(ne)!==h||o.getAttribute(ae)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var E=Wa(),H=E.extra;H.attributes[Yt]=e,Xt(y,h).then(function(G){var jt=ce(u(u({},E),{},{icons:{main:G,mask:fe()},prefix:h,iconName:x,extra:H,watchable:!0})),D=w.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=jt.map(function(Tn){return dt(Tn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function tr(t){return Promise.all([je(t,"::before"),je(t,"::after")])}function er(t){return t.parentNode!==document.head&&!~Hn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Le(t){if(F)return new Promise(function(e,n){var a=nt(t.querySelectorAll("*")).filter(er).map(tr),r=ue.begin("searchPseudoElements");gn(),Promise.all(a).then(function(){r(),qt(),e()}).catch(function(){r(),qt(),n()})})}var nr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Le,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?w:a;d.searchPseudoElements&&Le(r)}}},Me=!1,ar={mixout:function(){return{dom:{unwatch:function(){gn(),Me=!0}}}},hooks:function(){return{bootstrap:function(){Ne(Ht("mutationObserverCallbacks",{}))},noAuto:function(){Da()},watch:function(n){var a=n.observeMutationsRoot;Me?qt():Ne(Ht("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Re=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},rr={mixout:function(){return{parse:{transform:function(n){return Re(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Re(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:m,path:b};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),h.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ir(t){return t.tag==="g"?t.children:[t]}var or={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?It(r.split(" ").map(function(o){return o.trim()})):fe();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,m=o.width,b=o.icon,h=ia({transform:l,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:u(u({},zt),{},{fill:"white"})},C=f.children?{children:f.children.map(ze)}:{},O={tag:"g",attributes:u({},h.inner),children:[ze(u({tag:f.tag,attributes:u(u({},f.attributes),h.path)},C))]},v={tag:"g",attributes:u({},h.outer),children:[O]},y="mask-".concat(s||ct()),x="clip-".concat(s||ct()),N={tag:"mask",attributes:u(u({},zt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:ir(b)},N]};return a.push(E,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(y,")")},zt)}),{children:a,attributes:r}}}},sr={provides:function(e){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},lr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},fr=[la,Ba,qa,Ka,Ja,nr,ar,rr,or,sr,lr];wa(fr,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Kt=T.parse;T.findIconDefinition;T.toHtml;var cr=T.icon;T.layer;T.text;T.counter;var yn={exports:{}},ur="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mr=ur,dr=mr;function xn(){}function kn(){}kn.resetWarningCache=xn;var vr=function(){function t(a,r,i,o,s,l){if(l!==dr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kn,resetWarningCache:xn};return n.PropTypes=n,n};yn.exports=vr();var pr=yn.exports;const g=In(pr);function Fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fe(Object(n),!0).forEach(function(a){Z(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function br(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gr(t,e){if(t==null)return{};var n=br(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Jt(t){return hr(t)||yr(t)||xr(t)||kr()}function hr(t){if(Array.isArray(t))return Qt(t)}function yr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xr(t,e){if(t){if(typeof t=="string")return Qt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qt(t,e)}}function Qt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,m=t.pulse,b=t.fixedWidth,h=t.inverse,A=t.border,C=t.listItem,O=t.flip,v=t.size,y=t.rotation,x=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":b,"fa-inverse":h,"fa-border":A,"fa-li":C,"fa-flip":O===!0,"fa-flip-horizontal":O==="horizontal"||O==="both","fa-flip-vertical":O==="vertical"||O==="both"},Z(e,"fa-".concat(v),typeof v<"u"&&v!==null),Z(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),Z(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),Z(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(E){return N[E]?E:null}).filter(function(E){return E})}function Ar(t){return t=t-0,t===t}function wn(t){return Ar(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Or=["style"];function Sr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Pr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=wn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Sr(r)]=i:e[r]=i,e},{})}function An(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return An(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=Pr(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[wn(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=gr(n,Or);return r.attrs.style=_(_({},r.attrs.style),o),t.apply(void 0,[e.tag,_(_({},r.attrs),s)].concat(Jt(a)))}var On=!1;try{On=!0}catch{}function Cr(){if(!On&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function De(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kt.icon)return Kt.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ft(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Z({},t,e):{}}var $e={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},K=He.forwardRef(function(t,e){var n=_(_({},$e),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,f=De(a),m=Ft("classes",[].concat(Jt(wr(n)),Jt((o||"").split(" ")))),b=Ft("transform",typeof n.transform=="string"?Kt.transform(n.transform):n.transform),h=Ft("mask",De(r)),A=cr(f,_(_(_(_({},m),b),h),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!A)return Cr("Could not find icon",f),null;var C=A.abstract,O={ref:e};return Object.keys(n).forEach(function(v){$e.hasOwnProperty(v)||(O[v]=n[v])}),Er(C[0],O)});K.displayName="FontAwesomeIcon";K.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Er=An.bind(null,He.createElement),Nr={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},Tr=Nr,Ye={prefix:"fas",iconName:"reply",icon:[512,512,[61714,"mail-reply"],"f3e5","M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]},Sn={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Ir={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Pn={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]};const Cn=async(t,e)=>{try{const n=await fetch(`/api/likes/${t}/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error("Failed to fetch data");return await n.json()}catch(n){return console.error(n),null}},En=async(t,e,n)=>{try{const a=await fetch(`/api/likes/${t}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Id:e,userId:n})});if(!a.ok)throw new Error("Failed to add like");return await a.json()}catch(a){throw console.error(a),a}},Nn=async(t,e)=>{try{const n=await fetch(`/api/likes/${t}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error("Failed to remove like");return await n.json()}catch(n){throw console.error(n),n}},_r=({commentId:t})=>{const[e,n]=L.useState(!1),{userProfile:a}=Zt(),[r,i]=L.useState(null);L.useEffect(()=>{(async()=>{const l=await Cn("comments",t);l&&(n(l[0]?.likes||!1),i(l[0]?.id||null),console.log(l))})()},[t]);const o=async()=>{try{if(e)await Nn("comments",r);else{const s=await En("comments",t,a.id);i(s.id)}n(!e)}catch(s){console.error("Error updating like status:",s)}};return p.jsx("div",{className:"p-2 text-center",children:p.jsx("button",{className:`px-4 py-2 text-lg cursor-pointer border-none rounded ${e?"text-red-500":"text-gray-500"}`,onClick:o,children:p.jsx(K,{icon:e?Sn:Pn})})})},jr=({commentId:t})=>{const{userProfile:e}=Zt(),[n,a]=L.useState(!1),[r,i]=L.useState(null);L.useEffect(()=>{(async()=>{const l=await Cn("reply",t);l&&(a(l[0]?.likes||!1),i(l[0]?.id||null))})()},[t]);const o=async()=>{try{if(n)await Nn("reply",r);else{const s=await En("reply",t,e.id);i(s.id)}a(!n)}catch(s){console.error("Error updating like status:",s)}};return p.jsx("div",{className:"p-2 text-center",children:p.jsx("button",{className:`px-4 py-2 text-lg cursor-pointer border-none rounded ${n?"text-red-500":"text-gray-500"}`,onClick:o,children:p.jsx(K,{icon:n?Sn:Pn})})})},Ue=async(t,e)=>{try{const n=await fetch(`/api/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})});if(!n.ok)throw new Error(`Failed to delete ${e}`);const a=await n.json();return console.log(a),a}catch(n){throw new Error(n.message)}},We=({commentId:t,replyId:e})=>{const[n,a]=L.useState(!1),r=async()=>{try{t?await Ue(t,"comments"):e&&await Ue(e,"reply"),window.location.reload(),console.log("Success")}catch(i){console.error(i.message)}};return p.jsx("div",{className:"text-center",children:p.jsx("button",{className:`py-4 text-lg cursor-pointer border-none rounded ${n?"text-red-500":"text-red-900"}`,onClick:()=>{a(!n),r()},children:p.jsx(K,{icon:n?Ir:Tr})})})},Fr=({postId:t,data:e})=>{const{userProfile:n}=Zt(),[a,r]=L.useState(""),[i,o]=L.useState({}),[s,l]=L.useState({commentId:null,userName:null}),c=v=>{r(v.target.value)},f=async()=>{a.trim()!==""&&(s.commentId?await b(s.commentId,s.userName):await m())},m=async()=>{try{(await fetch("/api/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:a,blogId:t,userId:n.id})})).ok?(r(""),l({commentId:null,userName:null}),window.location.reload()):console.error("Failed to post comment")}catch(v){console.error("Error posting comment:",v)}},b=async(v,y)=>{try{(await fetch("/api/reply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:a,userId:n.id,commentId:v})})).ok?(r(""),l({commentId:null,userName:null}),window.location.reload()):console.error("Failed to post reply")}catch(x){console.error("Error posting reply:",x)}},h=v=>{o(y=>({...y,[v]:!y[v]}))},A=(v,y)=>{l({commentId:v,userName:y}),r(`@${y} `)},C=v=>{const y=/@(\w+)/g;return v.replace(y,(x,N)=>`<a href=${v} class="text-blue-500">@${N}</a>`)},O=(v,y)=>v.map(x=>p.jsxs("div",{className:"p-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("img",{src:x.user.image||"/src/assets/placeholder.jpg",alt:"User Profile",className:"w-10 h-10 rounded-full bg-gray-200"}),p.jsxs("div",{className:"flex flex-col w-full",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[p.jsx("p",{className:"font-semibold",children:x.user.name}),p.jsx("span",{dangerouslySetInnerHTML:{__html:C(x.text)}})]}),p.jsx("p",{className:"text-gray-500 text-sm",children:de(new Date(x.createdAt),"dd MMM yyyy")})]})]}),p.jsxs("div",{className:"flex flex-row  px-20",children:[p.jsx("button",{onClick:()=>A(y,x.user.name),children:p.jsx(K,{icon:Ye})}),p.jsx(jr,{commentId:x.id}),p.jsx(We,{replyId:x.id})]})]},x.id));return p.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.map(v=>p.jsxs("div",{className:"border rounded-lg p-4",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("img",{src:v.user.image||"/src/assets/placeholder.jpg",alt:"User Profile",className:"w-10 h-10 rounded-full bg-gray-200"}),p.jsxs("div",{className:"flex flex-col w-full",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[p.jsx("p",{className:"font-semibold",children:v.user.name}),p.jsx("p",{children:v.text})]}),p.jsx("p",{className:"text-gray-500 text-sm",children:de(new Date(v.createdAt),"dd MMM yyyy")})]})]}),p.jsxs("div",{className:"flex flex-col px-10",children:[p.jsxs("div",{className:"flex flex-row ",children:[p.jsx("button",{onClick:()=>A(v.id,v.user.name),children:p.jsx(K,{icon:Ye})}),p.jsx(_r,{commentId:v.id}),p.jsx(We,{commentId:v.id})]}),v.replies&&v.replies.length>0&&p.jsx("button",{onClick:()=>h(v.id),className:"flex justify-start",children:i[v.id]?"---- Hide results ----":"---- Show Results ----"})]}),i[v.id]&&v.replies&&v.replies.length>0&&p.jsx("div",{className:"ml-8 mt-4",children:O(v.replies,v.id)})]},v.id)),p.jsxs("div",{className:"flex items-center border-b-2 border-black",children:[p.jsx("textarea",{id:"comment",placeholder:"Write a comment...",className:"w-full h-auto max-h-[300px] border-none focus:outline-none",onChange:c,value:a}),p.jsx("button",{id:"sendComment",className:"ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg",onClick:f,children:"Post"})]})]})};export{Fr as default};
