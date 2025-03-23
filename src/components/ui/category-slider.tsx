
import React, { useRef, useState } from 'react';
import { Book } from '@/lib/books';
import BookCard from './book-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategorySliderProps {
  title: string;
  books: Book[];
}

export const CategorySlider = ({ title, books }: CategorySliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = sliderRef.current.clientWidth * 0.75;
    const newPosition = direction === 'left' 
      ? sliderRef.current.scrollLeft - scrollAmount 
      : sliderRef.current.scrollLeft + scrollAmount;
      
    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full py-8 animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full transition-opacity duration-300"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full transition-opacity duration-300"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        onScroll={checkScrollPosition}
      >
        {books.map((book) => (
          <div key={book.id} className="w-[180px] flex-shrink-0 transition-transform duration-500">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
