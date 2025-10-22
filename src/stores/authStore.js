import { defineStore } from "pinia";
import authService from "@/services/authService";
import { useStorage } from "@vueuse/core";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  const state = useStorage("authState", {
    user: null,
    accessToken: null,
    refreshToken:  null,
    connection: true,
    loading: false,
  });

  const user = computed(() => state.value.user);
  const isAuthenticated = computed(() => state.value.user !== null);

  const login = async (credentials) => {
    state.value.loading = true;
    state.value.connection = false;
    try {
      const response = await authService.login(credentials);
      state.value.accessToken = response.access;
      state.value.refreshToken = response.refresh;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
    finally{
      await getMe()
      state.value.loading = false;
      state.value.connection = true;
      router.push('/')
    }
  };

  const getMe = async () => {
    const response = await authService.getMe();
    state.value.user = response
  }

  const logout = () => {
    state.value.user = null;
    authService.logout();
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
});
