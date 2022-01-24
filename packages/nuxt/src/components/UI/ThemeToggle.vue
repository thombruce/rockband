<template lang='pug'>
select(v-model='$colorMode.preference')
  option(value='system') System
  option(value='light') Light
  option(value='dark') Dark
</template>
