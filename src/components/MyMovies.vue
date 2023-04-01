<template>
    <div class="container">
        <h2 v-show="store.showTitle == true">Movies</h2>
        <div class="card_wrapper">
            <div v-for="(element, index) in store.MoviesData" class="movieCard" :key="index">
                <MoviesCard 
                    :title="element.title"
                    :original="element.original_title"
                    :language="element.original_language"
                    :vote="element.vote_average"
                    :imageMovie="`https://image.tmdb.org/t/p/w342${element.poster_path}`"
                    />
            </div>
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
        },
        
    }
</script>

<style lang="scss">
    .container {
        width: 90%;
        margin: auto;
    }

    .card_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .movieCard {
        width: calc(100% / 5);
        margin-top: 2rem;
    }
</style>