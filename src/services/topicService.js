import api from '@/plugins/api';


class TopicService {
  async getAllTopics () {
    try {
      const { data } = await api.get('/topics');
      return data;
    } catch (error) {
      console.error('Erro ao listar Tópicos', error);
      throw error;
    }
  }

  async getTopicByid (topicId) {
    try {
      const { data } = await api.get(`/topics/${topicId}/`);
      return data;
    } catch (error) {
      console.error('Erro ao pegar tópico pelo ID', error);
      throw error;
    }
  }

  async createTopics (newTopic) {
    try {
      await api.post(`/topics/`, newTopic);
    } catch (error) {
      console.error('Erro ao criar tópico', error);
      throw error;
    }
  }

  async updateTopic (updateTopic) {
    try {
      await api.put(`/topics/${updateTopic.id}`, updateTopic);
    } catch (error) {
      console.error('Erro ao atualizar tópico', error);
      throw error;
    }
  }

  async patchTopic (topicId, topicPartial) {
    try {
      await api.patch(`/topics/${topicId}`, topicPartial);
    }
    catch (error) {
      console.error('Erro ao atualizar tópico', error);
      throw error;
    }
  }

  async deleteTopic (topicId) {
    try {
      await api.delete(`/topics/${topicId}/`);
    } catch (error) {
      console.error('Erro ao deletar tópico', error);
      throw error;
    }
  }
}

export default new TopicService();
