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
let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `<div id=product-id-${id}  class="item" >
  <img width="220" src=${img} alt="" />
  <div class="details">
    <h3>${name}</h3>
    <p>${desc}</p>
    <div class="price-quantity">
      <h2>$ ${price}</h2>
      <div class="buttons">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">0</div>
        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
      </div>
    </div>
  </div>
</div>`;
    })
    .join(""));
};

generateShop();

// ! setting id (most important)

let increment = (id) => {
  let selectedId = id;

  let search = basket.find((x) => {
    return x.id === selectedId.id;
  });

  if (search === undefined) {
    basket.push({ id: selectedId.id, item: 1 });
  } else {
    search.item += 1;
  }
  console.log(basket);
};

// ! setting id (most important)
let decrement = (id) => {
  let selectedItem = id;
  console.log(selectedItem);
};
let update = () => {};
