
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice.js';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
const [form, setForm] = useState({ title: '', author: '', category: '', description: '', rating: '' });
const [error, setError] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();

const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = e => {
e.preventDefault();
const { title, author, category, description, rating } = form;
if (!title || !author || !category || !description || !rating) {
setError('Please fill in all fields.');
return;
}
dispatch(addBook({ id: Date.now(), ...form }));
navigate('/books');
};

return (
<div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
<h2 className="text-2xl font-bold mb-4">Add New Book</h2>
{error && <p className="text-red-500 mb-4">{error}</p>}
<form onSubmit={handleSubmit} className="space-y-4">
{['title', 'author', 'category', 'rating'].map(field => (
<input
key={field}
name={field}
placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
value={form[field]}
onChange={handleChange}
className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
/>
))}
<textarea
name="description"
placeholder="Description"
value={form.description}
onChange={handleChange}
className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
rows="4"
/>
<button
type="submit"
className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
>
Add Book
</button>
</form>
</div>
);
};

export default AddBook;
