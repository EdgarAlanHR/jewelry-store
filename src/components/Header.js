import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <a href="/">Jewelry Store</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="/products" className="text-gray-700 hover:text-gray-900">Products</a></li>
            <li><a href="/custom-design" className="text-gray-700 hover:text-gray-900">Custom Design</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
