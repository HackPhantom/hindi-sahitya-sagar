
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { authors, books } from '@/data/books';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const AuthorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const author = authors.find((a) => a.id === id);
  
  if (!author) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 hindi-heading">लेखक नहीं मिला</h2>
            <p className="mb-4">क्षमा करें, आपके द्वारा खोजे गए लेखक हमारे पुस्तकालय में नहीं मिले।</p>
            <Link to="/authors">
              <Button>सभी लेखक देखें</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Get books by this author
  const authorBooks = books.filter(book => book.author.id === author.id);

  return (
    <Layout>
      <div className="bg-earth-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full bg-sahitya-100 flex items-center justify-center text-sahitya-800 text-3xl font-bold">
                {author.name.substring(0, 2)}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2 hindi-heading">{author.name}</h1>
                <div className="flex justify-center md:justify-start items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{author.birthYear} - {author.deathYear || 'वर्तमान'}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">{author.bio}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 hindi-heading">लेखक की रचनाएँ</h2>
            
            {authorBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {authorBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">इस लेखक की कोई पुस्तक हमारे पुस्तकालय में उपलब्ध नहीं है।</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorDetail;
