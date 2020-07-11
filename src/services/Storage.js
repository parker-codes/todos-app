import { promisified } from 'tauri/api/tauri';

if (!window.external) { window.external = {}; }
if (!window.external.invoke) { window.external.invoke = () => {}; }

async function all() {
  const all = await promisified({
    cmd: 'getAllTodos',
  });
  return JSON.parse(all);
}

async function create({ title }) {
  const todo = await promisified({
    cmd: 'createTodo',
    title,
  });
  return JSON.parse(todo);
}

function update(todo) {
  return promisified({
    cmd: 'updateTodo',
    todo,
  });
}

function remove(id) {
  return promisified({
    cmd: 'removeTodo',
    id,
  });
}

export default {
  all,
  create,
  update,
  remove,
};
