<script setup>
import PanelTable from '@/components/panel/PanelTable.vue';
import defaultLayout from '@/layouts/defaultLayout.vue';
import { useFunctionStore } from '@/stores/functionStore';
import { ref } from 'vue';
const functionStore = useFunctionStore()
const page = ref(1)
const arrData = ref([])
const search = ref('')

const props = defineProps({
  removeData: {
    type: String,
    default: 'registration',
  }
})

async function turnPage(page){
  await functionStore.getFunctionSubordinates(page)
}

function CreateKeyArr(arr) {
  const keys = Object.keys(arr)
  const index = keys.indexOf(props.removeData)
  keys.splice(index, 1)
  console.log(keys)
  arrData.value = keys
}

onMounted(async () => {
    await functionStore.getFunctionSubordinates(page.value)
    const arrInitial = functionStore.subordinates.results[0]
    console.log(functionStore.subordinates.results)
    CreateKeyArr(arrInitial)
})
</script>
<template>
    <defaultLayout>
        <div class="d-flex flex-column justify-space-between h-100">
            <div class="d-flex flex-column ga-10">
                <div class="w-100 d-flex justify-space-between">
                    <div class="w-50">
                        <VTextField variant="outlined" placeholder="Buscar Tópico" rounded="lg" v-model="search"/>
                    </div>
                    <VBtn color="blue" icon="mdi-plus" rounded="lg" @click="functionStore.SearchSubordinatesFunction(search)"/>
                </div>
                <div class="pa-5">
                    <panel-table :store-arr="functionStore.subordinates.results" :data-arr="arrData" remove-data="registration"/>
                </div>
            </div>
            <div class="d-flex justify-end w-100">
                <VPagination total-visible="4" :length="Math.ceil(functionStore.subordinates.count / 5)" rounded="circle"  @update:model-value="turnPage"/>
            </div>
        </div>
    </defaultLayout>
</template>
