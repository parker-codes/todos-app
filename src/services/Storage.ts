import type { InvokeArgs } from '@tauri-apps/api/tauri';
import type { Todo } from '../models/Todo';

async function all(): Promise<Todo[]> {
  const all: string = await invoke('get_all_todos');
  return JSON.parse(all);
}

async function create(title: string): Promise<Todo> {
  const todo: string = await invoke('create_todo', { title });
  return JSON.parse(todo);
}

function update(todo: Todo): Promise<Todo> {
  return invoke('update_todo', { todo });
}

function remove(id: string): Promise<boolean> {
  return invoke('remove_todo', { id });
}

export default {
  all,
  create,
  update,
  remove
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function invoke(cmd: string, args?: InvokeArgs): Promise<any> {
  const { invoke: tauri_invoke } = await import('@tauri-apps/api/tauri');
  return tauri_invoke(cmd, args);
}
