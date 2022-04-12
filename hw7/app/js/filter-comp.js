const filtered ={
    data() {
        return {
            userSearch: ''
        }
    },

    template: `
                <form class="header__form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <input class="search__input" type="text" placeholder="Искать здесь..." v-model="userSearch">
                    <button class="search__button icon-search" type="submit"></button>
                </form>
              `
}