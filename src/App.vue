<template>
  <div>
      <SenderComponent/>
      <hr/>
      <ReceiverComponent/>
  </div>
</template>

<script>
import ReceiverComponent from './components/ReceiverComponent.vue';
import SenderComponent from './components/SenderComponent.vue';

  export default {
  components: { SenderComponent, ReceiverComponent }
}
</script>

<style lang="scss" scoped>

</style>