<script>
import { fade } from 'svelte/transition';

export let total;
export let remaining;
</script>

{#if total > 0}
  <div transition:fade class="text-center text-sm text-gray-700 mt-3">
    <span class="font-bold">{remaining}</span>
    <span>remaining out of</span>
    <span class="font-bold">{total}</span>
  </div>
{/if}