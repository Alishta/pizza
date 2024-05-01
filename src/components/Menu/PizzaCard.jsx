import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    increment,
    decrement,
    removeFromCart,
    // orderData,
} from '../../redux/slices/pizzaSlice';
import styles from './PizzaCard.module.scss';

const PizzaCard = ({ pizza }) => {
    const [showCounter, setShowCounter] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.pizza.items);

    const item = items.filter((item) => item.id === pizza.id);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        setShowCounter(true);
    };

    const handleIncrement = (pizza) => {
        dispatch(increment(pizza));
    };

    const handleDecrement = (pizza) => {
        dispatch(decrement(pizza));
    };

    const handleDelete = (item) => {
        dispatch(removeFromCart(item));
        setShowCounter(false);
    };
    return (
        <li className={styles.pizza}>
            <img
                src={pizza.imageUrl}
                className={styles.pizza__image}
                style={pizza.soldOut ? { filter: 'grayscale(100%)' } : {}}
                alt={pizza.name}
            ></img>
            <div className={styles.pizza_info}>
                <p className={styles.pizza__name}>{pizza.name}</p>
                <p className={styles.pizza__ingredients}>
                    {pizza.ingredients.join(', ')}
                </p>
                <div className={styles.pizza__actions}>
                    <p
                        className={styles.pizza__price}
                        style={pizza.soldOut ? { display: 'none' } : {}}
                    >
                        €{pizza.unitPrice}.00
                    </p>

                    {pizza.soldOut ? (
                        <p className={styles.pizza__price}>Sold out</p>
                    ) : (
                        <>
                            {!showCounter ? (
                                <button
                                    className={styles.pizza__button}
                                    onClick={() => handleAddToCart(pizza)}
                                >
                                    Add to cart
                                </button>
                            ) : (
                                <div className={styles.counter}>
                                    <button
                                        className={styles.pizza__button}
                                        onClick={() =>
                                            handleDecrement(pizza.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <p>{item[0].qty}</p>
                                    <button
                                        className={styles.pizza__button}
                                        onClick={() =>
                                            handleIncrement(pizza.id)
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        className={styles.pizza__button}
                                        onClick={() => handleDelete(pizza.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </li>
    );
};

export default PizzaCard;
