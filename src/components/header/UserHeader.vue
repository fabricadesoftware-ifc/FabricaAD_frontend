<script setup>
  defineProps({
    username: {
      type: String,
      default: 'usuario',
    },
    photo: {
      type: URL,
      default: 'https://tse2.mm.bing.net/th/id/OIP.6vMLuqEajaJZFsdiye9NWQHaHi?pid=Api&P=0&h=180'
    }
  })

</script>
<template>
  <div style="height: 75px;" class="d-flex justify-space-between align-center">
      <VAppBarNavIcon class="mx-7" @click="$emit('closemenu')"/>
      <div class="d-flex ga-9 justify-center align-center mx-16">
        <VIcon icon="mdi-bell-outline"></VIcon>
        <div class="d-flex ga-2 align-center justify-center">
          <VImg :src="photo" width="35"/>
          <p class="font-weight-bold">{{ username }}</p>
        </div>
      </div>
  </div>
</template>
