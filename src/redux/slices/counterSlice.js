import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export default counterSlice.reducer;
export const { decrement, increment, reset } = counterSlice.actions;
