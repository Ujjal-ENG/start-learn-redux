import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './booksSlice';

const AddBook = () => {
    const [book, SetBook] = useState({
        bookName: '',
        bookAuthor: ''
    });

    const numberOfBooks = useSelector((state) => state.bookReducer.books.length);

    const { bookName, bookAuthor } = book;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {
        SetBook((pS) => ({
            ...pS,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: numberOfBooks + 1, title: bookName, author: bookAuthor };
        dispatch(addBook(newBook));
        navigate('/book-details');
    };

    return (
        <div>
            <h3 className="text-3xl font-bold p-3 text-blue-700 text-center">Add Book</h3>

            <form className="max-w-7xl mx-auto flex items-center justify-center" onSubmit={handleSubmit}>
                <label htmlFor="bookName">BookName:</label>
                <input type="text" name="bookName" id="bookName" className="outline-orange-600 border-2 border-black rounded-md m-5" value={bookName} onChange={handleChange} />

                <label htmlFor="bookAuthor">bookAuthor:</label>

                <input type="text" name="bookAuthor" id="bookAuthor" className="outline-orange-600 border-2 border-black rounded-md m-5" value={bookAuthor} onChange={handleChange} />

                <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
