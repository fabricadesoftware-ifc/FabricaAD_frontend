<script setup>
  const props = defineProps({
        subheaderIndexes: {
            type: Array,
            required: false,
            default: () => []
        },
        arr: {
            type: Array,
            required: true
        }
    });
</script>
<template>
    <v-list-item
        v-for="item, i in arr"
        :key="i"
        class="font-weight-bold">
        <Vsubheader class="text-grey font-weight-medium" style="font-size: 12px;">{{ item.subheader }}</Vsubheader>
        <v-list-item-title class="hover-item pa-2 font-weight-medium text-black d-flex ga-2 align-center" style="font-size: 16px; cursor: pointer;"><v-icon v-if="item.icon" class="w-25">{{ item.icon }}</v-icon>{{ item.title }}</v-list-item-title>
    </v-list-item>
</template>
<style scoped>
.hover-item:hover {
    background-color: #F0F5F9;
    border-radius: 20px;
    scale: 1.1;
    transition: 0.5s
}
</style>
