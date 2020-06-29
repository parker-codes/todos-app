<script>
import { todos, incompleteCount } from '../stores/todos';

import List from '../components/List.svelte';
import NewItem from '../components/NewItem.svelte';
import DisplayCounts from '../components/DisplayCounts.svelte';
</script>

<div>
    <h1 class="font-extrabold text-3xl tracking-wider text-center underline">
        TODOs
    </h1>

    <List items={$todos} on:toggleComplete={todos.toggleComplete} on:remove={todos.remove} />

    <NewItem on:add={todos.add} />

    <DisplayCounts total={$todos.length} remaining={$incompleteCount} />
</div>