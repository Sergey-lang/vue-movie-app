<script setup lang="ts">
import SearchIcon from '@components/Icons/SearchIcon.vue';

const model = defineModel();

withDefaults(
    defineProps<{
        icon?: boolean;
    }>(),
    {
        icon: false,
    },
);
</script>

<template>
    <div class="input-wrapper">
        <input
            :value="model"
            @input="model = $event.target.value"
            class="input"
            :class="[`variant--${variant}`, `size--${size}`]"
            v-bind="$attrs"
            :type="type"
            :disabled="disabled"
            :autofocus="autofocus"
        />
        <SearchIcon v-if="icon" class="search-icon" />
    </div>
</template>

<style scoped>
.input-wrapper {
    position: relative;
}

.input {
    width: 17.5rem;
    --color-dark-grey-text: #929bbc;
    --x-padding: 0.9375rem;
    --y-padding: 0.625rem;
    border: 1px solid var(--color-border);
    border-radius: 0.31rem;
    font-size: 0.875rem;
    color: var(--color-dark-grey-text);
    padding: var(--y-padding) calc(var(--x-padding) + 1rem + 2px) var(--y-padding) var(--x-padding);
}

.input:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: 2px;
    z-index: 1;
}

.search-icon {
    position: absolute;
    right: 0.9375rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}
</style>
