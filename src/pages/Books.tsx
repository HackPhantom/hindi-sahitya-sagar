
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { books, genres } from '@/data/books';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Filter, Search, X } from 'lucide-react';

const Books: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleGenre = (genreId: string) => {
    setSelectedGenres(prev => 
      prev.includes(genreId) 
        ? prev.filter(id => id !== genreId) 
        : [...prev, genreId]
    );
  };
  
  const clearFilters = () => {
    setSelectedGenres([]);
    setSearchTerm('');
  };
  
  const filteredBooks = books.filter(book => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by selected genres
    const matchesGenres = selectedGenres.length === 0 || 
      book.genres.some(genre => selectedGenres.includes(genre.id));
    
    return matchesSearch && matchesGenres;
  });

  return (
    <Layout>
      <div className="bg-earth-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 hindi-heading">पुस्तकालय</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              हमारे विशाल संग्रह में से अपनी पसंदीदा पुस्तकें खोजें। आप श्रेणियों के अनुसार फ़िल्टर कर सकते हैं या पुस्तक या लेखक के नाम से खोज सकते हैं।
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden md:block w-64 bg-white rounded-lg shadow-md p-6 h-fit sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold hindi-heading">फ़िल्टर</h2>
                {(selectedGenres.length > 0 || searchTerm) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    साफ़ करें
                  </Button>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">श्रेणियाँ</h3>
                <div className="space-y-2">
                  {genres.map(genre => (
                    <label key={genre.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedGenres.includes(genre.id)}
                        onChange={() => toggleGenre(genre.id)}
                        className="mr-2 h-4 w-4 text-sahitya-500 focus:ring-sahitya-500 rounded"
                      />
                      <span className="text-sm">{genre.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">खोज</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="पुस्तक या लेखक..." 
                    className="w-full py-2 px-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sahitya-500 focus:border-sahitya-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>
            </div>
            
            {/* Mobile Filters Button */}
            <div className="md:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center border-sahitya-300 text-sahitya-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                फ़िल्टर और खोज
              </Button>
            </div>
            
            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="md:hidden bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold hindi-heading">फ़िल्टर</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">श्रेणियाँ</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {genres.map(genre => (
                      <label key={genre.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={selectedGenres.includes(genre.id)}
                          onChange={() => toggleGenre(genre.id)}
                          className="mr-2 h-4 w-4 text-sahitya-500 focus:ring-sahitya-500 rounded"
                        />
                        <span className="text-sm">{genre.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2">खोज</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="पुस्तक या लेखक..." 
                      className="w-full py-2 px-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sahitya-500 focus:border-sahitya-500"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-sahitya-500 hover:bg-sahitya-600 text-white"
                    onClick={() => setShowFilters(false)}
                  >
                    परिणाम देखें
                  </Button>
                  
                  {(selectedGenres.length > 0 || searchTerm) && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-sahitya-300 text-sahitya-700"
                      onClick={clearFilters}
                    >
                      साफ़ करें
                    </Button>
                  )}
                </div>
              </div>
            )}
            
            {/* Books Grid */}
            <div className="flex-1">
              {/* Active Filters */}
              {(selectedGenres.length > 0 || searchTerm) && (
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium">सक्रिय फिल्टर:</span>
                  
                  {selectedGenres.map(genreId => {
                    const genre = genres.find(g => g.id === genreId);
                    return genre ? (
                      <div key={genre.id} className="bg-earth-100 rounded-full px-3 py-1 text-xs flex items-center">
                        {genre.name}
                        <button 
                          onClick={() => toggleGenre(genre.id)}
                          className="ml-1 text-gray-500 hover:text-gray-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : null;
                  })}
                  
                  {searchTerm && (
                    <div className="bg-earth-100 rounded-full px-3 py-1 text-xs flex items-center">
                      खोज: {searchTerm}
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="ml-1 text-gray-500 hover:text-gray-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="ml-auto text-xs"
                  >
                    सभी साफ़ करें
                  </Button>
                </div>
              )}
              
              {/* Results Count */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  {filteredBooks.length} {filteredBooks.length === 1 ? 'परिणाम' : 'परिणाम'} मिला
                </p>
              </div>
              
              {/* Book Grid */}
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-2 hindi-heading">कोई परिणाम नहीं मिला</h3>
                  <p className="text-gray-600 mb-4">कृपया अपने फ़िल्टर बदलें या अलग खोज करें।</p>
                  <Button onClick={clearFilters}>
                    फ़िल्टर साफ़ करें
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
