import api from '@/plugins/api'

class TelephoneService {

  async getAllTelephones (page = 1, number = '', type = '') {
    try{
      const { data } = await api.get('/telephones', { params: { page, number, type } })
      return data.results
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
      const { data } = await api.post('/telephones/', newTelephone)
      return data
    }
    catch(error) {
      console.error('Erro ao criar novo telefone:', error)
      throw error
    }
  }

  async updateTelephone (updateTelephone) {
    try{
      const { data } = await api.put(`/telephones/${updateTelephone.id}/`, updateTelephone)
      return data
    }
    catch(error){
      console.error('Erro ao atualizar telephone', error)
      throw error
    }
  }

  async deleteTelephone (telephoneId){
    try{
      const { data } = await api.delete(`/telephones/${telephoneId}/`)
      return data
    }
    catch(error){
      console.error('Erro ao deletar telefone', error)
      throw error
    }
  }

}

export default new TelephoneService()
