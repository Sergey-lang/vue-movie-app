<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie.store.ts';
import MovieDetailsSkeleton from '@components/Skeletons/MovieSkeleton/MovieDetailsSkeleton.vue';

const route = useRoute();

const handleImgError = (e) => {
    e.target.src = '/placeholder.jpg';
};

const router = useRouter();

const store = useMovieStore();

onMounted(() => {
    const id = route.params.imdbID;
    if (typeof id === 'string') {
        store.fetchMovie(id);
    }
});

const back = () => router.back();
</script>

<template>
    <MovieDetailsSkeleton v-if="store.isLoading" />
    <section class="movie-details" v-else>
        <div class="poster-box">
            <div class="poster-wrapper">
                <img
                    v-if="!store.isLoading"
                    :src="store.movies[0].Poster"
                    :alt="store.movies[0].Title"
                    class="movie-poster"
                    loading="lazy"
                    @error="handleImgError"
                />
            </div>
        </div>
        <div class="movie-content">
            <h1 class="movie-title">{{ store.movies[0].Title }}</h1>
            <ul class="movie-meta">
                <li><strong>Year:</strong> {{ store.movies[0].Year }}</li>
                <li><strong>IMDB ID:</strong> {{ store.movies[0].imdbID }}</li>
                <li><strong>Type:</strong> {{ store.movies[0].Type }}</li>
            </ul>

            <p class="movie-description">
                {{ store.movies[0].Plot }}
            </p>

            <button @click="back" class="back-button">← Back</button>
        </div>
    </section>
</template>

<style scoped>
.movie-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.poster-box {
    display: flex;
    justify-content: center;
    width: 100%;
}

.poster-wrapper {
    width: 50%;
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

.movie-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.movie-title {
    font-size: 2rem;
    font-weight: bold;
}

.movie-meta {
    list-style: none;
    padding: 0;
    margin: 0;
}

.movie-meta li {
    margin-bottom: 0.25rem;
}

.movie-description {
    line-height: 1.6;
    color: #444;
}

.back-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--color-blue-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
}
</style>
