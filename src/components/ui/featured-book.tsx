
import React, { useState } from 'react';
import { Book } from '@/lib/books';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedBookProps {
  book: Book;
}

export const FeaturedBook = ({ book }: FeaturedBookProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl animate-fade-in">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <img 
        src={book.coverImage} 
        alt={`Featured: ${book.title}`} 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Blurred placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 w-full p-8 z-30 animate-fade-up">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {book.genres.map((genre) => (
              <span key={genre} className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm">
                {genre}
              </span>
            ))}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{book.title}</h2>
          <p className="text-xl text-white/80 mb-2">by {book.author}</p>
          
          <p className="text-white/70 max-w-2xl mb-6 line-clamp-2">{book.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="group text-base px-6 py-6 transition-all duration-300" size="lg">
              <Link to={`/book/${book.id}`}>
                <span>Read Now</span>
                <BookOpen className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base px-6 py-6" size="lg">
              <Link to={`/book/${book.id}`}>
                <span>Details</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;
