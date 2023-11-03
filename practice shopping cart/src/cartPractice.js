let label = document.getElementById("label");

let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartAmount = document.getElementById("cartAmount");

  let newCartAmount = basket
    .map((x) => {
      return x.item;
    })
    .reduce((x, y) => {
      return x + y;
    }, 0);

  cartAmount.innerHTML = newCartAmount;
};

calculation();

let generateShop = () => {
  if (basket.length !== 0) {
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
<a href="indexPractice.html">
  <button class="HomeBtn">back to home</button>
</a>
    `;
  }
};

generateShop();
