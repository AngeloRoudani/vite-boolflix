<template>
    <div class="container">
        <div v-for="(element, index) in store.MoviesData" class="movieCard" :key="index">
            <MoviesCard 
                :title="element.title"
                :original="element.original_title"
                :language="original_language"
                :vote="element.vote_average"/>
            </div>
    </div>
</template>
    
<script >
    import MoviesCard from './MoviesCard.vue';
    import { store } from '../store.js';
    export default {
        data() {
            return {
                store
            }
        },
        name: 'MyMovies',
        components: {
            MoviesCard
        }
    }
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        width: 90%;
        margin: auto;
        flex-wrap: wrap;
    }
</style>