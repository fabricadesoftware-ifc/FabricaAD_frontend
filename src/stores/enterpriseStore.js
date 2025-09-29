import enterpriseService from '@/services/enterpriseService';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useEnterpriseStore = defineStore('enterprise', () => {

  const state = reactive({
    enterprises: [],
    enterprise: {},
    loading: false,
    connection: false,
  })

  const isLoading = computed(() => state.loading)
  const connection = computed(() => state.connection)
  const enterprises = computed(() => state.enterprises)
  const enterprise = computed(() => state.enterprise)

  const getEnterprises = async () => {
    state.loading = true
    try{
      state.enterprises = await enterpriseService.getAllEnterprises()
    }
    catch(error){
      console.error('error in get enterprises:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const getEnterpriseById = async (id) => {
    state.loading = true
    try{
      const response = await enterpriseService.getEnterpriseById(id)
      state.enterprise = response
    }
    catch(error){
      console.error('error in get enterprise by id:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const createEnterprise = async (newEnterprise) => {
    state.loading = true
    try{
      await enterpriseService.createEnterprise(newEnterprise)
      enterprises.value.push(newEnterprise)
    }
    catch(error){
      console.error('error in create enterprise:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const updateEnterprise = async (enterprise) => {
    state.loading = true
    try{
      await enterpriseService.updateEnterprise(enterprise)
      getEnterprises()
    }
    catch(error){
      console.error('error in update enterprises:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const patchEnterprise = async (enterprisePartial) => {
    state.loading = true
    try{
      await enterpriseService.patchEnterprise(enterprisePartial)
      getEnterprises()
    }
    catch(error){
      console.error('error in update enterprise:' + error)
    }
    finally {
      state.loading = false
      state.connection = true
    }
  }

  const deleteEnterprise = async (id) => {
    state.loading = true
    try{
      await enterpriseService.deleteEnterprise(id)
    }
    catch (error){
      console.error('error in delete enterprise:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
      getEnterprises()
    }
  }

  return {
    enterprises,
    connection,
    enterprise,
    isLoading,
    getEnterprises,
    getEnterpriseById,
    createEnterprise,
    updateEnterprise,
    patchEnterprise,
    deleteEnterprise,
  }
})
