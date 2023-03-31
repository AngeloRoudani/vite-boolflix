<template>
    <body>
        <MyHeader @startSearch="getMovies"/>
        <main>
            <MyMovies />
        </main>
    </body>
</template>

<script >
    import axios from 'axios'; 
    import MyHeader from './components/MyHeader.vue';
    import MyMovies from './components/MyMovies.vue';
    import { store } from './store.js';
 
    export default {
        data () {
            return {
            store
            }
        },
        components: {
            MyHeader,
            MyMovies
        },
        methods: {
            
            getMovies () {
                let moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=0d02e8641763075cf268b150dd5bb88c';
                if (store.searchMovies > 0) {
                    moviesUrl += `&query=${store.searchMovies}&language=it-IT`;
                }
                axios.get(moviesUrl) 
                    .then(response => {
                        this.store.MoviesData = response.data.results;
                        console.log(this.store.MoviesData); 
                    })
                
            }
        },
        created () {
                this.getMovies();
        }
    }

</script>

<style lang="scss">

@use './styles/general.scss' as *;



</style>


