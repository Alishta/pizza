import React from 'react';
import { useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    removeFromCart,
} from '../../redux/slices/pizzaSlice';
import styles from './CartItem.module.scss';

const CartItemRedux = ({ item }) => {
    const { name, qty, id } = item;
    const dispatch = useDispatch();
    return (
        <div className={styles.cart__item}>
            <h3 className={styles.cart__heading}>{name}</h3>
            <div className={styles.cart__counter}>
                <button
                    onClick={() => dispatch(decrement(id))}
                    className={styles.cart__button}
                >
                    -
                </button>
                <p>{qty}</p>
                <button
                    onClick={() => dispatch(increment(id))}
                    className={styles.cart__button}
                >
                    +
                </button>
            </div>
            <button
                onClick={() => dispatch(removeFromCart(id))}
                className={styles.cart__button}
            >
                Delete
            </button>
        </div>
    );
};

export default CartItemRedux;
