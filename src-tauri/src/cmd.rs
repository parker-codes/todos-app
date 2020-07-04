use serde::{Serialize, Deserialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct AppData {
  todos: Vec<Todo>,
}

#[derive(Debug, Serialize, Deserialize)]
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


#[derive(Deserialize)]
#[serde(tag = "cmd", rename_all = "camelCase")]
pub enum Cmd {
  GetAllTodos {
    callback: String,
    error: String,
  },

  CreateTodo {
    title: String,
    callback: String,
    error: String,
  },

  UpdateTodo {
    todo: Todo,
    callback: String,
    error: String,
  },

  RemoveTodo {
    id: String,
    callback: String,
    error: String,
  },
}
