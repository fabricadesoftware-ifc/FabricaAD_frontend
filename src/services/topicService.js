import api from '@/plugins/api';


class TopicService {
  async getAllTopics (page = 1, title = '', topic_filter = '') {
    try {
      const { data } = await api.get('/topics', {
        params: { page, title, topic_filter },
      });
      return data.results
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
      const { data } = await api.post(`/topics/`, newTopic);
      return data;
    } catch (error) {
      console.error('Erro ao criar tópico', error);
      throw error;
    }
  }

  async updateTopic (updateTopic) {
    try {
      const { data } = await api.put(`/topics/${updateTopic.id}`, updateTopic);
      return data;
    } catch (error) {
      console.error('Erro ao atualizar tópico', error);
      throw error;
    }
  }

  async patchTopic (topicPartial) {
    try {
      const { data } = await api.patch(`/topics/${topicPartial.id}`, topicPartial)
      return data
    }
    catch (error) {
      console.error('Erro ao atualizar tópico', error)
      throw error
    }
  }

  async deleteTopic (topicId) {
    try {
      const { data } = await api.delete(`/topics/${topicId}/`);
      return data;
    } catch (error) {
      console.error('Erro ao deletar tópico', error);
      throw error;
    }
  }
}

export default new TopicService();
