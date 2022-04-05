const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        basketItems: [],
        searchLine: '',
        catalogGood: '/catalogData.json',
        catalogCart: '/getBasket.json',
        imgPath: 'img/good.ico',
        cartVisible: false,
        errorData: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.errorData = true;
                })
        },
        filterGoods(){
            let regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(el => regexp.test(el.product_name));
        },
        inputOut() {
            document.getElementById('input').addEventListener("focusout", this.filterGoods);
        },
        addProduct(item) {
            this.getJson(`${API_URL}/addToBasket.json`)
                .then(data => {
                    if (data.result ===1) {
                        let product = this.basketItems.find(el => el.id_product === item.id_product);
                        if (product) {
                            product.quantity++;
                        } else {
                            const prod = Object.assign({quantity: 1}, item);
                            this.basketItems.push(prod);
                        }
                    }
                })
        },
        remove(item) {
            this.getJson(`${API_URL}/addToBasket.json`)
                .then(data => {
                    if (data.result ===1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.basketItems.splice(this.basketItems.indexOf(item), 1);
                        }
                    }
                })
        },
        toggleDropdown(){
            this.cartVisible = !this.cartVisible
        }
    },

    mounted() {
        this.getJson(`${API_URL + this.catalogCart}`)
            .then(el => {
                for (let key of el.contents) {
                    this.basketItems.push(key);
                }
            });
        this.getJson(`${API_URL + this.catalogGood}`)
            .then(el => {
                for (let key of el) {
                    this.goods.push(key);
                    this.filteredGoods.push(key);
                }
            });
        this.getJson(`getProducts.json`)
            .then(el => {
                for (let key of el) {
                    this.goods.push(key);
                    this.filteredGoods.push(key);
                }
            });
    }
});