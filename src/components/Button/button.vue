<script setup lang="ts">
import PlusIcon from '@/assets/icons/plus.svg';

type Variant = 'primary' | 'secondary' | 'third' | 'line'
type Size = 's' | 'l'

const props = withDefaults(
    defineProps<{
        variant?: Variant
        size?: Size
        icon?: boolean;
        type?: 'button' | 'submit' | 'reset'
        disabled?: boolean
        autofocus?: boolean
    }>(),
    {
        variant: 'primary',
        size: 's',
        type: 'button',
        icon: false,
    },
);
</script>

<template>
    <button
        class="button"
        :class="[`variant--${variant}`,`size--${size}`]"
        v-bind="$attrs"
        :type="type"
        :disabled="disabled"
        :autofocus="autofocus"
    >
        <PlusIcon
            v-if="icon && variant !== 'primary'"
            :class="['icon', { 'icon--disabled': disabled }]" />
        <p><slot/></p>
    </button>
</template>

<style scoped>
.button {
    --color-blue-primary: #3256E3;
    --color-blue: #234FEB;
    --color-blue-hover: #0A39DC;
    --color-primary-hover: #3256E3;
    --color-border: #E6EAF5;
    --color-disabled-bg: #E6EAF5;
    --color-disabled-text: #929BBC;

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

.variant--primary {
    background: var(--color-blue-primary);
}

.variant--primary:hover {
    background: var(--color-blue);
}

.variant--secondary {
    background: transparent;
    border: 1px solid var(--color-disabled-bg);
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
    background: var(--color-disabled-bg);
    color: var(--color-disabled-text);
}

.icon {
    stroke: currentColor;
}

.icon--disabled {
    color: var(--color-disabled-text);
}

</style>
