import { writable, derived } from 'svelte/store';
import Storage from '../services/Storage';

function createTodos() {
  const { subscribe, set, update } = writable([]);

  async function init() {
    const todos = await Storage.all();
    set(todos);
  }

  function add({ detail }) {
    update((todos) => {
      const newTodo = await Storage.create({ title: detail.title });
      todos.push(newTodo);
      return todos;
    });
  }

  function toggleComplete({ detail }) {
    update((todos) => {
      const todo = todos.find((todo) => todo.id === detail.id);
      if (!todo) return;

      todo.completed = !todo.completed;
      Storage.update(todo);
      return todos;
    });
  }

  function remove({ detail }) {
    update((todos) => {
      const index = todos.findIndex((todo) => todo.id === detail.id);
      todos.splice(index, 1);
      Storage.remove(detail.id);
      return todos;
    });
  }

  return {
    subscribe,
    init,
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
