import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                setError('');
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, [url]);
    return { data, isLoading, error };
};

export default useFetch;
