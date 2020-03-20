<template>
  <div
    class="mt-4 flex justify-between items-center px-3 py-2 text-gray-800 rounded bg-white"
  >
    <input
      v-model="newTitle"
      @keydown.enter="submit"
      id="new-item-input"
      ref="input"
      aria-label="input for new task"
      class="mr-2 flex-auto"
    />

    <button
      @click="submit"
      aria-label="submit new task"
      class="w-6 h-6 rounded-full hover:bg-gray-400"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api';
import PlusIcon from '@/components/icons/PlusIcon.vue';

export default createComponent({
  setup(_, { emit }) {
    const newTitle = ref('');
    const input = ref<HTMLElement>(null);

    function submit() {
      if (!newTitle.value.trim()) return;

      emit('submit', newTitle.value.trim());
      newTitle.value = '';
      setFocus();
    }

    function setFocus() {
      if (input.value) input.value.focus();
    }

    return { newTitle, input, submit };
  },

  components: { PlusIcon }
});
</script>
