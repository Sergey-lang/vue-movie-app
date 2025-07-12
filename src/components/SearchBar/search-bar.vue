<script setup lang="ts">
import Button from '@components/Button';
import { defineProps } from 'vue';

const props = defineProps<{ totalResults?: number, query: string}>();
</script>

<template>
    <div class="search-bar">
        <div class="search-result">You searched for: {{ query}}</div>
        <Button variant="primary" icon >{{ totalResults }} results</Button>
    </div>
</template>

<style scoped>

.search-bar {
    gap: 1.06rem;
    height: 2.55rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.search-result {
    font-size: 1.37rem;
}

@media (max-width: 768px) {
    .search-bar {
        justify-content: center;
    }
}

</style>
