<template>
    <div v-if="store.message" class="message">
        <h3> Cosa vorresti guardare? </h3>

    </div>
</template>

<script >
    import { store } from '../store.js';

    export default {
        name: 'MoviesCard',
        data () {
            store
        },
        props: {
        
        }
    }

</script>

<style scoped lang="scss">





</style>