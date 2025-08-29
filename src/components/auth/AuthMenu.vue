<script setup>
import InputGlobal from '@/components/global/InputGlobal.vue';
import { loginInfo } from '@/utils/login/info';
import { useDisplay } from 'vuetify';

const {md, width} = useDisplay()

function SelectType(i){
    if(loginInfo.value[i].type === 'password'){
        loginInfo.value[i].type = 'text'
        loginInfo.value[i].icon = 'mdi-eye'
    } else {
        loginInfo.value[i].type = 'password'
        loginInfo.value[i].icon = 'mdi-eye-off'
    }
}
</script>
<template>
<div class="position-absolute border" :class="width < 1150 ? 'bottom-0 w-100' : 'right-0 h-100' " :style="{height: width < 1150 ? '70%' : '100%' }">
    <VCard :style="{width: width < 1150 ? '100%' : '600px'}" class="pa-5 d-flex justify-center align-center bg-white h-100" :class="width < 1150 ? 'rounded-t-xl' : 'rounded-s-xl'">
        <div class="w-100 d-flex flex-column ga-8 justify-center align-center">
            <div class="w-100 d-flex justify-center align-center flex-column">
                <InputGlobal v-for="info, i in loginInfo" :key="i" :index="i" :label_text="info.label" :icon="info.icon" :type="info.type" v-model:value="info.value" @openeye="SelectType"/>
            </div>
            <div class="d-flex flex-column justify-center w-100 align-center">
                <VBtn color="indigo-accent-2" class="w-75" rounded="lg" style="height: 50px" @click="$emit('login')">Login</VBtn>
                <VCardText>esqueceu a senha? <span class="text-indigo-accent-2 font-weight-bold">Recuperar a senha</span></VCardText>
            </div>
        </div>
    </VCard>
</div>
</template>