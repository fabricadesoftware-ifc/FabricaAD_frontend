import api from '@/plugins/api';
import { a } from 'node_modules/unplugin-vue-router/dist/types-CTGkmk9e';


class TopicAvaliationService {
  async getAllTopicsOfAvaliation (avaliationId) {
    try {
      const { data } = await api.get(`/topic_avaliations/?avaliation_id=${avaliationId}`);
      return data;
    } catch (error) {
      console.error('Error on list topics of avaliation', error);
      throw error;
    }
  }

  async postTopicOfAvaliation (avaliationId, topicId) {
    try {
      await api.post(`/topic_avaliations/`, { avaliation_id: avaliationId, topic_id: topicId });
    } catch (error) {
      console.error('Error on submit topic of avaliation', error);
      throw error;
    }
  }
}

export default new TopicAvaliationService();
