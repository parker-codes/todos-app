<template>
  <div class="my-4">
    <TransitionGroup name="list">
      <div v-for="(item, index) in items" :key="index">
        <div
          class="mb-2 flex justify-between"
          :class="{ 'line-through text-gray-700': item.completed }"
        >
          <div class="flex">
            <button
              @click="toggleComplete(item.id)"
              role="switch"
              :aria-checked="item.completed ? 'true' : 'false'"
              aria-label="toggle task completion"
              class="mr-2 h-full"
            >
              <CheckboxIcon
                size="small"
                :class="[
                  { 'hover:text-green-700': !item.completed },
                  {
                    'text-green-700 bg-green-400 hover:bg-transparent':
                      item.completed
                  }
                ]"
              />
            </button>

            <span>{{ item.title }}</span>
          </div>

          <button
            @click="removeItem(item.id)"
            aria-label="remove task"
            class="ml-2"
          >
            <TrashIcon size="small" class="hover:text-red-500" />
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
