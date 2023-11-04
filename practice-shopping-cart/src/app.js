let mainsection = document.getElementById("main-section");

let generateLandingCart = () => {
  mainsection.innerHTML = shopItemsData.map((x) => {
    console.log(x);
    let { id, name, price, desc, img } = x;
    return `<div id="${id}" class="one-cart">
  <img src=${img} alt="" />
  <div class="name-desc">
    <h3>${name}</h3>
    <p>${desc}</p>
  </div>
  <div class="price-quantity">
    <h3>$ ${price}</h3>
    <div class="quantity">
      <button class="minus-plus">-</button>
      <div id="${id}">0</div>
      <button class="minus-plus">+</button>
    </div>
  </div>
</div>`;
  });
};
generateLandingCart();
