import { ref, computed } from 'vue';
import { searchMovies } from '@/shared/api/movie';
import { MovieType, Nullabel } from '@/shared/types';

export const useMovies = () => {
    const movies = ref<MovieType[]>([]);
    const totalResults = ref<number>(0);
    const currentPage = ref<number>(1);
    const searchQuery = ref<string>('');
    const isLoading = ref<Boolean>(false);
    const error = ref<Nullabel<string>>(null);

    const fetchMovies = async (query: string, page = 1) => {
        searchQuery.value = query;
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

    const totalPages = computed(() => Math.ceil(totalResults.value / 10));

    return {
        movies,
        totalResults,
        currentPage,
        searchQuery,
        isLoading,
        error,
        totalPages,
        fetchMovies,
    };
}
