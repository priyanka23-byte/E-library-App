
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
const { id } = useParams();
const book = useSelector(state => state.books.find(b => b.id.toString() === id));

if (!book) {
return <p className="text-center mt-10 text-red-500">Book not found.</p>;
}

return (
<div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-10">
<h2 className="text-3xl font-bold mb-2">{book.title}</h2>
<p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
<p className="text-gray-700 mb-2"><strong>Category:</strong> {book.category}</p>
<p className="text-gray-600 mb-4">{book.description}</p>
<p className="font-medium">Rating: {book.rating} / 5</p>
<Link to="/books" className="text-blue-600 hover:underline block mt-4">
← Back to Browse
</Link>
</div>
);
};

export default BookDetails;
