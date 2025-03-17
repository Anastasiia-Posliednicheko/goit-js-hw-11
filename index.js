import{a as f,i as n,S as m}from"./assets/vendor-DU6yh4ar.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="49328321-2a7d7ff1359a5be8e111f7854",g="https://pixabay.com/api/",h=o=>f.get(g,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw n.error({title:"Error",message:"Failed to fetch images. Please try again later!",position:"topRight"}),console.error(t),t}),y=o=>{const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){iziToast.info({title:"No images found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=o.map(({webformatURL:e,largeImageURL:r,tags:i,likes:l,views:c,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${r}" class="gallery-link">
          <img src="${e}" alt="${i}" class="gallery-image"/>
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${l}</p>
          <p class="info-item"><b>Views:</b> ${c}</p>
          <p class="info-item"><b>Comments:</b> ${d}</p>
          <p class="info-item"><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("");t.innerHTML=s,new m(".gallery a").refresh()},b=()=>{document.querySelector(".loader").classList.add("show")},L=()=>{document.querySelector(".loader").classList.remove("show")},w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}b(),h(t).then(s=>{y(s)}).catch(s=>{n.error({title:"Error",message:"An error occurred. Please try again later.",position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
