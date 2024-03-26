import React, { useState } from "react";

const Counter = ({onAddToCart}) => {

    const [count, setPizzas] = useState(0)

    const handleIncrement = () => {
        setPizzas(count + 1)
    }

    const handleDelete = () => {
        setPizzas(0)
        onAddToCart()
    }

    const handleDecrement = () => {
        if(count > 0) {
            setPizzas(count - 1)
        }
    }

    return (
        <div className="counter">
            <button className="pizza__button" onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button className="pizza__button" onClick={handleIncrement}>+</button>
            <button className="pizza__button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Counter;