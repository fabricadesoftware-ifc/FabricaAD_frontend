import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ExampleService } from '@/services'

export const useExampleStore = defineStore('example', () => {
  // State
  const selectedData = ref(null) // Selected item
  const loading = ref(false) // Loading state

  // Getters
  const isLoading = computed(() => loading.value)

  // Fetch all data
  const getData = async () => {
    loading.value = true
    try {
      const response = await ExampleService.getData()
      return response
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      loading.value = false
    }
  }

  // Fetch data filtered by something (e.g. an ID)
  const getDataBySomething = async (id) => {
    loading.value = true
    try {
      const response = await ExampleService.getDataBySomething(id)
      return response
    } catch (error) {
      console.error('Error fetching data by something:', error)
    } finally {
      loading.value = false
    }
  }

  // Create new item
  const createData = async (newData) => {
    loading.value = true
    try {
      await ExampleService.createData(newData)
    } catch (error) {
      console.error('Error creating data:', error)
    } finally {
      loading.value = false
    }
  }

  // Update existing item
  const updateData = async (id, data) => {
    loading.value = true
    try {
      await ExampleService.updateData(id, data)
    } catch (error) {
      console.error('Error updating data:', error)
    } finally {
      loading.value = false
    }
  }

  // Delete item by ID
  const deleteData = async (id) => {
    loading.value = true
    try {
      await ExampleService.deleteData(id)
    } catch (error) {
      console.error('Error deleting data:', error)
    } finally {
      loading.value = false
    }
  }

  // Expose state and methods
  return {
    datas,
    selectedData,
    loading,
    isLoading,
    datasCount,
    getData,
    getDataBySomething,
    createData,
    updateData,
    deleteData,
  }
})
