<template>
  <TransitionTag/>
  <MethodReturn/>
  <LinkValue/>
  <VForDirective/>
</template>

<script>
import TransitionTag from './components/TransitionTag.vue'
import MethodReturn from './components/MethodReturn.vue'
import LinkValue from './components/LinkValue.vue'
import VForDirective from './components/VForDirective.vue'

export default {
  name: 'App',
  components: {
    TransitionTag,
    MethodReturn,
    LinkValue,
    VForDirective
  }
}
</script>

<style>
</style>
