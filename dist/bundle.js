(()=>{"use strict";var e,t,c;t=document.querySelector(".menu-button"),c=document.querySelector(".popup-menu"),t.addEventListener("click",(function(){c.style.display="flex"})),c.addEventListener("click",(function(e){var t=e.target;(t.closest(".close-menu-btn")||t.matches('[href^="#"]'))&&c.removeAttribute("style")})),(e=document.querySelector(".club-select")).addEventListener("click",(function(){e.querySelector("ul").hasAttribute("style")?e.querySelector("ul").removeAttribute("style"):e.querySelector("ul").style.display="block"}))})();