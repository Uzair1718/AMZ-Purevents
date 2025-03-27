import React from 'react';
import Hero from '../components/Hero';
import { Services } from '../components/Services';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
    </div>
  );
};