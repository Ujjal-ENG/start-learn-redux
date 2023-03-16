import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import AddBook from '../pages/AddBook';
import BookDetails from '../pages/BookDetails';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-details" element={<BookDetails />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;
