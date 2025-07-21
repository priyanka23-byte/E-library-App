
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear",
    "description": "An easy & proven way to build good habits and break bad ones.",
    "coverImage": "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": 2,
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "description": "Timeless lessons on wealth, greed, and happiness.",
    "coverImage": "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
  },
  {
    "id": 3,
    "title": "Ikigai",
    "author": "Francesc Miralles & Hector Garcia",
    "description": "The Japanese secret to a long and happy life.",
    "coverImage": "https://cdn2.penguin.com.au/covers/original/9781786330895.jpg"
  },
  {
    "id": 4,
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "description": "What the rich teach their kids about money – that the poor and middle class do not!",
    "coverImage": "https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg"
  },
  {
    "id": 5,
    "title": "Deep Work",
    "author": "Cal Newport",
    "description": "Rules for focused success in a distracted world.",
    "coverImage": "https://media.thuprai.com/front_covers/deep-work.jpg"
  },
  {
    id: 6,
    "title": "The Power of Your Subconscious Mind",
    "author": "Joseph Murphy",
    "description": "Unlock the power of your subconscious to achieve success, happiness, and personal transformation.",
    "coverImage": "https://cdn.kobo.com/book-images/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    
  },
]

;

const booksSlice = createSlice({
name: 'books',
initialState,
reducers: {
addBook: (state, action) => {
state.push(action.payload);
}
}
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
