import api from '@/plugins/api'

class sectorService {
  async getAllsectors () {
    try {
      const { data } = await api.get('/sector/')
      return data
    } catch (error) {
      console.error('Error in getAllsectors:', error)
      throw error
    }
  }

  async getsectorById (sectorId) {
    try {
      const { data } = await api.get(`/sectors/${sectorId}/`)
      return data
    } catch (error) {
      console.error('Error getting sector by ID:', error)
      throw error
    }
  }

  async createSector (newsector) {
    try {
      await api.post('/sectors/', newsector)
    } catch (error) {
      console.error('Error in create sector:', error)
      throw error
    }
  }

  async updateSector (updatesector) {
    try {
      await api.put(`/sectors/${updatesector.id}`, updatesector)
    } catch (error) {
      console.error('Error in update sector:', error)
      throw error
    }
  }

  async deleteSector (sectorId) {
    try {
      await api.delete(`/sectors/${sectorId}/`)
    } catch (error) {
      console.error('Error in delete sector:', error)
      throw error
    }
  }
}

export default new sectorService()
