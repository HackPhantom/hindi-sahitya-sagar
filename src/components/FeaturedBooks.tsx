
import React from 'react';
import { books } from '@/data/books';
import BookCard from './BookCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedBooks: React.FC = () => {
  // Get featured books or first 3 books if no featured
  const featuredBooks = books.filter(book => book.featured).slice(0, 3);
  
  return (
    <section className="py-12 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 hindi-heading">प्रमुख पुस्तकें</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            हिंदी साहित्य की ये महत्वपूर्ण कृतियां हमारे संग्रह का हिस्सा हैं। इन्हें पढ़कर भारतीय साहित्य की समृद्ध विरासत का अनुभव करें।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/books">
            <Button className="bg-sahitya-500 hover:bg-sahitya-600 text-white">
              सभी पुस्तकें देखें
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
