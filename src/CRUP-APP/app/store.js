import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../pages/booksSlice';

const store = configureStore({
    reducer: {
        bookReducer: bookReducer
    }
});

export default store;
