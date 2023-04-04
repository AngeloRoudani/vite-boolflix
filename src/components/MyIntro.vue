<template>
    <div v-if="store.message" class="message">
        <h1> Cosa vorresti guardare? </h1>

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
        }
    }

</script>

<style scoped lang="scss">

.message {
    height: calc(100vh - 80px);
    position: relative;
}

h1 {
    color: #fff;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 40%;
}



</style>