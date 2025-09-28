import { defineStore } from "pinia";
import userService from "@/services/userService";
import router from "@/router";
import { useStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
  const state = useStorage("authState", {
    user: null,
    accessToken: localStorage.getItem("access_token") || null,
    refreshToken: localStorage.getItem("refresh_token") || null,
  });

  const user = computed(() => state.value.user);
  const isAuthenticated = computed(() => state.value.user !== null);

  const login = async (credentials) => {
    console.log(credentials)
    try {
      const response = await userService.login(credentials);
      state.value.accessToken = response.access;
      state.value.refreshToken = response.refresh;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
    finally{
      await getMe()
    }
  };

  const getMe = async () => {
    const response = await userService.getMe();
    state.value.user = response;
    console.log()
  }

  const logout = () => {
    user.value = null;
    userService.logout();
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
});
