import type { InvokeArgs } from '@tauri-apps/api/tauri';
import type { Todo } from '../models/Todo';

async function all(): Promise<Todo[]> {
  const all: string = await invoke('get_all_todos');
  return JSON.parse(all);
}

async function create(title: string, index: number): Promise<Todo> {
  const todo: string = await invoke('create_todo', { title, index });
  return JSON.parse(todo);
}

function update(todo: Todo): Promise<Todo> {
  return invoke('update_todo', { todo });
}

function remove(id: string): Promise<boolean> {
  return invoke('remove_todo', { id });
}

export function log(event: string, payload: unknown = undefined): void {
  console.log(event, payload);

  payload = (typeof payload === 'string') ? payload : JSON.stringify(payload);
  invoke('log', { event, payload });
}

export default {
  all,
  create,
  update,
  remove
};

// TODO: remove this when type=module error is fixed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function invoke(cmd: string, args?: InvokeArgs): Promise<any> {
  const { invoke: tauri_invoke } = await import('@tauri-apps/api/tauri');
  return tauri_invoke(cmd, args);
}
