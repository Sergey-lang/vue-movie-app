<script setup lang="ts">
import type { MovieType } from '@shared/types';
import MovieCard from '@components/MovieCard.vue';
import MovieSkeleton from '@components/Skeletons/MovieSkeleton/MovieSkeleton.vue';

defineProps<{
    movies: MovieType[];
    isLoading: boolean;
}>();
</script>

<template>
    <div class="movie-grid">
        <MovieSkeleton v-if="isLoading" v-for="i in 8" :key="i" />
        <MovieCard
            v-if="movies.length > 0 && !isLoading"
            v-for="movie in movies"
            :key="movie.imdbID"
            v-bind="movie"
        />
    </div>
</template>

<style scoped>
.movie-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    padding-top: 3.125rem;
    padding-bottom: 5.25rem;
    width: 100%;
    align-items: start;
}

.movie-grid :deep(.movie-card) {
    grid-column: span 3;
    width: 100%;
}

@media (max-width: 1024px) {
    .movie-grid :deep(.movie-card) {
        grid-column: span 6;
    }
}

@media (min-width: 768px) {
    .movie-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 3.5rem;
    }
}
</style>
