import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Heart, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="sm:hidden -ml-2 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="text-2xl font-bold">SNKRS</div>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600">New</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Men</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Women</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Kids</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Sale</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search size={20} />
            </button>
            <button className="p-2">
              <Heart size={20} />
            </button>
            <button className="p-2">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-900">New</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Men</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Women</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Kids</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Sale</a>
          </div>
        </div>
      )}
    </nav>
  );
}