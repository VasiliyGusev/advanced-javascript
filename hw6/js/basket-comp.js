Vue.component('basket-comp', {
    template: `
                <div id="bask" class="basket-inner" v-show="$parent.cartVisible">
                    <p v-if="!$parent.basketItems.length">Нет данных</p>
                    <div class="basket-items" v-for="item of $parent.basketItems" :key="item.id_product">
                        <div class="basket-list">
                            <img :src="$parent.imgPath" alt="img">
                            <div class="basket-item">
                                <div class="basket-title">{{ item.product_name }}</div>
                                <div class="basket-quantity">{{ item.quantity }} шт.</div>
                                <div class="basket-price">{{ item.price }} ₽</div>
                            </div>
                        </div>
                        <div class="basket-right">
                            <div class="calculate-price">Сумма: {{ item.quantity*item.price }}</div>
                            <button class="del-btn" @click="$parent.remove(item)">&#10006;</button>
                        </div>
                    </div>
                </div>
              `
})