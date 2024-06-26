import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderData } from '../../redux/slices/pizzaSlice';
import styles from './NewOrder.module.scss';

const schema = yup.object().shape({
    customer: yup.string().required('Name is required field'),
    phone: yup.string().required('Phone number is required field'),
    address: yup.string().required('Address is required field'),
});

const OrderPage = () => {
    const [formError, setFormError] = useState('');
    const pizzas = useSelector((state) => state.pizza);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartData = useMemo(() => {
        return pizzas.items.map((item) => ({
            pizzaId: item.id,
            name: item.name,
            quantity: item.qty,
            unitPrice: item.unitPrice,
            totalPrice: item.qty * item.unitPrice,
        }));
    }, [pizzas.items]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            customer: '',
            phone: '',
            address: '',
        },
        resolver: yupResolver(schema),
    });

    const sendOrder = async (data) => {
        try {
            const response = await fetch(
                'https://react-fast-pizza-api.onrender.com/api/order',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...data,
                        totalPrice: pizzas.totalPrice,
                        cart: cartData,
                    }),
                }
            );

            const responseData = await response.json();

            if (responseData.status === 'fail') {
                setFormError(responseData.message);
            }

            if (responseData.status === 'success') {
                dispatch(orderData(responseData.data));
                navigate('/order/' + responseData.data.id);
            }
        } catch (error) {
            setFormError(error.message);
        }
    };

    const onSubmit = (data) => {
        sendOrder(data);
        reset();
    };

    return (
        <>
            <h1 className={styles.order__title}>Ready to order? Let`s go!</h1>
            {formError && (
                <div className="error-message" style={{ marginBottom: 20 }}>
                    {formError}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.form__item}>
                    <label htmlFor="customer" className={styles.form__label}>
                        Name
                    </label>
                    <input
                        {...register('customer')}
                        type="text"
                        id="customer"
                        className={styles.form__input}
                    />
                    <span className="error">{errors.customer?.message}</span>
                </div>

                <div className={styles.form__item}>
                    <label htmlFor="phone" className={styles.form__label}>
                        Phone number
                    </label>
                    <input
                        {...register('phone')}
                        type="text"
                        id="phone"
                        className={styles.form__input}
                    />
                    <span className="error">{errors.phone?.message}</span>
                </div>

                <div className={styles.form__item}>
                    <label htmlFor="address" className={styles.form__label}>
                        Address
                    </label>
                    <input
                        {...register('address')}
                        type="text"
                        id="address"
                        className={styles.form__input}
                    />
                    <span className="error">{errors.address?.message}</span>
                </div>

                <div className={styles.form__item}>
                    <input
                        {...register('priority')}
                        type="checkbox"
                        id="priority"
                    />
                    <label htmlFor="priority" className={styles.form__label}>
                        Want to yo give your order priority?
                    </label>
                </div>

                <button type="submit" className={styles.order__button}>
                    Order now for €{pizzas.totalPrice}
                </button>
            </form>
        </>
    );
};

export default OrderPage;
