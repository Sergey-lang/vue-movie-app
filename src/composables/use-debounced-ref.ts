import { ref, watch } from 'vue';
import { Nullable } from '@shared/types';

export const useDebouncedRef = <T>(initialValue: T, delay = 300) => {
    const state = ref(initialValue);
    const debounced = ref(initialValue);

    let timeout: Nullable<ReturnType<typeof setTimeout>> = null;

    const cancel = () => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };

    watch(state, (newValue) => {
        cancel();
        timeout = setTimeout(() => {
            debounced.value = newValue;
        }, delay);
    });

    return { state, debounced, cancel };
};
