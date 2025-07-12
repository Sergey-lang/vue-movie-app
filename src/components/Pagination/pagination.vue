<script setup lang="ts">
import { computed } from 'vue';
import ArrowIcon from '@assets/icons/arrow.svg';

const props = defineProps<{
    currentPage: number
    totalPages: number
}>();

const emit = defineEmits<{
    (e: 'change', page: number): void
}>();

const pagesToShow = computed(() => {
    const pages: (number | string)[] = [];

    pages.push('prev');

    const total = props.totalPages;
    const current = props.currentPage;

    let start = current - 1;
    let end = current + 1;

    if (current <= 2) {
        start = 1;
        end = 3;
    } else if (current >= total - 1) {
        start = total - 2;
        end = total;
    }

    for (let i = start; i <= end; i++) {
        if (i >= 1 && i <= total) {
            pages.push(i);
        }
    }

    if (end < total - 1) {
        pages.push('dots');
        pages.push(total);
    } else if (end === total - 1) {
        pages.push(total);
    }

    pages.push('next');

    return pages;
});

const handleClick = (item: number | string) => {
    if (item === 'prev') {
        emit('change', props.currentPage - 1);
    } else if (item === 'next') {
        emit('change', props.currentPage + 1);
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
                :disabled="item === 'dots'"
                :class="['pagination-button',
                {
                    active: item === currentPage,
                    dots: item === 'dots',
                    'arrow': item === 'prev' || item === 'next',
                    'arrow-disabled': (item === 'prev' && currentPage === 1) || (item === 'next' && currentPage === totalPages),
                }]"
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
    --border-color: #E6EAF5;

    width: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-color);
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

.pagination-button:not(:last-child) {
    border-right: 1px solid var(--border-color);
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
    background-color: #F3F5F9;
}

.arrow {
    color: #3256E3;
}

.arrow-right {
    transform: rotate(-180deg);
}

.arrow-disabled svg {
    color: #929BBC;
    pointer-events: none;
}

.pagination-button.dots {
    cursor: default;
}
</style>
