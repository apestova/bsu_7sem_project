import { configureStore } from '@reduxjs/toolkit';

import { todosReducer } from '../reducers/todos';

const store = configureStore({
    reducer: {
        todos: todosReducer.reducer,
    }
});

export default store;
