<script setup lang="ts">
import { Field } from 'vee-validate'

interface Option {
  text: string
  value: string | number
}

interface InputProps {
  name: string
  label: string
  placeholder: string
  selectName?: string
  type?: string
  rules?: string
  inputError?: any
  as?: string
  options?: Option[]
  multipleInput?: boolean
  multipleInputOptions?: Option[]
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  multipleInput: false,
})

const isRequired = props.rules?.includes('required')
</script>

<template>
  <label :for="props.name" class="label">
    <span class="label-text">{{ props.label }}</span>
    <span
      v-if="isRequired"
      class="label-text-alt max-w-22 overflow-hidden whitespace-nowrap"
      :class="{
        'error-message': inputError?.[name] || inputError?.[selectName!],
      }"
      >{{
        (inputError?.[name] || inputError?.[selectName!]) ?? 'requerido'
      }}</span
    >
  </label>
  <label
    v-if="props.as !== 'select'"
    class="input input-bordered flex items-center gap-2 p-0 h-auto"
    :class="{
      'error-message': inputError?.[name] || inputError?.[selectName!],
    }"
  >
    <Field
      :id="props.name"
      :name="props.name"
      :rules="props.rules"
      :type="props.as ? undefined : props.type"
      :placeholder="props.placeholder"
      :as="props.as ? props.as : undefined"
      class="py-3 px-4"
      style="height: 100%"
    />
    <div v-if="props.multipleInput" class="w-auto bg-slate-100 rounded-md">
      <Field
        as="select"
        rules="required"
        :name="props.selectName ?? ''"
        class="flex py-3 w-20 pl-3 mr-3 rounded-l-none bg-slate-100"
        style="height: 100%"
      >
        <option value="" disabled>Selecciona una opción</option>
        <option
          v-for="option in multipleInputOptions"
          :key="option.text"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </Field>
    </div>
  </label>

  <Field
    v-if="props.as === 'select'"
    :name="props.name"
    :rules="props.rules"
    :type="props.as ? undefined : props.type"
    :placeholder="props.placeholder"
    :class="{
      'error-message': inputError?.[name] || inputError?.[selectName!],
    }"
    :as="props.as ? props.as : undefined"
    class="input input-bordered w-full"
  >
    <option value="" disabled>Selecciona un género</option>
    <option
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </Field>
</template>

<style>
select,
input {
  width: 100%;
  color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

label.error-message {
  border-color: rgb(255, 50, 50);
}

span.error-message {
  color: rgb(255, 50, 50);
}
</style>
