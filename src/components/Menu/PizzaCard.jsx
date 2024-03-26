import React, { useState } from 'react';
import Counter from "../Counter/Counter";

const PizzaCard = ({card}) => {

    const [showCounter, setShowCounter] = useState(false);
      
    const handleAddToCart = () => {
        setShowCounter(true);
    };

    const handleResetCounter = () => {
        setShowCounter(false);
    };

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
                                <Counter onAddToCart={handleResetCounter}/>
                            )}
                        </>
                    }
                </div>
            </div>
        </li>
    )
}

export default PizzaCard;