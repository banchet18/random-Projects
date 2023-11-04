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
    return (shoppingCart.innerHTML = basket
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
            <button  onclick="decrement(${id})" class="minus-plus-btn">-</button>
            <div id=${id}>${item}</div>
            <button onclick="increment(${id})" class="minus-plus-btn">+</button>
          </div>
        </div>`;
      })
      .join(""));
  } else {
    return (label.innerHTML = `<div>
  <h2>Cart is Empty</h2>
  <a href="indexPractice.html">
  <button>back to home</button>
</a>  
</div>`);
  }
};

generateCards();

let increment = (id) => {
  let selectedId = id;
  let search = basket.find((x) => selectedId.id === x.id);

  if (search === undefined) {
    basket.push({ id: selectedId.id, item: 1 });
  } else {
    search.item += 1;
  }

  // updating number in + -
  // update(id);
  generateCards();
  calculation();

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
  // update(id);

  basket = basket.filter((x) => x.item !== 0);

  generateCards();
  calculation();

  localStorage.setItem("data", JSON.stringify(basket));
};
