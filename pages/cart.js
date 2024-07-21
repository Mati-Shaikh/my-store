import { useState, useEffect } from 'react';
import { useCart } from '../context/cartContext';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import CheckoutForm from '../components/CheckoutForm';
import Footer from '../components/footer';


export default function Cart() {
  const { cart } = useCart();
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  useEffect(() => {
    // Calculate the total amount
    const total = cart.reduce((sum, product) => sum + parseFloat(product.price.replace('$', '')), 0);
    setTotalAmount(total);

    // Calculate the total bill after applying discount
    const bill = total - (total * discount / 100);
    setTotalBill(bill);
  }, [cart, discount]);

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
  };

  const handleCancelClick = () => {
    setShowCheckoutForm(false);
  };

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 lg:px-12 pt-24">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-zinc-600">Cart Page</h1>
          <p className="text-zinc-600 font-light mt-2">
            This is the Cart page.
          </p>
        </div>

        {/* Display Cart Items */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((product, index) => (
              <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={product.imgSrc}
                  alt={`Product ${product.id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold">{`Product ${product.id}`}</h2>
                  <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/">
            <a className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
              Continue Shopping
            </a>
          </Link>
        </div>
      </main>

      {/* Fixed Summary Card */}
      <div className="fixed bottom-0 right-0 m-8 p-6 bg-white shadow-lg rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="mb-2">
          <p className="text-gray-700">Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
        <div className="mb-2">
          <label htmlFor="discount" className="block text-gray-700">Discount (%):</label>
          <input
            type="number"
            id="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-700">Total Bill: ${totalBill.toFixed(2)}</p>
        </div>
        <button 
          onClick={handleCheckoutClick}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Checkout
        </button>
      </div>

      {showCheckoutForm && (
        <CheckoutForm 
          cart={cart} 
          totalBill={totalBill} 
          onCancel={handleCancelClick} 
        />
      )}
      <Footer/>
    </div>
  );
}
