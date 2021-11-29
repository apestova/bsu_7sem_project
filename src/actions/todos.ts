import { createAsyncThunk } from '@reduxjs/toolkit';

export type TodoItemType = {
    text: string;
    isCompleted: boolean;
}

export const addTodo = createAsyncThunk(
    '@todos/addTodo',
    (todo: TodoItemType, { rejectWithValue }) => {
        if (todo.text.length > 40)
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
