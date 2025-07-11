<template>
    <div class="base-container">
        <slot />
    </div>
</template>

<style scoped>
.base-container {
    max-width: 72.3rem;
    margin: 0 auto;
}

@media (max-width: 1280px) {
    .base-container {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
}
</style>
