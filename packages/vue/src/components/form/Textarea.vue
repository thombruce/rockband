<template lang='pug'>
div
  label(v-if='label' :for="id" class="block text-sm font-medium text-gray-700") {{ label }}
  div.mt-1
    textarea(
      v-bind:value='value'
      v-on:input='$emit(`input`, $event.target.value)'
      :id="id"
      :name="id"
      rows="3"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
      :placeholder="placeholder"
    )
  p(v-if='info' class="mt-2 text-sm text-gray-500")
    | {{ info }}
</template>

<script>
export default {
  props: {
    id: String,
    value: {
      type: String,
      required: true
    },
    label: String,
    placeholder: String,
    info: String
  }
}
</script>
