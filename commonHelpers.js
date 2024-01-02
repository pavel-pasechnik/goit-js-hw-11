import{S as p,i as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const c=document.querySelector(".search-input"),h=document.querySelector(".search-form"),l=document.querySelector(".images-list"),f=document.querySelector(".gallery"),u=document.createElement("span");u.className="loader is-hidden";f.append(u);const d=document.querySelector(".loader"),t=new URL("https://pixabay.com/api/"),y="41487030-c0d4f2e8fae3a5e9414bad560",g=new p(".gallery a",{captionsData:"alt",captionDelay:"250"});h.addEventListener("submit",n=>{n.preventDefault(),d.classList.remove("is-hidden");const o=n.currentTarget.elements.query.value;t.searchParams.append("key",y),t.searchParams.append("q",o),t.searchParams.append("image_type","photo"),t.searchParams.append("orientation","horizontal"),t.searchParams.append("safesearch","true"),fetch(t).then(a=>{if(!a.ok)throw new Error(a.status);return t.searchParams.delete("key"),t.searchParams.delete("q"),t.searchParams.delete("image_type"),t.searchParams.delete("orientation"),t.searchParams.delete("safesearch"),a.json()}).then(a=>{if(c.value="",d.classList.add("is-hidden"),a.hits.length===0)throw new Error(error);l.innerHTML=a.hits.reduce((s,e)=>s+`
          <li class="images-item">
            <a class="images-link" href="${e.largeImageURL}"><img class="images" data-source="${e.largeImageURL}" alt="${e.tags}" src="${e.webformatURL}" width="360" height="200"></a>
            <div class="description">
            <div>
            <p><b>Likes</b></p>
            <p>${e.likes}</p>
            </div>
            <div>
            <p><b>Views</b></p>
            <p>${e.views}</p>
            </div>
            <div>
            <p><b>Comments</b></p>
            <p>${e.comments}</p>
            </div>
           <div>
           <p><b>Downloads</b></p>
           <p>${e.downloads}</p>
           </div>
            </div>
          </li>
            `,""),g.refresh()}).catch(a=>{l.innerHTML="",c.value="",m.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",color:"#B51B1B",iconUrl:"./bi_x-octagon.svg",iconColor:"#FAFAFB",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
