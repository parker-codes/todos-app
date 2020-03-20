<template>
  <div class="my-4">
    <TransitionGroup name="list">
      <div v-for="(item, index) in items" :key="index">
        <div
          class="mb-2 w-full flex justify-between"
          :class="{ 'line-through text-gray-700': item.completed }"
        >
          <div class="flex">
            <button
              @click="toggleComplete(item.id)"
              role="switch"
              :aria-checked="item.completed ? 'true' : 'false'"
              aria-label="toggle task completion"
              class="mr-2 w-6 h-6 rounded-full"
              :class="[
                { 'hover:text-green-600': !item.completed },
                {
                  'text-green-600 bg-green-300 hover:bg-transparent':
                    item.completed
                }
              ]"
            >
              <CheckboxIcon />
            </button>

            <span class="w-4/5 truncate">
              {{ item.title }}
            </span>
          </div>

          <button
            @click="removeItem(item.id)"
            aria-label="remove task"
            class="ml-2 w-4"
          >
            <TrashIcon class="hover:text-red-500" />
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import CheckboxIcon from '@/components/icons/CheckboxIcon.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';

export default createComponent({
  props: {
    items: Array,
    toggleComplete: Function,
    removeItem: Function
  },

  components: { CheckboxIcon, TrashIcon }
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
