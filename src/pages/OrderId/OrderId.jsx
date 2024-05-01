import { useSelector } from 'react-redux';
import styles from './OrderId.module.scss';

const OrderId = () => {
    const order = useSelector((state) => state.pizza.orderData);
    const total = order.orderPrice + order.priorityPrice;
    console.log(order);
    console.log(total);

    return (
        <div className={styles.order}>
            <h2 className={styles.order__info}>Order info</h2>
            <p className={styles.order__item}>
                Customer: {order.customer.toUpperCase()}
            </p>
            <p className={styles.order__item}>Status: {order.status}</p>
            <p className={styles.order__item}>
                Estimated Delivery: {order.estimatedDelivery}
            </p>
            <p className={styles.order__item}>
                Order Price: €{order.orderPrice}
            </p>
            <p className={styles.order__item}>
                Priority Price: €{order.priorityPrice}
            </p>
            <p className={styles.order__item}>
                Priority: {order.priority ? 'Yes' : 'No'}
            </p>

            <h2 className={styles.order__cart}>Cart</h2>
            <ul>
                {order.cart.map((item) => (
                    <div key={item.pizzaId}>
                        <li className={styles.cart__item}>
                            Name: {item.name} <br />
                            Quantity: {item.quantity} <br />
                            {/* Total Price: €{item.totalPrice} <br /> */}
                        </li>
                        <hr />
                    </div>
                ))}
                <p className={styles.total}>
                    Total Price: €{total} <br />
                </p>
            </ul>
        </div>
    );
};

export default OrderId;
