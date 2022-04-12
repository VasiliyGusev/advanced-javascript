const product = {
    props: ['product', 'img'],
    template: `<div class="product__item">
                  <div class="product__content">
                      <div class="products__img">
                          <a class="product__link" href="#">
                              <img class="prod__img" :src="img" alt="prod1">
                              <div class="product__text">
                                  <h4 class="product__text-title">{{ product.product_name }}</h4>
                                  <p class="product__text-text">Known for her sculptural takes on traditional
                                            tailoring, Australian arbiter
                                            of cool Kym Ellery teams up with Moda Operandi.</p>
                                  <p class="product__text-price">{{ product.price }} ₽</p>
                              </div>
                          </a>
                          <div class="product__hover">
                              <button class="product__hover-link" @click="$root.$refs.cart.addProduct(product)">
                                   <img src="./img/icon/card-add.svg" alt="card-add">
                                   <p class="product__hover-text">Купить</p>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>`
}

const products = {
    components: {product},
    data() {
        return {
            catalogUrl: '/getDataProducts.json',
            products: [],
            filtered: []
        }
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let item of data){
                    item.imgProducts = `./img/product/${item.id_product}.jpg`;
                    this.products.push(item);
                    this.filtered.push(item);
                }
            });
    },
    methods: {
        filter (el) {
            let regExp = new RegExp(el, 'i');
            this.filtered = this.products.filter(el => regExp.test(el.product_name));
        }
    },
    template: `<div class="products__item">
                    <product v-for="product of filtered"
                         :key="product.id_product"
                         :img="product.imgProducts"
                         :product="product">                        
                    </product>
               </div>`
}
