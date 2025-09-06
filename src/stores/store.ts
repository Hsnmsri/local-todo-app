import { configureStore } from "@reduxjs/toolkit";
import appTitleReducer from "../features/appTitle/appTitle"
import todosReducer from "../features/todo/todo"
import newTodoModalVisibilityReducer from "../features/newTodoModalVisibility/newTodoModalVisibility"

export const store = configureStore({
    reducer: {
        appTitle: appTitleReducer,
        todos: todosReducer,
        newTodoModalVisibility: newTodoModalVisibilityReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 