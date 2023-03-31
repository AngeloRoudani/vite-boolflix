import { reactive } from 'vue';

export const store = reactive(
    {
        MoviesData: [],
        SeriesData: [],
        searchMovies: '',
        message: false,
    }
);