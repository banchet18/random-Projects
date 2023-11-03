let label = document.getElementById("label");

let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

calculation = () => {
  let cartAmount = document.getElementById("cartAmount");
  let mapReduce = basket
    .map((x) => {
      return x.item;
    })
    .reduce((x, y) => {
      return x + y;
    }, 0);

  cartAmount.innerHTML = mapReduce;
};

calculation();

let generateCard = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        return `
      <div className="cart-item">hello</div>
      `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back To Home</button>
    </a>  
    `;
  }
};

generateCard();
