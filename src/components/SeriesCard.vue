<template>
    <div class="card_series" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <img v-show="imageTv_switch == true" :src= "imageTv" :alt="titleTv" class="poster">
        <div v-show="cardTv_switch == true" class="description">
            <h4>Titolo: {{ titleTv }}</h4>
            <h4>Titolo Originale {{ originalTv }}</h4>
            <div>Voto:
                <span>
                    <i v-for="index in voteTv" :key="index" :class="starSolid"></i>
                </span>
                <span>
                    <i v-for="index in (5 - voteTv)" :key="index" :class="starEmpty"></i>
                </span>
            </div>
            <div v-for="(flag, index) in store.flags" :key="index" class="flag">
                Lingua:
                <img v-if="flag.tongue == languageTv" :src="flag.src" :alt="languageTv"/>
            </div>
            <p>Trama: {{ plotTv }}</p>
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
                starSolid: 'fa-solid fa-star full',
                starEmpty: 'fa-regular fa-star empty',
                imageTv_switch: true,
                cardTv_switch: false
            }
        },
            name: 'SeriesCard',
            props: {
                titleTv: String,
                originalTv: String,
                voteTv: Number,
                languageTv: String,
                imageTv: String,
                plotTv: String
        },
        methods: {
            mouseover: function () {
                this.imageTv_switch = false;
                this.cardTv_switch = true;
            },

            mouseleave: function () {
                this.imageTv_switch = true;
                this.cardTv_switch = false;
            }
        }
        
}
</script>

<style scoped lang="scss">

.flag {
    width: 20px;
    background-color: #2b2a33;
}

.card_series {
    height: 470px;
}

img {
    width: 100%;
}
.description {
    width: 100%;
    height: 100%;
    border: solid 1px #136cd8;
    color: #fff;

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