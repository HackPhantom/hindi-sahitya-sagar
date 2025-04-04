
import React from 'react';
import { authors } from '@/data/books';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AuthorList: React.FC = () => {
  return (
    <section className="py-12 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 hindi-heading">प्रमुख लेखक</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            हिंदी साहित्य के इन महान लेखकों की रचनाओं का आनंद लें और उनके जीवन के बारे में जानें।
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {authors.map(author => (
            <Link 
              key={author.id} 
              to={`/author/${author.id}`}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow group h-full"
            >
              <div className="w-20 h-20 rounded-full bg-earth-100 mx-auto mb-4 flex items-center justify-center text-earth-800 text-xl font-bold group-hover:bg-sahitya-100 transition-colors">
                {author.name.substring(0, 2)}
              </div>
              <h3 className="text-lg font-semibold mb-1 hindi-heading">{author.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {author.birthYear} - {author.deathYear || 'वर्तमान'}
              </p>
              <p className="text-sm text-gray-700 line-clamp-3 mb-4">
                {author.bio.substring(0, 100)}...
              </p>
              <Button variant="outline" className="mt-auto w-full border-sahitya-300 text-sahitya-700 hover:bg-sahitya-50 hover:text-sahitya-800">
                और जानें
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorList;
