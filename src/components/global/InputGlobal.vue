<script setup>
defineProps({
        index: {
            type: Number,
            default: 0
        },
        placeholder: {
            type: String,
            default: ''
        },
        have_label: {
            type: Boolean,
            default: true
        },
        rounded: {
            type: String,
            default: 'lg'
        },
        variant: {
            type: String,
            default: 'solo'
        },
        label_text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String, 
            default: ''
        },
    })
    const value = defineModel('value')
</script>
<template>
    <div class="d-flex flex-column justify-center ga-3 w-75"> 
        <VLabel class="ms-5" v-if="have_label">{{ label_text }}</VLabel> 
        <VTextField bg-color="white" :placeholder="placeholder" :variant="variant" :rounded="rounded" :type="type"  v-model="value" :append-inner-icon="icon" @click:append-inner="$emit('openeye', index)"></VTextField>
    </div>
</template>