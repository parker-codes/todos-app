import { writable, derived } from 'svelte/store';

function createTodos() {
  const { subscribe, update } = writable([]);

  function add({ detail }) {
    update((todos) => {
      const newTodo = Todo({ title: detail.title });
      todos.push(newTodo);
      return todos;
    });
  }

  function toggleComplete({ detail }) {
    update((todos) => {
      const todo = todos.find((todo) => todo.id === detail.id);
      if (!todo) return;

      todo.completed = !todo.completed;
      return todos;
    });
  }

  function remove({ detail }) {
    update((todos) => {
      const index = todos.findIndex((todo) => todo.id === detail.id);
      todos.splice(index, 1);
      return todos;
    });
  }

  return {
    subscribe,
    add,
    toggleComplete,
    remove,
  };
}

export const todos = createTodos();

export const incompleteCount = derived(
  todos,
  ($todos) => $todos.filter((todo) => !todo.completed).length
);

function Todo({ id = generateId(), title = '', completed = false } = {}) {
  return { id, title, completed };
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}
