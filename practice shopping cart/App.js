let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "123",
    name: "Casual Shirt",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: 45,
    img: "./images/img-1.jpg",
  },
  {
    id: "456",
    name: "Office Shirt",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: 100,
    img: "./images/img-2.jpg",
  },
  {
    id: "789",
    name: "T Shirt",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: 25,
    img: "./images/img-3.jpg",
  },
  {
    id: "741",
    name: "Mens Suit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: 300,
    img: "./images/img-4.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];
// console.log(basket);

let FetchingData = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, desc, img, price } = x;

      let search =
        basket.find((x) => {
          return x.id === id;
        }) || [];
      console.log(search);

      return `<div id=product-id-${id} class="items" >
    <img src=${img} alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>

      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="button">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">${
        search === undefined ? 0 : search.item
      }</div>
          <i onclick="increment(${id})" class="bi bi-plus"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

FetchingData();

let increment = (id) => {
  let selectedId = id;
  let search = basket.find((x) => {
    return selectedId === x.id;
  });
  if (search === undefined) {
    basket.push({ id: selectedId, item: 1 });
  } else {
    search.item += 1;
  }
  // console.log(basket);
  update(id);
};

let decrement = (id) => {
  let selectedId = id;
  let search = basket.find((x) => {
    return selectedId === x.id;
  });
  if (search.item === 0) return;

  if (search) {
    search.item -= 1;
  }
  // console.log(basket);
  update(id);
};
let update = (id) => {
  let search = basket.find((x) => {
    return id === x.id;
  });

  let newId = document.getElementById(id);
  newId.innerHTML = search.item;

  calculation();
};

let calculation = () => {
  let mapedReduced = basket
    .map((x) => {
      return x.item;
    })
    .reduce((x, y) => {
      return x + y;
    }, 0);

  let cartAmount = document.getElementById("cartAmount");
  cartAmount.innerHTML = mapedReduced;

  localStorage.setItem("data", JSON.stringify(basket));
};

calculation();
