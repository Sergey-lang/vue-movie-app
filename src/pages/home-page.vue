<script setup lang="ts">
import BaseContainer from '@shared/ui/container.vue';
import CardGrid from '@shared/ui/card-grid.vue';
import Header from '@components/Header/header.vue';
import { useMovies } from '@composables/use-movies';
import SearchBar from '@components/SearchBar/search-bar.vue';

const { movies, fetchMovies, isLoading, totalPages, currentPage, totalResults } = useMovies();

fetchMovies('Batman')
</script>

<template>
    <BaseContainer>
        <Header />
        <SearchBar :totalResults="totalResults"/>
        <CardGrid :movies="movies" />
    </BaseContainer>
</template>
