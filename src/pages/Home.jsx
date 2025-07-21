
import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];
const popularBooks = [
{coverImage: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg", id: 1, title: "Atomic Habits", author: "James Clear" },
{coverImage:"https://m.media-amazon.com/images/I/71g2ednj0JL.jpg", id: 2, title: "The Psychology of Money", author: "Morgan Housel" },
{coverImage:"https://cdn2.penguin.com.au/covers/original/9781786330895.jpg", id: 3, title: "Ikigai", author: "Francesc Miralles & Hector Garcia"}
];

const Home = () => (
<div className="max-w-4xl mx-auto p-10">
<h1 className="text-4xl font-bold text-blue-500 mb-6">Welcome to the Online Library</h1>

<section className="mb-8">
<h2 className="text-xl font-semibold text-gray-700 mb-2">Book Categories</h2>
<div className="flex flex-wrap gap-3">
{categories.map(cat => (
<Link
key={cat}
to={`/books/${cat}`}
className="bg-blue-200 hover:bg-blue-200 text-blue-700 font-medium px-4 py-4 rounded transition"
>
{cat}
</Link>
))}
</div>
</section>

<section>
<h2 className="text-xl font-semibold text-gray-700 mb-2">Popular Books</h2>
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
{popularBooks.map(book => (
<BookCard key={book.id} book={{ ...book, id: book.id }} />
))}
</div>
</section>
</div>
);

export default Home;
