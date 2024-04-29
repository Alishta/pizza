import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../slices/pizzaSlice';
import counterReducer from '../slices/counterSlice';

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        counter: counterReducer,
    },
});
