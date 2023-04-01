<template>
    <div class="container">
        <h2 v-show="store.showTitle == true">TvSeries</h2>
        <div class="card_wrapper">
            <div v-for="(element, index) in store.SeriesData" class="movieCard" :key="index">
                <SeriesCard 
                    :titleTv="element.name"
                    :originalTv="element.original_name"
                    :languageTv="element.original_language"
                    :voteTv="element.vote_average"/>
            </div>
        </div>
    </div>
</template>
    
<script>
    import SeriesCard from './SeriesCard.vue';
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store
            }
        },
        name: 'TvSeries',
        components: {
            SeriesCard
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