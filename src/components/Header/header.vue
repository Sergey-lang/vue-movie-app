<script setup lang="ts">
import ProfileIcon from '@components/icons/profile-icon.vue';
</script>

<template>
    <header class="header">
        <div class="logo">
            <img src="/logo.svg" alt="logo" class="logo" />
        </div>
        <slot />
        <div class="profile-bar">
            <ProfileIcon class="profile-icon" />
            <p>Your Name</p>
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
