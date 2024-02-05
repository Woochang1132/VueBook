<template>
  <TransitionTag/>
  <MethodReturn/>
  <LinkValue/>
  <VForDirective/>
  <VbindApp/>
  <VModelComponent/>
</template>

<script>
import TransitionTag from './components/TransitionTag.vue'
import MethodReturn from './components/MethodReturn.vue'
import LinkValue from './components/LinkValue.vue'
import VForDirective from './components/VForDirective.vue'
import VbindApp from './components/VbindApp.vue'
import VModelComponent from './components/VModelComponent.vue'

export default {
  name: 'App',
  components: {
    TransitionTag,
    MethodReturn,
    LinkValue,
    VForDirective,
    VbindApp,
    VModelComponent,
  }
}
</script>

<style>
</style>
