import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByValue } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())} className="bg-violet-600 text-white rounded m-5 font-bold p-2" type="button">
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())} className="bg-violet-600 text-white rounded m-5 font-bold p-2" type="button">
                    Decrement
                </button>
                <br />
                <button aria-label="Decrement value" onClick={() => dispatch(reset())} className="bg-violet-600 text-white rounded m-5 font-bold p-2" type="button">
                    Reset
                </button>

                <button aria-label="Decrement value" onClick={() => dispatch(incrementByValue(5))} className="bg-violet-600 text-white rounded m-5 font-bold p-2" type="button">
                    Increase By 5
                </button>
            </div>
        </div>
    );
};

export default CounterView;
