<script setup>
const props = defineProps(
        {
            panelArr: {
                type: Array,
                default: []
            },
            defineDesc: {
                type: Number,
            },
            defineDescTitle: {
                type: Number,
            },
            defineArrBg: {
                type: Number
            }
        }
    )

    const ArrWithDesc = computed(() => {
       const propsarr = [...props.panelArr]
       propsarr.splice(props.defineDesc, 1) 
       return propsarr
    })
</script>
<template>
        <td v-for="value, i in ArrWithDesc" :key="i"  style=" max-width: 150px" class="px-4" >
            <div v-if="typeof value === 'string'"  :class="defineDesc !== i ? 'd-flex flex-column': 'd-flex'">
                <p :style=" defineArrBg === i ? {height: '35px'} : ''" class="text-truncate w-100" :class="defineArrBg === i ? 'bg-grey-lighten-2 rounded  d-flex justify-center align-center' : ''">{{ value }}</p>
                <VCardSubtitle v-if="i === defineDescTitle">{{ panelArr[defineDesc] }}</VCardSubtitle>
            </div>
            <circular-progress :progress="value" v-if="typeof value === 'number'"/>
            <div v-if="typeof value === 'boolean'"  class="rounded d-flex justify-center align-center" style="height: 35px;"  :class="value ? 'bg-blue-lighten-5 text-blue-lighten-2 ' : 'bg-red-lighten-5 text-red-lighten-2'">
                <p>{{ value ? 'em dia' : 'pendente' }}</p>
            </div>
        </td>
</template>
