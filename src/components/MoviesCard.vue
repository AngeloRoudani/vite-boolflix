<template>
    <div class="card_movies" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <img v-show="image_switch == true" :src="imageMovie" :alt="title" class="poster">
        <div v-show="card_switch == true" class="description">
            <div v-if="!(original == title)">
                <h4>Titolo: {{ title }}</h4>
                <h4 class="m-top">Titolo Originale: {{ original }}</h4>
            </div>
            <h4 v-else>Titolo Originale: {{ original }}</h4>     
            <div class="m-top">Voto:
                <span>
                    <i v-for="index in vote" :key="index" :class="starSolid"></i>
                </span>
                <span>
                    <i v-for="index in (5 - vote)" :key="index" :class="starEmpty"></i>
                </span>
            </div>
            <h4 >Lingua: {{ language }}</h4>
            <div v-for="(flag, index) in store.flags" :key="index" class="flag m-top"> 
                <img v-if="(flag.tongue == language)" :src="flag.src" alt="flag"/>
                <div v-else class="d-none"></div>
            </div>
            
            <p class="m-top">Trama: {{ plot }}</p>
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
                starSolid: 'fa-solid fa-star full',
                starEmpty: 'fa-regular fa-star empty',
                image_switch: true,
                card_switch: false,
                showStopMovie: 'd-none'
            }
        },
            name: 'MoviesCard',
            props: {
                title: String,
                original: String,
                vote: Number,
                language: String,
                imageMovie: String,
                plot: String
        },
        methods: {
            mouseover: function () {
                this.image_switch = false;
                this.card_switch = true;
            },

            mouseleave: function () {
                this.image_switch = true;
                this.card_switch = false;
            },
           
        },

        
}

</script>

<style scoped lang="scss">

.flag {
    background-color: #2b2a33;
    display: inline-block;
    text-align: left;
}
.d-none {
    display: none;
    height: 0px;
}
.card_movies {
    height: 470px;
}
.flag img {
    width: 20px;
    height: 25px;
    display: inline-block;
}

.description {
    width: 100%;
    height: 100%;
    border: solid 1px #136cd8;
    color: #fff;
    overflow-y: scroll;
    padding: 1rem;
}
.m-top {
    margin-top: .5rem;
}
.poster {
    width: 100%
}
.full {
    color: rgb(243, 207, 2);
}

.empty {
    border-color: rgb(243, 207, 2);
}


</style>