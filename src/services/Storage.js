import tauri from 'tauri/api/tauri';

if (!window.external) { window.external = {}; }
if (!window.external.invoke) { window.external.invoke = () => {}; }

async function all() {
  const all = await tauri.promisified({
    cmd: 'getAllTodos',
  });
  return JSON.parse(all);
}

async function create({ title }) {
  const todo = await tauri.promisified({
    cmd: 'createTodo',
    title,
  });
  return JSON.parse(todo);
}

function update(todo) {
  return tauri.promisified({
    cmd: 'updateTodo',
    todo,
  });
}

function remove(id) {
  return tauri.promisified({
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
