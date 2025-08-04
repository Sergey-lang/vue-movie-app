<script setup lang="ts">
import Input from '@components/Input.vue';
import SearchBar from '@components/SearchBar.vue';
import Header from '@components/Header.vue';
import { computed, ref, watch } from 'vue';
import { useDebouncedRef } from '@composables/useDebouncedRef';
import { useMovieStore } from '@/stores/movie.store';
import { useRoute } from 'vue-router';

const router = useRoute();
const store = useMovieStore();
const { state: query, debounced: debouncedQuery, cancel } = useDebouncedRef('Batman', 2000);

const lastSearchedQuery = ref('');

watch(debouncedQuery, (newQuery) => {
    store.currentPage = 1;
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
        store.currentPage = 1;
        store.fetchMovies(trimmed, 1);
        lastSearchedQuery.value = trimmed;
    }
};

const activeRoute = computed(() => {
    return {
        authPage: router.path === '/',
        mainPage: router.path === '/main',
    }
});

</script>

<template>
    <Header v-if="!activeRoute.authPage">
        <div class="search-bar" v-if="activeRoute.mainPage">
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
    <SearchBar v-if="debouncedQuery && activeRoute.mainPage" :query="debouncedQuery" :totalResults="store.totalResults" />
</template>
