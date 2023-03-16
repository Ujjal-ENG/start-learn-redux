import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { deleteBook } from './booksSlice';

const BookDetails = () => {
    const books = useSelector((state) => state.bookReducer.books);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };

    return (
        <div>
            <h3 className="text-3xl font-bold p-3 text-blue-700 text-center">Books Details</h3>

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
                                    <FiEdit2 className="cursor-pointer" />
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
