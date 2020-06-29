import { writable, derived } from 'svelte/store';

function createTodos() {
  const { subscribe, update } = writable([]);

  function add({ detail }) {
    update((todos) => {
      const newTodo = new Todo({ title: detail.title });
      console.log('newTodo', newTodo);
      todos.push(newTodo);
      console.log('todos', todos);
      return todos;
    });
  }

  function toggleComplete({ detail }) {
    update((todos) => {
      const todo = todos.find((todo) => todo.id === detail.id);
      if (!todo) return;

      todo.completed ? todo.markAsIncomplete() : todo.markAsComplete();
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

class Todo {
  id;
  title;
  completed = false;

  constructor({ id = undefined, title = '', completed = false } = {}) {
    this.id = id || this._generateId();
    this.title = title || '';
    this.completed = completed;
  }

  markAsComplete() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  _generateId() {
    return Math.random().toString(36).substring(2, 15);
  }
}
