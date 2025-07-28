<template>
    <section class="not-found">
        <h1 class="title">404</h1>
        <p class="subtitle">Страница не найдена</p>
        <RouterLink to="/main" class="back-link">← На главную</RouterLink>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    padding: 2rem;
    color: #2c3e50;
}

.title {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.back-link {
    font-size: 1rem;
    color: white;
    background-color: var(--color-blue-primary);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.2s;
}

.back-link:hover {
    background-color: #3a72d8;
}
</style>
