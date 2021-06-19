use crate::models::{AppData, Todo};

#[tauri::command]
pub fn get_all_todos() -> Result<String, String> {
  let todos = AppData::get_todos();

  let serialized = serde_json::to_string(&todos).expect("Can't serialize todos list to JSON");
  Ok(serialized)
}

#[tauri::command]
pub fn create_todo(title: String) -> Result<String, String> {
  let todo = Todo::new_with_title(title);
  AppData::create_todo(&todo);

  let serialized = serde_json::to_string(&todo).expect("Can't serialize new todo to JSON");
  Ok(serialized)
}

#[tauri::command]
pub fn update_todo(todo: Todo) -> Result<(), String> {
  AppData::update_todo(&todo);
  Ok(())
}

#[tauri::command]
pub fn remove_todo(id: String) -> Result<(), String> {
  AppData::remove_todo(id);
  Ok(())
}
