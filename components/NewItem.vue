<template>
  <div class="mt-4 flex px-3 py-2 text-gray-800 rounded bg-white">
    <input v-model="newTitle" @keydown.enter="submit" class="mr-2" />

    <button @click="submit">
      <PlusIcon classes="hover:bg-gray-400" />
    </button>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api';
import PlusIcon from '@/components/icons/PlusIcon.vue';

export default createComponent({
  setup(props, { emit }) {
    const newTitle = ref('');

    function submit() {
      if (!newTitle.value.trim()) return;
      emit('submit', newTitle.value.trim());
      newTitle.value = '';
    }

    return { newTitle, submit };
  },

  components: { PlusIcon }
});
</script>
