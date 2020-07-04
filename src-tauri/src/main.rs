#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;

use cmd::{AppData, Todo};

fn main() {
  tauri::AppBuilder::new()
    .invoke_handler(|_webview, arg| {
      use cmd::Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => {
          Err(e.to_string())
        }
        Ok(command) => {
          match command {
            GetAllTodos { callback, error } => {
              // get all todos
              tauri::execute_promise(
                _webview,
                move || {
                  println!("GetAllTodos");

                  let todos: Vec<Todo> = vec![];
                  let serialized = serde_json::to_string(&todos).unwrap();
                  Ok(serialized)
                },
                callback,
                error,
              )
            },

            CreateTodo { title, callback, error } => {
              // get all todos
              tauri::execute_promise(
                _webview,
                move || {
                  println!("CreateTodo");
                  println!("{}", title);

                  let todo = Todo::new_with_title(title);
                  let serialized = serde_json::to_string(&todo).unwrap();
                  Ok(serialized)
                },
                callback,
                error,
              )
            },

            UpdateTodo { todo, callback, error } => {
              tauri::execute_promise(
                _webview,
                move || {
                  println!("UpdateTodo");
                  println!("{:?}", todo);
                  // find with todo.id

                  Ok("{}".to_string())
                },
                callback,
                error,
              )
            },

            RemoveTodo { id, callback, error } => {
              // get all todos
              tauri::execute_promise(
                _webview,
                move || {
                  println!("RemoveTodo");
                  println!("{}", id);

                  Ok("{}".to_string())
                },
                callback,
                error,
              )
            },
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}
