import api from '@/plugins/api'

class AvaliationService {
  async getAllAvaliations (page = 1) {
    try{
      const { data } = await api.get('/avaliations/', { params: { page } })
      return data.results
    }
    catch(error){
      console.error('Erro ao listar as avaliações', error)
      throw error
    }
  }

  async getAvaliationById (avaliationId){
    try{
      const { data } = await api.get(`/avaliations/${avaliationId}/`)
      return data
    }
    catch(error){
      console.error('Erro ao pegar avaliação pelo ID', error)
      throw error
    }
  }

  async createAvaliation (newAvaliation){
    try{
      const { data } = await api.post('/avaliations/', newAvaliation)
      return data
    }
    catch(error){
      console.error('Erro ao criar avaliação', error)
      throw error
    }
  }

  async updateAvaliation (updateAvaliation){
    try{
      const { data } = await api.put(`/avaliations/${updateAvaliation.id}/`, updateAvaliation)
      return data
    }
    catch(error){
      console.error('Erro ao atualizar avaliação', error)
      throw error
    }
  }

  async patchAvaliation (patchAvaliation){
    try{
      const { data } = await api.patch(`/avaliations/${patchAvaliation.id}/`, patchAvaliation)
      return data
    }
    catch(error){
      console.error('Erro ao atualizar avaliação', error)
      throw error
    }
  }

  async deleteAvaliation (avaliationId){
    try{
      const { data } = await api.delete(`/avaliations/${avaliationId}/`)
      return data
    }
    catch(error){
      console.error('Erro ao deletar avaliação', error)
      throw error
    }
  }

}

export default new AvaliationService
