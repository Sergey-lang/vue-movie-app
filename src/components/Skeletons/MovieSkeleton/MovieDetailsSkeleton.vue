<template>
    <section class="movie-details">
        <div class="poster-box">
            <div class="poster-wrapper">
                <div class="poster-skeleton" />
            </div>
        </div>
        <div class="movie-content">
            <div class="skeleton-title" />
            <ul class="movie-meta">
                <li class="skeleton-line w-40" />
                <li class="skeleton-line w-50" />
                <li class="skeleton-line w-30" />
            </ul>
            <div class="skeleton-paragraph">
                <div class="skeleton-line w-100" />
                <div class="skeleton-line w-90" />
                <div class="skeleton-line w-95" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.movie-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.poster-box {
    display: flex;
    justify-content: center;
    width: 100%;
}

.poster-wrapper {
    width: 50%;
    aspect-ratio: 165 / 244;
    overflow: hidden;
    border-radius: 0.625rem;
    outline: 1px solid var(--color-blue-primary);
    outline-offset: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.poster-skeleton {
    width: 100%;
    height: 100%;
    background-color: #e6eaf5;
    animation: pulse 1.2s ease-in-out infinite;
    border-radius: 0.625rem;
}

.skeleton-title {
    width: 60%;
    height: 2.5rem;
    background-color: #e6eaf5;
    animation: pulse 1.2s ease-in-out infinite;
    border-radius: 0.375rem;
}

.skeleton-line {
    height: 1rem;
    background-color: #e6eaf5;
    animation: pulse 1.2s ease-in-out infinite;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
}

.skeleton-paragraph .skeleton-line {
    margin-bottom: 0.4rem;
}

.w-100 {
    width: 100%;
}

.w-95 {
    width: 95%;
}

.w-90 {
    width: 90%;
}

.w-50 {
    width: 50%;
}

.w-40 {
    width: 40%;
}

.w-30 {
    width: 30%;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
}
</style>
