import { reactive } from 'vue';

export const store = reactive(
    {
        MoviesData: [],
        SeriesData: [],
        searchMovies: '',
        message: true,
        showTitle: false,
        flags: [
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_brazil.png',
                tongue: 'br'
            },
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_germany.png',
                tongue: 'de'
            },
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_japan.png',
                tongue: 'ja'
            },
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_france.png',
                tongue: 'fr'
            },
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_italy.png',
                tongue: 'it'
            },
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_usa.png',
                tongue: 'en'
            },
            {
                src:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/flag_south_korea.png',
                tongue: 'ko'
            }
        ],
    }
);