<template>
    <div class="navbar">
        <h1>Boolflix</h1>
        <div class="search">
            <input type="text" placeholder="inserisci qui" v-model="store.searchMovies">
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

<style lang="scss">
.navbar {
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
h1 {
    color: red;
}
.btn {
    background-color: #136cd8;
    color: #fff;
}
</style>