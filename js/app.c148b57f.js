(function(e){function t(t){for(var o,a,i=t[0],u=t[1],p=t[2],s=0,l=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(l.length)l.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9c51b74"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"a3cac4da"}[e]+".css",c=u.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var p=r[i],s=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===o||s===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){p=l[i],s=p.getAttribute("data-href");if(s===o||s===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],b.parentNode.removeChild(b),n(r)},b.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var p,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var l=new Error;p=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}c[e]=void 0}};var b=setTimeout((function(){p({type:"timeout",target:s})}),12e4);s.onerror=s.onload=p,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/web/",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=t,p=p.slice();for(var l=0;l<p.length;l++)t(p[l]);var b=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0988":function(e,t,n){"use strict";n("e959")},1562:function(e,t,n){"use strict";n("b1bf")},"3d32":function(e,t,n){"use strict";n("8cfd")},"8cfd":function(e,t,n){},b1bf:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={id:"nav"},c=Object(o["i"])("Home"),r=Object(o["i"])(" | "),i=Object(o["i"])("About");function u(e,t){var n=Object(o["A"])("router-link"),u=Object(o["A"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",a,[Object(o["j"])(n,{to:"/"},{default:Object(o["H"])((function(){return[c]})),_:1}),r,Object(o["j"])(n,{to:"/about"},{default:Object(o["H"])((function(){return[i]})),_:1})]),Object(o["j"])(u)],64)}n("1562");var p=n("d959"),s=n.n(p);const l={},b=s()(l,[["render",u]]);var h=b,O=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function d(e,t,n,a,c,r){var i=Object(o["A"])("App"),u=Object(o["A"])("Open"),p=Object(o["A"])("Toc"),s=Object(o["A"])("Content");return Object(o["s"])(),Object(o["f"])("div",O,[Object(o["j"])(i,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(o["s"])(),Object(o["d"])(u,{key:0,ref:"open",onBookOpened:e.onOpenBook,workspace:e.workspace},null,8,["onBookOpened","workspace"])):Object(o["e"])("",!0),null!==e.book?(Object(o["s"])(),Object(o["d"])(p,{key:1,ref:"toc",onChapterRead:e.onChapterRead,book:e.book},null,8,["onChapterRead","book"])):Object(o["e"])("",!0),null!==e.chapter?(Object(o["s"])(),Object(o["d"])(s,{key:2,ref:"content",chapter:e.chapter},null,8,["chapter"])):Object(o["e"])("",!0)])}var f=n("d4ec"),j=n("bee2"),g=n("262e"),k=n("2caf"),v=n("9ab4"),m=function(e){return Object(o["w"])("data-v-6ccf8105"),e=e(),Object(o["t"])(),e},y={class:"app"},w={key:0,class:"help"},C=m((function(){return Object(o["g"])("h2",null,"Getting started",-1)})),R=m((function(){return Object(o["g"])("li",null,[Object(o["i"])(" Make sure that you have Java 17 installed. You can use "),Object(o["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(o["i"])(" to install Java ")],-1)})),A=m((function(){return Object(o["g"])("li",null,[Object(o["i"])(" Download the application: "),Object(o["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.7/sw-app.jar"},"sw-app.jar")],-1)})),P=m((function(){return Object(o["g"])("li",null,[Object(o["i"])(" Run the application using the following command "),Object(o["g"])("pre",null,"$ java -jar sw-app.jar"),Object(o["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),F=Object(o["i"])(" Click "),T=Object(o["i"])(" to check if the application has started correctly. ");function I(e,t,n,a,c,r){return Object(o["s"])(),Object(o["f"])("div",y,[Object(o["g"])("h1",null,Object(o["C"])(e.message),1),e.showHelp?(Object(o["s"])(),Object(o["f"])("div",w,[C,Object(o["g"])("ol",null,[R,A,P,Object(o["g"])("li",null,[F,Object(o["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),T])])])):Object(o["e"])("",!0)])}var _=n("bc3a"),B=n.n(_),H=B.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),S=n("ce1f"),x=function(e){Object(g["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(j["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return H.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===e.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(S["b"]);x=Object(v["a"])([Object(S["a"])({name:"App",emits:["appIsRunning"]})],x);var E=x;n("0988");const L=s()(E,[["render",I],["__scopeId","data-v-6ccf8105"]]);var M=L,$={class:"content"};function U(e,t,n,a,c,r){return Object(o["s"])(),Object(o["f"])("div",$,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(e.chapter.entries,(function(e){return Object(o["s"])(),Object(o["f"])("div",{key:e.id},Object(o["C"])(e.type),1)})),128))])}var N=function(e){Object(g["a"])(n,e);var t=Object(k["a"])(n);function n(){return Object(f["a"])(this,n),t.apply(this,arguments)}return n}(S["b"]);N=Object(v["a"])([Object(S["a"])({name:"Content",props:{chapter:Object}})],N);var V=N;const D=s()(V,[["render",U]]);var J=D,G=function(e){return Object(o["w"])("data-v-784e602c"),e=e(),Object(o["t"])(),e},W={class:"open"},q={class:"openRepository"},z=G((function(){return Object(o["g"])("h2",null,"Open repository",-1)})),K=G((function(){return Object(o["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),Y=G((function(){return Object(o["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),Q=["disabled"],X=G((function(){return Object(o["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),Z=["disabled"],ee=G((function(){return Object(o["g"])("label",{for:"openLocal"},"Open locally",-1)})),te=G((function(){return Object(o["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),ne=["disabled"],oe={class:"workspace"},ae=G((function(){return Object(o["g"])("h2",null,"Workspace",-1)})),ce=G((function(){return Object(o["g"])("label",{for:"workspace"},"Workspace",-1)})),re={class:"buttons"},ie={key:0,class:"open"},ue={class:"actionMessage"};function pe(e,t,n,a,c,r){return Object(o["s"])(),Object(o["f"])("div",W,[Object(o["g"])("div",q,[z,Object(o["g"])("div",null,[Object(o["I"])(Object(o["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[o["E"],e.openFrom]]),K]),Object(o["g"])("div",null,[Y,Object(o["I"])(Object(o["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.pathToRepository=t}),disabled:"openLocal"===e.openFrom},null,8,Q),[[o["F"],e.pathToRepository]])]),Object(o["g"])("div",null,[X,Object(o["I"])(Object(o["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.workspace.bookPath=t}),disabled:"openLocal"===e.openFrom},null,8,Z),[[o["F"],e.workspace.bookPath]])]),Object(o["g"])("div",null,[Object(o["I"])(Object(o["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.openFrom=t})},null,512),[[o["E"],e.openFrom]]),ee]),Object(o["g"])("div",null,[te,Object(o["I"])(Object(o["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.workspace.bookPath=t}),disabled:"checkout"===e.openFrom},null,8,ne),[[o["F"],e.workspace.bookPath]])])]),Object(o["g"])("div",oe,[ae,Object(o["g"])("div",null,[ce,Object(o["I"])(Object(o["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.workspace.workPath=t})},null,512),[[o["F"],e.workspace.workPath]])])]),Object(o["g"])("div",re,["checkout"===e.openFrom?(Object(o["s"])(),Object(o["f"])("button",ie,"Checkout and Open")):(Object(o["s"])(),Object(o["f"])("button",{key:1,class:"open",onClick:t[6]||(t[6]=function(){return e.onOpenBook&&e.onOpenBook.apply(e,arguments)})},"Open")),Object(o["g"])("span",ue,Object(o["C"])(e.actionMessage),1)])])}var se=n("5530"),le=(n("498a"),function(e){Object(g["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.apply(this,arguments),e.pathToRepository="",e.openFrom="checkout",e.actionMessage="",e}return Object(j["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){var t=e.workspace.bookPath;t.trim().length>0&&e.handleOpenBook(t)}))}},{key:"onOpenBook",value:function(){this.actionMessage="";var e=this.workspace.bookPath;0!==e.trim().length?this.handleOpenBook(e):this.actionMessage="Please provide the folder path"}},{key:"handleOpenBook",value:function(e){var t=this;this.openBook(e).then((function(e){t.$emit("bookOpened",e)})).catch((function(e){t.actionMessage="Failed to open book (".concat(e.message,")")}))}},{key:"openBook",value:function(e){return H.get("/api/book/open",{params:{path:e}}).then((function(e){return e.data})).then((function(t){return Object(se["a"])(Object(se["a"])({},t),{},{path:e})}))}}]),n}(S["b"]));le=Object(v["a"])([Object(S["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],le);var be=le;n("3d32");const he=s()(be,[["render",pe],["__scopeId","data-v-784e602c"]]);var Oe=he,de=(n("a4d3"),n("e01a"),{class:"toc"}),fe=Object(o["g"])("h2",null,"Chapters",-1),je=["onClick"];function ge(e,t,n,a,c,r){return Object(o["s"])(),Object(o["f"])("div",de,[Object(o["g"])("h1",null,Object(o["C"])(e.book.title),1),Object(o["g"])("p",null,Object(o["C"])(e.book.description),1),fe,(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(e.book.chapters,(function(t){return Object(o["s"])(),Object(o["f"])("div",{key:t.title},[Object(o["g"])("h3",{onClick:function(n){return e.onReadChapter(t.path)}},Object(o["C"])(t.title),9,je),Object(o["g"])("p",null,Object(o["C"])(t.description),1)])})),128))])}var ke=function(e){Object(g["a"])(n,e);var t=Object(k["a"])(n);function n(){return Object(f["a"])(this,n),t.apply(this,arguments)}return Object(j["a"])(n,[{key:"onReadChapter",value:function(e){var t=this;this.readChapter(e).then((function(e){t.$emit("chapterRead",e)})).catch((function(e){console.log("Failed to open chapter",e)}))}},{key:"readChapter",value:function(e){return H.get("/api/book/read-chapter",{params:{path:e}}).then((function(e){return e.data})).then((function(e){return e}))}}]),n}(S["b"]);ke=Object(v["a"])([Object(S["a"])({name:"Toc",emits:["chapterRead"],props:{book:Object}})],ke);var ve=ke;const me=s()(ve,[["render",ge]]);var ye=me,we=function(e){Object(g["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(f["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e.book=null,e.chapter=null,e.workspace={bookPath:"",workPath:""},e}return Object(j["a"])(n,[{key:"mounted",value:function(){var e=this.$route.params.bookPath;this.workspace.bookPath=e||""}},{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}},{key:"onOpenBook",value:function(e){this.$router.push({name:"Home",params:{bookPath:e.path}}),this.book=e}},{key:"onChapterRead",value:function(e){this.chapter=e}}]),n}(S["b"]);we=Object(v["a"])([Object(S["a"])({components:{App:M,Open:Oe,Toc:ye,Content:J}})],we);var Ce=we;const Re=s()(Ce,[["render",d]]);var Ae=Re,Pe=n("6c02"),Fe=[{path:"/:bookPath?",name:"Home",component:Ae,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Te=Object(Pe["a"])({history:Object(Pe["b"])(),routes:Fe}),Ie=Te,_e=n("5502"),Be=Object(_e["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(h).use(Be).use(Ie).mount("#app")},e959:function(e,t,n){}});
//# sourceMappingURL=app.c148b57f.js.map