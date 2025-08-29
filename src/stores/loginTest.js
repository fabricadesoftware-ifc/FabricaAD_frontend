import { loginInfo } from "@/utils/login/info";
import api from '@/plugins/api.js'

export async function login(){
    console.log(loginInfo.value)
    const valuesNewObj = ['registration', 'password']
    const newObj = {}

    const getValues = loginInfo.value.forEach((el, index) => {
        newObj[`${valuesNewObj[index]}`] = el.value
    })

    const {data} = await api.post('/token', newObj)
    console.log(data)
}