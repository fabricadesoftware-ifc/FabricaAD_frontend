import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import telephoneService from '@/services/telephoneService';

export const useTelephoneStore = defineStore('telephone', () => {

  const loading = ref(false);
  const isLoading = computed(() => loading.value);

  const getTelephones = async (page) => {
    loading.value = true;
    try {
      const results = await telephoneService.getAllTelephones(page);
      return results;
    } catch (error) {
      console.error('Error getting telephones:', error);
    } finally {
      loading.value = false;
    }
  };

  const getTelephoneById = async (id) => {
    loading.value = true;
    try {
      const results = await telephoneService.getTelephoneById(id);
      return results;
    } catch (error) {
      console.error('Error getting telephone by ID:', error);
    } finally {
      loading.value = false;
    }
  };

  const createTelephone = async (newTelephone) => {
    loading.value = true;
    try {
      await telephoneService.createTelephone(newTelephone);
      getTelephones()
    } catch (error) {
      console.error('Error creating telephone:', error);
    } finally {
      loading.value = false;
    }
  };

  const updateTelephone = async (telephoneID, telephone) => {
    loading.value = true;
    try {
      await telephoneService.updateTelephone(telephoneID, telephone);
      getTelephones()
    } catch (error) {
      console.error('Error updating telephone:', error);
    } finally {
      loading.value = false;
    }
  };

  const deleteTelephone = async (telephoneID) => {
    loading.value = true;
    try {
      await telephoneService.deleteTelephone(telephoneID);
      getTelephones()
    } catch (error) {
      console.error('Error deleting telephone:', error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    isLoading,
    getTelephones,
    getTelephoneById,
    createTelephone,
    updateTelephone,
    deleteTelephone,
  };
});
