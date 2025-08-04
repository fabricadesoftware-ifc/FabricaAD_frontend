import api from '@/plugins/api'

class EnterpriseService {
  async getAllEnterprises (page = 1, name = '') {
    try{
      const { data } = await api.get('/enterprises/', { params: { page, name } })
      return data.results
    }
    catch(error){
      console.error('Erro ao listar empresas', error)
      throw error
    }
  }

  async getEnterpriseById (enterpriseId){
    try{
      const { data } = await api.get(`/enterprises/${enterpriseId}`)
      return data
    }
    catch(error){
      console.error('Erro ao pegar empresa pelo Id', error)
      throw error
    }
  }

  async createEnterprise (newEnterprise){
    try{
      const { data } = await api.post('/enterprises/', newEnterprise)
      return data
    }
    catch(error){
      console.error('Erro ao criar empresa', error)
      throw error
    }
  }

  async updateEnterprise (updateEnterprise) {
    try{
      const { data } = await api.put(`/enterprises/${updateEnterprise.id}/`, updateEnterprise)
      return data
    }
    catch(error){
      console.error('Erro ao atualizar empresa', error)
      throw error
    }
  }

  async patchEnterprise (patchEnterprise) {
    try{
      const { data } = await api.patch(`/enterprises/${patchEnterprise.id}/`, patchEnterprise)
      return data
    }
    catch(error){
      console.error('Erro ao atualizar empresa', error)
      throw error
    }
  }

  async deleteEnterprise (enterpriseId) {
    try{
      const { data } = await api.delete(`/enterprises/${enterpriseId}/`)
      return data
    }
    catch(error){
      console.error('Erro ao deletar empresa', error)
      throw error
    }
  }
}

export default new EnterpriseService
