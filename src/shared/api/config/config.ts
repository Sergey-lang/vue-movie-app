import { useAuthStore } from '@/stores/auth.store';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';
const AUTH_BASE_URL = 'https://api.escuelajs.co/api/v1/'; // using for demo

type HttpMethod = 'GET' | 'POST' | 'DELETE';

type RequestOptions = {
    authApi?: boolean;
    params?: Record<string, string | number>;
    body?: unknown;
    headers?: Record<string, string>;
};

function buildQuery(params: Record<string, string | number> = {}, isAuthApi: boolean): string {
    const query = new URLSearchParams({
        ...(!isAuthApi && { apikey: API_KEY }),
        ...params,
    });
    return query.size !== 0 ? `?${query.toString()}` : '';
}

export async function http<T = unknown>(
    endpoint: string,
    method: HttpMethod = 'GET',
    { authApi = false, params, body }: RequestOptions = {},
): Promise<T> {
    const BASE_API_URL = authApi ? AUTH_BASE_URL : BASE_URL;
    const url = `${BASE_API_URL}${endpoint}${buildQuery(params, authApi)}`;

    const authStore = useAuthStore();
    const response = await fetch(url, {
        method,
        ...(authApi && {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authStore.getToken}`,
            },
        }),
        body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error(data.Error || 'API error');
    }

    return data;
}
