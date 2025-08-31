<script setup>
const props = defineProps({
    keyObj: {
        type: String,
        required: true
    },
    arrTitle: {
        type: Array,
        default: () => []
    },
    icon: {
        type: String,
        default: 'mdi-launch'
    }
})
</script>
<template>
    <div class="d-flex flex-column justify-center align-center w-100">
        <div class="pa-3">
            <VCardSubtitle>{{ keyObj  }}</VCardSubtitle>
        </div>
        <div class="w-100">
            <div v-for="(title, index) in arrTitle" :key="index" class="text-center "
                style="border-top: 1px solid grey;">
                <div v-if="typeof title === 'string'" class="pa-5" >
                    <span class="pa-3" :class="keyObj === 'setor' || keyObj === 'sector' ? 'bg-grey-lighten-2': ''">{{ title }}</span>
                </div>
                <div v-else-if="typeof title === 'boolean'" class="pa-5">
                    <span class="pa-3" :class="title ? 'bg-blue-lighten-4 text-blue-lighten-2' : 'bg-red-lighten-4 text-red-lighten-2'">{{ title ? 'em dia' : 'pendente' }}</span>
                </div>
                <div v-else class="pa-2">
                    <CircularProgress :progress="title"/>
                </div>
            </div>
        </div>
    </div>
</template>