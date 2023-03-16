import { configureStore } from '@reduxjs/toolkit';
import counterReduce from '../fetaures/counter/counterSlice';
import postReducer from '../fetaures/posts/postSlice';

const store = configureStore({
    reducer: {
        counter: counterReduce,
        posts: postReducer
    }
});

export default store;
