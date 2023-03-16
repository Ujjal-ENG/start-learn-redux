import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="bg-black text-white font-bold text-2xl p-4 flex justify-center items-center gap-8">
                    <NavLink to="/" className="focus:text-red-600">
                        Home
                    </NavLink>
                    <NavLink to="/book-details" className="focus:text-red-600">
                        Book Details
                    </NavLink>
                    <NavLink to="/add-book" className="focus:text-red-600">
                        Add Book
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
