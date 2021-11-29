import { createAsyncThunk } from '@reduxjs/toolkit';

export type TodoItemType = {
    text: string;
    isCompleted: boolean;
}

export const addTodo = createAsyncThunk(
    '@todos/addTodo',
    (todo: TodoItemType, { rejectWithValue }) => {
        if (todo.text.length > 40 || todo.text.length < 1)
            return rejectWithValue("");

        return todo;
    }
);

export const editTodo = createAsyncThunk(
    '@todos/editTodo',
    ({ text, position }: { text: string, position: number }) => ({ text, position })
);

export const deleteTodo = createAsyncThunk(
    '@todos/deleteTodo',
    (index: number) => index
);

export const changeIsCompleted = createAsyncThunk(
    '@todos/changeIsCompleted',
    (index: number) => index
);

export const getTodosFromLocalStorage = createAsyncThunk(
    '@notes/getNotesFromLocalStorage',
    (_, { rejectWithValue }) => {
        try {
            return localStorage.getItem("todo_list.todos") || '';
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
