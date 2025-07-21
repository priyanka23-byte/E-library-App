
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
<nav className="bg-blue-200 text-white px-6 py-4 shadow-md   ">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<Link to="/" className="text-2xl font-bold text-blue-500">📚 ONLINE LIBRARY</Link>
<div className="space-x-4">
<Link className="text-gray-700 hover:text-blue-500" to="/">Home</Link>
<Link className="text-gray-700 hover:text-blue-500" to="/books">Browse Books</Link>
<Link className="text-gray-700 hover:text-blue-500" to="/add">Add Book</Link>
</div>
</div>
</nav>
);

export default Navbar;
