<template>
    <div v-if="store.message" class="message">
        <h3> Cosa vorresti guardare? </h3>

    </div>
</template>

<script >
    import { store } from '../store.js';

    export default {
        name: 'MyIntro',
        data () {
            return {
                store
            }
        },
        props: {
        
        }
    }

</script>

<style scoped lang="scss">

h3 {
    color: #fff;
    text-align: center;
}



</style>