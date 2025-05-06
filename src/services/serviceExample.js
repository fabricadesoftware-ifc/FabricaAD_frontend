import api from '@/plugins/api'

// Handles API requests for example data
class ExampleService {
  // Get all data
  async getData() {
    try {
      const { data } = await api.get('/example-url')
      return data.results
    } catch (error) {
      console.error('Error in getData:', error)
      throw error
    }
  }

  // Get filtered data by something (e.g. an ID), with pagination
  async getDataBySomething(somethingId, page = 1) {
    try {
      const { data } = await api.get(`/example-url/?page=${page}&something_id=${somethingId}`)
      return data.results
    } catch (error) {
      console.error('Error in getDataBySomething:', error)
      throw error
    }
  }

  // Create new data
  async createData(newData) {
    try {
      const { data } = await api.post('/example-url/', newData)
      return data.results
    } catch (error) {
      console.error('Error in createData:', error)
      throw error
    }
  }

  // Update existing data
  async updateData(updatedData) {
    try {
      const { data } = await api.put(`/example-url/${updatedData.id}/`, updatedData)
      return data.results
    } catch (error) {
      console.error('Error in updateData:', error)
      throw error
    }
  }

  // Delete data by ID
  async deleteData(id) {
    try {
      const { data } = await api.delete(`/example-url/${id}/`)
      return data.results
    } catch (error) {
      console.error('Error in deleteData:', error)
      throw error
    }
  }
}

export default new ExampleService()
