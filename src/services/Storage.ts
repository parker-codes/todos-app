// TODO: this doesn't work either
// following https://github.com/tauri-apps/tauri/pull/1517
import { tauri } from '@tauri-apps/api';
// import { invoke } from '@tauri-apps/api/tauri';
import type { Todo } from '../models/Todo';

async function all(): Promise<Todo[]> {
  const all: string = await tauri.invoke('get_all_todos');
  return JSON.parse(all);
}

async function create(title: string): Promise<Todo> {
  const todo: string = await tauri.invoke('create_todo', { title });
  return JSON.parse(todo);
}

function update(todo: Todo): Promise<Todo> {
  return tauri.invoke('update_todo', { todo });
}

function remove(id: string): Promise<boolean> {
  return tauri.invoke('remove_odo', { id });
}

export default {
  all,
  create,
  update,
  remove
};
