<script>
import { createEventDispatcher } from 'svelte';

import PlusIcon from './icons/PlusIcon.svelte';

const dispatch = createEventDispatcher();

let newTitle = '';

function submit(event) {
  if (event.key !== undefined && event.key !== 'Enter') return;
  if (!newTitle.trim()) return;

  dispatch('add', { title: newTitle.trim() });
  newTitle = '';
  setFocus();
}

function setFocus() {
  // TODO: figure this out in svelte
  // if (input.value) input.value.focus();
}
</script>

<div
  class="mt-4 flex justify-between items-center px-3 py-2 text-gray-800 rounded bg-white"
>
  <input
    bind:value={newTitle}
    on:keydown={submit}
    id="new-item-input"
    aria-label="input for new task"
    class="mr-2 flex-auto"
  />

  <button
    on:click={submit}
    aria-label="submit new task"
    class="w-6 h-6 rounded-full hover:bg-gray-400"
  >
    <PlusIcon />
  </button>
</div>