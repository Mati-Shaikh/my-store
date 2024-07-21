import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/cartContext';
import { ShoppingCartIcon, InformationCircleIcon } from '@heroicons/react/outline';

const Modal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose(); // Close the modal after adding to cart
  };

  const handleContinueShopping = () => {
    onClose(); // Close the modal to continue shopping
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6 pt-12">
          <img
            src={product.imgSrc}
            alt={`Product ${product.id}`}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{product.price}</h2>
          <p className="mt-4 text-gray-700">
            This is the description for product {product.id}. Add detailed information about the product here.
          </p>

          <div className="mt-6 flex justify-around">
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              <ShoppingCartIcon className="w-6 h-6 mr-2" />
              Add to Cart
            </button>
            <button
              onClick={handleContinueShopping}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              <InformationCircleIcon className="w-6 h-6 mr-2" />
              Continue Shopping
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
