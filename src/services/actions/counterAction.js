import { DECREMENT, INCREMENT, RESET } from '../constraints/counterConstraint';

const incrementCounter = () => {
    return {
        type: INCREMENT
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};
const resetCounter = () => {
    return {
        type: RESET
    };
};

export { incrementCounter, decrementCounter, resetCounter };
