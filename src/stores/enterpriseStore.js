import enterpriseService from '@/services/enterpriseService';
import { get } from 'node_modules/axios/index.cjs';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useEnterpriseStore = defineStore('enterprise', () => {
  const enterprises = ref([])
  const loading = ref(false)

  const isLoading = computed(() => loading.value)
  const enterprisesCount = computed(() => enterprises.value.length)

  const getEnterprises = async () => {
    loading.value = true
    try{
      enterprises.value = await enterpriseService.getAllEnterprises()
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const getEnterpriseById = async (id) => {
    loading.value = true
    try{
      const response = await enterpriseService.getEnterpriseById(id)
      return response
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const createEnterprise = async (newEnterprise) => {
    loading.value = true
    try{
      await enterpriseService.createEnterprise(newEnterprise)
      enterprises.value.push(newEnterprise)
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const updateEnterprise = async (enterprise) => {
    loading.value = true
    try{
      await enterpriseService.updateEnterprise(enterprise)
      getEnterprises()
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const patchEnterprise = async (enterprisePartial) => {
    loading.value = true
    try{
      await enterpriseService.patchEnterprise(enterprisePartial)
      getEnterprises()
    }
    catch(error){
      console.error(error)
    }
    finally {
      loading.value = false
    }
  }

  const deleteEnterprise = async (id) => {
    loading.value = true
    try{
      await enterpriseService.deleteEnterprise(id)
    }
    catch (error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  return {
    enterprises,
    loading,
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
