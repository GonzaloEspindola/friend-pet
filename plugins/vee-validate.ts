import { defineRule } from 'vee-validate'

export default defineNuxtPlugin(() => {
  defineRule('required', (value: any) => {
    if (value === undefined || value === null || value === '') {
      return 'Este campo es requerido'
    }
    return true
  })
})
