<script setup>
defineProps({
        icon: {
            type: String,
            default: 'mdi-launch'
        },
        action: {
            type: Function,
            required: true
        },
        color: {
            type: String,
            default: 'blue'
        },
        IconsArr: {
            type: Array,
            default: []
        }
    })
</script>
<template>
    <div style="border-top: 1px solid grey;" class="pa-5 w-100 d-flex justify-center align-center">
        <VIcon :icon="icon" :color="color" @click="action" v-if="IconsArr.length === 0"></VIcon>
        <div v-for="items, i in IconsArr" class="d-flex ga-2" :key="i" v-else>
            <VIcon :icon="items.icon" :color="items.color" @click="items.action"></VIcon>
        </div>
    </div>
</template>