import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
    books: [
        { id: 1, title: 'Love Bangladesh', author: 'Ujjalnornath Thakur' },
        { id: 2, title: 'Hate Kopa', author: 'Kopako meth' },
        { id: 3, title: 'motia Kopa', author: 'Motka Khepa meth' }
    ]
};

const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((el) => el.id !== id);
        }
    }
});

export const { showBooks, addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
