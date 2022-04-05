Vue.component('search-comp', {
    template: `
                <form action="#" class="search" @submit.prevent="$parent.filterGoods">
                    <input id="input" type="text" class="search-line" @change="$parent.inputOut" v-model="$parent.searchLine">
                    <button type="submit" class="search-btn"></button>
                </form>
              `
})