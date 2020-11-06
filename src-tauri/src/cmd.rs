use crate::Todo;
use serde::Deserialize;

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
