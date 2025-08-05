<script setup lang="ts">
import Container from '@shared/ui/Container.vue';
import HeaderLayout from '@widgets/HeaderLayout/HeaderLayout.vue';
</script>

<template>
    <Container>
        <HeaderLayout />
        <main>
            <RouterView />
        </main>
    </Container>
</template>
