<script setup>
  const props = defineProps({
    infos: {
      type: Array,
      required: true,
    },
    dialog: {
      type: Boolean,
      default: false,
    },
  })
  onMounted(() => {
    console.log(props.infos)
  })
</script>
<template>
  <VDialog v-model="props.dialog" class="d-flex justify-center align-center">
      <div class="d-flex justify-center w-100">
        <VCard class="w-50 d-flex flex-column ga-5 bg-grey-lighten-4 pa-5 rounded-xl">
          <VCard class="d-flex flex-column ga-3 pa-5 rounded-xl" :elevation="0" border="lg"  v-for="info, i in infos" :key="i">
            <div class="d-flex ga-1 w-100">
              <div v-for="inf , j in infos" :key="j" style="width: 30px; padding: 3px; border-radius: 20px;" :style="j === i ? { backgroundColor: 'grey', width: '50px', scale: '1.2' } : {backgroundColor: '#DFDFDF'}"></div>
            </div>
            <VLabel :text="info.label" class="text-h5"></VLabel>
            <VTextField rounded="lg" variant="outlined" v-model="info.value"></VTextField>
          </VCard>
            <VCardActions class="d-flex w-100 justify-end align-end ga-10 pa-3">
              <VBtn @click="$emit('closedialog')" class="bg-grey-darken-1" height="60" width="170">Cancelar</VBtn>
              <VBtn @click="$emit('createitem')" class="bg-deep-purple-accent-4" height="60" width="170">Confirmar</VBtn>
            </VCardActions>
        </VCard>
      </div>
  </VDialog>
</template>
