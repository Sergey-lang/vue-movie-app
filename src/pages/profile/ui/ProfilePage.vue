<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import BaseContainer from '@shared/ui/Container.vue';
import CardGrid from '@shared/ui/CardGrid.vue';
import Header from '@components/Header.vue';
import SearchBar from '@components/SearchBar.vue';
import Pagination from '@components/Pagination.vue';
import Empty from '@components/Empty.vue';
import Input from '@components/Input.vue';
import { useDebouncedRef } from '@composables/useDebouncedRef';
import { useMovieStore } from '@/stores/movie.store';

const store = useMovieStore();

const { state: query, debounced: debouncedQuery, cancel } = useDebouncedRef('Batman', 2000);

onMounted(() => {
    store.fetchMovies(query.value);
});

const lastSearchedQuery = ref('');

const handlePageChange = (page: number) => {
    store.currentPage.value = page;
    store.fetchMovies(query.value.trim(), page);
};

watch(debouncedQuery, (newQuery) => {
    store.currentPage.value = 1;
    const trimmed = newQuery.trim();
    if (trimmed !== lastSearchedQuery.value) {
        store.fetchMovies(trimmed, 1);
        lastSearchedQuery.value = trimmed;
    }
});

const handleKeyup = () => {
    const trimmed = query.value.trim();
    if (trimmed && trimmed !== lastSearchedQuery.value) {
        cancel();
        store.currentPage.value = 1;
        store.fetchMovies(trimmed, 1);
        lastSearchedQuery.value = trimmed;
    }
};
</script>

<template>
    <BaseContainer>
        <Header>
            <div class="search-bar">
                <Input
                    v-model="query"
                    @keyup.enter="handleKeyup"
                    icon
                    autocomplete="off"
                    aria-label="Search for a movie"
                    type="search"
                    name="search"
                />
            </div>
        </Header>
        <SearchBar v-if="debouncedQuery" :query="debouncedQuery" :totalResults="store.totalResults" />
        <main>
            <CardGrid :movies="store.movies" :is-loading="store.isLoading" />
            <Empty v-if="!store.movies.length" />
            <Pagination
                v-if="totalPages > 1"
                :current-page="store.currentPage"
                :total-pages="store.totalPages"
                @change="handlePageChange"
            />
        </main>
    </BaseContainer>
</template>

<style scoped></style>
