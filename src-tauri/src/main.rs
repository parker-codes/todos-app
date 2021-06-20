#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;
mod models;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      cmd::get_all_todos,
      cmd::create_todo,
      cmd::update_todo,
      cmd::remove_todo
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
