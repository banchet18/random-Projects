let label = document.getElementById("label");
let shoppingCart = document.getElementById("shoppingCart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// starting with nav-calculation

let calculation = () => {
  let amount = document.getElementById("amount");

  let newAmount = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

  amount.innerHTML = newAmount;
};
// nav-calculation completed
calculation();

let generateOneCart = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => y.id === id) || [];

        let { name, price, img } = search;

        return `<div id="prodcuct-${id}" class="oneCartPage">
      <img  class="cartImage" src=${img} alt="" />
      <div class="cartName">
        <div class="name-x">
        <h3>${name}</h3>
        <div onclick="removeItem(${id})" id="x">X</div>
        </div>
      
      <div class="cart-price-quantity">
        <h3>$ ${price}</h3>
        
        <div class="New-cart-quantity">
          <button onclick="decrement(${id})" class="cart-minus-plus">-</button>
          <div id="${id}" class="new">${item}</div>
          <button onclick="increment(${id})" class="cart-minus-plus">+</button>
        </div>
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

let increment = (id) => {
  let selectedId = id;

  let search = basket.find((x) => selectedId.id === x.id);

  if (search === undefined) {
    basket.push({ id: selectedId.id, item: 1 });
  } else {
    search.item += 1;
  }
  update(id);

  localStorage.setItem("data", JSON.stringify(basket));
  totalBill();
  generateOneCart();
};

let update = (id) => {
  let selectedId = id;
  let search = basket.find((x) => selectedId.id === x.id);
  let numberInsideMinusPlus = document.getElementById(selectedId.id);
  numberInsideMinusPlus.innerHTML = search.item;

  calculation();
};

let decrement = (id) => {
  let selectedId = id;

  let search = basket.find((x) => selectedId.id === x.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else if (search) {
    search.item -= 1;
  }
  update(id);

  if (search.item === 0) {
    basket = basket.filter((x) => x.id !== selectedId.id);
  }

  localStorage.setItem("data", JSON.stringify(basket));
  totalBill();
  generateOneCart();
};

let removeItem = (id) => {
  let selectedId = id;
  basket = basket.filter((x) => x.id !== selectedId.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateOneCart();
};

let totalBill = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => {
          return id === y.id;
        });
        return item * search.price;
      })
      .reduce((x, y) => {
        return x + y;
      }, 0);
    return (label.innerHTML = `<div class="billcart1">
    <h2>total Bill : $ ${amount}</h2>
    <button>Checkout</button>
    <button onclick="clearCart()">clearCart</button>
  </div>`);
    return;
  } else return;
};
totalBill();

let clearCart = () => {
  basket = [];
  localStorage.setItem("data", JSON.stringify(basket));
  generateOneCart();
};
