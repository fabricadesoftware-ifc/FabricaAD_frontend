import { defineStore } from 'pinia'
import { computed } from 'vue'
import functionService from '@/services/functionService'

export const useFunctionStore = defineStore('function', () => {
  const state = reactive({
    functions: [],
    function: {},
    subordinates: [],
    subordinate: {},
    loading: false,
    connection: false,
  })

  const loading = computed(() => state.loading)
  const subordinates = computed({
    get: () => state.subordinates,
    set: (value) => state.subordinates = value,
  })
  const subordinate = computed(() => state.subordinate)
  const functions = computed(() => state.functions)
  const functionId = computed(() => state.function)

  const getFunctions = async (page) => {
    state.loading = true
    try {
      const response = await functionService.getAllFunction(page)
      state.loading = response
    } catch (error) {
      console.error('Error getting functions:', error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const SearchFunction = async (search) => {
    state.loading = true
    try {
      const response = await functionService.getAllFunction(page)
      state.functions = response
    } catch (error) {
      console.error('Error getting functions:', error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const SearchSubordinatesFunction = async (search) => {
    state.loading = true
    try {
      const response = await functionService.SearchSubordinates(search)
      state.subordinates = response
      console.log(state.subordinates)

    } catch (error) {
      console.error('Error getting functions:', error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const getFunctionById = async (id) => {
    state.loading = true
    try {
      const response = await functionService.getFunctionById(id)
      return response
    } catch (error) {
      console.error('Error getting function by ID:', error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const createFunction = async (newFunction) => {
    state.loading = true
    try {
      await functionService.createFunction(newFunction)
      getFunctions()
    } catch (error) {
      console.error('Error creating function:', error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const updateFunction = async (functionID, func) => {
    state.loading = true
    try {
      await functionService.updateFunction(functionID, func)
      getFunctions()
    } catch (error) {
      console.error('Error updating function:', error)
    } finally {
      state.loading = false
      state.connection = true
    }
  }

  const deleteFunction = async (functionID) => {
    state.loading = true
    try {
      await functionService.deleteFunction(functionID)
      getFunctions()
    } catch (error) {
      console.error('Error deleting function:', error)
    } finally {
      state.loading = false
    }
  }

  const getFunctionSubordinates = async (page) => {
    state.loading = true
    try {
      state.subordinates = await functionService.getFunctionSubordinates(page)
      console.log(state.subordinates)
    }
    catch (error) {
      console.error('Error getting subordinates:', error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  return {
    functionId,
    subordinate,
    subordinates,
    functions,
    loading,
    getFunctions,
    getFunctionById,
    createFunction,
    updateFunction,
    deleteFunction,
    getFunctionSubordinates,
    SearchFunction,
    SearchSubordinatesFunction,
  }
})
