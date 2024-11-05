import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80"
          alt="Hero sneakers"
        />
        <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          New Collection
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover the latest sneaker releases and trending styles. Shop exclusive drops and classic favorites.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}