
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
<div className="min-h-screen flex flex-col items-center justify-center p-6">
<h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
<p className="text-gray-600 mb-6">Oops! The page doesn’t exist.</p>
<Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
</div>
);

export default NotFound;