use crate::models::{AppData, Todo};
use tauri::{command, AppHandle};

#[command]
pub fn get_all_todos(app: AppHandle) -> Result<String, String> {
  let todos = AppData::new(app.path_resolver().app_dir()).get_todos();

  let serialized = serde_json::to_string(&todos).expect("Can't serialize todos list to JSON");
  Ok(serialized)
}

#[command]
pub fn create_todo(app: AppHandle, title: String) -> Result<String, String> {
  let todo = Todo::new_with_title(title);
  AppData::new(app.path_resolver().app_dir()).create_todo(&todo);

  let serialized = serde_json::to_string(&todo).expect("Can't serialize new todo to JSON");
  Ok(serialized)
}

#[command]
pub fn update_todo(app: AppHandle, todo: Todo) -> Result<(), String> {
  AppData::new(app.path_resolver().app_dir()).update_todo(&todo);
  Ok(())
}

#[command]
pub fn remove_todo(app: AppHandle, id: String) -> Result<(), String> {
  AppData::new(app.path_resolver().app_dir()).remove_todo(id);
  Ok(())
}
