import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initValues = {
    pizzas: [],
    items: [],
    totalPrice: 0,
    totalItems: 0,
    isLoading: false,
    error: null,
};

export const fetchAllPizzas = createAsyncThunk(
    'pizza/fetchAllPizzas',
    async () => {
        const res = await fetch(
            'https://react-fast-pizza-api.onrender.com/api/menu'
        );
        const { data } = await res.json();
        return data;
    }
);

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initValues,
    reducers: {
        addToCart: (state, action) => {
            const existedItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (!existedItem) {
                state.items.push({ ...action.payload, qty: 1 });
            } else {
                existedItem.qty = existedItem.qty + 1;
            }

            state.totalItems = calcTotalItems(state.items);
            state.totalPrice = calcTotalPrice(state.items);
            // state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== idToRemove);
            state.totalItems = calcTotalItems(state.items);
            state.totalPrice = calcTotalPrice(state.items);
        },
        increment: (state, action) => {
            const existedItem = state.items.find(
                (item) => item.id === action.payload
            );
            existedItem.qty = existedItem.qty + 1;
            state.totalItems = calcTotalItems(state.items);
            state.totalPrice = calcTotalPrice(state.items);
        },
        decrement: (state, action) => {
            const existedItem = state.items.find(
                (item) => item.id === action.payload
            );
            if (existedItem.qty > 1) {
                existedItem.qty = existedItem.qty - 1;
            }

            state.totalItems = calcTotalItems(state.items);
            state.totalPrice = calcTotalPrice(state.items);
        },
        orderData: (state, action) => {
            state.orderData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPizzas.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        });

        builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pizzas = action.payload;
        });

        builder.addCase(fetchAllPizzas.rejected, (state) => {
            state.isLoading = false;
            state.error = 'fetch error';
        });
    },
});

export default pizzaSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, orderData } =
    pizzaSlice.actions;

const calcTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.qty, 0);

const calcTotalPrice = (items) =>
    items.reduce((acc, item) => acc + item.unitPrice * item.qty, 0);
