
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=document.getElementById("admin-products-list"),a=document.getElementById("add-category"),d=document.getElementById("add-product"),r=document.getElementById("view-sales"),s=document.getElementById("add-sales-person"),c=document.getElementById("product-details-view"),l=document.getElementById("edit-product-details-view"),i=document.getElementById("attendants-list"),u=document.getElementById("attendant-details"),m=[o,u,a,d,r,s,c,l,i],p=e=>{return{method:"POST",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}},y=()=>{return{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}},f=e=>{return{method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}},g=()=>{return{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}};t.modifyDiv=(e=>{m.forEach(t=>{t===e?(e=>{e.style.display="block"})(t):(e=>{e.style.display="none"})(t)})}),t.createItem=async function(e,t){const n=p(t);return(await fetch(e,n)).json()},t.getSingleItem=async function(e){const t=y();return(await fetch(e,t)).json()},t.editItem=async function(e,t){const n=f(t);return(await fetch(e,n)).json()},t.deleteItem=async function(e){const t=g();return(await fetch(e,t)).json()},t.fetchAllItems=async function(e){const t=y();return(await fetch(e,t)).json()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNumberOfAttendants=void 0;var o=n(0);const a=document.getElementById("attendants-list"),d=document.getElementById("attendants-card"),r=document.getElementById("add-attendant-form"),s=document.getElementById("attendants-number"),c=document.getElementById("attendant-details"),l=document.getElementById("add-sales-person-link"),i=document.getElementById("add-sales-person"),u="https://store-manager-api-heroku.herokuapp.com/api/v1/attendants",m=()=>{(0,o.fetchAllItems)(u).then(e=>{e.forEach(e=>{((e,t,n)=>{const d=document.createElement("div");d.classList.add("card"),d.style.width="230px",d.style.float="left",d.style.margin="5px";const r=document.createElement("div");r.classList.add("card-header");const s=document.createElement("div");s.classList.add("card-main"),s.style.color="#00787a";const l=document.createElement("div");l.classList.add("main-description");const i=document.createElement("button");i.style.marginBottom="10px",i.addEventListener("click",e=>{e.preventDefault(),(0,o.modifyDiv)(c)}),i.innerHTML="View Details",l.appendChild(i);const u=document.createElement("img");u.setAttribute("src","https://via.placeholder.com/200"),r.appendChild(u);const m=document.createElement("h2");m.innerHTML=e;const p=document.createElement("p");p.innerHTML=t;const y=document.createElement("p");y.innerHTML=n,s.appendChild(m),s.appendChild(p),s.appendChild(y),d.appendChild(r),d.appendChild(s),d.appendChild(l),a.appendChild(d)})(e.first_name,e.email,e.user_type)})}).catch(e=>console.log(e))};null!==d&&null!==a&&d.addEventListener("click",e=>{e.preventDefault(),m(),(0,o.modifyDiv)(a)}),null!==r&&r.addEventListener("submit",e=>{e.preventDefault(),(()=>{const e=document.getElementById("userFirstName").value,t=document.getElementById("userLastName").value,n=document.getElementById("userUsername").value,a={first_name:e,last_name:t,email:document.getElementById("userEmail").value,username:n,password:document.getElementById("userPassword").value};(0,o.createItem)(u,a).then(e=>e).catch(e=>console.log(e))})(),document.getElementById("userFirstName").value="",document.getElementById("userLastName").value="",document.getElementById("userUsername").value="",document.getElementById("userEmail").value="",document.getElementById("userPassword").value=""}),null!==l&&null!==i&&l.addEventListener("click",()=>{(0,o.modifyDiv)(i)});t.getNumberOfAttendants=(()=>{(0,o.fetchAllItems)(u).then(e=>{s.innerHTML=e.length}).catch(e=>console.log(e))})}]);

