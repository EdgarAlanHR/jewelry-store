import React from 'react';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const products = [
  { id: 1, name: 'Gold Chain', price: '$100', image: 'gold-chain.jpg' },
  { id: 2, name: 'Silver Chain', price: '$80', image: 'silver-chain.jpg' },
  { id: 3, name: 'Platinum Chain', price: '$150', image: 'platinum-chain.jpg' },
  // Add more products as needed
];

const ProductGallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll('.product-card');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('fade-in');
        }, index * 200);
      });
    }
  }, [inView]);

  return (
    <div className="product-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="product-card opacity-0" ref={ref}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
