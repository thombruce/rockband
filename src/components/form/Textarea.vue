<template lang='pug'>
.block
  label.block(v-if='label' :for='id') {{ label }}
  textarea.block(
    :id='id'
    v-bind:value='value'
    v-on:input='$emit(`input`, $event.target.value)'
  )
</template>

<script>
export default {
  props: {
    id: String,
    value: {
      type: String,
      required: true
    },
    label: String
  }
}
</script>
