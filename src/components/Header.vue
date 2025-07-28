<script setup lang="ts">
import ProfileIcon from '@components/Icons/ProfileIcon.vue';
</script>

<template>
    <header class="header">
        <RouterLink to="/main" class="logo">
            <img src="/logo.svg" alt="logo" class="logo" />
        </RouterLink>
        <slot />
        <div class="profile-bar">
            <RouterLink to="/profile" active-class="active-link">
                <div class="profile-link">
                    <ProfileIcon class="profile-icon" />
                    <p>Developer</p>
                </div>
            </RouterLink>
        </div>
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
