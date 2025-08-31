<script setup>
import { panelcolumns } from '@/utils/tests/PanelColumnTest';
import ColumnText from '../column/ColumnText.vue';
import ActionColumn from '../column/ActionColumn.vue';
const valuesofObject = ref([])

function getKeys(obj){
  const resultado = {}

  panelcolumns.forEach(obj => {
    Object.keys(obj).forEach(chave => {
      if (!resultado[chave]) {
        resultado[chave] = []
      }
      resultado[chave].push(obj[chave])
    })
  })
  
  valuesofObject.value.push(resultado)
}

onBeforeMount(() => {
    getKeys(panelcolumns)  
})
</script>
<template> 
    <div class="d-flex align-center justify-space-between pa-5">
        <ColumnText  v-for="value, i in Object.keys(valuesofObject[0])" :key="i" :key-obj="Object.keys(valuesofObject[0])[i]" :arr-title="Object.values(valuesofObject[0])[i]"></ColumnText>
        <div class="d-flex flex-column justify-center align-center w-100">
          <div class="pa-5 mt-1"></div>
          <ActionColumn v-for="i in panelcolumns.length" :key="i"/>
        </div> 
    </div>
</template>