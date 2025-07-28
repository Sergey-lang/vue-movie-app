import { http } from './config';
import { MovieType } from '../types';

export type SearchResponse = {
    Search: MovieType[];
    totalResults: string;
    Response: 'True';
};

export const searchMovies = (query: string, page: number = 1, id) => {
    return http<SearchResponse>('', 'GET', {
        params: {
            s: query,
            i: id,
            page,
        },
    });
};
