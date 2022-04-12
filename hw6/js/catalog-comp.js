Vue.component('catalog-comp', {
    template: `
                <div class="main-grid">
                    <div class="goods-list" v-for="goods of $parent.filteredGoods" :key="goods.id_product">
                        <img :src="$parent.imgPath" alt="img">
                        <div class="desc">
                            <h3>{{ goods.product_name }}</h3>
                            <p>{{ goods.price }} ₽</p>
                            <button type="buy-btn" @click="$parent.addProduct(goods)">Купить</button>
                        </div>
                    </div>
                </div>
              `
})