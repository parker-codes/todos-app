use serde::{Serialize, Deserialize};
use uuid::Uuid;
use jfs::{Store, Config};

pub struct AppData;

impl AppData {
  fn store() -> Store {
    let app_dir_path = tauri::api::path::app_dir().expect("Couldn't determine app directory");

    if !app_dir_path.exists() {
        std::fs::create_dir(&app_dir_path).expect("Couldn't create app directory");
    }

    let data_path = &app_dir_path.join("data");
    let path = data_path.to_str().expect("Couldn't build app data file");

    println!("path: {}", &path);

    let mut cfg = Config::default();
    cfg.single = true; // store in single file
    if cfg!(debug_assertions) {
        cfg.pretty = true;
        cfg.indent = 4;
    }

    Store::new_with_cfg(&path, cfg).expect("Couldn't initialize store")
  }

  pub fn get_todos() -> Vec<Todo> {
    Self::store()
      .all().unwrap()
      .values().cloned().collect::<Vec<Todo>>()
  }

  pub fn create_todo(todo: &Todo) {
    Self::store()
      .save_with_id(todo, &todo.id)
      .expect("Couldn't add todo");
  }

  pub fn update_todo(todo: &Todo) {
    Self::store()
      .save_with_id(todo, &todo.id)
      .expect("Couldn't update todo");
  }

  pub fn remove_todo(id: String) {
    Self::store()
      .delete(&id)
      .expect("Couldn't delete todo")
  }
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Todo {
  id: String,
  title: String,
  completed: bool,
}

impl Todo {
  pub fn new_with_title(title: String) -> Self {
    let id = Uuid::new_v4().to_string();

    Todo {
      id,
      title,
      completed: false,
    }
  }
}