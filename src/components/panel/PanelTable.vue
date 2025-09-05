<script setup>
    import { panelcolumns } from '@/utils/tests/PanelColumnTest';  
        
    function removeColumn(){
        const keys = Object.keys(panelcolumns[0]) 
        keys.splice(1, 1)
        return keys
    }
</script>
<template>
    <table class="w-75">
        <tr >
            <th v-for="keys, i in removeColumn()" :key="i" class="text-start">
                <VCardSubtitle >{{ keys }}</VCardSubtitle>
            </th>
        </tr>
        <tr v-for="item, i in panelcolumns" :key="i"  style="height: 83px;">
            <PanelRows :panel-arr="Object.values(item)" :define-desc="1" :define-desc-title="0" :define-arr-bg="3"/>
            <td style="border-top: 1px solid gray;">
                <VIcon icon="mdi-launch" color="blue"></VIcon>
            </td>
        </tr>
    </table>
</template>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
</style>