import { http } from './config';

export type LoginResponse = { access_token: string; refresh_token: string };

export const authUser = ({ email, password }: { email: string; password: string }) => {
    return http<LoginResponse>('auth/login', 'POST', {
        authApi: true,
        body: {
            email,
            password,
        },
    });
};
