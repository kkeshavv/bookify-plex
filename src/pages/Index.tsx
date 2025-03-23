
import React, { useState, useEffect } from 'react';
import { getFeaturedBooks, getGenres, getBooksByGenre, books } from '@/lib/books';
import FeaturedBook from '@/components/ui/featured-book';
import CategorySlider from '@/components/ui/category-slider';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Search, BookIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const featuredBooks = getFeaturedBooks();
  const genres = getGenres();
  
  // Auto-rotate featured books
  useEffect(() => {
    if (featuredBooks.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prev) => 
        prev === featuredBooks.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [featuredBooks.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 relative">
          {/* Featured Book Slider */}
          <div className="container mx-auto px-4 pt-12 pb-8">
            <div className="relative overflow-hidden rounded-xl">
              {featuredBooks.length > 0 && (
                <FeaturedBook book={featuredBooks[currentFeaturedIndex]} />
              )}
            </div>
          </div>
        </section>
        
        {/* Category Sections */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Browse by Genre</h2>
              <Button variant="ghost" className="gap-2" asChild>
                <Link to="/categories">
                  <span>View All</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-fade-up">
              {genres.slice(0, 6).map((genre) => (
                <Link key={genre} to={`/genre/${genre.toLowerCase()}`} className="group">
                  <div className="relative h-32 overflow-hidden rounded-lg bg-primary/5 flex flex-col items-center justify-center p-4 border border-border transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 category-pill">
                    <BookIcon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{genre}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recently Added */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <CategorySlider 
              title="Recently Added" 
              books={books.slice().sort((a, b) => b.publishedYear - a.publishedYear)}
            />
          </div>
        </section>
        
        {/* Popular Genres Sections */}
        {genres.slice(0, 3).map((genre) => (
          <section key={genre} className="py-4">
            <div className="container mx-auto px-4">
              <CategorySlider 
                title={genre} 
                books={getBooksByGenre(genre)}
              />
            </div>
          </section>
        ))}
        
        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold">Discover Your Next Favorite Book</h2>
              <p className="text-muted-foreground text-lg">
                Join Bookify today and get personalized recommendations based on your reading preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="px-8 text-base gap-2" asChild>
                  <Link to="/signup">
                    <span>Sign Up Free</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-base gap-2" asChild>
                  <Link to="/browse">
                    <span>Browse Library</span>
                    <BookOpen className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
