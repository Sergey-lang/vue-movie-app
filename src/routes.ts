import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    routes: [
        { path: '/', component: () => import('./pages/auth/ui/AuthPage.vue') },
        {
            path: '/main',
            component: () => import('./pages/home/ui/HomePage.vue'),
            children: [
                { path: '', component: () => import('./widgets/HomePageLayout/HomePageLayout.vue') },
                { path: ':imdbID', component: () => import('./pages/movie/ui/MoviePage.vue') },
            ],
        },
        {
            path: '/profile',
            component: () => import('./pages/profile/ui/ProfilePage.vue'),
        },
    ],
    history: createWebHistory(),
});
