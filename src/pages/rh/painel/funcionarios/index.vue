<script setup>
import Panel from '@/components/panel/Panel.vue';
import defaultLayout from '@/layouts/defaultLayout.vue';
import { useFunctionStore } from '@/stores/functionStore';
import { ref } from 'vue';
const functionStore = useFunctionStore()
const arrData = ref([])

async function turnPage(page){
  await functionStore.getFunctionSubordinates(page)
}

function CreateKeyArr(arr, remove) {
  const keys = Object.keys(arr)
  const index = keys.indexOf(remove)
  keys.splice(index, 1)
  console.log(keys)
  arrData.value = keys
}


onMounted(async () => {
  await functionStore.getFunctionSubordinates(1)
  CreateKeyArr(functionStore.subordinates.results[0], 'registration')
})

</script>
<template>
    <defaultLayout>
        <Panel :count="functionStore.subordinates.count">
            <panel-table :data-arr="arrData">
                <PanelCols v-for="val, i in functionStore.subordinates.results" :key="i">
                  <PanelRows :panel-arr="Object.values(val)" :define-desc="2" :define-arr-bg="3" :define-desc-title="0"></PanelRows>
                </PanelCols>
            </panel-table>
        </Panel>
    </defaultLayout>
</template>
