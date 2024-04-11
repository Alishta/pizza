import React from 'react';
import useFetch from '../hooks/useFetch';

const Fetch = () => {
    const { data, isLoading, error } = useFetch(
        'https://hp-api.onrender.com/api/spells'
    );

    return (
        <>
            <h1 className="spell__heading">Spells from Harry Potter</h1>
            <ul className="spell">
                {error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
                {data.length &&
                    data.map((spell) => (
                        <li key={spell.id} className="spell__item">
                            <p className="spell__name">{spell.name}</p>
                            <p className="spell__description">
                                {spell.description}
                            </p>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Fetch;
