import React from 'react';
import { useSelector } from 'react-redux';
import CartItemRedux from '../components/CartItem';

const Cart = () => {
    // const items = useSelector((state) => state.pizza.items);
    const { items, totalItems, totalPrice } = useSelector(
        (state) => state.pizza
    );

    console.log(items);
    return (
        <div>
            <h1>Cart:</h1>
            <h2>Total items: {totalItems}</h2>
            <h2>Total price: {totalPrice}$</h2>

            {!!items.length &&
                items.map((item) => (
                    <CartItemRedux key={item.id} item={item} />
                ))}
        </div>
    );
};

export default Cart;
