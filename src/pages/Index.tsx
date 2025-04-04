
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import GenreList from '@/components/GenreList';
import AuthorList from '@/components/AuthorList';

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Hero />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <FeaturedBooks />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <GenreList />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <AuthorList />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
