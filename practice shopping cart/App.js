const shop = document.querySelector(".shop");

const shopItemsData = [
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

const FetchingData = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      const { id, name, desc, img, price } = x;

      return `<div class="items">
    <img src=${img} alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>

      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="quantity">
          <i class="bi bi-dash-lg"></i>
          <div>0</div>
          <i class="bi bi-plus"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

FetchingData();
