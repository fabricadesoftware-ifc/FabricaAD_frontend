import avaliationService from '@/services/avaliationService';
import { a } from 'node_modules/unplugin-vue-router/dist/types-CTGkmk9e';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useAvaliationStore = defineStore('avaliation', () => {
  const state = reactive({
    avaliations: [],
    avaliation: {},
    loading: false,
    connection: false,
  })

  const isLoading = computed(() => state.loading)
  const connection = computed(() => state.connection)
  const avaliation = computed(() => state.avaliation)
  const avaliations = computed(() => state.avaliations)


  const getAllAvaliations = async () => {
    state.loading = true
    try{
      const response = await avaliationService.getAllAvaliations()
      state.avaliation = response
    }
    catch(error){
      console.error('error in fetch all avaliation:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const getAvaliationById = async (id) => {
    state.loading = true
    try{
      const response = await avaliationService.getAvaliationById(id)
      state.avaliation = response
    }
    catch(error){
      console.error('error in fetch avaliation by id:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const createAvaliation = async (newAvaliation) => {
    state.loading = true
    try{
      await avaliationService.createAvaliation(newAvaliation)
      getAllAvaliations()
    }
    catch(error){
      console.error('error in create avaliation:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const updateAvaliation = async (AvaliationId, avaliation) => {
    state.loading = true
    try{
      await avaliationService.updateAvaliation(AvaliationId, avaliation)
    }
    catch(error){
      console.error('error in update avaliation:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const patchAvaliation = async (AvaliationId, partialAvaliation) => {
    state.loading = true
    try{
      await avaliationService.patchAvaliation(AvaliationId, partialAvaliation)
    }
    catch(error){
      console.error('error in patch avaliation:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const deleteAvaliation = async (AvaliationId) =>{
    state.loading = true
    try{
      await avaliationService.deleteAvaliation(AvaliationId)
    }
    catch(error){
      console.error('error in delete avaliation:'+ error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  return{
    isLoading,
    avaliation,
    avaliations,
    connection,
    getAllAvaliations,
    getAvaliationById,
    createAvaliation,
    updateAvaliation,
    patchAvaliation,
    deleteAvaliation,
  }
})
