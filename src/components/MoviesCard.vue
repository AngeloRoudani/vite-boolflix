<template>
    <div class="card_movies">
        <img :src="imageMovie" :alt="title" class="poster">
        <h4>{{ title }}</h4>
        <h4>{{ original }}</h4>
        <h4>{{ vote }}</h4>
        <div v-for="(flag, index) in store.flags" :key="index" class="flag">
            <img v-if="flag.tongue == language" :src="flag.src" :alt="language">
        </div>
      
    </div>
</template>

<script >
    import { store } from '../store.js';
    
    export default {
        data() {
            return {
                store,
                flagShow: false,
                result: '',
            }
        },
            name: 'MoviesCard',
            props: {
                title: String,
                original: String,
                vote: Number,
                language: String,
                imageMovie: String
        }
        
}

</script>

<style scoped lang="scss">

.flag {
    width: 30px;
}

.flag img {
    width: 100%;
}

.poster {
    width: 100%
}


</style>