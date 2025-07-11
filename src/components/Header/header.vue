<script setup lang="ts">
import ProfileIcon from '@/assets/icons/profile.svg'
import Input from '@components/Input/input.vue';
</script>

<template>
    <header class="header">
        <div class="logo">
            <img src="/logo.svg" alt="logo" class="logo" />
        </div>
        <div class="search-bar">
            <Input value="Batman" icon/>
        </div>
        <div class="profile-bar">
            <ProfileIcon />
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
    background: #ffffff;
}

.profile-bar {
    display: flex;
    align-items: center;
    gap: 0.56rem;
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
