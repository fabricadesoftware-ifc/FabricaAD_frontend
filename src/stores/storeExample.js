import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ExampleService } from '@/services'

export const useExampleStore = defineStore('example', () => {
  // State
  const datas = ref([]) // All data
  const selectedData = ref(null) // Selected item
  const datasBySomething = ref([]) // Filtered data
  const loading = ref(false) // Loading state
  const error = ref(null) // Error state
  const connection = ref(false) // Connection status (used after first fetch)

  // Getters
  const isLoading = computed(() => loading.value)
  const datasCount = computed(() => datas.value.length)

  // Fetch all data
  const getData = async () => {
    loading.value = true
    try {
      datas.value = await ExampleService.getData()
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
      connection.value = true
    }
  }

  // Fetch data filtered by something (e.g. an ID)
  const getDataBySomething = async (id) => {
    loading.value = true
    try {
      datasBySomething.value = await ExampleService.getDataBySomething(id)
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
      connection.value = true
    }
  }

  // Create new item
  const createData = async (newData) => {
    loading.value = true
    try {
      const created = await ExampleService.createData(newData)
      datas.value.push(created)
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }

  // Update existing item
  const updateData = async (data) => {
    loading.value = true
    try {
      const updated = await ExampleService.updateData(data)
      const index = datas.value.findIndex(d => d.id === data.id)
      if (index !== -1) datas.value[index] = updated
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }

  // Delete item by ID
  const deleteData = async (id) => {
    loading.value = true
    try {
      const index = datas.value.findIndex(d => d.id === id)
      if (index !== -1) datas.value.splice(index, 1)
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }

  // Expose state and methods
  return {
    datas,
    selectedData,
    datasBySomething,
    loading,
    error,
    connection,
    isLoading,
    datasCount,
    getData,
    getDataBySomething,
    createData,
    updateData,
    deleteData,
  }
})
