import{a as y,S as h,i as l}from"./assets/vendor-Byr6WKvV.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",b="52252669-cc5c6090dc05e341eb544e959";function v(o){return y.get(L,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const m=document.querySelector(".gallery"),s=document.getElementById("loader"),w=new h(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){if(!Array.isArray(o)||o.length===0)return;const r=o.map(i=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:n,views:d,comments:g,downloads:p}=i;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${a}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${n}</p>
          <p class="info-item"><b>Views:</b> ${d}</p>
          <p class="info-item"><b>Comments:</b> ${g}</p>
          <p class="info-item"><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `}).join("");m.innerHTML=r,w.refresh()}function I(){m.innerHTML=""}function P(){s&&(s.classList.remove("visually-hidden"),s.classList.add("is-loading"))}function c(){s&&(s.classList.add("visually-hidden"),s.classList.remove("is-loading"))}const f=document.querySelector(".form"),u=f.querySelector("input");f.addEventListener("submit",q);function q(o){o.preventDefault();const r=u.value.trim();if(r===""){l.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}I(),P(),v(r).then(i=>{if(c(),!i||!Array.isArray(i.hits)||i.hits.length===0){l.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(i.hits),u.value=""}).catch(i=>{c(),l.error({title:"Error",message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})})}
//# sourceMappingURL=index.js.map
