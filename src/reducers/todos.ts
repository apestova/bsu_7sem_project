import { createSlice } from '@reduxjs/toolkit';
import { addTodo, changeIsCompleted, deleteTodo, editTodo, TodoItemType } from "../actions/todos";

const defaultState: TodoItemType[] = [];

export const todosReducer = createSlice({
    name: '@todos',
    initialState: defaultState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addTodo.fulfilled, (state, { payload }) => [...state, payload]);
        builder.addCase(addTodo.rejected, () => alert("Error"));
        builder.addCase(editTodo.fulfilled, (state, { payload: { text, position } }) => {
            state[position].text = text;

            return state;
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.splice(payload, 1);
            return state;
        });
        builder.addCase(changeIsCompleted.fulfilled, (state, { payload }) => {
            state[payload].isCompleted = !state[payload].isCompleted;
            return state;
        });
    },
});
