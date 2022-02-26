<template lang='pug'>
ClientOnly
  DarkMode(defaultMode='light' className='%cm')
    template(v-slot="{ mode }")
      | Color mode: {{ mode | titleize }}
</template>
