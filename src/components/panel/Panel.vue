<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
})
</script>
<template>
        <div class="d-flex flex-column justify-space-between h-100">
            <div class="d-flex flex-column ga-10">
                <div class="w-100 d-flex justify-space-between">
                    <div class="w-50">
                        <VTextField variant="outlined" placeholder="Buscar Tópico" rounded="lg" @input="$emit('search', $event)"/>
                    </div>
                    <VBtn color="blue" icon="mdi-plus" rounded="lg"/>
                </div>
                <div class="pa-5">
                    <slot></slot>
                </div>
            </div>
            <div class="d-flex justify-end w-100">
                <VPagination total-visible="4" :length="Math.ceil(props.count / 5)" rounded="circle"  @update:model-value="(newPage) => $emit('turnPage', newPage)"/>
            </div>
        </div>
</template>
