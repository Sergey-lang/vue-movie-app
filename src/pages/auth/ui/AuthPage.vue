<script setup lang="ts">
import Button from '@components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToMain = () => {
    router.push({
        path: '/main',
    });
};
</script>

<template>
    <div class="login">
        <div class="login__form">
            <h1>LOGIN</h1>
            <Button @click="redirectToMain" class="login__form_btn">Login</Button>
        </div>
    </div>
</template>

<style scoped>
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 6rem;
    border: 0.2rem dashed black;
    border-radius: 1rem;
}

.login__form_btn {
    width: 100%;
}

</style>
