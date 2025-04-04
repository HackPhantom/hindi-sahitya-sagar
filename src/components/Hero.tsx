
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-sahitya-900 to-sahitya-800 text-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0zM30 30h30v30H30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hindi-heading leading-tight">
            हिंदी साहित्य पुस्तकालय
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sahitya-100">
            भारतीय साहित्य की अनमोल धरोहर, अब डिजिटल रूप में आपके लिए उपलब्ध
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mb-10">
            <Link to="/books">
              <Button size="lg" className="bg-sahitya-500 hover:bg-sahitya-600 text-white">
                पुस्तकें देखें
              </Button>
            </Link>
            <Link to="/authors">
              <Button size="lg" variant="outline" className="border-sahitya-300 text-white hover:bg-sahitya-700">
                लेखक परिचय
              </Button>
            </Link>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="पुस्तक, लेखक या विषय खोजें..." 
                className="w-full py-3 px-4 pr-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-sahitya-500 text-gray-800"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
