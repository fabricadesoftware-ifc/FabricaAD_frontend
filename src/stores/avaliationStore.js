import avaliationService from '@/services/avaliationService';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAvaliationStore = defineStore('avaliation', () => {
  const loading = ref(false)
  const avaliations = ref([])
  const isLoading = computed(() => loading.value)
  const avaliationsCount = computed(() => avaliations.value.length)

  const getAllAvaliations = async () => {
    loading.value = true
    try{
      const response = await avaliationService.getAllAvaliations()
      avaliations.value = response
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const getAvaliationById = async (id) => {
    loading.value = true
    try{
      const response = await avaliationService.getAvaliationById(id)
      return response
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const createAvaliation = async (newAvaliation) => {
    loading.value = true
    try{
      await avaliationService.createAvaliation(newAvaliation)
      getAllAvaliations()
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const updateAvaliation = async (AvaliationId, avaliation) => {
    loading.value = true
    try{
      await avaliationService.updateAvaliation(AvaliationId, avaliation)
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const patchAvaliation = async (AvaliationId, partialAvaliation) => {
    loading.value = true
    try{
      await avaliationService.patchAvaliation(AvaliationId, partialAvaliation)
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  const deleteAvaliation = async (AvaliationId) =>{
    loading.value = true
    try{
      await avaliationService.deleteAvaliation(AvaliationId)
    }
    catch(error){
      console.error(error)
    }
    finally{
      loading.value = false
    }
  }

  return{
    loading,
    isLoading,
    avaliationsCount,
    avaliations,
    getAllAvaliations,
    getAvaliationById,
    createAvaliation,
    updateAvaliation,
    patchAvaliation,
    deleteAvaliation,
  }

})
