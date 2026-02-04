import{g as m,s as p,u as g,p as y}from"./showToast-jm1fRe5C.js";const S=`
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="./images/swap-store-high-resolution-logo-transparent.png" alt="logo" />
        <p>
          Welcome to Swap EcomStore, <br />
          your ultimate destination for
          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Payment Method </a>
        <a href="" target="_blank"> Delivery </a>
        <a href="" target="_blank"> Return and Exchange </a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Swapnil Tiwari</p>
      </div>
    </div>
  </footer>`,f=document.querySelector(".section-footer");f.insertAdjacentHTML("afterbegin",S);m();const h=(n,r,u)=>{let o=m();const c=document.querySelector(`#card${r}`);let t=c.querySelector(".productQuantity").innerText,a=c.querySelector(".productPrice").innerText;a=a.replace("₹","");let i=o.find(s=>s.id===r);if(i&&t>1){t=Number(i.quantity)+Number(t),a=Number(a*t);let s={id:r,quantity:t,price:a},l=o.map(e=>e.id===r?s:e);localStorage.setItem("cartProductLS",JSON.stringify(l)),p("add",r)}if(i)return!1;a=Number(a*t),t=Number(t),o.push({id:r,quantity:t,price:a}),localStorage.setItem("cartProductLS",JSON.stringify(o)),g(o),p("add",r)},q=(n,r,u)=>{const o=document.querySelector(`#card${r}`);console.log(o);const c=o.querySelector(".productQuantity");let t=parseInt(c.getAttribute("data-quantity"))||1;return n.target.className==="cartIncrement"&&(t<u?t+=1:t===u&&(t=u)),n.target.className==="cartDecrement"&&t>1&&(t-=1),c.innerText=t,console.log(t),c.setAttribute("data-quantity",t.toString()),t},b=document.querySelector("#productContainer"),v=document.querySelector("#productTemplate"),C=n=>{if(!n)return!1;n.forEach(r=>{const{brand:u,category:o,description:c,id:t,image:a,name:i,price:s,stock:l}=r,e=document.importNode(v.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${t}`),e.querySelector(".category").textContent=o,e.querySelector(".productName").textContent=i,e.querySelector(".productImage").src=a,e.querySelector(".productImage").alt=i,e.querySelector(".productStock").textContent=l,e.querySelector(".productDescription").textContent=c,e.querySelector(".productPrice").textContent=`₹${s}`,e.querySelector(".productActualPrice").textContent=`₹${s}`,e.querySelector(".stockElement").addEventListener("click",d=>{q(d,t,l)}),e.querySelector(".add-to-cart-button").addEventListener("click",d=>{h(d,t)}),b.append(e)})};C(y);
