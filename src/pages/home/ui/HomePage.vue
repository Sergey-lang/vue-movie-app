<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import BaseContainer from '@shared/ui/Container.vue';
import CardGrid from '@shared/ui/CardGrid.vue';
import Header from '@components/Header.vue';
import SearchBar from '@components/SearchBar.vue';
import Pagination from '@components/Pagination.vue';
import Empty from '@components/Empty.vue';
import Input from '@components/Input.vue';
import { useMovies } from '@composables/useMovies';
import { useDebouncedRef } from '@composables/useDebouncedRef';

const { movies, fetchMovies, isLoading, totalPages, currentPage, totalResults } = useMovies();

const { state: query, debounced: debouncedQuery, cancel } = useDebouncedRef('Batman', 2000);

onMounted(() => {
    fetchMovies(query.value);
});

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

const handleKeyup = () => {
    const trimmed = query.value.trim();
    if (trimmed && trimmed !== lastSearchedQuery.value) {
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
                    @keyup.enter="handleKeyup"
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
            <CardGrid :movies="movies" :is-loading="isLoading" />
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
