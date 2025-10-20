import { ref } from 'vue'

export const loginInfo = ref([
    {
    label: 'cod. da empresa',
    value: '',
    placeholder: 'Digite o código da empresa',
    },
    {
    label: 'senha',
    value: '',
    icon: 'mdi-eye-off',
    type: 'password',
    placeholder: 'Informe sua senha',
    }
])