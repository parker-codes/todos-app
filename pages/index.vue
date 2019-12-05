<template>
  <div>
    <h1 class="font-extrabold text-3xl tracking-wider text-center underline">
      TODOs
    </h1>

    <List :items="todos" v-bind="{ toggleComplete, removeItem }" />

    <NewItem @submit="addItem" />

    <DisplayCounts :total="todos.length" :remaining="incompleteCount" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import List from '@/components/List.vue';
import NewItem from '@/components/NewItem.vue';
import DisplayCounts from '@/components/DisplayCounts.vue';
import useTodoList from '@/hooks/useTodoList';

export default createComponent({
  setup() {
    const {
      todos,
      addItem,
      toggleComplete,
      removeItem,
      incompleteCount
    } = useTodoList();

    return { todos, addItem, toggleComplete, removeItem, incompleteCount };
  },

  components: { List, NewItem, DisplayCounts }
});
</script>
