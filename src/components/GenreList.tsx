
import React from 'react';
import { genres } from '@/data/books';
import { Link } from 'react-router-dom';
import { Book, Feather, Theatre, MusicNote, BookOpen } from 'lucide-react';

const GenreList: React.FC = () => {
  // Map of genre ids to icons
  const genreIcons: Record<string, React.ReactNode> = {
    '1': <Book className="h-6 w-6" />, // उपन्यास
    '2': <Feather className="h-6 w-6" />, // कविता
    '3': <BookOpen className="h-6 w-6" />, // कहानी
    '4': <Theatre className="h-6 w-6" />, // नाटक
    '5': <MusicNote className="h-6 w-6" />, // आत्मकथा
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 hindi-heading">श्रेणियाँ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            अपनी रुचि के अनुसार पुस्तकें खोजें और हिंदी साहित्य के विभिन्न रूपों का आनंद लें।
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {genres.map(genre => (
            <Link 
              key={genre.id} 
              to={`/genre/${genre.id}`}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-sahitya-100 flex items-center justify-center mx-auto mb-4 text-sahitya-600 group-hover:bg-sahitya-500 group-hover:text-white transition-colors">
                {genreIcons[genre.id]}
              </div>
              <h3 className="text-lg font-semibold mb-2 hindi-heading">{genre.name}</h3>
              <p className="text-sm text-gray-600">{genre.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreList;
