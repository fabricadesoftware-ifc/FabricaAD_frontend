import sectorService from '@/services/sectorService';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const usesectorStore = defineStore('sector', () => {
  const state = reactive({
    sectors: [],
    sector: {},
    loading: false,
    connection: false,
  })

  const isLoading = computed(() => state.loading)
  const connection = computed(() => state.connection)
  const sector = computed(() => state.sector)
  const sectors = computed(() => state.sectors)


  const getAllsectors = async () => {
    state.loading = true
    try{
      const response = await sectorService.getAllsectors()
      state.sector = response
    }
    catch(error){
      console.error('error in fetch all sector:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const getSectorById = async (id) => {
    state.loading = true
    try{
      const response = await sectorService.getsectorById(id)
      state.sector = response
    }
    catch(error){
      console.error('error in fetch sector by id:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const createSector = async (newsector) => {
    state.loading = true
    try{
      await sectorService.createsector(newsector)
      getAllsectors()
    }
    catch(error){
      console.error('error in create sector:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const updateSector = async (sectorId, sector) => {
    state.loading = true
    try{
      await sectorService.updatesector(sectorId, sector)
    }
    catch(error){
      console.error('error in update sector:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const patchSector = async (sectorId, partialsector) => {
    state.loading = true
    try{
      await sectorService.patchsector(sectorId, partialsector)
    }
    catch(error){
      console.error('error in patch sector:' + error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const deleteSector = async (sectorId) =>{
    state.loading = true
    try{
      await sectorService.deletesector(sectorId)
    }
    catch(error){
      console.error('error in delete sector:'+ error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  return{
    isLoading,
    sector,
    sectors,
    connection,
    getAllsectors,
    getSectorById,
    createSector,
    updateSector,
    patchSector,
    deleteSector,
  }
})
