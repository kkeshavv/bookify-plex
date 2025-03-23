
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">bookify</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">Home</Link>
            <Link to="/browse" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">Browse</Link>
            <Link to="/categories" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">Categories</Link>
            <Link to="/about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">About</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search books..." 
                className="w-[200px] pl-10 rounded-full bg-secondary/50 focus:bg-background"
              />
            </div>
            
            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search books..." 
                className="w-full pl-10 bg-secondary/50"
              />
            </div>
            
            <nav className="flex flex-col space-y-1">
              <Link to="/" className="px-4 py-3 text-sm font-medium hover:bg-secondary rounded-md transition-colors">Home</Link>
              <Link to="/browse" className="px-4 py-3 text-sm font-medium hover:bg-secondary rounded-md transition-colors">Browse</Link>
              <Link to="/categories" className="px-4 py-3 text-sm font-medium hover:bg-secondary rounded-md transition-colors">Categories</Link>
              <Link to="/about" className="px-4 py-3 text-sm font-medium hover:bg-secondary rounded-md transition-colors">About</Link>
            </nav>
            
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" className="flex-1">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
