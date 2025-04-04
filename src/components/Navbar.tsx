
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await signOut();
  };

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

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer h-8 w-8 transition-all hover:ring-2 hover:ring-sahitya-300">
                    <AvatarImage src={user.user_metadata.avatar_url} />
                    <AvatarFallback className="bg-sahitya-200 text-sahitya-700">
                      {user.email?.substring(0, 2).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>प्रोफाइल</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>लॉगआउट</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => navigate('/auth')} variant="ghost" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                <span>लॉगिन</span>
              </Button>
            )}
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
              
              {user ? (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata.avatar_url} />
                      <AvatarFallback className="bg-sahitya-200 text-sahitya-700">
                        {user.email?.substring(0, 2).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700">{user.email}</span>
                  </div>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>लॉगआउट</span>
                  </Button>
                </div>
              ) : (
                <Button onClick={() => navigate('/auth')} variant="ghost" className="justify-start p-0 hover:bg-transparent">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>लॉगिन</span>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
