
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard.jsx';

const BrowseBooks = () => {
const { category } = useParams();
const [search, setSearch] = useState('');
const books = useSelector(state => state.books);

const filtered = books.filter(book => {
const matchesCategory = category ? book.category === category : true;
const matchesSearch =
book.title.toLowerCase().includes(search.toLowerCase()) ||
book.author.toLowerCase().includes(search.toLowerCase());
return matchesCategory && matchesSearch;
});

return (
<div className="max-w-5xl mx-auto p-6">
<h2 className="text-2xl font-bold mb-4">
Browse Books {category && `in "${category}"`}
</h2>

<input
type="text"
placeholder="Search by title or author..."
className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
{filtered.map(book => (
<BookCard key={book.id} book={book} />
))}
</div>
</div>
);
};

export default BrowseBooks;
