const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

type HttpMethod = 'GET' | 'POST' | 'DELETE';

type RequestOptions = {
    params?: Record<string, string | number>;
};

function buildQuery(params: Record<string, string | number> = {}): string {
    const query = new URLSearchParams({
        apikey: API_KEY,
        ...params,
    });
    return `?${query.toString()}`;
}

export async function http<T = any>(
    endpoint: string,
    method: HttpMethod = 'GET',
    options: RequestOptions = {},
): Promise<T> {
    const url = `${BASE_URL}${endpoint}${buildQuery(options.params)}`;

    const response = await fetch(url, {
        method,
        // headers: {
        //     'Content-Type': 'application/json',
        //     ...(options.headers || {}),
        // },
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
