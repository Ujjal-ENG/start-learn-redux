import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { deleteBook, updateBook } from './booksSlice';

const BookDetails = () => {
    const books = useSelector((state) => state.bookReducer.books);
    const [isClicked, setIsClicked] = useState(false);

    const [book, setBook] = useState({
        id: '',
        bookName: '',
        bookAuthor: ''
    });

    const { bookName, bookAuthor } = book;

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.id]: e.target.value
        });
    };

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };

    const handleEdit = (id, title, author) => {
        setIsClicked((ps) => !ps);
        setBook({
            id: id,
            bookName: title,
            bookAuthor: author
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClicked(false);
        dispatch(updateBook(book));
        // console.log(book);
    };

    return (
        <div>
            <h3 className="text-3xl font-bold p-3 text-blue-700 text-center">Books Details</h3>

            {isClicked && (
                <div>
                    <h3 className="text-3xl font-bold p-3 text-blue-700 text-center">Edit Book</h3>

                    <form className="max-w-7xl mx-auto flex items-center justify-center" onSubmit={handleSubmit}>
                        <label htmlFor="bookName">BookName:</label>
                        <input type="text" name="bookName" id="bookName" className="outline-orange-600 border-2 border-black rounded-md m-5" value={bookName} onChange={handleChange} />

                        <label htmlFor="bookAuthor">bookAuthor:</label>

                        <input type="text" name="bookAuthor" id="bookAuthor" className="outline-orange-600 border-2 border-black rounded-md m-5" value={bookAuthor} onChange={handleChange} />

                        <button type="submit" className="px-5 py-2 bg-violet-500 text-white text-xl font-bold rounded-md">
                            Edit Book
                        </button>
                    </form>
                </div>
            )}

            <table className="max-w-7xl mx-auto divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">
                            Edit
                        </th>

                        <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {books &&
                        books.map((book) => (
                            <tr key={book.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-center">{book.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">{book.title}</td>
                                <td className="px-6 py-4 whitespace-wrap text-center">{book.author}</td>

                                <td className="px-6 py-4 whitespace-nowrap text-center text-violet-600 text-2xl">
                                    <FiEdit2 className="cursor-pointer" onClick={() => handleEdit(book.id, book.title, book.author)} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-2xl text-red-600 ">
                                    <FiTrash2 className="cursor-pointer" onClick={() => handleDelete(book.id)} />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookDetails;
