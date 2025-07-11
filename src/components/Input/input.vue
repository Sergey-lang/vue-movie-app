<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.svg';


const props = withDefaults(
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
            class="input"
            :class="[`variant--${variant}`,`size--${size}`]"
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
    --color-dark-grey: #E6EAF5;
    --color-dark-grey-text: #929BBC;
    --x-padding: 0.9375rem;
    --y-padding: 0.625rem;
    border: 1px solid var(--color-dark-grey);
    border-radius: 0.31rem;
    font-size: 0.875rem;
    color: var(--color-dark-grey-text);
    padding: var(--y-padding) calc(var(--x-padding) + 1rem + 2px) var(--y-padding) var(--x-padding);
}

.search-icon {
    position: absolute;
    right: 0.9375rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

</style>
