import React from 'react';
import { useSelector } from 'react-redux';
import CartItemRedux from '../../components/CartItem/CartItem';
import styles from './Cart.module.scss';

const Cart = () => {
    // const items = useSelector((state) => state.pizza.items);
    const { items, totalItems, totalPrice } = useSelector(
        (state) => state.pizza
    );

    console.log(items);
    return (
        <div className={styles.cart}>
            <h1 className={styles.cart__heading}>Cart:</h1>
            <h2 className={styles.cart__totalitem}>
                Total items: {totalItems}
            </h2>
            <h2 className={styles.cart__totalprice}>
                Total price: {totalPrice}$
            </h2>
            <div className={styles.cart__items}>
                {!!items.length &&
                    items.map((item) => (
                        <CartItemRedux key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Cart;
