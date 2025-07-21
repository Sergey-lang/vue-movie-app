import { defineStore } from 'pinia';
import { MovieType, Nullabel } from '@shared/types';
import { computed, ref } from 'vue';
import { searchMovies } from '@shared/api/movie';

export const useMovieStore = defineStore('movie', () => {
    const movies = ref<MovieType[]>([]);
    const totalResults = ref<number>(0);
    const currentPage = ref<number>(1);
    const isLoading = ref<Boolean>(false);
    const error = ref<Nullabel<string>>(null);

    const totalPages = computed(() => Math.ceil(totalResults.value / 10));

    const fetchMovies = async (query: string, page = 1) => {
        currentPage.value = page;
        isLoading.value = true;
        error.value = null;

        try {
            const res = await searchMovies(query, page);
            movies.value = res.Search;
            totalResults.value = parseInt(res.totalResults);
        } catch (err: any) {
            error.value = err.message || 'Something went wrong';
            movies.value = [];
            totalResults.value = 0;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        fetchMovies,
        movies,
        totalResults,
        currentPage,
        isLoading,
        totalPages,
        error
    }
})
