let shop = document.getElementById("shop");

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { img, name, desc, price, id } = x;

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
