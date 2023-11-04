let label = document.getElementById("label");
let shoppingCart = document.getElementById("shoppingCart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateOneCart = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => y.id === id) || [];
        console.log(search);
        let { name, price, desc, img } = search;

        return `<div id="prodcuct-${id}" class="oneCartPage">
      <img width="100" src=${img} alt="" />
      <div class="name-desc">
        <h3>${name}</h3>
      </div>
      <div class="price-quantity">
        <h3>$ ${price}</h3>
        <div class="quantity">
          <button onclick="decrement(${id})" class="minus-plus">-</button>
          <div id="${id}" class="new">${item}</div>
          <button onclick="increment(${id})" class="minus-plus">+</button>
        </div>
      </div>
    </div>`;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `<div class="empty-page">
  <h2>Cart is empty</h2>
  <a href="./index.html">
    <button class="back-btn">back to home</button>
  </a>
</div>`;
  }
};
generateOneCart();
