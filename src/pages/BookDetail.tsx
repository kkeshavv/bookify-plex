
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookById } from '@/lib/books';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Bookmark, Star, Share, BookOpen } from 'lucide-react';
import CategorySlider from '@/components/ui/category-slider';
import { getBooksByGenre } from '@/lib/books';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const book = id ? getBookById(id) : null;
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-36 bg-muted rounded mb-4"></div>
            <div className="h-24 w-72 bg-muted rounded"></div>
          </div>
        </main>
      </div>
    );
  }
  
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
            <p className="text-muted-foreground mb-6">The book you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">Go Back Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get related books from the same primary genre
  const primaryGenre = book.genres[0];
  const relatedBooks = getBooksByGenre(primaryGenre).filter(b => b.id !== book.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button variant="ghost" className="text-sm gap-2 pl-2" asChild>
              <Link to="/">
                <ChevronLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
          
          {/* Book Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="sticky top-24 aspect-[2/3] overflow-hidden rounded-xl book-cover shadow-xl">
                <img 
                  src={book.coverImage} 
                  alt={`Cover of ${book.title}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Book Info */}
            <div className="md:col-span-2 animate-fade-up space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.genres.map((genre) => (
                    <Link 
                      key={genre} 
                      to={`/genre/${genre.toLowerCase()}`}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full hover:bg-primary/10 transition-colors"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold">{book.title}</h1>
                <p className="text-lg text-muted-foreground mt-2">by {book.author}</p>
                
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{book.rating} ({Math.floor(Math.random() * 1000) + 100} ratings)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2" size="lg">
                  <BookOpen className="h-5 w-5" />
                  <span>Start Reading</span>
                </Button>
                
                <Button variant="outline" className="gap-2" size="lg">
                  <Bookmark className="h-5 w-5" />
                  <span>Save for Later</span>
                </Button>
                
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              
              <div className="pt-4">
                <h2 className="text-xl font-semibold mb-4">About this book</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {book.description}
                  {"\n\n"}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  {"\n\n"}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Published</h3>
                  <p className="text-base">{book.publishedYear}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Pages</h3>
                  <p className="text-base">{book.pageCount}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Language</h3>
                  <p className="text-base">English</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Books */}
          {relatedBooks.length > 0 && (
            <div className="py-8 border-t">
              <CategorySlider title="Similar Books" books={relatedBooks} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
