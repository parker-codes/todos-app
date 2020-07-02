import tauri from 'tauri/api/tauri';

function all() {
  return tauri.promisified({
    cmd: 'getAllTodos',
  });
}

function create({ title }) {
  return tauri.promisified({
    cmd: 'createTodo',
    title,
  });
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
