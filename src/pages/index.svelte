<script>
  import { onMount } from 'svelte';
  import { todos, incompleteCount } from '../stores/todos';

  import List from '../components/List.svelte';
  import NewItem from '../components/NewItem.svelte';
  import DisplayCounts from '../components/DisplayCounts.svelte';

  onMount(() => {
    todos.init();
  });
</script>

<div class="mx-4 w-full max-w-lg">
  <h1
    class="font-extrabold text-3xl text-gray-900 tracking-wider text-center
    underline">
    TODOs
  </h1>

  <List
    items={$todos}
    on:toggleComplete={todos.toggleComplete}
    on:remove={todos.remove} />

  <NewItem on:add={todos.add} />

  <!-- <DisplayCounts total={$todos.length} remaining={$incompleteCount} /> -->
</div>
