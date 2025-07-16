<script setup lang="ts">
import PlusIcon from '@components/Icons/PlusIcon.vue';

type Variant = 'primary' | 'secondary' | 'third' | 'line';
type Size = 's' | 'l';

const {
    variant = 'primary',
    size = 's',
    type = 'button',
    icon = false,
} = defineProps<{
    variant?: Variant;
    size?: Size;
    icon?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    autofocus?: boolean;
}>();
</script>

<template>
    <button
        class="button"
        :class="[`variant--${variant}`, `size--${size}`]"
        v-bind="$attrs"
        :type="type"
        :disabled="disabled"
        :autofocus="autofocus"
    >
        <PlusIcon
            v-if="icon && variant !== 'primary'"
            :class="['icon', { 'icon--disabled': disabled }]"
        />
        <p>
            <slot />
        </p>
    </button>
</template>

<style scoped>
.button {
    padding: 0.438rem 0.9716rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.31rem;
    color: white;
    font-size: 0.875rem;
    gap: 0.31rem;
    cursor: pointer;
}

.button:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: 1px;
    z-index: 1;
}

.variant--primary {
    background: var(--color-blue-primary);
}

.variant--primary:hover {
    background: var(--color-blue);
}

.variant--secondary {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-blue);
}

.variant--secondary:hover {
    border-color: var(--color-blue);
}

.variant--third {
    background: transparent;
    border: none;
    color: var(--color-blue);
}

.variant--third:hover {
    background: rgba(35, 79, 235, 0.1);
    color: var(--color-blue-hover);
}

.button:disabled {
    background: var(--color-border);
    color: var(--color-disabled-text);
}

.icon {
    stroke: currentColor;
}

.icon--disabled {
    color: var(--color-disabled-text);
}
</style>
