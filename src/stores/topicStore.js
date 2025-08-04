import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import topicService from '@/services/topicService';


export const useTopicStore = defineStore('topic', () => {
  const topics = ref([]);
  const selectedTopic = ref([]);
  const error = ref(null);
  const loading = ref(null);
  const connection = ref(null);

  const isLoading = computed(() => loading.value)
  const topicsCount = computed(() => topics.value.length)

  const getTopics = async () => {
    loading.value = true
    try{
      topics.value = await topicService.getAllTopics()
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
      connection.value = true
    }
  }

  const getTopicById = async (id) => {
    loading.value = true
    try{
      selectedTopic.value = await topicService.getTopicById(id)
    }
    catch (e) {
      error.value = e
    }
    finally {
      loading.value = false
      connection.value = true
    }
  }

  const createTopic = async (newTopic) => {
    loading.value = true
    try{
      const created = await topicService.createTopics(newTopic)
      topics.value.push(created)
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const updateTopic = async (topic) => {
    loading.value = true
    try {
      const updated = await topicService.updateTopic(topic)
      const index = topics.value.findIndex(t => t.id === topic.id)
      if(index !== -1) topics.value[index] = updated
    }
    catch(e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const patchTopic = async (topic) => {
    loading.value = true
    try {
      const updated = await topicService.patchTopic(topic)
      const index = topic.value.findIndex(t => t.id === topic.id)
      if(index !== -1) topics.value[index] = updated
    }
    catch (e){
      error.value = e
    }
    finally{
      loading.value = false
    }
  }

  const deleteTopic = async (id) => {
    loading.value = true
    try {
      await topicService.deleteTopic(id);
      const index = topics.value.findIndex(t => t.id === id)
      if(index !== -1) topics.value.splice(index, 1)
    }
    catch(e) {
      error.value = e
    }
    finally {
      loading.value = false
    }
  }

  return {
    topics,
    selectedTopic,
    loading,
    error,
    connection,
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
