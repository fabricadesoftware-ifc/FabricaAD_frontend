import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import positionService from '@/services/positionService'
import { get } from 'node:http'

export const usePositionStore = defineStore('position', () => {
  const positions = ref([])
  const loading = ref(false)

  const isLoading = computed(() => loading.value)

  const getPositions = async () => {
    loading.value = true
    try {
      const response = await positionService.getAllPositions()
      return response
    } catch (error) {
      console.error('Error fetching positions:', error)
    } finally {
      loading.value = false
    }
  }

  const getPositionById = async (id) => {
    loading.value = true
    try {
      const response = await positionService.getPositionById(id)
      return response
    } catch (error) {
      console.error('Error fetching position by ID:', error)
    } finally {
      loading.value = false
    }
  }

  const createPosition = async (newPosition) => {
    loading.value = true
    try {
      await positionService.createPosition(newPosition)
      getPositions()
    } catch (error) {
      console.error('Error creating position:', error)
    } finally {
      loading.value = false
    }
  }

  const updatePosition = async (positionId, position) => {
    loading.value = true
    try {
      await positionService.updatePosition(positionId, position)
      getPositions()
    } catch (error) {
      console.error('Error updating position:', error)
    } finally {
      loading.value = false
    }
  }

  const deletePosition = async (positionId) => {
    loading.value = true
    try {
      await positionService.deletePosition(positionId)
      getPositions()
    } catch (error) {
      console.error('Error deleting position:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    positions,
    loading,
    isLoading,
    getPositions,
    getPositionById,
    createPosition,
    updatePosition,
    deletePosition
  }
})
