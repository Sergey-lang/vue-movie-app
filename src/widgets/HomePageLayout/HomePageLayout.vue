<script setup lang="ts">
import Empty from '@components/Empty.vue';
import CardGrid from '@shared/ui/CardGrid.vue';
import Pagination from '@components/Pagination.vue';
import { useMovieStore } from '@/stores/movie.store';
import { onMounted } from 'vue';

const store = useMovieStore();

onMounted(() => {
    store.fetchMovies('Batman');
});

const handlePageChange = (page: number) => {
    store.currentPage = page;
    store.fetchMovies(store.query.trim(), page);
};
</script>

<template>
    <CardGrid :movies="store.movies" :is-loading="store.isLoading" />
    <Empty v-if="!store.movies.length" />
    <Pagination
        v-if="store.totalPages > 1"
        :current-page="store.currentPage"
        :total-pages="store.totalPages"
        @change="handlePageChange"
    />
</template>
