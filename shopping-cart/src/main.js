let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;

      let search =
        basket.find((x) => {
          return id === x.id;
        }) || [];

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
  // console.log(basket);
  update(id);
  basket = basket.filter((x) => x.item !== 0);

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
};

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
