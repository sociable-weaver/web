(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(h.length)h.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"58595416"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"27b3eaaf"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){s=h[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var h=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/sociable-weaver-web/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1562:function(e,t,n){"use strict";n("6a9f")},5274:function(e,t,n){},"6a9f":function(e,t,n){},b786:function(e,t,n){"use strict";n("5274")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},o=Object(a["h"])("Home"),c=Object(a["h"])(" | "),i=Object(a["h"])("About");function u(e,t){var n=Object(a["y"])("router-link"),u=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",r,[Object(a["i"])(n,{to:"/"},{default:Object(a["D"])((function(){return[o]})),_:1}),c,Object(a["i"])(n,{to:"/about"},{default:Object(a["D"])((function(){return[i]})),_:1})]),Object(a["i"])(u)],64)}n("1562");var s=n("6b0d"),l=n.n(s);const h={},p=l()(h,[["render",u]]);var b=p,f=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function d(e,t,n,r,o,c){var i=Object(a["y"])("App");return Object(a["r"])(),Object(a["e"])("div",f,[Object(a["i"])(i,{msg:"Sociable Weaver"})])}var j=n("d4ec"),v=n("262e"),O=n("2caf"),m=n("9ab4"),g=function(e){return Object(a["v"])("data-v-4c1d1246"),e=e(),Object(a["s"])(),e},y={class:"hello"},w={key:0,class:"help"},k=g((function(){return Object(a["f"])("h2",null,"Getting started",-1)})),A=g((function(){return Object(a["f"])("li",null,[Object(a["h"])(" Make sure that you have Java 17 installed. You can use "),Object(a["f"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["h"])(" to install Java ")],-1)})),C=g((function(){return Object(a["f"])("li",null,[Object(a["h"])(" Download the application: "),Object(a["f"])("a",{class:"download-app",href:"https://github.com/albertattard/sociable-weaver-app-java-boot/releases/download/v0.3/sw-app.jar"},"sw-app.jar")],-1)})),S=g((function(){return Object(a["f"])("li",null,[Object(a["h"])(" Run the application using the following command "),Object(a["f"])("pre",null,"$ java -jar sw-app.jar"),Object(a["h"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),_=Object(a["h"])(" Click "),H=Object(a["h"])(" to check if the application has started correctly. ");function E(e,t,n,r,o,c){return Object(a["r"])(),Object(a["e"])("div",y,[Object(a["f"])("h1",null,Object(a["A"])(e.message),1),e.showHelp?(Object(a["r"])(),Object(a["e"])("div",w,[k,Object(a["f"])("ol",null,[A,C,S,Object(a["f"])("li",null,[_,Object(a["f"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),H])])])):Object(a["d"])("",!0)])}var P,T=n("bee2"),x=n("bc3a"),M=n.n(x),B=M.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});function N(){return B.get("/hello").then((function(e){return e.status})).then((function(e){return D(e)})).catch((function(e){if("Network Error"!==e.message)throw e;return P.CannotBeReached}))}function D(e){return 200==e?P.Healthy:403==e?P.Forbidden:P.Unhealthy}(function(e){e[e["CannotBeReached"]=0]="CannotBeReached",e[e["Unhealthy"]=1]="Unhealthy",e[e["Forbidden"]=2]="Forbidden",e[e["Healthy"]=3]="Healthy"})(P||(P={}));var F=n("ce1f"),L=function(e){Object(v["a"])(n,e);var t=Object(O["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(T["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;N().then((function(t){e.updateMessage(t)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")")}))}},{key:"updateMessage",value:function(e){switch(this.showHelp=!1,e){case P.CannotBeReached:this.message="Application is not running",this.showHelp=!0;break;case P.Forbidden:this.message="Application is running, but forbids requests";break;case P.Unhealthy:this.message="Application is running, but unhealthy";break;case P.Healthy:this.message="Application is running";break}}}]),n}(F["b"]);n("b786");const R=l()(L,[["render",E],["__scopeId","data-v-4c1d1246"]]);var U=R,J=function(e){Object(v["a"])(n,e);var t=Object(O["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return n}(F["b"]);J=Object(m["a"])([Object(F["a"])({components:{App:U}})],J);var q=J;const I=l()(q,[["render",d]]);var K=I,W=n("6c02"),Y=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=Object(W["a"])({history:Object(W["b"])(),routes:Y}),G=$,z=n("5502"),Q=Object(z["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(b).use(Q).use(G).mount("#app")}});
//# sourceMappingURL=app.4f75738b.js.map