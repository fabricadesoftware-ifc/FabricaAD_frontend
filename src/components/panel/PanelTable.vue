<script setup>
const props = defineProps({
  dataArr: {
    type: Array,
    default: []
  },
})
</script>
<template>
  <table class="bg-white">
    <tr>
      <th v-for="keys, i in dataArr" :key="i" class="text-start" style="color: rgba(0, 0, 0, 0.5);">
        <VCardSubtitle style="font-weight: 500; text-transform: capitalize;">{{ keys }}</VCardSubtitle>
      </th>
    </tr>
    <slot></slot>
  </table>
</template>
<style>
table {
  font-family: 'poppins', 'sans-serif';
  border-collapse: collapse;
  width: 100%;
}
</style>
