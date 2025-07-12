import { ref, watch } from 'vue';

export function useDebouncedRef<T>(initialValue: T, delay = 500) {
    const state = ref(initialValue);
    const debounced = ref(initialValue);

    let timer: ReturnType<typeof setTimeout>;

    watch(state, (newVal) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            debounced.value = newVal;
        }, delay);
    });

    return { state, debounced };
}
