<template>
    <div class="card_movies">
        <h4>{{ titleTv }}</h4>
        <h4>{{ originalTv }}</h4>
        <h4>{{ voteTv }}</h4>
        <h4>{{ languageTv }}</h4>
        <div v-for="(flag, index) in store.flags" :key="index" class="flag">
            <img v-if="flag.tongue == languageTv" :src="flag.src" alt="bandiera"/>
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
            name: 'SeriesCard',
            props: {
                titleTv: String,
                originalTv: String,
                voteTv: Number,
                languageTv: String
        }
        
}
</script>

<style scoped lang="scss">

.flag {
    width: 30px;
    img {
        width: 100%;
    }
}


</style>