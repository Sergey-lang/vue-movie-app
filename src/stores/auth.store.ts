import { defineStore } from 'pinia';
import type { Nullable } from '@shared/types';
import { computed, ref } from 'vue';
import { authUser } from '@shared/api/auth';

type TokenState = {
    access_token: string;
    refresh_token: string;
};

type TokenKey = keyof TokenState;

const ACCESS_TOKEN_KEY = 'access_token' as const;
const REFRESH_TOKEN_KEY = 'refresh_token' as const;

export const useAuthStore = defineStore('auth', () => {
    const token = ref<TokenState>({ access_token: '', refresh_token: '' });
    const isLoading = ref<boolean>(false);
    const error = ref<Nullable<string>>(null);

    const initAccessValue = localStorage.getItem(ACCESS_TOKEN_KEY);
    const initRefreshValue = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (initAccessValue) {
        token.value[ACCESS_TOKEN_KEY] = initAccessValue;
    }

    if (initRefreshValue) {
        token.value[REFRESH_TOKEN_KEY] = initRefreshValue;
    }

    const setToken = (newToken: string, key: TokenKey = ACCESS_TOKEN_KEY) => {
        token.value[key] = newToken;
        localStorage.setItem(key, newToken);
    };

    const clearToken = () => {
        token.value = { access_token: '', refresh_token: '' };
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    };

    const getToken = computed(() => token.value.access_token);

    const login = async (email: string, password: string) => {
        isLoading.value = true;
        error.value = null;

        try {
            const res = await authUser({ email, password });
            token.value = res;
            setToken(res.access_token);
            setToken(res.refresh_token, REFRESH_TOKEN_KEY);
        } catch (err: any) {
            error.value = err.message || 'Something went wrong';
        } finally {
            isLoading.value = false;
        }
    };

    return {
        login,
        getToken,
        setToken,
        clearToken,
        isLoading,
        error,
    };
});
