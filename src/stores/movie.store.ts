import { defineStore } from 'pinia';
import type { MovieType, Nullable } from '@shared/types';
import { computed, ref } from 'vue';
import { searchMovie, searchMovies } from '@shared/api/movie';

export const useMovieStore = defineStore('movie', () => {
    const movies = ref<MovieType[]>([]);
    const movie = ref<MovieType | null>(null);
    const totalResults = ref<number>(0);
    const currentPage = ref<number>(1);
    const queryValue = ref<string>('');
    const isLoading = ref<boolean>(false);
    const error = ref<Nullable<string>>(null);

    const totalPages = computed(() => Math.ceil(totalResults.value / 10));

    const fetchMovies = async (query: string, page = 1) => {
        currentPage.value = page;
        isLoading.value = true;
        error.value = null;
        queryValue.value = query;

        try {
            const res = await searchMovies(query, page);

            if (res?.Search) {
                movies.value = res.Search;
                totalResults.value = parseInt(res.totalResults);
            }
        } catch (err: any) {
            error.value = err.message || 'Something went wrong';
            movies.value = [];
            totalResults.value = 0;
            queryValue.value = '';
        } finally {
            isLoading.value = false;
        }
    };

    const fetchMovie = async (id = '') => {
        isLoading.value = true;
        error.value = null;

        try {
            const res = await searchMovie(id);

            if (res?.imdbID) {
                movie.value = res;
            }
        } catch (err: any) {
            error.value = err.message || 'Something went wrong';
            movie.value = null;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        fetchMovie,
        fetchMovies,
        movies,
        movie,
        totalResults,
        currentPage,
        isLoading,
        totalPages,
        error,
        query: queryValue,
    };
});
