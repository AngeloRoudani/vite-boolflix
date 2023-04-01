<template>
    <div class="navbar">
        <h1>Boolflix</h1>
        <div class="search">
            <input @keyup.enter="$emit('startSearch')" type="text" placeholder="inserisci qui" v-model="store.searchMovies" class="text_place">
            <button @click="$emit('startSearch')" class="btn">Search</button>
        </div>
    </div>
</template>

<script>

    import { store } from '../store.js';

    export default {
        data () {
            return {
                store
            }
        },
        name: 'MyHeader',

    }

</script>

<style scoped lang="scss">
.navbar {
    height: 80px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    color: red;
    padding-left: 2rem;
}

.search {
    padding-right: 2rem;
}

.text_place {
    width: 150px;
    padding: .4rem;
    margin-right: .5rem;
}
.btn {
    background-color: #136cd8;
    color: #fff;
    padding: .5rem;
    border-radius: 3px;
    border: none;
}
</style>