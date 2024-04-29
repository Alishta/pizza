import React, { useReducer, useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [val, setVal] = useState(0);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return {
                    value: state.value + 1,
                };
            case 'Increment_by_value':
                return { value: state.value + Number(action.payload) };
            case 'Decrement':
                return {
                    value: state.value - 1,
                };
            case 'Reset':
                return {
                    value: 0,
                };
            default:
                return state;
        }
    };

    const initialState = {
        value: 0,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({
            type: 'Increment',
        });
    };
    const handleDecrement = () => {
        dispatch({
            type: 'Decrement',
        });
    };

    const handleReset = () => {
        dispatch({
            type: 'Reset',
        });
    };

    const handleIncrementByValue = () => {
        dispatch({
            type: 'Increment_by_value',
            payload: value,
        });
    };

    return (
        <div className="counter__reducer">
            <h1>Counter: {state.value}</h1>
            <input
                type="number"
                min={0}
                step={10}
                value={val}
                onChange={(e) => setVal(+e.target.value)}
            />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <div style={{ backgroundColor: 'red', padding: val }}>
                <input
                    type="number"
                    placeholder="Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleIncrementByValue}>
                    Increment by value
                </button>
            </div>
        </div>
    );
};

export default Counter;
