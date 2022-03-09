const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];
const renderGoodsItem = (item) => {
    return `<div class="goods-item">
                <div class="goods-inner">
                    <h3>${item.title}</h3>
                    <p>${item.price} $</p>
                    <img src="img/good.ico" alt="img">
                </div>
                <button class="buy-btn">Купить</button>
           </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);