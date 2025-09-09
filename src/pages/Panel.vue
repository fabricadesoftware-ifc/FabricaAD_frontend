<script setup>
import PanelTable from '@/components/panel/PanelTable.vue';
import defaultLayout from '@/layouts/defaultLayout.vue';

onMounted(() => {

})
</script>
<template>
    <defaultLayout>
        <div class="d-flex flex-column justify-space-between h-100">
            <div class="d-flex justify-space-between">
                <div class="w-50">
                    <VTextField variant="outlined" placeholder="Buscar Tópico" rounded="lg" />
                </div>
                <VBtn color="blue" icon="mdi-plus" rounded="lg" />
            </div>
            <div class="pa-5">
                <panel-table />
            </div>
            <div class="d-flex justify-end algin-end">
                <VPagination :length="5" rounded="circle"/>
            </div>
        </div>
    </defaultLayout>
</template>