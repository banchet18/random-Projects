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

let generateCard = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {
      return `
      <div>
        hello
      </div>;`;
    }));
  } else {
    shoppingCart.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="indexPractice.html">
      <button class="HomeBtn">Back To Home</button>
    </a>`;
  }
};

generateCard();
