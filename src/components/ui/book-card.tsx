
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/lib/books';
import { Star } from 'lucide-react';

interface BookCardProps {
  book: Book;
  className?: string;
}

export const BookCard = ({ book, className = '' }: BookCardProps) => {
  return (
    <Link to={`/book/${book.id}`} className="group">
      <div className={`w-full overflow-hidden rounded-md animate-fade-in ${className}`}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-md book-cover">
          <img 
            src={book.coverImage} 
            alt={`Cover of ${book.title}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 w-full p-4 text-white">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{book.rating}</span>
              </div>
              <span className="text-xs font-medium opacity-80">{book.publishedYear} • {book.pageCount} pages</span>
            </div>
          </div>
        </div>
        <div className="pt-3 space-y-1">
          <h3 className="text-base font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
