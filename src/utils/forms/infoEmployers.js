import { ref } from "vue"

export const infoEmployers = ref([
  {
    label: 'Título',
    value: '',
    timeProcess: 1,
  },
  {
    label: 'Descrição',
    value: '',
    timeProcess: 2,
  },
  {
    label: 'Pergunta',
    value: '',
    timeProcess: 3,
  },
  {
    label: 'Tipo',
    type: 'select',
    timeProcess: 4,
    value: '',
  },
])
