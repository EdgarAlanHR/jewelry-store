import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ChainModel from './ChainModel';

const CustomChainDesign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    chainType: '',
    length: '',
    material: '',
    designDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="custom-chain-design bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Custom Chain Design</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="chainType" className="block text-sm font-medium text-gray-700">Chain Type</label>
          <input
            type="text"
            id="chainType"
            name="chainType"
            value={formData.chainType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">Length</label>
          <input
            type="text"
            id="length"
            name="length"
            value={formData.length}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
          <input
            type="text"
            id="material"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="designDetails" className="block text-sm font-medium text-gray-700">Design Details</label>
          <textarea
            id="designDetails"
            name="designDetails"
            value={formData.designDetails}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="chain-model mt-8">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <ChainModel />
        </Canvas>
      </div>
    </div>
  );
};

export default CustomChainDesign;
