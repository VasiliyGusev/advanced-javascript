const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/**
 * @GoodsItem class - создадём класс для товара
 */
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    /**
     * @returns {string} -  возвращаем html-разметку
     */
    render() {
        return `<div class="goods-item">
                <div class="goods-inner">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <img src="img/good.ico" alt="img">
                </div>
                <button class="buy-btn">Купить</button>
           </div>`;
    }
}

/**
 * @GoodsList class - работа со списком товаров
 */
class GoodsList {
    constructor() {
        this.goods = [];

    }

    /**
     *@fetchGoods - получаем список товаров
     */
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    /**
     * @render - вывод списка товаров
     */
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    /**
     * @fullSum - метод, определяющий суммарную стоимость всех товаров
     */
    fullSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        });
        console.log(sum);
    }
}

/**
 * @Basket class - наполнение корзины
 */
class Basket {
    constructor(container = '.basket-inner') {
        this.container = container;
        this.goods = [];
        this.showBasket();
        this.getElement()
            .then(data => {
                this.goods = data.contents;
                this.renderBasket();
            });
    }

    /**
     * @getElement - определение добовляемого товара
     */
    getElement() {
        return fetch(`${API_URL}/getBasket.json`)
            .then(param => param.json())
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * @renderBasket - рендер товаров в блоке корзины
     */
    renderBasket() {
        const inner = document.querySelector(this.container);
        for (let key of this.goods) {
            const prod = new ElementBasket();
            inner.insertAdjacentHTML('beforeend', prod.render(key))
        }
    }

    /**
     * @showBasket - рендер товаров в блоке корзины
     */
    showBasket() {
        document.querySelector('.cart-button').addEventListener('click', () => {
            document.querySelector('.basket-inner').classList.toggle('hidden');
        });
    }
}

/**
 * @elementBasket - работа с элементом корзины
 */
class ElementBasket {

    /**
     * @render - вёрстка одного товара
     */
    render(product) {
        return ` <div class = 'basket-item' data-id = '${product.id_product}'>
                    <div class = 'product-img'>
                        <img src = 'img/good.ico' alt = 'img'>
                        <div class = 'product-param'>
                            <p class = 'product-title'>${product.product_name}</p>
                            <p class = 'product-quantity'> Колличество: ${product.quantity} шт.</p>
                            <p class = 'product-price'>Цена: ${product.price} $</p>
                        </div>
                    </div>
                  </div>`
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.fullSum();
new Basket();