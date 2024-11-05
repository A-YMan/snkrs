import React from 'react';
import { Search, ShoppingCart, Menu, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import TrendingSection from './components/TrendingSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <TrendingSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;