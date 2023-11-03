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
        let { id, item } = x;

        let search = shopItemsData.find((y) => id === y.id) || [];

        let { img, price, name } = search;

        return `
      <div class="cart-item">
        <img width = "100" src=${search.img} alt="" />
        <div class="details">
          <div class="title-price-x">
            <h4 class = "title-price">
              <p>${search.name}</p>
              <p class="cart-item-price">$ ${search.price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>

          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>

          <h3>$ ${item * search.price}</h3>
        </div>
      </div>
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

let increment = (id) => {
  let selectedId = id;
  // console.log(basket);

  // ! finding if selected id is equal to existing basket object id
  let search = basket.find((x) => {
    return selectedId.id === x.id;
  });
  // console.log(search);
  // console.log(basket);

  // ! checking after getting the search with find method is undefined or have something inside
  // ! if nothing found then add the new object
  // ! if found something then just add object item
  if (search === undefined) {
    basket.push({ id: selectedId.id, item: 1 });
  } else {
    search.item += 1;
  }
  // console.log(basket);
  update(id);

  generateCard();
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedId = id;
  // console.log(basket);
  // ! finding if selected id is equal to existing basket object id
  let search = basket.find((x) => {
    return selectedId.id === x.id;
  });
  // console.log(search);
  // console.log(basket);
  // ! checking after getting the search with find method is undefined or have something inside
  // ! if found something then just remove object item

  if (search === undefined) return;
  else if (search.item === 0) return;
  else if (search) {
    search.item -= 1;
  }

  update(id);
  basket = basket.filter((x) => x.item !== 0);

  generateCard();
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let selectedId = id;
  let search = basket.find((x) => {
    return selectedId.id === x.id;
  });

  let newId = document.getElementById(selectedId.id);
  newId.innerHTML = search.item;
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedId = id;
  basket = basket.filter((x) => x.id !== selectedId.id);

  generateCard();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCard();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => id === y.id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <h2>Totall Bill : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()"  class="removeAll">Clear Cart</button>
    `;
  } else return;
};

totalAmount();
