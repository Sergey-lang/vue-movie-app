<script setup lang="ts">
import Button from '@components/Button.vue';

const { isOpened, text } = defineProps<{
    isOpened: boolean;
    text: string;
}>();

const emit = defineEmits<{
    (e: 'ok'): void;
    (e: 'cancel'): void;
}>();
</script>

<template>
    <Transition name="fade">
        <Teleport to="body">
            <div class="cover" v-if="isOpened">
                <div class="popup">
                    {{ text }}
                    <div class="popup-actions">
                        <Button @click="emit('ok')">Yes</Button>
                        <Button @click="emit('cancel')">No</Button>
                    </div>
                </div>
            </div>
        </Teleport>
    </Transition>
</template>

<style scoped>
.cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup {
    padding: 3rem;
    border-radius: 1rem;
    background: white;
}

.popup-actions {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
