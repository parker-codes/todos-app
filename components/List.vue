<template>
  <div class="my-4">
    <TransitionGroup name="list">
      <div v-for="(item, index) in items" :key="index">
        <div
          class="mb-2 flex justify-between"
          :class="{ 'line-through text-gray-700': item.completed }"
        >
          <div>
            <button @click="toggleComplete(item.id)" class="mr-2">
              <CheckboxSvg classes="w-4 h-4" :disabled="!item.completed" />
            </button>

            <span>{{ item.title }}</span>
          </div>

          <button @click="removeItem(item.id)" class="ml-2">
            <TrashSvg classes="w-4 h-4" />
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import CheckboxSvg from '@/components/svg/CheckboxSvg.vue';
import TrashSvg from '@/components/svg/TrashSvg.vue';

export default createComponent({
  props: {
    items: Array,
    toggleComplete: Function,
    removeItem: Function
  },

  components: { CheckboxSvg, TrashSvg }
});
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-leave-to {
  transform: translateX(30px);
}
</style>
