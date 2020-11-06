<script lang="ts">
  import { onMount } from 'svelte';
  import { todos, incompleteCount } from './stores/todos';

  import List from './components/List.svelte';
  import NewItem from './components/NewItem.svelte';
  import DisplayCounts from './components/DisplayCounts.svelte';

  onMount(() => {
    todos.init();
  });
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<div class="flex justify-center h-screen pt-12 bg-gray-100">
  <div class="w-full max-w-lg mx-4">
    <List items={$todos} on:toggleComplete={todos.toggleComplete} on:remove={todos.remove} />

    <NewItem on:add={todos.add} />

    <DisplayCounts total={$todos.length} remaining={$incompleteCount} />
  </div>
</div>
