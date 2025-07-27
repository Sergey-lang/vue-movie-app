import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    routes: [
        { path: '/', component: () => import('./pages/auth/ui/AuthPage.vue') },
        {
            path: '/main',
            component: () => import('./pages/home/ui/HomePage.vue'),
            name: 'main',
            // children: [
            //     { path: 'profile', component: ProfilePage },
            // ],
        },
        {
            path: '/profile',
            component: () => import('./pages/profile/ui/ProfilePage.vue'),
            name: 'profile',
        },
    ],
    history: createWebHistory(),
});
