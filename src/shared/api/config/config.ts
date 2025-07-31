const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';
const AUTH_BASE_URL = 'https://api.escuelajs.co/api/v1/'; // using for demo

type HttpMethod = 'GET' | 'POST' | 'DELETE';

type RequestOptions = {
    params?: Record<string, string | number>;
    authApi?: boolean
};

function buildQuery(params: Record<string, string | number> = {}, isAuthApi: boolean): string {
    const query = new URLSearchParams({
        ...(!isAuthApi && { apikey: API_KEY }),
        ...params,
    });
    return query ? `?${query.toString()}` : '';
}

export async function http<T = any>(
    endpoint: string,
    method: HttpMethod = 'GET',
    options: RequestOptions = { authApi: false },
): Promise<T> {
    const BASE_URL_API = options.authApi ? AUTH_BASE_URL : BASE_URL;
    const url = `${BASE_URL_API}${endpoint}${buildQuery(options.params, options.authApi)}`;

    const response = await fetch(url, {
        method,
        ...(options.authApi && {
            headers: {
                'Content-Type': 'application/json',
            },
        }),
        body: method !== 'GET' && options.body ? JSON.stringify(options.body) : undefined,
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
