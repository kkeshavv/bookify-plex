
export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  genres: string[];
  description: string;
  publishedYear: number;
  pageCount: number;
  isFeatured?: boolean;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    genres: ["Fiction", "Fantasy", "Philosophy"],
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    publishedYear: 2020,
    pageCount: 304,
    isFeatured: true
  },
  {
    id: "2",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    genres: ["Fiction", "Science Fiction", "Literary Fiction"],
    description: "From the bestselling author of Never Let Me Go and The Remains of the Day, a stunning new novel that asks, what does it mean to love?",
    publishedYear: 2021,
    pageCount: 320,
    isFeatured: true
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    genres: ["Self-Help", "Psychology", "Productivity"],
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. Learn how small changes can transform your life.",
    publishedYear: 2018,
    pageCount: 320
  },
  {
    id: "4",
    title: "The Hill We Climb",
    author: "Amanda Gorman",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    genres: ["Poetry", "Politics", "Inspirational"],
    description: "The poem that captivated a nation—read at the inauguration of the 46th President of the United States.",
    publishedYear: 2021,
    pageCount: 32
  },
  {
    id: "5",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    genres: ["Science Fiction", "Adventure", "Space"],
    description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.",
    publishedYear: 2021,
    pageCount: 496,
    isFeatured: true
  },
  {
    id: "6",
    title: "The Four Winds",
    author: "Kristin Hannah",
    coverImage: "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    genres: ["Historical Fiction", "Drama", "Great Depression"],
    description: "From the #1 New York Times bestselling author of The Nightingale and The Great Alone comes an epic novel of love and heroism and hope, set against the backdrop of one of America's most defining eras.",
    publishedYear: 2021,
    pageCount: 464
  },
  {
    id: "7",
    title: "Becoming",
    author: "Michelle Obama",
    coverImage: "https://images.unsplash.com/photo-1542086260-ddb62f405c8b?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    genres: ["Memoir", "Autobiography", "Politics"],
    description: "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world.",
    publishedYear: 2018,
    pageCount: 448
  },
  {
    id: "8",
    title: "Educated",
    author: "Tara Westover",
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    genres: ["Memoir", "Biography", "Education"],
    description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    publishedYear: 2018,
    pageCount: 334
  }
];

export const getBookById = (id: string) => {
  return books.find(book => book.id === id);
};

export const getFeaturedBooks = () => {
  return books.filter(book => book.isFeatured);
};

export const getGenres = () => {
  const allGenres = books.flatMap(book => book.genres);
  return [...new Set(allGenres)].sort();
};

export const getBooksByGenre = (genre: string) => {
  return books.filter(book => book.genres.includes(genre));
};
