import React, { useEffect, useState } from 'react';
import PizzaCard from '../../components/Menu/PizzaCard';
import styles from './Menu.module.scss';

const Menu = (props) => {
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPizzas = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    'https://react-fast-pizza-api.onrender.com/api/menu'
                );

                if (!response.ok) {
                    throw new Error('Failed to retrieve data');
                }
                const data = await response.json();
                setPizzas(data.data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };
        getPizzas();
    }, []);

    return (
        <>
            {error && <p>{error}</p>}
            {isLoading && <h2>Loading...</h2>}
            <ul className={styles.menu}>
                {!!pizzas.length &&
                    pizzas.map((pizza) => (
                        <PizzaCard key={pizza.id} pizza={pizza} />
                    ))}
            </ul>
        </>
    );
};

export default Menu;
