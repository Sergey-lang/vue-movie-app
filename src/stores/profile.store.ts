import { defineStore } from 'pinia';
import type { Nullable, ProfileType } from '@shared/types';
import { ref } from 'vue';
import { getUser } from '@shared/api/profile';

export const useProfileStore = defineStore('profile', () => {
    const profile = ref<ProfileType | null>(null);
    const isLoading = ref<boolean>(false);
    const error = ref<Nullable<string>>(null);

    const getUserProfile = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const res = await getUser();
            profile.value = res;
        } catch (err: any) {
            error.value = err.message || 'Something went wrong';
        } finally {
            isLoading.value = false;
        }
    };

    return {
        profile,
        getUserProfile,
        isLoading,
        error,
    };
});
