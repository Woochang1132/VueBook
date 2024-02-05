<template>
  <TransitionTag/>
  <MethodReturn/>
  <LinkValue/>
  <VForDirective/>
  <VbindApp/>
</template>

<script>
import TransitionTag from './components/TransitionTag.vue'
import MethodReturn from './components/MethodReturn.vue'
import LinkValue from './components/LinkValue.vue'
import VForDirective from './components/VForDirective.vue'
import VbindApp from './components/VbindApp.vue'

export default {
  name: 'App',
  components: {
    TransitionTag,
    MethodReturn,
    LinkValue,
    VForDirective,
    VbindApp
  }
}
</script>

<style>
</style>
