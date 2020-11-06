#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod cmd;
mod models;

use models::{AppData, Todo};

fn main() {
    tauri::AppBuilder::new()
        .invoke_handler(|_webview, arg| {
            use cmd::Cmd::*;
            match serde_json::from_str(arg) {
                Err(e) => Err(e.to_string()),
                Ok(command) => {
                    match command {
                        GetAllTodos { callback, error } => tauri::execute_promise(
                            _webview,
                            move || {
                                let todos = AppData::get_todos();

                                let serialized = serde_json::to_string(&todos)
                                    .expect("Can't serialize todos list to JSON");
                                Ok(serialized)
                            },
                            callback,
                            error,
                        ),

                        CreateTodo {
                            title,
                            callback,
                            error,
                        } => tauri::execute_promise(
                            _webview,
                            move || {
                                let todo = Todo::new_with_title(title);
                                AppData::create_todo(&todo);

                                let serialized = serde_json::to_string(&todo)
                                    .expect("Can't serialize new todo to JSON");
                                Ok(serialized)
                            },
                            callback,
                            error,
                        ),

                        UpdateTodo {
                            todo,
                            callback,
                            error,
                        } => tauri::execute_promise(
                            _webview,
                            move || {
                                AppData::update_todo(&todo);

                                Ok("{}".to_string())
                            },
                            callback,
                            error,
                        ),

                        RemoveTodo {
                            id,
                            callback,
                            error,
                        } => tauri::execute_promise(
                            _webview,
                            move || {
                                AppData::remove_todo(id);

                                Ok("{}".to_string())
                            },
                            callback,
                            error,
                        ),
                    }
                    Ok(())
                }
            }
        })
        .build()
        .run();
}
