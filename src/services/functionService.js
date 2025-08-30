import api from '@/plugins/api'

class FunctionService {
  async getAllFunction (page) {
    try {
      const { data } = await api.get('/function', { params: { page } });
      return data;
    } catch (error) {
      console.error('Erro ao listar as funções', error);
      throw error;
    }
  }

  async getFunctionById (functionId) {
    try {
      const { data } = await api.get(`/function/${functionId}/`);
      return data;
    } catch (error) {
      console.error('Erro ao pegar function pelo ID', error);
      throw error;
    }
  }

  async createFunction (newFunction) {
    try {
        await api.post('/function/', newFunction);
    } catch (error) {
        console.error('Erro ao criar função', error);
        throw error;
    }
  }

  async updateFunction (functionId, updateFunction) {
    try {
      await api.put(`/function/${functionId}/`, updateFunction);
    } catch (error) {
      console.error('Erro ao atualizar função', error);
      throw error;
    }
  }

  async deleteFunction (functionId) {
    try {
        await api.delete(`/function/${functionId}/`);
    } catch (error) {
        console.error('Erro ao deletar função', error);
        throw error;
    }
}

}

export default new FunctionService();
