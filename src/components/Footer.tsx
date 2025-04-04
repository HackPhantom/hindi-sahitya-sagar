
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 hindi-heading">हिंदी साहित्य पुस्तकालय</h3>
            <p className="text-earth-100">
              भारतीय साहित्य की समृद्ध विरासत का एक डिजिटल संग्रह, जहां आप हिंदी की महान रचनाओं का आनंद ले सकते हैं।
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hindi-heading">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-earth-100 hover:text-sahitya-300 transition-colors">मुख्य पृष्ठ</Link></li>
              <li><Link to="/books" className="text-earth-100 hover:text-sahitya-300 transition-colors">पुस्तकें</Link></li>
              <li><Link to="/authors" className="text-earth-100 hover:text-sahitya-300 transition-colors">लेखक</Link></li>
              <li><Link to="/genres" className="text-earth-100 hover:text-sahitya-300 transition-colors">श्रेणियाँ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hindi-heading">संपर्क</h3>
            <p className="text-earth-100 mb-2">
              हमें अपनी प्रतिक्रिया दें या सुझाव भेजें
            </p>
            <div className="flex items-center mt-4">
              <input
                type="email"
                placeholder="आपका ईमेल"
                className="px-4 py-2 rounded-l-md focus:outline-none text-gray-800 w-full"
              />
              <button className="bg-sahitya-500 hover:bg-sahitya-600 px-4 py-2 rounded-r-md transition-colors">
                भेजें
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-earth-700 text-center text-earth-300">
          <p>© 2025 हिंदी साहित्य पुस्तकालय। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
