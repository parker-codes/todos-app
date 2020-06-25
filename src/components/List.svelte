<script lang="typescript">
import CheckboxIcon from './icons/CheckboxIcon.svelte';
import TrashIcon from './icons/TrashIcon.svelte';

export let items;
</script>

<div class="my-4">
    {#each $todos as todo (todo.id)}
        <div class="mb-2 flex justify-between { todo.completed ? 'line-through text-gray-700' : '' }">
            <div class="flex">
                <button on:click={() => items.toggleComplete(todo.id)} class="mr-2 h-full">
                    <CheckboxIcon size="small" class="{ todo.completed ? 'text-green-700 bg-green-400 hover:bg-transparent' : 'hover:text-green-700' }" />
                </button>

                <span>{todo.title}</span>
            </div>

            <button on:click={() => todos.removeItem(todo.id)} class="ml-2">
                <TrashIcon size="small" class="hover:text-red-500" />
            </button>
        </div>
    {/each}
</div>