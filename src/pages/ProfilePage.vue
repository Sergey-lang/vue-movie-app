<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';

const profileStore = useProfileStore();
</script>

<template>
    <div class="profile" v-if="profileStore.profile">
        <img :src="profileStore.profile.avatar" alt="avatar" class="avatar" />
        <h1 class="name">{{ profileStore.profile.name }}</h1>
        <p class="role">
            Frontend-разработчик • Vue, TypeScript, UI/UX, {{ profileStore.profile.role }}
        </p>
        <p class="bio">
            Увлекаюсь созданием интерфейсов для кино-приложений. Люблю лаконичный код и хорошую
            типографику.
        </p>
        <ul class="links">
            <li><a href="https://github.com/username" target="_blank">GitHub</a></li>
            <li><a href="https://t.me/username" target="_blank">Telegram</a></li>
            <li>
                <a :href="'mailto:' + profileStore.profile.email">{{
                    profileStore.profile.email
                }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    margin-bottom: 1rem;
}

.name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0;
}

.role {
    font-size: 1rem;
    color: #777;
    margin-bottom: 1rem;
}

.bio {
    font-size: 0.95rem;
    color: #444;
    max-width: 80%;
    margin-bottom: 1.5rem;
}

.links {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.links a {
    color: #007bff;
    text-decoration: none;
    font-size: 0.95rem;
}

.links a:hover {
    text-decoration: underline;
}
</style>
