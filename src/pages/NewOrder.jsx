import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required('field is required'),
    number: yup
        .string()
        .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'phone number is invalid')
        .required(),
    address: yup
        .string()
        .min(7)
        .required('address must be at least 7 characters'),
});

const NewOrder = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: 'Vlad',
            number: '+1234567890',
            address: '',
            priority: false,
        },
        resolver: yupResolver(schema),
    });

    // console.log(formState);

    const handleFormSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="order">
            <h1 className="order__heading">Ready to order? Let`s go!</h1>
            <form
                className="order__form"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <div className="order__field">
                    <label htmlFor="name">First name</label>
                    <input {...register('name')} type="text" id="name" />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="order__field">
                    <label htmlFor="number">Phone number</label>
                    <input {...register('number')} type="text" id="number" />
                    {errors.number && <span>{errors.number.message}</span>}
                </div>
                <div className="order__field">
                    <label htmlFor="address">Address</label>
                    <input {...register('address')} type="text" id="address" />
                    {errors.address && <span>{errors.address.message}</span>}
                </div>
                <div className="order__field checkbox">
                    <input
                        {...register('priority')}
                        type="checkbox"
                        id="priority"
                    />
                    <label htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>
                <button className="order__button" type="submit">
                    Order now for €39.00
                </button>
            </form>
        </div>
    );
};

export default NewOrder;
