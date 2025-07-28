<script setup lang="ts">
import { ref } from 'vue';
import { MovieType } from '../shared/types/movie';

const props = defineProps<MovieType>();
const fallback = '/no-image.png';

const imgSrc = ref(props.Poster !== 'N/A' ? props.Poster : fallback);

const handleImgError = () => {
    imgSrc.value = fallback;
};
</script>

<template>
    <RouterLink :to="`/main/${imdbID}`" class="movie-card">
        <article class="movie-card">
            <div class="poster-wrapper">
                <img
                    :src="imgSrc"
                    :alt="Title"
                    class="movie-poster"
                    loading="lazy"
                    @error="handleImgError"
                />
            </div>
            <div class="movie-info">
                <p class="movie-info-text">Name: {{ Title }}</p>
                <p class="movie-info-text">Year: {{ Year }}</p>
                <p class="movie-info-text">imdbId: {{ imdbID }}</p>
                <p class="movie-info-text">Type: {{ Type }}</p>
            </div>
        </article>
    </RouterLink>
</template>

<style scoped>
.movie-card {
    --x-padding: 0.8rem;

    display: flex;
    gap: 1.43rem;
    flex-direction: column;
    overflow: hidden;
    background: white;
    transition: transform 0.3s;
}

.movie-card:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: 1px;
    border-radius: 0.625rem;
    z-index: 1;
}

.poster-wrapper {
    width: 100%;
    aspect-ratio: 165 / 244;
    overflow: hidden;
    border-radius: 0.625rem;
    outline: 1px solid var(--color-blue-primary);
    outline-offset: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.movie-poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    color: black;
}
</style>
