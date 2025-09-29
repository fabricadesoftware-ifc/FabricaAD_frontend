<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

const RoutePersonalized = computed(() => {
  let newPath = route.path
  const path = newPath.split(/(\/)/);

  const substituteBars = path.map(p => p === '/' ? '●' : p);

  const removeTwoFirstItems = substituteBars.slice(2)

  return removeTwoFirstItems
})
</script>
<template>
  <div style="height: 60px;" class="d-flex align-center ga-3 mx-5">
    <p v-for="val, i in RoutePersonalized" :key="i" :style="val === '●' ? {fontSize: '10px'} : ''" :class=" i === RoutePersonalized.length - 1 ? 'font-weight-bold' : 'text-grey-lighten-1'">{{ val }}</p>
  </div>
</template>
