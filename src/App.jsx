
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import AddBook from './pages/AddBook.jsx';
import NotFound from './components/NotFound.jsx';

const App = () => (
<div className="min-h-screen bg-gray-200">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/books" element={<BrowseBooks />} />
<Route path="/books/:category" element={<BrowseBooks />} />
<Route path="/books/details/:id" element={<BookDetails />} />
<Route path="/add" element={<AddBook />} />
<Route path="*" element={<NotFound />} />
</Routes>
</div>
);

export default App;

