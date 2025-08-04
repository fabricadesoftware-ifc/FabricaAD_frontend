import enterpriseService from '@/services/enterpriseService';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useEnterpriseStore = defineStore('enterprise', () => {
  const enterprises = ref([])
  const selectedEnterprise = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const connection = ref(false)

  const isLoading = computed(() => loading.value)
  const enterprisesCount = computed(() => enterprises.value.length)

  const getEnterprises = async () => {
    loading.value = true
    try{
      enterprises.value = await enterpriseService.getAllEnterprises()
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
      connection.value = true
    }
  }

  const getEnterpriseById = async (id) => {
    loading.value = true
    try{
      selectedEnterprise.value = await enterpriseService.getEnterpriseById(id)
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
      connection.value = true
    }
  }

  const createEnterprise = async (newEnterprise) => {
    loading.value = true
    try{
      const created = await enterpriseService.createEnterprise(newEnterprise)
      enterprises.value.push(created)
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const updateEnterprise = async (enterprise) => {
    loading.value = true
    try{
      const updated = await enterpriseService.updateEnterprise(enterprise)
      const index = enterprises.value.findIndex(e => e.id === updated.id)
      if(index !== -1) enterprises.value[index] = updated
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const patchEnterprise = async (enterprisePartial) => {
    loading.value = true
    try{
      const updated = await enterpriseService.patchEnterprise(enterprisePartial)
      const index = enterprises.value.findIndex(e => e.id === enterprisePartial.id)
      if(index !== -1) enterprises.value[index] = updated
    }
    catch(e){
      error.value = e
    }
    finally {
      loading.value = false
    }
  }

  const deleteEnterprise = async (id) => {
    loading.value = true
    try{
      await enterpriseService.deleteEnterprise(id)
      const index = enterprises.value.findIndex(e => e.id === id)
      if(index !== -1) enterprises.value.splice(index,)
    }
    catch (e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  return {
    enterprises,
    selectedEnterprise,
    loading,
    error,
    connection,
    isLoading,
    enterprisesCount,
    getEnterprises,
    getEnterpriseById,
    createEnterprise,
    updateEnterprise,
    patchEnterprise,
    deleteEnterprise,
  }
})
