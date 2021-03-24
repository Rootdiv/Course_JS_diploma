(()=>{"use strict";var e,t,n,o,r,c,i,l,s,u,a,d,f,p;s=document.querySelector(".hidden-small"),u=document.querySelector(".menu-button"),a=u.offsetHeight,d=document.querySelector(".popup-menu"),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.target.closest('[href^="#"]');if(n&&!n.matches('[href="#close"]')){var o,r=n.getAttribute("href").substring(1),c=document.getElementById(r).offsetTop,i=window.pageYOffset,l=function e(){o=requestAnimationFrame(e),i<c-15-t?(i+=15,document.documentElement.scrollTop=i):i>c+15-t?(i-=15,document.documentElement.scrollTop=i):cancelAnimationFrame(o)};requestAnimationFrame(l)}},p=function(e){e.preventDefault();var t=e.target;(t.closest(".close-menu-btn")||t.matches('[href^="#"]'))&&(d.removeAttribute("style"),window.innerWidth<=768?f(e,a):f(e))},u.addEventListener("click",(function(e){e.target.matches("img")&&(d.style.display="flex",d.addEventListener("click",p))})),s.addEventListener("click",p),(l=document.querySelector(".club-select")).addEventListener("click",(function(){l.querySelector("ul").hasAttribute("style")?l.querySelector("ul").removeAttribute("style"):l.querySelector("ul").style.display="block"})),r=document.querySelector(".head-main .right"),c=document.getElementById("free_visit_form"),i=document.getElementById("callback_form"),r.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".open-popup")?c.style.display="block":t.matches(".callback-btn")&&(i.style.display="block")})),document.body.addEventListener("click",(function(e){var t=e.target;(t.matches(".overlay")||t.closest(".close-form")||t.matches(".close-btn"))&&t.closest(".popup").removeAttribute("style")})),n=function(e){var t=e.target;t.value=t.value.replace(/[^а-яё\s]/gi,"")},o=function(e){var t=e.target;t.value=t.value.replace(/[^\+\d]/gi,""),"+"===t.value.charAt(0)&&13===t.value.length&&(t.value=t.value.substring(0,t.value.length-1))},document.body.addEventListener("click",(function(e){var t=e.target;t.matches('[placeholder="Ваше имя..."]')?t.addEventListener("input",n):t.matches('[placeholder*="Ваш номер"]')&&t.addEventListener("input",o)})),t=document.createElement("div"),document.body.addEventListener("submit",(function(e){e.preventDefault();var n=e.target;n.closest(".popup")&&(n.querySelector('input[type="checkbox"]').checked?function(e){var n=e.innerHTML;t.style.cssText="font-size: 2rem; color: #ffffff;",t.textContent="Загрузка...",e.appendChild(t);var o=new FormData(e);e.reset();var r={};o.forEach((function(e,t){r[t]=e}));var c=function(t){e.style.cssText="padding-top: 25%; font-size: 2rem; color: #ffffff;",e.textContent=t},i=function(){setTimeout((function(){e.removeAttribute("style"),e.innerHTML=n,e.closest(".popup").removeAttribute("style")}),5e3)};(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(r).then((function(t){if(200!==t.status)throw new Error("Status network not 200");e.closest(".popup")&&(c("Спасибо! Мы скоро с Вами свяжемся!"),i())})).catch((function(t){e.closest(".popup")&&(c("Что-то пошло не так..."),i()),console.error(t)}))}(n):(t.style.cssText="padding-top: 5px; color: #FF0000;",t.textContent="Необходимо подтвердить согласие на персональных обработку данных",n.appendChild(t),setTimeout((function(){return t.remove()}),2e3)))})),function(){var e=document.createElement("div"),t=function(t){t.closest("#card_order")?e.style.cssText="font-size: 2rem; color: #000000;":e.style.cssText="font-size: 2rem; color: #ffffff;",t.appendChild(e),e.textContent="Загрузка...";var n=new FormData(t);t.reset();var o={};n.forEach((function(e,t){o[t]=e})),setTimeout((function(){return e.remove()}),1e3),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(o).then((function(e){if(200!==e.status)throw new Error("Status network not 200");document.getElementById("thanks").style.display="block"})).catch((function(e){document.getElementById("thanks").style.display="block",document.querySelector("#thanks .form-content h4").textContent="Ошибка",document.querySelector("#thanks .form-content p").textContent="Что-то пошло не так...",console.error(e)}))};document.body.addEventListener("submit",(function(n){if(n.preventDefault(),!n.target.closest(".popup")){var o=n.target;if(o.querySelector('input[type="checkbox"]'))o.querySelector('input[type="checkbox"]').checked?t(o):(e.style.cssText="padding-top: 5px; color: #FF0000;",e.textContent="Необходимо подтвердить согласие на персональных обработку данных",o.appendChild(e),setTimeout((function(){return e.remove()}),2e3));else if(o.querySelectorAll('input[type="radio"]')){var r=o.querySelectorAll('input[type="radio"]');(r[0].checked||r[1].checked)&&t(o)}}}))}(),(e=document.querySelector(".fixed-gift"))&&e.addEventListener("click",(function(){document.getElementById("gift").style.display="block",e.remove()})),function(){var e=document.querySelector(".top-menu"),t=e.offsetTop;window.addEventListener("scroll",(function(){window.pageYOffset>=t&&window.innerWidth<=768?e.style.position="fixed":e.removeAttribute("style")}))}(),function(){var e=document.querySelector("header").offsetHeight,t=document.getElementById("totop");t.style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>e?t.style.display="block":t.style.display="none"}));var n=function e(){window.pageYOffset>0&&(window.scrollBy(0,-15),setTimeout(e,1))};t.addEventListener("click",(function(e){e.preventDefault(),n()}))}()})();