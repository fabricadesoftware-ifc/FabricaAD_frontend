import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import telephoneService from '@/services/telephoneService';

export const useTelephoneStore = defineStore('telephone', () => {
  const telephones = ref([]);
  const selectTelephone = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const connection = ref(false);

  const isLoading = computed(() => loading.value);
  const telephonesCount = computed(() => telephones.value.length);

  const getTelephones = async () => {
    loading.value = true;
    try {
      telephones.value = await telephoneService.getAllTelephones();
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
      connection.value = true;
    }
  };

  const getTelephoneById = async (id) => {
    loading.value = true;
    try {
      selectTelephone.value = await telephoneService.getTelephoneById(id);
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
      connection.value = true;
    }
  };

  const createTelephone = async (newTelephone) => {
    loading.value = true;
    try {
      const created = await telephoneService.createTelephone(newTelephone);
      telephones.value.push(created);
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  const updateTelephone = async (telephone) => {
    loading.value = true;
    try {
      const updated = await telephoneService.updateTelephone(telephone);
      const index = telephones.value.findIndex(t => t.id === telephone.id);
      if (index !== -1) telephones.value[index] = updated;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  const deleteTelephone = async (id) => {
    loading.value = true
    try {
      await telephoneService.deleteTelephone(id)
      const index = telephones.value.findIndex(t => t.id === id);
      if (index !== -1) telephones.value.splice(index, 1);
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return {
    telephones,
    selectTelephone,
    error,
    loading,
    connection,
    isLoading,
    telephonesCount,
    getTelephones,
    getTelephoneById,
    createTelephone,
    updateTelephone,
    deleteTelephone,
  };
});
