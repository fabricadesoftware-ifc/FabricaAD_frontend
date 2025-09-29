import { defineStore } from 'pinia';
import { computed } from 'vue';
import telephoneService from '@/services/telephoneService';

export const useTelephoneStore = defineStore('telephone', () => {
  const state = reactive({
    telephones: [],
    telephone: {},
    loading: false,
    connection: false,
  });

  const isLoading = computed(() => state.loading);
  const telephones = computed(() => state.telephones);
  const telephone = computed(() => state.telephone);

  const getTelephones = async (page) => {
    state.loading = true;
    try {
      const results = await telephoneService.getAllTelephones(page);
      return results;
    } catch (error) {
      console.error('Error getting telephones:', error);
    } finally {
      state.loading = false;
      state.connection = true;
    }
  };

  const getTelephoneById = async (id) => {
    state.loading = true;
    try {
      const results = await telephoneService.getTelephoneById(id);
      return results;
    } catch (error) {
      console.error('Error getting telephone by ID:', error);
    } finally {
      state.loading = false;
      state.connection = true;
    }
  };

  const createTelephone = async (newTelephone) => {
    state.loading = true;
    try {
      await telephoneService.createTelephone(newTelephone);
      getTelephones()
    } catch (error) {
      console.error('Error creating telephone:', error);
    } finally {
      state.loading = false;
      state.connection = true;
    }
  };

  const updateTelephone = async (telephoneID, telephone) => {
    state.loading = true;
    try {
      await telephoneService.updateTelephone(telephoneID, telephone);
      getTelephones()
    } catch (error) {
      console.error('Error updating telephone:', error);
    } finally {
      state.loading = false;
      state.connection = true;
    }
  };

  const deleteTelephone = async (telephoneID) => {
    state.loading = true;
    try {
      await telephoneService.deleteTelephone(telephoneID);
      getTelephones()
    } catch (error) {
      console.error('Error deleting telephone:', error);
    } finally {
      state.loading = false;
      state.connection = true;
    }
  };

  return {
    isLoading,
    telephone,
    telephones,
    getTelephones,
    getTelephoneById,
    createTelephone,
    updateTelephone,
    deleteTelephone,
  };
});
