import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const CheckoutForm = ({ cart, totalBill, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const router = useRouter();

  const handleConfirmClick = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('Cart:', cart);
    console.log('Total Bill:', totalBill);

    // Clear the cart data from cookies
    Cookies.remove('cart');
    
    // Show thank-you modal
    setShowThankYouModal(true);

    // Clear cart data from state (if applicable)
    // Assuming you have a method to clear the cart in your context
    // clearCart();

    // Redirect to home page after a delay
    setTimeout(() => {
        router.reload();
      
    }, 3000);
    
  };

  return (
    <>
      {showThankYouModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative">
            <h2 className="text-xl font-bold mb-4">Thank You, {name}!</h2>
            <p className="text-gray-700">
              Thank you for confirming your order! Your team will get a confirmation message at your contact number ({phoneNumber}) shortly.
            </p>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative">
            <h2 className="text-xl font-bold mb-4">Checkout Form</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Products:</h3>
              {cart.map((product, index) => (
                <p key={index} className="text-gray-700">{`Product ${product.id}: ${product.price}`}</p>
              ))}
              <p className="text-lg font-bold text-gray-800 mt-2">Total Bill: ${totalBill.toFixed(2)}</p>
            </div>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={onCancel} 
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmClick} 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
