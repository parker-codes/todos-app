<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import type { Todo } from '../models/Todo';
  import { log } from '../services/Storage';

  import CheckboxIcon from './icons/CheckboxIcon.svelte';
  import TrashIcon from './icons/TrashIcon.svelte';

  export let items: Todo[];

  const dispatch = createEventDispatcher();

  const flipDurationMs = 200;

  function handleDrag(event) {
    items = event.detail.items;
  }

  function handleDrop(event) {
    items = event.detail.items;
    log('itemes', items);
  }
</script>

<div
  class="m-4 text-gray-900"
  use:dndzone={{ items, flipDurationMs }}
  on:consider={handleDrag}
  on:finalize={handleDrop}
>
  {#each items as todo (todo.id)}
    <div
      animate:flip={{ duration: flipDurationMs }}
      class="mb-2 w-full flex justify-between {todo.completed ? 'line-through text-gray-700' : ''}"
    >
      <div class="flex items-center justify-start flex-shrink-0 mr-2">
        <button
          on:click={() => dispatch('toggleComplete', { id: todo.id })}
          tabindex="0"
          aria-label="toggle task completion"
          aria-checked={todo.completed ? 'true' : 'false'}
          class="w-5 h-5 border-0 rounded-full {todo.completed
            ? 'text-green-700 bg-green-400 hover:bg-green-200'
            : 'hover:text-green-700'}"
        >
          <CheckboxIcon />
        </button>
      </div>

      <div class="flex-auto">{todo.title}</div>

      <div class="flex items-center justify-start flex-shrink-0 ml-2">
        <button
          on:click={() => dispatch('remove', { id: todo.id })}
          class="w-5 h-5 border-0"
          tabindex="0"
        >
          <TrashIcon class="hover:text-red-500" />
        </button>
      </div>
    </div>
  {/each}
</div>
