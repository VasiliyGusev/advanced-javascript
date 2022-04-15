const cartItem = {
    props: ['cart_item', 'img'],
    template: `
                <div class="cart-item">
                    <div class="product-basket">
                        <img class="product-img" :src="img" alt="some img">
                        <div class="product-desc">
                            <p class="product-title">{{ cart_item.product_name }}</p>
                            <p class="product-quantity">Колличество: {{ cart_item.quantity }} шт.</p>
                            <p class="product-single-page">{{ cart_item.price }} ₽</p>
                        </div>
                    </div>
                    <div class="right-blok">
                        <div class="calculate-price">Сумма: {{ cart_item.quantity*cart_item.price }}</div>
                        <button class="del-btn" @click="$parent.remove(cart_item)">&#10006;</button>
                    </div>
                </div>
               `
}

const cart ={
    components: {'cart-item': cartItem},
    data() {
        return {
            cartVisible: false,
            imgCart: './img/goods/comp.ico',
            cartItems: []
        }
    },
    methods: {
        addProduct (product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign(product,{quantity: 1});
                            this.cartItems.push(prod)
                        }
                    } else {
                        console.log('Some error')
                    }
            })
        },
        remove(item) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result ===1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        }

    },
    template: `<div>
                    <button type="button" class="menu__bascet" @click="cartVisible = !cartVisible"></button>
                    <div class="showCard" v-show="cartVisible">
                    <p v-if="!this.cartItems.length">Нет данных</p>
                        <cart-item v-for="product of cartItems"
                        :key="product.id_product"
                        :img="imgCart"
                        :cart_item="product"></cart-item>
                    </div>
                </div>
              `
}