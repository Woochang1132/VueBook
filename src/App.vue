<template>
  <TransitionTag/>
  <MethodReturn/>
  <LinkValue/>
  <VForDirective/>
  <VbindApp/>
  <VModelComponent/>
  <SelectComponent/>
  <ConditionComponent/>
  <ComputedProperty/>
</template>

<script>
import TransitionTag from './components/TransitionTag.vue'
import MethodReturn from './components/MethodReturn.vue'
import LinkValue from './components/LinkValue.vue'
import VForDirective from './components/VForDirective.vue'
import VbindApp from './components/VbindApp.vue'
import VModelComponent from './components/VModelComponent.vue'
import SelectComponent from './components/SelectComponent.vue'
import ConditionComponent from './components/ConditionComponent.vue'
import ComputedProperty from './components/ComputedProperty.vue'

export default {
  name: 'App',
  components: {
    TransitionTag,
    MethodReturn,
    LinkValue,
    VForDirective,
    VbindApp,
    VModelComponent,
    SelectComponent,
    ConditionComponent,
    ComputedProperty
  }
}
</script>

<style>
</style>
