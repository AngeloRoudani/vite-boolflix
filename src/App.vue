<template>
    <body>
        <header>
            <MyHeader @startSearch="getMovies"/>
        </header>
        
        <main>
            <MyMessage/>
            <section>
                <MyMovies />
            </section>
            <section>
                <TvSeries />
            </section>
            
           
        </main>
    </body>
</template>

<script >
    import axios from 'axios'; 
    import MyHeader from './components/MyHeader.vue';
    import MyMovies from './components/MyMovies.vue';
    import MyMessage from './components/MyMessage.vue';
    import TvSeries from './components/TvSeries.vue';
    import { store } from './store.js';
 
    export default {
        data () {
            return {
                store
            }
        },
        components: {
            MyHeader,
            MyMovies,
            MyMessage,
            TvSeries
        },
        methods: {
            
            getMovies() {
                let moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=0d02e8641763075cf268b150dd5bb88c';
                let tvSeriesUrl = 'https://api.themoviedb.org/3/search/tv?api_key=0d02e8641763075cf268b150dd5bb88c';
                
                if (!store.searchMovies == '') {
                    moviesUrl += `&query=${store.searchMovies}&language=it-IT`;
                    tvSeriesUrl += `&query=${store.searchMovies}&language=it-IT`;
                    store.message = false;
                    store.showTitle = true;
                    store.searchMovies = '';
                }
                

                axios.get(moviesUrl) 
                    .then(response => {
                        this.store.MoviesData = response.data.results;
                        console.log(this.store.MoviesData); 
                    })

                axios.get(tvSeriesUrl) 
                .then(response => {
                    this.store.SeriesData = response.data.results;
                        
                })
                
            },
            
        },
        
    }

</script>

<style lang="scss">

@use './styles/general.scss' as *;



</style>


