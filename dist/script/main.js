(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let a=performance.now();requestAnimationFrame((function s(l){let c=(l-a)/o;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(s)}))};(e=>{const t=document.querySelector(".timer-days"),o=document.querySelector(".timer-hours"),a=document.querySelector(".timer-minutes"),s=document.querySelector(".timer-seconds");setInterval((()=>{const{resul:e,seconds:l,minutes:c,hours:r,days:n}=(()=>{const e=Date.parse(new Date),t=(new Date("15 march 2023").getTime()-e)/1e3;return{resul:t,seconds:parseInt(t%60),minutes:parseInt(t/60%60),hours:parseInt(t/3600%24),days:parseInt(t/9e4)}})();if(!(e>0))return t.textContent="00",o.textContent="00",a.textContent="00",void(s.textContent="00");t.textContent=n>=10?n:"0"+n,o.textContent=r>=10?r:"0"+r,a.textContent=c>=10?c:"0"+c,s.textContent=l>=10?l:"0"+l}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelectorAll(".list_btn"),o=()=>{e.classList.toggle("active-menu")};t.forEach((e=>{e.addEventListener("click",(e=>{if(e.target.getAttribute("href")&&e.target.classList.contains("close-modal")){e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}}))})),document.addEventListener("click",(t=>{e.classList.contains("active-menu")&&!t.target.closest(".active-menu")?o():(t.target.classList.contains("close-modal")&&o(),(t.target.classList.contains("menu")||t.target.closest(".menu"))&&o())}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),a=document.querySelector(".popup-content");let s=0;const l=()=>{o.style.display="none",document.body.style.overflowY="",s=0};t.forEach((t=>{t.addEventListener("click",(()=>{o.style.display="flex",window.screen.width>768&&e({duration:250,timing:e=>e,draw(e){a.style.left=40*e+"%"}}),document.body.style.overflowY="hidden",t.addEventListener("keydown",(e=>{27===e.keyCode&&l()}))}))})),o.addEventListener("click",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup-close"))&&l()}))})(),(()=>{const e=document.querySelectorAll(".calc_reg"),t=document.querySelector(".mess"),o=document.querySelectorAll('[type="email"]'),a=document.querySelectorAll('[type="tel"]');e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\а-яА-Я\-?\s]+$/g,"")})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\a-zA-Z0-9?\.?\-?\_?\!?\~?\*?\'?\@]+$/g,"")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\-\()]+/g,"")}))}))})(),(()=>{const e=document.querySelectorAll(".service-header-tab"),t=document.querySelectorAll(".service-tab");let o;e.forEach((a=>{a.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),a.classList.add("active"),t.forEach((e=>{e.classList.add("d-none")})),o=a.dataset.tab,document.querySelector(o).classList.remove("d-none")}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),o=document.querySelector(".portfolio-dots");let a,s,l=0;e.forEach(((e,t)=>{s=0===t?'<li class="dot dot-active"></li>':'<li class="dot"></li>',o.innerHTML+=s}));const c=document.querySelectorAll(".dot"),r=()=>{e[l].classList.remove("portfolio-item-active"),c[l].classList.remove("dot-active"),l++,l>=e.length&&(l=0),e[l].classList.add("portfolio-item-active"),c[l].classList.add("dot-active")};a=setInterval(r,2e3),t.addEventListener("mouseenter",(()=>clearInterval(a))),t.addEventListener("mouseleave",(()=>a=setInterval(r,2e3))),t.addEventListener("click",(t=>{t.target.classList.contains("next")&&(t.preventDefault(),e[l].classList.remove("portfolio-item-active"),c[l].classList.remove("dot-active"),l++,l>=e.length&&(l=0),e[l].classList.add("portfolio-item-active"),c[l].classList.add("dot-active")),t.target.classList.contains("prev")&&(t.preventDefault(),e[l].classList.remove("portfolio-item-active"),c[l].classList.remove("dot-active"),l--,l<0&&(l=e.length-1),e[l].classList.add("portfolio-item-active"),c[l].classList.add("dot-active"))})),c.forEach(((t,o)=>{t.addEventListener("click",(t=>{e[l].classList.remove("portfolio-item-active"),c[l].classList.remove("dot-active"),e[o].classList.add("portfolio-item-active"),c[o].classList.add("dot-active"),l=o}))}))})(),((t=100)=>{const o=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),s=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),r=document.getElementById("total");let n,i,d,u;const v=t=>{e({duration:100,timing:e=>e,draw(e){r.textContent=parseInt(e*t)}})};o.addEventListener("input",(()=>{0!==a.selectedIndex?(n=+a[a.selectedIndex].value,s.style.opacity=1,s.style.borderColor="#19b5fe",s.disabled=!1):(s.style.opacity="",s.style.borderColor="",s.disabled=!0,s.value="",r.textContent=0),""!==s.value?(l.style.opacity=1,l.style.borderColor="#19b5fe",l.disabled=!1,u=Math.ceil(n*s.value*t),v(u)):(l.style.opacity="",l.style.borderColor="",l.disabled=!0,l.value="",r.textContent=0),""!==l.value?(i=1,l.value>1?i+=l.value/10:i=1,c.style.opacity=1,c.style.borderColor="#19b5fe",c.disabled=!1,u=Math.ceil(u*i),v(u)):(c.style.opacity="",c.style.borderColor="",c.disabled=!0,c.value=""),""!==c.value&&(d=c.value<5?2:c.value<10?1.5:1,u=Math.ceil(u*d),v(u))}))})(100)})();