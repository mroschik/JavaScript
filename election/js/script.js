!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="js/",n(n.s=0)}([function(e,t,n){"use strict";function r(){var e=document.querySelector("#ready"),t=document.querySelector("#bio"),n=document.querySelector("#name"),r=document.getElementsByClassName("main-cards-item"),o=document.querySelector("#age"),c=document.querySelector(".custom-info"),l=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),u=[n,t,o],d=[l,a,i],s=r[1].cloneNode(!0);s.setAttribute("id","new-candidate");for(var m=0;m<u.length;m++)u[m].parentNode.insertBefore(d[m],u[m].nextSibling),d[m].style.color="red",d[m].style.fontSize="8px";function y(){var e=document.querySelector(".custom-info"),t=document.querySelector(".radio"),n=Math.abs(parseInt(o.value));return n>100?(i.innerHTML="Введите корректный возраст",n=""):n>=0&&n<35&&(i.innerHTML="Президентом РФ можно стать не раньше 35 лет",n=""),e.insertBefore(i,t),o.value=n,n}n.addEventListener("focus",function(){l.innerHTML=""}),o.addEventListener("keypress",function(){var e=this;setTimeout(function(){var t=/[^0-9]/g.exec(e.value);e.value=e.value.replace(t,"")},0)}),o.addEventListener("change",y),o.addEventListener("focus",function(){i.innerHTML=""}),t.addEventListener("focus",function(){a.innerHTML=""}),e.addEventListener("click",function(){""==n.value||""==o.value||""==t.value||t.value.length<10?(c.style.paddingTop=0,""==n.value?l.innerHTML="* Введите имя кандидата":l.innerHTML="",""==o.value&&(i.innerHTML="* Введите возраст кандидата"),""==t.value||t.value.length<10?a.innerHTML="* Поле должно содержать не менее 10 символов":a.innerHTML=""):(c.style.paddingTop="8px",function(){var e=document.querySelector(".main"),c=document.querySelector(".custom"),l=document.querySelector(".main-cards");e.style.display="block",c.style.display="none",l.insertBefore(s,r[1]),s.style.display="block";var a=document.querySelector("#new-candidate .name"),i=document.querySelector("#new-candidate .age"),u=document.querySelector("#new-candidate .sex"),d=document.querySelector("#new-candidate .views"),m=document.querySelector("#new-candidate .bio");a.innerHTML=n.value,function(e,t,n){var r=n()%10;n()&&(e.innerHTML="".concat(t.value,1==r?" год":r>1&&r<5?" года":" лет"))}(i,o,y),male.checked?u.innerHTML="Мужской":u.innerHTML="Женский";d.innerHTML=select.value,m.innerHTML=t.value,v=document.querySelector(".person"),f=document.querySelector("#new-candidate .photo"),p=v.cloneNode(!0),f.appendChild(p),f.classList.remove("photo-2"),function(){var e=document.getElementsByClassName("main-cards-item"),t=document.getElementsByClassName("result-count"),n=document.getElementsByClassName("progress-bar");e[0].classList.remove("main-cards-item-active");for(var r=0;r<t.length;r++)t[r].innerHTML="0%";for(var o=0;o<n.length;o++)n[o].style.height=0}(),function(){var e=25,t=100,n=1,r=3,o=[],c=document.querySelector("#voting"),l=document.querySelector("#crime"),a=document.getElementsByClassName("result-count"),i=document.getElementsByClassName("progress-bar");function u(e,t){return Math.floor(Math.random()*(t-e+1))+e}function d(){var e=0;do{var y=u(n,t);o[0]=u(n,t-1),o[1]=Math.floor((t-o[0])*y/100),o[2]=Math.floor(t-o[0]-o[1]),e=o[0]+o[1]+o[2]}while(e!==t);for(var v=0;v<r;v++)a[v].innerHTML="".concat(o[v],"%"),i[v].style.height="".concat(o[v],"%");s(),c.removeEventListener("click",d),l.addEventListener("click",m)}function s(){for(var e=document.getElementsByClassName("main-cards-item"),t=0;t<e.length;t++)e[t].classList.remove("main-cards-item-active");for(var n=Math.max.apply(null,o),c=0;c<r;c++)n==o[c]&&e[c].classList.add("main-cards-item-active")}function m(){if(o[1]>=t-e)o[1]=t,o[0]=o[2]=0;else{o[1]+=e;var n=Math.round(o[0]/(o[0]+o[2])*t),c=Math.round(o[2]/(o[0]+o[2])*t);o[0]-=Math.round(e*(n/t)),o[2]-=Math.round(e*(c/t)),s()}for(var u=0;u<r;u++)a[u].innerHTML="".concat(o[u],"%"),i[u].style.height="".concat(o[u],"%");l.removeEventListener("click",m)}c.addEventListener("click",d),document.querySelector("#reset").addEventListener("click",function(){for(var e=document.querySelectorAll(".main-cards-item"),t=document.querySelector(".main"),n=document.querySelector(".custom"),r=document.querySelector("#new-candidate"),o=0;o<e.length;o++)e[o].classList.remove("main-cards-item-active");t.style.display="none",n.style.display="flex",r.style.display="none";for(var a=document.querySelector("#new-candidate .photo");a.lastChild;)a.removeChild(a.lastChild);c.addEventListener("click",d),l.addEventListener("click",m)})}();var v,f,p}()),c.style.paddingTop="8px"})}function o(){for(var e=1,t=3,n=6,r=3,o=document.querySelector("#male"),c=document.querySelector("#female"),l=document.querySelectorAll(".skin-color"),a=document.querySelectorAll(".hair-style"),i=document.querySelectorAll(".clothes-style"),u=document.querySelectorAll(".prev"),d=document.querySelectorAll(".next"),s=document.querySelector("#person-skin"),m=document.querySelector("#person-hair"),y=document.querySelector("#person-clothes"),v=[],f=[],p=[],h=[],g=1,S=1,L=0,q=0;L<6;L++,q++)f.push("url(img/skin/skin-".concat(L+1,".png)")),p.push("url(img/hair/construct/hair-".concat(L+1,".png)")),h.push("url(img/clothes/construct/clothes-".concat(L+1,".png)")),l.length<=q&&(q=0),v.push(l[q]);for(var b=[v,a,i],M=[s,m,y],k=[f,p,h],E=0;E<r;E++)M[E].style.backgroundImage=k[E][e-1],u[E].addEventListener("click",T.bind(null,-1,b[E],k[E],M[E])),d[E].addEventListener("click",T.bind(null,1,b[E],k[E],M[E]));function T(r,c,l,a){!function(r,c,l){var a,i;o.checked?(i=t,a=e):(i=n,a=t+1),r>i&&(S=a),r<a&&(S=i),l.style.backgroundImage=c[S-1]}(S+=r,l,a),function(r,c){var l,a;o.checked?(a=t,l=e):(a=n,l=t+1),r>a&&(g=l),r<l&&(g=a);for(var i=0;i<c.length;i++)c[i].style.display="none";c[g-1].style.display="block"}(g+=r,c)}function H(){var n;n=o.checked?e-1:t;for(var c=0;c<r;c++)M[c].style.backgroundImage=k[c][n];for(var l=0;l<a.length;l++)a[l].style.display="none";a[n].style.display="block";for(var u=0;u<i.length;u++)i[u].style.display="none";i[n].style.display="block";for(var d=0;d<v.length;d++)v[d].style.display="none";v[0].style.display="block"}c.addEventListener("change",H),o.addEventListener("change",H)}n.r(t),document.getElementById("popup-btn").addEventListener("click",function(){var e=document.querySelector(".overlay"),t=document.querySelector(".main"),n=document.querySelector(".custom");e.style.display="none",t.style.display="none",n.style.display="flex";for(var c=0;c<n.children.length;c++)n.children[c].style.display="block";r(),o()})}]);