import api from '@/plugins/api'

class TelephoneService {

  async getAllTelephones (page) {
    try{
      const { data } = await api.get('/telephones', { params: { page } })
      return data
    }
    catch(error){
      console.error('Erro ao listar todos os telefones', error)
      throw error
    }
  }

  async getTelephoneById (telephoneId){
    try{
      const { data } = await api.get(`/telephones/${telephoneId}`)
      return data
    }
    catch(error){
      console.error('Erro ao pegar telephone pelo id', error)
      throw error
    }
  }

  async createTelephone (newTelephone) {
    try{
      await api.post('/telephones/', newTelephone)
    }
    catch(error) {
      console.error('Erro ao criar novo telefone:', error)
      throw error
    }
  }

  async updateTelephone (telephoneId, updateTelephone) {
    try{
      await api.put(`/telephones/${telephoneId}/`, updateTelephone)
    }
    catch(error){
      console.error('Erro ao atualizar telephone', error)
      throw error
    }
  }

  async deleteTelephone (telephoneId){
    try{
      await api.delete(`/telephones/${telephoneId}/`)
    }
    catch(error){
      console.error('Erro ao deletar telefone', error)
      throw error
    }
  }

}

export default new TelephoneService()
