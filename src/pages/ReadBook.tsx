
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { books } from '@/data/books';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Menu, Bookmark, MinusCircle, PlusCircle, X } from 'lucide-react';

const ReadBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);
  const [fontSize, setFontSize] = useState(18);
  const [showControls, setShowControls] = useState(true);

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

  // For this demo, we'll use the preview content or a placeholder
  const bookContent = book.previewContent || 'इस पुस्तक का कंटेंट अभी उपलब्ध नहीं है।';
  
  const increaseFontSize = () => {
    if (fontSize < 32) setFontSize(fontSize + 2);
  };
  
  const decreaseFontSize = () => {
    if (fontSize > 14) setFontSize(fontSize - 2);
  };

  return (
    <Layout>
      {/* Reading Controls */}
      <div className={`fixed top-0 left-0 right-0 bg-white shadow-md z-20 transition-transform duration-300 ${showControls ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate(`/book/${book.id}`)}>
                <ChevronLeft className="h-5 w-5 mr-1" />
                वापस
              </Button>
              
              <h2 className="text-lg font-semibold hindi-heading hidden md:block">
                {book.title} - {book.author.name}
              </h2>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={decreaseFontSize} disabled={fontSize <= 14}>
                <MinusCircle className="h-5 w-5" />
              </Button>
              
              <span className="text-sm">फ़ॉन्ट आकार</span>
              
              <Button variant="ghost" size="sm" onClick={increaseFontSize} disabled={fontSize >= 32}>
                <PlusCircle className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Bookmark className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm" onClick={() => setShowControls(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reading Area */}
      <div 
        className="min-h-screen bg-earth-50 pt-16 pb-16 px-4 md:px-0 cursor-pointer" 
        onClick={() => setShowControls(!showControls)}
      >
        <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-12 my-8">
          <h1 className="text-3xl font-bold mb-6 text-center hindi-heading">{book.title}</h1>
          <h2 className="text-xl mb-8 text-center text-gray-700 hindi-heading">{book.author.name}</h2>
          
          <div 
            className="prose prose-lg max-w-none hindi-heading" 
            style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}
          >
            <p className="whitespace-pre-line">{bookContent}</p>
            
            {book.availability === 'preview' && (
              <div className="my-10 p-6 bg-earth-50 border border-earth-200 rounded-lg text-center">
                <p className="mb-4 font-medium">यह एक पूर्वावलोकन है। पूरी पुस्तक पढ़ने के लिए कृपया साइन अप करें।</p>
                <Button className="bg-sahitya-500 hover:bg-sahitya-600 text-white">
                  साइन अप करें
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Show control button when controls are hidden */}
      {!showControls && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="fixed top-4 right-4 bg-white/80 backdrop-blur-sm shadow-md z-20"
          onClick={(e) => {
            e.stopPropagation();
            setShowControls(true);
          }}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
    </Layout>
  );
};

export default ReadBook;
