import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as S,i as C}from"./assets/vendor-ceb9b81e.js";const e=document.querySelector("button"),T=document.querySelector("input#datetime-picker"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");document.querySelector(".timer");let s,u=!1;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<Date.now()?(C.error({message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):e.disabled=!1}};e.disabled=!0;let r;function N(){u||(u=!0,r=setInterval(b,1e3,s),e.disabled=!0)}function b(t){const i=t-new Date,{days:c,hours:d,minutes:n,seconds:o}=M(i);!isNaN(c)&&!isNaN(d)&&!isNaN(n)&&!isNaN(o)&&(l.textContent=a(c),m.textContent=a(d),f.textContent=a(n),h.textContent=a(o)),i<=0&&q()}e.addEventListener("click",()=>{s&&!u&&N()});function q(){r&&(clearTimeout(r),l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",r=null,u=!1,e.disabled=!1)}function a(t){return String(t).padStart(2,"0")}function M(t){const n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:p,seconds:D}}S(T,x);
//# sourceMappingURL=commonHelpers.js.map
