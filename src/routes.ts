import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    routes: [
        { path: '/', component: () => import('@pages/AuthPage.vue') },
        {
            path: '/main',
            component: () => import('@pages/HomePage.vue'),
            children: [
                { path: '', component: () => import('./widgets/HomePageLayout/HomePageLayout.vue') },
                { path: ':imdbID', component: () => import('@pages/MoviePage.vue') },
            ],
        },
        {
            path: '/profile',
            component: () => import('@pages/ProfilePage.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@pages/NotFoundPage.vue'),
        }
    ],
    history: createWebHistory(),
});
