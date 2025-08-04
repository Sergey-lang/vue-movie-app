<script setup lang="ts">
import ProfileIcon from '@components/Icons/ProfileIcon.vue';
import ExitIcon from '@components/Icons/ExitIcon.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import { useProfileStore } from '@/stores/profile.store';
import ConfirmPopup from '@components/ConfirmPopup.vue';

const authStore = useAuthStore();
const profileStore = useProfileStore();
const router = useRouter();
const isOpened = ref<boolean>(false);

onMounted(() => {
    profileStore.getUserProfile();
})

const logout = () => {
    authStore.clearToken();
    router.push({ name: 'auth' });
};

</script>

<template>
    <header class="header">
        <RouterLink to="/main" class="logo">
            <img src="/logo.svg" alt="logo" class="logo" />
        </RouterLink>
        <slot />
        <ul class="profile-bar">
            <li>
                <RouterLink to="/profile" active-class="active-link" title="View Profile">
                    <div class="profile-link">
                        <ProfileIcon class="profile-icon" />
                        <p>{{ profileStore.profile.name }}</p>
                    </div>
                </RouterLink>
            </li>
            <li @click="isOpened = !isOpened">
                <a href="#" aria-label="Logout" title="Logout">
                    <ExitIcon class="exit-icon" />
                </a>
            </li>
        </ul>
        <ConfirmPopup
            :is-opened="isOpened"
            text="Are you sure you want to log out?"
            @cancel="isOpened = false"
            @ok="logout"
        />
    </header>
</template>

<style scoped>
.header {
    height: 8.1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.profile-bar {
    display: flex;
    align-items: center;
    gap: 0.56rem;
}

.profile-link {
    display: flex;
    align-items: center;
    gap: 0.56rem;
}

.active-link p {
    font-weight: bold;
}

.profile-icon {
    cursor: pointer;
}

.exit-icon {
    width: 1rem;
    height: auto;
    cursor: pointer;
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        padding-top: 1rem;
        padding-bottom: 1rem;
        gap: 0.5rem;
        height: auto;
    }

    .profile-bar {
        display: none;
    }
}
</style>
