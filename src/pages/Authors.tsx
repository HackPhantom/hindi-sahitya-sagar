
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { authors } from '@/data/books';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Authors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAuthors = authors.filter(author => 
    searchTerm === '' || 
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-earth-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 hindi-heading">हिंदी साहित्य के लेखक</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              हिंदी साहित्य के महान लेखकों और उनकी रचनाओं के बारे में जानें।
            </p>
            
            <div className="max-w-md mx-auto mt-6">
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="लेखक खोजें..." 
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sahitya-500 focus:border-sahitya-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAuthors.map(author => (
              <Link 
                key={author.id} 
                to={`/author/${author.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-sahitya-100 flex items-center justify-center text-sahitya-800 text-xl font-bold mr-4">
                    {author.name.substring(0, 2)}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold hindi-heading">{author.name}</h2>
                    <p className="text-gray-600">
                      {author.birthYear} - {author.deathYear || 'वर्तमान'}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{author.bio}</p>
                <Button variant="outline" className="w-full border-sahitya-300 text-sahitya-700 hover:bg-sahitya-50">
                  विस्तार से जानें
                </Button>
              </Link>
            ))}
          </div>
          
          {filteredAuthors.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2 hindi-heading">कोई लेखक नहीं मिला</h3>
              <p className="text-gray-600 mb-4">कृपया अपनी खोज बदलें।</p>
              <Button onClick={() => setSearchTerm('')}>
                सभी लेखक देखें
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Authors;
