import { configureStore } from '@reduxjs/toolkit';
import counterReduce from '../fetaures/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReduce
    }
});

export default store;
