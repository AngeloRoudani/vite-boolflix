<template>
    <div class="card_series" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <!--Immagine scheda-->
        <img v-show="imageTv_switch == true" :src= "imageTv" :alt="titleTv" class="poster">
        <!--Descrizione scheda-->
        <div v-show="cardTv_switch == true" class="description">
            <div v-if="!(originalTv == titleTv)">
                <h4>Titolo: {{ titleTv }}</h4>
                <h4 class="m-top">Titolo Originale: {{ originalTv }}</h4>
            </div>
            <h4 v-else>Titolo Originale: {{ originalTv }}</h4>
            <div class="m-top">
                <h4>Genere:</h4>
                <span>{{ getGenresTv ()}}</span>
            </div>
            <div class="m-top">Voto:
                <span>
                    <i v-for="index in voteTv" :key="index" :class="starSolid"></i>
                </span>
                <span>
                    <i v-for="index in (5 - voteTv)" :key="index" :class="starEmpty"></i>
                </span>
            </div>
            <h4>Lingua: {{ languageTv }}</h4>
            <div v-for="(element, index) in store.flags" :key="index" class="flag m-top"> 
                <img  v-if="(element.tongue == languageTv)" :src="element.src" alt="flag"/>
                <div v-else class="d-none"></div>
            </div>
            
            <p class="m-top">Trama: {{ plotTv }}</p>
        </div>
    </div>
</template>

<script >
    import { store } from '../store.js';
    
    export default {
        data() {
            return {
                store,
                starSolid: 'fa-solid fa-star full',
                starEmpty: 'fa-regular fa-star empty',
                imageTv_switch: true,
                cardTv_switch: false,
            }
        },
            name: 'SeriesCard',
            props: {
                titleTv: String,
                originalTv: String,
                voteTv: Number,
                languageTv: String,
                imageTv: String,
                plotTv: String,
                genreTv: Array
        },
        methods: {
            mouseover: function () {
                this.imageTv_switch = false;
                this.cardTv_switch = true;
            },

            mouseleave: function () {
                this.imageTv_switch = true;
                this.cardTv_switch = false;
            },
            getGenresTv () {
                let genreString = '';
                for (let n = 0; n < this.genreTv.length; n++) {

                    for ( let i = 0; i < this.store.genreList.length; i++) {
                    
                        if (this.genreTv[n] == this.store.genreList[i].id) {
                            genreString += "\u00A0" + this.store.genreList[i].name + "-";
                        }
                    }
                }
                return genreString;
            }
        }
        
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

.d-block {
    display: block;
}

.card_series {
    height: 518px;
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