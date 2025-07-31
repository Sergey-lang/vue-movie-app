<script setup lang="ts">
import { ref, watch } from 'vue';
import Button from '@components/Button.vue';
import Input from '@components/Input.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';

const form = ref<{ email?: string; password?: string }>({ email: 'john@mail.com', password: 'changeme' });
const authStore = useAuthStore();
const router = useRouter();

watch(
    () => authStore.getToken,
    () => {
        if (authStore.getToken) {
            router.push('/main');
        }
    },
);

const onSubmit = (event: Event) => {
    event.preventDefault();
    if (!form.value.email || !form.value.password) {
        return;
    }
    authStore.login(form.value.email, form.value.password);
    form.value = {};
};

</script>

<template>
    <div class="login">
        <form class="login__form" @submit="onSubmit">
            <h1>LOGIN</h1>
            <Input placeholder="Email" autocomplete="email" v-model="form.email" />
            <Input placeholder="Password" type="password" autocomplete="current-password" v-model="form.password" />
            <Button type="submit" class="login__form_btn">Login</Button>
        </form>
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
    border-radius: 1rem;
}

.login__form_btn {
    width: 100%;
}

</style>
