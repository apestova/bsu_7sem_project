import { createSlice } from '@reduxjs/toolkit';
import {
    addTodo,
    changeIsCompleted,
    deleteTodo,
    editTodo,
    getTodosFromLocalStorage,
    TodoItemType
} from "../actions/todos";

const defaultState: TodoItemType[] = [];

export const todosReducer = createSlice({
    name: '@todos',
    initialState: defaultState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addTodo.fulfilled, (state, { payload }) => {
            state.unshift(payload);

            localStorage.setItem("todo_list.todos", JSON.stringify(state));
            return state;
        });
        builder.addCase(addTodo.rejected, () => alert("Error"));
        builder.addCase(editTodo.fulfilled, (state, { payload: { text, position } }) => {
            state[position].text = text;

            localStorage.setItem("todo_list.todos", JSON.stringify(state));
            return state;
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.splice(payload, 1);
            localStorage.setItem("todo_list.todos", JSON.stringify(state));
            return state;
        });
        builder.addCase(changeIsCompleted.fulfilled, (state, { payload }) => {
            const changedTodo = state[payload];
            changedTodo.isCompleted = !changedTodo.isCompleted;

            state.splice(payload, 1);
            state.unshift(changedTodo);

            localStorage.setItem("todo_list.todos", JSON.stringify(state));
            return state;
        });
        builder.addCase(getTodosFromLocalStorage.fulfilled, (state, { payload }) => JSON.parse(payload));
        builder.addCase(getTodosFromLocalStorage.rejected, () => alert("Error"));
    },
});
