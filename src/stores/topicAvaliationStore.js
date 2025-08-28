import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import topicAvaliationService from '@/services/topicAvaliationService';


export const useTopicStore = defineStore('topicOfAvaliation', () => {
  const loading = ref(null);
  const isLoading = computed(() => loading.value)

  const getTopicsOfAvaliations = async (avaliationId) => {
    loading.value = true
    try{
      const response = await topicAvaliationService.getAllTopicsOfAvaliation(avaliationId)
      return response
    }
    catch(error){
      console.error('Error getting topics:', error)
    }
    finally{
      loading.value = false
    }
  }

  const postTopicOfAvaliation = async (avaliationId, Topic) => {
    loading.value = true
    try{
      await topicAvaliationService.postTopicOfAvaliation(avaliationId, Topic)
      getTopicsOfAvaliations(avaliationId)
    }
    catch(error){
      console.error('Error creating topic:', error)
    }
    finally{
      loading.value = false
    }
  }

  return {
    topics,
    loading,
    isLoading,
    postTopicOfAvaliation,
    getTopicsOfAvaliations
}
});
