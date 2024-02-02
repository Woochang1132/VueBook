<template>
  <TransitionTag/>
  <MethodReturn/>
  <LinkValue/>
</template>

<script>
import TransitionTag from './components/TransitionTag.vue'
import MethodReturn from './components/MethodReturn.vue'
import LinkValue from './components/LinkValue.vue'

export default {
  name: 'App',
  components: {
    TransitionTag,
    MethodReturn,
    LinkValue
  }
}
</script>

<style>
</style>
