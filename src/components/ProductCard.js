import React from 'react';
import { FaCube } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white shadow-lg rounded-lg p-4">
      <div className="product-image">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="product-3d-icon">
          <FaCube className="text-gray-500 text-3xl" />
        </div>
      </div>
      <div className="product-info mt-4">
        <h3 className="product-name text-lg font-semibold">{product.name}</h3>
        <p className="product-price text-gray-600">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
