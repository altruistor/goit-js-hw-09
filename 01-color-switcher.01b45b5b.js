const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n;t.addEventListener("click",(function(){n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.01b45b5b.js.map
