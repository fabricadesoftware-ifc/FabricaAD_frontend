import avaliationService from '@/services/avaliationService';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAvaliationStore = defineStore('avaliation', () => {
  const avaliations = ref([])
  const selectedAvaliation = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const connection = ref(false)

  const isLoading = computed(() => loading.value)
  const avaliationsCount = computed(() => avaliations.value.length)

  const getAllAvaliations = async () => {
    loading.value = true
    try{
      avaliations.value = await avaliationService.getAllAvaliations()
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
      connection.value = true
    }
  }

  const getAvaliationById = async (id) => {
    loading.value = true
    try{
      selectedAvaliation.value = await avaliationService.getAvaliationById(id)
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
      connection.value = true
    }
  }

  const createAvaliation = async (newAvaliation) => {
    loading.value = true
    try{
      const createdAvaliation = await avaliationService.createAvaliation(newAvaliation)
      avaliations.value.push(createdAvaliation)
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const updateAvaliation = async (avaliation) => {
    loading.value = true
    try{
      const updatedAvaliation = await avaliationService.updateAvaliation(avaliation)
      const index = avaliations.value.findIndex(a => a.id === avaliation.id)
      if(index !== -1) avaliations.value[index] = updatedAvaliation
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const patchAvaliation = async (partialAvaliation) => {
    loading.value = true
    try{
      const updatedAvaliation = await avaliationService.patchAvaliation(partialAvaliation)
      const index = avaliations.value.findIndex(a => a.id === partialAvaliation.id)
      if(index !== -1) avaliations.value[index] = updatedAvaliation
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const deleteAvaliation = async (id) =>{
    loading.value = true
    try{
      await avaliationService.deleteAvaliation(id)
      const index = avaliations.value.findIndex(a => a.id === id)
      if(index !== -1) avaliations.value.splice(index, 1)
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  return{
    avaliations,
    selectedAvaliation,
    loading,
    error,
    connection,
    isLoading,
    avaliationsCount,
    getAllAvaliations,
    getAvaliationById,
    createAvaliation,
    updateAvaliation,
    patchAvaliation,
    deleteAvaliation,
  }

})
