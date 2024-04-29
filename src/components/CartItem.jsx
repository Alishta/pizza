import React from 'react';
import { useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    removeFromCart,
} from '../redux/slices/pizzaSlice';

const CartItemRedux = ({ item }) => {
    const { name, qty, id } = item;
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={() => dispatch(increment(id))}>+</button>
            <p>{qty}</p>
            <button onClick={() => dispatch(decrement(id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(id))}>Delete</button>
        </div>
    );
};

export default CartItemRedux;
