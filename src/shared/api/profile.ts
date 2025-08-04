import { http } from './config';
import { ProfileType } from '@shared/types';

export const getUser = () => {
    return http<ProfileType>('auth/profile', 'GET', {
        authApi: true,
    });
};
