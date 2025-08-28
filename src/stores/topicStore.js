import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import topicService from '@/services/topicService';
import { g } from 'node_modules/unplugin-vue-router/dist/types-CTGkmk9e';


export const useTopicStore = defineStore('topic', () => {
  const topics = ref([]);
  const loading = ref(null);

  const isLoading = computed(() => loading.value)
  const topicsCount = computed(() => topics.value.length)

  const getTopics = async () => {
    loading.value = true
    try{
      topics.value = await topicService.getAllTopics()
    }
    catch(error){
      console.error('Error getting topics:', error)
    }
    finally{
      loading.value = false
    }
  }

  const getTopicById = async (id) => {
    loading.value = true
    try{
      const response = await topicService.getTopicById(id)
      return response
    }
    catch (error) {
      console.error('Error getting topic by ID:', error)
    }
    finally {
      loading.value = false
    }
  }

  const createTopic = async (newTopic) => {
    loading.value = true
    try{
      await topicService.createTopics(newTopic)
      getTopics()
    }
    catch(error){
      console.error('Error creating topic:', error)
    }
    finally{
      loading.value = false
    }
  }

  const updateTopic = async (topicId, topic) => {
    loading.value = true
    try {
      await topicService.updateTopic(topicId, topic)
      getTopics()
    }
    catch(error){
      console.error('Error updating topic:', error)
    }
    finally{
      loading.value = false
    }
  }

  const patchTopic = async (topicId, topic) => {
    loading.value = true
    try {
      await topicService.patchTopic(topicId, topic)
      getTopics()
    }
    catch (error){
      console.error('Error patching topic:', error)
    }
    finally{
      loading.value = false
    }
  }

  const deleteTopic = async (topicId) => {
    loading.value = true
    try {
      await topicService.deleteTopic(topicId);
      getTopics()
    }
    catch(error) {
      console.error('Error deleting topic:', error)
    }
    finally {
      loading.value = false
    }
  }

  return {
    topics,
    loading,
    isLoading,
    topicsCount,
    getTopics,
    getTopicById,
    createTopic,
    updateTopic,
    patchTopic,
    deleteTopic,
  }
});
