import { useSelector } from 'react-redux';

const OrderId = () => {
    const order = useSelector((state) => state.pizza.orderData);
    const total = order.orderPrice + order.priorityPrice;
    console.log(order);
    console.log(total);

    return (
        <div className="order">
            <div>Customer: {order.customer}</div>
            <div>Status: {order.status}</div>
            <div>Estimated Delivery: {order.estimatedDelivery}</div>
            <div>Order Price: €{order.orderPrice}</div>
            <div>Priority Price: €{order.priorityPrice}</div>
            <div>Priority: {order.priority ? 'Yes' : 'No'}</div>

            <h2>Cart</h2>
            <ul>
                {order.cart.map((item) => (
                    <div key={item.pizzaId}>
                        <li>
                            Name: {item.name} <br />
                            Quantity: {item.quantity} <br />
                            {/* Total Price: €{item.totalPrice} <br /> */}
                        </li>
                        <hr />
                    </div>
                ))}
                Total Price: €{total} <br />
            </ul>
        </div>
    );
};

export default OrderId;
