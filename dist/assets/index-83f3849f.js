(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.getElementById("products");a.addEventListener("click",o=>{if(o.target.tagName==="BUTTON"){const t=o.target.closest(".product").getAttribute("data-id");d(t)}});function d(o){const t=JSON.parse(localStorage.getItem("cart"))||[],n=document.querySelector(`[data-id="${o}"]`),c=n.querySelector("h2").textContent,e=n.querySelector("p").textContent,r=t.find(i=>i.id===o);r?r.quantity++:t.push({id:o,name:c,price:e,quantity:1}),localStorage.setItem("cart",JSON.stringify(t)),s()}function l(o){let t=JSON.parse(localStorage.getItem("cart"))||[];const n=t.findIndex(c=>c.id===o);n!==-1&&(t.splice(n,1),localStorage.setItem("cart",JSON.stringify(t))),s()}function s(){const o=document.getElementById("cart");o.innerHTML="";const t=JSON.parse(localStorage.getItem("cart"))||[];t.length===0?o.innerHTML="<p>Your cart is empty.</p>":t.forEach(n=>{const c=document.createElement("div");c.innerHTML=`
                        <p>${n.name} - ${n.price} x ${n.quantity}</p>
                        <button class='removeBtn'>Remove</button>
                    `,o.appendChild(c),c.querySelector(".removeBtn").addEventListener("click",()=>{l(n.id)})})}window.addEventListener("load",()=>{s()});
