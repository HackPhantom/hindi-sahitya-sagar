
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-sahitya-600 text-2xl font-bold hindi-heading">हिंदी साहित्य पुस्तकालय</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sahitya-500 font-medium">मुख्य पृष्ठ</Link>
            <Link to="/books" className="text-gray-700 hover:text-sahitya-500 font-medium">पुस्तकें</Link>
            <Link to="/authors" className="text-gray-700 hover:text-sahitya-500 font-medium">लेखक</Link>
            <Link to="/genres" className="text-gray-700 hover:text-sahitya-500 font-medium">श्रेणियाँ</Link>
            <div className="relative">
              <input 
                type="text" 
                placeholder="खोजें..." 
                className="py-1 px-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sahitya-500 focus:border-sahitya-500"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-sahitya-500 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-sahitya-500 font-medium py-2">मुख्य पृष्ठ</Link>
              <Link to="/books" className="text-gray-700 hover:text-sahitya-500 font-medium py-2">पुस्तकें</Link>
              <Link to="/authors" className="text-gray-700 hover:text-sahitya-500 font-medium py-2">लेखक</Link>
              <Link to="/genres" className="text-gray-700 hover:text-sahitya-500 font-medium py-2">श्रेणियाँ</Link>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="खोजें..." 
                  className="w-full py-2 px-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sahitya-500 focus:border-sahitya-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
