<template lang='pug'>
div
  label.block.text-sm.font-medium.text-gray-700(v-if='label' :for='id') {{ label }}

  .mt-1.relative.rounded-md.shadow-sm
    .absolute.inset-y-0.left-0.pl-3.flex.items-center(v-if='$slots.prefix')
      span.text-gray-500(class="sm:text-sm")
        slot(name='prefix')

    input(
      v-bind:value='value'
      v-on:input='$emit(`input`, $event.target.value)'
      :id="id"
      :type="type"
      :name="id"
      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
      :placeholder='placeholder'
      :min='min'
      :step='step'
    )

    .absolute.inset-y-0.right-0.flex.items-center(v-if='$slots.suffix')
      slot(name='suffix')
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
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    min: [String, Number],
    step: [String, Number]
  }
}
</script>
