
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">bookify</h3>
            <p className="text-muted-foreground text-sm">
              Discover your next favorite read with AI-powered recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Browse Books</Link></li>
              <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/authors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Authors</Link></li>
              <li><Link to="/recommendations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recommendations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bookify. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
