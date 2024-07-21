import { useState } from 'react';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Carousel from '../components/Carousel';
import Footer from '../components/footer';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, imgSrc: '/1.png', price: '$19.99' },
    { id: 2, imgSrc: '/1.png', price: '$29.99' },
    { id: 3, imgSrc: '/2.jpeg', price: '$39.99' },
    { id: 4, imgSrc: '/2.jpeg', price: '$49.99' },
    { id: 5, imgSrc: '/1.png', price: '$19.99' },
    { id: 6, imgSrc: '/1.png', price: '$29.99' },
    { id: 7, imgSrc: '/2.jpeg', price: '$39.99' },
    { id: 8, imgSrc: '/2.jpeg', price: '$49.99' },
 
  ];

  const carouselImages = [
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/1.png',
    '/2.jpeg',
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 lg:px-12 pt-24">
        <div className="mt-12">
          {/* <h1 className="text-4xl font-bold text-zinc-600 animate-bounce text-center ">Discover Your Perfect Pair!</h1> */}
          
        </div>

        <Carousel images={carouselImages} />
        <div className="mt-12">
          <h1 className="text-4xl font-bold text-zinc-600 animate-bounce text-center ">Display for Your Convience</h1>
          
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {products.map(product => (
    <div
      key={product.id}
      className="border border-transparent rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow hover:border-gray-100 transition duration-300"
      onClick={() => handleProductClick(product)}
    >
      <img
        src={product.imgSrc}
        alt={`Product ${product.id}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-xl font-semibold text-gray-800">{product.price}</p>
      </div>
    </div>
  ))}
</div>

      </main>

      <Modal product={selectedProduct} onClose={handleCloseModal} />

      <Footer />
    </div>
  );
}
