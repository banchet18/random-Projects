let label = document.getElementById("label");

let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCart = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => y.id === id) || [];

        let { name, img, price } = search;

        return `
      <div class="cart-item">
      <img width = "100" src=${img} alt="" />
      <div class="details">
        <div class="title-price-x">
         <p>${name}</p> 
          <h4 class = "title-price>
          
            <p class="cart-item-price">$ ${price}</p>
          </h4>
          <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
        </div>

        <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>

        <h3>${item * price}</h3>
      </div>
    </div>`;
      })
      .join(""));
  } else {
    return (label.innerHTML = `
    <div class="empty-div">
      <h2>Cart is Empty</h2>
      <a href="indexPractice.html">
        <button class="back-btn">Back to Home
        </button>
      </a>
      
    </div>`);
  }
};

generateCart();

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

let increment = (id) => {
  let selectedId = id;
  let search = basket.find((x) => selectedId.id === x.id);

  if (search === undefined) {
    basket.push({ id: selectedId.id, item: 1 });
  } else {
    search.item += 1;
  }

  // updating number in + -
  update(id);

  generateCart();

  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedId = id;

  let search = basket.find((x) => selectedId.id === x.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else if (search) {
    search.item -= 1;
  }
  // updating number in + -
  update(id);

  basket = basket.filter((x) => x.item !== 0);

  generateCart();

  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let selectedId = id;

  let search = basket.find((x) => selectedId.id === x.id);

  let middleNumber = document.getElementById(search.id);

  middleNumber.innerHTML = search.item;

  calculation();
  totalBill();
};
let clearItem = () => {
  basket = [];
  generateCart();

  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};
let removeItem = (id) => {
  let selectedId = id;

  basket = basket.filter((x) => {
    return x.id !== selectedId.id;
  });

  generateCart();
  totalBill();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let totalBill = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => {
        return x + y;
      }, 0);

    label.innerHTML = `
    <div class="totalBill">
  <h2>total Bill :$ ${amount}</h2>
  <div>
  <button>checkout</button>
  <button onclick="clearItem()">clearItem</button>
</div>
  
</div>
    `;
  } else return;
};

totalBill();
