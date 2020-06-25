<script lang="typescript">
import List from '../components/List.svelte';
import NewItem from '../components/NewItem.svelte';
import DisplayCounts from '../components/DisplayCounts.svelte';

import todos from '../stores/todos';
</script>

<div>
    <h1 class="font-extrabold text-3xl tracking-wider text-center underline">
        TODOs
    </h1>

    <List items={$todos} />

    <NewItem on:add={todos.addItem} />

    <DisplayCounts total={$todos.length} remaining={todos.incompleteCount} />
</div>