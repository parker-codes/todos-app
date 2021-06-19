export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface NewTodo {
  title: string;
}

export interface ExistingTodo {
  id: string;
}
