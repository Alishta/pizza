import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    increment,
    decrement,
    removeFromCart,
    // orderData,
} from '../../redux/slices/pizzaSlice';

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
        <li className="pizza">
            <img
                src={pizza.imageUrl}
                className="pizza__image"
                style={pizza.soldOut ? { filter: 'grayscale(100%)' } : {}}
                alt={pizza.name}
            ></img>
            <div className="pizza_info">
                <p className="pizza__name">{pizza.name}</p>
                <p className="pizza__ingredients">
                    {pizza.ingredients.join(', ')}
                </p>
                <div className="pizza__actions">
                    <p
                        className="pizza__price"
                        style={pizza.soldOut ? { display: 'none' } : {}}
                    >
                        €{pizza.unitPrice}.00
                    </p>

                    {pizza.soldOut ? (
                        <p className="pizza__price soldout">Sold out</p>
                    ) : (
                        <>
                            {!showCounter ? (
                                <button
                                    className="button pizza__button"
                                    onClick={() => handleAddToCart(pizza)}
                                >
                                    Add to cart
                                </button>
                            ) : (
                                <div className="counter">
                                    <button
                                        className="pizza__button"
                                        onClick={() =>
                                            handleDecrement(pizza.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <p>{item[0].qty}</p>
                                    <button
                                        className="pizza__button"
                                        onClick={() =>
                                            handleIncrement(pizza.id)
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        className="pizza__button"
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
