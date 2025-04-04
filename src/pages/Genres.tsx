
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { genres, books } from '@/data/books';
import { Book, Feather, Theatre, MusicNote, BookOpen } from 'lucide-react';

const Genres: React.FC = () => {
  // Map of genre ids to icons
  const genreIcons: Record<string, React.ReactNode> = {
    '1': <Book className="h-8 w-8" />, // उपन्यास
    '2': <Feather className="h-8 w-8" />, // कविता
    '3': <BookOpen className="h-8 w-8" />, // कहानी
    '4': <Theatre className="h-8 w-8" />, // नाटक
    '5': <MusicNote className="h-8 w-8" />, // आत्मकथा
  };
  
  // Count books in each genre
  const genreBookCounts = genres.map(genre => ({
    ...genre,
    bookCount: books.filter(book => book.genres.some(g => g.id === genre.id)).length
  }));

  return (
    <Layout>
      <div className="bg-earth-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 hindi-heading">साहित्य की श्रेणियाँ</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              हिंदी साहित्य की विभिन्न श्रेणियों का अन्वेषण करें और अपनी रुचि के अनुसार पुस्तकें खोजें।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {genreBookCounts.map(genre => (
              <Link 
                key={genre.id} 
                to={`/genre/${genre.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex"
              >
                <div className="w-1/3 bg-sahitya-100 flex items-center justify-center p-6">
                  <div className="text-sahitya-600">
                    {genreIcons[genre.id]}
                  </div>
                </div>
                <div className="w-2/3 p-6">
                  <h2 className="text-2xl font-semibold mb-2 hindi-heading">{genre.name}</h2>
                  <p className="text-gray-600 mb-4">{genre.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {genre.bookCount} {genre.bookCount === 1 ? 'पुस्तक' : 'पुस्तकें'}
                    </span>
                    <span className="text-sahitya-600 text-sm font-medium">और देखें →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Genres;
