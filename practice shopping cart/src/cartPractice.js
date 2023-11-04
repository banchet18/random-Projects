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

let generateCards = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;

        let search =
          shopItemsData.find((y) => {
            return y.id === id;
          }) || [];

        let { img, name, price } = search;
        return `
        <div class="oneCart">
            <img class="image" src=${img} alt="" />
          <div class="name-price">
            <h3>${name}</h3>
            <p>${price}</p>
            <p>#</p>
          </div>
      
          <div class="minus-plus">
            <button class="minus-plus-btn">-</button>
            <div>${item}</div>
            <button onclick="increment(${x.id})" class="minus-plus-btn">+</button>
          </div>
        </div>;`;
      })
      .join("");
  } else {
    label.innerHTML = `<div>
  <h2>Cart is Empty</h2>
  <a href="indexPractice.html">
  <button>back to home</button>
</a>  
</div>`;
  }
};

generateCards();

let increment = (id) => {
  console.log("asdsad");
};
