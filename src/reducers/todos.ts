import { createSlice } from '@reduxjs/toolkit';
import { addTodo, TodoItemType } from "../actions/todos";

const defaultState: TodoItemType[] = [];

export const todosReducer = createSlice({
    name: '@todos',
    initialState: defaultState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addTodo.fulfilled, (state, { payload }) => [...state, payload]);
        builder.addCase(addTodo.rejected, () => alert("Error"));
    },
});
