import api from '@/plugins/api'

class FunctionService {
  async getAllFunction(page) {
    try {
      const { data } = await api.get('functions/', { params: { page } });
      return data;
    } catch (error) {
      console.error('Erro ao listar as funções', error);
      throw error;
    }
  }

  async getFunctionSubordinates(page){
    try {
      const { data } = await api.get(`functions/subordinates/?page=${page}`)
      return data
    }
    catch (error) {
      console.error('Erro listar o time que voce lidera', error)
      throw error
    }
  }

  async getFunctionById(functionId) {
    try {
      const { data } = await api.get(`functions/${functionId}/`);
      return data;
    } catch (error) {
      console.error('Erro ao pegar function pelo ID', error);
      throw error;
    }
  }

  async createFunction(newFunction) {
    try {
      await api.post('functions/', newFunction);
    } catch (error) {
      console.error('Erro ao criar função', error);
      throw error;
    }
  }

  async SearchSubordinates(search) {
    console.log(search)
    try {
      const { data } = await api.get(`functions/subordinates/?search_subordinates=${search}`);
      return data
    } catch (error) {
      console.error('Erro ao criar função', error);
      throw error;
    }
  }

  async updateFunction(functionId, updateFunction) {
    try {
      await api.put(`functions/${functionId}/`, updateFunction);
    } catch (error) {
      console.error('Erro ao atualizar função', error);
      throw error;
    }
  }

  async deleteFunction(functionId) {
    try {
      await api.delete(`functions/${functionId}/`);
    } catch (error) {
      console.error('Erro ao deletar função', error);
      throw error;
    }
  }

}

export default new FunctionService();
