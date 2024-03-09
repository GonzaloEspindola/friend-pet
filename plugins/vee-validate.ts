import { defineRule } from 'vee-validate'

export default defineNuxtPlugin(() => {
  defineRule('required', (value: any) => {
    if (!value || !value.length) {
      return 'This field is required'
    }
    return true
  })
})
