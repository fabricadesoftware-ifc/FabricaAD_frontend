<script setup>
import Panel from '@/components/panel/Panel.vue';
import defaultLayout from '@/layouts/defaultLayout.vue';
import { usePositionStore } from '@/stores/positionStore';
import { ref } from 'vue';
const positionStore = usePositionStore()
const arrData = ref([])


async function turnPage(page){
  await positionStore.getPositions(page)
}

function CreateKeyArr(arr, remove) {
  const keys = Object.keys(arr)
  const index = keys.indexOf(remove)
  keys.splice(index, 1)
  console.log(keys)
  arrData.value = keys
}

onMounted(async () => {
  await positionStore.getPositions()
  CreateKeyArr(positionStore.position.results[0], 'id')
})

</script>
<template>
    <defaultLayout>
        <Panel :count="positionStore.position.count" @turnPage="turnPage" @search="positionStore.searchPosition">
            <panel-table :data-arr="arrData">
                <PanelCols v-for="val, i in positionStore.position.results" :key="i">
                  <PanelRows :panel-arr="Object.values(val)"></PanelRows>
                </PanelCols>
            </panel-table>
        </Panel>
    </defaultLayout>
</template>
