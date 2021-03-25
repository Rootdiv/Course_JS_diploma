(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,c,l,a,i,s,u,d,f,m,p,v,y,h,g;m=document.querySelector(".hidden-small"),p=document.querySelector(".menu-button"),v=p.offsetHeight,y=document.querySelector(".popup-menu"),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.target.closest('[href^="#"]');if(n&&!n.matches('[href="#close"]')){var o,r=n.getAttribute("href").substring(1),c=document.getElementById(r).offsetTop,l=window.pageYOffset,a=function e(){o=requestAnimationFrame(e),l<c-15-t?(l+=15,document.documentElement.scrollTop=l):l>c+15-t?(l-=15,document.documentElement.scrollTop=l):cancelAnimationFrame(o)};requestAnimationFrame(a)}},g=function(e){e.preventDefault();var t=e.target;(t.closest(".close-menu-btn")||t.matches('[href^="#"]'))&&(y.removeAttribute("style"),window.innerWidth<=768?h(e,v):h(e))},p.addEventListener("click",(function(e){e.target.matches("img")&&(y.style.display="flex",y.addEventListener("click",g))})),m.addEventListener("click",g),(f=document.querySelector(".club-select")).addEventListener("click",(function(){f.querySelector("ul").hasAttribute("style")?f.querySelector("ul").removeAttribute("style"):f.querySelector("ul").style.display="block"})),s=document.querySelector(".head-main .right"),u=document.getElementById("free_visit_form"),d=document.getElementById("callback_form"),s.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".open-popup")?u.style.display="block":t.matches(".callback-btn")&&(d.style.display="block")})),document.body.addEventListener("click",(function(e){var t=e.target;(t.matches(".overlay")||t.closest(".close-form")||t.matches(".close-btn"))&&t.closest(".popup").removeAttribute("style")})),window.onload=(c=function(e){var t=e.target;t.value=t.value.replace(/[^а-яё\s]/gi,"")},l=function(e){var t=e.target;t.value=t.value.split(/\s+/).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ").trim()},a=function(e){var t=e.target;t.value=t.value.replace(/[^\+\d]/g,""),"+"===t.value.charAt(0)&&"7"===t.value.charAt(1)||(t.value="+7"),t.value.length>12&&(t.value=t.value.substring(0,12))},i=function(e){var t=e.target;t.value=t.value.replace(/^[\+]{1,}/g,"+").replace(/[\+]{1,}$/g,"")},void document.body.addEventListener("click",(function(e){var t=e.target;t.matches('[placeholder="Ваше имя..."]')?(t.addEventListener("input",c),t.addEventListener("blur",l)):t.matches('[placeholder*="Ваш номер"]')&&(t.addEventListener("input",a),t.addEventListener("blur",i))}))),r=document.createElement("div"),document.body.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;t.closest(".popup")&&(t.querySelector('input[type="checkbox"]').checked?function(e){var t=e.innerHTML;r.style.cssText="font-size: 2rem; color: #ffffff;",r.textContent="Загрузка...",e.appendChild(r);var n=new FormData(e);e.reset();var o={};n.forEach((function(e,t){o[t]=e}));var c=function(t){e.style.cssText="padding-top: 25%; font-size: 2rem; color: #ffffff;",e.textContent=t},l=function(){setTimeout((function(){e.removeAttribute("style"),e.innerHTML=t,e.closest(".popup").removeAttribute("style")}),5e3)};(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(o).then((function(t){if(200!==t.status)throw new Error("Status network not 200");e.closest(".popup")&&(c("Спасибо! Мы скоро с Вами свяжемся!"),l())})).catch((function(t){e.closest(".popup")&&(c("Что-то пошло не так..."),l()),console.error(t)}))}(t):(r.style.cssText="padding-top: 5px; color: #FF0000;",r.textContent="Необходимо подтвердить согласие на персональных обработку данных",t.appendChild(r),setTimeout((function(){return r.remove()}),2e3)))})),function(){var e=document.createElement("div"),t=function(t){t.closest("#card_order")?e.style.cssText="font-size: 2rem; color: #000000;":e.style.cssText="font-size: 2rem; color: #ffffff;",t.appendChild(e),e.textContent="Загрузка...";var n=new FormData(t);t.reset();var o={};n.forEach((function(e,t){o[t]=e})),setTimeout((function(){return e.remove()}),1e3),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(o).then((function(e){if(200!==e.status)throw new Error("Status network not 200");document.getElementById("thanks").style.display="block"})).catch((function(e){document.getElementById("thanks").style.display="block",document.querySelector("#thanks .form-content h4").textContent="Ошибка",document.querySelector("#thanks .form-content p").textContent="Что-то пошло не так...",console.error(e)}))};document.body.addEventListener("submit",(function(n){if(n.preventDefault(),!n.target.closest(".popup")){var o=n.target;if(o.querySelector('input[type="checkbox"]'))o.querySelector('input[type="checkbox"]').checked?t(o):(e.style.cssText="padding-top: 5px; color: #FF0000;",e.textContent="Необходимо подтвердить согласие на персональных обработку данных",o.appendChild(e),setTimeout((function(){return e.remove()}),2e3));else if(o.querySelectorAll('input[type="radio"]')){var r=o.querySelectorAll('input[type="radio"]');(r[0].checked||r[1].checked)&&t(o)}}}))}(),(o=document.querySelector(".fixed-gift"))&&o.addEventListener("click",(function(){document.getElementById("gift").style.display="block",o.remove()})),function(){var e=document.querySelector(".top-menu"),t=e.offsetTop;window.addEventListener("scroll",(function(){window.pageYOffset>=t&&window.innerWidth<=768?e.style.position="fixed":e.removeAttribute("style")}))}(),function(){var e=document.querySelector("header").offsetHeight,t=document.getElementById("totop");t.style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>e?t.style.display="block":t.style.display="none"}));var n=function e(){window.pageYOffset>0&&(window.scrollBy(0,-15),setTimeout(e,1))};t.addEventListener("click",(function(e){e.preventDefault(),n()}))}(),document.querySelector(".footer-top .left").addEventListener("click",(function(e){e.target.matches('[href^="#"]')&&(e.preventDefault(),function(e){var t,n=e.target.closest('[href^="#"]').getAttribute("href").substring(1),o=document.getElementById(n).offsetTop,r=window.pageYOffset;requestAnimationFrame((function e(){t=requestAnimationFrame(e),r>o?(r-=15,document.documentElement.scrollTop=r):cancelAnimationFrame(t)}))}(e))})),function(){var t=document.getElementById("price-total");if(t){var n=document.getElementById("card_order"),o=document.querySelector(".time"),r=document.querySelector('label[for^="m"]').textContent,c=document.querySelector('input[name="club-name"]').value,l=document.querySelector('input[name="code"]'),a=function(n,o){fetch("./".concat(n,".html")).then((function(e){return e.text()})).then((function(n){var r,c=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,i=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw l}}}}((new DOMParser).parseFromString(n,"text/html").querySelectorAll('label[for^="t"]'));try{for(c.s();!(r=c.n()).done;){var a=r.value,i=a.querySelector(".solo").textContent,s=/[соло]/i.test(i);if(a.querySelector(".long").textContent===o&&s){var u=a.querySelector(".cost").textContent,d=parseInt(u);if("ТЕЛО2020"===l.value){var f=parseInt(u)/100*30;t.textContent=d-Math.ceil(f)}else t.textContent=d}}}catch(e){c.e(e)}finally{c.f()}}))},i=c,s=r;a(i,s),n.addEventListener("change",(function(e){var t=e.target;t.matches('input[name="club-name"]')&&(i=t.value),a(i,s)})),o.addEventListener("click",(function(e){var t=e.target;t.matches('label[for^="m"]')&&(s=t.textContent),a(i,s)}))}}(),t=document.querySelectorAll(".main-slider .slide"),n=0,setInterval((function(){t[n].style.display="none",++n>=t.length&&(n=0),t[n].style.display="flex"}),3e3),function(){var e;(e=document.createElement("style")).id="slider-style",e.textContent="\n      .slide-item {\n        display: none;\n      }\n      .slide-active {\n        display: block;\n      }\n    ",document.head.appendChild(e);for(var t=document.querySelector(".gallery-slider"),n=document.querySelectorAll(".gallery-slider .slide"),o=document.querySelector(".slider-dots-wrapper"),r=0;r<n.length;r++)n[r].classList.add("slide-item"),0===r&&n[r].classList.add("slide-active");var c=document.createElement("ul");c.className="slider-dots",c.style.cssText="position: relative; bottom: 50px;",o.append(c);for(var l=document.querySelector(".slider-dots"),a=0;a<n.length;a++){var i=document.createElement("li"),s=document.createElement("button");s.classList.add("dotBtn"),i.classList.add("dot"),0===a&&i.classList.add("slick-active"),l.append(i),i.append(s)}var u,d=t.querySelectorAll(".dot"),f=0,m=function(e,t,n){e[t].classList.remove(n)},p=function(e,t,n){e[t].classList.add(n)},v=function(){m(n,f,"slide-active"),m(d,f,"slick-active"),++f>=n.length&&(f=0),p(n,f,"slide-active"),p(d,f,"slick-active")},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;u=setInterval(v,e)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;m(n,f,"slide-active"),m(d,f,"slick-active"),t.matches("#arrow-right")?f++:t.matches("#arrow-left")?f--:t.closest(".dot")&&d.forEach((function(e,n){e===t.closest(".dot")&&(f=n)})),f>=n.length&&(f=0),f<0&&(f=n.length-1),p(n,f,"slide-active"),p(d,f,"slick-active")})),t.addEventListener("mouseover",(function(e){(e.target.closest(".slider-arrow")||e.target.closest(".dot"))&&clearTimeout(u)})),t.addEventListener("mouseout",(function(e){(e.target.closest(".slider-arrow")||e.target.closest(".dot"))&&y()})),y(1500)}()})();