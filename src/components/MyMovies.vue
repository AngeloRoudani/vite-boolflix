<template>
    <div class="container">
        <h2 v-show="store.showTitle == true" class="format">Movies</h2>
        <div class="card_wrapper">
            <div v-for="(element, index) in store.MoviesData" class="movieCard" :key="index">
                <MoviesCard 
                    :title="element.title"
                    :original="element.original_title"
                    :language="element.original_language"
                    :vote="Math.ceil(element.vote_average / 2)"
                    :imageMovie="`https://image.tmdb.org/t/p/w342${element.poster_path}`"
                    :plot="element.overview"
                    />
            </div>
        </div>
    </div>
    <div class="container">
        <h2 v-show="store.showTitle == true" class="format">TvSeries</h2>
        <div class="card_wrapper">
            <div v-for="(element, index) in store.SeriesData" class="movieCard" :key="index">
                <SeriesCard 
                    :titleTv="element.name"
                    :originalTv="element.original_name"
                    :languageTv="element.original_language"
                    :voteTv="Math.ceil(element.vote_average / 2)"
                    :imageTv="`https://image.tmdb.org/t/p/w342${element.poster_path}`"
                    :plotTv="element.overview"
                    />
            </div>
        </div>
    </div>
</template>
    
<script >
    import MoviesCard from './MoviesCard.vue';
    import SeriesCard from './SeriesCard.vue';
    import { store } from '../store.js';
    export default {
        data() {
            return {
                store
            }
        },
        name: 'MyMovies',
        components: {
            MoviesCard,
            SeriesCard
        },
        
    }
</script>

<style lang="scss">
    .container {
        width: 90%;
        margin: auto;
        padding-top: 2rem;
    }

    .format {
        color: #fff;
        margin-top: 2rem;
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