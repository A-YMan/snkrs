import React from 'react';

const products = [
  {
    id: 1,
    name: 'Nike Air Max Plus',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Adidas Ultra Boost',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Jordan 1 Retro High',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'New Balance 990v5',
    price: 184.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Quick View
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}