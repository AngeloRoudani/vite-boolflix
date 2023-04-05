<template>
    <body>
        <header>
            <MyHeader @startSearch="getMovies"/>
        </header>
        
        <main>
            <MyIntro />
                <MyMovies />
        </main>
    </body>
</template>

<script >
    import axios from 'axios'; 
    import MyHeader from './components/MyHeader.vue';
    import MyMovies from './components/MyMovies.vue';
    import MyIntro from './components/MyIntro.vue';
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
            MyIntro,
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

            /*implementazione generi*/
            getGenre () {

                axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0d02e8641763075cf268b150dd5bb88c') 
                    .then(response => {
                        this.store.movieGenre = response.data.genres;
                        console.log(this.store.movieGenre);
                       
                        
                    })
                axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=0d02e8641763075cf268b150dd5bb88c') 
                    .then(response => {
                        this.store.seriesGenre = response.data.genres;
                        console.log(this.store.seriesGenre)
                        this.getGenreUnion();
                        
                    })
                
            },
            /*funzione di unione generi*/
            getGenreUnion () {
                for (let i = 0; i < this.store.movieGenre.length; i++) {

                    this.store.genreList.push(this.store.movieGenre[i]);

                }
                for (let i = 0; i < this.store.seriesGenre.length; i++) {
                    this.store.genreList.push(this.store.seriesGenre[i]);

                    
                }
                console.log(this.store.genreList);

                for ( let i = 0; i < this.store.genreList.length; i++) {
                    let genreId = this.store.genreList[i].id
                    if (this.store.seriesGenre.includes(genreId) && this.store.movieGenre.includes(genreId)) {
                        this.store.genreList.splice(this.store.genreList[i], 1)
                    }
                }
            }

        
            
        },
        created () {
            this.getGenre();
        }
        
    }

</script>

<style lang="scss">

@use './styles/general.scss';



</style>


