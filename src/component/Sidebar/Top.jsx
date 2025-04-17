import React from 'react';
import { FaInfoCircle, FaHome, FaBuilding, FaShoppingCart } from 'react-icons/fa';

function Top() {
  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center gap-6">
      <div className="card w-full sm:w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <div className="card-icon text-blue-500 text-4xl mb-4">
          <FaHome />
        </div>
        <div className="card-details text-center">
          <p className="text-title text-lg font-bold mb-2">Website Visit</p>
          <p className="text-body text-gray-600">Explore properties available for visits.</p>
        </div>
        <button className="card-button mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          More Info
        </button>
      </div>

      {/* Card 2 */}
      <div className="card w-full sm:w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <div className="card-icon text-green-500 text-4xl mb-4">
          <FaBuilding />
        </div>
        <div className="card-details text-center">
          <p className="text-title text-lg font-bold mb-2">Commercial Spaces</p>
          <p className="text-body text-gray-600">Find the best commercial spaces for your business.</p>
        </div>
        <button className="card-button mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          More Info
        </button>
      </div>

      {/* Card 3 */}
      <div className="card w-full sm:w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <div className="card-icon text-purple-500 text-4xl mb-4">
          <FaShoppingCart />
        </div>
        <div className="card-details text-center">
          <p className="text-title text-lg font-bold mb-2">Shopping Deals</p>
          <p className="text-body text-gray-600">Discover amazing shopping deals and offers.</p>
        </div>
        <button className="card-button mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
          More Info
        </button>
      </div>

      {/* Card 4 */}
      <div className="card w-full sm:w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <div className="card-icon text-red-500 text-4xl mb-4">
          <FaInfoCircle />
        </div>
        <div className="card-details text-center">
          <p className="text-title text-lg font-bold mb-2">General Info</p>
          <p className="text-body text-gray-600">Get all the information you need in one place.</p>
        </div>
        <button className="card-button mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Top;