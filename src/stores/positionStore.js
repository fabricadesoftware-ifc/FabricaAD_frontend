import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import positionService from '@/services/positionService'

export const usePositionStore = defineStore('position', () => {
  const state = reactive({
    positions: {},
    loading: false,
  })

  const isLoading = computed(() => state.loading)
  const position = computed({
    get: () => state.positions,
    set: (value) => state.positions = value,
  })
  const getPositions = async () => {
    state.loading = true
    try {
      const response = await positionService.getAllPositions()
      state.positions = response
    } catch (error) {
      console.error('Error fetching positions:', error)
    } finally {
      state.loading = false
    }
  }

  const getPositionById = async (id) => {
    state.loading = true
    try {
      const response = await positionService.getPositionById(id)
      return response
    } catch (error) {
      console.error('Error fetching position by ID:', error)
    } finally {
      state.loading = false
    }
  }

  const createPosition = async (newPosition) => {
    state.loading = true
    try {
      await positionService.createPosition(newPosition)
      getPositions()
    } catch (error) {
      console.error('Error creating position:', error)
    } finally {
      state.loading = false
    }
  }

  const updatePosition = async (positionId, position) => {
    state.loading = true
    try {
      await positionService.updatePosition(positionId, position)
      getPositions()
    } catch (error) {
      console.error('Error updating position:', error)
    } finally {
      state.loading = false
    }
  }

  const deletePosition = async (positionId) => {
    state.loading = true
    try {
      await positionService.deletePosition(positionId)
      getPositions()
    } catch (error) {
      console.error('Error deleting position:', error)
    } finally {
      state.loading = false
    }
  }

  return {
    position,
    isLoading,
    getPositions,
    getPositionById,
    createPosition,
    updatePosition,
    deletePosition
  }
})
