(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[23],{1126:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(13),r=n(2),a=n(32),u=n(967),o=n(895),i=n(948),l=n(3),s=function(){var e=Object(a.h)(),t=Object(a.i)().state||{},n=t.item,s=t.trailer,b=Object(r.useMemo)((function(){return{title:n.title,description:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440",poster:n.posters.wide||n.posters.big,sources:Object(i.b)([s])}}),[n,s]),d=Object(r.useCallback)((function(){e.goBack()}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(n.title," - \u0422\u0440\u0435\u0439\u043b\u0435\u0440")}),Object(l.jsx)(u.a,Object(c.a)(Object(c.a)({},b),{},{onEnded:d}))]})}},894:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return O}));var c=n(13),r=n(60),a=n(2),u=n(55),o=n.n(u),i=n(59),l=n(108),s=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=t.onEnterViewport,u=t.onLeaveViewport,o=Object(a.useState)(),s=Object(i.a)(o,2),b=s[1],d=Object(a.useRef)(null),f=Object(a.useRef)(!1),j=Object(a.useRef)(!1),O=Object(a.useRef)(0),v=Object(a.useRef)(0),m=Object(a.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&d.current.observe(t)}}),[e,d]),p=Object(a.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&(d.current.unobserve(t),d.current.disconnect(),d.current=null)}}),[e,d]),k=Object(a.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,a=t.intersectionRatio,o="undefined"!==typeof n?n:a>0;if(!j.current&&o)return j.current=!0,null===r||void 0===r||r(),O.current+=1,f.current=o,void b(o);j.current&&!o&&(j.current=!1,null===u||void 0===u||u(),c.disconnectOnLeave&&d.current&&d.current.disconnect(),v.current+=1,f.current=o,b(o))}),[d,c.disconnectOnLeave,r,u]),h=Object(a.useCallback)((function(){d.current||(d.current=new IntersectionObserver(k,n))}),[d,n,k]);return Object(a.useEffect)((function(){return h(),m(),function(){p()}}),[h,m,p]),{inViewport:f.current,enterCount:O.current,leaveCount:v.current}},b=n(1104);var d=function(e){var t=Object(b.a)();return Object(a.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},f=n(3),j=["children","className","onScrollToEnd"],O=Object(a.createContext)({}),v=function(e){var t=e.children,n=e.className,u=e.onScrollToEnd,i=Object(r.a)(e,j),l=Object(a.useRef)(null),b=d("scrollable"),v=Object(a.useMemo)((function(){return{id:b}}),[b]);return s(l,{onEnterViewport:u}),Object(f.jsxs)("div",Object(c.a)(Object(c.a)({className:o()("overflow-y-auto h-full",n)},i),{},{id:b,children:[Object(f.jsx)(O.Provider,{value:v,children:t}),u&&Object(f.jsx)("div",{className:"h-40",ref:l})]}))}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(13),r=n(900),a=n(3),u=function(e){return Object(a.jsx)(r.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(13),r=n(60),a=n(2),u=n(55),o=n.n(u),i=n(254),l=n(256),s=n(3),b=["children","icon","iconOnly","autoFocus","className"],d=function(e){var t=e.children,n=e.icon,u=e.iconOnly,d=void 0===u?!t:u,f=e.autoFocus,j=e.className,O=Object(r.a)(e,b),v=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return f&&(e=requestAnimationFrame((function(){var e,t;null===(e=v.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,f]),Object(s.jsx)(l.a,Object(c.a)(Object(c.a)({},O),{},{ref:v,className:o()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",j),role:"button",children:Object(s.jsxs)("div",{className:"flex items-center",children:[n&&Object(s.jsx)(i.a,{className:o()({"mr-2":!d}),name:n}),!d&&t]})}))}},903:function(e,t,n){"use strict";var c=n(59),r=n(2);t.a=function(e){var t=Object(r.useState)(e),n=Object(c.a)(t,2),a=n[0],u=n[1];return Object(r.useEffect)((function(){u(e)}),[e]),[a,u]}},910:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(13),r=n(60),a=n(2),u=n(896),o=n(3),i=["defaultChecked","checked","onChange","className","children","disabled"],l=function(e){var t=e.defaultChecked,n=e.checked,l=e.onChange,s=e.className,b=e.children,d=e.disabled,f=Object(r.a)(e,i),j=Object(a.useRef)(null),O=Object(a.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]),v=Object(a.useCallback)((function(){var e;null===(e=j.current)||void 0===e||e.click()}),[]);return Object(o.jsxs)(u.a,{className:s,onClick:v,disabled:d,children:[Object(o.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},f),{},{ref:j,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:O,disabled:d})),Object(o.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})}},918:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(13),r=n(943),a=n.n(r),u=n(3),o=a()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(u.jsx)("div",Object(c.a)({},e))}))},929:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(59),r=n(2),a=n(896),u=n(254),o=n(253),i=n(903),l=n(1105);var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2?arguments[2]:void 0;return Object(l.a)(e,t,n)},b=n(3),d=function(e){var t=e.open,n=e.onToggle,l=e.title,d=e.subtitle,f=e.className,j=e.children,O=e.disabled,v=Object(i.a)(t),m=Object(c.a)(v,2),p=m[0],k=m[1],h=Object(r.useCallback)((function(){if(!O){var e=!p;null===n||void 0===n||n(e),k(e)}}),[O,p,k,n]),g=s(h);return Object(b.jsxs)("div",{className:"flex flex-col w-full",children:[Object(b.jsx)(a.a,{onClick:g,className:f,disabled:O,children:Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(o.a,{children:l}),!O&&Object(b.jsx)(u.a,{name:p?"expand_less":"expand_more"})]}),!p&&d&&Object(b.jsx)(o.a,{className:"mt-2",children:d})]})}),p&&j]})}},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(59),r=n(2),a=n(198),u=n.n(a),o=n(929),i=n(13),l=n(910),s=n(3),b=function(e){return Object(s.jsx)(l.a,Object(i.a)(Object(i.a)({},e),{},{type:"radio"}))},d=n(903),f=function(e){var t=e.label,n=e.options,a=e.defaultValue,i=e.value,l=e.onChange,f=e.closeOnChange,j=void 0===f||f,O=e.className,v=e.splitIn,m=e.disabled,p=Object(r.useState)(!1),k=Object(c.a)(p,2),h=k[0],g=k[1],T=Object(d.a)(i||a),C=Object(c.a)(T,2),y=C[0],x=C[1],S=Object(r.useMemo)((function(){return Array.isArray(n)?n.map((function(e,t){return"object"===typeof e?e:{title:e,value:t}})):[]}),[n]),N=Object(r.useMemo)((function(){return S.find((function(e){return e.value===y}))}),[S,y]),w=Object(r.useCallback)((function(e){x(e),null===l||void 0===l||l(e),j&&g(!1)}),[x,l,j]),E=Object(r.useCallback)((function(e){return function(t){t&&w(e.value)}}),[w]);return Object(s.jsx)(o.a,{open:h,onToggle:g,title:t,subtitle:null===N||void 0===N?void 0:N.title,className:O,disabled:m,children:Object(s.jsx)("div",{className:"flex flex-wrap",children:u()(S,(function(e){return Object(s.jsx)(b,{className:v?"w-1/".concat(v):"w-full",checked:e.value===y,onChange:E(e),children:e.title},e.value)}))})})}},936:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(13),r=n(60),a=n(2),u=n(257),o=n.n(u),i=n(55),l=n.n(i),s=n(894),b=n(918),d=n(255),f=n(32);var j=function(e,t,n){var c=Object(f.h)(),r=Object(a.useCallback)((function(){return c.location.hash.includes(e)}),[e,c]),u=Object(a.useCallback)((function(){r()||c.push({hash:e,state:c.location.state,search:c.location.search,pathname:c.location.pathname}),null===n||void 0===n||n()}),[e,r,c,n]),o=Object(a.useCallback)((function(){r()&&c.goBack(),null===t||void 0===t||t()}),[r,c,t]);return Object(a.useEffect)((function(){var e=setTimeout((function(){r()?u():o()}),100);return function(){clearTimeout(e)}}),[r,u,o,c.location.hash]),Object(a.useMemo)((function(){return{open:u,close:o}}),[u,o])},O=n(3),v=["visible","onClose","children","className","closeButton"],m=function(e){var t=e.visible,n=e.onClose,u=e.children,i=e.className,f=e.closeButton,m=void 0===f?"Blue":f,p=Object(r.a)(e,v),k=Object(a.useMemo)((function(){return o.a.add({})}),[]),h=Object(a.useCallback)((function(){n()}),[n]),g=Object(a.useCallback)((function(){if(t)return h(),!1}),[t,h]),T=Object(a.useCallback)((function(){if(!o.a.focus(k)){var e=o.a.getCurrent();e&&e.blur(),o.a.setActiveContainer(k),setTimeout((function(){o.a.setPointerMode(!1),o.a.focus(k)}),500)}}),[k]),C=Object(a.useCallback)((function(){var e=o.a.getCurrent();requestAnimationFrame((function(){null===e||void 0===e||e.scrollIntoViewIfNeeded()}))}),[]);Object(d.a)("Back",g),Object(d.a)("ArrowUp",C),Object(d.a)("ArrowDown",C),Object(d.a)(m,g);var y=j("popup",g);return Object(a.useEffect)((function(){t?(T(),y.open()):y.close()}),[t,T,y]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:l()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:h}),Object(O.jsx)(b.a,Object(c.a)(Object(c.a)({},p),{},{spotlightId:k,spotlightRestrict:"self-only",spotlightDisabled:!t,className:l()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},i),children:Object(O.jsx)(s.b,{className:"max-h-screen",children:u})}))]})}},947:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(960),r=n.n(c);function a(e){return r()(1e3*(e||0),{leading:!0})}},948:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j}));var c=n(907),r=n.n(c),a=n(198),u=n.n(a),o=n(949),i=n.n(o),l=n(965),s=n.n(l),b=function(e){return e<10?"0".concat(e):e};function d(e,t,n){return u()(e,(function(e,c){var a,u,o,i,l,d,f,j=r()([(null===(a=e.type)||void 0===a?void 0:a.title)&&(null===(u=e.author)||void 0===u?void 0:u.title)?"".concat(null===(o=e.type)||void 0===o?void 0:o.title,"."):null===(i=e.type)||void 0===i?void 0:i.title,null===(l=e.author)||void 0===l?void 0:l.title,(null===(d=e.type)||void 0===d?void 0:d.title)||(null===(f=e.author)||void 0===f?void 0:f.title)?"(".concat(s()(e.lang),")"):s()(e.lang),"ac3"===e.codec&&s()(e.codec)]).join(" ");return{name:j,number:"".concat(b(c+1),"."),lang:e.lang,default:n&&n===j||!n&&t&&"ac3"===e.codec}}))}function f(e,t,n){return i()(u()(e,(function(e){var c="string"===typeof e.url?e.url:e.url[t]||e.url.http,r=e.quality;return{src:c,name:r,type:c.includes(".m3u8")?"application/x-mpegURL":"video/mp4",default:n===r}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function j(e,t,n){return u()(e,(function(e,c){var r="".concat(s()(e.lang)).concat(e.forced?" Forced":"");return{name:r,number:"".concat(b(c+1),"."),src:e.url,lang:e.lang,default:n&&n===r||!n&&t&&e.forced&&"rus"===e.lang}}))}},967:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var c=n(13),r=n(27),a=n.n(r),u=n(50),o=n(59),i=n(60),l=n(2),s=n.n(l),b=n(977),d=n.n(b),f=n(257),j=n.n(f),O=n(896),v=n(95),m=n(55),p=n.n(m),k=n(979),h=n.n(k),g=n(980),T=n.n(g),C=n(908),y=n.n(C),x=n(260),S=n(91),N=n(92),w=function(){function e(t){Object(S.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(N.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var c=new FileReader;c.addEventListener("loadend",(function(e){var n,c=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(c))})),c.addEventListener("error",(function(){return n("Error while reading the Blob object")})),c.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,c){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(c){var r="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),a=new Blob([r],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(c){var r=new TextDecoder("utf-8").decode(c),a="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),u=new Blob([a],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(u),n(t.objectURL)}))})):c("No TextDecoder constructor found"):c("No FileReader constructor found"):c("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var c=new FileReader;c.addEventListener("loadend",(function(e){var n,c=null===(n=e.target)||void 0===n?void 0:n.result;t(c)})),c.addEventListener("error",(function(){return n()})),c.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function E(){return(E=Object(u.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,c=new w(n),e.abrupt("return",c.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(3),A=["autoPlay","audioTracks","sourceTracks","subtitleTracks","streamingType","isSettingsOpen","onUpdate","onAudioChange","onSourceChange","onSubtitleChange","className","mediaComponent"];function L(e){var t=e.autoPlay,n=e.audioTracks,c=e.sourceTracks,r=e.subtitleTracks,a=e.streamingType,u=e.isSettingsOpen,i=e.onAudioChange,s=e.onSourceChange,b=e.onSubtitleChange,d=Object(l.useRef)(null),f=Object(l.useRef)(null),j=Object(l.useRef)(0),O=Object(l.useRef)(!1),v=Object(l.useState)(!1),m=Object(o.a)(v,2),p=m[0],k=m[1],g=Object(x.a)("is_hls.js_active"),C=Object(o.a)(g,1)[0],S=Object(l.useState)((function(){return(null===n||void 0===n?void 0:n.find((function(e){return e.default})))||(null===n||void 0===n?void 0:n[0])})),N=Object(o.a)(S,2),w=N[0],R=N[1],A=Object(l.useState)((function(){return(null===c||void 0===c?void 0:c.find((function(e){return e.default})))||(null===c||void 0===c?void 0:c[0])})),L=Object(o.a)(A,2),I=L[0],P=L[1],U=Object(l.useState)((function(){return(null===r||void 0===r?void 0:r.find((function(e){return e.default})))||null})),M=Object(o.a)(U,2),V=M[0],B=M[1],F=Object(l.useCallback)((function(){return"hls2"===a?[]:n}),[n,a]),_=Object(l.useCallback)((function(){return null===w||void 0===w?void 0:w.name}),[w]),D=Object(l.useCallback)((function(e){var t,c=null!==(t=null===n||void 0===n?void 0:n.findIndex((function(t){return t.name===e})))&&void 0!==t?t:-1;if(-1!==c){var r=n[c];R(r),null===i||void 0===i||i(r)}}),[n,i]),W=Object(l.useCallback)((function(){return y()(c,"src")}),[c]),$=Object(l.useCallback)((function(){return null===I||void 0===I?void 0:I.name}),[I]),z=Object(l.useCallback)((function(e){var t,n=null!==(t=null===c||void 0===c?void 0:c.findIndex((function(t){return t.name===e})))&&void 0!==t?t:-1;if(-1!==n){var r=c[n];P(r),null===s||void 0===s||s(r)}}),[c,s]),H=Object(l.useCallback)((function(){return r}),[r]),q=Object(l.useCallback)((function(){return null===V||void 0===V?void 0:V.name}),[V]),J=Object(l.useCallback)((function(e){var t,n=null!==(t=null===r||void 0===r?void 0:r.findIndex((function(t){return t.name===e})))&&void 0!==t?t:-1,c=-1!==n&&r[n]||null;B(c),null===b||void 0===b||b(c)}),[r,b]),K=Object(l.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.findIndex((function(e){return e.name===w.name})))&&void 0!==e?e:0}),[n,w]),G=Object(l.useMemo)((function(){return"hls"===a?null===I||void 0===I?void 0:I.src.replace(/master-v1a\d/,"master-v1a".concat(K+1)):null===I||void 0===I?void 0:I.src}),[a,K,null===I||void 0===I?void 0:I.src]),Q=Object(l.useCallback)((function(){d.current&&(k(!0),d.current.removeEventListener("canplay",Q),j.current>0?(d.current.currentTime=j.current,O.current?d.current.pause():d.current.play()):t&&!O.current&&d.current.play())}),[t]);return Object(l.useEffect)((function(){if(d.current&&G){if(!1!==C&&G.includes(".m3u8")&&h.a.isSupported()){var e=f.current=new h.a({enableWebVTT:!1,enableCEA708Captions:!1});e.attachMedia(d.current),e.on(h.a.Events.MEDIA_ATTACHED,(function(){e.loadSource(G)}))}else d.current.src=G;k(!1),d.current.addEventListener("canplay",Q)}return function(){d.current&&(d.current.currentTime>0&&(j.current=d.current.currentTime),d.current.removeEventListener("canplay",Q)),f.current&&(f.current.destroy(),f.current=null)}}),[G,C,Q]),Object(l.useEffect)((function(){if(p)if(f.current){var e,t=null===(e=f.current.audioTracks)||void 0===e?void 0:e[K];t&&(f.current.audioTrack=t.id)}else if(d.current){var n;(null===(n=d.current.audioTracks)||void 0===n?void 0:n[K])&&(T()(d.current.audioTracks,(function(e,t){e.enabled=t===K})),d.current.currentTime-=1)}}),[p,K]),Object(l.useEffect)((function(){if(p&&d.current){for(;d.current.firstChild;)d.current.lastChild.track.mode="disabled",d.current.removeChild(d.current.lastChild);if(V){var e=function(e){if(d.current){var t=document.createElement("track");d.current.appendChild(t),t.src=e,t.kind="captions",t.id=V.name,t.label=V.name,t.srclang=V.lang,t.track.mode="showing"}};V.src.endsWith(".srt")?function(e){return E.apply(this,arguments)}(V.src).then(e):e(V.src)}}}),[p,V]),Object(l.useEffect)((function(){O.current=Boolean(u)}),[u]),Object(l.useMemo)((function(){return{videoRef:d,getAudioTracks:F,getAudioTrack:_,setAudioTrack:D,getSourceTracks:W,getSourceTrack:$,setSourceTrack:z,getSubtitleTracks:H,getSubtitleTrack:q,setSubtitleTrack:J}}),[d,F,_,D,W,$,z,H,q,J])}var I=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],P=s.a.forwardRef((function(e,t){var n=e.autoPlay,r=e.audioTracks,o=e.sourceTracks,s=e.subtitleTracks,b=e.streamingType,d=e.isSettingsOpen,f=e.onUpdate,j=e.onAudioChange,O=e.onSourceChange,m=e.onSubtitleChange,k=e.className,h=(e.mediaComponent,Object(i.a)(e,A)),g=Object(l.useCallback)((function(){null===f||void 0===f||f()}),[f]),T=Object(l.useMemo)((function(){return I.reduce((function(e,t){return Object(c.a)(Object(c.a)({},e),{},Object(v.a)({},t,(function(){var e;g();for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];null===(e=h[t])||void 0===e||e.call.apply(e,[h].concat(c))})))}),{})}),[h,g]),C=function(e,t){var n=L(t),c=n.videoRef,r=Object(l.useCallback)((function(){return c.current?c.current.currentTime:0}),[c]),o=Object(l.useCallback)((function(e){c.current&&(c.current.currentTime=e)}),[c]),i=Object(l.useCallback)((function(){return c.current?c.current.playbackRate:1}),[c]),s=Object(l.useCallback)((function(e){c.current&&(c.current.playbackRate=e)}),[c]),b=Object(l.useCallback)((function(){return!!c.current&&c.current.paused}),[c]),d=Object(l.useCallback)((function(){return c.current?c.current.duration:0}),[c]),f=Object(l.useCallback)((function(){return!!c.current&&c.current.networkState===c.current.NETWORK_NO_SOURCE}),[c]),j=Object(l.useCallback)((function(){return!c.current||c.current.readyState<c.current.HAVE_ENOUGH_DATA}),[c]),O=Object(l.useCallback)((function(){return c.current?c.current.buffered.length&&c.current.buffered.end(c.current.buffered.length-1)/c.current.duration:0}),[c]),v=Object(l.useCallback)((function(){return c.current?c.current.currentTime/c.current.duration:0}),[c]),m=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=c.current)||void 0===t?void 0:t.play();case 2:case"end":return e.stop()}}),e)}))),[c]),p=Object(l.useCallback)((function(){var e;null===(e=c.current)||void 0===e||e.pause()}),[c]),k=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b()){e.next=5;break}return e.next=3,m();case 3:e.next=6;break;case 5:p();case 6:case"end":return e.stop()}}),e)}))),[m,p,b]),h=Object(l.useCallback)((function(){var e;null===(e=c.current)||void 0===e||e.load()}),[c]),g=Object(l.useMemo)((function(){return{play:m,pause:p,playPause:k,load:h,get currentTime(){return r()},set currentTime(e){o(e)},get audioTracks(){return n.getAudioTracks()},get audioTrack(){return n.getAudioTrack()},set audioTrack(e){n.setAudioTrack(e)},get sourceTracks(){return n.getSourceTracks()},get sourceTrack(){return n.getSourceTrack()},set sourceTrack(e){n.setSourceTrack(e)},get subtitleTracks(){return n.getSubtitleTracks()},get subtitleTrack(){return n.getSubtitleTrack()},set subtitleTrack(e){n.setSubtitleTrack(e)},get playbackRate(){return i()},set playbackRate(e){s(e)},get paused(){return b()},get duration(){return d()},get error(){return f()},get loading(){return j()},get proportionLoaded(){return O()},get proportionPlayed(){return v()}}}),[n,m,p,k,h,r,o,i,s,b,d,f,j,O,v]);return Object(l.useImperativeHandle)(e,(function(){return g}),[g]),Object(l.useMemo)((function(){return{api:g,player:n}}),[g,n])}(t,{autoPlay:n,audioTracks:r,sourceTracks:o,subtitleTracks:s,streamingType:b,isSettingsOpen:d,onAudioChange:j,onSourceChange:O,onSubtitleChange:m}).player;return Object(R.jsx)("video",Object(c.a)(Object(c.a)(Object(c.a)({},h),T),{},{autoPlay:!1,className:p()("w-screen h-screen",k),ref:C.videoRef}))})),U=n(253),M=n(255),V=n(107),B=n(198),F=n.n(B),_=n(936),D=n(935),W="NONE",$=function(e){var t=e.visible,n=e.onClose,c=e.player,r=Object(l.useState)(t),a=Object(o.a)(r,2),u=a[0],i=a[1],s=Object(l.useState)([]),b=Object(o.a)(s,2),d=b[0],f=b[1],j=Object(l.useState)(null),O=Object(o.a)(j,2),v=O[0],m=O[1],p=Object(l.useState)([]),k=Object(o.a)(p,2),h=k[0],g=k[1],T=Object(l.useState)(null),C=Object(o.a)(T,2),y=C[0],x=C[1],S=Object(l.useState)([]),N=Object(o.a)(S,2),w=N[0],E=N[1],A=Object(l.useState)(W),L=Object(o.a)(A,2),I=L[0],P=L[1],U=Object(l.useMemo)((function(){return F()(d,(function(e){return{title:"".concat(e.number," ").concat(e.name),value:e.name}}))}),[d]),M=Object(l.useMemo)((function(){return F()(h,(function(e){return{title:e.name,value:e.name}}))}),[h]),B=Object(l.useMemo)((function(){return[{title:"\u041d\u0435\u0442",value:W}].concat(Object(V.a)(F()(w,(function(e){return{title:"".concat(e.number," ").concat(e.name),value:e.name}}))))}),[w]),$=Object(l.useCallback)((function(e,t){c.current&&(c.current.getVideoNode()[e]=t)}),[c]),z=Object(l.useCallback)((function(e){m(e),$("audioTrack",e)}),[$]),H=Object(l.useCallback)((function(e){x(e),$("sourceTrack",e)}),[$]),q=Object(l.useCallback)((function(e){P(e),$("subtitleTrack",e)}),[$]),J=Object(l.useCallback)((function(){n()}),[n]);return Object(l.useEffect)((function(){if(t&&c.current){var e=c.current.getVideoNode(),n=e.audioTracks,r=e.audioTrack,a=e.sourceTracks,u=e.sourceTrack,o=e.subtitleTracks,i=e.subtitleTrack;(null===n||void 0===n?void 0:n.length)>1||(null===a||void 0===a?void 0:a.length)>1||(null===o||void 0===o?void 0:o.length)>0?(f(n),m(r),g(a),x(u),E(o),P(i||W)):J()}}),[t,c,J]),Object(l.useEffect)((function(){var e;return t?e=setTimeout((function(){i(!0)}),100):i(!1),function(){clearTimeout(e)}}),[t]),Object(R.jsxs)(_.a,{visible:u,onClose:J,children:[U.length>1&&Object(R.jsx)(D.a,{className:"my-1",label:"\u0417\u0432\u0443\u043a",value:v,options:U,onChange:z,splitIn:2}),M.length>1&&Object(R.jsx)(D.a,{className:"my-1",label:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e",value:y,options:M,onChange:H,splitIn:4}),B.length>1&&Object(R.jsx)(D.a,{className:"my-1",label:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",value:I,options:B,onChange:q,splitIn:4})]})},z=n(918),H=n(947),q=function(e){var t=e.startTime,n=e.startInDelay,c=void 0===n?5:n,r=e.player,a=Object(l.useState)(!0),u=Object(o.a)(a,2),i=u[0],s=u[1],b=Object(l.useState)(c),d=Object(o.a)(b,2),f=d[0],j=d[1],v=Object(l.useMemo)((function(){return Object(H.a)(t)}),[t]),m=Object(l.useCallback)((function(){r.current&&(s(!1),r.current.getVideoNode().currentTime=t)}),[t,r]),p=Object(l.useCallback)((function(){s(!1)}),[]);return Object(l.useEffect)((function(){var e;return i&&(e=setInterval((function(){j((function(e){var t=e-1;return t<=0&&m(),t}))}),1e3)),function(){clearInterval(e)}}),[i,m]),t&&i?Object(R.jsxs)(z.a,{spotlightRestrict:"self-only",className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(R.jsxs)(O.a,{onClick:m,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",v," \u0447\u0435\u0440\u0435\u0437 ",f]}),Object(R.jsx)(O.a,{autoFocus:!0,onClick:p,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},J=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","streamingType","onPlay","onPause","onEnded","onTimeSync"],K=function(e){var t=e.title,n=e.description,r=e.poster,s=e.audios,b=e.sources,f=e.subtitles,v=e.startTime,m=e.timeSyncInterval,p=void 0===m?30:m,k=e.streamingType,h=e.onPlay,g=e.onPause,T=e.onEnded,C=e.onTimeSync,y=Object(i.a)(e,J),S=Object(l.useRef)(),N=Object(l.useState)(!0),w=Object(o.a)(N,2),E=w[0],A=w[1],L=Object(l.useState)(!1),I=Object(o.a)(L,2),V=I[0],B=I[1],F=Object(l.useState)(!1),_=Object(o.a)(F,2),D=_[0],W=_[1],z=Object(x.a)("is_pause_by_ok_click_active"),H=Object(o.a)(z,1)[0],K=Object(l.useCallback)((function(){A(!1),W(!1),null===h||void 0===h||h()}),[h]),G=Object(l.useCallback)((function(e){A(!0),null===g||void 0===g||g(e.currentTime)}),[g]),Q=Object(l.useCallback)((function(e){var t=j.a.getCurrent();if((!t||!t.offsetHeight||!t.offsetWidth)&&S.current&&H)return S.current.getVideoNode().playPause(),!1}),[S,H]),X=Object(l.useCallback)((function(e){null===T||void 0===T||T(e.target.currentTime)}),[T]),Y=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.current||!C){e.next=5;break}return t=S.current.getVideoNode(),n=t.currentTime,e.next=5,C(n);case 5:case"end":return e.stop()}}),e)}))),[C,S]),Z=Object(l.useCallback)((function(){B(!0)}),[]),ee=Object(l.useCallback)((function(){S.current&&(W(!0),S.current.getVideoNode().pause())}),[S]),te=Object(l.useCallback)((function(){S.current&&(W(!1),S.current.getVideoNode().play())}),[]),ne=Object(l.useCallback)((function(){S.current&&S.current.getVideoNode().pause()}),[S]);return Object(l.useEffect)((function(){var e;return E&&(e=setTimeout((function(){A(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[E]),Object(l.useEffect)((function(){var e;return C&&(e=setInterval(Y,1e3*p)),function(){e&&clearInterval(e)}}),[p,C,Y]),Object(M.a)("Back",Y),Object(M.a)("Blue",ee),Object(M.a)("Play",te),Object(M.a)("Pause",ne),Object(M.a)("Enter",Q),Object(M.a)("ArrowUp",ee),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)($,{visible:D,onClose:te,player:S}),E&&Object(R.jsx)(U.a,{className:"absolute z-10 top-0 p-4",children:t}),E&&Object(R.jsx)(O.a,{className:"absolute z-101 bottom-8 right-10 text-blue-600",icon:"settings",onClick:ee}),V&&v>0&&Object(R.jsx)(q,{startTime:v,player:S}),Object(R.jsx)(d.a,Object(c.a)(Object(c.a)({},y),{},{ref:S,locale:"ru",poster:r,title:n,jumpBy:15,onPlay:K,onPause:G,onEnded:X,onLoadedMetadata:Z,streamingType:k,isSettingsOpen:D,audioTracks:s,sourceTracks:b,subtitleTracks:f,videoComponent:Object(R.jsx)(P,{})}))]})}}}]);
//# sourceMappingURL=23.6713907d.chunk.js.map