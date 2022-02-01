<template lang='pug'>
.flex.items-start
  .flex.items-center.h-5
    input(
      v-bind:value='value'
      v-on:input='$emit(`input`, $event.target.value)'
      :id="id"
      :name="id"
      type="checkbox"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    )
  .ml-3.text-sm
    label(v-if='label' :for="id" class="font-medium text-gray-700") {{ label }}
    p.text-gray-500(v-if='info') {{ info }}
</template>

<script>
export default {
  props: {
    id: String,
    value: {
      type: [Boolean, String],
      required: true
    },
    label: String,
    info: String
  }
}
</script>
