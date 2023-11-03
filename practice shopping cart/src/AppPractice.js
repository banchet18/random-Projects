let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, img, name, desc, price } = x;

      let search = basket.find((x) => x.id === id) || [];

      return `<div id=product-id-${id}  class="item" >
    <img width="220" src=${img} alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateShop();

// step 1 -------increment

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

  localStorage.setItem("data", JSON.stringify(basket));
};

// step 2 -------decrement

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

  localStorage.setItem("data", JSON.stringify(basket));
};

// step 3 -------update
let update = (id) => {
  let selectedId = id;

  let search = basket.find((x) => selectedId.id === x.id);

  let middleNumber = document.getElementById(search.id);

  middleNumber.innerHTML = search.item;

  calculation();
};

// step 4 -------calculation

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
