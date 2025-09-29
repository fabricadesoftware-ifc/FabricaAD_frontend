import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import topicService from '@/services/topicService';

export const useTopicStore = defineStore('topic', () => {
  const state = reactive({
    topics: [],
    topic: {},
    loading: false,
    connection: false,
  })

  const isLoading = computed(() => state.loading)
  const topics = computed(() => state.topics)
  const topic = computed(() => state.topic)

  const getTopics = async () => {
    state.loading = true
    try{
      topics.value = await topicService.getAllTopics()
    }
    catch(error){
      console.error('Error getting topics:', error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const getTopicById = async (id) => {
    state.loading = true
    try{
      const response = await topicService.getTopicById(id)
      return response
    }
    catch (error) {
      console.error('Error getting topic by ID:', error)
    }
    finally {
      state.loading = false
      state.connection = true
    }
  }

  const createTopic = async (newTopic) => {
    state.loading = true
    try{
      await topicService.createTopics(newTopic)
      getTopics()
    }
    catch(error){
      console.error('Error creating topic:', error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const updateTopic = async (topicId, topic) => {
    state.loading = true
    try {
      await topicService.updateTopic(topicId, topic)
      getTopics()
    }
    catch(error){
      console.error('Error updating topic:', error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const patchTopic = async (topicId, topic) => {
    state.loading = true
    try {
      await topicService.patchTopic(topicId, topic)
      getTopics()
    }
    catch (error){
      console.error('Error patching topic:', error)
    }
    finally{
      state.loading = false
      state.connection = true
    }
  }

  const deleteTopic = async (topicId) => {
    state.loading = true
    try {
      await topicService.deleteTopic(topicId);
      getTopics()
    }
    catch(error) {
      console.error('Error deleting topic:', error)
    }
    finally {
      state.loading = false
      state.connection = true
    }
  }

  return {
    topics,
    isLoading,
    topic,
    getTopics,
    getTopicById,
    createTopic,
    updateTopic,
    patchTopic,
    deleteTopic,
  }
});
