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

const { state: query, debounced: debouncedQuery } = useDebouncedRef('Batman', 2000);

fetchMovies('Batman');

const handlePageChange = (page: number) => {
    currentPage.value = page;
    fetchMovies(query, page);
};

watch(debouncedQuery, (newQuery) => {
    currentPage.value = 1;
    fetchMovies(newQuery, 1);
});

const handleInput = (e: Event) => {
    query.value = (e.target as HTMLInputElement).value;
};
</script>

<template>
    <BaseContainer>
        <Header>
            <div class="search-bar">
                <Input
                    :value="query"
                    @input="handleInput"
                    icon
                    autocomplete="off"
                    aria-label="Search for a movie"
                    type="search"
                    name="search"
                />
            </div>
        </Header>
        <SearchBar
            v-if="debouncedQuery"
            :query="debouncedQuery"
            :totalResults="totalResults" />
        <main>
            <CardGrid :movies="movies" v-if="movies.length" />
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

<style scoped>
</style>
