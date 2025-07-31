import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

export const router = createRouter({
    routes: [
        { path: '/', component: () => import('@pages/AuthPage.vue'), name: 'auth' },
        {
            path: '/main',
            component: () => import('@pages/HomePage.vue'),
            children: [
                { path: '', component: () => import('@widgets/HomePageLayout/HomePageLayout.vue') },
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
        },
    ],
    history: createWebHistory(),
});


router.beforeEach((to) => {
    const authStore = useAuthStore();
    if (!authStore.getToken && to.name !== 'auth') {
        return { name: 'auth' };
    }
});
