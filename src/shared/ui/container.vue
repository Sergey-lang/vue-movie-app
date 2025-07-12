<template>
    <div class="base-container">
        <slot />
    </div>
</template>

<style scoped>

.base-container {
    max-width: 72.3rem;
    margin: 0 auto;
    padding-bottom: 3.625rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

@media (max-width: 1280px) {
    .base-container {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
}
</style>
