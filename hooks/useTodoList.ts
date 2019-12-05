import { ref, Ref, computed } from '@vue/composition-api';

export default () => {
  const todos: Ref<Todo[]> = ref([]);
  const incompleteCount = computed(
    () => todos.value.filter(todo => !todo.completed).length
  );

  function addItem(title: string): void {
    const newTodo = new Todo(title);
    todos.value = [...todos.value, newTodo];
  }

  function toggleComplete(id: string): void {
    const todo = todos.value.find(todo => todo.id === id);
    if (!todo) return;

    todo.completed ? todo.markAsIncomplete() : todo.markAsComplete();
  }

  function removeItem(id: string): void {
    todos.value = todos.value.filter(todo => todo.id !== id);
  }

  return { todos, addItem, toggleComplete, removeItem, incompleteCount };
};

class Todo {
  id: string = this.generateId();
  title: string;
  completed: boolean = false;

  constructor(title: string) {
    this.title = title;
  }

  markAsComplete() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  private generateId(): string {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  }
}
