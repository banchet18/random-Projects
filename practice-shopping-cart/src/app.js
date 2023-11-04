let mainsection = document.getElementById("main-section");

let basket = [];

let generateLandingCart = () => {
  mainsection.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, desc, img } = x;

    let search = basket.find((x) => x) || [];
    let { item } = search;
    return `<div id="prodcuct-${id}" class="one-cart">
  <img src=${img} alt="" />
  <div class="name-desc">
    <h3>${name}</h3>
    <p>${desc}</p>
  </div>
  <div class="price-quantity">
    <h3>$ ${price}</h3>
    <div class="quantity">
      <button onclick="decrement(${id})" class="minus-plus">-</button>
      <div id="${id}" class="new">${item === undefined ? 0 : item}</div>
      <button onclick="increment(${id})" class="minus-plus">+</button>
    </div>
  </div>
</div>`;
  });
};
generateLandingCart();

// started with increment --------------------------------------------------------
let increment = (id) => {
  let selectedId = id;

  let search = basket.find((x) => selectedId.id === x.id);

  if (search === undefined) {
    basket.push({ id: selectedId.id, item: 1 });
  } else {
    search.item += 1;
  }
  update(id);
};
// increment completed ---------------------------------------------------------------

// started with update ----------------------------------------------------------------
let update = (id) => {
  let selectedId = id;
  let search = basket.find((x) => selectedId.id === x.id);
  let numberInsideMinusPlus = document.getElementById(selectedId.id);
  numberInsideMinusPlus.innerHTML = search.item;
};
// update completed ------------------------------------------------------------------

// starting with decrement ------------------------------------------------------------
let decrement = (id) => {
  let selectedId = id;
};
