import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import functionService from '@/services/functionService'

export const useFunctionStore = defineStore('function', () => {
  const functions = ref([])
  const loading = ref(false)

  const isLoading = computed(() => loading.value)

  const getFunctions = async (page) => {
    loading.value = true
    try {
      const response = await functionService.getAllFunction(page)
      functions.value = response
    } catch (error) {
      console.error('Error getting functions:', error)
    } finally {
      loading.value = false
    }
  }

  const getFunctionById = async (id) => {
    loading.value = true
    try {
      const response = await functionService.getFunctionById(id)
      return response
    } catch (error) {
      console.error('Error getting function by ID:', error)
    } finally {
      loading.value = false
    }
  }

  const createFunction = async (newFunction) => {
    loading.value = true
    try {
      await functionService.createFunction(newFunction)
      getFunctions()
    } catch (error) {
      console.error('Error creating function:', error)
    } finally {
      loading.value = false
    }
  }

  const updateFunction = async (functionID, func) => {
    loading.value = true
    try {
      await functionService.updateFunction(functionID, func)
      getFunctions()
    } catch (error) {
      console.error('Error updating function:', error)
    } finally {
      loading.value = false
    }
  }

  const deleteFunction = async (functionID) => {
    loading.value = true
    try {
      await functionService.deleteFunction(functionID)
      getFunctions()
    } catch (error) {
      console.error('Error deleting function:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    functions,
    loading,
    isLoading,
    getFunctions,
    getFunctionById,
    createFunction,
    updateFunction,
    deleteFunction
  }
})
