<script>
import { createEventDispatcher } from 'svelte';
import { slide } from 'svelte/transition';

import CheckboxIcon from './icons/CheckboxIcon.svelte';
import TrashIcon from './icons/TrashIcon.svelte';

export let items;

const dispatch = createEventDispatcher();
</script>

<div class="my-4">
    {#each items as todo (todo.id)}
        <div transition:slide class="mb-2 w-full flex justify-between { todo.completed ? 'line-through text-gray-700' : '' }">
            <div class="flex">
                <button
                    on:click={() => dispatch('toggleComplete', { id: todo.id })}
                    aria-label="toggle task completion"
                    aria-checked={todo.completed ? 'true' : 'false'}
                    class="mr-2 w-6 h-6 rounded-full { todo.completed ? 'text-green-700 bg-green-400 hover:bg-transparent' : 'hover:text-green-700' }">
                    <CheckboxIcon />
                </button>

                <span class="w-4/5 truncate">{todo.title}</span>
            </div>

            <button on:click={() => dispatch('remove', { id: todo.id })} class="ml-2 w-4">
                <TrashIcon class="hover:text-red-500" />
            </button>
        </div>
    {/each}
</div>