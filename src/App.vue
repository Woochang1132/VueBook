<template>
<!--   <TransitionTag/>
  <MethodReturn/>
  <LinkValue/>
  <VForDirective/>
  <VbindApp/>
  <VModelComponent/>
  <SelectComponent/>
  <ConditionComponent/>
  <ComputedProperty/>
  <VClickMethod/> 
  -->
  <div>
    <h2>관심있는 K-pop 가수는?</h2>
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :name="idol.name" :checked="idol.checked"></CheckboxItem>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';

/* import TransitionTag from './components/TransitionTag.vue'
import MethodReturn from './components/MethodReturn.vue'
import LinkValue from './components/LinkValue.vue'
import VForDirective from './components/VForDirective.vue'
import VbindApp from './components/VbindApp.vue'
import VModelComponent from './components/VModelComponent.vue'
import SelectComponent from './components/SelectComponent.vue'
import ConditionComponent from './components/ConditionComponent.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import VClickMethod from './components/VClickMethod.vue' 
*/

export default {
  name: 'App',
  data() {
    return {
      idols : [
        {id:1, name:"BTS", checked:true},
        {id:2, name:"Black", checked:false},
        {id:3, name:"Exo", checked:false},
        {id:4, name:"ITZY", checked:false},
      ]
    }
  },
  components: {
    CheckboxItem
}
}
</script>

<style>
</style>
