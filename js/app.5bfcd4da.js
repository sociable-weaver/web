(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b93b297b"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a3cac4da"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){s=b[i],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var b=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",b.name="ChunkLoadError",b.type=a,b.request=r,n[1](b)}c[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/web/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"04dd":function(e,t,n){},"07c1":function(e,t,n){"use strict";n("6184")},1562:function(e,t,n){"use strict";n("b1bf")},"1e6c":function(e,t,n){},2910:function(e,t,n){},3173:function(e,t,n){"use strict";n("f005")},4020:function(e,t,n){"use strict";n("7073")},"42c6":function(e,t,n){"use strict";n("9e05")},6184:function(e,t,n){},7073:function(e,t,n){},7087:function(e,t,n){},"9e05":function(e,t,n){},a9b4:function(e,t,n){"use strict";n("c59c")},ab21:function(e,t,n){"use strict";n("04dd")},b1bf:function(e,t,n){},b805:function(e,t,n){"use strict";n("cb3e")},ba04:function(e,t,n){},c47f:function(e,t,n){},c59c:function(e,t,n){},c9b5:function(e,t,n){"use strict";n("7087")},cb3e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},c=Object(a["i"])("Home"),o=Object(a["i"])(" | "),i=Object(a["i"])("About");function u(e,t){var n=Object(a["B"])("router-link"),u=Object(a["B"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",r,[Object(a["j"])(n,{to:"/"},{default:Object(a["I"])((function(){return[c]})),_:1}),o,Object(a["j"])(n,{to:"/about"},{default:Object(a["I"])((function(){return[i]})),_:1})]),Object(a["j"])(u)],64)}n("1562");var s=n("d959"),l=n.n(s);const b={},p=l()(b,[["render",u]]);var h=p,O=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function d(e,t,n,r,c,o){var i=Object(a["B"])("MessageBar"),u=Object(a["B"])("App"),s=Object(a["B"])("Open"),l=Object(a["B"])("Toc"),b=Object(a["B"])("Content");return Object(a["t"])(),Object(a["f"])("div",O,[null!==e.message?(Object(a["t"])(),Object(a["d"])(i,{key:0,ref:"messageBar",message:e.message},null,8,["message"])):Object(a["e"])("",!0),Object(a["j"])(u,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(a["t"])(),Object(a["d"])(s,{key:1,ref:"open",onBookOpened:e.onOpenBook,workspace:e.workspace},null,8,["onBookOpened","workspace"])):Object(a["e"])("",!0),null!==e.book?(Object(a["t"])(),Object(a["d"])(l,{key:2,ref:"toc",onChapterRead:e.onChapterRead,onErrorMessage:e.onErrorMessage,book:e.book,chapterPath:e.workspace.chapterPath},null,8,["onChapterRead","onErrorMessage","book","chapterPath"])):Object(a["e"])("",!0),null!==e.chapter?(Object(a["t"])(),Object(a["d"])(b,{key:3,ref:"content",chapter:e.chapter,onVariableUpdated:e.onVariableUpdated,onVariableInitialised:e.onVariableUpdated},null,8,["chapter","onVariableUpdated","onVariableInitialised"])):Object(a["e"])("",!0)])}var j=n("d4ec"),f=n("bee2"),v=n("262e"),y=n("2caf"),k=(n("159b"),n("9ab4")),m=function(e){return Object(a["x"])("data-v-6cf34f86"),e=e(),Object(a["u"])(),e},g={class:"app"},w={key:0,class:"help"},P=m((function(){return Object(a["g"])("h2",null,"Getting started",-1)})),C=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Make sure that you have Java 17 installed. You can use "),Object(a["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["i"])(" to install Java ")],-1)})),D=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Download the application: "),Object(a["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.15/sw-app.jar"},"sw-app.jar")],-1)})),R=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Run the application using the following command "),Object(a["g"])("pre",null,"$ java -jar sw-app.jar"),Object(a["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),B=Object(a["i"])(" Click "),I=Object(a["i"])(" to check if the application has started correctly. ");function V(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",g,[Object(a["g"])("h1",null,Object(a["D"])(e.message),1),e.showHelp?(Object(a["t"])(),Object(a["f"])("div",w,[P,Object(a["g"])("ol",null,[C,D,R,Object(a["g"])("li",null,[B,Object(a["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),I])])])):Object(a["e"])("",!0)])}var S=n("bc3a"),_=n.n(S),T=_.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),E=n("ce1f"),F=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return T.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===e.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(E["b"]);F=Object(k["a"])([Object(E["a"])({name:"App",emits:["appIsRunning"]})],F);var A=F;n("f177");const M=l()(A,[["render",V],["__scopeId","data-v-6cf34f86"]]);var U=M,N={class:"content"},x=["id"],H={key:13,class:"error"},$=Object(a["i"])(" Do not know how to renter entries of type: "),G={key:15,class:"error"},L={key:16,class:"buttons runnable"},J=["disabled","onClick"],W=["disabled","onClick"];function q(e,t,n,r,c,o){var i=Object(a["B"])("ChapterRenderer"),u=Object(a["B"])("Command"),s=Object(a["B"])("Create"),l=Object(a["B"])("DockerTagAndPush"),b=Object(a["B"])("Download"),p=Object(a["B"])("GitApplyPatch"),h=Object(a["B"])("GitCommitChanges"),O=Object(a["B"])("GitTagCurrentCommit"),d=Object(a["B"])("Markdown"),j=Object(a["B"])("Replace"),f=Object(a["B"])("Section"),v=Object(a["B"])("Subsection"),y=Object(a["B"])("Variable");return Object(a["t"])(),Object(a["f"])("div",N,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(e.chapter.entries,(function(t,n){return Object(a["t"])(),Object(a["f"])("div",{key:t.id,id:t.id},["chapter"===t.type?(Object(a["t"])(),Object(a["d"])(i,{key:0,entry:t},null,8,["entry"])):"command"===t.type?(Object(a["t"])(),Object(a["d"])(u,{key:1,entry:t},null,8,["entry"])):"create"===t.type?(Object(a["t"])(),Object(a["d"])(s,{key:2,entry:t},null,8,["entry"])):"docker-tag-and-push"===t.type?(Object(a["t"])(),Object(a["d"])(l,{key:3,entry:t},null,8,["entry"])):"download"===t.type?(Object(a["t"])(),Object(a["d"])(b,{key:4,entry:t},null,8,["entry"])):"git-apply-patch"===t.type?(Object(a["t"])(),Object(a["d"])(p,{key:5,entry:t},null,8,["entry"])):"git-commit-changes"===t.type?(Object(a["t"])(),Object(a["d"])(h,{key:6,entry:t},null,8,["entry"])):"git-tag-current-commit"===t.type?(Object(a["t"])(),Object(a["d"])(O,{key:7,entry:t},null,8,["entry"])):"markdown"===t.type?(Object(a["t"])(),Object(a["d"])(d,{key:8,entry:t},null,8,["entry"])):"replace"===t.type?(Object(a["t"])(),Object(a["d"])(j,{key:9,entry:t},null,8,["entry"])):"section"===t.type?(Object(a["t"])(),Object(a["d"])(f,{key:10,entry:t},null,8,["entry"])):"subsection"===t.type?(Object(a["t"])(),Object(a["d"])(v,{key:11,entry:t},null,8,["entry"])):"variable"===t.type?(Object(a["t"])(),Object(a["d"])(y,{key:12,entry:t,onVariableUpdated:e.onVariableUpdated,onVariableInitialised:e.onVariableInitialised},null,8,["entry","onVariableUpdated","onVariableInitialised"])):(Object(a["t"])(),Object(a["f"])("div",H,[$,Object(a["g"])("code",null,Object(a["D"])(t.type),1)])),t.output?(Object(a["t"])(),Object(a["f"])("pre",{key:14,class:Object(a["p"])(["output",{error:t.failed}])},Object(a["D"])(t.output),3)):Object(a["e"])("",!0),t.error?(Object(a["t"])(),Object(a["f"])("pre",G,Object(a["D"])(t.error),1)):Object(a["e"])("",!0),t.runnable?(Object(a["t"])(),Object(a["f"])("div",L,[Object(a["g"])("button",{disabled:e.disabled,onClick:function(n){return e.onRun(t)},class:"primary"},"Run",8,J),Object(a["g"])("button",{disabled:e.disabled,onClick:function(t){return e.onRunUntilHere(n)}},"Run Until Here",8,W)])):Object(a["e"])("",!0)],8,x)})),128))])}n("b0c0");function K(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("h2",null,Object(a["D"])(e.chapter),1)}var Y=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"chapter",get:function(){return this.entry.parameters[0]}}]),n}(E["b"]);Y=Object(k["a"])([Object(E["a"])({name:"Chapter",props:{entry:Object}})],Y);var X=Y;const z=l()(X,[["render",K]]);var Q=z;function Z(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}n("99af"),n("a15b"),n("4de4"),n("d81d"),n("ac1f"),n("5319"),n("5b81");function ee(e,t){void 0!==e.variables&&e.variables.indexOf(t.name)>-1&&(void 0===e.values&&(e.values={}),e.values[t.name]=t.value)}function te(e){if(void 0===e.variables||0==e.variables.length)return!0;if(void 0===e.values)return!1;var t=e.variables.map((function(t){return e.values[t]})).filter((function(e){return void 0===e||0==e.length})).length;return 0===t}function ne(e,t,n){if(void 0===e||void 0===t)return n;var a=n;return e.forEach((function(e){var n=t[e];void 0!==n&&(a=a.replaceAll("${".concat(e,"}"),n))})),a}var ae=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n="".concat(e).concat(t," ").concat(this.entry.parameters.join("\n"));return ne(this.entry.variables,this.entry.values,n)}}]),n}(E["b"]);ae=Object(k["a"])([Object(E["a"])({name:"Command",props:{entry:Object}})],ae);var re=ae;n("eb80");const ce=l()(re,[["render",Z],["__scopeId","data-v-602d8064"]]);var oe=ce,ie={class:"filePath"},ue={class:"content"};function se(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",ie,"Create the file: "+Object(a["D"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",ue,Object(a["D"])(e.content),1)],64)}n("fb6a");var le=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(E["b"]);le=Object(k["a"])([Object(E["a"])({name:"Create",props:{entry:Object}})],le);var be=le;n("f09e");const pe=l()(be,[["render",se],["__scopeId","data-v-5e3ed990"]]);var he=pe,Oe={class:"command"};function de(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",Oe,Object(a["D"])(e.command),1)}var je=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1],r="".concat(e).concat(t," docker tag ").concat(n," ").concat(a,"\n");return r+="".concat(e).concat(t," docker push ").concat(a),ne(this.entry.variables,this.entry.values,r)}}]),n}(E["b"]);je=Object(k["a"])([Object(E["a"])({name:"DockerTagAndPush",props:{entry:Object}})],je);var fe=je;n("e25f");const ve=l()(fe,[["render",de],["__scopeId","data-v-70802509"]]);var ye=ve,ke={class:"download"};function me(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",ke,Object(a["D"])(e.command),1)}var ge=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1];return"".concat(e).concat(t," curl --location '").concat(n,"' --output '").concat(a,"'")}}]),n}(E["b"]);ge=Object(k["a"])([Object(E["a"])({name:"Download",props:{entry:Object}})],ge);var we=ge;n("a9b4");const Pe=l()(we,[["render",me],["__scopeId","data-v-667402eb"]]);var Ce=Pe,De=["innerHTML"];function Re(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",{class:"patch",innerHTML:e.patch},null,8,De)}var Be=n("ae7d"),Ie=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"patch",get:function(){var e={drawFileList:!1,fileContentToggle:!1};return Object(Be["a"])(this.entry.parameters.join("\n"),e)}}]),n}(E["b"]);Ie=Object(k["a"])([Object(E["a"])({name:"GitApplyPatch",props:{entry:Object}})],Ie);var Ve=Ie;n("42c6");const Se=l()(Ve,[["render",Re],["__scopeId","data-v-5e7f3d1b"]]);var _e=Se;function Te(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}var Ee=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n="".concat(e).concat(t),a=this.entry.parameters[0],r=this.entry.parameters.length>1&&this.entry.parameters[1],c=this.entry.pushChanges||!1,o="".concat(n," git add .");return o+="\n".concat(n," git commit --message '").concat(a,"'"),r?(o+="\n".concat(n," git tag --annotate '").concat(r,"' --message '").concat(a,"'"),c&&(o+="\n".concat(n," git push --atomic origin main '").concat(r,"'"))):c&&(o+="\n".concat(n," git push origin main")),o}}]),n}(E["b"]);Ee=Object(k["a"])([Object(E["a"])({name:"GitCommitChanges",props:{entry:Object}})],Ee);var Fe=Ee;n("c9b5");const Ae=l()(Fe,[["render",Te],["__scopeId","data-v-7abe477a"]]);var Me=Ae;function Ue(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}var Ne=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r="".concat(e).concat(t," git tag --annotate '").concat(n,"'");return a&&(r+=" --message '".concat(a,"'")),r}}]),n}(E["b"]);Ne=Object(k["a"])([Object(E["a"])({name:"GitTagCurrentCommit",props:{entry:Object}})],Ne);var xe=Ne;n("07c1");const He=l()(xe,[["render",Ue],["__scopeId","data-v-2a2edffc"]]);var $e=He,Ge=["innerHTML"];function Le(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",{class:"markdown",innerHTML:e.html},null,8,Ge)}var Je=n("c2a7"),We=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"html",get:function(){var e=this.entry.parameters.join("\n"),t=ne(this.entry.variables,this.entry.values,e);return Je["a"].parse(t)}}]),n}(E["b"]);We=Object(k["a"])([Object(E["a"])({name:"Markdown",props:{entry:Object}})],We);var qe=We;n("4020");const Ke=l()(qe,[["render",Le],["__scopeId","data-v-9301f41e"]]);var Ye=Ke,Xe={class:"filePath"},ze=Object(a["i"])(" Replace the file: "),Qe=Object(a["i"])(", with the following contents "),Ze={class:"content"};function et(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",Xe,[ze,Object(a["g"])("code",null,Object(a["D"])(e.filePath),1),Qe]),Object(a["g"])("pre",Ze,Object(a["D"])(e.content),1)],64)}var tt=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(E["b"]);tt=Object(k["a"])([Object(E["a"])({name:"Replace",props:{entry:Object}})],tt);var nt=tt;n("3173");const at=l()(nt,[["render",et],["__scopeId","data-v-0635e78d"]]);var rt=at;function ct(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("h3",null,Object(a["D"])(e.section),1)}var ot=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"section",get:function(){return this.entry.parameters[0]}}]),n}(E["b"]);ot=Object(k["a"])([Object(E["a"])({name:"Section",props:{entry:Object}})],ot);var it=ot;const ut=l()(it,[["render",ct]]);var st=ut;function lt(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("h4",null,Object(a["D"])(e.subsection),1)}var bt=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"subsection",get:function(){return this.entry.parameters[0]}}]),n}(E["b"]);bt=Object(k["a"])([Object(E["a"])({name:"Subsection",props:{entry:Object}})],bt);var pt=bt;const ht=l()(pt,[["render",lt]]);var Ot=ht,dt=Object(a["g"])("div",null,"Variable",-1);function jt(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",null,[dt,Object(a["g"])("label",null,Object(a["D"])(e.name),1),e.sensitive?Object(a["J"])((Object(a["t"])(),Object(a["f"])("input",{key:0,type:"password","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t})},null,512)),[[a["G"],e.value]]):Object(a["J"])((Object(a["t"])(),Object(a["f"])("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t})},null,512)),[[a["G"],e.value]]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return e.onVariableSet&&e.onVariableSet.apply(e,arguments)})},"Set")])}var ft=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.value="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){if(this.value=this.readDefaultValueOrEmptyFromEntry(),this.value.length>0){var e={name:this.entry.name,value:this.value};this.$emit("variableInitialised",e)}}},{key:"name",get:function(){return this.entry.name}},{key:"sensitive",get:function(){return void 0===this.entry.sensitive||this.entry.sensitive}},{key:"onVariableSet",value:function(){var e=this.readDefaultValueOrEmptyFromEntry();this.value!==e&&(this.entry.parameters=[this.value],this.$emit("variableUpdated",{name:this.entry.name,value:this.value,previousValue:e}))}},{key:"readDefaultValueOrEmptyFromEntry",value:function(){return void 0===this.entry.parameters||0==this.entry.parameters.length?"":this.entry.parameters[0]}}]),n}(E["b"]);ft=Object(k["a"])([Object(E["a"])({name:"Variable",props:{entry:Object},emits:["variableUpdated","variableInitialised"]})],ft);var vt=ft;const yt=l()(vt,[["render",jt]]);var kt=yt,mt=(n("e9c4"),n("8030")),gt=n("cc7d"),wt=n.n(gt);function Pt(e,t){return new Promise((function(n,a){try{var r=new wt.a("http://localhost:8077/ws"),c=mt["a"].over((function(){return r}));c.connect({},(function(){c.subscribe("/user/topic/run/output",(function(e){var n=JSON.parse(e.body);t(n)})),c.subscribe("/user/topic/run/outcome",(function(e){c.disconnect();var t=JSON.parse(e.body);n(t)})),c.send("/api/command/run",{},JSON.stringify(e))}))}catch(o){console.log("Failed to run command",o),a(o)}}))}var Ct=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.disabled=!1,e}return Object(f["a"])(n,[{key:"onRun",value:function(e){var t=this;this.disabled=!0;var n=function(){},a=function(){return t.disabled=!1};this.run(e,n,a)}},{key:"onRunUntilHere",value:function(e){this.runNext(0,e)}},{key:"runNext",value:function(e,t){var n=this;if(e>t)this.disabled=!1;else{var a=this.chapter.entries[e];if(!0===a.runnable&&!0!==a.dryRun){this.scrollToEntry(a);var r=function(){return n.runNext(e+1,t)},c=function(){};this.run(a,r,c)}else this.runNext(e+1,t)}}},{key:"run",value:function(e,t,n){if(e.failed=!1,e.output="",e.error="",!1===te(e))return e.failed=!0,void(e.error="Variables not set!!");var a=this.createRunableEntry(e);Pt(a,(function(t){return e.output+=t.content})).then((function(n){switch(n.content){case"FINISHED_AS_EXPECTED":case"FINISHED_WITH_SUPPRESSED_ERROR":t();break;default:e.failed=!0}})).catch((function(t){return e.error="Failed to run (".concat(t.meesage,")")})).finally(n)}},{key:"createRunableEntry",value:function(e){return{type:e.type,id:e.id,name:e.name,workPath:this.chapter.workPath,workingDirectory:e.workingDirectory,parameters:e.parameters,variables:e.variables,environmentVariables:e.environmentVariables,values:e.values,ignoreErrors:e.ignoreErrors,pushChanges:e.pushChanges,dryRun:e.dryRun,expectedExitValue:e.expectedExitValue,commandTimeout:e.commandTimeout}}},{key:"onVariableInitialised",value:function(e){this.$emit("variableInitialised",e)}},{key:"onVariableUpdated",value:function(e){this.$emit("variableUpdated",e)}},{key:"scrollToEntry",value:function(e){var t=document.getElementById(e.id);null!==t&&t.scrollIntoView({behavior:"auto"})}}]),n}(E["b"]);Ct=Object(k["a"])([Object(E["a"])({name:"Content",props:{chapter:Object},components:{ChapterRenderer:Q,Command:oe,Create:he,DockerTagAndPush:ye,Download:Ce,GitApplyPatch:_e,GitCommitChanges:Me,GitTagCurrentCommit:$e,Markdown:Ye,Replace:rt,Section:st,Subsection:Ot,Variable:kt},emits:["variableUpdated","variableInitialised"]})],Ct);var Dt=Ct;n("ab21");const Rt=l()(Dt,[["render",q],["__scopeId","data-v-8be7c8d8"]]);var Bt=Rt,It={class:"message-bar"};function Vt(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",It,[Object(a["g"])("div",null,Object(a["D"])(e.message),1)])}var St=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return n}(E["b"]);St=Object(k["a"])([Object(E["a"])({name:"MessageBar",props:{message:String}})],St);var _t=St;const Tt=l()(_t,[["render",Vt]]);var Et=Tt,Ft=function(e){return Object(a["x"])("data-v-1e6079a4"),e=e(),Object(a["u"])(),e},At={class:"open"},Mt={class:"openRepository"},Ut=Ft((function(){return Object(a["g"])("h2",null,"Open repository",-1)})),Nt=Ft((function(){return Object(a["g"])("label",{for:"openLocal"},"Open",-1)})),xt=Ft((function(){return Object(a["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),Ht=["disabled"],$t=Ft((function(){return Object(a["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),Gt=Ft((function(){return Object(a["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),Lt=["disabled"],Jt=Ft((function(){return Object(a["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),Wt=["disabled"],qt=Ft((function(){return Object(a["g"])("label",{for:"createNew"},"New",-1)})),Kt=Ft((function(){return Object(a["g"])("label",{for:"createNewFolder"},"Open from folder",-1)})),Yt=["disabled"],Xt={class:"workspace"},zt=Ft((function(){return Object(a["g"])("h2",null,"Workspace",-1)})),Qt=Ft((function(){return Object(a["g"])("label",{for:"workspace"},"Workspace",-1)})),Zt={class:"buttons"},en={class:"actionMessage"};function tn(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",At,[Object(a["g"])("div",Mt,[Ut,Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),Nt]),Object(a["g"])("div",null,[xt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.bookPath=t}),disabled:"openLocal"!==e.openFrom},null,8,Ht),[[a["G"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),$t]),Object(a["g"])("div",null,[Gt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.pathToRepository=t}),disabled:"checkout"!==e.openFrom},null,8,Lt),[[a["G"],e.pathToRepository]])]),Object(a["g"])("div",null,[Jt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.bookPath=t}),disabled:"checkout"!==e.openFrom},null,8,Wt),[[a["G"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"createNew",value:"createNew","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),qt]),Object(a["g"])("div",null,[Kt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"createNewFolder","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.bookPath=t}),disabled:"createNew"!==e.openFrom},null,8,Yt),[[a["G"],e.bookPath]])])]),Object(a["g"])("div",Xt,[zt,Object(a["g"])("div",null,[Qt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.workPath=t})},null,512),[[a["G"],e.workPath]])])]),Object(a["g"])("div",Zt,["openLocal"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:0,class:"open",onClick:t[8]||(t[8]=function(){return e.onOpenBook&&e.onOpenBook.apply(e,arguments)})},"Open")):Object(a["e"])("",!0),"checkout"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:1,class:"open",onClick:t[9]||(t[9]=function(){return e.onCheckoutBook&&e.onCheckoutBook.apply(e,arguments)})},"Checkout and Open")):Object(a["e"])("",!0),"createNew"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:2,class:"open",onClick:t[10]||(t[10]=function(){return e.onCreateBook&&e.onCreateBook.apply(e,arguments)})},"Create")):Object(a["e"])("",!0),Object(a["g"])("span",en,Object(a["D"])(e.actionMessage),1)])])}var nn=n("5530"),an=(n("498a"),function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.pathToRepository="",e.openFrom="openLocal",e.actionMessage="",e.bookPath="",e.workPath="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.bookPath=e.workspace.bookPath,e.workPath=e.workspace.workPath,e.isBookPathSet()&&e.isWorkPathSet()&&e.handleOpenBook()}))}},{key:"onCheckoutBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onCreateBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onOpenBook",value:function(){this.actionMessage="",this.isBookPathSet()&&this.isWorkPathSet()?this.handleOpenBook():this.actionMessage="Please provide both the book and workspace folder paths"}},{key:"handleOpenBook",value:function(){var e=this,t=this.bookPath,n=this.workPath;this.openBook(t).then((function(a){var r=Object(nn["a"])(Object(nn["a"])({},a),{},{bookPath:t,workPath:n});e.$emit("bookOpened",r)})).catch((function(t){e.actionMessage="Failed to open working book (".concat(t.message,")")}))}},{key:"openBook",value:function(e){return T.get("/api/book/open",{params:{bookPath:e}}).then((function(e){return e.data})).then((function(e){return e}))}},{key:"isBookPathSet",value:function(){return this.isNonBlank(this.bookPath)}},{key:"isWorkPathSet",value:function(){return this.isNonBlank(this.workPath)}},{key:"isNonBlank",value:function(e){return e.trim().length>0}}]),n}(E["b"]));an=Object(k["a"])([Object(E["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],an);var rn=an;n("b805");const cn=l()(rn,[["render",tn],["__scopeId","data-v-1e6079a4"]]);var on=cn,un=(n("a4d3"),n("e01a"),{class:"toc"}),sn=Object(a["g"])("h2",null,"Chapters",-1),ln=["onClick"];function bn(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",un,[Object(a["g"])("h1",null,Object(a["D"])(e.book.title),1),Object(a["g"])("p",null,Object(a["D"])(e.book.description),1),sn,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(e.book.chapters,(function(t){return Object(a["t"])(),Object(a["f"])("div",{key:t.title},[Object(a["g"])("h3",{onClick:function(n){return e.onReadChapter(t.path)}},Object(a["D"])(t.title),9,ln),Object(a["g"])("p",null,Object(a["D"])(t.description),1)])})),128))])}var pn=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.chapterPath.trim().length>0&&e.onReadChapter(e.chapterPath)}))}},{key:"onReadChapter",value:function(e){var t=this;this.readChapter(this.book.bookPath,e).then((function(e){t.$emit("chapterRead",e)})).catch((function(e){var n,a;t.$emit("errorMessage","Failed to open chapter (".concat((null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||e.message,")"))}))}},{key:"readChapter",value:function(e,t){return T.get("/api/book/read-chapter",{params:{bookPath:e,chapterPath:t}}).then((function(e){return e.data})).then((function(n){return Object(nn["a"])(Object(nn["a"])({},n),{},{bookPath:e,chapterPath:t})}))}}]),n}(E["b"]);pn=Object(k["a"])([Object(E["a"])({name:"Toc",emits:["chapterRead","errorMessage"],props:{book:Object,chapterPath:String}})],pn);var hn=pn;const On=l()(hn,[["render",bn]]);var dn=On,jn=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e.book=null,e.chapter=null,e.workspace={bookPath:"",workPath:"",chapterPath:""},e.message=null,e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.workspace.bookPath=this.$route.params.bookPath||"",this.workspace.workPath=this.$route.params.workPath||"",this.workspace.chapterPath=this.$route.params.chapterPath||""}},{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}},{key:"onOpenBook",value:function(e){this.workspace.bookPath=e.bookPath,this.workspace.workPath=e.workPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath}}),this.book=e}},{key:"onChapterRead",value:function(e){this.workspace.chapterPath=e.chapterPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath,chapterPath:this.workspace.chapterPath}}),this.chapter=e,this.chapter.workPath=this.workspace.workPath}},{key:"onErrorMessage",value:function(e){this.message=e}},{key:"onVariableUpdated",value:function(e){var t;null===(t=this.chapter)||void 0===t||t.entries.forEach((function(t){ee(t,e)}))}}]),n}(E["b"]);jn=Object(k["a"])([Object(E["a"])({components:{MessageBar:Et,App:U,Open:on,Toc:dn,Content:Bt}})],jn);var fn=jn;const vn=l()(fn,[["render",d]]);var yn=vn,kn=n("6c02"),mn=[{path:"/:bookPath?/:workPath?/:chapterPath?",name:"Home",component:yn,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],gn=Object(kn["a"])({history:Object(kn["b"])(),routes:mn}),wn=gn,Pn=n("5502"),Cn=Object(Pn["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(h).use(Cn).use(wn).mount("#app")},e25f:function(e,t,n){"use strict";n("ba04")},eb80:function(e,t,n){"use strict";n("c47f")},f005:function(e,t,n){},f09e:function(e,t,n){"use strict";n("2910")},f177:function(e,t,n){"use strict";n("1e6c")}});
//# sourceMappingURL=app.5bfcd4da.js.map