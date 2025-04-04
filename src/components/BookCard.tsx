
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/data/books';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card group h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={book.coverImage}
          alt={`${book.title} cover`}
          className="book-card-image w-full h-full object-cover object-center"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {book.featured && (
            <Badge className="bg-sahitya-500 hover:bg-sahitya-600">प्रमुख</Badge>
          )}
          {book.availability === 'available' ? (
            <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">उपलब्ध</Badge>
          ) : book.availability === 'preview' ? (
            <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">पूर्वावलोकन</Badge>
          ) : (
            <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">अनुपलब्ध</Badge>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 hindi-heading">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{book.author.name}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {book.genres.map((genre) => (
            <span key={genre.id} className="text-xs bg-earth-100 text-earth-800 px-2 py-0.5 rounded">
              {genre.name}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {book.description.substring(0, 100)}...
        </p>
        <div className="mt-auto flex space-x-2">
          <Link to={`/book/${book.id}`} className="flex-grow">
            <Button variant="outline" className="w-full border-sahitya-300 text-sahitya-700 hover:bg-sahitya-50 hover:text-sahitya-800">
              विवरण
            </Button>
          </Link>
          {book.availability !== 'unavailable' && (
            <Link to={`/read/${book.id}`} className="flex-grow">
              <Button className="w-full bg-sahitya-500 hover:bg-sahitya-600 text-white">
                {book.availability === 'available' ? 'पढ़ें' : 'पूर्वावलोकन'}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
