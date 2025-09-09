<script setup>
    import { panelcolumns } from '@/utils/tests/PanelColumnTest';  
        
    function removeColumn(){
        const keys = Object.keys(panelcolumns[0]) 
        keys.splice(1, 1)
        return keys
    }
</script>
<template>
    <table class="bg-white">
        <tr >
            <th v-for="keys, i in removeColumn()" :key="i" class="text-start" style="color: rgba(0, 0, 0, 0.5);">
                <VCardSubtitle style="font-weight: 500; text-transform: capitalize;">{{ keys }}</VCardSubtitle>
            </th>
        </tr>
        <tr v-for="item, i in panelcolumns" :key="i"  style="height: 83px; border-top: 1px solid #dedede;" >
            <PanelRows :panel-arr="Object.values(item)" :define-desc="1" :define-desc-title="0" :define-arr-bg="3"/>
            <td>
                <VIcon icon="mdi-launch" color="blue"></VIcon>
            </td>
        </tr>
    </table>
</template>
<style>
table {
  font-family: 'poppins', 'sans-serif';
  border-collapse: collapse;
  width: 100%;
}
</style>