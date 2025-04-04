
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { books } from '@/data/books';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen, User, Bookmark } from 'lucide-react';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 hindi-heading">पुस्तक नहीं मिली</h2>
            <p className="mb-4">क्षमा करें, आपके द्वारा खोजी गई पुस्तक हमारे पुस्तकालय में नहीं मिली।</p>
            <Link to="/books">
              <Button>सभी पुस्तकें देखें</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book Cover */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="w-full h-auto object-cover rounded"
              />
              
              <div className="flex flex-col space-y-4 mt-6">
                {book.availability !== 'unavailable' && (
                  <Link to={`/read/${book.id}`}>
                    <Button className="w-full bg-sahitya-500 hover:bg-sahitya-600 text-white">
                      {book.availability === 'available' ? 'अभी पढ़ें' : 'पूर्वावलोकन देखें'}
                    </Button>
                  </Link>
                )}
                
                <Button variant="outline" className="w-full border-sahitya-300 text-sahitya-700 hover:bg-sahitya-50">
                  <Bookmark className="h-4 w-4 mr-2" />
                  बुकमार्क करें
                </Button>
              </div>
            </div>
          </div>
          
          {/* Book Details */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="flex flex-wrap gap-2 mb-2">
              {book.genres.map((genre) => (
                <Link key={genre.id} to={`/genre/${genre.id}`}>
                  <Badge variant="outline" className="bg-earth-100 text-earth-800 hover:bg-earth-200">
                    {genre.name}
                  </Badge>
                </Link>
              ))}
              {book.featured && (
                <Badge className="bg-sahitya-500 hover:bg-sahitya-600">प्रमुख</Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2 hindi-heading">{book.title}</h1>
            
            <Link to={`/author/${book.author.id}`} className="inline-block mb-4">
              <div className="flex items-center text-gray-700 hover:text-sahitya-600">
                <User className="h-4 w-4 mr-1" />
                <span>{book.author.name}</span>
              </div>
            </Link>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>प्रकाशन वर्ष: {book.publishedYear}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>पृष्ठ: {book.pageCount}</span>
              </div>
              <div>
                भाषा: {book.language}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 hindi-heading">पुस्तक का परिचय</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {book.description}
              </p>
            </div>
            
            {book.previewContent && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 hindi-heading">पूर्वावलोकन</h2>
                <div className="p-4 bg-earth-50 border border-earth-200 rounded-md text-gray-700 leading-relaxed whitespace-pre-line hindi-heading">
                  {book.previewContent}
                </div>
                <div className="text-center mt-4">
                  <Link to={`/read/${book.id}`}>
                    <Button className="bg-sahitya-500 hover:bg-sahitya-600 text-white">
                      और पढ़ें...
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 hindi-heading">लेखक के बारे में</h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-earth-100 flex items-center justify-center text-earth-800 text-xl font-bold mr-4">
                  {book.author.name.substring(0, 2)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold hindi-heading">{book.author.name}</h3>
                  <p className="text-sm text-gray-600">
                    {book.author.birthYear} - {book.author.deathYear || 'वर्तमान'}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{book.author.bio}</p>
              <Link to={`/author/${book.author.id}`}>
                <Button variant="outline" className="border-sahitya-300 text-sahitya-700 hover:bg-sahitya-50">
                  और जानें
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
