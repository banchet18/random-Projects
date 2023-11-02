let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "asdas",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "asdasfgh",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "asdasewqr",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "asdasiop",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;

      let search =
        basket.find((x) => {
          return id === x.id;
        }) || [];
      console.log(search);

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

  if (search.item === 0) return;

  if (search) {
    search.item -= 1;
  }
  // console.log(basket);
  update(id);
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
let calculation = () => {
  let cartAmount = document.getElementById("cartAmount");
  let mapReduce = basket
    .map((x) => {
      return x.item;
    })
    .reduce((x, y) => {
      return x + y;
    }, 0);

  cartAmount.innerHTML = mapReduce;

  localStorage.setItem("data", JSON.stringify(basket));
};

calculation();
