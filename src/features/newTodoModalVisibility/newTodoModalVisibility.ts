import { createSlice } from "@reduxjs/toolkit";

const initialState = { visibility: false };


const newTodoModalVisibility = createSlice({
    name: 'newTodoModalVisibility',
    initialState,
    reducers: {
        show: (state) => {
            state.visibility = true;
        },
        hide: (state) => {
            state.visibility = false;
        }
    }
})

export const { show, hide } = newTodoModalVisibility.actions;
export default newTodoModalVisibility.reducer;