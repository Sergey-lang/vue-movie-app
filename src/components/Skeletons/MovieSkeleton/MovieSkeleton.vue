<template>
    <article class="movie-card skeleton">
        <div class="poster-wrapper">
            <div class="poster-skeleton" />
        </div>
        <div class="movie-info">
            <div class="line w-80" />
            <div class="line w-60" />
            <div class="line w-70" />
            <div class="line w-40" />
        </div>
    </article>
</template>

<style scoped>
.movie-card {
    display: flex;
    flex-direction: column;
    gap: 1.43rem;
    background: white;
    padding: 0.8rem;
    border-radius: 0.625rem;
    overflow: hidden;
}

.poster-wrapper {
    width: 100%;
    aspect-ratio: 165 / 244;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625rem;
    outline: 1px solid var(--color-blue-primary);
    outline-offset: -1px;
    overflow: hidden;
}

.poster-skeleton {
    width: 100%;
    height: 100%;
    background-color: #e6eaf5;
    animation: pulse 1.2s ease-in-out infinite;
}

.movie-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.line {
    height: 1rem;
    background-color: #e6eaf5;
    border-radius: 0.25rem;
    animation: pulse 1.2s ease-in-out infinite;
}

.w-80 {
    width: 80%;
}

.w-60 {
    width: 60%;
}

.w-70 {
    width: 70%;
}

.w-40 {
    width: 40%;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
}
</style>
