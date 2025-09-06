import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Todo from "../../models/Todo.model";
import type { RootState } from "../../stores/store";

function initialState(): Todo[] {
    if (localStorage.length == 0) return [];

    const todoList: Todo[] = [];
    for (let index = 0; index < localStorage.length; index++) {
        try {
            const todoItemKey: string | null = localStorage.key(index);
            if (!todoItemKey) break;

            const todoItemValue = localStorage.getItem(todoItemKey);
            if (!todoItemValue) break;

            const todoItem: Todo = JSON.parse(todoItemValue);
            todoList.push(todoItem);
        } catch {
            continue;
        }
    }
    return todoList;
}

export const todosSlice = createSlice({
    name: "todos",
    initialState: initialState(),
    reducers: {
        addTodo: (state, action: PayloadAction<{ text: string; color?: string | null }>) => {
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                text: action.payload.text,
                color: action.payload.color ?? null,
                completedAt: null,
                createdAt: Date.now(),
            };
            state.push(newTodo);
            localStorage.setItem(newTodo.id, JSON.stringify(newTodo));
        },

        completeTodo: (state, action: PayloadAction<{ id: string }>) => {
            const sTodo: Todo | undefined = state.find((t) => t.id === action.payload.id);
            const lsTodo: Todo | null = localStorage.getItem(action.payload.id) ? JSON.parse(localStorage.getItem(action.payload.id) as string) : null;
            if (sTodo && lsTodo) {
                sTodo.completedAt = Date.now();
                lsTodo.completedAt = sTodo.completedAt;
                localStorage.setItem(lsTodo.id, JSON.stringify(lsTodo));
            }
        },

        uncompleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            const sTodo: Todo | undefined = state.find((t) => t.id === action.payload.id);
            const lsTodo: Todo | null = localStorage.getItem(action.payload.id) ? JSON.parse(localStorage.getItem(action.payload.id) as string) : null;
            if (sTodo && lsTodo) {
                sTodo.completedAt = null;
                lsTodo.completedAt = null;
                localStorage.setItem(lsTodo.id, JSON.stringify(lsTodo));
            }
        },

        removeTodo: (state, action: PayloadAction<{ id: string }>) => {
            localStorage.removeItem(action.payload.id);
            return state.filter((t) => t.id !== action.payload.id);
        },

        updateTodoColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
            const sTodo = state.find((t) => t.id === action.payload.id);
            const lsTodo = localStorage.getItem(action.payload.id) ? JSON.parse(localStorage.getItem(action.payload.id) as string) : null;
            if (sTodo && lsTodo) {
                sTodo.color = action.payload.color;
                lsTodo.color = action.payload.color;
                localStorage.setItem(lsTodo.id, JSON.stringify(lsTodo));
            }
        },
    },
});

export const { addTodo, completeTodo, removeTodo, uncompleteTodo, updateTodoColor } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
