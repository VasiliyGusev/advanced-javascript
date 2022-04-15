// (function (){
//     const wrapper = document.querySelector('.header__wrapper');
//     wrapper.addEventListener('click', () => {
//         wrapper.classList.toggle('header__wrapper-activ');
//     });
// }());
//
// (function (){
//     const burger = document.querySelector('.main__menu');
//     burger.addEventListener('click', () => {
//         burger.classList.toggle('main__menu-activ');
//     });
// }());
const API = './server';

const app = new Vue ({
    el: '#app',
    components: {products, filtered, cart},
    data: {
        catalogUrl: '/getDataProducts.json',
        imgCart: '../img/product',
        products: [],
        filtered: []
    },
    methods: {
        getJson (url){
            return fetch(url)
                .then(result => result.json())
        }
    }
})
