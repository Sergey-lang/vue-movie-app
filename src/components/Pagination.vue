<script setup lang="ts">
import { computed } from 'vue';
import ArrowIcon from '@components/Icons/ArrowIcon.vue';

const props = defineProps<{
    currentPage: number;
    totalPages: number;
}>();

const emit = defineEmits<{
    (e: 'change', page: number): void;
}>();

const pagesToShow = computed(() => {
    const pages: (number | string)[] = [];
    const total = props.totalPages;
    const current = props.currentPage;

    pages.push('prev');

    if (total <= 5) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        pages.push(1);

        let start = current - 1;
        let end = current + 1;

        if (current <= 3) {
            start = 2;
            end = 4;
        } else if (current >= total - 2) {
            start = total - 3;
            end = total - 1;
        }

        if (start > 2) pages.push('dots');

        for (let i = start; i <= end; i++) {
            if (i > 1 && i < total) pages.push(i);
        }

        if (end < total - 1) pages.push('dots');

        pages.push(total);
    }

    pages.push('next');

    return pages;
});

const handleClick = (item: number | string) => {
    if (item === 'prev') {
        if (props.currentPage > 1) emit('change', props.currentPage - 1);
    } else if (item === 'next') {
        if (props.currentPage < props.totalPages) emit('change', props.currentPage + 1);
    } else if (typeof item === 'number') {
        emit('change', item);
    }
};
</script>

<template>
    <div class="pagination-wrapper">
        <nav class="pagination">
            <button
                v-for="item in pagesToShow"
                :key="item"
                :disabled="item === 'dots' || (item === 'prev' && currentPage === 1) || (item === 'next' && currentPage === totalPages)"
                :class="[
                    'pagination-button',
                    {
                        active: item === currentPage,
                        dots: item === 'dots',
                        arrow: item === 'prev' || item === 'next',
                        'arrow-disabled':
                            (item === 'prev' && currentPage === 1) ||
                            (item === 'next' && currentPage === totalPages),
                    },
                ]"
                @click="handleClick(item)"
            >
                <span v-if="item === 'prev'">
                    <ArrowIcon class="arrow arrow-left" />
                </span>
                <span v-else-if="item === 'next'">
                    <ArrowIcon class="arrow arrow-right" />
                </span>
                <span v-else-if="item === 'dots'">...</span>
                <span v-else>{{ item }}</span>
            </button>
        </nav>
    </div>
</template>

<style scoped>
.pagination-wrapper {
    display: flex;
    justify-content: center;
}

.pagination {
    --border-radius: 0.3125rem;

    width: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
}

.pagination-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 1.6875rem;
    cursor: pointer;
    color: #010515;
}

.pagination-button:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: 1px;
    z-index: 1;
}

.pagination-button:not(:last-child) {
    border-right: 1px solid var(--color-border);
}

.pagination-button:first-child {
    border-bottom-left-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
}

.pagination-button:last-child {
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
}

.pagination-button.active {
    background-color: #f3f5f9;
}

.arrow {
    color: var(--color-blue-primary);
}

.arrow-right {
    transform: rotate(-180deg);
}

.arrow-disabled svg {
    color: #929bbc;
    pointer-events: none;
}

.pagination-button.dots {
    cursor: default;
}
</style>
