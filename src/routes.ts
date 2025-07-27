import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@pages/home/ui/HomePage.vue';
import ProfilePage from '@pages/profile/ui/ProfilePage.vue';
import AuthPage from '@pages/auth/ui/AuthPage.vue';

export const router = createRouter({
    routes: [
        { path: '/', component: AuthPage },
        {
            path: '/main',
            component: HomePage,
            name: 'main',
            // children: [
            //     { path: 'profile', component: ProfilePage },
            // ],
        },
        {
            path: '/profile',
            component: ProfilePage,
            name: 'profile',
        },
    ],
    history: createWebHistory(),
});
