
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { genres, books } from '@/data/books';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';

const GenreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const genre = genres.find((g) => g.id === id);
  
  if (!genre) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 hindi-heading">श्रेणी नहीं मिली</h2>
            <p className="mb-4">क्षमा करें, आपके द्वारा खोजी गई श्रेणी हमारे पुस्तकालय में नहीं मिली।</p>
            <Link to="/genres">
              <Button>सभी श्रेणियाँ देखें</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Get books in this genre
  const genreBooks = books.filter(book => book.genres.some(g => g.id === genre.id));

  return (
    <Layout>
      <div className="bg-earth-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4 hindi-heading">{genre.name}</h1>
              <p className="text-gray-700 max-w-3xl mx-auto">{genre.description}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 hindi-heading">इस श्रेणी की पुस्तकें</h2>
            
            {genreBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {genreBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">इस श्रेणी की कोई पुस्तक हमारे पुस्तकालय में उपलब्ध नहीं है।</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenreDetail;
