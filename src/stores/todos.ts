import { writable } from 'svelte/store';

function createTodos() {
  const { subscribe, set, update } = writable([]);

  function add(todo) {
    update((todos) => todos.push(todo));
  }

  return {
    subscribe,
  };
}

export const todos = createTodos();
