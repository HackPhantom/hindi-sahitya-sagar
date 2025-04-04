
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import GenreList from '@/components/GenreList';
import AuthorList from '@/components/AuthorList';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedBooks />
      <GenreList />
      <AuthorList />
    </Layout>
  );
};

export default Index;
