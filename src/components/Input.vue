<script setup lang="ts">
import SearchIcon from '@components/Icons/SearchIcon.vue';
import { Nullable } from '@shared/types';

const model = defineModel();

withDefaults(
    defineProps<{
        icon?: boolean;
        error?: Nullable<string>;
    }>(),
    {
        icon: false,
        error: null,
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
        <span v-if="error" class="error">{{ error }}</span>
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

.error {
    position: absolute;
    font-size: 0.75rem;
    bottom: -13px;
    right: 0;
    color: rgba(255, 0, 0, 0.8);
}

.input:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: 1px;
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
