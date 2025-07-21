# 📚 Online Library System

This is a React-based Online Library System built as part of an assignment. It allows users to browse books by category, view detailed information, and add new books using Redux for state management. The application uses `react-router-dom` for navigation and `Tailwind CSS` for styling.

---

## 🚀 Features

✅ Home Page  
✅ Browse Books by Category  
✅ Book Details View  
✅ Add Book Form with Validation  
✅ Dynamic Routing  
✅ Search Functionality  
✅ Redux Integration  
✅ 404 Page Not Found  

---

## 🗂️ Pages Overview

### 🏠 Home Page
- Welcome message
- List of book categories (e.g., Fiction, Sci-Fi, Non-Fiction)
- List of popular books with a link to view more details
- Navigation bar with links to "Home", "Browse Books", and "Add Book"

### 📚 Browse Books Page
- Display books filtered by category
- Dynamic route support: `/books/:category`
- Search bar to filter books by title or author
- Each book has a “View Details” button

### 📖 Book Details Page
- Dynamic route: `/book/:id`
- Shows book title, author, description, and rating
- Back to Browse link

### ➕ Add Book Page
- Form for adding a new book (with validation)
- Uses Redux for state management
- Redirects to Browse Books after submission

### 🚫 404 Page
- Handles undefined routes
- Includes a link back to Home

---

## 🛠️ Technologies Used

- React
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS

---

## 📁Folder Structure
src/
├── components/
│   ├── BookCard.jsx
│   ├── NavBar.jsx
│   └── NotFound.jsx
├── pages/
│   ├──AddBook .jsx
│   ├── BookDetail.jsx
│   ├── BrowseBook.jsx
│   ├── Home.jsx
│   
├── redux/
│   ├── store.js
│   └── booksSlice.js
├── App.jsx
├──index.css
└── main.jsx


