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


    onMounted(() =>{
        console.log('subheaderIndexes:', props.subheaderIndexes);
        console.log('arr:', props.arr);
    })
</script>
<template>
    <v-list-item
        v-for="item, i in arr"
        :key="i"
        class="font-weight-bold"
        
      >

        

        <Vsubheader class="text-grey font-weight-medium">{{ item.subheader }}</Vsubheader>
        <v-list-item-title class="font-weight-bold text-black d-flex ga-2 align-center" ><v-icon v-if="item.icon" class="w-25">{{ item.icon }}</v-icon>{{ item.title }}</v-list-item-title>
    </v-list-item>
</template>
<style scoped>
</style>