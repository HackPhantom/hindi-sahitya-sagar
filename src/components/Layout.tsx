
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LanguageNavbar from './LanguageNavbar';
import { LanguageProvider } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Add subtle animation when page loads
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-earth-50 to-white">
        <LanguageNavbar />
        <Navbar />
        <main className="flex-grow opacity-0 animate-fade-in">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
