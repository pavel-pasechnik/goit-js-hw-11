import{S as p,i as u}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();const l=document.querySelector(".search-input"),d=document.querySelector(".search-form"),c=document.querySelector(".images-list"),o=new URL("https://pixabay.com/api/"),h="41487030-c0d4f2e8fae3a5e9414bad560";d.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML='<span class="loader"></span>';const a=s.currentTarget.elements.query.value;o.searchParams.append("key",h),o.searchParams.append("q",a),o.searchParams.append("image_type","photo"),o.searchParams.append("orientation","horizontal"),o.searchParams.append("safesearch","true"),fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(l.value="",t.hits.length===0)throw new Error(response.status);c.innerHTML=t.hits.reduce((r,e)=>r+`
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
            `,""),new p(".gallery a",{captionsData:"alt",captionDelay:"250"}).refresh()}).catch(t=>{c.innerHTML="",l.value="",console.log("Sorry, there are no images matching your search query. Please try again!"),u.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",color:"#B51B1B",iconUrl:"./img/bi_x-octagon.svg",iconColor:"#FAFAFB",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
