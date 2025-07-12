<script setup lang="ts">
import { defineProps } from 'vue';
import { MovieType } from '../../shared/types';

const props = defineProps<MovieType>();
const fallback = '/placeholder.png';
</script>

<template>
    <article class="movie-card">
        <img :src="Poster !== 'N/A' ? Poster : fallback" :alt="Title" class="movie-poster" loading="lazy" />
        <div class="movie-info">
            <p class="movie-info-text">Name: {{ Title }}</p>
            <p class="movie-info-text">Year: {{ Year }}</p>
            <p class="movie-info-text">imdbId: {{ imdbID }}</p>
            <p class="movie-info-text">Type: {{ Type }}</p>
        </div>
    </article>
</template>

<style scoped>
.movie-card {
    --x-padding: 0.8rem;

    display: flex;
    gap: 1.43rem;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    transition: transform 0.3s;
}

.movie-poster {
    height: auto;
    max-height: 365px;
    object-fit: cover;
    border-radius: 10px;
    outline: 1px solid #3256E3;
    outline-offset: -1px;
}

.movie-info {
    display: flex;
    padding-left: var(--x-padding);
    padding-right: var(--x-padding);
    flex-direction: column;
    justify-content: start;
    align-items: start;
    flex-grow: 1;
}

.movie-info-text {
    font-size: 1rem;
    color: #000000;
}

@media (max-width: 1024px) {
    .movie-poster {
        max-height: 597px;
    }
}

@media (max-width: 768px) {
    .movie-poster {
        max-height: 904px;
    }
}

@media (min-width: 768px) {
    .movie-card:hover {
        transform: scale(1.03);
    }
}

</style>
