<template>
  <transition name="fade">
    <div v-if="total > 0" class="text-center text-sm text-gray-700 mt-3">
      <span class="font-bold">{{ remaining }}</span>
      <span>remaining out of</span>
      <span class="font-bold">{{ total }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';

export default createComponent({
  props: {
    total: Number,
    remaining: Number
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
