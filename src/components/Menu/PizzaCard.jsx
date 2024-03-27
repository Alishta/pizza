import React, { useState } from 'react';

const PizzaCard = ({card}) => {

    const [showCounter, setShowCounter] = useState(false);
    const [count, setPizzas] = useState(0);

    const handleAddToCart = () => {
        setShowCounter(true);
    }

    const handleIncrement = () => {
        setPizzas(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0) {
            setPizzas(count - 1);
        }
    }

    const handleDelete = () => {
        setPizzas(0);
        setShowCounter(false);
    }

    return (
        <li className="pizza">
            <img src={card.imageUrl} className="pizza__image" style={card.soldOut ? { filter: 'grayscale(100%)' } : {}}></img>
            <div className="pizza_info">
                <p className="pizza__name">{card.name}</p>
                <p className="pizza__ingredients">{card.ingredients.join(", ")}</p>
                <div className="pizza__actions">
                    <p className="pizza__price" style={card.soldOut ? { display: 'none' } : {}}>€{card.unitPrice}.00</p>

                    {card.soldOut ? 
                        <p className="pizza__price soldout">Sold out</p> : 
                        <>
                            {!showCounter ? (
                                <button className="button pizza__button" onClick={handleAddToCart}>Add to cart
                                </button>
                                ) : (
                                <div className="counter">
                                    <button className="pizza__button" onClick={handleDecrement}>-</button>
                                    <p>{count}</p>
                                    <button className="pizza__button" onClick={handleIncrement}>+</button>
                                    <button className="pizza__button" onClick={handleDelete}>Delete</button>
                                </div>
                            )}
                        </>
                    }
                </div>
            </div>
        </li>
    )
}

export default PizzaCard;