<script setup lang="ts">
import BaseContainer from '@shared/ui/container.vue';
import CardGrid from '@shared/ui/card-grid.vue';
import Header from '@components/Header';
import { useMovies } from '@composables/use-movies';
import SearchBar from '@components/SearchBar';
import Pagination from '@components/Pagination';
import Empty from '@components/Empty';
import { useDebouncedRef } from '@composables/use-debounced-ref';
import { ref, watch } from 'vue';
import Input from '@components/Input/input.vue';

const { movies, fetchMovies, isLoading, totalPages, currentPage, totalResults } = useMovies();

const { state: query, debounced: debouncedQuery, cancel } = useDebouncedRef('Batman', 2000);

fetchMovies('Batman');

const lastSearchedQuery = ref('');

const handlePageChange = (page: number) => {
    currentPage.value = page;
    fetchMovies(query.value.trim(), page);
};

watch(debouncedQuery, (newQuery) => {
    currentPage.value = 1;
    const trimmed = newQuery.trim();
    if (trimmed !== lastSearchedQuery.value) {
        fetchMovies(trimmed, 1);
        lastSearchedQuery.value = trimmed;
    }
});

const handleKeydown = (e: KeyboardEvent) => {
    const trimmed = query.value.trim();
    if (e.key === 'Enter' && trimmed && trimmed !== lastSearchedQuery.value) {
        cancel();
        currentPage.value = 1;
        fetchMovies(trimmed, 1);
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
                    @keydown="handleKeydown"
                    icon
                    autocomplete="off"
                    aria-label="Search for a movie"
                    type="search"
                    name="search"
                />
            </div>
        </Header>
        <SearchBar v-if="debouncedQuery" :query="debouncedQuery" :totalResults="totalResults" />
        <main>
            <CardGrid
                :movies="movies"
                :is-loading="isLoading"
            />
            <Empty v-if="!movies.length" />
            <Pagination
                v-if="totalPages > 1"
                :current-page="currentPage"
                :total-pages="totalPages"
                @change="handlePageChange"
            />
        </main>
    </BaseContainer>
</template>

<style scoped></style>
