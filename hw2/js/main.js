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
        for (let product of this.goods) {
            sum += product.price;
        }
        console.log(sum);
    }
}

/**
 * @Basket class - наполнение корзины
 */
class Basket {

    /**
     * @getElement - определение добовляемого товара
     */
    getElement() {

    }

    /**
     * @addGoods - метод добавления товаров в корзину
     */
    addGoods() {

    }

    /**
     * @removeGoods - метод удаления товаров из корзины
     */
    removeGoods() {

    }

    /**
     * @changeQuantityGoods - изменение количества товаров
     */
    changeQuantityGoods() {

    }

    /**
     * @renderBasket - рендер товаров в блоке корзины
     */
    renderBasket() {

    }
}

/**
 * @elementBasket - работа с элементом корзины
 */
class elementBasket {

    /**
     * @render - вёрстка одного товара
     */
    render() {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.fullSum();
