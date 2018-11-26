!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const d=document.getElementById("admin-products-list"),o=document.getElementById("add-category"),c=document.getElementById("add-product"),l=document.getElementById("view-sales"),a=document.getElementById("add-sales-person"),i=document.getElementById("product-details-view"),u=document.getElementById("edit-product-details-view"),r=document.getElementById("attendants-list"),m=document.getElementById("attendant-details"),s=[d,m,o,c,l,a,i,u,r],p=e=>{return{method:"POST",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}},E=()=>{return{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}},I=e=>{return{method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}},y=()=>{return{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+window.sessionStorage.getItem("token")}}};t.modifyDiv=(e=>{s.forEach(t=>{t===e?(e=>{e.style.display="block"})(t):(e=>{e.style.display="none"})(t)})}),t.createItem=async function(e,t){const n=p(t);return(await fetch(e,n)).json()},t.getSingleItem=async function(e){const t=E();return(await fetch(e,t)).json()},t.editItem=async function(e,t){const n=I(t);return(await fetch(e,n)).json()},t.deleteItem=async function(e){const t=y();return(await fetch(e,t)).json()},t.fetchAllItems=async function(e){const t=E();return(await fetch(e,t)).json()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNumberOfAttendants=void 0;var d=n(0);const o=document.getElementById("attendants-list"),c=document.getElementById("attendants-card"),l=document.getElementById("add-attendant-form"),a=document.getElementById("attendants-number"),i=document.getElementById("attendant-details"),u=document.getElementById("add-sales-person-link"),r=document.getElementById("add-sales-person"),m="https://store-manager-api-heroku.herokuapp.com/api/v1/attendants",s=()=>{(0,d.fetchAllItems)(m).then(e=>{e.forEach(e=>{((e,t,n)=>{const c=document.createElement("div");c.classList.add("card"),c.style.width="230px",c.style.float="left",c.style.margin="5px";const l=document.createElement("div");l.classList.add("card-header");const a=document.createElement("div");a.classList.add("card-main"),a.style.color="#00787a";const u=document.createElement("div");u.classList.add("main-description");const r=document.createElement("button");r.style.marginBottom="10px",r.addEventListener("click",e=>{e.preventDefault(),(0,d.modifyDiv)(i)}),r.innerHTML="View Details",u.appendChild(r);const m=document.createElement("img");m.setAttribute("src","https://via.placeholder.com/200"),l.appendChild(m);const s=document.createElement("h2");s.innerHTML=e;const p=document.createElement("p");p.innerHTML=t;const E=document.createElement("p");E.innerHTML=n,a.appendChild(s),a.appendChild(p),a.appendChild(E),c.appendChild(l),c.appendChild(a),c.appendChild(u),o.appendChild(c)})(e.first_name,e.email,e.user_type)})}).catch(e=>console.log(e))};null!==c&&null!==o&&c.addEventListener("click",e=>{e.preventDefault(),s(),(0,d.modifyDiv)(o)}),null!==l&&l.addEventListener("submit",e=>{e.preventDefault(),(()=>{const e=document.getElementById("userFirstName").value,t=document.getElementById("userLastName").value,n=document.getElementById("userUsername").value,o={first_name:e,last_name:t,email:document.getElementById("userEmail").value,username:n,password:document.getElementById("userPassword").value};(0,d.createItem)(m,o).then(e=>console.log(e)).catch(e=>console.log(e))})(),document.getElementById("userFirstName").value="",document.getElementById("userLastName").value="",document.getElementById("userUsername").value="",document.getElementById("userEmail").value="",document.getElementById("userPassword").value=""}),null!==u&&null!==r&&u.addEventListener("click",()=>{(0,d.modifyDiv)(r)});t.getNumberOfAttendants=(()=>{(0,d.fetchAllItems)(m).then(e=>{a.innerHTML=e.length}).catch(e=>console.log(e))})},,,function(e,t,n){"use strict";var d,o=n(0),c=n(1),l=n(5),a=(d=l)&&d.__esModule?d:{default:d};const i=document.getElementById("logo-admin");null!=i&&(i.src=a.default);let u="https://store-manager-api-heroku.herokuapp.com/api/v1/products";const r=document.getElementById("products-card"),m=document.getElementById("admin-products-list"),s=document.getElementById("add-category"),p=document.getElementById("add-product"),E=document.getElementById("add-product-link"),I=document.getElementById("add-category-link"),y=document.getElementById("view-products"),g=document.getElementById("product-details-view"),h=document.getElementById("edit-product-details-view"),B=document.getElementById("back-product-detail"),v=document.getElementById("add-product-form"),A=document.getElementById("edit-product-form");null!==A&&A.addEventListener("submit",e=>{e.preventDefault(),f()});const f=()=>{const e=document.getElementById("id-field"),t=parseInt(e.value),n=document.getElementById("quantity-field"),d=parseInt(n.value),c=document.getElementById("price-field"),l=parseFloat(c.value);L(t,d,l),(0,o.modifyDiv)(m)},L=(e,t,n)=>{u+=`/${e}`;const d={quantity:t,unit_price:n};(0,o.editItem)(u,d).then(e=>e).catch(e=>console.log(e))},C=()=>{(0,o.fetchAllItems)(u).then(e=>{e.forEach((e,t)=>{((e,t,n,d,c,l)=>{const a=document.getElementById("prod-details"),i=document.createElement("tr"),u=document.createElement("td"),r=document.createElement("td"),m=document.createElement("td"),s=document.createElement("td"),p=document.createElement("td"),E=document.createElement("td"),I=document.createElement("td"),y=document.createElement("button");y.classList.add("view-product-details-btn"),y.innerHTML="View Product Details",y.addEventListener("click",e=>{e.preventDefault(),Q(n,t,d,l,c),(0,o.modifyDiv)(g)}),u.innerHTML=e,r.innerHTML=t,m.innerHTML=n,s.innerHTML=d,p.innerHTML=l,E.innerHTML=c,I.appendChild(y),i.appendChild(u),i.appendChild(r),i.appendChild(m),i.appendChild(p),i.appendChild(E),i.appendChild(s),i.appendChild(I),a.appendChild(i)})(t+1,e.product_id,e.name,e.category,e.unit_price,e.quantity)})}).catch(e=>console.log(e))},k=(e,t,n,d)=>{const c={name:e,category:t,quantity:d,unit_price:n};(0,o.createItem)(u,c).then(e=>e).catch(e=>console.log(e))},Q=(e,t,n,d,c)=>{const l=document.getElementById("product-details-view"),a=document.createElement("h4");a.innerHTML=e,l.appendChild(a);const i=document.createElement("div");i.classList.add("details-right-column");const r=document.createElement("h3");r.innerHTML="Product ID: "+t,i.appendChild(r);const s=document.createElement("h3");s.innerHTML="Category: "+n,i.appendChild(s);const p=document.createElement("h3");p.innerHTML="Quantity in stock: "+d,i.appendChild(p);const E=document.createElement("h3");E.innerHTML="Unit price: "+c,i.appendChild(E);const I=document.createElement("div"),y=document.createElement("button");y.id="back",y.innerHTML="<< Back",y.addEventListener("click",e=>{e.preventDefault(),(0,o.modifyDiv)(m)}),I.appendChild(y);const g=document.createElement("button");g.id="edit",g.innerHTML="Edit product",g.addEventListener("click",l=>{l.preventDefault(),(0,o.modifyDiv)(h),((e,t,n,d,o)=>{document.getElementById("id-field").value=e,document.getElementById("name-field").value=t;let c=document.getElementById("select-category");(c=c.options[c.selectedIndex]).text=n,document.getElementById("quantity-field").value=d,document.getElementById("price-field").value=o})(t,e,n,d,c)}),I.appendChild(g);const B=document.createElement("button");B.id="delete",B.innerHTML="Delete product",B.addEventListener("click",e=>{e.preventDefault(),confirm("Are you sure you want to delete this Item?")&&((e=>{u+=`/${e}`,(0,o.deleteItem)(u).then(e=>e).catch(e=>console.log(e))})(t),C(),(0,o.modifyDiv)(m))}),I.appendChild(B),i.appendChild(I),l.appendChild(i)};null!==v&&v.addEventListener("submit",e=>{e.preventDefault(),(()=>{const e=document.getElementById("prod-name").value,t=document.getElementById("prod-category");t=t.options[t.selectedIndex].text;const n=parseInt(document.getElementById("prod-quantity").value),d=parseFloat(document.getElementById("prod-price").value);k(e,t,d,n)})(),alert("Product saved"),document.getElementById("prod-name").value="",document.getElementById("prod-quantity").value="",document.getElementById("prod-price").value=""}),window.addEventListener("load",()=>{C(),(0,c.getNumberOfAttendants)(),(0,o.modifyDiv)(m)}),null!==r&&null!==adminProductList&&r.addEventListener("click",()=>{(0,o.modifyDiv)(m)}),null!==E&&null!==p&&E.addEventListener("click",e=>{e.preventDefault(),(0,o.modifyDiv)(p)}),null!==I&&null!==s&&I.addEventListener("click",()=>{(0,o.modifyDiv)(s)}),null!==y&&null!==adminProductList&&y.addEventListener("click",()=>{(0,o.modifyDiv)(m)}),null!==B&&null!==g&&B.addEventListener("click",e=>{e.preventDefault(),(0,o.modifyDiv)(g)})},function(e,t){e.exports="data:image/png;base64,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"}]);