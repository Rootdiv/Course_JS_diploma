(()=>{"use strict";var e,t,c,l,r,o;r=document.querySelector(".menu-button"),o=document.querySelector(".popup-menu"),r.addEventListener("click",(function(){o.style.display="flex"})),o.addEventListener("click",(function(e){var t=e.target;(t.closest(".close-menu-btn")||t.matches('[href^="#"]'))&&o.removeAttribute("style")})),(l=document.querySelector(".club-select")).addEventListener("click",(function(){l.querySelector("ul").hasAttribute("style")?l.querySelector("ul").removeAttribute("style"):l.querySelector("ul").style.display="block"})),e=document.querySelector(".head-main .right"),t=document.getElementById("free_visit_form"),c=document.getElementById("callback_form"),e.addEventListener("click",(function(e){e.preventDefault();var l=e.target;l.matches(".open-popup")?t.style.display="block":l.matches(".callback-btn")&&(c.style.display="block")})),document.body.addEventListener("click",(function(e){var t=e.target;(t.matches(".overlay")||t.closest(".close-form"))&&t.closest(".popup").removeAttribute("style")}))})();