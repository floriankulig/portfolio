(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){var n={"./sortvis.png":12,"./todoist.png":13};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=11},function(e,t,a){e.exports=a.p+"static/media/sortvis.02ea0964.png"},function(e,t,a){e.exports=a.p+"static/media/todoist.fef5e485.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(1),s=(a(10),function(e){var t=e.children,a=e.basic,n=void 0!==a&&a;return r.a.createElement("button",{className:n?"btn basic":"btn",tabIndex:0},t)}),o=[{name:"\xdcber Mich",url:"/#about"},{name:"Projekte",url:"/#projects"},{name:"Kontakt",url:"/#contact"},{name:"Lebenslauf",url:"/resume.pdf"}],m=[{title:"Todoist Clone",desc:"Ein Klon der Web-App von Todoist. Der Nutzer kann eigene Projekte erstellen, die wiederrum eigene ToDos haben. Diese werden sofort in die Datenbank eingetragen und auf allen eingeloggten Ger\xe4ten synchronisiert.",techStack:["React","Firebase","SCSS"],github:"https://github.com/floriankulig/Todoist-Clone/",url:"https://floriankulig.github.io/Todoist-Clone/",img:"todoist.png"},{title:"Sorting Algorithm Visualizer",desc:"Eine Desktop-App mit der verschiedene Sortier-Algorithmen visualisiert werden k\xf6nnen. Die Elemente, die in der zu sortierenden Liste sind, werden als S\xe4ulen mit verschiedenen H\xf6hen dargestellt.",techStack:["Python","Tkinter"],github:"https://github.com/floriankulig/SortingVisualizer",url:"",img:"sortvis.png"}],u="florian.kulig@web.de";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E=r.a.createElement("path",{d:"M295 506L182.5 570.952L182.5 441.048L295 506Z",fill:"#5619EA"}),h=r.a.createElement("path",{d:"M182 441L294.5 376.048V505.952L182 441Z",fill:"#6730EC"}),p=r.a.createElement("path",{d:"M422 166L309.5 230.952V101.048L422 166Z",fill:"#6730EC"}),g=r.a.createElement("path",{d:"M295 376L182.5 440.952L182.5 311.048L295 376Z",fill:"#7847EE"}),b=r.a.createElement("path",{d:"M309 231L421.5 166.048V295.952L309 231Z",fill:"#7847EE"}),v=r.a.createElement("path",{d:"M197 166L309.5 101.048V230.952L197 166Z",fill:"#7847EE"}),y=r.a.createElement("path",{d:"M182 311L294.5 246.048V375.952L182 311Z",fill:"#5619EA"}),w=r.a.createElement("path",{d:"M427 441L314.5 505.952V376.048L427 441Z",fill:"#5619EA"}),k=r.a.createElement("path",{d:"M534 231L421.5 295.952V166.048L534 231Z",fill:"#5619EA"}),L=r.a.createElement("path",{d:"M295 246L182.5 310.952V181.048L295 246Z",fill:"#6730EC"}),O=r.a.createElement("path",{d:"M182 571L294.5 506.048V635.952L182 571Z",fill:"#7847EE"}),N=r.a.createElement("path",{d:"M338 29.3731L611.76 187.428C619.804 192.073 624.76 200.656 624.76 209.945V526.055C624.76 535.344 619.804 543.927 611.76 548.572L338 706.627C329.956 711.271 320.044 711.271 312 706.627L38.2405 548.572C30.196 543.927 25.2405 535.344 25.2405 526.055V209.945C25.2405 200.656 30.196 192.073 38.2405 187.428L312 29.3731C320.044 24.7286 329.956 24.7286 338 29.3731Z",stroke:"#6730EC",strokeWidth:50}),x=function(e){var t=e.svgRef,a=e.title,n=d(e,["svgRef","title"]);return r.a.createElement("svg",f({width:650,height:736,viewBox:"0 0 650 736",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,E,h,p,g,b,v,y,w,k,L,O,N)},M=r.a.forwardRef((function(e,t){return r.a.createElement(x,f({svgRef:t},e))})),j=(a.p,function(e){var t=e.menuOpen,a=e.setMenuOpen,l=Object(n.useState)(!1),c=Object(i.a)(l,2),m=c[0],u=c[1],f=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var e=window.pageYOffset;return document.addEventListener("scroll",(function(){var t=window.pageYOffset;l(t>e?"down":"up"),e=t>0?t:0})),function(){return document.removeEventListener("scroll")}}),[e]),r}("down"),d=Object(n.useRef)();!function(e,t){Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])}(d,(function(){return a(!1)}));var E=function(){u(window.pageYOffset>=50)};return Object(n.useEffect)((function(){return document.addEventListener("scroll",E),function(){return document.removeEventListener("scroll",E)}}),[]),r.a.createElement("header",{className:m&&"down"===f?"scrolled up":m&&"up"===f?"scrolled down":void 0,ref:d},r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},r.a.createElement(M,null)),r.a.createElement("ul",{className:t?"nav-links active":"nav-links"},o&&o.map((function(e,t){var a=e.url,n=e.name;return"Lebenslauf"!==n?r.a.createElement("li",{className:"nav-link",style:{animationDelay:"".concat(t/9+.3,"s")},key:n},r.a.createElement("span",{className:"link-idx"},"0",t+1,". "),r.a.createElement("a",{href:a},n)):r.a.createElement("li",{className:"nav-link",style:{animationDelay:"".concat(t/9+.3,"s")},key:n},r.a.createElement(s,{basic:!1},n))})),r.a.createElement("li",null)),r.a.createElement("div",{className:t?"burger open":"burger",onClick:function(){return a((function(e){return!e}))},onKeyDown:function(){return a((function(e){return!e}))}},r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"}),r.a.createElement("div",{className:"burger-line"})))))}),S=function(e){var t=e.children,a="0"+e.number+".";return r.a.createElement("h2",{className:"section__title"},r.a.createElement("span",{className:"section__title-idx"},a,"\xa0")," ",t)},Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"introduction fade-up"},"Hallo, ich bin"),r.a.createElement("h1",{className:"fade-up"},"Florian Kulig."),r.a.createElement("h1",{className:"short-desc fade-up"},"Ich entwickle f\xfcr das Web."),r.a.createElement("p",{className:"desc fade-up"},"Ich bin ein Sch\xfcler aus Treuchtlingen, Bayern, der Spa\xdf daran hat designbetonte Websites, Apps und alles, was dazu geh\xf6rt, zu (designen und) entwickeln."),r.a.createElement("a",{href:"mailto:".concat(u)},r.a.createElement(s,{className:"cta fade-up",basic:!0},"In Kontakt treten")))};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T=r.a.createElement("path",{d:"M206.14789,544.70467a92.17222,92.17222,0,0,1,32.02368-16.68392c32.65823-9.34364,66.44317-.29958,99.11525,8.44757,17.6391,4.72171,35.87786,9.60454,53.86608,11.6155,28.82416,3.22318,55.69008-1.27495,77.69306-13.0071,24.729-13.18383,42.54045-35.87523,47.64829-60.69279a70.48407,70.48407,0,0,0,1.28593-9.521q-3.65463,2.25441-7.33528,4.44022c-25.80935,15.32748-62.0852,29.65826-88.32908,10.88062-10.07437-7.20721-16.61059-19.25066-17.93452-33.0403-1.41783-14.77612,3.3362-29.50912,12.71615-39.40907a47.998,47.998,0,0,1,4.90566-4.50207c19.01181-15.17609,49.02343-15.99439,70.07515-.995,17.82789,12.70265,28.38926,35.65507,28.05028,58.93481a524.84185,524.84185,0,0,0,44.16619-30.97039l1.23084,1.57655a526.67316,526.67316,0,0,1-45.47066,31.79851,72.51073,72.51073,0,0,1-1.40193,11.21038c-5.22638,25.39384-23.41987,48.59132-48.66557,62.05449-22.36144,11.92331-49.62963,16.49823-78.857,13.23013-18.13781-2.02774-36.45006-6.93064-54.16067-11.6715-33.90127-9.07553-65.922-17.64846-98.04825-8.457-32.29131,9.23821-58.37466,37.579-64.90838,70.52114-6.53632,32.94354,6.75568,69.09513,33.07392,89.95877l-1.24263,1.56781c-26.89056-21.31772-40.47084-58.2563-33.7937-91.91573C176.16613,578.32112,188.82685,558.53,206.14789,544.70467Zm311.75247-82.2679c.75634-23.07932-9.54778-46.0053-27.18335-58.57032-22.18626-15.80879-54.652-13.45341-72.36735,5.24286-8.98829,9.48739-13.54065,23.634-12.17693,37.84291,1.2683,13.2143,7.503,24.73436,17.10678,31.60559,25.366,18.1489,60.84664,4.04919,86.14458-10.97506Q513.67887,465.05645,517.90036,462.43677Z",transform:"translate(-39.49997 -146.019)",fill:"#3f3d56"}),P=r.a.createElement("ellipse",{cx:278.5,cy:555.96199,rx:278.5,ry:13,fill:"#3f3d56"}),z=r.a.createElement("ellipse",{cx:268,cy:594.96199,rx:99,ry:13,fill:"#3f3d56"}),D=r.a.createElement("path",{d:"M225,429.481v8s-9.02334,41.82913,5,40c23-3,6-37,6-37v-7Z",transform:"translate(-39.49997 -146.019)",fill:"#ffb8b8"}),H=r.a.createElement("polygon",{points:"297.5 508.462 306.5 533.462 328.5 525.462 318.5 502.462 297.5 508.462",fill:"#ffb8b8"}),V=r.a.createElement("polygon",{points:"242.5 533.462 236.5 555.462 259.5 562.462 260.5 539.462 242.5 533.462",fill:"#ffb8b8"}),F=r.a.createElement("path",{d:"M262,427.481l-2,11s-1,8,0,13,73,212,73,212l31-12-40-131-5-101Z",transform:"translate(-39.49997 -146.019)",fill:"#2f2e41"}),A=r.a.createElement("path",{d:"M301,425.481l-4,148s-9,10-7,17-5,65-5,65l-6,29,26,8s5-26,9-29,27-93,27-99,17-139,17-139l-42-17Z",transform:"translate(-39.49997 -146.019)",fill:"#2f2e41"}),R=r.a.createElement("path",{d:"M348,663.481s-11-12-17,0a242.98906,242.98906,0,0,1-15,25s-32,19,0,24c0,0,18,1,27-5s33-15,33-17-6-31.4-12-28.2S348,663.481,348,663.481Z",transform:"translate(-39.49997 -146.019)",fill:"#2f2e41"}),I=r.a.createElement("path",{d:"M293,696.481s-9-13-17-4-18,35-18,35-18,27,10,26,30-11,30-11,4-26,4-27-2-11.27953-2-11.27953Z",transform:"translate(-39.49997 -146.019)",fill:"#2f2e41"}),K=r.a.createElement("circle",{cx:247,cy:45.96199,r:28,fill:"#ffb8b8"}),W=r.a.createElement("path",{d:"M272,209.481l4,32,12,30,26-31v-15s-8-12-6-22Z",transform:"translate(-39.49997 -146.019)",fill:"#ffb8b8"}),B=r.a.createElement("path",{d:"M286,248.481l-14-6-15,177,3,11s8,5,33,1,66-1,66-1l3-91-49-107Z",transform:"translate(-39.49997 -146.019)",fill:"#d0cde1"}),J=r.a.createElement("path",{d:"M261,423.481s19-165,18-168-18-11.12343-18-11.12343S232,263.481,233,270.481s19,155,19,155Z",transform:"translate(-39.49997 -146.019)",fill:"#575a89"}),Y=r.a.createElement("path",{d:"M337,411.481s-30-117-31-143-1-29-1-29,46-16,62,0l3,84s5,36,3,47a123.84612,123.84612,0,0,1-6,21s11,11,1,14-17-2-21,3S337,411.481,337,411.481Z",transform:"translate(-39.49997 -146.019)",fill:"#575a89"}),U=r.a.createElement("path",{d:"M240,264.481s-12,0-11,14,0,79,0,79-9,55-6,59-1,17-1,17l18,4s2-14,6-15,10-30,10-30Z",transform:"translate(-39.49997 -146.019)",fill:"#575a89"}),q=r.a.createElement("path",{d:"M375,387.481,370.408,395.83s-31.4962,25.082-15.95213,34.36653S385,405.481,385,405.481l5-9Z",transform:"translate(-39.49997 -146.019)",fill:"#ffb8b8"}),G=r.a.createElement("path",{d:"M353,237.481l14,2s16,11,17,17,33,61,33,61a32.54943,32.54943,0,0,1,3,13c0,7-11,60-17,61s-10,11-10,11l-21-13a51.04342,51.04342,0,0,1,1-9c1-5,5-15,5-15l6-21a7.5,7.5,0,0,1-3-6c0-4-17-25-17-25Z",transform:"translate(-39.49997 -146.019)",fill:"#575a89"}),Q=r.a.createElement("path",{d:"M282.88376,258.69047S257,251.481,259,246.481s4-6,4-6,3-8,6-8,5.568-2.45633,5.568-2.45633L286,248.481Z",transform:"translate(-39.49997 -146.019)",fill:"#d0cde1"}),X=r.a.createElement("path",{d:"M311.01492,219.981s9.98505-2.5,13.98505.5,7,3,8,5,14,4,10,7-57,16-57,16l25-18Z",transform:"translate(-39.49997 -146.019)",fill:"#d0cde1"}),$=r.a.createElement("path",{d:"M314.136,162.18809a34.51473,34.51473,0,0,0-19.6333-15.00922L288.5,151.981l2.33374-5.60114a31.773,31.773,0,0,0-5.93286-.34289L279.5,152.981l2.23536-6.70618a34.18477,34.18477,0,0,0-23.58228,14.0274c-6.874,9.91169-6.41394,23.68958.34692,33.67878,1.856-5.7035,2.48853-11.0492,4.34449-16.75275a16.88165,16.88165,0,0,0,4.39746.02142L269.5,171.981l.63074,5.04583c6.99866-.6098,17.3794-1.94842,24.01441-3.175L293.5,169.981l3.86,3.21667c2.03284-.468,3.23975-.89233,3.14-1.21667,4.93457,7.95514,9.824,13.03625,14.75843,20.99133C317.13157,181.75138,320.43833,172.42417,314.136,162.18809Z",transform:"translate(-39.49997 -146.019)",fill:"#2f2e41"}),ee=r.a.createElement("ellipse",{cx:273,cy:41.96199,rx:2,ry:4,fill:"#ffb8b8"}),te=r.a.createElement("path",{d:"M143.71988,701.71232l-1.07324-.40235c-.23584-.08886-23.7085-9.082-34.7041-29.47363-10.99609-20.39258-5.61182-44.94531-5.55615-45.19043l.25342-1.11816,1.07275.40234c.23584.08887,23.708,9.082,34.7041,29.47363,10.99609,20.39258,5.61182,44.94532,5.55615,45.19043Zm-34.0166-30.8252c9.29639,17.24121,27.84522,26.0791,32.54492,28.09668.89356-5.03711,3.6958-25.40625-5.59228-42.63086-9.28711-17.22265-27.84326-26.07422-32.54492-28.09668C103.217,633.2963,100.41568,653.66349,109.70328,670.88712Z",transform:"translate(-39.49997 -146.019)",fill:"#3f3d56"}),ae=r.a.createElement("path",{d:"M116.34573,664.68329c19.76056,11.88861,27.371,35.50267,27.371,35.50267s-24.42779,4.33881-44.18835-7.5498-27.371-35.50267-27.371-35.50267S96.58516,652.79468,116.34573,664.68329Z",transform:"translate(-39.49997 -146.019)",fill:"#2c46a3"}),ne=r.a.createElement("path",{d:"M546.49992,442.819H1003.6838c86.60721,0,156.81623-49.36333,156.81623-135.97054v-.00032c0-86.60721-70.209-122.70511-156.81623-122.70511H860.13237c-173.21442,0-313.63245,85.46124-313.63245,258.67566Z",transform:"translate(-39.49997 -146.019)",fill:"#3f3d56"}),re=r.a.createElement("path",{d:"M978.16306,421.84037H597.66892v-1c0-68.02539,26.50391-124.06933,76.64648-162.07373,46.30371-35.09473,110.168-53.645,184.68946-53.645h119.1582c38.00488,0,70.03027,8.35059,92.61621,24.14844,25.58106,17.894,38.55176,44.37451,38.55176,78.70508,0,34.50439-13.31055,63.6084-38.49317,84.166C1047.3779,411.2935,1014.46579,421.84037,978.16306,421.84037Zm-378.49219-2H978.16306c77.25977,0,129.168-44.95508,129.168-111.86474,0-64.09424-47.08008-100.854-129.168-100.854H859.00486C733.90134,207.12162,600.24118,263.03471,599.67087,419.84037Z",transform:"translate(-39.49997 -146.019)",fill:"#2c46a3"}),le=r.a.createElement("rect",{x:701,y:125.96199,width:54,height:13,fill:"#2c46a3"}),ce=r.a.createElement("rect",{x:923,y:125.96199,width:19,height:13,fill:"#2c46a3"}),ie=r.a.createElement("rect",{x:961,y:125.96199,width:19,height:13,fill:"#2c46a3"}),se=r.a.createElement("rect",{x:774,y:125.96199,width:129,height:13,fill:"#2c46a3"}),oe=r.a.createElement("rect",{x:633,y:209.96199,width:54,height:13,fill:"#2c46a3"}),me=r.a.createElement("rect",{x:855,y:209.96199,width:19,height:13,fill:"#2c46a3"}),ue=r.a.createElement("rect",{x:893,y:209.96199,width:19,height:13,fill:"#2c46a3"}),fe=r.a.createElement("rect",{x:706,y:209.96199,width:129,height:13,fill:"#2c46a3"}),de=r.a.createElement("rect",{x:856,y:154.96199,width:54,height:13,fill:"#2c46a3"}),Ee=r.a.createElement("rect",{x:929,y:154.96199,width:54,height:13,fill:"#2c46a3"}),he=r.a.createElement("rect",{x:1002,y:154.96199,width:19,height:13,fill:"#2c46a3"}),pe=r.a.createElement("rect",{x:633,y:154.96199,width:19,height:13,fill:"#2c46a3"}),ge=r.a.createElement("rect",{x:671,y:154.96199,width:19,height:13,fill:"#2c46a3"}),be=r.a.createElement("rect",{x:709,y:154.96199,width:129,height:13,fill:"#2c46a3"}),ve=r.a.createElement("rect",{x:783.49997,y:328.981,width:54,height:13,transform:"translate(1581.49997 524.94299) rotate(-180)",fill:"#2c46a3"}),ye=r.a.createElement("rect",{x:710.49997,y:328.981,width:54,height:13,transform:"translate(1435.49997 524.94299) rotate(-180)",fill:"#2c46a3"}),we=r.a.createElement("rect",{x:672.49997,y:328.981,width:19,height:13,transform:"translate(1324.49997 524.94299) rotate(-180)",fill:"#2c46a3"}),ke=r.a.createElement("rect",{x:1041.49997,y:328.981,width:19,height:13,transform:"translate(2062.49997 524.94299) rotate(-180)",fill:"#2c46a3"}),Le=r.a.createElement("rect",{x:1003.49997,y:328.981,width:19,height:13,transform:"translate(1986.49997 524.94299) rotate(-180)",fill:"#2c46a3"}),Oe=r.a.createElement("rect",{x:855.49997,y:328.981,width:129,height:13,transform:"translate(1800.49997 524.94299) rotate(-180)",fill:"#2c46a3"}),Ne=r.a.createElement("rect",{x:152,y:536.96199,width:19,height:15,fill:"#2c46a3"}),xe=r.a.createElement("rect",{x:309,y:580.96199,width:19,height:15,fill:"#2c46a3"}),Me=function(e){var t=e.svgRef,a=e.title,n=C(e,["svgRef","title"]);return r.a.createElement("svg",_({id:"a8ebc32a-e748-45d9-a61d-aeebf59cfff3","data-name":"Layer 1",width:1121.00005,height:607.96199,viewBox:"0 0 1121.00005 607.96199",ref:t},n),a?r.a.createElement("title",null,a):null,T,P,z,D,H,V,F,A,R,I,K,W,B,J,Y,U,q,G,Q,X,$,ee,te,ae,ne,re,le,ce,ie,se,oe,me,ue,fe,de,Ee,he,pe,ge,be,ve,ye,we,ke,Le,Oe,Ne,xe)},je=r.a.forwardRef((function(e,t){return r.a.createElement(Me,_({svgRef:t},e))})),Se=(a.p,function(){return r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"JavaScript (ES6+)"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"HTML & (S)CSS"),r.a.createElement("li",null,"Firebase"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Figma"))}),Ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"section__inner-desc"},r.a.createElement("p",null,"Hallo, ich bin Flo, Sch\xfcler und Hobbyentwickler aus Treuchtlingen, Bayern."),r.a.createElement("p",null,"Mit Hilfe von modernen Web-Technologien gestalte ich Webseiten, Apps und alles, was dazu geh\xf6rt. Das Ziel ist meistens gleich: Den Nutzern eine detailgetreue und performante Erfahrung bieten."),r.a.createElement("p",null,"Seit meinem Praktikum bei der Firma Alfmeier setze ich mich mit Software-Engineering auseinander und habe einige Projekte in die Tat umgesetzt. "),r.a.createElement("p",null,"Hier sind ein paar Technologien, die ich in letzter Zeit benutzt habe:"),r.a.createElement(Se,null)),r.a.createElement("div",{className:"section__inner-svg"},r.a.createElement(je,null)))},_e=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(){var e;e=u,navigator.clipboard.writeText(e),l(!0),setTimeout((function(){return l(!1)}),5e3),clearTimeout()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\xdcberzeugt vom Portfolio? Fragen zu mir? Egal, was es ist, mein Postfach steht Ihnen offen. Schreiben Sie eine Mail an"," ",r.a.createElement("span",{className:"contact__mail",onClick:function(){return c()},onKeyDown:function(){return c()}},u)," ","oder klicken Sie unten."),r.a.createElement("a",{href:"mailto:".concat(u)},r.a.createElement(s,{basic:!0},"Hallo sagen")),r.a.createElement("div",{className:a?"snackbar open":"snackbar"},r.a.createElement("p",{className:"snackbar__message"},"Email in die Zwischenablage kopiert!")))},Ce=a(2),Te=function(e){var t=e.project,n=t.title,l=t.desc,c=t.techStack,i=t.github,s=t.url,o=t.img;return r.a.createElement("div",{className:"project"},o&&r.a.createElement("img",{src:a(11)("./".concat(o)),alt:n}),r.a.createElement("div",{className:"project__desc"},r.a.createElement("h3",{className:"project__desc-title"},n),r.a.createElement("p",{className:"project__desc-info"},l),c&&c.map((function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement("ul",{className:"project__desc-links"},s&&r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Ce.a,null)),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Ce.b,null)))))},Pe=function(){return r.a.createElement("ul",{className:"projects__list"},m&&m.map((function(e){return r.a.createElement("li",{key:e.title},r.a.createElement(Te,{project:e}))})))},ze=function(){return r.a.createElement("div",{className:"container content"},r.a.createElement("main",{className:"main-col"},r.a.createElement("section",{className:"hero"},r.a.createElement(Z,null)),r.a.createElement("section",{className:"about section"},r.a.createElement(S,{number:1},"\xdcber mich"),r.a.createElement("div",{className:"section__inner"},r.a.createElement(Ze,null))),r.a.createElement("section",{className:"projects section"},r.a.createElement(S,{number:2},"Meine Projekte"),r.a.createElement("div",{className:"section__inner"},r.a.createElement(Pe,null))),r.a.createElement("section",{className:"contact section"},r.a.createElement(S,{number:3},"Kontakt"),r.a.createElement("div",{className:"section__inner"},r.a.createElement(_e,null)))))},De=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{menuOpen:a,setMenuOpen:l}),r.a.createElement(ze,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.149bad33.chunk.js.map