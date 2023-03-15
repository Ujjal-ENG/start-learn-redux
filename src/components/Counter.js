import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter());
    };
    const handleDecrement = () => {
        dispatch(decrementCounter());
    };
    const handleReset = () => {
        dispatch(resetCounter());
    };
    return (
        <div>
            <h3 className="text-4xl font-bold">Count: {count}</h3>
            <button className="px-4 py-2 font-bold bg-blue-600 text-white m-5" type="button" onClick={handleIncrement} disabled={count === 10 ? true : false}>
                Increment
            </button>
            <button className="px-4 py-2 font-bold bg-blue-600 text-white m-5" type="button" onClick={handleDecrement} disabled={count === 0 ? true : false}>
                Decrement
            </button>
            <button className="px-4 py-2 font-bold bg-blue-600 text-white m-5" type="button" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};

export default Counter;
