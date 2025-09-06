import { createSlice } from "@reduxjs/toolkit";

const initialState = { text: "Todo App" };


const appTitleSlice = createSlice({
    name: 'appTitle',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { setTitle } = appTitleSlice.actions;
export default appTitleSlice.reducer;