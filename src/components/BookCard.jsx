
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
<div className="bg-white shadow-lg shadow-black p-4 rounded flex flex-col justify-between">
     <img src={book.coverImage} alt="" width="150px" height="150px" className="book-cover"/>
<div>
<h3 className="font-semibold text-lg text-gray-800">{book.title}</h3>
<p className="text-gray-500">{book.author}</p>
</div>
<Link to={`/books/details/${book.id}`} className="text-blue-600 mt-2 hover:underline">
View Details
</Link>
</div>
);

export default BookCard;
