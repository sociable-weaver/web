(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],b=0,l=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9c51b74"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a3cac4da"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],b=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(b===a||b===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],b=u.getAttribute("data-href");if(b===a||b===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,b=document.createElement("script");b.charset="utf-8",b.timeout=120,s.nc&&b.setAttribute("nonce",s.nc),b.src=i(e);var l=new Error;u=function(t){b.onerror=b.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:b})}),12e4);b.onerror=b.onload=u,document.head.appendChild(b)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/web/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=b;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"050e":function(e,t,n){"use strict";n("8aaf")},"07f2":function(e,t,n){},"0f06":function(e,t,n){},"124d":function(e,t,n){},1562:function(e,t,n){"use strict";n("b1bf")},"219d":function(e,t,n){},2910:function(e,t,n){},"3bf5":function(e,t,n){},"408c":function(e,t,n){"use strict";n("219d")},"42c6":function(e,t,n){"use strict";n("9e05")},"4fe9":function(e,t,n){"use strict";n("3bf5")},"65c0":function(e,t,n){"use strict";n("07f2")},"6ed8":function(e,t,n){},"80de":function(e,t,n){},"8aaf":function(e,t,n){},"9e05":function(e,t,n){},a18a:function(e,t,n){"use strict";n("80de")},b1bf:function(e,t,n){},b35f:function(e,t,n){"use strict";n("f5c4")},b805:function(e,t,n){"use strict";n("cb3e")},cb3e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},c=Object(a["i"])("Home"),o=Object(a["i"])(" | "),i=Object(a["i"])("About");function s(e,t){var n=Object(a["A"])("router-link"),s=Object(a["A"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",r,[Object(a["j"])(n,{to:"/"},{default:Object(a["H"])((function(){return[c]})),_:1}),o,Object(a["j"])(n,{to:"/about"},{default:Object(a["H"])((function(){return[i]})),_:1})]),Object(a["j"])(s)],64)}n("1562");var u=n("d959"),b=n.n(u);const l={},p=b()(l,[["render",s]]);var h=p,O=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function j(e,t,n,r,c,o){var i=Object(a["A"])("MessageBar"),s=Object(a["A"])("App"),u=Object(a["A"])("Open"),b=Object(a["A"])("Toc"),l=Object(a["A"])("Content");return Object(a["s"])(),Object(a["f"])("div",O,[null!==e.message?(Object(a["s"])(),Object(a["d"])(i,{key:0,ref:"messageBar",message:e.message},null,8,["message"])):Object(a["e"])("",!0),Object(a["j"])(s,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(a["s"])(),Object(a["d"])(u,{key:1,ref:"open",onBookOpened:e.onOpenBook,workspace:e.workspace},null,8,["onBookOpened","workspace"])):Object(a["e"])("",!0),null!==e.book?(Object(a["s"])(),Object(a["d"])(b,{key:2,ref:"toc",onChapterRead:e.onChapterRead,onErrorMessage:e.onErrorMessage,book:e.book,chapterPath:e.workspace.chapterPath},null,8,["onChapterRead","onErrorMessage","book","chapterPath"])):Object(a["e"])("",!0),null!==e.chapter?(Object(a["s"])(),Object(a["d"])(l,{key:3,ref:"content",chapter:e.chapter,onVariableUpdated:e.onVariableUpdated},null,8,["chapter","onVariableUpdated"])):Object(a["e"])("",!0)])}var d=n("d4ec"),f=n("bee2"),y=n("262e"),v=n("2caf"),k=(n("159b"),n("9ab4")),m=function(e){return Object(a["w"])("data-v-0fe8c5cc"),e=e(),Object(a["t"])(),e},g={class:"app"},w={key:0,class:"help"},P=m((function(){return Object(a["g"])("h2",null,"Getting started",-1)})),C=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Make sure that you have Java 17 installed. You can use "),Object(a["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["i"])(" to install Java ")],-1)})),A=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Download the application: "),Object(a["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.9/sw-app.jar"},"sw-app.jar")],-1)})),R=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Run the application using the following command "),Object(a["g"])("pre",null,"$ java -jar sw-app.jar"),Object(a["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),F=Object(a["i"])(" Click "),_=Object(a["i"])(" to check if the application has started correctly. ");function T(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",g,[Object(a["g"])("h1",null,Object(a["C"])(e.message),1),e.showHelp?(Object(a["s"])(),Object(a["f"])("div",w,[P,Object(a["g"])("ol",null,[C,A,R,Object(a["g"])("li",null,[F,Object(a["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),_])])])):Object(a["e"])("",!0)])}var I=n("bc3a"),S=n.n(I),B=S.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),M=n("ce1f"),V=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return B.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===e.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(M["b"]);V=Object(k["a"])([Object(M["a"])({name:"App",emits:["appIsRunning"]})],V);var D=V;n("050e");const E=b()(D,[["render",T],["__scopeId","data-v-0fe8c5cc"]]);var U=E,$={class:"content"},H={key:13,class:"error"},L=Object(a["i"])(" Do not know how to renter entries of type: ");function N(e,t,n,r,c,o){var i=Object(a["A"])("ChapterRenderer"),s=Object(a["A"])("Command"),u=Object(a["A"])("Create"),b=Object(a["A"])("DockerTagAndPush"),l=Object(a["A"])("Download"),p=Object(a["A"])("GitApplyPatch"),h=Object(a["A"])("GitCommitChanges"),O=Object(a["A"])("GitTagCurrentCommit"),j=Object(a["A"])("Markdown"),d=Object(a["A"])("Replace"),f=Object(a["A"])("Section"),y=Object(a["A"])("Subsection"),v=Object(a["A"])("Variable");return Object(a["s"])(),Object(a["f"])("div",$,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.chapter.entries,(function(t){return Object(a["s"])(),Object(a["f"])("div",{key:t.id},["chapter"===t.type?(Object(a["s"])(),Object(a["d"])(i,{key:0,entry:t},null,8,["entry"])):"command"===t.type?(Object(a["s"])(),Object(a["d"])(s,{key:1,entry:t},null,8,["entry"])):"create"===t.type?(Object(a["s"])(),Object(a["d"])(u,{key:2,entry:t},null,8,["entry"])):"docker-tag-and-push"===t.type?(Object(a["s"])(),Object(a["d"])(b,{key:3,entry:t},null,8,["entry"])):"download"===t.type?(Object(a["s"])(),Object(a["d"])(l,{key:4,entry:t},null,8,["entry"])):"git-apply-patch"===t.type?(Object(a["s"])(),Object(a["d"])(p,{key:5,entry:t},null,8,["entry"])):"git-commit-changes"===t.type?(Object(a["s"])(),Object(a["d"])(h,{key:6,entry:t},null,8,["entry"])):"git-tag-current-commit"===t.type?(Object(a["s"])(),Object(a["d"])(O,{key:7,entry:t},null,8,["entry"])):"markdown"===t.type?(Object(a["s"])(),Object(a["d"])(j,{key:8,entry:t},null,8,["entry"])):"replace"===t.type?(Object(a["s"])(),Object(a["d"])(d,{key:9,entry:t},null,8,["entry"])):"section"===t.type?(Object(a["s"])(),Object(a["d"])(f,{key:10,entry:t},null,8,["entry"])):"subsection"===t.type?(Object(a["s"])(),Object(a["d"])(y,{key:11,entry:t},null,8,["entry"])):"variable"===t.type?(Object(a["s"])(),Object(a["d"])(v,{key:12,entry:t,onVariableUpdated:e.onVariableUpdated},null,8,["entry","onVariableUpdated"])):(Object(a["s"])(),Object(a["f"])("div",H,[L,Object(a["g"])("code",null,Object(a["C"])(t.type),1)]))])})),128))])}function x(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("h2",null,Object(a["C"])(e.chapter),1)}var G=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"chapter",get:function(){return this.entry.parameters[0]}}]),n}(M["b"]);G=Object(k["a"])([Object(M["a"])({name:"Chapter",props:{entry:Object}})],G);var W=G;const J=b()(W,[["render",x]]);var q=J,z={class:"command"};function K(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",z,Object(a["C"])(e.command),1)}n("99af"),n("a15b"),n("ac1f"),n("5319"),n("5b81");var Y=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this,t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",n="$",a="".concat(t).concat(n," ").concat(this.entry.parameters.join(" "));return void 0!=this.entry.variables&&void 0!=this.entry.values&&this.entry.variables.forEach((function(t){var n=e.entry.values[t];void 0!==n&&(a=a.replaceAll("${".concat(t,"}"),n))})),a}}]),n}(M["b"]);Y=Object(k["a"])([Object(M["a"])({name:"Command",props:{entry:Object}})],Y);var Q=Y;n("4fe9");const X=b()(Q,[["render",K],["__scopeId","data-v-753225dd"]]);var Z=X,ee={class:"filePath"},te={class:"content"};function ne(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",ee,"Create the file: "+Object(a["C"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",te,Object(a["C"])(e.content),1)],64)}n("fb6a");var ae=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(M["b"]);ae=Object(k["a"])([Object(M["a"])({name:"Create",props:{entry:Object}})],ae);var re=ae;n("f09e");const ce=b()(re,[["render",ne],["__scopeId","data-v-5e3ed990"]]);var oe=ce,ie={class:"command"};function se(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",ie,Object(a["C"])(e.command),1)}var ue=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1],r="".concat(e).concat(t," docker tag ").concat(n," ").concat(a,"\n");return r+="".concat(e).concat(t," docker push ").concat(a),r}}]),n}(M["b"]);ue=Object(k["a"])([Object(M["a"])({name:"DockerTagAndPush",props:{entry:Object}})],ue);var be=ue;n("e7d8");const le=b()(be,[["render",se],["__scopeId","data-v-51be87ed"]]);var pe=le,he={class:"download"};function Oe(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",he,Object(a["C"])(e.command),1)}var je=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1];return"".concat(e).concat(t," curl --location ").concat(n," --output ").concat(a)}}]),n}(M["b"]);je=Object(k["a"])([Object(M["a"])({name:"Download",props:{entry:Object}})],je);var de=je;n("a18a");const fe=b()(de,[["render",Oe],["__scopeId","data-v-190c563e"]]);var ye=fe,ve=["innerHTML"];function ke(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",{class:"patch",innerHTML:e.patch},null,8,ve)}var me=n("ae7d"),ge=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"patch",get:function(){var e={drawFileList:!1,fileContentToggle:!1};return Object(me["a"])(this.entry.parameters.join("\n"),e)}}]),n}(M["b"]);ge=Object(k["a"])([Object(M["a"])({name:"GitApplyPatch",props:{entry:Object}})],ge);var we=ge;n("42c6");const Pe=b()(we,[["render",ke],["__scopeId","data-v-5e7f3d1b"]]);var Ce=Pe;function Ae(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(e.command),1)}var Re=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r=this.entry.pushChanges||!1,c="".concat(e).concat(t," git add .");return c+="\n".concat(e).concat(t,' git commit --message "').concat(n,'"'),a?(c+="\n".concat(e).concat(t,' git tag --annotate "').concat(a,'" --message "').concat(n,'"'),r&&(c+="\n".concat(e).concat(t,' git push --atomic origin main "').concat(a,'"'))):r&&(c+="\n".concat(e).concat(t," git push origin main")),c}}]),n}(M["b"]);Re=Object(k["a"])([Object(M["a"])({name:"GitCommitChanges",props:{entry:Object}})],Re);var Fe=Re;n("408c");const _e=b()(Fe,[["render",Ae],["__scopeId","data-v-1fb7ec6e"]]);var Te=_e;function Ie(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(e.command),1)}var Se=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r="".concat(e).concat(t,' git tag --annotate "').concat(n,'"');return a&&(r+=' --message "'.concat(a,'"')),r}}]),n}(M["b"]);Se=Object(k["a"])([Object(M["a"])({name:"GitTagCurrentCommit",props:{entry:Object}})],Se);var Be=Se;n("65c0");const Me=b()(Be,[["render",Ie],["__scopeId","data-v-8ab522fc"]]);var Ve=Me,De=["innerHTML"];function Ee(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",{class:"markdown",innerHTML:e.html},null,8,De)}var Ue=n("c2a7"),$e=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"html",get:function(){var e=this.entry.parameters.join("\n");return Ue["a"].parse(e)}}]),n}(M["b"]);$e=Object(k["a"])([Object(M["a"])({name:"Markdown",props:{entry:Object}})],$e);var He=$e;n("b35f");const Le=b()(He,[["render",Ee],["__scopeId","data-v-6353ea9c"]]);var Ne=Le,xe={class:"filePath"},Ge={class:"content"};function We(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",xe,"Replace the file: "+Object(a["C"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",Ge,Object(a["C"])(e.content),1)],64)}var Je=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(M["b"]);Je=Object(k["a"])([Object(M["a"])({name:"Replace",props:{entry:Object}})],Je);var qe=Je;n("e3fc");const ze=b()(qe,[["render",We],["__scopeId","data-v-9ae4b7f4"]]);var Ke=ze;function Ye(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("h3",null,Object(a["C"])(e.section),1)}var Qe=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"section",get:function(){return this.entry.parameters[0]}}]),n}(M["b"]);Qe=Object(k["a"])([Object(M["a"])({name:"Section",props:{entry:Object}})],Qe);var Xe=Qe;const Ze=b()(Xe,[["render",Ye]]);var et=Ze;function tt(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("h4",null,Object(a["C"])(e.subsection),1)}var nt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"subsection",get:function(){return this.entry.parameters[0]}}]),n}(M["b"]);nt=Object(k["a"])([Object(M["a"])({name:"Subsection",props:{entry:Object}})],nt);var at=nt;const rt=b()(at,[["render",tt]]);var ct=rt,ot=(n("b0c0"),Object(a["g"])("div",null,"Variable",-1)),it={for:"{{name}}-value"};function st(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",null,[ot,Object(a["g"])("label",it,Object(a["C"])(e.name),1),e.sensitive?Object(a["I"])((Object(a["s"])(),Object(a["f"])("input",{key:0,type:"password","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),id:"{{name}}-value"},null,512)),[[a["F"],e.value]]):Object(a["I"])((Object(a["s"])(),Object(a["f"])("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t}),id:"{{name}}-value"},null,512)),[[a["F"],e.value]]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return e.onVariableSet&&e.onVariableSet.apply(e,arguments)})},"Set")])}var ut=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.value="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.value=this.readDefaultValueOrEmptyFromEntry()}},{key:"name",get:function(){return this.entry.name}},{key:"sensitive",get:function(){return void 0===this.entry.sensitive||this.entry.sensitive}},{key:"onVariableSet",value:function(){var e=this.readDefaultValueOrEmptyFromEntry();this.value!==e&&this.$emit("variableUpdated",{name:this.entry.name,value:this.value,previousValue:e})}},{key:"readDefaultValueOrEmptyFromEntry",value:function(){return void 0===this.entry.parameters||0==this.entry.parameters.length?"":this.entry.parameters[0]}}]),n}(M["b"]);ut=Object(k["a"])([Object(M["a"])({name:"Variable",props:{entry:Object},emits:["variableUpdated"]})],ut);var bt=ut;const lt=b()(bt,[["render",st]]);var pt=lt,ht=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"onVariableUpdated",value:function(e){this.$emit("variableUpdated",e)}}]),n}(M["b"]);ht=Object(k["a"])([Object(M["a"])({name:"Content",props:{chapter:Object},components:{ChapterRenderer:q,Command:Z,Create:oe,DockerTagAndPush:pe,Download:ye,GitApplyPatch:Ce,GitCommitChanges:Te,GitTagCurrentCommit:Ve,Markdown:Ne,Replace:Ke,Section:et,Subsection:ct,Variable:pt},emits:["variableUpdated"]})],ht);var Ot=ht;n("dde2");const jt=b()(Ot,[["render",N],["__scopeId","data-v-7b2666a4"]]);var dt=jt,ft={class:"message-bar"};function yt(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",ft,[Object(a["g"])("div",null,Object(a["C"])(e.message),1)])}var vt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(M["b"]);vt=Object(k["a"])([Object(M["a"])({name:"MessageBar",props:{message:String}})],vt);var kt=vt;const mt=b()(kt,[["render",yt]]);var gt=mt,wt=function(e){return Object(a["w"])("data-v-1e6079a4"),e=e(),Object(a["t"])(),e},Pt={class:"open"},Ct={class:"openRepository"},At=wt((function(){return Object(a["g"])("h2",null,"Open repository",-1)})),Rt=wt((function(){return Object(a["g"])("label",{for:"openLocal"},"Open",-1)})),Ft=wt((function(){return Object(a["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),_t=["disabled"],Tt=wt((function(){return Object(a["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),It=wt((function(){return Object(a["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),St=["disabled"],Bt=wt((function(){return Object(a["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),Mt=["disabled"],Vt=wt((function(){return Object(a["g"])("label",{for:"createNew"},"New",-1)})),Dt=wt((function(){return Object(a["g"])("label",{for:"createNewFolder"},"Open from folder",-1)})),Et=["disabled"],Ut={class:"workspace"},$t=wt((function(){return Object(a["g"])("h2",null,"Workspace",-1)})),Ht=wt((function(){return Object(a["g"])("label",{for:"workspace"},"Workspace",-1)})),Lt={class:"buttons"},Nt={class:"actionMessage"};function xt(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",Pt,[Object(a["g"])("div",Ct,[At,Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[a["E"],e.openFrom]]),Rt]),Object(a["g"])("div",null,[Ft,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.bookPath=t}),disabled:"openLocal"!==e.openFrom},null,8,_t),[[a["F"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.openFrom=t})},null,512),[[a["E"],e.openFrom]]),Tt]),Object(a["g"])("div",null,[It,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.pathToRepository=t}),disabled:"checkout"!==e.openFrom},null,8,St),[[a["F"],e.pathToRepository]])]),Object(a["g"])("div",null,[Bt,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.bookPath=t}),disabled:"checkout"!==e.openFrom},null,8,Mt),[[a["F"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"createNew",value:"createNew","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.openFrom=t})},null,512),[[a["E"],e.openFrom]]),Vt]),Object(a["g"])("div",null,[Dt,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"createNewFolder","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.bookPath=t}),disabled:"createNew"!==e.openFrom},null,8,Et),[[a["F"],e.bookPath]])])]),Object(a["g"])("div",Ut,[$t,Object(a["g"])("div",null,[Ht,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.workPath=t})},null,512),[[a["F"],e.workPath]])])]),Object(a["g"])("div",Lt,["openLocal"===e.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:0,class:"open",onClick:t[8]||(t[8]=function(){return e.onOpenBook&&e.onOpenBook.apply(e,arguments)})},"Open")):Object(a["e"])("",!0),"checkout"===e.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:1,class:"open",onClick:t[9]||(t[9]=function(){return e.onCheckoutBook&&e.onCheckoutBook.apply(e,arguments)})},"Checkout and Open")):Object(a["e"])("",!0),"createNew"===e.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:2,class:"open",onClick:t[10]||(t[10]=function(){return e.onCreateBook&&e.onCreateBook.apply(e,arguments)})},"Create")):Object(a["e"])("",!0),Object(a["g"])("span",Nt,Object(a["C"])(e.actionMessage),1)])])}var Gt=n("5530"),Wt=(n("498a"),function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.pathToRepository="",e.openFrom="openLocal",e.actionMessage="",e.bookPath="",e.workPath="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.bookPath=e.workspace.bookPath,e.workPath=e.workspace.workPath,e.isBookPathSet()&&e.isWorkPathSet()&&e.handleOpenBook()}))}},{key:"onCheckoutBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onCreateBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onOpenBook",value:function(){this.actionMessage="",this.isBookPathSet()&&this.isWorkPathSet()?this.handleOpenBook():this.actionMessage="Please provide both the book and workspace folder paths"}},{key:"handleOpenBook",value:function(){var e=this,t=this.bookPath,n=this.workPath;this.openBook(t).then((function(a){var r=Object(Gt["a"])(Object(Gt["a"])({},a),{},{bookPath:t,workPath:n});e.$emit("bookOpened",r)})).catch((function(t){e.actionMessage="Failed to open working book (".concat(t.message,")")}))}},{key:"openBook",value:function(e){return B.get("/api/book/open",{params:{bookPath:e}}).then((function(e){return e.data})).then((function(e){return e}))}},{key:"isBookPathSet",value:function(){return this.isNonBlank(this.bookPath)}},{key:"isWorkPathSet",value:function(){return this.isNonBlank(this.workPath)}},{key:"isNonBlank",value:function(e){return e.trim().length>0}}]),n}(M["b"]));Wt=Object(k["a"])([Object(M["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],Wt);var Jt=Wt;n("b805");const qt=b()(Jt,[["render",xt],["__scopeId","data-v-1e6079a4"]]);var zt=qt,Kt=(n("a4d3"),n("e01a"),{class:"toc"}),Yt=Object(a["g"])("h2",null,"Chapters",-1),Qt=["onClick"];function Xt(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",Kt,[Object(a["g"])("h1",null,Object(a["C"])(e.book.title),1),Object(a["g"])("p",null,Object(a["C"])(e.book.description),1),Yt,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.book.chapters,(function(t){return Object(a["s"])(),Object(a["f"])("div",{key:t.title},[Object(a["g"])("h3",{onClick:function(n){return e.onReadChapter(t.path)}},Object(a["C"])(t.title),9,Qt),Object(a["g"])("p",null,Object(a["C"])(t.description),1)])})),128))])}var Zt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.chapterPath.trim().length>0&&e.onReadChapter(e.chapterPath)}))}},{key:"onReadChapter",value:function(e){var t=this;this.readChapter(this.book.bookPath,e).then((function(e){t.$emit("chapterRead",e)})).catch((function(e){var n,a;t.$emit("errorMessage","Failed to open chapter (".concat((null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||e.message,")"))}))}},{key:"readChapter",value:function(e,t){return B.get("/api/book/read-chapter",{params:{bookPath:e,chapterPath:t}}).then((function(e){return e.data})).then((function(n){return Object(Gt["a"])(Object(Gt["a"])({},n),{},{bookPath:e,chapterPath:t})}))}}]),n}(M["b"]);Zt=Object(k["a"])([Object(M["a"])({name:"Toc",emits:["chapterRead","errorMessage"],props:{book:Object,chapterPath:String}})],Zt);var en=Zt;const tn=b()(en,[["render",Xt]]);var nn=tn;function an(e,t){void 0!==e.variables&&e.variables.indexOf(t.name)>-1&&(void 0===e.values&&(e.values={}),e.values[t.name]=t.value)}var rn=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e.book=null,e.chapter=null,e.workspace={bookPath:"",workPath:"",chapterPath:""},e.message=null,e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.workspace.bookPath=this.$route.params.bookPath||"",this.workspace.workPath=this.$route.params.workPath||"",this.workspace.chapterPath=this.$route.params.chapterPath||""}},{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}},{key:"onOpenBook",value:function(e){this.workspace.bookPath=e.bookPath,this.workspace.workPath=e.workPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath}}),this.book=e}},{key:"onChapterRead",value:function(e){this.workspace.chapterPath=e.chapterPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath,chapterPath:this.workspace.chapterPath}}),this.chapter=e}},{key:"onErrorMessage",value:function(e){this.message=e}},{key:"onVariableUpdated",value:function(e){var t;null===(t=this.chapter)||void 0===t||t.entries.forEach((function(t){an(t,e)}))}}]),n}(M["b"]);rn=Object(k["a"])([Object(M["a"])({components:{MessageBar:gt,App:U,Open:zt,Toc:nn,Content:dt}})],rn);var cn=rn;const on=b()(cn,[["render",j]]);var sn=on,un=n("6c02"),bn=[{path:"/:bookPath?/:workPath?/:chapterPath?",name:"Home",component:sn,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ln=Object(un["a"])({history:Object(un["b"])(),routes:bn}),pn=ln,hn=n("5502"),On=Object(hn["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(h).use(On).use(pn).mount("#app")},dde2:function(e,t,n){"use strict";n("0f06")},e3fc:function(e,t,n){"use strict";n("6ed8")},e7d8:function(e,t,n){"use strict";n("124d")},f09e:function(e,t,n){"use strict";n("2910")},f5c4:function(e,t,n){}});
//# sourceMappingURL=app.5e059d12.js.map