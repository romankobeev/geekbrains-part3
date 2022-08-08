console.log('Hello!');
const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];
const renderGoodsItem = (title, price) => {
  return `<div class="row p-2 bg-white border rounded mb-3">
  <div class="col-md-3 mt-1">
  <img
    class="img-fluid img-responsive rounded product-image"
    src="https://i.imgur.com/QpjAiHq.jpg"
  />
</div>
<div class="col-md-6 mt-1">
  <h5>${title}</h5>
  <div class="d-flex flex-row"></div>
  <div class="mt-1 mb-1 spec-1">
    <span>100% cotton</span><span class="dot"></span
    ><span>Light weight</span><span class="dot"></span
    ><span>Best finish<br /></span>
  </div>
  <div class="mt-1 mb-1 spec-1">
    <span>Unique design</span><span class="dot"></span
    ><span>For men</span><span class="dot"></span
    ><span>Casual<br /></span>
  </div>
  <p class="text-justify text-truncate para mb-0">
    There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by
    injected humour, or randomised words which don't look even
    slightly believable.<br /><br />
  </p>
</div>
<div
  class="
    align-items-center align-content-center
    col-md-3
    border-left
    mt-1
  "
>
  <div class="d-flex flex-row align-items-center">
    <h4 class="mr-1">${price}</h4>
  </div>
  <h6 class="text-success">бесплатная доставка</h6>
  <div class="d-flex flex-column mt-4">
    <button class="btn btn-primary btn-sm" type="button">
      Подробнее</button
    ><button
      class="btn btn-outline-primary btn-sm mt-2"
      type="button"
    >
      В коризну
    </button>
  </div>
</div>
</div>`;
};
const renderGoodsList = (list) => {
  let goodsList = list
    .map((item) => renderGoodsItem(item.title, item.price))
    .join('');
  document.querySelector('.col-md-10').innerHTML = goodsList;
};
renderGoodsList(goods);
