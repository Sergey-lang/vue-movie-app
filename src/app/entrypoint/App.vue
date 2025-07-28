<script setup lang="ts">
import BaseContainer from '@shared/ui/Container.vue';
import HeaderLayout from '@/widgets/HeaderLayout/HeaderLayout.vue';
</script>

<template>
    <BaseContainer>
        <HeaderLayout />
        <main>
            <RouterView />
        </main>
    </BaseContainer>
</template>
