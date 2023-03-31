<template>
    <body>
        <header>
            <MyHeader @startSearch="getMovies"/>
        </header>
        
        <main>
            <MyMovies />
            <MyMessage/>
        </main>
    </body>
</template>

<script >
    import axios from 'axios'; 
    import MyHeader from './components/MyHeader.vue';
    import MyMovies from './components/MyMovies.vue';
    import MyMessage from './components/MyMessage.vue'
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
            MyMessage
        },
        methods: {
            
            getMovies() {
                let moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=0d02e8641763075cf268b150dd5bb88c';

                if (store.searchMovies == '') {
                    this.store.message = true
                } else {
                    moviesUrl += `&query=${this.store.searchMovies}&language=it-IT`
                }

                axios.get(moviesUrl) 
                    .then(response => {
                        this.store.MoviesData = response.results;
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


