#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;
mod models;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![cmd::get_all_todos])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
