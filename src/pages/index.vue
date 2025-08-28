<template>
  <h1>Home</h1>
  {{ telephones }}
</template>
<script setup>
  import { useTelephoneStore } from '@/stores/telephoneStore';
  import { ref, onMounted } from 'vue';

  const telephones = ref(null);

  const telephoneStore = useTelephoneStore();
  const getTelephones = async () => {
    telephones.value = await telephoneStore.getTelephones(1);
    console.log('Telefones carregados:', telephones.value);
  };

  onMounted(() => {
    getTelephones();
  });

</script>
