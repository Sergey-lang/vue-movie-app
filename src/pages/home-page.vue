<script setup lang="ts">
import BaseContainer from '@shared/ui/container.vue';
import CardGrid from '@shared/ui/card-grid.vue';
import Header from '@components/Header';
import { useMovies } from '@composables/use-movies';
import SearchBar from '@components/SearchBar';
import Pagination from '@components/Pagination';
import Empty from '@components/Empty';
import { useDebouncedRef } from '@composables/use-debounced-ref';
import { watch } from 'vue';
import Input from '@components/Input/input.vue';

const { movies, fetchMovies, isLoading, totalPages, currentPage, totalResults } = useMovies();

const { state: query, debounced: debouncedQuery, cancel } = useDebouncedRef('Batman', 2000);

fetchMovies('Batman');

const handlePageChange = (page: number) => {
    currentPage.value = page;
    fetchMovies(query.value.trim(), page);
};

watch(debouncedQuery, (newQuery) => {
    currentPage.value = 1;
    fetchMovies(newQuery.trim(), 1);
});

const handleInput = (e: Event) => {
    query.value = (e.target as HTMLInputElement).value;
};

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && query.value.trim()) {
        cancel();
        currentPage.value = 1;
        fetchMovies(query.value.trim(), 1);
    }
};

</script>

<template>
    <BaseContainer>
        <Header>
            <div class="search-bar">
                <Input
                    :value="query"
                    @input="handleInput"
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
