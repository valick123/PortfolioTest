!function(e){function t(t){for(var a,l,c=t[0],i=t[1],u=t[2],s=0,f=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(m&&m(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=i;o.push([218,1]),n()}({218:function(e,t,n){n(219),e.exports=n(420)},405:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);n(405);var a=n(0),r=n.n(a),o=n(15),l=(n(410),n(50)),c=n(74),i={};function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={personalInfo:null};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={isLoad:!0,themeMode:!0,dbPersonal:"https://raw.githubusercontent.com/valick123/Portfolio/gh-pages/dbPersonal.json",dbGallery:"https://raw.githubusercontent.com/valick123/Portfolio/gh-pages/dbGallery.json"},h=Object(c.b)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return m(m({},e),{},{personalInfo:t.payload});default:return e}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_LOADING":return b(b({},e),{},{isLoad:!0});case"DATA_LOADED":return b(b({},e),{},{isLoad:!1});case"CHANGE_THEME_MODE":return b(b({},e),{},{themeMode:!e.themeMode});default:return e}},gallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GALLERY":var n=[];t.payload.forEach((function(e){n.includes(e.framework)||n.push(e.framework)}));var a={};return n.forEach((function(e){a[e]=t.payload.filter((function(t){return t.framework===e}))})),a;default:return e}}}),g=Object(c.d)(h,Object(c.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),E=n(210),O=n(472),v=n(473),j=n(474),w=n(445),P=n(476),S=n(115),x=n(18),k=n(447),A=n(83),D=n(444),I=(Object(D.a)((function(e){return{map:{width:"auto",maxHeight:"120px",border:"none",borderRadius:e.shape}}})),n(213)),_=n(456),N=n(457),M=n(452),C=n(123),B=n(458),T=n(156),L=n.n(T),G=n(199),H=n.n(G),U=n(200),R=n.n(U),z=n(448),q=n(449),F=n(450),W=n(475),X=n(453),$=n(201),V=n.n($),J=n(202),Y=n.n(J);function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=Object(D.a)((function(e){return{menuList:{width:"15vw",minWidth:250},drawerHeader:ee(ee({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),map:ee({padding:e.spacing(1),minHeight:200,width:"100%",border:"none"},e.shape),drawer:{maxHeight:"100vh"}}})),ae=Object(x.f)((function(e){var t=K(r.a.useState([{text:"Home",path:"/",icon:r.a.createElement(H.a,null)},{text:"Gallery",path:"/gallery",icon:r.a.createElement(R.a,null)}]),2),n=t[0],a=(t[1],ne()),o=function(){return n.map((function(t,n){return r.a.createElement(z.a,{button:!0,key:n,onClick:function(){return e.history.push(t.path)}},r.a.createElement(q.a,null,t.icon),r.a.createElement(F.a,{primary:t.text}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{implementation:"css",smDown:!0},r.a.createElement(W.a,{className:a.drawer,open:e.isOpenMenuLeft,onClose:e.toggleMenuLeft},r.a.createElement(j.a,{className:a.drawerHeader},r.a.createElement(M.a,{onClick:e.toggleMenuLeft},r.a.createElement(V.a,null))),r.a.createElement(k.a,null),r.a.createElement(X.a,{className:a.menuList,onClick:e.toggleMenuLeft},o()))),r.a.createElement(P.a,{implementation:"css",mdUp:!0},r.a.createElement(W.a,{className:a.drawer,anchor:"bottom",open:e.isOpenMenuBottom,onClose:e.toggleMenuBottom},r.a.createElement(j.a,{className:a.drawerHeader},r.a.createElement(M.a,{onClick:e.toggleMenuBottom},r.a.createElement(Y.a,null))),r.a.createElement(k.a,null),r.a.createElement(X.a,{onClick:e.toggleMenuBottom},o()),r.a.createElement(k.a,null),r.a.createElement(j.a,null,r.a.createElement(A.a,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.3536667223639!2d27.580030783709592!3d53.936943180285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6e354036cb%3A0x43d37ca7115c1332!2sBogdanovicha%20Maksima%20155%2C%20Minsk!5e0!3m2!1sen!2sby!4v1613641427105!5m2!1sen!2sby",className:a.map,frameBorder:"0",allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})))))})),re=n(157),oe=n.n(re),le=n(451),ce=n(455),ie=n(203),ue=n.n(ie),me=n(454);function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fe=Object(D.a)((function(e){var t;return{scroller:(t={position:"fixed"},se(t,e.breakpoints.down("sm"),{bottom:e.spacing(10),right:e.spacing(2)}),se(t,e.breakpoints.down("xs"),{bottom:e.spacing(9),right:e.spacing(2)}),se(t,"bottom",e.spacing(2)),se(t,"right",e.spacing(2)),se(t,"zIndex",9),t)}})),pe=function(e){var t=Object(me.a)({target:window,disableHysteresis:!0,threshold:100}),n=fe();return r.a.createElement(le.a,{in:t,direction:"up"},r.a.createElement(ce.a,{color:"secondary",size:"small",onClick:function(t){document.querySelector(e.target).scrollIntoView({behavior:"smooth",block:"center"})},className:n.scroller},r.a.createElement(ue.a,null)))};function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ge=Object(D.a)((function(e){return{appBar:{top:"auto",bottom:0},text:{padding:e.spacing(2)},title:{flexGrow:1}}})),Ee=Object(l.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.main)}))(Object(x.f)((function(e){var t=ye(r.a.useState(!1),2),n=t[0],o=t[1],l=ye(r.a.useState(!1),2),c=l[0],i=l[1];Object(a.useEffect)((function(){document.title="/"==e.location.pathname?"Portfolio Home":"Portfolio ".concat(e.location.pathname[1].toUpperCase()).concat(e.location.pathname.slice(2))}));var u=ge(),m=function(){o(!n)},s=function(){i(!c)},f=function(){e.dispatch({type:"CHANGE_THEME_MODE"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{square:!0},"  ",r.a.createElement(P.a,{implementation:"css",smDown:!0},r.a.createElement(_.a,{position:"sticky"},r.a.createElement(N.a,{id:"back-to-top-anchor"},r.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:m},r.a.createElement(L.a,null)),r.a.createElement(C.a,{variant:"h6",className:u.title},"/"==e.location.pathname?"home".toUpperCase():e.location.pathname.slice(1).toUpperCase()),r.a.createElement(M.a,{onClick:f},r.a.createElement(oe.a,null)))),e.isLoad?r.a.createElement(B.a,{color:"secondary"}):null,r.a.createElement(pe,{target:"#back-to-top-anchor"})),"    ",r.a.createElement(P.a,{implementation:"css",mdUp:!0},r.a.createElement(I.a,{square:!0,elevation:1},r.a.createElement(C.a,{className:u.text,variant:"h6",id:"to-the-top-mobile"},"/"==e.location.pathname?"home".toUpperCase():e.location.pathname.slice(1).toUpperCase())),e.isLoad?r.a.createElement(B.a,{color:"secondary"}):null,r.a.createElement(_.a,{position:"fixed",className:u.appBar},r.a.createElement(N.a,null,r.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:s},r.a.createElement(L.a,null)),r.a.createElement(C.a,{variant:"h6",className:u.title},"/"==e.location.pathname?"home".toUpperCase():e.location.pathname.slice(1).toUpperCase()),r.a.createElement(M.a,{onClick:f},r.a.createElement(oe.a,null)))),r.a.createElement(pe,{target:"#to-the-top-mobile"}))),r.a.createElement(ae,{isOpenMenuBottom:c,isOpenMenuLeft:n,toggleMenuBottom:s,toggleMenuLeft:m}))}))),Oe=n(459),ve=n(460),je=n(461),we=n(462),Pe=n(463),Se=n(423),xe=Object(D.a)((function(e){return{media:{minHeight:200,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}})),ke=function(e){var t=xe();return r.a.createElement(Oe.a,null,r.a.createElement(ve.a,{href:e.info.siteLink,target:"_blank"},r.a.createElement(je.a,{className:t.media,image:e.info.thumbnailLink,title:"Site:".concat(e.info.name)}),r.a.createElement(we.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.info.name),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},e.info.description))),r.a.createElement(Pe.a,null,r.a.createElement(Se.a,{size:"small",color:"secondary",href:e.info.siteLink,target:"_blank"},"Learn More")))};function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){Ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var Me=Object(D.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})),Ce=Object(l.b)((function(e){return De(De({},e.main),{},{gallery:e.gallery})}))((function(e){Me();var t=_e(r.a.useState(!0),2),n=t[0],o=t[1];Object(a.useEffect)((function(){new Promise((function(t,n){e.dispatch({type:"DATA_LOADING"}),t()})).then((function(){return fetch("".concat(e.dbGallery))})).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:"GET_GALLERY",payload:t})})).then((function(){o(!1),e.dispatch({type:"DATA_LOADED"})}))}),[]);return n?null:Object.keys(e.gallery).map((function(t,n){return e.gallery[t].length?r.a.createElement(j.a,{p:1,key:n},r.a.createElement(C.a,{variant:"h5",gutterBottom:!0},"".concat(t[0].toUpperCase()).concat(t.slice(1))),r.a.createElement(w.a,{container:!0,spacing:1},e.gallery[t].map((function(e){return r.a.createElement(w.a,{item:!0,xs:12,sm:6,md:4,xl:3,key:e.id},r.a.createElement(ke,{info:e}))})))):null}))})),Be=n(464),Te=n(465),Le=n(466),Ge=n(467),He=n(468),Ue=n(469),Re=n(470),ze=n(471),qe=n.p+"47d696e47cf77d6a7d93f63fddd4bbe8.jpg",Fe=n.p+"dd10ef8123f645423d033477ef536a61.png",We=qe,Xe=n(207),$e=n.n(Xe),Ve=n(206),Je=n.n(Ve),Ye=n(208),Ke=n.n(Ye),Qe=n(204),Ze=n(205);function et(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return tt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nt(Object(n),!0).forEach((function(t){rt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(75).b.add(Ze.a);var ot=Object(D.a)((function(e){return{avatar:{maxWidth:"100%",maxHeight:e.breakpoints.values.sm},avatarBox:{display:"flex",justifyContent:"center"},text:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},tHead:{backgroundColor:e.palette.secondary.main},tHeadText:{color:e.palette.secondary.contrastText},map:at({width:"100%",minHeight:200},e.shape),btnGroup:rt({},e.breakpoints.down("xs"),{display:"flex",width:"100%"}),grow:rt({},e.breakpoints.down("xs"),{flexGrow:1}),fullWidthBtn:rt({},e.breakpoints.down("xs"),{width:"100%"}),important:at(at({backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},e.shape),{},{padding:e.spacing(1),marginBottom:e.spacing(2),display:"inline-block"})}})),lt=Object(l.b)((function(e){return at(at({},e.main),e.home)}))((function(e){var t=et(r.a.useState(!0),2),n=t[0],o=t[1],l=ot();Object(a.useEffect)((function(){new Promise((function(t,n){e.dispatch({type:"DATA_LOADING"}),t()})).then((function(){return fetch("".concat(e.dbPersonal))})).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:"INIT",payload:t})})).then((function(){o(!1),e.dispatch({type:"DATA_LOADED"})}))}),[]);return n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,sm:12,md:5,lg:4,spacing:1,container:!0,direction:"column"},r.a.createElement(w.a,{item:!0},r.a.createElement(I.a,{square:!0,elevation:2},r.a.createElement(j.a,{className:l.avatarBox},r.a.createElement("img",{src:We,className:l.avatar,alt:""}))),r.a.createElement(k.a,null)),r.a.createElement(w.a,{item:!0},r.a.createElement(Be.a,{component:I.a,square:!0,elevation:2},r.a.createElement(Te.a,null,r.a.createElement(Le.a,{className:l.tHead},r.a.createElement(Ge.a,null,r.a.createElement(He.a,{align:"left",colSpan:"2"},r.a.createElement(C.a,{variant:"h6",className:l.tHeadText},"Short Info")))),r.a.createElement(Ue.a,null,r.a.createElement(Ge.a,null,r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Name:")),r.a.createElement(He.a,null,r.a.createElement(C.a,null,e.personalInfo.name))),r.a.createElement(Ge.a,null,r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Surname:")),r.a.createElement(He.a,null,r.a.createElement(C.a,null,e.personalInfo.surname))),r.a.createElement(Ge.a,null,r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Age:")),r.a.createElement(He.a,null,r.a.createElement(C.a,null,e.personalInfo.age))),r.a.createElement(Ge.a,null,r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Sex:")),r.a.createElement(He.a,null,r.a.createElement(C.a,null,e.personalInfo.gender))),r.a.createElement(Ge.a,null,r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Education:")),r.a.createElement(He.a,null,r.a.createElement(X.a,null,e.personalInfo.education.map((function(e,t){return r.a.createElement(z.a,{key:t,disableGutters:!0,divider:!0},r.a.createElement(F.a,null,r.a.createElement(C.a,{variant:"body1"},e.place),r.a.createElement(C.a,{variant:"body1"},e.period)))}))))),r.a.createElement(Ge.a,null,r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Skills:")),r.a.createElement(He.a,null,r.a.createElement(C.a,{variant:"body1"},e.personalInfo.skills.join(", "))))))))),r.a.createElement(w.a,{item:!0,sm:12,md:7,lg:8,container:!0,spacing:1,direction:"column"},r.a.createElement(w.a,{item:!0},r.a.createElement(I.a,{elevation:2,square:!0},r.a.createElement(j.a,{p:4},r.a.createElement(ze.a,{disableGutters:!0},r.a.createElement(C.a,{variant:"h4",gutterBottom:!0},"About Me")),r.a.createElement(ze.a,{disableGutters:!0},r.a.createElement(j.a,null,e.personalInfo.aboutMe.map((function(e,t){var n=e.text,a=e.flag;return"strong"==a?r.a.createElement(C.a,{className:l.important,component:a,key:t},n.toUpperCase()):r.a.createElement(C.a,{paragraph:!0,key:t},n)})),r.a.createElement(C.a,null,"My skills:"),e.personalInfo.skills.map((function(e,t){return r.a.createElement(C.a,{key:t},"- ".concat(e))}))))))),r.a.createElement(w.a,{item:!0},r.a.createElement(I.a,{elevation:2,square:!0},r.a.createElement(j.a,{p:4},r.a.createElement(ze.a,{disableGutters:!0},r.a.createElement(C.a,{variant:"h4",gutterBottom:!0},"Contacts")),r.a.createElement(ze.a,{disableGutters:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{marginBottom:2},r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Email:"),r.a.createElement(Se.a,{href:"mailto:".concat(e.personalInfo.Email),startIcon:r.a.createElement(Je.a,null),color:"secondary",variant:"contained",size:"small",className:l.fullWidthBtn},e.personalInfo.Email)),r.a.createElement(j.a,{marginBottom:2},r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Phone number:"),r.a.createElement(Se.a,{href:"tel:".concat(e.personalInfo.phoneNumber),startIcon:r.a.createElement($e.a,null),color:"secondary",variant:"contained",size:"small",className:l.fullWidthBtn},e.personalInfo.phoneNumber)),r.a.createElement(j.a,null,r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Socials:"),r.a.createElement(j.a,{marginBottom:2},r.a.createElement(Re.a,{color:"secondary",size:"medium",variant:"contained",className:l.btnGroup},e.personalInfo.socials.map((function(e,t){var n=e.link,a=e.icon;return r.a.createElement(Se.a,{key:t,href:n,className:l.grow,target:"_blank"},r.a.createElement(Qe.a,{icon:["fab",a],size:"lg"}))}))))),r.a.createElement(j.a,{marginBottom:2},r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Resume:"),r.a.createElement(Se.a,{href:e.personalInfo.resumeLink,startIcon:r.a.createElement(Ke.a,null),color:"secondary",variant:"contained",size:"small",className:l.fullWidthBtn,target:"_blank"},"Resume")),r.a.createElement(j.a,null,r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Location:"),r.a.createElement(A.a,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.3536667223639!2d27.580030783709592!3d53.936943180285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6e354036cb%3A0x43d37ca7115c1332!2sBogdanovicha%20Maksima%20155%2C%20Minsk!5e0!3m2!1sen!2sby!4v1613641427105!5m2!1sen!2sby",className:l.map,frameBorder:"0",allowFullScreen:"","aria-hidden":"false",tabIndex:"0"}))))))))))}));function ct(e){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function it(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ut(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function mt(e,t){return(mt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function st(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=pt(e);if(t){var r=pt(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return ft(this,n)}}function ft(e,t){return!t||"object"!==ct(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function pt(e){return(pt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var bt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mt(e,t)}(l,e);var t,n,a,o=st(l);function l(){return it(this,l),o.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){return console.log(this.props),r.a.createElement("h1",null,"Page not found ",this.props.location.pathname," ")}}])&&ut(t.prototype,n),a&&ut(t,a),l}(r.a.Component),dt=Object(D.a)((function(e){return{offset:{minHeight:e.mixins.toolbar.minHeight+8,width:"100vw"},mainBox:{flexGrow:1,display:"flex",flexDirection:"column"},grow:{flexGrow:1},space:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)}}})),yt=Object(l.b)((function(e){return{themeMode:e.main.themeMode}}))((function(e){var t=Object(E.a)({palette:{type:"light"}}),n=Object(E.a)({palette:{type:"dark"}}),a=dt();return r.a.createElement(O.a,{theme:e.themeMode?n:t},r.a.createElement(v.a,null),r.a.createElement(S.a,{basename:"/Portfolio/"},r.a.createElement(j.a,{className:a.mainBox},r.a.createElement(w.a,{container:!0,direction:"column",className:a.grow},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(Ee,null)),r.a.createElement(w.a,{item:!0,container:!0,xs:12,className:a.space},r.a.createElement(w.a,{item:!0,xs:!1,md:2}),r.a.createElement(w.a,{item:!0,xs:12,sm:12,md:8},r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:lt}),r.a.createElement(x.a,{path:"/gallery",component:Ce}),r.a.createElement(x.a,{path:"*",component:bt}))),r.a.createElement(w.a,{item:!0,xs:!1,md:2}),r.a.createElement(P.a,{implementation:"css",mdUp:!0},r.a.createElement(w.a,{item:!0,xs:12,className:a.offset})))))))})),ht=n(209),gt=n.n(ht);Object(o.render)(r.a.createElement(l.a,{store:g},r.a.createElement(gt.a,{url:Fe}),r.a.createElement(yt,null)),document.querySelector(".app"))}});