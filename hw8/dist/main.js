new Vue({el:"#app",components:{products,filtered,cart},data:{catalogUrl:"/getDataProducts.json",imgCart:"../img/product",products:[],filtered:[]},methods:{getJson:t=>fetch(t).then((t=>t.json()))}});